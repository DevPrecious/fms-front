import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "track-and-trace";

export const metadata: Metadata = {
  title: "Track And Trace",
  description:
    "Track and Trace Solutions for Supply Chain and Logistics — basic and superior GPS tracking with fuel monitoring and driver identification.",
};

export default async function TrackAndTracePage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
