import Link from "next/link";
import { services } from "@/data/services";

export default function ServicesArsenal() {
  return (
    <section id="services-arsenal" className="w-full bg-[#08090B] py-24 border-t border-white/10">
      {/* Kinetic Ticker Strip */}
      <div className="w-full bg-surface-container-low py-4 overflow-hidden border-y border-white/10 mb-20">
        <div className="flex items-center gap-12 whitespace-nowrap animate-marquee font-label-technical text-xs tracking-widest uppercase font-bold text-white">
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            SHORT-FORM CINEMA
          </span>
          <span>•</span>
          <span className="text-primary-container">ALGORITHMIC HOOK PACING</span>
          <span>•</span>
          <span>DIRECT ATTRIBUTION FUNNELS</span>
          <span>•</span>
          <span className="text-secondary">PAID ADVANTAGE+ SCALING</span>
          <span>•</span>
          <span>CREATIVE VECTOR TESTING</span>
          <span>•</span>
          <span className="text-primary-container">ZERO FORGETTABLE CONTENT</span>
          <span>•</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            SHORT-FORM CINEMA
          </span>
          <span>•</span>
          <span className="text-primary-container">ALGORITHMIC HOOK PACING</span>
          <span>•</span>
          <span>DIRECT ATTRIBUTION FUNNELS</span>
          <span>•</span>
          <span className="text-secondary">PAID ADVANTAGE+ SCALING</span>
          <span>•</span>
          <span>CREATIVE VECTOR TESTING</span>
          <span>•</span>
          <span className="text-primary-container">ZERO FORGETTABLE CONTENT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest">
              [ CAPABILITIES // ARCHITECTURE ]
            </span>
            <h2 className="font-display-hero text-4xl sm:text-6xl uppercase font-black tracking-tight text-white mt-2">
              THE ARSENAL.
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md">
            No bloated agency fluff. Four specialized disciplines synchronized to capture attention and extract revenue.
          </p>
        </div>

        {/* Typography-First Service Rows */}
        <div className="flex flex-col divide-y divide-white/10">
          {services.map((svc) => (
            <Link
              key={svc.id}
              href={`/services/${svc.slug}`}
              className={`py-10 group flex flex-col lg:flex-row lg:items-center justify-between gap-6 transition-all duration-300 hover:bg-white/[0.03] px-6 -mx-6 ${
                svc.accentColor === "lime"
                  ? "hover:border-l-4 hover:border-l-primary-container"
                  : svc.accentColor === "vermilion"
                  ? "hover:border-l-4 hover:border-l-[#FF3E24]"
                  : "hover:border-l-4 hover:border-l-white"
              }`}
            >
              <div className="flex items-baseline gap-6 lg:w-1/2">
                <span
                  className={`font-label-technical text-xl font-bold group-hover:scale-110 transition-transform ${
                    svc.accentColor === "lime"
                      ? "text-primary-container"
                      : svc.accentColor === "vermilion"
                      ? "text-[#FF3E24]"
                      : "text-white"
                  }`}
                >
                  {svc.number}
                </span>
                <div>
                  <h3 className="font-display-hero text-2xl sm:text-4xl uppercase font-black text-white group-hover:text-primary-container transition-colors">
                    {svc.title}
                  </h3>
                  <p className="font-label-technical text-xs text-on-surface-variant uppercase tracking-wider mt-1">
                    {svc.subtitle}
                  </p>
                </div>
              </div>

              <p className="lg:w-1/3 font-body-sm text-on-surface-variant text-base group-hover:text-white transition-colors">
                {svc.description}
              </p>

              <div className="flex items-center gap-2 text-primary-container font-label-technical text-xs uppercase font-bold group-hover:translate-x-2 transition-transform">
                <span>EXPLORE ARCHITECTURE</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
