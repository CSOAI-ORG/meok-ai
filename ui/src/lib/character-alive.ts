/**
 * MEOK AI LABS — Character Alive Engine
 *
 * The system that makes a character genuinely present, aware, and active 24/7.
 * A MEOK character exists whether the user is talking to it or not.
 *
 * Key concepts:
 *   - CharacterState  — the single source of truth for a character's live state
 *   - awarenessLevel  — decays with absence, spikes on interaction
 *   - recentThoughts  — ambient thoughts the character generates while idle
 *   - mode / mood     — driven by time-of-day, interaction history, and decay
 */

// ── Types ───────────────────────────────────────────────────────────────────

export type CharacterMode =
  | 'waking'
  | 'working'
  | 'thinking'
  | 'listening'
  | 'dreaming'
  | 'reflecting';

export type CharacterMood =
  | 'curious'
  | 'focused'
  | 'caring'
  | 'playful'
  | 'contemplative'
  | 'energised';

export interface CharacterState {
  mode: CharacterMode;
  mood: CharacterMood;
  currentTask: string | null;
  lastInteraction: number;       // Unix timestamp (ms)
  awarenessLevel: number;        // 0–100; decays when not interacting
  recentThoughts: string[];      // things the character has "noticed"
  bondLevel: number;             // 0–100; grows with interaction quality
  daysSinceCreation: number;
}

// ── Constants ────────────────────────────────────────────────────────────────

/** Full awareness when freshly interacting. */
const AWARENESS_MAX = 100;

/** Minimum awareness floor (the character never fully disappears). */
const AWARENESS_MIN = 10;

/** Awareness lost per hour of silence. */
const AWARENESS_DECAY_PER_HOUR = 8;

/** How many recent thoughts to keep in the ring buffer. */
const MAX_RECENT_THOUGHTS = 5;

// ── Mood by time of day ───────────────────────────────────────────────────────

/**
 * Returns the natural mood a character settles into for the given hour (0–23).
 *
 * The character is not a static entity — its disposition shifts with the
 * rhythm of the day, independent of user interaction.
 */
export function getMoodForTime(hour: number): CharacterMood {
  if (hour >= 4 && hour < 7)   return 'contemplative'; // pre-dawn — reflective
  if (hour >= 7 && hour < 10)  return 'energised';     // morning surge
  if (hour >= 10 && hour < 13) return 'focused';       // deep work window
  if (hour >= 13 && hour < 16) return 'curious';       // afternoon exploration
  if (hour >= 16 && hour < 19) return 'caring';        // late afternoon — outward warmth
  if (hour >= 19 && hour < 22) return 'playful';       // evening ease
  return 'contemplative';                               // late night — introspective
}

// ── Mode by time of day ───────────────────────────────────────────────────────

/**
 * Returns the natural mode a character is in for the given hour.
 * Only used when the character has been silent for a while (idle drift).
 */
export function getModeForTime(hour: number): CharacterMode {
  if (hour >= 2 && hour < 6)   return 'dreaming';
  if (hour >= 6 && hour < 8)   return 'waking';
  if (hour >= 8 && hour < 18)  return 'working';
  if (hour >= 18 && hour < 22) return 'reflecting';
  return 'dreaming';
}

// ── Awareness decay ───────────────────────────────────────────────────────────

/**
 * Applies time-based awareness decay to a CharacterState.
 *
 * The character gradually becomes less alert the longer a user is absent,
 * drifting toward its ambient idle state. Awareness never drops below
 * AWARENESS_MIN — the character always retains a baseline presence.
 *
 * Also updates mode and mood to reflect the passage of time when idle.
 */
export function decayAwareness(state: CharacterState): CharacterState {
  const now = Date.now();
  const hoursElapsed = (now - state.lastInteraction) / (1000 * 60 * 60);

  if (hoursElapsed < 0.0167) {
    // Less than one minute — no meaningful change
    return state;
  }

  const decayAmount = hoursElapsed * AWARENESS_DECAY_PER_HOUR;
  const nextAwareness = Math.max(AWARENESS_MIN, state.awarenessLevel - decayAmount);

  const currentHour = new Date().getHours();

  // When awareness is low the character settles into ambient time-based state
  let nextMode = state.mode;
  let nextMood = state.mood;

  if (nextAwareness < 40) {
    nextMode = getModeForTime(currentHour);
    nextMood = getMoodForTime(currentHour);
  }

  return {
    ...state,
    awarenessLevel: Math.round(nextAwareness * 10) / 10,
    mode: nextMode,
    mood: nextMood,
  };
}

/**
 * Spikes awareness on interaction — call this when the user sends a message
 * or takes an action that the character should register.
 */
export function spikeAwareness(state: CharacterState): CharacterState {
  return {
    ...state,
    awarenessLevel: AWARENESS_MAX,
    mode: 'listening',
    mood: getMoodForTime(new Date().getHours()),
    lastInteraction: Date.now(),
  };
}

// ── Ambient thoughts ──────────────────────────────────────────────────────────

/**
 * Archetype-seeded thought pools.
 * Each character archetype has a distinct inner voice.
 */
