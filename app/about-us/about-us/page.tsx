import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAboutPage } from "@/lib/cms";
import ConsultationCta from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "FMS Africa Nigeria Ltd — the local office of Fleet Monitoring Systems, now open in Lagos with IoT fleet, fuel and asset monitoring for Nigerian operators.",
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

const fallback_stats = [
  { value: "100+", label: "Enterprise clients served by the FMS Africa group" },
  { value: "24/7", label: "Support from our Nigeria office" },
  { value: "NG", label: "Lagos office now open" },
  { value: "5", label: "Continents covered by the group" },
];

const fallback_pillars = [
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

const fallback_coreValues = [
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

const fallback_trustedBy = [
  "United Bank for Africa",
  "MTN Zambia",
  "African Queen",
  "Equity Bank",
  "UMEME Limited",
  "Nile Breweries Ltd",
  "Ministry of Water & Environment",
];

const fallback_teamMembers = [
  {
    initials: "MD",
    role: "Managing Director",
    dept: "Leadership & Strategy",
    photo: "",
  },
  {
    initials: "TO",
    role: "Head of Technical Operations",
    dept: "Engineering & Field Ops",
    photo: "",
  },
  {
    initials: "FS",
    role: "Fleet Solutions Engineer",
    dept: "Deployments & Integrations",
    photo: "",
  },
  {
    initials: "CS",
    role: "Customer Success Manager",
    dept: "Onboarding & SLA Reviews",
    photo: "",
  },
];

const fallback_faqs = [
  {
    question: "What does FMS Africa Nigeria do?",
    answer:
      "FMS Africa Nigeria Ltd is the Nigerian office of Fleet Monitoring Systems (FMS Africa). We provide businesses with real-time monitoring, analysis and control over their assets — enabling optimization, OPEX reduction and productivity maximization — now with a local team in Lagos.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve logistics, banking, telecommunications, brewing, utilities, government, education and any organisation that relies on fleets, generators, cargo, cold chains or mobile assets.",
  },
  {
    question: "Where do you operate?",
    answer:
      "Our Lagos office serves Nigeria and West Africa. We are part of the FMS Africa group, which also operates across Uganda, Kenya, Tanzania and more, with dedicated support lines covering Europe, Asia, North America, South America and Africa.",
  },
  {
    question: "How can I partner with FMS Africa Nigeria?",
    answer:
      "We are on 24/7 to react promptly to your service needs. If you are interested in partnering with us, leave a message through our partner page and we will reply as soon as we can.",
  },
];

export default async function AboutUsPage() {
  const cms = await getAboutPage().catch(() => null);
  const heroHeadline = cms?.heroHeadline || "Driven by innovation,\npowered by data.";
  const [heroLine1, heroLine2] = heroHeadline.split("\n");
  const intro = cms?.intro || "FMS Africa Nigeria Ltd is the Nigerian office of Fleet Monitoring Systems (FMS Africa). We are now on the ground in Lagos — bringing proven IoT fleet, fuel, cargo and video telematics to Nigerian operators, with the backing of the wider FMS Africa group.";
  const heroImage = cms?.heroImage || "/assets/landing/trucks-highway.jpg";
  const stats = cms?.stats?.length ? cms.stats : fallback_stats;
  const pillars = cms
    ? [
        { number: "01", title: "Vision", body: cms.vision },
        { number: "02", title: "Mission", body: cms.mission },
        { number: "03", title: "Purpose", body: cms.purpose },
      ]
    : fallback_pillars;
  const coreValues = cms?.coreValues?.length ? cms.coreValues : fallback_coreValues;
  const trustedBy = cms?.trustedBy?.length ? cms.trustedBy : fallback_trustedBy;
  const faqs = cms?.faqs?.length ? cms.faqs : fallback_faqs;
  const featuredQuote = cms?.featuredQuote || "We empower businesses with real-time operational data, enabling smarter decision making that drives productivity, cost savings and operational excellence.";
  const featuredQuoteAuthor = cms?.featuredQuoteAuthor || "FMS Africa Purpose Statement";
  const featuredEyebrow = cms?.featuredEyebrow || "What we stand for";
  const featuredHeadline = cms?.featuredHeadline || "Real-time data. Smarter decisions. Better outcomes.";
  const pillarsImage = cms?.pillarsImage || "/assets/landing/control-room.jpg";
  const pillarsEyebrow = cms?.pillarsEyebrow || "Who we are";
  const pillarsHeadline = cms?.pillarsHeadline || "Our vision, mission and purpose";
  const pillarsCtaLabel = cms?.pillarsCtaLabel || "Learn more";
  const pillarsCtaHref = cms?.pillarsCtaHref || "/about-us/contact-us";
  const valuesEyebrow = cms?.valuesEyebrow || "What guides us";
  const valuesHeadline = cms?.valuesHeadline || "Core values";
  const trustedEyebrow = cms?.trustedEyebrow || "Trusted by";
  const faqEyebrow = cms?.faqEyebrow || "FAQ";
  const faqHeadline = cms?.faqHeadline || "Your questions, answered";
  const teamMembers = cms?.teamMembers?.length
    ? cms.teamMembers
    : fallback_teamMembers;
  const teamEyebrow = cms?.teamEyebrow || "Meet our team";
  const teamHeadline =
    cms?.teamHeadline || "The people behind\nthe platform";
  const [teamLine1, teamLine2] = teamHeadline.split("\n");
  const teamIntro =
    cms?.teamIntro ||
    "A Lagos-based team of engineers and fleet specialists, backed by the FMS Africa group's two decades of telematics experience — focused on your fleet from day one.";
  const teamCtaText =
    cms?.teamCtaText ||
    "We're growing our Lagos team — want to work with us or meet us in person?";
  const teamCtaLabel = cms?.teamCtaLabel || "Get in touch";
  const ctaHeadline = cms?.ctaHeadline || "Join the connected fleet movement with FMS Africa";
  const ctaBody = cms?.ctaBody || "We're on 24/7 to react promptly to your service needs. If you are interested in partnering with us, leave a message and we will reply as soon as we can.";
  const ctaImage = cms?.ctaImage;

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
            {heroLine1}
            {heroLine2 ? (<><br />{heroLine2}</>) : null}
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={heroImage}
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
          {intro}
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
              {pillarsEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {pillarsHeadline}
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
              href={pillarsCtaHref}
              className="mt-10 inline-flex items-center gap-2 bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              {pillarsCtaLabel}
              <ArrowIcon />
            </Link>
          </div>

          <div className="relative min-h-80 overflow-hidden lg:min-h-160">
            <Image
              src={pillarsImage}
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
              {valuesEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              {valuesHeadline}
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

      {/* Meet our team */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <span className="inline-block rounded-full border border-slate-300 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy-900">
          {teamEyebrow}
        </span>

        <div className="mt-6 grid items-start gap-6 lg:grid-cols-[1fr_400px] lg:gap-16">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-navy-950 sm:text-4xl">
            {teamLine1}
            {teamLine2 ? (
              <>
                <br className="hidden sm:block" /> {teamLine2}
              </>
            ) : null}
          </h2>
          <p className="pt-1 text-sm leading-7 text-slate-500">{teamIntro}</p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map(({ initials, role, dept, photo }) => (
            <article
              key={role}
              className="group relative aspect-4/5 overflow-hidden rounded-2xl bg-linear-to-b from-slate-200 via-slate-300 to-slate-400"
            >
              {photo ? (
                <Image
                  src={photo}
                  alt={role}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <>
                  {/* Portrait placeholder — swap for a real photo */}
                  <svg
                    className="absolute inset-x-0 -bottom-6 mx-auto h-[72%] w-auto text-slate-500/60 transition-transform duration-500 group-hover:scale-105"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 12.5a4.75 4.75 0 100-9.5 4.75 4.75 0 000 9.5zm0 2.5c-5.2 0-9.5 2.9-9.5 6.5V24h19v-2.5c0-3.6-4.3-6.5-9.5-6.5z" />
                  </svg>
                  <span className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-navy-950 text-xs font-bold tracking-wider text-brand-500">
                    {initials}
                  </span>
                </>
              )}

              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy-950 via-navy-950/85 to-transparent px-4 pb-5 pt-12 text-center">
                <p className="text-base font-semibold text-white">{role}</p>
                <p className="mt-1 text-xs text-white/60">{dept}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border border-slate-200 bg-slate-50 px-6 py-5">
          <p className="text-sm font-medium text-navy-900">{teamCtaText}</p>
          <Link
            href="/about-us/contact-us"
            className="inline-flex items-center gap-2 bg-brand-500 px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
          >
            {teamCtaLabel}
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Trusted by */}
      <section className="border-y border-slate-200 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-navy-600">
            {trustedEyebrow}
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
              {featuredEyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {featuredHeadline}
            </h2>
          </div>
          <blockquote className="border-l-4 border-brand-500 pl-6">
            <p className="text-xl font-medium leading-9 text-brand-400 sm:text-2xl sm:leading-10">
              &ldquo;{featuredQuote}&rdquo;
            </p>
            <footer className="mt-6 text-sm font-bold text-white/70">
              — {featuredQuoteAuthor}
            </footer>
          </blockquote>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
            {faqEyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            {faqHeadline}
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

      <ConsultationCta
        image={ctaImage}
        headline={ctaHeadline}
        body={ctaBody}
        buttonLabel="Get a free consultation"
        href="/about-us/contact-us"
      />
    </div>
  );
}
