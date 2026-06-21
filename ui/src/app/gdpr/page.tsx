import type { Metadata } from "next";
import { ComplianceLander } from "@/components/compliance-lander";

export const metadata: Metadata = {
  title: "GDPR + AI Compliance Kit · DPIA, lawful basis, cross-border transfers · MEOK AI Labs",
  description:
    "Generative AI triggers GDPR obligations: lawful basis, DPIA, automated decision-making, data minimisation, and Chapter V transfers. MEOK's GDPR + AI Compliance Kit maps every obligation to evidence in days.",
  alternates: { canonical: "https://meok.ai/gdpr" },
  openGraph: {
    title: "GDPR + AI Compliance Kit — DPIA to cross-border transfers",
    description: "Map every GDPR obligation for generative AI to auditor-ready evidence. £999 one-time or £199/mo ongoing.",
    type: "website",
    url: "https://meok.ai/gdpr",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=GDPR+%2B+AI+Compliance+Kit&desc=DPIA+%C2%B7+lawful+basis+%C2%B7+cross-border+transfers",
        width: 1200,
        height: 630,
        alt: "GDPR + AI Compliance Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR + AI Compliance Kit — DPIA to cross-border transfers",
    description: "Map every GDPR obligation for generative AI to auditor-ready evidence. £999 one-time or £199/mo ongoing.",
    images: ["https://meok.ai/api/og?title=GDPR+%2B+AI+Compliance+Kit&desc=DPIA+%C2%B7+lawful+basis+%C2%B7+cross-border+transfers"],
  },
};

const PILLARS = [
  {
    title: "Lawful basis & purpose limitation",
    desc: "We map each AI use-case to the correct Article 6 lawful basis, document purpose limitation, and flag re-purposing risks before the ICO does.",
  },
  {
    title: "DPIA & high-risk processing",
    desc: "Template Data Protection Impact Assessment tailored to generative AI: model training data, prompt retention, inference logs, and automated decision-making.",
  },
  {
    title: "Cross-border transfer evidence",
    desc: "Chapter V transfer mechanisms (SCCs, IDTA, Binding Corporate Rules) mapped to hosting location, sub-processor list, and model-provider jurisdictions.",
  },
  {
    title: "Data subject rights automation",
    desc: "Erasure, portability, and access workflows wired to your memory layer. Right-to-explanation annotations for consequential automated decisions.",
  },
];

const WHY = [
  "Generative AI systems process personal data at every layer — prompts, embeddings, fine-tuning, feedback. GDPR applies even when no ‘training’ happens.",
  "Fines hit 4% of global turnover or €20M. The ICO, CNIL, and Irish DPC have already opened AI-related cases. Evidence beats policy slides.",
  "A lawful basis gap discovered mid-audit adds 6-12 weeks. The kit front-loads the analysis so due diligence passes the first time.",
  "Cross-border AI inference is a transfer. If your model provider hosts in the US, you need documented Chapter V safeguards.",
];

const FAQ = [
  {
    q: "Does GDPR apply to AI-generated output?",
    a: "Yes. If the output contains or is derived from personal data — for example, a summary of a customer record, a recommendation, or a profile — GDPR obligations follow the data. Even synthetic data that can be reverse-engineered to identify an individual may be in scope.",
  },
  {
    q: "What is a GDPR DPIA for AI?",
    a: "A Data Protection Impact Assessment under GDPR Article 35 evaluates necessity, proportionality, risks to rights and freedoms, and mitigation measures. For AI, it must cover training data provenance, prompt logging, model inference, automated decision-making, and data subject rights.",
  },
  {
    q: "How do cross-border transfers affect AI systems?",
    a: "If personal data leaves the UK/EEA — including to a model provider's US cloud for inference — you need a transfer mechanism such as Standard Contractual Clauses (SCCs), an International Data Transfer Agreement (IDTA), or Binding Corporate Rules. The kit documents the mechanism per data flow.",
  },
  {
    q: "Can MEOK help with data subject access requests?",
    a: "Yes. The kit includes DSAR workflow templates and, for MEOK-hosted systems, automated retrieval of an individual's data across prompts, memories, and outputs. Erasure and portability are tracked with tamper-evident audit logs.",
  },
  {
    q: "How long does implementation take?",
    a: "Most organisations complete the initial gap analysis and DPIA in 5-10 working days. Full workflow integration with existing ticketing and identity systems typically takes 2-4 weeks.",
  },
];

