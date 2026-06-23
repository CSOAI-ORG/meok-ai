/**
 * MEOK AI LABS — SOV3 Bridge Think API
 *
 * POST /api/sov3/think
 *
 * Exposes SOV3 tool #116 `bridge_think`: left brain (local Ollama) +
 * right brain (VM Ollama) + SOV3 BFT council reconciliation.
 *
 * Sovereign+ tier required.
 */

import { NextRequest, NextResponse } from 'next/server';
import { getAuthUserId } from '@/lib/api-auth';
import { getUserById } from '@/lib/db/user';
import { checkRateLimit } from '@/lib/rate-limit';
import sov3 from '@/lib/sov3-client';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  const userId = await getAuthUserId();
  if (!userId) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  const user = await getUserById(userId);
  if (!user || user.tier === 'explorer') {
    return NextResponse.json(
      { error: 'Sovereign or Family tier required to access Bridge Think' },
      { status: 403 }
    );
  }

  let body: {
    message?: string;
    character?: string;
    profile?: 'local_only' | 'balanced' | 'power' | 'council';
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const message = typeof body.message === 'string' ? body.message.trim() : '';
  if (!message) {
    return NextResponse.json({ error: 'message is required' }, { status: 400 });
  }

  const result = await sov3.bridgeThink({
    message,
    character: body.character,
    profile: body.profile ?? 'council',
    tier: user.tier,
    user_id: userId,
  });

  if (!result.ok) {
    return NextResponse.json(
      { error: result.error ?? 'SOV3 bridge unavailable' },
      { status: 503 }
    );
  }

  return NextResponse.json(result.data);
}
