import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 43 — Conformity Assessment + CE Marking Implementation",
  description:
    "What Article 43 requires: high-risk AI providers must perform a conformity assessment (self-assessment OR Notified Body audit) before placing on EU market. CE marking + EU declaration of conformity required.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-43" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What's a conformity assessment under Article 43?", a: "Conformity assessment is the procedure providers of high-risk AI systems use to demonstrate compliance with Articles 9-15 + 17-22 (the high-risk requirements) before placing the system on the EU market. Two procedures: (a) internal control / self-assessment per Annex VI for most Annex III high-risk systems, OR (b) third-party Notified Body audit per Annex VII for Annex I high-risk + biometric ID systems." },
  { q: "Who needs to use a Notified Body vs self-assess?", a: "Annex I high-risk systems (those tied to existing EU product safety legislation — medical devices, machinery, vehicles, toys, etc.) generally need Notified Body assessment. Annex III high-risk (employment, education, law enforcement, migration, etc.) generally use internal/self-assessment, with limited exceptions for biometric identification systems." },
  { q: "What's the CE marking?", a: "After successful conformity assessment, the provider draws up an EU declaration of conformity (Article 47), affixes the CE marking (Article 48), and registers the system in the EU public database (Article 49 + 71). The CE marking is the visible signal that the system has gone through conformity assessment." },
  { q: "When does Article 43 take effect?", a: "Annex III high-risk obligations were delayed by the Digital Omnibus (March 2026) to 2 December 2027. Annex I high-risk delayed to 2 August 2028. So most providers have until late 2027 to ship conformity-assessed Annex III systems." },
  { q: "How does MEOK help?", a: "meok-cra-annex-iv-classifier-mcp generates the Annex IV technical documentation that conformity assessment requires. meok-governance-engine-mcp produces the EU declaration of conformity template per Annex V. /audit-prep-bundle £4,950 wraps Article 43 + Annex IV + Articles 9-15 in a 14-day signed evidence pack ready for self-assessment or Notified Body submission." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article43Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 43 — Conformity Assessment + CE Marking</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 43 is the gate every high-risk AI system has to pass before it can be sold in the EU. Get the conformity-assessment procedure wrong and you're either over-paying for a Notified Body you didn't need, or under-doing a self-assessment that won't survive scrutiny.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What Article 43 requires</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>Annex VI procedure (internal/self-assessment)</strong> — applies to most Annex III high-risk systems. Provider verifies compliance themselves; documents in technical file; signs declaration of conformity.</li>
          <li><strong>Annex VII procedure (Notified Body audit)</strong> — applies to Annex I high-risk systems + biometric identification systems. Third-party audit required.</li>
          <li><strong>Article 47 EU declaration of conformity</strong> — written, dated, signed by provider; states which Annex was followed; lists identified standards used.</li>
          <li><strong>Article 48 CE marking</strong> — affixed to product or accompanying documentation. Notified Body identification number where Annex VII applied.</li>
          <li><strong>Articles 49 + 71 EU database registration</strong> — high-risk systems registered in the EU public database before placing on market.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 43</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>meok-cra-annex-iv-classifier-mcp</strong> — generates Annex IV technical documentation in conformity-assessment-ready format.</li>
            <li><strong>meok-governance-engine-mcp</strong> — produces EU declaration of conformity template per Annex V + auto-fills harmonised standards used (ISO/IEC 42001, ISO/IEC TR 24028, etc.).</li>
            <li><strong>/audit-prep-bundle (£4,950)</strong> — 14-day signed evidence pack covering Article 43 conformity assessment + Annex IV + Articles 9-15 + 17-22.</li>
            <li><strong>/consulting (£950/day)</strong> — Notified Body engagement support if your system is Annex I or biometric ID and you need third-party audit.</li>
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
            <Link href="/consulting" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£950/day consulting →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 43</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
