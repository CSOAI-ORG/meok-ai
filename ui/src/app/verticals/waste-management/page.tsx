import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCP for Waste Management · Muckaway AI",
  description:
    "30,000+ waste operators need AI compliance by 2027. 48h MCP readiness assessment, server architecture, waste stream classification, and HMAC-signed attestations for waste management.",
  alternates: { canonical: "https://meok.ai/verticals/waste-management" },
  openGraph: {
    title: "MCP for Waste Management · MEOK AI Labs",
    description:
      "Muckaway.ai — waste management vertical. Environmental compliance, route optimization, duty-of-care documentation. MCP enables AI agents to automate waste operations.",
    type: "website",
    url: "https://meok.ai/verticals/waste-management",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const DELIVERABLES = [
  {
    title: "48h MCP readiness assessment",
    desc: "Full audit of your waste management stack — transport scheduling, permit management, waste transfer notes, weighbridge integration. Mapped to MCP tool/resource/prompt primitives with a ranked implementation roadmap.",
  },
  {
    title: "MCP server architecture",
    desc: "Custom MCP server design for waste stream classification, permit verification, route optimization, and carbon reporting. AI agents that understand waste regulations and operate your fleet.",
  },
  {
    title: "Environmental compliance automation",
    desc: "Automated duty-of-care documentation, waste transfer note generation, and environmental permit verification. Your AI agents stay compliant with the Environmental Protection Act 1990 and Waste Regulations 2011.",
  },
  {
    title: "HMAC-signed attestations",
    desc: "Cryptographically signed compliance certificates for every assessment. Independently verifiable via the MEOK attestation API — hand them to the Environment Agency, clients, or insurers.",
  },
];

const CAPABILITIES = [
  { title: "Waste stream classification", desc: "AI-powered EWC code assignment, hazardous waste identification, and waste hierarchy compliance." },
  { title: "Route optimization", desc: "Multi-stop collection scheduling, vehicle capacity planning, and congestion-aware routing for muckaway operations." },
  { title: "Carbon reporting", desc: "Automated Scope 1/2/3 emissions tracking, SECR-ready reports, and carbon offset verification." },
  { title: "Permit verification", desc: "Real-time waste carrier licence, site permit, and exemption validation against Environment Agency registers." },
];

const PRICING = [
  {
    name: "Assessment",
    price: "£4,950",
    period: "flat",
    desc: "48h MCP readiness assessment. Full stack audit, implementation roadmap, compliance gap analysis.",
    href: "https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m",
    highlight: false,
  },
  {
    name: "Continuous Pro",
    price: "£199",
    period: "/mo",
    desc: "Ongoing MCP maintenance, tool updates, compliance monitoring, priority support.",
    href: "https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "£1,499",
    period: "/mo",
    desc: "Dedicated MCP infrastructure, custom integrations, SLA, dedicated account manager, onboarding.",
    href: "https://buy.stripe.com/bJe4gB3K4002aAtgP68k91r",
    highlight: false,
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MCP for Waste Management — MEOK AI Labs",
  description:
    "MCP transformation consulting for waste management, muckaway, and environmental compliance SaaS. 48h readiness assessments, server architecture, EU AI Act compliance.",
  url: "https://meok.ai/verticals/waste-management",
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

export default function WasteManagementPage() {
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
          30,000+ UK waste operators
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
          MCP for <span style={{ color: GOLD }}>Waste Management</span>
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          30,000+ waste operators need AI compliance by 2027. Your MCP stack starts here. Muckaway.ai
          powers the waste management vertical — environmental compliance, route optimization, and
          duty-of-care documentation. MCP enables AI agents to automate waste stream classification,
          permit verification, and carbon reporting.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <a
            href="https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m"
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
            href="https://muckaway.ai"
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
            muckaway.ai →
          </a>
        </div>

        {/* MCP capabilities */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          What your MCP agents can do
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {CAPABILITIES.map((c) => (
            <div
              key={c.title}
              style={{
                padding: 24,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 6 }}>{c.title}</h3>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55 }}>{c.desc}</p>
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
            The Environment Agency is watching
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            AI-powered waste operations need compliant MCP architecture. Start your assessment before the 2027 deadline.
          </p>
          <a
            href="https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m"
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
