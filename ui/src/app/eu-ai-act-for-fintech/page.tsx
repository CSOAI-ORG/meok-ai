import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act for Fintech (2026): DORA + Article 10 Bias + Credit Scoring Compliance",
  description:
    "Fintech AI compliance: EU AI Act Article 10 bias for credit scoring, DORA Reg 2022/2554 ICT risk, NIS2 if you process payments. Pre-built signed evidence pack from £149/mo.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-for-fintech" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Is fintech AI high-risk under the EU AI Act?", a: "Annex III(5)(b) lists 'AI systems intended to be used to evaluate the creditworthiness of natural persons or establish their credit score' as high-risk — explicitly. Credit scoring fintech is in scope. Insurance pricing AI (Annex III(5)(c)) is also explicitly high-risk for life + health insurance underwriting + pricing." },
  { q: "Does DORA apply on top?", a: "Yes if you're a financial entity covered by DORA Reg 2022/2554 — banks, payment institutions, e-money institutions, investment firms, crypto-asset service providers (under MiCA), insurers, asset managers. DORA has been fully applicable since 17 January 2025 and stacks on top of EU AI Act for AI-powered ICT services." },
  { q: "What's the bias-detection requirement?", a: "EU AI Act Article 10 requires demonstrably unbiased training data + post-deployment bias monitoring across protected groups (age, sex, disability, ethnicity where lawfully collected). For credit scoring this means demographic-parity + equalized-odds metrics tracked continuously, with Article 9 RMS feedback if drift detected. Evidence must be auditor-verifiable." },
  { q: "What's the timeline?", a: "Article 4 (literacy) — already binding since 2 Feb 2025. Article 50 watermarking (if you ship generative outputs) — 2 Aug 2026. Annex III high-risk obligations (the bulk for credit scoring + pricing) — 2 Dec 2027 after Digital Omnibus delay. DORA — already fully applicable. NIS2 — depends on member state transposition (Germany 17 Oct 2026)." },
  { q: "What does MEOK ship for fintech?", a: "Pre-built bundle: Article 10 bias-detection (£299/mo) for credit/pricing models + DORA-NIS2 crosswalk MCP + transparency logging (£399/mo) for decision traces + audit-prep bundle (£4,950) for full Annex IV technical file. Stripe-checkout end-to-end, MIT-licensed source on PyPI." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function FintechPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Fintech vertical · 28 April 2026</div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Act for Fintech</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>Three regs stack: AI Act + DORA + NIS2. We ship the evidence pack.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Credit scoring and insurance pricing AI are <strong>explicitly</strong> Annex III high-risk under the EU AI Act. DORA Reg 2022/2554 has been fully applicable since 17 January 2025. NIS2 transposition is biting now in Germany + Belgium. The compliance stack is real and we have the bolt-on.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "Article 10 Bias for Credit", price: "£299/mo", href: "/bias-detection", desc: "Demographic parity + equalized odds + calibration on every prediction. Auditor-verifiable signed certs." },
            { title: "DORA + NIS2 Crosswalk", price: "MCP free", href: "/labs/mcp/servers", desc: "MIT-licensed control mapping. Pull into your agent stack via uvx." },
            { title: "Article 13 Transparency Logs", price: "£399/mo", href: "/transparency", desc: "Decision-trace logging for instructions for use + post-market monitoring." },
            { title: "Audit-Prep Bundle", price: "£4,950", href: "/audit-prep-bundle", desc: "14-day delivered: Annex IV technical file, RMS, FRIA, signed evidence." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>What's binding for fintech now</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>EU AI Act Article 4</strong> — staff AI literacy programme (in force 2 Feb 2025).</li>
          <li><strong>EU AI Act Article 5</strong> — prohibited practices fully in force (no social scoring, no manipulative subliminal techniques).</li>
          <li><strong>EU AI Act GPAI obligations 51-55</strong> — if you use GPAI for any production decisions, the foundation provider has obligations; downstream you have your own.</li>
          <li><strong>DORA Reg 2022/2554</strong> — ICT third-party risk register, incident classification, threat-led penetration testing schedule, ICT risk management framework.</li>
          <li><strong>NIS2 (where transposed)</strong> — Germany 17 Oct 2026, Italy + Spain in transposition. Penalty ceiling €10M / 2% turnover (essential entity).</li>
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Free 30-min fintech triage</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Bring your stack (credit-scoring? pricing? GPAI in customer ops?), we map gaps to AI Act + DORA + NIS2.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="mailto:nicholas@meok.ai?subject=Fintech%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Book free triage →</a>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>90-sec scorecard →</Link>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong></p>
      </div>
    </main>
  );
}
