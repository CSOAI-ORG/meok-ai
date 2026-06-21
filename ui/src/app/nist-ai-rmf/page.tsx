import type { Metadata } from "next";
import { ComplianceLander } from "@/components/compliance-lander";

export const metadata: Metadata = {
  title: "NIST AI RMF 1.0 + SP 800-218 · Govern, Map, Measure, Manage · MEOK AI Labs",
  description:
    "Implement the NIST AI Risk Management Framework (AI RMF 1.0) and SP 800-218 secure software practices for generative AI. Map Govern/Map/Measure/Manage functions to evidence.",
  alternates: { canonical: "https://meok.ai/nist-ai-rmf" },
  openGraph: {
    title: "NIST AI RMF 1.0 — Govern, Map, Measure, Manage for generative AI",
    description: "Implement NIST AI RMF and secure software practices with pre-built worksheets, metrics, and attestations.",
    type: "website",
    url: "https://meok.ai/nist-ai-rmf",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=NIST+AI+RMF+1.0&desc=Govern+%C2%B7+Map+%C2%B7+Measure+%C2%B7+Manage",
        width: 1200,
        height: 630,
        alt: "NIST AI RMF 1.0",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "NIST AI RMF 1.0 — Govern, Map, Measure, Manage for generative AI",
    description: "Implement NIST AI RMF and secure software practices with pre-built worksheets, metrics, and attestations.",
    images: ["https://meok.ai/api/og?title=NIST+AI+RMF+1.0&desc=Govern+%C2%B7+Map+%C2%B7+Measure+%C2%B7+Manage"],
  },
};

const PILLARS = [
  {
    title: "GOVERN — AI risk culture",
    desc: "Board accountability, risk tolerance statements, roles and responsibilities, and integration with enterprise risk management and legal review.",
  },
  {
    title: "MAP — context and risks",
    desc: "AI system categorisation, intended use, foreseeable misuse, stakeholder impact, and mapping of AI-specific risks to business processes.",
  },
  {
    title: "MEASURE — quantified risk",
    desc: "Pre-deployment validation, ongoing monitoring metrics, bias tests, robustness checks, red-teaming results, and third-party evaluation evidence.",
  },
  {
    title: "MANAGE — respond and recover",
    desc: "Risk response planning, incident response playbooks, human oversight procedures, and continuous improvement workflows.",
  },
];

const WHY = [
  "NIST AI RMF is the US government's flagship AI risk framework. Federal contractors and regulated industries are expected to align with it.",
  "SP 800-218 adds secure software development practices. Together they cover both AI risk and software supply-chain security.",
  "The framework is outcome-based, not prescriptive. Our worksheets turn the outcomes into actionable controls with evidence owners.",
  "Mapping NIST AI RMF to ISO 42001 and EU AI Act creates a single governance narrative for global customers.",
];

const FAQ = [
  {
    q: "What is the NIST AI RMF?",
    a: "The NIST AI Risk Management Framework (AI RMF 1.0) is a voluntary framework for managing risks from AI systems. It is organised around four functions: Govern, Map, Measure, and Manage.",
  },
  {
    q: "Is NIST AI RMF mandatory?",
    a: "No, it is voluntary. However, US federal agencies and contractors are directed to align with it under Executive Order 14110 and OMB M-24-10. Many enterprise buyers also request NIST alignment.",
  },
  {
    q: "How does it relate to NIST CSF and SP 800-218?",
    a: "NIST CSF covers organisational cybersecurity. SP 800-218 covers secure software development. AI RMF covers AI-specific risks. The three frameworks complement each other and share common governance language.",
  },
  {
    q: "What evidence does the kit produce?",
    a: "Completed worksheets for each RMF function, risk registers, measurement results, test logs, incident response playbooks, and an Ed25519-signed attestation of alignment.",
  },
  {
    q: "Can this replace an EU AI Act compliance programme?",
    a: "No. NIST AI RMF is risk-management focused and voluntary. The EU AI Act is a legal obligation with specific conformity requirements. The two align well and can share evidence, but one does not substitute for the other.",
  },
];

