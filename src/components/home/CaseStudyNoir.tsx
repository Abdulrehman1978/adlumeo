import Image from "next/image";
import Link from "next/link";

export default function CaseStudyNoir() {
  return (
    <section
      id="case-noir"
      className="w-full bg-[#0A0705] text-[#F3EFEA] px-margin-mobile md:px-margin py-32 border-t border-[#382619]/40 relative overflow-hidden"
    >
      {/* Amber ambient light halo */}
      <div
        className="absolute -left-32 top-1/4 w-[45vw] h-[45vw] bg-[#99521F]/15 blur-[150px] pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Breadcrumb & Tag */}
        <div className="flex items-center justify-between border-b border-[#382619] pb-4">
          <span className="font-label-technical text-xs text-[#E59858] uppercase tracking-[0.3em]">
            CASE ARCHITECTURE // 01 • LUXURY BOTANICAL PERFUMERY
          </span>
          <span className="font-label-technical text-xs text-white/50 uppercase tracking-widest">
            [ CONCEPT CAMPAIGN // SPEC STUDY ]
          </span>
        </div>

        {/* Hero Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="aspect-[16/10] w-full overflow-hidden border border-[#E59858]/30 shadow-2xl relative group tilt-card bg-surface">
              <Image
                src="/images/case-noir-botanics.jpg"
                alt="Noir Botanics Luxury Fragrance Concept"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30"></div>
              
              <div className="absolute top-4 left-4 bg-black/80 backdrop-blur border border-[#E59858]/50 px-3 py-1 font-label-technical text-xs uppercase text-[#E59858] z-10">
                CREATIVE STRATEGY STUDY
              </div>

              {/* ROAS Target Floating Pill */}
              <div className="absolute bottom-6 right-6 bg-black/90 backdrop-blur border border-primary-container/80 px-4 py-3 flex items-center gap-3 z-10">
                <div className="w-2.5 h-2.5 bg-primary-container animate-pulse"></div>
                <div>
                  <span className="font-label-technical text-[10px] text-white/70 block uppercase">
                    HYPOTHETICAL BENCHMARK
                  </span>
                  <span className="font-headline-sm text-base sm:text-lg font-bold text-primary-container">
                    TARGET: 3.0x ROAS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative Breakdown */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <div>
              <div className="inline-block px-2.5 py-1 bg-[#E59858]/20 border border-[#E59858]/40 text-[#E59858] font-label-technical text-xs uppercase tracking-widest font-bold mb-3">
                CREATIVE FRAMEWORK // CONCEPT
              </div>
              <h3 className="font-display-hero text-4xl sm:text-5xl uppercase font-black tracking-tight text-white mt-1 mb-4">
                NOIR BOTANICS
              </h3>
              <p className="font-body-md text-base sm:text-lg text-white/80 leading-relaxed font-light">
                Stagnant organic distribution and generic catalog packshots erode luxury margin. ADLUMEO replaces sterile studio bottle shots with cinematic sensory micro-dramas, tactile blind scent trials, and laser-targeted Advantage+ creative testing.
              </p>
            </div>

            {/* Integrated Target Modeling Grid */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-[#140E0A] border border-[#382619] transition-all hover:border-[#E59858]/50">
              <div className="flex flex-col">
                <span className="font-label-technical text-[11px] text-[#E59858] uppercase">
                  REACH TARGET
                </span>
                <span className="font-headline-md text-xl sm:text-2xl font-bold text-white mt-1">
                  +150–250%
                </span>
                <span className="font-label-technical text-[10px] text-white/50">
                  Model Benchmark
                </span>
              </div>
              <div className="flex flex-col border-l border-[#382619] pl-4">
                <span className="font-label-technical text-[11px] text-[#E59858] uppercase">
                  EFFICIENCY
                </span>
                <span className="font-headline-md text-xl sm:text-2xl font-bold text-primary-container mt-1">
                  -30% CPA
                </span>
                <span className="font-label-technical text-[10px] text-white/50">
                  Target Delta
                </span>
              </div>
              <div className="flex flex-col border-l border-[#382619] pl-4">
                <span className="font-label-technical text-[11px] text-[#E59858] uppercase">
                  CHANNEL
                </span>
                <span className="font-headline-md text-xl sm:text-2xl font-bold text-white mt-1">
                  REELS + ADS
                </span>
                <span className="font-label-technical text-[10px] text-white/50">
                  Meta Advantage+
                </span>
              </div>
            </div>

            {/* Kinetic SVG Trajectory Wave */}
            <div className="p-4 bg-[#140E0A]/80 border border-[#382619] hover:border-[#E59858]/40 transition-colors">
              <div className="flex justify-between text-xs font-label-technical text-white/60 mb-2">
                <span>CONVERSION ACCELERATION MODEL</span>
                <span className="text-primary-container font-mono font-bold">+420% VELOCITY</span>
              </div>
              <svg className="w-full h-12 stroke-current fill-none text-[#E59858]" viewBox="0 0 300 50">
                <path d="M0,45 Q60,40 120,30 T200,18 T300,4" strokeLinecap="round" strokeWidth="2.5"></path>
                <path className="text-white/30" d="M0,45 Q60,44 120,42 T200,40 T300,38" strokeDasharray="3 3" strokeWidth="1"></path>
              </svg>
            </div>

            <Link
              href="/work/noir-botanics"
              className="inline-flex items-center gap-2 font-label-technical text-xs uppercase tracking-widest text-primary-container hover:text-white transition-all group"
            >
              <span>EXPLORE FULL CAMPAIGN STRATEGY &amp; SCRIPTS</span>
              <span className="group-hover:translate-x-1.5 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
