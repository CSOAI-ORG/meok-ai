/**
 * MEOK AI LABS — Character Marketplace Publisher
 *
 * POST /api/user/characters/publish
 *
 * Publishes a user-created character to the MEOK marketplace.
 * Revenue split: 70% creator / 30% MEOK (processed via Stripe Connect).
 *
 * Characters are published in 'pending' state (marketplace_approved = null).
 * Admin review approves them for visibility.
 *
 * Sovereign+ tier required to publish.
 *
 * Request body:
 *   characterId  — ID of the character to publish (must be owned by user)
 *   priceCents   — 0 for free, or >0 for paid (min 99 = $0.99)
 *   description  — marketplace listing description (max 500 chars)
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { sql } from '@/lib/db';
import { getUserById } from '@/lib/db/user';
import { checkRateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { characterId, priceCents, description } = body as {
    characterId?: string;
    priceCents?: number;
    description?: string;
  };

  if (!characterId || typeof characterId !== 'string') {
    return NextResponse.json({ error: 'characterId is required' }, { status: 400 });
  }

  // Validate price
  const price = typeof priceCents === 'number' ? Math.floor(priceCents) : 0;
  if (price < 0) {
    return NextResponse.json({ error: 'priceCents must be 0 or positive' }, { status: 400 });
  }
  if (price > 0 && price < 99) {
    return NextResponse.json({ error: 'Minimum price is $0.99 (99 cents)' }, { status: 400 });
  }

  // Check user tier — sovereign+ required to publish paid, explorer can publish free
  const user = await getUserById(userId);
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 });
  }

  if (price > 0 && user.tier === 'explorer') {
    return NextResponse.json(
      { error: 'Upgrade to Sovereign to publish paid characters' },
      { status: 403 }
    );
  }

  if (!sql) {
    return NextResponse.json(
      { error: 'Database not configured' },
      { status: 503 }
    );
  }

  // Verify character ownership
  const charRows = await sql`
    SELECT id, name, creator_user_id, is_marketplace, license
    FROM characters
    WHERE id = ${characterId} AND is_active = TRUE
    LIMIT 1
  `;

  if (charRows.length === 0) {
    return NextResponse.json({ error: 'Character not found' }, { status: 404 });
  }

  const char = charRows[0] as Record<string, unknown>;

  if (char.creator_user_id !== userId) {
    return NextResponse.json({ error: 'You do not own this character' }, { status: 403 });
  }

  if (char.license !== 'user-created') {
    return NextResponse.json(
      { error: 'Only user-created characters can be published to the marketplace' },
      { status: 400 }
    );
  }

  if (char.is_marketplace) {
    return NextResponse.json(
      { error: 'Character is already published to the marketplace' },
      { status: 409 }
    );
  }

  // Publish (pending admin approval)
  await sql`
    UPDATE characters
    SET
      is_marketplace        = TRUE,
      price_cents           = ${price},
      marketplace_approved  = NULL,   -- pending review
      updated_at            = NOW()
    WHERE id = ${characterId} AND creator_user_id = ${userId}
  `;

  return NextResponse.json({
    success: true,
    characterId,
    status: 'pending_review',
    priceCents: price,
    message: 'Character submitted for marketplace review. You\'ll be notified when it\'s approved.',
  });
}
