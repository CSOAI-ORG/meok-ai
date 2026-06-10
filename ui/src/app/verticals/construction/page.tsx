import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCP for Construction & Plant Hire · GrabHire + PlantHire AI",
  description:
    "Your fleet management SaaS needs MCP before 2027. 48h readiness assessment, MCP server architecture, EU AI Act compliance, and HMAC-signed attestations for construction equipment hire.",
  alternates: { canonical: "https://meok.ai/verticals/construction" },
  openGraph: {
    title: "MCP for Construction & Plant Hire · MEOK AI Labs",
    description:
      "Construction equipment hire is a £6B+ UK market. MCP-first architecture enables AI agents to manage fleet matching, route optimization, and compliance verification.",
    type: "website",
    url: "https://meok.ai/verticals/construction",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const DELIVERABLES = [
  {
    title: "48h MCP readiness assessment",
    desc: "Full audit of your fleet management stack. We map every API, database, and workflow to MCP tool/resource/prompt primitives. You get a ranked implementation roadmap within two business days.",
  },
  {
    title: "MCP server architecture",
    desc: "Custom MCP server design covering fleet matching, route optimization, job scheduling, and compliance verification. Tools, resources, and prompts — built for AI agents to operate your plant hire business.",
  },
  {
    title: "EU AI Act Article 50 compliance",
    desc: "AI-powered matching and pricing engines fall under Article 50 transparency obligations. We implement compliant disclosures, provenance markers, and documentation before the August 2026 deadline.",
  },
  {
    title: "HMAC-signed attestations",
    desc: "Cryptographically signed compliance certificates for every assessment. Independently verifiable via the MEOK attestation API — hand them to auditors, clients, or insurers.",
  },
];

const VERTICALS = [
  {
    name: "GrabHire AI",
    domain: "grabhire.ai",
    desc: "Grab lorry and muckaway logistics. AI-powered job matching, route optimization, and waste duty-of-care documentation for grab hire operators.",
  },
  {
    name: "PlantHire AI",
    domain: "planthire.ai",
    desc: "Construction equipment rental. Fleet utilisation, predictive maintenance, operator certification tracking, and automated hire agreements.",
  },
];

const PRICING = [
  {
    name: "Assessment",
    price: "£5,000",
    period: "flat",
    desc: "48h MCP readiness assessment. Full stack audit, implementation roadmap, compliance gap analysis.",
    href: "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
    highlight: false,
  },
  {
    name: "Continuous Pro",
    price: "£199",
    period: "/mo",
    desc: "Ongoing MCP maintenance, tool updates, compliance monitoring, priority support.",
    href: "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "£1,499",
    period: "/mo",
    desc: "Dedicated MCP infrastructure, custom integrations, SLA, dedicated account manager, onboarding.",
    href: "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t",
    highlight: false,
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MCP for Construction & Plant Hire — MEOK AI Labs",
  description:
    "MCP transformation consulting for construction equipment hire, grab hire, and plant hire SaaS. 48h readiness assessments, server architecture, EU AI Act compliance.",
  url: "https://meok.ai/verticals/construction",
  provider: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    legalName: "CSOAI LTD",
    url: "https://meok.ai",
  },
  areaServed: "GB",
  serviceType: "AI Compliance Consulting",
  offers: [
    { "@type": "Offer", price: "5000", priceCurrency: "GBP", name: "48h MCP Readiness Assessment" },
    { "@type": "Offer", price: "199", priceCurrency: "GBP", name: "Continuous Pro (monthly)" },
    { "@type": "Offer", price: "1499", priceCurrency: "GBP", name: "Enterprise (monthly)" },
  ],
};

export default function ConstructionPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link
          href="/verticals"
          style={{ color: GOLD, textDecoration: "none", fontSize: 14, fontWeight: 700, marginBottom: 24, display: "inline-block" }}
        >
          ← All Verticals
        </Link>

        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.12)",
            border: "1px solid rgba(201,168,76,0.4)",
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
            marginLeft: 12,
          }}
        >
          £6B+ UK market
        </div>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          MCP for <span style={{ color: GOLD }}>Construction</span> & Plant Hire
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          Your fleet management SaaS needs MCP before 2027. We build the transformation. Construction
          equipment hire — plant hire, grab hire, logistics — is moving to AI-native. MCP-first
          architecture enables AI agents to manage fleet matching, route optimization, and compliance
          verification across your entire operation.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <a
            href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "16px 28px",
              borderRadius: 12,
              background: GOLD,
              color: NAVY,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            Book 48h Assessment — £5,000 →
          </a>
          <a
            href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "16px 28px",
              borderRadius: 12,
              background: "transparent",
              color: NAVY,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
              border: `1px solid ${NAVY}33`,
            }}
          >
            Get Pro — £199/mo →
          </a>
        </div>

        {/* Vertical brands */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Two vertical brands, one MCP backbone
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {VERTICALS.map((v) => (
            <div
              key={v.name}
              style={{
                padding: 24,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 6 }}>{v.name}</h3>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55, marginBottom: 12 }}>{v.desc}</p>
              <a
                href={`https://${v.domain}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: GOLD, fontWeight: 700, fontSize: 14, textDecoration: "none" }}
              >
                {v.domain} →
              </a>
            </div>
          ))}
        </div>

        {/* What MEOK delivers */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          What MEOK delivers
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64 }}>
          {DELIVERABLES.map((f) => (
            <div
              key={f.title}
              style={{
                padding: 24,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 6 }}>{f.title}</h3>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* Pricing */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Pricing
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {PRICING.map((p) => (
            <div
              key={p.name}
              style={{
                padding: 24,
                background: "white",
                borderRadius: 14,
                border: p.highlight ? `2px solid ${GOLD}` : `1px solid ${NAVY}1a`,
              }}
            >
              <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>{p.name}</h3>
              <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>
                {p.price}<span style={{ fontSize: "0.8rem", fontWeight: 700 }}>{p.period}</span>
              </p>
              <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5, marginBottom: 16 }}>{p.desc}</p>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: GOLD,
                  fontWeight: 700,
                  fontSize: 14,
                  textDecoration: "none",
                }}
              >
                Get started →
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            background: NAVY,
            color: "white",
            padding: 32,
            borderRadius: 16,
            textAlign: "center",
          }}
        >
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Your competitors are already building AI agents
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            The construction hire market is consolidating around AI-native platforms. Start your MCP transformation today.
          </p>
          <a
            href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 28px",
              background: GOLD,
              color: NAVY,
              borderRadius: 12,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 15,
            }}
          >
            Book 48h Assessment — £5,000 →
          </a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 13, textAlign: "center" }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House 16939677 · 3rd Floor, 86-90 Paul Street,
          London EC2A 4NE · <Link href="/" style={{ color: GOLD }}>meok.ai</Link>
        </p>
      </div>
    </main>
  );
}
