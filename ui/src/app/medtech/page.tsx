import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK for Healthcare AI | HIPAA + FDA SaMD + MDR compliance | MEOK.AI",
  description:
    "MEOK AI compliance stack for healthcare and SaMD: HIPAA + FDA SaMD (510k, De Novo, PMA) + EU MDR + AI BOM + bias detection + watermarking. One substrate, every framework.",
  keywords: [
    "MEOK healthcare",
    "HIPAA AI compliance",
    "FDA SaMD compliance",
    "EU MDR medical device AI",
    "clinical AI compliance",
    "SaMD 510k",
    "AI BOM healthcare",
  ],
  alternates: { canonical: "https://meok.ai/medtech" },
  openGraph: {
    title: "MEOK for Healthcare AI — HIPAA + FDA + MDR",
    description: "One substrate, every framework. HIPAA + FDA SaMD + EU MDR + bias + watermarking.",
    type: "website",
    url: "https://meok.ai/medtech",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=Healthcare+AI+Compliance&desc=HIPAA+%2B+FDA+SaMD+%2B+EU+MDR+%2B+EU+AI+Act",
        width: 1200,
        height: 630,
        alt: "MEOK Healthcare AI Compliance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK for Healthcare AI",
    description: "HIPAA + FDA SaMD + EU MDR + EU AI Act, all from one substrate.",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FRAMEWORKS = [
  { name: "HIPAA", desc: "Privacy Rule, Security Rule, Breach Notification, BAA. Mapped to Art 30/32 GDPR by the MEOK crosswalk." },
  { name: "FDA SaMD", desc: "IMDRF risk categorization · 510k · De Novo · PMA pathways · Pre-Sub meetings. Informational, not regulatory advice." },
  { name: "EU MDR", desc: "Regulation 2017/745 · Annex VIII Rule 11 for SaMD · clinical evaluation · post-market surveillance. Informational." },
  { name: "EU AI Act", desc: "Medical AI = high-risk (Annex III §5) — full 9-Article stack required. Article 50 watermarking for patient-facing AI." },
  { name: "ISO 42001", desc: "AI Management System for medical AI vendors · ISO 13485 bridge for QMS integration." },
  { name: "GDPR (health data)", desc: "Art 9 special category data · DPIA · Art 35(7) checklist · FRIA for high-risk medical AI." },
];

const MCPS = [
  "hipaa-ai-compliance-mcp",
  "hipaa-compliance-mcp",
  "fda-samd-compliance-mcp",
  "fda-ai-510k-software",
  "fda-samd-mcp",
  "mdr-ai-compliance-mcp",
  "mdr-medical-device",
  "eu-ai-act-compliance-mcp",
  "ai-bom-mcp",
  "bias-detection-mcp",
  "watermarking-authenticity-mcp",
  "agent-audit-logger-mcp",
];

const PRICING = [
  { tier: "Sovereign", price: "£29/mo", sub: "compliance Starter", desc: "Audit trail + 5 MCPs + signed evidence." },
  { tier: "Pro", price: "£199/mo", sub: "compliance Pro", desc: "Full fleet + monthly attestations + new-regulator alerts." },
  { tier: "Enterprise", price: "£1,499/mo", sub: "multi-tenant", desc: "Council governance + custom rules + white-label portal." },
  { tier: "Audit-Prep", price: "£4,950", sub: "one-time", desc: "Auditor evidence pack aligned to ISO 42001 + ISO 13485." },
];

const FAQ = [
  { q: "Is medical AI high-risk under the EU AI Act?", a: "Yes. Medical AI is high-risk under EU AI Act Annex III §5, which means the full 9-Article compliance stack — risk management, data governance, technical documentation, logging, transparency, human oversight, accuracy/robustness, and conformity assessment. Article 50 watermarking also applies to patient-facing AI." },
  { q: "How does MEOK handle FDA SaMD and EU MDR together?", a: "MEOK covers FDA SaMD pathways (510k, De Novo, PMA, Pre-Sub) using IMDRF risk categorization, alongside EU MDR (Regulation 2017/745, Annex VIII Rule 11 for SaMD, clinical evaluation, and post-market surveillance). Both are delivered as informational compliance evidence, not regulatory advice." },
  { q: "Why one substrate instead of six separate compliance vendors?", a: "Most healthcare AI teams run 4-6 separate tools — a HIPAA specialist, an FDA pathway consultant, an EU MDR advisor, an EU AI Act readiness service, an AI BOM tool, and a bias-detection library — each producing a different evidence pack that must be reconciled at audit time. MEOK ships all six as one HMAC-signed chain: one vendor, one invoice, one signed evidence pack the auditor reads in an afternoon." },
  { q: "What does the healthcare bundle cost and how fast can we go live?", a: "Pricing runs from £29/mo (Sovereign Starter) through £199/mo (Pro) to £1,499/mo (Enterprise, multi-tenant), plus a one-time £4,950 Audit-Prep pack aligned to ISO 42001 and ISO 13485. The bundle ships as a single deployment with a 30-minute onboarding call, and teams can be live in 7 days." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "Healthcare AI Compliance", item: "https://meok.ai/medtech" },
] };

