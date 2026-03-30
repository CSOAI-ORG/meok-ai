/**
 * memory.ts — 4-layer MEOK memory architecture for companion chat
 *
 * Retrieval priority (fastest → most contextual):
 *   1. Short-term   — last N messages, in-process L1 cache + Neon DB L2 (persistent)
 *   2. Semantic     — pgvector/SOV3 vector search (relevant, slower)
 *   3. Companion state — structured facts about the user stored in DB
 *   4. Family/team  — shared context across family group (P3 stub)
 */

import { encryptMemory, decryptMemory, isEncryptionAvailable } from './encryption';
import { sql } from './db/index';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Identifies which memory layer an episode originated from. */
export type MemoryLayerName = 'short_term' | 'semantic' | 'companion_state' | 'family';

/** A discrete memory layer descriptor (used for metadata / UI display). */
export interface MemoryLayer {
  name: MemoryLayerName;
  description: string;
  /** Whether this layer is currently enabled. */
  enabled: boolean;
}

/** A single memory episode — one meaningful unit of remembered content. */
export interface MemoryEpisode {
  /** Unique identifier for this episode. */
  id: string;
  /** The text content of the memory. */
  content: string;
  /** ISO-8601 timestamp of when this memory was created/recorded. */
  timestamp: string;
  /** 0.0–1.0 importance score used to gate persistence to semantic layer. */
  importance_score: number;
  /** Which layer this episode lives in. */
  memory_type: MemoryLayerName;
  /** Agent or process that produced this episode. */
  source_agent: string;
  /** Free-form tags for filtering/grouping. */
  tags: string[];
  /** 0.0–1.0 weight reflecting emotional/relational significance. */
  care_weight: number;
}

/** Aggregated memory state for a single user+companion pair. */
export interface CompanionMemory {
  user_id: string;
  companion_id: string;
  /** Layer 1: recent messages buffer (fast, ephemeral). */
  short_term: MemoryEpisode[];
  /** Layer 2: vector-search results from SOV3 (relevant, slower). */
  semantic: MemoryEpisode[];
  /** Layer 3: structured facts the companion knows about the user. */
  companion_state: Record<string, unknown>;
  /** Layer 4: shared family/team context (stub — empty until P3). */
  family_context: MemoryEpisode[];
}

