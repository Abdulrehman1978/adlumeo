/**
 * ADLUMEO Site Configuration
 *
 * All public-facing values are driven from environment variables.
 * No hardcoded domains, emails, or contact channels.
 *
 * Required before public outreach:
 *   NEXT_PUBLIC_SITE_URL  — the deployed production URL (e.g. https://adlumeo.vercel.app)
 *   NEXT_PUBLIC_CONTACT_EMAIL — real business email address
 */

const isDev = process.env.NODE_ENV === "development";

// In development, fall back to localhost:3000.
// In production, NEXT_PUBLIC_SITE_URL must be explicitly configured.
const siteUrl = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (isDev) {
    return "http://localhost:3000";
  }
  if (typeof console !== "undefined") {
    console.error(
      "[ADLUMEO][CRITICAL] NEXT_PUBLIC_SITE_URL is not configured in production. " +
        "Set NEXT_PUBLIC_SITE_URL in your production environment variables."
    );
  }
  return "http://localhost:3000";
})();

export const siteConfig = {
  name: "ADLUMEO",
  legalName: "ADLUMEO",
  tagline: "Attention into Growth.",
  subline: "Social • Content • Paid Media",
  description:
    "Social media management, content creation, and paid advertising agency designed to turn attention into measurable growth.",
  url: siteUrl,

  // Studio status — set NEXT_PUBLIC_ACCEPTING_CLIENTS=true when actively taking briefs
  acceptingClients: process.env.NEXT_PUBLIC_ACCEPTING_CLIENTS === "true",

  // Contact channels — only rendered when genuinely configured
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  },

  // Founder profile — empty by default; rendered only when genuine data is configured
  founder: {
    name: process.env.NEXT_PUBLIC_FOUNDER_NAME || "",
    role: process.env.NEXT_PUBLIC_FOUNDER_ROLE || "",
    image: process.env.NEXT_PUBLIC_FOUNDER_IMAGE || "",
    bio: process.env.NEXT_PUBLIC_FOUNDER_BIO || "",
  },

  // Social profiles — only rendered when configured
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
  },

  // Primary Navigation
  mainNav: [
    { title: "Work", href: "/work" },
    { title: "Services", href: "/services" },
    { title: "Process", href: "/process" },
    { title: "About", href: "/about" },
    { title: "Insights", href: "/insights" },
    { title: "Contact", href: "/contact" },
  ],

  // Footer Navigation
  footerNav: {
    capabilities: [
      { title: "Social Media Management", href: "/services/social-media-management" },
      { title: "Content Creation", href: "/services/content-creation" },
      { title: "Paid Media", href: "/services/paid-media" },
      { title: "Growth Strategy", href: "/services/growth-strategy" },
    ],
    selectedWork: [
      { title: "Noir Botanics (Fragrance Spec)", href: "/work/noir-botanics" },
      { title: "Atelier Velox (Streetwear Spec)", href: "/work/atelier-velox" },
      { title: "Living Social Lab", href: "/#floating-universe" },
    ],
    ethos: [
      { title: "The Manifesto", href: "/#manifesto-burst" },
      { title: "About ADLUMEO", href: "/about" },
      { title: "How We Work", href: "/process" },
      { title: "Free Social Audit", href: "/free-audit" },
    ],
    legal: [
      { title: "Privacy Policy", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms" },
      { title: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
};
