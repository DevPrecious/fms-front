import type { Metadata } from "next";
import Image from "next/image";
import GalleryView from "@/components/gallery-view";
import { galleryItems as fallbackGallery } from "@/components/gallery-data";
import { getGalleryItems } from "@/lib/cms";
import type { GalleryItem } from "@/components/gallery-data";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Explore FMS Africa in action — technical installations, Malaysia factory visits, and partnership events across our global operations.",
};

export default async function GalleryPage() {
  const cmsItems = await getGalleryItems().catch(() => []);
  const items: GalleryItem[] =
    cmsItems.length > 0
      ? cmsItems.map((item, index) => ({
          id: item.id || `gallery-${index}`,
          src: item.src,
          title: item.title,
          category: item.category as GalleryItem["category"],
        }))
      : fallbackGallery;

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
          <p className="text-sm tracking-wide text-slate-500">
            <span aria-hidden="true">•</span> Gallery{" "}
            <span aria-hidden="true">•</span>
          </p>
          <h1 className="mt-8 text-4xl font-bold leading-[1.12] tracking-tight text-navy-950 sm:text-5xl lg:text-7xl">
            Our work in
            <br />
            action.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Field installations, technical operations and partnership events
            from across FMS Africa&apos;s global footprint — {items.length}{" "}
            moments captured on site.
          </p>
        </div>

        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src="/assets/gallery/Technical-Works-1.jpg"
            alt="FMS Africa technical works in the field"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
      </section>

      <GalleryView items={items} />
    </div>
  );
}
