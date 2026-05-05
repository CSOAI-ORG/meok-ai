import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 15 — Accuracy, Robustness, Cybersecurity Implementation",
  description:
    "What Article 15 requires: appropriate level of accuracy, robustness, cybersecurity for high-risk AI throughout lifecycle. Resilience against errors, faults, attempts at unauthorized use. €15M / 3% fines.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-15" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What does Article 15 actually require?", a: "Article 15 requires high-risk AI systems to be designed and developed to achieve an appropriate level of accuracy, robustness, and cybersecurity, and to perform consistently in those respects throughout their lifecycle. Three pillars: (1) accuracy metrics declared in instructions for use, (2) robustness against errors/faults/inconsistencies that may occur within the system or environment, (3) cybersecurity protecting against unauthorized third parties altering use, outputs, or performance." },
  { q: "What's the cybersecurity component about?", a: "Article 15(5) specifically addresses 'attempts by unauthorised third parties to alter their use, outputs or performance' — this includes prompt injection, model poisoning, adversarial inputs, model exfiltration, and supply-chain attacks. The technical solutions must be appropriate to the relevant circumstances and the risks. ENISA + the EU AI Office are jointly publishing technical guidance throughout 2026." },
  { q: "How does this relate to NIS2 and the Cyber Resilience Act?", a: "Article 15 is AI-system-specific cybersecurity; NIS2 is operator-of-essential-services cybersecurity; CRA is product-with-digital-elements cybersecurity. They overlap heavily for AI systems used in critical infrastructure (energy, transport, health, finance) — most providers will satisfy all three with one evidence pack." },
  { q: "What metrics count as 'accuracy'?", a: "Depends on the AI system class. For classifiers: precision, recall, F1, AUC, calibration. For regression: RMSE, MAE, R². For LLMs: factuality, citation accuracy, hallucination rate. The provider declares relevant metrics in the Article 13 instructions for use; auditors check the metrics match real-world performance within tolerance." },
  { q: "How does MEOK help?", a: "meok-mcp-injection-scan-mcp covers a critical Article 15(5) cybersecurity vector (prompt injection, tool-poisoning). meok-governance-engine-mcp ties accuracy + robustness + cybersecurity to ISO 42001 Annex A controls. /audit-prep-bundle wraps everything in a 14-day signed evidence pack." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article15Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 15 — Accuracy, Robustness, Cybersecurity</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 15 is the EU AI Act's "the model has to actually work" article. It binds high-risk AI providers to declare accuracy metrics, defend against environmental drift, and resist adversarial attacks. Where Articles 9/10 are about process, Article 15 is about delivered performance.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What Article 15 requires</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>15(1)</strong> — High-risk AI systems shall be designed + developed to achieve an appropriate level of accuracy, robustness, and cybersecurity, and to perform consistently throughout their lifecycle.</li>
          <li><strong>15(2)</strong> — Levels of accuracy + relevant accuracy metrics shall be declared in the instructions for use accompanying the system.</li>
          <li><strong>15(3)</strong> — High-risk AI systems shall be as resilient as possible regarding errors, faults, or inconsistencies that may occur within the system or the environment in which the system operates, in particular due to interaction with natural persons or other systems.</li>
          <li><strong>15(4)</strong> — Robustness may be achieved through technical redundancy solutions (backup or fail-safe plans).</li>
          <li><strong>15(5)</strong> — Cybersecurity: high-risk AI systems shall be resilient against attempts by unauthorised third parties to alter their use, outputs, or performance by exploiting vulnerabilities. Technical solutions appropriate to relevant circumstances + risks. Includes measures against feedback loops (degenerate model behaviour), data poisoning, model poisoning, model evasion, confidentiality attacks, model flaws.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 15</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>meok-mcp-injection-scan-mcp</strong> — covers Article 15(5) cybersecurity by scanning MCP servers for known prompt-injection + tool-poisoning vectors.</li>
            <li><strong>meok-governance-engine-mcp</strong> — ties accuracy + robustness + cybersecurity to ISO/IEC 42001 Annex A.5 + NIST AI RMF MEASURE 2.5/2.7/2.8.</li>
            <li><strong>/audit-prep-bundle (£4,950)</strong> — Article 15 cybersecurity + accuracy declaration in 14-day signed engagement.</li>
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
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 Audit-Prep Bundle →</Link>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free scorecard →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 15</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
