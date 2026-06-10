import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/email-capture";

// ---------------------------------------------------------------------------
// /cobol — MEOK COBOL Substrate landing
//
// Bridges 220 billion lines of legacy COBOL to modern AI governance.
// 5 tools: copybook parser + CICS bridge + JCL scanner + transpiler (FPT
// COBOL-Coder-14B, 73.95% vs GPT-4o 41.8%) + DORA/NIS2/AI Act crosswalk.
// £999/mo Pro · £9,990/yr Annual · £4,990/mo Defence.
//
// Reclaimed IP — Nick (CSOAI-ORG) sole contributor across 91 commits to
// the CSGA-GLOBAL/cobol-bridge public repo. Migrating under MEOK brand.
// ---------------------------------------------------------------------------

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const GREEN = "#7BC47F";
const RED = "#dc2626";

export const metadata: Metadata = {
  title: "MEOK COBOL Substrate — 220B lines, 5 tools, signed compliance",
  description:
    "The world's first MCP-native COBOL modernization substrate. Bridge 220 billion lines of legacy COBOL to modern AI governance: Copybook Parser + CICS Bridge + JCL Scanner + FPT COBOL-Coder-14B transpiler (73.95% compile success vs GPT-4o 41.8%) + DORA/NIS2/EU AI Act crosswalk. £999/mo Pro or £4,990/mo Defence.",
  alternates: { canonical: "https://meok.ai/cobol" },
  openGraph: {
    title: "MEOK COBOL Substrate — modernize mainframes without rewriting",
    description: "220B lines of COBOL × 5 governance tools × 0 rewrites. £999/mo. Banking, insurance, government, defence.",
    type: "website",
    url: "https://meok.ai/cobol",
    siteName: "MEOK.AI",
    images: [{
      url: "https://meok.ai/api/og?title=MEOK+COBOL+Substrate&desc=220B+lines+%C2%B7+5+tools+%C2%B7+signed+compliance",
      width: 1200,
      height: 630,
      alt: "MEOK COBOL Substrate",
    }],
  },
};

type Tool = { num: number; title: string; one_liner: string; outputs: string };
const TOOLS: Tool[] = [
  { num: 1, title: "Copybook Parser", one_liner: "Parse COBOL copybooks → JSON schemas with PII detection", outputs: "GDPR + PCI-DSS + HIPAA + SOX field map" },
  { num: 2, title: "CICS Bridge Assessment", one_liner: "Evaluate CICS programs for MCP integration readiness", outputs: "RACF/ACF2/TopSecret security gap report" },
  { num: 3, title: "JCL Batch Scanner", one_liner: "Analyze JCL job streams for data lineage + governance", outputs: "Dataset compliance flags + scheduling audit" },
  { num: 4, title: "COBOL-Coder-14B Transpiler", one_liner: "FPT-Software COBOL-Coder model, compiler-validated", outputs: "Python/Java with business-logic preservation" },
  { num: 5, title: "Governance Crosswalk", one_liner: "Map COBOL estate to DORA + NIS2 + EU AI Act articles", outputs: "Signed compliance evidence pack" },
];

type Vertical = { key: string; name: string; pain: string; regs: string };
const VERTICALS: Vertical[] = [
  { key: "banking", name: "Banking", pain: "Tier-1 core systems still on COBOL; DORA Article 17 third-party register required", regs: "DORA, Basel III, MiFID II, AML 6AMLD" },
  { key: "insurance", name: "Insurance", pain: "Policy admin + claims on mainframes; FIDA + IDD overhauls", regs: "FIDA, IDD, Solvency II, EU AI Act" },
  { key: "government", name: "Government", pain: "IRS, SSA, NHS, HMRC + EU equivalents — billions of lines, no migration plan", regs: "GDPR, ATRS (UK), OMB M-24-10 (US)" },
  { key: "defence", name: "Defence", pain: "MoD payroll, MOD supply chain, US DoD ERP all COBOL", regs: "ITAR, NIST 800-171, UK MOD JSP" },
  { key: "healthcare", name: "Healthcare", pain: "HL7 over COBOL backbones; EHR refresh cycles missed", regs: "HIPAA, EU AI Act MedDevice, MDR" },
  { key: "real-time-payments", name: "Real-Time Payments", pain: "SEPA Instant + FedNow + UK FPS migrating off mainframe", regs: "PSD3, FAIR Banking, PCI-DSS v4" },
];

