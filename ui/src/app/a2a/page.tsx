import type { Metadata } from "next";
import Link from "next/link";
import EmailCapture from "@/components/email-capture";
import ShareButtons from "@/components/ShareButtons";
import { withUtm } from "@/lib/stripe-utm";

// ---------------------------------------------------------------------------
// /a2a — MEOK A2A Substrate landing
//
// Sells the 20 agent-to-agent MCPs as ONE end-to-end signed pipeline.
// £999/mo bundle (covers all 20) OR £0.0002/call pay-as-you-go.
//
// The flagship product for the post-MCP-sprawl era — 1 invoice, 1 signed
// event per agent interaction, 7 attestations chained.
// ---------------------------------------------------------------------------

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const GREEN = "#7BC47F";

export const metadata: Metadata = {
  title: "MEOK A2A Substrate — 20 agent-to-agent MCPs, 1 signed event, 1 invoice",
  description:
    "20 agent-to-agent primitives — identity, trust, policy, firewall, rate-limit, certified handoff, audit, governance bridge, BFT progress council, token budget, cost allocator, commerce protocol (ACP / AP2 / x402), OASF directory, EUDI wallet, replay debugger — bundled as one £999/mo signed substrate. Or pay £0.0002 per call.",
  alternates: { canonical: "https://meok.ai/a2a" },
  openGraph: {
    title: "MEOK A2A Substrate — 20 primitives, 1 signed event",
    description: "Identity · Trust · Policy · Firewall · Rate-limit · Handoff · Audit · Governance. £999/mo. Pay-as-you-go £0.0002/call.",
    type: "website",
    url: "https://meok.ai/a2a",
    siteName: "MEOK.AI",
    images: [{
      url: "https://meok.ai/api/og?title=MEOK+A2A+Substrate&desc=20+primitives+%C2%B7+1+signed+event+%C2%B7+1+invoice",
      width: 1200,
      height: 630,
      alt: "MEOK A2A Substrate",
    }],
  },
};

