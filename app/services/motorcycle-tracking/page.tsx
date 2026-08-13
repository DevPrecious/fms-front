import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "motorcycle-tracking";

export const metadata: Metadata = {
  title: "Motorcycle Tracking",
  description:
    "Motorcycle Tracking Solutions for GPS and Fleet Management — real-time location tracking, immobilization and battery-smart power management.",
};

export default async function MotorcycleTrackingPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
