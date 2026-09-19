"use client";

import { useState } from "react";
import { faqs } from "@/data/faqs";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="w-full bg-[#08090B] py-28 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-margin-mobile md:px-margin flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8">
          <div>
            <span className="font-label-technical text-xs text-primary-container uppercase tracking-widest">
              [ DIRECT ANSWERS // PROTOCOL ]
            </span>
            <h2 className="font-display-hero text-4xl sm:text-5xl uppercase font-black tracking-tight text-white mt-2">
              FREQUENTLY ASKED QUESTIONS.
            </h2>
          </div>
          <p className="font-body-md text-on-surface-variant max-w-sm">
            Everything you need to know about our production workflows, media ad spend, and client partnerships.
          </p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col divide-y divide-white/10" role="region" aria-label="FAQ Accordion">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-6 transition-colors hover:bg-white/[0.02] px-4 -mx-4">
                <button
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  className="w-full flex items-center justify-between gap-4 text-left font-display-hero text-xl sm:text-2xl uppercase font-bold text-white hover:text-primary-container transition-colors focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`font-label-technical text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-primary-container" : "text-on-surface-variant"
                    }`}
                  >
                    +
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="mt-4 pt-2 text-on-surface-variant font-body-md text-base sm:text-lg leading-relaxed max-w-3xl animate-fadeIn"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
