"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  csrCategories,
  csrInitiatives,
  type CsrCategory,
  type CsrInitiative,
} from "./csr-data";

export default function CsrInitiatives() {
  const [activeCategory, setActiveCategory] = useState<CsrCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(
    () =>
      activeCategory === "all"
        ? csrInitiatives
        : csrInitiatives.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  const featured = filtered.find((item) => item.featured);
  const rest = filtered.filter((item) => !item.featured);

  const openLightbox = (item: CsrInitiative) => {
    const index = filtered.findIndex((entry) => entry.id === item.id);
    if (index >= 0) setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current === 0 ? filtered.length - 1 : current - 1;
    });
  }, [filtered.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current === filtered.length - 1 ? 0 : current + 1;
    });
  }, [filtered.length]);

  useEffect(() => {
    setLightboxIndex(null);
  }, [activeCategory]);

  useEffect(() => {
    if (lightboxIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, closeLightbox, showPrevious, showNext]);

  const activeItem =
    lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2">
        {csrCategories.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActiveCategory(id)}
            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors ${
              activeCategory === id
                ? "bg-navy-950 text-brand-500"
                : "bg-slate-100 text-navy-800 hover:bg-navy-950 hover:text-brand-500"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="py-16 text-center text-slate-500">
          No initiatives in this category.
        </p>
      ) : (
        <div className="mt-10 space-y-8">
          {/* Featured initiative */}
          {featured && (
            <article className="grid overflow-hidden border border-slate-200 lg:grid-cols-2">
              <button
                type="button"
                onClick={() => openLightbox(featured)}
                className="group relative min-h-72 overflow-hidden bg-slate-100 text-left lg:min-h-96"
                aria-label={`View ${featured.title}`}
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-navy-950/0 transition-colors group-hover:bg-navy-950/40" />
                <span className="absolute bottom-4 left-4 bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-navy-950 opacity-0 transition-opacity group-hover:opacity-100">
                  View photo
                </span>
              </button>
              <div className="flex flex-col justify-center bg-navy-950 p-8 sm:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-500">
                  Featured initiative
                </span>
                <h3 className="mt-4 text-2xl font-bold leading-snug text-white sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-2 text-sm font-bold text-white/60">
                  Partner: {featured.partner}
                </p>
                <p className="mt-5 text-sm leading-7 text-white/75">
                  {featured.description}
                </p>
                <button
                  type="button"
                  onClick={() => openLightbox(featured)}
                  className="mt-8 self-start border border-brand-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-brand-500 transition-colors hover:bg-brand-500 hover:text-navy-950"
                >
                  View initiative photo
                </button>
              </div>
            </article>
          )}

          {/* Remaining initiatives */}
          {rest.length > 0 && (
            <div className="grid gap-8 sm:grid-cols-2">
              {rest.map((item) => (
                <article
                  key={item.id}
                  className="group overflow-hidden border border-slate-200 transition-colors hover:border-brand-500"
                >
                  <button
                    type="button"
                    onClick={() => openLightbox(item)}
                    className="relative block aspect-square w-full overflow-hidden bg-slate-100"
                    aria-label={`View ${item.title}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-navy-950/0 transition-colors group-hover:bg-navy-950/40" />
                  </button>
                  <div className="p-6">
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                      {csrCategories.find((c) => c.id === item.category)?.label}
                    </span>
                    <h3 className="mt-2 text-lg font-bold text-navy-950">
                      {item.partner}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => openLightbox(item)}
                      className="mt-4 text-xs font-bold uppercase tracking-wider text-navy-800 transition-colors hover:text-brand-600"
                    >
                      View photo →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Lightbox */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Initiative photo viewer"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-default"
            aria-label="Close viewer"
          />

          <button
            type="button"
            onClick={closeLightbox}
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

          {filtered.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-950 sm:left-6"
                aria-label="Previous"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M15 6l-6 6 6 6" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-950 sm:right-6"
                aria-label="Next"
              >
                <svg
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </button>
            </>
          )}

          <figure className="relative z-10 max-h-[90dvh] max-w-4xl">
            <Image
              src={activeItem.image}
              alt={activeItem.title}
              width={1200}
              height={900}
              className="max-h-[75dvh] w-auto object-contain"
              priority
            />
            <figcaption className="mt-4 border-t border-white/20 pt-4 text-center">
              <p className="text-lg font-bold text-white">{activeItem.title}</p>
              <p className="mt-1 text-sm text-brand-500">
                {activeItem.partner}
                <span className="mx-2 text-white/40">|</span>
                {lightboxIndex + 1} / {filtered.length}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
