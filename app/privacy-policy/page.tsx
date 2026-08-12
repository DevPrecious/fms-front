import type { Metadata } from "next";
import Link from "next/link";
import { footerContact } from "@/components/site-data";
import { getPrivacyPage, getSiteSettings } from "@/lib/cms";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Data Protection and User Privacy — how FMS Africa collects, uses and protects your information.",
};

const fallbackSections = [
  {
    title: "Overview",
    paragraphs: [
      "This privacy notice discloses the privacy practices for FMS Limited. This privacy notice applies solely to information collected by this website. It will notify you of the following:",
    ],
    list: [
      "What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.",
      "What choices are available to you regarding the use of your data.",
      "The security procedures in place to protect the misuse of your information.",
      "How you can correct any inaccuracies in the information.",
    ],
  },
  {
    title: "Information Collection, Use, and Sharing",
    paragraphs: [
      "We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.",
      "We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.",
      "Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.",
    ],
  },
  {
    title: "Your Access to and Control Over Information",
    paragraphs: [
      "You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:",
    ],
    list: [
      "See what data we have about you, if any.",
      "Change/correct any data we have about you.",
      "Have us delete any data we have about you.",
      "Express any concern you have about our use of your data.",
    ],
  },
  {
    title: "Security",
    paragraphs: [
      "We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.",
      "While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.",
      "If you feel that we are not abiding by this privacy policy, you should contact us immediately.",
    ],
  },
];

export default async function PrivacyPolicyPage() {
  const [cms, settings] = await Promise.all([
    getPrivacyPage().catch(() => null),
    getSiteSettings().catch(() => null),
  ]);

  const heroHeadline = cms?.heroHeadline || "Privacy Policy";
  const intro = cms?.intro || "Last updated: June 2026";
  const privacySections =
    cms?.sections?.length ? cms.sections : fallbackSections;
  const phone = settings?.footerPhone || footerContact.phone;
  const contactPage = settings?.contactPageUrl || footerContact.contactPage;

  return (
    <div className="bg-white">
      <section className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <p className="text-sm text-slate-500">
          <Link href="/" className="transition-colors hover:text-navy-950">
            Home
          </Link>
          <span aria-hidden="true"> &gt; </span>
          <span className="text-navy-950">Privacy Policy</span>
        </p>

        <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight text-navy-950 sm:text-5xl">
          {heroHeadline}
        </h1>
        <p className="mt-4 text-sm text-slate-500">{intro}</p>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-12">
          {privacySections.map((section) => (
            <article key={section.title}>
              <h2 className="text-2xl font-bold text-navy-950">
                {section.title}
              </h2>
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-4 text-base leading-8 text-slate-600"
                >
                  {paragraph}
                </p>
              ))}
              {section.list && (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-8 text-slate-600"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-brand-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>

        <aside className="mt-16 border border-slate-200 bg-slate-50 p-8">
          <h2 className="text-lg font-bold text-navy-950">Contact us</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            For privacy-related questions or to exercise your data rights,
            please get in touch:
          </p>
          <ul className="mt-5 space-y-2 text-sm">
            <li>
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="font-semibold text-navy-800 transition-colors hover:text-brand-600"
              >
                {phone}
              </a>
            </li>
            <li>
              <Link
                href={contactPage}
                className="font-semibold text-navy-800 transition-colors hover:text-brand-600"
              >
                Contact form
              </Link>
            </li>
          </ul>
        </aside>
      </section>
    </div>
  );
}
