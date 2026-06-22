import { type NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { route } from '@/lib/llm-router';
import { AETHELGARD_FINANCE_HIVE } from '@/lib/aethelgard-agents';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export type Vote = 'FOR' | 'AGAINST' | 'ABSTAIN';

export interface AgentVote {
  agentId: string;
  name: string;
  role: string;
  vote: Vote;
  reason: string;
}

export interface VoteResult {
  proposal: string;
  threshold: number;
  votes: AgentVote[];
  tally: Record<Vote, number>;
  outcome: 'PASSED' | 'REJECTED' | 'TIED';
  majorityVote: Vote | null;
}

const VALID_VOTES: Vote[] = ['FOR', 'AGAINST', 'ABSTAIN'];

function coerceVote(v: string): Vote {
  const cleaned = String(v).trim().toUpperCase();
  return VALID_VOTES.includes(cleaned as Vote) ? (cleaned as Vote) : 'ABSTAIN';
}

function buildCouncilSystem(): string {
  const agentList = AETHELGARD_FINANCE_HIVE.map(
    (a) => `${a.id} = ${a.name}, ${a.role} (${a.archetype})`,
  ).join('\n');

  return `You are the Aethelgard Finance Hive BFT Council. Ministers:\n\n${agentList}\n\nVote on the proposal. Return one line per minister in this exact format (no markdown, no numbering, no extra text):\n\nagentId|FOR|short reason\n\nUse FOR, AGAINST, or ABSTAIN. Reasons must match each minister's archetype.`;
}

/**
 * POST /api/town/vote
 *
 * Runs a BFT Council vote on a proposal across all 12 Aethelgard Finance Hive agents.
 * Uses a single council-style LLM call with an easy-to-parse list format for speed.
 * Default threshold is simple majority (>50% of non-ABSTAIN votes).
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
  const providerResult = route(proposalText, 'sovereign', { preferredModel: 'ollama:llama3.2:3b' });

  const rawVotes = new Map<string, { vote: string; reason: string }>();

  try {
    const { text } = await generateText({
      model: providerResult.provider,
      system: buildCouncilSystem(),
      messages: [{ role: 'user', content: `Proposal: ${proposalText}\n\nReturn the council vote list now.` }],
      maxOutputTokens: 512,
      temperature: 0.4,
    });

    for (const line of text.split('\n')) {
      const cleaned = line.trim();
      if (!cleaned || cleaned.startsWith('|')) continue;
      const parts = cleaned.split('|');
      if (parts.length >= 3) {
        const agentId = parts[0].trim().toLowerCase();
        const vote = parts[1].trim();
        const reason = parts.slice(2).join('|').trim();
        if (AETHELGARD_FINANCE_HIVE.some((a) => a.id === agentId)) {
          rawVotes.set(agentId, { vote, reason });
        }
      }
    }
  } catch (err) {
    const errMsg = err instanceof Error ? err.message : String(err);
    console.warn(`[api/town/vote] council generation failed: ${errMsg}`);
  }

  // Map generated votes onto the canonical agent roster; missing/failed agents abstain.
  const votes: AgentVote[] = AETHELGARD_FINANCE_HIVE.map((agent) => {
    const found = rawVotes.get(agent.id);
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

  const result: VoteResult = {
    proposal: proposalText,
    threshold,
    votes,
    tally,
    outcome,
    majorityVote,
  };

  return NextResponse.json(result, {
    headers: {
      'X-MEOK-Civilization': 'Aethelgard',
      'X-MEOK-Council': 'Finance Hive BFT',
    },
  });
}