type Primitive = { num: number; slug: string; title: string; one_liner: string; pypi: string };
const PRIMITIVES: Primitive[] = [
  { num: 1, slug: "agent-identity-trust-mcp", title: "Identity + Trust", one_liner: "W3C DID + verifiable credentials → trust score", pypi: "agent-identity-trust-mcp" },
  { num: 2, slug: "agent-data-residency-mcp", title: "Data Residency", one_liner: "GDPR Chapter V transfer-basis guard", pypi: "agent-data-residency-mcp" },
  { num: 3, slug: "agent-policy-enforcement-mcp", title: "Policy Enforcement", one_liner: "Per-agent-pair IAM via evaluate_call", pypi: "agent-policy-enforcement-mcp" },
  { num: 4, slug: "agent-prompt-injection-firewall-mcp", title: "Prompt-Injection Firewall", one_liner: "OWASP LLM01 scan on prompts + RAG + tool args", pypi: "agent-prompt-injection-firewall-mcp" },
  { num: 5, slug: "agent-rate-limiter-mcp", title: "Rate Limiter", one_liner: "Sliding window + concurrency grants", pypi: "agent-rate-limiter-mcp" },
  { num: 6, slug: "agent-delegation-mcp", title: "Delegation", one_liner: "Capability-scoped, time-bounded delegation", pypi: "agent-delegation-mcp" },
  { num: 7, slug: "agent-handoff-certified-mcp", title: "Certified Handoff", one_liner: "Signed provenance chain on each handoff", pypi: "agent-handoff-certified-mcp" },
  { num: 8, slug: "agent-orchestrator-mcp", title: "Orchestrator", one_liner: "Workflow primitives (sequence/branch/retry)", pypi: "agent-orchestrator-mcp" },
  { num: 9, slug: "agent-audit-logger-mcp", title: "Audit Logger", one_liner: "Hash-chained HMAC-signed log", pypi: "agent-audit-logger-mcp" },
  { num: 10, slug: "agent-commerce-payments-mcp", title: "Commerce + Payments", one_liner: "A2A payments + PSD2 / MiCA attest", pypi: "agent-commerce-payments-mcp" },
  { num: 11, slug: "agent-negotiation-mcp", title: "Negotiation", one_liner: "Auction + bidding primitives", pypi: "agent-negotiation-mcp" },
  { num: 12, slug: "a2a-governance-bridge-mcp", title: "Governance Bridge", one_liner: "Folds 7 signals into EU AI Act / DORA / ISO 42001 evidence", pypi: "a2a-governance-bridge-mcp" },
  // ── New 2026-05 batch ──────────────────────────────────────────
  { num: 13, slug: "bft-progress-council-mcp", title: "BFT Progress Council", one_liner: "5-voter Byzantine council halts agent loops on no-progress", pypi: "bft-progress-council-mcp" },
  { num: 14, slug: "agent-token-budget-mcp", title: "Token Budget Cap", one_liner: "Per-session hard cap with signed budget-exhausted attestation", pypi: "agent-token-budget-mcp" },
  { num: 15, slug: "agent-cost-allocator-mcp", title: "Cost Allocator", one_liner: "Multi-tenant chargeback splitter with signed per-tenant summary", pypi: "agent-cost-allocator-mcp" },
  { num: 16, slug: "agent-commerce-protocol-mcp", title: "Agent Commerce Protocol", one_liner: "Stripe ACP + Google AP2 + Coinbase x402 bridge", pypi: "agent-commerce-protocol-mcp" },
  { num: 17, slug: "agent-x402-paywall-mcp", title: "x402 Paywall", one_liner: "Coinbase HTTP 402 on-chain settlement — pay-per-call without Stripe", pypi: "agent-x402-paywall-mcp" },
  { num: 18, slug: "oasf-agent-directory-mcp", title: "OASF Directory", one_liner: "Cisco OASF + AGNTCY bridge under Linux Foundation", pypi: "oasf-agent-directory-mcp" },
  { num: 19, slug: "eudi-wallet-mcp", title: "EUDI Wallet", one_liner: "EU Digital Identity Wallet (eIDAS 2.0) for AI agents", pypi: "eudi-wallet-mcp" },
  { num: 20, slug: "agent-replay-debugger-mcp", title: "Replay Debugger", one_liner: "Step-debug agent runs + deterministic replay + signed audit", pypi: "agent-replay-debugger-mcp" },
];

const PIPELINE_STAGES = [
  { idx: 1, label: "identity-trust", out: "trust score" },
  { idx: 2, label: "data-residency", out: "transfer-basis OK" },
  { idx: 3, label: "policy-enforcement", out: "scoped allow" },
  { idx: 4, label: "injection-firewall", out: "no LLM01" },
  { idx: 5, label: "rate-limiter", out: "grant token" },
  { idx: 6, label: "handoff-certified", out: "signed provenance" },
  { idx: 7, label: "audit-logger", out: "hash-chained" },
];

