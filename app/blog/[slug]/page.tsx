import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  blogPosts,
  getPostContent,
  getRelatedPosts,
} from "@/components/blog-data";
import { getBlogPostBySlug, getBlogPosts } from "@/lib/cms";

export const revalidate = 60;

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const cms = await getBlogPostBySlug(slug).catch(() => null);
  if (cms) return { title: cms.title, description: cms.excerpt };
  const post = getPostContent(slug);
  if (!post) return { title: "Blog" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const cmsPost = await getBlogPostBySlug(slug).catch(() => null);
  const fallback = getPostContent(slug);

  if (!cmsPost && !fallback) notFound();

  const post = cmsPost
    ? {
        slug: cmsPost.slug,
        title: cmsPost.title,
        excerpt: cmsPost.excerpt,
        date: cmsPost.date,
        readTime: cmsPost.readTime,
        category: cmsPost.category,
        author: cmsPost.author,
        image: cmsPost.image,
        contentHtml: cmsPost.content,
        sections: undefined as undefined,
      }
    : {
        ...fallback!,
        contentHtml: undefined as string | undefined,
      };

  const cmsRelated = await getBlogPosts().catch(() => []);
  const related =
    cmsRelated.length > 0
      ? cmsRelated
          .filter((p) => p.slug !== slug)
          .slice(0, 2)
          .map((p) => ({
            slug: p.slug,
            title: p.title,
            date: p.date,
            category: p.category,
            image: p.image,
          }))
      : getRelatedPosts(slug, 2);

  return (
    <article className="bg-white">
      {/* Header */}
      <header className="mx-auto max-w-4xl px-4 pt-20 sm:px-6 lg:px-8 lg:pt-28">
        <p className="text-sm text-slate-500">
          <Link href="/blog" className="transition-colors hover:text-navy-950">
            Blog
          </Link>
          <span aria-hidden="true"> &gt;</span>
        </p>

        <h1 className="mt-8 text-3xl font-bold leading-tight tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 text-sm">
          <p className="text-slate-600">
            by <span className="font-bold text-navy-950">{post.author}</span>
            <span className="mx-2 text-slate-300">|</span>
            {post.date}
          </p>
          <p className="font-bold uppercase tracking-wider text-brand-600">
            {post.category}
          </p>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative mx-auto mt-8 max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative aspect-video w-full overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-right text-xs text-slate-400">
          Share post ↗
        </p>
      </div>

      {/* Body */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="prose prose-slate max-w-none">
          {post.contentHtml ? (
            <div
              className="space-y-4 text-base leading-8 text-slate-600 [&_h2]:mb-4 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-navy-950 [&_p]:mb-4"
              dangerouslySetInnerHTML={{ __html: post.contentHtml }}
            />
          ) : (
            post.sections?.map((section, index) => (
              <section key={index} className="mb-10">
                {section.heading && (
                  <h2 className="mb-4 text-2xl font-bold text-navy-950">
                    {section.heading}
                  </h2>
                )}
                {section.paragraphs.map((paragraph, pIndex) => (
                  <p
                    key={pIndex}
                    className="mb-4 text-base leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </section>
            ))
          )}
        </div>

        {/* Inline CTA for axle load article */}
        {slug ===
          "benefits-of-axle-load-monitoring-systems-for-fleet-operators" && (
          <div className="mt-12 border border-brand-500 bg-slate-50 p-8">
            <h3 className="text-xl font-bold text-navy-950">
              Take control of your vehicle load management
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Improve fleet safety, reduce maintenance costs, and maintain
              compliance with real-time axle load monitoring technology.
            </p>
            <Link
              href="/services/weight-monitoring-system"
              className="mt-6 inline-block bg-brand-500 px-6 py-3 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              View our weight monitoring solutions
            </Link>
          </div>
        )}
      </div>

      {/* Related posts */}
      <section className="border-t border-slate-200 bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-2xl font-bold text-navy-950 sm:text-3xl">
              Discover more articles
            </h2>
            <Link
              href="/blog"
              className="bg-brand-500 px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
            >
              View all posts
            </Link>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {related.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="group grid overflow-hidden border border-slate-200 bg-white transition-colors hover:border-brand-500 sm:grid-cols-2"
              >
                <div className="relative min-h-40 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, 300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>{item.date}</span>
                    <span>{item.category}</span>
                  </div>
                  <h3 className="mt-3 text-base font-bold leading-snug text-navy-950 transition-colors group-hover:text-navy-700">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden">
        <Image
          src="/assets/landing/trucks-highway.jpg"
          alt=""
          width={1200}
          height={800}
          className="h-80 w-full object-cover"
        />
        <div className="absolute inset-0 bg-navy-950/75" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h2 className="max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
            Join the connected fleet movement with FMS Africa
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">
            Get a free consultation and discover how our telematics solutions
            can transform your fleet operations.
          </p>
          <Link
            href="/about-us/contact-us"
            className="mt-8 bg-brand-500 px-8 py-3.5 text-sm font-bold text-navy-900 transition-colors hover:bg-brand-400"
          >
            Contact us
          </Link>
        </div>
      </section>
    </article>
  );
}
