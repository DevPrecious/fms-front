"use client";

export type TestimonialItem = {
  quote: string;
  author?: string;
  company: string;
};

type Props = {
  items: TestimonialItem[];
  eyebrow?: string;
  headline?: string;
  className?: string;
};

function Card({ item }: { item: TestimonialItem }) {
  const name = item.author || item.company;
  const role = item.author ? item.company : "FMS Africa Client";
  const initial = name.charAt(0).toUpperCase();

  return (
    <article className="w-80 shrink-0 border border-slate-200 bg-white p-6 sm:w-96">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-brand-500">
          {initial}
        </span>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-navy-900">{name}</p>
          <p className="truncate text-xs text-slate-500">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">
        &ldquo;{item.quote}&rdquo;
      </p>
    </article>
  );
}

function Row({
  items,
  reverse,
}: {
  items: TestimonialItem[];
  reverse?: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-5 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {loop.map((item, i) => (
          <Card key={`${item.company}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee({
  items,
  eyebrow = "Testimonials",
  headline = "What customers say.",
  className = "",
}: Props) {
  if (!items.length) return null;

  const mid = Math.ceil(items.length / 2);
  const rowA = items.slice(0, mid);
  const rowB = items.slice(mid);
  const top = rowA.length ? rowA : items;
  const bottom = rowB.length ? rowB : [...items].reverse();

  return (
    <section className={`overflow-hidden bg-white py-20 lg:py-28 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-widest text-slate-400">
          • {eyebrow} •
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {headline}
        </h2>
      </div>

      <div className="relative mt-12 space-y-5">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-linear-to-r from-white to-transparent sm:w-28" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l from-white to-transparent sm:w-28" />
        <Row items={top} />
        <Row items={bottom} reverse />
      </div>
    </section>
  );
}
