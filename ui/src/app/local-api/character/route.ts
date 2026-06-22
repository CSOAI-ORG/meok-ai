import { type NextRequest, NextResponse } from 'next/server';
import { randomUUID } from 'crypto';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export interface CreatedCharacter {
  id: string;
  name: string;
  archetype: string;
  role: string;
  personality: string;
  mandate: string;
  color: string;
  createdAt: string;
}

interface CreateCharacterBody {
  name: string;
  archetype: string;
  role: string;
  personality: string;
  mandate: string;
}

const ARCHETYPES = [
  'sage',
  'nurturer',
  'explorer',
  'creator',
  'guardian',
  'trickster',
  'rebel',
  'protector',
  'challenger',
  'diplomat',
  'strategist',
  'caretaker',
];

const PALETTE = [
  '#3b82f6',
  '#8b5cf6',
  '#10b981',
  '#f59e0b',
  '#ef4444',
  '#06b6d4',
  '#eab308',
  '#ec4899',
  '#14b8a6',
  '#6366f1',
  '#f97316',
  '#64748b',
];

// ── In-memory fallback storage ───────────────────────────────────────────────
const memoryCharacters = new Map<string, CreatedCharacter>();

// ── Upstash Redis integration ────────────────────────────────────────────────
function upstashEnabled(): boolean {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function getUpstashRedis() {
  if (!upstashEnabled()) return null;
  try {
    const { Redis } = await import('@upstash/redis');
    return new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    });
  } catch (err) {
    console.error('[character] Upstash init error:', err);
    return null;
  }
}

const CHARACTER_HASH_KEY = 'character:council';

async function persistToUpstash(character: CreatedCharacter): Promise<boolean> {
  const redis = await getUpstashRedis();
  if (!redis) return false;
  try {
    await redis.hset(CHARACTER_HASH_KEY, { [character.id]: JSON.stringify(character) });
    return true;
  } catch (err) {
    console.error('[character] Upstash persist error:', err);
    return false;
  }
}

function sanitizeString(input: string, maxLength: number): string {
  return input.trim().slice(0, maxLength);
}

function pickColor(archetype: string): string {
  let hash = 0;
  for (let i = 0; i < archetype.length; i++) {
    hash = archetype.charCodeAt(i) + ((hash << 5) - hash);
  }
  return PALETTE[Math.abs(hash) % PALETTE.length];
}

/**
 * POST /api/character
 *
 * Creates a new sovereign character and saves it to the council store.
 * Uses Upstash Redis when configured; otherwise falls back to in-memory Map.
 */
export async function POST(req: NextRequest): Promise<Response> {
  let body: CreateCharacterBody;
  try {
    body = (await req.json()) as CreateCharacterBody;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const { name, archetype, role, personality, mandate } = body;

  if (!name?.trim() || !archetype?.trim() || !role?.trim()) {
    return NextResponse.json(
      { error: 'name, archetype, and role are required' },
      { status: 400 },
    );
  }

  const archetypeClean = sanitizeString(archetype, 40).toLowerCase();
  if (!ARCHETYPES.includes(archetypeClean)) {
    return NextResponse.json(
      { error: `archetype must be one of: ${ARCHETYPES.join(', ')}` },
      { status: 400 },
    );
  }

  const character: CreatedCharacter = {
    id: `char_${randomUUID().slice(0, 8)}_${Date.now().toString(36)}`,
    name: sanitizeString(name, 60),
    archetype: archetypeClean,
    role: sanitizeString(role, 80),
    personality: sanitizeString(personality || '', 500),
    mandate: sanitizeString(mandate || '', 500),
    color: pickColor(archetypeClean),
    createdAt: new Date().toISOString(),
  };

  memoryCharacters.set(character.id, character);
  await persistToUpstash(character);

  return NextResponse.json({ character }, { status: 201 });
}

/**
 * GET /api/character
 *
 * Lists characters saved to the council store.
 */
export async function GET(): Promise<Response> {
  const redis = await getUpstashRedis();
  if (redis) {
    try {
      const records = (await redis.hgetall(CHARACTER_HASH_KEY)) as Record<string, string> | null;
      const characters = Object.values(records ?? {})
        .map((raw) => {
          try {
            return JSON.parse(raw) as CreatedCharacter;
          } catch {
            return null;
          }
        })
        .filter(Boolean);
      return NextResponse.json({ characters });
    } catch (err) {
      console.error('[character] Upstash list error:', err);
    }
  }

  return NextResponse.json({ characters: Array.from(memoryCharacters.values()) });
}
