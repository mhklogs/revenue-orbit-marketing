import { readCollection, writeCollection, readObject, writeObject } from "./store";
import { Lead } from "./leads";

/* ---------------- Blog ---------------- */

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  excerpt: string;
  body: string;
  createdAt: string;
};

const BLOGS_FILE = "blogs.json";

export async function getBlogs(): Promise<BlogPost[]> {
  return readCollection<BlogPost>(BLOGS_FILE);
}

export async function saveBlogs(posts: BlogPost[]): Promise<void> {
  await writeCollection(BLOGS_FILE, posts);
}

export async function upsertBlog(input: BlogPost): Promise<BlogPost> {
  const posts = await getBlogs();
  const idx = posts.findIndex((p) => p.id === input.id);
  const next: BlogPost = {
    ...input,
    readTime: input.readTime || `${Math.max(1, Math.ceil(input.body.trim().split(/\s+/).length / 200))} min`,
  };
  if (idx >= 0) posts[idx] = next;
  else posts.unshift(next);
  await saveBlogs(posts);
  return next;
}

export async function deleteBlog(id: string): Promise<void> {
  const posts = (await getBlogs()).filter((p) => p.id !== id);
  await saveBlogs(posts);
}

/* ---------------- Team ---------------- */

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  createdAt: string;
};

const TEAMS_FILE = "teams.json";

export async function getTeam(): Promise<TeamMember[]> {
  return readCollection<TeamMember>(TEAMS_FILE);
}

export async function saveTeam(members: TeamMember[]): Promise<void> {
  await writeCollection(TEAMS_FILE, members);
}

export async function upsertTeamMember(input: TeamMember): Promise<TeamMember> {
  const members = await getTeam();
  const idx = members.findIndex((m) => m.id === input.id);
  if (idx >= 0) members[idx] = input;
  else members.unshift(input);
  await saveTeam(members);
  return input;
}

export async function deleteTeamMember(id: string): Promise<void> {
  const members = (await getTeam()).filter((m) => m.id !== id);
  await saveTeam(members);
}

/* ---------------- Theme / Settings ---------------- */

export type ThemeSettings = {
  accent: string;
  accentLight: string;
  accentDark: string;
};

const THEME_FILE = "theme.json";
export const DEFAULT_THEME: ThemeSettings = {
  accent: "#2EC4B0",
  accentLight: "#5AD6C5",
  accentDark: "#0F6B63",
};

export async function getTheme(): Promise<ThemeSettings> {
  const t = await readObject<ThemeSettings>(THEME_FILE);
  return t ? { ...DEFAULT_THEME, ...t } : DEFAULT_THEME;
}

export async function saveTheme(theme: ThemeSettings): Promise<ThemeSettings> {
  const next = { ...DEFAULT_THEME, ...theme };
  await writeObject(THEME_FILE, next);
  return next;
}

/* ---------------- Leads passthrough ---------------- */

export type { Lead };
