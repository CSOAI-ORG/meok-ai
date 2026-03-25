/**
 * MEOK AI LABS — Chat API Route
 *
 * POST /api/chat  — Streams a response from the routed LLM.
 * GET  /api/chat  — Health check endpoint.
 *
 * Pipeline (Phase 9):
 *   Auth → validate → detect language → analyze emotion → guardian scan →
 *   rate-limit → retrieve memory → procedural patterns → build system prompt →
 *   route model → compress → stream → fire-and-forget storage
 */

import { type NextRequest, NextResponse } from 'next/server';
import { streamText } from 'ai';
import { auth } from '@clerk/nextjs/server';
import { route, type Tier, getEffortLevel, getThinkingBudget } from '@/lib/llm-router';
import { compressContext } from '@/lib/context-compressor';
import { getUserById, incrementMessageCount, getUserProfile, updateUserProfile, TIER_LIMITS } from '@/lib/db/user';
import { getCharacter } from '@/lib/characters';
import { analyzeEmotion, formatEmotionContext } from '@/lib/emotion';
import {
  retrieveMemory, buildMemoryContext, storeMemory,
  extractImportance, pushShortTerm,
  analyzeProceduralPatterns, formatProceduralContext,
} from '@/lib/memory';
import { getCrisisResources, formatCrisisResponse } from '@/lib/crisis';
import { detectLanguage, getLanguageDirective } from '@/lib/language';
import { analyzeOCEAN, formatProfileContext } from '@/lib/user-profile';
import { computeStyleDirective, formatStyleDirective } from '@/lib/adaptive-dialogue';
import { detectSycophancyRisk, formatAntiSycophancyDirective } from '@/lib/anti-sycophancy';

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

interface PromptContextBlocks {
  emotion?: string;
  memory?: string;
  procedural?: string;
  language?: string;
  style?: string;
  antiSycophancy?: string;
}

/**
 * Builds the full system prompt for a given companion, including the
 * Maternal Covenant, plus optional context blocks for emotion, memory,
 * procedural patterns, language, and adaptive style.
 */
