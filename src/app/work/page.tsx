import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { caseStudies } from "@/data/case-studies";

export const metadata: Metadata = {
  title: "Selected Work & Spec Concepts",
  description:
    "Explore ADLUMEO's campaign concepts, creative studies, and short-form video frameworks engineered for high-retention performance.",
};

export default function WorkPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            PORTFOLIO ARCHITECTURE // SPEC WORK &amp; CONCEPTS
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight">
            SELECTED WORK.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-4">
            A curated showcase of our creative direction, short-form retention architectures, and modeled campaign frameworks.
          </p>
          <div className="mt-4 inline-block px-3 py-1 bg-surface-container border border-white/10 text-xs font-label-technical text-white/60">
            Note: Fictional concept campaigns are labeled transparently as Spec Projects and Creative Studies.
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group flex flex-col gap-6 bg-surface-container-low border border-white/10 p-6 transition-all duration-500 hover:border-primary-container hover:shadow-[0_0_30px_rgba(204,255,0,0.15)]"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface">
                <Image
                  src={study.heroImage}
                  alt={study.title}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 font-label-technical text-[11px] text-primary-container uppercase font-bold border border-white/10">
                  {study.type === "concept" ? "CONCEPT CAMPAIGN" : "CLIENT PARTNERSHIP"}
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between text-xs font-label-technical text-on-surface-variant">
                  <span>{study.industry}</span>
                  <span>{study.timeline}</span>
                </div>
                <h2 className="font-display-hero text-3xl uppercase font-bold text-white group-hover:text-primary-container transition-colors">
                  {study.title}
                </h2>
                <p className="font-body-md text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                  {study.summary}
                </p>
                <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container font-bold uppercase pt-4 border-t border-white/10 group-hover:translate-x-1 transition-transform">
                  <span>VIEW CAMPAIGN DOSSIER</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
