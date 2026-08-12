import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "renewables-and-iot-energy-storage-monitoring";

export const metadata: Metadata = {
  title: "Renewables & IoT Energy Storage Monitoring",
  description:
    "Renewable Energy and IoT Energy Storage Monitoring — live backup power monitoring, KPI tracking and intelligent optimization.",
};

export default async function RenewablesMonitoringPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
