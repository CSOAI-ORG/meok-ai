import { type NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { route } from '@/lib/llm-router';
import { getAethelgardAgent } from '@/lib/aethelgard-agents';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface TownChatRequest {
  /** Which Aethelgard Finance Hive agent is responding */
  agentId: string;
  /** The user's message */
  message: string;
  /** Optional prior conversation turns */
  history?: Array<{ role: 'user' | 'assistant'; content: string }>;
  /** Optional model override; defaults to a working provider for the environment */
  model?: string;
}

/**
 * Returns true if OLLAMA_ENDPOINT points to a non-localhost URL (e.g. the
 * Cloudflare Tunnel endpoint used in production).
 */
function isRemoteOllama(): boolean {
  const endpoint = process.env.OLLAMA_ENDPOINT;
  if (!endpoint) return false;
  return !endpoint.includes('localhost') && !endpoint.includes('127.0.0.1');
}

/**
 * POST /api/town/chat
 *
 * Talk to an Aethelgard Finance Hive agent.
 *
 * Routing priority:
 * 1. Explicit `model` override if provided.
 * 2. FreeLLMAPI when FREELLMAPI_API_KEY is configured (local R&D).
 * 3. Remote Ollama tunnel when OLLAMA_ENDPOINT is non-local (production).
 * 4. Anthropic / OpenAI when their keys are present.
 * 5. Local Ollama fallback.
 *
 * If the chosen provider fails, we fall back to Ollama. If Ollama is also
 * unavailable, we return a static in-character response so the UI never
 * shows an empty reply.
 */
export async function POST(req: NextRequest): Promise<Response> {
  let body: TownChatRequest;
  try {
    body = (await req.json()) as TownChatRequest;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { agentId, message, history = [], model: preferredModel } = body;

  if (!agentId || typeof message !== 'string' || message.trim().length === 0) {
    return NextResponse.json({ error: 'agentId and message are required' }, { status: 400 });
  }

  const agent = getAethelgardAgent(agentId);
  if (!agent) {
    return NextResponse.json({ error: `Unknown agent: ${agentId}` }, { status: 404 });
  }

  const systemPrompt = `You are ${agent.name}, ${agent.role} of the Aethelgard Finance Hive in the sovereign digital town of MEOK.

Personality: ${agent.personality}
Mandate: ${agent.mandate}
Voice anchors:
${agent.voiceAnchors.map((a) => `- ${a}`).join('\n')}

Context:
- Aethelgard is the European Union-themed civilization in MEOK.
- The Finance Hive capital is Frankfurt-Prime.
- You are one of five founding ministers debating fiscal policy.
- Keep responses concise (2-4 sentences) unless asked for detail.
- Stay in character at all times. Do not break the fourth wall.`;

  const messages = [...history, { role: 'user' as const, content: message }];

  // Pick the best default model for the current environment.
  let chosenModel =
    preferredModel ??
    (process.env.FREELLMAPI_API_KEY
      ? 'freellmapi:auto'
      : isRemoteOllama()
        ? 'ollama:llama3.2:3b'
        : process.env.ANTHROPIC_API_KEY
          ? 'claude-3-5-haiku-latest'
          : process.env.OPENAI_API_KEY
            ? 'gpt-4o-mini'
            : 'ollama:llama3.2:3b');

  // If FreeLLMAPI is requested, probe it quickly. Fall back on failure.
  if ((chosenModel.startsWith('freellmapi:') || chosenModel.startsWith('free:')) && !process.env.FREELLMAPI_API_KEY) {
    try {
      const probe = await fetch(`${process.env.FREELLMAPI_BASE_URL || 'http://localhost:3001/v1'}/models`, {
        headers: { Authorization: `Bearer ${process.env.FREELLMAPI_API_KEY || 'freellmapi-local'}` },
        signal: AbortSignal.timeout(2000),
      });
      if (!probe.ok) {
        console.warn(`[api/town/chat] FreeLLMAPI probe failed (${probe.status}); using fallback`);
        chosenModel = isRemoteOllama() ? 'ollama:llama3.2:3b' : 'claude-3-5-haiku-latest';
      }
    } catch {
      console.warn('[api/town/chat] FreeLLMAPI unreachable; using fallback');
      chosenModel = isRemoteOllama() ? 'ollama:llama3.2:3b' : 'claude-3-5-haiku-latest';
    }
  }

  // Sovereign tier allows hosted providers (Claude/GPT) while still permitting
  // Ollama and the free tiers.
  let providerResult = route(message, 'sovereign', { preferredModel: chosenModel });

  async function tryGenerate(modelId: string, isFallback = false): Promise<string | null> {
    try {
      const pr = route(message, 'sovereign', { preferredModel: modelId });
      const { text } = await generateText({
        model: pr.provider,
        system: systemPrompt,
        messages,
        maxOutputTokens: 512,
        temperature: 0.75,
      });
      providerResult = pr;
      return text;
    } catch (err) {
      const errMsg = err instanceof Error ? err.message : String(err);
      console.warn(`[api/town/chat] ${modelId} failed (${errMsg})${isFallback ? ' (fallback)' : ''}`);
      return null;
    }
  }

  let text = await tryGenerate(chosenModel);

  // Fallback to Ollama if the primary provider failed.
  if (!text && !chosenModel.startsWith('ollama:')) {
    text = await tryGenerate('ollama:llama3.2:3b', true);
  }

  // Last resort: static in-character response so the UI never hangs empty.
  if (!text) {
    text = `I hear you, citizen. As ${agent.role}, my duty is ${agent.mandate.toLowerCase()}. The ledger is balanced, the council is watching, and Aethelgard remains sovereign. Ask again when the chamber is fully in session.`;
    providerResult = { ...providerResult, model: 'static:fallback' };
  }

  return new Response(text, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-MEOK-Agent': agentId,
      'X-MEOK-Model': providerResult.model,
      'X-MEOK-Civilization': 'Aethelgard',
      ...(providerResult.model === 'static:fallback' ? { 'X-MEOK-Fallback': 'true' } : {}),
    },
  });
}
