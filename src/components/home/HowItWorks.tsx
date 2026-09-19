import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "FREE AUDIT",
    subtitle: "Review Your Current Presence",
    description:
      "Submit the free audit form and we'll review your social profiles, content cadence, and any active paid campaigns to identify the biggest opportunities.",
    accentColor: "lime" as const,
  },
  {
    number: "02",
    title: "STRATEGY CALL",
    subtitle: "Discovery & Strategy Call",
    description:
      "We schedule a focused call to understand your goals, audience, and commercial priorities. No hard sales pitch — just an honest conversation to see if we're a good fit.",
    accentColor: "white" as const,
  },
  {
    number: "03",
    title: "CLEAR PROPOSAL",
    subtitle: "Scope, Deliverables & Pricing",
    description:
      "You receive a written proposal outlining exactly what we'll deliver, on what timeline, with clear scope and pricing — with no hidden fees or percentage markups on ad spend.",
    accentColor: "lime" as const,
  },
  {
    number: "04",
    title: "ONBOARDING",
    subtitle: "Brand Access & Strategy Kickoff",
    description:
      "Once you approve the proposal, we conduct a thorough brand and audience onboarding. We gather assets, access, and existing analytics before producing anything.",
    accentColor: "white" as const,
  },
  {
    number: "05",
    title: "CREATE & APPROVE",
    subtitle: "Content You Sign Off On Before It Goes Live",
    description:
      "We produce a scheduled batch of content and share it with you for review. Nothing is published until you've approved it. You stay in control of your brand voice.",
    accentColor: "lime" as const,
  },
  {
    number: "06",
    title: "PUBLISH & LAUNCH",
    subtitle: "Organic Publishing + Paid Campaigns",
    description:
      "Approved content goes live across your channels on an optimised schedule. If paid media is in scope, campaigns run directly through your ad accounts with transparent spend reporting.",
    accentColor: "white" as const,
  },
  {
    number: "07",
    title: "MEASURE & IMPROVE",
    subtitle: "Monthly Reporting & Ongoing Refinement",
    description:
      "Every month you receive a clear performance report covering reach, engagement, lead enquiries, and paid media returns where applicable. We use these insights to improve what gets created next.",
    accentColor: "lime" as const,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full bg-[#0C0D10] px-margin-mobile md:px-margin py-24 border-t border-white/10"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest">
              [ HOW IT WORKS // OUR PROCESS ]
            </span>
            <h2 className="font-display-hero text-4xl sm:text-5xl uppercase font-black text-white mt-2">
              WHAT WORKING WITH US LOOKS LIKE.
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-sm text-sm leading-relaxed">
            A straightforward, transparent workflow from first contact through to ongoing growth.
          </p>
        </div>

        {/* Steps List */}
        <div className="flex flex-col divide-y divide-white/10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="py-8 flex flex-col sm:flex-row items-start gap-6 hover:bg-white/[0.02] px-4 -mx-4 transition-colors"
            >
              {/* Number */}
              <span
                className={`font-label-technical text-2xl font-bold shrink-0 w-12 ${
                  step.accentColor === "lime" ? "text-primary-container" : "text-white/40"
                }`}
              >
                {step.number}
              </span>

              {/* Content */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 flex-1">
                <div className="sm:w-1/3">
                  <h3 className="font-display-hero text-xl sm:text-2xl uppercase font-bold text-white">
                    {step.title}
                  </h3>
                  <span className="font-label-technical text-xs text-on-surface-variant uppercase tracking-wider block mt-1">
                    {step.subtitle}
                  </span>
                </div>
                <p className="sm:w-2/3 font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-body-md text-sm text-on-surface-variant max-w-sm">
            Ready to see how this applies to your brand? The free audit is where it starts.
          </p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-container text-black font-label-technical text-xs font-bold uppercase hover:bg-white transition-colors whitespace-nowrap"
          >
            <span>GET FREE AUDIT</span>
            <span>⚡</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
