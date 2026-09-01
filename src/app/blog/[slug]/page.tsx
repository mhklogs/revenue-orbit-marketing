import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogs } from "@/lib/content";

export const dynamicParams = true;

export async function generateStaticParams() {
  const posts = await getBlogs();
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const posts = await getBlogs();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | Revenue Orbit Marketing`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogs();
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="py-20 md:py-28 pt-28 md:pt-36 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 text-xs font-semibold mb-4 flex-wrap">
            <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{post.category}</span>
            <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{post.readTime} read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]" style={{ color: "var(--text-primary)" }}>
            {post.title}
          </h1>
          <p className="text-lg text-[var(--text-secondary)] mt-5 leading-relaxed">{post.excerpt}</p>
          <div className="h-px w-full bg-[var(--border-subtle)] mt-10 mb-2" />
        </div>
      </section>

      <section className="pb-24" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article
            className="prose prose-lg max-w-none leading-relaxed"
            style={{ color: "var(--text-primary)" }}
          >
            <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.body }} />
          </article>

          <div className="mt-16 flex items-center justify-between border-t border-[var(--border-subtle)] pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all"
            >
              &larr; All articles
            </Link>
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] hover:gap-3 transition-all"
            >
              Start a campaign &rarr;
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}