/**
 * memory.ts — 4-layer MEOK memory architecture for companion chat
 *
 * Retrieval priority (fastest → most contextual):
 *   1. Short-term   — last N messages, in-memory buffer (ephemeral)
 *   2. Semantic     — pgvector/SOV3 vector search (relevant, slower)
 *   3. Companion state — structured facts about the user stored in DB
 *   4. Family/team  — shared context across family group (P3 stub)
 */

import { encryptMemory, decryptMemory, isEncryptionAvailable } from './encryption';

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
// Module-level short-term cache
// Key: `${userId}:${companionId}` → circular buffer of MemoryEpisode
// ---------------------------------------------------------------------------

const _shortTermCache = new Map<string, MemoryEpisode[]>();

function _cacheKey(userId: string, companionId: string): string {
  return `${userId}:${companionId}`;
}

function _getShortTerm(userId: string, companionId: string): MemoryEpisode[] {
  return _shortTermCache.get(_cacheKey(userId, companionId)) ?? [];
}

// ---------------------------------------------------------------------------
// SOV3 JSON-RPC helper
// ---------------------------------------------------------------------------

const DEFAULT_SOV3_URL = process.env.SOV3_API_URL || 'http://localhost:3100';

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

  const short_term = _getShortTerm(userId, companionId);

  let semantic: MemoryEpisode[] = [];
  let companion_state: Record<string, unknown> = {};

  try {
    // TODO: replace with real DB/SOV3 call
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

  // TODO: replace with real DB/SOV3 call — family_context gated on group membership
  const family_context: MemoryEpisode[] = []; // P3 stub

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

    // TODO: replace with real DB/SOV3 call
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

  // --- Layer 2: Semantic (newest first, max 3) ---
  const semanticEpisodes = [...memory.semantic]
    .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
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
  const key = _cacheKey(userId, companionId);
  const buffer = _shortTermCache.get(key) ?? [];
  buffer.push(episode);
  if (buffer.length > MEMORY_CONFIG.SHORT_TERM_WINDOW) {
    buffer.splice(0, buffer.length - MEMORY_CONFIG.SHORT_TERM_WINDOW);
  }
  _shortTermCache.set(key, buffer);
  console.log(`[memory] pushShortTerm user=${userId} buffer_size=${buffer.length}`);
}

/**
 * Clears the short-term buffer for a user+companion pair.
 * Useful on session end or companion switch.
 */
export function clearShortTerm(userId: string, companionId: string): void {
  _shortTermCache.delete(_cacheKey(userId, companionId));
  console.log(`[memory] clearShortTerm user=${userId} companion=${companionId}`);
}