const SERVICE_JSONLD = { "@context": "https://schema.org", "@type": "Service", name: "MEOK Healthcare AI Compliance", serviceType: "Healthcare and SaMD AI compliance evidence pack", provider: { "@type": "Organization", name: "MEOK AI", url: "https://meok.ai" }, url: "https://meok.ai/medtech", areaServed: "GB", offers: { "@type": "Offer", price: "29", priceCurrency: "GBP", url: "https://meok.ai/medtech" } };

export default function MedtechPage() {
  return (
    <main
      style={{
        background: BG,
        color: NAVY,
        minHeight: "100vh",
        padding: "48px 24px 96px",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p style={{ color: GOLD, fontWeight: 900, fontSize: 13, letterSpacing: "0.1em", textTransform: "uppercase", margin: 0 }}>
            MEOK · Healthcare AI
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            One substrate. Six frameworks. One invoice.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            Medical AI is high-risk under EU AI Act Annex III §5. That means a 9-Article compliance
            stack, on top of HIPAA, on top of FDA SaMD, on top of EU MDR. MEOK ships the whole
            thing as one HMAC-signed evidence chain — and one invoice.
          </p>
        </header>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frameworks we cover (and how they connect)</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 12 }}>
            {FRAMEWORKS.map((f) => (
              <div
                key={f.name}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: 20,
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <h3 style={{ fontSize: 16, fontWeight: 900, color: GOLD, margin: "0 0 6px" }}>{f.name}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: 0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>The 12 MCPs that ship in the healthcare bundle</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 16, maxWidth: 720 }}>
            All MIT-licensed. All on PyPI. All 90+ scorecard. All auditor-verifiable via
            <Link href="/attestations" style={{ color: NAVY, textDecoration: "underline" }}> /attestations</Link>.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8 }}>
            {MCPS.map((m) => (
              <code
                key={m}
                style={{
                  background: "white",
                  padding: "10px 12px",
                  borderRadius: 8,
                  fontSize: 12,
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  border: `1px solid ${NAVY}0d`,
                }}
              >
                pip install {m}
              </code>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            {PRICING.map((p) => (
              <div
                key={p.tier}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: 20,
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <div style={{ fontSize: 12, color: GOLD, fontWeight: 900, textTransform: "uppercase" }}>{p.tier}</div>
                <div style={{ fontSize: 24, fontWeight: 900, margin: "4px 0" }}>{p.price}</div>
                <div style={{ fontSize: 12, color: `${NAVY}77` }}>{p.sub}</div>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: "8px 0 0" }}>{p.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16 }}>
            <a
              href="https://buy.stripe.com/28E7sNdkEeUW5g96as8k91U"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                background: GOLD,
                color: NAVY,
                padding: "14px 24px",
                borderRadius: 10,
                fontWeight: 900,
                textDecoration: "none",
              }}
            >
              Start Enterprise — £1,499/mo →
            </a>
          </div>
        </section>

        <section
          style={{
            background: "white",
            borderRadius: 14,
            padding: 28,
            border: `1px solid ${NAVY}1a`,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Why one substrate, not six vendors</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, lineHeight: 1.6, margin: 0 }}>
            Most healthcare AI teams run on 4-6 separate compliance tools: a HIPAA specialist, a
            FDA pathway consultant, an EU MDR advisor, an EU AI Act readiness service, an AI
            BOM tool, and a bias-detection library. Each tool produces a different evidence pack.
            Each tool's evidence has to be reconciled at audit time. MEOK ships all six as one
            HMAC-signed chain. One vendor. One invoice. One signed evidence pack the auditor
            reads in an afternoon.
          </p>
        </section>

        <section
          style={{
            background: "white",
            borderRadius: 14,
            padding: 28,
            border: `1px solid ${NAVY}1a`,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Talk to a healthcare compliance engineer</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, lineHeight: 1.6, margin: 0 }}>
            The bundle ships as a single deployment. Onboarding is a 30-min call, not a 6-week
            implementation. <a href="mailto:nicholas@meok.ai?subject=Healthcare%20AI%20compliance" style={{ color: NAVY, textDecoration: "underline" }}>nicholas@meok.ai</a>.
            We can be live in 7 days.
          </p>
        </section>

        <section style={{ marginTop: 48 }}>
          <h2 style={{ fontSize: 26, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <details
                key={f.q}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: "16px 20px",
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <summary style={{ fontWeight: 900, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
