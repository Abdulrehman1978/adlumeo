import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms & Conditions // Legal",
  description: "Terms of engagement and service conditions for ADLUMEO.",
};

export default function TermsPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="border-b border-white/10 pb-8">
          <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest block mb-2">
            LEGAL PROTOCOL // ENGAGEMENT TERMS
          </span>
          <h1 className="font-display-hero text-4xl sm:text-6xl font-black uppercase text-white">
            TERMS &amp; CONDITIONS.
          </h1>
          <p className="font-label-technical text-xs text-on-surface-variant mt-2">
            Effective Date: {new Date().getFullYear()} • Version 1.0
          </p>
        </div>

        <div className="flex flex-col gap-8 text-on-surface-variant font-body-md text-base leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              01 // SCOPE OF ENGAGEMENT
            </h2>
            <p>
              These Terms &amp; Conditions govern access to the ADLUMEO digital properties and the provision of preliminary audits and commercial marketing proposals. Formal retainer engagements are governed by separate Master Services Agreements (MSAs).
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              02 // ADVERTISING MEDIA SPEND SEPARATION
            </h2>
            <p>
              In all paid media management contracts, advertising spend is paid directly by the client to ad networks (Meta, Google, TikTok, LinkedIn). ADLUMEO is never the merchant of record for client ad spend and charges strictly for strategy, creative production, and management services.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              03 // INTELLECTUAL PROPERTY &amp; CONCEPT WORK
            </h2>
            <p>
              All concept campaigns, spec creative frameworks, trajectory models, and case studies displayed on this website represent proprietary agency methodologies. Client-commissioned creative assets become the property of the client upon receipt of full contractual payment as defined in individual MSAs.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              04 // DISCLAIMER ON HYPOTHETICAL MODELING
            </h2>
            <p>
              Any performance benchmarks, target ROAS multipliers, or modeled reach estimates described in concept studies reflect hypothetical modeling for illustrative purposes. Past modeled targets do not guarantee future commercial returns.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              05 // INQUIRIES &amp; NOTICES
            </h2>
            <p>
              For legal inquiries or contractual clarifications, contact{" "}
              <a href={`mailto:${siteConfig.contact.email}`} className="text-primary-container underline">
                {siteConfig.contact.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
