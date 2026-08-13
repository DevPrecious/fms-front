export type NavLink = {
  label: string;
  href: string;
};

export const aboutLinks: NavLink[] = [
  { label: "About Us", href: "/about-us/about-us" },
  { label: "Accreditations", href: "/about-us/acreditation" },
  { label: "CSR", href: "/about-us/csr" },
  { label: "Gallery", href: "/about-us/gallery" },
  { label: "Contact Us", href: "/about-us/contact-us" },
];

export const serviceLinks: NavLink[] = [
  { label: "Speed Limiter Solutions", href: "/services/speed-limiter-solutions" },
  { label: "Vehicle Tracking", href: "/services/vehicle-tracking" },
  { label: "Motorcycle Tracking", href: "/services/motorcycle-tracking" },
  { label: "Vehicle Fuel Management", href: "/services/vehicle-fuel-management" },
  { label: "Generator Fuel Management", href: "/services/generator-fuel-management" },
  { label: "Fleet Management", href: "/services/fleet-management" },
  { label: "Cargo Tracking", href: "/services/cargo-tracking" },
  { label: "Animal Tracking", href: "/services/animal-tracking" },
  { label: "Satellite Tracking", href: "/services/satellite-tracking" },
  { label: "AI-Powered Video Telematics", href: "/services/ai-powered-video-telematics" },
  { label: "Cold Chain Management", href: "/services/cold-chain-management" },
  { label: "Weight Monitoring System", href: "/services/weight-monitoring-system" },
  { label: "Push-To-Talk Telematics", href: "/services/push-to-talk-telematics" },
  { label: "Asset Tracking", href: "/services/asset-tracking" },
  { label: "Mobile Workforce Management", href: "/services/mobile-workforce-management" },
  { label: "Logistics Management", href: "/services/logistics-management" },
  { label: "Track and Trace", href: "/services/track-and-trace" },
  {
    label: "Renewables & IoT Energy Storage Monitoring",
    href: "/services/renewables-and-iot-energy-storage-monitoring",
  },
];

export const primaryLinks: NavLink[] = [
  { label: "Benefits", href: "/benefits" },
  { label: "Partner", href: "/resellers" },
  { label: "Clientele", href: "/clientele" },
  { label: "Blog", href: "/blog" },
];

export const footerProducts: NavLink[] = serviceLinks;

export const footerFeaturedProducts: NavLink[] = [
  { label: "Fleet Management", href: "/services/fleet-management" },
  { label: "AI-Powered Video Telematics", href: "/services/ai-powered-video-telematics" },
  { label: "Cargo Tracking", href: "/services/cargo-tracking" },
  { label: "Cold Chain Management", href: "/services/cold-chain-management" },
  { label: "Generator Fuel Management", href: "/services/generator-fuel-management" },
  { label: "Push-To-Talk Telematics", href: "/services/push-to-talk-telematics" },
];

export const footerLoginUrl = "http://app.fms-ecsafrica.com/login";

export const footerQuickLinks: NavLink[] = [
  { label: "Galooli Spaces", href: "https://login.galooli.com/" },
  {
    label: "CRM Tool",
    href: "https://crm.monkeypesa.com/login?return_to=%2Fusers%2Fcurrent%2Forganizations",
  },
  {
    label: "System Integration using API",
    href: "https://developers.navixy.com/general/overview/",
  },
  { label: "ZON MAX Software Download", href: "https://zon.galooli-systems.com/" },
  {
    label: "Galooli Configuration Center",
    href: "https://tools.galooli-systems.com/ConfigurationCenter/publish.htm",
  },
  { label: "BCE FMSET", href: "https://xdm.xgfleet.eu/login" },
  {
    label: "Teltonika Configurator",
    href: "https://wiki.teltonika-gps.com/view/Teltonika_Configurator_versions",
  },
  {
    label: "System Development using SDK",
    href: "https://github.com/SquareGPS/navixy-js-sdk",
  },
  {
    label: "Galooli Ticketing System",
    href: "https://galooli.atlassian.net/servicedesk/customer/portal/5",
  },
  {
    label: "Xirgo Ticketing System",
    href: "https://sensatacloud.atlassian.net/servicedesk/customer/portal/35/user/login",
  },
  {
    label: "Teltonika Ticketing System",
    href: "https://viphelpdesk.teltonika.lt/en/Account/LogOn?ReturnUrl=%2f",
  },
  {
    label: "Webmail",
    href: "https://accounts.google.com/ServiceLogin?continue=http%3A%2F%2Fmail.google.com%2Fa%2Ffms-ecsafrica.com%2F&service=mail&sacu=1&hd=fms-ecsafrica.com#identifier",
  },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "API Reports", href: "https://fms-ecsafrica.com/reports/" },
];

export const footerPortalLinks: NavLink[] = [
  {
    label: "Client Portal",
    href: "http://galoolitools.dnsalias.com/portal/clients/",
  },
  { label: "Hubspot CRM", href: "https://app.hubspot.com/login" },
  { label: "CMS Manager", href: "https://cms.fms-ecsafrica.com/" },
  {
    label: "Galooli Configuration Center",
    href: "https://zon.galooli-systems.com/zonProX/publish.htm",
  },
  { label: "BCE Configuration Center", href: "https://bce.fmset.eu/login" },
];

export const footerContact = {
  phone: "+234 803 298 0119",
  whatsapp:
    "https://api.whatsapp.com/send?phone=+2348032980119&text=Hello%20FMS%20Africa%20Nigeria",
  contactPage: "/about-us/contact-us",
};

export const footerDesignCredit = {
  label: "Alphasoft Ltd",
  href: "https://alphasoft.ltd/",
};

export const regionalPhones = [
  { region: "Nigeria", phone: "+234 803 298 0119" },
  { region: "Europe", phone: "+44 745 235 3356" },
  { region: "Asia", phone: "+60 11 3772 7425" },
  { region: "N. America", phone: "+1 236 991 9802" },
  { region: "S. America", phone: "+52 614 242 5538" },
];
