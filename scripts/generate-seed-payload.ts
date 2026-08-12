import { writeFileSync } from "fs";
import { servicePages } from "../components/services-data";
import { blogPosts, getPostContent } from "../components/blog-data";
import { galleryItems } from "../components/gallery-data";
import { csrInitiatives, csrPillars } from "../components/csr-data";
import {
  benefitSteps,
  industryBenefits,
  solutionPillars,
} from "../components/benefits-data";
import {
  resellerBenefits,
  programSteps,
  regions,
  testimonials,
} from "../components/reseller-data";
import { inquiryCards, offices, contactFaqs } from "../components/contact-data";
import { clienteleLogos } from "../components/clientele-data";
import * as site from "../components/site-data";

function sectionsToHtml(
  sections: { heading?: string; paragraphs: string[] }[],
) {
  return sections
    .map((s) => {
      const h = s.heading ? `<h2>${s.heading}</h2>` : "";
      const ps = s.paragraphs.map((p) => `<p>${p}</p>`).join("");
      return h + ps;
    })
    .join("");
}

const heroSlides = [
  {
    image: "/assets/landing/hero-fleet.jpg",
    alt: "Cargo truck on a highway monitored in real time",
    lineOne: "Embrace the data,",
    lineTwo: "empower your fleet.",
    body: "Internet of Things, Big Data and AI — customer-centric solutions tailored to your industry, so every decision is a data-driven one.",
    order: 0,
    active: true,
  },
  {
    image: "/assets/landing/trucks-highway.jpg",
    alt: "Heavy truck managed with FMS Africa fleet management",
    lineOne: "Your fleet,",
    lineTwo: "always in sight.",
    body: "Real-time GPS tracking, driver identification and utilization reports that maximize the productivity of every vehicle you own.",
    order: 1,
    active: true,
  },
  {
    image: "/assets/landing/control-room.jpg",
    alt: "AI-powered video telematics analytics dashboard",
    lineOne: "See risk coming,",
    lineTwo: "before it costs you.",
    body: "AI-powered video telematics detects risky driving as it happens — protecting your drivers, your cargo and your bottom line.",
    order: 2,
    active: true,
  },
  {
    image: "/assets/landing/logistics-port.jpg",
    alt: "Container port with cargo tracked end to end",
    lineOne: "Every shipment,",
    lineTwo: "delivered intact.",
    body: "Cargo tracking and cold chain monitoring with GPS and temperature sensors safeguard product integrity at every stage.",
    order: 3,
    active: true,
  },
];

const siteSettings = {
  siteName: "FMS Africa",
  siteDescription:
    "Real-time fleet and asset monitoring solutions — vehicle tracking, fuel management, AI-powered video telematics and more, across five continents.",
  logoUrl: "/assets/FMS-Logo-Blue-1.png",
  headerTagline: "Real-time fleet & asset intelligence across five continents",
  headerPhone: "+256 772 753 829",
  loginLabel: "FMS IoT Login",
  loginUrl: site.footerLoginUrl,
  footerBlurb:
    "Our solutions provide businesses with real-time monitoring, analysis and control over their assets — enabling asset optimization, significant OPEX reductions and productivity maximization.",
  footerPhone: site.footerContact.phone,
  footerWhatsapp: site.footerContact.whatsapp,
  contactPageUrl: site.footerContact.contactPage,
  designCreditLabel: site.footerDesignCredit.label,
  designCreditUrl: site.footerDesignCredit.href,
  footerCopyright: "© Fleet Monitoring Systems Ltd. All rights reserved.",
  facebookUrl: "",
  twitterUrl: "",
  linkedinUrl: "",
  youtubeUrl: "",
  instagramUrl: "",
  regionalPhones: site.regionalPhones,
  aboutLinks: site.aboutLinks,
  primaryLinks: site.primaryLinks,
  footerQuickLinks: site.footerQuickLinks,
  footerPortalLinks: site.footerPortalLinks,
  footerFeaturedProducts: site.footerFeaturedProducts,
};

