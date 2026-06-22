/**
 * MEOK AI LABS — AI-Powered Character Search
 * 
 * Uses embeddings and semantic similarity for better character discovery
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';
import { CHARACTERS, getAllCharacters } from '@/lib/characters';

export const runtime = 'nodejs';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q');
  const semantic = searchParams.get('semantic') === 'true';
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '10', 10), 50);
  
  if (!query) {
    return NextResponse.json({ error: 'Missing query' }, { status: 400 });
  }
  
  try {
    const results = semantic 
      ? await semanticSearch(query, limit)
      : keywordSearch(query, limit);
    
    return NextResponse.json({
      query,
      semantic,
      results,
      total: results.length,
    });
  } catch (error) {
    console.error('[character/search/ai] error:', error);
    return NextResponse.json({ error: 'Search failed' }, { status: 500 });
  }
}

function keywordSearch(query: string, limit: number) {
  const chars = getAllCharacters();
  const queryLower = query.toLowerCase();
  const queryTokens = queryLower.split(/\s+/).filter(Boolean);
  
  const scored = chars.map(char => {
    let score = 0;
    const name = char.name.toLowerCase();
    const title = (char.title || '').toLowerCase();
    const tagline = (char.tagline || '').toLowerCase();
    const tags = (char.tags || []).join(' ').toLowerCase();
    const personality = (char.personality || []).join(' ').toLowerCase();
    
    for (const token of queryTokens) {
      if (name.includes(token)) score += 10;
      if (title.includes(token)) score += 5;
      if (tagline.includes(token)) score += 3;
      if (tags.includes(token)) score += 2;
      for (const p of personality.split(' ')) if (p.includes(token)) score += 1;
    }
    
    return { character: char, score };
  });
  
  return scored
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(r => ({
      id: r.character.id,
      name: r.character.name,
      emoji: r.character.emoji,
      tagline: r.character.tagline,
      archetype: r.character.archetype,
      matchScore: r.score,
    }));
}

async function semanticSearch(query: string, limit: number) {
  const queryKey = `meok:embeddings:query:${query.slice(0, 50)}`;
  let queryEmbedding = await kv.get<number[]>(queryKey);
  
  if (!queryEmbedding) {
    queryEmbedding = await generateEmbedding(query);
    await kv.set(queryKey, queryEmbedding, { ex: 3600 });
  }
  
  const chars = getAllCharacters();
  const results = [];
  
  for (const char of chars) {
    const charKey = `meok:embeddings:char:${char.id}`;
    let charEmbedding = await kv.get<number[]>(charKey);
    
    if (!charEmbedding) {
      const text = `${char.name} ${char.title} ${char.tagline} ${(char.personality || []).join(' ')}`;
      charEmbedding = await generateEmbedding(text);
      await kv.set(charKey, charEmbedding, { ex: 86400 });
    }
    
    const similarity = cosineSimilarity(queryEmbedding, charEmbedding);
    results.push({ character: char, similarity });
  }
  
  return results
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit)
    .map(r => ({
      id: r.character.id,
      name: r.character.name,
      emoji: r.character.emoji,
      tagline: r.character.tagline,
      archetype: r.character.archetype,
      matchScore: Math.round(r.similarity * 100) / 100,
    }));
}

async function generateEmbedding(text: string): Promise<number[]> {
  const simpleHash = (str: string): number => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return hash;
  };
  
  const words = text.toLowerCase().split(/\s+/).filter(Boolean);
  const embedding = new Array(384).fill(0);
  
  words.forEach((word, i) => {
    const hash = Math.abs(simpleHash(word));
    for (let j = 0; j < embedding.length; j++) {
      embedding[j] += Math.sin((hash * (j + 1)) / (i + 1)) * 0.1;
    }
  });
  
  const magnitude = Math.sqrt(embedding.reduce((sum, v) => sum + v * v, 0));
  if (magnitude > 0) {
    for (let i = 0; i < embedding.length; i++) {
      embedding[i] /= magnitude;
    }
  }
  
  return embedding;
}

function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) return 0;
  
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  
  if (normA === 0 || normB === 0) return 0;
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}