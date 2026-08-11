import Link from "next/link";
import { footerProducts, footerQuickLinks, regionalPhones } from "./site-data";

const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 4.3c2.5 0 2.8 0 3.8.1 2.5.1 3.7 1.3 3.8 3.8 0 1 .1 1.3.1 3.8s0 2.8-.1 3.8c-.1 2.5-1.3 3.7-3.8 3.8-1 0-1.3.1-3.8.1s-2.8 0-3.8-.1c-2.5-.1-3.7-1.3-3.8-3.8 0-1-.1-1.3-.1-3.8s0-2.8.1-3.8C4.5 5.7 5.7 4.5 8.2 4.4c1-.1 1.3-.1 3.8-.1zM12 2.5c-2.6 0-2.9 0-3.9.1-3.4.2-5.3 2-5.5 5.5-.1 1-.1 1.3-.1 3.9s0 2.9.1 3.9c.2 3.4 2 5.3 5.5 5.5 1 .1 1.3.1 3.9.1s2.9 0 3.9-.1c3.4-.2 5.3-2 5.5-5.5.1-1 .1-1.3.1-3.9s0-2.9-.1-3.9c-.2-3.4-2-5.3-5.5-5.5-1-.1-1.3-.1-3.9-.1zm0 4.6a4.9 4.9 0 100 9.8 4.9 4.9 0 000-9.8zm0 8.1a3.2 3.2 0 110-6.4 3.2 3.2 0 010 6.4zm5.1-9.4a1.1 1.1 0 100 2.3 1.1 1.1 0 000-2.3z",
  },
  {
    label: "X (Twitter)",
    href: "#",
    path: "M17.8 3h3l-6.6 7.6L22 21h-6.1l-4.8-6.3L5.6 21h-3l7.1-8.1L2 3h6.3l4.3 5.7L17.8 3zm-1.1 16.2h1.7L7.4 4.7H5.6l11.1 14.5z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M6.9 8.6H3.4V21h3.5V8.6zM5.2 7.1a2 2 0 100-4.1 2 2 0 000 4.1zM20.6 21h-3.5v-6c0-1.6-.6-2.7-2-2.7-1.1 0-1.8.8-2.1 1.5-.1.3-.1.6-.1 1V21H9.4V8.6h3.5v1.5c.5-.7 1.3-1.8 3.2-1.8 2.3 0 4.1 1.5 4.1 4.8V21h.4z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M21.6 7.2a2.5 2.5 0 00-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 002.4 7.2 26 26 0 002 12c0 1.6.1 3.2.4 4.8a2.5 2.5 0 001.8 1.8c1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4a2.5 2.5 0 001.8-1.8c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8zM10 15.2V8.8l5.2 3.2L10 15.2z",
  },
  {
    label: "WhatsApp",
    href: "#",
    path: "M12 2.2A9.7 9.7 0 002.3 12c0 1.7.4 3.4 1.3 4.9L2.2 21.8l5-1.3a9.7 9.7 0 004.8 1.2A9.7 9.7 0 0021.7 12 9.7 9.7 0 0012 2.2zm5.7 13.9c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-1.8-.1a16 16 0 01-1.6-.6c-2.9-1.2-4.7-4.1-4.9-4.3-.1-.2-1.1-1.5-1.1-2.9s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4-.1.6.4l.8 2c.1.1.1.3 0 .5l-.3.5-.4.5c-.1.1-.3.3-.1.5.1.3.6 1 1.3 1.6.9.8 1.7 1.1 2 1.2.2.1.4.1.5-.1l.7-.9c.2-.2.3-.2.5-.1l1.9.9c.2.1.4.2.4.3.1 0 .1.5-.1 1.2z",
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative bg-navy-950 text-white">
      {/* Brand accent line */}
      <div className="h-1 w-full bg-linear-to-r from-brand-500 via-brand-400 to-brand-600" />

      {/* Subtle background glow */}
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/4 h-72 w-72 bg-navy-600/30 blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 h-72 w-72 bg-brand-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand + contact */}
          <div className="lg:col-span-4">
            <p className="text-2xl font-bold tracking-tight">
              FMS <span className="text-brand-500">Africa</span>
            </p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest text-white/50">
              Fleet Monitoring Systems Ltd
            </p>
            <p className="mt-5 max-w-sm text-sm leading-6 text-white/70">
              Our solutions provide businesses with real-time monitoring,
              analysis and control over their assets — enabling asset
              optimization, significant OPEX reductions and productivity
              maximization.
            </p>

            <ul className="mt-6 space-y-2">
              {regionalPhones.map(({ region, phone }) => (
                <li key={region} className="flex items-baseline gap-2 text-sm">
                  <span className="w-24 shrink-0 font-semibold text-white/50">
                    {region}
                  </span>
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-white/80 transition-colors hover:text-brand-400"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-2.5">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center bg-white/10 text-white/80 transition-all hover:-translate-y-0.5 hover:bg-brand-500 hover:text-navy-900"
                >
                  <svg
                    className="h-4.5 w-4.5"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="lg:col-span-3">
            <h3 className="border-l-4 border-brand-500 pl-3 text-sm font-bold uppercase tracking-widest">
              Products
            </h3>
            <ul className="mt-6 space-y-3">
              {footerProducts.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand-400"
                  >
                    <span
                      className="h-px w-3 bg-brand-500 transition-all group-hover:w-5"
                      aria-hidden="true"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Login & quick links */}
          <div className="lg:col-span-5">
            <h3 className="border-l-4 border-brand-500 pl-3 text-sm font-bold uppercase tracking-widest">
              Login &amp; Quick Links
            </h3>
            <ul className="mt-6 grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {footerQuickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 transition-colors hover:text-brand-400"
                  >
                    <span
                      className="h-px w-3 bg-brand-500 transition-all group-hover:w-5"
                      aria-hidden="true"
                    />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-white/50 sm:flex-row sm:px-6 lg:px-8">
          <p>
            &copy; {new Date().getFullYear()} Fleet Monitoring Systems Limited.
            All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="transition-colors hover:text-brand-400">
              Privacy Policy
            </a>
            <span aria-hidden="true">|</span>
            <p>
              Design by{""}
              <a
                href="#"
                className="font-medium text-white/70 transition-colors hover:text-brand-400"
              >
                Alphasoft Ltd
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
