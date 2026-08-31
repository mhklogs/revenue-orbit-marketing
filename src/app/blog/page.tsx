import { Metadata } from "next";
import Link from "next/link";
import { StaggerContainer, StaggerItem, SectionHeading } from "@/components/Animations";

export const metadata: Metadata = {
  title: "Blog | Revenue Orbit Marketing",
  description: "Industry trends, operational playbooks and the metrics that actually move business growth.",
};

const posts = [
  {
    slug: "inbound-vs-outbound-call-centers",
    title: "Inbound vs. Outbound Call Centers: Which One Do You Need?",
    category: "Strategy",
    readTime: "6 min",
    excerpt: "Understand the key operational differences between inbound and outbound call centers to decide what your business actually needs.",
  },
  {
    slug: "how-to-train-call-center-agents",
    title: "How to Train Call Center Agents for Better Performance",
    category: "Operations",
    readTime: "6 min",
    excerpt: "A practical execution playbook for onboarding and training contact center agents to improve quality and conversion rate.",
  },
  {
    slug: "how-to-improve-first-call-resolution",
    title: "How to Improve First Call Resolution (FCR)",
    category: "Quality",
    readTime: "7 min",
    excerpt: "First call resolution is the foundational SLA driving retention and CAC. Here is how to systematically elevate FCR.",
  },
];

export default function BlogPage() {
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {posts.map((post) => (
              <StaggerItem key={post.slug}>
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

          <p className="text-center text-sm leading-normal mt-12" style={{ color: "var(--text-muted)" }}>
            More industry articles coming soon.
          </p>
        </div>
      </section>
    </>
  );
}
