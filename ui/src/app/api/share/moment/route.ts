/**
 * MEOK AI LABS — Share a Conversation Moment
 *
 * POST /api/share/moment
 *
 * Creates a shareable link for a single user+assistant exchange.
 * Currently stores in an in-memory Map; production should persist to DB.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ── In-memory store (production: move to DB) ────────────────────────────────

interface SharedMoment {
  userMessage: string;
  assistantMessage: string;
  companionName: string;
  createdAt: string;
  createdBy: string;
}

const momentStore = new Map<string, SharedMoment>();

/** Retrieve a shared moment by ID (exported for use by the share page) */
// NOTE: getMoment moved to avoid Next.js route export validation error.
// In production, query from DB instead of in-memory store.

// ── POST: Create a shareable moment ─────────────────────────────────────────

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let body: { userMessage?: string; assistantMessage?: string; companionName?: string } = {};
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { userMessage, assistantMessage, companionName } = body;

  if (!userMessage || !assistantMessage || !companionName) {
    return NextResponse.json(
      { error: 'Missing required fields: userMessage, assistantMessage, companionName' },
      { status: 400 },
    );
  }

  // Generate a unique share ID
  const shareId = crypto.randomUUID();

  momentStore.set(shareId, {
    userMessage,
    assistantMessage,
    companionName,
    createdAt: new Date().toISOString(),
    createdBy: userId,
  });

  const shareUrl = `/share/moment/${shareId}`;

  return NextResponse.json({
    shareId,
    shareUrl,
  });
}
