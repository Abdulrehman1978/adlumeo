import { ServiceCategory } from "@/types";

export const services: ServiceCategory[] = [
  {
    id: "01",
    number: "01",
    title: "Social Media Management",
    slug: "social-media-management",
    subtitle: "Strategy • Feed Planning • Community Engagement • Monthly Diagnostics",
    deliverablesSummary: "Channel Management, Community Engagement, Profile Optimization, Reporting",
    description:
      "Transform your social profiles from quiet placeholders into active, consistent brand destinations. We build your monthly content schedule, manage daily community interactions, maintain visual consistency, and deliver clear reporting so you always know how your channels are performing.",
    deliverables: [
      "Strategic content calendar and posting cadence across platforms",
      "Profile optimization: bios, visual banners, and story highlight architecture",
      "Daily community engagement and inbound comment/DM response routing",
      "Aesthetic feed curation and brand visual consistency",
      "Monthly comprehensive performance and audience growth reporting",
      "Competitor monitoring and category trend alerts",
    ],
    platforms: ["Instagram", "LinkedIn", "Facebook", "TikTok", "X"],
    accentColor: "lime",
  },
  {
    id: "02",
    number: "02",
    title: "Content Creation",
    slug: "content-creation",
    subtitle: "Short-Form Video (Reels) • Carousels • Graphic Assets • Copywriting",
    deliverablesSummary: "Reels & Shorts, Multi-Slide Carousels, Static Assets, Hook-Driven Copy",
    description:
      "High-attention social content engineered specifically for how modern audiences consume media. From scroll-stopping vertical video to high-value educational carousels, every piece is built around compelling hooks, clear messaging, and your brand's unique identity.",
    deliverables: [
      "Concept ideation, scriptwriting, and retention-tested hook design",
      "High-definition 9:16 vertical video production (Reels, TikTok, Shorts)",
      "Custom editing, kinetic captions, sound selection, and motion design",
      "Multi-slide educational and storytelling carousels for Instagram & LinkedIn",
      "Engaging post captions with clear, action-oriented messaging",
      "Creative asset formats optimized for both organic feeds and paid campaigns",
    ],
    platforms: ["Instagram Reels", "TikTok", "YouTube Shorts", "LinkedIn"],
    accentColor: "vermilion",
  },
  {
    id: "03",
    number: "03",
    title: "Paid Media",
    slug: "paid-media",
    subtitle: "Meta Ads • Google Ads • Funnel Retargeting • Zero Spend Markup",
    deliverablesSummary: "Paid Social Scaling, Conversion Tracking, Creative Testing, Retargeting",
    description:
      "Strategic paid advertising designed to turn verified attention into measurable pipeline and revenue. We manage campaign setup, audience targeting, and systematic creative testing — while your ad spend is paid directly to platforms with zero agency markup.",
    deliverables: [
      "Meta Ads (Instagram & Facebook) and Google Ads campaign architecture",
      "Direct ad spend model: zero markup, 100% client account ownership",
      "Conversion tracking setup (Meta Pixel, Conversions API, Google Analytics)",
      "Systematic creative testing across hooks, copy angles, and visual formats",
      "Audience targeting, lookalike modeling, and warm-audience retargeting funnels",
      "Weekly optimization and transparent return-on-ad-spend (ROAS) reporting",
    ],
    platforms: ["Meta Ads (Instagram / Facebook)", "Google Ads", "LinkedIn Ads"],
    accentColor: "lime",
  },
  {
    id: "04",
    number: "04",
    title: "Growth Strategy",
    slug: "growth-strategy",
    subtitle: "Audience Research • Brand Positioning • Funnel CRO • Campaign Planning",
    deliverablesSummary: "Market Positioning, Lead Funnel Architecture, Conversion Optimization",
    description:
      "A comprehensive roadmap that connects creative social presence to genuine business outcomes. We analyze your market, define your distinct point of view, design lead capture funnels, and identify high-leverage growth opportunities.",
    deliverables: [
      "In-depth audience research, competitor benchmarking, and whitespace analysis",
      "Distinct brand positioning and content pillar roadmap",
      "Conversion rate optimization (CRO) for social bios and mobile landing pages",
      "Lead capture funnel planning and automated enquiry response workflows",
      "Quarterly strategic growth reviews and channel expansion planning",
      "Campaign launch playbooks for product drops, events, or service offers",
    ],
    platforms: ["Cross-Channel Strategy", "Landing Page CRO", "Lead Funnels"],
    accentColor: "white",
  },
];
