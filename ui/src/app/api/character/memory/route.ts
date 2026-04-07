/**
 * MEOK AI LABS — Character Memory System
 * 
 * Long-term memory storage for character interactions
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export interface CharacterMemory {
  id: string;
  characterId: string;
  userId: string;
  content: string;
  type: 'conversation' | 'fact' | 'emotion' | 'preference' | 'milestone';
  importance: number;
  embedding?: number[];
  createdAt: string;
  lastAccessed?: string;
  accessCount: number;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const userId = searchParams.get('userId') || 'default';
  const type = searchParams.get('type');
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '50', 10), 200);
  const important = searchParams.get('important') === 'true';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const key = `meok:memory:${characterId}:${userId}`;
    const memories = (await kv.get<CharacterMemory[]>(key)) || [];
    
    let filtered = memories;
    if (type) {
      filtered = filtered.filter(m => m.type === type);
    }
    if (important) {
      filtered = filtered.filter(m => m.importance >= 0.7);
    }
    
    const sorted = filtered
      .sort((a, b) => b.importance - a.importance)
      .slice(0, limit);
    
    return NextResponse.json({
      characterId,
      userId,
      memories: sorted,
      total: filtered.length,
    });
  } catch (error) {
    console.error('[character/memory] error:', error);
    return NextResponse.json({ error: 'Failed to fetch memories' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, userId = 'default', content, type = 'conversation', importance = 0.5 } = body;
    
    if (!characterId || !content) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const memory: CharacterMemory = {
      id: `mem_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      characterId,
      userId,
      content,
      type: type as CharacterMemory['type'],
      importance: Math.max(0, Math.min(1, importance)),
      createdAt: new Date().toISOString(),
      accessCount: 0,
    };
    
    const key = `meok:memory:${characterId}:${userId}`;
    const existing = (await kv.get<CharacterMemory[]>(key)) || [];
    
    existing.push(memory);
    
    const sorted = existing
      .sort((a, b) => b.importance - a.importance)
      .slice(0, 1000);
    
    await kv.set(key, sorted);
    
    return NextResponse.json({
      success: true,
      memory: {
        id: memory.id,
        type: memory.type,
        importance: memory.importance,
        createdAt: memory.createdAt,
      },
    });
  } catch (error) {
    console.error('[character/memory] POST error:', error);
    return NextResponse.json({ error: 'Failed to store memory' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  try {
    const { searchParams } = new URL(req.url);
    const characterId = searchParams.get('characterId');
    const userId = searchParams.get('userId') || 'default';
    const memoryId = searchParams.get('memoryId');
    const clearAll = searchParams.get('clear') === 'all';
    
    if (!characterId) {
      return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
    }
    
    if (clearAll) {
      const key = `meok:memory:${characterId}:${userId}`;
      await kv.del(key);
      return NextResponse.json({ success: true, message: 'All memories cleared' });
    }
    
    if (memoryId) {
      const key = `meok:memory:${characterId}:${userId}`;
      const existing = (await kv.get<CharacterMemory[]>(key)) || [];
      const filtered = existing.filter(m => m.id !== memoryId);
      await kv.set(key, filtered);
      return NextResponse.json({ success: true, message: 'Memory deleted' });
    }
    
    return NextResponse.json({ error: 'Specify memoryId or clear=all' }, { status: 400 });
  } catch (error) {
    console.error('[character/memory] DELETE error:', error);
    return NextResponse.json({ error: 'Failed to delete memory' }, { status: 500 });
  }
}

export async function searchMemories(characterId: string, userId: string, query: string, limit = 10): Promise<CharacterMemory[]> {
  const key = `meok:memory:${characterId}:${userId}`;
  const memories = (await kv.get<CharacterMemory[]>(key)) || [];
  
  const queryLower = query.toLowerCase();
  const queryTokens = queryLower.split(/\s+/);
  
  const scored = memories.map(mem => {
    let score = 0;
    const contentLower = mem.content.toLowerCase();
    
    for (const token of queryTokens) {
      if (contentLower.includes(token)) {
        score += mem.importance;
      }
    }
    
    return { memory: mem, score };
  });
  
  return scored
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(r => r.memory);
}