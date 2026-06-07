import type { Metadata } from "next";
import Link from "next/link";

// Cache Components hint: this page is mostly static — once the underlying audit
// pack stops drifting we'll switch to a static export, but until then we keep
// it dynamic so the latest cert renders without redeploy.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "MEOK self-audit 100/100 — eat our own dog food | MEOK AI Labs",
  description:
    "MEOK AI Labs scored 100/100 on its own EU AI Act readiness scorecard, audited using its own MCP servers. Every claim signed via HMAC-SHA256 and verifiable at the public attestation API.",
  alternates: { canonical: "https://meok.ai/self-audit" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

type Q = {
  id: string;
  framework: string;
  question: string;
  answer_summary: string;
  evidence_doc: string;
  pts: number;
};

const QUESTIONS: Q[] = [
  {
    id: "art_6_risk_class",
    framework: "EU AI Act Article 6",
    question: "Risk-tier classification across all MCPs",
    answer_summary:
      "All 14 MEOK MCPs classified as minimal-risk: stateless compliance tooling, no autonomous decisions about persons, no Annex III scope.",
    evidence_doc: "MEOK_SELF_AUDIT.md#q1",
    pts: 10,
  },
  {
    id: "art_50_watermark",
    framework: "EU AI Act Article 50",
    question: "AI-generated content disclosure + watermarking",
    answer_summary:
      "No synthetic media generated. Every tool response carries `meok_origin` (ai-assisted) or `verbatim_source` (EUR-Lex). Verbatim text gets `>>>highlight<<<` boundary markers.",
    evidence_doc: "MEOK_SELF_AUDIT.md#q2",
    pts: 10,
  },
  {
    id: "art_26_fria",
    framework: "EU AI Act Article 26(9)",
    question: "Fundamental Rights Impact Assessment",
    answer_summary:
      "Documented N/A. MEOK is a provider (Article 3(8)), not a deployer of high-risk Annex III systems. FRIA scope = deployer only.",
    evidence_doc: "MEOK_SELF_AUDIT.md#q3",
    pts: 10,
  },
  {
    id: "art_14_oversight",
    framework: "EU AI Act Article 14",
    question: "Human oversight documented",
    answer_summary:
      "Every MCP requires an explicit human prompt via an MCP client. Tool docstrings document oversight + escalation path (nicholas@meok.ai). CI smoke = oversight of the oversight.",
    evidence_doc: "MEOK_SELF_AUDIT.md#q4",
    pts: 10,
  },
  {
    id: "art_9_rms",
    framework: "EU AI Act Article 9",
    question: "Continuous Risk Management System",
    answer_summary:
      "MEOK_RISK_REGISTER.md tracks 10 risks. GH Actions daily smoke + EUR-Lex sync + CodeQL + Sigstore = continuous loop. Monthly review cadence.",
    evidence_doc: "MEOK_RISK_REGISTER.md",
    pts: 10,
  },
  {
    id: "gdpr_dpia",
    framework: "GDPR Article 35",
    question: "DPIA per the EDPB harmonised template",
    answer_summary:
      "Single DPIA covers PAYG (the only personal-data flow). Email-only collection. Stripe customer metadata is the store. Documented retention + data-subject rights.",
    evidence_doc: "MEOK_DPIA_PAYG.md",
    pts: 10,
  },
  {
    id: "tech_docs",
    framework: "EU AI Act Annex IV",
    question: "Living technical documentation",
    answer_summary:
      "Each MCP repo: README.md + CHANGELOG.md + tests/test_*.py + pyproject.toml + .github/workflows/*. EUR-Lex DB at 404 articles, daily-synced.",
    evidence_doc: "MEOK_SELF_AUDIT.md#q7",
    pts: 10,
  },
  {
    id: "post_market",
    framework: "EU AI Act Article 72",
    question: "Post-market monitoring + incident reporting",
    answer_summary:
      "payg-smoke.yml runs on every push + daily 06:30 UTC. Auto-opens GitHub issue on failure. EUR-Lex sync = regulatory-drift detection. 7 consecutive successful sync runs.",
    evidence_doc:
      ".github/workflows/payg-smoke.yml in meok-attestation-api + eu-ai-act-compliance-mcp",
    pts: 10,
  },
  {
    id: "conformity",
    framework: "EU AI Act Article 43",
    question: "Conformity assessment scoped",
    answer_summary:
      "Documented N/A. Minimal-risk per Q1 → Article 43 conformity assessment doesn't apply (Article 16/25/43 cite chain).",
    evidence_doc: "MEOK_SELF_AUDIT.md#q9",
    pts: 10,
  },
  {
    id: "ai_literacy",
    framework: "EU AI Act Article 4",
    question: "Staff AI literacy",
    answer_summary:
      "MEOK_AI_LITERACY.md — training log, role mapping, evidence of competence (14 published MCPs + 14 months of regulation-tracking commits + NLnet grant submissions).",
    evidence_doc: "MEOK_AI_LITERACY.md",
    pts: 10,
  },
];

const TOTAL = QUESTIONS.reduce((s, q) => s + q.pts, 0);

const CERT_ID = "meok-self-audit-2026-06-07";

const JSONLD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "MEOK self-audit 100/100",
  datePublished: "2026-06-07",
  author: { "@type": "Organization", name: "MEOK AI Labs" },
  publisher: {
    "@type": "Organization",
    name: "MEOK AI Labs",
    identifier: "16939677",
  },
  mainEntity: QUESTIONS.map((q) => ({
    "@type": "Claim",
    name: q.framework,
    text: q.answer_summary,
  })),
};

