import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/email-capture";

// ---------------------------------------------------------------------------
// /moe — Mixture of Experts for AI Compliance
//
// AEO-friendly framing: position the 47 MCPs as compliance domain experts
// that the BFT Council routes between. "Mixture of Experts" is a known
// LLM architecture term — connecting MEOK to that mental model surfaces us
// when devs search for MoE patterns + compliance.
// ---------------------------------------------------------------------------

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const GREEN = "#7BC47F";

export const metadata: Metadata = {
  title: "MEOK MoE — Mixture of Experts for AI Compliance (47 domain-expert MCPs)",
  description:
    "47 MEOK MCPs as a Mixture-of-Experts compliance system. The BFT Council routes each call to the right domain expert (DORA expert, NIS2 expert, COBOL expert, Article 50 expert, MITRE ATLAS expert, …). Sparse routing, HMAC-signed evidence, MIT-licensed self-host or £499/mo Substrate.",
  alternates: { canonical: "https://meok.ai/moe" },
  openGraph: {
    title: "MEOK MoE — 47 compliance experts, BFT-routed",
    description: "Mixture-of-Experts pattern applied to AI compliance. Sparse routing across 47 specialised MCPs. £499–£14,990/mo.",
    type: "website",
    url: "https://meok.ai/moe",
    siteName: "MEOK.AI",
    images: [{
      url: "https://meok.ai/api/og?title=MEOK+MoE&desc=47+compliance+experts+%C2%B7+BFT-routed",
      width: 1200,
      height: 630,
      alt: "MEOK MoE — Mixture of Experts for AI Compliance",
    }],
  },
};