/** Result from a memory search operation, with source attribution. */
export interface MemorySearchResult {
  episodes: MemoryEpisode[];
  source: MemoryLayerName;
  relevance_score: number;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

export const MEMORY_CONFIG = {
  /** Number of most-recent messages kept in the in-memory short-term buffer. */
  SHORT_TERM_WINDOW: 20,
  /** How many relevant episodes to retrieve from the semantic (vector) layer. */
  SEMANTIC_TOP_K: 5,
  /** Minimum importance score required to persist an episode to semantic layer. */
  IMPORTANCE_THRESHOLD: 0.3,
  /** Default care_weight assigned when none is specified. */
  CARE_WEIGHT_DEFAULT: 0.5,
} as const;

// ---------------------------------------------------------------------------
// Module-level short-term cache (L1: in-process, L2: Neon DB)
//
// L1 (in-process Map) — zero-latency within a warm function instance.
// L2 (Neon short_term_memory table) — survives cold starts and cross-device.
//
// Read path:  L1 hit → return immediately. L1 miss → load from L2 into L1.
// Write path: push to L1 immediately, fire-and-forget write to L2.
// Clear path: delete from L1 + async delete from L2.
// ---------------------------------------------------------------------------

const _shortTermCache = new Map<string, MemoryEpisode[]>();

function _cacheKey(userId: string, companionId: string): string {
  return `${userId}:${companionId}`;
}

function _getShortTerm(userId: string, companionId: string): MemoryEpisode[] {
  return _shortTermCache.get(_cacheKey(userId, companionId)) ?? [];
}

/** Load short-term episodes from Neon DB into the in-process L1 cache. */
async function _loadShortTermFromDB(userId: string, companionId: string): Promise<MemoryEpisode[]> {
  if (!sql) return [];
  try {
    const rows = await sql`
      SELECT id, content, importance AS importance_score, source_agent, tags, care_weight, created_at
      FROM short_term_memory
      WHERE user_id = ${userId} AND companion_id = ${companionId}
      ORDER BY created_at DESC
      LIMIT ${MEMORY_CONFIG.SHORT_TERM_WINDOW}
    `;
    const episodes: MemoryEpisode[] = (rows as Record<string, unknown>[]).reverse().map(r => ({
      id:               String(r['id']),
      content:          String(r['content']),
      timestamp:        String(r['created_at']),
      importance_score: Number(r['importance_score'] ?? 0.5),
      memory_type:      'short_term' as MemoryLayerName,
      source_agent:     String(r['source_agent'] ?? 'user'),
      tags:             Array.isArray(r['tags']) ? r['tags'] as string[] : [],
      care_weight:      Number(r['care_weight'] ?? MEMORY_CONFIG.CARE_WEIGHT_DEFAULT),
    }));
    _shortTermCache.set(_cacheKey(userId, companionId), episodes);
    console.log(`[memory] _loadShortTermFromDB loaded ${episodes.length} episodes for user=${userId}`);
    return episodes;
  } catch (err) {
    console.warn(`[memory] _loadShortTermFromDB failed (non-fatal): ${(err as Error).message}`);
    return [];
  }
}

/** Persist a single episode to the Neon short_term_memory table (fire-and-forget). */
function _persistEpisodeToDB(userId: string, companionId: string, episode: MemoryEpisode): void {
  if (!sql) return;
  sql`
    INSERT INTO short_term_memory (id, user_id, companion_id, content, importance, source_agent, tags, care_weight)
    VALUES (${episode.id}, ${userId}, ${companionId}, ${episode.content},
            ${episode.importance_score}, ${episode.source_agent}, ${episode.tags}, ${episode.care_weight})
    ON CONFLICT (id) DO NOTHING
  `.then(() => {
    // Prune old episodes beyond the window
    return sql!`
      DELETE FROM short_term_memory
      WHERE user_id = ${userId} AND companion_id = ${companionId}
        AND id NOT IN (
          SELECT id FROM short_term_memory
          WHERE user_id = ${userId} AND companion_id = ${companionId}
          ORDER BY created_at DESC
          LIMIT ${MEMORY_CONFIG.SHORT_TERM_WINDOW}
        )
    `;
  }).catch((err: Error) => console.warn(`[memory] _persistEpisodeToDB failed (non-fatal): ${err.message}`));
}

// ---------------------------------------------------------------------------
// SOV3 JSON-RPC helper
// ---------------------------------------------------------------------------

const DEFAULT_SOV3_URL = process.env.SOV3_URL || process.env.SOV3_API_URL || 'http://localhost:3101';

interface JsonRpcResponse<T = unknown> {
  result?: T;
  error?: { code: number; message: string };
}

/**
 * Calls a SOV3 MCP tool via JSON-RPC 2.0 over HTTP.
 * Returns null on any network or protocol error — callers must handle null.
 */
async function _callSOV3Tool<T = unknown>(
  toolName: string,
  toolInput: Record<string, unknown>,
  sov3Url: string,
): Promise<T | null> {
  const body = JSON.stringify({
    jsonrpc: '2.0',
    id: crypto.randomUUID(),
    method: 'tools/call',
    params: {
      name: toolName,
      arguments: toolInput,
    },
  });

  const response = await fetch(`${sov3Url}/mcp`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body,
    // Abort after 5 s so we never block the chat hot path.
    signal: AbortSignal.timeout(5_000),
  });

  if (!response.ok) {
    throw new Error(`SOV3 HTTP ${response.status}: ${response.statusText}`);
  }

  const json = (await response.json()) as JsonRpcResponse<T>;
  if (json.error) {
    throw new Error(`SOV3 RPC error ${json.error.code}: ${json.error.message}`);
  }

  return json.result ?? null;
}

// ---------------------------------------------------------------------------
// Layer 2 helpers — parse raw SOV3 responses into MemoryEpisode[]
// ---------------------------------------------------------------------------

