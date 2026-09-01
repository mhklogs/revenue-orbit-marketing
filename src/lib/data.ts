export type Service = {
  slug: string;
  num: string;
  title: string;
  tagline: string;
  desc: string;
  outcomes: string[];
  workflows: string[];
  cta: string;
};

export const services: Service[] = [
  {
    slug: "customer-acquisition",
    num: "01",
    title: "Customer Acquisition",
    tagline: "Pipeline that scales",
    desc: "Generate, qualify, and convert high-intent customers through data-driven acquisition campaigns engineered around your target cost-per-acquisition (CPA) and monthly growth milestones.",
    outcomes: ["Qualified Opportunities", "Signed Retainers", "Predictable Pipeline", "Lower CPA"],
    workflows: ["Demand & funnel mapping", "Campaign architecture", "Qualification & routing", "Speed-to-lead execution", "Optimization & scale"],
    cta: "Build my acquisition pipeline",
  },
  {
    slug: "business-process-outsourcing",
    num: "02",
    title: "Business Process Outsourcing",
    tagline: "Your back office, handled",
    desc: "Trained offshore and nearshore teams to manage operations while your core team focuses on strategy — SDRs, BDRs, intake specialists, virtual assistants, and operations leads that feel native to your company.",
    outcomes: ["Dedicated BPO teams", "Lower operational cost", "Scale on demand", "Native team integration"],
    workflows: ["Role scoping", "Recruitment & vetting", "Training & calibration", "QA & coaching", "Performance SLAs"],
    cta: "Scale my operations team",
  },
  {
    slug: "digital-marketing",
    num: "03",
    title: "Digital Marketing",
    tagline: "Demand you can measure",
    desc: "Performance acquisition channels — paid media, search, social, and nurture — optimized strictly for pipeline velocity and bottom-line profit rather than vanity impressions.",
    outcomes: ["Measurable ROAS/ROI", "Qualified traffic", "Funnel growth", "LTV-driven budgets"],
    workflows: ["Channel strategy", "Creative & copy", "Paid media buying", "Landing & CRO", "Attribution reporting"],
    cta: "Launch measured campaigns",
  },
  {
    slug: "contact-center-solutions",
    num: "04",
    title: "Contact Center Solutions",
    tagline: "Every call answered well",
    desc: "Inbound customer care and outbound sales prospecting tailored to your exact compliance SLAs — from intake and live transfers to full omni-channel support at enterprise scale.",
    outcomes: ["Answered SLAs", "Warm live transfers", "High first-call resolution", "Compliant outreach"],
    workflows: ["IVR & routing design", "Script development", "Agent deployment", "Compliance monitoring", "Quality assurance"],
    cta: "Improve my contact center",
  },
  {
    slug: "remote-workforce-solutions",
    num: "05",
    title: "Remote Workforce Solutions",
    tagline: "Talent without the overhead",
    desc: "Vetted professionals who integrate seamlessly as a natural extension of your internal workforce — reducing recruiting, payroll, and management overhead while keeping quality high.",
    outcomes: ["Vetted talent", "Lower hiring cost", "Flexible ramp", "Managed support"],
    workflows: ["Workforce planning", "Candidate sourcing", "Screening & hiring", "Onboarding", "Ongoing management"],
    cta: "Build my remote team",
  },
  {
    slug: "crm-business-automation",
    num: "06",
    title: "CRM & Business Automation",
    tagline: "Plumbing that holds",
    desc: "End-to-end CRM implementation and business automations that synchronize your revenue engine — pipelines, triggers, nurture flows, and reporting connected into one unified system.",
    outcomes: ["Unified CRM", "Automated nurture", "Real-time reporting", "Zero manual drop-offs"],
    workflows: ["Stack audit", "CRM setup & migration", "Automation triggers", "Pipeline workflows", "Dashboards & BI"],
    cta: "Automate my revenue engine",
  },
];

export type Industry = {
  slug: string;
  title: string;
  tagline: string;
  compliance?: string;
  items: string[];
  overview: string;
  outcomes: string[];
  workflows: string[];
};

