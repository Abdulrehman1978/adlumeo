import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Protocol // Legal",
  description: "Privacy policy and data governance protocols for ADLUMEO.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="border-b border-white/10 pb-8">
          <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest block mb-2">
            LEGAL PROTOCOL // DATA GOVERNANCE
          </span>
          <h1 className="font-display-hero text-4xl sm:text-6xl font-black uppercase text-white">
            PRIVACY PROTOCOL.
          </h1>
          <p className="font-label-technical text-xs text-on-surface-variant mt-2">
            Effective Date: {new Date().getFullYear()} • Version 1.0
          </p>
        </div>

        <div className="flex flex-col gap-8 text-on-surface-variant font-body-md text-base leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              01 // INTRODUCTION
            </h2>
            <p>
              {siteConfig.legalName} (&ldquo;ADLUMEO&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your privacy and is committed to protecting the personal data submitted through our website and audit diagnostic forms. This protocol describes our practices concerning data collection, processing, and storage.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              02 // DATA WE COLLECT
            </h2>
            <p>
              When you submit a request for a Free Social Growth Audit or general business inquiry, we collect information including your name, business/company name, work email address, phone/WhatsApp contact, social media profile links, estimated ad budget, and message context.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              03 // HOW WE USE YOUR DATA
            </h2>
            <p>
              Collected data is utilized strictly to:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-white/90">
              <li>Record and deliver your requested social growth audit video and teardown.</li>
              <li>Communicate directly regarding strategic agency partnerships and proposals.</li>
              <li>Maintain internal business records and prevent automated spam submissions.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your contact information to third-party brokers under any circumstances.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              04 // DATA RETENTION &amp; SECURITY
            </h2>
            <p>
              Submissions are stored in secure databases protected by industry-standard encryption in transit and at rest. We retain inquiry information only for as long as necessary to fulfill commercial discussions.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              05 // CONTACT &amp; DATA SUBJECT RIGHTS
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of your personal data. Direct all privacy inquiries to{" "}
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
