import { serverEnv } from "@/lib/env";
import { siteConfig } from "@/config/site";

export interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export type EmailSendResult = {
  success: boolean;
  messageId?: string;
  error?: string;
};

export function getNotificationStatus(result: EmailSendResult): "sent" | "skipped" | "failed" {
  if (result.success) return "sent";
  if (
    result.error === "EMAIL_NOT_CONFIGURED" ||
    result.error === "EMAIL_FROM_NOT_CONFIGURED" ||
    result.error === "LEAD_NOTIFICATION_EMAIL_NOT_CONFIGURED"
  ) {
    return "skipped";
  }
  return "failed";
}

// ─────────────────────────────────────────────────────────────────────────────
// Core Email Dispatcher
// ─────────────────────────────────────────────────────────────────────────────

async function dispatchEmail(payload: EmailPayload): Promise<EmailSendResult> {
  const apiKey = serverEnv.emailApiKey;
  const from = serverEnv.emailFrom;
  const isProduction = serverEnv.isProduction;

  // Development mock: no API key present
  if (!apiKey) {
    if (isProduction) {
      // Production with missing credentials: do NOT fake success
      const error =
        "EMAIL_NOT_CONFIGURED: EMAIL_API_KEY is absent in production. " +
        `Email to ${payload.to} (subject: "${payload.subject}") was NOT sent. ` +
        "Lead has been stored in the database.";
      console.error("[ADLUMEO][EMAIL]", error);
      return { success: false, error: "EMAIL_NOT_CONFIGURED" };
    }

    // Development: safe mock
    console.log(`[ADLUMEO][EMAIL MOCK] To: ${payload.to} | Subject: ${payload.subject}`);
    console.log(`[ADLUMEO][EMAIL BODY]:\n${payload.text}\n---`);
    return { success: true, messageId: `mock-${Date.now()}` };
  }

  if (!from) {
    const error = "EMAIL_NOT_CONFIGURED: EMAIL_FROM is not set. Cannot dispatch email.";
    console.error("[ADLUMEO][EMAIL]", error);
    return { success: false, error: "EMAIL_FROM_NOT_CONFIGURED" };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: payload.to,
        subject: payload.subject,
        text: payload.text,
        html: payload.html || payload.text,
      }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("[ADLUMEO][EMAIL ERROR]", errText);
      return { success: false, error: errText };
    }

    const data = await res.json();
    return { success: true, messageId: data.id };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown email transmission error";
    console.error("[ADLUMEO][EMAIL EXCEPTION]", message);
    return { success: false, error: message };
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Notification Results
// ─────────────────────────────────────────────────────────────────────────────

export type NotificationResult = {
  /** Internal agency alert (sent to LEAD_NOTIFICATION_EMAIL) */
  internal: EmailSendResult;
  /** Client confirmation (sent to the form submitter) */
  client: EmailSendResult;
};

// ─────────────────────────────────────────────────────────────────────────────
// Lead Notification Orchestrator
//
// Each send is independent. Failure of one does not prevent the other.
// Results are returned separately so the caller can track them on the Lead.
// ─────────────────────────────────────────────────────────────────────────────

export async function sendLeadNotifications({
  type,
  fullName,
  businessName,
  email,
  phone,
  socialUrl,
  budgetRange,
  marketingGoal,
  message,
}: {
  type: "free_audit" | "contact";
  fullName: string;
  businessName: string;
  email: string;
  phone?: string | null;
  socialUrl?: string | null;
  budgetRange?: string | null;
  marketingGoal?: string | null;
  message?: string | null;
}): Promise<NotificationResult> {
  const siteUrl = siteConfig.url;

  // ── 1. Internal Agency Alert ────────────────────────────────────────────────

  const agencyRecipient = serverEnv.leadNotificationEmail;
  let internalResult: EmailSendResult;

  if (!agencyRecipient) {
    const warning =
      "LEAD_NOTIFICATION_EMAIL is not configured. " +
      `Internal alert for ${email} (${businessName}) was skipped. Lead is saved.`;
    console.warn("[ADLUMEO][EMAIL]", warning);
    internalResult = { success: false, error: "LEAD_NOTIFICATION_EMAIL_NOT_CONFIGURED" };
  } else {
    const agencySubject =
      type === "free_audit"
        ? `[NEW AUDIT REQUEST] ${businessName} (${email})`
        : `[NEW ENQUIRY] ${fullName} from ${businessName}`;

    const agencyText = `
ADLUMEO Lead Notification
─────────────────────────
Source: ${type === "free_audit" ? "Free Social Growth Audit" : "General Contact Enquiry"}
Contact: ${fullName}
Business: ${businessName}
Email: ${email}
Phone: ${phone || "Not provided"}
Social Profile: ${socialUrl || "Not provided"}
Budget Range: ${budgetRange || "Not specified"}
Marketing Goal: ${marketingGoal || "Not specified"}
Message / Notes: ${message || "None"}
Received At: ${new Date().toISOString()}
    `.trim();

    internalResult = await dispatchEmail({
      to: agencyRecipient,
      subject: agencySubject,
      text: agencyText,
    });
  }

  // ── 2. Client Confirmation ──────────────────────────────────────────────────
  // Attempted independently of the internal result above.

  const clientSubject =
    type === "free_audit"
      ? "ADLUMEO — Social Growth Audit Request Received"
      : "ADLUMEO — Enquiry Received";

  const clientText =
    type === "free_audit"
      ? `Hi ${fullName || "there"},

Thanks for requesting an ADLUMEO Social Growth Audit for ${businessName}.

We've received your details and will review the social presence and information you shared.

We'll follow up using the contact details provided.

— ADLUMEO
${siteUrl}`.trim()
      : `Hi ${fullName || "there"},

Thanks for reaching out to ADLUMEO.

Your enquiry regarding ${businessName} has been received. We'll review the details and respond using the contact information you provided.

— ADLUMEO
${siteUrl}`.trim();

  const clientResult = await dispatchEmail({
    to: email,
    subject: clientSubject,
    text: clientText,
  });

  return {
    internal: internalResult,
    client: clientResult,
  };
}
