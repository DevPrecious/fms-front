import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "satellite-tracking";

export const metadata: Metadata = {
  title: "Satellite Tracking",
  description:
    "Satellite Tracking Solutions for GPS Fleet Management — true satellite tracking for cross-border transporters with zero roaming fees.",
};

export default async function SatelliteTrackingPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
