import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act for Legal Tech (2026): Annex III(8) Justice + Article 14 Oversight",
  description:
    "Legal tech AI for case research, judgment prediction, sentencing aid is Annex III(8) high-risk. Article 14 oversight requires effective human override. We ship the audit pack.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-for-legal-tech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Is legal tech AI high-risk?", a: "Annex III(8) covers AI 'intended to be used by a judicial authority or on its behalf to assist a judicial authority in researching and interpreting facts and the law and in applying the law to a concrete set of facts, or used in a similar way in alternative dispute resolution.' Sentencing aids, judgment-prediction tools, AI-assisted case research deployed in court contexts are explicitly captured. Pure law-firm-internal research tools are LOW-risk unless they make decisions affecting fundamental rights." },
  { q: "What about contract analysis AI?", a: "Generally NOT Annex III high-risk for B2B contract analysis. BUT: if used to analyse contracts that affect natural persons (employment, consumer credit, insurance), Article 26(9) FRIA may apply downstream when the analysis feeds decisions. And GDPR + confidentiality + legal-professional privilege still apply throughout. Article 13 transparency to deployers is mandatory regardless of risk tier." },
  { q: "What's special about Article 14 oversight?", a: "Article 14 requires the high-risk AI to be designed and developed so it can be effectively overseen by natural persons during use. For legal tech that means: (a) the human reviewer must be able to fully understand the system's capabilities + limitations, (b) be aware of automation bias, (c) correctly interpret outputs in context, (d) decide not to use the AI in a particular case, (e) override or reverse outputs, (f) intervene or interrupt operation. UI affordances must be in place — not just policy." },
  { q: "How does GDPR Article 22 stack?", a: "Article 22 prohibits decisions based solely on automated processing that produce legal or similarly significant effects on natural persons, with narrow exceptions (consent, contract necessity, EU/MS law authorisation). For most legal-tech use cases, the practical effect is that the human-in-the-loop must be meaningful, not just a rubber-stamp. Legal-tech vendors should show that their UI actively facilitates substantive human review." },
  { q: "What does MEOK ship for legal tech?", a: "Article 14 oversight templates + decision-trace logging at /transparency (£399/mo). Article 13 transparency-to-deployer disclosure templates. /audit-prep-bundle (£4,950) for full Annex IV + FRIA where needed. Bias detection (£299/mo) for any tool ranking judgments or precedents." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function LegalTechPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Legal Tech vertical · 28 April 2026</div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Act for Legal Tech</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>Annex III(8) for judicial AI. Article 14 oversight is the hard part.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Judicial AI (sentencing aid, judgment prediction, court research) is Annex III(8) high-risk. Article 14 oversight requires the human reviewer to be able to override + intervene meaningfully. Confidentiality + legal-professional privilege + GDPR Article 22 all stack.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "Article 14 Oversight Templates", price: "£399/mo", href: "/transparency", desc: "Decision-trace logging + override audit + automation-bias mitigation prompts." },
            { title: "Article 13 Disclosure Templates", price: "MCP free", href: "/labs/mcp/servers", desc: "Instructions-for-use generation for deployer compliance." },
            { title: "Article 10 Bias for Rankings", price: "£299/mo", href: "/bias-detection", desc: "Judgment / precedent ranking fairness across protected groups." },
            { title: "Audit-Prep Bundle", price: "£4,950", href: "/audit-prep-bundle", desc: "14-day delivered: Annex IV + FRIA + RMS for judicial AI." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>The legal tech compliance stack</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>EU AI Act Annex III(8)</strong> — judicial AI high-risk classification.</li>
          <li><strong>Article 14</strong> — effective human oversight, automation-bias awareness training, override capability.</li>
          <li><strong>Article 26(9) FRIA</strong> — mandatory for public-sector deployers (courts, ministries of justice, ADR providers).</li>
          <li><strong>GDPR Article 22</strong> — solely-automated-decision protection.</li>
          <li><strong>Legal professional privilege</strong> — preserved end-to-end; AI must not break confidentiality.</li>
          <li><strong>Bar association rules</strong> — varies by member state. Some require disclosure to clients of AI use in legal advice.</li>
          <li><strong>Charter of Fundamental Rights Articles 6 + 47</strong> — liberty + effective remedy + fair trial — particularly bite in sentencing-aid contexts.</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>Frequently asked</h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, marginTop: 32 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Win the procurement, don't lose it to the AI Act</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>EU justice ministries + bar associations are putting Article 14 + Article 26(9) into RFPs. Ship signed evidence and you get past the gate.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep →</Link>
            <a href="mailto:nicholas@meok.ai?subject=Legal%20tech%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free triage →</a>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong></p>
      </div>
    </main>
  );
}
