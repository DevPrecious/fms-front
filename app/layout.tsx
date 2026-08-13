import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteShell from "@/components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "FMS Africa Nigeria Ltd | Fleet Monitoring Systems",
    template: "%s | FMS Africa Nigeria",
  },
  description:
    "FMS Africa Nigeria Ltd is now open in Lagos — real-time fleet and asset monitoring, vehicle tracking, fuel management and AI video telematics for Nigerian operators.",
};

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
