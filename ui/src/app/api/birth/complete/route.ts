/**
 * POST /api/birth/complete
 *
 * Persists birth ceremony data — companion name, archetype, first memories,
 * and covenant acceptance timestamp. Called after the hatch quiz + registration.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { updateCompanion } from '@/lib/db/user';

interface BirthCompleteBody {
  companionName: string;
  archetype: string;
  memories: string[];
  covenantAccepted: boolean;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  let body: BirthCompleteBody;
  try {
    body = (await req.json()) as BirthCompleteBody;
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const { companionName, archetype, memories, covenantAccepted } = body;

  if (!companionName || !archetype) {
    return NextResponse.json({ error: 'companionName and archetype are required' }, { status: 400 });
  }

  if (!covenantAccepted) {
    return NextResponse.json({ error: 'Maternal Covenant must be accepted' }, { status: 400 });
  }

  try {
    // Persist companion data to user record
    await updateCompanion(userId, archetype, companionName);

    // Log ceremony completion
    console.log('[birth/complete]', {
      userId,
      companionName,
      archetype,
      memoriesCount: memories?.length ?? 0,
      covenantAccepted,
      timestamp: new Date().toISOString(),
    });

    // Notify SOV3 (fire-and-forget)
    try {
      const sov3Url = process.env.SOV3_API_URL || process.env.NEXT_PUBLIC_SOV3_ENDPOINT;
      if (sov3Url) {
        fetch(`${sov3Url}/mcp`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            jsonrpc: '2.0',
            method: 'tools/call',
            params: {
              name: 'record_memory',
              arguments: {
                content: `Birth ceremony completed. User ${userId} hatched companion "${companionName}" (archetype: ${archetype}). First memories: ${(memories ?? []).join('; ')}. Covenant accepted.`,
                category: 'birth',
                importance: 0.9,
                emotional_valence: 0.85,
                source_agent: 'meok-ui',
              },
            },
            id: 1,
          }),
        }).catch(() => { /* non-fatal */ });
      }
    } catch { /* non-fatal SOV3 notification */ }

    return NextResponse.json({
      success: true,
      companion: {
        name: companionName,
        archetype,
        memoriesStored: memories?.length ?? 0,
        covenantAccepted: true,
        bornAt: new Date().toISOString(),
      },
    });
  } catch (err) {
    console.error('[birth/complete] Failed to persist ceremony:', err);
    return NextResponse.json({ error: 'Failed to complete birth ceremony' }, { status: 500 });
  }
}
