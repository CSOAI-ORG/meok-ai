import type { Metadata } from "next";
import { ComplianceLander } from "@/components/compliance-lander";

export const metadata: Metadata = {
  title: "SOC 2 Type II for AI Systems · Fast-track trust audit · MEOK AI Labs",
  description:
    "SOC 2 Type II attestation for AI companies: map security, availability, confidentiality, and privacy trust services criteria to your generative AI stack. Evidence pack + auditor-ready controls.",
  alternates: { canonical: "https://meok.ai/soc2" },
  openGraph: {
    title: "SOC 2 Type II for AI Systems — Evidence pack + auditor-ready controls",
    description: "Fast-track SOC 2 Type II attestation for AI companies. Security, availability, confidentiality, and privacy criteria mapped to generative AI.",
    type: "website",
    url: "https://meok.ai/soc2",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=SOC+2+Type+II+for+AI+Systems&desc=Fast-track+trust+audit+%C2%B7+auditor-ready+controls",
        width: 1200,
        height: 630,
        alt: "SOC 2 Type II for AI Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOC 2 Type II for AI Systems — Evidence pack + auditor-ready controls",
    description: "Fast-track SOC 2 Type II attestation for AI companies. Security, availability, confidentiality, and privacy criteria mapped to generative AI.",
    images: ["https://meok.ai/api/og?title=SOC+2+Type+II+for+AI+Systems&desc=Fast-track+trust+audit+%C2%B7+auditor-ready+controls"],
  },
};

const PILLARS = [
  {
    title: "CC6.1 + CC6.6 access & change control",
    desc: "Identity governance, least-privilege role matrix, and immutable change logs for model deployments, prompt templates, and infrastructure.",
  },
  {
    title: "CC7.2 anomaly detection for AI",
    desc: "Monitoring rules tuned to generative AI risks: prompt injection spikes, data exfiltration patterns, model drift, and unauthorised API keys.",
  },
  {
    title: "CC8.1 change management",
    desc: "Versioned model releases, rollback playbooks, signed attestation per deployment, and automated evidence collection for the audit window.",
  },
  {
    title: "Privacy & confidentiality mapping",
    desc: "Data classification, retention schedules, encryption at rest and in transit, and sub-processor governance aligned to SOC 2 privacy criteria.",
  },
];

const WHY = [
  "Enterprise buyers now require SOC 2 Type II before procurement. A ‘SOC 2 in progress’ slide no longer closes deals.",
  "AI systems add novel controls: prompt injection, model supply chain, training data provenance, and hallucination monitoring. Generic SOC 2 templates miss them.",
  "Audit windows are 3-12 months. Front-loading evidence collection shortens the observation period and reduces auditor follow-ups.",
  "A single failed control can restart the clock. The kit ties every TSC to pre-written policies, evidence owners, and automated tests.",
];

const FAQ = [
  {
    q: "Does SOC 2 apply to AI companies?",
    a: "Yes. SOC 2 applies to any organisation that stores, processes, or transmits customer data. For AI companies, the audit scope must include model hosting, prompt logging, inference APIs, training data handling, and third-party model providers.",
  },
  {
    q: "How long does SOC 2 Type II take?",
    a: "Type I can be achieved in 4-8 weeks. Type II requires an observation period of at least 3 months (often 6-12 months). The kit compresses readiness by providing pre-mapped controls, policies, and evidence templates.",
  },
  {
    q: "Which trust services categories are covered?",
    a: "The kit covers Security (common criteria), Availability, Confidentiality, and Privacy. Processing Integrity is available as an add-on for systems that perform automated transactions or calculations.",
  },
  {
    q: "Can MEOK integrate with our existing compliance tooling?",
    a: "Yes. We export evidence to Vanta, Drata, Sprinto, AuditBoard, and ServiceNow GRC formats. The HMAC-signed attestation can also be referenced directly in your trust centre.",
  },
  {
    q: "What evidence does the auditor actually see?",
    a: "Policy documents, access reviews, change tickets, monitoring screenshots, penetration-test results, encryption certificates, sub-processor agreements, and signed control attestations. The kit organises these by TSC and audit period.",
  },
];

const TIERS = [
  {
    name: "SOC 2 Quick Start",
    price: "£9",
    sub: "one-time",
    desc: "30-question readiness assessment and a one-page gap summary.",
    cta: "Get £9 Quick Start",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
  },
  {
    name: "SOC 2 Type II Kit",
    price: "£999",
    sub: "one-time",
    desc: "Pre-mapped controls, policies, evidence templates, and one signed readiness attestation.",
    cta: "Buy — £999",
    href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u",
    primary: true,
  },
  {
    name: "Audit-Prep Bundle",
    price: "£4,950",
    sub: "one-time",
    desc: "Kit + 2-day engagement + mock auditor review + 90-day support.",
    cta: "Buy Audit-Prep — £4,950",
    href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X",
  },
  {
    name: "Enterprise",
    price: "£1,499",
    sub: "/month",
    desc: "Continuous control monitoring, quarterly evidence refresh, and unlimited attestations.",
    cta: "Talk sales — £1,499/mo",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
  },
];

const HOWTO = {
  name: "How to achieve SOC 2 Type II for an AI system",
  steps: [
    { name: "Run the readiness gap assessment", text: "Answer 30 AI-specific questions across the trust services criteria. Receive a prioritised gap report." },
    { name: "Implement pre-mapped controls", text: "Deploy policy templates, access reviews, change management, and monitoring rules aligned to your AI stack." },
    { name: "Collect evidence automatically", text: "Connect your identity, cloud, and model providers to gather timestamped evidence for the audit window." },
    { name: "Complete the mock audit", text: "Walk through auditor-style evidence requests and fix control gaps before the formal review." },
    { name: "Issue the attestation", text: "Generate the HMAC-signed SOC 2 readiness attestation and publish it to your trust centre." },
  ],
};

export default function SOC2Page() {
  return (
    <ComplianceLander
      slug="/soc2"
      productName="SOC 2 Type II for AI Systems"
      productDescription="Fast-track SOC 2 Type II attestation for AI companies with pre-mapped trust services criteria, policies, and evidence templates."
      productPrice="999"
      badge="Enterprise procurement gate"
      badgeVariant="green"
      title={
        <>
          SOC 2 Type II for AI systems.
          <br />
          <span className="text-[#c9a84c]">Close enterprise deals faster.</span>
        </>
      }
      subtitle="SOC 2 Type II readiness kit — £999 one-time + £199/mo monitoring (optional)"
      lede="Enterprise buyers demand SOC 2 Type II. We map every trust services criterion to the realities of generative AI — prompt injection, model supply chain, inference monitoring, and data residency — so your audit passes the first time."
      alert={{
        title: "AI-specific controls auditors now ask for",
        bullets: [
          <>Prompt injection and <strong>adversarial-input monitoring</strong>.</>,
          <>Model supply-chain provenance (<strong>SBOM + SLSA</strong>).</>,
          <>Training-data <strong>privacy and confidentiality</strong> classification.</>,
          <>Hallucination and <strong>output drift detection</strong> for high-stakes use cases.</>,
        ],
        variant: "green",
      }}
      ctas={[
        { label: "Book free readiness check", href: "mailto:nicholas@meok.ai?subject=SOC%202%20Type%20II%20readiness%20check", primary: true },
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
        text: "Need an information-security baseline first?",
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
