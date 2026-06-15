import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Distributions — Open-source Package Index | MEOK.AI",
  description:
    "MEOK distributions: 340+ open-source MCP packages across 25 industry verticals. MIT-licensed, PyPI + npm, all signed and auditor-verifiable. 100% free to install, free to fork.",
  keywords: [
    "MEOK distributions",
    "open source MCP",
    "MCP packages",
    "compliance MCP fleet",
    "industry verticals",
    "MEOK open source",
  ],
  alternates: { canonical: "https://meok.ai/distributions" },
};

const NAVY = "#1a1a2e"; const GOLD = "#c9a84c"; const BG = "#f5f0e8";

const FAQ = [
  { q: "Are the MEOK distributions really free?", a: "Yes. Every package in the MEOK distribution is MIT-licensed and 100% free to install and free to fork. They are published on PyPI, npm, and GitHub (github.com/CSOAI-ORG). You can use them in commercial products, modify them, and redistribute them under the MIT terms." },
  { q: "How do I install a MEOK MCP package?", a: "Install any single MCP server with pip, e.g. 'pip install eu-ai-act-compliance-mcp'. Then register it with the MCP client and call its tools — results are HMAC-signed and include an Ed25519 signature so they are auditor-verifiable." },
  { q: "What industry verticals do the distributions cover?", a: "The fleet spans 25 industry verticals including Healthcare, Fintech, Cybersecurity, Children's AI, Education, Legal, HR Tech, Construction, Waste Management, Care Homes, UK Haulage, Food Safety, SaaS, Charity, and Aquaponics, plus 10 more (MLOps, Foundation Models, Generative AI, and others)." },
  { q: "What are the reusable primitives?", a: "Eight primitives work across all verticals: audit logging (hash-chained HMAC), certified agent handoff, policy enforcement, rate limiting, data residency (EU/UK/US/CN + Schrems II), prompt-injection firewall (OWASP LLM01), bias detection (EU AI Act Art 10), and watermarking authenticity (C2PA 2.1 + SynthID, Art 50)." },
];

const WEBPAGE_JSONLD = { "@context": "https://schema.org", "@type": "WebPage", name: "MEOK Distributions — Open-source Package Index", description: "MEOK distributions: 340+ open-source MCP packages across 25 industry verticals. MIT-licensed, PyPI + npm, all signed and auditor-verifiable. 100% free to install, free to fork.", url: "https://meok.ai/distributions" };
const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" }, { "@type": "ListItem", position: 2, name: "Distributions", item: "https://meok.ai/distributions" }] };
const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const INDUSTRY_DISTRIBUTIONS = [
  { name: "Healthcare", desc: "HIPAA + FDA SaMD + EU MDR + EU AI Act high-risk for medical AI", pkgs: "12 packages" },
  { name: "Fintech", desc: "DORA + AML + MiFID II + Basel III + MiCA + EU AI Act for financial services AI", pkgs: "12 packages" },
  { name: "Cybersecurity", desc: "EU CRA + SBOM CycloneDX + CISA KEV + SLSA + Sigstore + MITRE ATT&CK/ATLAS", pkgs: "12 packages" },
  { name: "Children's AI", desc: "COPPA + FERPA + UK AADC + GDPR Art 8 + EU AI Act Art 5(1)(b)", pkgs: "9 packages" },
  { name: "Education", desc: "FERPA + AADC + EU AI Act Annex III section 3 + UK AI Bill + GDPR Art 8", pkgs: "9 packages" },
  { name: "Legal", desc: "EU AI Act Annex III section 6 + GDPR + UK AI Bill + LPP", pkgs: "9 packages" },
  { name: "HR Tech", desc: "EU AI Act Annex III section 4 + NYC AEDT + IL HB 3773 + GDPR Art 22 + Colorado AI Act", pkgs: "9 packages" },
  { name: "Construction", desc: "ISO 19650 + NRSWA + CHAS + CPCS + LOLER + CDM 2015", pkgs: "9 packages" },
  { name: "Waste Management", desc: "Waste carrier licence + Duty of Care + ISO 14001 + EU Waste Shipment Regs", pkgs: "9 packages" },
  { name: "Care Homes", desc: "CQC SAF + NICE NG5 + Safeguarding Adults Board + AADC + GDPR Art 9", pkgs: "9 packages" },
  { name: "UK Haulage", desc: "DVSA + Digital Tacho + WTD + OCRS + Driver CPC + EU Mobility Package", pkgs: "9 packages" },
  { name: "Food Safety", desc: "HACCP + Natasha Law PPDS + FSA + ISO 22000 + EU Food Info to Consumers", pkgs: "9 packages" },
  { name: "SaaS", desc: "EU AI Act + SOC 2 AI overlay + ISO 42001 + GDPR + NIS2", pkgs: "9 packages" },
  { name: "Charity", desc: "UK Charity Commission + GDPR Art 9 + EU AI Act + Fundraising Regulator code", pkgs: "9 packages" },
  { name: "Aquaponics", desc: "DEFRA APB + FSA + ISO 22000 + HACCP + Animal Welfare Act + Aquatic Animal Health", pkgs: "9 packages" },
  { name: "Plus 10 more verticals", desc: "MLOps, Foundation Models, Generative AI, Healthcare Sub, etc.", pkgs: "120+ packages" },
];

