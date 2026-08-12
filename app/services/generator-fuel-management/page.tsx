import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "generator-fuel-management";

export const metadata: Metadata = {
  title: "Generator Fuel Management",
  description:
    "Generator Fuel Management for Optimal Efficiency — online generator monitoring, fuel levels, maintenance scheduling and parameter control.",
};

export default async function GeneratorFuelManagementPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
