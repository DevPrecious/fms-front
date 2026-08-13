import { getSiteSettings } from "@/lib/cms";
import ConsultationCtaForm, {
  type ConsultationCtaProps,
} from "@/components/consultation-cta-form";

export default async function ConsultationCta({
  image,
  headline,
  body,
  buttonLabel,
  href,
}: ConsultationCtaProps) {
  const settings = await getSiteSettings().catch(() => null);

  return (
    <ConsultationCtaForm
      image={image || settings?.ctaImage || "/assets/landing/hero-fleet.jpg"}
      headline={
        headline ||
        settings?.ctaHeadline ||
        "Get started with a free consultation"
      }
      body={
        body ||
        settings?.ctaBody ||
        "Discover fleet and asset solutions that reduce costs and improve visibility. Take the first step today."
      }
      buttonLabel={
        buttonLabel || settings?.ctaButtonLabel || "Get a free consultation"
      }
      href={href || settings?.ctaHref || "/about-us/contact-us"}
    />
  );
}
