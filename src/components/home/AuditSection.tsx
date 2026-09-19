import { siteConfig } from "@/config/site";
import AuditForm from "@/components/forms/AuditForm";

export default function AuditSection() {
  const whatsappUrl = siteConfig.contact.whatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`
    : "#contact-desk";

  return (
    <section
      id="audit-suite"
      className="w-full bg-primary-container text-black px-margin-mobile md:px-margin pt-28 pb-20 selection:bg-black selection:text-primary-container relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Typographic Crescendo */}
        <div className="border-b-2 border-black pb-12">
          <span className="font-label-technical text-xs uppercase tracking-widest font-black block mb-4">
            [ THE POINT OF DECISION ]
          </span>
          <h2 className="font-display-hero text-[9vw] sm:text-[7vw] lg:text-[5.5vw] font-black uppercase leading-[0.88] tracking-tighter">
            YOUR AUDIENCE IS ALREADY SCROLLING. <br />
            GIVE THEM A REASON TO STOP. <br />
            <span className="underline decoration-4 underline-offset-8">
              LET&apos;S MAKE THEM NOTICE.
            </span>
          </h2>
        </div>

        {/* Conversion Grid: Form + Direct Escalation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-desk">
          {/* Form Left Column */}
          <div className="lg:col-span-7">
            <AuditForm />
          </div>

          {/* Direct Escalation Right Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-8 text-black">
            <div>
              <span className="font-label-technical text-xs uppercase tracking-widest font-bold block mb-2">
                [ FAST-TRACK TRANSMISSION ]
              </span>
              <h3 className="font-display-hero text-3xl font-black uppercase">
                NEED IMMEDIATE STRATEGIC ALIGNMENT?
              </h3>
              <p className="font-body-md text-base mt-2 font-medium">
                If you are preparing an imminent brand launch, funding announcement, or major product drop within 14 days, bypass standard queues:
              </p>
            </div>

            <div className="flex flex-col gap-4 font-label-technical">
              {/* WhatsApp Fast Track */}
              <a
                href={whatsappUrl}
                target={siteConfig.contact.whatsapp ? "_blank" : undefined}
                rel={siteConfig.contact.whatsapp ? "noopener noreferrer" : undefined}
                className="p-6 bg-black text-white hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-between group shadow-lg"
              >
                <div>
                  <span className="text-xs uppercase text-primary-container group-hover:text-black transition-colors block">
                    Instant Pipeline
                  </span>
                  <span className="text-xl font-bold uppercase">WhatsApp Fast-Track</span>
                  <span className="text-xs block opacity-70 mt-1">
                    {siteConfig.contact.whatsapp || "Configurable in siteConfig"}
                  </span>
                </div>
                <span className="text-3xl group-hover:translate-x-1 transition-transform">💬</span>
              </a>

              {/* Studio Desk Email */}
              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="p-6 bg-black text-white hover:bg-white hover:text-black hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-between group shadow-lg"
              >
                <div>
                  <span className="text-xs uppercase text-primary-container group-hover:text-black transition-colors block">
                    Direct Executive Desk
                  </span>
                  <span className="text-xl font-bold uppercase">Studio Briefings</span>
                  <span className="text-xs block opacity-70 mt-1">{siteConfig.contact.email}</span>
                </div>
                <span className="text-3xl group-hover:translate-x-1 transition-transform">✉️</span>
              </a>
            </div>

            <div className="p-4 border-2 border-black font-label-technical text-xs font-bold uppercase hover:bg-black hover:text-primary-container transition-colors duration-300">
              Direct Executive Review on All Inbound Briefs // Confidential NDA Standard.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
