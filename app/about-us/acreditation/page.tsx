import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AccreditationCertificate from "@/components/accreditation-certificate";
import { getAccreditationPage } from "@/lib/cms";
import ConsultationCta from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "Accreditations",
  description:
    "FMS Africa Nigeria Ltd operates under the FMS Africa group, which is ISO 45001:2018 certified for occupational health, safety and quality management.",
};

const fallback_highlights = [
  {
    title: "Occupational Health & Safety",
    body: "ISO 45001:2018 is the international standard for occupational health and safety management systems, helping organisations reduce workplace risks and create safer working conditions.",
  },
  {
    title: "Risk-Based Approach",
    body: "The certification requires systematic identification of hazards, assessment of risks and implementation of controls — aligned with how we deploy telematics to mitigate fleet and field operation risks.",
  },
  {
    title: "Continuous Improvement",
    body: "Certified organisations must demonstrate ongoing review and improvement of their health and safety performance — a principle that runs through our products, services and support.",
  },
  {
    title: "Global Recognition",
    body: "ISO 45001 is recognised worldwide, giving our clients confidence that FMS Africa operates to internationally accepted standards of compliance and quality.",
  },
];

const fallback_commitments = [
  {
    label: "01",
    title: "Worker Safety",
    body: "Protecting the health and safety of our engineers, installers and field teams across every deployment.",
  },
  {
    label: "02",
    title: "Client Assurance",
    body: "Giving enterprise clients documented proof that their telematics partner meets rigorous international standards.",
  },
  {
    label: "03",
    title: "Regulatory Alignment",
    body: "Maintaining processes that align with occupational health and safety regulations across the markets we serve.",
  },
  {
    label: "04",
    title: "Operational Excellence",
    body: "Embedding safety management into how we design, install and support every IoT and fleet monitoring solution.",
  },
];

function parseHighlights(items: string[]) {
  return items.map((item) => {
    const idx = item.indexOf(": ");
    if (idx === -1) return { title: item, body: item };
    return { title: item.slice(0, idx), body: item.slice(idx + 2) };
  });
}

export default async function AccreditationsPage() {
  const cms = await getAccreditationPage().catch(() => null);
  const heroHeadline =
    cms?.heroHeadline || "Certified compliance,\nproven quality.";
  const [heroLine1, heroLine2] = heroHeadline.split("\n");
  const intro =
    cms?.intro ||
    "Fleet Monitoring Systems Ltd is now ISO 45001:2018 Certified — the internationally recognised standard for occupational health and safety management systems.";
  const heroImage = cms?.heroImage || "/assets/landing/control-room.jpg";
  const certificateTitle = cms?.certificateTitle || "ISO 45001:2018 Certified";
  const highlights = cms?.highlights?.length
    ? parseHighlights(cms.highlights)
    : fallback_highlights;
  const commitments = cms?.commitments?.length
    ? cms.commitments.map((c, i) => ({
        label: String(i + 1).padStart(2, "0"),
        title: c.title,
        body: c.body,
      }))
    : fallback_commitments;
  const stats = cms?.stats?.length
    ? cms.stats
    : [
        { value: "ISO", label: "45001:2018 certified" },
        { value: "24/7", label: "Safety-first operations" },
        { value: "5", label: "Continents served" },
        { value: "100+", label: "Enterprise clients worldwide" },
      ];
  const ctaHeadline = cms?.ctaHeadline || "Need to verify our accreditation?";
  const ctaBody =
    cms?.ctaBody ||
    "Contact our team for certificate verification or to learn how our ISO 45001:2018 certification supports your compliance requirements.";

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <p className="text-sm tracking-wide text-slate-500">
            <span aria-hidden="true">•</span> Accreditations{" "}
            <span aria-hidden="true">•</span>
          </p>
          <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-tight text-navy-950 sm:text-5xl lg:text-7xl">
            {heroLine1}
            {heroLine2 ? (
              <>
                <br />
                {heroLine2}
              </>
            ) : null}
          </h1>
        </div>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={heroImage}
            alt="FMS Africa operations and compliance monitoring"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Certificate feature */}
      <section className="border-b border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <span className="inline-block bg-brand-500 px-3 py-1 text-xs font-bold uppercase tracking-widest text-navy-950">
                Current accreditation
              </span>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
                {certificateTitle}
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p>
              <ul className="mt-8 space-y-4 border-l-4 border-brand-500 pl-6">
                <li className="text-sm leading-7 text-slate-600">
                  <span className="font-bold text-navy-900">Standard:</span> ISO
                  45001:2018
                </li>
                <li className="text-sm leading-7 text-slate-600">
                  <span className="font-bold text-navy-900">Organisation:</span>{" "}
                  Fleet Monitoring Systems Ltd (FMS Africa group)
                </li>
                <li className="text-sm leading-7 text-slate-600">
                  <span className="font-bold text-navy-900">Scope:</span>{" "}
                  Occupational Health &amp; Safety Management
                </li>
                <li className="text-sm leading-7 text-slate-600">
                  <span className="font-bold text-navy-900">Serving:</span>{" "}
                  Nigeria (Lagos office) and the FMS Africa group
                </li>
              </ul>
            </div>

            <AccreditationCertificate />
          </div>
        </div>
      </section>

      {/* What ISO 45001 means */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
            Understanding the standard
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            What ISO 45001:2018 means
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            ISO 45001 replaces OHSAS 18001 as the global benchmark for managing
            occupational health and safety. Certification confirms that an
            organisation has implemented a robust framework to protect workers
            and continuously improve safety outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-px bg-navy-900/10 sm:grid-cols-2">
          {highlights.map(({ title, body }) => (
            <div
              key={title}
              className="bg-white p-8 transition-colors hover:bg-navy-950 group"
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
      </section>

      {/* Commitments — dark panel */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
              Our commitment
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Safety and compliance at the core of everything we do
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map(({ label, title, body }) => (
              <div
                key={title}
                className="border border-white/10 bg-navy-950 p-7 transition-colors hover:border-brand-500/50 hover:bg-navy-900"
              >
                <p className="text-sm font-bold text-brand-500">{label}</p>
                <h3 className="mt-3 text-lg font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y">
        <div className="mx-auto grid  grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="border-b border-navy-900/10 bg-navy-950 px-6 py-10 text-center last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0"
            >
              <p className="text-3xl font-bold tracking-tight text-brand-500 sm:text-4xl">
                {value}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/70">{label}</p>
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
