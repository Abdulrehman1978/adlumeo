import { Metadata } from "next";
import AuditForm from "@/components/forms/AuditForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Social Growth Audit | ADLUMEO",
  description:
    "Request a free review of your social presence, content strategy and growth opportunities. Clear, actionable feedback with zero pushy sales pitches.",
};

export default function FreeAuditPage() {
  const hasWhatsapp = Boolean(siteConfig.contact.whatsapp);
  const hasEmail = Boolean(siteConfig.contact.email);
  const whatsappUrl = hasWhatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`
    : "";

  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            COMPLIMENTARY REVIEW // SOCIAL PRESENCE
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            GET YOUR FREE SOCIAL AUDIT.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-3xl mt-4">
            We&apos;ll review your brand&apos;s current social presence, content formats, and growth opportunities. No pushy sales pitch—just practical feedback on what we would improve.
          </p>
        </div>

        {/* Audit Form & Contact Desk Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <AuditForm />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 bg-surface-container-low border border-white/10 flex flex-col gap-4">
              <span className="font-label-technical text-xs text-primary-container uppercase font-bold tracking-wider">
                WHAT WE LOOK AT
              </span>
              <ul className="flex flex-col gap-3 font-body-sm text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-container font-bold">01</span>
                  <span><strong>Hook &amp; Retention Quality:</strong> How effectively your short-form videos grab and hold attention in the first 3 seconds.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-container font-bold">02</span>
                  <span><strong>Content &amp; Profile Clarity:</strong> Whether your bio, visuals, and messaging clearly communicate what you do and why it matters.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-container font-bold">03</span>
                  <span><strong>Paid Media &amp; Funnel Opportunities:</strong> Where paid ads, retargeting, or lead capture could turn attention into customers.</span>
                </li>
              </ul>
            </div>

            {/* Direct Escalation */}
            {(hasWhatsapp || hasEmail) && (
              <div className="p-8 bg-surface-container-high border border-white/10 flex flex-col gap-4 font-label-technical">
                <span className="text-xs uppercase text-on-surface-variant font-bold tracking-wider">
                  PREFER DIRECT COMMUNICATION?
                </span>
                <p className="font-body-sm text-sm text-on-surface-variant font-sans">
                  If you have an upcoming product launch or want to connect immediately:
                </p>

                <div className="flex flex-col gap-3 mt-2">
                  {hasWhatsapp && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-black text-white hover:text-primary-container border border-white/15 flex items-center justify-between transition-colors"
                    >
                      <span className="text-xs font-bold uppercase">Chat on WhatsApp</span>
                      <span>💬</span>
                    </a>
                  )}
                  {hasEmail && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="p-4 bg-black text-white hover:text-primary-container border border-white/15 flex items-center justify-between transition-colors"
                    >
                      <span className="text-xs font-bold uppercase">{siteConfig.contact.email}</span>
                      <span>✉️</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
