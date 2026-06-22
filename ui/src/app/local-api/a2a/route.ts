// MEOK — A2A entry-point agent (the url in /.well-known/agent-card.json).
// Minimal, spec-shaped A2A over JSON-RPC 2.0:
//   GET  /a2a            -> the Agent Card (some clients fetch the card from the agent url)
//   POST /a2a {message/send} -> an A2A Message that routes the caller to the 340-agent registry
// Honest scope: this is the discovery/front-door agent. Per-agent invocation of the
// full fleet is the gateway (next infra piece); this endpoint is real and callable today.

import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const AGENT_CARD = {
  name: "MEOK Compliance Fleet",
  version: "1.0.0",
  url: "https://meok.ai/api/a2a",
  protocolVersion: "0.3.0",
  capabilities: { streaming: false, pushNotifications: false, stateTransitionHistory: false },
  description:
    "The MEOK AI Labs compliance-MCP fleet as one A2A agent: EU AI Act, DORA, NIS2, CRA, GDPR, bias, watermarking + 330 more. Signed, verifiable, governed by the CSOAI charter.",
  provider: { organization: "MEOK AI LABS", url: "https://meok.ai" },
  defaultInputModes: ["application/json", "text/plain"],
  defaultOutputModes: ["application/json", "text/plain"],
  documentationUrl: "https://meok.ai/developers",
  skills: [
    {
      id: "discover",
      name: "Discover agents",
      description: "List the MEOK compliance agents and their skills via the registry.",
      tags: ["compliance", "governance", "registry"],
    },
  ],
  "x-meok": {
    registry: "https://meok.ai/.well-known/agents.json",
    acp: "https://meok.ai/.well-known/agents-acp.json",
    verifier: "https://proofof.ai/verify",
  },
};

function textFromMessage(params: any): string {
  try {
    const parts = params?.message?.parts || [];
    return parts
      .map((p: any) => (p?.kind === "text" || p?.type === "text" ? p.text : ""))
      .join(" ")
      .trim();
  } catch {
    return "";
  }
}

// GET -> the Agent Card (A2A clients may resolve the card from the agent endpoint)
export async function GET() {
  return NextResponse.json(AGENT_CARD, {
    headers: { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*" },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "access-control-allow-origin": "*",
      "access-control-allow-methods": "GET, POST, OPTIONS",
      "access-control-allow-headers": "content-type",
    },
  });
}

// POST -> A2A JSON-RPC. Handles `message/send`; returns an A2A Message guiding discovery.
export async function POST(req: NextRequest) {
  let body: any;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { jsonrpc: "2.0", id: null, error: { code: -32700, message: "Parse error" } },
      { status: 400 }
    );
  }
  const { id = null, method, params } = body || {};
  const cors = { "access-control-allow-origin": "*", "content-type": "application/json; charset=utf-8" };

  if (method !== "message/send" && method !== "message/stream") {
    return NextResponse.json(
      { jsonrpc: "2.0", id, error: { code: -32601, message: `Method not found: ${method}` } },
      { status: 200, headers: cors }
    );
  }

  const ask = textFromMessage(params).toLowerCase();
  const wantsList = /list|discover|which|what agents|catalog|registry|all/.test(ask);

  const replyText = wantsList
    ? "MEOK exposes 340 signed compliance agents (1,863 skills) — EU AI Act, DORA, NIS2, CRA, GDPR, bias detection, watermarking and more. Fetch the full A2A registry at https://meok.ai/.well-known/agents.json (or ACP at /.well-known/agents-acp.json). Each agent's results are verifiable at https://proofof.ai/verify."
    : "I'm the MEOK Compliance Fleet front-door agent. Ask me to 'list agents' to discover the 340 governed compliance agents, or fetch the registry directly at https://meok.ai/.well-known/agents.json. Build on us: https://meok.ai/developers.";

  // A2A Message response (kind: "message", role: "agent")
  const result = {
    kind: "message",
    role: "agent",
    messageId: `meok-${id ?? "0"}`,
    parts: [{ kind: "text", text: replyText }],
    metadata: {
      registry: "https://meok.ai/.well-known/agents.json",
      acpRegistry: "https://meok.ai/.well-known/agents-acp.json",
      agentCount: 340,
      governedBy: "CSOAI 52-article charter",
    },
  };

  return NextResponse.json({ jsonrpc: "2.0", id, result }, { status: 200, headers: cors });
}
