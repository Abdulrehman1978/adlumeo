"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("adlumeo_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("adlumeo_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("adlumeo_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Cookie Consent"
      className="fixed bottom-0 inset-x-0 z-50 p-4 sm:p-6 bg-[#0C0D10]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl transition-transform"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-label-technical text-xs">
        <div className="max-w-2xl text-on-surface-variant">
          <p>
            We use essential and performance telemetry cookies to enhance user navigation and measure conversion friction. Review our{" "}
            <Link href="/cookie-policy" className="text-primary-container underline hover:text-white">
              Cookie Policy
            </Link>{" "}
            for full details.
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <button
            onClick={handleDecline}
            className="px-4 py-2 border border-white/20 text-white hover:border-white transition-colors uppercase font-bold"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 bg-primary-container text-black font-bold uppercase hover:bg-white transition-all shadow-[0_0_15px_rgba(204,255,0,0.3)]"
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </aside>
  );
}