const homepage = {
  stats: [
    { value: "100%", label: "Customer satisfaction with our work" },
    { value: "24/7", label: "Prompt reaction to your service needs" },
    { value: "3+", label: "Countries — Uganda, Kenya, Tanzania & more" },
    { value: "5", label: "Continents with dedicated support lines" },
  ],
  missionEyebrow: "Who we are",
  missionHeadline:
    "We are dedicated to giving businesses real-time monitoring, analysis and control over their assets.",
  missionBody:
    "Our solutions enable asset optimization, significant OPEX reductions and productivity maximization — for fleets, generators, cargo and cold chains across Africa and beyond.",
  missionImage: "/assets/landing/control-room.jpg",
  missionCalloutText:
    "GPS trackers with temperature sensors protect the integrity of your products at every stage of the cold chain.",
  missionCalloutHref: "/services/cold-chain-management",
  solutions: [
    {
      title: "Vehicle Tracking",
      href: "/services/vehicle-tracking",
      description:
        "Real-time GPS visibility of every vehicle in your fleet, wherever the road leads.",
      theme: "bg-navy-800 text-white",
      iconPath:
        "M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13v5a1 1 0 01-1 1h-1a2 2 0 11-4 0H9a2 2 0 11-4 0H4a1 1 0 01-1-1v-5zm3.5-4L5.6 12h12.8l-.9-3H6.5z",
    },
    {
      title: "AI-Powered Video Telematics",
      href: "/services/ai-powered-video-telematics",
      description:
        "Smart cameras that detect risk, coach drivers and protect you against false claims.",
      theme: "bg-brand-500 text-navy-900",
      iconPath:
        "M4 6a2 2 0 012-2h8a2 2 0 012 2v3.5l4-2.5v10l-4-2.5V18a2 2 0 01-2 2H6a2 2 0 01-2-2V6z",
    },
    {
      title: "Vehicle Fuel Management",
      href: "/services/vehicle-fuel-management",
      description:
        "Monitor consumption, catch theft and cut fuel costs with precise tank-level data.",
      theme: "bg-navy-700 text-white",
      iconPath:
        "M6 3h7a2 2 0 012 2v14h1a1 1 0 001-1v-6.5l-2-1V8l3.5 1.8c.3.2.5.5.5.9V18a3 3 0 01-3 3H6a2 2 0 01-2-2V5a2 2 0 012-2zm1 3v4h5V6H7z",
    },
  ],
  solutionsPhotoHref: "/services/fleet-management",
  solutionsPhotoImage: "/assets/landing/trucks-highway.jpg",
  solutionsPhotoTitle: "Fleet Management",
  benefits: [
    {
      title: "Risk Mitigation",
      body: "Each stage of the cold chain provides an opportunity for risk that can be avoided and managed with GPS trackers and temperature sensors, ensuring the integrity of your products and assets end to end.",
    },
    {
      title: "OPEX Reduction",
      body: "Fuel utilization, maintenance-due alerts and cost-per-kilometre reporting give management the data to significantly reduce fleet operating and maintenance costs.",
    },
    {
      title: "Productivity Maximization",
      body: "Driver identification, performance reports and utilization analytics help you get more out of every vehicle, operator and piece of heavy equipment you own.",
    },
    {
      title: "Real-Time Visibility",
      body: "Clear, live visibility of your transporter fleet dramatically improves turnaround times, delivery reliability and customer satisfaction across your supply chain.",
    },
  ],
  pillars: [
    {
      title: "Internet of Things",
      body: "Sensors and trackers that connect your vehicles, generators, cargo and cold rooms to one platform.",
    },
    {
      title: "Big Data",
      body: "Every trip, litre and degree captured and turned into reports management can act on.",
    },
    {
      title: "Artificial Intelligence",
      body: "AI video telematics and analytics that detect risk before it becomes a loss.",
    },
    {
      title: "24/7 Support",
      body: "We are on around the clock to react promptly to your service needs, wherever you operate.",
    },
  ],
  stories: [
    {
      company: "MTN Zambia",
      quote:
        "Identification of fleet drivers for departments with pool vehicles was achieved through the use of RFID driver tags.",
    },
    {
      company: "African Queen",
      quote:
        "Fuel utilization and driver performance reports from the system have been used to improve fleet utilization and driver productivity.",
    },
    {
      company: "Equity Bank",
      quote:
        "Reports on generator working hours and maintenance-due alerts to management were activated.",
    },
    {
      company: "UMEME Limited",
      quote:
        "Reduction in fleet maintenance costs thanks to system reporting on maintenance costs per kilometre covered.",
    },
    {
      company: "Nile Breweries Ltd",
      quote:
        "Turnaround time for delivery of beer supplies to the market drastically improved due to clear visibility of the transporter fleet's location.",
    },
    {
      company: "Ministry of Water & Environment",
      quote:
        "Heavy equipment utilization and operator performance reports have been used to improve equipment utilization and operator productivity.",
    },
    {
      company: "International School of Uganda",
      quote:
        "Reports of fleet fuel utilization and maintenance from the system are used by management to reduce operational costs.",
    },
  ],
  ctaImage: "/assets/landing/hero-fleet.jpg",
  ctaHeadline: "Get started with a free consultation",
  ctaPrimaryLabel: "Request a Free Quote",
  ctaPrimaryHref: "/about-us/contact-us",
  ctaSecondaryLabel: "Contact Us",
  ctaSecondaryHref: "/about-us/contact-us",
};

