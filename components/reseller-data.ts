export type ResellerBenefit = {
  id: string;
  title: string;
  summary: string;
  detail: string;
};

export const resellerBenefits: ResellerBenefit[] = [
  {
    id: "demand",
    title: "High-demand products",
    summary: "GPS tracking is in demand across logistics, security and fleet management.",
    detail:
      "GPS tracking solutions are in high demand across various industries — from logistics and transportation to security and fleet management. Position yourself in a market that continues to grow year on year.",
  },
  {
    id: "advantage",
    title: "Competitive advantage",
    summary: "Offer state-of-the-art solutions known for reliability and accuracy.",
    detail:
      "Differentiate yourself in the market by offering our state-of-the-art GPS tracking solutions, known for their reliability, accuracy and advanced features including AI video telematics and fuel management.",
  },
  {
    id: "margins",
    title: "Lucrative margins",
    summary: "Attractive margins and incentives as you scale your reseller business.",
    detail:
      "Enjoy attractive margins and incentives as you grow your business with our scalable reseller program — designed to reward partners who invest in building the FMS Africa brand in their territory.",
  },
  {
    id: "support",
    title: "Extensive support",
    summary: "Training, marketing materials and ongoing technical backing.",
    detail:
      "Benefit from comprehensive training, marketing materials and ongoing support to help you succeed in selling and servicing our products — we are on 24/7 to react promptly to your service needs.",
  },
  {
    id: "growth",
    title: "Growth opportunities",
    summary: "Limitless expansion as GPS adoption accelerates globally.",
    detail:
      "With the rising adoption of GPS tracking technology, the potential for expansion and profitability is limitless. Join forces with a trusted industry leader and tap into the booming telematics market.",
  },
];

export const programSteps = [
  {
    step: "01",
    title: "Apply",
    body: "Submit your application with details about your market, experience and business goals.",
  },
  {
    step: "02",
    title: "Onboard",
    body: "Complete product training and receive marketing materials tailored to your region.",
  },
  {
    step: "03",
    title: "Launch",
    body: "Start selling FMS Africa solutions with full technical and sales support behind you.",
  },
  {
    step: "04",
    title: "Grow",
    body: "Scale your territory with ongoing incentives, new product releases and 24/7 backing.",
  },
];

export const regions = [
  "Nigeria",
  "Uganda",
  "Kenya",
  "Tanzania",
  "Zambia",
  "Rwanda",
  "DR Congo",
  "Mozambique",
  "Zimbabwe",
  "Angola",
  "Malawi",
  "Ethiopia",
  "South Africa",
  "United Kingdom",
  "United States",
];

export const testimonials = [
  {
    quote:
      "Their services to the bank have been satisfactory and commendable!",
    author: "Emily Abitegeka",
    company: "United Bank for Africa",
  },
  {
    quote:
      "The company has continued to maintain close interaction with us in a bid to receive feedback, adequately handle its obligations, quickly respond to challenges or breakdowns in case need arise, and provide preventative measures at the shortest possible time.",
    author: "Patrick Tani",
    company: "Alight Uganda",
  },
  {
    quote:
      "Fleet Monitoring Systems Limited has been very reliable, responsive, and have continued to provide us with quality services.",
    author: "Procurement Team",
    company: "Feed the Future (ISS Activity)",
  },
  {
    quote:
      "Over a period of ten years that they provided us their services, Fleet Monitoring Systems Limited has been very reliable, responsive, and have continued to provide us with quality services. We are glad to recommend them for any business.",
    author: "Mercy Mukalere",
    company: "Care International in Uganda",
  },
  {
    quote:
      "They have been very reliable and have demonstrated their capability of rendering services that have met our expectations.",
    author: "Ann Njuguna",
    company: "World Vision Uganda",
  },
  {
    quote:
      "They have exhibited favorable business turnaround time hence there is no doubt that they will meet your expectations.",
    author: "Namitala Christine",
    company: "Equity Bank",
  },
  {
    quote:
      "The company has been our service provider for Vehicle Tracking and Generator Fuel Management services for all our assets for the last eight years.",
    author: "Vincent Ngabirano",
    company: "Health Partners",
  },
];