const MOATS = [
  { title: "Prompt-injection threat intelligence", desc: "Every blocked attempt feeds an anonymized signature corpus. After 1M scans we own the most current real-world dataset.", monetisation: "£999/mo to CISO teams + SIEM vendors (Wazuh/Elastic/Splunk integrations)" },
  { title: "Policy-violation taxonomy", desc: "Every evaluate_call → DENY event categorised. The canonical map of agent-permission failure modes.", monetisation: "Quarterly 'State of Agent Permissions' report — £2,499 full data access" },
  { title: "Incident-clock graph", desc: "How agent incidents cascade across EU AI Act Art 73, DORA Art 19, NIS2 Art 23, GDPR Art 33.", monetisation: "£2,500/day consulting · regulator briefings" },
  { title: "Cross-LLM handoff patterns", desc: "Anonymised production-fleet data on which model hands off to which, for which tasks, under which trust threshold.", monetisation: "Annual 'State of A2A' report · content marketing engine" },
  { title: "Trust network reputation graph", desc: "Set of agent DIDs that have ever interacted, with anomaly-detection signals.", monetisation: "£0.0005/check — called by firewalls + payment systems before transactions" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "MEOK A2A Substrate",
  "description": "20 agent-to-agent MCPs bundled as one signed end-to-end pipeline. Identity, trust, policy, firewall, rate-limit, handoff, audit, governance, BFT progress council, token budget, cost allocator, commerce protocol, x402 paywall, OASF directory, EUDI wallet, replay debugger.",
  "brand": { "@type": "Brand", "name": "MEOK AI Labs" },
  "url": "https://meok.ai/a2a",
  "image": "https://meok.ai/api/og?title=MEOK+A2A+Substrate",
  "offers": [
    { "@type": "Offer", "price": "0", "priceCurrency": "GBP", "name": "Self-host (MIT, all 20 MCPs)", "url": "https://github.com/CSOAI-ORG" },
    { "@type": "Offer", "price": "499", "priceCurrency": "GBP", "name": "Substrate Monthly", "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" } },
    { "@type": "Offer", "price": "4990", "priceCurrency": "GBP", "name": "Substrate Annual (save £998)", "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1Y" } },
    { "@type": "Offer", "price": "0.0002", "priceCurrency": "GBP", "name": "Pay-as-you-go per call", "priceSpecification": { "@type": "UnitPriceSpecification", "unitText": "API call" } },
    { "@type": "Offer", "price": "4990", "priceCurrency": "GBP", "name": "Defence (multi-BU, on-prem option)", "priceSpecification": { "@type": "UnitPriceSpecification", "billingDuration": "P1M" } },
  ],
};

