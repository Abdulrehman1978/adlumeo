"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";

const EXCLUDED_ROUTES = [
  "/free-audit",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/cookie-policy",
];

export default function MobileStickyBar() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if the current route is excluded
    const isExcluded = EXCLUDED_ROUTES.some(
      (route) => pathname === route || pathname?.startsWith(route + "/")
    );

    if (isExcluded) {
      setIsVisible(false);
      return;
    }

    const handleScroll = () => {
      // Reveal sticky bar after scrolling past the initial hero view (~400px)
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const hasWhatsapp = Boolean(siteConfig.contact.whatsapp);
  const whatsappUrl = hasWhatsapp
    ? `https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, "")}`
    : "";

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#08090B]/95 backdrop-blur-md border-t border-white/10 px-4 py-3 pb-[calc(0.75rem+env(safe-area-inset-bottom,0px))] shadow-2xl transition-transform duration-300"
    >
      <div className="flex items-center gap-3 max-w-md mx-auto">
        <Link
          href="/free-audit"
          className="flex-1 py-3 px-4 bg-primary-container text-black font-label-technical text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 hover:bg-white transition-colors"
        >
          <span>GET FREE AUDIT</span>
          <span>⚡</span>
        </Link>

        {hasWhatsapp && (
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact via WhatsApp"
            className="w-11 h-11 shrink-0 bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center transition-colors text-base"
          >
            <span>💬</span>
          </a>
        )}
      </div>
    </aside>
  );
}
