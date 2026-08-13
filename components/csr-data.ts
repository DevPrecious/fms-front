export type CsrCategory = "all" | "healthcare" | "road-safety";

export type CsrInitiative = {
  id: string;
  title: string;
  partner: string;
  description: string;
  image: string;
  category: Exclude<CsrCategory, "all">;
  featured?: boolean;
};

export const csrInitiatives: CsrInitiative[] = [
  {
    id: "medical-clinic",
    title: "FMS-Funded Medical Clinic in Nyakinengo Village",
    partner: "Rotary Club Kiwatule",
    description:
      "Medical clinic funded by FMS in Nyakinengo Village, Rukungiri District, Uganda — in partnership with Rotary Club Kiwatule, bringing essential healthcare access to the local community.",
    image: "/assets/csr/medical-clinic-nyakinengo.jpg",
    category: "healthcare",
    featured: true,
  },
  {
    id: "achelis-road-safety",
    title: "Road Safety Training Recognition",
    partner: "Achelis Uganda Ltd",
    description:
      "Road safety training recognition programme delivered in partnership with Achelis Uganda Ltd — promoting safer roads and responsible driving across fleet operations.",
    image: "/assets/csr/road-safety-achelis.jpg",
    category: "road-safety",
  },
  {
    id: "care-international",
    title: "Road Safety Training Recognition",
    partner: "Care International Uganda",
    description:
      "Road safety training recognition in collaboration with Care International Uganda — extending our commitment to community safety and responsible transport beyond commercial fleets.",
    image: "/assets/csr/road-safety-care-international.jpg",
    category: "road-safety",
  },
];

export const csrCategories: { id: CsrCategory; label: string }[] = [
  { id: "all", label: "All initiatives" },
  { id: "healthcare", label: "Healthcare" },
  { id: "road-safety", label: "Road Safety" },
];

export const csrPillars = [
  {
    label: "01",
    title: "Community Health",
    body: "Investing in healthcare infrastructure that gives underserved communities access to medical services they would otherwise go without.",
  },
  {
    label: "02",
    title: "Road Safety",
    body: "Promoting safer driving through training and recognition programmes — because our mission to monitor fleets extends to protecting lives on the road.",
  },
  {
    label: "03",
    title: "Local Partnerships",
    body: "Working with established organisations like Rotary Club Kiwatule, Achelis and Care International — and building new partnerships as we open in Nigeria.",
  },
  {
    label: "04",
    title: "Sustainable Impact",
    body: "Building programmes that create lasting change in the communities where we operate — now including Nigeria, alongside the wider FMS Africa group.",
  },
];
