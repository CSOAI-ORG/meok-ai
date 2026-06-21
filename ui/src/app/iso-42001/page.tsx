import type { Metadata } from "next";
import { ComplianceLander } from "@/components/compliance-lander";

export const metadata: Metadata = {
  title: "ISO/IEC 42001:2023 AIMS · AI management system certification · MEOK AI Labs",
  description:
    "Implement ISO/IEC 42001:2023 Artificial Intelligence Management System (AIMS). Risk assessment, AI policy, impact analysis, lifecycle controls, and auditor-ready evidence for certification.",
  alternates: { canonical: "https://meok.ai/iso-42001" },
  openGraph: {
    title: "ISO/IEC 42001:2023 AIMS — AI management system certification kit",
    description: "Implement ISO 42001 AIMS with pre-built risk assessments, policies, impact analyses, and evidence templates.",
    type: "website",
    url: "https://meok.ai/iso-42001",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=ISO%2FIEC+42001%3A2023+AIMS&desc=AI+management+system+certification+kit",
        width: 1200,
        height: 630,
        alt: "ISO/IEC 42001:2023 AIMS",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO/IEC 42001:2023 AIMS — AI management system certification kit",
    description: "Implement ISO 42001 AIMS with pre-built risk assessments, policies, impact analyses, and evidence templates.",
    images: ["https://meok.ai/api/og?title=ISO%2FIEC+42001%3A2023+AIMS&desc=AI+management+system+certification+kit"],
  },
};

const PILLARS = [
  {
    title: "AI policy & governance framework",
    desc: "Board-level AI policy, roles and responsibilities, and integration with ISO 27001, GDPR, EU AI Act, and SOC 2 governance structures.",
  },
  {
    title: "AI risk & impact assessment",
    desc: "Systematic risk assessment methodology with ISO/IEC 42005 impact-analysis templates, stakeholder mapping, and risk-treatment planning.",
  },
  {
    title: "AI system lifecycle controls",
    desc: "Controls across design, development, procurement, deployment, monitoring, retraining, and retirement of AI systems.",
  },
  {
    title: "Human oversight & continuous improvement",
    desc: "Human-in-the-loop procedures, performance metrics, incident response, management review, and corrective-action workflows.",
  },
];

const WHY = [
  "ISO 42001 is the first certifiable AI management system standard. Early adopters set the market expectation for responsible AI governance.",
  "It integrates cleanly with ISO 27001, ISO 9001, and GDPR — but it is not a substitute. AIMS fills the AI-specific governance gap those frameworks leave open.",
  "Enterprise RFPs are already asking for ISO 42001. Certification creates a procurement moat against competitors who only have generic security attestations.",
  "The EU AI Act and UK AI Bill both reward documented AI governance. ISO 42001 is the most direct way to demonstrate conformity with those obligations.",
];

const FAQ = [
  {
    q: "What is ISO/IEC 42001?",
    a: "ISO/IEC 42001:2023 is an international standard for establishing, implementing, maintaining, and continually improving an Artificial Intelligence Management System (AIMS). It is designed to help organisations develop and deploy AI responsibly.",
  },
  {
    q: "Is ISO 42001 required by the EU AI Act?",
    a: "No, but it is strongly aligned. The EU AI Act's quality management system, risk management, data governance, and technical documentation requirements map closely to ISO 42001 controls. Certification can serve as presumption of conformity for many governance obligations.",
  },
  {
    q: "How does ISO 42001 relate to ISO 27001?",
    a: "ISO 42001 covers AI governance, risk, and lifecycle management. ISO 27001 covers information security. They share the same Plan-Do-Check-Act structure and can be integrated into a single management system. We recommend ISO 27001 first, then ISO 42001.",
  },
  {
    q: "How long does certification take?",
    a: "Most organisations need 6-12 months to build the AIMS, run it for a management-review cycle, and complete a Stage 1 and Stage 2 audit. The kit compresses policy and documentation development to a few weeks.",
  },
  {
    q: "Does the kit include ISO/IEC 42005 impact assessment?",
    a: "Yes. The kit includes ISO/IEC 42005:2022 impact-analysis templates for organisational, societal, and individual impacts, aligned with the AIMS risk-assessment process.",
  },
];

