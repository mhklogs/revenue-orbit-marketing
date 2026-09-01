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

export type IndustryService = {
  title: string;
  desc: string;
};

export type Industry = {
  slug: string;
  title: string;
  tagline: string;
  compliance?: string;
  items: string[];
  overview: string;
  context: string[];
  challenges: string[];
  services: IndustryService[];
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
    context: [
      "The legal industry is brutally competitive on intake. Personal injury and MVA firms spend heavily on TV, PPC, and direct mail — then lose up to half of every response because calls go unanswered, quotes take days, or claimants are never triaged. The firms that win are the ones that treat every call like a sales event, not an interruption.",
      "At the same time, the market is moving to ethical lead generation and compliant plaintiff outreach. Google and Facebook have cracked down on aggressive legal advertising, and consumers expect a consultation experience that feels modern. ROM sits exactly at that intersection: compliant acquisition plus credentialed intake agents who convert callers into signed retainers.",
      "For mass tort, the game is volume + verification — thousands of claimants screened, medically and causally qualified, and kept warm through the case life cycle. Practically every elite plaintiff practice now runs an offshore intake motion, and ROM runs it for them.",
    ],
    challenges: [
      "Missed calls at the exact moment a claimant is ready to switch attorney",
      "Slow qualification that lets competitors steal warm mass-tort volume",
      "Aggressive ad platforms banning firms over TCPA and ethical advertising violations",
      "Intake agents who gate-keep instead of selling the retainer conversation",
    ],
    services: [
      { title: "Personal Injury Intake", desc: "24/7 answering and triage for PI calls — case details captured, claimant qualified on incident, damages, and demand, and routed straight to a partner for signing." },
      { title: "MVA & Claimant Qualification", desc: "Motor-vehicle-accident claimant screening against your acceptance criteria, injury verification, and medical-link documentation before any attorney time is spent." },
      { title: "Mass Tort Client Acquisition", desc: "Compliant, high-volume claimant sourcing and screening for mass-tort case types — medical and causal qualification, documentation gathering, and warm case hand-off." },
      { title: "Legal Appointment Setting", desc: "Retainer-focused consultations booked into partner calendars with confirmed attendance, so your attorneys only meet people who are ready to sign." },
    ],
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
    context: [
      "Insurance distribution runs on transfers, not quotes. The economy of scale only works when your licensed agents spend their license time on the phone with warm, verified buyers instead of cold leads. Everything ROM does — from Medicare AEP dialing windows to final expense verification calls — is engineered to put verified interest in front of a licensed producer.",
      "Medicare alone is a compliance minefield: TPMO rules, the AEP 7-day transfer window, TCPA consent, and state marketing codes. The carriers and even Google will fine or ban campaigns that slip. ROM's whole programme is a compliance-first motion — recorded, monitored, and scrubbed at the source.",
      "Final expense and life insurance reward agents who talk to recently-buried or over-65 prospects who have already been told 'yes' on a verification call. ROM conditions those leads — affordability and need confirmed — before a single warm transfer is made.",
    ],
    challenges: [
      "Licensed agents burning hours on composed-dialer junk instead of warm transfers",
      "Medicare AEP and TPMO rules that change faster than campaigns can keep up",
      "Transfers that hang up the second a live agent answers — killing hold rates",
      "Consent and scrubbing gaps that turn into TCPA lawsuits and carrier fines",
    ],
    services: [
      { title: "Medicare Advantage & AEP", desc: "Compliant campaign architecture around the AEP window — verified interest, TCPA consent, and warm transfers that actually hold for licensed producers." },
      { title: "Final Expense Conditioning", desc: "Verification and conditioning of opt-in leads — affordability and need confirmed, decision-maker on the line — so agents only receive buyers ready to write." },
      { title: "Live Agent Transfer Generation", desc: "Qualified, pre-warmed conversations passed straight to your licensed agents with context notes, keeping transfer hold rates and placement above industry benchmarks." },
      { title: "Compliance Monitoring & Scrubbing", desc: "TCPA/HIPAA-aware dialing windows, Do-Not-Call suppression, consent capture, and full call recording and QA — your compliance exposure lives on our side of the fence." },
    ],
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
    context: [
      "Clinic and hospital operations drown in front-office tasks: phones ringing off the hook, eligibility checks before every visit, telehealth onboarding, and paperwork that follows patients everywhere. Every minute a clinical staff member spends on scheduling is a minute they are not treating a patient.",
      "ROM's healthcare BPO is built around HIPAA-safe delegation — scheduling and reminders, eligibility and benefits verification, intake documentation, and telehealth onboarding run by trained remote staff on your platforms, inside your compliance envelope.",
      "For practices expanding telehealth, the growth bottleneck is onboarding volume, not technology. ROM runs the welcome calls, the pre-visit paperwork, and the device/check-in support — so virtual visits actually happen at scale without a call center of your own.",
    ],
    challenges: [
      "Front desk overloaded — missed calls and double-booked calendars",
      "Eligibility errors that surface at the point of care and delay treatment",
      "Telehealth adoption stalled by weak patient onboarding",
      "HIPAA exposure from untrained or unmonitored support staff",
    ],
    services: [
      { title: "Patient Scheduling & Reminders", desc: "Full front-office phone coverage — appointments booked, rescheduled, and confirmed with call/text/email reminders to cut no-shows to a fraction." },
      { title: "Eligibility & Benefits Verification", desc: "Insurance eligibility and benefits confirmed before the visit, so surprises and denials never reach the point of care." },
      { title: "Telehealth Onboarding & Check-In", desc: "Step-by-step patient onboarding for virtual visits — link delivery, device help, and check-in — so telehealth capacity actually fills." },
      { title: "Medical Admin & Documentation BPO", desc: "Intake, medical records organization, claims follow-up support, and documentation handled by HIPAA-trained teams on your systems." },
    ],
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
    context: [
      "Lending, debt relief, and wealth management share one truth: every dollar of sales capacity is expensive and licensed. The only sustainable win is feeding that capacity highly-qualified inbound — prospects already scored on affordability, intent, and timing.",
      "The regulatory surface is dense — TCPA on every dial, TRID on mortgages, and a patchwork of state rules on debt settlement. ROM embeds compliance into the campaign design itself rather than bolting it on later, so quality never trades off against scale.",
      "Fintech is winning by knowing the customer early. ROM builds intent-scoring funnels across commercial lending, consumer debt, and advisory — turning a traffic problem into a revenue-quality problem, which is the one you can actually control.",
    ],
    challenges: [
      "Advisor time burned on unqualified, tire-kicking inbound",
      "Affordability questions that only surface too late in the funnel",
      "TRID/TCPA exposure from campaign structures that were never designed to be compliant",
      "Fintech growth capped by lead quality instead of traffic volume",
    ],
    services: [
      { title: "Lending Pipeline Development", desc: "Commercial and consumer lending funnels that pre-score applicants on affordability and intent before lender time is committed." },
      { title: "Debt Relief & Settlement Intake", desc: "Compliant intake and pre-qualification for debt-relief and settlement prospects, matched to state licensing and TCPA rules." },
      { title: "ADV / Advisory Appointment Setting", desc: "Wealth and advisory consultation booking — only prospects with real assets, real intent, and real timing reach your advisers." },
      { title: "Fintech Acquisition & Onboarding", desc: "Customer acquisition programmes for fintech products with qualification scoring, KYC-friendly intake, and onboarding flows." },
    ],
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
    context: [
      "Home services is a ticket-average business: roof, HVAC, solar, plumbing. The math only works when every truck roll is a paying job, which means the appointment has to be real — homeowner present, property verified, need confirmed — before anyone climbs into a van.",
      "The industry's biggest leak is no-shows. Contractors book leads nobody verified and eat the drive. ROM flips that by verifying the homeowner, the property, and the need on a live call before any job is booked into the diary.",
      "Solar and roofing specifically are consolidating around appointment quality — million-dollar marketing budgets wasted on cheap leads that never convert to install. Verified, homeowner-confirmed appointments are the currency the winners trade in.",
    ],
    challenges: [
      "No-shows that drain margin on every booked install",
      "Cheap leads that never convert after a live call",
      "Sales teams scouting locations nobody wants to buy",
      "Weather-dependent demand that wrecks pipeline predictability",
    ],
    services: [
      { title: "Homeowner Demand Generation", desc: "Pre-verified homeowner demand for roofing, solar, HVAC, plumbing, and remodeling — real people, real properties, real need." },
      { title: "Job Verification & Booking", desc: "Live homeowner verification plus confirmed appointment booking straight into your installers' and sales reps' diaries." },
      { title: "No-Show & Follow-Up Recovery", desc: "Reminder cadences, rescheduling, and show-up recovery calls that protect the margin on every slot booked." },
      { title: "Sales Appointment Setting", desc: "Confirmed in-home consultations for solar and roofing closers — only verified homeowners with the property and budget to say yes." },
    ],
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
    context: [
      "Home Integrity turns a property inspection into a revenue engine. A certified condition report — roof, HVAC, plumbing, electrical — gives homeowners a clear, trustworthy picture, and it gives service companies a seller-funded reason to act now.",
      "The HI model works when certification volume meets qualification: homeowners get a real report, and providers get pre-qualified upgrade conversations. ROM runs both halves — the inspection pipeline and the giveback routing — as one campaign.",
      "Giveback and buyback campaigns are where HI programmes make the step change. ROM qualifies homeowners for seller-funded upgrades and routes verified appointments to the right licensed provider, connecting certification directly to repair and replacement revenue.",
    ],
    challenges: [
      "Inspection volume that is not connected to upgrade revenue",
      "Homeowners on the phone who are not qualified for the programme",
      "Reports and appointments that stall between certification and giveback",
      "Providers competing for the same verified homeowner without the routing to match",
    ],
    services: [
      { title: "HI Certification Pipeline", desc: "End-to-end inspection and certification funnels — homeowners qualified, reports scheduled, and certification appointments confirmed." },
      { title: "Property & System Condition Intake", desc: "Roof, HVAC, plumbing, and electrical condition capture on the intake call so inspectors arrive knowing exactly what to audit." },
      { title: "Giveback & Buyback Qualification", desc: "Homeowner qualification for seller-funded upgrade programmes — eligibility and need confirmed before any certified provider is booked." },
      { title: "Provider Appointment Routing", desc: "Verified, qualified inspection and upgrade appointments routed to licensed providers with full context on the home's condition." },
    ],
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
    context: [
      "In real estate, speed to a motivated seller decides the deal. The investor who reaches the seller first with a credible, qualified offer wins — everyone else competes. ROM's seller qualification and VC (seller lead) workflows are built for exactly that race.",
      "Distressed, absentee, and motivated-seller leads are the engine of wholesale and fix-and-flip. The problem is volume without qualification: agents burn weeks on sellers who will never sell. ROM scores every seller on equity, motivation, and timing before a single conversation is scheduled.",
      "The modern investor runs on CRM discipline — speed-to-lead, consistent follow-up, and deal tracking. ROM sets up the investor CRM workflows AND feeds them with qualified sellers, so no lead dies in the pipeline.",
    ],
    challenges: [
      "Off-market sellers who go quiet between first call and conversation",
      "Wholesale teams underwater on leads that were never qualified",
      "Agents responding in days when the deal is decided in hours",
      "Investor CRMs full of leads but empty of process",
    ],
    services: [
      { title: "Motivated Seller Qualification", desc: "Every seller scored on equity, motivation, and timeline — selling reason, price expectation, and decision-maker confirmed on the first call." },
      { title: "Buyer & Off-Market Lead Generation", desc: "Off-market seller discovery and buyer lead systems that feed your CRM with deals no competitor has seen." },
      { title: "Wholesale Deal Setting", desc: "Qualified seller-to-investor introductions, with context notes, so your wholesalers show up to conversations worth having." },
      { title: "Investor CRM & Follow-Up Workflows", desc: "Speed-to-lead automation, follow-up cadences, and deal-tracking pipelines built so no qualified seller ever goes cold." },
    ],
    outcomes: ["Motivated seller lists", "Qualified buyer pipeline", "More closed wholesale deals", "Investor CRM at scale"],
    workflows: ["Seller & buyer lead generation", "Motivated-seller qualification", "Investor CRM workflows", "Appointment scheduling", "Follow-up & deal tracking"],
  },
  {
    slug: "technology-saas",
    title: "Technology & SaaS",
    tagline: "Tiered technical support, onboarding, and B2B",
    items: ["B2B SaaS Growth", "Tech Customer Support", "User Onboarding", "Product Lead Qualification", "Tiered Support"],
    overview: "Product teams would rather build than man queues. ROM covers B2B SaaS growth, tiered technical support, onboarding, and product-lead qualification so your team only talks to users who matter — and every user gets helped fast.",
    context: [
      "SaaS companies die on churn and onboarding gaps, not on engineering. When support queues pile up and onboarding stalls, users stop activating, NPS drops, and expansion revenue disappears. ROM's tech BPO puts trained product support in front of your users without putting a headcount on your books.",
      "Tiered support is a margin play: tier-1 tickets resolved by trained staff, tier-2 and 3 escalated with full context only when genuinely needed. ROM runs that stack — keeping your senior engineers on the roadmap, not the inbox.",
      "For B2B SaaS, growth is a pipeline discipline. Product-aware SDRs qualify product leads, talk to the right personas, and set meetings worth your founding team's time — a real B2B motion, not lead blasting.",
    ],
    challenges: [
      "Tier-1 tickets tattooing your senior engineers' calendars",
      "Onboarding drop-off that quietly kills activation and retention",
      "B2B leads sourced but never qualified to the right persona",
      "Support SLAs that slip as the customer base grows",
    ],
    services: [
      { title: "Tiered Technical Support", desc: "Tier-1 and tier-2 support on your product — trained agents resolving common tickets fast, escalating only what genuinely needs senior engineering." },
      { title: "User Onboarding & Activation", desc: "Onboarding calls, check-ins, and in-app guidance flows that move users from sign-up to activation and payback." },
      { title: "B2B SDR & Lead Qualification", desc: "Product-aware outbound and inbound qualification against your ICP — persona, intent, and budget confirmed before any sales meeting." },
      { title: "Product-Led Growth Coverage", desc: "Freemium and PQL funnels triaged at scale — limit-bumps, upgrade nudges, and support that converts free users into revenue." },
    ],
    outcomes: ["Product-led growth pipeline", "Faster tier-1 resolution", "Higher activation & onboarding", "Qualified B2B conversations"],
    workflows: ["B2B outbound & qualification", "Tiered technical support", "User onboarding flows", "Product-lead scoring", "Escalation routing"],
  },
  {
    slug: "professional-services",
    title: "Professional Services",
    tagline: "Consultancies, agencies, and B2B firms",
    items: ["B2B Enterprise Growth", "Management Consulting", "Corporate Agencies", "Executive Search Solutions"],
    overview: "Consultancies and agencies thrive on senior relationships — not lead spam. ROM runs outbound prospecting, scheduling, and client administration for professional-services firms, handing back only the conversations worth your principals' time.",
    context: [
      "Professional services sell by relationship, and relationships are built in senior conversations — not lead blasts. A consultancy's revenue runs on a handful of principal-led meetings a month, which is why the pipeline has to be surgically qualified before any principal's calendar is touched.",
      "The firm layer below the partners is expensive too: business development staff, client administration, research, and follow-up that quietly soak the margin on every engagement. ROM runs that admin and prospecting layer so senior people do senior work.",
      "Executive search and corporate agencies live on the same dynamic — a narrow, senior, decision-maker universe. ROM's outbound is built around that universe: right personas, researched approaches, and meetings set with the person who actually signs.",
    ],
    challenges: [
      "Principals' calendars eaten by prospecting and admin instead of client work",
      "B2B lists full of right titles at the wrong companies",
      "Executive search pipelines that stall at gatekeepers",
      "Agency and consultancy growth capped by managing partner bandwidth",
    ],
    services: [
      { title: "Senior-Targeted Outbound", desc: "Researched, personalised outbound to decision-makers — the right persona, at the right company, with the right reason to talk." },
      { title: "Executive & Consulting Scheduling", desc: "Meetings booked with conversations worth your principals' time, gated behind qualification that keeps gatekeepers out." },
      { title: "Client & Account Administration", desc: "Engagement follow-up, document coordination, and account admin handled for you so client work keeps moving." },
      { title: "B2B Relationship CRM", desc: "Relationship-tracking CRMs and cadences that turn one-off wins into recurring enterprise relationships." },
    ],
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
