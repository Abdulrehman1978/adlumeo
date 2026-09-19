import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { insights } from "@/data/insights";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return insights.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = insights.find((a) => a.slug === params.slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} // Insights`,
    description: article.excerpt,
  };
}

export default function ArticleDetail({ params }: Props) {
  const article = insights.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <article className="max-w-3xl mx-auto flex flex-col gap-12">
        {/* Navigation Breadcrumb */}
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 font-label-technical text-xs uppercase text-on-surface-variant hover:text-primary-container transition-colors"
        >
          <span>←</span>
          <span>RETURN TO ALL INSIGHTS</span>
        </Link>

        {/* Title Header */}
        <div className="border-b border-white/10 pb-8">
          <div className="flex items-center gap-3 font-label-technical text-xs uppercase tracking-widest text-primary-container mb-4">
            <span>[ESSAY // {article.essayNumber}]</span>
            {article.publishedDate && (
              <>
                <span>•</span>
                <span>{article.publishedDate}</span>
              </>
            )}
            <span>•</span>
            <span>{article.readTime}</span>
          </div>

          <h1 className="font-display-hero text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-[0.95]">
            {article.title}
          </h1>

          <p className="font-body-xl text-xl text-on-surface-variant mt-4 font-light">
            {article.subtitle}
          </p>
        </div>

        {/* Article Body */}
        <div className="flex flex-col gap-6 text-white/90 font-body-md text-lg leading-relaxed font-light">
          {article.body.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-8 border-t border-white/10 font-label-technical text-xs">
          <span className="text-on-surface-variant uppercase mr-2">CATEGORIES:</span>
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-surface-container border border-white/10 text-primary-container uppercase"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div className="p-8 bg-primary-container text-black mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="font-label-technical text-xs uppercase tracking-widest font-black block mb-1">
              IMPLEMENT THIS ARCHITECTURE
            </span>
            <h3 className="font-display-hero text-2xl font-black uppercase">
              CLAIM A STRATEGIC AUDIT.
            </h3>
          </div>
          <Link
            href="/free-audit"
            className="px-6 py-3 bg-black text-white font-label-technical text-xs font-bold uppercase hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap shadow-xl"
          >
            CLAIM FREE AUDIT ⚡
          </Link>
        </div>
      </article>
    </main>
  );
}