type Expert = { name: string; covers: string; framework: string };
const EXPERTS: Expert[] = [
  { name: "EU AI Act Expert", covers: "Risk classification + Article 50 transparency + Article 73 incidents + 42-point audit + penalty calculator", framework: "Regulation (EU) 2024/1689" },
  { name: "DORA Expert", covers: "5-pillar audit + Article 28 Register of Information + TLPT readiness + incident classification", framework: "Regulation (EU) 2022/2554" },
  { name: "NIS2 Expert", covers: "Article 21 risk-management measures + Article 23 24/72-hour incident clock + DE Mittelstand register", framework: "Directive (EU) 2022/2555" },
  { name: "CRA Expert", covers: "Annex I product classification + SBOM + vulnerability handling + conformity assessment", framework: "Regulation (EU) 2024/2847" },
  { name: "Article 50 Watermarking Expert", covers: "C2PA manifest + invisible watermark + perceptual fingerprint + Code-of-Practice 2-layer", framework: "EU AI Act Article 50" },
  { name: "Bias Detection Expert", covers: "Demographic parity + equal opportunity + Article 10 evidence", framework: "EU AI Act Article 10" },
  { name: "AI-BOM Expert", covers: "CycloneDX 1.6 ML-BOM + SPDX 3.0 AI Profile + Annex IV mapping", framework: "EU AI Act Annex IV" },
  { name: "DORA × NIS2 Crosswalk Expert", covers: "Dual-compliance mapping for EU banks + CASPs + CTPPs", framework: "Cross-regulation matrix" },
  { name: "AI Incident Reporting Expert", covers: "5-clock fire — EU AI Act Art 73 + DORA Art 19 + NIS2 Art 23 + GDPR Art 33 + ISO 42001 cl 9", framework: "Multi-regime" },
  { name: "UK AI Bill Expert", covers: "5 principles + ATRS + ICO/FCA/MHRA/CMA/Ofcom/HSE", framework: "UK AI (Regulation) Bill + ATRS" },
  { name: "MITRE ATT&CK Expert", covers: "Tactic/technique/sub-technique mapping + incident correlation", framework: "MITRE ATT&CK 2026" },
  { name: "MITRE ATLAS Expert", covers: "Adversarial threats specifically for AI/ML systems", framework: "MITRE ATLAS 2026" },
  { name: "Prompt Injection Firewall Expert", covers: "OWASP LLM01 scan on prompts + RAG + tool args + A2A payloads", framework: "OWASP LLM Top 10 2025" },
  { name: "SBOM Expert", covers: "CycloneDX 1.6 + SPDX 2.3 — required by EO 14028, NIS2, CRA", framework: "EO 14028 + NIS2 + CRA" },
  { name: "SLSA Expert", covers: "Supply-chain provenance level computation + roadmap", framework: "OpenSSF SLSA v1.1" },
  { name: "Sigstore Expert", covers: "cosign + rekor + in-toto attestations for signed artefacts", framework: "Sigstore + Rekor + in-toto" },
  { name: "CISA KEV Expert", covers: "Known Exploited Vulnerabilities + remediation deadlines", framework: "CISA KEV catalogue" },
  { name: "COBOL Bridge Expert", covers: "FPT-Software COBOL-Coder-14B transpiler (73.95% compile vs GPT-4o 41.8%)", framework: "COBOL Substrate (5 tools)" },
  { name: "MiCA Crypto Expert", covers: "Crypto-asset service provider + issuer obligations", framework: "Regulation (EU) 2023/1114" },
  { name: "Basel III AI Overlay Expert", covers: "SR 11-7 + ECB TRIM model risk for banks", framework: "Basel III + SR 11-7 + ECB TRIM" },
  { name: "MiFID II AI Expert", covers: "Article 17 algorithmic trading + RTS 6 testing", framework: "Directive 2014/65/EU" },
  { name: "AML/KYC Expert", covers: "6AMLD + UK MLR 2017 + FinCEN BSA AML/CFT", framework: "EU 6AMLD + UK MLR + FinCEN" },
  { name: "MDR Medical Device Expert", covers: "EU MDR + IVDR + AI/ML SaMD classification + Annex IV", framework: "Regulation (EU) 2017/745 + 746" },
  { name: "FDA SaMD Expert", covers: "510(k) + PMA + De Novo pathways for US digital health", framework: "FDA AI/ML SaMD Action Plan" },
  { name: "COPPA/FERPA Expert", covers: "Children's privacy + AADC + EU AI Act children's provisions", framework: "COPPA + FERPA + UK AADC" },
  { name: "FSA Food Safety Expert", covers: "UK FSA + EU Reg 178/2002 + HACCP + allergens", framework: "EU Reg 178/2002 + UK FSA" },
  { name: "A2A Identity + Trust Expert", covers: "W3C DID + Verifiable Credentials + trust scores", framework: "W3C DID v2 + VC 2.0" },
  { name: "A2A Data Residency Expert", covers: "GDPR Chapter V transfer-basis runtime guard", framework: "GDPR Chapter V" },
  { name: "A2A Policy Enforcement Expert", covers: "Per-agent-pair IAM via evaluate_call gates", framework: "EU AI Act Art 14 + ISO 42001 A.7" },
  { name: "A2A Audit Logger Expert", covers: "Hash-chained HMAC-signed log entries", framework: "EU AI Act Art 12 + DORA Art 17 + ISO 42001 cl 9" },
];