const TIERS = [
  {
    name: "AIMS Quick Start",
    price: "£9",
    sub: "one-time",
    desc: "AI system inventory template and 15-question ISO 42001 readiness check.",
    cta: "Get £9 Quick Start",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
  },
  {
    name: "ISO 42001 AIMS Kit",
    price: "£999",
    sub: "one-time",
    desc: "AI policy, risk assessment, impact analysis, lifecycle controls, internal audit programme, and one attestation.",
    cta: "Buy — £999",
    href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u",
    primary: true,
  },
  {
    name: "Audit-Prep Bundle",
    price: "£4,950",
    sub: "one-time",
    desc: "Kit + 2-day engagement + mock Stage 1 audit + 90-day support.",
    cta: "Buy Audit-Prep — £4,950",
    href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X",
  },
  {
    name: "Enterprise",
    price: "£1,499",
    sub: "/month",
    desc: "Multi-system AIMS monitoring, quarterly management reviews, and unlimited attestations.",
    cta: "Talk sales — £1,499/mo",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
  },
];

const HOWTO = {
  name: "How to implement ISO 42001 AIMS in 5 steps",
  steps: [
    { name: "Define scope and AI system inventory", text: "Identify AI systems, their contexts, interested parties, and boundaries for the AIMS." },
    { name: "Establish AI policy and roles", text: "Publish board-approved AI policy, appoint AIMS roles, and align with ISO 27001 and EU AI Act governance." },
    { name: "Assess AI risks and impacts", text: "Run ISO 42005-aligned impact and risk assessments for each AI system. Document treatments and residual risk." },
    { name: "Deploy lifecycle controls", text: "Implement controls for data, model development, validation, deployment, monitoring, retraining, and retirement." },
    { name: "Audit and certify", text: "Complete internal audit, management review, corrective actions, and issue the signed readiness attestation ahead of the certification body audit." },
  ],
};

export default function ISO42001Page() {
  return (
    <ComplianceLander
      slug="/iso-42001"
      productName="ISO/IEC 42001:2023 AIMS Certification Kit"
      productDescription="Implement an ISO/IEC 42001 Artificial Intelligence Management System with policies, risk assessments, impact analyses, and auditor-ready evidence."
      productPrice="999"
      badge="First certifiable AI governance standard"
      badgeVariant="gold"
      title={
        <>
          ISO 42001 AIMS.
          <br />
          <span className="text-[#c9a84c]">The AI governance standard enterprise buyers ask for.</span>
        </>
      }
      subtitle="ISO/IEC 42001:2023 AIMS certification kit — £999 one-time + £199/mo monitoring (optional)"
      lede="ISO 42001 is the first certifiable AI management system. Our kit gives you the policy, risk assessment, impact analysis, and lifecycle controls to pass the audit — and win RFPs that competitors cannot."
      alert={{
        title: "Why ISO 42001 matters now",
        bullets: [
          <>First <strong>certifiable AI management system</strong> standard (2023).</>,
          <>Maps directly to <strong>EU AI Act quality management</strong> obligations.</>,
          <>Integrates with <strong>ISO 27001, ISO 9001, and SOC 2</strong>.</>,
          <>Enterprise RFPs are already requesting <strong>AIMS certification</strong>.</>,
        ],
        variant: "gold",
      }}
      ctas={[
        { label: "Book free readiness check", href: "mailto:nicholas@meok.ai?subject=ISO%2042001%20AIMS%20readiness%20check", primary: true },
        { label: "Compare ISO 27001", href: "/iso-27001" },
        { label: "See all protocols", href: "/protocols" },
      ]}
      pillars={PILLARS}
      why={WHY}
      faq={FAQ}
      tiers={TIERS}
      howTo={HOWTO}
      breadcrumbParent={{ name: "Protocols", href: "/protocols" }}
      crossLink={{
        text: "Need information security first?",
        href: "/iso-27001",
        label: "See the ISO 27001 kit",
      }}
      trustLine={
        <>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </>
      }
    />
  );
}
