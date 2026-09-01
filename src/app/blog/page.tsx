import { Metadata } from "next";
import Link from "next/link";
import { StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";
import { getBlogs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog | Revenue Orbit Marketing",
  description: "Industry trends, operational playbooks and the metrics that actually move business growth.",
};

export default async function BlogPage() {
  const posts = await getBlogs();

  return (
    <>
      <section className="py-20 md:py-32 pt-24 md:pt-32 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Insights"
            title="Notes from the"
            highlight="Growth Floor"
            subtitle="Industry trends, operational playbooks and the metrics that actually move business growth."
          />
        </div>
      </section>

      <section className="py-20 md:py-32" style={{ backgroundColor: "var(--bg-secondary)" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <p className="text-center text-lg" style={{ color: "var(--text-muted)" }}>
              Articles are being written. Check back soon.
            </p>
          ) : (
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <StaggerItem key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-6 rounded-xl glass border border-[var(--border-subtle)] hover-lift h-full flex flex-col justify-between">
                      <div>
                        <div className="flex gap-2 text-xs font-semibold mb-3">
                          <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{post.category}</span>
                          <span className="px-2.5 py-1 rounded-full bg-[var(--accent)]/10 text-[var(--accent-light)] border border-[var(--accent)]/20">{post.readTime} read</span>
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-2" style={{ color: "var(--text-primary)" }}>{post.title}</h3>
                        <p className="text-sm leading-normal flex-1 mb-4" style={{ color: "var(--text-secondary)" }}>{post.excerpt}</p>
                      </div>
                      <span className="mt-auto text-xs font-semibold text-[var(--accent-light)]">Read Article &rarr;</span>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>
          )}

          <p className="text-center text-sm leading-normal mt-12" style={{ color: "var(--text-muted)" }}>
            More industry articles are added as campaigns and playbooks are proven.
          </p>
        </div>
      </section>
    </>
  );
}