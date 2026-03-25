/**
 * MEOK AI LABS — Research Assistant API
 *
 * POST /api/research — LLM-based research answering.
 * Requires Clerk auth. Routes via llm-router with task type 'research'.
 * MVP: no Perplexity integration yet, pure LLM-based answers.
 */

import { type NextRequest, NextResponse } from 'next/server';
import { generateText } from 'ai';
import { auth } from '@clerk/nextjs/server';
import { route, type Tier } from '@/lib/llm-router';
import { getUserById } from '@/lib/db/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest): Promise<NextResponse> {
  // 1. Auth check
  const { userId } = await auth();
  if (!userId) {
    return NextResponse.json({ error: 'Unauthorised' }, { status: 401 });
  }

  // 2. Parse body
  let query: string;
  try {
    const body = await req.json();
    query = body?.query;
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return NextResponse.json({ error: 'Missing or empty "query" field' }, { status: 400 });
  }

  const trimmed = query.trim().slice(0, 4000);

  // 3. Resolve user tier
  let userTier: Tier = 'explorer';
  try {
    const user = await getUserById(userId);
    if (user) {
      userTier = user.tier as Tier;
    }
  } catch (err) {
    console.error('[api/research] Failed to fetch user tier:', err);
  }

  // 4. Route model for research task
  const { model, taskType, provider } = route(trimmed, userTier);

  console.log(
    `[api/research] userId=${userId} tier=${userTier} model=${model} taskType=${taskType}`,
  );

  // 5. Generate answer (non-streaming)
  try {
    const result = await generateText({
      model: provider,
      system:
        'You are a research assistant for MEOK AI. Provide thorough, well-structured answers ' +
        'to the user\'s research query. Include relevant facts, context, and nuance. ' +
        'Use clear headings and bullet points where appropriate. ' +
        'If you are unsure about something, say so rather than guessing.',
      prompt: trimmed,
      maxOutputTokens: 2048,
      temperature: 0.4,
    });

    return NextResponse.json({
      answer: result.text.trim(),
      model,
      taskType,
    });
  } catch (err) {
    console.error('[api/research] LLM generation failed:', err);
    return NextResponse.json(
      { error: 'Research generation failed. Please try again.' },
      { status: 500 },
    );
  }
}
