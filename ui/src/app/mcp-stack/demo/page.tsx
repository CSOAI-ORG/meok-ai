"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const GREEN = "#7bc47f";
const BG = "#f5f0e8";

type Step = {
  mcp: string;
  tool: string;
  input: Record<string, unknown>;
  duration_ms: number;
  output: Record<string, unknown>;
  signature: string;
};

const SAMPLE_GOAL = "Generate a marketing video for a German bank's regulated AI rollout";

function hmacFake(input: string): string {
  // demo-only deterministic 40-hex hash via DJB2 ×4
  let h1 = 5381, h2 = 7349, h3 = 9277, h4 = 11321;
  for (let i = 0; i < input.length; i++) {
    const c = input.charCodeAt(i);
    h1 = ((h1 << 5) + h1) ^ c;
    h2 = ((h2 << 5) + h2) ^ (c * 7);
    h3 = ((h3 << 5) + h3) ^ (c * 13);
    h4 = ((h4 << 5) + h4) ^ (c * 19);
  }
  const hex = (n: number) => (n >>> 0).toString(16).padStart(8, "0");
  return hex(h1) + hex(h2) + hex(h3) + hex(h4) + hex(h1 ^ h2);
}

const CHAIN: Omit<Step, "duration_ms" | "signature" | "output">[] = [
  {
    mcp: "bft-progress-council-mcp",
    tool: "register_run",
    input: { session_id: "demo-session-001", goal: SAMPLE_GOAL, voters: 5 },
  },
  {
    mcp: "agent-token-budget-mcp",
    tool: "set_cap",
    input: { session_id: "demo-session-001", gbp_cap: 2.5, model: "claude-opus-4.7" },
  },
  {
    mcp: "agent-content-watermark-mcp",
    tool: "generate_watermark",
    input: { modality: "video", model_id: "claude-opus-4.7", provider_did: "did:web:meok.ai" },
  },
  {
    mcp: "meok-eu-aigc-icon-mcp",
    tool: "emit_video_keyframe_signal",
    input: { keyframe_count: 24, encoder: "h264" },
  },
  {
    mcp: "agent-audit-logger-mcp",
    tool: "append",
    input: { session_id: "demo-session-001", action: "watermark+icon attached" },
  },
  {
    mcp: "a2a-governance-bridge-mcp",
    tool: "fold",
    input: { session_id: "demo-session-001", regimes: ["EU_AI_ACT_ART_50", "DORA_ART_17", "ISO_42001_CL_9"] },
  },
];

function buildOutput(step: Omit<Step, "duration_ms" | "signature" | "output">): Record<string, unknown> {
  switch (step.mcp) {
    case "bft-progress-council-mcp":
      return { run_id: "RUN_demo_a1b2c3", verdict: "CONTINUE", voter_consensus: "5/5" };
    case "agent-token-budget-mcp":
      return { cap_id: "CAP_demo_2025", cap_gbp: 2.5, remaining_gbp: 2.5 };
    case "agent-content-watermark-mcp":
      return {
        watermark_id: "WM_demo_video_001",
        modality: "video",
        layers: ["visible_label", "F5_invisible", "perceptual_anchor"],
        code_of_practice: "GPAI CoP v1.0",
      };
    case "meok-eu-aigc-icon-mcp":
      return {
        icon_id: "ICON_demo_001",
        emitters: ["c2pa.2.2.assertion", "video.keyframe.uuid_box"],
        keyframes_marked: 24,
      };
    case "agent-audit-logger-mcp":
      return {
        log_entry_id: "LOG_demo_007",
        chain_hash: "0xdeadbeef...",
        prev_hash: "0xcafebabe...",
      };
    case "a2a-governance-bridge-mcp":
      return {
        signed_event_id: "EVT_demo_eu_2026_001",
        regimes_attested: 3,
        verify_url: "https://meok-attestation-api.vercel.app/verify/EVT_demo_eu_2026_001",
      };
    default:
      return {};
  }
}

