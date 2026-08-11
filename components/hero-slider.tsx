"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    image: "/assets/landing/hero-fleet.jpg",
    alt: "Cargo truck on a highway monitored in real time",
    lineOne: "Embrace the data,",
    lineTwo: "empower your fleet.",
    body: "Internet of Things, Big Data and AI — customer-centric solutions tailored to your industry, so every decision is a data-driven one.",
  },
  {
    image: "/assets/landing/trucks-highway.jpg",
    alt: "Heavy truck managed with FMS Africa fleet management",
    lineOne: "Your fleet,",
    lineTwo: "always in sight.",
    body: "Real-time GPS tracking, driver identification and utilization reports that maximize the productivity of every vehicle you own.",
  },
  {
    image: "/assets/landing/control-room.jpg",
    alt: "AI-powered video telematics analytics dashboard",
    lineOne: "See risk coming,",
    lineTwo: "before it costs you.",
    body: "AI-powered video telematics detects risky driving as it happens — protecting your drivers, your cargo and your bottom line.",
  },
  {
    image: "/assets/landing/logistics-port.jpg",
    alt: "Container port with cargo tracked end to end",
    lineOne: "Every shipment,",
    lineTwo: "delivered intact.",
    body: "Cargo tracking and cold chain monitoring with GPS and temperature sensors safeguard product integrity at every stage.",
  },
];

const SLIDE_INTERVAL_MS = 6000;

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setActive((current) => (current + 1) % slides.length),
      SLIDE_INTERVAL_MS,
    );
    return () => clearInterval(id);
  }, [active]);

  return (
    <section
      className="relative h-dvh min-h-140 w-full overflow-hidden"
      aria-label="Highlights"
    >
      {slides.map((slide, index) => {
        const isActive = index === active;
        return (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              isActive ? "opacity-100" : "pointer-events-none opacity-0"
            }`}
            aria-hidden={!isActive}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/35" />
            <div className="absolute inset-0 bg-linear-to-t from-navy-950/85 via-navy-950/25 to-navy-950/10" />

            <div className="absolute inset-x-0 bottom-0">
              <div className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
                <h1
                  className={`max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-white transition-all delay-150 duration-700 sm:text-6xl lg:text-7xl ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.lineOne}
                  <br />
                  <span className="text-brand-500">{slide.lineTwo}</span>
                </h1>
                <p
                  className={`mt-6 max-w-lg text-sm leading-6 text-white/85 transition-all delay-300 duration-700 sm:text-base sm:leading-7 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  {slide.body}
                </p>
                <div
                  className={`mt-8 transition-all delay-450 duration-700 ${
                    isActive
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                >
                  <Link
                    href="/request-quote"
                    className="inline-block bg-white px-7 py-3.5 text-sm font-semibold text-navy-900 transition-colors hover:bg-brand-500"
                  >
                    Get started
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-4 flex gap-2 sm:right-6 lg:right-8">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === active}
            className={`h-1 w-8 transition-colors ${
              index === active
                ? "bg-brand-500"
                : "bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
