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
    lineOne: "Now open in Nigeria.",
    lineTwo: "Empower your fleet.",
    body: "FMS Africa Nigeria Ltd brings IoT, Big Data and AI onshore — customer-centric fleet solutions for Nigerian logistics, banking, energy and public operators.",
    order: 0,
    active: true,
  },
  {
    image: "/assets/landing/trucks-highway.jpg",
    alt: "Heavy truck managed with FMS Africa Nigeria fleet management",
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
  siteName: "FMS Africa Nigeria Ltd",
  siteDescription:
    "FMS Africa Nigeria Ltd is now open in Lagos — real-time fleet and asset monitoring, vehicle tracking, fuel management and AI video telematics for Nigerian operators.",
  logoUrl: "/assets/FMS-Logo-Blue-1.png",
  headerTagline: "Now open in Nigeria — fleet & asset intelligence for West Africa",
  headerPhone: "+234 803 298 0119",
  loginLabel: "FMS IoT Login",
  loginUrl: site.footerLoginUrl,
  footerBlurb:
    "FMS Africa Nigeria Ltd is now on the ground in Lagos — bringing the FMS Africa group's real-time fleet, fuel and asset monitoring to Nigerian operators.",
  footerPhone: site.footerContact.phone,
  footerWhatsapp: site.footerContact.whatsapp,
  contactPageUrl: site.footerContact.contactPage,
  designCreditLabel: site.footerDesignCredit.label,
  designCreditUrl: site.footerDesignCredit.href,
  footerCopyright: "© FMS Africa Nigeria Ltd. All rights reserved.",
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
  ctaImage: "/assets/landing/hero-fleet.jpg",
  ctaHeadline: "Get started with a free consultation",
  ctaBody:
    "Talk to our Lagos team about fleet and asset solutions for Nigeria. Take the first step today.",
  ctaButtonLabel: "Get a free consultation",
  ctaHref: "/about-us/contact-us",
};

const homepage = {
  stats: [
    { value: "100%", label: "Customer satisfaction with our work" },
    { value: "24/7", label: "Local support from our Nigeria office" },
    { value: "NG", label: "Lagos office now serving Nigeria" },
    { value: "5", label: "Continents covered by the FMS Africa group" },
  ],
  missionEyebrow: "Who we are",
  missionHeadline:
    "FMS Africa Nigeria Ltd is now on the ground — giving Nigerian businesses real-time monitoring, analysis and control over their assets.",
  missionBody:
    "Our Lagos office brings the FMS Africa group's IoT, fuel, video telematics and cold-chain platforms to fleets, generators, cargo and logistics operators across Nigeria — with 24/7 local support.",
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
      company: "United Bank for Africa",
      quote:
        "Their services to the bank have been satisfactory and commendable!",
    },
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
  ctaBody:
    "Talk to our Lagos team about fleet and asset solutions for Nigeria. Leave a message and we will reply as soon as we can — we're on 24/7.",
  solutionsEyebrow: "What we do",
  solutionsHeadline: "Our solutions, your connected fleet.",
  solutionsCtaLabel: "View all services",
  solutionsCtaHref: "/services",
  benefitsEyebrow: "Why it matters",
  benefitsHeadline: "Benefits of FMS Africa Nigeria",
  approachCtaHref: "/about-us/contact-us",
  approachCtaLabel: "Get a free consultation",
  approachHeadline:
    "We're proud to power data-driven decisions for Nigerian fleets, making a real impact on productivity and efficiency.",
  benefitsBandImage: "/assets/landing/logistics-port.jpg",
  benefitsBandCtaLabel: "Partner with us",
  benefitsBandCtaHref: "/resellers",
  approachEyebrow: "Our approach",
  storiesEyebrow: "Testimonials",
  storiesHeadline: "What customers say.",
  pyramidEyebrow: "How value compounds",
  pyramidHeadline: "The FMS Nigeria Customer Value Pyramid",
  pyramidIntro:
    "Every layer builds on the one beneath it — start with visibility, climb to intelligence.",
  pyramidFootnote:
    "Value flows upward — from raw location data to boardroom decisions",
  pyramidLevels: [
    {
      title: "Business Intelligence",
      body: "Strategic decisions & predictive analytics",
    },
    {
      title: "Cost Optimization",
      body: "Fuel, maintenance, utilization & energy",
    },
    {
      title: "Operational Control",
      body: "Fleet, drivers, assets & generators",
    },
    {
      title: "Risk & Security",
      body: "Theft, accidents, unauthorized movement",
    },
    {
      title: "Visibility",
      body: "Real-time location & status",
    },
  ],
};

