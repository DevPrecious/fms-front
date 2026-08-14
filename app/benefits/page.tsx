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

const fallbackPromises = [
  "Reduce fuel losses and theft",
  "Reduce fleet and asset downtime",
  "Improve vehicle and driver productivity",
  "Reduce operational and safety risks",
  "Turn operational data into measurable financial intelligence",
];

const fallbackSlaPackages = [
  {
    name: "Silver",
    label: "Essential",
    resolution: "24 hrs",
    response: "4 HRS",
    desc: "Your entry into guaranteed support. A 4-hour response and next-day resolution keeps growing fleets fully covered.",
    features: [
      { label: "Response time", value: "4 hours", included: true },
      { label: "Resolution", value: "24 hours", included: true },
      { label: "Monthly report", value: "Included", included: true },
      { label: "Dedicated account officer", value: "No", included: false },
    ],
  },
  {
    name: "Gold",
    label: "Popular",
    resolution: "12 hrs",
    response: "2 HRS",
    desc: "For operations that can't wait. Half-day resolution, a dedicated account manager and a quarterly audit.",
    features: [
      { label: "Response time", value: "2 hours", included: true },
      { label: "Resolution", value: "12 hours", included: true },
      { label: "Monthly fleet review", value: "Included", included: true },
      { label: "Dedicated account manager", value: "Yes", included: true },
      { label: "Quarterly audit", value: "Included", included: true },
    ],
  },
  {
    name: "Platinum",
    label: "Mission critical",
    resolution: "4 hrs",
    response: "30 MIN",
    desc: "The pinnacle of FMS support. A dedicated engineer, 24/7 cover and a 30-minute response — for fleets where every minute costs money.",
    features: [
      { label: "Response time", value: "30 minutes", included: true },
      { label: "Resolution", value: "4 hours", included: true },
      { label: "24/7 support", value: "Yes", included: true },
      { label: "Dedicated engineer", value: "Yes", included: true },
      { label: "Executive dashboard", value: "Yes", included: true },
      { label: "Quarterly board report", value: "Yes", included: true },
      { label: "Annual optimization audit", value: "Yes", included: true },
    ],
  },
];

/* Card visual identity by tier position — content stays editable in the CMS */
const slaCardStyles = [
  {
    cardClass:
      "bg-linear-to-br from-[#71717a] via-[#3f3f46] to-[#1c1c1f] text-white",
    nameClass: "text-white",
  },
  {
    cardClass:
      "bg-linear-to-br from-[#a8842c] via-[#c9a227] to-[#5f4a0d] text-[#141003]",
    nameClass: "text-brand-400",
  },
  {
    cardClass:
      "bg-linear-to-br from-[#18181b] via-[#33333a] to-[#050506] text-white",
    nameClass: "text-white",
  },
];

