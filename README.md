# Revenue Orbit Marketing

Official website for **ROM — Revenue Orbit Marketing**, a growth and technology
partner helping businesses generate customers, accelerate revenue, streamline
operations, and scale through marketing, sales, outsourcing, AI, and automation.

Built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4** and
**Framer Motion**.

## Sections

- Hero — Growth & Technology Partner
- Value Statement / Growth Lifecycle
- Who We Are — Mission, Vision & Operational Variables
- What We Do — 8 core solutions
- Industries — 10 core verticals with deep-dive panels
- Why ROM — value proposition grid
- How We Work — 6-stage execution timeline
- Growth Model — ATTRACT / ENGAGE / CONVERT / SCALE
- Tech Ecosystem — infrastructure & data flow
- Live Campaigns & Metrics — proven track record
- Case Studies
- Leadership / Team
- Testimonials
- FAQ
- Consultation lead form (POST `/api/contact`) & final CTA

## Getting Started

```bash
npm install
npm run dev       # http://localhost:3000
npm run build     # production build
npm run start     # serve production build
```

## Contact form

The consultation form submits to `/api/contact` (POST). The route currently
validates the payload and stores a lead object; wire it to your CRM/email/SMS
(HubSpot, Salesforce, GoHighLevel, etc.) before going to production.

## Deploy

```bash
vercel --prod
```
