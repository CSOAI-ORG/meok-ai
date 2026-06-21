import type { Metadata } from "next";
import { ComplianceLander } from "@/components/compliance-lander";

export const metadata: Metadata = {
  title: "EU Cyber Resilience Act (CRA) · AI + software compliance kit · MEOK AI Labs",
  description:
    "The EU Cyber Resilience Act imposes security-by-design, vulnerability handling, and CE-marking obligations on software and AI products placed on the EU market. MEOK's CRA kit maps every requirement to evidence.",
  alternates: { canonical: "https://meok.ai/cra" },
  openGraph: {
    title: "EU Cyber Resilience Act (CRA) — AI + software compliance kit",
    description: "Meet EU CRA security-by-design, vulnerability handling, and CE-marking obligations with pre-mapped controls and attestations.",
    type: "website",
    url: "https://meok.ai/cra",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=EU+Cyber+Resilience+Act+%28CRA%29&desc=AI+%2B+software+compliance+kit",
        width: 1200,
        height: 630,
        alt: "EU Cyber Resilience Act (CRA)",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EU Cyber Resilience Act (CRA) — AI + software compliance kit",
    description: "Meet EU CRA security-by-design, vulnerability handling, and CE-marking obligations with pre-mapped controls and attestations.",
    images: ["https://meok.ai/api/og?title=EU+Cyber+Resilience+Act+%28CRA%29&desc=AI+%2B+software+compliance+kit"],
  },
};

const PILLARS = [
  {
    title: "Product classification & CE pathway",
    desc: "Classify your software or AI product under CRA risk tiers, determine applicable essential requirements, and build the technical documentation for CE marking.",
  },
  {
    title: "Security-by-design & secure development",
    desc: "Threat modelling, secure coding practices, SBOM generation, SLSA provenance, and Sigstore signing aligned to CRA Annex I.",
  },
  {
    title: "Vulnerability handling & incident reporting",
    desc: "Coordinated vulnerability disclosure process, ENISA reporting timelines, and automated CVE/CISA KEV monitoring for dependencies.",
  },
  {
    title: "Transparency & update obligations",
    desc: "Support lifecycle documentation, automatic update mechanisms, and user-facing security information required for products with digital elements.",
  },
];

const WHY = [
  "The EU Cyber Resilience Act is in force. Non-compliance blocks products from the EU market and exposes manufacturers to fines up to €15 million or 2.5% of global turnover.",
  "AI products with digital elements are explicitly in scope. The CRA adds cybersecurity obligations on top of the EU AI Act's risk-management requirements.",
  "CE marking under CRA requires technical documentation, vulnerability handling, and security updates — not just a one-time pentest.",
  "The kit reuses your existing SBOM, SLSA, and Sigstore evidence from MEOK's supply-chain MCPs, so you don't duplicate work.",
];

const FAQ = [
  {
    q: "Does the CRA apply to AI products?",
    a: "Yes. The CRA applies to any product with digital elements placed on the EU market, including software, embedded systems, and AI-powered applications. AI products may also be subject to the EU AI Act; the two frameworks overlap on risk management, documentation, and security.",
  },
  {
    q: "When do CRA obligations start?",
    a: "The CRA entered into force in December 2024. The first reporting and vulnerability-handling obligations apply from September 2026, with full CE-marking requirements from December 2027.",
  },
  {
    q: "What are the risk classes?",
    a: "CRA classifies products into default (non-critical) and critical categories, with critical further split into Class I and Class II based on importance and cyber risk. Critical products require third-party conformity assessment; default products can self-assess.",
  },
  {
    q: "What is the penalty for non-compliance?",
    a: "Penalties can reach €15 million or 2.5% of global annual turnover for certain infringements, with higher penalties for critical-product violations. Market surveillance authorities can also prohibit or recall non-compliant products.",
  },
  {
    q: "How does the kit integrate with EU AI Act work?",
    a: "The CRA kit shares evidence with our EU AI Act and ISO 42001 kits: risk management, technical documentation, SBOM, vulnerability handling, and post-market monitoring. Customers using multiple kits get a unified evidence vault.",
  },
];

