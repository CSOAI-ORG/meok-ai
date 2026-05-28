import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act for Healthcare AI (2026): Annex I + MDR + Notified Body Conformity",
  description:
    "Medical device AI is Annex I high-risk under the EU AI Act — needs Notified Body conformity assessment per Annex VII + MDR (EU) 2017/745 + IVDR (EU) 2017/746 stack. We ship the technical file.",
  alternates: { canonical: "https://meok.ai/eu-ai-act-for-healthcare" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "Is healthcare AI high-risk?", a: "Annex I high-risk: AI systems that are themselves medical devices or that are safety components of medical devices regulated under MDR (EU) 2017/745 or IVDR (EU) 2017/746. This includes diagnostic-imaging AI, decision-support AI, AI-powered surgical robotics, AI in medical software-as-a-medical-device (SaMD), and AI components in IVD analyzers. Annex I means the strictest assessment route." },
  { q: "Self-assessment or Notified Body?", a: "Annex I generally requires Notified Body conformity assessment per Annex VII — third-party audit by an accredited Notified Body. The MDR/IVDR Notified Body designation already covers most cases; the EU AI Act adds an AI-specific layer. You should expect 4-12 month NB review cycles." },
  { q: "How does this stack on MDR?", a: "MDR (in force since 26 May 2021) already covers safety, quality system (ISO 13485), clinical evaluation, post-market surveillance, vigilance reporting. The EU AI Act adds: Article 9 RMS specifically for AI failure modes, Article 10 data governance for training/validation/test sets, Article 14 human oversight in clinical workflow, Article 15 accuracy + cybersecurity + robustness, Article 72 post-market AI-monitoring distinct from MDR PMS." },
  { q: "When does this take effect?", a: "Annex I obligations are now 2 August 2028 after Digital Omnibus delay. BUT: MDR is fully applicable now. GDPR special-categories of personal data (Art. 9) is fully applicable. Article 4 (literacy) is binding since 2 Feb 2025. Article 50 (watermarking) — if you ship generative outputs in clinical context — binds 2 Aug 2026." },
  { q: "What does MEOK ship for healthcare?", a: "meok-cra-annex-iv-classifier-mcp generates the Annex IV technical documentation in NB-ready format. /audit-prep-bundle £4,950 wraps Annex IV + Articles 9-15 + 17-22 in a 14-day signed evidence pack. /consulting £950/day for NB engagement support if you need Annex VII third-party audit prep." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function HealthcarePage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 940, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div style={{ display: "inline-block", padding: "6px 12px", borderRadius: 999, background: "rgba(201,168,76,0.15)", border: `1px solid rgba(201,168,76,0.4)`, color: GOLD, fontSize: 12, fontWeight: 900, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 24 }}>Healthcare vertical · 28 April 2026</div>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 16 }}>EU AI Act for Healthcare AI</h1>
        <p style={{ fontSize: "1.2rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>Annex I + MDR stack. Notified Body required. We ship the technical file.</p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Medical-device AI is Annex I high-risk — strictest tier of the EU AI Act. Conformity assessment goes through a Notified Body via Annex VII. MDR (EU) 2017/745 still applies. ISO 13485 quality system is the floor. Plan for 4-12 month NB review cycles.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 48 }}>
          {[
            { title: "Annex IV Technical File", price: "MCP free", href: "/labs/mcp/servers", desc: "meok-cra-annex-iv-classifier-mcp — generate NB-ready documentation." },
            { title: "Article 9 RMS for Medical AI", price: "£399/mo", href: "/transparency", desc: "Continuous risk-management with clinical-failure-mode logging." },
            { title: "Audit-Prep Bundle", price: "£4,950", href: "/audit-prep-bundle", desc: "14-day delivered: Annex IV + Articles 9-15 + 17-22 + RMS." },
            { title: "NB Engagement Support", price: "£950/day", href: "/consulting", desc: "Notified Body audit prep, MDR + AI Act stack." },
          ].map((c) => (
            <Link key={c.href} href={c.href} style={{ background: "white", borderRadius: 14, padding: 20, border: `1px solid ${NAVY}1a`, textDecoration: "none", color: NAVY, display: "block" }}>
              <div style={{ fontSize: 11, color: GOLD, fontWeight: 900, letterSpacing: "0.08em", marginBottom: 6 }}>{c.price}</div>
              <div style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>{c.title}</div>
              <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{c.desc}</div>
            </Link>
          ))}
        </div>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 56, marginBottom: 16 }}>The healthcare AI compliance stack</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>MDR / IVDR</strong> — base medical device regulation. Already in force.</li>
          <li><strong>ISO 13485</strong> — quality management system. Mandatory for NB certification.</li>
          <li><strong>EN ISO 14971</strong> — risk management for medical devices. Stacks with Article 9 RMS.</li>
          <li><strong>EN IEC 62304</strong> — medical-device software lifecycle. Maps to Annex IV technical documentation.</li>
          <li><strong>EU AI Act Annex I + Annex VII</strong> — AI-specific conformity overlay via NB.</li>
          <li><strong>EU MDR Annex II/III</strong> — clinical evaluation + post-market surveillance + vigilance.</li>
          <li><strong>GDPR Article 9</strong> — special categories of personal data (health). Always engaged.</li>
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
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>Get NB-ready documentation in 14 days</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>Full Annex IV technical file + Article 9 RMS + Article 10 data governance + signed evidence. 14-day delivery.</p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>£4,950 audit-prep →</Link>
            <a href="mailto:nicholas@meok.ai?subject=Healthcare%20AI%20gap%20analysis" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>Free triage →</a>
          </div>
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong></p>
      </div>
    </main>
  );
}
