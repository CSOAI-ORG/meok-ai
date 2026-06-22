/**
 * MEOK AI LABS — Character Quick Actions API
 * 
 * Pre-defined actions users can trigger on characters
 * 
 * POST /api/character/actions
 *   Body: { characterId, action, params }
 */

import { NextRequest, NextResponse } from 'next/server';
import { getCharacter, CHARACTERS } from '@/lib/characters';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface CharacterAction {
  id: string;
  name: string;
  description: string;
  icon: string;
  requiresInput: boolean;
}

const CHARACTER_ACTIONS: CharacterAction[] = [
  { id: 'chat', name: 'Chat', description: 'Start a conversation', icon: '💬', requiresInput: false },
  { id: 'morning_brief', name: 'Morning Brief', description: 'Get your daily briefing', icon: '🌅', requiresInput: false },
  { id: 'brainstorm', name: 'Brainstorm', description: 'Generate creative ideas', icon: '💡', requiresInput: true },
  { id: 'analyze', name: 'Analyze', description: 'Deep dive into a topic', icon: '🔍', requiresInput: true },
  { id: 'review', name: 'Review', description: 'Review your recent interactions', icon: '📊', requiresInput: false },
  { id: 'dream', name: 'Dream Mode', description: 'Enter creative dreaming state', icon: '🌙', requiresInput: false },
  { id: 'challenge', name: 'Challenge', description: 'Set a challenge or goal', icon: '🎯', requiresInput: true },
  { id: 'teach', name: 'Teach Me', description: 'Explain a topic', icon: '📚', requiresInput: true },
  { id: 'roleplay', name: 'Roleplay', description: 'Enter a roleplay scenario', icon: '🎭', requiresInput: true },
  { id: 'meditate', name: 'Meditate', description: 'Start a mindfulness session', icon: '🧘', requiresInput: false },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  
  if (characterId) {
    const character = getCharacter(characterId);
    if (!character) {
      return NextResponse.json({ error: 'Character not found' }, { status: 404 });
    }
    
    const actions = getActionsForCharacter(character.archetype);
    return NextResponse.json({ characterId, character: character.name, actions });
  }
  
  return NextResponse.json({ actions: CHARACTER_ACTIONS });
}

function getActionsForCharacter(archetype: string): CharacterAction[] {
  const ARCHETYPE_ACTIONS: Record<string, string[]> = {
    challenger: ['chat', 'morning_brief', 'challenge', 'analyze', 'review'],
    nurturer: ['chat', 'morning_brief', 'meditate', 'teach', 'review'],
    explorer: ['chat', 'brainstorm', 'analyze', 'teach', 'roleplay'],
    sage: ['chat', 'analyze', 'teach', 'review', 'dream'],
    creator: ['chat', 'brainstorm', 'roleplay', 'dream', 'teach'],
    trickster: ['chat', 'brainstorm', 'roleplay', 'challenge'],
    rebel: ['chat', 'challenge', 'analyze', 'roleplay'],
    seeker: ['chat', 'brainstorm', 'teach', 'dream'],
    innocent: ['chat', 'meditate', 'roleplay', 'teach'],
  };
  
  const actionIds = ARCHETYPE_ACTIONS[archetype] || ['chat', 'morning_brief', 'teach'];
  return CHARACTER_ACTIONS.filter(a => actionIds.includes(a.id));
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, action, params = {} } = body;
    
    if (!characterId || !action) {
      return NextResponse.json({ error: 'Missing characterId or action' }, { status: 400 });
    }
    
    const character = getCharacter(characterId);
    if (!character) {
      return NextResponse.json({ error: 'Character not found' }, { status: 404 });
    }
    
    const result = await executeAction(characterId, action, params);
    
    return NextResponse.json({
      success: true,
      characterId: character.id,
      characterName: character.name,
      action,
      result,
    });
  } catch (error) {
    console.error('[character/actions] error:', error);
    return NextResponse.json({ error: 'Action failed' }, { status: 500 });
  }
}

async function executeAction(
  characterId: string, 
  action: string, 
  params: Record<string, unknown>
): Promise<{ message: string; nextStep?: string }> {
  const timestamp = new Date().toISOString();
  
  const ACTION_RESPONSES: Record<string, (params: Record<string, unknown>) => { message: string; nextStep?: string }> = {
    chat: () => ({
      message: `Starting conversation with your companion...`,
      nextStep: 'open_chat',
    }),
    morning_brief: () => ({
      message: `Generating your morning briefing based on your recent activity and goals...`,
      nextStep: 'show_briefing',
    }),
    brainstorm: (p) => ({
      message: `Starting brainstorm session on: ${p.topic || 'your topic'}...`,
      nextStep: 'show_ideas',
    }),
    analyze: (p) => ({
      message: `Analyzing: ${p.topic || 'your input'}...`,
      nextStep: 'show_analysis',
    }),
    review: () => ({
      message: `Compiling your interaction history and evolution...`,
      nextStep: 'show_review',
    }),
    dream: () => ({
      message: `Entering dream mode - consolidating memories and generating creative insights...`,
      nextStep: 'show_dream',
    }),
    challenge: (p) => ({
      message: `Setting up challenge: ${p.challenge || 'your goal'}...`,
      nextStep: 'track_challenge',
    }),
    teach: (p) => ({
      message: `Preparing to explain: ${p.topic || 'your topic'}...`,
      nextStep: 'start_teaching',
    }),
    roleplay: (p) => ({
      message: `Starting roleplay scenario: ${p.scenario || 'adventure'}...`,
      nextStep: 'start_roleplay',
    }),
    meditate: () => ({
      message: `Beginning mindfulness session...`,
      nextStep: 'start_meditation',
    }),
  };
  
  const execute = ACTION_RESPONSES[action];
  if (!execute) {
    return { message: `Unknown action: ${action}` };
  }
  
  const result = execute(params);
  
  await kv.set(`meok:character:last_action:${characterId}`, {
    action,
    params,
    timestamp,
  });
  
  return result;
}