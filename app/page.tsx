import Image from "next/image";
import Link from "next/link";
import HeroSlider from "@/components/hero-slider";

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

const stats = [
  { value: "100%", label: "Customer satisfaction with our work" },
  { value: "24/7", label: "Prompt reaction to your service needs" },
  { value: "3+", label: "Countries — Uganda, Kenya, Tanzania & more" },
  { value: "5", label: "Continents with dedicated support lines" },
];

const solutions = [
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

const benefits = [
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

const pillars = [
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

const stories = [
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

export default function Home() {
  return (
    <div className="bg-white">
      {/* ── Hero slideshow ───────────────────────────────────── */}
      <HeroSlider />

      {/* ── Mission + stats ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              <span className="mr-2 inline-block h-2 w-2 bg-brand-500" />
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
              We are dedicated to giving businesses real-time monitoring,
              analysis and control over their assets.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600">
              Our solutions enable asset optimization, significant OPEX
              reductions and productivity maximization — for fleets, generators,
              cargo and cold chains across Africa and beyond.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden">
              <Image
                src="/assets/landing/control-room.jpg"
                alt="Fleet analytics dashboard"
                width={1200}
                height={800}
                className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-between bg-brand-500 p-6">
              <p className="text-sm font-semibold leading-6 text-navy-900">
                GPS trackers with temperature sensors protect the integrity of
                your products at every stage of the cold chain.
              </p>
              <Link
                href="/services/cold-chain-management"
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
                What we do
              </p>
              <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
                Our solutions, your connected fleet.
              </h2>
            </div>
            <Link
              href="/services"
              className="bg-navy-900 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-700"
            >
              View all services
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.map(({ title, href, description, theme, icon }) => (
              <Link
                key={href}
                href={href}
                className={`group flex flex-col justify-between p-7 transition-transform duration-300 hover:-translate-y-1.5 ${theme}`}
              >
                <div>
                  <span className="inline-flex h-12 w-12 items-center justify-center bg-white/15">
                    <svg
                      className="h-6 w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      {icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 text-lg font-bold leading-snug">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 opacity-80">
                    {description}
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
              href="/services/fleet-management"
              className="group relative min-h-70 overflow-hidden"
            >
              <Image
                src="/assets/landing/trucks-highway.jpg"
                alt="Fleet management for heavy trucks"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy-950/90 via-navy-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-7">
                <h3 className="text-lg font-bold text-white">
                  Fleet Management
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
            Why it matters
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            Benefits of <span className="text-navy-600">FMS Africa</span>
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
            src="/assets/landing/logistics-port.jpg"
            alt="Container port logistics monitored end to end"
            width={1200}
            height={800}
            className="h-72 w-full object-cover sm:h-96"
          />
          <div className="absolute inset-0 bg-navy-950/30" />
          <Link
            href="/partner"
            className="absolute bottom-6 left-6 bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-brand-400"
          >
            Partner with us
          </Link>
        </div>
      </section>

      {/* ── Dark pillars panel ───────────────────────────────── */}
      <section className="bg-navy-950">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
              Our approach
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              We&apos;re proud to power data-driven decisions, making a real
              impact on productivity and efficiency.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map(({ title, body }) => (
              <div
                key={title}
                className="border border-white/10 bg-white/5 p-7 transition-colors hover:border-brand-500/40 hover:bg-white/10"
              >
                <span className="inline-block h-2 w-8 bg-brand-500" />
                <h3 className="mt-5 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/about-us/contact-us"
              className="inline-block bg-brand-500 px-7 py-3.5 text-sm font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-brand-400"
            >
              Get a free consultation
            </Link>
          </div>
        </div>
      </section>

      {/* ── Success stories ──────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
            <span className="mr-2 inline-block h-2 w-2 bg-brand-500" />
            Success stories
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-navy-900 sm:text-4xl">
            What our clients achieve
          </h2>
        </div>

        <div className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 *:mb-5">
          {stories.map(({ company, quote }) => (
            <figure
              key={company}
              className="break-inside-avoid border border-slate-200 bg-white p-7"
            >
              <svg
                className="h-6 w-6 text-brand-500"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M4 12c0-4 2.4-6.7 6-8l.8 1.6C8.6 6.8 7.4 8.4 7.2 10H10v7H4v-5zm10 0c0-4 2.4-6.7 6-8l.8 1.6c-2.2 1.2-3.4 2.8-3.6 4.4H20v7h-6v-5z" />
              </svg>
              <blockquote className="mt-4 text-sm leading-7 text-slate-600">
                {quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center bg-navy-900 text-sm font-bold text-brand-500">
                  {company.charAt(0)}
                </span>
                <span className="text-sm font-bold text-navy-900">
                  {company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* ── Final CTA ────────────────────────────────────────── */}
      <section>
        <div className="relative w-full overflow-hidden">
          <Image
            src="/assets/landing/hero-fleet.jpg"
            alt=""
            width={2000}
            height={1326}
            className="h-105 w-full object-cover object-bottom"
          />
          <div className="absolute inset-0 bg-navy-950/75" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
              Get started with a free consultation
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              Interested in our products and want to know more? Leave us a
              message and we will reply as soon as we can — we&apos;re on 24/7.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/request-quote"
                className="bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-all hover:-translate-y-0.5 hover:bg-brand-400"
              >
                Request a Free Quote
              </Link>
              <Link
                href="/about-us/contact-us"
                className="border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
