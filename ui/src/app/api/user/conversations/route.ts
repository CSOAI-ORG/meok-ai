/**
 * MEOK AI LABS — Conversation History API
 *
 * GET  /api/user/conversations        — List conversations for the authenticated user.
 * POST /api/user/conversations        — Create a new conversation record.
 * PATCH /api/user/conversations       — Update message count / last message for a conversation.
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 */

import { requireAuth } from '@/lib/api-auth';
import { checkRateLimit } from '@/lib/rate-limit';
import { type NextRequest, NextResponse } from 'next/server';
import { logInfo, logError } from '@/lib/logger';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// Fallback in-memory store for when DB is unavailable
const _memStore = new Map<string, {
  id: string; user_id: string; companion_id: string; title: string;
  message_count: number; last_message: string | null; created_at: string; updated_at: string;
}>();

export async function GET() {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  try {
    if (sql) {
      const rows = await sql`
        SELECT id, companion_id, title, message_count, last_message, created_at, updated_at
        FROM conversations
        WHERE user_id = ${userId} AND deleted_at IS NULL
        ORDER BY updated_at DESC
        LIMIT 50
      `.catch(() => null);

      if (rows) {
        logInfo('conversations.list', { userId, metadata: { count: rows.length } });
        return NextResponse.json({ conversations: rows });
      }
    }

    // DB unavailable — fall back to in-memory
    const userConversations = Array.from(_memStore.values())
      .filter((c) => c.user_id === userId)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .map(({ user_id: _uid, ...rest }) => rest);

    return NextResponse.json({ conversations: userConversations });
  } catch (err) {
    logError('conversations.list.error', { userId, metadata: { error: String(err) } });
    return NextResponse.json({ error: 'Failed to list conversations' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  try {
    const body = await req.json() as { companion_id?: string; title?: string };
    const rawCompanionId = body.companion_id ?? 'aria';
    // Validate companion_id is alphanumeric/hyphens only (prevent injection of weird IDs)
    const companion_id = /^[a-zA-Z0-9_-]{1,64}$/.test(rawCompanionId) ? rawCompanionId : 'aria';
    const title = (body.title ?? 'New conversation').slice(0, 255);
    const now = new Date().toISOString();

    if (sql) {
      const rows = await sql`
        INSERT INTO conversations (user_id, companion_id, title)
        VALUES (${userId}, ${companion_id}, ${title})
        RETURNING id, created_at
      `.catch(() => null);

      if (rows?.[0]) {
        const row = rows[0] as { id: string; created_at: string };
        logInfo('conversations.create', { userId, metadata: { conversationId: row.id, companion_id } });
        return NextResponse.json({ id: row.id, created_at: row.created_at }, { status: 201 });
      }
    }

    // DB unavailable — in-memory fallback
    const id = crypto.randomUUID();
    _memStore.set(id, { id, user_id: userId, companion_id, title, message_count: 0, last_message: null, created_at: now, updated_at: now });
    return NextResponse.json({ id, created_at: now }, { status: 201 });
  } catch (err) {
    logError('conversations.create.error', { userId, metadata: { error: String(err) } });
    return NextResponse.json({ error: 'Failed to create conversation' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest) {
  const authResult = await requireAuth();
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  try {
    const body = await req.json() as { id: string; message_count?: number; last_message?: string; title?: string };
    if (!body.id) return NextResponse.json({ error: 'id required' }, { status: 400 });

    if (sql) {
      await sql`
        UPDATE conversations
        SET message_count = COALESCE(${body.message_count ?? null}, message_count),
            last_message  = COALESCE(${body.last_message ?? null}, last_message),
            title         = COALESCE(${body.title ?? null}, title),
            updated_at    = NOW()
        WHERE id = ${body.id} AND user_id = ${userId}
      `.catch(() => {});
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    logError('conversations.patch.error', { userId, metadata: { error: String(err) } });
    return NextResponse.json({ error: 'Failed to update conversation' }, { status: 500 });
  }
}
