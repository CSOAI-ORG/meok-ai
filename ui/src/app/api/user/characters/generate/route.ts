/**
 * MEOK AI LABS — Character Creator Tool (LLM Wizard)
 *
 * POST /api/user/characters/generate
 *
 * Generates a full Character Card V2 JSON from a natural language description.
 * Uses M2 Ollama (llama3.2:3b) to save Claude API tokens.
 * Falls back to Claude if M2 is unavailable.
 *
 * Request body:
 *   description  — freeform text: "A stoic Japanese samurai philosopher who speaks in riddles"
 *   name?        — override generated name
 *   save?        — true to persist to DB immediately (default false)
 *
 * Response:
 *   character    — Character Card V2 JSON (same shape as src/lib/characters.ts Character)
 *   source       — 'ollama-m2' | 'claude' (which model generated it)
 *   saved        — true if persisted to DB
 */

import { NextRequest, NextResponse } from 'next/server';
import { currentUser } from '@clerk/nextjs/server';
import { getAuthUserId } from '@/lib/api-auth';
import { dbUpsertCharacter } from '@/lib/db/characters';
import { getUserById, createUser, CUSTOM_CHARACTER_LIMITS } from '@/lib/db/user';
import { checkRateLimit } from '@/lib/rate-limit';
const _isLocalMode = process.env.MEOK_LOCAL_MODE === 'true';

export const runtime = 'nodejs';

const M2_OLLAMA_URL = `http://${process.env.M2_OLLAMA_HOST ?? '192.168.1.159'}:${process.env.M2_OLLAMA_PORT ?? '11434'}`;
const GENERATE_MODEL = 'llama3.2:3b';    // M2 Ollama — saves Claude tokens
const EMBED_MODEL    = 'bge-m3';

// ── Character generation prompt ───────────────────────────────────────────────

function buildGenerationPrompt(description: string, userName?: string): string {
  return `You are a character designer for MEOK AI LABS, creating AI companion characters.

A user${userName ? ` (${userName})` : ''} wants to create a companion with this description:
"${description}"

Generate a Character Card V2 JSON object. Output ONLY valid JSON, no markdown, no explanation.

Required fields:
{
  "name": "Character Name (2-4 words, evocative)",
  "title": "Short title/role (3-6 words)",
  "archetype": "ONE OF: challenger|nurturer|explorer|sage|seeker|creator|trickster|rebel|innocent",
  "emoji": "ONE relevant emoji",
  "tagline": "One sentence, under 15 words, captures their essence",
  "systemPrompt": "Full LLM system prompt (100-200 words). Include: name, personality, speaking style, values, how they respond to users. Start with 'You are [name]...'",
  "personality": ["trait1", "trait2", "trait3", "trait4", "trait5"],
  "voiceStyle": "ONE OF: formal|casual|playful|academic|poetic|empathetic|direct|mystical|warm|intense",
  "communicationStyle": "Short description of how they communicate (10-20 words)",
  "tags": ["tag1", "tag2", "tag3"],
  "dimensions": {
    "warmth": 0.0-1.0,
    "energy": 0.0-1.0,
    "whimsy": 0.0-1.0,
    "edge": 0.0-1.0,
    "complexity": 0.0-1.0
  },
  "color": "#hexcolor (choose a color matching the character's energy)",
  "dynamism": 0.85-0.98,
  "suggestedTier": "explorer|sovereign|family"
}

Make the character authentic, memorable, and true to the user's description.
Output ONLY the JSON object:`;
}

// ── M2 Ollama LLM call ────────────────────────────────────────────────────────

