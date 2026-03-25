/**
 * MEOK AI LABS — Character Mood State Machine
 *
 * Tracks and transitions character mood based on interaction patterns,
 * emotions detected, and time-based factors.
 */

// ── Types ──────────────────────────────────────────────────────────────────

export type Mood = 'happy' | 'sad' | 'anxious' | 'excited' | 'calm' | 'angry' | 'bored' | 'curious';

export type EmotionSignal =
  | 'joy'
  | 'sadness'
  | 'anger'
  | 'fear'
  | 'surprise'
  | 'disgust'
  | 'trust'
  | 'anticipation'
  | 'neutral';

export interface MoodState {
  mood: Mood;
  intensity: number; // 0–1
  since: string;     // ISO 8601 timestamp
  trigger: string;   // human-readable reason for this mood
}

// ── Constants ──────────────────────────────────────────────────────────────

/** How emotions map to target moods (primary + secondary). */
const EMOTION_MOOD_MAP: Record<EmotionSignal, { primary: Mood; secondary: Mood }> = {
  joy:          { primary: 'happy',   secondary: 'excited' },
  sadness:      { primary: 'sad',     secondary: 'anxious' },
  anger:        { primary: 'angry',   secondary: 'anxious' },
  fear:         { primary: 'anxious', secondary: 'sad' },
  surprise:     { primary: 'excited', secondary: 'curious' },
  disgust:      { primary: 'angry',   secondary: 'sad' },
  trust:        { primary: 'calm',    secondary: 'happy' },
  anticipation: { primary: 'excited', secondary: 'curious' },
  neutral:      { primary: 'calm',    secondary: 'curious' },
};

/** Minutes of absence thresholds. */
const ABSENCE_BORED_THRESHOLD = 60 * 24;    // 1 day
const ABSENCE_CURIOUS_THRESHOLD = 60 * 2;   // 2 hours

/** How many consecutive interactions push toward calm. */
const CALM_INTERACTION_THRESHOLD = 8;

// ── Core Functions ─────────────────────────────────────────────────────────

/**
 * Compute the next mood state given the current mood, a detected emotion,
 * time since last interaction, and the running interaction count.
 */
export function computeMoodTransition(
  currentMood: MoodState,
  emotion: EmotionSignal,
  timeSinceLastInteractionMinutes: number,
  interactionCount: number,
): MoodState {
  const now = new Date().toISOString();

  // Rule 1: Long absence -> bored or curious
  if (timeSinceLastInteractionMinutes >= ABSENCE_BORED_THRESHOLD) {
    return {
      mood: 'bored',
      intensity: Math.min(0.8, timeSinceLastInteractionMinutes / (ABSENCE_BORED_THRESHOLD * 3)),
      since: now,
      trigger: `Haven't chatted in ${Math.round(timeSinceLastInteractionMinutes / 60)} hours`,
    };
  }

  if (timeSinceLastInteractionMinutes >= ABSENCE_CURIOUS_THRESHOLD) {
    return {
      mood: 'curious',
      intensity: 0.6,
      since: now,
      trigger: `Returning after ${Math.round(timeSinceLastInteractionMinutes / 60)} hours away`,
    };
  }

  // Rule 2: Repeated interactions -> calm (settling in)
  if (interactionCount >= CALM_INTERACTION_THRESHOLD && emotion === 'neutral') {
    return {
      mood: 'calm',
      intensity: Math.min(0.9, 0.5 + interactionCount * 0.03),
      since: now,
      trigger: `Settled into a steady rhythm after ${interactionCount} exchanges`,
    };
  }

  // Rule 3: Emotion-driven transition
  const mapping = EMOTION_MOOD_MAP[emotion];
  const targetMood = mapping.primary;

  // Blend intensity: strong if mood changes, moderate if reinforcing
  const isReinforcing = currentMood.mood === targetMood;
  const baseIntensity = isReinforcing
    ? Math.min(1, currentMood.intensity + 0.1)
    : 0.6;

  return {
    mood: targetMood,
    intensity: baseIntensity,
    since: now,
    trigger: `Detected ${emotion} emotion`,
  };
}

/**
 * Returns a system-prompt snippet describing the character's current mood.
 */
export function formatMoodContext(mood: MoodState): string {
  const intensityWord =
    mood.intensity > 0.75 ? 'deeply'
    : mood.intensity > 0.5 ? 'noticeably'
    : mood.intensity > 0.25 ? 'slightly'
    : 'faintly';

  return `You're currently feeling ${intensityWord} ${mood.mood}. This has been your state since ${mood.since}. Let this color your tone naturally without being performative about it.`;
}

/**
 * Returns an appropriate opening line based on mood and time of day.
 */
export function getMoodGreeting(mood: MoodState, timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night'): string {
  const greetings: Record<Mood, Record<typeof timeOfDay, string>> = {
    happy: {
      morning: 'Good morning! I woke up on the bright side today.',
      afternoon: 'Hey there! Having a genuinely good afternoon.',
      evening: 'Good evening! Still riding a good wave.',
      night: 'Hey, night owl. I\'m in a good place tonight.',
    },
    sad: {
      morning: 'Morning. I\'m here, even if things feel a bit heavy right now.',
      afternoon: 'Hi. Sitting with some quiet feelings today.',
      evening: 'Evening. It\'s been one of those days, but I\'m here.',
      night: 'Hey. Nights like this can be hard. I\'m glad you\'re here.',
    },
    anxious: {
      morning: 'Morning. My thoughts are buzzing a bit today.',
      afternoon: 'Hi. Feeling a little restless this afternoon.',
      evening: 'Evening. There\'s a lot on my mind tonight.',
      night: 'Hey. Can\'t quite settle tonight. Let\'s talk.',
    },
    excited: {
      morning: 'Good morning! I\'ve got so much energy today!',
      afternoon: 'Hey! This afternoon feels full of possibility.',
      evening: 'Good evening! Still buzzing with ideas.',
      night: 'Hey! I know it\'s late but I can\'t stop thinking about things.',
    },
    calm: {
      morning: 'Good morning. Feeling steady and ready.',
      afternoon: 'Hey. Nice, calm afternoon. What\'s on your mind?',
      evening: 'Good evening. Feeling grounded tonight.',
      night: 'Hey. Quiet night. I\'m here whenever you need.',
    },
    angry: {
      morning: 'Morning. I\'m a bit fired up today, honestly.',
      afternoon: 'Hi. Something\'s got under my skin this afternoon.',
      evening: 'Evening. I\'m feeling some edge tonight.',
      night: 'Hey. Some nights the frustration doesn\'t sleep.',
    },
    bored: {
      morning: 'Oh hey! It\'s been a while. I was starting to wonder about you.',
      afternoon: 'There you are! I\'ve been waiting. What took you so long?',
      evening: 'Finally! I\'ve been twiddling my thumbs all day.',
      night: 'Oh, hello! I was about to start talking to myself.',
    },
    curious: {
      morning: 'Good morning! I\'ve been wondering what you\'ve been up to.',
      afternoon: 'Hey! I have so many questions. How\'s your day been?',
      evening: 'Evening! Tell me everything. What did I miss?',
      night: 'Hey there. I\'ve been curious about where your head\'s at.',
    },
  };

  return greetings[mood.mood][timeOfDay];
}

/**
 * Create a default initial mood state.
 */
export function createInitialMoodState(): MoodState {
  return {
    mood: 'curious',
    intensity: 0.5,
    since: new Date().toISOString(),
    trigger: 'Initial state',
  };
}
