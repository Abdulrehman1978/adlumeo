import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";
import { contactFormSchema } from "@/lib/validation";
import { rateLimiter } from "@/lib/rate-limit";
import { sendLeadNotifications } from "@/lib/email";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      req.headers.get("x-real-ip") ||
      "127.0.0.1";

    const rateLimit = await rateLimiter.limit(`contact_${ip}`);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          error: "Too many contact inquiries submitted. Please wait a minute before submitting again.",
        },
        { status: 429 }
      );
    }

    const body = await req.json().catch(() => null);
    if (!body) {
      return NextResponse.json({ error: "Invalid request payload." }, { status: 400 });
    }

    const validationResult = contactFormSchema.safeParse(body);
    if (!validationResult.success) {
      const firstError = validationResult.error.errors[0]?.message || "Validation error";
      return NextResponse.json({ error: firstError }, { status: 400 });
    }

    const data = validationResult.data;

    if (data.hp_website_field && data.hp_website_field.length > 0) {
      return NextResponse.json(
        { success: true, message: "Inquiry received." },
        { status: 200 }
      );
    }

    const lead = await db.lead.create({
      data: {
        fullName: data.name,
        businessName: data.company || data.name,
        email: data.email,
        phone: data.phone || null,
        marketingGoal: data.service || null,
        budgetRange: data.budget || null,
        message: data.message,
        source: "contact",
        status: "new",
      },
    });

    sendLeadNotifications({
      type: "contact",
      fullName: data.name,
      businessName: data.company || data.name,
      email: data.email,
      phone: data.phone,
      marketingGoal: data.service,
      budgetRange: data.budget,
      message: data.message,
    }).catch((err) => console.error("[CONTACT NOTIFICATION BACKGROUND ERROR]", err));

    return NextResponse.json(
      {
        success: true,
        message: "Message received. Our studio desk will contact you shortly.",
        id: lead.id,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("[API CONTACT ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while transmitting your message. Please try again." },
      { status: 500 }
    );
  }
}
