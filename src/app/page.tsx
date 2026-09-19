import Hero from "@/components/home/Hero";
import ManifestoSection from "@/components/home/ManifestoSection";
import EditorialSection from "@/components/home/EditorialSection";
import LivingUniverse from "@/components/home/LivingUniverse";
import CaseStudyNoir from "@/components/home/CaseStudyNoir";
import CaseStudyVelox from "@/components/home/CaseStudyVelox";
import ProfileDeltaSlider from "@/components/home/ProfileDeltaSlider";
import ServicesArsenal from "@/components/home/ServicesArsenal";
import HowItWorks from "@/components/home/HowItWorks";
import TrustStrip from "@/components/home/TrustStrip";
import FAQSection from "@/components/home/FAQSection";
import AuditSection from "@/components/home/AuditSection";

export default function HomePage() {
  return (
    <main className="w-full relative">
      {/* 1. High-Impact Version 4 Hero (Isolated Component) */}
      <Hero />

      {/* 2. Acid-Lime Full Viewport Manifesto (#CCFF00) */}
      <ManifestoSection />

      {/* 3. Warm Parchment Editorial Magazine Spread (#F5F4F0) */}
      <EditorialSection />

      {/* 4. Immersive 3D Floating Social Universe */}
      <LivingUniverse />

      {/* 5. Case Study 01: Noir Botanics (Concept Study) */}
      <CaseStudyNoir />

      {/* 6. Case Study 02: Atelier Velox (Concept Drop Sprint) */}
      <CaseStudyVelox />

      {/* 7. Interactive Before / After Profile Comparison */}
      <ProfileDeltaSlider />

      {/* 8. Core Services & Capabilities Breakdown */}
      <ServicesArsenal />

      {/* 9. 7-Step Process: What Working With Us Looks Like */}
      <HowItWorks />

      {/* 10. Trust Strip: Commitments, Founder (conditional), & Brand Statement */}
      <TrustStrip />

      {/* 11. Frequently Asked Questions */}
      <FAQSection />

      {/* 12. Acid-Lime Conversion Finale & Free Social Growth Audit */}
      <AuditSection />
    </main>
  );
}
