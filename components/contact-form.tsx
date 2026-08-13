"use client";

import Link from "next/link";
import { useState } from "react";
import { submitContactMessage } from "@/lib/cms";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");
    setPending(true);
    const form = event.currentTarget;
    const data = new FormData(form);
    const firstName = String(data.get("firstName") || "").trim();
    const lastName = String(data.get("lastName") || "").trim();
    try {
      await submitContactMessage({
        name: `${firstName} ${lastName}`.trim(),
        email: String(data.get("email") || "").trim(),
        phone: String(data.get("phone") || "").trim() || undefined,
        message: String(data.get("message") || "").trim(),
        source: "contact-page",
      });
      setSubmitted(true);
      form.reset();
    } catch (e) {
      setError(
        e instanceof Error
          ? e.message
          : "Unable to send message. Please try again.",
      );
    } finally {
      setPending(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex h-full min-h-120 flex-col items-center justify-center bg-navy-900 p-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center bg-brand-500 text-navy-950">
          <svg
            className="h-7 w-7"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-6 text-xl font-bold text-white">Message sent</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/70">
          Thank you for contacting FMS Africa. Our team will reply as soon as
          possible.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-8 border border-brand-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-brand-500 transition-colors hover:bg-brand-500 hover:text-navy-950"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-navy-900 p-8 sm:p-10 lg:p-12">
      <h3 className="text-xl font-bold text-white sm:text-2xl">
        Send us a message
      </h3>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-bold uppercase tracking-wider text-white/50"
          >
            First name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="Jane"
            className="mt-2 w-full border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-xs font-bold uppercase tracking-wider text-white/50"
          >
            Last name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            className="mt-2 w-full border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-bold uppercase tracking-wider text-white/50"
          >
            Your email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@company.com"
            className="mt-2 w-full border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-500 focus:outline-none"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-xs font-bold uppercase tracking-wider text-white/50"
          >
            Your phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+234 ..."
            className="mt-2 w-full border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-white/50"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="How can we help you?"
          className="mt-2 w-full resize-none border border-navy-700 bg-navy-950 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-brand-500 focus:outline-none"
        />
      </div>

      <label className="mt-5 flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          required
          className="mt-0.5 h-4 w-4 shrink-0 accent-brand-500"
        />
        <span className="text-xs leading-5 text-white/60">
          I agree to the Terms of Use and{" "}
          <Link
            href="/privacy-policy"
            className="text-brand-400 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      {error && (
        <p className="mt-4 text-sm text-red-300" role="alert">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-8 w-full bg-brand-500 py-4 text-sm font-bold uppercase tracking-wider text-navy-950 transition-colors hover:bg-brand-400 disabled:opacity-60"
      >
        {pending ? "Submitting…" : "Submit"}
      </button>
    </form>
  );
}
