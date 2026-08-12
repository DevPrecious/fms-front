import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "push-to-talk-telematics";

export const metadata: Metadata = {
  title: "Push-To-Talk Telematics",
  description:
    "Push to Talk Telematics Solutions for Advanced Communication — GPS tracking with instant voice, Wi-Fi coverage and AES256 encryption.",
};

export default async function PushToTalkTelematicsPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
