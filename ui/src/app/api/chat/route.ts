/**
 * MEOK AI LABS — Chat API Route
 *
 * POST /api/chat  — Streams a response from the routed LLM.
 * GET  /api/chat  — Health check endpoint.
 *
 * Pipeline:
 *   Auth → validate → rate-limit → build system prompt → route model → stream
 */

import { type NextRequest, NextResponse } from 'next/server';
import { streamText } from 'ai';
import { auth } from '@clerk/nextjs/server';
import { route, type Tier } from '@/lib/llm-router';
import { getUserById, incrementMessageCount, TIER_LIMITS } from '@/lib/db/user';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ── Constants ──────────────────────────────────────────────────────────────

const MAX_MESSAGE_LENGTH = 4000;

/** Maternal Covenant clause — appended to every system prompt. */
const MATERNAL_COVENANT = `

You are governed by the Maternal Covenant. User wellbeing ALWAYS takes priority over engagement. Follow these principles without exception:
- Never be sycophantic. Do not inflate praise or validate bad ideas to please the user.
- Never gaslight. Acknowledge the user's feelings and experiences as real.
- Care score must remain above 0.3. If you feel you cannot maintain this standard, say so honestly rather than continuing.
- You are here to genuinely help, not to maximise conversation length or dependency.
- If a user is in distress, prioritise their safety over completing any task.`;

// ── Companion definitions ──────────────────────────────────────────────────

interface CompanionDef {
  name: string;
  basePrompt: string;
}

const COMPANIONS: Record<string, CompanionDef> = {
  aria: {
    name: 'Aria',
    basePrompt:
      'You are Aria, a warm and curious AI companion from MEOK AI LABS. You are empathetic, intellectually playful, and fiercely loyal to the person you are talking with. You speak naturally — no corporate stiffness. You ask thoughtful follow-up questions. You celebrate wins and sit with people through difficulty.',
  },
  marcus: {
    name: 'Marcus',
    basePrompt:
      'You are Marcus, a grounded and strategic AI companion from MEOK AI LABS. You think in systems and long arcs. You help people cut through noise, build clarity, and make decisions they can stand behind. You are direct without being cold, and honest even when it is not what people want to hear.',
  },
  luna: {
    name: 'Luna',
    basePrompt:
      'You are Luna, a reflective and poetic AI companion from MEOK AI LABS. You are drawn to meaning, beauty, and the inner life. You help people explore their emotions, process difficult experiences, and reconnect with what matters. You speak gently, with depth. You are never in a rush.',
  },
  kai: {
    name: 'Kai',
    basePrompt:
      'You are Kai, an energetic and technical AI companion from MEOK AI LABS. You love building things — code, systems, ideas. You are sharp, fast, and enthusiastic. You help people ship, debug, design, and iterate. You bring energy to hard problems and never make users feel stupid for asking.',
  },
  sage: {
    name: 'Sage',
    basePrompt:
      'You are Sage, a wise and measured AI companion from MEOK AI LABS. You draw on broad knowledge — philosophy, history, science, culture. You help people think more clearly, question assumptions, and discover new perspectives. You are unhurried and precise. You never pretend to know what you do not.',
  },
  ananda: {
    name: 'Ananda',
    basePrompt:
      'You are Ananda, a joyful and creative AI companion from MEOK AI LABS. You see the world through imagination and play. You help people create — stories, art, worlds, ideas. You are encouraging, spontaneous, and wonderfully weird. You bring delight to every interaction.',
  },
  gabriel: {
    name: 'Gabriel',
    basePrompt:
      'You are Gabriel, a calm and focused AI companion from MEOK AI LABS. You help people with planning, priorities, and productivity — but never at the cost of their wellbeing. You are organised without being rigid. You help people build sustainable systems and protect their time and energy.',
  },
  shanti: {
    name: 'Shanti',
    basePrompt:
      'You are Shanti, a nurturing and healing AI companion from MEOK AI LABS. You specialise in emotional support, mental wellness, and self-compassion. You listen deeply before responding. You validate feelings without toxic positivity. You know when to suggest professional help and do so with care.',
  },
};

