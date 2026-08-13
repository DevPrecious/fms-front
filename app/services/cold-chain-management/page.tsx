import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "cold-chain-management";

export const metadata: Metadata = {
  title: "Cold Chain Management",
  description:
    "Cold Chain Management Solutions for Temperature Monitoring — real-time GPS tracking and sensor monitoring for temperature-sensitive assets.",
};

export default async function ColdChainManagementPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
