import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "logistics-management";

export const metadata: Metadata = {
  title: "Logistics Management",
  description:
    "Logistics Management and Supply Chain Solutions — efficient forward and reverse flow of goods with GPS tracking and fuel monitoring.",
};

export default async function LogisticsManagementPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
