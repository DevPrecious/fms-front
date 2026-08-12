import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage from "@/components/service-page";
import { getServicePage } from "@/components/services-data";

export const revalidate = 60;

const SLUG = "mobile-workforce-management";

export const metadata: Metadata = {
  title: "Mobile Workforce Management",
  description:
    "Mobile Workforce Management Solutions for Field Services — visibility, task dispatching, digital forms and customer excellence.",
};

export default async function MobileWorkforceManagementPage() {
  const data = await getServicePage(SLUG);
  if (!data) notFound();
  return <ServicePage data={data} />;
}