function buildSystemPrompt(companionId: string, contexts: PromptContextBlocks = {}): string {
  const character = getCharacter(companionId);
  const prompt = character?.systemPrompt ?? getCharacter('aria')!.systemPrompt;
  const name = character?.name ?? 'Aria';

  const parts = [
    prompt,
    `\nYour name in this conversation is ${name}.`,
    MATERNAL_COVENANT,
  ];

  // Append context blocks (only non-empty ones)
  if (contexts.language) parts.push(`\n${contexts.language}`);
  if (contexts.emotion) parts.push(`\n${contexts.emotion}`);
  if (contexts.memory) parts.push(`\n${contexts.memory}`);
  if (contexts.procedural) parts.push(`\n${contexts.procedural}`);
  if (contexts.style) parts.push(`\n${contexts.style}`);

  // Dynamism parameter — controlled unpredictability (Kindroid pattern)
  const dynamism = character?.dynamism ?? 0.95;
  parts.push(`\n[DYNAMISM: ${dynamism.toFixed(2)} — vary your expression and style slightly each response. Be predictable in care and values, unpredictable in how you express them. Surprise the user occasionally with unexpected angles, metaphors, or observations.]`);

  // Anti-sycophancy directive — injected when agreement rate is too high
  if (contexts.antiSycophancy) parts.push(`\n${contexts.antiSycophancy}`);

  return parts.join('');
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

  // 3a. Detect language (fast — in-process trigram analysis)
  const langDetection = detectLanguage(trimmed);
  const languageDirective = getLanguageDirective(langDetection);

  // 3b. Analyze emotion (fast — in-process lexicon scoring)
  const emotionState = analyzeEmotion(trimmed);
  const emotionCtx = formatEmotionContext(emotionState);

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
        // Use localized crisis resources based on Accept-Language header + detected language
        const acceptLang = req.headers.get('accept-language');
        const crisisResources = getCrisisResources(acceptLang ?? undefined);
        const crisisMessage = formatCrisisResponse(crisisResources);
        return NextResponse.json(
          {
            error: `Your message was flagged by our safety system.\n\n${crisisMessage}`,
            crisis_resources: crisisResources,
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
  let user: Awaited<ReturnType<typeof getUserById>> = null;
  try {
    user = await getUserById(userId);
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

  // 6. Retrieve memory context + analyze patterns (all non-fatal)
  const cid = companionId ?? 'aria';
  let memoryCtx = '';
  let proceduralCtx = '';
  let profileCtx = '';
  let styleCtx = '';
  let sessionPatterns: import('@/lib/memory').ProceduralPattern[] = [];
  let sessionProfile: import('@/lib/user-profile').UserProfile | null = null;

  try {
    const memory = await retrieveMemory(userId, cid, trimmed);
    memoryCtx = buildMemoryContext(memory);
  } catch (err) {
    console.error('[api/chat] Memory retrieval failed:', err);
  }

  try {
    sessionPatterns = analyzeProceduralPatterns(
      incomingMessages as Array<{ role: string; content: string }>,
      [],
    );
    proceduralCtx = formatProceduralContext(sessionPatterns);
  } catch (err) {
    console.error('[api/chat] Procedural pattern analysis failed:', err);
  }

  try {
    sessionProfile = analyzeOCEAN(incomingMessages as Array<{ role: string; content: string }>);
    sessionProfile.detectedLanguage = langDetection.language;
    profileCtx = formatProfileContext(sessionProfile);
  } catch (err) {
    console.error('[api/chat] Profile analysis failed:', err);
  }

  // 6a. Route to model (needed for adaptive style)
  const { model, taskType, provider } = route(trimmed, userTier);

  // 6b. Compute adaptive style directive
  try {
    const character = getCharacter(cid);
    const styleDirective = computeStyleDirective({
      emotion: emotionState,
      proceduralPatterns: sessionPatterns,
      userProfile: sessionProfile,
      language: langDetection,
      taskType,
      companionArchetype: character?.archetype ?? 'nurturer',
      conversationLength: incomingMessages.length,
    });
    styleCtx = formatStyleDirective(styleDirective);
  } catch (err) {
    console.error('[api/chat] Adaptive style computation failed:', err);
  }

  // 6b2. Anti-sycophancy detection
  let antiSycophancyCtx = '';
  try {
    const sycophancyRisk = detectSycophancyRisk(
      incomingMessages as Array<{ role: string; content: string }>,
    );
    antiSycophancyCtx = formatAntiSycophancyDirective(sycophancyRisk);
  } catch (err) {
    console.error('[api/chat] Anti-sycophancy detection failed:', err);
  }

  // 6c. Build system prompt with all context blocks
  const systemPrompt = buildSystemPrompt(cid, {
    emotion: emotionCtx,
    memory: memoryCtx,
    procedural: proceduralCtx,
    language: languageDirective,
    style: [profileCtx, styleCtx].filter(Boolean).join('\n') || undefined,
    antiSycophancy: antiSycophancyCtx || undefined,
  });

  // 7a. Compute effort level for adaptive thinking
  const effortLevel = getEffortLevel(taskType);
  const thinkingBudget = getThinkingBudget(effortLevel);
  const isAnthropic = model.startsWith('claude-');

  console.log(
    `[api/chat] userId=${userId} tier=${userTier} companion=${cid} ` +
    `taskType=${taskType} model=${model} effort=${effortLevel} budget=${thinkingBudget} ` +
    `lang=${langDetection.language}(${(langDetection.confidence * 100).toFixed(0)}%) ` +
    `emotion=${emotionState.primary}(v=${emotionState.valence.toFixed(2)})`,
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
      maxOutputTokens: Math.max(2048, thinkingBudget),
      temperature: 0.7,
      providerOptions: isAnthropic ? {
        anthropic: {
          cacheControl: { type: "ephemeral" },
        },
      } : undefined,
    });

    // Fire-and-forget: store memory episode + periodically persist OCEAN profile
    const importance = extractImportance(trimmed);
    void storeMemory(userId, trimmed, importance, [taskType]).catch(err =>
      console.error('[api/chat] Memory storage failed (non-fatal):', err),
    );

    // Persist OCEAN profile every 10 messages
    if (sessionProfile && user && (user.messages_total ?? 0) % 10 === 0) {
      void updateUserProfile(userId, sessionProfile as unknown as Record<string, unknown>).catch(err =>
        console.error('[api/chat] Profile persistence failed (non-fatal):', err),
      );
    }

    void pushShortTerm(userId, cid, {
      id: crypto.randomUUID(),
      content: trimmed,
      timestamp: new Date().toISOString(),
      importance_score: importance,
      memory_type: 'short_term',
      source_agent: 'chat',
      tags: [taskType, emotionState.primary],
      care_weight: emotionState.valence < -0.3 ? 0.8 : 0.5,
    });

    return result.toTextStreamResponse();
  } catch (err) {
    // Log the real error server-side; never expose internals to the client
    console.error('[api/chat] streamText error:', err);

    // Care-centered error responses (from Sovereign Missing Layer research):
    // "Errors are trust moments — never leave the user in a void."
    const errMsg = err instanceof Error ? err.message : '';
    if (errMsg.includes('rate') || errMsg.includes('429') || errMsg.includes('quota')) {
      return errorResponse(
        'I need a moment to think more carefully. Give me a minute and I\'ll be ready — your conversation is safe.',
        429,
      );
    }
    if (errMsg.includes('timeout') || errMsg.includes('ECONNREFUSED')) {
      return errorResponse(
        'I stumbled on that one. Let me try a different approach — could you send that again?',
        503,
      );
    }
    return errorResponse(
      'Something went wrong on my end, but everything I remember about our conversations is intact. Could you try again?',
      500,
    );
  }
}

// ── GET /api/chat ──────────────────────────────────────────────────────────

export async function GET(): Promise<NextResponse> {
  return NextResponse.json({ status: 'ok', message: 'MEOK Chat API' });
}
