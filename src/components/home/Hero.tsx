"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

interface HeroProps {
  heroVideo?: {
    src: string;
    poster: string;
  };
}

export default function Hero({ heroVideo }: HeroProps) {
  const [timecode, setTimecode] = useState("TC 00:14:28:12");

  // Dynamic synthetic live timecode in HUD
  useEffect(() => {
    let frame = 12;
    let sec = 28;
    let min = 14;

    const interval = setInterval(() => {
      frame++;
      if (frame >= 60) {
        frame = 0;
        sec++;
        if (sec >= 60) {
          sec = 0;
          min++;
        }
      }
      setTimecode(
        `TC 00:${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}:${
          frame < 10 ? "0" : ""
        }${frame}`
      );
    }, 1000 / 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[92vh] lg:min-h-screen bg-background flex flex-col justify-between pt-24 pb-12 overflow-hidden"
    >
      {/* Subtle Glowing Radial Acid-Lime & Vermilion Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-16 left-1/4 w-[55vw] h-[55vw] bg-primary-container/10 blur-[170px] animate-pulse"
          style={{ animationDuration: "8s" }}
        />
        <div
          className="absolute bottom-10 right-0 w-[42vw] h-[42vw] bg-[#FF3E24]/10 blur-[180px] animate-pulse"
          style={{ animationDuration: "10s" }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_65%_at_50%_45%,#000_65%,transparent_100%)]" />
      </div>

      {/* HUD Telemetry & Camera Metadata Header Strip */}
      <div className="relative z-30 px-margin-mobile md:px-margin pt-4 pb-2 flex flex-wrap items-center justify-between gap-4 text-xs font-label-technical border-b border-white/[0.08] max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 px-2.5 py-1 bg-surface-container-high border border-primary-container/30 text-primary-container font-semibold transition-all duration-300 hover:border-primary-container">
            <span className="w-2 h-2 bg-primary-container animate-blink-dot"></span>
            CAM 01 // 4K 60FPS // REC [●]
          </span>
          <span className="hidden md:inline-block text-on-surface-variant font-mono">
            [SHUTTER 1/120 • ƒ1.4 • ISO 400 • ARRI RAW LOG-C]
          </span>
        </div>

        <div className="flex items-center gap-5 text-on-surface font-mono">
          <div className="hidden sm:flex items-center gap-1.5 text-[11px] text-on-surface-variant">
            <span>AUDIO STM</span>
            <div className="flex items-end gap-0.5 h-4" aria-hidden="true">
              <span className="w-1 bg-primary-container wave-bar"></span>
              <span className="w-1 bg-primary-container wave-bar"></span>
              <span className="w-1 bg-primary-container wave-bar"></span>
              <span className="w-1 bg-[#FF3E24] wave-bar"></span>
              <span className="w-1 bg-primary-container wave-bar"></span>
            </div>
          </div>
          <span className="text-white font-bold tracking-wider">SCENE 01 / LIVE RETENTION</span>
          <span className="text-primary-container font-bold" id="hero-timecode">
            {timecode}
          </span>
        </div>
      </div>

      {/* Central Visual Stage */}
      <div className="relative z-20 flex-1 flex items-center w-full max-w-7xl mx-auto px-margin-mobile md:px-margin py-8 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center w-full">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 flex flex-col justify-center items-start text-left">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-surface-container-high/90 border border-primary-container/30 mb-5 hover:border-primary-container transition-colors">
              <span className="h-1.5 w-1.5 bg-primary-container animate-ping"></span>
              <span className="font-label-technical text-xs uppercase tracking-[0.25em] text-primary-container font-semibold">
                SOCIAL • CONTENT • PAID MEDIA // ADLUMEO CREATIVE LAB
              </span>
            </div>

            <h1 className="font-display-hero text-[11vw] sm:text-[7.5vw] lg:text-[5.4vw] font-black uppercase tracking-tighter text-white leading-[0.88] select-none">
              NOBODY NOTICES <br />
              <span className="text-outline-stroke hover:text-white transition-colors duration-300 cursor-default">
                BORING.
              </span>
            </h1>

            <div className="mt-4 sm:mt-5 flex items-baseline gap-3">
              <span className="font-label-technical text-xs text-primary-container font-bold uppercase tracking-widest">
                [POSITIONING]
              </span>
              <h2 className="font-display-hero text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-primary-container tracking-tight">
                ATTENTION INTO GROWTH.
              </h2>
            </div>

            <p className="font-body-xl text-base sm:text-xl text-on-surface-variant max-w-2xl mt-5 font-normal leading-relaxed">
              ADLUMEO creates social content people actually want to watch, manages your brand&apos;s online presence, and runs paid campaigns designed to turn attention into measurable growth.
            </p>

            {/* Core Service Descriptors */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-6 font-label-technical text-xs">
              <span className="px-3 py-1 bg-surface-container-high border border-white/10 text-white font-semibold uppercase tracking-wider">
                Social Media Management
              </span>
              <span className="text-primary-container">•</span>
              <span className="px-3 py-1 bg-surface-container-high border border-white/10 text-white font-semibold uppercase tracking-wider">
                Content Creation
              </span>
              <span className="text-primary-container">•</span>
              <span className="px-3 py-1 bg-surface-container-high border border-white/10 text-white font-semibold uppercase tracking-wider">
                Paid Advertising
              </span>
              <span className="text-primary-container">•</span>
              <span className="px-3 py-1 bg-surface-container-high border border-white/10 text-white font-semibold uppercase tracking-wider">
                Growth Strategy
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Link
                href="/free-audit"
                className="px-8 py-4 bg-primary-container text-on-primary font-label-technical text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.45)] hover:shadow-[0_0_40px_rgba(204,255,0,0.7)] text-center flex items-center justify-center gap-2 group"
              >
                <span>GET FREE SOCIAL AUDIT</span>
                <span className="text-lg group-hover:rotate-12 transition-transform duration-300">⚡</span>
              </Link>

              <Link
                href="/work"
                className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-label-technical text-xs sm:text-sm font-semibold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-center flex items-center justify-center gap-2 group"
              >
                <span>EXPLORE OUR WORK</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Metric Micro-Badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 font-label-technical text-xs">
              <div>
                <span className="text-on-surface-variant block uppercase text-[10px]">
                  HOOK BENCHMARK
                </span>
                <span className="text-white font-mono font-bold text-sm">3-SECOND RETENTION FOCUS</span>
              </div>
              <div className="border-l border-white/10 pl-6">
                <span className="text-on-surface-variant block uppercase text-[10px]">
                  CONTENT CADENCE
                </span>
                <span className="text-primary-container font-mono font-bold text-sm">
                  TAILORED REEL PRODUCTION
                </span>
              </div>
              <div className="border-l border-white/10 pl-6 hidden sm:block">
                <span className="text-on-surface-variant block uppercase text-[10px]">
                  PAID STRATEGY
                </span>
                <span className="text-white font-mono font-bold text-sm">META &amp; GOOGLE ADS</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Multi-Asset Floating Matrix */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px] perspective-1200">
            {/* Viewfinder Crosshairs HUD Overlay */}
            <div className="absolute inset-2 border border-white/10 pointer-events-none">
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-primary-container"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-primary-container"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-primary-container"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-primary-container"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 border border-white/20 flex items-center justify-center">
                <div className="w-1.5 h-1.5 bg-primary-container animate-ping"></div>
              </div>
            </div>

            {/* Primary Center Card: High-Voltage 9:16 Vertical Reel */}
            <div className="relative z-20 w-64 sm:w-72 aspect-[9/16] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.9)] border-2 border-white/15 group animate-float-slow tilt-card hover:border-primary-container transition-all duration-500 bg-surface">
              <Image
                src="/images/hero-reel-center.jpg"
                alt="Viral Runway Reel Creative Spec"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/60"></div>
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                <span className="px-2 py-0.5 bg-primary-container text-black font-label-technical text-[10px] font-bold shadow animate-pulse-glow">
                  PACED FOR RETENTION
                </span>
                <span className="font-label-technical text-[10px] text-white/80 bg-black/60 px-2 py-0.5 backdrop-blur">
                  9:16 VERTICAL REEL
                </span>
              </div>
              <div className="absolute bottom-3 left-3 right-3 text-white font-label-technical text-xs bg-black/70 backdrop-blur-md p-3 border border-white/10 group-hover:border-primary-container/50 transition-colors z-10">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="font-bold">VIRAL RUNWAY REEL SPEC</span>
                  <span className="text-primary-container font-bold">1.2S HOOK</span>
                </div>
                <div className="flex justify-between items-center text-[10px] text-on-surface-variant mt-1">
                  <span>SHORT-FORM VIDEO FORMAT</span>
                  <span>BUILT FOR THE FEED</span>
                </div>
              </div>
            </div>

            {/* Floating Secondary Card: Creative Strategy Lead */}
            <div className="absolute -left-6 sm:-left-8 top-8 w-44 sm:w-48 aspect-[3/4] overflow-hidden shadow-2xl border border-primary-container/40 z-30 animate-float-delayed hover:rotate-0 hover:scale-105 transition-all duration-500 hidden sm:block bg-surface group">
              <Image
                src="/images/creative-director.jpg"
                alt="Creative Strategy Direction"
                fill
                className="object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              <div className="absolute bottom-2 left-2 right-2 p-2 bg-black/80 backdrop-blur border border-white/10 group-hover:border-primary-container/50 transition-colors z-10">
                <span className="font-label-technical text-[9px] uppercase tracking-wider text-primary-container block font-bold">
                  CREATIVE DIRECTION
                </span>
                <p className="font-headline-sm text-xs uppercase text-white font-bold">
                  SHORT-FORM STRATEGY
                </p>
              </div>
            </div>

            {/* Floating Tertiary Card: Noir Botanics Commercial Still */}
            <div className="absolute -right-4 sm:-right-6 bottom-6 w-44 sm:w-48 aspect-[9/16] overflow-hidden shadow-2xl border border-white/15 z-10 animate-float-tertiary hover:rotate-0 hover:scale-105 transition-all duration-500 hidden sm:block bg-surface group">
              <Image
                src="/images/case-noir-botanics.jpg"
                alt="Noir Botanics Concept Still"
                fill
                className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
              <div className="absolute top-2 right-2 px-2 py-0.5 bg-[#FF3E24] text-white font-label-technical text-[9px] font-bold shadow-lg z-10">
                CONCEPT SPEC
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Live Telemetry Ticker Bottom Bar */}
      <div className="relative z-30 w-full bg-surface-container-low/95 backdrop-blur border-t border-white/[0.08] py-3.5 px-margin-mobile md:px-margin flex flex-wrap items-center justify-between gap-4 text-xs font-label-technical max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <span className="text-on-surface-variant">
            CORE DISCIPLINES: <strong className="text-white font-mono">SOCIAL • CONTENT • PAID ADS</strong>
          </span>
          <span className="hidden md:inline-block text-on-surface-variant">
            FOCUS: <strong className="text-primary-container font-mono">ATTENTION INTO GROWTH</strong>
          </span>
          <span className="hidden lg:inline-block text-on-surface-variant">
            METHODOLOGY: <strong className="text-white font-mono">CREATIVE INSTINCT + PERFORMANCE DISCIPLINE</strong>
          </span>
        </div>

        {siteConfig.acceptingClients && (
          <div className="flex items-center gap-3 text-on-surface-variant">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 bg-primary-container"></span>
            </span>
            <span>
              STUDIO STATUS: <strong className="text-primary-container font-semibold">ACCEPTING CLIENT BRIEFINGS</strong>
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
