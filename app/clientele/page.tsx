import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ClienteleView from "@/components/clientele-view";
import ConsultationCta from "@/components/consultation-cta";
import { clientCount as fallbackCount, clienteleLogos as fallbackLogos, type ClientLogo } from "@/components/clientele-data";
import { getClientele, getClientelePage } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Our Clientele",
  description:
    "FMS Africa clientele — trusted by banks, NGOs, government agencies and enterprises across Africa and beyond.",
};

export default async function ClientelePage() {
  const [cms, listing] = await Promise.all([
    getClientele().catch(() => []),
    getClientelePage().catch(() => null),
  ]);
  const logos: ClientLogo[] =
    cms.length > 0
      ? cms.map((item, index) => ({
          id: item.id || `client-${index}`,
          name: item.name,
          src: item.src,
          category: item.category as ClientLogo["category"],
        }))
      : fallbackLogos;
  const clientCount = logos.length || fallbackCount;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950">
        <div
          className="pointer-events-none absolute inset-0 opacity-10"
          aria-hidden="true"
          style={{
            backgroundImage:
              "linear-gradient(to right, #ffd200 1px, transparent 1px), linear-gradient(to bottom, #ffd200 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
          <p className="text-sm tracking-wide text-brand-500">
            <span aria-hidden="true">•</span> Our clientele{" "}
            <span aria-hidden="true">•</span>
          </p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            {listing?.heroHeadline || (
              <>
                Trusted by{" "}
                <span className="text-brand-500">{clientCount}+</span>{" "}
                organisations across Africa
              </>
            )}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
            {listing?.intro ||
              "From global NGOs and development agencies to banks, government ministries and leading corporates — FMS Africa powers fleet and asset intelligence for partners who demand reliability."}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px bg-white/10 sm:grid-cols-4">
            {[
              { value: String(clientCount), label: "Partner logos" },
              { value: "5", label: "Continents" },
              { value: "24/7", label: "Support" },
              { value: "10+", label: "Years of trust" },
            ].map(({ value, label }) => (
              <div
                key={label}
                className="border border-white/10 bg-navy-950/80 px-4 py-5 text-center"
              >
                <p className="text-2xl font-bold text-brand-500 sm:text-3xl">
                  {value}
                </p>
                <p className="mt-1 text-xs uppercase tracking-wider text-white/60">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro strip */}
      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-base leading-7 text-slate-600 sm:text-lg">
            Browse our partner wall below — search by name, filter by sector, or
            click any logo to view it in full detail.
          </p>
        </div>
      </section>

      <ClienteleView logos={logos} />

      <ConsultationCta />
    </div>
  );
}