const aboutPage = {
  heroHeadline: "Driven by innovation,\npowered by data.",
  intro:
    "FMS Africa Nigeria Ltd is the Nigerian office of Fleet Monitoring Systems (FMS Africa). We are now on the ground in Lagos — bringing proven IoT fleet, fuel, cargo and video telematics to Nigerian operators, with the backing of the wider FMS Africa group.",
  heroImage: "/assets/landing/trucks-highway.jpg",
  stats: [
    { value: "100+", label: "Enterprise clients served by the FMS Africa group" },
    { value: "24/7", label: "Support from our Nigeria office" },
    { value: "NG", label: "Lagos office now open" },
    { value: "5", label: "Continents covered by the group" },
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
    "United Bank for Africa",
    "MTN Zambia",
    "African Queen",
    "Equity Bank",
    "UMEME Limited",
    "Nile Breweries Ltd",
    "Ministry of Water & Environment",
  ],
  faqs: [
    {
      question: "What does FMS Africa Nigeria do?",
      answer:
        "FMS Africa Nigeria Ltd is the Nigerian office of Fleet Monitoring Systems (FMS Africa). We provide businesses with real-time monitoring, analysis and control over their assets — enabling optimization, OPEX reduction and productivity maximization — now with a local team in Lagos.",
    },
    {
      question: "Which industries do you serve?",
      answer:
        "We serve logistics, banking, telecommunications, brewing, utilities, government, education and any organisation that relies on fleets, generators, cargo, cold chains or mobile assets — including Nigerian operators in energy, haulage and public transport.",
    },
    {
      question: "Where do you operate?",
      answer:
        "Our Lagos office serves Nigeria and West Africa. We are part of the FMS Africa group, which also operates across Uganda, Kenya, Tanzania and more, with dedicated support lines covering Europe, Asia, North America, South America and Africa.",
    },
    {
      question: "How can I partner with FMS Africa Nigeria?",
      answer:
        "We are on 24/7 to react promptly to your service needs. If you are interested in partnering with us in Nigeria, leave a message through our partner page and we will reply as soon as we can.",
    },
  ],
  featuredQuote:
    "We empower businesses with real-time operational data, enabling smarter decision making that drives productivity, cost savings and operational excellence.",
  featuredQuoteAuthor: "FMS Africa Purpose Statement",
  ctaHeadline: "Join the connected fleet movement with FMS Africa Nigeria",
  ctaBody:
    "We're on 24/7 from Lagos to react promptly to your service needs. If you are interested in partnering with us, leave a message and we will reply as soon as we can.",
  pillarsImage: "/assets/landing/control-room.jpg",
  pillarsEyebrow: "Who we are",
  pillarsHeadline: "Our vision, mission and purpose",
  pillarsCtaLabel: "Learn more",
  pillarsCtaHref: "/about-us/contact-us",
  valuesEyebrow: "What guides us",
  valuesHeadline: "Core values",
  trustedEyebrow: "Trusted by",
  faqEyebrow: "FAQ",
  faqHeadline: "Your questions, answered",
  featuredEyebrow: "What we stand for",
  featuredHeadline: "Real-time data. Smarter decisions. Better outcomes.",
  teamEyebrow: "Meet our team",
  teamHeadline: "The people behind\nthe platform",
  teamIntro:
    "A Lagos-based team of engineers and fleet specialists, backed by the FMS Africa group's two decades of telematics experience — focused on your fleet from day one.",
  teamCtaText:
    "We're growing our Lagos team — want to work with us or meet us in person?",
  teamCtaLabel: "Get in touch",
  teamMembers: [
    {
      initials: "MD",
      role: "Managing Director",
      dept: "Leadership & Strategy",
      photo: "",
    },
    {
      initials: "TO",
      role: "Head of Technical Operations",
      dept: "Engineering & Field Ops",
      photo: "",
    },
    {
      initials: "FS",
      role: "Fleet Solutions Engineer",
      dept: "Deployments & Integrations",
      photo: "",
    },
    {
      initials: "CS",
      role: "Customer Success Manager",
      dept: "Onboarding & SLA Reviews",
      photo: "",
    },
  ],
  ctaImage: "/assets/landing/hero-fleet.jpg",
};

