/**
 * POST /api/user/conversations/messages — Save a message to a conversation
 * GET  /api/user/conversations/messages?conversation_id=X — Load messages for a conversation
 */

import { type NextRequest, NextResponse } from 'next/server';
import { requireAuth } from '@/lib/api-auth';
import { sql } from '@/lib/db';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const authResult = await requireAuth({ skipRateLimit: true });
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  try {
    const body = await req.json() as {
      conversation_id: string;
      role: 'user' | 'assistant';
      content: string;
    };

    if (!body.conversation_id || !body.role || !body.content) {
      return NextResponse.json({ error: 'conversation_id, role, content required' }, { status: 400 });
    }

    if (!sql) {
      return NextResponse.json({ error: 'Database not available' }, { status: 503 });
    }

    // Verify conversation belongs to user
    const convRows = await sql`
      SELECT id FROM conversations WHERE id = ${body.conversation_id} AND user_id = ${userId}
    `;
    if (!convRows || (convRows as unknown[]).length === 0) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    // Insert message
    const rows = await sql`
      INSERT INTO conversation_messages (conversation_id, role, content)
      VALUES (${body.conversation_id}, ${body.role}, ${body.content})
      RETURNING id, created_at
    `;

    const row = (rows as unknown[])[0] as { id: string; created_at: string } | undefined;

    // Update conversation metadata
    await sql`
      UPDATE conversations
      SET message_count = message_count + 1,
          last_message = ${body.content.slice(0, 150)},
          updated_at = NOW()
      WHERE id = ${body.conversation_id}
    `.catch(() => {});

    return NextResponse.json({ id: row?.id, created_at: row?.created_at }, { status: 201 });
  } catch (err) {
    console.error('[api/conversations/messages] POST error:', err);
    return NextResponse.json({ error: 'Failed to save message' }, { status: 500 });
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const authResult = await requireAuth({ skipRateLimit: true });
  if (authResult.error) return authResult.error;
  const { userId } = authResult;

  const conversationId = req.nextUrl.searchParams.get('conversation_id');
  if (!conversationId) {
    return NextResponse.json({ error: 'conversation_id required' }, { status: 400 });
  }

  if (!sql) {
    return NextResponse.json({ messages: [] });
  }

  try {
    // Verify conversation belongs to user
    const convRows = await sql`
      SELECT id FROM conversations WHERE id = ${conversationId} AND user_id = ${userId}
    `;
    if (!convRows || (convRows as unknown[]).length === 0) {
      return NextResponse.json({ error: 'Conversation not found' }, { status: 404 });
    }

    // Fetch messages
    const messages = await sql`
      SELECT id, role, content, created_at
      FROM conversation_messages
      WHERE conversation_id = ${conversationId}
      ORDER BY created_at ASC
      LIMIT 500
    `;

    return NextResponse.json({ messages });
  } catch (err) {
    console.error('[api/conversations/messages] GET error:', err);
    return NextResponse.json({ messages: [] });
  }
}