const TIERS = [
  {
    name: "RMF Quick Start",
    price: "£9",
    sub: "one-time",
    desc: "Self-assessment against the 60 AI RMF outcomes.",
    cta: "Get £9 Quick Start",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
  },
  {
    name: "NIST AI RMF Kit",
    price: "£999",
    sub: "one-time",
    desc: "GOVERN/MAP/MEASURE/MANAGE worksheets, risk register, metrics dashboard, and one signed attestation.",
    cta: "Buy — £999",
    href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u",
    primary: true,
  },
  {
    name: "Audit-Prep Bundle",
    price: "£4,950",
    sub: "one-time",
    desc: "Kit + 2-day engagement + red-team exercise + 90-day support.",
    cta: "Buy Audit-Prep — £4,950",
    href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X",
  },
  {
    name: "Enterprise",
    price: "£1,499",
    sub: "/month",
    desc: "Continuous risk measurement, quarterly workbook refresh, and unlimited attestations.",
    cta: "Talk sales — £1,499/mo",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
  },
];

const HOWTO = {
  name: "How to implement NIST AI RMF for a generative AI system",
  steps: [
    { name: "Establish governance", text: "Define AI risk roles, risk tolerance, and policies. Link to legal, security, and compliance functions." },
    { name: "Map the AI system context", text: "Document intended use, users, deployment environment, and foreseeable misuse scenarios." },
    { name: "Identify and analyse risks", text: "Map risks across fairness, privacy, security, robustness, transparency, and human-AI interaction." },
    { name: "Measure and test", text: "Run validation tests, bias audits, red-team exercises, and robustness evaluations. Record metrics." },
    { name: "Manage and monitor", text: "Implement response plans, human oversight, incident response, and continuous monitoring. Issue attestation." },
  ],
};

export default function NISTAIRMFPage() {
  return (
    <ComplianceLander
      slug="/nist-ai-rmf"
      productName="NIST AI RMF 1.0 Implementation Kit"
      productDescription="Implement NIST AI Risk Management Framework (GOVERN, MAP, MEASURE, MANAGE) and SP 800-218 secure software practices for generative AI."
      productPrice="999"
      badge="US federal AI risk framework"
      badgeVariant="blue"
      title={
        <>
          NIST AI RMF 1.0.
          <br />
          <span className="text-[#c9a84c]">From principles to proof.</span>
        </>
      }
      subtitle="NIST AI RMF + SP 800-218 kit — £999 one-time + £199/mo monitoring (optional)"
      lede="The NIST AI Risk Management Framework is the US standard for responsible AI. Our kit turns Govern, Map, Measure, and Manage into worksheets, metrics, and an auditor-ready attestation."
      alert={{
        title: "Why NIST AI RMF matters in 2026",
        bullets: [
          <>US federal contractors are <strong>expected to align</strong> under EO 14110 and OMB M-24-10.</>,
          <>Enterprise buyers request <strong>NIST RMF alignment</strong> in security reviews.</>,
          <>Maps cleanly to <strong>ISO 42001, EU AI Act, and SOC 2</strong>.</>,
          <>SP 800-218 adds <strong>secure software development</strong> evidence for AI supply chains.</>,
        ],
        variant: "blue",
      }}
      ctas={[
        { label: "Book free readiness check", href: "mailto:nicholas@meok.ai?subject=NIST%20AI%20RMF%20readiness%20check", primary: true },
        { label: "Compare ISO 42001", href: "/iso-42001" },
        { label: "See all protocols", href: "/protocols" },
      ]}
      pillars={PILLARS}
      why={WHY}
      faq={FAQ}
      tiers={TIERS}
      howTo={HOWTO}
      breadcrumbParent={{ name: "Protocols", href: "/protocols" }}
      crossLink={{
        text: "Need a certifiable AI management system?",
        href: "/iso-42001",
        label: "See the ISO 42001 AIMS kit",
      }}
      trustLine={
        <>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </>
      }
    />
  );
}
