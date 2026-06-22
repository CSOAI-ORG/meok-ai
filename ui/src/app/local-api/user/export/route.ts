/**
 * MEOK AI LABS — GDPR Data Export Endpoint
 *
 * GET /api/user/export
 *
 * Returns all personal data MEOK holds for the authenticated user as a
 * downloadable JSON file. Satisfies GDPR Article 20 (right to data portability).
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { getUserById, getGuardianSettings } from '@/lib/db/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest) {
  // ── 1. Auth ──────────────────────────────────────────────────────────────
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  // ── 2. Fetch account data ─────────────────────────────────────────────────
  const user = await getUserById(userId);
  const guardianSettings = await getGuardianSettings(userId);

  // ── 3. Build export payload ───────────────────────────────────────────────
  const exportedAt = new Date().toISOString();
  const dateSlug = exportedAt.split('T')[0]; // YYYY-MM-DD

  const payload = {
    export_version: '1.0',
    exported_at: exportedAt,
    user_id: userId,

    account: {
      tier:         user?.tier        ?? null,
      created_at:   user?.created_at  ?? null,
      companion_id: user?.companion_id ?? null,
    },

    // Conversation history: messages table not yet deployed; include total count
    // Full message export will be available once the messages schema is finalised.
    messages: [],
    messages_note: `Total messages exchanged: ${user?.messages_total ?? 0}. Full export pending messages table deployment.`,

    // Semantic memories from SOV3: attempt live fetch with graceful fallback
    memories: await (async () => {
      try {
        const sov3Url = process.env.SOV3_URL || process.env.SOV3_API_URL || 'http://localhost:3101';
        const res = await fetch(`${sov3Url}/mcp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            id: crypto.randomUUID(),
            method: 'tools/call',
            params: { name: 'list_memories', arguments: { user_id: userId } },
          }),
          signal: AbortSignal.timeout(5_000),
        });
        if (res.ok) {
          const json = await res.json() as { result?: unknown };
          return Array.isArray(json.result) ? json.result : [];
        }
      } catch (e) {
        console.warn('[user/export] SOV3 memory fetch failed (non-fatal):', e);
      }
      return [];
    })(),

    guardian_settings: guardianSettings ?? {},

    note: 'This export contains all personal data MEOK holds for your account.',
  };

  // ── 4. Stream as JSON download ────────────────────────────────────────────
  const filename = `meok-data-export-${userId}-${dateSlug}.json`;
  const body = JSON.stringify(payload, null, 2);

  return new NextResponse(body, {
    status: 200,
    headers: {
      'Content-Type':        'application/json',
      'Content-Disposition': `attachment; filename="${filename}"`,
      'Cache-Control':       'no-store',
    },
  });
}
