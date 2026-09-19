"use client";

import { useState } from "react";
import { ContactFormValues, contactFormSchema } from "@/lib/validation";

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "Social Media Management",
    budget: "",
    message: "",
    hp_website_field: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatusMessage({ type: null, message: "" });

    const result = contactFormSchema.safeParse(formData);
    if (!result.success) {
      const errorMsg = result.error.errors[0]?.message || "Please check your form inputs.";
      setStatusMessage({ type: "error", message: errorMsg });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry.");
      }

      setStatusMessage({
        type: "success",
        message: data.message || "Message received. We will review your enquiry and get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "Social Media Management",
        budget: "",
        message: "",
        hp_website_field: "",
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Submission error occurred. Please try again.";
      setStatusMessage({ type: "error", message: msg });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-surface-container-low border border-white/10 p-8 sm:p-12 shadow-2xl">
      <h3 className="font-headline-lg text-2xl sm:text-3xl font-black uppercase text-white mb-2">
        SEND AN ENQUIRY
      </h3>
      <p className="font-body-sm text-sm text-on-surface-variant mb-8">
        Tell us about your brand, current challenges, and goals. We review every message with strict confidentiality.
      </p>

      {statusMessage.type === "success" ? (
        <div className="p-6 bg-surface-container-high border border-primary-container text-white font-label-technical">
          <div className="flex items-center gap-2 text-primary-container font-bold text-sm uppercase mb-2">
            <span>✓</span>
            <span>MESSAGE RECEIVED</span>
          </div>
          <p className="text-sm text-on-surface-variant leading-relaxed font-sans">
            {statusMessage.message}
          </p>
          <button
            onClick={() => setStatusMessage({ type: null, message: "" })}
            className="mt-4 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-xs uppercase font-bold transition-colors cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Honeypot field */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="hp_website_field">Website URL</label>
            <input
              id="hp_website_field"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={formData.hp_website_field || ""}
              onChange={(e) => setFormData({ ...formData, hp_website_field: e.target.value })}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-name" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Full Name *
              </label>
              <input
                id="contact-name"
                type="text"
                required
                placeholder="Alex Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-3 bg-surface-container text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-email" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Work Email *
              </label>
              <input
                id="contact-email"
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="px-4 py-3 bg-surface-container text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-company" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Company / Brand
              </label>
              <input
                id="contact-company"
                type="text"
                placeholder="Acme Brand Inc."
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="px-4 py-3 bg-surface-container text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-phone" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Phone / WhatsApp (Optional)
              </label>
              <input
                id="contact-phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="px-4 py-3 bg-surface-container text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-service" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Primary Service Needed
              </label>
              <select
                id="contact-service"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                className="px-4 py-3 bg-surface-container text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all cursor-pointer"
              >
                <option value="Social Media Management">Social Media Management</option>
                <option value="Content Creation (Reels & Video)">Content Creation (Reels &amp; Video)</option>
                <option value="Paid Media (Meta & Google Ads)">Paid Media (Meta &amp; Google Ads)</option>
                <option value="Growth Strategy & Consulting">Growth Strategy &amp; Consulting</option>
                <option value="Full Agency Service">Full Agency Service (Content + Management + Ads)</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-budget" className="font-label-technical text-xs uppercase text-on-surface-variant">
                Monthly Budget (Optional)
              </label>
              <select
                id="contact-budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="px-4 py-3 bg-surface-container text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all cursor-pointer"
              >
                <option value="">Select budget range (Optional)</option>
                <option value="Under ₹25,000 / month">Under ₹25,000 / month</option>
                <option value="₹25,000 – ₹50,000 / month">₹25,000 – ₹50,000 / month</option>
                <option value="₹50,000 – ₹1,00,000 / month">₹50,000 – ₹1,00,000 / month</option>
                <option value="₹1,00,000 – ₹3,00,000 / month">₹1,00,000 – ₹3,00,000 / month</option>
                <option value="₹3,00,000+ / month">₹3,00,000+ / month</option>
                <option value="Organic content only / no ad spend yet">Organic content only / no ad spend yet</option>
                <option value="Not sure yet">Not sure yet</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="contact-message" className="font-label-technical text-xs uppercase text-on-surface-variant">
              Message / Project Details *
            </label>
            <textarea
              id="contact-message"
              required
              rows={4}
              placeholder="Tell us about your goals, upcoming campaign dates, or questions..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="px-4 py-3 bg-surface-container text-white font-body-md text-sm focus:outline-none focus:ring-2 focus:ring-primary-container border border-white/10 transition-all"
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
            className="w-full py-4 bg-primary-container text-black font-label-technical text-sm font-bold uppercase tracking-widest hover:bg-white hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-[0_0_24px_rgba(204,255,0,0.3)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer mt-2"
          >
            {isSubmitting ? "SENDING..." : "SEND ENQUIRY ⚡"}
          </button>
        </form>
      )}
    </div>
  );
}
