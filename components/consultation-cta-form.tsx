"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export type ConsultationCtaProps = {
  image?: string;
  headline?: string;
  body?: string;
  buttonLabel?: string;
  href?: string;
};

export default function ConsultationCtaForm({
  image = "/assets/landing/hero-fleet.jpg",
  headline = "Get started with a free consultation",
  body = "Discover fleet and asset solutions that reduce costs and improve visibility. Take the first step today.",
  buttonLabel = "Get a free consultation",
  href = "/about-us/contact-us",
}: ConsultationCtaProps) {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = phone.trim()
      ? `?phone=${encodeURIComponent(phone.trim())}`
      : "";
    router.push(`${href}${params}`);
  }

  return (
    <section className="relative isolate min-h-[28rem] w-full overflow-hidden sm:min-h-[32rem]">
      <Image
        key={image}
        src={image}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 mx-auto flex min-h-[28rem] max-w-4xl flex-col items-center justify-center px-6 py-16 text-center sm:min-h-[32rem]">
        <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
          {headline}
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-7 text-white/90 sm:text-base">
          {body}
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-full max-w-xl flex-col overflow-hidden bg-white shadow-xl sm:flex-row"
        >
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone number"
            className="min-w-0 flex-1 px-5 py-4 text-sm text-navy-900 outline-none placeholder:text-slate-400"
            aria-label="Phone number"
          />
          <button
            type="submit"
            className="shrink-0 bg-brand-500 px-5 py-4 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400 sm:px-8"
          >
            {buttonLabel}
          </button>
        </form>
      </div>
    </section>
  );
}
