import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/email-capture";

// ---------------------------------------------------------------------------
// /governance — MEOK Governance Substrate landing
//
// Sells the 10 governance MCPs as one signed pipeline for EU AI Act + DORA
// + NIS2 + CRA + GDPR + UK AI Bill + ISO 42001 + ISO 42005 evidence chain.
// £499/mo bundle or £0.0002/call PAYG.
// ---------------------------------------------------------------------------

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const GREEN = "#7BC47F";

export const metadata: Metadata = {
  title: "MEOK Governance Substrate — 10 compliance MCPs, 1 signed evidence pack",
  description:
    "EU AI Act + DORA + NIS2 + CRA + UK AI Bill + AI-BOM + bias detection + watermarking + DORA×NIS2 crosswalk + AI incident reporting — bundled as one £499/mo Substrate with unified api.meok.ai endpoint and HMAC-signed evidence chain for ISO 42001 + ISO 42005 audit.",
  alternates: { canonical: "https://meok.ai/governance" },
  openGraph: {
    title: "MEOK Governance Substrate — 10 MCPs, 1 invoice",
    description: "EU AI Act + DORA + NIS2 + CRA + UK AI Bill + 5 more, £499/mo or £0.0002/call. HMAC-signed audit evidence.",
    type: "website",
    url: "https://meok.ai/governance",
    siteName: "MEOK.AI",
    images: [{
      url: "https://meok.ai/api/og?title=MEOK+Governance+Substrate&desc=10+compliance+MCPs+%C2%B7+1+signed+evidence+pack",
      width: 1200,
      height: 630,
      alt: "MEOK Governance Substrate",
    }],
  },
};

type GovMCP = { num: number; slug: string; title: string; framework: string; deadline?: string };
const GOV_MCPS: GovMCP[] = [
  { num: 1, slug: "eu-ai-act-compliance-mcp", title: "EU AI Act Compliance", framework: "EU AI Act (Reg 2024/1689)", deadline: "Art 50 watermarking · 2 Nov 2026" },
  { num: 2, slug: "dora-compliance-mcp", title: "DORA Compliance", framework: "EU DORA (Reg 2022/2554)", deadline: "In force · 17 Jan 2025" },
  { num: 3, slug: "nis2-compliance-mcp", title: "NIS2 Compliance", framework: "EU NIS2 Directive 2022/2555", deadline: "In force · DE deadline passed 6 Mar 2026" },
  { num: 4, slug: "cra-compliance-mcp", title: "Cyber Resilience Act", framework: "EU CRA (Reg 2024/2847)", deadline: "In force · main obligations 11 Dec 2027" },
  { num: 5, slug: "ai-bom-mcp", title: "AI Bill of Materials", framework: "CycloneDX 1.6 ML-BOM + SPDX 3.0 AI", deadline: "EU AI Act Annex IV evidence" },
  { num: 6, slug: "ai-incident-reporting-mcp", title: "AI Incident Reporting", framework: "EU AI Act Art 73 + DORA Art 19 + NIS2 Art 23 + GDPR Art 33 + ISO 42001 cl 9", deadline: "EU AI Act 15-day clock" },
  { num: 7, slug: "dora-nis2-crosswalk-mcp", title: "DORA × NIS2 Crosswalk", framework: "Dual-compliance mapping", deadline: "For EU banks, CASPs, CTPPs" },
  { num: 8, slug: "bias-detection-mcp", title: "Bias Detection", framework: "EU AI Act Art 10 + ISO 42005 + NIST AI 600-1", deadline: "Continuous monitoring" },
  { num: 9, slug: "watermarking-authenticity-mcp", title: "Watermarking + C2PA", framework: "EU AI Act Art 50 + C2PA + EU Code of Practice GenAI", deadline: "2 Nov 2026 cliff" },
  { num: 10, slug: "uk-ai-bill-compliance-mcp", title: "UK AI Bill Compliance", framework: "UK AI White Paper + AI (Regulation) Bill + ATRS + ICO/FCA/MHRA/CMA/Ofcom/HSE", deadline: "ATRS already mandated" },
];

