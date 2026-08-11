"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";

export default function AccreditationCertificate() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, close]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="group relative mx-auto block w-full max-w-2xl border-4 border-navy-950 bg-white p-3 transition-colors hover:border-brand-500 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-500"
        aria-label="View ISO 45001:2018 certificate full size"
      >
        <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
          <Image
            src="/assets/accreditations/iso-45001-certificate.png"
            alt="ISO 45001:2018 certificate for Fleet Monitoring Systems Ltd"
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-contain p-4 transition-transform duration-500 group-hover:scale-[1.02]"
            priority
          />
        </div>
        <span className="mt-4 block text-center text-xs font-bold uppercase tracking-widest text-navy-600 group-hover:text-brand-600">
          Click to view full certificate
        </span>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Certificate viewer"
        >
          <button
            type="button"
            onClick={close}
            className="absolute inset-0 cursor-default"
            aria-label="Close certificate viewer"
          />

          <button
            type="button"
            onClick={close}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-950 sm:right-6 sm:top-6"
            aria-label="Close"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <figure className="relative z-10 max-h-[90dvh] max-w-4xl">
            <Image
              src="/assets/accreditations/iso-45001-certificate.png"
              alt="ISO 45001:2018 certificate for Fleet Monitoring Systems Ltd"
              width={1536}
              height={1536}
              className="max-h-[85dvh] w-auto object-contain"
              priority
            />
            <figcaption className="mt-4 border-t border-white/20 pt-4 text-center">
              <p className="text-lg font-bold text-white">
                ISO 45001:2018 — Occupational Health &amp; Safety
              </p>
              <p className="mt-1 text-sm text-brand-500">
                Fleet Monitoring Systems Ltd, Uganda
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
