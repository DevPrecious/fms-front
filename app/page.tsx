import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/hero-slider";
import ConsultationCta from "@/components/consultation-cta";
import TestimonialsMarquee from "@/components/testimonials-marquee";
import { getHeroSlides, getHomepage } from "@/lib/cms";
import type { ReactNode } from "react";
import type { HomepageContent, HeroSlide } from "@/lib/cms-types";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

const fallbackStats = [
  { value: "100%", label: "Customer satisfaction with our work" },
  { value: "24/7", label: "Local support from our Nigeria office" },
  { value: "NG", label: "Lagos office now serving Nigeria" },
  { value: "5", label: "Continents covered by the FMS Africa group" },
];

const fallbackSolutions = [
  {
    title: "Vehicle Tracking",
    href: "/services/vehicle-tracking",
    description:
      "Real-time GPS visibility of every vehicle in your fleet, wherever the road leads.",
    theme: "bg-navy-800 text-white",
    icon: (
      <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5zm3.5-4L5.6 12h12.8l-.9-3H6.5z" />
    ),
  },
  {
    title: "AI-Powered Video Telematics",
    href: "/services/ai-powered-video-telematics",
    description:
      "Smart cameras that detect risk, coach drivers and protect you against false claims.",
    theme: "bg-brand-500 text-navy-900",
    icon: (
      <path d="M4 6a2 2 0 012-2h8a2 2 0 012 2v3.5l4-2.5v10l-4-2.5V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6z" />
    ),
  },
  {
    title: "Vehicle Fuel Management",
    href: "/services/vehicle-fuel-management",
    description:
      "Monitor consumption, catch theft and cut fuel costs with precise tank-level data.",
    theme: "bg-navy-700 text-white",
    icon: (
      <path d="M6 3h7a2 2 0 012 2v14h1a1 1 0 001-1v-6.5l-2-1V8l3.5 1.8c.3.2.5.5.5.9V18a3 3 0 01-3 3H6a2 2 0 01-2-2V5a2 2 0 012-2zm1 3v4h5V6H7z" />
    ),
  },
];

const fallbackBenefits = [
  {
    title: "Risk Mitigation",
    body: "Each stage of the cold chain provides an opportunity for risk that can be avoided and managed with GPS trackers and temperature sensors, ensuring the integrity of your products and assets end to end.",
  },
  {
    title: "OPEX Reduction",
    body: "Fuel utilization, maintenance-due alerts and cost-per-kilometre reporting give management the data to significantly reduce fleet operating and maintenance costs.",
  },
  {
    title: "Productivity Maximization",
    body: "Driver identification, performance reports and utilization analytics help you get more out of every vehicle, operator and piece of heavy equipment you own.",
  },
  {
    title: "Real-Time Visibility",
    body: "Clear, live visibility of your transporter fleet dramatically improves turnaround times, delivery reliability and customer satisfaction across your supply chain.",
  },
];

const fallbackPillars = [
  {
    title: "Internet of Things",
    body: "Sensors and trackers that connect your vehicles, generators, cargo and cold rooms to one platform.",
  },
  {
    title: "Big Data",
    body: "Every trip, litre and degree captured and turned into reports management can act on.",
  },
  {
    title: "Artificial Intelligence",
    body: "AI video telematics and analytics that detect risk before it becomes a loss.",
  },
  {
    title: "24/7 Support",
    body: "We are on around the clock to react promptly to your service needs, wherever you operate.",
  },
];

const fallbackStories = [
  {
    company: "United Bank for Africa",
    quote:
      "Their services to the bank have been satisfactory and commendable!",
  },
  {
    company: "MTN Zambia",
    quote:
      "Identification of fleet drivers for departments with pool vehicles was achieved through the use of RFID driver tags.",
  },
  {
    company: "African Queen",
    quote:
      "Fuel utilization and driver performance reports from the system have been used to improve fleet utilization and driver productivity.",
  },
  {
    company: "Equity Bank",
    quote:
      "Reports on generator working hours and maintenance-due alerts to management were activated.",
  },
  {
    company: "UMEME Limited",
    quote:
      "Reduction in fleet maintenance costs thanks to system reporting on maintenance costs per kilometre covered.",
  },
  {
    company: "Nile Breweries Ltd",
    quote:
      "Turnaround time for delivery of beer supplies to the market drastically improved due to clear visibility of the transporter fleet's location.",
  },
  {
    company: "Ministry of Water & Environment",
    quote:
      "Heavy equipment utilization and operator performance reports have been used to improve equipment utilization and operator productivity.",
  },
  {
    company: "International School of Uganda",
    quote:
      "Reports of fleet fuel utilization and maintenance from the system are used by management to reduce operational costs.",
  },
];

