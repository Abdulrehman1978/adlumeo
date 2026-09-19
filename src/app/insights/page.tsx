import { Metadata } from "next";
import Link from "next/link";
import { insights } from "@/data/insights";

export const metadata: Metadata = {
  title: "Insights & Editorial Perspectives",
  description:
    "Thought leadership on short-form video retention, high-voltage creative strategy, and algorithmic media buying from ADLUMEO.",
};

export default function InsightsPage() {
  return (
    <main className="w-full min-h-screen bg-background pt-36 pb-24 px-margin-mobile md:px-margin">
      <div className="max-w-5xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="border-b border-white/10 pb-10">
          <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-3">
            <span className="w-2 h-2 bg-primary-container animate-ping"></span>
            EDITORIAL PERSPECTIVES // ESSAYS
          </div>
          <h1 className="font-display-hero text-5xl sm:text-7xl lg:text-8xl font-black uppercase text-white tracking-tight">
            INSIGHTS.
          </h1>
          <p className="font-body-xl text-lg sm:text-xl text-on-surface-variant max-w-2xl mt-4">
            Uncompromising perspectives on modern social algorithms, short-form retention psychology, and performance creative architecture.
          </p>
        </div>

        {/* Article List */}
        <div className="flex flex-col divide-y divide-white/10">
          {insights.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="py-10 group flex flex-col gap-4 hover:bg-white/[0.02] px-6 -mx-6 transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-label-technical text-on-surface-variant">
                <span className="text-primary-container font-bold">
                  [ESSAY // {article.essayNumber}]
                </span>
                <span>
                  {article.publishedDate ? `${article.publishedDate} • ` : ""}
                  {article.readTime}
                </span>
              </div>

              <h2 className="font-display-hero text-2xl sm:text-4xl uppercase font-black text-white group-hover:text-primary-container transition-colors">
                {article.title}
              </h2>

              <p className="font-body-md text-base sm:text-lg text-on-surface-variant leading-relaxed">
                {article.excerpt}
              </p>

              <div className="flex items-center gap-2 pt-2 text-primary-container font-label-technical text-xs uppercase font-bold group-hover:translate-x-1 transition-transform">
                <span>READ COMPLETE ESSAY</span>
                <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
