export interface EmailPayload {
  to: string;
  subject: string;
  text: string;
  html?: string;
}

export interface IEmailService {
  send(payload: EmailPayload): Promise<{ success: boolean; messageId?: string; error?: string }>;
}

class TransactionalEmailService implements IEmailService {
  private apiKey = process.env.EMAIL_API_KEY;
  private from = process.env.EMAIL_FROM || "ADLUMEO <notifications@adlumeo.com>";

  async send(payload: EmailPayload): Promise<{ success: boolean; messageId?: string; error?: string }> {
    // In local development or if no API key is set, safely log to console
    if (!this.apiKey) {
      console.log(`[EMAIL DISPATCH MOCK] To: ${payload.to} | Subject: ${payload.subject}`);
      console.log(`[EMAIL BODY]:\n${payload.text}\n---`);
      return { success: true, messageId: `mock-${Date.now()}` };
    }

    try {
      // Standard HTTP dispatch (e.g. Resend API compatible)
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: this.from,
          to: payload.to,
          subject: payload.subject,
          text: payload.text,
          html: payload.html || payload.text,
        }),
      });

      if (!res.ok) {
        const errText = await res.text();
        console.error("[EMAIL ERROR]", errText);
        return { success: false, error: errText };
      }

      const data = await res.json();
      return { success: true, messageId: data.id };
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Unknown email transmission error";
      console.error("[EMAIL EXCEPTION]", message);
      return { success: false, error: message };
    }
  }
}

export const emailService = new TransactionalEmailService();

// Notification helpers
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
}) {
  const agencyRecipient = process.env.LEAD_NOTIFICATION_EMAIL || "director@adlumeo.com";

  // 1. Agency alert
  const agencySubject =
    type === "free_audit"
      ? `[NEW AUDIT REQUEST] ${businessName} (${email})`
      : `[NEW INQUIRY] ${fullName} from ${businessName}`;

  const agencyText = `
ADLUMEO Lead Notification
-------------------------
Source: ${type === "free_audit" ? "Free Social Growth Audit" : "General Contact Inquiry"}
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

  await emailService.send({
    to: agencyRecipient,
    subject: agencySubject,
    text: agencyText,
  });

  // 2. Client receipt confirmation
  const clientSubject =
    type === "free_audit"
      ? "ADLUMEO — Social Growth Audit Request Received"
      : "ADLUMEO — Inquiry Received";

  const clientText =
    type === "free_audit"
      ? `
Hello ${fullName || "there"},

Thanks for requesting an ADLUMEO Social Growth Audit for ${businessName}.

We have received your profile details. Our creative and performance strategists will review your current presence, hook cadence, and positioning. We will be in touch using the contact details provided.

Best regards,
The ADLUMEO Team
Attention into Growth.
https://adlumeo.com
      `.trim()
      : `
Hello ${fullName || "there"},

Thank you for reaching out to ADLUMEO.

We have received your message regarding ${businessName}. A member of our executive desk will review your brief and follow up with you directly.

Best regards,
The ADLUMEO Team
https://adlumeo.com
      `.trim();

  await emailService.send({
    to: email,
    subject: clientSubject,
    text: clientText,
  });
}
