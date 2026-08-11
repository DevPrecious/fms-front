export type BenefitStep = {
  number: string;
  title: string;
  summary: string;
  details: string;
};

export const benefitSteps: BenefitStep[] = [
  {
    number: "01",
    title: "GPS Tracking Software",
    summary:
      "Real-time tracking, customizable alerts and seamless integration for fleets of any size.",
    details:
      "Unlock the power of precision with advanced GPS tracking. Stay connected to your assets 24/7 with live location updates, geofencing, speed violation alerts and a user-friendly interface designed for both beginners and experts.",
  },
  {
    number: "02",
    title: "AI Video Telematics",
    summary:
      "AI-powered analytics, live video streaming and proactive safety for every vehicle.",
    details:
      "Harness artificial intelligence to transform fleet operations. Extract actionable insights from video footage — driver behaviour analysis, collision detection, distracted driving alerts and simplified regulatory compliance reporting.",
  },
  {
    number: "03",
    title: "Fuel Management",
    summary:
      "Monitor generators and vehicles in real time to cut fuel waste and prevent theft.",
    details:
      "Track fuel levels and generator usage remotely around the clock. Receive alerts for low fuel, irregular usage and potential issues. Geofencing prevents unauthorized use while detailed reports help you optimize consumption.",
  },
  {
    number: "04",
    title: "Speed Limiter Solutions",
    summary:
      "Customizable speed limits, real-time monitoring and regulatory compliance on the road.",
    details:
      "Set maximum speeds tailored to your regulations and company policies. Monitor speeds remotely with live alerts for violations, reduce accident risk, optimize fuel consumption and extend vehicle lifespan.",
  },
  {
    number: "05",
    title: "Field Staff Tracking",
    summary:
      "Keep mobile teams safe, accountable and efficient with live GPS personnel monitoring.",
    details:
      "Real-time location updates, geofencing for work zones, instant messaging and detailed reports on employee movements and productivity — with robust encryption and user permissions built in.",
  },
  {
    number: "06",
    title: "Industry-Specific Solutions",
    summary:
      "Tailored telematics for construction, cargo, oil & gas, mining, banking and NGOs.",
    details:
      "Customer-centric solutions designed for the specific needs of each industry — from cold chain compliance and cargo security to asset protection for financial institutions and humanitarian logistics.",
  },
];

export const industryBenefits = [
  {
    title: "Construction",
    body: "Track heavy machinery, prevent theft and optimize resource allocation across every project site.",
  },
  {
    title: "Cargo & Logistics",
    body: "End-to-end shipment visibility with geofencing, temperature monitoring and route optimization.",
  },
  {
    title: "Oil & Gas",
    body: "Monitor remote assets, enforce safety zones and implement rapid emergency response protocols.",
  },
  {
    title: "Banking & Finance",
    body: "Protect cash-in-transit vehicles, ATMs and staff with real-time tracking and panic alerts.",
  },
];

export const solutionPillars = [
  {
    title: "Bluetooth Low Energy",
    body: "Combine GNSS and BLE to track location and report on nearby tags and sensors — temperature, humidity and onboard asset data.",
  },
  {
    title: "Safety & Compliance",
    body: "Complete cold chain tracking with real-time refrigerated trailer monitoring to meet safety and regulatory requirements.",
  },
  {
    title: "Risk Mitigation",
    body: "GPS trackers with temperature sensors protect product integrity at every stage of the cold chain.",
  },
  {
    title: "Reduce Paperwork",
    body: "Digital sensor reporting sent directly to your platform — cutting record-keeping errors and compliance complications.",
  },
];
