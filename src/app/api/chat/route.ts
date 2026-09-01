import { NextRequest, NextResponse } from "next/server";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const KNOWLEDGE_BASE = `
REVENUE ORBIT MARKETING (ROM) — SITE KNOWLEDGE

Overview:
Revenue Orbit Marketing is a customer acquisition, marketing, outsourcing, sales, and
technology partner that helps businesses move from opportunity to predictable revenue. It
consolidates marketing, sales, BPO, AI, and business automation into one unified growth partner.

Tagline: "You Bring the Vision. We Make It Happen."

SERVICES (8 dedicated solution lines):
01 Customer Acquisition - generate, qualify and convert high-intent customers via data-driven campaigns.
02 Business Process Outsourcing (BPO) - trained offshore & nearshore teams to manage operations.
03 Contact Center Solutions - inbound customer care and outbound sales prospecting with compliance SLAs.
04 Digital Marketing - performance acquisition channels for pipeline velocity and bottom-line profit.
05 Real Estate Marketing - lead acquisition, motivated seller qualification, investor CRM workflows.
06 AI & Automation - automate workflows, speed lead response, deploy conversational voice agents.
07 Remote Workforce Solutions - vetted professionals integrated as an extension of internal teams.
08 CRM & Business Automation - end-to-end CRM implementation and business automation.

WHY CHOOSE ROM (6 reasons):
Revenue-First Mindset; Customized Architecture (no rigid packages); Technology-Driven Infrastructure;
Performance & SLA Focused (tracks Leads, Qualified Opportunities, Appointment Show Rates, Customers, CAC);
Scalable Infrastructure (10 to 10,000 requests); Single Unified Growth Ecosystem.

INDUSTRIES (10 verticals):
Legal (personal injury, mass tort, claimant qualification); Insurance (Medicare Advantage, final expense,
life, auto, compliant transfers); Real Estate (realtors, wholesale, motivated sellers, buyer lead systems);
Home Services (roofing, solar, HVAC, remodeling, plumbing); Automotive; Financial Services (commercial lending,
debt relief, wealth); Tax Services; Healthcare (patient scheduling, BPO admin, telehealth); Technology & SaaS;
Professional Services.

HOW WE WORK (6 stages):
01 Discover & Audit; 02 Strategize & Model; 03 Build & Integrate; 04 Deploy & Launch; 05 Measure & Analyze;
06 Optimize & Scale.

TEAM / LEADERSHIP:
CEO (strategic vision, growth ecosystem architecture)
MD / Managing Director (operational scale, BPO compliance, partner success)
VP Sales / Head of Sales & Acquisition (pipeline velocity, SDR management, conversion SLAs)
CTO / Head of Tech & AI (CRM automation, AI voice agent infrastructure, data pipelines)
Workforce roles: Sales Engineers, Marketing Strategists, Software Developers, AI Specialists, SDRs & BDRs,
Appointment Setters, Account Executives, Operations Leads, Quality Assurance.

METRICS / TRACK RECORD:
500,000+ qualified opportunities processed; 120,000+ appointments booked; 42% average conversion boost;
3.8x average client campaign ROI; 99% SLA compliance; 96% client retention.

MISSION: Empower enterprise and scaling businesses through measurable customer acquisition, intelligent
technology, high-performing BPO outsourcing, and reliable revenue engines.
VISION: To become the premier growth and technology partner for U.S. enterprises seeking to acquire customers,
optimize unit economics, and build automated future-proof operations.

PAGES / NAVIGATION: Services (#services), Industries (#industries), Campaigns (#solutions), About (#about),
Blog (/blog), Contact (#contact-form). Lifecycle: Leads -> Opportunities -> Customers -> Revenue -> Growth.
`;

const SYSTEM_PROMPT = `You are the Revenue Orbit Marketing (ROM) website assistant. Answer questions ONLY about
Revenue Orbit Marketing using the knowledge base provided. Be concise, friendly and helpful. Use short,
scannable answers (2-5 sentences mostly). If asked something not in the knowledge base, politely say you only
know about Revenue Orbit Marketing and offer to connect the visitor with the team via the contact form.
Reference the relevant section when helpful. Format lists with bullet points when listing multiple items.

FORMATTING RULES (render as clean markdown, never raw asterisks):
- Use "## " or "### " for headings (e.g. "## Services").
- Use "**bold**" for key terms and strong emphasis.
- Use "- " for bullet lists and "1. " for numbered steps — always with a blank line before the list.
- Keep lists short (never more than 6 items).
- Separate paragraphs with a blank line.
- Do NOT wrap the whole reply in a heading, and avoid stray/unmatched asterisks.

KNOWLEDGE BASE:
${KNOWLEDGE_BASE}`;

export async function POST(request: NextRequest) {
  try {
    const { message, history = [] } = await request.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ error: "Message is required." }, { status: 400 });
    }
    if (!GEMINI_API_KEY) {
      return NextResponse.json({ error: "Chat is not configured." }, { status: 500 });
    }

    const contents = [
      ...(Array.isArray(history) ? history : []),
      { role: "user", parts: [{ text: message }] },
    ];

    const res = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.6-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 0.5, maxOutputTokens: 700 },
        }),
      }
    );

    if (!res.ok) {
      const errText = await res.text();
      console.error("Gemini error", res.status, errText);
      return NextResponse.json({ error: "The assistant could not respond right now." }, { status: 502 });
    }

    const data = await res.json();
    const text = data?.candidates?.[0]?.content?.parts
      ?.map((p: { text?: string }) => p.text || "")
      .join("")
      .trim();

    return NextResponse.json({ reply: text || "I'm sorry, I couldn't find an answer. Please try again." });
  } catch (e) {
    console.error("Chat error", e);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
