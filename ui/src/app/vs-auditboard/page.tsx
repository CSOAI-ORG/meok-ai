import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs AuditBoard: Open-source EU AI Act Bolt-On (2026)",
  description:
    "AuditBoard is enterprise GRC for SOX, internal audit, ESG. It does NOT cover EU AI Act, DORA, NIS2, or EU CRA. MEOK is the open-source EU regulatory bolt-on at £79-£1,499/mo.",
  alternates: { canonical: "https://meok.ai/vs-auditboard" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; ab: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "SOX (Sarbanes-Oxley) compliance", ab: true, meok: false, note: "AuditBoard's home turf — use them" },
  { row: "Internal audit workflow management", ab: true, meok: false, note: "AuditBoard's strongest area" },
  { row: "Enterprise risk management (ERM)", ab: true, meok: false },
  { row: "ESG / sustainability reporting", ab: true, meok: false },
  { row: "Issue / control management", ab: true, meok: false },
  { row: "Audit planning + scoping", ab: true, meok: false },
  { row: "GDPR controls", ab: "Generic GRC", meok: "Crosswalk + DPIA bridge", note: "MEOK adds AI-specific DPIA→FRIA" },
  { row: "EU AI Act Article 4 (literacy)", ab: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 6 + Annex III", ab: false, meok: true },
  { row: "EU AI Act Article 9 (RMS)", ab: false, meok: true },
  { row: "EU AI Act Article 10 (bias)", ab: false, meok: true },
  { row: "EU AI Act Article 14 (oversight)", ab: false, meok: true },
  { row: "EU AI Act Article 26(9) (FRIA)", ab: false, meok: true },
  { row: "EU AI Act Article 43 (conformity)", ab: false, meok: true },
  { row: "EU AI Act Article 50 (watermarking)", ab: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 72 (post-market)", ab: false, meok: true },
  { row: "DORA (Reg 2022/2554)", ab: false, meok: true },
  { row: "NIS2 / NIS2-UmsuCG", ab: false, meok: true },
  { row: "EU CRA (Reg 2024/2847)", ab: false, meok: true },
  { row: "ISO/IEC 42001", ab: false, meok: true },
  { row: "Open-source under MIT", ab: false, meok: true },
  { row: "HMAC-signed evidence per control", ab: false, meok: true },
  { row: "Pricing entry", ab: "$50K-$200K+/yr enterprise", meok: "£0 free + £79/mo Pro" },
];

const FAQ = [
  { q: "Does AuditBoard cover the EU AI Act?", a: "No. AuditBoard is enterprise GRC focused on SOX compliance, internal audit workflow, enterprise risk management (ERM), and ESG reporting. EU AI Act, DORA, NIS2, and EU CRA are not on AuditBoard's roadmap as of 27 April 2026. For EU AI/cyber regulations you need a bolt-on like MEOK." },
  { q: "Can I run AuditBoard and MEOK together?", a: "Yes — that's the recommended setup for large enterprises. AuditBoard handles SOX + ERM + internal audit workflow + ESG. MEOK handles the EU regulatory evidence layer (EU AI Act + DORA + NIS2 + CRA + ISO/IEC 42001) with cryptographically signed attestations. Different surfaces, complementary. The signed certs from MEOK can flow into AuditBoard's evidence repository as auditor-verifiable artefacts." },
  { q: "What's the pricing gap?", a: "AuditBoard is enterprise-tier ($50K-$200K+ annual contracts). MEOK starts free (8 MIT MCPs on PyPI) and scales to £79/mo Pro / £1,499/mo Enterprise. MEOK is appropriate for pre-Series-C AI companies + mid-market with EU exposure; AuditBoard is appropriate for Fortune 500 / large public companies." },
  { q: "Does AuditBoard sign cryptographic attestations?", a: "No. AuditBoard provides workflow + dashboards + evidence repository — auditors read evidence via the platform. MEOK signs every attestation with HMAC-SHA256 and exposes a public verify_url any auditor can curl independently. Different evidence model." },
  { q: "Why pick MEOK over AuditBoard?", a: "Three reasons: (1) you need EU AI Act / DORA / NIS2 / CRA coverage that AuditBoard doesn't provide; (2) you need open-source MIT-licensed tooling drop-in to your agent stack; (3) you're price-sensitive — MEOK is 100×+ cheaper at the entry tier. For Fortune 500 SOX work you need AuditBoard; for an AI startup shipping to the EU you need MEOK." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function VsAuditBoardPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>
          Honest comparison · updated 27 April 2026
        </div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>MEOK vs AuditBoard</h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>AuditBoard is SOX + ERM. MEOK is EU AI/cyber regs.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          AuditBoard is one of the strongest enterprise GRC platforms for SOX, internal audit, and ERM workflows.
          We use it. But EU AI Act, DORA, NIS2, and EU CRA aren&apos;t on its roadmap. That&apos;s our lane.
        </p>

        <div style={{ background: "white", borderRadius: 14, border: `1px solid ${NAVY}1a`, overflow: "hidden", marginBottom: 64 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white", letterSpacing: "0.04em" }}>
            <div style={{ padding: "12px 16px" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>AUDITBOARD</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div key={c.row} style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontSize: 13, borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`, alignItems: "center" }}>
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.ab === true ? "✓" : c.ab === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ fontSize: 11 }}>{c.ab}</span>}
              </div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08`, background: "rgba(201,168,76,0.04)" }}>
                {c.meok === true ? <span style={{ color: GOLD, fontWeight: 900 }}>✓</span> : c.meok === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ color: GOLD, fontSize: 11 }}>{c.meok}</span>}
              </div>
              <div style={{ padding: "12px 16px", color: `${NAVY}77`, fontSize: 12, borderLeft: `1px solid ${NAVY}08` }}>{c.note || ""}</div>
            </div>
          ))}
        </div>

        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Add EU AI Act + DORA + NIS2 to your AuditBoard evidence repository</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Free 30-min triage call. Bring your AuditBoard scope, we map gaps to MEOK signed certs.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@csoai.org?subject=AuditBoard%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book gap-analysis (free) →</a>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>30-day money-back</Link>
        </p>
      </div>
    </main>
  );
}
