import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Bias Detection · EU AI Act Article 10 Compliance · MEOK AI Labs",
  description:
    "Continuous bias detection + signed compliance attestations for EU AI Act Article 10 (data quality + bias mitigation). £299/mo standalone or embedded API. Auditor-verifiable certificates.",
  alternates: { canonical: "https://meok.ai/bias-detection" },
  openGraph: {
    title: "AI Bias Detection — EU AI Act Article 10",
    description: "£299/mo continuous bias monitoring with HMAC-signed compliance certificates.",
    type: "website",
    url: "https://meok.ai/bias-detection",
    images: [{ url: "/api/og?title=AI+Bias+Detection&desc=EU+AI+Act+Article+10+Compliance", width: 1200, height: 630, alt: "AI Bias Detection" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Bias Detection — EU AI Act Article 10",
    description: "£299/mo continuous bias monitoring with HMAC-signed compliance certificates.",
    site: "@meok_ai",
    images: ["/api/og?title=AI+Bias+Detection&desc=EU+AI+Act+Article+10+Compliance"],
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const STRIPE_LINK = "https://buy.stripe.com/00wfZjcgAeUW4c5cyQ8k90K";

const FEATURES = [
  {
    title: "Demographic parity + equalized odds tracking",
    desc:
      "Continuous monitoring across protected attributes (age, gender, ethnicity, disability). Alert when bias drift exceeds your threshold.",
  },
  {
    title: "EU AI Act Article 10 evidence pack",
    desc:
      "Signed bias-test certificates for every model deployment. Article 10 requires representativeness, free-of-errors, complete data — we attest to all three.",
  },
  {
    title: "Auditor-verifiable certificates",
    desc:
      "Every bias-test run produces an HMAC-signed cert with a public verify URL your DPO + auditor can curl. Tamper-evident, no dashboard login required.",
  },
  {
    title: "Drop-in API for any ML pipeline",
    desc:
      "POST your model predictions + ground truth + protected-attribute labels. Get back a 0-1 fairness score + grade + signed cert. 200ms p95.",
  },
  {
    title: "GDPR-safe — labels never leave your VPC",
    desc:
      "Optional self-hosted MCP for protected attributes. Aggregate scores only sent to MEOK API for cert signing.",
  },
  {
    title: "Crosswalk to ISO/IEC 42001 + NIST AI RMF",
    desc:
      "Same evidence pack covers Article 10 (EU AI Act) + ISO 42001 controls + NIST AI RMF MEASURE 2.10/2.11. One run, three frameworks.",
  },
];

const COMPARISON = [
  { tool: "IBM AIF360 (open source)", price: "Free", limit: "No signed certs · self-host · no audit pack" },
  { tool: "Fiddler AI", price: "$40K-$80K/yr", limit: "Enterprise-only · no Article 10 evidence pack" },
  { tool: "Arthur AI", price: "$60K-$200K/yr", limit: "Enterprise-only · US-centric metrics" },
  { tool: "Credo AI", price: "$30K-$100K/yr", limit: "Governance platform · not pure bias detection" },
  { tool: "MEOK Bias Detection", price: "£299/mo", limit: "EU-first · Article 10 + ISO 42001 + NIST · signed certs" },
];

export default function BiasDetectionPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
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
            marginBottom: 24,
          }}
        >
          EU AI Act Article 10 · ISO/IEC 42001 · NIST AI RMF
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
          AI Bias Detection
        </h1>
        <p style={{ fontSize: "1.5rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          £299/mo · 10K bias tests/mo · signed compliance certificates
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 640, marginBottom: 32 }}>
          Continuous fairness monitoring + auditor-verifiable certificates. The only EU-first bias
          detection layer that ships with a signed Article 10 evidence pack out of the box. Drop-in
          for any ML pipeline. 7-day free trial, no credit card.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 64 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <a
              href={STRIPE_LINK}
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
                textAlign: "center",
              }}
            >
              Start 7-day trial — £299/mo →
            </a>
            <a href="https://buy.stripe.com/dRmfZj2G03ceeQJ8iA8k90O" style={{ fontSize: 12, color: `${NAVY}77`, fontWeight: 700, textAlign: "center", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">or pay annual £2,990 (save £598) →</a>
          </div>
          <a
            href="mailto:nicholas@meok.ai?subject=Compliance%20triage%20call%20request%20&body=Hi%20Nicholas%2C%0A%0AI%27d%20like%20to%20book%20the%20free%2030-min%20compliance%20triage%20call.%20My%20availability%3A%0A%0A-%20%5Byour%20preferred%20day%2Ftime%5D%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BEU%20AI%20Act%20%2F%20DORA%20%2F%20NIS2%20%2F%20CRA%5D%0A%0AThanks"
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
            Book Article 10 readiness call →
          </a>
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          What you get
        </h2>

        <div style={{ display: "grid", gap: 16, marginBottom: 64 }}>
          {FEATURES.map((f) => (
            <div
              key={f.title}
              style={{
                padding: 22,
                background: "white",
                borderRadius: 14,
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <h3 style={{ fontSize: "1.05rem", fontWeight: 900, marginBottom: 6, color: GOLD }}>
                {f.title}
              </h3>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55 }}>{f.desc}</p>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          How it compares
        </h2>

        <div
          style={{
            background: "white",
            borderRadius: 14,
            border: `1px solid ${NAVY}1a`,
            overflow: "hidden",
            marginBottom: 64,
          }}
        >
          {COMPARISON.map((c, i) => (
            <div
              key={c.tool}
              style={{
                padding: 18,
                borderTop: i === 0 ? "none" : `1px solid ${NAVY}1a`,
                display: "grid",
                gridTemplateColumns: "1.5fr 1fr 2fr",
                gap: 16,
                alignItems: "center",
                background: c.tool.includes("MEOK") ? "rgba(201,168,76,0.08)" : "transparent",
              }}
            >
              <div style={{ fontWeight: 900, fontSize: 14 }}>{c.tool}</div>
              <div style={{ fontSize: 13, color: c.tool.includes("MEOK") ? GOLD : `${NAVY}99`, fontWeight: 700 }}>
                {c.price}
              </div>
              <div style={{ fontSize: 12, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.limit}</div>
            </div>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Article 10 audit ahead?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20 }}>
            We ship the API + the evidence pack + the signed cert in one go. 7-day free trial,
            then £299/mo. Cancel any time.
          </p>
          <a
            href={STRIPE_LINK}
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
            Start free trial →
          </a>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 13, textAlign: "center" }}>
          Need broader EU AI Act coverage? See the{" "}
          <Link href="/audit-prep-bundle" style={{ color: GOLD }}>
            £4,950 Audit-Prep Bundle
          </Link>{" "}
          (covers Articles 9, 10, 14, 26 + DPIA pack).
          <br />
          <span style={{ display: "inline-block", marginTop: 12, fontSize: 12, color: `${NAVY}66` }}>
            MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> ·{" "}
            <Link href="/refund" style={{ color: GOLD }}>7-day trial, 30-day money-back</Link>
            {" · "}
            <Link href="/trust" style={{ color: GOLD }}>Trust Center</Link>
          </span>
        </p>
      </div>
    </main>
  );
}