const PRIMITIVES = [
  { name: "agent-audit-logger-mcp", desc: "Hash-chained HMAC-signed audit log for every tool call" },
  { name: "agent-handoff-certified-mcp", desc: "HMAC-signed agent handoff protocol" },
  { name: "agent-policy-enforcement-mcp", desc: "OPA-style policy enforcement at the agent boundary" },
  { name: "agent-rate-limiter-mcp", desc: "Token + leaky bucket rate limiting" },
  { name: "agent-data-residency-mcp", desc: "EU/UK/US/CN data residency enforcement + Schrems II" },
  { name: "agent-prompt-injection-firewall-mcp", desc: "OWASP LLM01 protection" },
  { name: "bias-detection-mcp", desc: "Demographic parity + equalized odds (EU AI Act Art 10)" },
  { name: "watermarking-authenticity-mcp", desc: "C2PA 2.1 + SynthID + perceptual fingerprinting (Art 50)" },
];

export default function DistributionsPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "48px 24px 96px", fontFamily: "system-ui, -apple-system, sans-serif" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <header style={{ marginBottom: 48 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>MEOK Open Source</p>
          <h1 style={{ fontSize: 48, fontWeight: 900, lineHeight: 1.05, margin: "8px 0 16px" }}>340+ MCP packages, all MIT, all free.</h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            The MEOK distribution is the largest open-source compliance MCP fleet. Every package is on PyPI + npm + GitHub, MIT-licensed, and ready to install in 5 seconds.
          </p>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginTop: 16 }}>
            <a href="https://github.com/CSOAI-ORG" style={{ color: NAVY, textDecoration: "underline", fontWeight: 700 }}>github.com/CSOAI-ORG</a> · 491 public repos · 14 Apify Actors · 41 dist landing pages
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Industry distributions (16 verticals)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {INDUSTRY_DISTRIBUTIONS.map((d) => (
              <div key={d.name} style={{ background: "white", borderRadius: 12, padding: 20, border: `1px solid ${NAVY}1a` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 900, color: NAVY, margin: 0 }}>{d.name}</h3>
                  <span style={{ fontSize: 11, color: GOLD, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em" }}>{d.pkgs}</span>
                </div>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: 0 }}>{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Primitives (8 reusable across all verticals)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {PRIMITIVES.map((p) => (
              <div key={p.name} style={{ background: "white", borderRadius: 12, padding: 20, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, fontFamily: "monospace", margin: "0 0 6px" }}>{p.name}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: "white", borderRadius: 14, padding: 32, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>How to install</h2>
          <pre style={{ background: `${NAVY}0a`, padding: 16, borderRadius: 8, fontSize: 13, fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace", overflow: "auto", margin: "0 0 12px" }}>
{`# Install a single MCP server
pip install eu-ai-act-compliance-mcp

# Use the MCP client to register
from mcp import Client
client = Client("eu-ai-act-compliance-mcp")
result = client.call("check_compliance", {"system": "my-AI-system"})
# result is HMAC-signed + includes an Ed25519 signature`}
          </pre>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, margin: 0 }}>
            All packages are MIT-licensed. You can use them in commercial products, fork them, modify them. The MEOK Council signs every commit.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 32, textAlign: "center" }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 12 }}>Want a custom distribution?</h2>
          <p style={{ fontSize: 15, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            If you operate in a sector we don't cover yet, we'll build you a custom MCP bundle in 14 days. £4,950 one-time + £199/mo maintenance.
          </p>
          <a href="mailto:nicholas@meok.ai?subject=Custom%20distribution" style={{ display: "inline-block", background: GOLD, color: NAVY, padding: "14px 24px", borderRadius: 10, fontWeight: 900, textDecoration: "none" }}>
            nicholas@meok.ai →
          </a>
        </section>
      </div>
    </main>
  );
}
