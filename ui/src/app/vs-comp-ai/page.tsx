import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MEOK vs Comp AI: EU AI Act, DORA, NIS2 & CRA Bolt-On (2026)",
  description:
    "Comp AI covers SOC 2, ISO 27001, HIPAA, GDPR. It does NOT cover EU AI Act, DORA, NIS2, or CRA. MEOK is the EU-first compliance layer you need on top.",
  alternates: { canonical: "https://meok.ai/vs-comp-ai" },
  openGraph: {
    title: "MEOK vs Comp AI — what Comp AI does NOT cover",
    description:
      "Comp AI is great for US frameworks. EU AI Act / DORA / NIS2 / CRA need MEOK.",
    type: "website",
    url: "https://meok.ai/vs-comp-ai",
    images: [{ url: "/api/og?title=MEOK+vs+Comp+AI&desc=EU+AI+Act+%2B+DORA+%2B+NIS2+%2B+CRA+bolt-on", width: 1200, height: 630, alt: "MEOK vs Comp AI" }],
  },
};

const FAQ_VS = [
  {
    q: "Does Comp AI cover the EU AI Act?",
    a: "No. Comp AI's launched scope (April 2026) covers SOC 2, ISO 27001, HIPAA, and GDPR. The EU AI Act, DORA, NIS2, and the EU CRA are not on their roadmap as of this page's last review (27 April 2026).",
  },
  {
    q: "Can I run Comp AI and MEOK together?",
    a: "Yes — that's the recommended setup. Comp AI handles your US-framework operational evidence (SOC 2 / ISO 27001 / HIPAA / GDPR baseline). MEOK adds the EU-regulatory evidence layer (EU AI Act per-Article + DORA + NIS2 + CRA + ISO/IEC 42001 + NIST AI RMF) with cryptographically signed attestations any auditor can verify by URL.",
  },
  {
    q: "What's the price difference?",
    a: "Comp AI lists Starter $199/mo, Pro $997/mo, Done-For-You $3,000+. MEOK Pro is £149/mo, Bias Detection (Article 10) is £299/mo, Audit-Prep Bundle is £4,950 one-time. Combined Comp AI Starter + MEOK Bias Detection is roughly £500/mo for SOC 2 + ISO + EU AI Act Article 10 coverage — typically less than half the cost of Vanta or Drata at the same coverage breadth.",
  },
  {
    q: "How long does it take to add MEOK on top of Comp AI?",
    a: "The free /scorecard takes 90 seconds. Bias Detection is a 7-day free trial then £299/mo. The Audit-Prep Bundle is a 14-day engagement at £4,950. No data migration — MEOK is API-side, Comp AI is dashboard-side; they don't conflict.",
  },
  {
    q: "Can MEOK replace Comp AI entirely if I'm EU-only?",
    a: "Partially. MEOK has GDPR crosswalks, but Comp AI's SOC 2 / ISO 27001 / HIPAA workflows are deeper. If you sell to US enterprise customers, keep Comp AI. If you're EU-only and don't need SOC 2 attestation reports, you can run on MEOK alone for compliance evidence.",
  },
  {
    q: "Is MEOK open-source like Comp AI?",
    a: "Yes — all 26 MEOK MCP packages are MIT-licensed on PyPI. Self-host, fork, audit. Paid tiers are for hosted attestation API + signed certificates with custom verify domains + SLA, not for the underlying MCPs.",
  },
];

