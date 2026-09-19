"use client";

import { useState } from "react";

export default function ProfileDeltaSlider() {
  const [activeTab, setActiveTab] = useState<"before" | "after">("after");

  return (
    <section
      id="before-after"
      className="w-full bg-[#0C0D10] px-margin-mobile md:px-margin py-32 border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header & Toggle Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest">
              [ BEFORE &amp; AFTER // BRAND EVOLUTION ]
            </span>
            <h2 className="font-display-hero text-4xl sm:text-5xl uppercase font-black text-white mt-1">
              WHAT CHANGES WITH ADLUMEO.
            </h2>
          </div>

          {/* Toggle Buttons */}
          <div className="flex items-center gap-2 p-1.5 bg-surface-container-high border border-white/10">
            <button
              onClick={() => setActiveTab("before")}
              className={`px-5 py-2 font-label-technical text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "before"
                  ? "bg-secondary text-white shadow-[0_0_15px_rgba(255,62,36,0.4)]"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              BEFORE ADLUMEO
            </button>
            <button
              onClick={() => setActiveTab("after")}
              className={`px-5 py-2 font-label-technical text-xs font-bold uppercase transition-all duration-300 cursor-pointer ${
                activeTab === "after"
                  ? "bg-primary-container text-black shadow-[0_0_15px_rgba(204,255,0,0.3)]"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              AFTER ADLUMEO
            </button>
          </div>
        </div>

        {/* Split State Container */}
        <div className="w-full overflow-hidden border border-white/10 bg-surface-container-low relative shadow-2xl">
          {/* BEFORE STATE CARD */}
          {activeTab === "before" && (
            <div className="p-8 sm:p-12 transition-all duration-500 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-label-technical text-xs text-secondary uppercase font-bold tracking-widest">
                  [ UNSTRUCTURED POSTING ]
                </span>
                <span className="font-label-metric text-xs text-on-surface-variant font-mono">
                  LOW ENGAGEMENT &amp; INCONSISTENT REACH
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <h3 className="font-headline-lg text-3xl sm:text-4xl uppercase text-white font-bold">
                    THE INVISIBLE BRAND PROFILE
                  </h3>
                  <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                    Unfocused posting, generic templates, stock imagery, and no clear hook in the first three seconds. Hours spent making content that yields few views, quiet comment sections, and zero inbound customer inquiries.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 font-label-technical text-xs">
                    <div>
                      <span className="text-on-surface-variant uppercase block">Reach Pattern</span>
                      <strong className="text-white text-base sm:text-lg font-mono">Unpredictable</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">Hook Drop-off</span>
                      <strong className="text-secondary text-base sm:text-lg font-mono">&gt;85% at 2s</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">Inbound Inquiries</span>
                      <strong className="text-white text-base sm:text-lg font-mono">Near Zero</strong>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 aspect-square bg-surface-container p-6 border border-white/5 opacity-70 flex flex-col justify-center items-center text-center">
                  <span className="text-3xl text-secondary mb-2 font-mono">⚠️ STAGNATION</span>
                  <p className="font-body-sm text-xs text-on-surface-variant max-w-xs mt-2">
                    Effort spent creating posts without hook design or conversion pathways leads to wasted time and lost brand momentum.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* AFTER STATE CARD */}
          {activeTab === "after" && (
            <div className="p-8 sm:p-12 transition-all duration-500 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-label-technical text-xs text-primary-container uppercase font-bold tracking-widest">
                  [ STRUCTURED SOCIAL SYSTEM ]
                </span>
                <span className="font-label-metric text-xs text-primary-container font-mono font-bold">
                  COMPOUNDING REACH &amp; INBOUND PIPELINE
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <h3 className="font-headline-lg text-3xl sm:text-4xl uppercase text-white font-bold">
                    THE HIGH-ATTENTION BRAND PRESENCE
                  </h3>
                  <p className="font-body-md text-base text-on-surface leading-relaxed">
                    Hook-driven vertical video, cohesive visual branding, structured monthly content pillars, active community interaction, and direct lead capture workflows that convert interested viewers into real enquiries.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-label-technical text-xs">
                    <div>
                      <span className="text-on-surface-variant uppercase block">Content Schedule</span>
                      <strong className="text-primary-container text-base sm:text-lg font-mono">Consistent</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">3s Hook Retention</span>
                      <strong className="text-white text-base sm:text-lg font-mono">Benchmark: 65–75%</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">Conversion Path</span>
                      <strong className="text-primary-container text-base sm:text-lg font-mono">Active Funnel</strong>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 aspect-video sm:aspect-square bg-surface-container p-6 border border-primary-container/30 relative overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-primary-container transition-all">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-container/20 blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
                  <div className="flex items-center justify-between font-label-technical text-xs">
                    <span className="text-primary-container font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary-container animate-ping"></span>
                      SYSTEM: ACTIVE
                    </span>
                    <span className="text-white/60 font-mono text-[10px]">BENCHMARK TARGET</span>
                  </div>
                  <div className="my-4">
                    <span className="font-headline-xl text-3xl sm:text-4xl font-black text-white">
                      STRUCTURED GROWTH
                    </span>
                    <span className="font-label-technical text-xs text-primary-container block uppercase mt-2">
                      Hook Testing • Channel Management • Inbound Funnels
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 overflow-hidden">
                    <div className="h-full bg-primary-container w-[85%]"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
