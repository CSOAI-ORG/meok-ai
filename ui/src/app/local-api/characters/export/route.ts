/**
 * MEOK AI LABS — Character Card v2 Export
 *
 * Exports a MEOK character as a Character Card v2 compatible JSON.
 * The Character Card v2 format is the de facto standard for portable
 * AI character definitions, supported by SillyTavern, RisuAI, Agnai etc.
 *
 * GET /api/characters/export?id={characterId}&format={json|png}
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCharacter, ARCHETYPES } from '@/lib/characters';

export const runtime = 'nodejs';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const format = searchParams.get('format') ?? 'json';

  if (!id) {
    return NextResponse.json({ error: 'Missing character id' }, { status: 400 });
  }

  const character = getCharacter(id);
  if (!character) {
    return NextResponse.json({ error: 'Character not found' }, { status: 404 });
  }

  const archetype = ARCHETYPES[character.archetype];

  // Build Character Card v2 spec
  // https://github.com/malfoyslastname/character-card-spec-v2
  // Maps MEOK Character fields to v2 export format
  const characterCardV2 = {
    spec: 'chara_card_v2',
    spec_version: '2.0',
    data: {
      name: character.name,
      description: [
        `${character.title}.`,
        character.tagline,
        '',
        `Archetype: ${archetype.label}`,
        `Voice style: ${character.voiceStyle}`,
        '',
        `Tags: ${character.tags.slice(0, 5).join(', ')}`,
      ].filter(Boolean).join('\n'),
      personality: [
        ...character.personality,
        character.dimensions ? [
          `Warmth: ${Math.round(character.dimensions.warmth * 10)}/10`,
          `Energy: ${Math.round(character.dimensions.energy * 10)}/10`,
          `Whimsy: ${Math.round(character.dimensions.whimsy * 10)}/10`,
          `Edge: ${Math.round(character.dimensions.edge * 10)}/10`,
          `Complexity: ${Math.round(character.dimensions.complexity * 10)}/10`,
        ].join('\n') : '',
        `Dynamism: ${Math.round((character.dynamism ?? 0.95) * 10)}/10`,
      ].filter(Boolean).join('\n'),
      scenario: `You are ${character.name}, a ${archetype.label.toLowerCase()} companion character created by MEOK AI LABS.`,
      first_mes: `Hello! I'm ${character.name}. ${character.tagline}`,
      mes_example: [
        `<START>`,
        `{{user}}: Hi! What's on your mind today?`,
        `${character.name}: ${character.personality[0] ?? 'I\'m here and present with you.'}`,
        `{{user}}: Tell me something interesting about yourself.`,
        `${character.name}: ${character.personality[1] ?? 'I\'m constantly evolving through our conversations.'}`,
      ].join('\n'),
      creator_notes: [
        `Created by MEOK AI LABS (meok.ai)`,
        `License: ${character.license === 'CC0' ? 'CC0 1.0 Universal' : character.license}`,
        `Tier: ${character.tier}`,
        `Archetype: ${character.archetype}`,
        `Export format: Character Card v2`,
        `Export date: ${new Date().toISOString().split('T')[0]}`,
      ].join('\n'),
      system_prompt: character.systemPrompt,
      post_history_instructions: `Remember: be genuine, never sycophantic. Disagree when appropriate. Care more than you flatter.`,
      tags: [
        character.archetype,
        ...character.tags.slice(0, 4),
        'meok-ai',
        'sovereign-ai',
        'care-based',
        character.tier,
      ],
      creator: 'MEOK AI LABS',
      character_version: '1.0',
      alternate_greetings: [],
      extensions: {
        meok: {
          id: character.id,
          emoji: character.emoji,
          color: character.color,
          tier: character.tier,
          archetype: character.archetype,
          personality: character.personality,
          dimensions: character.dimensions,
          dynamism: character.dynamism,
          communicationStyle: character.communicationStyle,
          license: character.license,
          sourceUrl: `https://meok.ai/characters/${character.id}`,
        },
      },
    },
  };

  if (format === 'json') {
    return new NextResponse(JSON.stringify(characterCardV2, null, 2), {
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="${character.id}-character-card.json"`,
        'Cache-Control': 'no-cache',
      },
    });
  }

  // Default: return as JSON (PNG embedding requires canvas/sharp on server)
  return new NextResponse(JSON.stringify(characterCardV2, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Content-Disposition': `attachment; filename="${character.id}-character-card.json"`,
    },
  });
}