export default function SelfAuditPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD) }}
      />

      <div style={{ maxWidth: 980, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <p
          style={{
            fontSize: 13,
            fontWeight: 900,
            color: `${NAVY}66`,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Self-audit · Eat our own dog food
        </p>

        <h1
          style={{
            fontSize: "clamp(2rem,5vw,3rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          MEOK AI Labs scored <span style={{ color: GOLD }}>100/100</span> on
          its own EU AI Act readiness scorecard.
        </h1>

        <p style={{ fontSize: 18, color: `${NAVY}aa`, marginBottom: 32, maxWidth: 760 }}>
          We sell a 10-question readiness scorecard. If we couldn&apos;t score 100/100 on our
          own product we shouldn&apos;t be selling it. Below is the full evidence trail.
          Every claim is signed via{" "}
          <a
            href="https://meok-attestation-api.vercel.app"
            style={{ color: GOLD, textDecoration: "underline" }}
          >
            meok-attestation-api
          </a>
          .
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))",
            gap: 16,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              padding: 24,
              borderRadius: 16,
              background: "white",
              border: `1px solid ${NAVY}1a`,
            }}
          >
            <div style={{ fontSize: "3rem", fontWeight: 900, color: GOLD, lineHeight: 1 }}>
              {TOTAL}
            </div>
            <div style={{ fontSize: 13, color: `${NAVY}99`, marginTop: 4 }}>
              out of 100
            </div>
          </div>
          <div
            style={{
              padding: 24,
              borderRadius: 16,
              background: "white",
              border: `1px solid ${NAVY}1a`,
            }}
          >
            <div style={{ fontSize: "3rem", fontWeight: 900, color: NAVY, lineHeight: 1 }}>
              14
            </div>
            <div style={{ fontSize: 13, color: `${NAVY}99`, marginTop: 4 }}>
              MCPs audited
            </div>
          </div>
          <div
            style={{
              padding: 24,
              borderRadius: 16,
              background: "white",
              border: `1px solid ${NAVY}1a`,
            }}
          >
            <div style={{ fontSize: "3rem", fontWeight: 900, color: NAVY, lineHeight: 1 }}>
              4
            </div>
            <div style={{ fontSize: 13, color: `${NAVY}99`, marginTop: 4 }}>
              evidence docs
            </div>
          </div>
          <div
            style={{
              padding: 24,
              borderRadius: 16,
              background: "white",
              border: `1px solid ${NAVY}1a`,
            }}
          >
            <div style={{ fontSize: "1.2rem", fontWeight: 900, color: NAVY, lineHeight: 1.2 }}>
              {CERT_ID}
            </div>
            <div style={{ fontSize: 13, color: `${NAVY}99`, marginTop: 4 }}>
              cert ID
            </div>
          </div>
        </div>

        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 900,
            marginBottom: 16,
            letterSpacing: "-0.01em",
          }}
        >
          Question-by-question evidence
        </h2>

        <div style={{ display: "grid", gap: 16, marginBottom: 48 }}>
          {QUESTIONS.map((q) => (
            <div
              key={q.id}
              style={{
                padding: 24,
                borderRadius: 14,
                background: "white",
                border: `1px solid ${NAVY}1a`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline",
                  gap: 12,
                  marginBottom: 8,
                  flexWrap: "wrap",
                }}
              >
                <p
                  style={{
                    fontSize: 12,
                    fontWeight: 900,
                    color: `${NAVY}66`,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                >
                  {q.framework}
                </p>
                <p style={{ fontSize: 14, fontWeight: 900, color: GOLD }}>{q.pts}/10 ✓</p>
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 800, marginBottom: 8 }}>{q.question}</h3>
              <p
                style={{
                  fontSize: 15,
                  color: `${NAVY}cc`,
                  lineHeight: 1.55,
                  marginBottom: 8,
                }}
              >
                {q.answer_summary}
              </p>
              <p style={{ fontSize: 12, color: `${NAVY}77`, fontFamily: "ui-monospace, Menlo, monospace" }}>
                Evidence: {q.evidence_doc}
              </p>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 16,
            background: NAVY,
            color: "white",
            marginBottom: 32,
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Re-run the audit yourself
          </h2>
          <p style={{ color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>
            Honestly, all the proof is just a few `pip install` calls and a Python script
            away.
          </p>
          <pre
            style={{
              background: "#0a0a0a",
              color: "#a0e0ff",
              padding: 16,
              borderRadius: 10,
              fontSize: 13,
              overflowX: "auto",
              fontFamily: "ui-monospace, Menlo, monospace",
              marginBottom: 16,
            }}
          >{`# Install the MCPs MEOK audited itself with
pip install -U eu-ai-act-compliance-mcp \\
              bias-detection-mcp \\
              dora-compliance-mcp \\
              nis2-compliance-mcp

# Run the audit script (reads MEOK profile + scores against the 10 questions)
curl -sSL https://raw.githubusercontent.com/CSOAI-ORG/clawd-workspace/main/tools/run_self_audit.py \\
  | python3 -

# → writes self_audit_output/MEOK_SELF_AUDIT_CERT.json
# → score 100/100 + HMAC-signed cert
# → tamper any of the docs and the signature breaks`}</pre>
        </div>

        <div
          style={{
            padding: 32,
            borderRadius: 16,
            background: "white",
            border: `1px solid ${NAVY}1a`,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 4 }}>
              Want to score yourself?
            </h3>
            <p style={{ color: `${NAVY}99` }}>The 10-question scorecard is free.</p>
          </div>
          <Link
            href="/scorecard"
            style={{
              padding: "14px 28px",
              background: GOLD,
              color: NAVY,
              borderRadius: 12,
              fontWeight: 900,
              textDecoration: "none",
              fontSize: 14,
            }}
          >
            Take the scorecard →
          </Link>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center" }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> ·{" "}
          <Link href="/refund" style={{ color: GOLD }}>
            Refund policy
          </Link>
        </p>
      </div>
    </main>
  );
}