const aboutPage = {
  heroHeadline: "Driven by innovation,\npowered by data.",
  intro:
    "Fleet Monitoring Systems Ltd (FMS Africa) is the leading Internet of Things technology company of choice globally. Our solutions provide businesses with real-time monitoring, analysis and control over their assets — enabling asset optimization, significant OPEX reductions and productivity maximization.",
  heroImage: "/assets/landing/trucks-highway.jpg",
  stats: [
    { value: "100+", label: "Enterprise clients served globally" },
    { value: "24/7", label: "Support across all time zones" },
    { value: "5", label: "Continents with dedicated phone lines" },
    { value: "3+", label: "Countries — Uganda, Kenya, Tanzania & more" },
  ],
  vision:
    "To become the world's trusted provider of innovative telematics solutions through innovation, efficiency, and sustainability.",
  mission:
    "Our mission is to deliver innovative, reliable and scalable telematics solutions that enable businesses to optimize their operations through real-time monitoring, advanced analytics and proactive support. We strive to enhance productivity, reduce environmental degradation and ensure the safety and satisfaction of our clients.",
  purpose:
    "We empower businesses with real-time operational data, enabling smarter decision making that drives productivity, cost savings and operational excellence.",
  coreValues: [
    {
      title: "Integrity",
      body: "Acting with honesty, transparency and ethical principles in all situations and at all times.",
    },
    {
      title: "Commitment",
      body: "Dedication to achieving goals, persevering through challenges and staying focused on results.",
    },
    {
      title: "Reliability",
      body: "Dependability in delivering consistent, high-quality results and fulfilling promises.",
    },
    {
      title: "Teamwork",
      body: "Collaborative efforts, valuing diverse perspectives and working together to achieve shared goals.",
    },
    {
      title: "Innovation",
      body: "Embracing new ideas, creative problem-solving and driving progress through change.",
    },
    {
      title: "Passion",
      body: "Enthusiasm and strong emotional drive for the work, the people, the purpose and the mission.",
    },
  ],
  trustedBy: [
    "MTN Zambia",
    "African Queen",
    "Equity Bank",
    "UMEME Limited",
    "Nile Breweries Ltd",
    "Ministry of Water & Environment",
    "International School of Uganda",
  ],
  faqs: [
    {
      question: "What does FMS Africa do?",
      answer:
        "Fleet Monitoring Systems Ltd (FMS Africa) is a leading Internet of Things technology company. We provide businesses with real-time monitoring, analysis and control over their assets — enabling optimization, OPEX reduction and productivity maximization.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve logistics, banking, telecommunications, brewing, utilities, government, education and any organisation that relies on fleets, generators, cargo, cold chains or mobile assets.",
    },
    {
      question: "Where do you operate?",
      answer:
        "We operate across Uganda, Kenya, Tanzania and more, with dedicated support lines covering Europe, Asia, North America, South America and Africa.",
    },
    {
      question: "How can I partner with FMS Africa?",
      answer:
        "We are on 24/7 to react promptly to your service needs. If you are interested in partnering with us, leave a message through our partner page and we will reply as soon as we can.",
    },
  ],
  featuredQuote:
    "We empower businesses with real-time operational data, enabling smarter decision making that drives productivity, cost savings and operational excellence.",
  featuredQuoteAuthor: "FMS Africa Purpose Statement",
  ctaHeadline: "Join the connected fleet movement with FMS Africa",
  ctaBody:
    "We're on 24/7 to react promptly to your service needs. If you are interested in partnering with us, leave a message and we will reply as soon as we can.",
};