function _parseSemanticEpisodes(raw: unknown): MemoryEpisode[] {
  if (!Array.isArray(raw)) return [];
  return (raw as Record<string, unknown>[]).map((r, i) => ({
    id: String(r['id'] ?? `semantic-${i}`),
    content: String(r['content'] ?? ''),
    timestamp: String(r['timestamp'] ?? new Date().toISOString()),
    importance_score: Number(r['importance_score'] ?? 0.5),
    memory_type: 'semantic' as MemoryLayerName,
    source_agent: String(r['source_agent'] ?? 'sov3'),
    tags: Array.isArray(r['tags']) ? (r['tags'] as string[]) : [],
    care_weight: Number(r['care_weight'] ?? MEMORY_CONFIG.CARE_WEIGHT_DEFAULT),
  }));
}

function _parseCompanionState(raw: unknown): Record<string, unknown> {
  if (raw && typeof raw === 'object' && !Array.isArray(raw)) {
    return raw as Record<string, unknown>;
  }
  return {};
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Retrieves all 4 memory layers for a given user+companion pair.
 *
 * - Layer 1 (short_term): served instantly from the in-memory cache.
 * - Layer 2 (semantic): fetched from SOV3 via `query_memories`.
 * - Layer 3 (companion_state): fetched from SOV3 via `list_memories`.
 * - Layer 4 (family_context): empty stub — scheduled for P3.
 *
 * Falls back gracefully if SOV3 is offline; never throws.
 */
export async function retrieveMemory(
  userId: string,
  companionId: string,
  query: string,
  sov3Url: string = DEFAULT_SOV3_URL,
): Promise<CompanionMemory> {
  console.log(`[memory] retrieveMemory user=${userId} companion=${companionId} query="${query.slice(0, 60)}"`);

  // L1 hit: use in-process cache. L1 miss: load from Neon DB (survives cold starts).
  const cached = _getShortTerm(userId, companionId);
  const short_term = cached.length > 0 ? cached : await _loadShortTermFromDB(userId, companionId);

  let semantic: MemoryEpisode[] = [];
  let companion_state: Record<string, unknown> = {};

  try {
    // SOV3 semantic + companion state retrieval (falls back gracefully if SOV3 is offline)
    const [semanticRaw, stateRaw] = await Promise.allSettled([
      _callSOV3Tool('query_memories', { user_id: userId, query, top_k: MEMORY_CONFIG.SEMANTIC_TOP_K }, sov3Url),
      _callSOV3Tool('list_memories', { user_id: userId }, sov3Url),
    ]);

    if (semanticRaw.status === 'fulfilled' && semanticRaw.value !== null) {
      semantic = _parseSemanticEpisodes(semanticRaw.value);
      // Attempt to decrypt each episode's content; fall back to raw value for
      // pre-encryption data or if crypto is unavailable.
      if (isEncryptionAvailable()) {
        semantic = await Promise.all(
          semantic.map(async (episode) => {
            try {
              const decrypted = await decryptMemory(episode.content, userId);
              return { ...episode, content: decrypted };
            } catch {
              // Old unencrypted data or wrong key — return as-is
              return episode;
            }
          }),
        );
      }
      console.log(`[memory] semantic layer: ${semantic.length} episodes retrieved`);
    } else if (semanticRaw.status === 'rejected') {
      console.log(`[memory] semantic layer unavailable: ${(semanticRaw.reason as Error).message}`);
    }

    if (stateRaw.status === 'fulfilled' && stateRaw.value !== null) {
      companion_state = _parseCompanionState(stateRaw.value);
      console.log(`[memory] companion_state loaded: ${Object.keys(companion_state).length} keys`);
    } else if (stateRaw.status === 'rejected') {
      console.log(`[memory] companion_state unavailable: ${(stateRaw.reason as Error).message}`);
    }
  } catch (err) {
    // Belt-and-suspenders: should not reach here given allSettled, but never throw.
    console.log(`[memory] unexpected error in retrieveMemory: ${(err as Error).message}`);
  }

  // Family context: gated on group membership, scheduled for Phase 3
  const family_context: MemoryEpisode[] = []; // Phase 3: query family_group members' shared memories

  return {
    user_id: userId,
    companion_id: companionId,
    short_term,
    semantic,
    companion_state,
    family_context,
  };
}

/**
 * Persists a memory episode to the semantic layer (SOV3) if importance meets
 * the configured threshold.
 *
 * Intended to be called fire-and-forget — do NOT await in the chat hot path.
 * Never throws.
 */
export async function storeMemory(
  userId: string,
  content: string,
  importance: number,
  tags: string[],
  sov3Url: string = DEFAULT_SOV3_URL,
): Promise<void> {
  if (importance < MEMORY_CONFIG.IMPORTANCE_THRESHOLD) {
    console.log(`[memory] storeMemory skipped (importance=${importance.toFixed(2)} < threshold)`);
    return;
  }

  console.log(`[memory] storeMemory user=${userId} importance=${importance.toFixed(2)} tags=${tags.join(',')}`);

  try {
    // Encrypt content at rest if the Web Crypto API is available.
    let storedContent = content;
    if (isEncryptionAvailable()) {
      try {
        storedContent = await encryptMemory(content, userId);
        console.log(`[memory] storeMemory content encrypted for user=${userId}`);
      } catch (encErr) {
        console.warn(`[memory] storeMemory encryption failed (storing plaintext): ${(encErr as Error).message}`);
        storedContent = content;
      }
    }

    // Persist to SOV3 semantic memory layer via JSON-RPC
    await _callSOV3Tool(
      'record_memory',
      {
        user_id: userId,
        content: storedContent,
        importance_score: importance,
        tags,
      },
      sov3Url,
    );
    console.log(`[memory] storeMemory succeeded for user=${userId}`);
  } catch (err) {
    // Fire-and-forget: swallow errors silently.
    console.log(`[memory] storeMemory failed (non-fatal): ${(err as Error).message}`);
  }
}

/**
 * Compresses a list of memory episodes into a single string that fits within
 * a token budget.
 *
 * Strategy — head-plus-tail:
 *   - If ≤ 7 episodes: concatenate all content fields as-is.
 *   - If > 7 episodes: keep first 3 and last 4; summarise the middle with a
 *     placeholder (no LLM call — deterministic, cheap).
 *
 * Returns a string prefixed with `[MEMORY CONTEXT]`.
 */
export async function compressMemory(
  episodes: MemoryEpisode[],
  maxTokens: number,
): Promise<string> {
  console.log(`[memory] compressMemory episodes=${episodes.length} maxTokens=${maxTokens}`);

  try {
    if (episodes.length === 0) {
      return '[MEMORY CONTEXT]\n(none)';
    }

    if (episodes.length <= 7) {
      const body = episodes.map((e) => e.content).join('\n');
      return `[MEMORY CONTEXT]\n${body}`;
    }

    // Head-plus-tail compression — keep first 3 and last 4, summarise middle.
    const head = episodes.slice(0, 3);
    const tail = episodes.slice(-4);
    const middleCount = episodes.length - 7;

    const headText = head.map((e) => e.content).join('\n');
    const tailText = tail.map((e) => e.content).join('\n');
    const middlePlaceholder = `[... ${middleCount} earlier memories omitted for brevity ...]`;

    const body = `${headText}\n${middlePlaceholder}\n${tailText}`;
    return `[MEMORY CONTEXT]\n${body}`;
  } catch (err) {
    console.log(`[memory] compressMemory error (non-fatal): ${(err as Error).message}`);
    return '[MEMORY CONTEXT]\n(compression error)';
  }
}

/**
 * Formats all memory layers into a single system-prompt block ready to inject
 * into the LLM context.
 *
 * Output format:
 * ```
 * [MEMORY — what I know about you]
 * {semantic episodes, newest first, max 3}
 * [COMPANION STATE]
 * {key: value facts}
 * [RECENT CONVERSATION]
 * {last 10 short-term episodes}
 * ```
 *
 * Returns an empty string if all layers are empty.
 */
export function buildMemoryContext(memory: CompanionMemory): string {
  const sections: string[] = [];

  // --- Layer 2: Semantic (relevance × time-decay, max 3) ---
  const now = Date.now();
  const timeDecay = (ts: string): number => {
    const ageMs = now - new Date(ts).getTime();
    const ageH = ageMs / 3600000;
    if (ageH < 24) return 1.0;
    if (ageH < 168) return 0.8;   // 7 days
    if (ageH < 720) return 0.5;   // 30 days
    return 0.2;
  };
  const semanticEpisodes = [...memory.semantic]
    .sort((a, b) => {
      const scoreA = (a.importance_score ?? 0.5) * timeDecay(a.timestamp);
      const scoreB = (b.importance_score ?? 0.5) * timeDecay(b.timestamp);
      return scoreB - scoreA;
    })
    .slice(0, 3);

  if (semanticEpisodes.length > 0) {
    const body = semanticEpisodes.map((e) => e.content).join('\n');
    sections.push(`[MEMORY — what I know about you]\n${body}`);
  }

  // --- Layer 3: Companion state (key facts) ---
  const stateKeys = Object.keys(memory.companion_state);
  if (stateKeys.length > 0) {
    const body = stateKeys
      .map((k) => `${k}: ${JSON.stringify(memory.companion_state[k])}`)
      .join('\n');
    sections.push(`[COMPANION STATE]\n${body}`);
  }

  // --- Layer 1: Short-term (last 10 messages) ---
  const recentEpisodes = memory.short_term.slice(-10);
  if (recentEpisodes.length > 0) {
    const body = recentEpisodes.map((e) => e.content).join('\n');
    sections.push(`[RECENT CONVERSATION]\n${body}`);
  }

  if (sections.length === 0) return '';

  return sections.join('\n');
}

/**
 * Heuristic importance scorer for a raw message string.
 *
 * Scans for linguistic signals that indicate memorable, persistent information:
 * personal names, dates, strong preferences, emotions, and biographical facts.
 *
 * Returns a value in [0.0, 1.0]:
 *   - "my name is Nick"   → ~0.9  (personal fact)
 *   - "I hate mornings"   → ~0.7  (strong preference / emotion)
 *   - "I prefer tea"      → ~0.6  (preference)
 *   - "thanks"            → ~0.1  (low signal)
 */
export function extractImportance(message: string): number {
  const lower = message.toLowerCase().trim();
  let score = 0.1; // baseline

  // --- Personal facts / identity ---
  if (/\bmy name is\b|\bi am\b|\bi'm\b/.test(lower)) score += 0.5;
  if (/\bmy (wife|husband|partner|son|daughter|mum|dad|mother|father|brother|sister|friend)\b/.test(lower)) score += 0.45;
  if (/\bborn in\b|\bi was born\b|\bgrew up\b|\bi live in\b|\bi'm from\b/.test(lower)) score += 0.4;

  // --- Dates and time anchors ---
  if (/\b\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}\b|\b(january|february|march|april|may|june|july|august|september|october|november|december)\b/.test(lower)) score += 0.25;
  if (/\beveryday\b|\bevery morning\b|\bby \w+day\b/.test(lower)) score += 0.15;

  // --- Strong emotional signals ---
  if (/\bi (love|hate|adore|despise|can't stand|loathe)\b/.test(lower)) score += 0.35;
  if (/\b(devastated|heartbroken|thrilled|overjoyed|furious|terrified)\b/.test(lower)) score += 0.3;
  if (/\b(anxious|worried|struggling|exhausted|overwhelmed)\b/.test(lower)) score += 0.25;

  // --- Preferences and opinions ---
  if (/\bi (prefer|always|never|usually|tend to)\b/.test(lower)) score += 0.2;
  if (/\bmy favourite\b|\bmy favorite\b|\bi enjoy\b|\bi like\b/.test(lower)) score += 0.2;

  // --- Medical / health facts ---
  if (/\b(diagnosed|allergic|condition|medication|therapy|doctor)\b/.test(lower)) score += 0.4;

  // --- Work / goals ---
  if (/\bmy (job|career|business|company|goal|dream)\b/.test(lower)) score += 0.3;

  // --- Trivial filler — penalise ---
  if (/^(ok|okay|thanks|thank you|sure|yes|no|lol|haha|cool|nice|great)[\.\!]*$/.test(lower)) score = 0.05;

  return Math.min(1.0, score);
}

/**
 * Returns a compact statistics object summarising memory layer sizes.
 */
export function getMemoryStats(memory: CompanionMemory): {
  total: number;
  semantic: number;
  shortTerm: number;
  familyContext: number;
} {
  const semantic = memory.semantic.length;
  const shortTerm = memory.short_term.length;
  const familyContext = memory.family_context.length;
  return {
    total: semantic + shortTerm + familyContext,
    semantic,
    shortTerm,
    familyContext,
  };
}

// ---------------------------------------------------------------------------
// Internal helpers exposed for testing
// ---------------------------------------------------------------------------

/**
 * Pushes a new episode into the in-memory short-term buffer for a user+companion
 * pair, evicting the oldest entry when the window is full.
 *
 * Call this from the chat message handler after each exchange.
 */
export function pushShortTerm(
  userId: string,
  companionId: string,
  episode: MemoryEpisode,
): void {
  // L1: update in-process cache immediately (zero latency for next retrieval)
  const key = _cacheKey(userId, companionId);
  const buffer = _shortTermCache.get(key) ?? [];
  buffer.push(episode);
  if (buffer.length > MEMORY_CONFIG.SHORT_TERM_WINDOW) {
    buffer.splice(0, buffer.length - MEMORY_CONFIG.SHORT_TERM_WINDOW);
  }
  _shortTermCache.set(key, buffer);
  // L2: persist to Neon DB (fire-and-forget — never blocks chat hot path)
  _persistEpisodeToDB(userId, companionId, episode);
  console.log(`[memory] pushShortTerm user=${userId} buffer_size=${buffer.length}`);
}

/**
 * Clears the short-term buffer for a user+companion pair.
 * Clears both L1 (in-process) and L2 (Neon DB).
 * Useful on session end or companion switch.
 */
export function clearShortTerm(userId: string, companionId: string): void {
  _shortTermCache.delete(_cacheKey(userId, companionId));
  // L2: also clear from DB (fire-and-forget)
  if (sql) {
    sql`DELETE FROM short_term_memory WHERE user_id = ${userId} AND companion_id = ${companionId}`
      .catch((err: Error) => console.warn(`[memory] clearShortTerm DB failed (non-fatal): ${err.message}`));
  }
  console.log(`[memory] clearShortTerm user=${userId} companion=${companionId}`);
}

// ---------------------------------------------------------------------------
// Procedural Memory — learned user interaction patterns
// ---------------------------------------------------------------------------

/** A single behavioural pattern observed over time. */
export interface ProceduralPattern {
  /** Machine-readable identifier, e.g. "prefers_detailed_explanations". */
  pattern: string;
  /** Human-readable label, e.g. "Prefers detailed explanations". */
  label: string;
  /** 0–1 confidence score; increases with repeated observations. */
  confidence: number;
  /** ISO-8601 date of last observation. */
  last_observed: string;
  /** How many times this pattern has been observed. */
  observation_count: number;
}

/** Aggregated procedural memory state for a user session. */
export interface ProceduralMemory {
  /** Learned behavioural patterns. */
  patterns: ProceduralPattern[];
  /** ISO-8601 date of the last analysis pass. */
  last_analysis: string;
}

// ---------------------------------------------------------------------------
// Procedural Memory — pattern analysis
// ---------------------------------------------------------------------------

/**
 * Upserts a pattern into the working map: bumps confidence and observation
 * count if it already exists, otherwise creates a new entry with a baseline
 * confidence of 0.3.
 */
function upsertPattern(
  patterns: Map<string, ProceduralPattern>,
  id: string,
  label: string,
  now: string,
): void {
  const existing = patterns.get(id);
  if (existing) {
    existing.confidence = Math.min(1, existing.confidence + 0.1);
    existing.observation_count++;
    existing.last_observed = now;
  } else {
    patterns.set(id, {
      pattern: id,
      label,
      confidence: 0.3,
      last_observed: now,
      observation_count: 1,
    });
  }
}

/**
 * Analyse recent messages to extract procedural memory patterns.
 * Called periodically (every 10 messages) to learn user preferences.
 *
 * Runs client-side on the messages array — no DB calls needed.
 */
export function analyzeProceduralPatterns(
  messages: Array<{ role: string; content: string }>,
  existing: ProceduralPattern[],
): ProceduralPattern[] {
  const patterns = new Map<string, ProceduralPattern>();

  // Copy existing patterns
  for (const p of existing) {
    patterns.set(p.pattern, { ...p });
  }

  const userMessages = messages.filter(m => m.role === 'user');
  if (userMessages.length < 3) return existing;

  const now = new Date().toISOString();

  // --- Analyse message length preference ---
  const avgLength = userMessages.reduce((sum, m) => sum + m.content.length, 0) / userMessages.length;
  if (avgLength > 200) {
    upsertPattern(patterns, 'writes_detailed_messages', 'Writes detailed, thorough messages', now);
  } else if (avgLength < 50) {
    upsertPattern(patterns, 'writes_brief_messages', 'Prefers brief, concise messages', now);
  }

  // --- Analyse question style ---
  const questionMessages = userMessages.filter(m => m.content.includes('?'));
  if (questionMessages.length > userMessages.length * 0.6) {
    upsertPattern(patterns, 'asks_many_questions', 'Frequently asks questions', now);
  }

  // --- Analyse formality (casual vs formal language) ---
  const casualIndicators = ['lol', 'haha', 'omg', 'tbh', 'imo', 'btw', 'gonna', 'wanna', 'kinda'];
  const formalIndicators = ['therefore', 'furthermore', 'consequently', 'regarding', 'please', 'would you'];
  let casualCount = 0;
  let formalCount = 0;
  for (const m of userMessages) {
    const lower = m.content.toLowerCase();
    for (const c of casualIndicators) { if (lower.includes(c)) casualCount++; }
    for (const f of formalIndicators) { if (lower.includes(f)) formalCount++; }
  }
  if (casualCount > formalCount + 2) {
    upsertPattern(patterns, 'casual_communication', 'Uses casual, informal communication style', now);
  } else if (formalCount > casualCount + 2) {
    upsertPattern(patterns, 'formal_communication', 'Uses formal, professional communication style', now);
  }

  // --- Analyse emoji / emoticon usage ---
  const emojiRegex = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{2600}-\u{26FF}]/u;
  const emojiUsers = userMessages.filter(m => emojiRegex.test(m.content));
  if (emojiUsers.length > userMessages.length * 0.3) {
    upsertPattern(patterns, 'uses_emojis', 'Frequently uses emojis in messages', now);
  }

  // --- Analyse technical vs creative language ---
  const techWords = ['code', 'api', 'function', 'debug', 'error', 'deploy', 'database', 'server', 'git'];
  const creativeWords = ['story', 'imagine', 'create', 'design', 'art', 'music', 'write', 'poem', 'paint'];
  let techHits = 0;
  let creativeHits = 0;
  for (const m of userMessages) {
    const lower = m.content.toLowerCase();
    for (const t of techWords) { if (lower.includes(t)) techHits++; }
    for (const c of creativeWords) { if (lower.includes(c)) creativeHits++; }
  }
  if (techHits > 3) {
    upsertPattern(patterns, 'technical_focus', 'Frequently discusses technical topics', now);
  }
  if (creativeHits > 3) {
    upsertPattern(patterns, 'creative_focus', 'Frequently engages in creative activities', now);
  }

  return Array.from(patterns.values())
    .sort((a, b) => b.confidence - a.confidence)
    .slice(0, 10); // Keep top 10 patterns
}

/**
 * Format procedural patterns for system prompt injection.
 *
 * Only includes patterns with confidence >= 0.3, capped at the 5 most
 * confident. Returns an empty string when there are no relevant patterns.
 */
export function formatProceduralContext(patterns: ProceduralPattern[]): string {
  const relevant = patterns.filter(p => p.confidence >= 0.3);
  if (relevant.length === 0) return '';
  const lines = relevant.slice(0, 5).map(
    p => `- ${p.label} (confidence: ${(p.confidence * 100).toFixed(0)}%)`,
  );
  return `[Learned user patterns:\n${lines.join('\n')}]`;
}
