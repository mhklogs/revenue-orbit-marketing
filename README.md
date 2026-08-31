# Revenue Orbit Marketing

Official website for **ROM — Revenue Orbit Marketing**, a growth and technology
partner helping businesses generate customers, accelerate revenue, streamline
operations, and scale through marketing, sales, outsourcing, AI, and automation.

Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4** and
**Framer Motion**.

## Multi-Page Structure

| Route | Page |
| --- | --- |
| `/` | Home — Growth Ecosystem overview (Hero, Solution Grid, ROI Metrics, Testimonials, Blueprint Form) |
| `/about` | About Us — narrative, operational variables, mission/vision, process, values, compliance/SLA, leadership, team |
| `/services` | All Services Overview |
| `/services/[slug]` | Individual Service Pages (6 core service lines) |
| `/industries` | Industries Directory (7 verticals with compliance breakdowns) |
| `/campaigns` | Active Campaigns & Results (metrics, live programs, case studies) |
| `/blog` | Resources & Insights |
| `/contact` | Executive Consultation (form, contact info, SLA intake guarantee) |
| `/careers` | Careers |

## Features

- **Mega-menu navigation** — hover dropdowns for About, Services and Industries,
  plus a top banner notice bar
- **Dark / light theme** toggle
- **Gemini chatbot** assistant (powered by the `/api/chat` route)
- **Multi-tier footer** with CTA banner, link columns, contact details and legal bar
- **Consultation lead form** (POST `/api/contact`)

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

## Content Data

Services and industries are defined once in `src/lib/data.ts` and reused across
the navbar mega menus, services pages, industries page and footer to avoid drift.

## Contact form

The consultation form submits to `/api/contact` (POST). The route currently
validates the payload and stores a lead object; wire it to your CRM/email/SMS
(HubSpot, Salesforce, GoHighLevel, etc.) before going to production.

## Deploy

```bash
vercel --prod
```
