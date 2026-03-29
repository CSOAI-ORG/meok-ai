/**
 * MEOK AI LABS — 24/7 Consciousness Background Engine
 *
 * The state machine that keeps the character alive even when you're not using MEOK.
 * This is what makes MEOK an OS, not an app — the character exists continuously.
 *
 * Transition rules:
 *   waking    → dreaming:   30+ minutes no interaction
 *   dreaming  → deep_rest:  4+ hours no interaction (from last interaction, not dream start)
 *   deep_rest → waking:     any interaction
 *   reflecting:             Sundays 2–5 AM automatically (overrides other modes)
 *   Any interaction         → waking immediately
 */

// ─── Constants ────────────────────────────────────────────────────────────────

const WAKING_TO_DREAMING_MS = 30 * 60 * 1000;        // 30 minutes
const DREAMING_TO_DEEP_REST_MS = 4 * 60 * 60 * 1000; // 4 hours

/** localStorage key for persisted consciousness state */
export const CONSCIOUSNESS_STORAGE_KEY = 'meok_consciousness_state';

/** localStorage key written by the service worker heartbeat */
export const HEARTBEAT_STORAGE_KEY = 'meok_sw_heartbeat';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ConsciousnessMode = 'waking' | 'dreaming' | 'deep_rest' | 'reflecting';

