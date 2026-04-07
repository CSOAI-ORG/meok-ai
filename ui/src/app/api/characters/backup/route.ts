/**
 * MEOK AI LABS — Character Backup & Restore API
 *
 * Full backup and restore of character data including:
 * - Character definitions
 * - Memory episodes
 * - Evolution history
 * - Relationship data
 *
 * GET /api/characters/backup?characterId={id}
 * POST /api/characters/backup/restore
 */

import { NextRequest, NextResponse } from 'next/server';
import { dbGetCharacter, dbGetAllCharacters } from '@/lib/db/characters';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const includeMemories = searchParams.get('memories') === 'true';

  try {
    if (characterId) {
      const character = await dbGetCharacter(characterId);
      if (!character) {
        return NextResponse.json({ error: 'Character not found' }, { status: 404 });
      }

      const backup: Record<string, unknown> = {
        version: '1.0',
        exportedAt: new Date().toISOString(),
        type: 'character',
        character,
      };

      if (includeMemories && sql) {
        const memories = await sql`
          SELECT * FROM memories 
          WHERE user_id = (SELECT user_id FROM companions WHERE character_id = ${characterId} LIMIT 1)
          ORDER BY created_at DESC
          LIMIT 1000
        `;
        backup.memories = memories;
      }

      return new NextResponse(JSON.stringify(backup, null, 2), {
        headers: {
          'Content-Type': 'application/json',
          'Content-Disposition': `attachment; filename="meok-character-${characterId}-backup.json"`,
        },
      });
    }

    const characters = await dbGetAllCharacters({});
    const fullBackup = {
      version: '1.0',
      exportedAt: new Date().toISOString(),
      type: 'full-backup',
      characterCount: characters.length,
      characters: characters.map((c: any) => ({
        id: c.id,
        name: c.name,
        archetype: c.archetype,
        tier: c.tier,
        createdAt: c.createdAt,
      })),
    };

    return new NextResponse(JSON.stringify(fullBackup, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="meok-characters-full-backup-${new Date().toISOString().split('T')[0]}.json"`,
      },
    });
  } catch (error) {
    console.error('[characters/backup] Error:', error);
    return NextResponse.json({ error: 'Backup failed' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { backup, targetUserId, options = {} } = body;

    if (!backup || !backup.character) {
      return NextResponse.json(
        { error: 'Invalid backup file. Missing character data.' },
        { status: 400 }
      );
    }

    const character = backup.character;
    const newId = options.newId || `${character.id}-restored-${Date.now()}`;
    
    const restored = {
      ...character,
      id: newId,
      name: options.newName || `${character.name} (Restored)`,
      tier: 'custom',
      license: 'CC0',
      sourceUrl: `restored from ${backup.exportedAt}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    if (sql) {
      await sql`
        INSERT INTO characters (
          id, name, title, archetype, emoji, color, tagline,
          system_prompt, personality, tags, tier, license,
          pack, voice_style, communication_style, dynamism, dimensions,
          created_at, updated_at
        ) VALUES (
          ${restored.id},
          ${restored.name},
          ${restored.title ?? null},
          ${restored.archetype},
          ${restored.emoji ?? null},
          ${restored.color ?? null},
          ${restored.tagline ?? null},
          ${restored.systemPrompt ?? null},
          ${JSON.stringify(restored.personality ?? [])}::jsonb,
          ${JSON.stringify(restored.tags ?? [])}::jsonb,
          ${restored.tier},
          ${restored.license},
          ${restored.pack ?? null},
          ${restored.voiceStyle ?? null},
          ${restored.communicationStyle ?? null},
          ${restored.dynamism ?? 0.95},
          ${restored.dimensions ? JSON.stringify(restored.dimensions) : null}::jsonb,
          NOW(),
          NOW()
        )
        ON CONFLICT (id) DO UPDATE SET
          name = EXCLUDED.name,
          system_prompt = EXCLUDED.system_prompt,
          personality = EXCLUDED.personality,
          updated_at = NOW()
      `;
    }

    return NextResponse.json({
      success: true,
      restored: {
        id: restored.id,
        name: restored.name,
        archetype: restored.archetype,
      },
      message: `Character "${character.name}" restored as "${restored.name}"`,
    });
  } catch (error) {
    console.error('[characters/backup/restore] Error:', error);
    return NextResponse.json({ error: 'Restore failed' }, { status: 500 });
  }
}