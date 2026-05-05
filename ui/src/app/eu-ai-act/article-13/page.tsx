import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 13 — Transparency to Deployers Implementation Guide",
  description:
    "What Article 13 requires: high-risk AI providers must give deployers instructions for use that are sufficiently transparent. Includes Annex IV mapping. €15M / 3% fines.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-13" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What does Article 13 actually require?", a: "Providers of high-risk AI systems must design and develop them so their operation is sufficiently transparent — specifically so deployers can interpret the system's output and use it appropriately. The system must come with instructions for use including: (a) provider identity, (b) characteristics, capabilities, limitations, (c) circumstances that may lead to risks to health/safety/fundamental rights, (d) human oversight measures, (e) computational and hardware resources needed, (f) lifecycle + maintenance + cybersecurity." },
  { q: "How does Article 13 differ from Article 50?", a: "Article 13 is provider-to-deployer transparency (B2B documentation). Article 50 is deployer-to-end-user disclosure (consumer-facing notices, watermarks, deepfake disclosure). Different audiences, different timing, different evidence." },
  { q: "Is Article 13 the same as Annex IV technical documentation?", a: "Closely linked. Annex IV is the format of the technical documentation a provider must keep. Article 13 specifies what must be communicated to the deployer (often a subset of Annex IV plus operational instructions). The /docs page on a B2B AI vendor's website is essentially their Article 13 documentation surface." },
  { q: "When does Article 13 take effect?", a: "Article 13 binds providers of high-risk AI systems. The Digital Omnibus delayed Annex III high-risk to 2 December 2027 / Annex I high-risk to 2 August 2028. So providers building Annex III high-risk systems have until late 2027 to ship Article 13 compliant documentation." },
  { q: "How does MEOK help?", a: "meok-governance-engine-mcp generates a templated Article 13 instructions-for-use document mapped to your specific high-risk AI system. /audit-prep-bundle £4,950 wraps Article 13 + Annex IV + Articles 9/10/14/26 in a 14-day signed evidence pack." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article13Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 13 — Transparency to Deployers</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 13 is the B2B-documentation backbone of the EU AI Act. Every high-risk provider must give deployers enough information to operate the system safely. Shipping a high-risk AI without this documentation = automatic Article 99 fine exposure.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What Article 13 requires</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>13(1)</strong> — High-risk AI systems must be designed + developed so deployers can interpret the system's output and use it appropriately.</li>
          <li><strong>13(2)</strong> — High-risk AI systems must be accompanied by instructions for use containing concise, complete, correct, clear information that is relevant, accessible, and comprehensible to deployers.</li>
          <li><strong>13(3)</strong> — Instructions for use must contain at least: provider identity + contact details, system characteristics + capabilities + limitations, performance metrics + intended purpose, foreseeable circumstances leading to risk, computational + hardware resources, lifecycle expectations + maintenance + cybersecurity measures, training set characteristics where appropriate, human oversight provisions per Article 14.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 13</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>meok-governance-engine-mcp</strong> — generates Article 13 instructions-for-use template mapped to your high-risk system + crosswalked to Annex IV technical documentation requirements.</li>
            <li><strong>/transparency £399-£1,499/mo</strong> — continuous decision-trace logging + signed transparency attestations (the runtime continuation of Article 13 documentation obligations).</li>
            <li><strong>/audit-prep-bundle £4,950</strong> — full Article 13 + Annex IV in 14 days with signed evidence pack.</li>
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
            <Link href="/transparency" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£399/mo Transparency →</Link>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 Audit-Prep Bundle →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 13</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
