import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU Cyber Resilience Act Annex IV Classifier MCP · meok-cra-annex-iv-classifier-mcp",
  description:
    "Classify your digital product against CRA Annex IV essential security requirements. 9-category classification, vulnerability handling assessment, EU declaration of conformity gaps, HMAC-signed attestations.",
  alternates: { canonical: "https://meok.ai/mcp/cra-classifier" },
  openGraph: {
    title: "CRA Annex IV Classifier MCP · MEOK AI Labs",
    description:
      "CRA enforcement starts 11 December 2027. Know your product's security requirement category NOW.",
    type: "website",
    url: "https://meok.ai/mcp/cra-classifier",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FEATURES = [
  {
    title: "9-category essential security requirements",
    desc: "Classify your product against all 9 categories of essential cybersecurity requirements in CRA Annex I, Part I — from design-by-default to incident reporting.",
  },
  {
    title: "Vulnerability handling assessment",
    desc: "Evaluate your vulnerability handling processes against CRA Annex I, Part II requirements including coordinated disclosure, SBOM provision, and patch management.",
  },
  {
    title: "EU declaration of conformity gaps",
    desc: "Identify missing elements in your EU Declaration of Conformity per CRA Annex IV — manufacturer details, product identification, conformity assessment procedure, standards applied.",
  },
  {
    title: "HMAC-signed attestations",
    desc: "Emit cryptographically signed classification attestations that auditors and notified bodies can verify independently via the MEOK attestation API.",
  },
];

const STEPS = [
  { num: "1", title: "Install", desc: "pip install meok-cra-annex-iv-classifier-mcp — one command, zero config." },
  { num: "2", title: "Describe", desc: "Feed your product description, SBOM, or architecture doc to the classifier tool." },
  { num: "3", title: "Classify", desc: "Get category, matched requirements, gaps, and a signed attestation ready for compliance." },
];

const EXAMPLE_OUTPUT = `{
  "cert_id": "cra-cls-2026-05-b9d4e1",
  "regulation": "EU CRA Annex IV",
  "product_class": "Class I (self-assessment)",
  "essential_requirements": {
    "matched": 7,
    "total": 9,
    "categories": [
      "design_security_by_default",
      "access_control",
      "data_protection",
      "availability_resilience",
      "minimised_attack_surface",
      "incident_impact_mitigation",
      "secure_update_mechanism"
    ]
  },
  "gaps_found": [
    "vulnerability_disclosure_policy_incomplete",
    "sbom_machine_readable_format_missing"
  ],
  "conformity_declaration_status": "PARTIAL",
  "score_percent": 78,
  "signed_at": "2026-05-05T10:22:41Z",
  "verify_url": "https://meok-attestation-api.vercel.app/verify/cra-cls-2026-05-b9d4e1"
}`;

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "meok-cra-annex-iv-classifier-mcp",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description:
    "EU Cyber Resilience Act Annex IV classifier MCP server. 9-category essential security requirements classification, vulnerability handling assessment, EU declaration of conformity gap analysis, HMAC-signed attestations.",
  url: "https://meok.ai/mcp/cra-classifier",
  downloadUrl: "https://pypi.org/project/meok-cra-annex-iv-classifier-mcp/",
  author: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    legalName: "CSOAI LTD",
    url: "https://meok.ai",
  },
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "GBP", name: "Free (3 audits/mo)" },
    { "@type": "Offer", price: "79", priceCurrency: "GBP", name: "Pro (unlimited + signed attestations)" },
    { "@type": "Offer", price: "1499", priceCurrency: "GBP", name: "Enterprise" },
  ],
};

export default function CraClassifierPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link
          href="/labs/mcp/servers"
          style={{ color: GOLD, textDecoration: "none", fontSize: 14, fontWeight: 700, marginBottom: 24, display: "inline-block" }}
        >
          ← Back to MCP Servers
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
          75 downloads/week on PyPI
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
          EU Cyber Resilience Act <span style={{ color: GOLD }}>Annex IV</span> Classifier MCP
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          CRA enforcement starts 11 December 2027. Know your product's security requirement category NOW.
          This MCP server classifies your digital product against all 9 essential cybersecurity requirement
          categories, assesses vulnerability handling, and identifies EU declaration of conformity gaps.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <a
            href="https://buy.stripe.com/14A4gB3K4eUWgYR56o8k836"
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
            Get Pro — £79/mo →
          </a>
          <a
            href="https://github.com/CSOAI-ORG/meok-cra-annex-iv-classifier-mcp"
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
            View on GitHub
          </a>
        </div>

        {/* Install */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 16, letterSpacing: "-0.01em" }}>
          Install
        </h2>
        <pre
          style={{
            background: NAVY,
            color: "#e0e0e0",
            padding: 20,
            borderRadius: 12,
            fontSize: 14,
            overflowX: "auto",
            marginBottom: 48,
          }}
        >
          <code>pip install meok-cra-annex-iv-classifier-mcp</code>
        </pre>

        {/* What it does */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          What it does
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64 }}>
          {FEATURES.map((f) => (
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

        {/* How it works */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          How it works
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {STEPS.map((s) => (
            <div
              key={s.num}
              style={{
                padding: 24,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "2rem", fontWeight: 900, color: GOLD, marginBottom: 8 }}>{s.num}</div>
              <h3 style={{ fontSize: "1rem", fontWeight: 900, marginBottom: 6 }}>{s.title}</h3>
              <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Example output */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 16, letterSpacing: "-0.01em" }}>
          Example classification output
        </h2>
        <pre
          style={{
            background: NAVY,
            color: "#a8e6cf",
            padding: 24,
            borderRadius: 12,
            fontSize: 13,
            overflowX: "auto",
            lineHeight: 1.6,
            marginBottom: 64,
          }}
        >
          <code>{EXAMPLE_OUTPUT}</code>
        </pre>

        {/* Pricing */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Pricing
        </h2>
        <div style={{ display: "grid", gap: 16, marginBottom: 64, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          <div style={{ padding: 24, background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>Free</h3>
            <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>£0/mo</p>
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>3 classifications/month. Community support. No signed attestations.</p>
          </div>
          <div style={{ padding: 24, background: "white", borderRadius: 14, border: `2px solid ${GOLD}` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>Pro</h3>
            <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>£79/mo</p>
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>Unlimited classifications + HMAC-signed attestations + priority support.</p>
          </div>
          <div style={{ padding: 24, background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>Enterprise</h3>
            <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>£1,499/mo</p>
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>Dedicated signing keys, custom verify domain, SLA, onboarding call.</p>
          </div>
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
            CRA enforcement: 11 December 2027
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            Know your product category and close security gaps before conformity assessment begins.
          </p>
          <a
            href="https://buy.stripe.com/14A4gB3K4eUWgYR56o8k836"
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
            Get Pro — £79/mo →
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
