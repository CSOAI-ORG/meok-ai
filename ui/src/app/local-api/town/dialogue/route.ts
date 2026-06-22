import { type NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { route, FALLBACK_CHAINS, DEFAULT_OLLAMA_MODEL_ID } from '@/lib/llm-router';
import { AETHELGARD_FINANCE_HIVE, type AethelgardAgent } from '@/lib/aethelgard-agents';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export interface DialogueLine {
  agentId: string;
  name: string;
  role: string;
  content: string;
}

export interface DialogueResult {
  topic: string;
  agents: Array<{ id: string; name: string; role: string; archetype: string; color: string }>;
  turns: number;
  dialogue: DialogueLine[];
}

const DEFAULT_MODEL = DEFAULT_OLLAMA_MODEL_ID;
const MIN_TURNS = 4;
const MAX_TURNS = 6;

function clampTurns(n?: number): number {
  if (typeof n !== 'number' || Number.isNaN(n)) {
    return Math.floor(Math.random() * (MAX_TURNS - MIN_TURNS + 1)) + MIN_TURNS;
  }
  return Math.max(MIN_TURNS, Math.min(MAX_TURNS, Math.round(n)));
}

function pickAgents(count: number): AethelgardAgent[] {
  const shuffled = [...AETHELGARD_FINANCE_HIVE].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

function buildAgentRoster(agents: AethelgardAgent[]): string {
  return agents
    .map(
      (a, i) =>
        `${i + 1}. ${a.name} (${a.role}, id: ${a.id}, archetype: ${a.archetype}): ${a.personality} Mandate: ${a.mandate}`,
    )
    .join('\n');
}

async function generateJson<T>(
  modelId: string,
  options: {
    system: string;
    messages: Array<{ role: 'user'; content: string }>;
    maxOutputTokens?: number;
  },
): Promise<T | null> {
  const chain = [modelId, ...(FALLBACK_CHAINS[modelId] ?? [DEFAULT_MODEL])];
  let lastError: unknown;

  for (const model of chain) {
    try {
      const providerResult = route(`Aethelgard agent dialogue`, 'sovereign', {
        preferredModel: model,
      });
      const { text } = await generateText({
        model: providerResult.provider,
        system: options.system,
        messages: options.messages,
        maxOutputTokens: options.maxOutputTokens ?? 2048,
        temperature: 0.8,
      });
      const cleaned = text.replace(/```json\s*|\s*```/g, '').trim();
      return JSON.parse(cleaned) as T;
    } catch (err) {
      lastError = err;
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`[api/town/dialogue] ${model} failed: ${msg}`);
    }
  }

  console.error(
    `[api/town/dialogue] all providers exhausted: ${lastError instanceof Error ? lastError.message : String(lastError)}`,
  );
  return null;
}

function buildSystemPrompt(agents: AethelgardAgent[], turns: number): string {
  const agentIds = agents.map((a) => a.id).join(', ');
  return `You are a fictional council-chamber dialogue generator for the Aethelgard Finance Hive in MEOK.

The following ministers are present:

${buildAgentRoster(agents)}

Generate a natural, in-character conversation about the topic provided by the user.
- Exactly ${turns} dialogue lines total.
- Each line must be spoken by one of the agents above.
- Agents may respond to, challenge, or build on each other's points.
- Keep each line concise (1-3 sentences) to control token usage.
- Stay in character and reflect each minister's personality, mandate, and archetype.

Return ONLY a JSON object in this exact format, with no markdown, no commentary, and no code fences:

{
  "dialogue": [
    { "agentId": "${agents[0]?.id ?? 'minerva'}", "content": "..." },
    ...
  ]
}

Valid agentIds are: ${agentIds}. Include only those agentIds. Each line must include agentId and content.`;
}

/**
 * POST /api/town/dialogue
 *
 * Generates a short agent-to-agent dialogue (4-6 turns) between 2-4 randomly
 * selected Aethelgard Finance Hive ministers about a user-supplied topic.
 * Defaults to ollama:llama3.2:3b with the standard router fallback chain.
 */
export async function POST(req: NextRequest): Promise<Response> {
  let body: { topic?: string; turns?: number };
  try {
    body = (await req.json()) as { topic?: string; turns?: number };
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { topic } = body;
  if (!topic || typeof topic !== 'string' || topic.trim().length === 0) {
    return NextResponse.json({ error: 'topic is required' }, { status: 400 });
  }

  const turns = clampTurns(body.turns);
  const participantCount = Math.floor(Math.random() * 3) + 2; // 2-4
  const agents = pickAgents(participantCount);

  const raw = await generateJson<{
    dialogue?: Array<{ agentId?: string; content?: string }>;
  }>(DEFAULT_MODEL, {
    system: buildSystemPrompt(agents, turns),
    messages: [
      {
        role: 'user',
        content: `Topic: ${topic.trim()}\n\nReturn the JSON dialogue now.`,
      },
    ],
    maxOutputTokens: 2048,
  });

  const agentMap = new Map(agents.map((a) => [a.id, a]));
  const dialogue: DialogueLine[] = [];

  const rawLines = raw?.dialogue ?? [];
  for (let i = 0; i < turns; i++) {
    const rawLine = rawLines[i];
    const agentId = rawLine?.agentId?.trim();
    const agent = agentId ? agentMap.get(agentId) : undefined;
    if (agent && rawLine?.content?.trim()) {
      dialogue.push({
        agentId: agent.id,
        name: agent.name,
        role: agent.role,
        content: rawLine.content.trim(),
      });
    } else {
      // Fallback line: cycle through participants so the conversation continues.
      const fallbackAgent = agents[i % agents.length];
      if (fallbackAgent) {
        dialogue.push({
          agentId: fallbackAgent.id,
          name: fallbackAgent.name,
          role: fallbackAgent.role,
          content: `${fallbackAgent.name} considers the matter carefully, weighing the ledger before speaking.`,
        });
      }
    }
  }

  const result: DialogueResult = {
    topic: topic.trim(),
    agents: agents.map((a) => ({
      id: a.id,
      name: a.name,
      role: a.role,
      archetype: a.archetype,
      color: a.color,
    })),
    turns,
    dialogue,
  };

  return NextResponse.json(result, {
    headers: {
      'X-MEOK-Civilization': 'Aethelgard',
      'X-MEOK-Council': 'Finance Hive Dialogue',
    },
  });
}
