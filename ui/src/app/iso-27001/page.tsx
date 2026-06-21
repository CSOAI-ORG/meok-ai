import type { Metadata } from "next";
import { ComplianceLander } from "@/components/compliance-lander";

export const metadata: Metadata = {
  title: "ISO/IEC 27001:2022 for AI · ISMS + AI risk treatment · MEOK AI Labs",
  description:
    "Build an ISO/IEC 27001:2022 information security management system that covers generative AI risks: model theft, prompt injection, training-data poisoning, and third-party AI supply chain.",
  alternates: { canonical: "https://meok.ai/iso-27001" },
  openGraph: {
    title: "ISO/IEC 27001:2022 for AI — ISMS + AI risk treatment",
    description: "ISO 27001 certification kit tailored to generative AI threats. Risk treatment, controls, and auditor-ready evidence.",
    type: "website",
    url: "https://meok.ai/iso-27001",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=ISO%2FIEC+27001%3A2022+for+AI&desc=ISMS+%2B+AI+risk+treatment",
        width: 1200,
        height: 630,
        alt: "ISO/IEC 27001:2022 for AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO/IEC 27001:2022 for AI — ISMS + AI risk treatment",
    description: "ISO 27001 certification kit tailored to generative AI threats. Risk treatment, controls, and auditor-ready evidence.",
    images: ["https://meok.ai/api/og?title=ISO%2FIEC+27001%3A2022+for+AI&desc=ISMS+%2B+AI+risk+treatment"],
  },
};

const PILLARS = [
  {
    title: "AI threat library & risk register",
    desc: "Pre-populated risk register with AI-specific threats: model exfiltration, prompt injection, training-data poisoning, supply-chain compromise, and insider misuse.",
  },
  {
    title: "ISO 27001:2022 control mapping",
    desc: "Every Annex A control mapped to AI assets, owners, evidence sources, and statement of applicability rationale.",
  },
  {
    title: "Supplier & model-provider governance",
    desc: "Due-diligence checklists and contract clauses for OpenAI, Anthropic, Google, AWS Bedrock, and open-weight model hosts.",
  },
  {
    title: "Internal audit programme",
    desc: "12-month audit schedule, checklists, and non-conformance tracker tuned to an AI-first ISMS.",
  },
];

const WHY = [
  "ISO 27001 is the global baseline for information security. Adding AI assets to the ISMS is now expected by certification bodies and enterprise customers.",
  "Generic ISMS templates treat AI as ‘just another SaaS’. They miss model weights, embeddings, prompt logs, and inference endpoints as critical assets.",
  "Certification bodies are asking how organisations manage AI supply-chain risk. The kit provides pre-written SoA justifications.",
  "A well-scoped ISMS accelerates SOC 2, GDPR, and ISO 42001 by reusing risk treatments and evidence.",
];

const FAQ = [
  {
    q: "Is ISO 27001 enough for AI security?",
    a: "ISO 27001 provides an excellent information security baseline, but it does not cover AI-specific governance such as model risk management, bias, explainability, or AI system lifecycle. Most organisations pair it with ISO/IEC 42001 for a complete AI management system.",
  },
  {
    q: "What AI assets belong in the ISMS asset inventory?",
    a: "Model weights, checkpoints, LoRA adapters, embeddings, prompt templates, inference endpoints, vector databases, training datasets, evaluation datasets, fine-tuning pipelines, and third-party API keys should all be classified and owned.",
  },
  {
    q: "How does the kit map to ISO 27001:2022 Annex A?",
    a: "We provide a Statement of Applicability with control-by-control applicability, implementation status, evidence references, and AI-specific notes. Organisations without an ISMS can use it as a starting point; those with an ISMS can use it as a gap fill.",
  },
  {
    q: "Can we use this alongside an existing ISMS?",
    a: "Yes. The kit is designed as a delta: AI risk treatment, AI asset inventory, and updated SoA justifications that integrate with your existing ISO 27001 management system.",
  },
  {
    q: "How long until we are certification-ready?",
    a: "For organisations with no prior ISMS, certification typically takes 6-12 months. With an existing ISMS, the AI delta can be addressed in 4-8 weeks using the kit.",
  },
];

const TIERS = [
  {
    name: "Quick Scope",
    price: "£9",
    sub: "one-time",
    desc: "AI asset inventory template and 20-question ISO 27001 + AI scope check.",
    cta: "Get £9 Quick Scope",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
  },
  {
    name: "ISO 27001 AI Kit",
    price: "£999",
    sub: "one-time",
    desc: "Threat library, risk register, SoA mapping, supplier governance pack, and one signed attestation.",
    cta: "Buy — £999",
    href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u",
    primary: true,
  },
  {
    name: "Audit-Prep Bundle",
    price: "£4,950",
    sub: "one-time",
    desc: "Kit + 2-day engagement + internal audit run + 90-day support.",
    cta: "Buy Audit-Prep — £4,950",
    href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X",
  },
  {
    name: "Enterprise",
    price: "£1,499",
    sub: "/month",
    desc: "Continuous ISMS monitoring, quarterly risk reviews, and unlimited attestations.",
    cta: "Talk sales — £1,499/mo",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
  },
];

const HOWTO = {
  name: "How to extend ISO 27001 to cover AI systems",
  steps: [
    { name: "Identify AI assets", text: "Inventory models, embeddings, prompts, datasets, endpoints, and suppliers. Classify confidentiality, integrity, and availability requirements." },
    { name: "Assess AI-specific threats", text: "Use the pre-populated threat library to evaluate prompt injection, model theft, poisoning, supply-chain, and insider risks." },
    { name: "Update the Statement of Applicability", text: "Map Annex A controls to AI assets, add implementation notes, and reference evidence locations." },
    { name: "Implement risk treatments", text: "Deploy access controls, monitoring, encryption, supplier clauses, and change management specific to AI assets." },
    { name: "Run internal audit & attestation", text: "Execute the AI-focused internal audit checklist, close non-conformances, and publish the HMAC-signed attestation." },
  ],
};

export default function ISO27001Page() {
  return (
    <ComplianceLander
      slug="/iso-27001"
      productName="ISO/IEC 27001:2022 for AI"
      productDescription="ISO 27001 information security management system kit with AI-specific risk treatment, controls, and auditor-ready evidence."
      productPrice="999"
      badge="Global security baseline"
      badgeVariant="blue"
      title={
        <>
          ISO 27001 was built for IT.
          <br />
          <span className="text-[#c9a84c]">We added the AI attack surface.</span>
        </>
      }
      subtitle="ISO/IEC 27001:2022 AI-ready kit — £999 one-time + £199/mo monitoring (optional)"
      lede="Certification bodies and enterprise buyers now expect AI assets — models, embeddings, prompts, inference endpoints — inside your ISMS. We provide the threat library, risk register, and Statement of Applicability to make it pass."
      alert={{
        title: "AI assets missing from most ISMS scopes",
        bullets: [
          <>Model weights and checkpoints are <strong>high-value intellectual property</strong>.</>,
          <>Prompt logs contain <strong>confidential and personal data</strong>.</>,
          <>Third-party model providers are <strong>critical suppliers</strong> requiring due diligence.</>,
          <>Embeddings and vector databases need <strong>integrity and access controls</strong>.</>,
        ],
        variant: "blue",
      }}
      ctas={[
        { label: "Book free readiness check", href: "mailto:nicholas@meok.ai?subject=ISO%2027001%20%2B%20AI%20readiness%20check", primary: true },
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
        text: "Building a full AI management system?",
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
