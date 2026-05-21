import type { Metadata } from "next";
import { Suspense } from "react";
import OsShell from "./_components/OsShell";

// ---------------------------------------------------------------------------
// /os — MEOK Claw 3-pane shell.
//
// Server-component entry. The actual shell (OsShell) is a Client Component
// because it owns the chat stream + tool-call demux + Zustand store.
//
// Architecture per MEOK_CLAW_ARCHITECTURE_2026-05-20.md:
//   [LeftRail][CenterPane][RightRail]
//   - LeftRail   — provider + character + sovereign mode + session list
//   - CenterPane — conversation + ToolCallCard streaming
//   - RightRail  — MCP picker + CareMeter + CouncilTrace
//
// Ship target: Sunday June 1 2026 (12-day build).
// Today (2026-05-21): cleanup + scaffold the 3-pane CSS grid.
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: "MEOK OS — Multi-LLM agent with BFT council, dissent visible",
  description:
    "5 LLMs vote on every response, dissent visible per response, the whole exchange HMAC-signed for audit evidence. 38 EU AI Act / DORA / NIS2 compliance MCPs built in. Free tier forever, no signup required for self-hosting.",
  alternates: { canonical: "https://meok.ai/os" },
  openGraph: {
    title: "MEOK OS — multi-LLM agent OS with visible council dissent",
    description:
      "What if your AI showed you the 3 LLMs voting + their dissent? 38 compliance MCPs, HMAC-signed audit log. Apache 2.0 / MIT.",
    type: "website",
    url: "https://meok.ai/os",
    siteName: "MEOK.AI",
    images: [{
      url: "https://meok.ai/api/og?title=MEOK+OS&desc=Multi-LLM+with+visible+council+dissent",
      width: 1200,
      height: 630,
      alt: "MEOK OS — 3-pane multi-LLM agent shell",
    }],
  },
};

export default function OsPage() {
  return (
    <Suspense fallback={<div style={{ padding: "3rem", textAlign: "center", color: "#c9a84c" }}>Loading MEOK OS…</div>}>
      <OsShell />
    </Suspense>
  );
}
