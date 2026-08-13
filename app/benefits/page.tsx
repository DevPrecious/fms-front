import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BenefitsSteps from "@/components/benefits-steps";
import ConsultationCta from "@/components/consultation-cta";
import {
  benefitSteps as fallbackSteps,
  industryBenefits as fallbackIndustries,
  solutionPillars as fallbackPillars,
} from "@/components/benefits-data";
import { getBenefitsPage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Benefits",
  description:
    "Discover the benefits of FMS Africa GPS tracking, AI video telematics, fuel management and industry-specific fleet intelligence solutions.",
};

export default async function BenefitsPage() {
  const cms = await getBenefitsPage().catch(() => null);
  const benefitSteps = cms?.steps?.length ? cms.steps : fallbackSteps;
  const industryBenefits = cms?.industries?.length ? cms.industries : fallbackIndustries;
  const solutionPillars = cms?.pillars?.length ? cms.pillars : fallbackPillars;
  const heroHeadline = cms?.heroHeadline || "Effortless steps to fleet intelligence.";
  const intro = cms?.intro || "We provide customer-centric solutions tailored to the specific needs of each industry — empowering data-driven decisions that increase productivity and efficiency.";
  const heroImage = cms?.heroImage || "/assets/landing/trucks-highway.jpg";
  const stepsImage = cms?.stepsImage || "/assets/landing/hero-fleet.jpg";
  const stepsHeadline = cms?.stepsHeadline || "Our step-by-step approach.";
  const stats = cms?.stats?.length
    ? cms.stats
    : [
        { value: String(benefitSteps.length), label: "Core solution areas" },
        { value: "24/7", label: "Real-time monitoring" },
        { value: "15+", label: "Industry verticals served" },
        { value: "100%", label: "Customer-centric approach" },
      ];
  const ctaHeadline = cms?.ctaHeadline || "Join the connected fleet movement with FMS Africa";
  const ctaBody = cms?.ctaBody || "Don't leave success up to chance. Partner with us and chart your course to efficiency, security and peace of mind.";

  return (
    <div className="bg-white">
      {/* Hero — headline left, callout right, image below */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
          <div className="grid items-start gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              {heroHeadline}
            </h1>

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
                {intro}
              </p>
            </aside>
          </div>
        </div>

        <div className="relative mt-12 aspect-21/9 w-full overflow-hidden sm:mt-16">
          <Image
            src={heroImage}
            alt="FMS Africa fleet on the highway"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Step-by-step approach */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              {stepsHeadline}
            </h2>
            <div className="relative mt-10 min-h-100 overflow-hidden">
              <Image
                src={stepsImage}
                alt="Fleet monitoring in action"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <BenefitsSteps steps={benefitSteps} />
        </div>
      </section>

      {/* Industry solutions — dark panel (team-style section) */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
                By industry
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Solutions behind every sector.
              </h2>
            </div>
            <Link
              href="/services"
              className="bg-brand-500 px-6 py-3 text-sm font-bold text-navy-950 transition-colors hover:bg-brand-400"
            >
              All services
            </Link>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {industryBenefits.map(({ title, body }) => (
              <article
                key={title}
                className="border border-white/10 bg-navy-950 p-7 transition-colors hover:border-brand-500/50 hover:bg-navy-900"
              >
                <span className="inline-block h-1 w-8 bg-brand-500" />
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Solution pillars */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              Why FMS Africa
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Customer-centric solutions for every operation
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-4">
            {solutionPillars.map(({ title, body }) => (
              <div key={title} className="bg-white p-8">
                <span className="inline-block h-1 w-8 bg-brand-500" />
                <h3 className="mt-5 text-base font-bold text-navy-950">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-navy-900/10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="border-b border-navy-900/10 bg-navy-950 px-6 py-10 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="text-4xl font-bold tracking-tight text-brand-500 sm:text-5xl">
                {value}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCta
        image={cms?.ctaImage}
        headline={ctaHeadline}
        body={ctaBody}
      />
    </div>
  );
}
