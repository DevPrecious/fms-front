import SiteHeader from "@/components/site-header";
import SiteMain from "@/components/site-main";
import SiteFooter from "@/components/site-footer";
import { getSiteSettings, getServices } from "@/lib/cms";
import {
  aboutLinks as fallbackAboutLinks,
  primaryLinks as fallbackPrimaryLinks,
  serviceLinks as fallbackServiceLinks,
  footerLoginUrl,
  footerQuickLinks as fallbackQuickLinks,
  footerPortalLinks as fallbackPortalLinks,
  footerFeaturedProducts as fallbackFeatured,
  footerContact,
  footerDesignCredit,
  regionalPhones as fallbackPhones,
  type NavLink,
} from "@/components/site-data";
import type { SiteSettings } from "@/lib/cms-types";

function settingsOrFallback(
  settings: SiteSettings | null,
  serviceLinks: NavLink[],
) {
  return {
    headerTagline:
      settings?.headerTagline ||
      "Now open in Nigeria — fleet & asset intelligence for West Africa",
    headerPhone: settings?.headerPhone || "+234 803 298 0119",
    loginLabel: settings?.loginLabel || "FMS IoT Login",
    loginUrl: settings?.loginUrl || footerLoginUrl,
    logoUrl: "/assets/FMS-Logo-Blue-1.png",
    aboutLinks:
      settings?.aboutLinks?.length ? settings.aboutLinks : fallbackAboutLinks,
    primaryLinks: settings?.primaryLinks?.length
      ? settings.primaryLinks
      : fallbackPrimaryLinks,
    serviceLinks,
    footerBlurb:
      settings?.footerBlurb ||
      "FMS Africa Nigeria Ltd is now on the ground in Lagos — bringing the FMS Africa group's real-time fleet, fuel and asset monitoring to Nigerian operators.",
    footerPhone: settings?.footerPhone || footerContact.phone,
    footerWhatsapp: settings?.footerWhatsapp || footerContact.whatsapp,
    contactPageUrl: settings?.contactPageUrl || footerContact.contactPage,
    designCreditLabel:
      settings?.designCreditLabel || footerDesignCredit.label,
    designCreditUrl: settings?.designCreditUrl || footerDesignCredit.href,
    footerCopyright:
      settings?.footerCopyright ||
      "FMS Africa Nigeria Ltd. All rights reserved.",
    regionalPhones: settings?.regionalPhones?.length
      ? settings.regionalPhones
      : fallbackPhones,
    footerQuickLinks: settings?.footerQuickLinks?.length
      ? settings.footerQuickLinks
      : fallbackQuickLinks,
    footerPortalLinks: settings?.footerPortalLinks?.length
      ? settings.footerPortalLinks
      : fallbackPortalLinks,
    footerFeaturedProducts: settings?.footerFeaturedProducts?.length
      ? settings.footerFeaturedProducts
      : fallbackFeatured,
    footerProducts: serviceLinks,
    facebookUrl: settings?.facebookUrl || "",
    twitterUrl: settings?.twitterUrl || "",
    linkedinUrl: settings?.linkedinUrl || "",
    youtubeUrl: settings?.youtubeUrl || "",
    instagramUrl: settings?.instagramUrl || "",
  };
}

export default async function SiteShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const [settings, services] = await Promise.all([
    getSiteSettings().catch(() => null),
    getServices().catch(() => []),
  ]);

  const serviceLinks: NavLink[] =
    services.length > 0
      ? services.map((s) => ({
          label: s.navLabel || s.title,
          href: `/services/${s.slug}`,
        }))
      : fallbackServiceLinks;

  const props = settingsOrFallback(settings, serviceLinks);

  return (
    <>
      <SiteHeader
        headerTagline={props.headerTagline}
        headerPhone={props.headerPhone}
        loginLabel={props.loginLabel}
        loginUrl={props.loginUrl}
        logoUrl={props.logoUrl}
        aboutLinks={props.aboutLinks}
        primaryLinks={props.primaryLinks}
        serviceLinks={props.serviceLinks}
        contactPageUrl={props.contactPageUrl}
      />
      <SiteMain>{children}</SiteMain>
      <SiteFooter
        logoUrl={props.logoUrl}
        footerBlurb={props.footerBlurb}
        footerPhone={props.footerPhone}
        footerWhatsapp={props.footerWhatsapp}
        contactPageUrl={props.contactPageUrl}
        designCreditLabel={props.designCreditLabel}
        designCreditUrl={props.designCreditUrl}
        footerCopyright={props.footerCopyright}
        regionalPhones={props.regionalPhones}
        footerQuickLinks={props.footerQuickLinks}
        footerPortalLinks={props.footerPortalLinks}
        footerFeaturedProducts={props.footerFeaturedProducts}
        footerProducts={props.footerProducts}
        loginUrl={props.loginUrl}
        facebookUrl={props.facebookUrl}
        twitterUrl={props.twitterUrl}
        linkedinUrl={props.linkedinUrl}
        youtubeUrl={props.youtubeUrl}
        instagramUrl={props.instagramUrl}
      />
    </>
  );
}
