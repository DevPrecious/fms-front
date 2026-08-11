import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fleet Monitoring Systems Ltd (FMS Africa) — the leading IoT technology company providing real-time asset monitoring, analytics and control globally.",
};

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
  { value: "100+", label: "Enterprise clients served globally" },
  { value: "24/7", label: "Support across all time zones" },
  { value: "5", label: "Continents with dedicated phone lines" },
  { value: "3+", label: "Countries — Uganda, Kenya, Tanzania & more" },
];

const pillars = [
  {
    number: "01",
    title: "Vision",
    body: "To become the world's trusted provider of innovative telematics solutions through innovation, efficiency, and sustainability.",
  },
  {
    number: "02",
    title: "Mission",
    body: "Our mission is to deliver innovative, reliable and scalable telematics solutions that enable businesses to optimize their operations through real-time monitoring, advanced analytics and proactive support. We strive to enhance productivity, reduce environmental degradation and ensure the safety and satisfaction of our clients.",
  },
  {
    number: "03",
    title: "Purpose",
    body: "We empower businesses with real-time operational data, enabling smarter decision making that drives productivity, cost savings and operational excellence.",
  },
];

const coreValues = [
  {
    title: "Integrity",
    body: "Acting with honesty, transparency and ethical principles in all situations and at all times.",
  },
  {
    title: "Commitment",
    body: "Dedication to achieving goals, persevering through challenges and staying focused on results.",
  },
  {
    title: "Reliability",
    body: "Dependability in delivering consistent, high-quality results and fulfilling promises.",
  },
  {
    title: "Teamwork",
    body: "Collaborative efforts, valuing diverse perspectives and working together to achieve shared goals.",
  },
  {
    title: "Innovation",
    body: "Embracing new ideas, creative problem-solving and driving progress through change.",
  },
  {
    title: "Passion",
    body: "Enthusiasm and strong emotional drive for the work, the people, the purpose and the mission.",
  },
];

const trustedBy = [
  "MTN Zambia",
  "African Queen",
  "Equity Bank",
  "UMEME Limited",
  "Nile Breweries Ltd",
  "Ministry of Water & Environment",
  "International School of Uganda",
];

const faqs = [
  {
    question: "What does FMS Africa do?",
    answer:
      "Fleet Monitoring Systems Ltd (FMS Africa) is a leading Internet of Things technology company. We provide businesses with real-time monitoring, analysis and control over their assets — enabling optimization, OPEX reduction and productivity maximization.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve logistics, banking, telecommunications, brewing, utilities, government, education and any organisation that relies on fleets, generators, cargo, cold chains or mobile assets.",
  },
  {
    question: "Where do you operate?",
    answer:
      "We operate across Uganda, Kenya, Tanzania and more, with dedicated support lines covering Europe, Asia, North America, South America and Africa.",
  },
  {
    question: "How can I partner with FMS Africa?",
    answer:
      "We are on 24/7 to react promptly to your service needs. If you are interested in partnering with us, leave a message through our partner page and we will reply as soon as we can.",
  },
];

export default function AboutUsPage() {
  return (
    <div className="bg-white">
      {/* Hero — headline on white, image below */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <p className="text-sm tracking-wide text-slate-500">
            <span aria-hidden="true">•</span> About us{" "}
            <span aria-hidden="true">•</span>
          </p>
          <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-tight text-navy-950 sm:text-5xl lg:text-7xl">
            Driven by innovation,
            <br />
            powered by data.
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/assets/landing/trucks-highway.jpg"
            alt="FMS Africa fleet monitoring on the road"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <p className="text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
          Fleet Monitoring Systems Ltd (FMS Africa) is the leading Internet of
          Things technology company of choice globally. Our solutions provide
          businesses with real-time monitoring, analysis and control over their
          assets — enabling asset optimization, significant OPEX reductions and
          productivity maximization.
        </p>
      </section>

      {/* Stats */}
      <section className="border-y border-navy-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="border-b border-navy-900/10 bg-navy-950 px-6 py-10 text-center last:border-b-0 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {value}
              </p>
              <p className="mt-3 text-sm leading-6 text-white/70">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision / Mission / Purpose */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Our vision, mission and purpose
            </h2>

            <div className="mt-10 space-y-10">
              {pillars.map(({ number, title, body }) => (
                <article key={title}>
                  <p className="text-sm font-bold text-brand-600">{number}</p>
                  <h3 className="mt-2 text-xl font-bold text-navy-900">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {body}
                  </p>
                </article>
              ))}
            </div>

            <Link
              href="/about-us/contact-us"
              className="mt-10 inline-flex items-center gap-2 bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              Learn more
              <ArrowIcon />
            </Link>
          </div>

          <div className="relative min-h-120 overflow-hidden lg:min-h-160">
            <Image
              src="/assets/landing/control-room.jpg"
              alt="FMS Africa analytics and monitoring platform"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Core values grid */}
      <section className="bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              What guides us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Core values
            </h2>
          </div>

          <div className="mt-12 grid gap-px bg-navy-900/10 sm:grid-cols-2 lg:grid-cols-3">
            {coreValues.map(({ title, body }) => (
              <div
                key={title}
                className="bg-white p-8 transition-colors hover:bg-navy-950 hover:text-white group"
              >
                <span className="inline-block h-1 w-8 bg-brand-500" />
                <h3 className="mt-5 text-lg font-bold text-navy-900 group-hover:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 group-hover:text-white/75">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-slate-200 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-navy-600">
            Trusted by
          </p>
          <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {trustedBy.map((name) => (
              <li
                key={name}
                className="text-sm font-bold uppercase tracking-wider text-slate-400"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Featured quote panel */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
              What we stand for
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Real-time data. Smarter decisions. Better outcomes.
            </h2>
          </div>
          <blockquote className="border-l-4 border-brand-500 pl-6">
            <p className="text-xl font-medium leading-9 text-brand-400 sm:text-2xl sm:leading-10">
              &ldquo;We empower businesses with real-time operational data,
              enabling smarter decision making that drives productivity, cost
              savings and operational excellence.&rdquo;
            </p>
            <footer className="mt-6 text-sm font-bold text-white/70">
              — FMS Africa Purpose Statement
            </footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
            FAQ
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Your questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map(({ question, answer }, index) => (
            <details key={question} className="group py-1" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-bold text-navy-900">
                  {question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-300 text-navy-900 transition-transform group-open:rotate-45 group-open:border-brand-500 group-open:bg-brand-500">
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
              <p className="pb-5 pr-12 text-sm leading-7 text-slate-600">
                {answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* Partner CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/landing/logistics-port.jpg"
          alt=""
          width={1200}
          height={800}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Join the connected fleet movement with FMS Africa
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            We&apos;re on 24/7 to react promptly to your service needs. If you
            are interested in partnering with us, leave a message and we will
            reply as soon as we can.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/partner"
              className="bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              Partner with us
            </Link>
            <Link
              href="/request-quote"
              className="border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Request a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
