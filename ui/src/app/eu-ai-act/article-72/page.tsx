import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "EU AI Act Article 72 — Post-Market Monitoring Implementation Guide",
  description:
    "What Article 72 requires: high-risk AI providers must establish a post-market monitoring system collecting and analyzing real-world performance data throughout system lifecycle.",
  alternates: { canonical: "https://meok.ai/eu-ai-act/article-72" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const FAQ = [
  { q: "What does Article 72 actually require?", a: "Providers of high-risk AI systems must establish a post-market monitoring system to collect, document, and analyze relevant data on system performance throughout the lifetime, allowing the provider to evaluate continuous compliance with Article 8 requirements (the high-risk obligations bundle). The PMM system must be proportionate to the risks of the system and based on a documented PMM plan." },
  { q: "What goes into the PMM plan?", a: "Article 72(3): the PMM plan describes how the provider will systematically collect + analyze data on real-world performance, identify when retraining/recalibration is needed, evaluate emerging risks, and feed back into the Article 9 risk management system. The European Commission published a PMM template (Implementing Act, Q3 2026) — providers can use it or roll their own." },
  { q: "How does this connect to Article 73 incident reporting?", a: "Article 72 PMM is the upstream pipeline; Article 73 incident reporting is the downstream regulator notification. PMM data flows into Article 9 RMS continuous risk re-evaluation, AND into Article 73 if a serious incident is detected. Without an Article 72 PMM in place, you literally cannot detect the incidents Article 73 says you must report within 15 days (or 2 days for life-threatening)." },
  { q: "What metrics should we collect?", a: "Drift detection (data distribution shift, prediction shift), accuracy on real-world data vs validation set, fairness metrics across demographic groups (Article 10), error rates by use case + user segment, downtime + degraded-mode incidents, security events flagged by Article 15(5) controls. Frequency: continuous for Tier-1 metrics, daily for Tier-2, weekly for Tier-3." },
  { q: "How does MEOK help?", a: "meok-attestation-verify is the cryptographic backbone — every PMM check emits a signed cert your auditor can verify. /transparency £399/£1,499/mo gives you continuous decision-trace logging which is the granular PMM data layer. /audit-prep-bundle £4,950 wraps Article 72 PMM plan generation + Article 9 RMS + Article 73 incident reporting flow in a 14-day signed evidence pack." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

export default function Article72Page() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <div style={{ maxWidth: 880, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/eu-ai-act" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>← All EU AI Act articles</Link>
        <h1 style={{ fontSize: "clamp(2.4rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginTop: 24, marginBottom: 16 }}>EU AI Act Article 72 — Post-Market Monitoring</h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          Article 72 is the EU AI Act's "you don't get to ship and forget" article. Every high-risk provider must establish a post-market monitoring (PMM) system feeding back into Article 9 risk management and Article 73 incident reporting. Without it, you can't even comply with Article 73's 15-day incident-report deadline.
        </p>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>What Article 72 requires</h2>
        <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8, marginBottom: 32 }}>
          <li><strong>72(1)</strong> — Providers shall establish + document a post-market monitoring system proportionate to the nature of the AI technologies + risks of the high-risk system.</li>
          <li><strong>72(2)</strong> — PMM system shall actively + systematically collect, document, and analyse relevant data provided by deployers + collected through other sources on performance throughout system lifetime.</li>
          <li><strong>72(3)</strong> — PMM shall be based on a documented post-market monitoring plan. The Commission published an implementing act with a template plan (Article 72(3), implementing act expected Q3 2026).</li>
        </ul>

        <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginTop: 48, marginBottom: 16 }}>How MEOK covers Article 72</h2>
        <div style={{ background: "white", borderRadius: 12, padding: 24, border: `1px solid ${NAVY}1a`, marginBottom: 32 }}>
          <ul style={{ paddingLeft: 20, color: `${NAVY}99`, lineHeight: 1.8 }}>
            <li><strong>/transparency (£399-£1,499/mo)</strong> — continuous decision-trace logging is the PMM data layer (every decision = one data point with full context + signed cert).</li>
            <li><strong>meok-attestation-verify</strong> — cryptographic verification of PMM checkpoints. Auditor curls verify URL, gets signed payload.</li>
            <li><strong>meok-governance-engine-mcp</strong> — generates Article 72 PMM plan template aligned with the Commission Q3 2026 implementing act.</li>
            <li><strong>/audit-prep-bundle (£4,950)</strong> — 14-day signed evidence pack covering Article 72 PMM + Article 9 RMS + Article 73 incident reporting flow.</li>
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
          Source: <a href="https://eur-lex.europa.eu/eli/reg/2024/1689/oj" style={{ color: GOLD }}>EU AI Act Regulation 2024/1689 Art. 72</a> · MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
