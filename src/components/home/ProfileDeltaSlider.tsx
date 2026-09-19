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
              [ DIAGNOSTIC TESTAMENT ]
            </span>
            <h2 className="font-display-hero text-4xl sm:text-5xl uppercase font-black text-white mt-1">
              PROFILE TRANSFORMATION DELTA.
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
              AFTER ADLUMEO PROTOCOL
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
                  [ CHAOTIC STAGNATION ]
                </span>
                <span className="font-label-metric text-xs text-on-surface-variant font-mono">
                  0.42% ENGAGEMENT RATE
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <h3 className="font-headline-lg text-3xl sm:text-4xl uppercase text-white font-bold">
                    THE INVISIBLE COMMODITY FEED
                  </h3>
                  <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                    Random templates, disjointed color palettes, stock imagery, and zero retention hooks. Posting multiple times a week into an algorithmic void with zero paid media conversion attribution.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/5 font-label-technical text-xs">
                    <div>
                      <span className="text-on-surface-variant uppercase block">Avg Views</span>
                      <strong className="text-white text-lg font-mono">420</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">Drop Rate</span>
                      <strong className="text-secondary text-lg font-mono">92% at 2s</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">ROAS Target</span>
                      <strong className="text-white text-lg font-mono">1.04x</strong>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 aspect-square bg-surface-container p-4 border border-white/5 opacity-60 flex flex-col justify-center items-center text-center">
                  <span className="text-4xl text-on-surface-variant mb-2 font-mono">▼ 0.4%</span>
                  <span className="font-label-technical text-xs text-on-surface-variant uppercase tracking-wider">
                    Algorithmic Stagnation Confirmed
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* AFTER STATE CARD */}
          {activeTab === "after" && (
            <div className="p-8 sm:p-12 transition-all duration-500 animate-fadeIn">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                <span className="font-label-technical text-xs text-primary-container uppercase font-bold tracking-widest">
                  [ ADLUMEO PERFORMANCE APPARATUS ]
                </span>
                <span className="font-label-metric text-xs text-primary-container font-mono font-bold">
                  4.88% ENGAGEMENT RATE (+1,060%)
                </span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 flex flex-col gap-4">
                  <h3 className="font-headline-lg text-3xl sm:text-4xl uppercase text-white font-bold">
                    THE MONOLITHIC ATTENTION ENGINE
                  </h3>
                  <p className="font-body-md text-base text-on-surface leading-relaxed">
                    Cinematic color grading, 1.2-second psychological retention hooks, automated DM conversion flows, cohesive grid aesthetic, and algorithmic budget scaling that drives real qualified pipeline.
                  </p>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-label-technical text-xs">
                    <div>
                      <span className="text-on-surface-variant uppercase block">Modeled Views</span>
                      <strong className="text-primary-container text-xl font-mono">128,000+</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">Hook Retention</span>
                      <strong className="text-white text-xl font-mono">89.4% past 3s</strong>
                    </div>
                    <div>
                      <span className="text-on-surface-variant uppercase block">Target ROAS</span>
                      <strong className="text-primary-container text-xl font-mono">4.82x</strong>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 aspect-video sm:aspect-square bg-surface-container p-6 border border-primary-container/30 relative overflow-hidden flex flex-col justify-between shadow-2xl group hover:border-primary-container transition-all">
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-primary-container/20 blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none"></div>
                  <div className="flex items-center justify-between font-label-technical text-xs">
                    <span className="text-primary-container font-bold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 bg-primary-container animate-ping"></span>
                      STATUS: COMPOUNDING
                    </span>
                    <span className="text-white font-mono">RETENTION APPARATUS</span>
                  </div>
                  <div className="my-4">
                    <span className="font-headline-xl text-4xl sm:text-5xl font-black text-white">
                      89.4% @ 3S
                    </span>
                    <span className="font-label-technical text-xs text-primary-container block uppercase mt-1">
                      Attributed Video Hook Retention
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-high h-2 overflow-hidden">
                    <div className="h-full bg-primary-container w-[92%]"></div>
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
