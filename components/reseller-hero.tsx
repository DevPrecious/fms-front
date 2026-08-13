"use client";

import { useState } from "react";
import Link from "next/link";
import { regions as defaultRegions, programSteps } from "./reseller-data";

export default function ResellerHero({
  badge = "Nigeria reseller partners required",
  heroHeadline = "Expand your business horizons: become a GPS tracking reseller in",
  heroBody = "Join FMS Africa Nigeria Ltd to tap into the booming market of GPS tracking solutions. Unlock lucrative opportunities while enjoying the support of a trusted industry leader — now with a local office in Lagos.",
  heroCtaLabel = "Apply now",
  regions = defaultRegions,
  steps = programSteps,
}: {
  badge?: string;
  heroHeadline?: string;
  heroBody?: string;
  heroCtaLabel?: string;
  regions?: string[];
  steps?: typeof programSteps;
} = {}) {
  const regionOptions = regions.length > 0 ? regions : defaultRegions;
  const stepItems = steps.length > 0 ? steps : programSteps;
  const [country, setCountry] = useState("Nigeria");

  return (
    <section className="relative overflow-hidden bg-navy-950">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffd200 1px, transparent 1px), linear-gradient(to bottom, #ffd200 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <p className="inline-block bg-brand-500 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-navy-950">
          {badge}
        </p>

        <h1 className="mt-8 max-w-4xl text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {heroHeadline}{" "}
          <span className="text-brand-500">{country}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
          {heroBody}
        </p>

        <div className="mt-10 flex flex-wrap items-end gap-4">
          <div>
            <label
              htmlFor="hero-country"
              className="block text-xs font-bold uppercase tracking-wider text-white/50"
            >
              Select your market
            </label>
            <select
              id="hero-country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            className="mt-2 w-full max-w-full border border-white/20 bg-navy-900 px-4 py-3 text-sm font-bold text-white focus:border-brand-500 focus:outline-none sm:min-w-48 sm:w-auto"
            >
              <option value="your Country">Select a country</option>
              {regionOptions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          <Link
            href="#apply"
            className="bg-brand-500 px-8 py-3.5 text-sm font-bold text-navy-950 transition-colors hover:bg-brand-400"
          >
            {heroCtaLabel}
          </Link>
        </div>

        {/* Program steps preview */}
        <div className="mt-16 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {stepItems.map(({ step, title, body }) => (
            <div
              key={step}
              className="border border-white/10 bg-navy-950/80 p-5 transition-colors hover:border-brand-500/50 hover:bg-navy-900"
            >
              <p className="text-sm font-bold text-brand-500">{step}</p>
              <p className="mt-2 font-bold text-white">{title}</p>
              <p className="mt-2 text-xs leading-5 text-white/60">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
