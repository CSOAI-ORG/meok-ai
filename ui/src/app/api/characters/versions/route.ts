/**
 * MEOK AI LABS — Character Version History API
 *
 * Track and query character evolution over time.
 * Each character update creates a version snapshot.
 *
 * GET /api/characters/versions?id={characterId}
 * GET /api/characters/versions?id={characterId}&version={n}
 */

import { NextRequest, NextResponse } from 'next/server';
import { dbGetCharacter } from '@/lib/db/characters';
import { sql } from '@/lib/db';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('id');
  const version = searchParams.get('version');
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '20', 10), 100);

  if (!characterId) {
    return NextResponse.json({ error: 'Missing character id' }, { status: 400 });
  }

  try {
    if (!sql) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const versions = await sql`
      SELECT 
        id, character_id, version, name, title, archetype,
        system_prompt, personality, tags, dimensions,
        change_summary, created_at
      FROM character_versions
      WHERE character_id = ${characterId}
      ORDER BY version DESC
      LIMIT ${limit}
    `;

    if (versions.length === 0) {
      const character = await dbGetCharacter(characterId);
      if (!character) {
        return NextResponse.json({ error: 'Character not found' }, { status: 404 });
      }
      return NextResponse.json({
        characterId,
        currentVersion: 1,
        versions: [{
          version: 1,
          name: character.name,
          createdAt: (character as any).createdAt || new Date().toISOString(),
          changeSummary: 'Initial creation',
          isCurrent: true,
        }],
      });
    }

    if (version) {
      const specificVersion = versions.find((v: any) => v.version === parseInt(version));
      if (!specificVersion) {
        return NextResponse.json({ error: 'Version not found' }, { status: 404 });
      }
      return NextResponse.json({
        characterId,
        version: specificVersion.version,
        data: {
          name: specificVersion.name,
          title: specificVersion.title,
          archetype: specificVersion.archetype,
          systemPrompt: specificVersion.system_prompt,
          personality: specificVersion.personality,
          tags: specificVersion.tags,
          dimensions: specificVersion.dimensions,
        },
        changeSummary: specificVersion.change_summary,
        createdAt: specificVersion.created_at,
      });
    }

    return NextResponse.json({
      characterId,
      currentVersion: versions[0]?.version || 1,
      versions: versions.map((v: any) => ({
        version: v.version,
        name: v.name,
        changeSummary: v.change_summary,
        createdAt: v.created_at,
      })),
    });
  } catch (error) {
    console.error('[characters/versions] Error:', error);
    return NextResponse.json({ error: 'Failed to fetch versions' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('id');

  if (!characterId) {
    return NextResponse.json({ error: 'Missing character id' }, { status: 400 });
  }

  try {
    const body = await req.json();
    const { name, title, systemPrompt, personality, tags, dimensions, changeSummary } = body;

    if (!sql) {
      return NextResponse.json({ error: 'Database not configured' }, { status: 500 });
    }

    const latestVersion = await sql`
      SELECT MAX(version) as max_version FROM character_versions
      WHERE character_id = ${characterId}
    `;

    const newVersion = (latestVersion[0]?.max_version ?? 0) + 1;

    await sql`
      INSERT INTO character_versions (
        id, character_id, version, name, title, archetype,
        system_prompt, personality, tags, dimensions,
        change_summary, created_at
      ) VALUES (
        ${crypto.randomUUID()},
        ${characterId},
        ${newVersion},
        ${name},
        ${title ?? null},
        ${body.archetype ?? 'sage'},
        ${systemPrompt ?? null},
        ${JSON.stringify(personality ?? [])}::jsonb,
        ${JSON.stringify(tags ?? [])}::jsonb,
        ${dimensions ? JSON.stringify(dimensions) : null}::jsonb,
        ${changeSummary ?? 'Updated'},
        NOW()
      )
    `;

    return NextResponse.json({
      success: true,
      characterId,
      version: newVersion,
      message: `Created version ${newVersion} of character`,
    });
  } catch (error) {
    console.error('[characters/versions] Error:', error);
    return NextResponse.json({ error: 'Failed to create version' }, { status: 500 });
  }
}