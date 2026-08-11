"use client";

import { useState } from "react";
import { benefitSteps } from "./benefits-data";

export default function BenefitsSteps() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {benefitSteps.map((step, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={step.number}
            className={`border transition-colors ${
              isOpen
                ? "border-navy-950 bg-slate-50"
                : "border-slate-200 bg-slate-50/50 hover:border-slate-300"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
              className="flex w-full items-start justify-between gap-4 p-6 text-left sm:p-8"
              aria-expanded={isOpen}
            >
              <div className="flex gap-5 sm:gap-8">
                <span className="text-2xl font-bold text-brand-600 sm:text-3xl">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-navy-950 sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {step.summary}
                  </p>
                </div>
              </div>
              <span
                className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center border transition-all ${
                  isOpen
                    ? "rotate-45 border-brand-500 bg-brand-500 text-navy-950"
                    : "border-slate-300 text-navy-900"
                }`}
              >
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>

            {isOpen && (
              <div className="border-t border-slate-200 px-6 pb-6 sm:px-8 sm:pb-8">
                <p className="pl-0 text-sm leading-7 text-slate-600 sm:pl-16">
                  {step.details}
                </p>
              </div>
            )}
          </article>
        );
      })}
    </div>
  );
}
