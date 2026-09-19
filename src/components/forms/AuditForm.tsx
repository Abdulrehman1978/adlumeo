"use client";

import { useState } from "react";
import Link from "next/link";
import { AuditFormValues, auditFormSchema } from "@/lib/validation";

export default function AuditForm() {
  const [formData, setFormData] = useState<AuditFormValues>({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    socialUrl: "",
    website: "",
    industry: "",
    marketingGoal: "",
    message: "",
    hp_company_field: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage({ type: null, message: "" });

    // Client-side Zod validation
    const result = auditFormSchema.safeParse(formData);
    if (!result.success) {
      const errorMsg = result.error.errors[0]?.message || "Please check your form inputs.";
      setStatusMessage({ type: "error", message: errorMsg });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit audit request.");
      }

      setStatusMessage({
        type: "success",
        message:
          data.message ||
          "We'll review the information you shared and contact you using the details provided.",
      });

      // Reset form on success
      setFormData({
        fullName: "",
        businessName: "",
        email: "",
        phone: "",
        socialUrl: "",
        website: "",
        industry: "",
        marketingGoal: "",
        message: "",
        hp_company_field: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error occurred. Please try again.";
      setStatusMessage({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white p-8 sm:p-12 shadow-2xl border border-black relative">
      <div className="flex items-center gap-2 font-label-technical text-xs uppercase tracking-widest text-primary-container mb-3">
        <span className="w-2 h-2 bg-primary-container animate-ping"></span>
        ZERO-OBLIGATION REVIEW
      </div>

      <h3 className="font-headline-lg text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
        FREE SOCIAL GROWTH AUDIT
      </h3>

      <p className="font-body-sm text-on-surface-variant text-sm mb-8">
        No aggressive sales pitch. We&apos;ll review your current social presence and show you what we&apos;d improve.
      </p>

      {statusMessage.type === "success" ? (
        <div className="p-8 bg-surface-container-high border border-primary-container text-white font-label-technical animate-fadeIn flex flex-col gap-4">
          <div className="flex items-center gap-2 text-primary-container font-bold text-base uppercase">
            <span>✓</span>
            <span>REQUEST RECEIVED.</span>
          </div>
          <p className="font-body-md text-sm text-on-surface-variant leading-relaxed font-sans">
            We&apos;ll review the information you shared and contact you using the details provided.
          </p>
          <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <Link
              href="/work"
              className="text-primary-container hover:text-white transition-colors text-xs uppercase font-bold flex items-center gap-1.5"
            >
              <span>While you&apos;re here, explore our work</span>
              <span>→</span>
            </Link>
            <button
              onClick={() => setStatusMessage({ type: null, message: "" })}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-bold transition-colors"
            >
              Submit Another Request
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5" id="conversion-audit-form">
          {/* Honeypot field (hidden from real users, caught by bots) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_company_field">Company Verification</label>
            <input
              id="hp_company_field"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.hp_company_field || ""}
              onChange={(e) => setFormData({ ...formData, hp_company_field: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-name" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Your Name *
              </label>
              <input
                id="audit-name"
                type="text"
                required
                placeholder="e.g. Alex Sharma"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-brand" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Business / Brand Name *
              </label>
              <input
                id="audit-brand"
                type="text"
                required
                placeholder="e.g. Acme Studio"
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-email" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Work Email *
              </label>
              <input
                id="audit-email"
                type="email"
                required
                placeholder="alex@acme.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-phone" className="font-label-technical text-xs uppercase text-on-surface-variant">
                WhatsApp / Phone (Optional)
              </label>
              <input
                id="audit-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-social" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Instagram / Primary Social Profile *
              </label>
              <input
                id="audit-social"
                type="text"
                required
                placeholder="@yourbrand or URL"
                value={formData.socialUrl}
                onChange={(e) => setFormData({ ...formData, socialUrl: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-website" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Website URL (Optional)
              </label>
              <input
                id="audit-website"
                type="url"
                placeholder="https://yourbrand.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-industry" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Industry / Sector (Optional)
              </label>
              <input
                id="audit-industry"
                type="text"
                placeholder="e.g. D2C, Hospitality, Healthcare, Real Estate"
                value={formData.industry}
                onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-goal" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Primary Goal (Optional)
              </label>
              <select
                id="audit-goal"
                value={formData.marketingGoal}
                onChange={(e) => setFormData({ ...formData, marketingGoal: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200 cursor-pointer"
              >
                <option value="">Select primary goal (Optional)</option>
                <option value="Grow audience & brand attention">Grow audience &amp; brand attention</option>
                <option value="Generate qualified leads">Generate qualified leads</option>
                <option value="Scale paid ad performance">Scale paid ad performance</option>
                <option value="Improve content & video quality">Improve content &amp; video quality</option>
                <option value="Complete social media management">Complete social media management</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="audit-message" className="font-label-technical text-xs uppercase text-on-surface-variant">
              Anything Specific to Review? (Optional)
            </label>
            <textarea
              id="audit-message"
              rows={3}
              placeholder="Tell us about current bottlenecks, what you've tried, or your target timeline..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
            />
          </div>

          {statusMessage.type === "error" && (
            <div className="p-3 bg-secondary/20 border border-secondary text-white font-label-technical text-xs">
              {statusMessage.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 bg-primary-container text-black font-label-technical text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(204,255,0,0.4)] hover:shadow-[0_0_40px_rgba(204,255,0,0.7)] flex items-center justify-center gap-2 mt-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span>
              {isSubmitting ? "SUBMITTING REQUEST..." : "GET MY FREE AUDIT"}
            </span>
            <span className="text-lg group-hover:rotate-12 transition-transform duration-300">⚡</span>
          </button>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-on-surface-variant font-label-technical text-[11px] pt-2">
            <span>Your information is only used to respond to your enquiry.</span>
            <span>🔒 Confidential. Formal NDAs can be arranged where required.</span>
          </div>
        </form>
      )}
    </div>
  );
}
