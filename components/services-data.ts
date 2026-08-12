/* ------------------------------------------------------------------ */
/*  Block types                                                        */
/* ------------------------------------------------------------------ */

export type ServiceStep = {
  number: number;
  title: string;
  description: string;
};

export type ServiceFeature = {
  title: string;
  description: string;
  image?: string;
};

export type TabItem = {
  label: string;
  paragraphs?: string[];
  items?: string[];
  features?: ServiceFeature[];
  image?: string;
  imageAlt?: string;
};

export type AccordionItem = {
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
};

export type ComparisonBlock = {
  type: "comparison";
  title?: string;
  leftTitle: string;
  rightTitle: string;
  leftFeatures: ServiceFeature[];
  rightFeatures: ServiceFeature[];
  leftImage?: string;
  rightImage?: string;
};

export type InteractiveGalleryBlock = {
  type: "interactive-gallery";
  title?: string;
  images: { src: string; alt: string; caption?: string }[];
};

export type StatsBlock = {
  type: "stats";
  title?: string;
  stats: { value: string; label: string }[];
};

export type ServiceBlock =
  | { type: "intro"; paragraphs: string[] }
  | { type: "heading"; title: string; subtitle?: string }
  | { type: "steps"; steps: ServiceStep[] }
  | { type: "features"; features: ServiceFeature[]; columns?: 2 | 3 | 4 }
  | { type: "split"; title?: string; paragraphs: string[]; image: string; imageAlt: string; reverse?: boolean }
  | { type: "image"; src: string; alt: string; caption?: string }
  | { type: "gallery"; images: { src: string; alt: string }[]; columns?: 2 | 3 | 4 }
  | { type: "list"; title?: string; items: string[] }
  | { type: "subsection"; title: string; subtitle?: string; paragraphs?: string[]; features?: ServiceFeature[]; image?: string; imageAlt?: string }
  | { type: "numbered-list"; title?: string; items: string[] }
  | { type: "tabs"; title?: string; tabs: TabItem[] }
  | { type: "accordion"; title?: string; items: AccordionItem[] }
  | { type: "before-after"; title?: string; beforeLabel?: string; afterLabel?: string; before: string[]; after: string[]; image?: string; imageAlt?: string }
  | ComparisonBlock
  | InteractiveGalleryBlock
  | StatsBlock;

export type ServicePageData = {
  slug: string;
  title: string;
  tagline?: string;
  metaDescription: string;
  heroImage: string;
  heroImageAlt: string;
  callout?: string;
  blocks: ServiceBlock[];
};

/* ------------------------------------------------------------------ */
/*  Page data                                                          */
/* ------------------------------------------------------------------ */

