import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Methodology — what we count, what we don't, our fail rules | MEOK.AI",
  description:
    "MEOK methodology: how we score MCP servers, how we count fleet packages, what we exclude, what we don't claim, and the fail rules that gate our 90+ scores. Honest methodology, not a marketing brochure.",
  keywords: [
    "MEOK methodology",
    "compliance scoring",
    "EU AI Act evidence",
    "MCP server scoring",
    "fail rules",
    "MEOK scorecard",
    "compliance methodology",
    "open methodology",
  ],
  alternates: { canonical: "https://meok.ai/methodology" },
  openGraph: {
    title: "MEOK Methodology — what we count, what we don't, our fail rules",
    description:
      "How we score MCP servers, what we exclude, and the fail rules that gate our 90+ scores. Honest methodology, not a marketing brochure.",
    type: "website",
    url: "https://meok.ai/methodology",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Methodology&desc=What+we+count.+What+we+don%27t.+Our+fail+rules.",
        width: 1200,
        height: 630,
        alt: "MEOK Methodology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Methodology",
    description: "What we count. What we don't. Our fail rules.",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const SCORING = [
  { range: "90–100", label: "Production-grade", desc: "EU AI Act + ISO 42001 + ISO 42005 evidence chain. All 9 in-scope articles covered. HMAC-signed. Auditor-verifiable." },
  { range: "80–89",  label: "Reference-grade", desc: "Substantial coverage. Missing 1-2 controls or has soft gaps. Still suitable for advisory work." },
  { range: "65–79",  label: "Beta",             desc: "Useful for early adopters. Not yet suitable for regulated-organisation use. Watch the changelog for upgrades." },
  { range: "<65",    label: "Quarantined",      desc: "Fails one or more fail rules. Held out of the public scorecard. Cited as 'experimental' in any output." },
];

const COUNT_RULES = [
  {
    q: "How do you count 340+ MCP packages?",
    a: "Counted at the GitHub-repo level under CSOAI-ORG (340+ public repos, all MIT-licensed). The 295 LIVE-PyPI count is a stricter subset (visible on PyPI under the MEOK-AI-Labs publisher). The 294 unique servers on the official MCP Registry is a third count, after server-name dedup. The three numbers are not interchangeable.",
  },
  {
    q: "Why does the scorecard say '84.6 average'?",
    a: "Mean across the 337 scorecarded packages, weighted equally (not by downloads or by revenue). The score is a public static calculation — see https://meok.ai/scorecard — and is recomputed on every release.",
  },
  {
    q: "What do you NOT count?",
    a: "We do not count GitHub stars as a quality signal (we use them only for distribution noise). We do not count PyPI downloads as adoption (downloads are bots, mirrors, and tests; only ~14K/day are organic and ~0 are buyers). We do not count registry views. We do count (a) unique organisations issuing signed certs through the API, (b) HMAC verifications on the /verify endpoint, and (c) HMAC-anchored audit logs.",
  },
  {
    q: "How do you handle phantom packages?",
    a: "A 'phantom package' is a name that exists in our internal tree but is not on PyPI, not on the MCP Registry, and not on a public GitHub release. We mark them 'experimental' in any output, and we publish a phantom-corrected list at /_TABS/_inventory/.",
  },
];

const FAIL_RULES = [
  {
    rule: "FR-01: EU AI Act Article 50 watermarking requires ≥2 layers.",
    detail: "A package that ships SynthID-only or C2PA-only fails FR-01 and is capped at 79 until both layers are present. We do not exempt 'small models' or 'open weights' from this rule — the EU Code of Practice is non-negotiable.",
  },
  {
    rule: "FR-02: HMAC signatures must include the canonical timestamp.",
    detail: "A signature that omits `issued_at` is considered replayable and is auto-failed. We caught 2 packages shipping such signatures in Q1 2026; both were patched within 14 days of disclosure.",
  },
  {
    rule: "FR-03: Audit-log claims require Merkle anchor.",
    detail: "A package that claims 'hash-chained audit log' must publish a Merkle root at a frequency ≤ 24h. Daily-only is fine. Weekly-only fails FR-03.",
  },
  {
    rule: "FR-04: GDPR DPIA outputs must include Art 35(7) checklist.",
    detail: "A DPIA that omits any of the 7 mandatory contents in Art 35(7) is auto-failed. We test this with a synthetic DPIA against each release.",
  },
  {
    rule: "FR-05: DORA ICT third-party register must be machine-readable.",
    detail: "PDF-only or HTML-only is auto-failed. Must be JSON-LD, CycloneDX, or SBOM. Reasoning: the EBA RTS 2023/04 requires the register to be auditable by supervisors, which means structured data.",
  },
  {
    rule: "FR-06: 'makes money' claims are not allowed in the public corpus.",
    detail: "Any package that claims '$X revenue' or '£Y ARR' in its README or docs is auto-quarantined. We do not publish revenue numbers; we publish regulatory-evidence numbers (signed certs, anchored audits, attestations).",
  },
  {
    rule: "FR-07: Witness can never be principal.",
    detail: "A package that signs its own audit certificate with a key that also signs the package is auto-failed. The witness (signing the audit) must be a different principal from the actor (shipping the package).",
  },
];

const EXCLUDED = [
  { item: "CSGA (Council for the Sovereign Governance of AI)", reason: "Severed 2026-01; IP dispute; do not reference." },
  { item: "James Castle / Grant Carter Osborne",             reason: "Severed 2026-01-31; resigned 2026-03-31; do not engage." },
  { item: "Terranova Holdings",                              reason: "Counter-party in the IP dispute; do not reference." },
  { item: "£79/mo pricing",                                  reason: "Retired 2026-06-10. The current starter is £29/mo." },
  { item: "Stripe links ending in 8k90x or 8k83x",           reason: "Dead accounts. Replaced 2026-06-13 with new payment links — all 10 verified live." },
];

export default function MethodologyPage() {
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
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p
            style={{
              color: GOLD,
              fontWeight: 900,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            MEOK Methodology
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            What we count. What we don't. Our fail rules.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            This is the MEOK methodology — the rules that gate our scores, the things we
            explicitly do not count, and the questions you should ask before trusting any
            compliance vendor (including us).
          </p>
        </header>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Scoring (90+ is production-grade)</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 12,
            }}
          >
            {SCORING.map((s) => (
              <div
                key={s.range}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: 20,
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: GOLD,
                    marginBottom: 4,
                  }}
                >
                  {s.range}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 6 }}>{s.label}</div>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: 0 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>How we count</h2>
          {COUNT_RULES.map((c, i) => (
            <details
              key={i}
              style={{
                background: "white",
                borderRadius: 10,
                padding: 16,
                marginBottom: 8,
                border: `1px solid ${NAVY}0d`,
              }}
            >
              <summary
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  cursor: "pointer",
                  color: NAVY,
                }}
              >
                {c.q}
              </summary>
              <p style={{ fontSize: 14, color: `${NAVY}cc`, lineHeight: 1.6, marginTop: 12 }}>
                {c.a}
              </p>
            </details>
          ))}
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Fail rules (the 7 that gate 90+)</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, marginBottom: 16, maxWidth: 720 }}>
            A package is capped at 79 if it fails any of the rules below. Fail rules are
            non-negotiable; we do not sell exemptions. The full list is in the public
            scorecard.
          </p>
          <ol style={{ listStyle: "none", padding: 0, counterReset: "failrule" }}>
            {FAIL_RULES.map((f, i) => (
              <li
                key={i}
                style={{
                  background: "white",
                  borderRadius: 10,
                  padding: 20,
                  marginBottom: 12,
                  border: `1px solid ${NAVY}1a`,
                  borderLeft: `4px solid ${GOLD}`,
                }}
              >
                <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{f.rule}</div>
                <p style={{ fontSize: 14, color: `${NAVY}cc`, lineHeight: 1.6, margin: 0 }}>
                  {f.detail}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>What we explicitly exclude</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, marginBottom: 16, maxWidth: 720 }}>
            We do not reference, cite, or co-publish with the following. If you see a MEOK
            artifact that mentions any of these, it is a phantom and should be flagged to{" "}
            <a href="mailto:security@meok.ai" style={{ color: NAVY }}>
              security@meok.ai
            </a>
            .
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 12,
            }}
          >
            {EXCLUDED.map((e) => (
              <div
                key={e.item}
                style={{
                  background: "white",
                  borderRadius: 10,
                  padding: 16,
                  border: `1px solid ${NAVY}0d`,
                }}
              >
                <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6 }}>{e.item}</div>
                <div style={{ fontSize: 13, color: `${NAVY}aa`, lineHeight: 1.5 }}>{e.reason}</div>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            background: "white",
            borderRadius: 14,
            padding: 32,
            border: `1px solid ${NAVY}1a`,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Challenge the methodology</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, lineHeight: 1.6, margin: 0 }}>
            Methodology is only useful if you can challenge it. Email{" "}
            <a href="mailto:methodology@meok.ai" style={{ color: NAVY }}>
              methodology@meok.ai
            </a>{" "}
            with a counter-rule, a missed fail case, or a count discrepancy. We log every
            challenge and respond within 7 days. If a challenge is valid, the methodology
            version is bumped and the changelog is signed.
          </p>
        </section>
      </div>
    </main>
  );
}
