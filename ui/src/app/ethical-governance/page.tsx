import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Ethical Governance · £79-£1,499/mo · MEOK AI Labs",
  description:
    "ISO 42001 + EU AI Act Chapter III + IEEE 7000. AI Management System audits, conformity assessments, ethical design integration, bias + fairness + transparency unified dashboard, and signed governance attestations.",
  alternates: { canonical: "https://meok.ai/ethical-governance" },
  openGraph: {
    title: "AI Ethical Governance — MEOK ISO 42001 + EU AI Act Ch III + IEEE 7000",
    description: "AIMS audit + conformity assessment + ethical design integration + signed attestations. £79-£1,499/mo.",
    type: "website",
    url: "https://meok.ai/ethical-governance",
    images: [{ url: "/api/og?title=AI+Ethical+Governance&desc=ISO+42001+%2B+EU+AI+Act+Ch+III+%2B+IEEE+7000", width: 1200, height: 630, alt: "Ethical Governance Product" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Ethical Governance — ISO 42001 + EU AI Act Ch III + IEEE 7000",
    description: "AIMS audit + conformity assessment + ethical design integration + signed attestations. £79-£1,499/mo.",
    site: "@meok_ai",
    images: ["/api/og?title=AI+Ethical+Governance&desc=ISO+42001+%2B+EU+AI+Act+Ch+III+%2B+IEEE+7000"],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_499 = "https://buy.stripe.com/4gMfZja8seUWbEx1Uc8k915?prefilled_promo_code=LAUNCH50";
const STRIPE_1999 = "https://buy.stripe.com/7sY5kF3K4cMObEx2Yg8k917";

const TIERS = [
  {
    name: "Pro",
    price: "£79/mo",
    desc: "Governance baseline. ISO 42001 AI Management System audit. EU AI Act Chapter III conformity assessment. IEEE 7000 ethical design integration. Unified bias + fairness + transparency dashboard.",
    href: STRIPE_499,
    highlight: false,
    features: [
      "ISO 42001 AI Management System audit",
      "EU AI Act Chapter III conformity assessment",
      "IEEE 7000 ethical design integration",
      "Bias + fairness + transparency unified dashboard",
      "Stakeholder engagement framework",
      "Signed governance attestations with public verify URLs",
      "Email + Slack support",
    ],
  },
  {
    name: "Enterprise",
    price: "£1,499/mo",
    desc: "Multi-BU governance. Unlimited conformity assessments. Custom ethics frameworks. Per-stakeholder engagement policies. Board-ready governance PDFs + dedicated CSM.",
    href: STRIPE_1999,
    highlight: true,
    features: [
      "Everything in Standard",
      "Unlimited conformity assessments",
      "Multi-BU governance separation with custom ethics frameworks",
      "Per-stakeholder engagement policies + reporting",
      "Custom verify domain (your-firm.com/verify)",
      "Board-ready governance PDFs with executive summaries",
      "Dedicated CSM + 99.9% SLA",
      "Reseller white-label option",
    ],
  },
];

const REGULATIONS = [
  {
    framework: "ISO/IEC 42001:2023",
    obligation: "Establish, implement, maintain, and continually improve an AI management system (AIMS)",
    coverage: "Full AIMS audit with gap analysis, control mapping, and pre-certification evidence pack",
  },
  {
    framework: "EU AI Act Chapter III (Articles 8-15)",
    obligation: "Requirements for high-risk AI systems including risk management, data governance, transparency, human oversight, accuracy, robustness, and cybersecurity",
    coverage: "Chapter III conformity assessment with per-article compliance scoring and remediation tracking",
  },
  {
    framework: "EU AI Act Article 17",
    obligation: "Quality management system for high-risk AI providers covering documented procedures, testing, and corrective actions",
    coverage: "QMS evidence pack with procedure templates, test result tracking, and corrective action logs",
  },
  {
    framework: "EU AI Act Article 43",
    obligation: "Conformity assessment procedures for high-risk AI systems before market placement",
    coverage: "Pre-market conformity assessment workflow with notified-body-ready documentation",
  },
  {
    framework: "IEEE 7000-2021",
    obligation: "Standard model process for addressing ethical concerns during system design",
    coverage: "IEEE 7000 integration with values elicitation, ethical risk analysis, and design requirement templates",
  },
  {
    framework: "IEEE 7010-2020",
    obligation: "Wellbeing metrics for assessing the impact of AI on human wellbeing",
    coverage: "Wellbeing impact dashboard with stakeholder-specific metrics and trend tracking",
  },
  {
    framework: "OECD AI Principles",
    obligation: "Inclusive growth, human-centred values, transparency, robustness, and accountability",
    coverage: "OECD principle mapping with evidence collection and annual attestation per principle",
  },
  {
    framework: "UNESCO Recommendation on AI Ethics",
    obligation: "Proportionality, safety, fairness, sustainability, privacy, human oversight, transparency, responsibility, awareness",
    coverage: "UNESCO principle crosswalk with global ethics framework alignment and multi-stakeholder governance",
  },
];

const FAQ = [
  {
    q: "What's the difference between this and /accountability?",
    a: "/accountability focuses on risk management and algorithmic impact (Article 9, NIST RMF). /ethical-governance is the full governance stack — ISO 42001 AIMS, Chapter III conformity, IEEE 7000 ethical design, and stakeholder engagement. If accountability is 'are we managing risk?', ethical governance is 'are we governing ethically?'. Different scopes; complementary products.",
  },
  {
    q: "What does 'ISO 42001 audit' mean in practice?",
    a: "MEOK runs a gap analysis of your AI management system against every clause of ISO 42001. We identify missing controls, map existing procedures to requirements, and generate a pre-certification evidence pack. You still need a certification body for the formal audit — MEOK makes sure you pass on the first attempt.",
  },
  {
    q: "How does IEEE 7000 integration work?",
    a: "IEEE 7000 is the standard for incorporating ethical considerations into system design. MEOK guides your team through values elicitation workshops, ethical risk analysis, and the creation of ethically-aligned design requirements. Each requirement gets a traceability link to your governance attestations.",
  },
  {
    q: "What's in the 'unified dashboard'?",
    a: "One view showing bias metrics (demographic parity, equalised odds), fairness assessments (individual + group fairness), transparency scores (explainability coverage, disclosure compliance), and ethical governance status (stakeholder engagement, values alignment, conformity status). Designed for Chief Ethics Officers, Chief AI Officers, and board committees.",
  },
  {
    q: "Is this only for large enterprises?",
    a: "No. Any organisation placing high-risk AI on the EU market needs Chapter III conformity (Article 43). Startups building high-risk AI (healthcare, HR, credit scoring, law enforcement) face the same obligations. The Pro tier at £79/mo is designed to make enterprise-grade governance accessible to scale-ups.",
  },
  {
    q: "How does the stakeholder engagement framework work?",
    a: "MEOK provides templates and workflows for engaging affected communities, civil society, domain experts, and regulators throughout the AI lifecycle. Each engagement is logged with outcomes, decisions, and follow-up actions — creating an auditable trail of inclusive governance that regulators increasingly expect.",
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

export default function EthicalGovernancePage() {
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
          ISO 42001 · EU AI Act Chapter III · IEEE 7000 · OECD · UNESCO
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          AI Ethical Governance
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          £79/mo Pro · £1,499/mo Enterprise
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          The full governance stack for AI deployers: ISO 42001 AIMS audits, EU AI Act Chapter III
          conformity assessments, IEEE 7000 ethical design integration, and stakeholder engagement
          frameworks. Every control mapped, every conformity obligation assessed, every stakeholder
          engagement logged — your Chief Ethics Officer gets a unified dashboard instead of a
          governance gap.
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>ISO 42001 certification or conformity assessment due?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            Free 30-min triage call: bring your governance framework, we map every obligation to a MEOK cert + public verify URL. No pitch deck.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:nicholas@meok.ai?subject=Ethical%20Governance%20triage" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              Book governance triage (free) →
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
