"use client";

import TestimonialsMarquee from "@/components/testimonials-marquee";
import { testimonials } from "./reseller-data";

export default function ResellerTestimonials({
  items = testimonials,
}: {
  items?: typeof testimonials;
} = {}) {
  const source = items.length > 0 ? items : testimonials;

  return (
    <TestimonialsMarquee
      items={source}
      eyebrow="Testimonials"
      headline="Trusted by organisations across Africa."
    />
  );
}
