import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "cargo-tracking";

export const metadata: Metadata = {
  title: "Cargo Tracking",
  description:
    "Cargo Tracking Solutions for Efficient Shipment Management — electronic cargo tracking with e-Lock, GPS and tamper alerts.",
};

export default async function CargoTrackingPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