export const industries: Industry[] = [
  {
    slug: "legal",
    title: "Legal",
    tagline: "Case intake, claimant qualification, and signed retainers",
    compliance: "TCPA / ethical advertising",
    items: ["Personal Injury Intake", "MVA Claimants", "Mass Tort Litigation", "Legal Lead Intake", "Claimant Qualification", "Law Firm Appointment Setting"],
    overview: "Law firms win or lose on speed and qualification. ROM runs intake teams, claimant qualification, and retainer-setting pipelines for personal injury, mass tort, and MVA practices — so every call is answered fast, every claimant is qualified against your retainer criteria, and no case thing slips through the cracks.",
    outcomes: ["Faster speed-to-answer", "Qualified, signed retainers", "Ethical & TCPA-compliant outreach", "Mass tort claimant volume"],
    workflows: ["Intake & triage setup", "Claimant qualification", "Retainer-focused appointment setting", "Compliance & ethical screening", "Continuous optimization"],
  },
  {
    slug: "insurance",
    title: "Insurance",
    tagline: "Medicare, final expense, auto, and life campaigns",
    compliance: "TCPA / HIPAA",
    items: ["Medicare Advantage", "Final Expense", "Life Insurance", "Auto Insurance", "Compliant Transfer Gen", "Live Agent Transfers"],
    overview: "Insurance success is a compliance game played at scale. ROM builds verified, compliant campaigns across Medicare, final expense, auto, and life — qualifying interest first, then transferring only warm, confirmed leads to your licensed agents within their compliance windows.",
    outcomes: ["Verified, compliant transfers", "Warm live-agent transfers", "Medicare & AEP enrolment volume", "Higher transfer hold rates"],
    workflows: ["Compliance-first campaign design", "Lead verification & conditioning", "Live-agent transfer routing", "HIPAA & TCPA monitoring", "Performance optimization"],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    tagline: "Patient scheduling, eligibility checks, and intake",
    compliance: "HIPAA",
    items: ["Patient Scheduling", "BPO Admin Support", "Telehealth Onboarding", "Medical Billing Care", "Eligibility Checks", "Intake"],
    overview: "Patient-facing operations need care, speed, and absolute confidentiality. ROM provides scheduling, eligibility checks, telehealth onboarding, and BPO admin support handled by HIPAA-trained teams that feel like an extension of your practice.",
    outcomes: ["Filled appointment calendars", "Reduced admin burden", "HIPAA-compliant handling", "Telehealth onboarding at scale"],
    workflows: ["Patient scheduling & reminders", "Eligibility & benefits checks", "Telehealth onboarding", "BPO admin & documentation", "HIPAA-compliant workflows"],
  },
  {
    slug: "financial-services",
    title: "Financial Services",
    tagline: "Lending, debt relief, and advisory pipelines",
    compliance: "TCPA / TRID",
    items: ["Commercial Lending", "Debt Relief & Settlement", "Wealth Management", "Fintech Customer Acquisition", "Advisory Pipelines"],
    overview: "Financial services run on qualified inbound and disciplined compliance. ROM builds lending, debt-relief, and advisory pipelines that qualify prospects on affordability and intent before your advisers spend a single minute.",
    outcomes: ["Qualified advisory pipelines", "Compliant, intent-scored leads", "Lending & debt-relief volume", "Lower cost per qualified lead"],
    workflows: ["Affordability & intent scoring", "Compliant lead qualification", "Adviser appointment setting", "TRID & TCPA adherence", "Attribution reporting"],
  },
  {
    slug: "home-services",
    title: "HVAC, Solar & Trades",
    tagline: "Roofing, solar, HVAC, and remodeling demand",
    compliance: "TCPA",
    items: ["Roofing Contractors", "Solar Installers", "HVAC Specialists", "Remodeling & Additions", "Plumbing Teams", "Home Improvement Demand"],
    overview: "Home services live and die by booked jobs that actually show up. ROM generates homeowner-verified demand for roofing, solar, HVAC, remodeling, and plumbing — qualified and booked straight into your installers' diaries.",
    outcomes: ["Homeowner-verified appointments", "Booked installs that hold", "Lower no-show rates", "Predictable job pipeline"],
    workflows: ["Demand generation", "Homeowner qualification & verification", "Appointment booking", "Job-diary integration", "No-show & follow-up recovery"],
  },
  {
    slug: "home-integrity",
    title: "Home Integrity (HI)",
    tagline: "Certification, property inspections, and home-integrity givebacks",
    compliance: "TCPA",
    items: ["Home Integrity Certification", "Property Condition Reports", "System Audits (Roof, HVAC, Plumbing, Electrical)", "Pre-Inspection Qualification", "Certification Appointments", "Giveback & Buyback Campaigns"],
    overview: "Home Integrity (HI) pairs property condition certification with qualification-driven campaigns. ROM runs inspection, certification, and giveback programs that verify a home's condition, qualify homeowners for seller-funded upgrades, and route verified appointments to licensed inspectors — so certification volume connects directly to service revenue.",
    outcomes: ["Verified certification appointments", "Complete condition reports", "Seller-funded upgrade pipeline", "Higher close rates on repairs"],
    workflows: ["Condition intake & qualification", "Inspection scheduling", "Certification appointment setting", "Upgrade & giveback routing", "Quality & compliance monitoring"],
  },
  {
    slug: "real-estate",
    title: "Real Estate",
    tagline: "Realtor, wholesale, and motivated-seller lead systems",
    compliance: "TCPA",
    items: ["Realtor Lead Systems", "Motivated Seller Qualification", "Buyer Lead Generation", "Wholesale Deals", "Investor CRM Workflows", "Appointment Setting"],
    overview: "Real estate is won by whoever reaches the motivated seller first. ROM builds buyer and seller lead systems, qualifies motivated sellers, and runs investor CRM workflows — so your agents and wholesalers close more deals with less chasing.",
    outcomes: ["Motivated seller lists", "Qualified buyer pipeline", "More closed wholesale deals", "Investor CRM at scale"],
    workflows: ["Seller & buyer lead generation", "Motivated-seller qualification", "Investor CRM workflows", "Appointment scheduling", "Follow-up & deal tracking"],
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    tagline: "Tiered technical support, onboarding, and B2B",
    items: ["B2B SaaS Growth", "Tech Customer Support", "User Onboarding", "Product Lead Qualification", "Tiered Support"],
    overview: "Product teams would rather build than man queues. ROM covers B2B SaaS growth, tiered technical support, onboarding, and product-lead qualification so your team only talks to users who matter — and every user gets helped fast.",
    outcomes: ["Product-led growth pipeline", "Faster tier-1 resolution", "Higher activation & onboarding", "Qualified B2B conversations"],
    workflows: ["B2B outbound & qualification", "Tiered technical support", "User onboarding flows", "Product-lead scoring", "Escalation routing"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    tagline: "Consultancies, agencies, and B2B firms",
    items: ["B2B Enterprise Growth", "Management Consulting", "Corporate Agencies", "Executive Search Solutions"],
    overview: "Consultancies and agencies thrive on senior relationships — not lead spam. ROM runs outbound prospecting, scheduling, and client administration for professional-services firms, handing back only the conversations worth your principals' time.",
    outcomes: ["Senior B2B conversations", "Executive meeting pipeline", "Lower admin overhead", "Client administration at scale"],
    workflows: ["Senior-target outbound", "Executive scheduling", "Client & account admin", "B2B qualification", "Relationship-tracking CRM"],
  },
];

export type FrameworkStage = {
  num: string;
  title: string;
  desc: string;
  icon: string;
};

export const growthFramework: FrameworkStage[] = [
  { num: "01", title: "Connect", desc: "Capture and route every inbound — calls, chats, forms, and referrals — with speed-to-lead discipline so no opportunity goes cold.", icon: "connect" },
  { num: "02", title: "Gauge", desc: "Qualify each prospect against your exact criteria — intent, budget, fit, and timing — before a human minute is spent.", icon: "gauge" },
  { num: "03", title: "Convert", desc: "Turn qualified conversations into booked appointments and signed customers with trained closers, scripts, and SLAs.", icon: "convert" },
  { num: "04", title: "Scale", desc: "Systematize what works, add headcount on demand, and pour more volume into a predictable, compounding revenue engine.", icon: "scale" },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  { q: "What industries do you serve?", a: "We work across legal, insurance, healthcare, financial services, home services, technology & SaaS, and professional services — with our deepest benches in legal intake and insurance. Home Integrity (HI) certification is handled as its own dedicated vertical." },
  { q: "Do you customise every solution?", a: "Yes. There are no rigid packages. Every programme is scoped around your funnel, your qualification criteria, your systems, and the numbers you are measured on." },
  { q: "Can you integrate with our CRM?", a: "We integrate with Salesforce, HubSpot, Zoho, GoHighLevel, and most platforms with a REST API. Where no direct integration exists we build the middleware and hand it over documented." },
  { q: "Do we get a dedicated team?", a: "Dedicated agents work your account only, on your systems, with a named team lead and a QA analyst assigned. You interview and approve every placement." },
  { q: "How quickly can a programme launch?", a: "A standard campaign runs roughly two to three weeks from kickoff to live volume — scripting, recruitment, training, and a calibration pilot before we scale." },
  { q: "What is the minimum engagement size?", a: "Programmes typically start at five dedicated seats — the point at which supervision and quality assurance can be properly resourced." },
];