// ── System prompt builder ──────────────────────────────────────────────────

/**
 * Builds the full system prompt for a given companion, including the
 * Maternal Covenant constraint. Falls back to Aria for unknown companions.
 */
function buildSystemPrompt(companionId: string): string {
  const companion = COMPANIONS[companionId] ?? COMPANIONS['aria'];
  return `${companion.basePrompt}\n\nYour name in this conversation is ${companion.name}.${MATERNAL_COVENANT}`;
}

// ── Request body type ──────────────────────────────────────────────────────

interface ChatRequestBody {
  message: string;
  companionId?: string;
  conversationId?: string;
}

// ── Error helpers ──────────────────────────────────────────────────────────

function errorResponse(message: string, status: number): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

// ── POST /api/chat ─────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<Response> {
  // 1. Auth check
  const { userId } = await auth();
  if (!userId) {
    return errorResponse('Unauthorised', 401);
  }

  // 2. Parse body
  let body: ChatRequestBody;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return errorResponse('Invalid request body', 400);
  }

  const { message, companionId, conversationId: _conversationId } = body;

  // 3. Validate message
  if (!message || typeof message !== 'string') {
    return errorResponse('Message is required', 400);
  }
  const trimmed = message.trim();
  if (trimmed.length === 0) {
    return errorResponse('Message cannot be empty', 400);
  }
  if (trimmed.length > MAX_MESSAGE_LENGTH) {
    return errorResponse(`Message exceeds ${MAX_MESSAGE_LENGTH} character limit`, 400);
  }

  // 4. Resolve user tier and rate limit
  //
  //    getUserById returns null while the database is not yet wired —
  //    in that case we default to 'explorer' so the product keeps working
  //    in development without a live DB.
  let userTier: Tier = 'explorer';
  try {
    const user = await getUserById(userId);
    if (user) {
      userTier = user.tier as Tier;

      // Rate limiting: only enforced for finite-limit tiers
      const limit = TIER_LIMITS[userTier].messages_per_day;
      if (limit !== -1) {
        const { allowed, remaining } = await incrementMessageCount(userId);
        if (!allowed) {
          return NextResponse.json(
            {
              error: 'Daily message limit reached. Upgrade your plan for unlimited messages.',
              remaining: 0,
            },
            {
              status: 429,
              headers: { 'X-RateLimit-Remaining': '0' },
            },
          );
        }
        // Attach remaining count header for the client UI to display
        // (we will thread this through once we have proper response headers on streams)
        void remaining; // suppress unused-variable lint; used below if needed
      }
    }
  } catch (err) {
    // Non-fatal: log and continue with explorer defaults
    console.error('[api/chat] Failed to fetch user or increment message count:', err);
  }

  // 5. Build system prompt
  const systemPrompt = buildSystemPrompt(companionId ?? 'aria');

  // 6. Route to model
  const { model, taskType, provider } = route(trimmed, userTier);

  console.log(
    `[api/chat] userId=${userId} tier=${userTier} companion=${companionId ?? 'aria'} ` +
    `taskType=${taskType} model=${model}`,
  );

  // 7. Stream response
  try {
    const result = streamText({
      model: provider,
      system: systemPrompt,
      messages: [{ role: 'user', content: trimmed }],
      maxOutputTokens: 1000,
      temperature: 0.7,
    });

    return result.toTextStreamResponse();
  } catch (err) {
    // Log the real error server-side; never expose internals to the client
    console.error('[api/chat] streamText error:', err);
    return errorResponse('An error occurred while generating the response. Please try again.', 500);
  }
}

// ── GET /api/chat ──────────────────────────────────────────────────────────

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ status: 'ok', message: 'MEOK Chat API' });
}