const PIPELINE = [
  { idx: 1, label: "Risk classify", out: "Annex III high-risk?" },
  { idx: 2, label: "Article 50 transparency", out: "GenAI labels + C2PA" },
  { idx: 3, label: "Article 10 bias scan", out: "Fairness metrics" },
  { idx: 4, label: "AI-BOM build", out: "CycloneDX 1.6 + SPDX 3.0" },
  { idx: 5, label: "DORA × NIS2 crosswalk", out: "Multi-regime evidence" },
  { idx: 6, label: "Incident classification", out: "5-clock fire (AI Act 73 / DORA 19 / NIS2 23 / GDPR 33 / ISO 42001 9)" },
  { idx: 7, label: "HMAC-signed evidence pack", out: "verify.meok.ai URL" },
];

const REGS = [
  { code: "EU AI Act", art: "Articles 5, 6, 9, 10, 14, 26, 43, 50, 53, 55, 73", penalty: "Up to €35M / 7% global turnover" },
  { code: "DORA", art: "Articles 5, 6, 17, 19, 28", penalty: "Up to 1% of avg daily worldwide turnover (recurring)" },
  { code: "NIS2", art: "Articles 21, 23, 30, 32", penalty: "Up to €10M / 2% global turnover" },
  { code: "Cyber Resilience Act", art: "Annex I + Article 13", penalty: "Up to €15M / 2.5% global turnover" },
  { code: "GDPR", art: "Articles 22, 33, 35", penalty: "Up to €20M / 4% global turnover" },
  { code: "UK AI Bill", art: "5 principles + ATRS standard", penalty: "Per-regulator (ICO/FCA/MHRA) — varies" },
  { code: "ISO/IEC 42001:2023", art: "AI management system clauses", penalty: "Lost certification → contract loss" },
  { code: "ISO/IEC 42005:2025", art: "AI impact assessment", penalty: "Evidence-of-due-diligence (defensive)" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MEOK Governance Substrate",
  "description": "10 compliance MCPs bundled as one signed pipeline for EU AI Act + DORA + NIS2 + CRA + UK AI Bill + ISO 42001 + ISO 42005 evidence chain.",
  "brand": { "@type": "Brand", "name": "MEOK AI Labs" },
  "url": "https://meok.ai/governance",
  "image": "https://meok.ai/api/og?title=MEOK+Governance+Substrate",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "GBP", "name": "Self-host (MIT, all 10 MCPs)", "url": "https://github.com/CSOAI-ORG" },
    { "@type": "Offer", "price": "499", "priceCurrency": "GBP", "name": "Governance Substrate Monthly", "url": "https://buy.stripe.com/3cIbJ36Wg5kmdMF2Yg8k90t" },
    { "@type": "Offer", "price": "29", "priceCurrency": "GBP", "name": "Universal PAYG entry", "url": "https://buy.stripe.com/00w3cxcgAaEGcIBcyQ8k90s" },
    { "@type": "Offer", "price": "1499", "priceCurrency": "GBP", "name": "Universe (all 47 MCPs)", "url": "https://buy.stripe.com/cNi9AV0xS8wy5g9aqI8k90u" },
  ],
};