export const servicePages: Record<string, ServicePageData> = {
  "speed-limiter-solutions": {
    slug: "speed-limiter-solutions",
    title: "Speed Limiter Solution",
    tagline: "SAY NO TO Accidents And Death!",
    metaDescription:
      "Speed Limiter Solutions for Enhanced Fleet Management Safety — digital speed governors with buzzer alerts, automatic slowdown and driver record logging.",
    heroImage: "/assets/services/speed-limiter-solutions/overspeeding-crash.jpg",
    heroImageAlt: "Overspeeding crash prevention with FMS Africa speed limiter",
    callout:
      "Digital speed limiters control maximum driving speed, alert drivers and automatically slow vehicles to prevent accidents.",
    blocks: [
      {
        type: "steps",
        steps: [
          {
            number: 1,
            title: "Install Speed Limiter",
            description:
              "Digital speed limiter can control the maximum speed driving.",
          },
          {
            number: 2,
            title: "Buzzer Alert",
            description:
              "If the vehicle speed is tending towards max set speed, internal buzzer will buzz to remind driver.",
          },
          {
            number: 3,
            title: "Slow down automatically",
            description:
              "Even if the driver keeps accelerating, the vehicle can't exceed the pre-set max speed.",
          },
          {
            number: 4,
            title: "Driver Record",
            description:
              "Driver speed record will be sent to the tracking software on phone or computer of vehicle owner and also saved in device. It can be accessed with a portable printer for police accident investigations.",
          },
        ],
      },
      {
        type: "split",
        title: "The Digital speed limiter",
        paragraphs: [
          "Due to the accidents caused by over-speeding, corporate fleet businesses and insurance companies suffer from huge losses in most of the countries globally. This can often lead to a loss in productivity, reduction in revenue, paying insurance costs (if it's the driver's fault), as well as medical and collateral damage costs. To help resolve this major concern, here at FMS Africa we have developed and manufactured a unique GPS tracker with the speed limiter feature.",
          "Many countries of the world have regulations for speed-limiting in commercial vehicles. As of today, some of them have already made it mandatory to install speed limiters, also known as speed governors, while other countries are announcing that speed limiters will be mandatory for all commercial vehicles in upcoming years. So, the demand for this solution is indisputable and the market is growing constantly.",
          "For the sake of example, let's say, the speed limit is set to 90 km/h. When the vehicle speed reaches 85 km/h (5% lower than the set speed limit), the driver receives a buzzer signal to alert him/her.",
          "If the driver reaches the set speed limit of 90 km/h and continues accelerating, electrically operated relay will be switched ON automatically and will trigger one of the possible speed limiting options:",
        ],
        image: "/assets/services/speed-limiter-solutions/device.png",
        imageAlt: "FMS Africa digital speed limiter device",
      },
      {
        type: "list",
        items: [
          "Electronic throttle controller, which controls the accelerator pedal, will temporarily deactivate the accelerator pedal. As a result, vehicle speed will gradually slow down under 90 km/h and the relay will be switched OFF.",
          "Solenoid will be activated and reduce fuel supply to the engine until vehicle speed throttles down under 90 km/h and the relay will be switched OFF.",
        ],
      },
    ],
  },

  "vehicle-tracking": {
    slug: "vehicle-tracking",
    title: "Vehicle Tracking",
    metaDescription:
      "Vehicle Tracking Solutions for Effective Fleet Management — real-time GPS tracking with geofencing, driver behavior monitoring and fuel theft alerts.",
    heroImage: "/assets/services/vehicle-tracking/gps-vehicle-tracking.jpg",
    heroImageAlt: "GPS vehicle tracking dashboard",
    callout:
      "A vehicle tracking system uses in-vehicle telematics paired with fleet management software to give your organization robust, actionable data about field operations.",
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "A vehicle tracking system is a business solution that uses in-vehicle telematics paired with fleet management software to collect data from both the vehicle (or mobile asset) and its driver/operator to give the organization robust and actionable data about the field operations processes previously only available via manual methods.",
        ],
      },
      {
        type: "split",
        title: "GPS Vehicle Tracking Services",
        paragraphs: [
          "We provide high-end GPS Vehicle Tracking solutions with emphasis on meeting customized clients' needs. Our competitive advantage in provision of this service is largely attributed to our system reliability and accurate/precise reporting of fleet status and prompt client support.",
          "With our GPS vehicle tracking solution, you can ably be in total control of your fleet irrespective of where you are or where your vehicles/motorcycles go 24/7.",
        ],
        image: "/assets/services/vehicle-tracking/gps-vehicle-tracking.jpg",
        imageAlt: "GPS vehicle tracking services",
        reverse: true,
      },
      {
        type: "heading",
        title: "Benefits of our GPS vehicle tracking solution",
      },
      {
        type: "features",
        columns: 2,
        features: [
          {
            title: "Real-time Vehicle Status reporting",
            description:
              "Precisely get accurate information on location and vehicle statuses whether they are mobile, idle or inoperative.",
          },
          {
            title: "Geofencing capabilities",
            description:
              "Get to know when your vehicles are driven to un-authorized areas or outside normal specified working hours.",
          },
          {
            title: "Freewheeling Detection capabilities",
            description:
              "Get real-time notifications when drivers freewheel your vehicles to save fuel. Freewheeling is a very dangerous practice which can lead to loss of control of a vehicle.",
          },
          {
            title: "Driver behavior monitoring",
            description:
              "Immediately get to know reckless driving actions of your drivers such as over-speeding, harsh braking, harsh accelerations, harsh turns, etc.",
          },
          {
            title: "Fuel Theft Alert System",
            description:
              "Fuel theft and fraud can be easily detected by our system — get to know when drivers or other un-scrupulous personnel steal fuel from your vehicles irrespective of the time of day or location of fraud. You can also know refueling quantities whenever and wherever your vehicle refuels, and consumption rate. Our fuel monitoring solution provides real fuel level data (in liters) and not statistical calculations based on mileage.",
          },
          {
            title: "Monitor abnormal engine parameters for damage prevention",
            description:
              "Get to know immediately when your engine malfunctions through remote monitoring of its performance parameters.",
          },
          {
            title: "Driver identification",
            description:
              "Our system enables you to authorize specific personnel to drive your vehicles by use of identity tags.",
          },
        ],
      },
    ],
  },

  "motorcycle-tracking": {
    slug: "motorcycle-tracking",
    title: "Motorcycle Tracking",
    metaDescription:
      "Motorcycle Tracking Solutions for GPS and Fleet Management — real-time location tracking, immobilization and battery-smart power management.",
    heroImage: "/assets/services/motorcycle-tracking/boda-boda.webp",
    heroImageAlt: "Motorcycle GPS tracking",
    callout:
      "Protect your valuable asset with our state-of-the-art GPS tracking system designed specifically for motorcycles.",
    blocks: [
      {
        type: "heading",
        title: "GPS Motorcycle Tracking",
        subtitle:
          "Don't let motorcycle theft ruin your day. Protect your valuable asset with our state-of-the-art GPS tracking system.",
      },
      {
        type: "intro",
        paragraphs: [
          "Our customized system is designed specifically for motorcycles, making it easy to install and use.",
          "Our system uses advanced GPS technology to provide real-time location tracking of your motorcycle, so you always know where it is. This makes it easy to recover your motorcycle in the event of theft, as you can quickly notify the authorities and provide them with the exact location of your motorcycle.",
          "We understand the importance of battery life for motorcycles, and that's why our system is designed to manage power consumption between the backup battery and the motorcycle battery. This ensures that you never have to worry about the system draining your motorcycle's battery, even when the motorcycle is in off/stop mode.",
          "Investing in our GPS tracking system is a smart choice for any motorcycle owner who wants to protect their investment. Don't let motorcycle theft ruin your day — contact us today to learn more about our customized GPS tracking system and how it can help keep your motorcycle safe and secure.",
        ],
      },
      {
        type: "split",
        title: "Real-time motorcycle status",
        paragraphs: [
          "With our motorcycle GPS Tracking system you will be able to know the following about the status of your motor cycle at any given time:",
        ],
        image: "/assets/services/motorcycle-tracking/boda-boda.webp",
        imageAlt: "Motorcycle tracking in action",
        reverse: true,
      },
      {
        type: "numbered-list",
        items: [
          "Current location with Google map display",
          "Status – moving, idle, parked/off or disconnected.",
          "Speed (Km/hr) at which they are ridden",
          "Violations – such as over-speeding, going to un-authorized areas (geo-fence exit), etc.",
          "You can also remotely stop (immobilize) the motorcycle in case of un-authorized usage.",
        ],
      },
    ],
  },

  "vehicle-fuel-management": {
    slug: "vehicle-fuel-management",
    title: "Vehicle Fuel Management",
    metaDescription:
      "Vehicle Fuel Management Solutions for Fleet Optimization — monitor fuel level, consumption, refills and prevent fuel thefts.",
    heroImage: "/assets/services/vehicle-fuel-management/truck-fuel-tank.jpg",
    heroImageAlt: "Truck fuel tank monitoring",
    callout:
      "Monitor fuel level, consumption, refills and prevent fuel thefts.",
    blocks: [
      {
        type: "heading",
        title: "Monitor fuel level, consumption, refills and prevent fuel thefts.",
      },
      {
        type: "intro",
        paragraphs: [
          "Fuel is a critical component of operating a fleet of vehicles and constitutes 60% of a company's operating budget and the FMS fuel monitoring and control system enables to reduce operating costs and increase efficiency.",
          "The GPS tracking devices collect fuel level and consumption data from vehicle on-board computer (CANbus) or from a fuel level sensor, which is installed into the fuel tank. Collected data is sent to the platform, where the fleet manager can view it and use it.",
        ],
      },
      {
        type: "split",
        title: "Fuel Monitoring",
        paragraphs: [
          "See where, when and how much fuel was filled into the tank. Ensure that all purchased fuel is put into the tank. Rate drivers and vehicles according to their fuel consumption and set real fuel consumption rates for vehicles.",
        ],
        image: "/assets/services/vehicle-fuel-management/station.png",
        imageAlt: "Fuel monitoring",
      },
      {
        type: "split",
        title: "Fuel Theft Protection",
        paragraphs: [
          "Know where, when and how much fuel has been drained from the vehicle. Identify fuel theft events and get live notifications on sudden fuel level drops.",
        ],
        image: "/assets/services/vehicle-fuel-management/low-fuel.png",
        imageAlt: "Fuel theft protection",
        reverse: true,
      },
      {
        type: "split",
        title: "Reports and notifications",
        paragraphs: [
          "Receive detailed fuel level and fuel consumption reports. See total fuel consumed, fuel level at trip start and at the end, average fuel consumption, refuelling and fuel draining events and more. Get instant notifications on fuel draining events via SMS, email or mobile phone.",
        ],
        image: "/assets/services/vehicle-fuel-management/report.png",
        imageAlt: "Fuel reports and notifications",
      },
      {
        type: "heading",
        title: "Industries Covered by Our Fuel Monitoring Solution",
      },
      {
        type: "features",
        columns: 4,
        features: [
          { title: "Truck", description: "Heavy-duty truck fuel monitoring and theft prevention." },
          { title: "Mining Truck", description: "Fuel tracking for mining and industrial fleet operations." },
          { title: "Tank Truck", description: "Tanker fuel level monitoring and delivery verification." },
          { title: "Car", description: "Passenger and light commercial vehicle fuel management." },
        ],
      },
      {
        type: "image",
        src: "/assets/services/vehicle-fuel-management/truck-fuel-tank.jpg",
        alt: "Truck fuel tank sensor installation",
      },
    ],
  },

  "generator-fuel-management": {
    slug: "generator-fuel-management",
    title: "Generator Fuel Management",
    metaDescription:
      "Generator Fuel Management for Optimal Efficiency — online generator monitoring, fuel levels, maintenance scheduling and parameter control.",
    heroImage: "/assets/services/generator-fuel-management/generator-monitoring.png",
    heroImageAlt: "Generator fuel monitoring system",
    callout:
      "Ensure uninterrupted operation of generators, reduce fuel and operation costs, and prevent service outage.",
    blocks: [
      {
        type: "heading",
        title: "Introduction",
        subtitle: "Online Generator Monitoring",
      },
      {
        type: "intro",
        paragraphs: [
          "The generator fuel monitoring system ensures uninterrupted operation of generators, reduces fuel and operation costs, optimizes maintenance schedule and prevents generator service outage, thus extending the genset life cycle.",
        ],
      },
      {
        type: "split",
        title: "Control Generator Parameters",
        paragraphs: [
          "The generator monitoring system allows generator owners and supervisors to monitor and control generator parameters including:",
        ],
        image: "/assets/services/generator-fuel-management/generator-monitoring-1.png",
        imageAlt: "Generator parameter monitoring",
      },
      {
        type: "list",
        items: [
          "Service due date",
          "Battery levels",
          "Fuel levels",
          "Oil pressures",
          "Coolant levels",
          "Power output",
          "Operating temperature",
          "Running time",
          "Engine RPM",
          "Radiator condition",
          "Location",
        ],
      },
      {
        type: "image",
        src: "/assets/services/generator-fuel-management/generator-structure.png",
        alt: "Generator fuel monitoring system structure diagram",
        caption: "Generator fuel monitoring system architecture",
      },
    ],
  },

  "fleet-management": {
    slug: "fleet-management",
    title: "Fleet Management",
    metaDescription:
      "Fleet Management Solutions: Vehicle Tracking & Logistics — real-time data, fuel monitoring, eco driving, maintenance and route planning.",
    heroImage: "/assets/services/fleet-management/4-1.png",
    heroImageAlt: "Fleet management dashboard",
    callout:
      "Vehicle data in real time, alerts for key parameters and reports to get in-depth analysis for any time period.",
    blocks: [
      {
        type: "features",
        columns: 2,
        features: [
          {
            title: "Sensors and CAN",
            description:
              "Keep fleets updated on important indicators. Inform if the sensors are enable/disabled. Show their values online and in reports.",
            image: "/assets/services/fleet-management/1-1.png",
          },
          {
            title: "Mobile digital video recorder",
            description:
              "Transmit online what happens on the road or inside the cabin. Raise accountability and reconstruct past events.",
            image: "/assets/services/fleet-management/2-1.png",
          },
          {
            title: "Alerts to prevent accidents",
            description:
              "Enable urgent alarms to miss no important notifications, whether it's maintenance reminders, DTC or other key parameters.",
            image: "/assets/services/fleet-management/3-1.png",
          },
        ],
      },
      {
        type: "subsection",
        title: "Fuel Monitoring",
        subtitle: "Monitor fuel consumption and prevent fuel thefts",
        paragraphs: [
          "Deliver the most positive user experience of fuel monitoring with clear calibration tables, detailed graphical reports and instant notifications.",
        ],
        image: "/assets/services/fleet-management/4-1.png",
        imageAlt: "Fuel monitoring dashboard",
        features: [
          {
            title: "Prevent fuel thefts on the spot",
            description:
              "Provide instant alerts by sms or email on drastic or sudden fuel level changes.",
          },
          {
            title: "Analyze each filling and drain",
            description:
              "Generate detailed fuel reports for any period to browse the fillings and drains of each driver.",
          },
          {
            title: "Intuitive calibration",
            description:
              "Connect and manage any fuel sensors, including BLE and other innovative solutions.",
          },
        ],
      },
      {
        type: "subsection",
        title: "Eco Driving",
        subtitle: "Optimize Costs and Improve Security",
        paragraphs: [
          "Control driving behavior. Set parameters for each violation, get instant notifications and analyze the results for any period.",
        ],
        image: "/assets/services/fleet-management/5.gif",
        imageAlt: "Eco driving monitoring",
        features: [
          {
            title: "Speeding",
            description:
              "Learn if drivers go over the speed limit. Save fuel and avoid fines.",
          },
          {
            title: "Harsh driving",
            description:
              "Prevent deadly accidents. Monitor harsh acceleration, harsh braking and cornering.",
          },
          {
            title: "Excessive Idling",
            description:
              "Get rid of needless idlings. Save engine lifetime, fuel and reduce carbon emissions.",
          },
        ],
      },
      {
        type: "subsection",
        title: "Driver Journal",
        subtitle: "Save money on tax returns and refine discipline",
        paragraphs: [
          "Easily sort journeys into business and private. Claim reimbursement on business mileage. Detect private errands during the shift.",
        ],
        image: "/assets/services/fleet-management/6-1.png",
        imageAlt: "Driver journal",
        features: [
          {
            title: "Business trips",
            description:
              "Empower SMB and enterprises with most complete tax deductions, making every mile count.",
          },
          {
            title: "Private trips",
            description:
              "Raise accountability by having a constant access to any past trips a driver takes.",
          },
          {
            title: "Classify in seconds",
            description:
              "All trips are logged automatically. Sort them in seconds, using exact locations, mileage, and timing.",
          },
        ],
      },
      {
        type: "subsection",
        title: "Maintenance",
        subtitle: "Prevent breakdowns and downtime",
        paragraphs: [
          "Help customers keep the vehicles in mint condition. Create a detailed service job checklist for timely notifications and reminders.",
        ],
        image: "/assets/services/fleet-management/7-1.png",
        imageAlt: "Fleet maintenance planning",
        features: [
          {
            title: "Schedule service jobs",
            description:
              "Create and manage fleet related service works in several clicks. Schedule jobs by date, mileage and engine hours.",
          },
          {
            title: "Manage the service checklist",
            description:
              "View and print the list of planned service works at any time. Group jobs by vehicle, fuel type and departments.",
          },
          {
            title: "Be notified to perform on time",
            description:
              "Get timely reminders about scheduled service works by SMS, email or push notifications to increase fleet life cycle.",
          },
        ],
      },
      {
        type: "subsection",
        title: "ADAS",
        subtitle: "Advanced Driver Assistance System",
        paragraphs: [
          "Enable Advanced Driver Assistance System (ADAS) to anticipate and detect upcoming dangers, provide adequate warning, and avoid collisions. With a suite of sensors and cameras onboard, ADAS scans the driving scene and key vehicle parameters to provide an early warning in case of danger: lane departure warning, adaptive cruise control, forward collision warning, adaptive highlights, etc. Sync data with the back office. Promote safer driving behavior to protect drivers and fleet.",
        ],
        image: "/assets/services/fleet-management/8-1.png",
        imageAlt: "ADAS driver assistance",
      },
      {
        type: "subsection",
        title: "Driver Identification",
        subtitle: "Safeguard fleet from unauthorized use",
        paragraphs: [
          "If several employees use one vehicle separately, Driver ID feature allows to monitor who's driving now and learn how a driver sticks to work and rest requirements.",
        ],
        image: "/assets/services/fleet-management/9-1.png",
        imageAlt: "Driver identification",
        features: [
          {
            title: "Real-time drivers control",
            description:
              "Browse the widget to know which employee is driving right now and what time the shift change took place.",
          },
          {
            title: "Shifts and work/rest analytics",
            description:
              "Create visual reports with diagrams and tables. Find out employees' shifts and time without rest for any period of time.",
          },
          {
            title: "Learn about every shift change",
            description:
              "Get instant notifications on e-mail or by SMS: shift in/out, SOS button, speeding, harsh driving.",
          },
        ],
      },
      {
        type: "subsection",
        title: "Route Planning",
        subtitle: "Plan fastest routes",
        paragraphs: [
          "Enable fast, automatic route planning. Enjoy the GPS tracking platform that considers road restrictions and flawlessly adapts to current traffic.",
        ],
        image: "/assets/services/fleet-management/10-1.png",
        imageAlt: "Route planning",
        features: [
          {
            title: "Route deviation detected",
            description:
              "Empower supervisors to stay immediately updated on any detours and alterations. Detect personal trips or thefts with no time wasted.",
          },
          {
            title: "Avoid bottlenecks",
            description:
              "Experience optimized routes generated automatically. Skip traffic jams or small trails, not suitable for specific vehicle types.",
          },
        ],
      },
    ],
  },

  "cargo-tracking": {
    slug: "cargo-tracking",
    title: "Cargo Tracking",
    metaDescription:
      "Cargo Tracking Solutions for Efficient Shipment Management — electronic cargo tracking with e-Lock, GPS and tamper alerts.",
    heroImage: "/assets/services/cargo-tracking/6-2.png",
    heroImageAlt: "Electronic cargo tracking e-Lock",
    callout:
      "Electronic Cargo Tracking System (ECTS) for cross-border customs, security and tamper-proof cargo delivery.",
    blocks: [
      {
        type: "heading",
        title: "Problems To Solve",
      },
      {
        type: "list",
        items: [
          "Electronic Cargo Tracking System (ECTS)",
          "More efficiency for Cross Border Customs, less the queue time.",
          "Increase level of security of monitored cargo.",
          "Confirm nobody changes or steals stock in delivery",
          "Active alert incase of any illegal opening or tamper of e-Lock",
          "Only authorized person to unlock",
        ],
      },
      {
        type: "features",
        columns: 3,
        features: [
          {
            title: "Speed up customs queue time.",
            description: "Reduce border crossing delays with electronic tracking.",
            image: "/assets/services/cargo-tracking/guarantee-fuel-oil.png",
          },
          {
            title: "Guarantee fuel oil quality will not changed illegally.",
            description: "Ensure cargo integrity throughout transit.",
            image: "/assets/services/cargo-tracking/15.png",
          },
          {
            title: "Protect fuel from theft.",
            description: "Secure fuel tanker deliveries with tamper-proof locks.",
            image: "/assets/services/cargo-tracking/13-1.png",
          },
        ],
      },
      {
        type: "steps",
        steps: [
          {
            number: 1,
            title: "Install the e-Lock",
            description: "Just use the e-lock to lock up the container door",
          },
          {
            number: 2,
            title: "Tracking Location",
            description:
              "E-lock will keep track the location, reporting the location in 30 mins per once.",
          },
          {
            number: 3,
            title: "Smart Alert",
            description:
              "If the Lock was tempered, it will upload the signal to platform immediately.",
          },
          {
            number: 4,
            title: "Remote Unlock",
            description:
              "Arrived destination, can unlock by SMS / Mobile APPS / RFID Card.",
          },
        ],
      },
      {
        type: "intro",
        paragraphs: [
          "HB-eLock is an intelligent tracking and positioning lock for securing logistics and freight assets. Key-less design, SIM slot, RFID/remote unlocking, large capacity battery (15200mAh), long working time, IP67 waterproof, built-in wireless communication module, real-time online monitoring, and illegal unlocking alarms.",
          "Master eLock can connect with 7 slave elock (no GPS no GSM), through Bluetooth communication. The Slave lock operation can controlled by Master Lock. Standard for ATEX, suitable to use in Fuel Tank Trucks industrial.",
        ],
      },
      {
        type: "heading",
        title: "Product Information",
      },
      {
        type: "gallery",
        columns: 3,
        images: [
          { src: "/assets/services/cargo-tracking/12.png", alt: "HB-eLock device" },
          { src: "/assets/services/cargo-tracking/16.png", alt: "Stainless steel wire with rubber enveloped" },
          { src: "/assets/services/cargo-tracking/17.png", alt: "Strong rugged and durable case" },
          { src: "/assets/services/cargo-tracking/18.png", alt: "RFID scan area" },
          { src: "/assets/services/cargo-tracking/19.png", alt: "GPS, GSM, operation LED indicator" },
          { src: "/assets/services/cargo-tracking/20.png", alt: "Charging port and SIM card slot" },
          { src: "/assets/services/cargo-tracking/30.png", alt: "Back side with strong magnet" },
          { src: "/assets/services/cargo-tracking/31.png", alt: "Main lock with GPS and GSM" },
          { src: "/assets/services/cargo-tracking/32.png", alt: "Slave lock without GPS and GSM" },
        ],
      },
      {
        type: "heading",
        title: "Real Situation",
        subtitle: "Real Situation for Double Cargo trailer truck delivery",
      },
      {
        type: "gallery",
        columns: 2,
        images: [
          { src: "/assets/services/cargo-tracking/33.png", alt: "Master and slave lock setup on cargo trailer" },
        ],
      },
    ],
  },

  "animal-tracking": {
    slug: "animal-tracking",
    title: "Animal Tracking",
    metaDescription:
      "Animal Tracking Solutions for Effective Wildlife Monitoring — manage and monitor animal locations and conditions from anywhere.",
    heroImage: "/assets/services/animal-tracking/cows.png",
    heroImageAlt: "Animal tracking with GPS collars",
    callout:
      "Provide a way for people to better understand and monitor the movements of animals.",
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "The purpose of the Animal Tracking Solution is to provide a way for people to better understand and monitor the movements of animals.",
          "With our Animal Tracking Solution using your phone and the FMSTrack Android / IOS Apps and web based applications, you now manage and know the condition and locations of your animals from anywhere at any time.",
        ],
      },
      {
        type: "split",
        title: "Features of Animal Tracking",
        paragraphs: [],
        image: "/assets/services/animal-tracking/cows.png",
        imageAlt: "Cattle with GPS tracking collars",
      },
      {
        type: "features",
        columns: 3,
        features: [
          {
            title: "Management",
            description:
              "Management refers to the process of managing resources, including the people, processes, money, technology and facilities of a company.",
          },
          {
            title: "Geofencing",
            description:
              "Geofencing is a location-based service in which the user sets up a virtual boundary around a geographic area.",
          },
          {
            title: "Alert in case of Robbery or Loss",
            description:
              "Receive instant alerts when animals leave designated areas or when unauthorized movement is detected.",
          },
        ],
      },
    ],
  },

  "satellite-tracking": {
    slug: "satellite-tracking",
    title: "Satellite Tracking",
    metaDescription:
      "Satellite Tracking Solutions for GPS Fleet Management — true satellite tracking for cross-border transporters with zero roaming fees.",
    heroImage: "/assets/services/satellite-tracking/fms-satellite-tracking.png",
    heroImageAlt: "FMS Africa DUO satellite tracking",
    callout:
      "True Satellite Tracking for Cross-border Transporters — monitor your fleet anywhere in the world.",
    blocks: [
      {
        type: "heading",
        title: "Track your fleet anywhere in the World",
        subtitle:
          "Overcome cross-border logistical and operational challenges with the FMS-Africa DUO Satellite Tracking Solution.",
      },
      {
        type: "intro",
        paragraphs: [
          "Monitor and control your fleet and your bottom line from anywhere in the World. Improved efficiency, less risk and Business Intelligence at your fingertips that empowers you to make data-driven decisions with real-time impact on your fleet's efficiency, safety and performance.",
        ],
      },
      {
        type: "features",
        columns: 3,
        features: [
          {
            title: "Smart Switch",
            description:
              "The DUO switches from GSM to Satellite tracking in areas where GSM reception is poor or unavailable.",
            image: "/assets/services/satellite-tracking/fms-satellite-tracking-1.png",
          },
          {
            title: "Zero Roaming Fees",
            description:
              "Know upfront what your monthly tracking costs will be. The DUO comes with zero additional roaming charges.",
            image: "/assets/services/satellite-tracking/fms-satellite-tracking-2.png",
          },
          {
            title: "Real-time Tracking",
            description:
              "24/7 Visibility on drivers & vehicles. Remotely monitor your fleet wherever in the World they may roam.",
            image: "/assets/services/satellite-tracking/fms-satellite-tracking.png",
          },
        ],
      },
      {
        type: "split",
        title: "Designed for Cross-border Transporters",
        paragraphs: [
          "Remotely monitor your fleet across the World with the DUO Satellite Tracking Solution: True Satellite Tracking for Transport and Logistics Operators with Advanced fleet Management at a single monthly fee and zero roaming cost.",
        ],
        image: "/assets/services/satellite-tracking/designed-for-cross-border-transporters.png",
        imageAlt: "Cross-border transporter fleet",
      },
      {
        type: "split",
        title: "Guaranteed connectivity to your fleet",
        paragraphs: [
          "Our state-of-the-art DUO Satellite Tracking Solution ensures uninterrupted control and remote monitoring of your fleet with instant alerts, industry-leading accuracy and zero roaming costs. You know upfront what your fleet's monthly tracking bill is going to be.",
          "A tailor-made satellite tracking solution for cross-border commercial transport, the DUO provides real-time remote tracking, precise fleet location, route optimization, driver monitoring and comprehensive analytics across the World.",
        ],
        image: "/assets/services/satellite-tracking/guaranteed-connectivity-to-your-fleet.png",
        imageAlt: "Guaranteed fleet connectivity",
        reverse: true,
      },
      {
        type: "heading",
        title: "Borderless Fleet Management",
        subtitle:
          "Stay informed with instant notifications when vehicles enter or exit specific areas, enhancing security and control over your operations, regardless of whether your fleet assets travel in low or no GSM-coverage areas.",
      },
      {
        type: "intro",
        paragraphs: [
          "DUO efficiently monitor routes, trip times, fuel consumption, and driver behavior through our advanced, intuitive Webtrack Fleet Management Software. Access detailed trip and route reports on-demand or schedule automatic delivery to your email inbox, enabling timely analysis and decision-making.",
        ],
      },
      {
        type: "features",
        columns: 3,
        features: [
          {
            title: "Location Alerts",
            description:
              "Setup Geofences and Waypoints and be alerted when a vehicles passes, enters or leaves a specific geographical beacon wherever in the World they might be.",
            image: "/assets/services/satellite-tracking/location-alerts.png",
          },
          {
            title: "Route Optimization",
            description:
              "Monitor routes and trip times, fuel consumption and driver behavior for specific routes or trips to increase profitability.",
            image: "/assets/services/satellite-tracking/route-optimization.png",
          },
          {
            title: "Driver Monitoring",
            description:
              "Monitor driver behavior through Driver Score Cards that highlights speeding, harsh braking, excessive idling etc. on-demand or via automatic reporting.",
            image: "/assets/services/satellite-tracking/driver-monitoring.png",
          },
          {
            title: "Fleet Maintenance Planning",
            description:
              "Set reminders for upcoming fleet maintenance or for the renewal of vehicle & driver PDP licenses and receive automated alerts before due.",
            image: "/assets/services/satellite-tracking/fleet-maintenance-planning.png",
          },
          {
            title: "Reduced Operational Risk",
            description:
              "Monitor consecutive hours driven, driving violations & overall driver wellness. Target driver training and improve safety ratings with data-backed reports.",
            image: "/assets/services/satellite-tracking/reduced-operational-risk.png",
          },
          {
            title: "Business Intelligence",
            description:
              "On demand or automated data-based reports ensures that your business decisions are based on real time data and business intelligence.",
            image: "/assets/services/satellite-tracking/business.png",
          },
        ],
      },
      {
        type: "split",
        title: "DUO Satellite Tracking + Fuel Management",
        paragraphs: [
          "Whether you choose to access our award-winning Webtrack Advanced Fleet Management system on your PC or from the mobile app, you are in complete control, around the clock.",
          "A.I. Fuel Management Solution together with DUO Satellite Tracking puts you in the driving seat and your foot on the diesel pedal, regardless of how many vehicles you operate or where they may roam across the World.",
        ],
        image: "/assets/services/satellite-tracking/duo-satellite-tracking-fuel-management.png",
        imageAlt: "DUO satellite tracking with fuel management",
      },
      {
        type: "split",
        title: "Around the clock Customer Care and Support",
        paragraphs: [
          "As our valued client, you will have the benefit of our Customer Care Department. Your dedicated Customer Care Specialist will assist with any of your needs relating to training, health checks, reports, upsells or any client query you need to resolve. Whether it is via calls, emails, Whatsapp or face to face.",
        ],
        image: "/assets/services/satellite-tracking/around-the-clock-customer-care-and-support.png",
        imageAlt: "Customer care and support",
        reverse: true,
      },
    ],
  },

  "ai-powered-video-telematics": {
    slug: "ai-powered-video-telematics",
    title: "AI-Powered Video Telematics",
    tagline: "Why Video Telematics?",
    metaDescription:
      "AI-Powered Video Telematics for Effective Fleet Management — HD live streaming, driver assistance, ADAS/DMS and event-based video alerts.",
    heroImage: "/assets/services/ai-powered-video-telematics/feature-1.png",
    heroImageAlt: "AI-powered video telematics dashboard",
    callout:
      "Reduce accidents, detect fatigue driving, provide evidence for insurance and improve fleet safety with AI video telematics.",
    blocks: [
      {
        type: "list",
        title: "Why Video Telematics?",
        items: [
          "Reduce traffic accidents",
          "Shows Transport Overload",
          "Shows Fatigue Driving",
          "Provides evidence for law suits & insurance",
          "Reduce Terrorism/robbery/theft",
        ],
      },
      {
        type: "features",
        columns: 4,
        features: [
          { title: "HD live Video & Audio Streaming", description: "Real-time video and audio from vehicle cameras.", image: "/assets/services/ai-powered-video-telematics/feature-1.png" },
          { title: "Historical Video playback and download", description: "Review and export recorded footage on demand.", image: "/assets/services/ai-powered-video-telematics/feature-2.png" },
          { title: "Alarm/Event-based Videos", description: "Automatically capture video when events trigger.", image: "/assets/services/ai-powered-video-telematics/feature-3.png" },
          { title: "Snapshots from cameras", description: "Instant still images from any connected camera.", image: "/assets/services/ai-powered-video-telematics/feature-4.png" },
          { title: "Driving Behavior", description: "Monitor speeding, harsh braking and cornering.", image: "/assets/services/ai-powered-video-telematics/feature-5.png" },
          { title: "Vehicle Status detection", description: "ACC/ignition status, sensors, speed and more.", image: "/assets/services/ai-powered-video-telematics/feature-6.png" },
          { title: "Accessory Integration", description: "Connect additional sensors and peripherals.", image: "/assets/services/ai-powered-video-telematics/feature-7.png" },
          { title: "Integrated with MDVR Solution", description: "Mobile digital video recorder for fleet vehicles.", image: "/assets/services/ai-powered-video-telematics/feature-8.png" },
        ],
      },
      {
        type: "tabs",
        title: "Video Telematics – Driver Assistance",
        tabs: [
          {
            label: "FCW",
            paragraphs: ["FCW is an automotive safety system designed to alert drivers when a collision with an object or vehicle in front of them is imminent."],
          },
          {
            label: "HMW",
            paragraphs: ["The Headway Monitoring Warning (HMW) system helps transit operators monitor the performance of their bus fleet."],
          },
          {
            label: "Closed eyes",
            paragraphs: ["Closed eyes detection recognizes when a person has their eyes closed using computer vision and machine learning algorithms."],
          },
          {
            label: "LDW",
            paragraphs: ["Lane Departure Warning (LDW) alerts a driver when their vehicle begins to move out of its lane."],
          },
          {
            label: "Smoking",
            paragraphs: ["Detect smoking in video frames and alert users in real-time when a smoking event is detected."],
          },
          {
            label: "Yawning",
            paragraphs: ["Yawning detection uses sensors and cameras to detect when a driver is yawning — a key fatigue indicator."],
          },
          {
            label: "Calling",
            paragraphs: ["Detect phone usage while driving using computer vision and image processing techniques."],
          },
          {
            label: "Drinking",
            paragraphs: ["Water drinking detection uses sensors to detect when a person is drinking and monitor hydration."],
          },
        ],
      },
      {
        type: "split",
        title: "Physical DMS & ADAS devices",
        paragraphs: [
          "Our Driver Monitoring System (DMS) and Advanced Driver Assistance Systems (ADAS) hardware integrate seamlessly with the FMS video telematics platform for real-time alerts and recorded evidence.",
        ],
        image: "/assets/services/ai-powered-video-telematics/dms.jpg",
        imageAlt: "Physical DMS driver monitoring device",
      },
      {
        type: "image",
        src: "/assets/services/ai-powered-video-telematics/adas.jpg",
        alt: "Physical ADAS advanced driver assistance systems",
        caption: "Physical ADAS (Advanced Driver Assistance Systems)",
      },
      {
        type: "interactive-gallery",
        title: "Video Telematics: Keeping Your Fleet Safe and Informed",
        images: [
          { src: "/assets/services/ai-powered-video-telematics/video-telematics-notifications.png", alt: "Video telematics notifications", caption: "Video Telematics notifications" },
          { src: "/assets/services/ai-powered-video-telematics/events-report.png", alt: "Events report", caption: "Events report" },
          { src: "/assets/services/ai-powered-video-telematics/sos-emergency-button-alerts.png", alt: "SOS emergency button alerts", caption: "SOS Emergency button alerts" },
          { src: "/assets/services/ai-powered-video-telematics/driver-distracted-phone-email-alert.png", alt: "Driver distracted phone alert", caption: "Driver distracted - Phone email alert" },
          { src: "/assets/services/ai-powered-video-telematics/driver-distracted--yawning-email-alert.png", alt: "Driver yawning alert", caption: "Driver distracted – Yawning email alert" },
          { src: "/assets/services/ai-powered-video-telematics/distance-between-objects-notification-setup.png", alt: "Distance between objects setup", caption: "Distance between objects notification setup" },
          { src: "/assets/services/ai-powered-video-telematics/email-display-of-notifications-from-the-tracking-platform.png", alt: "Email notification display", caption: "Email display of notifications from the tracking platform" },
        ],
      },
    ],
  },

  "cold-chain-management": {
    slug: "cold-chain-management",
    title: "Cold Chain Management",
    metaDescription:
      "Cold Chain Management Solutions for Temperature Monitoring — real-time GPS tracking and sensor monitoring for temperature-sensitive assets.",
    heroImage: "/assets/services/cold-chain-management/hero.webp",
    heroImageAlt: "Cold chain temperature monitoring",
    callout:
      "Manage temperature, humidity and moisture-sensitive assets with real-time GPS tracking and cold chain monitoring devices.",
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Reliable cold chain temperature monitoring systems ensure the safety and compliance of cold chain assets in storage and transportation en route to their destination.",
          "Our range of cold chain monitoring telematics devices combine sensor monitoring and GNSS tracking to ensure critical assets are always accounted for and kept at safe conditions during transport. Our integration-ready devices are designed with the capabilities to meet the unique needs of your operation — from temperature, humidity, and moisture monitoring, to indoor to outdoor asset tracking, detailed fleet management with driver behavior reporting, and theft recovery solutions that provide live tracking for asset retrieval.",
        ],
      },
      {
        type: "heading",
        title: "Build a better Cold Chain and Asset Management Solution",
        subtitle:
          "Our cold chain tracking and monitoring sensors provide high precision positioning with global connectivity and flexible configurations to target and track the data most crucial to your operation.",
      },
      {
        type: "accordion",
        title: "Explore cold chain capabilities",
        items: [
          {
            title: "Capture Critical Data",
            description:
              "Monitor and record location, movement history, trailer temperature monitoring, humidity, moisture, door open/close, and more with our versatile and rugged range of GPS tracking devices for cold chain management. Custom geofencing tracks the movement of your cold assets and sends alerts when assets enter or leave specific locations. Devices can also be tailored with location-based behaviors. Preventative maintenance alerts, impact detection, and theft recovery reduce costs for loss and inefficiencies in operation.",
            image: "/assets/services/cold-chain-management/temperature-monitoring.jpg",
            imageAlt: "Temperature monitoring dashboard",
          },
          {
            title: "Vehicle & Equipment Monitoring",
            description:
              "Vehicle temperature monitoring systems applied to refrigerated trucks and trailers can also not only provide reports on temperature monitoring; cold chain trackers can also provide insights related to driver behavior and safety and aid in theft recovery with GPS tracking features.",
            image: "/assets/services/cold-chain-management/refrigerated-truck.jpg",
            imageAlt: "Refrigerated truck monitoring",
          },
        ],
      },
      {
        type: "features",
        columns: 3,
        features: [
          { title: "Temperature alerts", description: "Instant notifications when cargo temperature exits safe ranges." },
          { title: "Humidity & moisture", description: "Monitor environmental conditions for sensitive pharmaceuticals and food." },
          { title: "Geofencing", description: "Track asset movement and receive alerts on entry or exit from zones." },
          { title: "Door open/close", description: "Detect unauthorized access to refrigerated compartments." },
          { title: "Theft recovery", description: "Live GPS tracking for rapid asset retrieval." },
          { title: "Driver behavior", description: "Combine cold chain data with fleet safety monitoring." },
        ],
      },
    ],
  },

  "weight-monitoring-system": {
    slug: "weight-monitoring-system",
    title: "Weight Monitoring System",
    metaDescription:
      "Vehicle Weight Monitoring System Load & Health Tracking — axle load sensors, Eurosens controllers and real-time cargo weight control.",
    heroImage: "/assets/services/weight-monitoring-system/13.jpg",
    heroImageAlt: "Axle load weight monitoring system",
    callout:
      "Axle load sensors designed for cargo weight control on each axle using tracking systems connected to displacement sensors, strain gauges and load cells.",
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "Axle load sensor is designed for cargo weight control on each of the axles of a vehicle using a tracking systems. Axle load sensor can be connected to the analog input of tracking device for example, vehicle sensors, displacement sensors, strain gauges, load cells, pressure sensors, etc.",
        ],
      },
      {
        type: "tabs",
        title: "Weight monitoring components",
        tabs: [
          {
            label: "Introduction",
            paragraphs: [
              "An axle load monitoring system measures the amount of weight placed on each axle of a vehicle. It helps operators understand how cargo is distributed and whether the vehicle remains within safe operating limits.",
              "Unlike traditional weighing methods, axle load monitoring provides continuous visibility. Drivers and fleet managers do not need to wait until a vehicle reaches a weighbridge.",
            ],
            image: "/assets/services/weight-monitoring-system/13.jpg",
            imageAlt: "Weight monitoring introduction",
          },
          {
            label: "EUROSENS Difference T",
            paragraphs: [
              "The EUROSENS Difference T controller provides precise axle load measurement integrated with FMS tracking platforms for real-time weight data and compliance reporting.",
            ],
            image: "/assets/services/weight-monitoring-system/14.jpg",
            imageAlt: "EUROSENS Difference T controller",
            items: [
              "Real-time axle load measurement",
              "Integration with GPS tracking devices",
              "Overload alerts and compliance records",
              "Support for strain gauges and load cells",
            ],
          },
          {
            label: "Eurosens Display RS",
            paragraphs: [
              "The Eurosens Display RS provides in-cab weight readouts for drivers, enabling immediate load adjustments before vehicles become unsafe or non-compliant.",
            ],
            image: "/assets/services/weight-monitoring-system/15.jpg",
            imageAlt: "Eurosens Display RS",
            items: [
              "In-cab weight display for drivers",
              "Clear calibration tables",
              "Compatible with Difference T controller",
            ],
          },
          {
            label: "Display RS Readings",
            paragraphs: [
              "View detailed weight readings per axle with historical data for audits, inspections and fleet optimization.",
            ],
            image: "/assets/services/weight-monitoring-system/16.jpg",
            imageAlt: "Display RS readings",
          },
          {
            label: "Sensor installation",
            paragraphs: [
              "Professional installation of axle load sensors on suspension and axle components ensures accurate force measurement and long-term reliability.",
            ],
            image: "/assets/services/weight-monitoring-system/17.jpg",
            imageAlt: "Location and installation of sensors",
          },
        ],
      },
      {
        type: "features",
        columns: 2,
        features: [
          { title: "Improved fleet safety", description: "Identify load imbalances before they cause accidents or instability." },
          { title: "Regulatory compliance", description: "Stay within axle weight limits and maintain accurate records for inspections." },
          { title: "Reduced maintenance", description: "Vehicles operating within limits experience less tyre and suspension wear." },
          { title: "Real-time alerts", description: "Get notified when axle limits are exceeded during transit." },
        ],
      },
    ],
  },

  "push-to-talk-telematics": {
    slug: "push-to-talk-telematics",
    title: "Push-to-talk Telematics",
    metaDescription:
      "Push to Talk Telematics Solutions for Advanced Communication — GPS tracking with instant voice, Wi-Fi coverage and AES256 encryption.",
    heroImage: "/assets/services/push-to-talk-telematics/features.png",
    heroImageAlt: "Push-to-talk telematics features",
    callout:
      "Provide employees of manufacturing plants with personal monitoring — simple to use, long battery life and reliable even without cellular coverage.",
    blocks: [
      {
        type: "split",
        title: "Simplicity in use",
        paragraphs: [
          "The task is to provide employees of manufacturing plants with personal monitoring. It's simple to use at first glance, has a long battery life of up to 5000mAh, can work at factories with no cellular networks coverage in some areas using Wi-fi, and also eliminates employee sabotage.",
        ],
        image: "/assets/services/push-to-talk-telematics/device.png",
        imageAlt: "Push-to-talk telematics device",
      },
      {
        type: "tabs",
        title: "Push-to-talk capabilities",
        tabs: [
          {
            label: "Features",
            image: "/assets/services/push-to-talk-telematics/features.png",
            imageAlt: "Features of push-to-talk telematics",
            items: [
              "GPS Tracker working on GSM and Wi-Fi",
              "Battery life greater than 3000mAh",
              "Voice communication between employees",
              "Wi-Fi points installed around work place extend coverage.",
              "SOS buttons for emergencies.",
              "Reliability at all times",
              "Ease in use at first glance",
              "Can be connected to over 99 channels",
            ],
          },
          {
            label: "Advantages",
            image: "/assets/services/push-to-talk-telematics/merits.png",
            imageAlt: "Advantages of push-to-talk telematics",
            items: [
              "GPS fleet management",
              "GPS local and hosting App",
              "AES256 E2E encryption",
              "Voice quality (8,16,24,48KHz)",
              "Video quality (320×240, 640×480)",
              "OTAP device management",
              "SOS Emergency Alerts",
              "Call history (audio, video)",
              "Up to 99 channels for customer",
              "Private user calls",
              "OTA device updates",
              "TTS speech of selected channels",
            ],
          },
        ],
      },
    ],
  },

  "asset-tracking": {
    slug: "asset-tracking",
    title: "Asset Tracking",
    tagline: "Asset tracking: more than GPS location",
    metaDescription:
      "Asset Tracking Solutions for Fleet Management & GPS Tracking — real-time telemetry, geofencing and alerts on 1100+ supported devices.",
    heroImage: "/assets/services/asset-tracking/hero.webp",
    heroImageAlt: "GPS asset tracking platform",
    callout:
      "Deliver efficiency and uncompromised security of assets even if taken to most remote locations. Streamline manual operations and make data-driven decisions.",
    blocks: [
      {
        type: "tabs",
        title: "Future-proof GPS Asset tracking",
        tabs: [
          {
            label: "Core tracking",
            features: [
              { title: "Track and manage multiple objects", description: "Monitor all assets from a single platform." },
              { title: "Accurate real-time positioning", description: "Precise GPS location updates in seconds." },
              { title: "360° street view and traffic", description: "Context-rich location intelligence." },
              { title: "Location", description: "Continuous asset location history and live view." },
              { title: "Battery life", description: "Optimized power management for remote assets." },
              { title: "Statuses", description: "Moving, idle, parked and disconnected states." },
            ],
          },
          {
            label: "Telemetry",
            paragraphs: ["Seconds matter when it comes to high-value assets. Empower clients with profound realtime visibility."],
            image: "/assets/services/asset-tracking/telemetry.png",
            imageAlt: "Real-time telemetry data",
            features: [
              { title: "OBD2 and CAN", description: "Engine diagnostics and vehicle bus data." },
              { title: "Engine hours", description: "Track utilization for maintenance planning." },
              { title: "Container doors opening / closing", description: "Detect unauthorized cargo access." },
              { title: "Odometer", description: "Accurate mileage tracking." },
              { title: "Conditions (temperature, humidity)", description: "Environmental monitoring for sensitive cargo." },
            ],
          },
          {
            label: "Alerts",
            features: [
              { title: "Fall detection", description: "Instant alert when assets are dropped or tipped." },
              { title: "Door closing/opening", description: "Monitor container and equipment access." },
              { title: "SOS button pressing", description: "Emergency alerts from field personnel." },
              { title: "Temperature regime change", description: "Cold chain deviation notifications." },
              { title: "Route deviations", description: "Detect unauthorized route changes." },
              { title: "Geofence entrance/exit", description: "Virtual perimeter alerts." },
              { title: "Case intrusion", description: "Tamper detection on secured assets." },
              { title: "Tow detection", description: "Alert when stationary assets are moved." },
            ],
          },
        ],
      },
      {
        type: "features",
        columns: 2,
        features: [
          {
            title: "Over 1100+ GPS tracking devices closely supported",
            description:
              "Effortlessly scale up your business, reach customers with different business needs and requirements with the hardware-independent platform. We automated M2M commands to provide plug-and-play simplicity of the initial configuration.",
          },
          {
            title: "Remote GPS hardware management",
            description:
              "FMS provides graphic interface with easy controls so that users could adjust parameters in a very convenient way. All saved settings are automatically converted to M2M commands and sent immediately even if the device is currently offline.",
          },
        ],
      },
    ],
  },

  "mobile-workforce-management": {
    slug: "mobile-workforce-management",
    title: "Mobile Workforce Management",
    metaDescription:
      "Mobile Workforce Management Solutions for Field Services — visibility, task dispatching, digital forms and customer excellence.",
    heroImage: "/assets/services/mobile-workforce-management/field-operations.jpg",
    heroImageAlt: "Mobile workforce field operations",
    callout:
      "Increase field service efficiency with improved transparency and real-time data.",
    blocks: [
      {
        type: "accordion",
        title: "Enhance visibility of field operations",
        items: [
          {
            title: "Precise locations",
            description:
              "Track GPS locations of mobile workers online or generate reports for any past trips. Detect deviations from the route. Prevent time-wasting and personal trips during the shift.",
          },
          {
            title: "Working statuses",
            description:
              "Visualize field team activities with custom statuses, e.g. \"on my way\", \"at the warehouse\", etc. Spot available employees for urgent orders.",
          },
          {
            title: "Check-in: proof of visits",
            description:
              "Mark locations and capture pictures of customer visits. Monitor late arrivals and track performance. Browse through comments from employees.",
          },
          {
            title: "Mobile forms",
            description:
              "Review task forms as soon as they have been filled in. Control and improve service quality, employee performance and customer satisfaction.",
          },
        ],
      },
      {
        type: "tabs",
        title: "Streamline workflow",
        tabs: [
          {
            label: "Dispatching",
            features: [
              { title: "Seamless task dispatching", description: "Assign jobs intuitively based on employee location, skill set and current workload." },
              { title: "Digital to-do list", description: "Turn an employee's smartphone into a personal organizer with clear directions and documents." },
              { title: "Automatic route optimization", description: "Build efficient routes across assignments. Spend less time behind the wheel." },
              { title: "Decreased overhead expenses", description: "Calculate actual working hours and accurate payroll. Slash fleet costs with optimized routes." },
            ],
          },
          {
            label: "Communication",
            image: "/assets/services/mobile-workforce-management/workflow.png",
            imageAlt: "Smart communication workflow",
            features: [
              { title: "Eliminate paperwork", description: "Go digital to add and receive data in several clicks instead of paper forms." },
              { title: "Documents, attachments, signatures", description: "Attach files and pictures. Obtain electronic PODs with e-signatures." },
              { title: "In-app chat", description: "Replace phone calls with a single secure chat with delivery and read receipts." },
            ],
          },
          {
            label: "Customer excellence",
            features: [
              { title: "Online delivery tracking", description: "Enable clients to check delivery status in real-time without calling the hotline." },
              { title: "Transparent field operation", description: "Share field activity with customers by putting all team and fleet on a single map." },
              { title: "Faster order management", description: "Take orders on site and submit to the back office with no time wasted." },
              { title: "Increased customer satisfaction", description: "Exceed expectations with improved delivery time and a rush option." },
            ],
          },
          {
            label: "Analytics",
            features: [
              { title: "Reports on everything", description: "Analyze expenses, field performance, and customer visits with charts and automatic delivery." },
              { title: "Key performance indicators", description: "Benchmark quantitative and qualitative indicators for any mobile worker or department." },
              { title: "Payroll and taxes", description: "Track time with trips and activity logging. Classify journeys into private and business." },
            ],
          },
        ],
      },
    ],
  },

  "logistics-management": {
    slug: "logistics-management",
    title: "Logistics Management",
    metaDescription:
      "Logistics Management and Supply Chain Solutions — efficient forward and reverse flow of goods with GPS tracking and fuel monitoring.",
    heroImage: "/assets/services/logistics-management/hero.jpg",
    heroImageAlt: "Logistics management supply chain",
    callout:
      "Plans, implements and controls the efficient & effective forward & reverse flow and storage of goods and services from origin to consumption.",
    blocks: [
      {
        type: "split",
        title: "Introduction",
        paragraphs: [
          "FMS International Ltd provides Logistics management as part of supply chain management. It plans, implements, controls; the efficient & effective, forward & reverse flow and storage of goods and services between the point of origin to the point of consumption.",
        ],
        image: "/assets/services/logistics-management/hero.jpg",
        imageAlt: "FMS logistics management",
        reverse: true,
      },
      {
        type: "split",
        title: "FMS Logistics Hosting",
        paragraphs: [
          "It involves the flow of information, materials handling, production, packaging, inventory, transportation, warehousing, and often security.",
        ],
        image: "/assets/services/logistics-management/supply-chain.png",
        imageAlt: "Supply chain logistics hosting",
      },
      {
        type: "heading",
        title: "Key Features of the FMS Logistics",
        subtitle:
          "The benefits of Logistics management include but not limited to perishable cargo monitoring & safety, GPS tracking, driver monitoring, driver safety and Eco monitoring, fuel monitoring, vehicle maintenance and periodic record keeping, vehicle tyre management and more.",
      },
      {
        type: "features",
        columns: 3,
        features: [
          { title: "Perishable cargo monitoring", description: "Temperature and safety monitoring for time-sensitive goods.", image: "/assets/services/logistics-management/features.png" },
          { title: "GPS tracking", description: "Real-time visibility across your logistics network." },
          { title: "Driver monitoring & safety", description: "Eco monitoring and driver behavior analytics." },
          { title: "Fuel monitoring", description: "Track consumption and prevent fuel theft across fleet." },
          { title: "Vehicle maintenance", description: "Periodic record keeping and proactive service scheduling." },
          { title: "Tyre management", description: "Track tyre life and replacement schedules." },
        ],
      },
    ],
  },

  "track-and-trace": {
    slug: "track-and-trace",
    title: "Track And Trace",
    metaDescription:
      "Track and Trace Solutions for Supply Chain and Logistics — basic and superior GPS tracking with fuel monitoring and driver identification.",
    heroImage: "/assets/services/track-and-trace/45.jpg",
    heroImageAlt: "Track and trace GPS system",
    callout:
      "Vehicle and bike tracking with basic and superior tiers — from GPS location to full fuel management and driver analytics.",
    blocks: [
      {
        type: "comparison",
        title: "Vehicle / Bike Tracking",
        leftTitle: "Basic Tracking",
        rightTitle: "Superior Tracking",
        leftImage: "/assets/services/track-and-trace/45.jpg",
        rightImage: "/assets/services/track-and-trace/46.jpg",
        leftFeatures: [
          {
            title: "GPS location and time monitoring",
            description:
              "Real time and historical navigation data based on the journey taken by the vehicle or bike as per route movements.",
          },
          {
            title: "Speed/distance covered",
            description:
              "Historical & real time mileage with speed events like average speed per kilometer, over speeding, harsh driving, and more.",
          },
          {
            title: "Engine cut-off",
            description:
              "The FMS Track App gives a client access to cut-off or stop a vehicle engine in cases of theft or driver misuse.",
          },
        ],
        rightFeatures: [
          {
            title: "Fleet Maintenance",
            description:
              "Driver behavior, vehicle safety & compliance, fuel monitoring, route planning, and fleet operations.",
          },
          {
            title: "Fuel Management / Monitoring",
            description:
              "Complete reports on fuel changes — refuel, fuel drop, consumption per trip and tank level.",
          },
          {
            title: "Driver Identification and Behavior",
            description:
              "Monitor reporting times, fueling habits, over speeding, harsh driving, idle times, and more.",
          },
          {
            title: "Geo-fencing of areas",
            description:
              "Set up virtual boundaries around any geographical area or point of interest.",
          },
          {
            title: "Multiple & secure login",
            description:
              "Access via the FMS Track App or FMS Ltd Web page to view your fleet.",
          },
          {
            title: "Report Analysis & SMS/Email alerts",
            description:
              "Generate history reports and receive notification alerts at the point of occurrence.",
          },
        ],
      },
      {
        type: "split",
        title: "Superior tracking hardware",
        paragraphs: [
          "Superior tracking includes all features of basic tracking with the additional benefit of fuel monitoring. FMS International Ltd supplies the hardware units and materials for installation.",
        ],
        image: "/assets/services/track-and-trace/48.jpg",
        imageAlt: "Superior tracking dashboard",
        reverse: true,
      },
    ],
  },

  "renewables-and-iot-energy-storage-monitoring": {
    slug: "renewables-and-iot-energy-storage-monitoring",
    title: "Renewables and IOT Energy Storage Monitoring",
    tagline: "Actively monitoring energy KPIs to limit outages",
    metaDescription:
      "Renewable Energy and IoT Energy Storage Monitoring — live backup power monitoring, KPI tracking and intelligent optimization.",
    heroImage: "/assets/services/renewables-and-iot-energy-storage-monitoring/hero.png",
    heroImageAlt: "Energy storage monitoring platform",
    callout:
      "When faced with unstable power sources and periodic outages, ensure your backup power solutions are ready to kick in at a moment's notice.",
    blocks: [
      {
        type: "intro",
        paragraphs: [
          "When faced with unstable power sources and periodic – or even frequent – outages, there is a need to ensure your backup power solutions are ready to kick in at a moment's notice. This begins with understanding when these energy solutions are being used, and if they are supposed to be active at that time. To achieve this goal, our RMM actively monitors KPIs including availability, use time, voltage, load, state of charge, and state of health, and notifies of any malfunctions, in real-time, so that backup power can be provided, in a flash.",
        ],
      },
      {
        type: "before-after",
        title: "Transform your energy monitoring",
        beforeLabel: "Before",
        afterLabel: "After",
        before: [
          "Backup energy assets operate unsupervised",
          "Lack of priority or usage strategy for less-polluting assets",
          "Asset health and performance checks are limited to onsite visits",
          "Durability and life cycle of energy storage assets are often below expectations",
        ],
        after: [
          "Live monitoring of remote backup energy storage assets",
          "Intelligent insights and optimizations to maximize energy storage use and efficiency",
          "Tracking of energy KPIs and asset status from our web or mobile platform",
          "Maximized energy storage infrastructure lifetime and warranty",
        ],
        image: "/assets/services/renewables-and-iot-energy-storage-monitoring/after.png",
        imageAlt: "Energy storage monitoring after implementation",
      },
      {
        type: "stats",
        title: "A Renewed Lease on Energy Consumption",
        stats: [
          { value: "1hr", label: "Global sunlight = world's annual power demand" },
          { value: "29%", label: "Renewable's share of global electricity 2020" },
          { value: "24/7", label: "Real-time KPI monitoring" },
          { value: "0", label: "Unplanned outage blind spots" },
        ],
      },
      {
        type: "accordion",
        title: "Ongoing energy management",
        items: [
          {
            title: "Ongoing management",
            description:
              "All too often, these sustainable energy sources are integrated and forgotten, as if they will automatically operate at peak effectiveness. Yet, to ensure these assets operate properly and provide the optimal effect, they must be monitored and managed, around the clock.",
            image: "/assets/services/renewables-and-iot-energy-storage-monitoring/energy-1.png",
            imageAlt: "Ongoing energy management",
          },
          {
            title: "Real-time reporting",
            description:
              "To fully leverage the efficiency and carbon footprint improvements these natural energy sources provide, you need to consistently stay on top of your usage and the effectiveness of these energy assets. This includes tracking KPIs like time in use, power generated, carbon emissions saved, and relative cost savings.",
            image: "/assets/services/renewables-and-iot-energy-storage-monitoring/energy-2.png",
            imageAlt: "Real-time energy reporting",
          },
          {
            title: "External factors",
            description:
              "Renewable energy sources are highly affected by Mother Nature. External factors such as weather patterns and the time of year must consistently be considered to adapt energy operations and optimize for efficiency.",
            image: "/assets/services/renewables-and-iot-energy-storage-monitoring/energy-3.png",
            imageAlt: "External factor monitoring",
          },
        ],
      },
      {
        type: "features",
        columns: 4,
        features: [
          { title: "Backup energy assets", description: "Monitor remote backup systems in real time.", image: "/assets/services/renewables-and-iot-energy-storage-monitoring/backup-energy-assets.png" },
          { title: "Performance checks", description: "Automated health and performance verification.", image: "/assets/services/renewables-and-iot-energy-storage-monitoring/performance-checks.png" },
          { title: "Priority strategy", description: "Intelligent usage strategy for less-polluting assets.", image: "/assets/services/renewables-and-iot-energy-storage-monitoring/priority.png" },
          { title: "Durability & life cycle", description: "Maximize infrastructure lifetime and warranty.", image: "/assets/services/renewables-and-iot-energy-storage-monitoring/durability-and-life-cycle.png" },
        ],
      },
      {
        type: "image",
        src: "/assets/services/renewables-and-iot-energy-storage-monitoring/storage.gif",
        alt: "Energy storage assets animation",
        caption: "Live energy storage asset monitoring",
      },
    ],
  },
};

export function getServicePageSync(slug: string): ServicePageData | undefined {
  return servicePages[slug];
}

/** Prefer Firestore CMS content; fall back to hardcoded servicePages. */
export async function getServicePage(
  slug: string,
): Promise<ServicePageData | undefined> {
  try {
    const { getServiceBySlug } = await import("@/lib/cms");
    const cms = await getServiceBySlug(slug);
    if (cms) {
      return {
        slug: cms.slug,
        title: cms.title,
        tagline: cms.tagline,
        metaDescription: cms.metaDescription,
        heroImage: cms.heroImage,
        heroImageAlt: cms.heroImageAlt,
        callout: cms.callout,
        blocks: cms.blocks as ServicePageData["blocks"],
      };
    }
  } catch {
    // Fall through to hardcoded data when Firebase is unavailable.
  }
  return servicePages[slug];
}

export function getAllServiceSlugs(): string[] {
  return Object.keys(servicePages);
}
