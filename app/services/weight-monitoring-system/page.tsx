import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "weight-monitoring-system";

export const metadata: Metadata = {
  title: "Weight Monitoring System",
  description:
    "Vehicle Weight Monitoring System Load & Health Tracking — axle load sensors, Eurosens controllers and real-time cargo weight control.",
};

export default async function WeightMonitoringSystemPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
