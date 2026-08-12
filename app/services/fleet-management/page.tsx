import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "fleet-management";

export const metadata: Metadata = {
  title: "Fleet Management",
  description:
    "Fleet Management Solutions: Vehicle Tracking & Logistics — real-time data, fuel monitoring, eco driving, maintenance and route planning.",
};

export default async function FleetManagementPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
