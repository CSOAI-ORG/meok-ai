/**
 * MEOK AI LABS — Conversation History API
 *
 * GET  /api/user/conversations — List conversations for the authenticated user.
 * POST /api/user/conversations — Create a new conversation.
 *
 * Auth: Clerk auth() — returns 401 if not authenticated.
 *
 * In-memory storage for now; production will use a DB table.
 */

import { auth } from '@clerk/nextjs/server';
import { type NextRequest, NextResponse } from 'next/server';
import { logInfo, logError } from '@/lib/logger';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

interface Conversation {
  id: string;
  userId: string;
  companion_id: string;
  title: string;
  message_count: number;
  created_at: string;
  updated_at: string;
}

// In-memory store — keyed by conversationId
const conversations = new Map<string, Conversation>();

export async function GET() {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const userConversations = Array.from(conversations.values())
      .filter((c) => c.userId === userId)
      .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
      .map(({ userId: _uid, ...rest }) => rest);

    logInfo('conversations.list', { userId, metadata: { count: userConversations.length } });

    return NextResponse.json({ conversations: userConversations });
  } catch (err) {
    logError('conversations.list.error', { userId, metadata: { error: String(err) } });
    return NextResponse.json({ error: 'Failed to list conversations' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { companion_id } = body;

    if (!companion_id || typeof companion_id !== 'string') {
      return NextResponse.json({ error: 'companion_id is required' }, { status: 400 });
    }

    const id = crypto.randomUUID();
    const now = new Date().toISOString();

    const conversation: Conversation = {
      id,
      userId,
      companion_id,
      title: 'New conversation',
      message_count: 0,
      created_at: now,
      updated_at: now,
    };

    conversations.set(id, conversation);

    logInfo('conversations.create', { userId, metadata: { conversationId: id, companion_id } });

    return NextResponse.json({ id, created_at: now }, { status: 201 });
  } catch (err) {
    logError('conversations.create.error', { userId, metadata: { error: String(err) } });
    return NextResponse.json({ error: 'Failed to create conversation' }, { status: 500 });
  }
}
