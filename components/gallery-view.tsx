"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  galleryCategories,
  galleryItems,
  type GalleryCategory,
  type GalleryItem,
} from "./gallery-data";

export default function GalleryView({
  items = galleryItems,
}: {
  items?: GalleryItem[];
} = {}) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const sourceItems = items.length > 0 ? items : galleryItems;

  const filteredItems = useMemo(
    () =>
      activeCategory === "all"
        ? sourceItems
        : sourceItems.filter((item) => item.category === activeCategory),
    [activeCategory, sourceItems],
  );

  const openLightbox = (item: GalleryItem) => {
    const index = filteredItems.findIndex((entry) => entry.id === item.id);
    if (index >= 0) setLightboxIndex(index);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const showPrevious = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current === 0 ? filteredItems.length - 1 : current - 1;
    });
  }, [filteredItems.length]);

  const showNext = useCallback(() => {
    setLightboxIndex((current) => {
      if (current === null) return null;
      return current === filteredItems.length - 1 ? 0 : current + 1;
    });
  }, [filteredItems.length]);

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
    lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <>
      {/* Filter bar */}
      <div className="sticky top-27 z-40 border-y border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {galleryCategories.map(({ id, label }) => (
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
          <p className="text-sm text-slate-500">
            {filteredItems.length}{" "}
            {filteredItems.length === 1 ? "photo" : "photos"}
          </p>
        </div>
      </div>

      {/* Masonry grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {filteredItems.length === 0 ? (
          <p className="py-20 text-center text-slate-500">
            No photos in this category.
          </p>
        ) : (
          <div className="columns-1 gap-3 sm:columns-2 lg:columns-3">
            {filteredItems.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => openLightbox(item)}
                className="group relative mb-3 block w-full break-inside-avoid overflow-hidden border border-slate-200 bg-slate-100 text-left transition-colors hover:border-brand-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label={`View ${item.title}`}
              >
                <Image
                  src={item.src}
                  alt={item.title}
                  width={800}
                  height={600}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={index < 3}
                />
                <div className="absolute inset-0 bg-navy-950/0 transition-colors group-hover:bg-navy-950/50" />
                <div className="absolute inset-x-0 bottom-0 translate-y-full bg-navy-950/90 px-4 py-3 transition-transform duration-300 group-hover:translate-y-0">
                  <p className="text-sm font-bold text-white">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-brand-500">
                    {galleryCategories.find((c) => c.id === item.category)
                      ?.label ?? item.category}
                  </p>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      {activeItem && lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95"
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute inset-0 cursor-default"
            aria-label="Close lightbox"
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

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-2 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-950 sm:left-6"
            aria-label="Previous image"
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
            aria-label="Next image"
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

          <figure className="relative z-10 mx-4 flex max-h-[85dvh] max-w-6xl flex-col items-center sm:mx-16">
            <div className="relative max-h-[75dvh] w-full">
              <Image
                src={activeItem.src}
                alt={activeItem.title}
                width={1400}
                height={1000}
                className="mx-auto max-h-[75dvh] w-auto object-contain"
                priority
              />
            </div>
            <figcaption className="mt-4 w-full border-t border-white/20 pt-4 text-center">
              <p className="text-lg font-bold text-white">{activeItem.title}</p>
              <p className="mt-1 text-sm text-brand-500">
                {lightboxIndex + 1} / {filteredItems.length}
                <span className="mx-2 text-white/40">|</span>
                {galleryCategories.find((c) => c.id === activeItem.category)
                  ?.label}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
