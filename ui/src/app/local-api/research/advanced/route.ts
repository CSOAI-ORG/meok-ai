/**
 * MEOK AI LABS — Advanced Research API
 *
 * POST /api/research/advanced — Multi-agent research with LangGraph-style workflow.
 * Supports: streaming, parallel search, code execution, multi-agent synthesis.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { route, type Tier } from '@/lib/llm-router';
import { getUserById } from '@/lib/db/user';
import { checkRateLimit, type RateLimitTier } from '@/lib/rate-limit';
import { ResearchCrew } from '@/lib/research-crew';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  // Rate limit
  try {
    const rlResult = checkRateLimit(userId, 'explorer');
    if (!rlResult.allowed) {
      return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
    }
  } catch { /* non-fatal */ }

  // Parse body
  let query: string;
  let mode: 'sequential' | 'parallel' | 'crew' = 'parallel';
  try {
    const body = await req.json();
    query = body?.query;
    mode = body?.mode || 'parallel';
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return NextResponse.json({ error: 'Missing "query" field' }, { status: 400 });
  }

  const trimmed = query.trim().slice(0, 4000);

  // User tier
  let userTier: Tier = 'explorer';
  try {
    const user = await getUserById(userId);
    if (user) userTier = user.tier as Tier;
  } catch { /* use default */ }

  console.log(`[api/research/advanced] mode=${mode} query="${trimmed.slice(0, 40)}..."`);

  try {
    if (mode === 'crew') {
      // Multi-agent crew workflow
      const { ResearchCrew } = await import('@/lib/research-crew');
      const crew = new ResearchCrew(userTier);
      const result = await crew.run(trimmed);

      return NextResponse.json({
        answer: result.report,
        sources: result.sources,
        agents: result.agents.map(a => ({
          name: a.agent,
          duration: a.duration,
        })),
        mode: 'crew',
      });
    } else if (mode === 'parallel') {
      // Parallel workflow (faster)
      const { ResearchCrew } = await import('@/lib/research-crew');
      const crew = new ResearchCrew(userTier);
      const result = await crew.runParallel(trimmed);

      return NextResponse.json({
        answer: result.report,
        sources: result.sources,
        agents: result.agents.map(a => ({
          name: a.agent,
          duration: a.duration,
        })),
        mode: 'parallel',
      });
    } else {
      // Sequential (more thorough)
      const { ResearchWorkflow } = await import('@/lib/research-workflow');
      const workflow = new ResearchWorkflow();
      const state = await workflow.run(trimmed);

      return NextResponse.json({
        answer: state.synthesis || state.error || 'Research completed',
        sources: state.sources,
        subQueries: state.subQueries,
        codeOutput: state.codeOutput,
        steps: state.step,
        mode: 'sequential',
      });
    }
  } catch (err) {
    console.error('[api/research/advanced] error:', err);
    return NextResponse.json(
      { error: 'Research failed: ' + String(err) },
      { status: 500 }
    );
  }
}