import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Data Privacy Compliance · £299-£999/mo · MEOK AI Labs",
  description:
    "GDPR Article 35 + EU AI Act Article 10 + Data Governance Act. Automated DPIA generation, data processing inventory, cross-border transfer compliance, and data subject rights automation.",
  alternates: { canonical: "https://meok.ai/data-privacy" },
  openGraph: {
    title: "AI Data Privacy Compliance — MEOK GDPR 35 + EU AI Act Art 10 + DGA",
    description: "Automated DPIA generation + data subject rights automation + signed attestations. £299-£999/mo.",
    type: "website",
    url: "https://meok.ai/data-privacy",
    images: [{ url: "/api/og?title=AI+Data+Privacy+Compliance&desc=GDPR+35+%2B+EU+AI+Act+Art+10+%2B+Data+Governance+Act", width: 1200, height: 630, alt: "Data Privacy Product" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Data Privacy Compliance — GDPR 35 + EU AI Act Art 10",
    description: "Automated DPIA generation + data subject rights automation + signed attestations. £299-£999/mo.",
    site: "@meok_ai",
    images: ["/api/og?title=AI+Data+Privacy+Compliance&desc=GDPR+35+%2B+EU+AI+Act+Art+10+%2B+Data+Governance+Act"],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_299 = "https://buy.stripe.com/3cI7sNfsMaEG5g9dCU8k83T";
const STRIPE_999 = "https://buy.stripe.com/00wfZjcgAeUW4c5cyQ8k90K";

const TIERS = [
  {
    name: "Standard",
    price: "£299/mo",
    desc: "GDPR + EU AI Act baseline. Automated DPIA generation per Article 35. Data processing inventory with AI-specific classifications. Data subject rights automation (Articles 15-22).",
    href: STRIPE_299,
    highlight: false,
    features: [
      "Automated DPIA generation per GDPR Article 35",
      "Data processing inventory with AI-specific classifications",
      "Cross-border transfer compliance (SCCs + adequacy decisions)",
      "Data subject rights automation (Articles 15-22)",
      "EU AI Act Article 10 data quality attestation",
      "Public verify URL per certificate",
      "Email + Slack support",
    ],
  },
  {
    name: "Enterprise",
    price: "£999/mo",
    desc: "Multi-jurisdiction deployment. Unlimited DPIAs. Custom data processing categories. DPO-ready evidence packs. Dedicated CSM + 99.9% SLA.",
    href: STRIPE_999,
    highlight: true,
    features: [
      "Everything in Standard",
      "Unlimited DPIA generation",
      "Multi-jurisdiction transfer impact assessments",
      "Custom data processing categories + retention policies",
      "DPO-ready evidence pack with signed attestations",
      "Custom verify domain (your-firm.com/verify)",
      "Dedicated CSM + 99.9% SLA",
      "Reseller white-label option",
    ],
  },
];

const REGULATIONS = [
  {
    framework: "GDPR Article 35",
    obligation: "Data Protection Impact Assessment required for processing likely to result in high risk to data subjects",
    coverage: "Automated DPIA generation with risk scoring, mitigation tracking, and signed attestation per assessment",
  },
  {
    framework: "GDPR Articles 15-22",
    obligation: "Data subject rights: access, rectification, erasure, restriction, portability, objection, automated decision-making",
    coverage: "Rights request workflow automation with SLA tracking, response templates, and audit trail per request",
  },
  {
    framework: "GDPR Articles 44-49",
    obligation: "Cross-border transfers require adequacy decision, SCCs, or binding corporate rules",
    coverage: "Transfer mapping with SCC templates, adequacy status tracking, and TIA automation per data flow",
  },
  {
    framework: "EU AI Act Article 10(1)",
    obligation: "High-risk AI systems shall be developed using training, validation, and testing data sets that meet quality criteria",
    coverage: "Data quality attestation per dataset with provenance tracking, completeness checks, and bias sampling",
  },
  {
    framework: "EU AI Act Article 10(2-3)",
    obligation: "Training data must be relevant, representative, free of errors, and complete for intended purpose",
    coverage: "Automated data quality scoring with gap analysis and remediation tracking per AI system",
  },
  {
    framework: "Data Governance Act (DGA)",
    obligation: "Conditions for re-use of public sector data, data intermediation, and data altruism",
    coverage: "DGA compliance mapping for data intermediation services with attestation framework",
  },
  {
    framework: "ISO/IEC 27701",
    obligation: "Privacy information management system extending ISO 27001 for PII controllers and processors",
    coverage: "PIMS evidence pack with privacy controls mapped to each processing activity",
  },
];

const FAQ = [
  {
    q: "How does automated DPIA generation work?",
    a: "MEOK ingests your data processing descriptions, AI model specifications, and data flow maps to auto-generate DPIA drafts per GDPR Article 35. Each DPIA includes risk scoring, mitigation recommendations, and a signed attestation. Your DPO reviews and approves — we automate the paperwork, not the decision.",
  },
  {
    q: "What does 'data subject rights automation' mean?",
    a: "When a data subject submits a rights request (access, erasure, portability, etc.), MEOK tracks the request lifecycle from intake through fulfilment, auto-generates response templates, flags SLA deadlines (30 days under GDPR), and logs every action as an auditable event. Your team still reviews and sends — we eliminate the spreadsheet chaos.",
  },
  {
    q: "How does this differ from /transparency?",
    a: "/transparency is about explaining individual AI decisions to users and auditors (Articles 13 + 50 + GDPR 22). /data-privacy is about how you collect, process, store, and transfer personal data (Articles 35 + 15-22 + 44-49 + Article 10). Different obligations; complementary products. If you process personal data through AI systems, you almost certainly need both.",
  },
  {
    q: "Does this cover international data transfers post-Schrems II?",
    a: "Yes. We maintain a live adequacy-decision tracker, auto-generate SCCs for non-adequate jurisdictions, and run Transfer Impact Assessments (TIAs) per EDPB Recommendations 01/2020. When adequacy status changes (e.g., EU-US Data Privacy Framework), you get an alert + updated compliance gap report.",
  },
  {
    q: "Is this only for EU companies?",
    a: "No. GDPR applies extraterritorially — any company processing EU residents' personal data must comply regardless of where it's based. The EU AI Act similarly applies to providers placing AI systems on the EU market. If you have EU customers or users, this product applies to you.",
  },
  {
    q: "Do I need this if I already have a DPO?",
    a: "Your DPO is the decision-maker; MEOK is the tooling. We eliminate 80% of the manual DPIA paperwork, automate rights-request tracking, and provide signed evidence packs your DPO can review in minutes instead of days. Think of us as your DPO's force multiplier.",
  },
];

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function DataPrivacyPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← meok.ai</Link>

        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.15)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: 24,
            marginBottom: 24,
          }}
        >
          GDPR Article 35 · EU AI Act Article 10 · Data Governance Act · ISO 27701
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          AI Data Privacy Compliance
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          £299/mo Standard · £999/mo Enterprise
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Automated DPIA generation, data processing inventory, cross-border transfer compliance,
          and data subject rights automation for AI systems. Every processing activity mapped,
          every rights request tracked, every transfer attested — your DPO gets a signed evidence
          pack instead of a spreadsheet nightmare.
        </p>

        {/* Pricing tiers */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 20 }}>Pricing</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16, marginBottom: 56 }}>
          {TIERS.map((t) => (
            <div
              key={t.name}
              style={{
                background: t.highlight ? "rgba(201,168,76,0.06)" : "white",
                border: `${t.highlight ? "2px" : "1px"} solid ${t.highlight ? GOLD : `${NAVY}1a`}`,
                borderRadius: 16,
                padding: 28,
                position: "relative",
              }}
            >
              {t.highlight && (
                <div style={{ position: "absolute", top: -12, right: 20, background: GOLD, color: NAVY, fontSize: 11, fontWeight: 900, padding: "4px 10px", borderRadius: 999, letterSpacing: "0.05em" }}>
                  ENTERPRISE
                </div>
              )}
              <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 4 }}>{t.name}</h3>
              <div style={{ fontSize: "1.5rem", color: GOLD, fontWeight: 900, marginBottom: 10 }}>{t.price}</div>
              <p style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.55, marginBottom: 18 }}>{t.desc}</p>
              <ul style={{ paddingLeft: 18, color: `${NAVY}99`, fontSize: 13, lineHeight: 1.7, marginBottom: 24 }}>
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a
                href={t.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 20px",
                  borderRadius: 12,
                  background: t.highlight ? GOLD : "transparent",
                  color: t.highlight ? NAVY : NAVY,
                  fontWeight: 900,
                  textDecoration: "none",
                  fontSize: 14,
                  border: t.highlight ? "none" : `1px solid ${NAVY}33`,
                }}
              >
                Subscribe — {t.price} →
              </a>
            </div>
          ))}
        </div>

        {/* Regulatory coverage */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>Regulatory coverage</h2>
        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, marginBottom: 56, overflow: "hidden" }}>
          {REGULATIONS.map((r, i) => (
            <div key={r.framework} style={{ padding: "18px 22px", borderTop: i === 0 ? "none" : `1px solid ${NAVY}10` }}>
              <div style={{ fontSize: 13, color: GOLD, fontWeight: 900, letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 4 }}>
                {r.framework}
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 4 }}>{r.obligation}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>
                <strong>How MEOK covers it:</strong> {r.coverage}
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        {/* CTA */}
        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>GDPR or AI Act audit coming up?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            Free 30-min triage call: bring your data processing inventory, we map every privacy clause to a MEOK cert + public verify URL. No pitch deck.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:nicholas@meok.ai?subject=Data%20Privacy%20triage" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              Book privacy triage (free) →
            </a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              Or jump to £4,950 audit-prep bundle →
            </Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>30-day money-back</Link>
        </p>
      </div>
    </main>
  );
}
