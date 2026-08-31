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
};

export const industries: Industry[] = [
  { slug: "legal", title: "Legal", tagline: "Case intake, claimant qualification, and signed retainers", compliance: "TCPA / ethical advertising", items: ["Personal Injury Intake", "MVA Claimants", "Mass Tort Litigation", "Legal Lead Intake", "Claimant Qualification", "Law Firm Appointment Setting"] },
  { slug: "insurance", title: "Insurance", tagline: "Medicare, final expense, auto, and life campaigns", compliance: "TCPA / HIPAA", items: ["Medicare Advantage", "Final Expense", "Life Insurance", "Auto Insurance", "Compliant Transfer Gen", "Live Agent Transfers"] },
  { slug: "healthcare", title: "Healthcare", tagline: "Patient scheduling, eligibility checks, and intake", compliance: "HIPAA", items: ["Patient Scheduling", "BPO Admin Support", "Telehealth Onboarding", "Medical Billing Care", "Eligibility Checks", "Intake"] },
  { slug: "financial-services", title: "Financial Services", tagline: "Lending, debt relief, and advisory pipelines", compliance: "TCPA / TRID", items: ["Commercial Lending", "Debt Relief & Settlement", "Wealth Management", "Fintech Customer Acquisition", "Advisory Pipelines"] },
  { slug: "home-services", title: "Home Services", tagline: "Roofing, solar, HVAC, and remodeling demand", compliance: "TCPA", items: ["Roofing Contractors", "Solar Installers", "HVAC Specialists", "Remodeling & Additions", "Plumbing Teams", "Home Improvement Demand"] },
  { slug: "technology-saas", title: "Technology & SaaS", tagline: "Tiered technical support, onboarding, and B2B", items: ["B2B SaaS Growth", "Tech Customer Support", "User Onboarding", "Product Lead Qualification", "Tiered Support"] },
  { slug: "professional-services", title: "Professional Services", tagline: "Consultancies, agencies, and B2B firms", items: ["B2B Enterprise Growth", "Management Consulting", "Corporate Agencies", "Executive Search Solutions"] },
];
