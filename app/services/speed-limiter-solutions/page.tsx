import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

const SLUG = "speed-limiter-solutions";

export const metadata: Metadata = {
  title: "Speed Limiter Solutions",
  description:
    "Speed Limiter Solutions for Enhanced Fleet Management Safety — digital speed governors with buzzer alerts, automatic slowdown and driver record logging.",
};

export default async function SpeedLimiterSolutionsPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