const accreditationPage = {
  heroHeadline: "Certified compliance,\nproven quality.",
  intro:
    "Fleet Monitoring Systems Ltd is now ISO 45001:2018 Certified — the internationally recognised standard for occupational health and safety management systems.",
  certificateImage: "",
  certificateTitle: "ISO 45001:2018 Certified",
  highlights: [
    "Occupational Health & Safety: ISO 45001:2018 is the international standard for occupational health and safety management systems, helping organisations reduce workplace risks and create safer working conditions.",
    "Risk-Based Approach: The certification requires systematic identification of hazards, assessment of risks and implementation of controls — aligned with how we deploy telematics to mitigate fleet and field operation risks.",
    "Continuous Improvement: Certified organisations must demonstrate ongoing review and improvement of their health and safety performance — a principle that runs through our products, services and support.",
    "Global Recognition: ISO 45001 is recognised worldwide, giving our clients confidence that FMS Africa operates to internationally accepted standards of compliance and quality.",
  ],
  commitments: [
    {
      title: "Worker Safety",
      body: "Protecting the health and safety of our engineers, installers and field teams across every deployment.",
    },
    {
      title: "Client Assurance",
      body: "Giving enterprise clients documented proof that their telematics partner meets rigorous international standards.",
    },
    {
      title: "Regulatory Alignment",
      body: "Maintaining processes that align with occupational health and safety regulations across the markets we serve.",
    },
    {
      title: "Operational Excellence",
      body: "Embedding safety management into how we design, install and support every IoT and fleet monitoring solution.",
    },
  ],
  stats: [
    { value: "ISO", label: "45001:2018 certified" },
    { value: "24/7", label: "Safety-first operations" },
    { value: "5", label: "Continents served" },
    { value: "100+", label: "Enterprise clients worldwide" },
  ],
  ctaHeadline: "Need to verify our accreditation?",
  ctaBody:
    "Contact our team for certificate verification or to learn how our ISO 45001:2018 certification supports your compliance requirements.",
};

const csrPage = {
  heroHeadline: "Giving back,\nmoving forward.",
  intro:
    "Corporate Social Responsibility at FMS Africa — investing in community health, road safety and lasting partnerships that make a difference beyond the fleet.",
  heroImage: "/assets/csr/medical-clinic-nyakinengo.jpg",
  pillars: csrPillars,
};

const benefitsPage = {
  heroHeadline: "Effortless steps to fleet intelligence.",
  intro:
    "We provide customer-centric solutions tailored to the specific needs of each industry — empowering data-driven decisions that increase productivity and efficiency.",
  heroImage: "/assets/landing/trucks-highway.jpg",
  steps: benefitSteps,
  industries: industryBenefits,
  pillars: solutionPillars,
  stats: [
    { value: String(benefitSteps.length), label: "Core solution areas" },
    { value: "24/7", label: "Real-time monitoring" },
    { value: "15+", label: "Industry verticals served" },
    { value: "100%", label: "Customer-centric approach" },
  ],
  ctaHeadline: "Join the connected fleet movement with FMS Africa",
  ctaBody:
    "Don't leave success up to chance. Partner with us and chart your course to efficiency, security and peace of mind.",
};

const resellersPage = {
  badge: "Reseller partners required",
  heroHeadline:
    "Expand your business horizons: become a GPS tracking reseller",
  heroBody:
    "Join forces with us to tap into the booming market of GPS tracking solutions. Unlock lucrative opportunities while enjoying the support of a trusted industry leader.",
  heroCtaLabel: "Apply now",
  benefits: resellerBenefits,
  steps: programSteps,
  regions,
  testimonials,
};

