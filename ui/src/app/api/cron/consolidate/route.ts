import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const SOV3_URL = process.env.SOV3_MCP_URL || 'http://localhost:3101';
const CRON_SECRET = process.env.CRON_SECRET;

/**
 * MEOK AI LABS — Nightly Memory Consolidation
 *
 * Triggered by Vercel Cron (vercel.json: "0 3 * * *")
 * Tasks:
 *   1. Consolidate short-term memories into long-term storage (via SOV3)
 *   2. Mark due care signals as delivered and create notifications
 *   3. Clean up old short-term memory (keep last 200 per user/companion)
 */
export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization');
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const results: Record<string, string | number> = {};
  const startTime = Date.now();

  // Task 1: Memory consolidation via SOV3
  try {
    const res = await fetch(`${SOV3_URL}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method: 'tools/call',
        params: { name: 'consolidate_memories', arguments: {} },
        id: crypto.randomUUID(),
      }),
      signal: AbortSignal.timeout(60000),
    });
    results.memory_consolidation = res.ok ? 'success' : `failed (${res.status})`;
  } catch {
    results.memory_consolidation = 'skipped (SOV3 offline)';
  }

  // Task 2: Deliver due care signals → create in-app notifications
  try {
    const { sql } = await import('@/lib/db/index');
    if (sql) {
      // Fetch due care signals
      const dueSignals = await sql`
        SELECT id, user_id, message, signal_type, priority
        FROM care_signals
        WHERE delivered = FALSE
          AND deliver_at <= NOW()
        LIMIT 100
      `.catch(() => []) as Array<{
        id: string; user_id: string; message: string; signal_type: string; priority: string;
      }>;

      let delivered = 0;
      for (const signal of dueSignals) {
        // Mark as delivered
        await sql`
          UPDATE care_signals
          SET delivered = TRUE, delivered_at = NOW()
          WHERE id = ${signal.id}
        `.catch(() => {});

        // Create in-app notification
        await sql`
          INSERT INTO notifications (user_id, type, title, message, metadata)
          VALUES (
            ${signal.user_id},
            'care_signal',
            'A message from your companion',
            ${signal.message},
            ${{ signal_type: signal.signal_type, priority: signal.priority } as unknown as string}::jsonb
          )
        `.catch(() => {});

        delivered++;
      }

      results.care_signals_delivered = delivered;
    } else {
      results.care_signals_delivered = 'skipped (no DB)';
    }
  } catch (err) {
    console.error('[cron/consolidate] Care signal delivery failed:', err);
    results.care_signals_delivered = 'error';
  }

  // Task 3: Prune old short-term memories (keep newest 200 per user/companion)
  try {
    const { sql } = await import('@/lib/db/index');
    if (sql) {
      // Delete old entries beyond 200 per user/companion
      const deleted = await sql`
        DELETE FROM short_term_memory
        WHERE id IN (
          SELECT id FROM (
            SELECT id,
                   ROW_NUMBER() OVER (PARTITION BY user_id, companion_id ORDER BY created_at DESC) AS rn
            FROM short_term_memory
          ) ranked
          WHERE rn > 200
        )
      `.catch(() => null);

      results.memory_pruned = deleted ? 'completed' : 'skipped';
    } else {
      results.memory_pruned = 'skipped (no DB)';
    }
  } catch (err) {
    console.error('[cron/consolidate] Memory pruning failed:', err);
    results.memory_pruned = 'error';
  }

  const duration = Date.now() - startTime;
  console.log(`[cron/consolidate] Completed in ${duration}ms:`, results);

  return NextResponse.json({
    success: true,
    timestamp: new Date().toISOString(),
    duration_ms: duration,
    tasks: results,
  });
}
