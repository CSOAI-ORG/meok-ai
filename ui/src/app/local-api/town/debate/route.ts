import { type NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { route, FALLBACK_CHAINS } from '@/lib/llm-router';
import { AETHELGARD_FINANCE_HIVE } from '@/lib/aethelgard-agents';
import type { VoteResult, Vote, AgentVote } from '../vote/route';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export interface AgentStatement {
  agentId: string;
  name: string;
  role: string;
  round: number;
  targetAgentId?: string;
  targetName?: string;
  statement: string;
}

export interface DebateResult {
  proposal: string;
  threshold: number;
  debate: AgentStatement[][];
  votes: VoteResult;
}

const VALID_VOTES: Vote[] = ['FOR', 'AGAINST', 'ABSTAIN'];
const DEFAULT_MODEL = 'ollama:llama3.2:3b';

function coerceVote(v: string): Vote {
  const cleaned = String(v).trim().toUpperCase();
  return VALID_VOTES.includes(cleaned as Vote) ? (cleaned as Vote) : 'ABSTAIN';
}

function agentById(id: string) {
  return AETHELGARD_FINANCE_HIVE.find((a) => a.id === id);
}

function buildAgentRoster(): string {
  return AETHELGARD_FINANCE_HIVE.map(
    (a, i) =>
      `${i + 1}. ${a.name} (${a.role}, id: ${a.id}): ${a.personality} Mandate: ${a.mandate}`,
  ).join('\n');
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
      const providerResult = route(`Aethelgard council debate`, 'sovereign', {
        preferredModel: model,
      });
      const { text } = await generateText({
        model: providerResult.provider,
        system: options.system,
        messages: options.messages,
        maxOutputTokens: options.maxOutputTokens ?? 2048,
        temperature: 0.7,
      });
      const cleaned = text.replace(/```json\s*|\s*```/g, '').trim();
      return JSON.parse(cleaned) as T;
    } catch (err) {
      lastError = err;
      const msg = err instanceof Error ? err.message : String(err);
      console.warn(`[api/town/debate] ${model} failed: ${msg}`);
    }
  }

  console.error(
    `[api/town/debate] all providers exhausted: ${lastError instanceof Error ? lastError.message : String(lastError)}`,
  );
  return null;
}

function buildRound1System(): string {
  return `You are the entire Aethelgard Finance Hive BFT Council. The following ministers are debating a proposal:\n\n${buildAgentRoster()}\n\nRound 1 — Opening statements. Each minister must respond to the proposal in character, in exactly 2-3 sentences. Speak with the voice and concerns of that minister.\n\nReturn ONLY a JSON object in this exact format, with no markdown, no commentary, and no code fences:\n\n{\n  "statements": [\n    { "agentId": "minerva", "statement": "..." },\n    ...\n  ]\n}\n\nInclude every agent listed above, using their exact id.`;
}

function buildRound2System(round1: AgentStatement[]): string {
  const transcript = round1.map((s) => `${s.name}: ${s.statement}`).join('\n\n');
  return `You are the entire Aethelgard Finance Hive BFT Council. The following ministers are debating a proposal:\n\n${buildAgentRoster()}\n\nRound 1 opening statements:\n\n${transcript}\n\nRound 2 — Replies. Each minister must reply in character to ONE other minister's Round 1 argument, in exactly 2-3 sentences. Agree, challenge, refine, or question — but stay in character. Pick a target whose argument your minister would naturally engage with.\n\nReturn ONLY a JSON object in this exact format:\n\n{\n  "statements": [\n    { "agentId": "minerva", "targetAgentId": "forge", "statement": "..." },\n    ...\n  ]\n}\n\nInclude every agent listed above. targetAgentId must be the id of a different minister from Round 1.`;
}

function buildVoteSystem(round1: AgentStatement[], round2: AgentStatement[]): string {
  const r1 = round1.map((s) => `${s.name}: ${s.statement}`).join('\n\n');
  const r2 = round2
    .map((s) => {
      const target = round1.find((x) => x.agentId === s.targetAgentId)?.name ?? s.targetAgentId;
      return `${s.name} replying to ${target}: ${s.statement}`;
    })
    .join('\n\n');
  return `You are the entire Aethelgard Finance Hive BFT Council. The following ministers are voting on a proposal:\n\n${buildAgentRoster()}\n\nDebate transcript:\n\nRound 1:\n${r1}\n\nRound 2:\n${r2}\n\nFinal vote. Each minister must vote FOR, AGAINST, or ABSTAIN, with a one-sentence reason in character.\n\nReturn ONLY a JSON object in this exact format:\n\n{\n  "votes": [\n    { "agentId": "minerva", "vote": "FOR", "reason": "..." },\n    ...\n  ]\n}\n\nInclude every agent listed above, using their exact id.`;
}