const fallbackHomepage: Omit<HomepageContent, "id" | "solutions"> & {
  solutions: {
    title: string;
    href: string;
    description: string;
    theme: string;
    iconPath?: string;
    icon?: ReactNode;
  }[];
} = {
  stats: fallbackStats,
  missionEyebrow: "Who we are",
  missionHeadline:
    "FMS Africa Nigeria Ltd is now on the ground — giving Nigerian businesses real-time monitoring, analysis and control over their assets.",
  missionBody:
    "Our Lagos office brings the FMS Africa group's IoT, fuel, video telematics and cold-chain platforms to fleets, generators, cargo and logistics operators across Nigeria — with 24/7 local support.",
  missionImage: "/assets/landing/control-room.jpg",
  missionCalloutText:
    "GPS trackers with temperature sensors protect the integrity of your products at every stage of the cold chain.",
  missionCalloutHref: "/services/cold-chain-management",
  solutions: fallbackSolutions,
  solutionsPhotoHref: "/services/fleet-management",
  solutionsPhotoImage: "/assets/landing/trucks-highway.jpg",
  solutionsPhotoTitle: "Fleet Management",
  solutionsEyebrow: "What we do",
  solutionsHeadline: "Our solutions, your connected fleet.",
  solutionsCtaLabel: "View all services",
  solutionsCtaHref: "/services",
  benefits: fallbackBenefits,
  pillars: fallbackPillars,
  stories: fallbackStories,
  ctaImage: "/assets/landing/hero-fleet.jpg",
  ctaHeadline: "Get started with a free consultation",
  ctaBody:
    "Talk to our Lagos team about fleet and asset solutions for Nigeria. Leave a message and we will reply as soon as we can — we're on 24/7.",
  ctaPrimaryLabel: "Get a free consultation",
  ctaPrimaryHref: "/about-us/contact-us",
  ctaSecondaryLabel: "Contact Us",
  ctaSecondaryHref: "/about-us/contact-us",
  benefitsBandImage: "/assets/landing/logistics-port.jpg",
  benefitsBandCtaLabel: "Partner with us",
  benefitsBandCtaHref: "/resellers",
  benefitsEyebrow: "Why it matters",
  benefitsHeadline: "Benefits of FMS Africa Nigeria",
  approachEyebrow: "Our approach",
  approachHeadline:
    "We're proud to power data-driven decisions, making a real impact on productivity and efficiency.",
  approachCtaLabel: "Get a free consultation",
  approachCtaHref: "/about-us/contact-us",
  storiesEyebrow: "Testimonials",
  storiesHeadline: "What customers say.",
};

