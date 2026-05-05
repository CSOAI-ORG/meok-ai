import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 14 — Human Oversight Implementation Guide",
  description:
    "What Article 14 requires: effective natural-person oversight of high-risk AI with documented intervention, override, and stop capabilities. €15M / 3% fines.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-14" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What does effective human oversight mean under Article 14?", a: "Article 14 requires high-risk AI systems be designed + developed in such a way that they can be effectively overseen by natural persons during the period in which the AI system is in use. Oversight measures must enable persons to (a) understand the system's capacities + limitations, (b) remain aware of automation bias, (c) interpret the system's output, (d) decide not to use the system or override its output, (e) intervene in the operation, (f) stop the system via a 'stop' button or similar." },
  { q: "Is Article 14 about a person watching every AI decision?", a: "No. It's about designing the system so a human CAN intervene effectively when needed. Real-time human-in-the-loop is one model; designed exception flows that surface to a human is another. The bar is 'effectiveness' relative to risk." },
  { q: "How does Article 14 relate to Article 9 RMS?", a: "Article 14 oversight measures are themselves a form of risk mitigation under Article 9. The RMS should document which risks are mitigated by which oversight measures — a common audit ask." },
  { q: "What about for biometric ID systems?", a: "Article 14(5) requires high-risk biometric identification systems be designed so no action is taken based on identification unless verified + confirmed by at least two natural persons with the necessary competence, training, and authority — except in narrow law-enforcement carve-outs." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article14Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 14 — Human Oversight</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 14 is where compliance theatre dies. It's not enough to say "a human reviews this" — the system must be designed so a competent person CAN effectively intervene. Documentation alone won't pass.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>Six things humans must be able to do (Article 14(4))</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li>Properly understand the AI system's relevant capacities + limitations.</li>
          <li>Remain aware of automation bias (over-reliance on AI output).</li>
          <li>Correctly interpret the AI system's output, taking into account interpretation tools + methods available.</li>
          <li>Decide not to use the AI system or otherwise disregard / override / reverse its output.</li>
          <li>Intervene in the operation of the AI system.</li>
          <li>Stop the system via a 'stop' button or similar procedure.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 14</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 12 }}>
            meok-governance-engine-mcp emits an Article 14 oversight design checklist mapped to your specific high-risk system. /audit-prep-bundle (£4,950) wraps Article 14 implementation in a 14-day engagement with a signed evidence pack.
          </p>
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
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 14</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
