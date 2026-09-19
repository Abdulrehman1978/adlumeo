import Image from "next/image";
import Link from "next/link";

export default function CaseStudyVelox() {
  return (
    <section
      id="case-velox"
      className="w-full bg-[#0F0403] text-[#FBEBEA] px-margin-mobile md:px-margin py-32 border-t border-[#FF3E24]/20 relative overflow-hidden"
    >
      {/* Vermilion ambient glow */}
      <div
        className="absolute -right-36 bottom-10 w-[50vw] h-[50vw] bg-[#FF3E24]/15 blur-[170px] pointer-events-none animate-pulse"
        style={{ animationDuration: "7s" }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#FF3E24]/30 pb-4">
          <div className="flex items-center gap-2 font-label-technical text-xs text-[#FF3E24] uppercase tracking-widest font-bold">
            <span className="w-2.5 h-2.5 bg-[#FF3E24] animate-ping"></span>
            CASE ARCHITECTURE // 02 • RUNWAY STREETWEAR SPRINT
          </div>
          <span className="font-label-technical text-xs text-white/50 uppercase tracking-widest">
            [ CONCEPT DROP STUDY ]
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Narrative Left Column */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 order-2 lg:order-1">
            <div>
              <span className="px-2.5 py-1 bg-[#FF3E24]/20 border border-[#FF3E24]/40 text-[#FF3E24] font-label-technical text-xs uppercase tracking-widest font-bold inline-block">
                VIRAL DROP ENGINE // SPEC
              </span>
              <h3 className="font-display-hero text-4xl sm:text-5xl uppercase font-black tracking-tight text-white mt-4 mb-4">
                ATELIER VELOX
              </h3>
              <p className="font-body-md text-base sm:text-lg text-white/80 leading-relaxed font-light">
                An underground technical outerwear line required total brand anticipation prior to its Autumn capsule drop. We designed an 8-part kinetic street interview series combined with stress-testing garments in extreme downpours across urban centers.
              </p>
            </div>

            {/* Target Modeling Grid */}
            <div className="grid grid-cols-3 gap-4 p-5 bg-[#1B0604] border border-[#FF3E24]/30 transition-all hover:border-[#FF3E24]/60">
              <div className="flex flex-col">
                <span className="font-label-technical text-[10px] text-[#FF3E24] uppercase">
                  VIEW TARGET
                </span>
                <span className="font-headline-md text-2xl font-bold text-white mt-1">2.0M+</span>
                <span className="font-label-technical text-[10px] text-white/50">Modeled Goal</span>
              </div>
              <div className="flex flex-col border-l border-[#FF3E24]/30 pl-4">
                <span className="font-label-technical text-[10px] text-[#FF3E24] uppercase">
                  ACQ. TARGET
                </span>
                <span className="font-headline-md text-2xl font-bold text-[#FF3E24] mt-1">-40%</span>
                <span className="font-label-technical text-[10px] text-white/50">Target CPA</span>
              </div>
              <div className="flex flex-col border-l border-[#FF3E24]/30 pl-4">
                <span className="font-label-technical text-[10px] text-[#FF3E24] uppercase">
                  SELLOUT MODEL
                </span>
                <span className="font-headline-md text-2xl font-bold text-white mt-1">&lt;30 MIN</span>
                <span className="font-label-technical text-[10px] text-white/50">VIP Access</span>
              </div>
            </div>

            <div className="p-4 bg-[#1B0604] border border-[#FF3E24]/40 flex items-center justify-between hover:bg-[#1B0604]/80 transition-colors">
              <div className="flex items-center gap-3">
                <span className="text-[#FF3E24]">⚡</span>
                <span className="font-label-technical text-xs uppercase text-white font-bold">
                  ALGORITHMIC HOOK PACING: 1.2s SPRINT
                </span>
              </div>
              <Link
                href="/work/atelier-velox"
                className="font-label-technical text-xs uppercase font-bold text-[#FF3E24] hover:text-white transition-colors"
              >
                VIEW SPEC ↗
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Video Still */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="aspect-[16/10] w-full overflow-hidden border border-[#FF3E24]/40 shadow-2xl relative group tilt-card bg-surface">
              <Image
                src="/images/case-atelier-velox.jpg"
                alt="Atelier Velox Outerwear Spec Campaign"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute top-4 right-4 bg-[#FF3E24] text-black px-3 py-1 font-label-technical text-xs font-black uppercase tracking-wider shadow-lg z-10">
                STRESS-TEST CAMPAIGN SPEC
              </div>

              <div className="absolute bottom-6 left-6 flex items-center gap-3 z-10">
                <div className="w-10 h-10 bg-[#FF3E24] text-black flex items-center justify-center font-bold shadow-lg transform group-hover:scale-110 transition-transform">
                  ▶
                </div>
                <div>
                  <p className="font-label-technical text-xs uppercase text-white font-bold leading-tight">
                    TOKYO DOWNPOUR // TEST 04
                  </p>
                  <p className="font-label-technical text-[10px] text-white/60 uppercase">
                    Viral Audio Stem #8849
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
