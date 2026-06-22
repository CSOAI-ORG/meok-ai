/**
 * MEOK AI LABS — Character State Sync API
 *
 * Handles cross-device character state synchronization
 * 
 * GET /api/character/sync?characterId={id}
 * POST /api/character/sync
 *   Body: { characterId, mood, context, lastMessage }
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

const ACTIVE_CHARACTER_KEY = 'meok:active_character';

async function getActiveCharacter(): Promise<string | null> {
  return await kv.get(ACTIVE_CHARACTER_KEY);
}

async function setActiveCharacter(characterId: string): Promise<void> {
  await kv.set(ACTIVE_CHARACTER_KEY, characterId);
}

async function getCharacterState(characterId: string): Promise<Record<string, unknown> | null> {
  return await kv.get(`meok:character:sync:${characterId}`);
}

async function setCharacterState(characterId: string, state: Record<string, unknown>): Promise<void> {
  await kv.set(`meok:character:sync:${characterId}`, state);
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const getActive = searchParams.get('active') === 'true';

  try {
    if (getActive) {
      const activeChar = await getActiveCharacter();
      return NextResponse.json({ activeCharacter: activeChar });
    }

    if (characterId) {
      const state = await getCharacterState(characterId);
      const activeChar = await getActiveCharacter();
      return NextResponse.json({
        characterId,
        state: state || {},
        isActive: activeChar === characterId,
      });
    }

    return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
  } catch (error) {
    console.error('[character/sync] GET error:', error);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, characterId, mood, context, message, role } = body;

    switch (action) {
      case 'set_active': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        await setActiveCharacter(characterId);
        return NextResponse.json({ success: true, characterId });
      }

      case 'update_mood': {
        if (!characterId || !mood) {
          return NextResponse.json({ error: 'Missing characterId or mood' }, { status: 400 });
        }
        const current = (await getCharacterState(characterId)) || {};
        await setCharacterState(characterId, { ...current, mood });
        return NextResponse.json({ success: true, mood });
      }

      case 'update_state': {
        if (!characterId || !context) {
          return NextResponse.json({ error: 'Missing characterId or context' }, { status: 400 });
        }
        await setCharacterState(characterId, context);
        return NextResponse.json({ success: true });
      }

      case 'conversation_update': {
        if (!characterId || !message || !role) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        const current = (await getCharacterState(characterId)) || { conversationHistory: [] };
        const history = (current.conversationHistory as string[] || []).slice(-20);
        if (role === 'user') {
          history.push(`You: ${message.slice(0, 100)}`);
        } else {
          history.push(`MEOK: ${message.slice(0, 100)}`);
        }
        await setCharacterState(characterId, { ...current, conversationHistory: history, lastMessage: message });
        return NextResponse.json({ success: true });
      }

      case 'get_state': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const state = await getCharacterState(characterId);
        return NextResponse.json({ characterId, state: state || {} });
      }

      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }
  } catch (error) {
    console.error('[character/sync] POST error:', error);
    return NextResponse.json({ error: 'Sync failed' }, { status: 500 });
  }
}