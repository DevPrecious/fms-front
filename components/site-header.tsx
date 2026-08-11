"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { aboutLinks, primaryLinks, serviceLinks } from "./site-data";

function Chevron({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`h-3.5 w-3.5 transition-transform duration-200 ${className}`}
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

const dropdownPanelClass =
  "invisible absolute top-full z-50 translate-y-3 border border-slate-100 bg-white opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100";

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isSolid = !isHome || scrolled || mobileOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const closeMobile = () => setMobileOpen(false);

  const navItemClass = isSolid
    ? "relative flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-wider text-navy-800 transition-colors hover:text-navy-600 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-200 hover:after:scale-x-100"
    : "relative flex items-center gap-1 px-3 py-2 text-[13px] font-semibold uppercase tracking-wider text-white transition-colors hover:text-brand-400 after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-500 after:transition-transform after:duration-200 hover:after:scale-x-100";

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full">
      {/* Top utility bar */}
      <div
        className={`transition-colors duration-300 ${
          isSolid ? "bg-navy-900 text-white" : "bg-transparent text-white"
        }`}
      >
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <p className="hidden text-xs font-medium tracking-wide text-white/70 sm:block">
            Real-time fleet &amp; asset intelligence across five continents
          </p>
          <div className="flex w-full items-center justify-between gap-4 sm:w-auto sm:justify-end">
            <a
              href="tel:+256772753829"
              className="text-xs font-semibold text-brand-400 transition-colors hover:text-brand-300"
            >
              +256 772 753 829
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 text-xs font-semibold text-white/90 transition-colors hover:text-brand-400"
            >
              <svg
                className="h-3.5 w-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c0-4 3.6-6 8-6s8 2 8 6" />
              </svg>
              FMS IoT Login
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation bar */}
      <div
        className={`border-b transition-colors duration-300 ${
          isSolid
            ? "border-slate-100 bg-white"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="flex shrink-0 items-center"
            onClick={closeMobile}
          >
            <Image
              src="/assets/FMS-Logo-Blue-1.png"
              alt="FMS Africa — Fleet Monitoring Systems Ltd"
              width={150}
              height={54}
              priority
              className={`h-12 w-auto transition-[filter] duration-300 ${
                isSolid ? "" : "brightness-0 invert"
              }`}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden items-center lg:flex"
            aria-label="Main navigation"
          >
            <Link href="/" className={navItemClass}>
              Home
            </Link>

            {/* About dropdown */}
            <div className="group relative">
              <button
                type="button"
                className={navItemClass}
                aria-haspopup="true"
              >
                About
                <Chevron className="group-hover:rotate-180" />
              </button>
              <div className={`${dropdownPanelClass} left-0 w-56 p-2`}>
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block px-4 py-2.5 text-sm font-medium text-slate-600 transition-colors hover:bg-navy-900/5 hover:text-navy-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services mega menu */}
            <div className="group relative">
              <button
                type="button"
                className={navItemClass}
                aria-haspopup="true"
              >
                Services
                <Chevron className="group-hover:rotate-180" />
              </button>
              <div
                className={`${dropdownPanelClass} left-1/2 w-170 -translate-x-1/2 p-6`}
              >
                <p className="mb-4 border-l-4 border-brand-500 pl-3 text-xs font-bold uppercase tracking-widest text-navy-800">
                  Our Solutions
                </p>
                <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-navy-900/5 hover:text-navy-800"
                    >
                      <span
                        className="h-1.5 w-1.5 shrink-0 bg-brand-500"
                        aria-hidden="true"
                      />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {primaryLinks.map((link) => (
              <Link key={link.href} href={link.href} className={navItemClass}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/request-quote"
              className="hidden bg-brand-500 px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400 sm:block"
            >
              Request a Free Quote
            </Link>

            {/* Mobile menu toggle */}
            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center transition-colors lg:hidden ${
                isSolid
                  ? "text-navy-800 hover:bg-slate-100"
                  : "text-white hover:bg-white/10"
              }`}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                {mobileOpen ? (
                  <path d="M6 6l12 12M18 6L6 18" />
                ) : (
                  <path d="M4 7h16M4 12h16M4 17h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <nav
            className="max-h-[calc(100dvh-6.75rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 pb-6 pt-2 lg:hidden"
            aria-label="Mobile navigation"
          >
            <Link
              href="/"
              onClick={closeMobile}
              className="block px-3 py-3 text-sm font-semibold uppercase tracking-wider text-navy-800 hover:bg-slate-50"
            >
              Home
            </Link>

            <details className="group/about">
              <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold uppercase tracking-wider text-navy-800 hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                About
                <Chevron className="group-open/about:rotate-180" />
              </summary>
              <div className="mb-2 ml-3 border-l-2 border-brand-500 pl-3">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            <details className="group/services">
              <summary className="flex cursor-pointer list-none items-center justify-between px-3 py-3 text-sm font-semibold uppercase tracking-wider text-navy-800 hover:bg-slate-50 [&::-webkit-details-marker]:hidden">
                Services
                <Chevron className="group-open/services:rotate-180" />
              </summary>
              <div className="mb-2 ml-3 border-l-2 border-brand-500 pl-3">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMobile}
                    className="block px-3 py-2.5 text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-navy-800"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </details>

            {primaryLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block px-3 py-3 text-sm font-semibold uppercase tracking-wider text-navy-800 hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/request-quote"
              onClick={closeMobile}
              className="mt-4 block bg-brand-500 px-5 py-3 text-center text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              Request a Free Quote
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
