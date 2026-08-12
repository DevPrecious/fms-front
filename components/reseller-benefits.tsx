"use client";

import { useEffect, useState } from "react";
import { resellerBenefits } from "./reseller-data";

export default function ResellerBenefits({
  benefits = resellerBenefits,
}: {
  benefits?: typeof resellerBenefits;
} = {}) {
  const source = benefits.length > 0 ? benefits : resellerBenefits;
  const [active, setActive] = useState(source[0].id);

  const selected = source.find((b) => b.id === active) ?? source[0];

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
      <div className="space-y-2">
        {source.map((benefit) => {
          const isActive = benefit.id === active;
          return (
            <button
              key={benefit.id}
              type="button"
              onClick={() => setActive(benefit.id)}
              className={`flex w-full items-start gap-4 border p-5 text-left transition-colors sm:p-6 ${
                isActive
                  ? "border-brand-500 bg-navy-950"
                  : "border-slate-200 bg-white hover:border-navy-950"
              }`}
            >
              <span
                className={`mt-0.5 h-2 w-2 shrink-0 ${
                  isActive ? "bg-brand-500" : "bg-slate-300"
                }`}
              />
              <div>
                <h3
                  className={`text-base font-bold sm:text-lg ${
                    isActive ? "text-white" : "text-navy-950"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`mt-1 text-sm leading-6 ${
                    isActive ? "text-white/70" : "text-slate-500"
                  }`}
                >
                  {benefit.summary}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex flex-col justify-center border border-slate-200 bg-slate-50 p-8 sm:p-10 lg:min-h-80">
        <p className="text-xs font-bold uppercase tracking-widest text-brand-600">
          Why it matters
        </p>
        <h3 className="mt-4 text-2xl font-bold text-navy-950">
          {selected.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-slate-600">
          {selected.detail}
        </p>
        <p className="mt-8 border-l-4 border-brand-500 pl-4 text-sm font-medium text-navy-800">
          Don&apos;t miss out on this exciting opportunity to be part of the
          future of tracking technology in your country.
        </p>
      </div>
    </div>
  );
}
