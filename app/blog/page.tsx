import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts as fallbackPosts, getFeaturedPost } from "@/components/blog-data";
import { getBlogPosts, getBlogPage } from "@/lib/cms";
import ConsultationCta from "@/components/consultation-cta";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights, tips and innovations in fleet management, GPS tracking, telematics and IoT from FMS Africa.",
};

export default async function BlogPage() {
  const [cmsPosts, listing] = await Promise.all([
    getBlogPosts().catch(() => []),
    getBlogPage().catch(() => null),
  ]);
  const blogPosts = cmsPosts.length > 0
    ? cmsPosts.map((p) => ({
        slug: p.slug,
        title: p.title,
        excerpt: p.excerpt,
        date: p.date,
        readTime: p.readTime,
        category: p.category,
        author: p.author,
        image: p.image,
        featured: p.featured,
      }))
    : fallbackPosts;
  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0] ?? getFeaturedPost();
  const rest = blogPosts.filter((p) => p.slug !== featured.slug);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <p className="text-sm text-slate-500">
          <Link href="/blog" className="transition-colors hover:text-navy-950">
            Blog
          </Link>
          <span aria-hidden="true"> &gt;</span>
        </p>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[1fr_320px] lg:gap-12">
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-navy-950 sm:text-5xl lg:text-6xl">
            {listing?.heroHeadline || "Insights for smarter fleet operations."}
          </h1>

          <aside className="bg-navy-950 p-6 sm:p-8">
            <span className="flex h-10 w-10 items-center justify-center bg-brand-500">
              <svg
                className="h-5 w-5 text-navy-950"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
              </svg>
            </span>
            <p className="mt-5 text-sm leading-7 text-white/80">
              {listing?.intro ||
                "Explore tips, trends and innovations in GPS tracking, telematics and IoT to inspire your journey toward safer, more efficient fleet management."}
            </p>
          </aside>
        </div>
      </section>

      {/* Featured post */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Link
          href={`/blog/${featured.slug}`}
          className="group grid overflow-hidden border border-slate-200 transition-colors hover:border-brand-500 lg:grid-cols-2"
        >
          <div className="relative min-h-64 overflow-hidden lg:min-h-80">
            <Image
              src={featured.image}
              alt={featured.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{featured.date}</span>
              <span>{featured.readTime}</span>
            </div>
            <h2 className="mt-6 text-2xl font-bold leading-snug text-navy-950 transition-colors group-hover:text-navy-700 sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {featured.excerpt}
            </p>
            <p className="mt-8 text-sm font-bold text-navy-800">
              by {featured.author}
            </p>
          </div>
        </Link>
      </section>

      {/* Post grid */}
      <section className="border-t border-slate-200 pb-20 lg:pb-28">
        <div className="mx-auto grid max-w-7xl gap-px bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col bg-white transition-colors hover:bg-slate-50"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col border-t border-slate-200 p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="mt-4 flex-1 text-lg font-bold leading-snug text-navy-950 transition-colors group-hover:text-navy-700">
                  {post.title}
                </h3>
                <span className="mt-6 inline-block h-px w-full bg-slate-200" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <ConsultationCta />
    </div>
  );
}
