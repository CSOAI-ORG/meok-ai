/**
 * MEOK AI LABS — Character Customization API
 * 
 * Customize character appearance and behavior
 * 
 * GET /api/character/customize - Get customization options
 * POST /api/character/customize - Save customization
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';
import { getCharacter, type Character } from '@/lib/characters';

export const runtime = 'nodejs';

export interface Customization {
  characterId: string;
  userId: string;
  appearance: {
    avatar?: string;
    color?: string;
    emoji?: string;
    theme?: 'light' | 'dark' | 'auto';
  };
  behavior: {
    responseLength?: 'short' | 'medium' | 'long';
    formality?: 'casual' | 'neutral' | 'formal';
    humor?: 'none' | 'light' | 'moderate';
    emojis?: boolean;
  };
  notifications: {
    dailyCheckin?: boolean;
    milestoneAlerts?: boolean;
    weeklySummary?: boolean;
  };
  preferences: {
    language?: string;
    timezone?: string;
    defaultMood?: string;
  };
  updatedAt: string;
}

const DEFAULT_CUSTOMIZATION: Omit<Customization, 'characterId' | 'userId' | 'updatedAt'> = {
  appearance: {
    theme: 'auto',
    emojis: true,
  },
  behavior: {
    responseLength: 'medium',
    formality: 'neutral',
    humor: 'light',
    emojis: true,
  },
  notifications: {
    dailyCheckin: true,
    milestoneAlerts: true,
    weeklySummary: false,
  },
  preferences: {
    language: 'en-US',
    timezone: 'UTC',
  },
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const customization = await getCustomization(characterId, userId);
    const character = getCharacter(characterId);
    
    const defaults = getDefaultsForArchetype(character?.archetype || 'sage');
    
    return NextResponse.json({
      characterId,
      customization,
      defaults,
      availableOptions: getAvailableOptions(),
    });
  } catch (error) {
    console.error('[character/customize] error:', error);
    return NextResponse.json({ error: 'Failed to fetch customization' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', appearance, behavior, notifications, preferences } = body;
    
    if (!characterId) {
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }
    
    const key = `meok:customize:${characterId}:${userId}`;
    const existing = await kv.get<Customization>(key);
    
    const customization: Customization = {
      characterId,
      userId,
      appearance: { ...DEFAULT_CUSTOMIZATION.appearance, ...(existing?.appearance || {}), ...appearance },
      behavior: { ...DEFAULT_CUSTOMIZATION.behavior, ...(existing?.behavior || {}), ...behavior },
      notifications: { ...DEFAULT_CUSTOMIZATION.notifications, ...(existing?.notifications || {}), ...notifications },
      preferences: { ...DEFAULT_CUSTOMIZATION.preferences, ...(existing?.preferences || {}), ...preferences },
      updatedAt: new Date().toISOString(),
    };
    
    await kv.set(key, customization);
    
    return NextResponse.json({
      success: true,
      customization,
    });
  } catch (error) {
    console.error('[character/customize] POST error:', error);
    return NextResponse.json({ error: 'Failed to save customization' }, { status: 500 });
  }
}

async function getCustomization(characterId: string, userId: string): Promise<Customization> {
  const key = `meok:customize:${characterId}:${userId}`;
  const existing = await kv.get<Customization>(key);
  
  if (existing) {
    return existing;
  }
  
  return {
    characterId,
    userId,
    ...DEFAULT_CUSTOMIZATION,
    updatedAt: new Date().toISOString(),
  };
}

function getDefaultsForArchetype(archetype: string): Partial<Customization> {
  const ARCHETYPE_DEFAULTS: Record<string, Partial<Customization>> = {
    challenger: {
      behavior: { responseLength: 'short', formality: 'neutral', humor: 'light' },
    },
    nurturer: {
      behavior: { responseLength: 'medium', formality: 'warm', humor: 'light' },
    },
    sage: {
      behavior: { responseLength: 'long', formality: 'formal', humor: 'none' },
    },
    explorer: {
      behavior: { responseLength: 'medium', formality: 'casual', humor: 'moderate' },
    },
    creator: {
      behavior: { responseLength: 'medium', formality: 'neutral', humor: 'light' },
    },
  };
  
  return ARCHETYPE_DEFAULTS[archetype] || {};
}

function getAvailableOptions() {
  return {
    responseLength: ['short', 'medium', 'long'],
    formality: ['casual', 'neutral', 'formal'],
    humor: ['none', 'light', 'moderate'],
    theme: ['light', 'dark', 'auto'],
    language: ['en-US', 'en-GB', 'es', 'fr', 'de', 'ja', 'zh'],
  };
}