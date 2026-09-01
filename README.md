# Revenue Orbit Marketing (ROM)

Official website for **ROM — Revenue Orbit Marketing**, a growth and technology
partner helping businesses generate customers, accelerate revenue, streamline
operations, and scale through marketing, sales, outsourcing, AI, and automation.

Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**,
**Framer Motion** and **Supabase**.

- **Production site:** <https://rom-website.vercel.app>
- **Repository:** <https://github.com/mhklogs/revenue-orbit-marketing.git>

---

## Multi-Page Structure

| Route | Page |
| --- | --- |
| `/` | Home — Hero orbit visual, Growth Lifecycle, Value Statement, What We Do, Growth Framework, Metrics, Testimonials, FAQ, Consultation form |
| `/about` | About Us — operational variables, mission/vision, leadership, values, SLA guarantees |
| `/terms` `/privacy` `/cookies` | Legal pages (footer-linked) |
| `/services` | All Services Overview |
| `/services/[slug]` | Individual Service Pages (6 core service lines) |
| `/industries` | Industries Directory (9 verticals with compliance breakdowns) |
| `/industries/[slug]` | Industry detail pages — incl. `home-integrity` (HI) |
| `/campaigns` | Active Campaigns, metrics, and case studies |
| `/blog` | Resources & Insights (loaded from Supabase) |
| `/blog/[slug]` | Individual article page (SEO metadata, generated statically) |
| `/contact` | Executive Consultation form |
| `/careers` | Careers page |
| `/admin` | Password-protected admin dashboard |
| `/certificates/[id]` | Printable partnership certificate (A4 / browser PDF) |
| `/sitemap.xml`, `/robots.txt` | SEO index files (blogs + industries auto-included) |

---

## Features

- **Mega-menu navigation** — hover dropdowns for About, Services and Industries
- **Dark / light theme toggle** with **admin-customizable accent color** (persisted in Supabase)
- **Interactive orbit hero** — brand system visual with cursor-repel, plus a faded
  logo watermark and a subtle photographic backdrop
- **Gemini chatbot** assistant (powered by `/api/chat`)
- **Consultation lead form** with **mandatory legal consent checkbox**
  (Terms / Privacy / Cookies), persisted to Supabase and shown in the admin panel
- **Admin dashboard** (`/admin`) — manage leads (status + delete), blog posts,
  team members, and site accent colors; issue lead certificates
- **Printable certificates** — universal ROM template with faded logo, auto-filled
  lead details, "Download PDF / Print" via browser print
- **SEO** — dynamic sitemap (services, industries, blogs), robots.txt, JSON-LD org schema,
  OpenGraph/Twitter images
- **Legal pages** — real `/terms`, `/privacy`, `/cookies` wired into the footer

---

## Architecture

```
Browser ──► Next.js App Router (Vercel)
                 │
                 ├── /api/* route handlers (server)
                 │        ├── contact    → adds lead
                 │        ├── chat       → Gemini assistant
                 │        ├── admin/*    → admin CRUD (leads, blogs, team, theme, certificates)
                 │        └── blogs|team|theme → public reads
                 │
              Supabase (Postgres)
                 └── rom_store (jsonb)  — "leads", "blogs", "team", "theme", "certificates"
```

### Data persistence — Supabase

All dynamic content lives in a single **`rom_store`** table:

| `key` | Shape (jsonb) |
| --- | --- |
| `leads` | `[{ id, name, email, company, phone, service, message, consent, source, status, createdAt }]` |
| `blogs` | `[{ id, slug, title, category, readTime, excerpt, body, createdAt }]` |
| `team` | `[{ id, name, role, bio, email, createdAt }]` |
| `theme` | `[{ accent, accentLight, accentDark }]` |
| `certificates` | `[{ id, leadId, leadName, company, industry, outcome, issueDate, validUntil }]` |

The `rom_*` prefix and the single-jsonb-table design deliberately avoid collisions
with other apps that share the same Supabase project. The local `data/*.json` files
are a fallback only when Supabase is not configured.

### Environment variables

`.env.local` (never commit):