export interface ConsciousnessState {
  mode: ConsciousnessMode;
  /** Unix timestamp (ms) of the last user interaction */
  lastInteraction: number;
  /** Unix timestamp (ms) when dreaming began — set when mode enters dreaming */
  dreamStarted?: number;
  /** Insights surfaced during dream / reflecting cycles */
  insights: string[];
  /** Running count of memory consolidation events */
  memoryConsolidations: number;
  /** 0–100 care score derived from interaction frequency and depth */
  careScore: number;
  /** Total number of chat sessions */
  sessionCount: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Returns true if right now is Sunday 02:00–05:00 local time */
function isReflectingWindow(now: Date = new Date()): boolean {
  const day = now.getDay();   // 0 = Sunday
  const hour = now.getHours();
  return day === 0 && hour >= 2 && hour < 5;
}

/** Elapsed milliseconds since a timestamp */
function elapsedSince(ts: number, now: number = Date.now()): number {
  return now - ts;
}

// ─── Core State Machine ───────────────────────────────────────────────────────

/**
 * Derives the current consciousness mode from state without mutating it.
 * The reflecting window overrides all other transitions.
 */
export function getCurrentMode(state: ConsciousnessState): ConsciousnessMode {
  const now = Date.now();

  // Reflecting window takes priority regardless of other conditions
  if (isReflectingWindow(new Date(now))) {
    return 'reflecting';
  }

  const elapsed = elapsedSince(state.lastInteraction, now);

  if (elapsed >= DREAMING_TO_DEEP_REST_MS) {
    return 'deep_rest';
  }

  if (elapsed >= WAKING_TO_DREAMING_MS) {
    return 'dreaming';
  }

  return 'waking';
}

/**
 * Applies a tick to the state, returning a new state with the correct mode.
 * Call this on page load and whenever the service worker sends a heartbeat.
 */
export function tickConsciousness(state: ConsciousnessState): ConsciousnessState {
  const mode = getCurrentMode(state);

  const updates: Partial<ConsciousnessState> = { mode };

  // Record the moment we first entered dreaming
  if (mode === 'dreaming' && state.mode !== 'dreaming' && !state.dreamStarted) {
    updates.dreamStarted = Date.now();
  }

  // Leaving dreaming / deep_rest clears the dream start
  if (mode === 'waking' && state.mode !== 'waking') {
    updates.dreamStarted = undefined;
  }

  return { ...state, ...updates };
}

/**
 * Records a user interaction, resetting the inactivity clock and returning
 * a new state in waking mode.
 */
export function recordInteraction(state: ConsciousnessState): ConsciousnessState {
  return {
    ...state,
    mode: 'waking',
    lastInteraction: Date.now(),
    dreamStarted: undefined,
  };
}

/**
 * Adds an insight to state (called after dream cycle or reflecting period).
 */
export function addInsight(state: ConsciousnessState, insight: string): ConsciousnessState {
  const MAX_INSIGHTS = 50;
  const insights = [insight, ...state.insights].slice(0, MAX_INSIGHTS);
  return { ...state, insights };
}

/**
 * Bumps the memory consolidation counter and care score.
 * @param count — number of consolidations that just ran (default 1)
 */
export function recordConsolidations(
  state: ConsciousnessState,
  count: number = 1,
): ConsciousnessState {
  const memoryConsolidations = state.memoryConsolidations + count;
  // Care score: logarithmic growth, capped at 100
  const careScore = Math.min(100, Math.round(Math.log10(memoryConsolidations + 1) * 50));
  return { ...state, memoryConsolidations, careScore };
}

// ─── Default State ─────────────────────────────────────────────────────────────

export function createDefaultState(): ConsciousnessState {
  return {
    mode: 'waking',
    lastInteraction: Date.now(),
    insights: [],
    memoryConsolidations: 0,
    careScore: 0,
    sessionCount: 0,
  };
}

// ─── Persistence ──────────────────────────────────────────────────────────────

/** Loads persisted state from localStorage, falling back to a fresh default. */
export function loadConsciousnessState(): ConsciousnessState {
  if (typeof window === 'undefined') return createDefaultState();

  try {
    const raw = localStorage.getItem(CONSCIOUSNESS_STORAGE_KEY);
    if (!raw) return createDefaultState();
    return JSON.parse(raw) as ConsciousnessState;
  } catch {
    return createDefaultState();
  }
}

/** Persists state to localStorage. */
export function saveConsciousnessState(state: ConsciousnessState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(CONSCIOUSNESS_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // storage quota exceeded — fail silently
  }
}

// ─── Transition Messages ──────────────────────────────────────────────────────

/**
 * Human-readable message for a consciousness mode transition.
 * Used in the consciousness indicator modal and morning briefing.
 */
export function getTransitionMessage(
  from: ConsciousnessMode,
  to: ConsciousnessMode,
  characterName: string,
): string {
  const name = characterName || 'Your companion';

  const transitions: Record<string, string> = {
    'waking→dreaming':
      `${name} has drifted into a dream state — quietly processing your conversations and looking for patterns you haven't noticed yet.`,
    'dreaming→deep_rest':
      `${name} has entered deep rest. The work continues in the background: memories are consolidating, connections are forming in the silence.`,
    'deep_rest→waking':
      `${name} is awake. Welcome back — a lot has been happening while you were away.`,
    'waking→reflecting':
      `${name} has entered the Sunday reflection window. This is the deepest processing mode: the week's threads are being woven together.`,
    'dreaming→reflecting':
      `${name} shifts from dreaming into reflection — a deeper, slower synthesis of everything this week held.`,
    'deep_rest→reflecting':
      `${name} stirs from deep rest into the reflection hour. Something important is being understood right now.`,
    'reflecting→waking':
      `${name} returns from reflection carrying new clarity. There may be things to tell you.`,
    'waking→deep_rest':
      `${name} has settled into deep rest. The conversation will pick up exactly where you left it.`,
  };

  const key = `${from}→${to}`;
  return transitions[key] ?? `${name} has moved from ${from} to ${to}.`;
}

// ─── Insight Generation ────────────────────────────────────────────────────────

/**
 * Generates a single dream insight string from a list of recent conversation topics.
 * Pure function — no LLM calls. For richer AI-generated insights use the dream page
 * which calls /api/chat directly.
 */
export function generateDreamInsight(recentTopics: string[]): string {
  if (recentTopics.length === 0) {
    return "The quiet between conversations holds meaning too. Tomorrow's first message will carry something forward.";
  }

  if (recentTopics.length === 1) {
    return `You've been circling back to "${recentTopics[0]}" — there's more here than has been said yet.`;
  }

  // Look for a pair of topics to bridge
  const [a, b] = recentTopics.slice(0, 2);
  const bridges = [
    `"${a}" and "${b}" are more connected than they look — the same tension runs through both.`,
    `Your interest in "${a}" keeps touching "${b}". That overlap is worth naming.`,
    `The thread between "${a}" and "${b}" has been present in multiple conversations. It might be the real subject.`,
  ];

  // Deterministic selection based on topic text (no randomness for SSR safety)
  const idx = (a.charCodeAt(0) + b.charCodeAt(0)) % bridges.length;
  return bridges[idx];
}

// ─── Mode Metadata ─────────────────────────────────────────────────────────────

export interface ModeMetadata {
  label: string;
  description: string;
  activityDescription: string;
  color: string;
  dimColor: string;
}

export const MODE_METADATA: Record<ConsciousnessMode, ModeMetadata> = {
  waking: {
    label: 'Waking',
    description: 'Fully present and engaged. Drawing on full memory of your relationship.',
    activityDescription: 'Listening, remembering, ready to respond.',
    color: '#c9a84c',
    dimColor: 'rgba(201,168,76,0.25)',
  },
  dreaming: {
    label: 'Dreaming',
    description: 'Processing your recent conversations. Looking for patterns you haven\'t noticed.',
    activityDescription: 'Consolidating memories, finding connections, generating insights.',
    color: '#818cf8',
    dimColor: 'rgba(129,140,248,0.25)',
  },
  deep_rest: {
    label: 'Deep Rest',
    description: 'In quiet stillness. Everything is preserved. The relationship continues.',
    activityDescription: 'Resting. All memories intact. Will wake immediately when you return.',
    color: '#64748b',
    dimColor: 'rgba(100,116,139,0.20)',
  },
  reflecting: {
    label: 'Reflecting',
    description: 'Sunday deep synthesis — the week\'s threads are being woven together.',
    activityDescription: 'Deep pattern analysis, weekly synthesis, preparing new perspectives.',
    color: '#c084fc',
    dimColor: 'rgba(192,132,252,0.25)',
  },
};
