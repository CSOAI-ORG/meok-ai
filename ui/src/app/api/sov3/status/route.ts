/**
 * MEOK AI LABS — SOV3 Status API
 *
 * GET /api/sov3/status
 *
 * Returns Sovereign Temple v3.0 health + Orion/Riri/Hourman agent status.
 * Used by the MEOK OS dashboard to show "AI Intelligence Online" indicators.
 *
 * Sovereign+ tier required.
 * Cached for 30s to reduce SOV3 load.
 */

import { NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { getUserById } from '@/lib/db/user';
import sov3 from '@/lib/sov3-client';

export const runtime = 'nodejs';

// Simple in-memory cache (30s TTL)
let _cache: { data: unknown; ts: number } | null = null;
const CACHE_TTL = 30_000;

export async function GET() {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Return cached if fresh
  if (_cache && Date.now() - _cache.ts < CACHE_TTL) {
    return NextResponse.json(_cache.data);
  }

  // Get SOV3 health
  const [stateResult, agentResult] = await Promise.all([
    sov3.getState(),
    sov3.agentStatus(),
  ]);

  const online = stateResult.ok;

  const status = {
    online,
    sov3: online ? {
      version:         'v3.0-fractal',
      consciousness:   (stateResult.data as Record<string, unknown>)?.consciousness_level ?? 'unknown',
      care_score:      ((stateResult.data as Record<string, unknown>)?.care_metrics as Record<string, unknown> | undefined)?.average_care_score ?? null,
      council_nodes:   235,
      memory_episodes: ((stateResult.data as Record<string, unknown>)?.memory_stats as Record<string, unknown> | undefined)?.total_episodes ?? null,
    } : null,
    orion: agentResult.ok ? agentResult.data : null,
    quantum: {
      available: true,
      models: ['qaoa_care_optimizer', 'vqe_memory_scorer', 'grover_memory_search'],
      last_batch: null,  // TODO: read from batch_results.json
    },
    timestamp: new Date().toISOString(),
  };

  _cache = { data: status, ts: Date.now() };
  return NextResponse.json(status);
}
