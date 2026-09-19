import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function TrustStrip() {
  const hasFounder =
    siteConfig.founder.name && siteConfig.founder.bio;

  return (
    <section
      id="trust-strip"
      className="w-full bg-[#F5F4F0] text-[#0C0D10] px-margin-mobile md:px-margin py-20 border-t border-black/10"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {/* Main Trust Statement */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="font-label-technical text-xs uppercase tracking-widest text-black/40 mb-3 block">
              [ WHO THIS IS FOR ]
            </span>
            <h2 className="font-display-hero text-3xl sm:text-5xl uppercase font-black text-[#0C0D10] leading-tight">
              BUILT FOR BUSINESSES THAT WANT MORE THAN JUST POSTS.
            </h2>
            <p className="font-body-md text-base sm:text-lg text-black/70 mt-4 leading-relaxed">
              We work with founders, brand managers, and growth-focused teams who understand that social media is a distribution and acquisition channel — not a checkbox. Whether you&apos;re building from scratch or scaling an established brand, the work starts with genuine strategy.
            </p>
          </div>

          <div className="flex flex-col gap-4 text-sm font-label-technical uppercase tracking-wider shrink-0">
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-primary-container shrink-0"></span>
              <span className="text-black/70">Social Media Management</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-[#FF3E24] shrink-0"></span>
              <span className="text-black/70">Content Creation &amp; Video</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 bg-black shrink-0"></span>
              <span className="text-black/70">Paid Media (Zero Markup)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-4 h-4 border-2 border-black/30 shrink-0"></span>
              <span className="text-black/70">Growth Strategy</span>
            </div>
          </div>
        </div>

        {/* Three Trust Commitments */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-black/10 pt-10">
          <div className="flex flex-col gap-3 p-6 border border-black/10 bg-white">
            <span className="font-label-technical text-xs uppercase font-bold text-primary-container tracking-widest">
              TRANSPARENT BILLING
            </span>
            <h3 className="font-headline-sm text-lg uppercase font-bold text-[#0C0D10]">
              Zero Hidden Fees
            </h3>
            <p className="font-body-sm text-sm text-black/60 leading-relaxed">
              Your ad spend goes directly to Meta and Google through your own accounts. ADLUMEO charges a fixed monthly fee for management — nothing else. You always know exactly where your money goes.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 border border-black/10 bg-white">
            <span className="font-label-technical text-xs uppercase font-bold text-[#FF3E24] tracking-widest">
              CONTENT APPROVAL
            </span>
            <h3 className="font-headline-sm text-lg uppercase font-bold text-[#0C0D10]">
              Nothing Goes Live Without Your Approval
            </h3>
            <p className="font-body-sm text-sm text-black/60 leading-relaxed">
              Every piece of content is shared with you for review before publishing. You maintain full editorial control over your brand voice and visual identity throughout the partnership.
            </p>
          </div>

          <div className="flex flex-col gap-3 p-6 border border-black/10 bg-white">
            <span className="font-label-technical text-xs uppercase font-bold text-black/40 tracking-widest">
              CLEAR REPORTING
            </span>
            <h3 className="font-headline-sm text-lg uppercase font-bold text-[#0C0D10]">
              Plain-English Monthly Reports
            </h3>
            <p className="font-body-sm text-sm text-black/60 leading-relaxed">
              No vanity dashboards filled with confusing metrics. Each month you receive a clear breakdown of reach, engagement, lead enquiries, and paid campaign ROAS with honest commentary on what worked and what&apos;s being improved.
            </p>
          </div>
        </div>

        {/* Conditional Founder Card */}
        {hasFounder && (
          <div className="border-t border-black/10 pt-10 flex flex-col sm:flex-row items-start gap-8">
            {siteConfig.founder.image && (
              <div className="w-20 h-20 shrink-0 overflow-hidden border border-black/15 bg-black/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={siteConfig.founder.image}
                  alt={siteConfig.founder.name}
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <span className="font-label-technical text-xs uppercase tracking-widest text-black/40">
                WHO&apos;S BEHIND ADLUMEO
              </span>
              <h3 className="font-headline-sm text-xl font-bold text-[#0C0D10]">
                {siteConfig.founder.name}
              </h3>
              {siteConfig.founder.role && (
                <span className="font-label-technical text-xs uppercase text-black/50 tracking-wider">
                  {siteConfig.founder.role}
                </span>
              )}
              <p className="font-body-sm text-sm text-black/70 leading-relaxed mt-1 max-w-xl">
                {siteConfig.founder.bio}
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="border-t border-black/10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body-sm text-sm text-black/60 max-w-sm">
            Start with a no-obligation free audit. We&apos;ll review your channels and share honest feedback before you commit to anything.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0C0D10] text-white font-label-technical text-xs font-bold uppercase hover:bg-primary-container hover:text-black transition-colors whitespace-nowrap"
          >
            <span>GET FREE AUDIT</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