/**
 * POST /api/town/debate
 *
 * Runs a 2-round BFT Council debate on a proposal across all 12 Aethelgard
 * Finance Hive agents, then collects final FOR/AGAINST/ABSTAIN votes.
 * Default model is ollama:llama3.2:3b with fallback through the router chain.
 */
export async function POST(req: NextRequest): Promise<Response> {
  let body: { proposal?: string; threshold?: number };
  try {
    body = (await req.json()) as { proposal?: string; threshold?: number };
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { proposal, threshold = 0.5 } = body;
  if (!proposal || typeof proposal !== 'string' || proposal.trim().length === 0) {
    return NextResponse.json({ error: 'proposal is required' }, { status: 400 });
  }

  if (threshold <= 0 || threshold >= 1) {
    return NextResponse.json({ error: 'threshold must be between 0 and 1' }, { status: 400 });
  }

  const proposalText = proposal.trim();

  // Round 1 — opening statements.
  const round1Raw = await generateJson<{
    statements?: Array<{ agentId?: string; statement?: string }>;
  }>(DEFAULT_MODEL, {
    system: buildRound1System(),
    messages: [
      {
        role: 'user',
        content: `Proposal: ${proposalText}\n\nReturn the JSON Round 1 opening statements now.`,
      },
    ],
    maxOutputTokens: 2048,
  });

  const round1: AgentStatement[] = AETHELGARD_FINANCE_HIVE.map((agent) => {
    const found = round1Raw?.statements?.find((s) => s.agentId === agent.id);
    return {
      agentId: agent.id,
      name: agent.name,
      role: agent.role,
      round: 1,
      statement: found?.statement?.trim() || `${agent.name} listens in silence, weighing the proposal.`,
    };
  });

  // Round 2 — replies to other agents.
  const round2Raw = await generateJson<{
    statements?: Array<{ agentId?: string; targetAgentId?: string; statement?: string }>;
  }>(DEFAULT_MODEL, {
    system: buildRound2System(round1),
    messages: [
      {
        role: 'user',
        content: `Proposal: ${proposalText}\n\nReturn the JSON Round 2 replies now.`,
      },
    ],
    maxOutputTokens: 2048,
  });

  const round2: AgentStatement[] = AETHELGARD_FINANCE_HIVE.map((agent) => {
    const found = round2Raw?.statements?.find((s) => s.agentId === agent.id);
    const targetId = found?.targetAgentId?.trim();
    const validTarget = targetId && targetId !== agent.id ? agentById(targetId) : undefined;
    return {
      agentId: agent.id,
      name: agent.name,
      role: agent.role,
      round: 2,
      targetAgentId: validTarget?.id,
      targetName: validTarget?.name,
      statement: found?.statement?.trim() || `${agent.name} has no further comment at this time.`,
    };
  });

  // Final votes.
  const votesRaw = await generateJson<{
    votes?: Array<{ agentId?: string; vote?: string; reason?: string }>;
  }>(DEFAULT_MODEL, {
    system: buildVoteSystem(round1, round2),
    messages: [
      {
        role: 'user',
        content: `Proposal: ${proposalText}\n\nReturn the JSON final council votes now.`,
      },
    ],
    maxOutputTokens: 2048,
  });

  const votes: AgentVote[] = AETHELGARD_FINANCE_HIVE.map((agent) => {
    const found = votesRaw?.votes?.find((v) => v.agentId === agent.id);
    return {
      agentId: agent.id,
      name: agent.name,
      role: agent.role,
      vote: coerceVote(found?.vote ?? 'ABSTAIN'),
      reason: found?.reason?.trim() || 'The chamber was divided; I abstain.',
    };
  });

  const tally: Record<Vote, number> = { FOR: 0, AGAINST: 0, ABSTAIN: 0 };
  for (const v of votes) {
    tally[v.vote]++;
  }

  const decidingVotes = tally.FOR + tally.AGAINST;
  let outcome: VoteResult['outcome'] = 'TIED';
  let majorityVote: Vote | null = null;

  if (decidingVotes > 0) {
    const forRatio = tally.FOR / decidingVotes;
    if (forRatio > threshold) {
      outcome = 'PASSED';
      majorityVote = 'FOR';
    } else if (forRatio < threshold) {
      outcome = 'REJECTED';
      majorityVote = 'AGAINST';
    } else {
      outcome = 'TIED';
      majorityVote = null;
    }
  }

  const voteResult: VoteResult = {
    proposal: proposalText,
    threshold,
    votes,
    tally,
    outcome,
    majorityVote,
  };

  const result: DebateResult = {
    proposal: proposalText,
    threshold,
    debate: [round1, round2],
    votes: voteResult,
  };

  return NextResponse.json(result, {
    headers: {
      'X-MEOK-Civilization': 'Aethelgard',
      'X-MEOK-Council': 'Finance Hive BFT',
    },
  });
}
