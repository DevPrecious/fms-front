"use client";

import Link from "next/link";
import { useState } from "react";
import { regions as defaultRegions } from "./reseller-data";
import { submitResellerApplication } from "@/lib/cms";

export default function ResellerApplicationForm({
  regions = defaultRegions,
}: {
  regions?: string[];
} = {}) {
  const regionOptions = regions.length > 0 ? regions : defaultRegions;
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState(regionOptions[0]);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setPending(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    try {
      await submitResellerApplication({
        name: String(data.get("contactName") || "").trim(),
        email: String(data.get("email") || "").trim(),
        company: String(data.get("company") || "").trim() || undefined,
        country: String(data.get("country") || country).trim(),
        phone: String(data.get("phone") || "").trim() || undefined,
        message: String(data.get("experience") || "").trim() || undefined,
      });
      setSubmitted(true);
      form.reset();
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Unable to submit application. Please try again.",
      );
    } finally {
      setPending(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex min-h-120 flex-col items-center justify-center border border-slate-200 bg-slate-50 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center bg-brand-500 text-navy-950">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-6 text-xl font-bold text-navy-950">
          Application received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-slate-600">
          Thank you for your interest in becoming an FMS Africa reseller in{" "}
          {country}. Our partnerships team will be in touch shortly.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 border border-navy-950 px-6 py-3 text-xs font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-navy-950 hover:text-brand-500"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border border-slate-200 bg-white p-8 sm:p-10"
      id="apply"
    >
      <h3 className="text-2xl font-bold text-navy-950">
        Join our reseller program today
      </h3>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Unlock your pathway to success — tell us about your business and target
        market.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="company"
            className="block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Company name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-950 focus:border-brand-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="country"
            className="block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Target country
          </label>
          <select
            id="country"
            name="country"
            required
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-950 focus:border-brand-500 focus:outline-none"
          >
            {regionOptions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="contactName"
            className="block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Contact name
          </label>
          <input
            id="contactName"
            name="contactName"
            type="text"
            required
            className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-950 focus:border-brand-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-950 focus:border-brand-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className="mt-2 w-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-950 focus:border-brand-500 focus:outline-none"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="experience"
            className="block text-xs font-bold uppercase tracking-wider text-slate-500"
          >
            Tell us about your business
          </label>
          <textarea
            id="experience"
            name="experience"
            required
            rows={4}
            placeholder="Your market experience, existing client base, and why you want to partner with FMS Africa..."
            className="mt-2 w-full resize-none border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-navy-950 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none"
          />
        </div>
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-500"
        />
        <span className="text-xs leading-5 text-slate-500">
          I agree to the Terms of Use and{" "}
          <Link
            href="/privacy-policy"
            className="text-navy-800 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error && (
        <p className="mt-4 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full bg-brand-500 py-4 text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Submit application"}
      </button>
    </form>
  );
}