const contactPage = {
  heroHeadline: "Get in touch",
  intro:
    "We are on 24/7 to react promptly to your service needs. Reach our regional teams across Africa and beyond.",
  hqLocation: "Kampala, Uganda",
  hqPhone: "+256 200 909 900",
  hqEmail: "katongh@fms-ecsafrica.com",
  inquiryCards,
  offices,
  faqs: contactFaqs,
};

const privacyPage = {
  heroHeadline: "Privacy Policy",
  intro: "Last updated: June 2026",
  sections: [
    {
      title: "Overview",
      paragraphs: [
        "This privacy notice discloses the privacy practices for FMS Limited. This privacy notice applies solely to information collected by this website. It will notify you of the following:",
      ],
      list: [
        "What personally identifiable information is collected from you through the website, how it is used and with whom it may be shared.",
        "What choices are available to you regarding the use of your data.",
        "The security procedures in place to protect the misuse of your information.",
        "How you can correct any inaccuracies in the information.",
      ],
    },
    {
      title: "Information Collection, Use, and Sharing",
      paragraphs: [
        "We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone.",
        "We will use your information to respond to you, regarding the reason you contacted us. We will not share your information with any third party outside of our organization, other than as necessary to fulfill your request, e.g. to ship an order.",
        "Unless you ask us not to, we may contact you via email in the future to tell you about specials, new products or services, or changes to this privacy policy.",
      ],
    },
    {
      title: "Your Access to and Control Over Information",
      paragraphs: [
        "You may opt out of any future contacts from us at any time. You can do the following at any time by contacting us via the email address or phone number given on our website:",
      ],
      list: [
        "See what data we have about you, if any.",
        "Change/correct any data we have about you.",
        "Have us delete any data we have about you.",
        "Express any concern you have about our use of your data.",
      ],
    },
    {
      title: "Security",
      paragraphs: [
        "We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline.",
        "While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need the information to perform a specific job (for example, billing or customer service) are granted access to personally identifiable information. The computers/servers in which we store personally identifiable information are kept in a secure environment.",
        "If you feel that we are not abiding by this privacy policy, you should contact us immediately.",
      ],
    },
  ],
};

const services = Object.values(servicePages).map((svc, index) => ({
  slug: svc.slug,
  title: svc.title,
  tagline: svc.tagline ?? "",
  metaDescription: svc.metaDescription,
  heroImage: svc.heroImage,
  heroImageAlt: svc.heroImageAlt,
  callout: svc.callout ?? "",
  blocks: svc.blocks,
  navLabel: svc.title,
  order: index,
  published: true,
}));

const blog = blogPosts.map((post, index) => {
  const content = getPostContent(post.slug);
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: sectionsToHtml(content?.sections ?? []),
    date: post.date,
    readTime: post.readTime,
    category: post.category,
    author: post.author,
    image: post.image,
    featured: !!post.featured,
    published: true,
    order: index,
  };
});

const gallery = galleryItems.map((item, index) => ({
  src: item.src,
  title: item.title,
  category: item.category,
  order: index,
  active: true,
}));

const csr = csrInitiatives.map((item, index) => ({
  title: item.title,
  partner: item.partner,
  description: item.description,
  image: item.image,
  category: item.category,
  featured: !!item.featured,
  order: index,
  active: true,
}));

const clientele = clienteleLogos.map((item, index) => ({
  name: item.name,
  src: item.src,
  category: item.category,
  order: index,
  active: true,
}));

const payload = {
  siteSettings,
  heroSlides,
  homepage,
  aboutPage,
  accreditationPage,
  csrPage,
  csrInitiatives: csr,
  benefitsPage,
  resellersPage,
  contactPage,
  privacyPage,
  services,
  blogPosts: blog,
  galleryItems: gallery,
  clientele,
};

writeFileSync(
  "/Users/mac/Documents/mywebsites/fms-africa-admin/lib/seed-payload.json",
  JSON.stringify(payload, null, 2),
);

console.log("Wrote seed-payload.json", {
  services: services.length,
  blog: blog.length,
  gallery: gallery.length,
  clientele: clientele.length,
  csr: csr.length,
});