export default async function BenefitsPage() {
  const cms = await getBenefitsPage().catch(() => null);
  const benefitSteps = cms?.steps?.length ? cms.steps : fallbackSteps;
  const industryBenefits = cms?.industries?.length
    ? cms.industries
    : fallbackIndustries;
  const solutionPillars = cms?.pillars?.length ? cms.pillars : fallbackPillars;
  const heroHeadline =
    cms?.heroHeadline || "Effortless steps to fleet intelligence.";
  const intro =
    cms?.intro ||
    "We provide customer-centric solutions tailored to the specific needs of each industry — empowering data-driven decisions that increase productivity and efficiency.";
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
  const ctaHeadline =
    cms?.ctaHeadline || "Join the connected fleet movement with FMS Africa";
  const ctaBody =
    cms?.ctaBody ||
    "Don't leave success up to chance. Partner with us and chart your course to efficiency, security and peace of mind.";
  const promises = cms?.promises?.length ? cms.promises : fallbackPromises;
  const promisesEyebrow = cms?.promisesEyebrow || "Our word, in writing";
  const promisesHeadline =
    cms?.promisesHeadline ||
    "The 5 strongest promises we make to Nigerian operators.";
  const promisesNote =
    cms?.promisesNote ||
    "Not marketing lines — operating targets our Lagos team is measured against, every single month.";
  const slaPackages = cms?.slaPackages?.length
    ? cms.slaPackages
    : fallbackSlaPackages;
  const slaBadge = cms?.slaBadge || "Service Level Agreement";
  const slaHeadline = cms?.slaHeadline || "Respond faster.\nResolve faster.";
  const [slaLine1, slaLine2] = slaHeadline.split("\n");
  const slaIntro =
    cms?.slaIntro ||
    "The recommended FMS Africa SLA. Every tier is a signed commitment — response and resolution times our Lagos support team is measured against.";
  const slaFootnote =
    cms?.slaFootnote ||
    "Response and resolution times are measured from first contact with our Lagos support desk. Reports and audits are delivered per fleet, per period.";

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
              <p className="mt-5 text-sm leading-7 text-white/80">{intro}</p>
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

      {/* The 5 strongest Nigerian customer promises */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
        <p
          className="pointer-events-none absolute -top-8 left-0 select-none whitespace-nowrap text-[11rem] font-bold leading-none text-white/4 sm:text-[16rem]"
          aria-hidden="true"
        >
          PROMISES
        </p>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
                {promisesEyebrow}
              </p>
              <h2 className="mt-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                {promisesHeadline.split(" ").slice(0, -2).join(" ")}{" "}
                <span className="text-brand-500">
                  {promisesHeadline.split(" ").slice(-2).join(" ")}
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/60">
              {promisesNote}
            </p>
          </div>

          <ol className="mt-14 border-t border-white/10">
            {promises.map((promise, index) => (
              <li key={promise} className="group border-b border-white/10">
                <div className="flex items-baseline gap-6 py-7 transition-all duration-300 group-hover:bg-white/5 group-hover:pl-4 sm:gap-10">
                  <span className="text-sm font-bold text-brand-500 sm:text-base">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="flex-1 text-xl font-bold leading-snug text-white transition-colors group-hover:text-brand-400 sm:text-2xl lg:text-3xl">
                    {promise}
                  </p>
                  <svg
                    className="hidden h-6 w-6 shrink-0 self-center text-white/30 transition-all group-hover:translate-x-1 group-hover:text-brand-500 sm:block"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </li>
            ))}
          </ol>
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

      {/* Recommended SLA packages — membership-card tiers */}
      <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.045) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <span className="inline-block border border-white/25 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-white/80">
                {slaBadge}
              </span>
              <h2 className="mt-6 text-4xl font-bold uppercase leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-6xl">
                {slaLine1}
                {slaLine2 ? (
                  <>
                    <br />
                    {slaLine2}
                  </>
                ) : null}
              </h2>
            </div>
            <p className="max-w-xs pt-2 text-sm leading-6 text-white/50">
              {slaIntro}
            </p>
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-3 lg:gap-0 lg:divide-x lg:divide-white/10">
            {slaPackages.map((pkg, pkgIndex) => (
              <div
                key={pkg.name}
                className="flex flex-col lg:px-10 lg:first:pl-0 lg:last:pr-0"
              >
                {/* Tier label row */}
                <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-[0.25em]">
                  <span className="text-white/45">{pkg.label}</span>
                  <span className="text-white/70">
                    Resolve &le; {pkg.resolution}
                  </span>
                </div>

                {/* Membership card */}
                <div
                  className={`mt-4 flex aspect-8/5 flex-col justify-between rounded-lg p-5 shadow-2xl transition-transform duration-300 hover:-translate-y-1 sm:p-6 ${slaCardStyles[pkgIndex % slaCardStyles.length].cardClass}`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.35em] opacity-60">
                        FMS Africa
                      </p>
                      <p className="mt-1 text-sm font-bold uppercase tracking-[0.2em]">
                        {pkg.name}
                      </p>
                    </div>
                    <span
                      className="flex h-6 w-8 items-center justify-center rounded-[3px] border border-current opacity-40"
                      aria-hidden="true"
                    >
                      <span className="block h-3 w-4 rounded-xs border border-current" />
                    </span>
                  </div>

                  <div>
                    <p className="text-4xl font-bold tracking-tight sm:text-5xl">
                      {pkg.response}
                    </p>
                    <p className="mt-1.5 text-[9px] font-bold uppercase tracking-[0.35em] opacity-60">
                      Guaranteed response
                    </p>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-bold uppercase tracking-[0.3em] opacity-50">
                    <span>
                      &bull;&bull;&bull;&bull; &nbsp;&bull;&bull;&bull;&bull;
                      &nbsp;2026
                    </span>
                    <span>SLA</span>
                  </div>
                </div>

                {/* Tier name + description */}
                <h3
                  className={`mt-8 text-lg font-bold uppercase tracking-wide ${slaCardStyles[pkgIndex % slaCardStyles.length].nameClass}`}
                >
                  {pkg.name} Package
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  {pkg.desc}
                </p>

                {/* Feature rows */}
                <ul className="mt-7 flex-1">
                  {pkg.features.map(({ label, value, included }) => (
                    <li
                      key={label}
                      className="flex items-center justify-between gap-4 border-t border-white/10 py-3"
                    >
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        {label}
                      </span>
                      <span
                        className={`text-sm font-bold ${
                          included ? "text-white" : "text-white/30"
                        }`}
                      >
                        {value}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap items-end justify-between gap-6 border-t border-white/10 pt-8">
            <p className="max-w-md text-xs leading-5 text-white/40">
              {slaFootnote}
            </p>
            <Link
              href="/about-us/contact-us"
              className="bg-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-navy-950 transition-colors hover:bg-brand-500"
            >
              Request an SLA &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y">
        <div className="mx-auto grid grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="border-b  bg-navy-950 px-6 py-10 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
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
