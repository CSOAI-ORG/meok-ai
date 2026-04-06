/**
 * MEOK AI LABS — Character Activity Dashboard
 *
 * Real-time character activity across all synced devices
 * Shows mood, conversation context, and sync status
 */

import { NextRequest, NextResponse } from 'next/server';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const allCharacters = searchParams.get('all') === 'true';

  try {
    if (!sql) {
      return NextResponse.json({
        characters: [
          { id: 'aria', name: 'Aria', mood: 'active', lastInteraction: new Date().toISOString() },
          { id: 'marcus', name: 'Marcus', mood: 'idle', lastInteraction: new Date().toISOString() },
          { id: 'luna', name: 'Luna', mood: 'dreaming', lastInteraction: new Date().toISOString() },
        ],
      });
    }

    if (characterId) {
      const moodState = await sql`
        SELECT character_id, mood, active_context, energy_level, last_updated
        FROM character_mood_states
        WHERE character_id = ${characterId}
      `;

      if (moodState.length === 0) {
        return NextResponse.json({ 
          characterId, 
          mood: 'idle', 
          activeContext: null, 
          energyLevel: 0.5 
        });
      }

      return NextResponse.json({
        characterId: moodState[0].character_id,
        mood: moodState[0].mood,
        activeContext: moodState[0].active_context,
        energyLevel: moodState[0].energy_level,
        lastUpdated: moodState[0].last_updated,
      });
    }

    if (allCharacters) {
      const characters = await sql`
        SELECT c.id, c.name, c.emoji, c.archetype,
               COALESCE(cm.mood, 'idle') as mood,
               cm.active_context,
               cm.energy_level,
               cm.last_updated
        FROM characters c
        LEFT JOIN character_mood_states cm ON c.id = cm.character_id
        ORDER BY cm.last_updated DESC NULLS LAST
        LIMIT 50
      `;

      return NextResponse.json({
        characters: characters.map((c: any) => ({
          id: c.id,
          name: c.name,
          emoji: c.emoji,
          archetype: c.archetype,
          mood: c.mood,
          activeContext: c.active_context,
          energyLevel: c.energy_level,
          lastInteraction: c.last_updated,
        })),
      });
    }

    const activeChar = await sql`
      SELECT character_id, mood, active_context, energy_level, last_updated
      FROM character_mood_states
      ORDER BY last_updated DESC
      LIMIT 1
    `;

    if (activeChar.length === 0) {
      return NextResponse.json({ activeCharacter: null });
    }

    return NextResponse.json({
      activeCharacter: {
        characterId: activeChar[0].character_id,
        mood: activeChar[0].mood,
        activeContext: activeChar[0].active_context,
        energyLevel: activeChar[0].energy_level,
        lastUpdated: activeChar[0].last_updated,
      },
    });
  } catch (error) {
    console.error('[character/activity] error:', error);
    return NextResponse.json({ error: 'Failed to fetch activity' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, mood, activeContext, energyLevel, action } = body;

    if (!sql) {
      return NextResponse.json({ success: true, mode: 'mock' });
    }

    if (action === 'update_mood' && characterId && mood) {
      await sql`
        INSERT INTO character_mood_states (character_id, mood, active_context, energy_level, last_updated)
        VALUES (${characterId}, ${mood}, ${activeContext ?? null}, ${energyLevel ?? 0.5}, NOW())
        ON CONFLICT (character_id) DO UPDATE SET
          mood = ${mood},
          active_context = COALESCE(${activeContext}, character_mood_states.active_context),
          energy_level = COALESCE(${energyLevel}, character_mood_states.energy_level),
          last_updated = NOW()
      `;
      return NextResponse.json({ success: true, characterId, mood });
    }

    if (action === 'trigger_dream' && characterId) {
      await sql`
        INSERT INTO character_mood_states (character_id, mood, active_context, last_updated)
        VALUES (${characterId}, 'dreaming', 'Dream cycle activated', NOW())
        ON CONFLICT (character_id) DO UPDATE SET
          mood = 'dreaming',
          active_context = 'Dream cycle activated',
          last_updated = NOW()
      `;
      return NextResponse.json({ success: true, characterId, mood: 'dreaming' });
    }

    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[character/activity] POST error:', error);
    return NextResponse.json({ error: 'Update failed' }, { status: 500 });
  }
}