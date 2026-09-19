"use client";

import { useState } from "react";
import { AuditFormValues, auditFormSchema } from "@/lib/validation";

export default function AuditForm() {
  const [formData, setFormData] = useState<AuditFormValues>({
    brand: "",
    socialUrl: "",
    email: "",
    phone: "",
    budgetRange: "$5,000 – $15,000 / month",
    marketingGoal: "",
    website: "",
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
        throw new Error(data.error || "Failed to transmit audit dossier.");
      }

      setStatusMessage({
        type: "success",
        message: data.message || "Audit request received. We will review your profile and contact you.",
      });

      // Reset form on success
      setFormData({
        brand: "",
        socialUrl: "",
        email: "",
        phone: "",
        budgetRange: "$5,000 – $15,000 / month",
        marketingGoal: "",
        website: "",
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
        FREE SOCIAL GROWTH AUDIT DOSSIER
      </div>

      <h3 className="font-headline-lg text-2xl sm:text-3xl font-black uppercase tracking-tight text-white mb-2">
        CLAIM YOUR STRATEGIC TEARDOWN
      </h3>

      <p className="font-body-sm text-on-surface-variant text-sm mb-8">
        No generic sales presentation. Our creative team records a customized video teardown diagnosing your hook leaks, missed reach, and exact ROAS multipliers.
      </p>

      {statusMessage.type === "success" ? (
        <div className="p-6 bg-surface-container-high border border-primary-container text-white font-label-technical animate-fadeIn">
          <div className="flex items-center gap-2 text-primary-container font-bold text-sm uppercase mb-2">
            <span>✓</span>
            <span>DOSSIER TRANSMITTED SUCCESSFULLY</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {statusMessage.message}
          </p>
          <button
            onClick={() => setStatusMessage({ type: null, message: "" })}
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-bold transition-colors"
          >
            Submit Another Request
          </button>
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
              <label htmlFor="audit-brand" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Brand / Company *
              </label>
              <input
                id="audit-brand"
                type="text"
                required
                placeholder="e.g. Noir Botanics"
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-social" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Instagram / Social Link *
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
                placeholder="executive@brand.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="audit-phone" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Direct WhatsApp / Mobile
              </label>
              <input
                id="audit-phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="audit-budget" className="font-label-technical text-xs uppercase text-on-surface-variant">
              Monthly Ad / Marketing Budget
            </label>
            <select
              id="audit-budget"
              value={formData.budgetRange}
              onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
              className="px-4 py-3 bg-surface-container-high text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all duration-200 cursor-pointer"
            >
              <option value="$5,000 – $15,000 / month">$5,000 – $15,000 / month</option>
              <option value="$15,000 – $50,000 / month">$15,000 – $50,000 / month</option>
              <option value="$50,000+ / month (Enterprise)">$50,000+ / month (Enterprise)</option>
              <option value="Organic Creative Focus">Organic Creative Focus</option>
            </select>
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
              {isSubmitting ? "TRANSMITTING DOSSIER TO WAR ROOM..." : "TRANSMIT AUDIT DOSSIER"}
            </span>
            <span className="text-lg group-hover:rotate-12 transition-transform duration-300">⚡</span>
          </button>

          <div className="flex items-center justify-between text-on-surface-variant font-label-technical text-[11px] pt-2">
            <span>🔒 Strictly Confidential NDA Protected</span>
            <span>⚡ Strategic Loom Review Dispatched</span>
          </div>
        </form>
      )}
    </div>
  );
}
