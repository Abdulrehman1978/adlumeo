import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact ADLUMEO | Start a Conversation",
  description:
    "Connect directly with ADLUMEO to discuss social media management, content creation, and paid advertising growth.",
};

export default function ContactPage() {
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
            CONNECT WITH ADLUMEO // DIRECT CHANNELS
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            GET IN TOUCH.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-4">
            We work with ambitious businesses and brands that want to turn social attention into measurable growth.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            {(hasEmail || hasWhatsapp) && (
              <div className="p-8 bg-surface-container-low border border-white/10 flex flex-col gap-4 font-label-technical">
                <span className="text-xs text-primary-container uppercase font-bold tracking-wider">
                  DIRECT CONTACT
                </span>
                <p className="font-body-sm text-sm text-on-surface-variant font-sans">
                  Prefer immediate direct communication? Reach out directly:
                </p>

                <div className="flex flex-col gap-3 mt-2">
                  {hasEmail && (
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="p-4 bg-surface-container hover:bg-white hover:text-black border border-white/15 flex items-center justify-between transition-colors group"
                    >
                      <div>
                        <span className="text-[10px] text-primary-container group-hover:text-black uppercase block font-bold">
                          Email
                        </span>
                        <span className="text-sm font-bold">{siteConfig.contact.email}</span>
                      </div>
                      <span>✉️</span>
                    </a>
                  )}

                  {hasWhatsapp && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-surface-container hover:bg-white hover:text-black border border-white/15 flex items-center justify-between transition-colors group"
                    >
                      <div>
                        <span className="text-[10px] text-primary-container group-hover:text-black uppercase block font-bold">
                          WhatsApp
                        </span>
                        <span className="text-sm font-bold">
                          {siteConfig.contact.whatsapp}
                        </span>
                      </div>
                      <span>💬</span>
                    </a>
                  )}
                </div>
              </div>
            )}

            <div className="p-6 bg-surface-container-high border-l-4 border-primary-container">
              <span className="font-label-technical text-xs text-primary-container uppercase font-bold block mb-1">
                CONFIDENTIALITY
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed font-sans">
                We treat pre-launch materials, campaign concepts and business information as confidential. Formal NDAs can be arranged where required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
