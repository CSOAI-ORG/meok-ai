/**
 * MEOK AI LABS — Character Import API
 *
 * Imports Character Card v2 format characters into MEOK.
 * Supports SillyTavern, RisuAI, Agnai, and other v2-compatible exports.
 *
 * POST /api/characters/import
 * Body: { characterCard: <Character Card v2 JSON>, options?: { name, description } }
 */

import { NextRequest, NextResponse } from 'next/server';
import { dbCreateCharacter } from '@/lib/db/characters';
import { randomUUID } from 'crypto';

export const runtime = 'nodejs';

interface CharacterCardV2 {
  spec?: string;
  spec_version?: string;
  data: {
    name: string;
    description?: string;
    personality?: string;
    scenario?: string;
    first_mes?: string;
    mes_example?: string;
    creator_notes?: string;
    system_prompt?: string;
    post_history_instructions?: string;
    tags?: string[];
    creator?: string;
    character_version?: string;
    alternate_greetings?: string[];
    extensions?: {
      meok?: Record<string, unknown>;
      [key: string]: unknown;
    };
  };
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterCard, options = {} } = body;

    if (!characterCard || typeof characterCard !== 'object') {
      return NextResponse.json(
        { error: 'Invalid character card. Expected a Character Card v2 JSON object.' },
        { status: 400 }
      );
    }

    const card = characterCard as CharacterCardV2;
    const data = card.data;

    if (!data.name) {
      return NextResponse.json(
        { error: 'Character card must have a name in data.name' },
        { status: 400 }
      );
    }

    const id = options.name?.toLowerCase().replace(/\s+/g, '-') || randomUUID().slice(0, 8);
    const tags = data.tags || [];
    const archetype = tags.find((t: string) => ['sage', 'nurturer', 'explorer', 'creator', 'guardian', 'muse', 'jester'].includes(t)) || 'sage';

    const character = {
      id,
      name: data.name,
      title: options.title || (data.description?.split('\n')[0]?.slice(0, 100) || 'Imported character'),
      tagline: options.description || data.first_mes?.slice(0, 200) || 'An imported companion.',
      emoji: '🌟',
      color: '#c9a84c',
      archetype: archetype as 'sage' | 'nurturer' | 'explorer' | 'creator' | 'guardian' | 'muse' | 'jester',
      personality: data.personality?.split('\n').filter(Boolean).slice(0, 5) || ['Compassionate', 'Thoughtful'],
      systemPrompt: data.system_prompt || `You are ${data.name}. ${data.scenario || ''}`,
      voiceStyle: 'Warm and conversational',
      tags: tags.slice(0, 10).filter(Boolean),
      tier: 'custom',
      license: 'CC0',
      dynamism: 0.85,
      dimensions: {
        warmth: 0.7,
        energy: 0.5,
        whimsy: 0.4,
        edge: 0.3,
        complexity: 0.6,
      },
      communicationStyle: 'conversational',
      firstMessage: data.first_mes || `Hi! I'm ${data.name}.`,
      sourceUrl: data.extensions?.meok?.sourceUrl as string || `https://meok.ai/marketplace`,
      importSource: 'character-card-v2',
      originalCreator: data.creator || 'Unknown',
    };

    const created = await dbCreateCharacter(character);

    return NextResponse.json({
      success: true,
      character: created,
      message: `Successfully imported "${data.name}" as a MEOK character.`,
    });
  } catch (error) {
    console.error('[characters/import] Error:', error);
    return NextResponse.json(
      { error: 'Failed to import character. Please check the character card format.' },
      { status: 500 }
    );
  }
}

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    supported_formats: ['chara_card_v2'],
    max_size_bytes: 10 * 1024 * 1024,
    example: {
      endpoint: '/api/characters/import',
      method: 'POST',
      body: {
        characterCard: { /* Character Card v2 JSON */ },
        options: {
          name: 'my-character',
          title: 'Custom title',
        },
      },
    },
  });
}