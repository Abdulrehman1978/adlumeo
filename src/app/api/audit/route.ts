import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { auditFormSchema } from "@/lib/validation";
import { rateLimiter } from "@/lib/rate-limit";
import { sendLeadNotifications } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
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
      // Silently accept bot to prevent tuning
      return NextResponse.json(
        { success: true, message: "Audit dossier transmitted successfully." },
        { status: 200 }
      );
    }

    // 5. Persist Lead in Database
    const lead = await db.lead.create({
      data: {
        fullName: data.brand, // Brand / Contact
        businessName: data.brand,
        email: data.email,
        phone: data.phone || null,
        socialUrl: data.socialUrl || null,
        marketingGoal: data.marketingGoal || null,
        budgetRange: data.budgetRange || null,
        website: data.website || null,
        message: data.message || null,
        source: "free_audit",
        status: "new",
      },
    });

    // 6. Asynchronously trigger transactional email notifications
    sendLeadNotifications({
      type: "free_audit",
      fullName: data.brand,
      businessName: data.brand,
      email: data.email,
      phone: data.phone,
      socialUrl: data.socialUrl,
      budgetRange: data.budgetRange,
      marketingGoal: data.marketingGoal,
      message: data.message,
    }).catch((err) => console.error("[AUDIT NOTIFICATION BACKGROUND ERROR]", err));

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
      { error: "An unexpected error occurred while transmitting the audit dossier. Please try again." },
      { status: 500 }
    );
  }
}