export default function GovernancePage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Hero */}
        <div style={{ padding: "2.4rem 2rem", background: NAVY, color: "#fff", borderRadius: 18, marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(123,196,127,0.18)", color: GREEN, borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            New — 2026-05-21
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 14 }}>
            <span style={{ color: GOLD }}>8 regulations.</span>
            <br />
            10 MCPs.
            <br />
            1 signed evidence pack.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, marginBottom: 22, maxWidth: 700 }}>
            EU AI Act + DORA + NIS2 + CRA + UK AI Bill + ISO 42001 + ISO 42005 + GDPR — bundled as
            one signed pipeline. Risk classify → Article 50 transparency → Article 10 bias → AI-BOM
            → crosswalk → incident → signed evidence. <strong style={{ color: GOLD }}>£499/mo</strong> Substrate or pay-as-you-go.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://buy.stripe.com/3cIbJ36Wg5kmdMF2Yg8k90t"
              style={{ padding: "14px 28px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Start Governance Substrate £499/mo →
            </a>
            <a
              href="https://buy.stripe.com/00w3cxcgAaEGcIBcyQ8k90s"
              style={{ padding: "14px 28px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              PAYG £0.0002/call →
            </a>
            <Link
              href="/fine-calculator"
              style={{ padding: "14px 28px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              See your max fine →
            </Link>
          </div>
        </div>

        {/* Why this exists */}
        <section style={{ marginBottom: "2.4rem", padding: "1.6rem 1.8rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 10 }}>One regulator clock is one MCP. Eight clocks = ten MCPs.</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: `${NAVY}cc`, margin: 0 }}>
            EU AI Act Article 73 fires a 15-day clock. DORA Article 19 fires within 24h then 72h.
            NIS2 Article 23 fires 24h-then-72h with a national CSIRT submission. GDPR Article 33
            fires 72h. ISO 42001 clause 9 wants the audit log. Five clocks, one incident.
            <br /><br />
            Buy the MCPs separately and your team is reading five PDFs at 2am. Buy the
            <strong> Governance Substrate</strong> and one incident-classification call fires all five clocks
            simultaneously with a signed HMAC-chained evidence pack any auditor can verify at
            <code style={{ background: `${NAVY}10`, padding: "2px 6px", borderRadius: 4, marginLeft: 6 }}>verify.meok.ai</code>.
          </p>
        </section>

        {/* The 7-stage pipeline */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>The 7-stage compliance pipeline</h2>
          <div style={{ background: "#fff", padding: "1.6rem", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
            <div style={{ display: "grid", gap: 10 }}>
              {PIPELINE.map((s) => (
                <div key={s.idx} style={{ display: "flex", alignItems: "center", gap: 14, padding: "0.7rem 1rem", background: `${NAVY}05`, borderRadius: 10 }}>
                  <div style={{ flex: "0 0 32px", width: 32, height: 32, background: GOLD, color: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14 }}>{s.idx}</div>
                  <div style={{ flex: 1, fontSize: 14, fontWeight: 700 }}>{s.label}</div>
                  <div style={{ fontSize: 12, color: `${NAVY}99` }}>→ <em>{s.out}</em></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 10 MCPs */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>All 10 MCPs in the Governance Substrate</h2>
          <div style={{ display: "grid", gap: 10 }}>
            {GOV_MCPS.map((m) => (
              <div key={m.slug} style={{ padding: "1rem 1.2rem", background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a` }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 4 }}>
                      <div style={{ fontSize: 11, color: `${NAVY}99`, fontFamily: "monospace", fontWeight: 700 }}>#{m.num}</div>
                      <h3 style={{ fontSize: 14, fontWeight: 800, margin: 0 }}>{m.title}</h3>
                    </div>
                    <p style={{ fontSize: 12, color: `${NAVY}cc`, margin: 0 }}>{m.framework}</p>
                    {m.deadline && <p style={{ fontSize: 11, color: GREEN, margin: "4px 0 0", fontWeight: 700 }}>⏰ {m.deadline}</p>}
                  </div>
                  <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
                    <a
                      href={`https://github.com/CSOAI-ORG/${m.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: 11, color: NAVY, textDecoration: "none", padding: ".3rem .6rem", border: `1px solid ${NAVY}33`, borderRadius: 6, fontWeight: 700 }}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <code style={{ display: "inline-block", marginTop: 8, background: NAVY, color: BG, padding: ".3rem .6rem", borderRadius: 6, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11 }}>uvx {m.slug}</code>
              </div>
            ))}
          </div>
        </section>

        {/* Regulations covered */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Regulations covered + your max fine</h2>
          <div style={{ background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a`, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: `${NAVY}06` }}>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Regulation</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Articles covered</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Max fine</th>
                </tr>
              </thead>
              <tbody>
                {REGS.map((r) => (
                  <tr key={r.code} style={{ borderTop: `1px solid ${NAVY}10` }}>
                    <td style={{ padding: "0.6rem 1rem", fontWeight: 700 }}>{r.code}</td>
                    <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc`, fontSize: 12 }}>{r.art}</td>
                    <td style={{ padding: "0.6rem 1rem", color: `${NAVY}99`, fontSize: 12, fontStyle: "italic" }}>{r.penalty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: `${NAVY}99`, marginTop: 10, lineHeight: 1.5 }}>
            Calculate your specific exposure at <Link href="/fine-calculator" style={{ color: NAVY, fontWeight: 700 }}>meok.ai/fine-calculator</Link>.
          </p>
        </section>

        {/* Pricing */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <div style={{ padding: "1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: `${NAVY}99`, marginBottom: 6 }}>Self-host</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£0</div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>All 10 MCPs MIT</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ uvx install</li>
                <li>✓ Local attestations</li>
                <li>✓ Forever free</li>
              </ul>
            </div>

            <div style={{ padding: "1.4rem", background: NAVY, color: "#fff", borderRadius: 14, border: `2px solid ${GOLD}`, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "3px 12px", background: GOLD, color: NAVY, borderRadius: 999, fontSize: 10, fontWeight: 900, textTransform: "uppercase" }}>
                Best value
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: GOLD, marginBottom: 6 }}>Substrate</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£499<span style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>/mo</span></div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>10 governance MCPs</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
                <li><span style={{ color: GOLD }}>✓</span> All 10 managed</li>
                <li><span style={{ color: GOLD }}>✓</span> Unified endpoint</li>
                <li><span style={{ color: GOLD }}>✓</span> 100K calls/month</li>
                <li><span style={{ color: GOLD }}>✓</span> 99.9% SLA</li>
                <li><span style={{ color: GOLD }}>✓</span> 5-clock incident chain</li>
              </ul>
              <a href="https://buy.stripe.com/3cIbJ36Wg5kmdMF2Yg8k90t" style={{ display: "block", marginTop: 14, padding: "10px", textAlign: "center", background: GOLD, color: NAVY, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 900 }}>
                Start →
              </a>
            </div>

            <div style={{ padding: "1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: `${NAVY}99`, marginBottom: 6 }}>PAYG</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£29<span style={{ fontSize: ".7rem", color: `${NAVY}99` }}>/mo + per-call</span></div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>£0.0002/call after 100K</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ Spiky usage friendly</li>
                <li>✓ Any of all 47 MCPs</li>
                <li>✓ Stripe metered</li>
                <li>✓ Cap anytime</li>
              </ul>
              <a href="https://buy.stripe.com/00w3cxcgAaEGcIBcyQ8k90s" style={{ display: "block", marginTop: 14, padding: "8px", textAlign: "center", border: `1px solid ${NAVY}33`, borderRadius: 8, color: NAVY, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
                Connect →
              </a>
            </div>

            <div style={{ padding: "1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: `${NAVY}99`, marginBottom: 6 }}>Universe</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£1,499<span style={{ fontSize: ".9rem", color: `${NAVY}99` }}>/mo</span></div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>ALL 47 MCPs · 500K calls</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ Every substrate included</li>
                <li>✓ 500K calls/month</li>
                <li>✓ Dedicated support</li>
                <li>✓ Multi-protocol bridge</li>
              </ul>
              <a href="https://buy.stripe.com/cNi9AV0xS8wy5g9aqI8k90u" style={{ display: "block", marginTop: 14, padding: "8px", textAlign: "center", border: `1px solid ${NAVY}33`, borderRadius: 8, color: NAVY, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
                Subscribe →
              </a>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section style={{ marginBottom: "2.4rem" }}>
          <EmailCapture
            interest="governance-substrate"
            headline="EU compliance brief — monthly"
            subheadline="Article amendments, enforcement news, new compliance MCPs. One email a month."
            cta="Subscribe"
            theme="light"
          />
        </section>

        {/* Footer */}
        <p style={{ marginTop: 24, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT source · Apache 2.0 Python · Not legal advice · hello@meok.ai
        </p>
      </div>
    </main>
  );
}
