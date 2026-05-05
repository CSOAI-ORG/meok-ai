import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 10 — Data Governance + Bias Mitigation Implementation",
  description:
    "What Article 10 requires: representative + relevant + free-of-errors training/validation/test data with documented bias mitigation. €15M / 3% fines. £299/mo continuous bias detection live.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-10" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What does Article 10 require for training data?", a: "Article 10 requires that training, validation, and test datasets used for high-risk AI systems are subject to data governance and management practices appropriate for the intended purpose. Datasets must be relevant, sufficiently representative, and to the best extent possible, free of errors and complete in view of the intended purpose." },
  { q: "Does Article 10 apply only to training data?", a: "It applies to training, validation, and test datasets — all three. Plus the data governance practices around their collection, processing, labeling, examination, and detection of biases." },
  { q: "What bias-detection methodology does Article 10 require?", a: "Article 10(2)(f) requires examination in view of possible biases that are likely to affect health and safety of persons, have a negative impact on fundamental rights, or lead to discrimination prohibited under EU law. The article doesn't mandate a specific metric but the EDPB harmonised template + ISO/IEC TR 24027 are the de-facto standards." },
  { q: "What about biometric / sensitive personal data?", a: "Article 10(5) allows providers to process special categories of personal data to ensure bias detection + correction in high-risk systems — but only with strict safeguards including pseudonymisation, technical limitations, and prohibition on transmission. This is a narrow lawful-basis carve-out." },
  { q: "How does MEOK help with Article 10?", a: "meok-bias-detection at biasdetectionof.ai (£299/mo) ships continuous demographic-parity + equalized-odds tracking with HMAC-signed Article 10 evidence packs. Cross-mapped to ISO/IEC TR 24027 + NIST AI RMF MEASURE 2.10/2.11. 7-day free trial, no credit card." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article10Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 10 — Data Governance + Bias</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 10 is the data-governance backbone of the EU AI Act. Every high-risk AI system has to prove its training, validation, and test data are <em>relevant + sufficiently representative + free of errors + complete</em> — and that bias has been examined and mitigated. Get this wrong and you fail Article 10, Article 9 (upstream), and possibly GDPR Article 35 (DPIA) all at once.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What Article 10 requires</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>10(2)(a)</strong> — Relevant design choices for the dataset.</li>
          <li><strong>10(2)(b)</strong> — Data collection processes and origin of the data.</li>
          <li><strong>10(2)(c)</strong> — Data preparation operations (annotation, labeling, cleaning, updating, enrichment, aggregation).</li>
          <li><strong>10(2)(d)</strong> — Formulation of relevant assumptions in particular concerning the information data is supposed to measure and represent.</li>
          <li><strong>10(2)(e)</strong> — Assessment of availability, quantity and suitability of the datasets that are needed.</li>
          <li><strong>10(2)(f)</strong> — <strong>Examination in view of possible biases</strong> likely to affect health and safety, have negative impact on fundamental rights, or lead to discrimination.</li>
          <li><strong>10(2)(g)</strong> — Identification of relevant data gaps or shortcomings, and how those gaps + shortcomings can be addressed.</li>
          <li><strong>10(3)</strong> — Datasets must be relevant, sufficiently representative, and to the best extent possible, free of errors and complete.</li>
          <li><strong>10(5)</strong> — Special categories of personal data lawful-basis carve-out for bias detection (with strict safeguards).</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 10</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>biasdetectionof.ai (£299/mo)</strong> — continuous demographic-parity + equalized-odds tracking with signed Article 10 evidence pack on every test run.</li>
            <li><strong>meok-dpia-edpb-template-mcp</strong> — auto-fills the EDPB harmonised DPIA template (14 April 2026) for any AI system, cross-mapping to Article 10 data-governance obligations.</li>
            <li><strong>meok-governance-engine-mcp</strong> — Article 10 → ISO/IEC TR 24027 → NIST AI RMF MEASURE 2.10/2.11 crosswalk.</li>
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

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/bias-detection" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£299/mo Bias Detection →</Link>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free scorecard →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 10</a> · ISO/IEC TR 24027 · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