```bash
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_SERVICE_ROLE_KEY=<service_role_key>   # server-only, bypasses RLS
SUPABASE_ANON_KEY=<anon_key>                   # optional, kept for reference
ADMIN_USER=Shane786
ADMIN_PASS=Shane786
ADMIN_SECRET=<random secret for admin cookie signing>
GEMINI_API_KEY=<your Gemini key>               # chatbot
```

The same `ADMIN_*` and `SUPABASE_*` variables must be set in the **Vercel project
environment** for production (they are not committed to git or in `.env.local`).

### Database setup

`schema` is applied via `supabase.sql` (or recreation of `rom_store`):

```sql
create table if not exists public.rom_store (
  key text primary key,
  data jsonb not null default '[]'::jsonb,
  updated_at timestamptz not null default now()
);
```

---

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run lint      # ESLint
npm run build     # production build
npm run start     # serve production build
npx tsc --noEmit  # TypeScript type check
```

## Admin access

1. Visit `/admin`, sign in with the credentials from `ADMIN_USER` / `ADMIN_PASS`
   (defaults: `Shane786` / `Shane786`, override via env in production).
2. **Leads** tab — update status, delete, and issue a printable certificate.
3. **Blogs** tab — create/edit/delete articles (body is basic HTML; an excerpt,
   category and slug are used for SEO).
4. **Team** tab — manage team members (displayed on the Careers/About pages).
5. **Settings** tab — pick a preset or custom accent color; the whole site
   (light and dark mode) re-themes immediately.

## Content Data

Services and industries are defined once in `src/lib/data.ts` and reused across
the navbar mega menus, services pages, industries page and footer to avoid drift.
The 9 industries include **Home Integrity (HI)** (`home-integrity`) which is kept
separate from HVAC/Solar/Trades (`home-services`) so the word "home" is not
duplicated in navigation.

Blog, team, theme and leads are runtime data stored in Supabase — see
`src/lib/store.ts` (store), `src/lib/content.ts` (blogs/team/theme),
`src/lib/leads.ts` (leads) and `src/lib/certificates.ts` (certificates).

## SEO

- `src/app/sitemap.ts` — dynamically includes all services, industries (incl. HI)
  and blog posts.
- `src/app/robots.ts` — allows indexing of public pages, disallows `/admin` and `/api`.
- JSON-LD `Organization` schema in the root layout; OpenGraph + Twitter card images
  point to `public/images/hero-architecture.jpg`.

To get the site into Google's index: submit `https://rom-website.vercel.app/sitemap.xml`
in Google Search Console and request indexing.

## Deploy

```bash
git add -A
git commit -m "your message"
git push origin main
vercel --prod
```

Verify after deploy: all public routes return 200, `/admin/login` returns 200 with
the configured credentials, and `/api/theme` returns the current accent from Supabase.

---

## Project layout (key files)

```
src/
  app/
    page.tsx              # home
    sitemap.ts / robots.ts
    layout.tsx            # root layout, fonts, JSON-LD, OG metadata
    layout.tsx? SiteShell in components
    admin/                # /admin + Dashboard.tsx + admin.css + login
    certificates/[id]/    # printable certificate + print.css
    blog/                 # /blog + /blog/[slug]
    services/ industries/ campaigns/ careers/ about/ terms/ privacy/ cookies/
    api/
      contact/ admin/* / chat / blogs / team / theme
  components/
    SiteShell.tsx, Navbar.tsx, Footer.tsx, ChatWidget.tsx, BackHome.tsx,
    OrbitVisual.tsx, DetailReveal.tsx, TiltCard.tsx, Animations.tsx,
    reactbits/Aurora.tsx
  sections/               # Hero, LifecycleBar, ValueStatement, WhatWeDo,
                          # GrowthFramework, Metrics, Testimonials, Faq, ContactForm
  lib/
    data.ts               # services + industries + framework + FAQs
    store.ts              # Supabase collection read/write (rom_store)
    supabase.ts           # server-only Supabase client
    content.ts            # blogs / team / theme getters
    leads.ts              # lead CRUD
    certificates.ts       # certificate issue/lookup
    admin-auth.ts         # admin session helpers
  context/ThemeContext.tsx # dark/light + accent theming
```