const REASONS = [
  { h: "Sparse routing", b: "Don't pay to run 47 models for every request. The BFT Council routes each call to the 1-3 experts whose domain actually applies. A bias query goes to bias-detection-mcp. A DORA incident query fires the 5-clock chain across audit-logger + incident-reporting + dora-compliance experts." },
  { h: "Domain weight, not parameter weight", b: "A traditional MoE LLM uses learned router weights to pick activated experts. MEOK uses the request payload's regulatory context — schema-validated, deterministic, auditable. Auditors can verify which expert touched which decision because every routing decision signs into the audit chain." },
  { h: "Compositional substrates", b: "Buy one expert (£29/mo) · buy a pack of 6-12 (£199-£499/mo) · buy all 47 (£1,499/mo). The Council pattern composes them. You don't need to choose between depth (one specialised MCP) and breadth (full substrate) — the architecture supports both." },
  { h: "MIT-licensed self-host", b: "Run any subset of experts locally. uvx <name>-mcp installs each. The Council layer is what we sell — Substrate subscriptions give you the managed router, the HMAC signing keys, the SLA. Source code stays free." },
  { h: "Adding experts is additive", b: "Q3 roadmap: 15 new MCPs (Korea AI Basic Act expert, Stripe ACP expert, x402 paywall expert, ISO 42005 impact expert, EUDI Wallet expert, …). Each new expert plugs into the existing Council without breaking the others. No retraining, no migration." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "MEOK Mixture of Experts (MoE) for AI Compliance",
  "alternateName": "MEOK MoE",
  "description": "47 specialised domain-expert MCPs orchestrated by a Byzantine Fault Tolerant council, sparse routing per request, HMAC-signed audit evidence per call. The Mixture-of-Experts architecture applied to AI compliance and governance.",
  "applicationCategory": "DeveloperApplication",
  "operatingSystem": "Linux, macOS, Windows",
  "url": "https://meok.ai/moe",
  "image": "https://meok.ai/api/og?title=MEOK+MoE",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "GBP", "name": "Self-host any expert (MIT)" },
    { "@type": "Offer", "price": "499", "priceCurrency": "GBP", "name": "Substrate (A2A or Governance pack of ~10 experts)", "url": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" },
    { "@type": "Offer", "price": "1499", "priceCurrency": "GBP", "name": "Universe (all 47 experts)", "url": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" },
    { "@type": "Offer", "price": "4990", "priceCurrency": "GBP", "name": "Defence (multi-BU + on-prem)", "url": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" },
  ],
};

export default function MoEPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        {/* Hero */}
        <div style={{ padding: "2.4rem 2rem", background: NAVY, color: "#fff", borderRadius: 18, marginBottom: "2rem" }}>
          <div style={{ display: "inline-block", padding: "4px 12px", background: "rgba(123,196,127,0.18)", color: GREEN, borderRadius: 999, fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 12 }}>
            Architecture · 2026-05-21
          </div>
          <h1 style={{ fontSize: "clamp(2.2rem, 5vw, 3.6rem)", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.02em", marginBottom: 14 }}>
            <span style={{ color: GOLD }}>Mixture of Experts</span>
            <br />
            for AI compliance.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, marginBottom: 22, maxWidth: 700 }}>
            47 specialised <strong style={{ color: GOLD }}>domain experts</strong>, each fluent in one
            regulatory framework. A Byzantine Fault Tolerant council routes each call to the 1-3 experts
            whose domain applies. Sparse, signed, auditable. The Mixture-of-Experts pattern — applied
            to the regulatory layer.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/a2a"
              style={{ padding: "14px 28px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              See a Substrate £499/mo →
            </Link>
            <Link
              href="/anthropic-registry"
              style={{ padding: "14px 28px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Browse all 47 experts →
            </Link>
            <Link
              href="https://councilof.ai"
              style={{ padding: "14px 28px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              BFT Council home →
            </Link>
          </div>
        </div>

        {/* Why MoE for compliance */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Why MoE — not one big compliance LLM</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {REASONS.map((r, i) => (
              <div key={i} style={{ padding: "1.1rem 1.4rem", background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a` }}>
                <h3 style={{ fontSize: "1.02rem", fontWeight: 800, marginBottom: 6 }}>{r.h}</h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.6, margin: 0 }}>{r.b}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture diagram (text) */}
        <section style={{ marginBottom: "2.4rem", padding: "1.8rem 2rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 14 }}>The routing flow</h2>
          <pre style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 12, color: NAVY, background: `${NAVY}05`, padding: "1rem", borderRadius: 10, overflowX: "auto", margin: 0, lineHeight: 1.7 }}>{`
   Agent request
       │ Authorization: Bearer <tier-aware token>
       ▼
   ┌─────────────────────────────────────────────────────┐
   │  BFT Council Router (5 LLMs vote on routing path)   │
   │  Article 50? Art 73? DORA Art 17? NIS2 Art 23?      │
   └────────┬────────────────────────────────────────────┘
            │ routes to 1-3 experts
            ▼
   ┌──────────────────┐   ┌──────────────────┐   ┌──────────────────┐
   │ EU AI Act Expert │   │ DORA Expert      │   │ Audit Logger Exp │
   │ (eu-ai-act       │   │ (dora-compliance │   │ (agent-audit-    │
   │  -compliance-mcp)│   │  -mcp)           │   │  logger-mcp)     │
   └────────┬─────────┘   └────────┬─────────┘   └────────┬─────────┘
            │                      │                      │
            └──────────┬───────────┴──────────┬───────────┘
                       ▼                      ▼
            ┌────────────────────┐ ┌────────────────────┐
            │ HMAC-sign chain    │ │ Stripe Meter event │
            │ → verify.meok.ai   │ │ → £0.0002/call     │
            └────────────────────┘ └────────────────────┘
                       │
                       ▼
                 Response + X-MEOK-Attestation
`}</pre>
        </section>

        {/* The experts */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 6 }}>30 of the 47 experts</h2>
          <p style={{ fontSize: 13, color: `${NAVY}99`, marginBottom: 16 }}>Each row is a fine-tuned MCP server specialised on one regulatory framework. Sparse routing means a single agent request usually activates 1-3 — not all 47.</p>
          <div style={{ background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a`, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
              <thead>
                <tr style={{ background: `${NAVY}06` }}>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem", fontWeight: 800 }}>Expert</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem", fontWeight: 800 }}>Covers</th>
                  <th style={{ textAlign: "left", padding: "0.6rem 1rem", fontWeight: 800 }}>Framework</th>
                </tr>
              </thead>
              <tbody>
                {EXPERTS.map((e, i) => (
                  <tr key={i} style={{ borderTop: `1px solid ${NAVY}10` }}>
                    <td style={{ padding: "0.5rem 1rem", fontWeight: 700, whiteSpace: "nowrap" }}>{e.name}</td>
                    <td style={{ padding: "0.5rem 1rem", color: `${NAVY}cc`, fontSize: 11, lineHeight: 1.45 }}>{e.covers}</td>
                    <td style={{ padding: "0.5rem 1rem", color: `${NAVY}99`, fontSize: 11, whiteSpace: "nowrap" }}>{e.framework}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: `${NAVY}99`, marginTop: 10, lineHeight: 1.55 }}>
            See all 47 with one-line install + buy links at <Link href="/anthropic-registry" style={{ color: NAVY, fontWeight: 700 }}>meok.ai/anthropic-registry</Link>.
          </p>
        </section>

        {/* Comparison */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>MoE vs single-LLM compliance</h2>
          <div style={{ background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a`, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: `${NAVY}06` }}>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Capability</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800 }}>Single-LLM compliance tool</th>
                  <th style={{ textAlign: "left", padding: "0.7rem 1rem", fontWeight: 800, color: GOLD }}>MEOK MoE</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.6rem 1rem", fontWeight: 700 }}>Per-call cost</td>
                  <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc` }}>Full-model inference every time</td>
                  <td style={{ padding: "0.6rem 1rem", color: GREEN, fontWeight: 600 }}>Sparse — only 1-3 experts activate</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.6rem 1rem", fontWeight: 700 }}>Add new framework</td>
                  <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc` }}>Re-train / fine-tune / migrate</td>
                  <td style={{ padding: "0.6rem 1rem", color: GREEN, fontWeight: 600 }}>Ship a new MCP — additive</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.6rem 1rem", fontWeight: 700 }}>Audit defence</td>
                  <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc` }}>"The LLM said so"</td>
                  <td style={{ padding: "0.6rem 1rem", color: GREEN, fontWeight: 600 }}>"Expert X routed Y at timestamp Z, HMAC-signed"</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.6rem 1rem", fontWeight: 700 }}>Self-host</td>
                  <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc` }}>Vendor lock-in</td>
                  <td style={{ padding: "0.6rem 1rem", color: GREEN, fontWeight: 600 }}>MIT — every expert</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.6rem 1rem", fontWeight: 700 }}>Hallucination risk</td>
                  <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc` }}>High — LLM invents regs</td>
                  <td style={{ padding: "0.6rem 1rem", color: GREEN, fontWeight: 600 }}>Low — experts cite EUR-Lex CELEX</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.6rem 1rem", fontWeight: 700 }}>Cross-regime queries</td>
                  <td style={{ padding: "0.6rem 1rem", color: `${NAVY}cc` }}>One model tries to know everything</td>
                  <td style={{ padding: "0.6rem 1rem", color: GREEN, fontWeight: 600 }}>BFT Council votes across experts → visible dissent</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Newsletter */}
        <section style={{ marginBottom: "2.4rem" }}>
          <EmailCapture
            interest="moe-architecture"
            headline="MoE engineering brief — monthly"
            subheadline="Architecture posts on routing, sparse activation, expert composition, and audit-chain signing. One email a month."
            cta="Subscribe"
            theme="light"
          />
        </section>

        {/* Footer */}
        <p style={{ marginTop: 24, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT source · Apache 2.0 Python · Founder: Nicholas Templeman
        </p>
      </div>
    </main>
  );
}
