export const siteConfig = {
  name: "ADLUMEO",
  legalName: "ADLUMEO GROUP",
  tagline: "Attention into Growth.",
  subline: "Social • Content • Paid Media",
  description:
    "Creative Studio × Social Media Agency × Performance Marketing Agency. Transforming volatile cultural attention into deterministic enterprise revenue.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://adlumeo.com",
  
  // Real configurable business channels
  contact: {
    email: "briefs@adlumeo.com",
    deskEmail: "director@adlumeo.com",
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",
    whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "",
    bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  },

  // Social profiles (configured or clean disabled state)
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || "",
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || "",
    tiktok: process.env.NEXT_PUBLIC_TIKTOK_URL || "",
  },

  // Primary Navigation
  mainNav: [
    { title: "Overview", href: "/#hero" },
    { title: "Thesis", href: "/#manifesto-burst" },
    { title: "Culture", href: "/about" },
    { title: "Native Lab", href: "/#floating-universe" },
    { title: "Work", href: "/work" },
    { title: "Services", href: "/services" },
    { title: "Process", href: "/process" },
    { title: "Insights", href: "/insights" },
    { title: "Contact", href: "/contact" },
  ],

  // Footer Navigation
  footerNav: {
    capabilities: [
      { title: "Short-Form Production", href: "/services/content-creation" },
      { title: "Social Media Management", href: "/services/social-media-management" },
      { title: "Paid Media & Advantage+", href: "/services/paid-media" },
      { title: "Meta Ads Strategy", href: "/services/meta-ads" },
      { title: "Google Ads Growth", href: "/services/google-ads" },
    ],
    selectedWork: [
      { title: "Noir Botanics (Perfume Concept)", href: "/work/noir-botanics" },
      { title: "Atelier Velox (Streetwear Concept)", href: "/work/atelier-velox" },
      { title: "Living Social Lab", href: "/#floating-universe" },
    ],
    ethos: [
      { title: "The Manifesto", href: "/#manifesto-burst" },
      { title: "Agency Culture", href: "/about" },
      { title: "Delta Framework", href: "/#before-after" },
      { title: "Audit Dossier", href: "/free-audit" },
    ],
    legal: [
      { title: "Privacy Protocol", href: "/privacy-policy" },
      { title: "Terms & Conditions", href: "/terms" },
      { title: "Cookie Policy", href: "/cookie-policy" },
    ],
  },
};
