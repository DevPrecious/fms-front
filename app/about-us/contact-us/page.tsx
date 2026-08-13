import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/contact-form";
import {
  contactFaqs as fallbackFaqs,
  inquiryCards as fallbackCards,
  offices as fallbackOffices,
} from "@/components/contact-data";
import { regionalPhones as fallbackPhones } from "@/components/site-data";
import { getContactPage, getSiteSettings } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "FMS Africa Nigeria Ltd — now open in Lagos. 24/7 support for Nigerian fleets, plus the wider FMS Africa group across Africa and beyond.",
};

function InquiryIcon({ type }: { type: string }) {
  const className = "h-5 w-5 text-navy-950";

  if (type === "gear") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 15.5A3.5 3.5 0 1112 8.5a3.5 3.5 0 010 7zm8.94-2.34l-1.42-.82a7.03 7.03 0 000-1.68l1.42-.82a1 1 0 00-.5-1.73l-1.62-.47a1 1 0 01-.68-.68l-.47-1.62a1 1 0 00-1.73-.5l-.82 1.42a7.03 7.03 0 00-1.68 0l-.82-1.42a1 1 0 00-1.73.5l-.47 1.62a1 1 0 01-.68.68l-1.62.47a1 1 0 00-.5 1.73l1.42.82a7.03 7.03 0 000 1.68l-1.42.82a1 1 0 00.5 1.73l1.62.47a1 1 0 01.68.68l.47 1.62a1 1 0 001.73.5l.82-1.42a7.03 7.03 0 001.68 0l.82 1.42a1 1 0 001.73-.5l.47-1.62a1 1 0 01.68-.68l1.62-.47a1 1 0 00.5-1.73z" />
      </svg>
    );
  }

  if (type === "envelope") {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4zm16 10V9.25l-8 6.99-8-6.99V16h16z" />
      </svg>
    );
  }

  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M10 2h4a1 1 0 011 1v2h4a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V7a2 2 0 012-2h4V3a1 1 0 011-1zm2 2V4h0v2h-2zm-6 4v10h16V8H6z" />
    </svg>
  );
}

function ContactDetail({
  icon,
  label,
  value,
  href,
}: {
  icon: "location" | "phone" | "email";
  label: string;
  value: string;
  href?: string;
}) {
  const icons = {
    location: (
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
    ),
    phone: (
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.1 21 3 13.9 3 5c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
    ),
    email: (
      <path d="M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 2v.01L12 13l8-6.99V6H4z" />
    ),
  };

  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-brand-500">
        <svg
          className="h-5 w-5 text-navy-950"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          {icons[icon]}
        </svg>
      </span>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
          {label}
        </p>
        <p className="mt-1 text-sm font-medium text-navy-950">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-colors hover:text-brand-600">
        {content}
      </a>
    );
  }

  return content;
}

export default async function ContactUsPage() {
  const [cms, settings] = await Promise.all([
    getContactPage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);
  const inquiryCards = cms?.inquiryCards?.length ? cms.inquiryCards : fallbackCards;
  const offices = cms?.offices?.length ? cms.offices : fallbackOffices;
  const contactFaqs = cms?.faqs?.length ? cms.faqs : fallbackFaqs;
  const regionalPhones = settings?.regionalPhones?.length
    ? settings.regionalPhones
    : fallbackPhones;
  const heroHeadline = cms?.heroHeadline || "Contact us";
  const intro = cms?.intro || "We are on 24/7 from our Lagos office to react promptly to your service needs. FMS Africa Nigeria Ltd is your local team — backed by the wider FMS Africa group across Africa and beyond.";
  const hqLocation = cms?.hqLocation || "Lagos, Nigeria";
  const hqPhone = cms?.hqPhone || "+234 803 298 0119";
  const hqEmail = cms?.hqEmail || "katongh@fms-ecsafrica.com";

  return (
    <div className="bg-white">
      {/* Hero title */}
      <section className="mx-auto max-w-7xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-28">
        <h1 className="text-3xl font-bold tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
          {heroHeadline}.
        </h1>
      </section>

      {/* Inquiry cards */}
      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl divide-y divide-slate-200 md:grid-cols-3 md:divide-x md:divide-y-0">
          {inquiryCards.map(({ id, title, description, email, href, icon }) => (
            <article key={id} className="flex flex-col p-8 sm:p-10">
              <span className="flex h-10 w-10 items-center justify-center bg-brand-500">
                <InquiryIcon type={icon} />
              </span>
              <h2 className="mt-6 text-lg font-bold text-navy-950">{title}</h2>
              <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                {description}
              </p>
              {href ? (
                <Link
                  href={href}
                  className="mt-6 text-sm font-bold text-navy-800 transition-colors hover:text-brand-600"
                >
                  Visit partner page →
                </Link>
              ) : (
                <a
                  href={`mailto:${email}`}
                  className="mt-6 text-sm font-bold text-navy-800 transition-colors hover:text-brand-600"
                >
                  {email}
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Get in touch + form */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm tracking-wide text-slate-500">
              <span aria-hidden="true">•</span> {heroHeadline}{" "}
              <span aria-hidden="true">•</span>
            </p>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
              Connect with us to drive fleet success.
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              {intro}
            </p>

            <div className="mt-10 space-y-6">
              <ContactDetail
                icon="location"
                label="Head office"
                value={hqLocation}
              />
              <ContactDetail
                icon="phone"
                label="Nigeria"
                value={hqPhone}
                href={`tel:${hqPhone.replace(/[^\d+]/g, "")}`}
              />
              <ContactDetail
                icon="email"
                label="Email"
                value={hqEmail}
                href={`mailto:${hqEmail}`}
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Regional offices */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              24/7 Support
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Regional offices
            </h2>
          </div>

          <div className="mt-12 grid gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
            {offices.map(({ country, phone, email }) => (
              <div key={country} className="bg-white p-6">
                <h3 className="text-base font-bold text-navy-950">{country}</h3>
                <a
                  href={`tel:${phone.replace(/[^\d+]/g, "").split("/")[0]}`}
                  className="mt-3 block text-sm text-slate-600 transition-colors hover:text-brand-600"
                >
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="mt-1 block text-sm text-slate-500 transition-colors hover:text-brand-600"
                >
                  {email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-2 gap-px bg-navy-900/10 sm:grid-cols-5">
            {regionalPhones.map(({ region, phone }) => (
              <div
                key={region}
                className="bg-navy-950 px-4 py-5 text-center"
              >
                <p className="text-xs font-bold uppercase tracking-wider text-white/50">
                  {region}
                </p>
                <a
                  href={`tel:${phone.replace(/\s/g, "")}`}
                  className="mt-2 block text-sm font-bold text-brand-500 transition-colors hover:text-brand-400"
                >
                  {phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="text-center">
          <p className="text-sm tracking-wide text-slate-500">
            <span aria-hidden="true">•</span> FAQ{" "}
            <span aria-hidden="true">•</span>
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            Your questions, answered!
          </h2>
        </div>

        <div className="mt-12 divide-y divide-slate-200 border-y border-slate-200">
          {contactFaqs.map(({ question, answer }, index) => (
            <details key={question} className="group py-1" open={index === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                <span className="text-base font-bold text-navy-950">
                  {question}
                </span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center border border-slate-300 text-navy-900 transition-transform group-open:rotate-180">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    aria-hidden="true"
                  >
                    <path d="M5 8l5 5 5-5" />
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
    </div>
  );
}
