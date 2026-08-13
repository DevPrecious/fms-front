import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "ai-powered-video-telematics";

export const metadata: Metadata = {
  title: "AI-Powered Video Telematics",
  description:
    "AI-Powered Video Telematics for Effective Fleet Management — HD live streaming, driver assistance, ADAS/DMS and event-based video alerts.",
};

export default async function AiPoweredVideoTelematicsPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
