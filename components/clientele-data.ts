import clienteleJson from "./clientele-data.json";

export type ClientCategory = "all" | "banking" | "ngo" | "government" | "corporate";

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
  category: Exclude<ClientCategory, "all">;
};

/* Display-name overrides for cleaner labels */
const nameOverrides: Record<string, string> = {
  actv: "ACTV",
  ags: "AGS",
  afreximbank: "Afrexim Bank",
  alight: "Alight",
  "alight-uganda": "Alight Uganda",
  "all-in-trade": "All in Trade",
  alliancemedia: "Alliance Media",
  "aron-foods": "Aron Foods",
  "balton-uganda-1": "Balton Uganda",
  "bank-of-uganda-1": "Bank of Uganda",
  "bugiri-sugar-logo": "Bugiri Sugar",
  "care-international-1": "Care International",
  "care-international-uganda": "Care International Uganda",
  "central-public": "Central Public",
  "chicken-tonight": "Chicken Tonight",
  "cotton-on-foundation": "Cotton On Foundation",
  "emerging-market-international": "Emerging Market International",
  "equity-bank": "Equity Bank",
  "equity-logo": "Equity Bank",
  "evidence-action": "Evidence Action",
  fao: "FAO",
  "feed-the-future": "Feed the Future",
  "finn-church-aid": "Finn Church Aid",
  "future-link": "Future Link",
  goal: "GOAL",
  "geneva-global-1": "Geneva Global",
  "global-vet-ltd": "Global Vet Ltd",
  hrafp: "HRAFP",
  "health-partners-1": "Health Partners",
  "health-partners-uganda": "Health Partners Uganda",
  "human-diagnostics": "Human Diagnostics",
  idlo: "IDLO",
  ifpri: "IFPRI",
  ig: "IG",
  "international-school-of-uganda-1": "International School of Uganda",
  jcrc: "JCRC",
  jrs: "JRS",
  "jeff-hamilton-logo": "Jeff Hamilton",
  "kis-logo": "KIS",
  "m-kopa": "M-KOPA",
  msc: "MSC",
  msh: "MSH",
  "mtn-zambia": "MTN Zambia",
  mucobadi: "MUCOBADI",
  "mercy-corps": "Mercy Corps",
  "ministry-of-water-and-environment": "Ministry of Water & Environment",
  "ministry-of-water-and-environment-1": "Ministry of Water & Environment",
  "mr-price": "Mr Price",
  "new-vision": "New Vision",
  "pe-connect": "PE Connect",
  "psi-engineering-1": "PSI Engineering",
  snl: "SNL",
  swico: "SWICO",
  "samaritans-purse-2": "Samaritan's Purse",
  "seed-global-health": "Seed Global Health",
  "somarelang-investments-limited-logo": "Somarelang Investments",
  "stanbic-bank": "Stanbic Bank",
  taso: "TASO",
  "the-lutheran": "The Lutheran World Federation",
  "uba-bank": "UBA Bank",
  uba: "UBA Bank",
  uegcl: "UEGCL",
  "uedcl-logo": "UEDCL",
  unaids: "UNAIDS",
  urc: "URC",
  "uganda-airlines-1": "Uganda Airlines",
  "uganda-clays": "Uganda Clays",
  "uganda-tourism-board": "Uganda Tourism Board",
  vetcentre: "Vet Centre",
  vvsaol: "VVSAOL",
  whh: "WHH",
  who: "WHO",
  "world-vision-uganda": "World Vision Uganda",
  "wosha-products": "Wosha Products",
  zoa: "ZOA",
  "fsd-uganda": "FSD Uganda",
  "muduusi-gilbert": "Muduusi Gilbert",
  enabel: "Enabel",
  ecotrends: "EcoTrends",
  eaps: "EAPS",
  edc: "EDC",
  dpf: "DPF",
  cws: "CWS",
  csbag: "CSBAG",
  cadam: "Cadam",
};

export const clienteleLogos: ClientLogo[] = (clienteleJson as ClientLogo[]).map(
  (client) => ({
    ...client,
    name: nameOverrides[client.id] ?? client.name,
  }),
);

export const clientCategories: { id: ClientCategory; label: string }[] = [
  { id: "all", label: "All partners" },
  { id: "banking", label: "Banking & Finance" },
  { id: "ngo", label: "NGOs & Development" },
  { id: "government", label: "Government" },
  { id: "corporate", label: "Corporate" },
];

export const clientCount = clienteleLogos.length;
