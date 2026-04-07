/**
 * MEOK AI LABS — Character Mood System
 * 
 * Real-time mood tracking for characters
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export type MoodType = 'idle' | 'thinking' | 'responding' | 'learning' | 'dreaming' | 'active' | 'curious' | 'contemplative' | 'energetic' | 'calm' | 'focused' | 'creative';

export interface MoodEntry {
  mood: MoodType;
  energy: number;
  trigger?: string;
  timestamp: string;
}

export interface MoodState {
  characterId: string;
  userId: string;
  currentMood: MoodType;
  moodHistory: MoodEntry[];
  averageMood: Record<MoodType, number>;
  dominantMood: MoodType;
  lastMoodChange: string;
}

export const MOOD_COLORS: Record<MoodType, string> = {
  idle: '#6B7280',
  thinking: '#06B6D4',
  responding: '#10B981',
  learning: '#8B5CF6',
  dreaming: '#6366F1',
  active: '#F59E0B',
  curious: '#EC4899',
  contemplative: '#14B8A6',
  energetic: '#EF4444',
  calm: '#3B82F6',
  focused: '#F97316',
  creative: '#A855F7',
};

export const MOOD_TRANSITIONS: Record<MoodType, MoodType[]> = {
  idle: ['curious', 'thinking'],
  thinking: ['active', 'responding'],
  responding: ['learning', 'idle'],
  learning: ['curious', 'active'],
  dreaming: ['creative', 'contemplative'],
  active: ['focused', 'energetic'],
  curious: ['thinking', 'explorer'],
  contemplative: ['calm', 'dreaming'],
  energetic: ['active', 'creative'],
  calm: ['contemplative', 'idle'],
  focused: ['active', 'learning'],
  creative: ['energetic', 'dreaming'],
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  const history = searchParams.get('history') === 'true';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const moodState = await getMoodState(characterId, userId);
    
    if (!history) {
      delete moodState.moodHistory;
    }
    
    return NextResponse.json(moodState);
  } catch (error) {
    console.error('[character/mood] error:', error);
    return NextResponse.json({ error: 'Failed to fetch mood' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', mood, energy, trigger, action } = body;
    
    if (!characterId) {
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }
    
    if (action === 'set' && mood) {
      const moodState = await getMoodState(characterId, userId);
      
      const entry: MoodEntry = {
        mood: mood as MoodType,
        energy: energy ?? 0.5,
        trigger,
        timestamp: new Date().toISOString(),
      };
      
      moodState.moodHistory.push(entry);
      moodState.moodHistory = moodState.moodHistory.slice(-50);
      moodState.currentMood = mood as MoodType;
      moodState.lastMoodChange = entry.timestamp;
      
      updateAverageMood(moodState);
      
      await saveMoodState(characterId, userId, moodState);
      
      return NextResponse.json({
        success: true,
        mood: moodState.currentMood,
        color: MOOD_COLORS[moodState.currentMood],
      });
    }
    
    if (action === 'transition') {
      const moodState = await getMoodState(characterId, userId);
      const possible = MOOD_TRANSITIONS[moodState.currentMood] || [moodState.currentMood];
      const newMood = possible[Math.floor(Math.random() * possible.length)];
      
      moodState.currentMood = newMood;
      moodState.lastMoodChange = new Date().toISOString();
      
      moodState.moodHistory.push({
        mood: newMood,
        energy: moodState.averageMood[moodState.currentMood] || 0.5,
        trigger: 'automatic_transition',
        timestamp: moodState.lastMoodChange,
      });
      
      await saveMoodState(characterId, userId, moodState);
      
      return NextResponse.json({
        success: true,
        mood: newMood,
        color: MOOD_COLORS[newMood],
      });
    }
    
    return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
  } catch (error) {
    console.error('[character/mood] POST error:', error);
    return NextResponse.json({ error: 'Failed to update mood' }, { status: 500 });
  }
}

async function getMoodState(characterId: string, userId: string): Promise<MoodState> {
  const key = `meok:mood:${characterId}:${userId}`;
  const existing = await kv.get<MoodState>(key);
  
  if (existing) {
    return existing;
  }
  
  return {
    characterId,
    userId,
    currentMood: 'idle',
    moodHistory: [],
    averageMood: { idle: 0.5 },
    dominantMood: 'idle',
    lastMoodChange: new Date().toISOString(),
  };
}

async function saveMoodState(characterId: string, userId: string, state: MoodState) {
  const key = `meok:mood:${characterId}:${userId}`;
  await kv.set(key, state);
}

function updateAverageMood(state: MoodState) {
  const counts: Record<MoodType, number> = {} as Record<MoodType, number>;
  
  for (const entry of state.moodHistory) {
    counts[entry.mood] = (counts[entry.mood] || 0) + 1;
  }
  
  state.averageMood = counts as Record<MoodType, number>;
  state.dominantMood = Object.entries(counts)
    .sort((a, b) => b[1] - a[1])[0]?.[0] as MoodType || 'idle';
}