"use client";

import { useState } from "react";
import Image from "next/image";

interface CellItem {
  id: string;
  tag: string;
  title: string;
  metric1: string;
  metric2: string;
  image: string;
  alt: string;
  tagColor: "lime" | "vermilion" | "white";
  offset?: boolean;
}

const cells: CellItem[] = [
  {
    id: "cell-1",
    tag: "REEL // 01",
    title: "STREETWEAR DROP SPRINT",
    metric1: "TARGET 2.8M REACH",
    metric2: "HIGH ENGAGEMENT",
    image: "/images/reel-streetwear-runway.jpg",
    alt: "Streetwear Drop Sprint Reel",
    tagColor: "lime",
  },
  {
    id: "cell-2",
    tag: "CAROUSEL ENGINE",
    title: "NOIR SERUM LAUNCH",
    metric1: "78% SWIPE RATE",
    metric2: "HIGH RETENTION",
    image: "/images/reel-noir-serum.jpg",
    alt: "Noir Serum Launch Carousel",
    tagColor: "vermilion",
    offset: true,
  },
  {
    id: "cell-3",
    tag: "PAID CONVERSION",
    title: "CLINICAL DIRECT RESPONSE",
    metric1: "TESTED AD HOOKS",
    metric2: "TARGET 4.5x ROAS",
    image: "/images/reel-clinical-ads.jpg",
    alt: "Clinical Aesthetics Direct Response Ad",
    tagColor: "lime",
  },
  {
    id: "cell-4",
    tag: "B2B AUTHORITY",
    title: "FOUNDER ATTENTION MATRIX",
    metric1: "LINKEDIN VIRAL",
    metric2: "INBOUND DEMAND",
    image: "/images/reel-founder-matrix.jpg",
    alt: "Founder Thought Leadership Matrix",
    tagColor: "white",
    offset: true,
  },
];

export default function LivingUniverse() {
  const [activeCell, setActiveCell] = useState<CellItem | null>(null);

  return (
    <section
      id="floating-universe"
      className="w-full bg-[#08090B] px-margin-mobile md:px-margin py-32 relative overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[400px] bg-primary-container/5 blur-[160px] pointer-events-none animate-pulse"
        style={{ animationDuration: "9s" }}
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <div className="flex items-center gap-2 font-label-technical text-xs text-primary-container uppercase tracking-widest mb-2">
              <span className="w-2 h-2 bg-primary-container animate-ping"></span>
              NATIVE LAB // ALGORITHMIC MULTIVERSE
            </div>
            <h2 className="font-display-hero text-4xl sm:text-6xl uppercase font-black tracking-tight text-white">
              LIVING SOCIAL UNIVERSE.
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-md">
            Click any production cell below to expand into full-screen format. Hover to activate 3D depth perspective.
          </p>
        </div>

        {/* 3D Parallax Staggered Wall */}
        <div className="relative w-full py-6 perspective-1200" id="universe-stage">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transform-style-3d">
            {cells.map((cell) => (
              <div
                key={cell.id}
                onClick={() => setActiveCell(cell)}
                className={`group relative aspect-[9/16] overflow-hidden bg-surface-container cursor-pointer border border-white/10 shadow-2xl transition-all duration-500 hover:scale-105 hover:z-30 hover:border-primary-container hover:shadow-[0_0_35px_rgba(204,255,0,0.35)] tilt-card ${
                  cell.offset ? "lg:translate-y-8" : ""
                }`}
              >
                <Image
                  src={cell.image}
                  alt={cell.alt}
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60 group-hover:via-black/10 transition-colors"></div>

                {/* Top badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                  <span
                    className={`px-2 py-1 bg-surface/80 backdrop-blur font-label-technical text-[10px] uppercase font-bold border border-white/10 ${
                      cell.tagColor === "lime"
                        ? "text-primary-container"
                        : cell.tagColor === "vermilion"
                        ? "text-secondary"
                        : "text-white"
                    }`}
                  >
                    {cell.tag}
                  </span>
                  <span className="text-white text-xs font-mono uppercase bg-black/60 px-1.5 py-0.5 border border-white/10 group-hover:text-primary-container transition-colors">
                    EXPAND ↗
                  </span>
                </div>

                {/* Bottom details */}
                <div className="absolute bottom-4 inset-x-4 flex flex-col gap-1 z-10">
                  <span className="font-headline-sm text-base uppercase text-white font-bold group-hover:text-primary-container transition-colors">
                    {cell.title}
                  </span>
                  <div className="flex items-center justify-between font-label-technical text-xs text-on-surface-variant pt-2 border-t border-white/10">
                    <span className="text-white font-mono">{cell.metric1}</span>
                    <span className="text-primary-container font-bold font-mono">
                      {cell.metric2}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        {activeCell && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4 transition-all duration-300"
            role="dialog"
            aria-modal="true"
            aria-label={activeCell.title}
            onClick={() => setActiveCell(null)}
          >
            <button
              onClick={() => setActiveCell(null)}
              className="absolute top-6 right-6 text-white hover:text-primary-container transition-colors flex items-center gap-2 font-label-technical text-sm uppercase group z-50 focus:outline-none"
              aria-label="Close Preview"
            >
              <span>CLOSE PREVIEW</span>
              <span className="text-2xl group-hover:rotate-90 transition-transform duration-300">
                ✕
              </span>
            </button>

            <div
              className="w-full max-w-md aspect-[9/16] max-h-[85vh] overflow-hidden shadow-[0_0_80px_rgba(204,255,0,0.3)] border border-primary-container/40 relative bg-surface"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={activeCell.image}
                alt={activeCell.alt}
                fill
                className="object-cover object-center"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black via-black/70 to-transparent z-10">
                <span className="font-label-technical text-xs text-primary-container font-bold uppercase tracking-wider block">
                  {activeCell.tag}
                </span>
                <h3 className="font-headline-md text-2xl uppercase text-white font-black mt-1">
                  {activeCell.title}
                </h3>
                <div className="flex justify-between items-center text-xs font-label-technical text-white/80 mt-2 pt-2 border-t border-white/20">
                  <span>{activeCell.metric1}</span>
                  <span className="text-primary-container font-bold">{activeCell.metric2}</span>
                </div>
                <p className="font-body-sm text-on-surface-variant text-sm mt-3">
                  Full 4K stem audio &amp; retention hooks synced across Meta and TikTok ads networks.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
