"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  clientCategories,
  clienteleLogos,
  type ClientCategory,
  type ClientLogo,
} from "./clientele-data";

function MarqueeRow({
  logos,
  reverse = false,
}: {
  logos: ClientLogo[];
  reverse?: boolean;
}) {
  const doubled = [...logos, ...logos];

  return (
    <div className="relative overflow-hidden border-y border-slate-200 bg-white">
      <div
        className={`flex w-max gap-px ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
      >
        {doubled.map((client, index) => (
          <div
            key={`${client.id}-${index}`}
            className="flex h-24 w-44 shrink-0 items-center justify-center border-r border-slate-100 bg-white px-6 grayscale transition-all hover:grayscale-0 hover:bg-slate-50 sm:h-28 sm:w-52"
            title={client.name}
          >
            <Image
              src={client.src}
              alt={client.name}
              width={180}
              height={80}
              className="max-h-14 w-auto object-contain sm:max-h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ClienteleView({
  logos = clienteleLogos,
}: {
  logos?: ClientLogo[];
} = {}) {
  const sourceLogos = logos.length > 0 ? logos : clienteleLogos;
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ClientCategory>("all");
  const [spotlight, setSpotlight] = useState<ClientLogo | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sourceLogos.filter((client) => {
      const matchesCategory =
        category === "all" || client.category === category;
      const matchesQuery =
        !q ||
        client.name.toLowerCase().includes(q) ||
        client.id.includes(q);
      return matchesCategory && matchesQuery;
    });
  }, [query, category, sourceLogos]);

  const rowA = useMemo(
    () => sourceLogos.filter((_, i) => i % 2 === 0),
    [sourceLogos],
  );
  const rowB = useMemo(
    () => sourceLogos.filter((_, i) => i % 2 === 1),
    [sourceLogos],
  );

  return (
    <>
      {/* Infinite marquee */}
      <div className="space-y-px">
        <MarqueeRow logos={rowA} />
        <MarqueeRow logos={rowB} reverse />
      </div>

      {/* Controls */}
      <div className="sticky top-27 z-40 border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search partners..."
            className="w-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-navy-950 placeholder:text-slate-400 focus:border-brand-500 focus:outline-none sm:max-w-xs"
          />
          <div className="flex flex-wrap gap-2">
            {clientCategories.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => setCategory(id)}
                className={`px-3 py-1.5 text-xs font-bold uppercase tracking-wider transition-colors ${
                  category === id
                    ? "bg-navy-950 text-brand-500"
                    : "bg-slate-100 text-navy-800 hover:bg-navy-950 hover:text-brand-500"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive grid */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <p className="mb-8 text-sm text-slate-500">
          Showing {filtered.length} of {sourceLogos.length} partners
        </p>

        {filtered.length === 0 ? (
          <p className="py-20 text-center text-slate-500">
            No partners match your search.
          </p>
        ) : (
          <div className="grid grid-cols-2 gap-px bg-slate-200 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {filtered.map((client) => (
              <button
                key={client.id}
                type="button"
                onClick={() => setSpotlight(client)}
                className="group relative flex aspect-4/3 flex-col items-center justify-center bg-white p-4 transition-colors hover:bg-navy-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
                aria-label={`View ${client.name}`}
              >
                <Image
                  src={client.src}
                  alt={client.name}
                  width={160}
                  height={80}
                  className="max-h-14 w-auto object-contain grayscale transition-all group-hover:max-h-16 group-hover:grayscale-0 sm:max-h-16"
                />
                <span className="mt-3 line-clamp-2 text-center text-[11px] font-bold uppercase tracking-wide text-slate-400 transition-colors group-hover:text-brand-500">
                  {client.name}
                </span>
                <span className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 bg-brand-500 transition-transform group-hover:scale-x-100" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Spotlight modal */}
      {spotlight && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/95 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`${spotlight.name} logo`}
        >
          <button
            type="button"
            onClick={() => setSpotlight(null)}
            className="absolute inset-0 cursor-default"
            aria-label="Close"
          />
          <button
            type="button"
            onClick={() => setSpotlight(null)}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center border border-white/30 text-white transition-colors hover:border-brand-500 hover:bg-brand-500 hover:text-navy-950"
            aria-label="Close spotlight"
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

          <figure className="relative z-10 max-w-lg border border-white/10 bg-white p-10 text-center">
            <Image
              src={spotlight.src}
              alt={spotlight.name}
              width={320}
              height={160}
              className="mx-auto max-h-32 w-auto object-contain"
              priority
            />
            <figcaption className="mt-8 border-t border-slate-200 pt-6">
              <p className="text-xl font-bold text-navy-950">{spotlight.name}</p>
              <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand-600">
                {clientCategories.find((c) => c.id === spotlight.category)
                  ?.label ?? spotlight.category}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
