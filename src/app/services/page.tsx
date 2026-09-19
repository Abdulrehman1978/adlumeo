import { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services & Capabilities | ADLUMEO",
  description:
    "Explore ADLUMEO's core disciplines: Social Media Management, Content Creation, Paid Media, and Growth Strategy.",
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            WHAT WE DO // CORE DISCIPLINES
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight">
            OUR SERVICES.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-4">
            No bloated agency fluff. Four focused disciplines engineered to build your presence, produce scroll-stopping content, and drive measurable client acquisition.
          </p>
        </div>

        {/* Services List */}
        <div className="flex flex-col gap-12">
          {services.map((svc) => (
            <div
              key={svc.id}
              className="p-8 sm:p-12 bg-surface-container-low border border-white/10 flex flex-col lg:flex-row justify-between gap-8 group hover:border-primary-container transition-all"
            >
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <span className="font-label-technical text-2xl font-bold text-primary-container block mb-2">
                    {`${svc.number} // CAPABILITY`}
                  </span>
                  <h2 className="font-display-hero text-3xl sm:text-5xl uppercase font-black text-white">
                    {svc.title}
                  </h2>
                  <p className="font-label-technical text-xs text-primary-container uppercase tracking-wider mt-2">
                    {svc.subtitle}
                  </p>
                  <p className="font-body-md text-base sm:text-lg text-on-surface-variant mt-6 leading-relaxed">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-8">
                  <Link
                    href={`/services/${svc.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-primary-container hover:text-black text-white font-label-technical text-xs uppercase font-bold tracking-wider transition-all"
                  >
                    <span>VIEW COMPLETE SCOPE</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              <div className="lg:w-1/3 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-white/10 pt-6 lg:pt-0 lg:pl-8">
                <span className="font-label-technical text-xs uppercase text-on-surface-variant font-bold tracking-wider">
                  CORE DELIVERABLES
                </span>
                <ul className="flex flex-col gap-3 font-body-sm text-sm text-white/90">
                  {svc.deliverables.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-primary-container mt-0.5">▪</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
