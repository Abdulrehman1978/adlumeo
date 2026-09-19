import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "The Process // 7-Step Growth Protocol",
  description:
    "Discover ADLUMEO's systematic 7-step growth methodology from initial diagnostic to algorithmic amplification and scaling.",
};

const steps = [
  {
    number: "01",
    title: "UNDERSTAND",
    subtitle: "Brand Diagnostic & Audience Interrogation",
    description:
      "We dissect your existing social presence, audience demographic drop-off points, competitor blindspots, and core commercial objectives.",
  },
  {
    number: "02",
    title: "STRATEGIZE",
    subtitle: "Pillars, Hook Angles & Channel Playbooks",
    description:
      "We engineer three to five proprietary content pillars, establish visual and sound guidelines, and map multi-channel distribution calendars.",
  },
  {
    number: "03",
    title: "CREATE",
    subtitle: "Cinematic 4K Short-Form Production",
    description:
      "Our studio and field teams script, shoot, and edit 20–40 high-retention vertical assets monthly with custom sound stems and psychological 1.2s hooks.",
  },
  {
    number: "04",
    title: "DISTRIBUTE",
    subtitle: "Active Publishing & Community Stewardship",
    description:
      "We manage publishing cadence, optimize hashtags/metadata, and manage inbound comments and automated DM qualification sequences daily.",
  },
  {
    number: "05",
    title: "AMPLIFY",
    subtitle: "Advantage+ Media Buying & Vector Testing",
    description:
      "Organic viral signals are ported straight into Meta and Google ad accounts for dynamic cohort testing and scalable customer acquisition.",
  },
  {
    number: "06",
    title: "OPTIMIZE",
    subtitle: "Retention Analytics & Creative Diagnostics",
    description:
      "We analyze drop-off curves (1s, 3s, 15s), cost per qualified lead, and blended ROAS, eliminating underperforming hooks and doubling down on winners.",
  },
  {
    number: "07",
    title: "SCALE",
    subtitle: "Budget Compounding & Market Dominance",
    description:
      "As high-converting creative formulas are validated, we scale ad spend and production cadence to capture dominant cultural mindshare in your vertical.",
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
            SYSTEMATIC PROTOCOL // 7 PHASES
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight">
            THE PROCESS.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-4">
            How we take businesses from unread, polite posting to commanding high-retention cultural attention and scalable customer acquisition.
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
              READY TO COMMENCE PHASE 01?
            </span>
            <h3 className="font-display-hero text-2xl sm:text-4xl font-black uppercase">
              CLAIM YOUR STRATEGIC AUDIT.
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