export default async function Home() {
  const [cmsHome, cmsSlides] = await Promise.all([
    getHomepage().catch(() => null),
    getHeroSlides().catch(() => [] as HeroSlide[]),
  ]);

  const home = cmsHome ?? fallbackHomepage;
  const slides =
    cmsSlides.length > 0
      ? cmsSlides.map((s) => ({
          image: s.image,
          alt: s.alt,
          lineOne: s.lineOne,
          lineTwo: s.lineTwo,
          body: s.body,
        }))
      : undefined;

  const stats = home.stats?.length ? home.stats : fallbackStats;
  const solutions = home.solutions?.length ? home.solutions : fallbackSolutions;
  const benefits = home.benefits?.length ? home.benefits : fallbackBenefits;
  const pillars = home.pillars?.length ? home.pillars : fallbackPillars;
  const stories = home.stories?.length ? home.stories : fallbackStories;

  return (
    <div className="bg-white">
      {/* ── Hero slideshow ───────────────────────────────────── */}
      <HeroSlider slides={slides} />

      {/* ── Mission + stats ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              <span className="mr-2 inline-block h-2 w-2 bg-brand-500" />
              {home.missionEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {home.missionHeadline}
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              {home.missionBody}
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden">
              <Image
                src={home.missionImage || "/assets/landing/control-room.jpg"}
                alt="Fleet analytics dashboard"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between bg-brand-500 p-6">
              <p className="text-sm font-semibold leading-6 text-navy-900">
                {home.missionCalloutText}
              </p>
              <Link
                href={
                  home.missionCalloutHref || "/services/cold-chain-management"
                }
                className="mt-6 inline-flex h-10 w-10 items-center justify-center bg-navy-900 text-brand-500 transition-transform hover:scale-110"
                aria-label="Learn about cold chain management"
              >
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-8 border-t border-slate-200 pt-10 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={value}>
              <dt className="order-2 mt-2 block text-sm leading-5 text-slate-500">
                {label}
              </dt>
              <dd className="order-1 text-4xl font-bold tracking-tight text-navy-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {/* ── Solutions ────────────────────────────────────────── */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
                <span className="mr-2 inline-block h-2 w-2 bg-brand-500" />
                {home.solutionsEyebrow || "What we do"}
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
                {home.solutionsHeadline || "Our solutions, your connected fleet."}
              </h2>
            </div>
            <Link
              href={home.solutionsCtaHref || "/services"}
              className="bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-700"
            >
              {home.solutionsCtaLabel || "View all services"}
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map((solution) => (
              <Link
                key={solution.href}
                href={solution.href}
                className={`group flex flex-col justify-between p-7 transition-transform duration-300 hover:-translate-y-1.5 ${solution.theme}`}
              >
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center bg-white/15">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {"icon" in solution && solution.icon ? (
                        solution.icon
                      ) : (
                        <path
                          d={(solution as { iconPath?: string }).iconPath || ""}
                        />
                      )}
                    </svg>
                  </span>
                  <h3 className="mt-6 text-lg font-bold leading-snug">
                    {solution.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 opacity-80">
                    {solution.description}
                  </p>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold">
                  Learn more
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            ))}

            {/* Photo card */}
            <Link
              href={home.solutionsPhotoHref || "/services/fleet-management"}
              className="group relative min-h-70 overflow-hidden"
            >
              <Image
                src={
                  home.solutionsPhotoImage ||
                  "/assets/landing/trucks-highway.jpg"
                }
                alt="Fleet management for heavy trucks"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-lg font-bold text-white">
                  {home.solutionsPhotoTitle || "Fleet Management"}
                </h3>
                <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-brand-400">
                  Learn more
                  <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Benefits accordion ───────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              <span className="mr-2 inline-block h-2 w-2 bg-brand-500" />
              {home.benefitsEyebrow || "Why it matters"}
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              {home.benefitsHeadline || (
                <>
                  Benefits of <span className="text-navy-600">FMS Africa</span>
                </>
              )}
            </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 border-y border-slate-200">
          {benefits.map(({ title, body }, index) => (
            <details key={title} className="group py-2" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center gap-5 py-4 [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-bold text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex-1 text-lg font-bold text-navy-900">
                  {title}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-300 text-navy-900 transition-all group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="pb-6 pl-11 pr-14 text-sm leading-7 text-slate-600">
                {body}
              </p>
            </details>
          ))}
        </div>

        <div className="relative mt-14 overflow-hidden">
          <Image
            src={
              home.benefitsBandImage || "/assets/landing/logistics-port.jpg"
            }
            alt="Container port logistics monitored end to end"
            width={1200}
            height={800}
            className="h-72 w-full object-cover sm:h-96"
          />
          <div className="absolute inset-0 bg-navy-950/30" />
          <Link
            href={home.benefitsBandCtaHref || "/resellers"}
            className="absolute bottom-6 left-6 bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-brand-400"
          >
            {home.benefitsBandCtaLabel || "Partner with us"}
          </Link>
        </div>
      </section>

      {/* ── Our approach (achievement-style, logo center) ───── */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
              • {home.approachEyebrow || "Our approach"} •
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              {home.approachHeadline ||
                "We're proud to power data-driven decisions, making a real impact on productivity and efficiency."}
            </h2>
          </div>

          <div className="mt-14 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr] lg:gap-6">
            <div className="flex flex-col gap-4">
              {pillars.slice(0, 2).map(({ title, body }) => (
                <div
                  key={title}
                  className="flex-1 border-t border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10 lg:border-t-0 lg:border-b"
                >
                  <h3 className="text-lg font-bold text-brand-500">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{body}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center py-6 lg:px-6">
              <div className="relative flex min-h-28 w-full max-w-xs items-center justify-center sm:min-h-36 sm:max-w-sm">
                <Image
                  src="/assets/FMS-Logo-Blue-1.png"
                  alt="FMS Africa Nigeria Ltd"
                  width={270}
                  height={126}
                  unoptimized
                  className="relative z-10 h-16 w-auto brightness-0 invert opacity-90 sm:h-20"
                />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {pillars.slice(2, 4).map(({ title, body }) => (
                <div
                  key={title}
                  className="flex-1 border-t border-white/10 bg-white/5 p-7 transition-colors hover:bg-white/10 lg:border-t-0 lg:border-b"
                >
                  <h3 className="text-lg font-bold text-brand-500">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/75">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href={home.approachCtaHref || "/about-us/contact-us"}
              className="inline-block bg-brand-500 px-7 py-3.5 text-sm font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-brand-400"
            >
              {home.approachCtaLabel || "Get a free consultation"}
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials marquee ─────────────────────────────── */}
      <TestimonialsMarquee
        items={stories.map(({ company, quote }) => ({
          company,
          quote,
        }))}
        eyebrow={home.storiesEyebrow || "Testimonials"}
        headline={home.storiesHeadline || "What customers say."}
      />

      <ConsultationCta
        image={home.ctaImage}
        headline={home.ctaHeadline}
        body={home.ctaBody}
        buttonLabel={home.ctaPrimaryLabel}
        href={home.ctaPrimaryHref}
      />
    </div>
  );
}
