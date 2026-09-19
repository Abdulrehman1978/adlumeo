import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About the Agency // Culture & Strategic Taste",
  description:
    "ADLUMEO combines creative studio taste with ruthless paid media discipline. Discover our philosophy, operating syntax, and high-retention frameworks.",
};

export default function AboutPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Title Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            AGENCY ETHOS // THE ARCHITECTURE OF FASCINATION
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight leading-[0.92]">
            CREATIVE INSTINCT. <br />
            <span className="text-primary-container">PERFORMANCE DISCIPLINE.</span>
          </h1>
          <p className="font-body-xl text-xl sm:text-2xl text-on-surface-variant max-w-3xl mt-6 leading-relaxed">
            ADLUMEO was built on a singular conviction: performance marketing without taste degrades brand equity into a commodity discount bin, while art without attribution burns enterprise capital. We exist to harmonize both.
          </p>
        </div>

        {/* Culture & Direction Visual Split */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] w-full overflow-hidden border border-white/15 bg-surface relative shadow-2xl">
              <Image
                src="/images/creative-director.jpg"
                alt="Creative Studio Direction Spec"
                fill
                priority
                className="object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/60 to-transparent z-10">
                <span className="font-label-technical text-[10px] text-primary-container uppercase tracking-widest block">
                  CULTURE // DIRECTION LAB
                </span>
                <h2 className="font-headline-sm text-xl uppercase font-bold text-white mt-1">
                  TACTICAL AESTHETICS
                </h2>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-6">
            <h2 className="font-display-hero text-2xl sm:text-4xl uppercase font-bold text-white">
              BEYOND COMMODITY POSTING
            </h2>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              Most social media agencies operate as volume assembly lines: churn out arbitrary templates, schedule them on an arbitrary calendar, and hope algorithms smile upon them.
            </p>
            <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
              We operate as a synchronized creative laboratory and media buying desk. We engineer short-form cinema designed from the first frame to capture psychological tension, hold viewer retention through the 15-second value threshold, and direct qualified inbound demand into enterprise balance sheets.
            </p>
          </div>
        </div>

        {/* The 4 Synchronized Pillars */}
        <div className="p-8 sm:p-12 bg-surface-container-low border border-white/10 flex flex-col gap-8">
          <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest font-bold">
            THE OPERATING SYNTAX
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-label-technical">
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-primary-container font-bold uppercase">01 / RETENTION HOOKS</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                Treating 9:16 vertical video as high cinema. 1.2-second psychological tension engineering that halts thumbs immediately.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-secondary font-bold uppercase">02 / CULTURAL GRAVITY</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                Transforming brand feeds into digital luxury flagships with cohesive editorial grading and intentional point of view.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-white font-bold uppercase">03 / ADVANTAGE+ AMPLIFICATION</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                Porting validated organic creative into automated paid ad accounts with high creative vector diversity.
              </p>
            </div>
            <div className="flex flex-col gap-2 p-4 bg-surface-container border border-white/5">
              <span className="text-xs text-primary-container font-bold uppercase">04 / INBOUND CAPTURE</span>
              <p className="font-body-md text-sm text-white/90 leading-relaxed font-sans">
                Automating DM keyword flows and conversion funnels so attention is never squandered.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-10 bg-primary-container text-black mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-label-technical text-xs uppercase tracking-widest font-black block mb-1">
              EXPERIENCE THE PROTOCOL
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