const PROOF = [
  { stat: "220B", label: "Lines of COBOL in production worldwide" },
  { stat: "73.95%", label: "COBOL-Coder-14B compile success rate" },
  { stat: "41.8%", label: "GPT-4o baseline for comparison" },
  { stat: "0", label: "Re-platform projects required" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MEOK COBOL Substrate",
  "description": "Bridge 220 billion lines of legacy COBOL to modern AI governance via MCP. Five tools, signed compliance, zero rewrites.",
  "brand": { "@type": "Brand", "name": "MEOK AI Labs" },
  "url": "https://meok.ai/cobol",
  "image": "https://meok.ai/api/og?title=MEOK+COBOL+Substrate",
  "offers": [
    { "@type": "Offer", "price": "999", "priceCurrency": "GBP", "name": "COBOL Substrate Pro Monthly", "url": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" },
    { "@type": "Offer", "price": "9990", "priceCurrency": "GBP", "name": "COBOL Substrate Pro Annual", "url": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" },
    { "@type": "Offer", "price": "4990", "priceCurrency": "GBP", "name": "COBOL Substrate Defence", "url": "https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" },
  ],
};

export default function CobolPage() {
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
            <span style={{ color: GOLD }}>220 billion</span> lines of COBOL.
            <br />
            5 governance tools.
            <br />
            Zero re-platforms.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, marginBottom: 22, maxWidth: 700 }}>
            Banks. Insurers. Government departments. Defence contractors. Healthcare. Real-time
            payments. They all sit on COBOL mainframes. <strong>None</strong> can move off in time for
            DORA Article 17, EU AI Act Article 12 audit, or NIS2 Article 23. <strong style={{ color: GOLD }}>MEOK COBOL Substrate</strong> bridges
            the existing estate to modern AI governance with 5 MCP-native tools — no re-platform required.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t"
              style={{ padding: "14px 28px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Start COBOL Substrate £999/mo →
            </a>
            <a
              href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t"
              style={{ padding: "14px 28px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Defence £4,990/mo →
            </a>
            <Link
              href="https://github.com/CSOAI-ORG/cobol-bridge-mcp"
              style={{ padding: "14px 28px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              Free MIT self-host →
            </Link>
          </div>
        </div>

        {/* Proof points */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 10, marginBottom: 28 }}>
          {PROOF.map((p) => (
            <div key={p.stat} style={{ padding: "1rem", background: "#fff", borderRadius: 10, textAlign: "center" }}>
              <div style={{ fontSize: 24, fontWeight: 900, color: GOLD }}>{p.stat}</div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, lineHeight: 1.4 }}>{p.label}</div>
            </div>
          ))}
        </div>

        {/* Why this exists */}
        <section style={{ marginBottom: "2.4rem", padding: "1.6rem 1.8rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 10 }}>Why the bridge, not another rewrite</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: `${NAVY}cc`, margin: 0 }}>
            COBOL modernization fails 40-70% of the time. Banks have spent decades migrating off,
            and the COBOL keeps running. The mainframe team retires; the system stays.
            <br /><br />
            What changed in 2024-2026 isn&apos;t the mainframe — it&apos;s the <strong>governance perimeter</strong>.
            EU AI Act Article 12 wants audit logs across every decision-making system, AI or not.
            DORA Article 17 requires a Register of Information for all third-party ICT. NIS2 Article 23
            wants 24-hour incident reporting on essential entities. None of that requires moving
            the COBOL — just <strong>signing what it does</strong>.
            <br /><br />
            <strong style={{ color: NAVY }}>That&apos;s what COBOL Substrate is.</strong> Five MCP-native tools
            running outside the mainframe, reading copybooks + CICS + JCL, generating signed
            evidence packs that auditors verify by URL. The mainframe doesn&apos;t change. The compliance posture does.
          </p>
        </section>

        {/* 5 tools */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>5 integrated tools</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {TOOLS.map((t) => (
              <div key={t.num} style={{ padding: "1.2rem 1.4rem", background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a` }}>
                <div style={{ display: "flex", gap: 14, alignItems: "baseline", marginBottom: 6 }}>
                  <div style={{ flex: "0 0 32px", width: 32, height: 32, background: GOLD, color: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14 }}>{t.num}</div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 800, margin: 0 }}>{t.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.55, marginLeft: 46, margin: "0 0 6px 46px" }}>{t.one_liner}</p>
                <p style={{ fontSize: 12, color: `${NAVY}99`, marginLeft: 46, margin: "0 0 0 46px" }}>→ <em>{t.outputs}</em></p>
              </div>
            ))}
          </div>
        </section>

        {/* Verticals */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>By industry</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {VERTICALS.map((v) => (
              <div key={v.key} style={{ padding: "1.1rem 1.3rem", background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a` }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: GOLD, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 6 }}>{v.name}</div>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, marginBottom: 8 }}>{v.pain}</p>
                <p style={{ fontSize: 11, color: `${NAVY}99`, margin: 0 }}>Regs: <code style={{ background: `${NAVY}10`, padding: "1px 5px", borderRadius: 4 }}>{v.regs}</code></p>
              </div>
            ))}
          </div>
        </section>

        {/* The transpiler edge */}
        <section style={{ marginBottom: "2.4rem", padding: "1.8rem 2rem", background: NAVY, color: "#fff", borderRadius: 14 }}>
          <div style={{ fontSize: 11, fontWeight: 800, color: GOLD, textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 8 }}>The technical moat</div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 12 }}>FPT COBOL-Coder-14B → 73.95% compile success vs GPT-4o&apos;s 41.8%</h2>
          <p style={{ color: "rgba(255,255,255,0.8)", lineHeight: 1.55, marginBottom: 0, fontSize: 14 }}>
            Generic LLMs hallucinate COBOL constructs they&apos;ve never seen at training time. The
            FPT-Software COBOL-Coder-14B model is fine-tuned on real COBOL estates and gives us
            <strong style={{ color: GOLD }}> 73.95% compiler-validated translation success</strong> vs GPT-4o&apos;s 41.8%.
            That&apos;s the difference between a transpilation that works and one that needs a
            human rewriter at every function boundary.
            <br /><br />
            We integrate the model behind a compliance-aware wrapper: every translation generates
            a signed attestation chained into the existing MEOK audit-logger evidence pack, so
            modernization itself becomes auditor-defensible work — not just the output code.
          </p>
        </section>

        {/* Pricing */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <div style={{ padding: "1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: `${NAVY}99`, marginBottom: 6 }}>Free</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£0</div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>cobol-bridge-mcp MIT</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ uvx cobol-bridge-mcp</li>
                <li>✓ Local attestations</li>
                <li>✗ COBOL-Coder-14B</li>
                <li>✗ Signed evidence</li>
              </ul>
            </div>

            <div style={{ padding: "1.4rem", background: NAVY, color: "#fff", borderRadius: 14, border: `2px solid ${GOLD}`, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "3px 12px", background: GOLD, color: NAVY, borderRadius: 999, fontSize: 10, fontWeight: 900, textTransform: "uppercase" }}>
                Best value
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: GOLD, marginBottom: 6 }}>Substrate Pro</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£999<span style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>/mo</span></div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>or £9,990/yr (save £1,998)</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
                <li><span style={{ color: GOLD }}>✓</span> All 5 tools</li>
                <li><span style={{ color: GOLD }}>✓</span> COBOL-Coder-14B</li>
                <li><span style={{ color: GOLD }}>✓</span> Signed evidence chain</li>
                <li><span style={{ color: GOLD }}>✓</span> DORA/NIS2/AI Act crosswalk</li>
                <li><span style={{ color: GOLD }}>✓</span> 99.9% SLA</li>
              </ul>
              <a href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" style={{ display: "block", marginTop: 14, padding: "10px", textAlign: "center", background: GOLD, color: NAVY, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 900 }}>
                Start →
              </a>
              <a href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" style={{ display: "block", marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 11, fontWeight: 700 }}>
                or annual £9,990 →
              </a>
            </div>

            <div style={{ padding: "1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", color: `${NAVY}99`, marginBottom: 6 }}>Defence</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£4,990<span style={{ fontSize: ".9rem", color: `${NAVY}99` }}>/mo</span></div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>Multi-mainframe + on-prem</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ Substrate Pro features</li>
                <li>✓ On-premise deployment</li>
                <li>✓ DORA Art 17 register</li>
                <li>✓ Dedicated CSM</li>
                <li>✓ White-label reseller</li>
                <li>✓ PO / invoice billing</li>
              </ul>
              <a href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" style={{ display: "block", marginTop: 14, padding: "8px", textAlign: "center", border: `1px solid ${NAVY}33`, borderRadius: 8, color: NAVY, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
                Subscribe £4,990 →
              </a>
            </div>
          </div>
        </section>

        {/* The play */}
        <section style={{ marginBottom: "2.4rem", padding: "1.6rem 1.8rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 10 }}>How to evaluate in 14 days</h2>
          <ol style={{ paddingLeft: 24, fontSize: 14, color: `${NAVY}cc`, lineHeight: 1.7, margin: 0 }}>
            <li><strong>Days 1-3:</strong> Drop us 3-5 anonymised COBOL copybooks. Substrate runs Copybook Parser + PII detection + GDPR/PCI/HIPAA/SOX mapping.</li>
            <li><strong>Days 4-7:</strong> Point us at one CICS region + JCL job stream. We run CICS Bridge Assessment + JCL Batch Scanner — surface security + lineage gaps.</li>
            <li><strong>Days 8-11:</strong> Pick the top-3 risk programs from steps 1-2. COBOL-Coder-14B transpiles them to Python with compiler-validated output. Side-by-side diff for your team.</li>
            <li><strong>Days 12-14:</strong> Governance Crosswalk emits a signed evidence pack ready for your next DORA / NIS2 / EU AI Act audit. We hand off to your team or escalate to Defence tier.</li>
          </ol>
        </section>

        {/* Newsletter */}
        <section style={{ marginBottom: "2.4rem" }}>
          <EmailCapture
            interest="cobol-substrate"
            headline="COBOL modernization brief — monthly"
            subheadline="Regulatory clocks (DORA Art 17, AI Act Art 12, NIS2 Art 23) + COBOL ecosystem updates. One email a month."
            cta="Subscribe"
            theme="light"
          />
        </section>

        {/* Footer */}
        <p style={{ marginTop: 24, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT source · COBOL-Coder-14B by FPT-Software (used per its licence) · hello@meok.ai
        </p>
      </div>
    </main>
  );
}
