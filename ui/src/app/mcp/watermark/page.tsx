import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 50 Watermarking MCP · meok-watermark-attest-mcp",
  description:
    "Article 50 compliance automation — classify obligations, generate C2PA-2.0 provenance markers, audit content pipelines, and emit HMAC-signed attestations. pip install meok-watermark-attest-mcp.",
  alternates: { canonical: "https://meok.ai/mcp/watermark" },
  openGraph: {
    title: "EU AI Act Article 50 Watermarking MCP · MEOK AI Labs",
    description:
      "Article 50 hits 2 August 2026. Your AI-generated content needs machine-readable provenance markers. Install in 30 seconds.",
    type: "website",
    url: "https://meok.ai/mcp/watermark",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FEATURES = [
  {
    title: "Art 50 obligation classification",
    desc: "Classify which transparency obligations apply: chatbot disclosure, GPAI marking per C2PA-2.0, deepfake disclosure, emotion/biometric transparency.",
  },
  {
    title: "Compliant disclosure generation",
    desc: "Generate machine-readable and human-readable disclosure text that satisfies Article 50 requirements for your specific use case.",
  },
  {
    title: "Content pipeline auditing",
    desc: "Scan your generative-AI outputs end-to-end — identify unmarked content, missing provenance metadata, and disclosure gaps before an auditor does.",
  },
  {
    title: "HMAC-signed attestations",
    desc: "Emit cryptographically signed compliance attestations that any auditor can verify independently via the MEOK attestation API.",
  },
];

const STEPS = [
  { num: "1", title: "Install", desc: "pip install meok-watermark-attest-mcp — one command, zero config." },
  { num: "2", title: "Connect", desc: "Point your Claude Code / MCP client at the server. It auto-discovers all tools." },
  { num: "3", title: "Attest", desc: "Run classify_art50 or audit_pipeline. Get a signed attestation JSON you can hand to compliance." },
];

const EXAMPLE_OUTPUT = `{
  "cert_id": "wm-att-2026-05-a7f3c2",
  "regulation": "EU AI Act Article 50",
  "assessment": "COMPLIANT",
  "score_percent": 85,
  "obligations_checked": [
    "chatbot_disclosure",
    "gpai_c2pa_marking",
    "deepfake_disclosure"
  ],
  "gaps": ["emotion_transparency_partial"],
  "signed_at": "2026-05-05T09:14:22Z",
  "verify_url": "https://meok-attestation-api.vercel.app/verify/wm-att-2026-05-a7f3c2"
}`;

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "meok-watermark-attest-mcp",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "Any",
  description:
    "EU AI Act Article 50 watermarking and transparency MCP server. Classifies obligations, generates C2PA-2.0 provenance markers, audits content pipelines, emits HMAC-signed attestations.",
  url: "https://meok.ai/mcp/watermark",
  downloadUrl: "https://pypi.org/project/meok-watermark-attest-mcp/",
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

export default function WatermarkPage() {
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
          86 downloads/week on PyPI
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
          EU AI Act <span style={{ color: GOLD }}>Article 50</span> Watermarking MCP
        </h1>
        <p style={{ fontSize: "1.15rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          Article 50 hits 2 August 2026. Your AI-generated content needs machine-readable provenance
          markers. This MCP server classifies your obligations, generates compliant disclosures, audits
          your content pipeline, and emits cryptographically signed attestations — all from your IDE.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <a
            href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j"
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
            Get Pro — £149/mo →
          </a>
          <a
            href="https://github.com/CSOAI-ORG/meok-watermark-attest-mcp"
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
          <code>pip install meok-watermark-attest-mcp</code>
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
          Example attestation output
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
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>3 audits/month. Community support. No signed attestations.</p>
          </div>
          <div style={{ padding: 24, background: "white", borderRadius: 14, border: `2px solid ${GOLD}` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>Pro</h3>
            <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>£149/mo</p>
            <p style={{ color: `${NAVY}99`, fontSize: 13, lineHeight: 1.5 }}>Unlimited audits + HMAC-signed attestations + priority support.</p>
          </div>
          <div style={{ padding: 24, background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 4 }}>Enterprise</h3>
            <p style={{ color: GOLD, fontWeight: 900, fontSize: "1.4rem", marginBottom: 8 }}>£999/mo</p>
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
            Article 50 deadline: 2 August 2026
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            Start generating compliant provenance markers today. Free tier available — no credit card required.
          </p>
          <a
            href="https://buy.stripe.com/5kQ6oJ0xS3ce8sl7ew8k91j"
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
            Get Pro — £149/mo →
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
