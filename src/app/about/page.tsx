import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About ADLUMEO — Social Media, Content & Paid Media Agency",
  description:
    "ADLUMEO is a social media management, content creation, and paid advertising agency. We build creative strategies that turn attention into measurable growth.",
};

export default function AboutPage() {
  const hasFounder =
    siteConfig.founder.name && siteConfig.founder.bio;

  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Title Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            ABOUT THE AGENCY
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92]">
            CREATIVE STRATEGY. <br />
            <span className="text-primary-container">PERFORMANCE FOCUS.</span>
          </h1>
          <p className="font-body-xl text-xl sm:text-2xl text-on-surface-variant max-w-3xl mt-6 leading-relaxed">
            ADLUMEO is a social media management, content creation, and paid advertising agency. We help businesses build a genuine presence online and convert that attention into measurable commercial results.
          </p>
        </div>

        {/* What We Do Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-7 flex flex-col gap-6">
            <h2 className="font-display-hero text-2xl sm:text-4xl uppercase font-bold text-white">
              WHAT WE ACTUALLY DO
            </h2>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Most businesses know they should be more active on social media. The challenge is that doing it well requires consistent creative output, a clear strategy, and — if you&apos;re running paid campaigns — expertise in ad account management that takes time to develop.
            </p>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              We handle that work. Strategy, content production, community management, and paid media — each informed by clear performance data so we always know what&apos;s working and what needs to change.
            </p>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              We work with founders, in-house marketing teams, and growing brands that want more from their social presence than templated posts on an arbitrary schedule.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="p-8 bg-surface-container-low border border-white/10 flex flex-col gap-4 h-full">
              <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest font-bold">
                THE DISCIPLINES
              </span>
              {[
                { label: "01", title: "Social Media Management", desc: "Strategy, publishing, and community management across Instagram, TikTok, LinkedIn, Facebook, and YouTube." },
                { label: "02", title: "Content Creation", desc: "Short-form video, photography direction, and copywriting — created around your brand identity." },
                { label: "03", title: "Paid Media", desc: "Meta, Google, and LinkedIn campaign management. Your ad spend goes directly to platforms with zero markup." },
                { label: "04", title: "Growth Strategy", desc: "Channel playbooks, content pillars, and audience targeting frameworks built around your commercial goals." },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 items-start py-3 border-b border-white/5 last:border-0">
                  <span className="font-label-technical text-xs text-primary-container font-bold shrink-0 mt-1">{item.label}</span>
                  <div>
                    <span className="font-label-technical text-xs uppercase font-bold text-white block">{item.title}</span>
                    <p className="font-body-sm text-sm text-on-surface-variant mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Approach */}
        <div className="p-8 sm:p-12 bg-surface-container-low border border-white/10 flex flex-col gap-8">
          <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest font-bold">
            HOW WE APPROACH THE WORK
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-label-technical">
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-primary-container font-bold uppercase">STRATEGY FIRST</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                Every engagement starts with a proper brand and audience review. We don&apos;t produce content before we understand what you&apos;re trying to achieve and who you&apos;re trying to reach.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-secondary font-bold uppercase">APPROVAL BEFORE PUBLISHING</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                You review and approve content before it goes live. Your brand voice and identity stay under your control throughout.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-white font-bold uppercase">TRANSPARENT BILLING</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                Clear scope and management fees. Ad spend paid directly to platforms through your own billing accounts. No markups, no surprises.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-primary-container font-bold uppercase">HONEST REPORTING</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                Monthly reports in plain language. What worked, what didn&apos;t, and what we&apos;re doing about it — not just a dashboard of green numbers.
              </p>
            </div>
          </div>
        </div>

        {/* Conditional Founder Section */}
        {hasFounder && (
          <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row items-start gap-8">
            {siteConfig.founder.image && (
              <div className="w-24 h-24 shrink-0 overflow-hidden border border-white/15 bg-surface">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={siteConfig.founder.image}
                  alt={siteConfig.founder.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                />
              </div>
            )}
            <div className="flex flex-col gap-2">
              <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest">
                FOUNDER
              </span>
              <h2 className="font-headline-sm text-2xl font-bold text-white">
                {siteConfig.founder.name}
              </h2>
              {siteConfig.founder.role && (
                <span className="font-label-technical text-xs uppercase text-on-surface-variant tracking-wider">
                  {siteConfig.founder.role}
                </span>
              )}
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed mt-2 max-w-2xl">
                {siteConfig.founder.bio}
              </p>
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-10 bg-primary-container text-black mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-label-technical text-xs uppercase tracking-widest font-black block mb-1">
              START WITH A FREE AUDIT
            </span>
            <h3 className="font-display-hero text-2xl sm:text-4xl font-black uppercase">
              LET&apos;S REVIEW YOUR CHANNELS.
            </h3>
          </div>
          <Link
            href="/free-audit"
            className="px-8 py-4 bg-black text-white font-label-technical text-xs font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap shadow-xl"
          >
            GET FREE AUDIT ⚡
          </Link>
        </div>
      </div>
    </main>
  );
}
