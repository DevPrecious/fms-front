import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "vehicle-fuel-management";

export const metadata: Metadata = {
  title: "Vehicle Fuel Management",
  description:
    "Vehicle Fuel Management Solutions for Fleet Optimization — monitor fuel level, consumption, refills and prevent fuel thefts.",
};

export default async function VehicleFuelManagementPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
