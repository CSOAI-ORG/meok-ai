import type { Metadata } from "next";
import { ComplianceLander } from "@/components/compliance-lander";

export const metadata: Metadata = {
  title: "HIPAA + AI Compliance Kit · PHI, BAAs, minimum necessary · MEOK AI Labs",
  description:
    "Use generative AI in healthcare without violating HIPAA. Business Associate Agreements, PHI minimisation, access controls, audit logs, and breach-notification workflows for AI systems.",
  alternates: { canonical: "https://meok.ai/hipaa" },
  openGraph: {
    title: "HIPAA + AI Compliance Kit — PHI, BAAs, minimum necessary",
    description: "HIPAA-compliant AI for healthcare. BAAs, PHI minimisation, access controls, audit logs, and breach workflows.",
    type: "website",
    url: "https://meok.ai/hipaa",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=HIPAA+%2B+AI+Compliance+Kit&desc=PHI+%C2%B7+BAA+%C2%B7+minimum+necessary",
        width: 1200,
        height: 630,
        alt: "HIPAA + AI Compliance Kit",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HIPAA + AI Compliance Kit — PHI, BAAs, minimum necessary",
    description: "HIPAA-compliant AI for healthcare. BAAs, PHI minimisation, access controls, audit logs, and breach workflows.",
    images: ["https://meok.ai/api/og?title=HIPAA+%2B+AI+Compliance+Kit&desc=PHI+%C2%B7+BAA+%C2%B7+minimum+necessary"],
  },
};

const PILLARS = [
  {
    title: "Business Associate Agreement (BAA) kit",
    desc: "BAA templates and checklists for OpenAI, Anthropic, Google Cloud, AWS Bedrock, Azure OpenAI, and specialty healthcare AI vendors.",
  },
  {
    title: "PHI minimisation & de-identification",
    desc: "Safe Harbour and Expert Determination workflows, prompt sanitisation, and PHI detection guardrails before any model call.",
  },
  {
    title: "Access controls & audit logs",
    desc: "Role-based access aligned to workforce clearance, immutable audit logs for every AI interaction, and automatic access reviews.",
  },
  {
    title: "Breach notification & risk assessment",
    desc: "Breach risk assessment worksheet, 60-day notification timeline tracker, and OCR-style incident documentation templates.",
  },
];

const WHY = [
  "Healthcare AI is high-risk under both HIPAA and the EU AI Act (most clinical applications are high-risk). Dual compliance is essential.",
  "Sending PHI to a generative AI model without a BAA is a HIPAA violation. The kit documents BAAs and subprocessor governance before go-live.",
  "Prompts and outputs can contain PHI. PHI minimisation and de-identification are required safeguards, not optional best practices.",
  "Breach penalties reach $1.5M per violation category per year. Documented compliance is the cheapest insurance.",
];

const FAQ = [
  {
    q: "Can I use ChatGPT with PHI?",
    a: "Only if you have a signed Business Associate Agreement (BAA) with the vendor and appropriate safeguards in place. The consumer version of ChatGPT does not offer a BAA and should not be used with PHI. Enterprise/healthcare tiers from some providers do offer BAAs.",
  },
  {
    q: "What is the minimum necessary standard?",
    a: "HIPAA requires covered entities and business associates to make reasonable efforts to limit PHI to the minimum necessary to accomplish the intended purpose. For AI, this means de-identification, prompt sanitisation, and limiting context windows.",
  },
  {
    q: "Does HIPAA apply to AI-generated summaries of medical records?",
    a: "Yes. If the input or output contains PHI, the entire workflow is subject to HIPAA. This includes summarisation, coding, prior-authorisation drafting, and clinical decision support.",
  },
  {
    q: "What is a Business Associate Agreement?",
    a: "A BAA is a contract between a covered entity and a business associate that establishes how PHI will be protected. AI vendors that process PHI on your behalf typically must sign a BAA.",
  },
  {
    q: "How does the kit help with a breach?",
    a: "The kit includes a breach risk assessment worksheet, a 60-day notification timeline, and templates for notifying affected individuals, HHS/OCR, and media where required.",
  },
];

const TIERS = [
  {
    name: "HIPAA Quick Scope",
    price: "£9",
    sub: "one-time",
    desc: "PHI flow checklist and 15-question HIPAA + AI scope test.",
    cta: "Get £9 Quick Scope",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
  },
  {
    name: "HIPAA + AI Kit",
    price: "£999",
    sub: "one-time",
    desc: "BAA templates, de-identification workflow, access controls, audit log spec, and one signed attestation.",
    cta: "Buy — £999",
    href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u",
    primary: true,
  },
  {
    name: "Audit-Prep Bundle",
    price: "£4,950",
    sub: "one-time",
    desc: "Kit + 2-day engagement + mock OCR review + 90-day support.",
    cta: "Buy Audit-Prep — £4,950",
    href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X",
  },
  {
    name: "Enterprise",
    price: "£1,499",
    sub: "/month",
    desc: "Continuous PHI monitoring, quarterly BAA refresh, incident response retainers, and unlimited attestations.",
    cta: "Talk sales — £1,499/mo",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
  },
];

const HOWTO = {
  name: "How to make a healthcare AI system HIPAA-compliant",
  steps: [
    { name: "Map PHI flows", text: "Identify every system that creates, receives, maintains, or transmits PHI, including prompts, embeddings, and model-provider clouds." },
    { name: "Execute BAAs", text: "Sign Business Associate Agreements with every vendor that touches PHI on your behalf." },
    { name: "Implement minimum necessary", text: "Deploy de-identification, prompt sanitisation, and context-limitation controls." },
    { name: "Lock down access and logging", text: "Enforce role-based access, audit every AI interaction, and run quarterly access reviews." },
    { name: "Prepare breach response", text: "Complete breach risk assessment templates and notification workflows before an incident occurs." },
  ],
};

export default function HIPAAPage() {
  return (
    <ComplianceLander
      slug="/hipaa"
      productName="HIPAA + AI Compliance Kit"
      productDescription="Business Associate Agreements, PHI minimisation, access controls, audit logs, and breach-notification workflows for healthcare AI systems."
      productPrice="999"
      badge="US healthcare privacy law"
      badgeVariant="green"
      title={
        <>
          Healthcare AI is powerful.
          <br />
          <span className="text-[#c9a84c]">Make it HIPAA-compliant.</span>
        </>
      }
      subtitle="HIPAA + AI Compliance Kit — £999 one-time + £199/mo monitoring (optional)"
      lede="Generative AI in healthcare must protect PHI, sign BAAs, enforce minimum necessary, and maintain audit trails. We provide the templates, workflows, and attestation to keep your AI legal."
      alert={{
        title: "HIPAA risks in healthcare AI",
        bullets: [
          <>Most clinical AI is <strong>high-risk under EU AI Act</strong> and regulated under HIPAA.</>,
          <>PHI in prompts or outputs requires a <strong>BAA</strong> with the model provider.</>,
          <><strong>Minimum necessary</strong> applies to every AI interaction.</>,
          <>Breach penalties reach <strong>$1.5M per category per year</strong>.</>,
        ],
        variant: "green",
      }}
      ctas={[
        { label: "Book free readiness check", href: "mailto:nicholas@meok.ai?subject=HIPAA%20%2B%20AI%20readiness%20check", primary: true },
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
        text: "Also need EU AI Act compliance for clinical AI?",
        href: "/eu-ai-act-for-healthcare",
        label: "See EU AI Act for healthcare",
      }}
      trustLine={
        <>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </>
      }
    />
  );
}
