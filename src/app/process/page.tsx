import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Process — How Working With ADLUMEO Works",
  description:
    "Explore ADLUMEO's straightforward 7-step client workflow from initial free audit through strategy, content approval, launching campaigns, and monthly reporting.",
};

const steps = [
  {
    number: "01",
    title: "FREE AUDIT",
    subtitle: "Review Your Current Presence",
    description:
      "Submit the free audit form and we'll review your social profiles, content cadence, and any active paid campaigns to identify the biggest opportunities and gaps.",
  },
  {
    number: "02",
    title: "STRATEGY CALL",
    subtitle: "15-Minute Discovery Session",
    description:
      "We schedule a focused call to understand your goals, target audience, and commercial priorities. No pressure or sales games — just an honest conversation to see if we're a mutual fit.",
  },
  {
    number: "03",
    title: "CLEAR PROPOSAL",
    subtitle: "Scope, Deliverables & Fixed Pricing",
    description:
      "You receive a written proposal outlining exactly what we'll deliver, on what timeline, and at what fixed monthly cost. No hidden agency fees and zero markups on media spend.",
  },
  {
    number: "04",
    title: "ONBOARDING",
    subtitle: "Brand Access & Strategy Kickoff",
    description:
      "Once you approve the proposal, we conduct brand and audience onboarding. We gather assets, account access, and baseline analytics before producing any content.",
  },
  {
    number: "05",
    title: "CREATE & APPROVE",
    subtitle: "Content You Review Before It Goes Live",
    description:
      "We produce scheduled batches of content and share them with you for review. Nothing is published until you've approved it. You maintain full editorial control.",
  },
  {
    number: "06",
    title: "PUBLISH & LAUNCH",
    subtitle: "Organic Publishing + Paid Campaigns",
    description:
      "Approved content goes live across your channels on an optimized schedule. If paid media is in scope, campaigns run directly through your own ad accounts with 100% financial transparency.",
  },
  {
    number: "07",
    title: "MEASURE & IMPROVE",
    subtitle: "Monthly Reporting & Ongoing Refinement",
    description:
      "Every month you receive a clear performance report covering reach, engagement, lead enquiries, and paid ROAS. We use these insights to systematically improve what gets created next.",
  },
];

export default function ProcessPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            CLIENT WORKFLOW // 7 PHASES
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight">
            THE PROCESS.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-4">
            How we take businesses from unread, irregular posting to commanding high-retention attention and generating qualified customer inquiries.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="flex flex-col divide-y divide-white/10 border-y border-white/10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="py-10 flex flex-col sm:flex-row items-start sm:items-baseline justify-between gap-6 hover:bg-white/[0.02] px-6 -mx-6 transition-colors"
            >
              <div className="sm:w-1/3 flex items-baseline gap-4">
                <span className="font-label-technical text-2xl font-bold text-primary-container">
                  {step.number}
                </span>
                <div>
                  <h2 className="font-display-hero text-2xl sm:text-3xl uppercase font-bold text-white">
                    {step.title}
                  </h2>
                  <span className="font-label-technical text-xs text-on-surface-variant uppercase tracking-wider block mt-1">
                    {step.subtitle}
                  </span>
                </div>
              </div>

              <div className="sm:w-2/3">
                <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-10 bg-primary-container text-black mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-label-technical text-xs uppercase tracking-widest font-black block mb-1">
              READY TO START WITH STEP 01?
            </span>
            <h3 className="font-display-hero text-2xl sm:text-4xl font-black uppercase">
              CLAIM YOUR FREE SOCIAL AUDIT.
            </h3>
          </div>
          <Link
            href="/free-audit"
            className="px-8 py-4 bg-black text-white font-label-technical text-xs font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap shadow-xl"
          >
            CLAIM FREE AUDIT ⚡
          </Link>
        </div>
      </div>
    </main>
  );
}