const FAQ_VS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_VS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const COMPARISON: { row: string; comp: string | boolean; meok: string | boolean; note?: string }[] = [
  { row: "SOC 2 (Type 1 + 2)", comp: true, meok: false, note: "Comp AI's home turf — use them" },
  { row: "ISO 27001", comp: true, meok: false, note: "Use Comp AI" },
  { row: "HIPAA", comp: true, meok: false, note: "Use Comp AI" },
  { row: "GDPR (controls + DPA)", comp: true, meok: "Crosswalk only", note: "Both — MEOK adds DPIA→FRIA bridge for AI systems" },
  { row: "PCI DSS", comp: true, meok: false },
  { row: "EU AI Act Article 4 (literacy)", comp: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 6 + Annex III (high-risk classifier)", comp: false, meok: true, note: "MEOK only" },
  { row: "EU AI Act Article 9 (risk mgmt system)", comp: false, meok: true },
  { row: "EU AI Act Article 10 (data governance + bias)", comp: false, meok: true, note: "Live at /bias-detection" },
  { row: "EU AI Act Article 14 (human oversight)", comp: false, meok: true },
  { row: "EU AI Act Article 26(9) (FRIA — Fundamental Rights Impact)", comp: false, meok: true, note: "EDPB harmonised template (14 Apr 2026) wired" },
  { row: "EU AI Act Article 43 (conformity assessment)", comp: false, meok: true },
  { row: "EU AI Act Article 50 (transparency + watermarking)", comp: false, meok: true, note: "Live at /article-50-kit · 2 Aug 2026 cliff" },
  { row: "EU AI Act Article 72 (post-market monitoring)", comp: false, meok: true },
  { row: "DORA (Reg 2022/2554) — financial entities", comp: false, meok: true, note: "Belgium hard cliff already passed 18 Apr 2026" },
  { row: "NIS2 / NIS2-UmsuCG (DE)", comp: false, meok: true, note: "Live at /nis2-de-kit · DE deadline missed by ~17.5K entities" },
  { row: "EU CRA (Reg 2024/2847) — connected products", comp: false, meok: true, note: "24h ENISA reporting from 11 Sep 2026" },
  { row: "ISO/IEC 42001 (AI management system)", comp: false, meok: true },
  { row: "NIST AI RMF (US AI risk framework)", comp: false, meok: true },
  { row: "UK Cyber Security & Resilience Bill", comp: false, meok: true, note: "MCP scaffolded, ready when Bill passes" },
  { row: "HMAC-signed compliance attestations (any framework)", comp: false, meok: true, note: "Live at meok-attestation-api.vercel.app" },
  { row: "Public verify URLs auditors can curl", comp: false, meok: true, note: "Cryptographic proof, not dashboard trust" },
  { row: "26 PyPI MCP packages — drop into any agent stack", comp: false, meok: true, note: "Free-tier always · 6,798 monthly installs" },
];

const PRICING_MIRROR: { tier: string; comp: string; meok: string; meokHref: string }[] = [
  {
    tier: "Free / Open Source",
    comp: "AGPLv3 self-host",
    meok: "All 26 MCPs MIT + email-only signed attestations",
    meokHref: "https://github.com/CSOAI-ORG",
  },
  {
    tier: "Starter (~£199/mo)",
    comp: "$199/mo · SOC 2 + ISO 27001",
    meok: "£149/mo · Pro (full compliance suite + signed certs)",
    meokHref: "/labs/mcp",
  },
  {
    tier: "Pro (~£997/mo)",
    comp: "$997/mo · multi-framework + automation",
    meok: "£999/mo · Defence (all 208 servers, unlimited, SSO, SLA)",
    meokHref: "/pricing",
  },
  {
    tier: "Done-For-You",
    comp: "$3,000+ implementation",
    meok: "£4,950 Audit-Prep Bundle (2-day engagement + 90-day support)",
    meokHref: "/audit-prep-bundle",
  },
];

const POSITIONING = [
  {
    h: "Use Comp AI for the US frameworks they were built for.",
    p: "SOC 2 + ISO 27001 + HIPAA + GDPR-baseline. They have the integrations, the dashboards, the auditor relationships. We're not trying to displace that.",
  },
  {
    h: "Use MEOK for the EU regulations Comp AI doesn't cover.",
    p: "EU AI Act (every Article from 4 → 72), DORA, NIS2, CRA, ISO/IEC 42001, NIST AI RMF. With cryptographically signed attestations any auditor can verify by URL.",
  },
  {
    h: "Run them side-by-side.",
    p: "Comp AI's dashboard is your operational evidence-collection layer for SOC 2 + ISO. MEOK is your EU-regulatory evidence-collection layer for AI Act + cyber. Combined coverage costs £1,196/mo at Starter, vs £8K-£25K/yr per Vanta/Drata seat with patchier EU-AI coverage.",
  },
];

export default function VsCompAIPage() {
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_VS_JSONLD) }} />
      <div style={{ maxWidth: 1040, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(201,168,76,0.15)",
            border: `1px solid rgba(201,168,76,0.4)`,
            color: GOLD,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          Honest comparison · updated 27 April 2026
        </div>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          MEOK vs Comp AI
        </h1>
        <p style={{ fontSize: "1.3rem", color: GOLD, fontWeight: 900, marginBottom: 8 }}>
          Comp AI is great. It just doesn't cover Europe.
        </p>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40 }}>
          Comp AI launched 7 April 2026 as an open-source SOC 2 / ISO 27001 / HIPAA / GDPR
          platform. We use it. It's the right tool for those frameworks. But the EU AI Act, DORA,
          NIS2, and the EU CRA aren't on its roadmap. That's our lane.
        </p>

        {/* Positioning */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16, marginBottom: 64 }}>
          {POSITIONING.map((p) => (
            <div
              key={p.h}
              style={{ background: "white", borderRadius: 14, padding: 22, border: `1px solid ${NAVY}1a` }}
            >
              <h3 style={{ fontSize: "1rem", fontWeight: 900, marginBottom: 8, color: GOLD }}>
                {p.h}
              </h3>
              <p style={{ color: `${NAVY}99`, fontSize: 14, lineHeight: 1.55 }}>{p.p}</p>
            </div>
          ))}
        </div>

        {/* Pricing mirror */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Pricing — line-item swap
        </h2>
        <p style={{ color: `${NAVY}99`, fontSize: 14, marginBottom: 24, maxWidth: 700 }}>
          Mirroring Comp AI's tiers so you can see exactly which line items in your existing budget
          could swap to MEOK for EU coverage you're not getting now.
        </p>

        <div
          style={{
            background: "white",
            borderRadius: 14,
            border: `1px solid ${NAVY}1a`,
            overflow: "hidden",
            marginBottom: 64,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1.5fr", gap: 0, fontWeight: 900, fontSize: 13, background: NAVY, color: "white" }}>
            <div style={{ padding: "14px 18px" }}>Tier</div>
            <div style={{ padding: "14px 18px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>Comp AI</div>
            <div style={{ padding: "14px 18px", borderLeft: "1px solid rgba(255,255,255,0.1)", color: GOLD }}>MEOK (EU bolt-on)</div>
          </div>
          {PRICING_MIRROR.map((t, i) => (
            <div
              key={t.tier}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.5fr 1.5fr",
                fontSize: 14,
                borderTop: i === 0 ? "none" : `1px solid ${NAVY}1a`,
              }}
            >
              <div style={{ padding: "16px 18px", fontWeight: 900 }}>{t.tier}</div>
              <div style={{ padding: "16px 18px", color: `${NAVY}99`, borderLeft: `1px solid ${NAVY}10` }}>{t.comp}</div>
              <div style={{ padding: "16px 18px", borderLeft: `1px solid ${NAVY}10`, background: "rgba(201,168,76,0.06)" }}>
                <Link href={t.meokHref} style={{ color: GOLD, fontWeight: 700, textDecoration: "none" }}>
                  {t.meok} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Coverage matrix */}
        <h2 style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 24, letterSpacing: "-0.01em" }}>
          Framework-by-framework coverage
        </h2>

        <div
          style={{
            background: "white",
            borderRadius: 14,
            border: `1px solid ${NAVY}1a`,
            overflow: "hidden",
            marginBottom: 64,
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr", fontWeight: 900, fontSize: 12, background: NAVY, color: "white" }}>
            <div style={{ padding: "12px 16px", letterSpacing: "0.04em" }}>FRAMEWORK / CONTROL</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center" }}>COMP AI</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)", textAlign: "center", color: GOLD }}>MEOK</div>
            <div style={{ padding: "12px 16px", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>NOTE</div>
          </div>
          {COMPARISON.map((c, i) => (
            <div
              key={c.row}
              style={{
                display: "grid",
                gridTemplateColumns: "1.6fr 0.6fr 0.6fr 1.2fr",
                fontSize: 13,
                borderTop: i === 0 ? "none" : `1px solid ${NAVY}10`,
                alignItems: "center",
              }}
            >
              <div style={{ padding: "12px 16px", fontWeight: 700 }}>{c.row}</div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08` }}>
                {c.comp === true ? "✓" : c.comp === false ? <span style={{ color: `${NAVY}33` }}>—</span> : c.comp}
              </div>
              <div style={{ padding: "12px 16px", textAlign: "center", borderLeft: `1px solid ${NAVY}08`, background: "rgba(201,168,76,0.04)" }}>
                {c.meok === true ? <span style={{ color: GOLD, fontWeight: 900 }}>✓</span> : c.meok === false ? <span style={{ color: `${NAVY}33` }}>—</span> : <span style={{ color: GOLD, fontSize: 11 }}>{c.meok}</span>}
              </div>
              <div style={{ padding: "12px 16px", color: `${NAVY}77`, fontSize: 12, borderLeft: `1px solid ${NAVY}08` }}>
                {c.note || ""}
              </div>
            </div>
          ))}
        </div>

        {/* CTA strip */}
        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16 }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Already on Comp AI? Add EU coverage in 7 days.
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 640 }}>
            Free 30-min triage call: bring your Comp AI dashboard, we map gaps to EU AI Act + DORA
            + NIS2 + CRA. You leave with an action list and a 7-day quote if you want one.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="mailto:nicholas@meok.ai?subject=Compliance%20triage%20call%20request%20&body=Hi%20Nicholas%2C%0A%0AI%27d%20like%20to%20book%20the%20free%2030-min%20compliance%20triage%20call.%20My%20availability%3A%0A%0A-%20%5Byour%20preferred%20day%2Ftime%5D%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BEU%20AI%20Act%20%2F%20DORA%20%2F%20NIS2%20%2F%20CRA%5D%0A%0AThanks"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                background: GOLD,
                color: NAVY,
                borderRadius: 12,
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              Book gap-analysis (free) →
            </a>
            <Link
              href="/audit-prep-bundle"
              style={{
                display: "inline-block",
                padding: "14px 24px",
                background: "transparent",
                color: "white",
                border: "1px solid rgba(255,255,255,0.3)",
                borderRadius: 12,
                fontWeight: 900,
                textDecoration: "none",
                fontSize: 14,
              }}
            >
              Or jump to £4,950 audit-prep bundle →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginTop: 56, marginBottom: 20 }}>
          Frequently asked
        </h2>
        <div style={{ display: "grid", gap: 12, marginBottom: 32 }}>
          {FAQ_VS.map((f) => (
            <details key={f.q} style={{ background: "white", borderRadius: 12, padding: "16px 20px", border: `1px solid ${NAVY}1a` }}>
              <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 15, color: NAVY }}>{f.q}</summary>
              <p style={{ marginTop: 10, color: `${NAVY}99`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
            </details>
          ))}
        </div>

        <p style={{ marginTop: 40, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          We respect Comp AI. They built a great open-source product. This page is here because their
          users keep asking us "do you do EU AI Act?" — yes. That's all.
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · <Link href="/refund" style={{ color: GOLD }}>Refund policy</Link>
        </p>
      </div>
    </main>
  );
}
