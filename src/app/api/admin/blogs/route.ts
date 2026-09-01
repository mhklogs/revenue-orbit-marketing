import { NextRequest, NextResponse } from "next/server";
import { getBlogs, upsertBlog, deleteBlog, BlogPost } from "@/lib/content";

export async function GET() {
  const blogs = await getBlogs();
  return NextResponse.json({ blogs });
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as Partial<BlogPost>;
  const title = String(body.title || "").trim();
  const slug = String(body.slug || "").trim() || title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  if (!title || !slug) {
    return NextResponse.json({ error: "Title and slug are required." }, { status: 400 });
  }
  const post = await upsertBlog({
    id: String(body.id || crypto.randomUUID()),
    slug,
    title,
    category: String(body.category || "General"),
    readTime: String(body.readTime || ""),
    excerpt: String(body.excerpt || ""),
    body: String(body.body || ""),
    createdAt: String(body.createdAt || new Date().toISOString()),
  });
  return NextResponse.json({ success: true, post });
}

export async function DELETE(request: NextRequest) {
  const { id } = await request.json().catch(() => ({}));
  await deleteBlog(String(id || ""));
  return NextResponse.json({ success: true });
}
