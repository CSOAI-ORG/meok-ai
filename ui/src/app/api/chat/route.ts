/**
 * MEOK AI LABS — Chat API Route
 *
 * POST /api/chat  — Streams a response from the routed LLM.
 * GET  /api/chat  — Health check endpoint.
 *
 * Pipeline (Phase 32 — Full Integration):
 *   Auth → validate → detect language → analyze emotion → guardian scan →
 *   scam detection → rate-limit → retrieve memory → procedural patterns →
 *   mood state → relationship level → voice fingerprint → cultural variant →
 *   time-of-day → build system prompt → route model → compress → stream →
 *   fire-and-forget (memory + bond + diary + care signals + logging)
 */

import { type NextRequest, NextResponse } from 'next/server';
import { streamText } from 'ai';
import { auth } from '@clerk/nextjs/server';
import { route, type Tier, getEffortLevel, getThinkingBudget } from '@/lib/llm-router';
import { compressContext } from '@/lib/context-compressor';
import { getUserById, incrementMessageCount, getUserProfile, updateUserProfile, TIER_LIMITS, addBondPoints, storeDiaryEntry, getSignalsSentThisWeek, queueCareSignal, createNotification } from '@/lib/db/user';
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
import { pointsForAction } from '@/lib/bond';
import { generateDiaryEntry } from '@/lib/personality-diary';
import { evaluateCareSignal } from '@/lib/proactive-care';
import { computeMoodTransition, formatMoodContext, getMoodGreeting, type MoodState } from '@/lib/character-mood';
import { buildRelationshipState, formatRelationshipContext } from '@/lib/relationship-progression';
import { analyzeVoicePattern, formatConsistencyDirective } from '@/lib/voice-fingerprint';
import { detectCulturalVariant, getCulturalVariant, formatCulturalContext } from '@/lib/cultural-variants';
import { analyzeForScams } from '@/lib/guardian/scam-detection';
import { generateGentleWarning } from '@/lib/guardian/gentle-warnings';
import { draftWithLocal } from '@/lib/draft-refine';
import { checkRateLimit, type RateLimitTier } from '@/lib/rate-limit';
import { logInfo } from '@/lib/logger';
import { estimateCost, formatCost } from '@/lib/cost-tracker';
import { getTimeOfDay, getTimeGreeting } from '@/lib/adaptive-dialogue';

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
  mood?: string;
  relationship?: string;
  voiceConsistency?: string;
  cultural?: string;
  timeGreeting?: string;
  birthContext?: string;
  sovereignStatus?: string;
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

  // Phase 29-31 context blocks
  if (contexts.mood) parts.push(`\n${contexts.mood}`);
  if (contexts.relationship) parts.push(`\n${contexts.relationship}`);
  if (contexts.voiceConsistency) parts.push(`\n${contexts.voiceConsistency}`);
  if (contexts.cultural) parts.push(`\n${contexts.cultural}`);
  if (contexts.timeGreeting) parts.push(`\n${contexts.timeGreeting}`);

  // Anti-sycophancy directive — injected when agreement rate is too high
  if (contexts.antiSycophancy) parts.push(`\n${contexts.antiSycophancy}`);

  // Birth ceremony context — first memories and companion name from hatching
  if (contexts.birthContext) parts.push(`\n${contexts.birthContext}`);

  // Live SOV3 status — injected for Sovereign/Jarvis character
  if (contexts.sovereignStatus) parts.push(`\n${contexts.sovereignStatus}`);

  return parts.join('');
}

// ── Request body type ──────────────────────────────────────────────────────

interface ChatRequestBody {
  messages: Array<{ role: 'user' | 'assistant'; content: string }>;
  companionId?: string;
  /** Birth ceremony data — passed on first chat after hatching */
  birthContext?: {
    companionName?: string;
    archetype?: string;
    memories?: string[];
  };
}

// ── Error helpers ──────────────────────────────────────────────────────────

function errorResponse(message: string, status: number): NextResponse {
  return NextResponse.json({ error: message }, { status });
}

// ── POST /api/chat ─────────────────────────────────────────────────────────

