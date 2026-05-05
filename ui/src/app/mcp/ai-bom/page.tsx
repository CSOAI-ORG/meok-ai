import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Bill of Materials MCP · ai-bom-mcp",
  description:
    "Generate audit-grade AI-BOMs in CycloneDX ML-BOM 1.6 + SPDX 3.0 format. Model provenance, training data sources, dependency trees, EU AI Act Annex IV compliance, NIST AI RMF alignment.",
  alternates: { canonical: "https://meok.ai/mcp/ai-bom" },
  openGraph: {
    title: "AI Bill of Materials MCP · MEOK AI Labs",
    description:
      "Your AI supply chain is a black box. Generate audit-grade AI-BOMs in CycloneDX ML-BOM 1.6 + SPDX 3.0 format.",
    type: "website",
    url: "https://meok.ai/mcp/ai-bom",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FEATURES = [
  {
    title: "Model provenance tracking",
    desc: "Document the full lineage of your AI models — base model, fine-tuning runs, quantisation steps, RLHF iterations, and deployment versions.",
  },
  {
    title: "Training data source inventory",
    desc: "Catalogue all training data sources with licensing status, data cards, consent records, and GDPR Art 30 processing activity alignment.",
  },
  {
    title: "Dependency tree generation",
    desc: "Map the complete software supply chain — frameworks, libraries, hardware accelerators, cloud services, and third-party API dependencies.",
  },
  {
    title: "EU AI Act Annex IV compliance",
    desc: "Ensure your technical documentation meets Annex IV requirements: training methodologies, data governance, validation procedures, and performance metrics.",
  },
  {
    title: "NIST AI RMF alignment",
    desc: "Map your AI-BOM components against NIST AI Risk Management Framework categories — Govern, Map, Measure, Manage.",
  },
];

const STEPS = [
  { num: "1", title: "Install", desc: "pip install ai-bom-mcp — one command, zero config." },
  { num: "2", title: "Scan", desc: "Point it at your model registry, training scripts, or deployment config. It discovers components automatically." },
  { num: "3", title: "Export", desc: "Get a CycloneDX ML-BOM 1.6 or SPDX 3.0 JSON — drop it straight into your compliance pack." },
];

const EXAMPLE_OUTPUT = `{
  "bomFormat": "CycloneDX",
  "specVersion": "1.6",
  "serialNumber": "urn:uuid:ai-bom-2026-05-c8f2a1",
  "version": 1,
  "metadata": {
    "component": {
      "type": "machine-learning-model",
      "name": "customer-intent-classifier-v2.1",
      "version": "2.1.0"
    }
  },
  "components": [
    {
      "type": "machine-learning-model",
      "name": "bert-base-uncased",
      "version": "1.0",
      "purl": "pkg:huggingface/google-bert/bert-base-uncased"
    },
    {
      "type": "data",
      "name": "intent-training-set-v3",
      "description": "12,847 labelled utterances, CC-BY-4.0"
    }
  ],
  "dependencies": [
    { "ref": "customer-intent-classifier-v2.1", "dependsOn": ["bert-base-uncased", "intent-training-set-v3"] }
  ]
}`;

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ai-bom-mcp",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description:
    "AI Bill of Materials MCP server. Generates audit-grade AI-BOMs in CycloneDX ML-BOM 1.6 + SPDX 3.0 format covering model provenance, training data, dependencies, EU AI Act Annex IV, and NIST AI RMF.",
  url: "https://meok.ai/mcp/ai-bom",
  downloadUrl: "https://pypi.org/project/ai-bom-mcp/",
  author: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    legalName: "CSOAI LTD",
    url: "https://meok.ai",
  },
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "GBP", name: "Free (3 BOMs/mo)" },
    { "@type": "Offer", price: "79", priceCurrency: "GBP", name: "Pro (unlimited + signed attestations)" },
    { "@type": "Offer", price: "1499", priceCurrency: "GBP", name: "Enterprise" },
  ],
};

export default function AiBomPage() {
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
          47 downloads/week on PyPI
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
          AI <span style={{ color: GOLD }}>Bill of Materials</span> MCP
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          Your AI supply chain is a black box. Generate audit-grade AI-BOMs in CycloneDX ML-BOM 1.6 +
          SPDX 3.0 format. Cover model provenance, training data sources, dependency trees, EU AI Act
          Annex IV compliance, and NIST AI RMF alignment — all from your MCP client.
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
            href="https://github.com/CSOAI-ORG/ai-bom-mcp"
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
          <code>pip install ai-bom-mcp</code>
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
          Example BOM output (CycloneDX ML-BOM 1.6)
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
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>3 BOMs/month. Community support. No signed attestations.</p>
          </div>
          <div style={{ padding: 24, background: "white", borderRadius: 14, border: `2px solid ${GOLD}` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>Pro</h3>
            <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>£79/mo</p>
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>Unlimited BOMs + HMAC-signed attestations + SPDX 3.0 export + priority support.</p>
          </div>
          <div style={{ padding: 24, background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>Enterprise</h3>
            <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>£1,499/mo</p>
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>Dedicated signing keys, custom verify domain, CI/CD integration, SLA, onboarding call.</p>
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
            Your AI supply chain transparency starts here
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            EU AI Act Annex IV requires detailed technical documentation. CycloneDX ML-BOM is the emerging standard. Get ahead now.
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
