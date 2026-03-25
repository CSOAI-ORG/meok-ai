/**
 * MEOK AI LABS — Registry Cron Endpoint
 *
 * GET /api/cron/update-registry
 *
 * Fetches the latest model data from all sources and persists to Neon.
 * Intended to be called by Vercel Cron (vercel.json) on a daily schedule.
 *
 * Protect with CRON_SECRET in production:
 *   vercel.json → { "crons": [{ "path": "/api/cron/update-registry", "schedule": "0 4 * * *" }] }
 */

import { NextRequest, NextResponse } from 'next/server';
import { fetchFullRegistry } from '@/lib/registry';
import { sql } from '@/lib/db/index';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function GET(request: NextRequest) {
  // Verify cron secret in production
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret) {
    const authHeader = request.headers.get('authorization');
    if (authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
  }

  const startTime = Date.now();

  try {
    const snapshot = await fetchFullRegistry();

    // Persist to DB if connection is available
    if (sql && snapshot.models.length > 0) {
      const BATCH_SIZE = 50;

      for (let i = 0; i < snapshot.models.length; i += BATCH_SIZE) {
        const batch = snapshot.models.slice(i, i + BATCH_SIZE);

        await Promise.all(
          batch.map((model) =>
            sql!`
              INSERT INTO registry_models (
                id, name, provider, source, context_length,
                pricing_prompt, pricing_completion, open_source,
                downloads, size_bytes, updated_at
              )
              VALUES (
                ${model.id}, ${model.name}, ${model.provider}, ${model.source},
                ${model.context_length}, ${model.pricing?.prompt ?? null},
                ${model.pricing?.completion ?? null}, ${model.open_source},
                ${model.downloads}, ${model.size_bytes}, NOW()
              )
              ON CONFLICT (id) DO UPDATE SET
                name = EXCLUDED.name,
                context_length = EXCLUDED.context_length,
                pricing_prompt = EXCLUDED.pricing_prompt,
                pricing_completion = EXCLUDED.pricing_completion,
                downloads = EXCLUDED.downloads,
                size_bytes = EXCLUDED.size_bytes,
                updated_at = NOW()
            `,
          ),
        );
      }
    }

    const durationMs = Date.now() - startTime;

    return NextResponse.json({
      success: true,
      models: snapshot.models.length,
      mcp_servers: snapshot.mcp_servers.length,
      sources: snapshot.sources,
      fetched_at: snapshot.fetched_at,
      duration_ms: durationMs,
      persisted: sql !== null,
    });
  } catch (err) {
    console.error('[cron/update-registry] Fatal error:', err);

    return NextResponse.json(
      {
        success: false,
        error: err instanceof Error ? err.message : 'Unknown error',
        duration_ms: Date.now() - startTime,
      },
      { status: 500 },
    );
  }
}
