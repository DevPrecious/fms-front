import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CsrInitiatives from "@/components/csr-initiatives";
import { csrPillars } from "@/components/csr-data";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility",
  description:
    "FMS Africa's CSR initiatives — funding medical clinics, road safety training and community partnerships across Uganda.",
};

export default function CsrPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <p className="text-sm tracking-wide text-slate-500">
            <span aria-hidden="true">•</span> CSR{" "}
            <span aria-hidden="true">•</span>
          </p>
          <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-tight text-navy-950 sm:text-5xl lg:text-7xl">
            Giving back,
            <br />
            moving forward.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Corporate Social Responsibility at FMS Africa — investing in
            community health, road safety and lasting partnerships that make a
            difference beyond the fleet.
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/assets/csr/medical-clinic-nyakinengo.jpg"
            alt="FMS-funded medical clinic in Nyakinengo Village, Uganda"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      {/* Intro */}
      <section className="mx-auto max-w-3xl px-4 py-20 text-center sm:px-6 lg:px-8 lg:py-24">
        <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
          Corporate Social Responsibility
        </p>
        <p className="mt-6 text-lg leading-8 text-slate-600 sm:text-xl sm:leading-9">
          At Fleet Monitoring Systems Ltd, we believe technology should serve
          people — not just businesses. Our CSR programmes extend our commitment
          to safety, health and community wellbeing across Uganda and beyond.
        </p>
      </section>

      {/* Initiatives */}
      <section className="border-t border-slate-200 bg-slate-50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-navy-600">
              Our initiatives
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-950 sm:text-4xl">
              Impact in the communities we serve
            </h2>
          </div>

          <div className="mt-10">
            <CsrInitiatives />
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-brand-500">
              Our approach
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              How we create lasting community impact
            </h2>
          </div>

          <div className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {csrPillars.map(({ label, title, body }) => (
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

      {/* CTA */}
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
            Partner with us on community impact
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
            We&apos;re on 24/7 to react promptly to your service needs. If you
            are interested in partnering with us on CSR initiatives, leave a
            message and we will reply as soon as we can.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/partner"
              className="bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              Partner with us
            </Link>
            <Link
              href="/about-us/contact-us"
              className="border border-white/30 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition-colors hover:bg-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
