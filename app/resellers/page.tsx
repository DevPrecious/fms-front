import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ResellerApplicationForm from "@/components/reseller-application-form";
import ResellerBenefits from "@/components/reseller-benefits";
import ResellerHero from "@/components/reseller-hero";
import ResellerTestimonials from "@/components/reseller-testimonials";
import {
  programSteps as fallbackSteps,
  resellerBenefits as fallbackBenefits,
  regions as fallbackRegions,
  testimonials as fallbackTestimonials,
} from "@/components/reseller-data";
import { getResellersPage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Reseller Program",
  description:
    "Join the FMS Africa Nigeria Ltd reseller program — become a GPS tracking solutions distributor in Nigeria with training, local support and lucrative margins.",
};

export default async function ResellersPage() {
  const cms = await getResellersPage().catch(() => null);
  const programSteps = cms?.steps?.length ? cms.steps : fallbackSteps;
  const benefits = cms?.benefits?.length ? cms.benefits : fallbackBenefits;
  const regions = cms?.regions?.length ? cms.regions : fallbackRegions;
  const testimonials = cms?.testimonials?.length ? cms.testimonials : fallbackTestimonials;

  return (
    <div className="bg-white">
      <ResellerHero
        badge={cms?.badge}
        heroHeadline={cms?.heroHeadline}
        heroBody={cms?.heroBody}
        heroCtaLabel={cms?.heroCtaLabel}
        regions={regions}
        steps={programSteps}
      />

      {/* Why partner */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
            {cms?.whyEyebrow || "Why partner with us?"}
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
            {cms?.whyHeadline || "Five reasons resellers choose FMS Africa Nigeria"}
          </h2>
          <p className="mt-5 text-base leading-7 text-slate-600">
            {cms?.whyBody ||
              "Join forces with us to tap into the booming market of GPS tracking solutions in Nigeria. Select a benefit to learn more."}
          </p>
        </div>

        <div className="mt-14">
          <ResellerBenefits benefits={benefits} />
        </div>
      </section>

      {/* How it works — visual timeline */}
      <section className="border-y border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="relative min-h-80 overflow-hidden">
              <Image
                src={cms?.programImage || "/assets/landing/control-room.jpg"}
                alt="FMS Africa partner support and monitoring platform"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
                {cms?.howEyebrow || "How it works"}
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
                {cms?.howHeadline || "Your pathway to becoming a reseller"}
              </h2>

              <ol className="mt-10 space-y-0">
                {programSteps.map(({ step, title, body }, index) => (
                  <li
                    key={step}
                    className="group flex gap-6 border-l-4 border-slate-200 py-6 pl-6 transition-colors hover:border-brand-500"
                  >
                    <span className="text-2xl font-bold text-brand-600">
                      {step}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-navy-950">
                        {title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {body}
                      </p>
                      {index < programSteps.length - 1 && (
                        <div
                          className="mt-4 h-px w-full bg-slate-200"
                          aria-hidden="true"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ol>

              <Link
                href="#apply"
                className="mt-8 inline-block bg-navy-950 px-6 py-3 text-sm font-bold text-brand-500 transition-colors hover:bg-navy-800"
              >
                Start your application →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <ResellerTestimonials items={testimonials} />

      {/* Application form */}
      <section
        className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        id="apply"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              Apply today
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Join our reseller program and unlock your pathway to success
            </h2>
            <p className="mt-5 text-base leading-7 text-slate-600">
              We&apos;re on 24/7 to react promptly to your service needs. Submit
              your application and our partnerships team will review it and
              respond as soon as possible.
            </p>

            <ul className="mt-10 space-y-4 border-l-4 border-brand-500 pl-6">
              <li className="text-sm text-slate-600">
                <span className="font-bold text-navy-950">
                  Comprehensive training
                </span>{" "}
                — product, sales and technical onboarding
              </li>
              <li className="text-sm text-slate-600">
                <span className="font-bold text-navy-950">
                  Marketing support
                </span>{" "}
                — materials to launch in your territory
              </li>
              <li className="text-sm text-slate-600">
                <span className="font-bold text-navy-950">
                  24/7 backing
                </span>{" "}
                — never left alone after you sign
              </li>
            </ul>
          </div>

          <ResellerApplicationForm regions={regions} />
        </div>
      </section>
    </div>
  );
}
