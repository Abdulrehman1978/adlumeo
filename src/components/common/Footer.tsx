import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  const hasSocial =
    Boolean(siteConfig.social.instagram) ||
    Boolean(siteConfig.social.linkedin) ||
    Boolean(siteConfig.social.youtube) ||
    Boolean(siteConfig.social.tiktok);

  return (
    <footer className="w-full bg-[#050608] text-on-surface pt-24 pb-16 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-16">
        {/* Emblem & Wordmark Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <Link href="/" className="h-10 flex items-center" aria-label="ADLUMEO Home">
              <svg
                className="h-8 w-auto"
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
            </Link>
            <span className="font-label-technical text-xs uppercase tracking-widest text-on-surface-variant">
              ATTENTION INTO GROWTH
            </span>
          </div>

          <div className="font-label-technical text-xs uppercase tracking-widest text-primary-container flex items-center gap-2">
            <span className="w-2 h-2 bg-primary-container animate-pulse"></span>
            <span>SOCIAL • CONTENT • PAID MEDIA</span>
          </div>
        </div>

        {/* Navigation Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 font-label-technical text-xs">
          {/* Capabilities */}
          <div className="flex flex-col gap-3">
            <span className="text-primary-container uppercase font-bold tracking-wider">
              SERVICES
            </span>
            {siteConfig.footerNav.capabilities.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Selected Work */}
          <div className="flex flex-col gap-3">
            <span className="text-primary-container uppercase font-bold tracking-wider">
              SELECTED WORK
            </span>
            {siteConfig.footerNav.selectedWork.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Agency Ethos */}
          <div className="flex flex-col gap-3">
            <span className="text-primary-container uppercase font-bold tracking-wider">
              ABOUT
            </span>
            {siteConfig.footerNav.ethos.map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Channels / Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-primary-container uppercase font-bold tracking-wider">
              CONNECT
            </span>
            {siteConfig.social.instagram && (
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
              >
                Instagram
              </a>
            )}
            {siteConfig.social.linkedin && (
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
              >
                LinkedIn
              </a>
            )}
            {siteConfig.social.youtube && (
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
              >
                YouTube
              </a>
            )}
            {siteConfig.social.tiktok && (
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
              >
                TikTok
              </a>
            )}
            <Link
              href="/contact"
              className="text-on-surface-variant hover:text-white hover:translate-x-1 transition-all"
            >
              Contact Us
            </Link>
            <Link
              href="/free-audit"
              className="text-primary-container font-bold hover:text-white hover:translate-x-1 transition-all"
            >
              Free Social Audit →
            </Link>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5 font-label-technical text-xs text-on-surface-variant">
          <p>© {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
