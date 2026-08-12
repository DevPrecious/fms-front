import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "asset-tracking";

export const metadata: Metadata = {
  title: "Asset Tracking",
  description:
    "Asset Tracking Solutions for Fleet Management & GPS Tracking — real-time telemetry, geofencing and alerts on 1100+ supported devices.",
};

export default async function AssetTrackingPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
