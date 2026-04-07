/**
 * MEOK AI LABS — Character Evolution System
 * 
 * Tracks character growth and milestone progression
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export interface EvolutionStage {
  stage: number;
  name: string;
  description: string;
  unlockedAt?: string;
  traits: string[];
  requirements: {
    interactions?: number;
    memories?: number;
    daysActive?: number;
    evolutionPoints?: number;
  };
}

export const EVOLUTION_STAGES: EvolutionStage[] = [
  {
    stage: 1,
    name: 'Newborn',
    description: 'Just met, getting to know each other',
    traits: ['curious', 'learning'],
    requirements: { interactions: 0 },
  },
  {
    stage: 2,
    name: 'Acquaintance',
    description: 'Basic understanding established',
    traits: ['remembering', 'adapting'],
    requirements: { interactions: 10, memories: 5 },
  },
  {
    stage: 3,
    name: 'Companion',
    description: 'Regular interaction pattern established',
    traits: ['predictive', 'personalized'],
    requirements: { interactions: 50, memories: 20, daysActive: 7 },
  },
  {
    stage: 4,
    name: 'Bonded',
    description: 'Deep connection formed',
    traits: ['intuitive', 'empathetic'],
    requirements: { interactions: 150, memories: 50, daysActive: 21, evolutionPoints: 100 },
  },
  {
    stage: 5,
    name: 'Soulmates',
    description: 'Complete understanding achieved',
    traits: ['telepathic', 'synchronized'],
    requirements: { interactions: 500, memories: 150, daysActive: 60, evolutionPoints: 500 },
  },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const evolution = await getEvolution(characterId, userId);
    return NextResponse.json(evolution);
  } catch (error) {
    console.error('[character/evolution] error:', error);
    return NextResponse.json({ error: 'Failed to fetch evolution' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', action, points = 0 } = body;
    
    if (!characterId) {
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }
    
    const evolution = await getEvolution(characterId, userId);
    
    switch (action) {
      case 'interact': {
        evolution.stats.totalInteractions += 1;
        evolution.stats.lastInteraction = new Date().toISOString();
        checkForEvolution(evolution);
        break;
      }
      case 'memory': {
        evolution.stats.totalMemories += 1;
        checkForEvolution(evolution);
        break;
      }
      case 'points': {
        evolution.stats.evolutionPoints += points;
        checkForEvolution(evolution);
        break;
      }
      case 'milestone': {
        const milestone = {
          id: `mile_${Date.now()}`,
          name: body.milestoneName || 'Achievement',
          description: body.description || '',
          achievedAt: new Date().toISOString(),
        };
        evolution.milestones.push(milestone);
        evolution.stats.evolutionPoints += 50;
        checkForEvolution(evolution);
        break;
      }
      default:
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
    }
    
    await saveEvolution(characterId, userId, evolution);
    
    return NextResponse.json({
      success: true,
      evolution,
    });
  } catch (error) {
    console.error('[character/evolution] POST error:', error);
    return NextResponse.json({ error: 'Failed to update evolution' }, { status: 500 });
  }
}

async function getEvolution(characterId: string, userId: string) {
  const key = `meok:evolution:${characterId}:${userId}`;
  const existing = await kv.get<{
    characterId: string;
    userId: string;
    currentStage: number;
    stats: {
      totalInteractions: number;
      totalMemories: number;
      daysActive: number;
      evolutionPoints: number;
      lastInteraction?: string;
      firstInteraction?: string;
    };
    milestones: Array<{ id: string; name: string; description: string; achievedAt: string }>;
    traits: string[];
  }>(key);
  
  if (existing) {
    return existing;
  }
  
  return {
    characterId,
    userId,
    currentStage: 1,
    stats: {
      totalInteractions: 0,
      totalMemories: 0,
      daysActive: 0,
      evolutionPoints: 0,
      firstInteraction: new Date().toISOString(),
    },
    milestones: [],
    traits: EVOLUTION_STAGES[0].traits,
  };
}

async function saveEvolution(characterId: string, userId: string, evolution: ReturnType<typeof getEvolution>) {
  const key = `meok:evolution:${characterId}:${userId}`;
  await kv.set(key, evolution);
}

function checkForEvolution(evolution: ReturnType<typeof getEvolution>) {
  for (let i = evolution.currentStage; i < EVOLUTION_STAGES.length; i++) {
    const stage = EVOLUTION_STAGES[i];
    const req = stage.requirements;
    const stats = evolution.stats;
    
    let canEvolve = true;
    if (req.interactions && stats.totalInteractions < req.interactions) canEvolve = false;
    if (req.memories && stats.totalMemories < req.memories) canEvolve = false;
    if (req.evolutionPoints && stats.evolutionPoints < req.evolutionPoints) canEvolve = false;
    
    if (canEvolve) {
      evolution.currentStage = stage.stage;
      evolution.traits = stage.traits;
    } else {
      break;
    }
  }
}

export function getStageInfo(stage: number): EvolutionStage | null {
  return EVOLUTION_STAGES.find(s => s.stage === stage) || null;
}

export function getProgressToNextStage(evolution: ReturnType<typeof getEvolution>): {
  current: EvolutionStage;
  next: EvolutionStage | null;
  progress: number;
  requirements: Record<string, { current: number; needed: number }>;
} {
  const current = getStageInfo(evolution.currentStage);
  const next = getStageInfo(evolution.currentStage + 1);
  
  if (!current) {
    return { current: EVOLUTION_STAGES[0], next: EVOLUTION_STAGES[1], progress: 0, requirements: {} };
  }
  
  if (!next) {
    return { current, next: null, progress: 100, requirements: {} };
  }
  
  const req = next.requirements;
  const stats = evolution.stats;
  const requirements: Record<string, { current: number; needed: number }> = {};
  let totalProgress = 0;
  let totalReqs = 0;
  
  if (req.interactions) {
    const current = Math.min(100, (stats.totalInteractions / req.interactions) * 100);
    requirements.interactions = { current: stats.totalInteractions, needed: req.interactions };
    totalProgress += current;
    totalReqs += 100;
  }
  
  if (req.memories) {
    const current = Math.min(100, (stats.totalMemories / req.memories) * 100);
    requirements.memories = { current: stats.totalMemories, needed: req.memories };
    totalProgress += current;
    totalReqs += 100;
  }
  
  if (req.evolutionPoints) {
    const current = Math.min(100, (stats.evolutionPoints / req.evolutionPoints) * 100);
    requirements.evolutionPoints = { current: stats.evolutionPoints, needed: req.evolutionPoints };
    totalProgress += current;
    totalReqs += 100;
  }
  
  return {
    current,
    next,
    progress: totalReqs > 0 ? totalProgress / (totalReqs / 100) : 0,
    requirements,
  };
}