import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "animal-tracking";

export const metadata: Metadata = {
  title: "Animal Tracking",
  description:
    "Animal Tracking Solutions for Effective Wildlife Monitoring — manage and monitor animal locations and conditions from anywhere.",
};

export default async function AnimalTrackingPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
