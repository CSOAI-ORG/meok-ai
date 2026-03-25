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
import { compressContext } from '@/lib/context-compressor';
import { getUserById, incrementMessageCount, TIER_LIMITS } from '@/lib/db/user';
import { getCharacter } from '@/lib/characters';

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

// ── System prompt builder ──────────────────────────────────────────────────

/**
 * Builds the full system prompt for a given companion, including the
 * Maternal Covenant constraint. Falls back to Aria for unknown companions.
 */
function buildSystemPrompt(companionId: string): string {
  const character = getCharacter(companionId);
  const prompt = character?.systemPrompt ?? getCharacter('aria')!.systemPrompt;
  const name = character?.name ?? 'Aria';
  return `${prompt}\n\nYour name in this conversation is ${name}.${MATERNAL_COVENANT}`;
}

// ── Request body type ──────────────────────────────────────────────────────

interface ChatRequestBody {
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  companionId?: string;
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

  const { messages: incomingMessages, companionId } = body;

  // 3. Validate messages array
  if (!Array.isArray(incomingMessages) || incomingMessages.length === 0) {
    return errorResponse('Messages array is required and must not be empty', 400);
  }

  // Get last user message for task routing
  const lastMessage = incomingMessages.filter(m => m.role === 'user').pop()?.content ?? '';
  const trimmed = lastMessage.trim();
  if (trimmed.length === 0) {
    return errorResponse('No user message found', 400);
  }
  if (trimmed.length > MAX_MESSAGE_LENGTH) {
    return errorResponse(`Message exceeds ${MAX_MESSAGE_LENGTH} character limit`, 400);
  }

  // 4. Guardian scan — block dangerous messages before they reach the LLM
  try {
    const guardianRes = await fetch(new URL('/api/guardian/scan-message', req.url), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: trimmed,
        user_id: userId,
        companion_id: companionId ?? 'aria',
      }),
    });
    if (guardianRes.ok) {
      const scan = await guardianRes.json() as {
        safe_to_deliver?: boolean;
        severity?: string;
        recommended_action?: string;
      };
      if (scan.safe_to_deliver === false) {
        return NextResponse.json(
          {
            error:
              'Your message was flagged by our safety system. If you are in distress, please reach out to a trusted person or call your local crisis helpline.',
            guardian_severity: scan.severity,
            guardian_action: scan.recommended_action,
          },
          { status: 451 },
        );
      }
    }
  } catch (err) {
    // Non-fatal: if guardian is unreachable, log and continue
    console.error('[api/chat] Guardian scan failed — proceeding without scan:', err);
  }

  // 5. Resolve user tier and rate limit
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

  // 6. Build system prompt
  const systemPrompt = buildSystemPrompt(companionId ?? 'aria');

  // 7. Route to model
  const { model, taskType, provider } = route(trimmed, userTier);

  console.log(
    `[api/chat] userId=${userId} tier=${userTier} companion=${companionId ?? 'aria'} ` +
    `taskType=${taskType} model=${model}`,
  );

  // 7b. Compress context if conversation is long (>20 messages)
  let messagesForLLM = incomingMessages;
  if (incomingMessages.length > 20) {
    try {
      const compressed = await compressContext(
        incomingMessages as Array<{ role: 'user' | 'assistant' | 'system'; content: string }>,
        userId,
        { compressThreshold: 20 },
      );
      if (compressed.wasCompressed) {
        messagesForLLM = compressed.messages as typeof incomingMessages;
        console.log(
          `[api/chat] Context compressed: ${compressed.originalCount} → ${compressed.compressedCount} messages`,
        );
      }
    } catch (err) {
      // Non-fatal: if compression fails, use original messages
      console.error('[api/chat] Context compression failed — using full history:', err);
    }
  }

  // 8. Stream response
  try {
    const result = streamText({
      model: provider,
      system: systemPrompt,
      messages: messagesForLLM,
      maxOutputTokens: 2048,
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
