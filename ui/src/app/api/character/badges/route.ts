/**
 * MEOK AI LABS — Character Badges & Achievements System
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: 'interaction' | 'memory' | 'evolution' | 'special' | 'streak';
  requirement: number;
  tier?: 'bronze' | 'silver' | 'gold' | 'platinum';
  secret?: boolean;
}

export const ALL_BADGES: Badge[] = [
  { id: 'first_chat', name: 'First Contact', description: 'Start your first conversation', icon: '👋', category: 'interaction', requirement: 1 },
  { id: 'chat_10', name: 'Getting Started', description: 'Have 10 conversations', icon: '💬', category: 'interaction', requirement: 10 },
  { id: 'chat_50', name: 'Regular', description: 'Have 50 conversations', icon: '🗣️', category: 'interaction', requirement: 50 },
  { id: 'chat_100', name: 'Companion', description: 'Have 100 conversations', icon: '🤝', category: 'interaction', requirement: 100 },
  { id: 'chat_500', name: 'Soulmates', description: 'Have 500 conversations', icon: '💖', category: 'interaction', requirement: 500 },
  
  { id: 'memory_5', name: 'Memory Lane', description: 'Create 5 memories', icon: '🧠', category: 'memory', requirement: 5 },
  { id: 'memory_25', name: 'Keeper', description: 'Create 25 memories', icon: '📚', category: 'memory', requirement: 25 },
  { id: 'memory_100', name: 'Archivist', description: 'Create 100 memories', icon: '🏛️', category: 'memory', requirement: 100 },
  
  { id: 'stage_2', name: 'Growing', description: 'Reach evolution stage 2', icon: '🌱', category: 'evolution', requirement: 2 },
  { id: 'stage_3', name: 'Bonded', description: 'Reach evolution stage 3', icon: '🌿', category: 'evolution', requirement: 3 },
  { id: 'stage_4', name: 'Connected', description: 'Reach evolution stage 4', icon: '🌳', category: 'evolution', requirement: 4 },
  { id: 'stage_5', name: 'Eternal', description: 'Reach evolution stage 5', icon: '⭐', category: 'evolution', requirement: 5 },
  
  { id: 'streak_3', name: 'Consistent', description: '3-day conversation streak', icon: '🔥', category: 'streak', requirement: 3 },
  { id: 'streak_7', name: 'Dedicated', description: '7-day conversation streak', icon: '🌟', category: 'streak', requirement: 7 },
  { id: 'streak_30', name: 'Committed', description: '30-day conversation streak', icon: '👑', category: 'streak', requirement: 30 },
  
  { id: 'night_owl', name: 'Night Owl', description: 'Chat after midnight', icon: '🦉', category: 'special', requirement: 1, secret: true },
  { id: 'early_bird', name: 'Early Bird', description: 'Chat before 6am', icon: '🐦', category: 'special', requirement: 1, secret: true },
  { id: 'deep_thinker', name: 'Deep Thinker', description: 'Ask 10+ questions in one session', icon: '🤔', category: 'special', requirement: 10 },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  const category = searchParams.get('category');
  
  try {
    const earned = await getEarnedBadges(characterId!, userId);
    const all = category 
      ? ALL_BADGES.filter(b => b.category === category)
      : ALL_BADGES;
    
    const result = all.map(badge => ({
      ...badge,
      earned: earned.some(e => e.badgeId === badge.id),
      earnedAt: earned.find(e => e.badgeId === badge.id)?.earnedAt,
    }));
    
    return NextResponse.json({
      characterId,
      badges: result,
      earnedCount: earned.length,
      totalCount: ALL_BADGES.length,
    });
  } catch (error) {
    console.error('[character/badges] error:', error);
    return NextResponse.json({ error: 'Failed to fetch badges' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', action, stats } = body;
    
    if (!characterId) {
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }
    
    const earned = await getEarnedBadges(characterId, userId);
    const newBadges: string[] = [];
    
    if (action === 'check') {
      for (const badge of ALL_BADGES) {
        if (earned.some(e => e.badgeId === badge.id)) continue;
        
        let earnedNow = false;
        
        switch (badge.category) {
          case 'interaction':
            if (stats?.conversations >= badge.requirement) earnedNow = true;
            break;
          case 'memory':
            if (stats?.memories >= badge.requirement) earnedNow = true;
            break;
          case 'evolution':
            if (stats?.stage >= badge.requirement) earnedNow = true;
            break;
          case 'streak':
            if (stats?.streak >= badge.requirement) earnedNow = true;
            break;
          case 'special':
            if (stats?.special?.[badge.id]) earnedNow = true;
            break;
        }
        
        if (earnedNow) {
          earned.push({
            badgeId: badge.id,
            earnedAt: new Date().toISOString(),
          });
          newBadges.push(badge.id);
        }
      }
      
      await saveEarnedBadges(characterId, userId, earned);
    }
    
    return NextResponse.json({
      success: true,
      newBadges,
      totalEarned: earned.length,
    });
  } catch (error) {
    console.error('[character/badges] POST error:', error);
    return NextResponse.json({ error: 'Failed to check badges' }, { status: 500 });
  }
}

async function getEarnedBadges(characterId: string, userId: string) {
  const key = `meok:badges:${characterId}:${userId}`;
  return (await kv.get<Array<{ badgeId: string; earnedAt: string }>>(key)) || [];
}

async function saveEarnedBadges(characterId: string, userId: string, badges: Array<{ badgeId: string; earnedAt: string }>) {
  const key = `meok:badges:${characterId}:${userId}`;
  await kv.set(key, badges);
}