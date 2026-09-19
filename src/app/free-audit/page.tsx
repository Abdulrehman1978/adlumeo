import { Metadata } from "next";
import AuditForm from "@/components/forms/AuditForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Free Social Growth Audit // Strategic Teardown",
  description:
    "Claim your free, customized social media growth audit. We diagnose hook drop-off leaks, audience reach bottlenecks, and ROAS multipliers.",
};

export default function FreeAuditPage() {
  const whatsappUrl = siteConfig.contact.whatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`
    : "#";

  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            PRIMARY CONVERSION // STRATEGIC TEARDOWN
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            CLAIM YOUR FREE GROWTH AUDIT.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-3xl mt-4">
            No automated generic reports. Our creative and media strategists record a customized video teardown diagnosing your hook retention drop-offs, missed audience reach, and ad scaling opportunities.
          </p>
        </div>

        {/* Audit Form & Fast-Track Desk Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <AuditForm />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="p-8 bg-surface-container-low border border-white/10 flex flex-col gap-4">
              <span className="font-label-technical text-xs text-primary-container uppercase font-bold tracking-wider">
                WHAT YOU WILL RECEIVE
              </span>
              <ul className="flex flex-col gap-3 font-body-sm text-sm text-white/90">
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-container font-bold">01</span>
                  <span><strong>1.2-Second Hook Diagnostic:</strong> Exact analysis of where and why viewers swipe past your content.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-container font-bold">02</span>
                  <span><strong>Profile Aesthetic Syntax:</strong> Evaluation of your visual branding, grid coherence, and cultural authority.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-container font-bold">03</span>
                  <span><strong>Paid Media Vector Framework:</strong> Recommended Advantage+ testing roadmap to turn organic attention into predictable pipeline.</span>
                </li>
              </ul>
            </div>

            {/* Direct Escalation */}
            <div className="p-8 bg-surface-container-high border border-white/10 flex flex-col gap-4 font-label-technical">
              <span className="text-xs uppercase text-on-surface-variant font-bold tracking-wider">
                FAST-TRACK IMMINENT LAUNCHES
              </span>
              <p className="font-body-sm text-sm text-on-surface-variant font-sans">
                Preparing a major funding milestone, capsule drop, or product announcement within 14 days? Connect with our team directly:
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <a
                  href={whatsappUrl}
                  target={siteConfig.contact.whatsapp ? "_blank" : undefined}
                  rel={siteConfig.contact.whatsapp ? "noopener noreferrer" : undefined}
                  className="p-4 bg-black text-white hover:text-primary-container border border-white/15 flex items-center justify-between transition-colors"
                >
                  <span className="text-xs font-bold uppercase">WhatsApp Fast-Track</span>
                  <span>💬</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="p-4 bg-black text-white hover:text-primary-container border border-white/15 flex items-center justify-between transition-colors"
                >
                  <span className="text-xs font-bold uppercase">{siteConfig.contact.email}</span>
                  <span>✉️</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
