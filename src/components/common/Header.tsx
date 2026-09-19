"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock & ESC listener when mobile menu is open
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-[#08090B]/95 backdrop-blur-xl border-white/[0.12] shadow-2xl"
          : "bg-[#08090B]/85 backdrop-blur-xl border-white/[0.08]"
      }`}
    >
      <div className="h-20 w-full px-margin-mobile md:px-margin flex items-center justify-between gap-space-md max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-space-md flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-space-xs group focus:outline-none"
            aria-label="ADLUMEO Home"
          >
            <div className="h-9 flex items-center transform group-hover:scale-105 transition-transform duration-300">
              <svg
                className="h-7 w-auto"
                viewBox="0 0 240 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g transform="translate(4, 8)">
                  <path d="M0 32L12 0L24 32H16.5L12 18L7.5 32H0Z" fill="#CCFF00" />
                  <polygon fill="#FFFFFF" opacity="0.9" points="12,0 20,24 16,24 12,9" />
                  <circle cx="28" cy="8" fill="#FF3E24" r="4" />
                  <path
                    d="M12 0L32 32H25L18 20"
                    opacity="0.7"
                    stroke="#CCFF00"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                  />
                </g>
                <text
                  fill="#FFFFFF"
                  fontFamily="'Syne', sans-serif"
                  fontSize="28"
                  fontWeight="900"
                  letterSpacing="-0.04em"
                  x="44"
                  y="32"
                >
                  ADLUMEO
                </text>
                <circle cx="206" cy="30" fill="#CCFF00" r="3.5" />
              </svg>
            </div>
          </Link>

          {/* Minimalist Live Status Indicator */}
          <div className="hidden xl:flex items-center gap-2 px-3 py-1 bg-surface-container-high border border-white/5 transition-all hover:border-primary-container/40">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="font-label-technical text-[11px] text-on-surface-variant uppercase tracking-widest">
              ATTENTION LAB // ACTIVE
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden lg:flex items-center gap-space-lg font-label-technical text-xs tracking-widest uppercase"
          aria-label="Main Navigation"
        >
          {siteConfig.mainNav.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="text-on-surface-variant hover:text-white transition-all duration-200 hover:-translate-y-0.5"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Action Button & Mobile Drawer Trigger */}
        <div className="flex items-center gap-space-md flex-shrink-0">
          <Link
            href="/free-audit"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary-container text-on-primary font-label-technical text-xs font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_24px_rgba(204,255,0,0.3)] hover:shadow-[0_0_35px_rgba(204,255,0,0.65)]"
          >
            Get Free Audit
          </Link>

          <div className="flex items-center gap-space-xs">
            {siteConfig.founder.image && siteConfig.founder.name && (
              <Link
                href="/about"
                className="relative w-8 h-8 overflow-hidden border border-primary-container/40 hover:border-primary-container hover:scale-110 transition-all duration-300"
                title={siteConfig.founder.name}
              >
                <Image
                  src={siteConfig.founder.image}
                  alt={siteConfig.founder.name}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all"
                />
              </Link>
            )}

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-space-xs text-on-surface hover:text-primary-container transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          ref={menuRef}
          className="fixed inset-0 top-20 bg-[#08090B] z-40 lg:hidden flex flex-col justify-between p-8 border-t border-white/10 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
        >
          <nav className="flex flex-col gap-6 pt-4 font-display-hero text-2xl uppercase font-black">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white hover:text-primary-container transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 pt-8 border-t border-white/10">
            <Link
              href="/free-audit"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-4 bg-primary-container text-black font-label-technical text-sm font-bold uppercase tracking-widest text-center shadow-[0_0_30px_rgba(204,255,0,0.4)]"
            >
              Get Free Audit
            </Link>
            <p className="font-label-technical text-xs text-on-surface-variant uppercase text-center">
              ADLUMEO // Attention into Growth
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
