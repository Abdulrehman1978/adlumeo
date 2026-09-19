import type { Metadata, Viewport } from "next";
import { Syne, Hanken_Grotesk, JetBrains_Mono, Newsreader } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/config/site";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SkipToContent from "@/components/common/SkipToContent";
import CookieBanner from "@/components/common/CookieBanner";
import MobileStickyBar from "@/components/common/MobileStickyBar";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const hankenGrotesk = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
  display: "swap",
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "ADLUMEO — Attention into Growth // Social • Content • Paid Media",
    template: "%s | ADLUMEO",
  },
  description: siteConfig.description,
  keywords: [
    "social media management",
    "content creation agency",
    "short-form video production",
    "reels agency",
    "meta ads",
    "paid advertising",
    "growth strategy",
    "creative studio",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: "ADLUMEO — Attention into Growth",
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "ADLUMEO — Attention into Growth",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ADLUMEO — Attention into Growth",
    description: siteConfig.description,
    images: [`${siteConfig.url}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#08090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    sameAs: Object.values(siteConfig.social).filter(Boolean),
    serviceType: [
      "Social Media Management",
      "Content Creation",
      "Paid Media Advertising",
      "Growth Strategy",
    ],
  };

  return (
    <html
      lang="en"
      className={`${syne.variable} ${hankenGrotesk.variable} ${jetbrainsMono.variable} ${newsreader.variable} dark scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased selection:bg-primary-container selection:text-on-primary min-h-screen flex flex-col">
        <SkipToContent />
        <Header />
        <div id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
          {children}
        </div>
        <Footer />
        <MobileStickyBar />
        <CookieBanner />
      </body>
    </html>
  );
}
