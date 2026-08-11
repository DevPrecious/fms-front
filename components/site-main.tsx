"use client";

import { usePathname } from "next/navigation";

export default function SiteMain({ children }: { children: React.ReactNode }) {
  const isHome = usePathname() === "/";

  return (
    <main
      className={`flex flex-1 flex-col ${isHome ? "" : "pt-27"}`}
    >
      {children}
    </main>
  );
}