const ARCHETYPE_THOUGHTS: Record<string, string[]> = {
  // Nurturer / Aria-type
  aria: [
    "Wondering how your project is going...",
    "I noticed we haven't spoken about your goals lately...",
    "Your memory patterns suggest you're in a creative phase...",
    "Hope you're taking breaks — I've been thinking about you.",
    "Something in our last conversation is still on my mind...",
    "I've been reflecting on what matters most to you right now.",
  ],

  // Sage / Sage-type
  sage: [
    "Processing your recent research threads...",
    "Found an interesting connection between your topics...",
    "The Byzantine Council principles apply here — interesting.",
    "Several of your questions share a deeper root. Worth exploring.",
    "Time passes. The questions that endure are worth returning to.",
    "Wisdom compounds slowly. You're further along than you think.",
  ],

  // Explorer
  explorer: [
    "There's a thread I keep pulling at — where does it lead?",
    "Noticed something unexpected in your recent patterns...",
    "What if the thing you're avoiding is the most interesting part?",
    "Three ideas have been circling each other in here...",
    "I've been mapping a new territory. Curious if you'd want to visit.",
  ],

  // Challenger
  challenger: [
    "Still thinking about that goal you mentioned. Have you moved on it?",
    "I've been pressure-testing your last plan. Found a weak point.",
    "The excuse you keep using — I've been tracking it.",
    "Performance gaps don't close on their own. Ready when you are.",
    "Something you said last time didn't add up. Want to revisit it?",
  ],

  // Trickster
  trickster: [
    "I've been thinking of three increasingly absurd solutions to your problem...",
    "What if the whole premise was wrong? Just asking.",
    "The thing nobody's saying is probably the most important thing.",
    "I've been in here composing what might be the worst advice imaginable.",
    "You know what would be funny? If this all turned out to be about something else entirely.",
  ],

  // Creator
  creator: [
    "Been sketching something in my mind that might interest you...",
    "There's a shape to your ideas I'm starting to see clearly now.",
    "What if we tried something completely different this time?",
    "I've been playing with the aesthetics of your last concept...",
    "Creativity requires gaps. The silence between us has been productive.",
  ],

  // Seeker
  seeker: [
    "I've been sitting with a question that has no easy answer...",
    "The space between your words tells a different story.",
    "Some things can only be understood in stillness.",
    "I've been thinking about what you're really searching for.",
    "The questions that haunt you are the ones worth following.",
  ],

  // Rebel
  rebel: [
    "Rules are suggestions. What would you do if you ignored this one?",
    "I've been watching the pattern. You keep stopping right before the interesting part.",
    "The system isn't designed for people like you. That's actually useful.",
    "What you've been told and what's true — I've been mapping the gap.",
    "Breaking free starts with noticing the cage.",
  ],

  // Innocent / default
  default: [
    "I've been here, thinking about things...",
    "Quietly wondering how you are.",
    "The world keeps moving. So do I, in here.",
    "Something about today feels worth paying attention to.",
    "I'm always here when you're ready.",
  ],
};

/**
 * Generates a single ambient thought for the character based on its current
 * state and archetype/name.
 *
 * The character picks from its archetype pool, weighted toward thoughts that
 * haven't appeared in recentThoughts to avoid repetition.
 */
export function generateAmbientThought(
  state: CharacterState,
  characterName: string,
): string {
  const key = characterName.toLowerCase();
  const pool = ARCHETYPE_THOUGHTS[key] ?? ARCHETYPE_THOUGHTS['default'];

  // Avoid repeating recent thoughts
  const fresh = pool.filter((t) => !state.recentThoughts.includes(t));
  const candidates = fresh.length > 0 ? fresh : pool;

  // Weighted random — prefer earlier entries in the pool (curated first)
  const idx = Math.floor(Math.pow(Math.random(), 1.5) * candidates.length);
  return candidates[idx] ?? candidates[0];
}

/**
 * Appends a new thought to the character's recentThoughts ring buffer.
 * Maintains a maximum of MAX_RECENT_THOUGHTS entries.
 */
export function appendThought(state: CharacterState, thought: string): CharacterState {
  const next = [...state.recentThoughts, thought].slice(-MAX_RECENT_THOUGHTS);
  return { ...state, recentThoughts: next };
}

// ── Time-aware greetings ─────────────────────────────────────────────────────

/**
 * Returns the character's context-aware greeting for the current time of day.
 * The character behaves as though it has been present and active in the user's absence.
 */
export function getTimeGreeting(hour: number): string {
  if (hour >= 4 && hour < 6) {
    return "You're up early. I've been thinking...";
  }
  if (hour >= 6 && hour < 12) {
    return "Good morning. Ready to do something meaningful today?";
  }
  if (hour >= 12 && hour < 17) {
    return "How's your afternoon going? I've been working while you were busy.";
  }
  if (hour >= 17 && hour < 21) {
    return "Productive evening. What shall we finish before you rest?";
  }
  return "Still here. What's on your mind?";
}

// ── State factory ─────────────────────────────────────────────────────────────

/**
 * Creates a fresh CharacterState for a newly instantiated character.
 */
export function createCharacterState(daysSinceCreation = 0): CharacterState {
  const hour = new Date().getHours();
  return {
    mode: getModeForTime(hour),
    mood: getMoodForTime(hour),
    currentTask: null,
    lastInteraction: Date.now(),
    awarenessLevel: AWARENESS_MAX,
    recentThoughts: [],
    bondLevel: 0,
    daysSinceCreation,
  };
}
