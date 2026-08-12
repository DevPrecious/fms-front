import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "vehicle-tracking";

export const metadata: Metadata = {
  title: "Vehicle Tracking",
  description:
    "Vehicle Tracking Solutions for Effective Fleet Management — real-time GPS tracking with geofencing, driver behavior monitoring and fuel theft alerts.",
};

export default async function VehicleTrackingPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
