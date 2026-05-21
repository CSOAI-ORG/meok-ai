"use client";

/**
 * CenterPane — conversation panel.
 *
 * Day-2 skeleton: hero + try-now CTAs. Streaming chat + tool-call demux land
 * on Day 4 (Sat 23 May) per the architecture plan.
 */

import Link from "next/link";

const NAVY = "#0d0c18";
const GOLD = "#c9a84c";
const MUTED = "rgba(255,255,255,0.55)";

type Props = {
  onOpenLeft?: () => void;
  onOpenRight?: () => void;
};

export default function CenterPane(_props: Props) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 1.5rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 580 }}>
        <div
          style={{
            display: "inline-block",
            padding: "4px 12px",
            background: "rgba(201,168,76,0.15)",
            color: GOLD,
            borderRadius: 999,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: 16,
          }}
        >
          Day 2 of 12 · Ship June 1
        </div>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 900,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            marginBottom: 16,
          }}
        >
          5 LLMs voting,
          <br />
          dissent visible,
          <br />
          <span style={{ color: GOLD }}>HMAC-signed.</span>
        </h1>
        <p style={{ color: MUTED, fontSize: 17, lineHeight: 1.55, marginBottom: 28 }}>
          The 3-pane MEOK Claw shell is being built. Today: layout +
          scaffolding. By Sunday June 1 it&apos;ll stream chat from 10 LLMs in
          parallel with the BFT council vote visible per response, plus 38
          MCP compliance servers wired into the right rail.
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="/catalogue"
            style={{
              padding: "12px 22px",
              background: GOLD,
              color: NAVY,
              textDecoration: "none",
              fontWeight: 800,
              borderRadius: 12,
              fontSize: 14,
            }}
          >
            Try the 38 MCPs →
          </Link>
          <Link
            href="/fine-calculator"
            style={{
              padding: "12px 22px",
              background: "transparent",
              color: "white",
              textDecoration: "none",
              fontWeight: 800,
              borderRadius: 12,
              fontSize: 14,
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            EU AI Act fine calculator
          </Link>
          <Link
            href="/os-overview"
            style={{
              padding: "12px 22px",
              background: "transparent",
              color: MUTED,
              textDecoration: "none",
              fontWeight: 600,
              borderRadius: 12,
              fontSize: 14,
              border: `1px solid rgba(255,255,255,0.1)`,
            }}
          >
            Vision overview →
          </Link>
        </div>
        <div style={{ marginTop: 36, paddingTop: 28, borderTop: `1px solid rgba(255,255,255,0.07)`, fontSize: 13, color: MUTED, lineHeight: 1.6 }}>
          <strong style={{ color: "white" }}>Building today:</strong> osStore.ts (Zustand) ·
          provider + character selectors · session persistence.
          <br />
          <strong style={{ color: "white" }}>Friday 22 May:</strong> LeftRail wired
          to all 10 providers.
          <br />
          <strong style={{ color: "white" }}>Saturday 23 May:</strong> useAgentStream
          + ToolCallCard frame demux.
          <br />
          <strong style={{ color: "white" }}>Sunday 24 May:</strong> MCPSidebar +
          /api/mcp/dispatch wired end-to-end.
          <br />
          <strong style={{ color: "white" }}>Monday 25 May:</strong> CareMeter
          reading X-MEOK-CareScore from /api/chat.
          <br />
          <strong style={{ color: "white" }}>Tuesday 26 May:</strong> CouncilTrace
          via /api/council/audit (PaywallGate&rsquo;d to Pro+).
          <br />
          <strong style={{ color: "white" }}>Wednesday 27 May:</strong> Stripe
          tier wiring + PaywallGate.
          <br />
          <strong style={{ color: "white" }}>Mon 1 June 08:00 PT:</strong> Show HN.
        </div>
      </div>
    </div>
  );
}
