import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Algorithmic Accountability · £399-£1,499/mo · MEOK AI Labs",
  description:
    "EU AI Act Article 9 (Risk Management) + UK AI Bill + NIST AI RMF. Automated risk management systems, algorithmic impact assessments, continuous monitoring with drift detection, and board-ready accountability reports.",
  alternates: { canonical: "https://meok.ai/accountability" },
  openGraph: {
    title: "AI Algorithmic Accountability — MEOK Article 9 + UK AI Bill + NIST RMF",
    description: "Automated risk management + algorithmic impact assessments + signed attestations. £399-£1,499/mo.",
    type: "website",
    url: "https://meok.ai/accountability",
    images: [{ url: "/api/og?title=AI+Algorithmic+Accountability&desc=Article+9+%2B+UK+AI+Bill+%2B+NIST+AI+RMF", width: 1200, height: 630, alt: "Accountability Product" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Algorithmic Accountability — Article 9 + UK AI Bill + NIST RMF",
    description: "Automated risk management + algorithmic impact assessments + signed attestations. £399-£1,499/mo.",
    site: "@meok_ai",
    images: ["/api/og?title=AI+Algorithmic+Accountability&desc=Article+9+%2B+UK+AI+Bill+%2B+NIST+AI+RMF"],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_399 = "https://buy.stripe.com/PLACEHOLDER_ACCOUNTABILITY_STD";
const STRIPE_1499 = "https://buy.stripe.com/PLACEHOLDER_ACCOUNTABILITY_ENT";

const TIERS = [
  {
    name: "Standard",
    price: "£399/mo",
    desc: "Risk management baseline. Automated risk management system per Article 9. Algorithmic impact assessments with signed attestations. NIST AI RMF MAP + MEASURE crosswalk.",
    href: STRIPE_399,
    highlight: false,
    features: [
      "Automated risk management system per Article 9",
      "Algorithmic impact assessments with signed attestations",
      "NIST AI RMF MAP + MEASURE crosswalk",
      "UK AI Bill compliance gap analysis",
      "Continuous monitoring with drift detection",
      "Board-ready accountability reports",
      "Email + Slack support",
    ],
  },
  {
    name: "Enterprise",
    price: "£1,499/mo",
    desc: "Multi-BU deployment. Unlimited risk assessments. Per-system risk policies. Custom risk taxonomy. Board-ready PDF exports + dedicated CSM.",
    href: STRIPE_1499,
    highlight: true,
    features: [
      "Everything in Standard",
      "Unlimited risk assessments",
      "Multi-BU audit-grade risk separation",
      "Per-system risk policies + custom risk taxonomy",
      "Custom verify domain (your-firm.com/verify)",
      "Board-ready PDF exports with executive summaries",
      "Dedicated CSM + 99.9% SLA",
      "Reseller white-label option",
    ],
  },
];

const REGULATIONS = [
  {
    framework: "EU AI Act Article 9(1-2)",
    obligation: "Establish, implement, document, and maintain a risk management system throughout the AI system lifecycle",
    coverage: "Automated risk register with lifecycle tracking, hazard identification, and risk scoring per AI system",
  },
  {
    framework: "EU AI Act Article 9(3)",
    obligation: "Risk management measures shall be tested and documented prior to market placement",
    coverage: "Pre-deployment risk attestation with test evidence, mitigation verification, and signed sign-off",
  },
  {
    framework: "EU AI Act Article 9(4)",
    obligation: "For high-risk AI systems, risk management measures shall include post-market monitoring",
    coverage: "Continuous drift detection with automated alerts, performance degradation tracking, and re-assessment triggers",
  },
  {
    framework: "UK AI Bill (anticipated)",
    obligation: "Pro-innovation framework with context-specific risk-based regulation and accountability for AI deployers",
    coverage: "UK AI Bill gap analysis with crosswalk to EU AI Act obligations and NIST AI RMF alignment",
  },
  {
    framework: "NIST AI RMF MAP",
    obligation: "Map context, identify risks, and frame AI system purpose before design and deployment",
    coverage: "MAP function crosswalk with context documentation, risk identification templates, and stakeholder mapping",
  },
  {
    framework: "NIST AI RMF MEASURE",
    obligation: "Quantify and track AI risks through metrics, testing, and evaluation throughout lifecycle",
    coverage: "MEASURE function crosswalk with KPI dashboards, test result tracking, and performance attestation",
  },
  {
    framework: "ISO/IEC 23894:2023",
    obligation: "AI risk management guidance — structured approach to identifying and treating AI-specific risks",
    coverage: "ISO 23894 risk treatment plans mapped to each identified hazard with mitigation evidence",
  },
  {
    framework: "NIST SP 800-53 (AI overlay)",
    obligation: "Security and privacy controls for AI systems including accountability and audit controls",
    coverage: "AI-specific control overlay with evidence collection and continuous monitoring integration",
  },
];

const FAQ = [
  {
    q: "What's an 'algorithmic impact assessment'?",
    a: "Similar to a Data Protection Impact Assessment (DPIA) but focused on the broader societal and operational impacts of algorithmic systems. MEOK auto-generates assessments covering fairness, transparency, accountability, safety, and security dimensions. Each assessment gets a signed attestation with a public verify URL — board members, regulators, and auditors can verify authenticity independently.",
  },
  {
    q: "How does drift detection work?",
    a: "MEOK monitors your deployed AI systems for performance degradation, distribution shift, and concept drift. When metrics breach configurable thresholds, you get an automated alert with a recommended re-assessment. Every drift event is logged with timestamps and evidence — continuous compliance, not just annual audits.",
  },
  {
    q: "What's the NIST AI RMF crosswalk?",
    a: "The NIST AI Risk Management Framework defines four functions: GOVERN, MAP, MEASURE, MANAGE. MEOK maps your existing controls and evidence to all four functions, showing coverage gaps and providing templates to close them. Particularly useful for US federal contractors and organisations wanting to demonstrate NIST alignment alongside EU AI Act compliance.",
  },
  {
    q: "How does this differ from /transparency and /data-privacy?",
    a: "/transparency explains individual AI decisions (Articles 13 + 50). /data-privacy handles personal data processing (Articles 35 + 15-22). /accountability manages systemic risk across the AI lifecycle (Article 9). Think of it as: transparency = per-decision, privacy = per-data-subject, accountability = per-system. All three are complementary for high-risk AI deployers.",
  },
  {
    q: "Is this relevant for the UK post-Brexit?",
    a: "Yes. The UK AI Bill (expected to pass in 2025-2026) will establish its own accountability framework. MEOK provides a crosswalk between UK and EU obligations so you can demonstrate compliance with both regimes. The NIST AI RMF crosswalk also covers US alignment — three jurisdictions in one product.",
  },
  {
    q: "What do 'board-ready accountability reports' look like?",
    a: "Executive-summary PDFs covering: AI systems inventory, risk levels, mitigation status, incident history, drift alerts, compliance gaps, and recommended actions. Designed for non-technical board members and audit committees. Each report is signed and timestamped with a verify URL — you can present it directly at a board meeting.",
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

export default function AccountabilityPage() {
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
          EU AI Act Article 9 · UK AI Bill · NIST AI RMF · ISO 23894
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          AI Algorithmic Accountability
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          £399/mo Standard · £1,499/mo Enterprise
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Automated risk management systems, algorithmic impact assessments, and continuous
          monitoring for AI deployers. Every risk identified, every impact assessed, every drift
          event logged — your board gets a signed accountability report instead of a compliance
          guessing game.
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Board meeting or regulatory audit coming up?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            Free 30-min triage call: bring your AI inventory, we map every accountability clause to a MEOK cert + public verify URL. No pitch deck.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:nicholas@meok.ai?subject=Accountability%20triage" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              Book accountability triage (free) →
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
