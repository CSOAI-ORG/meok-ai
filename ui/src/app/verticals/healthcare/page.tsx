import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MCP for Healthcare & Optometry · OptiMobile AI",
  description:
    "Mobile healthcare needs offline-first MCP. 48h readiness assessment, FHIR-compliant MCP architecture, EU AI Act high-risk conformity assessment for healthcare AI.",
  alternates: { canonical: "https://meok.ai/verticals/healthcare" },
  openGraph: {
    title: "MCP for Healthcare & Optometry · MEOK AI Labs",
    description:
      "OptiMobile.ai — AI-native mobile optometry practice management. The £2.5B optometry software market is moving to AI-native. We build the MCP infrastructure.",
    type: "website",
    url: "https://meok.ai/verticals/healthcare",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const DELIVERABLES = [
  {
    title: "48h MCP readiness assessment",
    desc: "Full audit of your healthcare software stack — patient management, clinical records, scheduling, billing. Mapped to MCP tool/resource/prompt primitives with FHIR compliance checkpoints.",
  },
  {
    title: "FHIR-compliant MCP architecture",
    desc: "Custom MCP server design that speaks HL7 FHIR R4. Patient resources, clinical observations, care plans, and NHS GOS claims — all exposed as MCP tools that AI agents can operate safely.",
  },
  {
    title: "EU AI Act high-risk conformity assessment",
    desc: "Healthcare AI falls under Annex III high-risk classification. We prepare your conformity assessment documentation, risk management system, and post-market monitoring plan ahead of the December 2027 deadline.",
  },
  {
    title: "HMAC-signed attestations",
    desc: "Cryptographically signed compliance certificates for every assessment. Independently verifiable via the MEOK attestation API — hand them to CQC, NHS Digital, or ICB commissioners.",
  },
];

const CAPABILITIES = [
  { title: "Offline-first architecture", desc: "Mobile optometry and domiciliary care need MCP servers that work without connectivity. We design offline-capable tool execution with conflict-free sync." },
  { title: "NHS GOS claims automation", desc: "AI agents that understand GOS1/GOS3/GOS6 forms, patient eligibility, and NHS BSA submission requirements. Automated claim preparation and validation." },
  { title: "FHIR resource management", desc: "Patient, Observation, DiagnosticReport, CarePlan — your MCP tools expose FHIR resources that any compliant system can consume." },
  { title: "Route optimization", desc: "Domiciliary visit scheduling with patient priority weighting, travel time estimation, and capacity-aware booking for mobile healthcare providers." },
];

const PRICING = [
  {
    name: "Assessment",
    price: "£5,000",
    period: "flat",
    desc: "48h MCP readiness assessment. Full stack audit, FHIR compliance review, implementation roadmap.",
    href: "https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m",
    highlight: false,
  },
  {
    name: "Continuous Pro",
    price: "£199",
    period: "/mo",
    desc: "Ongoing MCP maintenance, FHIR updates, compliance monitoring, priority support.",
    href: "https://buy.stripe.com/eVq6oJ3K49AC0ZTaqI8k91m",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "£1,499",
    period: "/mo",
    desc: "Dedicated MCP infrastructure, NHS integration support, SLA, clinical data governance, onboarding.",
    href: "https://buy.stripe.com/bJe4gB3K4002aAtgP68k91r",
    highlight: false,
  },
];

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "MCP for Healthcare & Optometry — MEOK AI Labs",
  description:
    "MCP transformation consulting for healthcare, optometry, and mobile clinical practice management. FHIR-compliant architecture, EU AI Act high-risk conformity, NHS integration.",
  url: "https://meok.ai/verticals/healthcare",
  provider: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    legalName: "CSOAI LTD",
    url: "https://meok.ai",
  },
  areaServed: "GB",
  serviceType: "Healthcare AI Compliance Consulting",
  offers: [
    { "@type": "Offer", price: "5000", priceCurrency: "GBP", name: "48h MCP Readiness Assessment" },
    { "@type": "Offer", price: "199", priceCurrency: "GBP", name: "Continuous Pro (monthly)" },
    { "@type": "Offer", price: "1499", priceCurrency: "GBP", name: "Enterprise (monthly)" },
  ],
};

export default function HealthcarePage() {
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
          EU AI Act — Annex III high-risk
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
          MCP for <span style={{ color: GOLD }}>Healthcare</span> & Optometry
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          Mobile healthcare needs offline-first MCP. We build it. OptiMobile.ai is AI-native mobile
          optometry practice management — route optimization, offline mode, NHS GOS claims, and FHIR
          compliance. The £2.5B optometry software market is moving to AI-native, and healthcare AI
          falls under EU AI Act Annex III high-risk classification.
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
            href="https://optimobile.ai"
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
            optimobile.ai →
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
            Healthcare AI is high-risk under the EU AI Act
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            Annex III classification means conformity assessments, risk management systems, and post-market monitoring. Start now — the December 2027 deadline is closer than you think.
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
