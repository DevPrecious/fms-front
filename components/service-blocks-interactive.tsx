"use client";

import { useState } from "react";
import Image from "next/image";
import type {
  AccordionItem,
  ComparisonBlock,
  InteractiveGalleryBlock,
  ServiceFeature,
  StatsBlock,
  TabItem,
} from "@/components/services-data";

export function ServiceTabsBlock({
  title,
  tabs,
}: {
  title?: string;
  tabs: TabItem[];
}) {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <div className="border border-slate-200">
      {title && (
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy-950">{title}</h2>
        </div>
      )}

      <div
        className="flex flex-wrap gap-0 border-b border-slate-200"
        role="tablist"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.label}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={`border-b-2 px-5 py-4 text-sm font-bold transition-colors sm:px-6 ${
              active === i
                ? "border-brand-500 bg-white text-navy-950"
                : "border-transparent bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-navy-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-6 sm:p-10" role="tabpanel">
        {current.image && (
          <div className="relative mb-8 aspect-video overflow-hidden border border-slate-200 bg-slate-50">
            <Image
              src={current.image}
              alt={current.imageAlt ?? current.label}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-contain p-4"
              unoptimized={current.image.endsWith(".gif")}
            />
          </div>
        )}

        {current.paragraphs?.map((p, i) => (
          <p key={i} className="mb-4 text-base leading-8 text-slate-600">
            {p}
          </p>
        ))}

        {current.items && (
          <ul className="space-y-3">
            {current.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-8 text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {current.features && (
          <div className="mt-6 grid gap-px bg-slate-200 sm:grid-cols-2">
            {current.features.map((f) => (
              <FeatureCard key={f.title} feature={f} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function FeatureCard({ feature }: { feature: ServiceFeature }) {
  return (
    <div className="bg-white p-6">
      {feature.image && (
        <div className="relative mb-4 h-32 overflow-hidden">
          <Image
            src={feature.image}
            alt={feature.title}
            fill
            sizes="200px"
            className="object-contain object-left"
          />
        </div>
      )}
      <h3 className="text-base font-bold text-navy-950">{feature.title}</h3>
      <p className="mt-2 text-sm leading-7 text-slate-600">
        {feature.description}
      </p>
    </div>
  );
}

export function ServiceAccordionBlock({
  title,
  items,
}: {
  title?: string;
  items: AccordionItem[];
}) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {title && (
        <h2 className="mb-8 text-2xl font-bold text-navy-950 sm:text-3xl">
          {title}
        </h2>
      )}
      <div className="space-y-3">
        {items.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article
              key={item.title}
              className={`border transition-colors ${
                isOpen
                  ? "border-navy-950 bg-slate-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left sm:p-8"
                aria-expanded={isOpen}
              >
                <h3 className="text-lg font-bold text-navy-950">{item.title}</h3>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center border transition-all ${
                    isOpen
                      ? "rotate-45 border-brand-500 bg-brand-500 text-navy-950"
                      : "border-slate-300 text-navy-900"
                  }`}
                >
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </button>
              {isOpen && (
                <div className="border-t border-slate-200 px-6 pb-6 sm:px-8 sm:pb-8">
                  <p className="text-base leading-8 text-slate-600">
                    {item.description}
                  </p>
                  {item.image && (
                    <div className="relative mt-6 aspect-video overflow-hidden border border-slate-200 bg-white">
                      <Image
                        src={item.image}
                        alt={item.imageAlt ?? item.title}
                        fill
                        sizes="800px"
                        className="object-contain p-4"
                      />
                    </div>
                  )}
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function BeforeAfterBlock({
  title,
  beforeLabel = "Before",
  afterLabel = "After",
  before,
  after,
  image,
  imageAlt,
}: {
  title?: string;
  beforeLabel?: string;
  afterLabel?: string;
  before: string[];
  after: string[];
  image?: string;
  imageAlt?: string;
}) {
  const [mode, setMode] = useState<"before" | "after">("before");
  const items = mode === "before" ? before : after;

  return (
    <div className="border border-slate-200">
      {title && (
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy-950">{title}</h2>
        </div>
      )}

      <div className="flex border-b border-slate-200">
        <button
          type="button"
          onClick={() => setMode("before")}
          className={`flex-1 px-6 py-4 text-sm font-bold transition-colors ${
            mode === "before"
              ? "bg-navy-950 text-white"
              : "bg-slate-50 text-slate-500 hover:text-navy-800"
          }`}
        >
          {beforeLabel}
        </button>
        <button
          type="button"
          onClick={() => setMode("after")}
          className={`flex-1 px-6 py-4 text-sm font-bold transition-colors ${
            mode === "after"
              ? "bg-brand-500 text-navy-950"
              : "bg-slate-50 text-slate-500 hover:text-navy-800"
          }`}
        >
          {afterLabel}
        </button>
      </div>

      <div className="grid lg:grid-cols-2">
        <ul className="space-y-4 p-6 sm:p-10">
          {items.map((item, i) => (
            <li
              key={i}
              className="flex gap-3 text-base leading-8 text-slate-600"
            >
              <span
                className={`mt-2 h-1.5 w-1.5 shrink-0 ${
                  mode === "after" ? "bg-brand-500" : "bg-slate-400"
                }`}
              />
              {item}
            </li>
          ))}
        </ul>
        {image && (
          <div className="relative min-h-64 border-t border-slate-200 bg-slate-50 lg:border-t-0 lg:border-l">
            <Image
              src={image}
              alt={imageAlt ?? title ?? "Monitoring comparison"}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain p-6"
              unoptimized={image.endsWith(".gif")}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export function ComparisonBlockUI({ block }: { block: ComparisonBlock }) {
  const [side, setSide] = useState<"left" | "right">("left");
  const active =
    side === "left"
      ? {
          title: block.leftTitle,
          features: block.leftFeatures,
          image: block.leftImage,
        }
      : {
          title: block.rightTitle,
          features: block.rightFeatures,
          image: block.rightImage,
        };

  return (
    <div className="border border-slate-200">
      {block.title && (
        <div className="border-b border-slate-200 bg-slate-50 px-6 py-5 sm:px-8">
          <h2 className="text-2xl font-bold text-navy-950">{block.title}</h2>
        </div>
      )}

      <div className="grid sm:grid-cols-2">
        <button
          type="button"
          onClick={() => setSide("left")}
          className={`border-b border-slate-200 px-6 py-5 text-left transition-colors sm:border-b-0 sm:border-r ${
            side === "left"
              ? "bg-navy-950 text-white"
              : "bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          <span className="text-lg font-bold">{block.leftTitle}</span>
          <p className="mt-1 text-sm opacity-80">Tap to explore features</p>
        </button>
        <button
          type="button"
          onClick={() => setSide("right")}
          className={`px-6 py-5 text-left transition-colors ${
            side === "right"
              ? "bg-brand-500 text-navy-950"
              : "bg-white text-slate-600 hover:bg-slate-50"
          }`}
        >
          <span className="text-lg font-bold">{block.rightTitle}</span>
          <p className="mt-1 text-sm opacity-80">Tap to explore features</p>
        </button>
      </div>

      <div className="grid lg:grid-cols-2">
        {active.image && (
          <div className="relative min-h-56 overflow-hidden border-b border-slate-200 bg-slate-50 lg:min-h-72 lg:border-b-0 lg:border-r">
            <Image
              src={active.image}
              alt={active.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        )}
        <div className="p-6 sm:p-10">
          <h3 className="text-xl font-bold text-navy-950">{active.title}</h3>
          <div className="mt-6 space-y-6">
            {active.features.map((f) => (
              <div key={f.title}>
                <h4 className="font-bold text-navy-800">{f.title}</h4>
                <p className="mt-2 text-sm leading-7 text-slate-600">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function InteractiveGalleryBlockUI({
  block,
}: {
  block: InteractiveGalleryBlock;
}) {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const images = block.images;

  return (
    <div>
      {block.title && (
        <h2 className="mb-8 text-2xl font-bold text-navy-950 sm:text-3xl">
          {block.title}
        </h2>
      )}

      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div className="relative aspect-video overflow-hidden border border-slate-200 bg-slate-50">
          <Image
            src={images[active].src}
            alt={images[active].alt}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="cursor-zoom-in object-contain p-4"
            onClick={() => setLightbox(active)}
          />
          {images[active].caption && (
            <p className="absolute bottom-0 left-0 right-0 bg-navy-950/80 px-4 py-2 text-sm text-white">
              {images[active].caption}
            </p>
          )}
        </div>

        <div className="grid grid-cols-3 gap-2 lg:grid-cols-2">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={`relative aspect-square overflow-hidden border-2 transition-colors ${
                active === i
                  ? "border-brand-500"
                  : "border-slate-200 hover:border-slate-400"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="120px"
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <button
          type="button"
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-950/90 p-4"
          onClick={() => setLightbox(null)}
          aria-label="Close image preview"
        >
          <div
            className="relative max-h-[90vh] max-w-5xl flex-1 aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[lightbox].src}
              alt={images[lightbox].alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </button>
      )}
    </div>
  );
}

export function StatsBlockUI({ block }: { block: StatsBlock }) {
  return (
    <div className="border border-slate-200 bg-navy-950 px-6 py-12 sm:px-10">
      {block.title && (
        <h2 className="mb-10 text-center text-2xl font-bold text-white sm:text-3xl">
          {block.title}
        </h2>
      )}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {block.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-4xl font-bold text-brand-500 sm:text-5xl">
              {stat.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