async function generateWithOllama(prompt: string): Promise<{ text: string; available: boolean }> {
  try {
    const res = await fetch(`${M2_OLLAMA_URL}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: GENERATE_MODEL,
        prompt,
        stream: false,
        options: {
          temperature: 0.7,
          top_p: 0.9,
          num_predict: 800,
        },
      }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!res.ok) return { text: '', available: false };
    const data = await res.json() as { response: string };
    return { text: data.response ?? '', available: true };
  } catch {
    return { text: '', available: false };
  }
}

// ── Claude fallback ───────────────────────────────────────────────────────────

async function generateWithClaude(prompt: string): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) throw new Error('ANTHROPIC_API_KEY not configured');

  const res = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5',  // Cheapest Claude for generation
      max_tokens: 1024,
      messages: [{ role: 'user', content: prompt }],
    }),
    signal: AbortSignal.timeout(30_000),
  });

  if (!res.ok) throw new Error(`Anthropic API error: ${res.status}`);
  const data = await res.json() as { content: Array<{ text: string }> };
  return data.content?.[0]?.text ?? '';
}

// ── Parse LLM output → Character Card ────────────────────────────────────────

function parseCharacterCard(raw: string, userId: string): Record<string, unknown> | null {
  // Strip markdown code fences if present
  const cleaned = raw
    .replace(/^```json\s*/i, '')
    .replace(/^```\s*/i, '')
    .replace(/```\s*$/i, '')
    .trim();

  // Find first { and last } to extract JSON
  const start = cleaned.indexOf('{');
  const end   = cleaned.lastIndexOf('}');
  if (start === -1 || end === -1) return null;

  try {
    const parsed = JSON.parse(cleaned.slice(start, end + 1));

    // Validate required fields
    const required = ['name', 'archetype', 'systemPrompt', 'personality'];
    for (const field of required) {
      if (!parsed[field]) return null;
    }

    // Sanitise + enforce types
    const VALID_ARCHETYPES = ['challenger', 'nurturer', 'explorer', 'sage', 'seeker',
                              'creator', 'trickster', 'rebel', 'innocent'];
    if (!VALID_ARCHETYPES.includes(parsed.archetype)) {
      parsed.archetype = 'explorer';  // Safe default
    }

    // Generate unique ID
    parsed.id = `custom-${userId.slice(-8)}-${Date.now()}`;
    parsed.license = 'user-created';
    parsed.tier = parsed.suggestedTier ?? 'explorer';
    delete parsed.suggestedTier;

    // Ensure arrays
    if (!Array.isArray(parsed.personality)) parsed.personality = [parsed.personality];
    if (!Array.isArray(parsed.tags)) parsed.tags = ['custom'];

    return parsed;
  } catch {
    return null;
  }
}

// ── Embedding ─────────────────────────────────────────────────────────────────

async function getEmbedding(character: Record<string, unknown>): Promise<number[] | null> {
  const text = [
    character.name,
    character.title,
    character.tagline,
    ...(character.personality as string[] ?? []),
    ...(character.tags as string[] ?? []),
  ].filter(Boolean).join('. ');

  try {
    const res = await fetch(`${M2_OLLAMA_URL}/api/embeddings`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: EMBED_MODEL, prompt: text }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) return null;
    const data = await res.json() as { embedding: number[] };
    return data.embedding?.length === 1024 ? data.embedding : null;
  } catch {
    return null;
  }
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  const userId = await getAuthUserId();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // Rate limit — character generation is expensive
  const rateLimitResult = checkRateLimit(userId, 'explorer');
  if (!rateLimitResult.allowed) {
    return NextResponse.json({ error: 'Rate limit exceeded' }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }

  const description = typeof body.description === 'string' ? body.description.trim() : '';
  const nameOverride = typeof body.name === 'string' ? body.name.trim() : undefined;
  const shouldSave   = body.save === true;

  if (!description || description.length < 10) {
    return NextResponse.json(
      { error: 'description must be at least 10 characters' },
      { status: 400 }
    );
  }

  if (description.length > 1000) {
    return NextResponse.json(
      { error: 'description must be under 1000 characters' },
      { status: 400 }
    );
  }

  // Check tier limits if saving
  if (shouldSave) {
    let user = await getUserById(userId);
    if (!user) {
      const clerkUser = _isLocalMode ? null : await currentUser();
      if (clerkUser) {
        user = await createUser(
          userId,
          clerkUser.emailAddresses?.[0]?.emailAddress ?? '',
          clerkUser.fullName ?? null
        );
      }
    }
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // Import getCustomCharacters inline to avoid circular deps
    const { getCustomCharacters } = await import('@/lib/db/user');
    const existing = await getCustomCharacters(userId);
    const charLimit = CUSTOM_CHARACTER_LIMITS[user.tier];
    if (existing.length >= charLimit) {
      return NextResponse.json(
        {
          error: `Your ${user.tier} tier allows up to ${charLimit} custom characters. Upgrade to create more.`,
          limit: charLimit,
          current: existing.length,
        },
        { status: 403 }
      );
    }
  }

  // ── Generate character card ────────────────────────────────────────────────

  const prompt = buildGenerationPrompt(description, nameOverride);
  let rawOutput: string;
  let source: 'ollama-m2' | 'claude';

  // Try M2 Ollama first (saves tokens)
  const { text: ollamaText, available } = await generateWithOllama(prompt);

  if (available && ollamaText) {
    rawOutput = ollamaText;
    source = 'ollama-m2';
  } else {
    // Fallback to Claude
    try {
      rawOutput = await generateWithClaude(prompt);
      source = 'claude';
    } catch (err) {
      return NextResponse.json(
        { error: 'Character generation failed. Please try again.' },
        { status: 503 }
      );
    }
  }

  // Parse the LLM output
  const characterCard = parseCharacterCard(rawOutput, userId);
  if (!characterCard) {
    return NextResponse.json(
      { error: 'Failed to parse character card. Please rephrase your description.' },
      { status: 422 }
    );
  }

  // Apply name override if provided
  if (nameOverride) {
    characterCard.name = nameOverride;
  }

  let saved = false;

  // ── Save to DB ────────────────────────────────────────────────────────────
  if (shouldSave) {
    try {
      // Get personality embedding from M2 bge-m3
      const embedding = await getEmbedding(characterCard);

      await dbUpsertCharacter({
        id:                 characterCard.id as string,
        name:               characterCard.name as string,
        title:              characterCard.title as string,
        archetype:          characterCard.archetype as string,
        emoji:              characterCard.emoji as string,
        color:              characterCard.color as string,
        tagline:            characterCard.tagline as string,
        systemPrompt:       characterCard.systemPrompt as string,
        personality:        characterCard.personality as string[],
        tags:               characterCard.tags as string[],
        tier:               'explorer',
        license:            'user-created',
        voiceStyle:         characterCard.voiceStyle as string,
        communicationStyle: characterCard.communicationStyle as string,
        dynamism:           (characterCard.dynamism as number) ?? 0.95,
        dimensions:         characterCard.dimensions as Record<string, number>,
        personalityEmbedding: embedding ?? undefined,
        creatorUserId:      userId,
        isMarketplace:      false,
      });
      saved = true;
    } catch (err) {
      console.error('[character/generate] DB save failed:', err);
      // Return the character card even if DB save fails
    }
  }

  return NextResponse.json({
    character: characterCard,
    source,
    saved,
    description,
  }, { status: 201 });
}
