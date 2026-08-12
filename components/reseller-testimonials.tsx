"use client";

import { useCallback, useEffect, useState } from "react";
import { testimonials } from "./reseller-data";

export default function ResellerTestimonials({
  items = testimonials,
}: {
  items?: typeof testimonials;
} = {}) {
  const source = items.length > 0 ? items : testimonials;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const showNext = useCallback(() => {
    setActive((current) => (current + 1) % source.length);
  }, [source.length]);

  const showPrevious = useCallback(() => {
    setActive(
      (current) =>
        (current - 1 + source.length) % source.length,
    );
  }, [source.length]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(showNext, 6000);
    return () => clearInterval(id);
  }, [paused, showNext]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [showNext, showPrevious]);

  const current = source[active];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="overflow-hidden border border-white/10 bg-navy-900 p-8 sm:p-12 lg:p-16">
        <svg
          className="h-8 w-8 text-brand-500"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M4 12c0-4 2.4-6.7 6-8l.8 1.6C8.6 6.8 7.4 8.4 7.2 10H10v7H4v-5zm10 0c0-4 2.4-6.7 6-8l.8 1.6c-2.2 1.2-3.4 2.8-3.6 4.4H20v7h-6v-5z" />
        </svg>

        <blockquote className="mt-8 min-h-32 text-xl font-medium leading-9 text-white sm:text-2xl sm:leading-10">
          &ldquo;{current.quote}&rdquo;
        </blockquote>

        <footer className="mt-8 flex items-center gap-4 border-t border-white/10 pt-8">
          <span className="flex h-12 w-12 items-center justify-center bg-brand-500 text-lg font-bold text-navy-950">
            {current.author.charAt(0)}
          </span>
          <div>
            <p className="font-bold text-white">{current.author}</p>
            <p className="text-sm text-brand-500">{current.company}</p>
          </div>
        </footer>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <div className="flex gap-2">
          {source.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              aria-label={`Go to testimonial ${index + 1}`}
              aria-current={index === active}
              className={`h-1 transition-all ${
                index === active
                  ? "w-10 bg-brand-500"
                  : "w-6 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous testimonial"
            className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-950"
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
              <path d="M15 6l-6 6 6 6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={showNext}
            aria-label="Next testimonial"
            className="flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-950"
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
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
