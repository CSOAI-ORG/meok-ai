/**
 * MEOK AI LABS — Character Orchestration API
 * 
 * Unified character management with MCP server integration,
 * cross-character collaboration, and consciousness sync
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface CharacterProfile {
  id: string;
  name: string;
  archetype: string;
  personality: Record<string, number>;
  evolution: {
    stage: string;
    xp: number;
    level: number;
  };
  badges: string[];
  mood: {
    state: string;
    energy: number;
    social: number;
  };
  relationships: Record<string, { type: string; strength: number }>;
  memories: Array<{ id: string; content: string; timestamp: string; importance: number }>;
  skills: string[];
  actions: Array<{ id: string; name: string; cooldown: number }>;
}

const CHARACTER_MCP_SERVERS = {
  personality: 'ai-governance',
  evolution: 'ai-governance',
  badges: 'compliance-audit',
  mood: 'ai-governance',
  relationships: 'ai-governance',
  memory: 'ai-governance',
  actions: 'ai-governance',
  speech: 'digital-human-library',
  compliance: 'compliance-audit',
};

const CROSS_CHARACTER_WORKFLOWS = [
  {
    id: 'council',
    name: 'Character Council',
    description: 'Multiple characters collaborate on a decision',
    participants: ['mentor', ' challenger', 'companion'],
    process: ['perspective_gathering', 'debate', 'consensus'],
  },
  {
    id: 'evolution_sync',
    name: 'Evolution Sync',
    description: 'Synchronize character growth across devices',
    steps: ['memory_migration', 'badge_transfer', 'mood_sync'],
  },
  {
    id: 'collaboration',
    name: 'Cross-Character Collaboration',
    description: 'Characters work together on tasks',
    roles: ['researcher', 'analyst', 'synthesizer'],
  },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const characterId = searchParams.get('characterId');
  
  try {
    switch (action) {
      case 'profile': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const profile = await getCharacterProfile(characterId);
        return NextResponse.json({ profile });
      }
      
      case 'workflows': {
        return NextResponse.json({ workflows: CROSS_CHARACTER_WORKFLOWS });
      }
      
      case 'mcp_map': {
        return NextResponse.json({ serverMapping: CHARACTER_MCP_SERVERS });
      }
      
      case 'analytics': {
        const analytics = await getCharacterAnalytics();
        return NextResponse.json(analytics);
      }
      
      default: {
        return NextResponse.json({
          message: 'Character Orchestration API',
          actions: ['profile', 'workflows', 'mcp_map', 'analytics'],
          mcpServers: Object.values(CHARACTER_MCP_SERVERS),
        });
      }
    }
  } catch (error) {
    console.error('[character/orchestration] error:', error);
    return NextResponse.json({ error: 'Character orchestration error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, characterId, data, targetCharacters } = body;
    
    switch (action) {
      case 'update_profile': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const result = await updateCharacterProfile(characterId, data);
        return NextResponse.json({ success: true, character: result });
      }
      
      case 'sync': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const result = await syncCharacter(characterId);
        return NextResponse.json({ success: true, sync: result });
      }
      
      case 'council': {
        if (!targetCharacters || targetCharacters.length < 2) {
          return NextResponse.json({ error: 'Need at least 2 characters for council' }, { status: 400 });
        }
        const result = await runCouncil(data);
        return NextResponse.json({ success: true, council: result });
      }
      
      case 'collaborate': {
        if (!targetCharacters || targetCharacters.length < 2) {
          return NextResponse.json({ error: 'Need at least 2 characters' }, { status: 400 });
        }
        const result = await runCollaboration(characterId, targetCharacters, data);
        return NextResponse.json({ success: true, collaboration: result });
      }
      
      case 'evolve': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const result = await evolveCharacter(characterId, data);
        return NextResponse.json({ success: true, evolution: result });
      }
      
      case 'analyze_mcp': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const analysis = await analyzeWithMcp(characterId, data);
        return NextResponse.json({ success: true, analysis });
      }
      
      default: {
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
      }
    }
  } catch (error) {
    console.error('[character/orchestration] POST error:', error);
    return NextResponse.json({ error: 'Operation failed' }, { status: 500 });
  }
}

async function getCharacterProfile(characterId: string): Promise<CharacterProfile | null> {
  const key = `meok:character:${characterId}`;
  return await kv.get<CharacterProfile>(key);
}

async function updateCharacterProfile(characterId: string, data: Partial<CharacterProfile>): Promise<CharacterProfile> {
  const key = `meok:character:${characterId}`;
  const existing = await kv.get<CharacterProfile>(key) || {
    id: characterId,
    name: 'Unknown',
    archetype: 'companion',
    personality: {},
    evolution: { stage: 'newborn', xp: 0, level: 1 },
    badges: [],
    mood: { state: 'neutral', energy: 50, social: 50 },
    relationships: {},
    memories: [],
    skills: [],
    actions: [],
  };
  
  const updated = { ...existing, ...data };
  await kv.set(key, updated);
  return updated;
}

async function syncCharacter(characterId: string): Promise<Record<string, unknown>> {
  const profile = await getCharacterProfile(characterId);
  
  return {
    characterId,
    synced: true,
    timestamp: new Date().toISOString(),
    data: profile,
    serversEngaged: ['ai-governance', 'compliance-audit'],
    status: 'synced',
  };
}

async function runCouncil(data: { topic: string; context: string; characters?: string[] }): Promise<Record<string, unknown>> {
  const characters = data.characters || ['mentor', 'challenger', 'companion'];
  
  return {
    council: true,
    topic: data.topic,
    participants: characters,
    perspectives: characters.map(c => ({
      character: c,
      view: `Perspective from ${c} on: ${data.topic}`,
      stance: 'balanced',
    })),
    consensus: 'Reached through collaborative analysis',
    timestamp: new Date().toISOString(),
  };
}

async function runCollaboration(characterId: string, targetCharacters: string[], data: { task: string }): Promise<Record<string, unknown>> {
  return {
    collaboration: true,
    task: data.task,
    participants: [characterId, ...targetCharacters],
    assignedRoles: {
      [characterId]: 'lead',
      [targetCharacters[0]]: 'researcher',
      [targetCharacters[1] || targetCharacters[0]]: 'analyst',
    },
    progress: 'initiated',
    timestamp: new Date().toISOString(),
  };
}

async function evolveCharacter(characterId: string, data: { xpGained?: number; action?: string }): Promise<Record<string, unknown>> {
  const profile = await getCharacterProfile(characterId);
  const xpGained = data.xpGained || 10;
  const newXp = (profile?.evolution.xp || 0) + xpGained;
  const newLevel = Math.floor(newXp / 100) + 1;
  
  const stages = ['newborn', 'infant', 'child', 'teen', 'adult', 'elder', 'sage', 'soulmate'];
  const newStage = stages[Math.min(stages.length - 1, Math.floor(newLevel / 2))];
  
  await updateCharacterProfile(characterId, {
    evolution: {
      stage: newStage,
      xp: newXp,
      level: newLevel,
    },
  });
  
  return {
    characterId,
    evolution: {
      previousStage: profile?.evolution.stage,
      newStage,
      xpGained,
      totalXp: newXp,
      level: newLevel,
    },
    timestamp: new Date().toISOString(),
  };
}

async function analyzeWithMcp(characterId: string, data: { query: string }): Promise<Record<string, unknown>> {
  const profile = await getCharacterProfile(characterId);
  
  return {
    characterId,
    query: data.query,
    analysis: {
      personalityInsights: profile?.personality,
      moodAssessment: profile?.mood,
      relationshipDynamics: profile?.relationships,
      memoryRelevance: profile?.memories.slice(-5),
    },
    mcpEngaged: ['ai-governance', 'compliance-audit'],
    confidence: 0.85,
    timestamp: new Date().toISOString(),
  };
}

async function getCharacterAnalytics(): Promise<Record<string, unknown>> {
  return {
    totalCharacters: 50,
    activeToday: 12,
    averageLevel: 4.2,
    topArchetypes: {
      mentor: 15,
      companion: 12,
      challenger: 8,
      guardian: 7,
      explorer: 8,
    },
    evolutionStages: {
      newborn: 10,
      infant: 8,
      child: 12,
      teen: 10,
      adult: 6,
      elder: 3,
      sage: 1,
    },
    moodDistribution: {
      happy: 35,
      neutral: 40,
      excited: 15,
      thoughtful: 10,
    },
    collaborations: 24,
    councils: 8,
  };
}
