/**
 * MEOK AI LABS — Character Analytics Dashboard
 * 
 * Track and display character usage analytics
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const period = searchParams.get('period') || '7d';
  
  try {
    if (characterId) {
      const analytics = await getCharacterAnalytics(characterId, period);
      return NextResponse.json(analytics);
    }
    
    const allAnalytics = await getAllCharacterAnalytics(period);
    return NextResponse.json({
      period,
      characters: allAnalytics,
      summary: calculateSummary(allAnalytics),
    });
  } catch (error) {
    console.error('[character/analytics] error:', error);
    return NextResponse.json({ error: 'Analytics failed' }, { status: 500 });
  }
}

async function getCharacterAnalytics(characterId: string, period: string) {
  const periodDays = parseInt(period) || 7;
  const now = Date.now();
  const periodMs = periodDays * 24 * 60 * 60 * 1000;
  
  const key = `meok:analytics:character:${characterId}`;
  const data = await kv.get<{
    interactions: Array<{ timestamp: number; type: string }>;
    moods: Array<{ timestamp: number; mood: string }>;
    messages: number;
  }>(key);
  
  const interactions = (data?.interactions || []).filter(i => now - i.timestamp < periodMs);
  const moods = (data?.moods || []).filter(m => now - m.timestamp < periodMs);
  
  const moodCounts: Record<string, number> = {};
  moods.forEach(m => { moodCounts[m.mood] = (moodCounts[m.mood] || 0) + 1; });
  
  return {
    characterId,
    period: `${periodDays}d`,
    totalInteractions: interactions.length,
    uniqueDays: new Set(interactions.map(i => new Date(i.timestamp).toDateString())).size,
    averageInteractionsPerDay: interactions.length / periodDays,
    moodDistribution: moodCounts,
    lastInteraction: interactions[0]?.timestamp ? new Date(interactions[0].timestamp).toISOString() : null,
  };
}

async function getAllCharacterAnalytics(period: string) {
  const allChars = ['marcus', 'aria', 'luna', 'sage', 'sol', 'echo'];
  const analytics = [];
  
  for (const charId of allChars) {
    analytics.push(await getCharacterAnalytics(charId, period));
  }
  
  return analytics;
}

function calculateSummary(allAnalytics: Awaited<ReturnType<typeof getAllCharacterAnalytics>>) {
  const totalInteractions = allAnalytics.reduce((sum, a) => sum + a.totalInteractions, 0);
  const avgPerDay = allAnalytics.reduce((sum, a) => sum + a.averageInteractionsPerDay, 0);
  
  const topCharacter = allAnalytics.reduce((top, a) => 
    a.totalInteractions > (top?.totalInteractions || 0) ? a : top
  , allAnalytics[0]);
  
  return {
    totalInteractions,
    averagePerDay: avgPerDay / allAnalytics.length,
    mostActiveCharacter: topCharacter?.characterId,
    totalActiveDays: allAnalytics.reduce((sum, a) => sum + a.uniqueDays, 0),
  };
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, eventType, mood, metadata = {} } = body;
    
    if (!characterId || !eventType) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const timestamp = Date.now();
    const key = `meok:analytics:character:${characterId}`;
    
    const existing = (await kv.get<{
      interactions: Array<{ timestamp: number; type: string }>;
      moods: Array<{ timestamp: number; mood: string }>;
      messages: number;
    }>(key)) || { interactions: [], moods: [], messages: 0 };
    
    if (eventType === 'interaction') {
      existing.interactions.push({ timestamp, type: metadata.type || 'chat' });
    }
    
    if (eventType === 'mood' && mood) {
      existing.moods.push({ timestamp, mood });
    }
    
    if (eventType === 'message') {
      existing.messages = (existing.messages || 0) + 1;
    }
    
    existing.interactions = existing.interactions.slice(-1000);
    existing.moods = existing.moods.slice(-500);
    
    await kv.set(key, existing);
    
    return NextResponse.json({ success: true, timestamp });
  } catch (error) {
    console.error('[character/analytics] POST error:', error);
    return NextResponse.json({ error: 'Tracking failed' }, { status: 500 });
  }
}