const accreditationPage = {
  heroHeadline: "Certified compliance,\nproven quality.",
  intro:
    "The FMS Africa group is ISO 45001:2018 Certified — the internationally recognised standard for occupational health and safety management systems. FMS Africa Nigeria Ltd operates to those same standards from Lagos.",
  certificateImage: "",
  certificateTitle: "ISO 45001:2018 Certified",
  highlights: [
    "Occupational Health & Safety: ISO 45001:2018 is the international standard for occupational health and safety management systems, helping organisations reduce workplace risks and create safer working conditions.",
    "Risk-Based Approach: The certification requires systematic identification of hazards, assessment of risks and implementation of controls — aligned with how we deploy telematics to mitigate fleet and field operation risks.",
    "Continuous Improvement: Certified organisations must demonstrate ongoing review and improvement of their health and safety performance — a principle that runs through our products, services and support.",
    "Global Recognition: ISO 45001 is recognised worldwide, giving our Nigerian clients confidence that FMS Africa Nigeria Ltd operates to internationally accepted standards of compliance and quality.",
  ],
  commitments: [
    {
      title: "Worker Safety",
      body: "Protecting the health and safety of our engineers, installers and field teams across every deployment in Nigeria.",
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
    { value: "NG", label: "Now serving Nigeria" },
    { value: "100+", label: "Enterprise clients in the FMS Africa group" },
  ],
  ctaHeadline: "Need to verify our accreditation?",
  ctaBody:
    "Contact our Lagos team for certificate verification or to learn how the FMS Africa group's ISO 45001:2018 certification supports your compliance requirements.",
  ctaImage: "/assets/landing/hero-fleet.jpg",
};

const csrPage = {
  heroHeadline: "Giving back,\nmoving forward.",
  intro:
    "Corporate Social Responsibility at FMS Africa Nigeria Ltd — investing in community health, road safety and lasting partnerships as we open in Nigeria, carrying forward the FMS Africa group's work beyond the fleet.",
  heroImage: "/assets/csr/medical-clinic-nyakinengo.jpg",
  pillars: csrPillars,
  ctaHeadline: "Partner with us on community impact",
  ctaBody:
    "As we open in Nigeria, we welcome partners who share our commitment to road safety and community health.",
  ctaImage: "/assets/landing/hero-fleet.jpg",
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
  ctaHeadline: "Join the connected fleet movement with FMS Africa Nigeria",
  ctaBody:
    "Don't leave success up to chance. Partner with us and chart your course to efficiency, security and peace of mind.",
  ctaImage: "/assets/landing/hero-fleet.jpg",
  stepsImage: "/assets/landing/hero-fleet.jpg",
  stepsHeadline: "How we deliver",
  promisesEyebrow: "Our word, in writing",
  promisesHeadline: "The 5 strongest promises we make to Nigerian operators.",
  promisesNote:
    "Not marketing lines — operating targets our Lagos team is measured against, every single month.",
  promises: [
    "Reduce fuel losses and theft",
    "Reduce fleet and asset downtime",
    "Improve vehicle and driver productivity",
    "Reduce operational and safety risks",
    "Turn operational data into measurable financial intelligence",
  ],
  slaBadge: "Service Level Agreement",
  slaHeadline: "Respond faster.\nResolve faster.",
  slaIntro:
    "The recommended FMS Africa SLA. Every tier is a signed commitment — response and resolution times our Lagos support team is measured against.",
  slaFootnote:
    "Response and resolution times are measured from first contact with our Lagos support desk. Reports and audits are delivered per fleet, per period.",
  slaPackages: [
    {
      name: "Silver",
      label: "Essential",
      response: "4 HRS",
      resolution: "24 hrs",
      desc: "Your entry into guaranteed support. A 4-hour response and next-day resolution keeps growing fleets fully covered.",
      features: [
        { label: "Response time", value: "4 hours", included: true },
        { label: "Resolution", value: "24 hours", included: true },
        { label: "Monthly report", value: "Included", included: true },
        { label: "Dedicated account officer", value: "No", included: false },
      ],
    },
    {
      name: "Gold",
      label: "Popular",
      response: "2 HRS",
      resolution: "12 hrs",
      desc: "For operations that can't wait. Half-day resolution, a dedicated account manager and a quarterly audit.",
      features: [
        { label: "Response time", value: "2 hours", included: true },
        { label: "Resolution", value: "12 hours", included: true },
        { label: "Monthly fleet review", value: "Included", included: true },
        { label: "Dedicated account manager", value: "Yes", included: true },
        { label: "Quarterly audit", value: "Included", included: true },
      ],
    },
    {
      name: "Platinum",
      label: "Mission critical",
      response: "30 MIN",
      resolution: "4 hrs",
      desc: "The pinnacle of FMS support. A dedicated engineer, 24/7 cover and a 30-minute response — for fleets where every minute costs money.",
      features: [
        { label: "Response time", value: "30 minutes", included: true },
        { label: "Resolution", value: "4 hours", included: true },
        { label: "24/7 support", value: "Yes", included: true },
        { label: "Dedicated engineer", value: "Yes", included: true },
        { label: "Executive dashboard", value: "Yes", included: true },
        { label: "Quarterly board report", value: "Yes", included: true },
        { label: "Annual optimization audit", value: "Yes", included: true },
      ],
    },
  ],
};

const resellersPage = {
  badge: "Nigeria reseller partners required",
  heroHeadline:
    "Expand your business horizons: become a GPS tracking reseller in",
  heroBody:
    "Join FMS Africa Nigeria Ltd to tap into the booming market of GPS tracking solutions. Unlock lucrative opportunities while enjoying the support of a trusted industry leader — now with a local office in Lagos.",
  heroCtaLabel: "Apply now",
  programImage: "/assets/landing/control-room.jpg",
  whyEyebrow: "Why partner with us?",
  whyHeadline: "Five reasons resellers choose FMS Africa Nigeria",
  whyBody:
    "Join forces with us to tap into the booming market of GPS tracking solutions in Nigeria. Select a benefit to learn more.",
  howEyebrow: "How it works",
  howHeadline: "Four steps to becoming a partner",
  benefits: resellerBenefits,
  steps: programSteps,
  regions,
  testimonials,
};

const contactPage = {
  heroHeadline: "Get in touch",
  intro:
    "We are on 24/7 from our Lagos office to react promptly to your service needs. FMS Africa Nigeria Ltd is your local team — backed by the wider FMS Africa group across Africa and beyond.",
  hqLocation: "Lagos, Nigeria",
  hqPhone: "+234 803 298 0119",
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
        "This privacy notice discloses the privacy practices for FMS Africa Nigeria Ltd. This privacy notice applies solely to information collected by this website. It will notify you of the following:",
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
