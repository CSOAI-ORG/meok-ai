/**
 * MEOK AI LABS — "Explain This Simply" API
 *
 * POST /api/explain — Takes text, returns plain English simplification.
 *
 * From MASTER_CLAUDE_CODE_TASKS:
 * "Small button on every feature description. On click: calls MEOK API
 *  to rephrase the section in plain English."
 *
 * - No auth required (public feature that demonstrates the product)
 * - Cached in-memory (same input → same output, no repeat LLM calls)
 * - Rate limited: 10 calls per minute per IP
 */

import { type NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { checkRateLimit } from '@/lib/rate-limit';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ── Cache ──────────────────────────────────────────────────────────────────

const cache = new Map<string, string>();

function simpleHash(str: string): string {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash |= 0;
  }
  return String(hash);
}

// ── Rate Limiting ──────────────────────────────────────────────────────────

const rateLimits = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 10;
const WINDOW_MS = 60_000;

function checkRateLimitLocal(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimits.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return true;
  }

  if (entry.count >= MAX_REQUESTS) return false;
  entry.count++;
  return true;
}

// ── Route Handler ──────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<NextResponse> {
  // Rate limit by IP (local per-minute check)
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? 'unknown';
  if (!checkRateLimitLocal(ip)) {
    return NextResponse.json(
      { error: 'Too many requests. Try again in a minute.' },
      { status: 429 },
    );
  }

  // Rate limit by IP (daily token bucket)
  try {
    const dailyRl = checkRateLimit(ip, 'explorer');
    if (!dailyRl.allowed) {
      return NextResponse.json(
        { error: 'Daily request limit reached. Try again tomorrow.', resetAt: dailyRl.resetAt },
        { status: 429, headers: { 'X-RateLimit-Remaining': '0', 'X-RateLimit-Reset': String(dailyRl.resetAt) } },
      );
    }
  } catch (err) {
    // Non-fatal: if token bucket fails, continue with existing IP rate limit
    console.error('[api/explain] Daily rate limit check failed:', err);
  }

  // Parse body
  let text: string;
  try {
    const body = await req.json();
    text = body?.text;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!text || typeof text !== 'string' || text.trim().length === 0) {
    return NextResponse.json({ error: 'Missing or empty "text" field' }, { status: 400 });
  }

  const trimmed = text.trim().slice(0, 2000); // Cap input length
  const key = simpleHash(trimmed);

  // Check cache
  const cached = cache.get(key);
  if (cached) {
    return NextResponse.json({ simplified: cached, cached: true });
  }

  // Generate simplification via LLM
  try {
    // Use Cerebras (free, fast) for simple text tasks
    const cerebrasKey = process.env.CEREBRAS_API_KEY;
    const provider = cerebrasKey
      ? createOpenAI({ baseURL: 'https://api.cerebras.ai/v1', apiKey: cerebrasKey })('llama3.1-8b')
      : createOpenAI({ apiKey: process.env.OPENAI_API_KEY ?? '' })('gpt-4o-mini');

    const result = await generateText({
      model: provider,
      system: 'You are a plain language translator. Rewrite the following text so a 12-year-old could understand it. Keep it under 2 sentences. No jargon. No metaphors. Be direct and clear.',
      prompt: trimmed,
      maxOutputTokens: 150,
      temperature: 0.3,
    });

    const simplified = result.text.trim();

    // Cache result
    cache.set(key, simplified);

    // Prevent cache from growing unbounded
    if (cache.size > 500) {
      const firstKey = cache.keys().next().value;
      if (firstKey) cache.delete(firstKey);
    }

    return NextResponse.json({ simplified, cached: false });
  } catch (err) {
    console.error('[api/explain] LLM generation failed:', err);
    return NextResponse.json(
      { error: 'Failed to simplify text. Please try again.' },
      { status: 500 },
    );
  }
}
