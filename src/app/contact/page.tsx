import { Metadata } from "next";
import ContactForm from "@/components/forms/ContactForm";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact & Studio Desks // Executive Briefings",
  description:
    "Direct executive channels to connect with ADLUMEO for short-form production, paid media, and social media retainers.",
};

export default function ContactPage() {
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
            EXECUTIVE DESKS // INBOUND PIPELINE
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl font-black uppercase text-white tracking-tight">
            GET IN TOUCH.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-4">
            We partner with a selective roster of ambitious consumer, luxury, and technology brands. Transmit an executive brief below.
          </p>
        </div>

        {/* Contact Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="p-8 bg-surface-container-low border border-white/10 flex flex-col gap-4 font-label-technical">
              <span className="text-xs text-primary-container uppercase font-bold tracking-wider">
                DIRECT CHANNELS
              </span>
              <p className="font-body-sm text-sm text-on-surface-variant font-sans">
                Prefer immediate direct communication? Use our studio desks:
              </p>

              <div className="flex flex-col gap-3 mt-2">
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="p-4 bg-surface-container hover:bg-white hover:text-black border border-white/15 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <span className="text-[10px] text-primary-container group-hover:text-black uppercase block font-bold">
                      Studio Briefs
                    </span>
                    <span className="text-sm font-bold">{siteConfig.contact.email}</span>
                  </div>
                  <span>✉️</span>
                </a>

                <a
                  href={whatsappUrl}
                  target={siteConfig.contact.whatsapp ? "_blank" : undefined}
                  rel={siteConfig.contact.whatsapp ? "noopener noreferrer" : undefined}
                  className="p-4 bg-surface-container hover:bg-white hover:text-black border border-white/15 flex items-center justify-between transition-colors group"
                >
                  <div>
                    <span className="text-[10px] text-primary-container group-hover:text-black uppercase block font-bold">
                      WhatsApp Pipeline
                    </span>
                    <span className="text-sm font-bold">Fast-Track Alignment</span>
                  </div>
                  <span>💬</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-surface-container-high border-l-4 border-primary-container">
              <span className="font-label-technical text-xs text-primary-container uppercase font-bold block mb-1">
                CONFIDENTIALITY PROTOCOL
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed font-sans">
                All pre-launch materials, pitch decks, campaign concepts, and customer numbers shared with ADLUMEO remain protected under mutual non-disclosure standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