const TIERS = [
  {
    name: "Quick Kit",
    price: "£9",
    sub: "one-time",
    desc: "Self-serve lawful-basis checklist and 12-question GDPR + AI scope test.",
    cta: "Get £9 Quick Kit",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
  },
  {
    name: "GDPR + AI Kit",
    price: "£999",
    sub: "one-time",
    desc: "DPIA template, transfer mapping, DSAR workflows, and one signed conformity attestation.",
    cta: "Buy — £999",
    href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u",
    primary: true,
  },
  {
    name: "Pro",
    price: "£199",
    sub: "/month",
    desc: "Continuous control monitoring, quarterly DPIA refresh, and new regulator guidance tracking.",
    cta: "Subscribe — £199/mo",
    href: "https://buy.stripe.com/eVq14p1BWcMO4c59mE8k91T",
  },
  {
    name: "Enterprise",
    price: "£1,499",
    sub: "/month",
    desc: "Multi-tenant, custom lawful-basis logic, DPO support integrations, and unlimited attestations.",
    cta: "Talk sales — £1,499/mo",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
  },
];

const HOWTO = {
  name: "How to become GDPR-compliant for AI in 5 steps",
  steps: [
    { name: "Scope your AI data flows", text: "Inventory every system that ingests, embeds, or outputs personal data. Tag lawful basis, retention, and jurisdiction." },
    { name: "Run the DPIA", text: "Complete the AI-tailored Data Protection Impact Assessment. Document risks, mitigations, and residual risk acceptance." },
    { name: "Fix transfer mechanisms", text: "Map each cross-border flow to SCCs, IDTA, or BCRs. Update sub-processor agreements and privacy notices." },
    { name: "Wire DSAR workflows", text: "Connect subject access, erasure, and portability requests to your data stores with audit logging." },
    { name: "Generate the attestation", text: "Produce the HMAC-signed GDPR conformity statement and publish the verification URL for auditors and customers." },
  ],
};

export default function GDPRPage() {
  return (
    <ComplianceLander
      slug="/gdpr"
      productName="GDPR + AI Compliance Kit"
      productDescription="DPIA, lawful basis, data subject rights, and cross-border transfer documentation for generative AI systems."
      productPrice="999"
      badge="In force since 2018 · sharpened by AI"
      badgeVariant="blue"
      title={
        <>
          GDPR was not written for AI.
          <br />
          <span className="text-[#c9a84c]">Your evidence pack should be.</span>
        </>
      }
      subtitle="GDPR + AI Compliance Kit — £999 one-time + £199/mo monitoring (optional)"
      lede="Generative AI triggers GDPR at every layer: prompts, embeddings, fine-tuning, and outputs. We map lawful basis, DPIA, automated decision-making, and Chapter V transfers to auditor-ready evidence in days."
      alert={{
        title: "Why AI changes the GDPR risk profile",
        bullets: [
          <>Prompts and outputs are <strong>personal data</strong> when they identify or infer individuals.</>,
          <>Inference in a third-country cloud is a <strong>cross-border transfer</strong> requiring Chapter V safeguards.</>,
          <>Consequential automated decisions trigger <strong>Article 22</strong> rights and explanations.</>,
          <>Fines reach <strong>4% of global turnover</strong> or €20 million, whichever is higher.</>,
        ],
        variant: "blue",
      }}
      ctas={[
        { label: "Book free readiness check", href: "mailto:nicholas@meok.ai?subject=GDPR%20%2B%20AI%20readiness%20check", primary: true },
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
        text: "Need a broader AI governance framework?",
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
