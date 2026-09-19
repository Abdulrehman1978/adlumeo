import { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Cookie Policy // Legal",
  description: "Cookie and tracking technology policy for ADLUMEO.",
};

export default function CookiePolicyPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-4xl mx-auto flex flex-col gap-10">
        <div className="border-b border-white/10 pb-8">
          <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest block mb-2">
            LEGAL PROTOCOL // TRACKING &amp; COOKIES
          </span>
          <h1 className="font-display-hero text-4xl sm:text-6xl font-black uppercase text-white">
            COOKIE POLICY.
          </h1>
          <p className="font-label-technical text-xs text-on-surface-variant mt-2">
            Effective Date: {new Date().getFullYear()} • Version 1.0
          </p>
        </div>

        <div className="flex flex-col gap-8 text-on-surface-variant font-body-md text-base leading-relaxed">
          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              01 // WHAT ARE COOKIES
            </h2>
            <p>
              Cookies are small text files placed on your device when you visit a website. They help us understand how you interact with our site, remember your preferences, and measure the effectiveness of our marketing.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              02 // HOW WE USE COOKIES
            </h2>
            <p>
              {siteConfig.legalName} may use the following categories of cookies:
            </p>
            <ul className="list-disc pl-6 flex flex-col gap-2 text-white/90">
              <li><strong className="text-white">Strictly Necessary:</strong> Required for the website to function. Cannot be disabled.</li>
              <li><strong className="text-white">Analytics:</strong> Help us understand visitor behavior using aggregated, anonymized data (e.g., Google Analytics).</li>
              <li><strong className="text-white">Marketing:</strong> Used to deliver relevant advertising across platforms including Meta and Google, only when you have provided consent.</li>
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              03 // MANAGING YOUR PREFERENCES
            </h2>
            <p>
              You may withdraw or adjust your cookie consent at any time using the preference banner displayed upon your first visit. You may also configure your browser to block or delete cookies; however, this may affect your experience on the site.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              04 // THIRD-PARTY SERVICES
            </h2>
            <p>
              We may use third-party services (including Meta Pixel, Google Tag Manager, and analytics providers) that set their own cookies. These services operate under their own privacy policies; we recommend reviewing them directly.
            </p>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="font-display-hero text-xl uppercase font-bold text-white">
              05 // CONTACT
            </h2>
            <p>
              For questions about our use of cookies, contact{" "}
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
