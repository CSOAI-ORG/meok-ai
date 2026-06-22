/**
 * MEOK AI LABS — Dream Cycle API
 *
 * GET /api/user/dreams
 *
 * Processes recent diary/memory content through the dream cycle processor
 * to surface cross-topic connections and pattern insights.
 *
 * Falls back to empty insights if no conversation history exists.
 */

import { NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { sql } from '@/lib/db';
import { processDreamCycle, type DreamInsight } from '@/lib/dream';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  let insights: DreamInsight[] = [];
  let themes: string[] = [];

  if (sql) {
    try {
      // Fetch recent short-term memory entries as message feed for dream processing
      const rows = await sql`
        SELECT content, created_at AS timestamp
        FROM short_term_memory
        WHERE user_id = ${userId}
        ORDER BY created_at DESC
        LIMIT 100
      ` as Array<{ content: string; timestamp: string }>;

      if (rows.length > 0) {
        insights = processDreamCycle(rows);

        // Extract dominant themes from top insights
        const allConnections = insights.flatMap(i => i.connections);
        const freq = allConnections.reduce<Record<string, number>>((acc, t) => {
          acc[t] = (acc[t] ?? 0) + 1;
          return acc;
        }, {});
        themes = Object.entries(freq)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 8)
          .map(([t]) => t);
      }
    } catch (err) {
      console.error('[api/user/dreams] Error processing dream cycle:', err);
    }
  }

  return NextResponse.json({
    insights,
    themes,
    processed_at: new Date().toISOString(),
    has_data: insights.length > 0,
  });
}
