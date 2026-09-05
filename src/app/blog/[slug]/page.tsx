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

  const topic = post.category.toLowerCase();
  const faqQ1 = `What is ${post.title.replace(/[.?:!]$/, "")}?`;
  const faqA1 = `${post.excerpt.replace(/\s+/g, " ").trim()} For a tailored breakdown, contact Revenue Orbit Marketing directly.`;
  const faqQ2 = `Why does ${post.category} matter for business growth?`;
  const faqA2 = `Businesses that systematise ${topic} generate and convert more revenue, lower acquisition costs, and scale predictable pipeline — which is exactly the outcome Revenue Orbit Marketing builds with customers across the US.`;
  const faqQ3 = `How can Revenue Orbit Marketing help with ${post.category}?`;
  const faqA3 = `Revenue Orbit Marketing provides customer acquisition, marketing, outsourcing, and AI-driven operations for ${topic}. Start a campaign and you get a free consultation on the right approach for your business.`;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      { "@type": "Question", name: faqQ1, acceptedAnswer: { "@type": "Answer", text: faqA1 } },
      { "@type": "Question", name: faqQ2, acceptedAnswer: { "@type": "Answer", text: faqA2 } },
      { "@type": "Question", name: faqQ3, acceptedAnswer: { "@type": "Answer", text: faqA3 } },
    ],
  };
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt.replace(/\s+/g, " ").trim(),
    datePublished: post.createdAt,
    articleSection: post.category,
    publisher: {
      "@type": "Organization",
      name: "Revenue Orbit Marketing",
      url: "https://revenueorbitmarketing.com",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <section className="py-20 md:py-28 pt-28 md:pt-36 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 text-xs font-semibold mb-4 flex-wrap">
            <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{post.category}</span>
            <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{post.readTime} read</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-[1.12]" style={{ color: "var(--text-primary)" }}>
            {post.title}
          </h1>
          <div
            className="mt-6 rounded-2xl border-l-4 bg-[var(--accent)]/5 px-5 py-4"
            style={{ borderColor: "var(--accent)" }}
          >
            <p className="text-xs font-extrabold uppercase tracking-widest" style={{ color: "var(--accent-light)" }}>
              Key takeaway
            </p>
            <p className="mt-1.5 text-lg font-semibold leading-relaxed" style={{ color: "var(--text-primary)" }}>
              {post.excerpt}
            </p>
          </div>
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