import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 9 — Risk Management System (RMS) Implementation Guide",
  description:
    "What Article 9 requires: continuous risk identification + analysis + evaluation + mitigation across the AI system lifecycle. ISO 42001 + NIST AI RMF crosswalk. €15M / 3% fines.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-9" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What does Article 9 actually require?", a: "Article 9 requires providers of high-risk AI systems to establish, implement, document and maintain a Risk Management System (RMS) as a continuous, iterative process throughout the AI system's entire lifecycle. The RMS must identify + analyze + evaluate + mitigate foreseeable risks to health, safety, fundamental rights." },
  { q: "Who has to comply with Article 9?", a: "Providers of high-risk AI systems per Article 6 + Annex III (employment, education, law enforcement, migration, public services, biometric identification, critical infrastructure, etc.). High-risk Annex III enforcement was delayed by the Digital Omnibus to 2 December 2027 — but you should be implementing now to be ready." },
  { q: "Is Article 9 a one-time audit or continuous?", a: "Continuous. The RMS must run throughout the AI system's lifecycle: pre-deployment risk identification, post-market monitoring (Article 72), incident reporting (Article 73), regular review + update. A static document is not Article 9-compliant." },
  { q: "How does Article 9 relate to ISO/IEC 42001?", a: "ISO/IEC 42001:2023 Annex A.6 (risk management) closely mirrors Article 9. Many controls satisfy both. MEOK's governance-engine MCP cross-walks every Article 9 sub-clause to ISO 42001 Annex A and NIST AI RMF MEASURE controls." },
  { q: "What's the typical Article 9 audit failure mode?", a: "Three common fails: (1) RMS document exists but no living ledger of risks identified + tracked over time. (2) Mitigation measures listed but no effectiveness measurement. (3) No integration with Article 72 post-market monitoring + Article 73 incident reporting — Article 9 is meant to be the upstream of both." },
  { q: "How does MEOK help?", a: "meok-governance-engine-mcp emits a continuous risk register cross-mapped to Article 9 + ISO 42001 + NIST AI RMF. Every entry signed via meok-attestation-api. /audit-prep-bundle (£4,950) wraps Article 9 + Article 10 + Article 14 + Article 26 + Article 50 + Article 72 in a 14-day engagement." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article9Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 9 — Risk Management System</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 9 is the upstream of every other high-risk AI obligation — Articles 10 (data governance), 14 (human oversight), 72 (post-market monitoring), and 73 (incident reporting) all assume an Article 9 RMS exists and is live. Get this one wrong and the whole compliance chain fails.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What Article 9 requires</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>9(2)(a)</strong> — Identify + analyse known and reasonably foreseeable risks to health, safety, fundamental rights when used in accordance with the intended purpose.</li>
          <li><strong>9(2)(b)</strong> — Estimate + evaluate risks emerging when used in accordance with intended purpose AND under conditions of reasonably foreseeable misuse.</li>
          <li><strong>9(2)(c)</strong> — Evaluate other possibly arising risks based on data analysis from the post-market monitoring system referred to in Article 72.</li>
          <li><strong>9(2)(d)</strong> — Adopt appropriate + targeted risk management measures designed to address the risks identified.</li>
          <li><strong>9(3)</strong> — Risk management measures must give due consideration to combined application of requirements in Section 2.</li>
          <li><strong>9(5)</strong> — Eliminate or reduce risks through design + development; where elimination is not possible, implement adequate mitigation + control measures; provide information to deployers.</li>
          <li><strong>9(8)</strong> — Take into account when implementing the RMS whether the AI system is likely to be accessed by, or have an impact on, persons under the age of 18 — and other vulnerable groups.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>Common audit failures</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li>Static "RMS document" written once, never updated — fails 9(1) "continuous iterative process."</li>
          <li>No risk register linking each identified risk to a specific mitigation measure + ownership.</li>
          <li>No measurement of mitigation effectiveness over time.</li>
          <li>RMS doesn't integrate with Article 72 post-market monitoring data — fails 9(2)(c).</li>
          <li>"Reasonably foreseeable misuse" not analysed — fails 9(2)(b).</li>
          <li>No consideration of children + vulnerable groups — fails 9(8).</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 9</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>meok-governance-engine-mcp</strong> — generates and maintains a living risk register cross-mapped to Article 9 + ISO 42001 Annex A.6 + NIST AI RMF MEASURE.</li>
            <li><strong>meok-omnibus-tracker-mcp</strong> — tracks deadlines + delays so your RMS reflects current obligations (e.g., Annex III delayed to 2 Dec 2027).</li>
            <li><strong>meok-attestation-verify</strong> — every RMS update emits a signed cert with a public verify URL.</li>
            <li><strong>/audit-prep-bundle (£4,950)</strong> — full Article 9 RMS implementation in 14 days, signed evidence pack delivered.</li>
          </ul>
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center", marginTop: 32 }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 Audit-Prep Bundle →</Link>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free scorecard →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 9</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
