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
import { auth } from '@clerk/nextjs/server';
import { getUserById, getGuardianSettings } from '@/lib/db/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_req: NextRequest) {
  // ── 1. Auth ──────────────────────────────────────────────────────────────
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json(
      { error: 'Unauthorized. Please sign in to export your data.' },
      { status: 401 },
    );
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

    // TODO: fetch full conversation history from your database.
    // Example (Neon/postgres):
    //   const messages = await sql`
    //     SELECT id, role, content, created_at
    //     FROM messages
    //     WHERE user_id = ${userId}
    //     ORDER BY created_at ASC
    //   `;
    messages: [],

    // TODO: fetch semantic memories from Sovereign v3 (SOV3).
    // Example:
    //   const memories = await callTool('list_memories', { user_id: userId });
    memories: [],

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
