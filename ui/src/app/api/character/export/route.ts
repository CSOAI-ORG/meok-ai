/**
 * MEOK AI LABS — Character Export API
 * 
 * Export characters in various formats
 * 
 * GET /api/character/export?characterId={id}&format={json|card|voice}
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCharacter, CHARACTERS } from '@/lib/characters';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const format = (searchParams.get('format') || 'json') as 'json' | 'card' | 'voice';
  const includeMemories = searchParams.get('memories') === 'true';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const character = getCharacter(characterId);
    if (!character) {
      return NextResponse.json({ error: 'Character not found' }, { status: 404 });
    }
    
    let exportData: unknown;
    let contentType: string;
    let filename: string;
    
    switch (format) {
      case 'card':
        exportData = generateCharacterCard(character);
        contentType = 'application/json';
        filename = `${characterId}-card.json`;
        break;
        
      case 'voice':
        exportData = generateVoiceConfig(character);
        contentType = 'application/json';
        filename = `${characterId}-voice.json`;
        break;
        
      default:
        exportData = await generateFullExport(character, includeMemories);
        contentType = 'application/json';
        filename = `${characterId}-export.json`;
    }
    
    return new NextResponse(JSON.stringify(exportData, null, 2), {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': `attachment; filename="${filename}"`,
      },
    });
  } catch (error) {
    console.error('[character/export] error:', error);
    return NextResponse.json({ error: 'Export failed' }, { status: 500 });
  }
}

function generateCharacterCard(character: ReturnType<typeof getCharacter>) {
  return {
    spec: 'chara_card_v2',
    spec_version: '2.0',
    data: {
      name: character.name,
      description: character.tagline,
      personality: character.personality.join(', '),
      scenario: '',
      first_mes: `Hi! I'm ${character.name}. ${character.systemPrompt}`,
      mes_example: '',
      creator_notes: `Created with MEOK AI - ${character.archetype} archetype`,
      system_prompt: character.systemPrompt,
      post_history_instructions: '',
      tags: character.tags,
      creator: 'MEOK AI LABS',
      character_version: '1.0',
      alternate_greetings: [],
      extensions: {
        meok: {
          id: character.id,
          archetype: character.archetype,
          tier: character.tier,
          voiceStyle: character.voiceStyle,
        },
      },
    },
  };
}

function generateVoiceConfig(character: ReturnType<typeof getCharacter>) {
  const VOICE_PROFILES: Record<string, { voiceId: string; speed: number; pitch: number }> = {
    marcus: { voiceId: 'en-gb-male-1', speed: 0.95, pitch: 0.85 },
    aria: { voiceId: 'en-us-female-1', speed: 1.0, pitch: 1.1 },
    luna: { voiceId: 'en-us-female-2', speed: 0.9, pitch: 1.15 },
    sage: { voiceId: 'en-gb-male-2', speed: 0.85, pitch: 0.9 },
    sol: { voiceId: 'en-us-male-1', speed: 1.1, pitch: 1.0 },
    echo: { voiceId: 'en-us-male-2', speed: 1.0, pitch: 1.05 },
  };
  
  const profile = VOICE_PROFILES[character.id] || VOICE_PROFILES.default;
  
  return {
    characterId: character.id,
    name: character.name,
    voice: {
      id: profile.voiceId,
      speed: profile.speed,
      pitch: profile.pitch,
      language: 'en-US',
    },
    ssml: {
      enabled: true,
      templates: {
        greeting: `Hello! I'm ${character.name}.`,
        thinking: 'Hmm, let me think about that...',
        responding: character.systemPrompt.slice(0, 100),
      },
    },
  };
}

async function generateFullExport(character: ReturnType<typeof getCharacter>, includeMemories: boolean) {
  const exportData: Record<string, unknown> = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    type: 'meok_character',
    character: {
      id: character.id,
      name: character.name,
      title: character.title,
      archetype: character.archetype,
      emoji: character.emoji,
      color: character.color,
      tagline: character.tagline,
      systemPrompt: character.systemPrompt,
      personality: character.personality,
      tags: character.tags,
      tier: character.tier,
      license: character.license,
      voiceStyle: character.voiceStyle,
      dimensions: character.dimensions,
    },
  };
  
  if (includeMemories) {
    const memoryKey = `meok:memory:${character.id}:default`;
    exportData.memories = await kv.get(memoryKey) || [];
    
    const evolutionKey = `meok:evolution:${character.id}:default`;
    exportData.evolution = await kv.get(evolutionKey) || {};
    
    const moodKey = `meok:mood:${character.id}:default`;
    exportData.mood = await kv.get(moodKey) || {};
  }
  
  return exportData;
}