export default function McpStackDemoPage() {
  const [steps, setSteps] = useState<Step[]>([]);
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  async function runChain() {
    setSteps([]);
    setRunning(true);
    setDone(false);
    for (const s of CHAIN) {
      // Simulate a realistic latency band 180-420ms
      const ms = 180 + Math.floor(Math.random() * 240);
      await new Promise((r) => setTimeout(r, ms));
      const output = buildOutput(s);
      const sig = hmacFake(JSON.stringify({ mcp: s.mcp, tool: s.tool, input: s.input, output }));
      setSteps((prev) => [...prev, { ...s, duration_ms: ms, output, signature: sig.slice(0, 32) }]);
    }
    setRunning(false);
    setDone(true);
  }

  const total_ms = steps.reduce((a, b) => a + b.duration_ms, 0);
  const last = steps[steps.length - 1];

  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "One signed compliance event from 6 MCPs — live demo",
    description:
      "Live browser demo: 6 MEOK MCPs execute in sequence (BFT progress council, token budget cap, Article 50 watermark, EU AIGC icon, audit logger, governance bridge) producing one signed evidence event mapped to EU AI Act Articles 12 + 50, DORA Article 17, ISO 42001 clause 9.",
    url: "https://meok.ai/mcp-stack/demo",
    isPartOf: { "@type": "WebSite", name: "MEOK AI Labs", url: "https://meok.ai" },
  };
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai" },
      { "@type": "ListItem", position: 2, name: "MCP Stack", item: "https://meok.ai/mcp-stack" },
      { "@type": "ListItem", position: 3, name: "Demo", item: "https://meok.ai/mcp-stack/demo" },
    ],
  };

  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY, padding: "3rem 1.5rem" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <Link
          href="/mcp-stack"
          style={{ display: "inline-block", fontSize: 12, color: `${NAVY}77`, textDecoration: "none", marginBottom: 24 }}
        >
          ← Back to /mcp-stack
        </Link>

        <div
          style={{
            display: "inline-block",
            padding: "4px 10px",
            borderRadius: 999,
            background: "rgba(123,196,127,0.18)",
            color: GREEN,
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          LIVE demo — runs in your browser
        </div>

        <h1 style={{ fontSize: "clamp(2rem, 4.6vw, 3.2rem)", fontWeight: 900, lineHeight: 1.05, marginBottom: 16 }}>
          One signed compliance event from 6 MCPs.
        </h1>
        <p style={{ fontSize: "1.05rem", color: `${NAVY}b3`, maxWidth: 720, lineHeight: 1.6, marginBottom: 24 }}>
          Click the button. Watch 6 MEOK MCPs execute in sequence — BFT progress council, token budget cap,
          Article 50 watermark, EU AIGC icon, audit logger, governance bridge — producing ONE signed
          evidence event mapped to EU AI Act Articles 12 + 50, DORA Article 17, ISO 42001 clause 9.
        </p>

        <button
          onClick={runChain}
          disabled={running}
          style={{
            padding: "14px 28px",
            background: running ? `${NAVY}55` : GOLD,
            color: NAVY,
            border: "none",
            borderRadius: 12,
            fontSize: 14,
            fontWeight: 800,
            cursor: running ? "wait" : "pointer",
            marginBottom: 28,
          }}
        >
          {running ? "Running…" : done ? "Run again →" : "Run the 6-MCP chain →"}
        </button>

        <div
          style={{
            background: "#fff",
            border: `1px solid ${NAVY}1a`,
            borderRadius: 14,
            padding: "1.4rem 1.6rem",
            marginBottom: 24,
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 13,
            minHeight: 200,
          }}
        >
          {steps.length === 0 && !running && (
            <div style={{ color: `${NAVY}77`, fontStyle: "italic" }}>
              Press the button. The chain&apos;s output streams here.
            </div>
          )}
          {steps.map((s, i) => (
            <div key={i} style={{ marginBottom: 18, borderBottom: i < steps.length - 1 ? `1px dashed ${NAVY}22` : "none", paddingBottom: 12 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 6 }}>
                <span style={{ background: NAVY, color: GOLD, padding: "2px 8px", borderRadius: 999, fontSize: 11, fontWeight: 800 }}>
                  {i + 1}
                </span>
                <strong style={{ color: NAVY }}>{s.mcp}</strong>
                <span style={{ color: `${NAVY}77` }}>·</span>
                <code style={{ background: `${NAVY}10`, padding: "2px 6px", borderRadius: 4 }}>{s.tool}</code>
                <span style={{ marginLeft: "auto", color: `${NAVY}77`, fontSize: 11 }}>{s.duration_ms}ms</span>
              </div>
              <div style={{ color: `${NAVY}aa`, fontSize: 12, marginBottom: 4 }}>
                <strong>→ output:</strong> {JSON.stringify(s.output)}
              </div>
              <div style={{ color: GREEN, fontSize: 11 }}>
                ✓ signed: {s.signature}…
              </div>
            </div>
          ))}
          {running && (
            <div style={{ color: GOLD, marginTop: 8 }}>
              <span style={{ animation: "blink 1s steps(2) infinite" }}>▮</span> next step…
            </div>
          )}
        </div>

        {done && last && (
          <div
            style={{
              background: NAVY,
              color: "#fff",
              borderRadius: 14,
              padding: "1.5rem 1.8rem",
              marginBottom: 28,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", color: GREEN, marginBottom: 10 }}>
              Final signed evidence event
            </div>
            <pre style={{ margin: 0, color: "#e2e8f0", fontSize: 12, whiteSpace: "pre-wrap" }}>
{JSON.stringify(
  {
    event_id: (last.output as { signed_event_id?: string }).signed_event_id,
    chain_duration_ms: total_ms,
    chain_steps: steps.length,
    regimes_attested: ["EU AI Act Article 12", "EU AI Act Article 50", "DORA Article 17", "ISO 42001 clause 9"],
    public_verify_url: (last.output as { verify_url?: string }).verify_url,
    issuer: "MEOK AI Labs · CSOAI LTD · UK CRN 16939677",
    note: "DEMO — production runs HMAC-SHA256 over the real chain via api.meok.ai/v1",
  },
  null,
  2
)}
            </pre>
            <div style={{ marginTop: 18, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <a
                href="https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t"
                style={{ padding: "12px 22px", background: GOLD, color: NAVY, textDecoration: "none", borderRadius: 10, fontSize: 13, fontWeight: 800 }}
              >
                Buy Governance Substrate £499/mo →
              </a>
              <Link
                href="/mcp-stack"
                style={{ padding: "12px 22px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", borderRadius: 10, fontSize: 13, fontWeight: 800 }}
              >
                Read the architecture →
              </Link>
            </div>
          </div>
        )}

        <div style={{ background: "#fff", border: `1px solid ${NAVY}1a`, borderRadius: 12, padding: "1.2rem 1.4rem", fontSize: 13, lineHeight: 1.6, color: `${NAVY}cc` }}>
          <strong style={{ color: NAVY }}>What you&apos;re seeing.</strong> This page runs a deterministic browser
          simulation of the production 6-MCP chain. Real version routes through{" "}
          <code style={{ background: `${NAVY}10`, padding: "2px 6px", borderRadius: 4 }}>api.meok.ai/v1/&lt;mcp&gt;/&lt;tool&gt;</code>{" "}
          with HMAC-SHA256 signed by your customer-specific key. Self-host MIT for free or buy the Substrate to
          have MEOK run the pipeline + supply the verify URL + meet SLA.
        </div>
      </div>
    </main>
  );
}