export default function A2APage() {
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
            <span style={{ color: GOLD }}>20 primitives.</span>
            <br />
            1 signed event.
            <br />
            1 invoice.
          </h1>
          <p style={{ fontSize: "1.1rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.55, marginBottom: 22, maxWidth: 700 }}>
            Every agent-to-agent call traverses identity → trust → policy → firewall → rate-limit →
            handoff → audit → governance. Each stage emits a signed attestation. The whole pipeline
            chains into one auditor-defensible event for EU AI Act Article 12 + DORA Article 17 +
            ISO 42001 clause 9. MIT-licensed self-host or <strong style={{ color: GOLD }}>£999/mo</strong> managed.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={withUtm("https://buy.stripe.com/bJe4gB3K4002aAtgP68k91r", "/a2a", "a2a_substrate_1499")}
              style={{ padding: "14px 28px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Start Substrate £999/mo →
            </a>
            <Link
              href="#pipeline"
              style={{ padding: "14px 28px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              See the pipeline →
            </Link>
            <Link
              href="/anthropic-registry"
              style={{ padding: "14px 28px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              Free self-host (MIT) →
            </Link>
          </div>
          <ShareButtons
            text="20 agent-to-agent MCPs. 1 signed event. 1 invoice. MIT self-host or £999/mo managed."
            url="https://meok.ai/a2a"
            hashtags={["mcp", "agents", "compliance", "a2a"]}
            hnTitle="MEOK A2A Substrate — 20 agent-to-agent MCPs, 1 signed event chain"
            variant="dark"
          />
        </div>

        {/* Why this exists */}
        <section style={{ marginBottom: "2.4rem", padding: "1.6rem 1.8rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.3rem", fontWeight: 900, marginBottom: 10 }}>Why ship 20 separate MCPs as one substrate?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: `${NAVY}cc`, margin: 0 }}>
            Because the next protocol layer agents are converging on is <strong>agent-to-agent infrastructure</strong>,
            not the chatbox. Anthropic shipped MCP. Google shipped A2A. Stripe shipped A2A Payments.
            The pieces between agents — identity, trust, policy, audit — need standardisation.
            <br /><br />
            Sold separately, each primitive is £29-£149/month. Bought together as the Substrate, you
            get all 20, the unified <code style={{ background: `${NAVY}10`, padding: "2px 6px", borderRadius: 4, fontFamily: "monospace" }}>api.meok.ai/v1/a2a/&lt;primitive&gt;</code> endpoint,
            100K calls/month included, and the signed governance-bridge event chain — for £999/month.
            <br /><br />
            Or skip the subscription entirely: <strong>£0.0002 per call</strong>, no monthly minimum, billed monthly via Stripe metered.
          </p>
        </section>

        {/* The 7-stage pipeline */}
        <section id="pipeline" style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>The 7-stage pipeline</h2>
          <div style={{ background: "#fff", padding: "1.6rem", borderRadius: 14, border: `1px solid ${NAVY}1a`, marginBottom: 16 }}>
            <div style={{ display: "grid", gap: 10 }}>
              {PIPELINE_STAGES.map((s) => (
                <div key={s.idx} style={{ display: "flex", alignItems: "center", gap: 14, padding: "0.7rem 1rem", background: `${NAVY}05`, borderRadius: 10 }}>
                  <div style={{ flex: "0 0 32px", width: 32, height: 32, background: GOLD, color: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 14 }}>{s.idx}</div>
                  <div style={{ flex: 1 }}>
                    <code style={{ fontFamily: "ui-monospace,Menlo,monospace", fontSize: 14, fontWeight: 700 }}>{s.label}</code>
                  </div>
                  <div style={{ fontSize: 13, color: `${NAVY}99` }}>→ <code style={{ background: `${NAVY}10`, padding: "2px 6px", borderRadius: 4, fontFamily: "monospace" }}>{s.out}</code></div>
                </div>
              ))}
              <div style={{ marginTop: 10, padding: "0.9rem 1rem", background: GREEN, color: NAVY, borderRadius: 10, textAlign: "center", fontWeight: 800, fontSize: 14 }}>
                + governance-bridge folds all 7 attestations → 1 signed evidence event
              </div>
            </div>
          </div>
          <p style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.55, margin: 0 }}>
            Every stage is an MCP. You can self-host them all under MIT licence, or call them
            individually via <code style={{ background: `${NAVY}10`, padding: "2px 6px", borderRadius: 4 }}>uvx &lt;name&gt;-mcp</code>. The Substrate is the managed pipeline
            that runs them in sequence behind one endpoint, with one signing key, one invoice,
            and one HMAC-chained evidence trail.
          </p>
        </section>

        {/* The 20 primitives */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>All 20 primitives in the Substrate</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 12 }}>
            {PRIMITIVES.map((p) => (
              <div key={p.slug} style={{ padding: "1rem 1.2rem", background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a` }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 8, marginBottom: 6 }}>
                  <div style={{ fontSize: 11, color: `${NAVY}99`, fontFamily: "monospace", fontWeight: 700 }}>#{p.num}</div>
                  <h3 style={{ fontSize: ".98rem", fontWeight: 800, margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.45, margin: "0 0 8px" }}>{p.one_liner}</p>
                <code style={{ display: "block", background: NAVY, color: BG, padding: ".4rem .6rem", borderRadius: 6, fontFamily: "ui-monospace,Menlo,monospace", fontSize: 11, marginBottom: 6 }}>uvx {p.pypi}</code>
                <a
                  href={`https://github.com/CSOAI-ORG/${p.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 11, color: NAVY, textDecoration: "none", fontWeight: 700 }}
                >
                  GitHub →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>Pricing</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <div style={{ padding: "1.4rem 1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: `${NAVY}99`, marginBottom: 6 }}>Free</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£0</div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>Self-host all 12 (MIT)</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ All 20 MCPs via uvx</li>
                <li>✓ Local-only attestations</li>
                <li>✓ Forever free</li>
              </ul>
              <Link href="https://github.com/CSOAI-ORG" style={{ display: "block", marginTop: 14, padding: "8px", textAlign: "center", border: `1px solid ${NAVY}33`, borderRadius: 8, color: NAVY, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
                GitHub →
              </Link>
            </div>

            <div style={{ padding: "1.4rem 1.4rem", background: NAVY, color: "#fff", borderRadius: 14, border: `2px solid ${GOLD}`, position: "relative" }}>
              <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", padding: "3px 12px", background: GOLD, color: NAVY, borderRadius: 999, fontSize: 10, fontWeight: 900, letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Best value
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: GOLD, marginBottom: 6 }}>Substrate</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£999<span style={{ fontSize: ".9rem", color: "rgba(255,255,255,0.5)" }}>/mo</span></div>
              <div style={{ fontSize: 11, color: "rgba(255,255,255,0.65)", marginBottom: 12 }}>or £4,990/yr (save £998)</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: "rgba(255,255,255,0.85)", lineHeight: 1.8 }}>
                <li><span style={{ color: GOLD }}>✓</span> All 20 MCPs managed</li>
                <li><span style={{ color: GOLD }}>✓</span> Unified api.meok.ai endpoint</li>
                <li><span style={{ color: GOLD }}>✓</span> 100K calls/month included</li>
                <li><span style={{ color: GOLD }}>✓</span> 99.9% SLA</li>
                <li><span style={{ color: GOLD }}>✓</span> E2E signed evidence chain</li>
              </ul>
              <a href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" style={{ display: "block", marginTop: 6, textAlign: "center", color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 11, fontWeight: 700 }}>
                or annual £4,990 (save £998) →
              </a>
              <a href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" style={{ display: "block", marginTop: 14, padding: "10px", textAlign: "center", background: GOLD, color: NAVY, borderRadius: 8, textDecoration: "none", fontSize: 13, fontWeight: 900 }}>
                Start →
              </a>
            </div>

            <div style={{ padding: "1.4rem 1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: `${NAVY}99`, marginBottom: 6 }}>Pay-as-you-go</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£0.0002<span style={{ fontSize: ".7rem", color: `${NAVY}99` }}>/call</span></div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>No monthly minimum</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ Stripe metered billing</li>
                <li>✓ Any of the 20 primitives</li>
                <li>✓ Signed attestations</li>
                <li>✓ Bills monthly · cap anytime</li>
              </ul>
              <a href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" style={{ display: "block", marginTop: 14, padding: "8px", textAlign: "center", border: `1px solid ${NAVY}33`, borderRadius: 8, color: NAVY, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
                Connect →
              </a>
            </div>

            <div style={{ padding: "1.4rem 1.4rem", background: "#fff", borderRadius: 14, border: `1px solid ${NAVY}1a` }}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.08em", color: `${NAVY}99`, marginBottom: 6 }}>Defence</div>
              <div style={{ fontSize: "1.8rem", fontWeight: 900, marginBottom: 4 }}>£4,990<span style={{ fontSize: ".9rem", color: `${NAVY}99` }}>/mo</span></div>
              <div style={{ fontSize: 11, color: `${NAVY}99`, marginBottom: 12 }}>Multi-BU · on-prem option</div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 12, color: `${NAVY}cc`, lineHeight: 1.8 }}>
                <li>✓ Substrate + on-prem deploy</li>
                <li>✓ Dedicated CSM</li>
                <li>✓ Reseller white-label</li>
                <li>✓ Pay by invoice / PO</li>
              </ul>
              <a href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t" style={{ display: "block", marginTop: 14, padding: "8px", textAlign: "center", border: `1px solid ${NAVY}33`, borderRadius: 8, color: NAVY, textDecoration: "none", fontSize: 12, fontWeight: 700 }}>
                Subscribe £4,990/mo →
              </a>
              <a href="mailto:nicholas@meok.ai?subject=A2A%20Substrate%20Defence%20PO" style={{ display: "block", marginTop: 4, padding: "4px", textAlign: "center", color: `${NAVY}88`, textDecoration: "none", fontSize: 11 }}>
                or contact for PO →
              </a>
            </div>
          </div>
        </section>

        {/* Multi-protocol coverage */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 6 }}>Multi-protocol coverage</h2>
          <p style={{ fontSize: 14, color: `${NAVY}99`, marginBottom: 18, lineHeight: 1.55 }}>
            The agent interop space has 6 live protocols right now. The Substrate bridges
            <strong> all 6</strong> behind one signing key, so your code stays portable when
            the standards shake out.
          </p>
          <div style={{ background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a`, overflow: "hidden" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
              <thead>
                <tr style={{ background: `${NAVY}06` }}>
                  <th style={{ textAlign: "left", padding: "0.8rem 1rem", fontWeight: 800, color: NAVY }}>Protocol</th>
                  <th style={{ textAlign: "left", padding: "0.8rem 1rem", fontWeight: 800, color: NAVY }}>Owner</th>
                  <th style={{ textAlign: "left", padding: "0.8rem 1rem", fontWeight: 800, color: NAVY }}>Layer</th>
                  <th style={{ textAlign: "left", padding: "0.8rem 1rem", fontWeight: 800, color: NAVY }}>Coverage</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.7rem 1rem", fontWeight: 700 }}>MCP</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Anthropic</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Agent → tools</td>
                  <td style={{ padding: "0.7rem 1rem", color: GREEN, fontWeight: 700 }}>✓ Native (all 47)</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.7rem 1rem", fontWeight: 700 }}>A2A</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Google + Linux Foundation</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Agent ↔ agent (absorbed IBM ACP)</td>
                  <td style={{ padding: "0.7rem 1rem", color: GREEN, fontWeight: 700 }}>✓ Native (12 A2A MCPs)</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.7rem 1rem", fontWeight: 700 }}>IBM ACP</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>IBM (was)</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Agent messaging — merged into A2A Sept 2025</td>
                  <td style={{ padding: "0.7rem 1rem", color: GREEN, fontWeight: 700 }}>✓ Via A2A</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.7rem 1rem", fontWeight: 700 }}>Stripe ACP</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Stripe + OpenAI</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Agent commerce in ChatGPT</td>
                  <td style={{ padding: "0.7rem 1rem", color: GOLD, fontWeight: 700 }}>◐ Bridge (Q3 2026)</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.7rem 1rem", fontWeight: 700 }}>AP2</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Google + 60 orgs (Mastercard, PayPal, Adyen)</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Cross-platform agent payments + mandates</td>
                  <td style={{ padding: "0.7rem 1rem", color: GOLD, fontWeight: 700 }}>◐ Bridge (Q3 2026)</td>
                </tr>
                <tr style={{ borderTop: `1px solid ${NAVY}10` }}>
                  <td style={{ padding: "0.7rem 1rem", fontWeight: 700 }}>x402</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>Coinbase</td>
                  <td style={{ padding: "0.7rem 1rem", color: `${NAVY}cc` }}>HTTP 402 pay-per-call</td>
                  <td style={{ padding: "0.7rem 1rem", color: GREEN, fontWeight: 700 }}>✓ Partial (api.meok.ai gateway)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 12, color: `${NAVY}99`, marginTop: 10, lineHeight: 1.5 }}>
            <strong>Note on "ACP":</strong> the acronym is overloaded. <em>IBM ACP</em> (Agent Communication Protocol) was
            wound down in Sept 2025 and merged into A2A under Linux Foundation. <em>Stripe ACP</em> (Agentic Commerce
            Protocol) is a live, separate protocol for in-conversation payments. Our Substrate covers both.
          </p>
        </section>

        {/* Data moats */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 6 }}>The 5 data moats</h2>
          <p style={{ fontSize: 14, color: `${NAVY}99`, marginBottom: 18, lineHeight: 1.55 }}>
            Built passively as customers use the Substrate. We don&apos;t read your payloads.
            We aggregate the <em>metadata</em> of what&apos;s happening across the fleet.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {MOATS.map((m, i) => (
              <div key={i} style={{ padding: "1.1rem 1.3rem", background: "#fff", borderRadius: 12, border: `1px solid ${NAVY}1a` }}>
                <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 4 }}>
                  <div style={{ flex: "0 0 26px", width: 26, height: 26, background: GREEN, color: NAVY, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 900, fontSize: 12 }}>{i + 1}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 800, margin: 0 }}>{m.title}</h3>
                </div>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.5, margin: "6px 0" }}>{m.desc}</p>
                <p style={{ fontSize: 12, color: `${NAVY}99`, margin: "6px 0 0", fontStyle: "italic" }}>→ {m.monetisation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section style={{ marginBottom: "2.4rem" }}>
          <EmailCapture
            interest="a2a-substrate"
            headline="A2A engineering brief — monthly"
            subheadline="The frontier of agent-to-agent infrastructure: identity, trust, audit. One email a month, no spam."
            cta="Subscribe"
            theme="light"
          />
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: "2.4rem" }}>
          <h2 style={{ fontSize: "1.5rem", fontWeight: 900, marginBottom: 16 }}>FAQ</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {[
              { q: "Can I self-host the whole substrate?", a: "Yes. All 20 MCPs are MIT-licensed. uvx <name>-mcp installs each. The Substrate subscription gives you the managed pipeline + signed verify URL + 99.9% SLA — not the source code (which is free)." },
              { q: "What counts as a call for usage-based billing?", a: "Each tool invocation on any of the 20 primitives = 1 call. A typical A2A interaction traverses ~3-5 primitives, so one customer-facing request = ~3-5 billable calls. 100K Substrate-included calls ≈ 20-30K full pipeline runs/month." },
              { q: "Is the data moat aggregation an opt-in?", a: "Substrate customers opt-out by default for moat data sharing during the first 60 days. After that, anonymized aggregate metadata feeds the moats with no payload reading. Enterprise contracts can require permanent opt-out — no discount, but available." },
              { q: "How does this compare to LangGraph / Crew AI / Autogen?", a: "Those are orchestrators. We're the trust + audit substrate underneath them. Use them for workflow, use us for what regulators ask for. Many customers run both." },
              { q: "What about ACP? I heard there's a new agent comms protocol.", a: "Two protocols share the 'ACP' acronym. IBM ACP (Agent Communication Protocol) was wound down in September 2025 and merged into A2A under the Linux Foundation — our Substrate already supports it via A2A. Stripe ACP (Agentic Commerce Protocol) is a separate live protocol for agent commerce inside ChatGPT — we ship the bridge in Q3 2026. See the multi-protocol coverage table above." },
              { q: "Do you support AP2 mandates and x402?", a: "Yes — both shipped. agent-commerce-protocol-mcp covers Stripe ACP + Google AP2 mandates + Coinbase x402 in one bridge. agent-x402-paywall-mcp is the dedicated Coinbase HTTP 402 + on-chain settlement primitive. x402 also wraps our api.meok.ai gateway so you can pay-per-call without a Stripe account." },
              { q: "What's on the roadmap?", a: "Live now: BFT Progress Council (loop halt), Token Budget cap, Cost Allocator, ACP bridge, x402 paywall, OASF Directory (Cisco/AGNTCY), EUDI Wallet (eIDAS 2.0), Replay Debugger. Next: agent-content-watermark (Article 50 + C2PA), agent-incident-relay (Article 73 5-clock broadcaster), agent-eu-mlbom-export." },
            ].map((f, i) => (
              <details key={i} style={{ padding: "1rem 1.2rem", background: "#fff", borderRadius: 10, border: `1px solid ${NAVY}1a` }}>
                <summary style={{ cursor: "pointer", fontWeight: 700, fontSize: 14, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, marginBottom: 0, fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.55 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Footer */}
        <p style={{ marginTop: 24, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT-licensed source · Apache 2.0 Python · hello@meok.ai
        </p>
      </div>
    </main>
  );
}