const TIERS = [
  {
    name: "CRA Quick Scope",
    price: "£9",
    sub: "one-time",
    desc: "Product classification questionnaire and essential-requirements gap summary.",
    cta: "Get £9 Quick Scope",
    href: "https://buy.stripe.com/9B68wR6WgfZ0gYR8iA8k91W",
  },
  {
    name: "CRA Compliance Kit",
    price: "£999",
    sub: "one-time",
    desc: "Classification guide, security-by-design templates, vulnerability handling policy, technical documentation pack, and one attestation.",
    cta: "Buy — £999",
    href: "https://buy.stripe.com/4gM3cx0xScMOdMFfL28k91u",
    primary: true,
  },
  {
    name: "Audit-Prep Bundle",
    price: "£4,950",
    sub: "one-time",
    desc: "Kit + 2-day engagement + CE technical file review + 90-day support.",
    cta: "Buy Audit-Prep — £4,950",
    href: "https://buy.stripe.com/28E6oJ94ofZ0aAt1Uc8k91X",
  },
  {
    name: "Enterprise",
    price: "£1,499",
    sub: "/month",
    desc: "Continuous vulnerability monitoring, SBOM refresh, incident reporting workflows, and unlimited attestations.",
    cta: "Talk sales — £1,499/mo",
    href: "https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U",
  },
];

const HOWTO = {
  name: "How to comply with the EU Cyber Resilience Act",
  steps: [
    { name: "Classify your product", text: "Determine whether your product with digital elements is default or critical (Class I/II) and identify the applicable essential requirements." },
    { name: "Implement security-by-design", text: "Threat model the product, apply secure development practices, generate SBOMs, and sign artifacts with Sigstore/SLSA provenance." },
    { name: "Build vulnerability handling", text: "Create a coordinated disclosure process, define patching SLAs, and monitor dependencies for CVEs and CISA KEV entries." },
    { name: "Prepare technical documentation", text: "Compile design documentation, risk assessment, test reports, and user security information for CE marking." },
    { name: "Issue declaration and attestation", text: "Draw up the EU declaration of conformity, affix CE marking, and publish the MEOK-signed CRA compliance attestation." },
  ],
};

export default function CRAPage() {
  return (
    <ComplianceLander
      slug="/cra"
      productName="EU Cyber Resilience Act (CRA) Compliance Kit"
      productDescription="Meet EU CRA obligations for software and AI products with security-by-design, vulnerability handling, SBOM, and CE-marking documentation."
      productPrice="999"
      badge="In force · CE marking from Dec 2027"
      badgeVariant="red"
      title={
        <>
          The EU Cyber Resilience Act
          <br />
          <span className="text-[#c9a84c]">is now a market-access gate.</span>
        </>
      }
      subtitle="CRA compliance kit — £999 one-time + £199/mo monitoring (optional)"
      lede="AI products with digital elements must be secure-by-design, vulnerability-managed, and CE-marked to enter the EU market. We map every CRA essential requirement to controls, evidence, and a signed attestation."
      alert={{
        title: "CRA timeline and penalties",
        bullets: [
          <><strong>Dec 2024:</strong> Cyber Resilience Act entered into force.</>,
          <><strong>Sep 2026:</strong> Reporting and vulnerability-handling obligations apply.</>,
          <><strong>Dec 2027:</strong> Full CE-marking requirements for products with digital elements.</>,
          <><strong>Penalties:</strong> up to <strong>€15M or 2.5% global turnover</strong>, plus market recall.</>,
        ],
        variant: "red",
      }}
      ctas={[
        { label: "Book free readiness check", href: "mailto:nicholas@meok.ai?subject=EU%20CRA%20readiness%20check", primary: true },
        { label: "Compare EU AI Act", href: "/eu-ai-act" },
        { label: "See all protocols", href: "/protocols" },
      ]}
      pillars={PILLARS}
      why={WHY}
      faq={FAQ}
      tiers={TIERS}
      howTo={HOWTO}
      breadcrumbParent={{ name: "Protocols", href: "/protocols" }}
      crossLink={{
        text: "Also subject to the EU AI Act?",
        href: "/eu-ai-act",
        label: "See the EU AI Act guide",
      }}
      trustLine={
        <>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </>
      }
    />
  );
}
