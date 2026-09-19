import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auditFormSchema } from "@/lib/validation";
import { rateLimiter } from "@/lib/rate-limit";
import { sendLeadNotifications, getNotificationStatus } from "@/lib/email";
import { validateServerEnv, serverEnv } from "@/lib/env";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    // 0. Validate server environment: block production with 503 if critical storage is unconfigured
    const envStatus = validateServerEnv();
    if (serverEnv.isProduction && !envStatus.valid) {
      return NextResponse.json(
        {
          error:
            "Lead capture service is temporarily unavailable due to missing storage configuration. Please contact us directly or try again later.",
        },
        { status: 503 }
      );
    }

    // 1. Extract IP for rate limiting
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    // 2. Rate limiting check
    const rateLimit = await rateLimiter.limit(`audit_${ip}`);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Too many audit requests submitted. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    // 3. Parse & Validate input
    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const validationResult = auditFormSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]?.message || "Validation error";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = validationResult.data;

    // 4. Honeypot check for bots
    if (data.hp_company_field && data.hp_company_field.length > 0) {
      return NextResponse.json(
        { success: true, message: "Audit request received." },
        { status: 200 }
      );
    }

    // 5. Persist Lead in Database
    const lead = await db.lead.create({
      data: {
        fullName: data.fullName,
        businessName: data.businessName,
        email: data.email,
        phone: data.phone || null,
        socialUrl: data.socialUrl || null,
        website: data.website || null,
        industry: data.industry || null,
        marketingGoal: data.marketingGoal || null,
        budgetRange: null,
        message: data.message || null,
        source: "free_audit",
        status: "new",
        notificationInternalStatus: "pending",
        notificationClientStatus: "pending",
      },
    });

    // 6. Await transactional email notifications & update tracking
    try {
      const notificationResult = await sendLeadNotifications({
        type: "free_audit",
        fullName: data.fullName,
        businessName: data.businessName,
        email: data.email,
        phone: data.phone,
        socialUrl: data.socialUrl,
        marketingGoal: data.marketingGoal,
        message: data.message,
      });

      if (notificationResult) {
        const internalStatus = getNotificationStatus(notificationResult.internal);
        const clientStatus = getNotificationStatus(notificationResult.client);

        await db.lead.update({
          where: { id: lead.id },
          data: {
            notificationInternalStatus: internalStatus,
            notificationInternalError: notificationResult.internal.error || null,
            notificationClientStatus: clientStatus,
            notificationClientError: notificationResult.client.error || null,
            notificationAttemptedAt: new Date(),
          },
        });
      }
    } catch (notifErr) {
      console.error("[AUDIT NOTIFICATION DISPATCH ERROR]", notifErr);
      try {
        const errMsg = notifErr instanceof Error ? notifErr.message : "Unexpected notification dispatch error";
        await db.lead.update({
          where: { id: lead.id },
          data: {
            notificationInternalStatus: "failed",
            notificationInternalError: errMsg,
            notificationClientStatus: "failed",
            notificationClientError: errMsg,
            notificationAttemptedAt: new Date(),
          },
        });
      } catch (updateErr) {
        console.error("[AUDIT LEAD STATUS UPDATE ON ERROR FAILED]", updateErr);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Audit request received. We will review your profile and contact you.",
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API AUDIT ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your audit request. Please try again." },
      { status: 500 }
    );
  }
}
