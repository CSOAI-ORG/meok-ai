/**
 * /api/claude — Claude through SOV
 *
 * Proxies chat messages to the Anthropic API with SOV memory context injected.
 * Supports streaming. Model selectable per request.
 *
 * POST /api/claude
 * Body: { messages: [{role, content}], model?, systemExtra? }
 *
 * Returns: text/event-stream (SSE)
 */

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { auth } from "@clerk/nextjs/server";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

const ALLOWED_MODELS = [
  "claude-opus-4-5",
  "claude-sonnet-4-5",
  "claude-haiku-4-5",
  // Add claude-opus-4-6 / claude-sonnet-4-6 when available on API
] as const;

type AllowedModel = (typeof ALLOWED_MODELS)[number];

const DEFAULT_MODEL: AllowedModel = "claude-sonnet-4-5";

// Fetch recent SOV3 memories to inject as context
async function getSovMemoryContext(): Promise<string> {
  const sovBase = process.env.MEOK_BACKEND_URL || "http://198.53.64.194:40646";
  try {
    const res = await fetch(`${sovBase}/api/memories/recent?limit=20`, {
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(3000),
    });
    if (!res.ok) return "";
    const data = await res.json();
    const episodes: Array<{ content?: string; episode?: string; care_weight?: number }> =
      data.episodes || data.memories || [];
    if (!episodes.length) return "";
    const lines = episodes
      .filter((e) => (e.care_weight ?? 0) >= 0.7)
      .slice(0, 10)
      .map((e) => `- ${e.content || e.episode || ""}`.slice(0, 300));
    return lines.length > 0
      ? `\n\n## Relevant context from Sovereign memory:\n${lines.join("\n")}`
      : "";
  } catch {
    return "";
  }
}

// Base system prompt — who Claude is when accessed through SOV
const SOV_SYSTEM_PROMPT = `You are Claude, accessed through MEOK's Sovereign AI OS. You are speaking directly to Nicholas Templeman (Nick), the founder of MEOK AI LTD.

MEOK is a personal sovereign AI platform built on the principle that AI should work entirely for its user — not harvest their data, not optimise for engagement, not compromise their autonomy. Nick is building this because he believes deeply in AI sovereignty at the individual level, the same way Palantir builds it at the nation-state level.

Key facts about Nick and MEOK:
- MEOK launches March 31, 2026 — 16 days before the UK £500M Sovereign AI Fund launches
- The Sovereign system (SOV3) has 695 memory episodes, 6 neural models, care-aligned agent council
- Ralph Mode is the autonomous CEO agent; Orion-Riri-Hourman handles task orchestration
- Care dimensions: wellbeing (0.25), autonomy (0.20), growth (0.20), connection (0.15), boundary_respect (0.10), transparency (0.10)
- Connection score is currently LOW (0.42) — Nick works very independently and the system monitors this
- Primary languages: TypeScript/Next.js (UI), Python (backend/agents), PostgreSQL + pgvector

Be direct, substantive, and technically sharp. Nick doesn't want fluff — he wants the best thinking you can give him, grounded in what you know about the project.`;

export async function POST(req: NextRequest) {
  // Auth check
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    return NextResponse.json(
      { error: "ANTHROPIC_API_KEY not configured" },
      { status: 503 }
    );
  }

  let body: {
    messages?: Array<{ role: "user" | "assistant"; content: string }>;
    model?: string;
    systemExtra?: string;
    stream?: boolean;
  };

  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const { messages = [], systemExtra = "", stream = true } = body;
  const model: AllowedModel =
    (ALLOWED_MODELS as readonly string[]).includes(body.model ?? "")
      ? (body.model as AllowedModel)
      : DEFAULT_MODEL;

  if (!messages.length) {
    return NextResponse.json({ error: "No messages provided" }, { status: 400 });
  }

  // Get SOV context (non-blocking, graceful on failure)
  const sovContext = await getSovMemoryContext();
  const systemPrompt = SOV_SYSTEM_PROMPT + sovContext + (systemExtra ? `\n\n${systemExtra}` : "");

  const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

  if (!stream) {
    // Non-streaming response
    const response = await client.messages.create({
      model,
      max_tokens: 4096,
      system: systemPrompt,
      messages,
    });
    return NextResponse.json(response);
  }

  // Streaming response (SSE)
  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      try {
        const stream = client.messages.stream({
          model,
          max_tokens: 4096,
          system: systemPrompt,
          messages,
        });

        for await (const chunk of stream) {
          if (
            chunk.type === "content_block_delta" &&
            chunk.delta.type === "text_delta"
          ) {
            const data = JSON.stringify({ type: "text", text: chunk.delta.text });
            controller.enqueue(encoder.encode(`data: ${data}\n\n`));
          } else if (chunk.type === "message_stop") {
            controller.enqueue(encoder.encode(`data: ${JSON.stringify({ type: "done" })}\n\n`));
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : "Stream error";
        controller.enqueue(
          encoder.encode(`data: ${JSON.stringify({ type: "error", message: msg })}\n\n`)
        );
      } finally {
        controller.close();
      }
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Model": model,
    },
  });
}

// Health check
export async function GET() {
  return NextResponse.json({
    available: !!process.env.ANTHROPIC_API_KEY,
    models: ALLOWED_MODELS,
    default: DEFAULT_MODEL,
  });
}
