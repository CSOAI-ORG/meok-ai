/**
 * MEOK AI LABS — Character Relationship System
 * 
 * Tracks relationships between characters and with users
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

export type RelationshipType = 'friend' | 'rival' | 'mentor' | 'student' | 'partner' | 'family' | 'colleague' | 'stranger';

export interface CharacterRelationship {
  id: string;
  characterId: string;
  targetId: string;
  type: RelationshipType;
  strength: number;
  history: Array<{
    type: string;
    note: string;
    timestamp: string;
  }>;
  lastInteraction?: string;
  createdAt: string;
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const characterId = searchParams.get('characterId');
  const targetId = searchParams.get('targetId');
  const userId = searchParams.get('userId') || 'default';
  
  if (!characterId) {
    return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
  }
  
  try {
    const relationships = await getRelationships(characterId, userId);
    
    if (targetId) {
      const rel = relationships.find(r => r.targetId === targetId);
      return NextResponse.json(rel || null);
    }
    
    const enriched = await Promise.all(
      relationships.map(async r => {
        const targetChar = await kv.get<{ name: string; emoji: string; archetype: string }>(`meok:char:${r.targetId}`);
        return {
          ...r,
          targetName: targetChar?.name || r.targetId,
          targetEmoji: targetChar?.emoji || '❓',
          targetArchetype: targetChar?.archetype || 'unknown',
        };
      })
    );
    
    return NextResponse.json({
      characterId,
      relationships: enriched,
    });
  } catch (error) {
    console.error('[character/relationships] error:', error);
    return NextResponse.json({ error: 'Failed to fetch relationships' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { characterId, targetId, userId = 'default', type, action } = body;
    
    if (!characterId || !targetId) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    
    const relationships = await getRelationships(characterId, userId);
    const existingIndex = relationships.findIndex(r => r.targetId === targetId);
    
    if (action === 'create' || action === 'update') {
      const newRel: CharacterRelationship = existingIndex >= 0
        ? { ...relationships[existingIndex], type: type || relationships[existingIndex].type }
        : {
            id: `rel_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`,
            characterId,
            targetId,
            type: type || 'stranger',
            strength: type === 'stranger' ? 0.1 : 0.5,
            history: [],
            createdAt: new Date().toISOString(),
          };
      
      if (existingIndex >= 0) {
        relationships[existingIndex] = newRel;
      } else {
        relationships.push(newRel);
      }
      
      await saveRelationships(characterId, userId, relationships);
      
      return NextResponse.json({
        success: true,
        relationship: newRel,
      });
    }
    
    if (action === 'interact') {
      if (existingIndex >= 0) {
        const rel = relationships[existingIndex];
        rel.strength = Math.min(1, rel.strength + 0.05);
        rel.lastInteraction = new Date().toISOString();
        rel.history.push({
          type: 'interaction',
          note: body.note || 'Interacted',
          timestamp: new Date().toISOString(),
        });
        rel.history = rel.history.slice(-20);
        
        await saveRelationships(characterId, userId, relationships);
        
        return NextResponse.json({
          success: true,
          relationship: rel,
        });
      }
      
      return NextResponse.json({ error: 'Relationship not found' }, { status: 404 });
    }
    
    if (action === 'delete' && existingIndex >= 0) {
      relationships.splice(existingIndex, 1);
      await saveRelationships(characterId, userId, relationships);
      return NextResponse.json({ success: true, message: 'Relationship removed' });
    }
    
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    console.error('[character/relationships] POST error:', error);
    return NextResponse.json({ error: 'Failed to update relationship' }, { status: 500 });
  }
}

async function getRelationships(characterId: string, userId: string): Promise<CharacterRelationship[]> {
  const key = `meok:relationships:${characterId}:${userId}`;
  return (await kv.get<CharacterRelationship[]>(key)) || [];
}

async function saveRelationships(characterId: string, userId: string, relationships: CharacterRelationship[]) {
  const key = `meok:relationships:${characterId}:${userId}`;
  await kv.set(key, relationships);
}

export async function getCompatibleCharacters(characterId: string): Promise<Array<{ id: string; name: string; emoji: string; relationship: string }>> {
  const COMPATIBLE: Record<string, RelationshipType[]> = {
    challenger: ['rival', 'colleague', 'partner'],
    nurturer: ['mentor', 'friend', 'family'],
    explorer: ['partner', 'friend', 'colleague'],
    sage: ['mentor', 'student', 'friend'],
    creator: ['partner', 'colleague', 'friend'],
    trickster: ['rival', 'friend', 'colleague'],
  };
  
  const archetypes = COMPATIBLE[characterId] || ['friend'];
  const allChars = ['marcus', 'aria', 'luna', 'sage', 'sol', 'echo', 'atlas', 'kai'];
  const targets = allChars.filter(c => c !== characterId);
  
  return targets.slice(0, 4).map(id => ({
    id,
    name: id.charAt(0).toUpperCase() + id.slice(1),
    emoji: '🤖',
    relationship: 'stranger',
  }));
}