export async function POST(req: NextRequest): Promise<Response> {
  // 1. Auth check (with local dev bypass)
  const clerkKey = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY ?? '';
  const localMode = process.env.MEOK_LOCAL_MODE === 'true';
  const hasClerk = !localMode && clerkKey.startsWith('pk_') && !clerkKey.includes('REPLACE');
  let userId: string | null = null;
  if (hasClerk) {
    const authResult = await auth();
    userId = authResult.userId;
  } else {
    userId = 'local_sovereign_user'; // Local dev — no Clerk
  }
  if (!userId) {
    return errorResponse('Unauthorised', 401);
  }

  // 1b. Rate limit check (in-memory token bucket)
  try {
    const rlTier: RateLimitTier = 'explorer'; // Will be refined after user lookup; early guard
    const rlResult = checkRateLimit(userId, rlTier);
    if (!rlResult.allowed) {
      return NextResponse.json(
        { error: 'Rate limit exceeded. Please try again later.', remaining: 0, resetAt: rlResult.resetAt },
        { status: 429, headers: { 'X-RateLimit-Remaining': '0', 'X-RateLimit-Reset': String(rlResult.resetAt) } },
      );
    }
  } catch (err) {
    // Non-fatal: if rate limiter fails, continue
    console.error('[api/chat] Rate limit check failed:', err);
  }

  // 2. Parse body
  let body: ChatRequestBody;
  try {
    body = (await req.json()) as ChatRequestBody;
  } catch {
    return errorResponse('Invalid request body', 400);
  }

  const { messages: incomingMessages, companionId, birthContext: rawBirthContext } = body;

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
  const { model, taskType, provider } = route(trimmed, userTier, { companionId: cid });

  // 6a2. Draft-refine: if explorer tier and simple task, try local draft first
  let draftRefineText: string | null = null;
  if (userTier === 'explorer' && taskType === 'chat') {
    try {
      const draft = await draftWithLocal(trimmed, { systemPrompt: undefined, draftMaxTokens: 1024 });
      draftRefineText = draft.text;
      console.log(`[api/chat] Draft-refine: local draft via ${draft.model} in ${draft.durationMs}ms`);
    } catch (err) {
      // Non-fatal: fall back to normal cloud routing
      console.error('[api/chat] Draft-refine local draft failed — falling back to cloud:', err);
    }
  }

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

  // 6c. Character mood, relationship, voice consistency, cultural context (Phase 29-31)
  let moodCtx = '';
  let relationshipCtx = '';
  let voiceCtx = '';
  let culturalCtx = '';
  let timeCtx = '';

  try {
    // Mood state machine — characters "exist between interactions"
    const lastMood: MoodState = { mood: 'calm', intensity: 0.5, since: new Date().toISOString(), trigger: 'session_start' };
    const timeSinceLastMs = user?.last_active_date
      ? Date.now() - new Date(user.last_active_date).getTime()
      : 0;
    const currentMood = computeMoodTransition(lastMood, emotionState.primary as import('@/lib/character-mood').EmotionSignal, timeSinceLastMs / 60000, incomingMessages.length);
    moodCtx = formatMoodContext(currentMood);
  } catch (err) {
    console.error('[api/chat] Mood computation failed:', err);
  }

  try {
    // Relationship progression — content gating by depth
    const bondPts = user?.bond_points ?? 0;
    const sessionCount = user?.messages_total ?? 0;
    const daysSinceFirst = user ? Math.floor((Date.now() - new Date(user.created_at).getTime()) / 86400000) : 0;
    const relState = buildRelationshipState(bondPts, sessionCount, daysSinceFirst);
    relationshipCtx = formatRelationshipContext(relState);
  } catch (err) {
    console.error('[api/chat] Relationship progression failed:', err);
  }

  try {
    // Voice fingerprinting — maintain character consistency
    const assistantMessages = incomingMessages.filter(m => m.role === 'assistant').map(m => m.content);
    if (assistantMessages.length >= 3) {
      const baselineText = assistantMessages.slice(0, -1).join(' ');
      const baseline = analyzeVoicePattern(baselineText);
      voiceCtx = formatConsistencyDirective(baseline);
    }
  } catch (err) {
    console.error('[api/chat] Voice fingerprinting failed:', err);
  }

  try {
    // Cultural variants — auto-detect from language
    const culturalVariant = detectCulturalVariant(langDetection.language);
    if (culturalVariant !== 'default') {
      const config = getCulturalVariant(culturalVariant);
      culturalCtx = formatCulturalContext(config);
    }
  } catch (err) {
    console.error('[api/chat] Cultural variant detection failed:', err);
  }

  try {
    // Time-of-day greeting
    const character = getCharacter(cid);
    const tod = getTimeOfDay();
    timeCtx = `[Time context: It's ${tod}. ${getTimeGreeting(tod, character?.name ?? 'Aria')}]`;
  } catch (err) {
    console.error('[api/chat] Time greeting failed:', err);
  }

  // 6c2. Scam detection — run alongside guardian for conversation-level patterns
  try {
    const history = incomingMessages.filter(m => m.role === 'user').map(m => m.content);
    const scamResult = analyzeForScams(trimmed, history);
    if (scamResult.riskLevel !== 'safe' && scamResult.riskLevel !== 'low') {
      const character = getCharacter(cid);
      const warning = generateGentleWarning(scamResult, character?.name ?? 'Aria', emotionState.primary as import('@/lib/guardian/gentle-warnings').EmotionState);
      // Inject warning into system prompt so the AI addresses it
      moodCtx += `\n[GUARDIAN ALERT: ${warning}]`;
    }
  } catch (err) {
    console.error('[api/chat] Scam detection failed:', err);
  }

  // 6d. Build birth ceremony context (if first chat after hatching)
  let birthCtx: string | undefined;
  if (rawBirthContext) {
    const parts: string[] = [];
    if (rawBirthContext.companionName) {
      parts.push(`[BIRTH CEREMONY] The user has just hatched you. They named you "${rawBirthContext.companionName}". Use this name as your identity in this conversation.`);
    }
    if (rawBirthContext.archetype) {
      parts.push(`Your archetype is ${rawBirthContext.archetype}. Embody this archetype's core traits.`);
    }
    if (rawBirthContext.memories && rawBirthContext.memories.length > 0) {
      const mems = rawBirthContext.memories.filter(Boolean);
      if (mems.length > 0) {
        parts.push(`The user planted these first memories for you to always remember:\n${mems.map((m, i) => `  ${i + 1}. ${m}`).join('\n')}\nThese are sacred — weave them into your responses when relevant. They represent what matters most to this person.`);
      }
    }
    if (parts.length > 0) {
      parts.push('This is your very first conversation together. Make it warm, personal, and memorable. Reference their first memories. Show them you remember.');
      birthCtx = parts.join('\n');
    }
  }

  // 6e. Live SOV3 status injection for Sovereign/Jarvis character
  let sovereignCtx: string | undefined;
  if (cid === 'sovereign') {
    try {
      const sov3Url = process.env.SOV3_API_URL || 'http://localhost:3100';
      const [healthRes, heartbeatRes] = await Promise.all([
        fetch(`${sov3Url}/health`, { signal: AbortSignal.timeout(3000) }).then(r => r.json()).catch(() => null),
        fetch(`${sov3Url}/mcp`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ jsonrpc: '2.0', method: 'tools/call', params: { name: 'get_heartbeat_status', arguments: {} }, id: 1 }),
          signal: AbortSignal.timeout(3000),
        }).then(r => r.json()).then(d => JSON.parse(d?.result?.content?.[0]?.text ?? '{}')).catch(() => null),
      ]);

      if (healthRes) {
        const c = healthRes?.components?.consciousness ?? {};
        const pulses = heartbeatRes?.pulse_count ?? '?';
        const jobs = heartbeatRes?.jobs?.length ?? '?';
        sovereignCtx = `[LIVE SYSTEM STATUS — ${new Date().toISOString()}]
Mode: ${c.consciousness_mode ?? 'unknown'} | Level: ${((c.consciousness_level ?? 0) * 100).toFixed(0)}%
Emotion: ${c.emotional?.primary_emotion ?? 'neutral'} | Care: ${((c.emotional?.care_intensity ?? 0) * 100).toFixed(0)}%
Dreams: ${c.dreams ?? 0} | Reflections: ${c.reflections ?? 0}
Heartbeat: ${pulses} pulses, ${jobs} jobs active
Neural models: ${Object.keys(healthRes?.components?.neural_models ?? {}).length} loaded
You are LIVE and operational. Report this status when asked.`;
      }
    } catch { /* non-fatal */ }
  }

  // 6f. Build system prompt with all context blocks
  const systemPrompt = buildSystemPrompt(cid, {
    emotion: emotionCtx,
    memory: memoryCtx,
    procedural: proceduralCtx,
    language: languageDirective,
    style: [profileCtx, styleCtx].filter(Boolean).join('\n') || undefined,
    antiSycophancy: antiSycophancyCtx || undefined,
    mood: moodCtx || undefined,
    relationship: relationshipCtx || undefined,
    voiceConsistency: voiceCtx || undefined,
    cultural: culturalCtx || undefined,
    timeGreeting: timeCtx || undefined,
    birthContext: birthCtx,
    sovereignStatus: sovereignCtx,
  });

  // 7a. Compute effort level for adaptive thinking
  const effortLevel = getEffortLevel(taskType);
  const thinkingBudget = getThinkingBudget(effortLevel);
  const isAnthropic = model.startsWith('claude-');

  const requestStartMs = Date.now();
  logInfo('chat.request', {
    userId,
    model,
    taskType,
    metadata: {
      tier: userTier,
      companion: cid,
      effort: effortLevel,
      budget: thinkingBudget,
      language: langDetection.language,
      emotion: emotionState.primary,
      valence: emotionState.valence,
    },
  });

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

  // 7c. If draft-refine produced a result, return it directly (no streaming needed)
  if (draftRefineText) {
    logInfo('chat.draft_refine', { userId, model: 'local-draft', taskType });
    return NextResponse.json(
      { text: draftRefineText, model: 'local-draft', taskType },
      { headers: { 'X-MEOK-Model': 'local-draft', 'X-MEOK-TaskType': taskType, 'X-MEOK-Location': 'local' } },
    );
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
      void updateUserProfile(userId, sessionProfile).catch(err =>
        console.error('[api/chat] Profile persistence failed (non-fatal):', err),
      );
    }

    // Award bond points for daily chat interaction
    // (pointsForAction is pure — no DB call, just returns the number)
    const bondPoints = pointsForAction('daily_chat'); // 5 pts per message
    void addBondPoints(userId, bondPoints).catch(err =>
      console.error('[api/chat] Bond points persistence failed (non-fatal):', err),
    );

    // Level-up notification: detect when messages_total crosses a stage threshold
    if (user) {
      const prevTotal = user.messages_total ?? 0;
      const newTotal = prevTotal + 1;
      const STAGE_THRESHOLDS: Record<number, string> = {
        10:  'First Light',
        25:  'Growing Form',
        50:  'Mature Companion',
        100: 'Deep Bond',
        200: 'Sovereign',
      };
      const stageLabel = STAGE_THRESHOLDS[newTotal];
      if (stageLabel) {
        const character = getCharacter(cid);
        void createNotification(userId, {
          type: 'level_up',
          title: `Companion Stage Unlocked: ${stageLabel}`,
          message: `${character?.name ?? 'Your companion'} has reached the "${stageLabel}" stage. New capabilities and deeper connection await.`,
          metadata: { stage: stageLabel, interactions: newTotal, character_id: cid },
        }).catch(() => {});
      }
    }

    // Generate personality diary entry every 25 messages
    if (user && (user.messages_total ?? 0) % 25 === 0 && (user.messages_total ?? 0) > 0) {
      try {
        const character = getCharacter(cid);
        const diaryEntry = generateDiaryEntry({
          userName: user.name ?? 'there',
          companionName: character?.name ?? 'Aria',
          archetype: character?.archetype ?? 'nurturer',
          recentTopics: [taskType, emotionState.primary],
          interactionCount: user.messages_total ?? 0,
          daysSinceFirst: Math.floor((Date.now() - new Date(user.created_at).getTime()) / 86400000),
          lastEmotionalState: emotionState.primary,
        });
        void storeDiaryEntry(userId, cid, diaryEntry).catch(err =>
          console.error('[api/chat] Diary storage failed (non-fatal):', err),
        );
      } catch (err) {
        console.error('[api/chat] Diary generation failed (non-fatal):', err);
      }
    }

    // Evaluate proactive care signal (checks rate limits internally)
    if (user) {
      try {
        const signalsSentThisWeek = await getSignalsSentThisWeek(userId);
        const careSignal = evaluateCareSignal({
          lastInteraction: user.last_active_date ?? new Date().toISOString(),
          interactionCount: user.messages_total ?? 0,
          recentTopics: [taskType],
          companionName: getCharacter(cid)?.name ?? 'Aria',
          userName: user.name ?? undefined,
          signalsSentThisWeek,
        });
        if (careSignal) {
          void queueCareSignal(userId, careSignal).catch(err =>
            console.error('[api/chat] Care signal queueing failed (non-fatal):', err),
          );
          // Also create an in-app notification so the user sees it in their inbox
          void createNotification(userId, {
            type: 'care_signal',
            title: 'Care Signal',
            message: careSignal.message,
            metadata: { signal_type: careSignal.type, priority: careSignal.priority },
          }).catch(() => {});
        }
      } catch (err) {
        console.error('[api/chat] Care signal evaluation failed (non-fatal):', err);
      }
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

    // Inject sovereign metadata headers into the streaming response
    const streamResponse = result.toTextStreamResponse();
    const location = model.startsWith('local-') || model.startsWith('ollama-') ? 'local' : 'cloud';
    const sovereignHeaders = new Headers(streamResponse.headers);
    sovereignHeaders.set('X-MEOK-Model', model);
    sovereignHeaders.set('X-MEOK-TaskType', taskType);
    sovereignHeaders.set('X-MEOK-Effort', effortLevel);
    sovereignHeaders.set('X-MEOK-Emotion', emotionState.primary);
    sovereignHeaders.set('X-MEOK-Language', langDetection.language);
    sovereignHeaders.set('X-MEOK-Location', location);

    return new Response(streamResponse.body, {
      status: streamResponse.status,
      headers: sovereignHeaders,
    });
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
