export type CaseStudyType = "concept" | "client";

export interface MetricTarget {
  label: string;
  target: string;
  benchmarkContext: string;
  isHypothetical: boolean;
}

export interface MediaItem {
  type: "image" | "video";
  url: string;
  alt: string;
  aspectRatio?: string;
  caption?: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  type: CaseStudyType;
  industry: string;
  timeline: string;
  heroImage: string;
  summary: string;
  challenge: string;
  strategy: string;
  creativeDirection: string;
  execution: string;
  services: string[];
  kpiFramework: MetricTarget[];
  trajectorySvgPath?: string;
  gallery: MediaItem[];
}

export interface ServiceCategory {
  id: string;
  number: string;
  title: string;
  slug: string;
  subtitle: string;
  deliverablesSummary: string;
  description: string;
  deliverables: string[];
  platforms?: string[];
  accentColor: "lime" | "vermilion" | "white";
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: "services" | "pricing" | "deliverables" | "process";
}

export interface InsightArticle {
  slug: string;
  title: string;
  subtitle: string;
  essayNumber: string;
  excerpt: string;
  body: string[];
  publishedDate: string;
  readTime: string;
  tags: string[];
}

export interface LeadFormData {
  fullName: string;
  businessName: string;
  email: string;
  phone?: string;
  website?: string;
  socialUrl?: string;
  industry?: string;
  marketingGoal?: string;
  budgetRange?: string;
  message?: string;
  honeypot?: string; // Bot protection
  source?: "free_audit" | "contact";
}
