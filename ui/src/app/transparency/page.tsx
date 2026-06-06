import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Transparency & Explainability · £79-£1,499/mo · MEOK AI Labs",
  description:
    "Article 50 + GDPR Article 22 + EU AI Act explainability evidence pack. Continuous decision-trace logging + signed transparency attestations. The FinServ + Healthcare RFP ticket.",
  alternates: { canonical: "https://meok.ai/transparency" },
  openGraph: {
    title: "AI Transparency & Explainability — MEOK Article 50 + GDPR 22 + EU AI Act",
    description: "Continuous decision-trace logging + signed evidence pack. £79-£1,499/mo.",
    type: "website",
    url: "https://meok.ai/transparency",
    images: [{ url: "/api/og?title=AI+Transparency+%26+Explainability&desc=Article+50+%2B+GDPR+22+%2B+EU+AI+Act+evidence+pack", width: 1200, height: 630, alt: "Transparency Product" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Transparency & Explainability — Article 50 + GDPR 22",
    description: "Continuous decision-trace logging + signed evidence pack. £79-£1,499/mo.",
    site: "@meok_ai",
    images: ["/api/og?title=AI+Transparency+%26+Explainability&desc=Article+50+%2B+GDPR+22+%2B+EU+AI+Act+evidence+pack"],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_399 = "https://buy.stripe.com/4gMfZja8seUWbEx1Uc8k915?prefilled_promo_code=LAUNCH50";
const STRIPE_1499 = "https://buy.stripe.com/7sY5kF3K4cMObEx2Yg8k917";

const TIERS = [
  {
    name: "Pro",
    price: "£79/mo",
    desc: "FinServ + Healthcare baseline. 50K decision-traces / month. Article 50 transparency obligations + GDPR Article 22 explainability + EU AI Act high-risk Article 13 documentation.",
    href: STRIPE_399,
    highlight: false,
    features: [
      "Continuous decision-trace logging API",
      "Signed transparency attestations per batch",
      "Article 50 + GDPR Art 22 + Art 13 crosswalk",
      "ISO/IEC TR 24028 explainability standard",
      "Public verify URL per cert",
      "50,000 decision traces per month",
      "Email + Slack support",
    ],
  },
  {
    name: "Enterprise",
    price: "£1,499/mo",
    desc: "Multi-BU FinServ deployment. Unlimited traces. Per-decision-class transparency policies. Custom verify domain + dedicated CSM.",
    href: STRIPE_1499,
    highlight: true,
    features: [
      "Everything in Standard",
      "Unlimited decision traces",
      "Multi-BU audit-grade separation",
      "Per-decision-class transparency policies",
      "Custom verify domain (your-firm.com/verify)",
      "Notified-Body-ready evidence pack",
      "Dedicated CSM + 99.9% SLA",
      "Reseller white-label option",
    ],
  },
];

const REGULATIONS = [
  {
    framework: "EU AI Act Article 13",
    obligation: "Provide users with sufficient information to interpret system output (high-risk AI)",
    coverage: "Decision-trace IDs, model card references, performance metrics auto-attached to every trace",
  },
  {
    framework: "EU AI Act Article 50(1)",
    obligation: "AI system intended to interact with natural persons must be designed so users know they're talking to AI",
    coverage: "Disclosure-pixel emitted per decision; auditor verifies via public URL",
  },
  {
    framework: "EU AI Act Article 50(4)",
    obligation: "Deployer using AI for emotion-recognition / biometric categorisation / deepfake must inform individuals",
    coverage: "Deployer-disclosure-statement signed + timestamped per usage event",
  },
  {
    framework: "GDPR Article 22",
    obligation: "Right not to be subject to solely automated decision-making + meaningful info about logic",
    coverage: "Per-decision explanation string (LIME/SHAP/Anchor mode) embedded in attestation",
  },
  {
    framework: "GDPR Article 13(2)(f) + 14(2)(g)",
    obligation: "Inform data subject of automated decision-making + meaningful logic info at collection",
    coverage: "Notice template auto-generated per system, EDPB harmonised wording",
  },
  {
    framework: "ISO/IEC TR 24028",
    obligation: "Trustworthiness of AI: technology landscape including transparency and interpretability",
    coverage: "Maps every cert to ISO 24028 § 6.5 (transparency) + § 6.6 (explainability)",
  },
  {
    framework: "ISO/IEC 42001 Annex A.5",
    obligation: "Documentation of AI system + data + intended purpose",
    coverage: "Auto-generated AIMS documentation tied to each decision-trace ID",
  },
  {
    framework: "NIST AI RMF MEASURE 2.8 / 2.9",
    obligation: "Risks associated with transparency + accountability are documented",
    coverage: "Quarterly transparency-risk review attestation",
  },
];

const FAQ = [
  {
    q: "Why is this priced higher than the rest of the MEOK suite?",
    a: "Transparency is the FinServ and Healthcare RFP ticket. Bank credit-decision systems and clinical-decision-support systems are subject to additional explainability obligations (PSD2 + EBA Guidelines for FinServ, MDR + EU MDR for healthcare). Buyers in those verticals already pay £30K-£200K/yr for explainability dashboards — £79/mo is a massive cost reduction with cryptographic evidence on top.",
  },
  {
    q: "What's a 'decision-trace'?",
    a: "Every time your AI system makes a decision (loan approval, diagnosis recommendation, content moderation, eligibility check, etc.), the input + model version + output + explanation + timestamp are logged as a single trace. Each trace gets an HMAC-signed cert with a public verify URL any auditor can curl. Standard tier handles 50K traces/mo; Enterprise unlimited.",
  },
  {
    q: "How does this differ from your /bias-detection product?",
    a: "/bias-detection is Article 10 (data quality + bias mitigation) — it tests the dataset and the trained model. /transparency is Article 13 + 50 + GDPR 22 — it logs every individual decision the deployed system makes. Different obligations; complementary products. Most regulated buyers need both.",
  },
  {
    q: "Can the explanation be wrong?",
    a: "The explanation is your responsibility — we wrap and sign whatever explanation method you choose (LIME, SHAP, Anchor, counterfactual, attention-weights, custom). MEOK guarantees the cryptographic integrity of the cert (signature + verify URL); you guarantee the truthfulness of the explanation content. Standard for explainability tooling.",
  },
  {
    q: "Does this work for LLM outputs?",
    a: "Yes. For LLM decisions (RAG retrievals, agent tool calls, classification outputs) we log the prompt, model version, decoded output, retrieval-context references, and your chosen explanation method. Particularly useful for FinServ chatbots and healthcare triage agents where every output is potentially auditable.",
  },
  {
    q: "Do I need this if I'm not in FinServ or Healthcare?",
    a: "Not as a hard obligation. EU AI Act Article 13 only binds high-risk providers (Annex III + Annex I); GDPR Article 22 binds anyone making solely-automated decisions with significant effects. If you're outside both, the /bias-detection (£79/mo) + /audit-prep-bundle (£4,950) covers most needs. /transparency is the FinServ/Healthcare/credit-scoring/insurance-pricing escalation tier.",
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

export default function TransparencyPage() {
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
          EU AI Act Article 13 + 50 · GDPR 22 · ISO 24028 · NIST AI RMF
        </div>

        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>
          AI Transparency & Explainability
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          £79/mo Pro · £1,499/mo Enterprise
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Continuous decision-trace logging + signed transparency attestations for FinServ, Healthcare,
          insurance pricing, and any high-risk AI deployer. Every individual AI decision wrapped in
          an HMAC-signed cert with a public verify URL — auditors curl, regulators verify, your
          procurement reviewers stop asking "how do I see what the model decided?"
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>FinServ or Healthcare RFP coming up?</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px" }}>
            Free 30-min triage call: bring the RFP, we map every transparency clause to a MEOK cert + public verify URL. No pitch deck.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <a href="mailto:nicholas@meok.ai?subject=Transparency%20RFP%20triage" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              Book RFP triage (free) →
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
