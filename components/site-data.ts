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
  { label: "Partner", href: "/partner" },
  { label: "Clientele", href: "/clientele" },
  { label: "Blog", href: "/blog" },
];

export const footerProducts: NavLink[] = [
  { label: "Fleet Management", href: "/services/fleet-management" },
  { label: "AI-Powered Video Telematics", href: "/services/ai-powered-video-telematics" },
  { label: "Cargo Tracking", href: "/services/cargo-tracking" },
  { label: "Cold Chain Management", href: "/services/cold-chain-management" },
  { label: "Generator Fuel Management", href: "/services/generator-fuel-management" },
  { label: "Push-To-Talk Telematics", href: "/services/push-to-talk-telematics" },
];

/* External portals — update hrefs when the final URLs are confirmed. */
export const footerQuickLinks: NavLink[] = [
  { label: "Galooli Spaces", href: "#" },
  { label: "CRM Tool", href: "#" },
  { label: "System Integration using API", href: "#" },
  { label: "ZON MAX Software Download", href: "#" },
  { label: "Galooli Configuration Center", href: "#" },
  { label: "BCE FMSET", href: "#" },
  { label: "Teltonika Configurator", href: "#" },
  { label: "System Development using SDK", href: "#" },
  { label: "Galooli Ticketing System", href: "#" },
  { label: "Xirgo Ticketing System", href: "#" },
  { label: "Teltonika Ticketing System", href: "#" },
  { label: "Webmail", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "API Reports", href: "#" },
];

export const regionalPhones = [
  { region: "Europe", phone: "+44 745 235 3356" },
  { region: "Asia", phone: "+60 11 3772 7425" },
  { region: "N. America", phone: "+1 236 991 9802" },
  { region: "S. America", phone: "+52 614 242 5538" },
  { region: "Africa", phone: "+256 772 753 829" },
];
