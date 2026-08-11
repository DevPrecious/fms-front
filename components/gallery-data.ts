export type GalleryCategory = "all" | "technical" | "malaysia" | "partnerships";

export type GalleryItem = {
  id: string;
  src: string;
  title: string;
  category: Exclude<GalleryCategory, "all">;
};

function titleFromFilename(filename: string): string {
  return filename
    .replace(/\.jpg$/i, "")
    .replace(/_\(\d+\)/g, "")
    .replace(/_/g, " ")
    .replace(/-/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const files: { file: string; category: GalleryItem["category"] }[] = [
  {
    file: "Chinese-Chamber-of-Commerce-in-Malaysia_(1).jpg",
    category: "partnerships",
  },
  {
    file: "Malaysia-Chamber-of-Commerce-Malaysia_(1).jpg",
    category: "partnerships",
  },
  {
    file: "Factory-Visit-Malaysia-1-1_(1).jpg",
    category: "malaysia",
  },
  { file: "Technical-Works-1.jpg", category: "technical" },
  { file: "Technical-Works-1_(1).jpg", category: "technical" },
  { file: "Technical-Works-2.jpg", category: "technical" },
  { file: "Technical-Works-2_(1).jpg", category: "technical" },
  { file: "Technical-Works-3.jpg", category: "technical" },
  { file: "Technical-Works-3_(1).jpg", category: "technical" },
  { file: "Technical-Works-4.jpg", category: "technical" },
  { file: "Technical-Works-4_(1).jpg", category: "technical" },
  { file: "Technical-Works-5.jpg", category: "technical" },
  { file: "Technical-Works-5_(1).jpg", category: "technical" },
  { file: "Technical-Works-6.jpg", category: "technical" },
  { file: "Technical-Works-7.jpg", category: "technical" },
  { file: "Technical-Works-8.jpg", category: "technical" },
  { file: "Technical-Works-9.jpg", category: "technical" },
  { file: "Technical-Works-10.jpg", category: "technical" },
  { file: "Technical-Works-11.jpg", category: "technical" },
];

export const galleryItems: GalleryItem[] = files.map(({ file, category }) => ({
  id: file.replace(/\.jpg$/i, ""),
  src: `/assets/gallery/${file}`,
  title: titleFromFilename(file),
  category,
}));

export const galleryCategories: {
  id: GalleryCategory;
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "technical", label: "Technical Works" },
  { id: "malaysia", label: "Malaysia Visits" },
  { id: "partnerships", label: "Partnerships" },
];
