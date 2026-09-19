import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { caseStudies } from "@/data/case-studies";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) return { title: "Campaign Not Found" };

  return {
    title: `${study.title} // ${study.subtitle}`,
    description: study.summary,
  };
}

export default function CaseStudyDetail({ params }: Props) {
  const study = caseStudies.find((s) => s.slug === params.slug);
  if (!study) notFound();

  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Navigation Breadcrumb */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 font-label-technical text-xs uppercase text-on-surface-variant hover:text-primary-container transition-colors"
        >
          <span>←</span>
          <span>RETURN TO SELECTED WORK</span>
        </Link>

        {/* Title Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-3 font-label-technical text-xs uppercase tracking-widest text-primary-container mb-4">
            <span className="px-2 py-0.5 bg-primary-container/20 border border-primary-container/40 font-bold">
              {study.type === "concept" ? "SPEC STUDY // CONCEPT" : "CLIENT PARTNERSHIP"}
            </span>
            <span>{study.industry}</span>
            <span>•</span>
            <span>{study.timeline}</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-white tracking-tight leading-[0.95]">
            {study.title}
          </h1>
          <p className="font-body-xl text-xl sm:text-2xl text-on-surface-variant max-w-3xl mt-4 font-normal">
            {study.subtitle}
          </p>
        </div>

        {/* Hero Visual */}
        <div className="relative aspect-[16/9] w-full overflow-hidden border border-white/15 bg-surface shadow-2xl">
          <Image
            src={study.heroImage}
            alt={study.title}
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        {/* Project Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-8">
          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <span className="font-label-technical text-xs uppercase text-primary-container font-bold block mb-2">
                SERVICES APPLIED
              </span>
              <ul className="flex flex-col gap-2 font-label-technical text-xs text-on-surface-variant">
                {study.services.map((svc) => (
                  <li key={svc} className="flex items-center gap-2">
                    <span className="text-primary-container">▪</span>
                    <span>{svc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 bg-surface-container-low border border-white/10">
              <span className="font-label-technical text-xs uppercase text-secondary font-bold block mb-2">
                TRANSPARENCY NOTICE
              </span>
              <p className="font-body-sm text-xs text-on-surface-variant leading-relaxed">
                This project represents a spec creative study. Metrics outlined below represent modeled hypothetical performance frameworks, not real audited client results.
              </p>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-10">
            {/* Objective & Challenge */}
            <div>
              <h2 className="font-display-hero text-2xl sm:text-3xl uppercase font-bold text-white mb-3">
                01 // THE OBJECTIVE &amp; CHALLENGE
              </h2>
              {study.objective && (
                <div className="mb-3 p-4 bg-white/[0.02] border-l-2 border-primary-container">
                  <span className="font-label-technical text-xs uppercase text-primary-container font-bold block mb-1">
                    PRIMARY OBJECTIVE
                  </span>
                  <p className="font-body-md text-base text-white/90">
                    {study.objective}
                  </p>
                </div>
              )}
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                {study.challenge}
              </p>
            </div>

            {/* Target Audience */}
            {study.targetAudience && (
              <div>
                <h2 className="font-display-hero text-2xl sm:text-3xl uppercase font-bold text-white mb-3">
                  02 // TARGET AUDIENCE
                </h2>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {study.targetAudience}
                </p>
              </div>
            )}

            {/* Creative Idea */}
            {study.creativeIdea && (
              <div>
                <h2 className="font-display-hero text-2xl sm:text-3xl uppercase font-bold text-white mb-3">
                  03 // THE CREATIVE IDEA
                </h2>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {study.creativeIdea}
                </p>
              </div>
            )}

            {/* Content Strategy */}
            <div>
              <h2 className="font-display-hero text-2xl sm:text-3xl uppercase font-bold text-white mb-3">
                04 // CONTENT &amp; ASSET STRATEGY
              </h2>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed mb-3">
                {study.contentStrategy || study.creativeDirection}
              </p>
              <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                {study.execution}
              </p>
            </div>

            {/* Paid Media Strategy */}
            {study.paidMediaStrategy && (
              <div>
                <h2 className="font-display-hero text-2xl sm:text-3xl uppercase font-bold text-white mb-3">
                  05 // PAID MEDIA &amp; AMPLIFICATION
                </h2>
                <p className="font-body-md text-base text-on-surface-variant leading-relaxed">
                  {study.paidMediaStrategy}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Hypothetical Target Modeling / KPI Framework */}
        <div className="p-8 bg-surface-container-low border border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6 border-b border-white/10 pb-4">
            <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest font-bold">
              KPI BENCHMARK FRAMEWORK // MODELED TARGETS
            </span>
            <span className="font-label-technical text-[10px] text-white/50 uppercase">
              HYPOTHETICAL TARGET / BENCHMARK FRAMEWORK
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {study.kpiFramework.map((kpi) => (
              <div key={kpi.label} className="flex flex-col gap-1 p-4 bg-white/[0.02] border border-white/5">
                <span className="font-label-technical text-xs text-on-surface-variant uppercase">
                  {kpi.label}
                </span>
                <strong className="font-headline-lg text-xl sm:text-2xl font-bold text-white font-mono mt-1">
                  {kpi.target}
                </strong>
                <span className="font-label-technical text-[11px] text-white/50 mt-1">
                  {kpi.benchmarkContext}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery */}
        {study.gallery && study.gallery.length > 0 && (
          <div className="flex flex-col gap-6 pt-8">
            <h2 className="font-display-hero text-2xl sm:text-3xl uppercase font-bold text-white">
              CAMPAIGN STILLS &amp; PRODUCTION ASSETS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {study.gallery.map((media, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <div className="relative aspect-[4/5] w-full overflow-hidden border border-white/10 bg-surface">
                    <Image
                      src={media.url}
                      alt={media.alt}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  {media.caption && (
                    <span className="font-label-technical text-xs text-on-surface-variant">
                      {media.caption}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-10 bg-primary-container text-black mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-label-technical text-xs uppercase tracking-widest font-black block mb-1">
              READY TO GROW YOUR SOCIAL CHANNELS?
            </span>
            <h3 className="font-display-hero text-2xl sm:text-4xl font-black uppercase">
              GET YOUR FREE SOCIAL GROWTH AUDIT.
            </h3>
          </div>
          <Link
            href="/free-audit"
            className="px-8 py-4 bg-black text-white font-label-technical text-xs font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap shadow-xl"
          >
            GET FREE AUDIT ⚡
          </Link>
        </div>
      </div>
    </main>
  );
}
