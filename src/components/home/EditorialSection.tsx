import Image from "next/image";
import Link from "next/link";

export default function EditorialSection() {
  return (
    <section
      id="editorial-spread"
      className="w-full bg-[#F5F4F0] text-[#111215] px-margin-mobile md:px-margin py-28 selection:bg-black selection:text-white"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Magazine Header Strip */}
        <div className="flex items-center justify-between border-b border-black/20 pb-4 text-xs font-label-technical tracking-widest uppercase">
          <span>ISSUE N° 04 // EDITORIAL PERSPECTIVE</span>
          <span>EST. PERFORMANCE LAB</span>
          <span>TASTE + METRICS</span>
        </div>

        {/* Big Editorial Headline */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-8">
            <span className="font-serif-editorial italic text-2xl sm:text-3xl text-black/60 block mb-2">
              The Architecture of Fascination
            </span>
            <h2 className="font-display-hero text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]">
              CULTURE, STORYTELLING &amp; UNAPOLOGETIC TASTE.
            </h2>
          </div>
          <div className="lg:col-span-4 font-body-md text-base sm:text-lg text-black/80 font-light leading-relaxed">
            &ldquo;Performance marketing without refined taste degrades brand equity into a commodity discount bin. Pure art without attribution burns investor runway. We exist to harmonize both.&rdquo;
          </div>
        </div>

        {/* Editorial Spread Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8">
          {/* Creative Direction Portrait Column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] w-full overflow-hidden bg-black/10 shadow-2xl relative group tilt-card">
              <Image
                src="/images/creative-director.jpg"
                alt="Executive Creative Direction Spec"
                fill
                className="object-cover grayscale contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent text-white z-10">
                <span className="font-label-technical text-[10px] uppercase tracking-widest text-[#CCFF00]">
                  EXECUTIVE CREATIVE DIRECTION
                </span>
                <h3 className="font-headline-sm text-xl font-bold uppercase mt-0.5">
                  HIGH-VOLTAGE TASTE LAB
                </h3>
                <p className="font-serif-editorial italic text-sm text-white/80">
                  Architecting short-form cinematic friction across modern commerce.
                </p>
              </div>
            </div>
          </div>

          {/* Magazine Column Text & Vignettes */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-serif-editorial">
              <Link href="/insights/why-nobody-watches-your-reels" className="flex flex-col gap-3 p-4 -m-4 hover:bg-black/[0.03] transition-colors duration-200 group">
                <span className="font-label-technical text-xs uppercase tracking-widest text-black/50">
                  [ESSAY // 01]
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-black uppercase font-display-hero group-hover:text-[#FF3E24] transition-colors">
                  Why Nobody Watches Your Reels
                </h3>
                <p className="text-base text-black/80 leading-relaxed font-sans">
                  Most business Reels fail in the first two seconds. Modern algorithms measure 3-second retention: if viewers swipe away early, distribution drops immediately. The fix is not more content, but better openings tested systematically.
                </p>
                <span className="font-label-technical text-xs text-black font-bold uppercase mt-2 group-hover:translate-x-1 transition-transform inline-block">
                  Read Article →
                </span>
              </Link>

              <Link href="/insights/how-organic-content-and-paid-ads-should-work-together" className="flex flex-col gap-3 p-4 -m-4 hover:bg-black/[0.03] transition-colors duration-200 group">
                <span className="font-label-technical text-xs uppercase tracking-widest text-black/50">
                  [ESSAY // 02]
                </span>
                <h3 className="font-headline-sm text-2xl font-bold text-black uppercase font-display-hero group-hover:text-[#FF3E24] transition-colors">
                  Organic &amp; Paid Synergy
                </h3>
                <p className="text-base text-black/80 leading-relaxed font-sans">
                  Treating organic content as an ad testing lab lets you validate hook angles and creative before putting ad budget behind them. When both channels share performance intelligence, acquisition costs drop.
                </p>
                <span className="font-label-technical text-xs text-black font-bold uppercase mt-2 group-hover:translate-x-1 transition-transform inline-block">
                  Read Article →
                </span>
              </Link>
            </div>

            {/* Monogram Pull Quote Box */}
            <div className="p-8 bg-[#ECEAE2] border-l-4 border-black flex flex-col md:flex-row gap-6 items-center justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col">
                <p className="font-serif-editorial italic text-xl text-black leading-snug">
                  &ldquo;If your creative doesn&apos;t cause visceral tension, it simply ceases to exist in modern consciousness.&rdquo;
                </p>
                <span className="font-label-technical text-xs uppercase tracking-widest text-black/60 mt-3">
                  — ADLUMEO CREATIVE LABS
                </span>
              </div>
              <Link
                href="/about"
                className="px-6 py-3 bg-black text-[#F5F4F0] font-label-technical text-xs font-bold uppercase tracking-wider hover:bg-primary-container hover:text-black hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 whitespace-nowrap"
              >
                Read Agency Culture
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
