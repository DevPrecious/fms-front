import Image from "next/image";
import Link from "next/link";
import {
  BeforeAfterBlock,
  ComparisonBlockUI,
  InteractiveGalleryBlockUI,
  ServiceAccordionBlock,
  ServiceTabsBlock,
  StatsBlockUI,
} from "@/components/service-blocks-interactive";
import type {
  ServiceBlock,
  ServicePageData,
} from "@/components/services-data";

function StepsBlock({ steps }: { steps: ServiceBlock & { type: "steps" } }) {
  return (
    <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">
      {steps.steps.map((step) => (
        <div key={step.number} className="bg-white p-8">
          <span className="flex h-10 w-10 items-center justify-center bg-brand-500 text-sm font-bold text-navy-950">
            {step.number}
          </span>
          <h3 className="mt-5 text-base font-bold text-navy-950">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function FeaturesBlock({
  features,
  columns = 3,
}: {
  features: ServiceBlock & { type: "features" };
  columns?: 2 | 3 | 4;
}) {
  const colClass =
    columns === 4
      ? "sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "sm:grid-cols-2"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-px bg-slate-200 ${colClass}`}>
      {features.features.map((feature) => (
        <div key={feature.title} className="flex flex-col bg-white p-8">
          {feature.image && (
            <div className="relative mb-6 h-40 overflow-hidden">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 640px) 100vw, 300px"
                className="object-contain object-left"
                unoptimized={feature.image.endsWith(".gif")}
              />
            </div>
          )}
          <h3 className="text-base font-bold text-navy-950">{feature.title}</h3>
          <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function SplitBlock({ block }: { block: ServiceBlock & { type: "split" } }) {
  const content = (
    <div className="flex flex-col justify-center">
      {block.title && (
        <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">
          {block.title}
        </h2>
      )}
      {block.paragraphs.map((p, i) => (
        <p key={i} className="mt-4 text-base leading-8 text-slate-600">
          {p}
        </p>
      ))}
    </div>
  );

  const imageEl = (
    <div className="relative min-h-64 overflow-hidden bg-slate-50">
      <Image
        src={block.image}
        alt={block.imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-contain p-4"
        unoptimized={block.image.endsWith(".gif")}
      />
    </div>
  );

  return (
    <div className="grid items-center gap-8 border border-slate-200 lg:grid-cols-2 lg:gap-0">
      {block.reverse ? (
        <>
          {imageEl}
          <div className="p-8 sm:p-12">{content}</div>
        </>
      ) : (
        <>
          <div className="p-8 sm:p-12">{content}</div>
          {imageEl}
        </>
      )}
    </div>
  );
}

function SubsectionBlock({
  block,
}: {
  block: ServiceBlock & { type: "subsection" };
}) {
  return (
    <div className="border border-slate-200">
      <div className="border-b border-slate-200 bg-slate-50 px-8 py-6 sm:px-12">
        <h2 className="text-2xl font-bold text-navy-950">{block.title}</h2>
        {block.subtitle && (
          <p className="mt-2 text-sm font-bold uppercase tracking-wider text-brand-600">
            {block.subtitle}
          </p>
        )}
        {block.paragraphs?.map((p, i) => (
          <p key={i} className="mt-4 text-base leading-8 text-slate-600">
            {p}
          </p>
        ))}
      </div>

      {block.image && (
        <div className="relative aspect-video w-full overflow-hidden bg-white">
          <Image
            src={block.image}
            alt={block.imageAlt ?? block.title}
            fill
            sizes="100vw"
            className="object-contain p-4"
            unoptimized={block.image.endsWith(".gif")}
          />
        </div>
      )}

      {block.features && block.features.length > 0 && (
        <div className="grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {block.features.map((f) => (
            <div key={f.title} className="bg-white p-8">
              <h3 className="text-base font-bold text-navy-950">{f.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function GalleryBlock({ block }: { block: ServiceBlock & { type: "gallery" } }) {
  const colClass =
    block.columns === 2
      ? "sm:grid-cols-2"
      : block.columns === 4
        ? "sm:grid-cols-2 lg:grid-cols-4"
        : "sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid gap-4 ${colClass}`}>
      {block.images.map((img) => (
        <div
          key={img.src}
          className="relative aspect-square overflow-hidden border border-slate-200 bg-slate-50"
        >
          <Image
            src={img.src}
            alt={img.alt}
            fill
            sizes="(max-width: 640px) 100vw, 300px"
            className="object-contain p-3"
          />
        </div>
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: ServiceBlock }) {
  switch (block.type) {
    case "intro":
      return (
        <div className="max-w-3xl space-y-4">
          {block.paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-8 text-slate-600">
              {p}
            </p>
          ))}
        </div>
      );

    case "heading":
      return (
        <div>
          <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">
            {block.title}
          </h2>
          {block.subtitle && (
            <p className="mt-3 text-base leading-8 text-slate-600">
              {block.subtitle}
            </p>
          )}
        </div>
      );

    case "steps":
      return <StepsBlock steps={block} />;

    case "features":
      return <FeaturesBlock features={block} columns={block.columns} />;

    case "split":
      return <SplitBlock block={block} />;

    case "image":
      return (
        <figure>
          <div className="relative aspect-video w-full overflow-hidden border border-slate-200 bg-slate-50">
            <Image
              src={block.src}
              alt={block.alt}
              fill
              sizes="100vw"
              className="object-contain p-4"
            />
          </div>
          {block.caption && (
            <figcaption className="mt-3 text-center text-sm text-slate-500">
              {block.caption}
            </figcaption>
          )}
        </figure>
      );

    case "gallery":
      return <GalleryBlock block={block} />;

    case "list":
      return (
        <div>
          {block.title && (
            <h2 className="mb-4 text-2xl font-bold text-navy-950">
              {block.title}
            </h2>
          )}
          <ul className="space-y-3">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-3 text-base leading-8 text-slate-600"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case "numbered-list":
      return (
        <div>
          {block.title && (
            <h2 className="mb-4 text-2xl font-bold text-navy-950">
              {block.title}
            </h2>
          )}
          <ol className="space-y-3">
            {block.items.map((item, i) => (
              <li
                key={i}
                className="flex gap-4 text-base leading-8 text-slate-600"
              >
                <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-brand-500 text-xs font-bold text-navy-950">
                  {i + 1}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      );

    case "subsection":
      return <SubsectionBlock block={block} />;

    case "tabs":
      return <ServiceTabsBlock title={block.title} tabs={block.tabs} />;

    case "accordion":
      return (
        <ServiceAccordionBlock title={block.title} items={block.items} />
      );

    case "before-after":
      return (
        <BeforeAfterBlock
          title={block.title}
          beforeLabel={block.beforeLabel}
          afterLabel={block.afterLabel}
          before={block.before}
          after={block.after}
          image={block.image}
          imageAlt={block.imageAlt}
        />
      );

    case "comparison":
      return <ComparisonBlockUI block={block} />;

    case "interactive-gallery":
      return <InteractiveGalleryBlockUI block={block} />;

    case "stats":
      return <StatsBlockUI block={block} />;

    default:
      return null;
  }
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <p className="text-sm text-slate-500">
            <Link
              href="/services"
              className="transition-colors hover:text-navy-950"
            >
              Services
            </Link>
            <span aria-hidden="true"> &gt; </span>
            <span className="text-navy-950">{data.title}</span>
          </p>

          <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
            <div>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
                {data.title}
              </h1>
              {data.tagline && (
                <p className="mt-4 text-lg font-bold uppercase tracking-wide text-brand-600">
                  {data.tagline}
                </p>
              )}
            </div>

            {data.callout && (
              <aside className="bg-navy-950 p-6 sm:p-8">
                <span className="flex h-10 w-10 items-center justify-center bg-brand-500">
                  <svg
                    className="h-5 w-5 text-navy-950"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm0 2.5l5.5 3.4v6.2L12 17.5l-5.5-3.4V7.9L12 4.5z" />
                  </svg>
                </span>
                <p className="mt-5 text-sm leading-7 text-white/80">
                  {data.callout}
                </p>
              </aside>
            )}
          </div>
        </div>

        <div className="relative mt-12 aspect-21/9 w-full overflow-hidden sm:mt-16">
          <Image
            src={data.heroImage}
            alt={data.heroImageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            unoptimized={data.heroImage.endsWith(".gif")}
          />
        </div>
      </section>

      {/* Content blocks */}
      <section className="mx-auto max-w-7xl space-y-16 px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        {data.blocks.map((block, i) => (
          <BlockRenderer key={i} block={block} />
        ))}
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/landing/trucks-highway.jpg"
          alt=""
          width={2000}
          height={1326}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Get started with a free consultation
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
            Interested in {data.title.toLowerCase()}? Leave us a message and
            we&apos;ll reply as soon as we can.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/about-us/contact-us"
              className="bg-brand-500 px-8 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              Request a free quote
            </Link>
            <Link
              href="/about-us/contact-us"
              className="border border-white/30 px-8 py-3.5 text-sm font-bold text-white transition-colors hover:border-white"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
