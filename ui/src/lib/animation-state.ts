/**
 * MEOK AI LABS — Character Animation States
 *
 * CSS keyframe animation definitions for avatar overlays.
 * Four state types: idle, cognitive, emotional, speaking.
 * All animations respect prefers-reduced-motion.
 */

// ── Types ────────────────────────────────────────────────────────────────────

export type AnimationState = 'idle' | 'cognitive' | 'emotional' | 'speaking';

export type Mood =
  | 'happy' | 'sad' | 'angry' | 'fearful'
  | 'surprised' | 'disgusted' | 'neutral'
  | 'excited' | 'calm' | 'anxious';

// ── Mood-to-color mapping ────────────────────────────────────────────────────

const MOOD_COLORS: Record<Mood, { from: string; to: string }> = {
  happy:     { from: 'rgba(255,200,50,0.25)',  to: 'rgba(255,160,30,0.35)' },
  excited:   { from: 'rgba(255,100,50,0.25)',  to: 'rgba(255,60,80,0.35)' },
  calm:      { from: 'rgba(100,180,255,0.2)',  to: 'rgba(130,200,240,0.3)' },
  sad:       { from: 'rgba(80,100,200,0.25)',  to: 'rgba(60,80,180,0.35)' },
  angry:     { from: 'rgba(220,50,50,0.25)',   to: 'rgba(200,30,30,0.4)' },
  fearful:   { from: 'rgba(160,80,200,0.2)',   to: 'rgba(140,60,180,0.3)' },
  surprised: { from: 'rgba(255,220,80,0.25)',  to: 'rgba(255,180,50,0.35)' },
  disgusted: { from: 'rgba(100,160,60,0.2)',   to: 'rgba(80,140,40,0.3)' },
  neutral:   { from: 'rgba(180,180,180,0.15)', to: 'rgba(160,160,160,0.25)' },
  anxious:   { from: 'rgba(200,160,80,0.2)',   to: 'rgba(180,140,60,0.3)' },
};

// ── Keyframe definitions (template literals) ─────────────────────────────────

export const KEYFRAMES_IDLE = `
@keyframes meok-idle {
  0%, 100% { box-shadow: 0 0 8px 2px rgba(140,160,255,0.25); transform: scale(1); }
  50%      { box-shadow: 0 0 14px 4px rgba(140,160,255,0.4);  transform: scale(1.015); }
}`;

export const KEYFRAMES_COGNITIVE = `
@keyframes meok-cognitive {
  0%   { box-shadow: 0 0 10px 3px rgba(100,200,255,0.3); transform: scale(1) rotate(0deg); }
  50%  { box-shadow: 0 0 18px 5px rgba(100,200,255,0.5); transform: scale(1.02) rotate(1.5deg); }
  100% { box-shadow: 0 0 10px 3px rgba(100,200,255,0.3); transform: scale(1) rotate(0deg); }
}`;

export const KEYFRAMES_SPEAKING = `
@keyframes meok-speaking {
  0%, 100% { transform: scaleX(1) scaleY(1); }
  25%      { transform: scaleX(1.03) scaleY(0.97); }
  50%      { transform: scaleX(0.97) scaleY(1.03); }
  75%      { transform: scaleX(1.02) scaleY(0.98); }
}`;

export function keyframesEmotional(mood: Mood): string {
  const c = MOOD_COLORS[mood] ?? MOOD_COLORS.neutral;
  return `
@keyframes meok-emotional {
  0%, 100% { box-shadow: 0 0 10px 3px ${c.from}; }
  50%      { box-shadow: 0 0 20px 6px ${c.to}; }
}`;
}

/** All base keyframes combined — inject once into document head. */
export const ALL_KEYFRAMES = [KEYFRAMES_IDLE, KEYFRAMES_COGNITIVE, KEYFRAMES_SPEAKING].join('\n');

// ── CSS class names ──────────────────────────────────────────────────────────

const STATE_CLASS_MAP: Record<AnimationState, string> = {
  idle:      'meok-anim-idle',
  cognitive: 'meok-anim-cognitive',
  emotional: 'meok-anim-emotional',
  speaking:  'meok-anim-speaking',
};

/**
 * Returns the CSS class name for a given animation state.
 */
export function getAnimationForState(state: AnimationState, _mood?: Mood): string {
  return STATE_CLASS_MAP[state];
}

// ── Inline styles for avatar wrapper ─────────────────────────────────────────

interface AvatarOverlayStyles {
  animation: string;
  borderRadius: string;
  willChange: string;
}

const REDUCED_MOTION: AvatarOverlayStyles = {
  animation: 'none',
  borderRadius: '50%',
  willChange: 'auto',
};

/**
 * Returns an inline CSS style object for the avatar wrapper.
 * Checks `prefers-reduced-motion` to disable animations when appropriate.
 */
export function getAvatarOverlayStyles(
  state: AnimationState,
  mood: Mood = 'neutral',
): AvatarOverlayStyles {
  // Respect prefers-reduced-motion
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
    return REDUCED_MOTION;
  }

  const base: AvatarOverlayStyles = {
    borderRadius: '50%',
    willChange: 'transform, box-shadow',
    animation: '',
  };

  switch (state) {
    case 'idle':
      base.animation = 'meok-idle 2s ease-in-out infinite';
      break;
    case 'cognitive':
      base.animation = 'meok-cognitive 1s ease-in-out infinite';
      break;
    case 'emotional':
      // Emotional keyframes are mood-dependent — caller should also inject
      // keyframesEmotional(mood) into the document.
      base.animation = 'meok-emotional 2s ease-in-out infinite';
      break;
    case 'speaking':
      base.animation = 'meok-speaking 0.5s ease-in-out infinite';
      break;
  }

  return base;
}

// ── Style injection helper ───────────────────────────────────────────────────

let _injected = false;

/**
 * Injects the base keyframe definitions into the document head.
 * Safe to call multiple times — only injects once.
 */
export function injectAnimationStyles(mood?: Mood): void {
  if (typeof document === 'undefined') return;
  if (!_injected) {
    const style = document.createElement('style');
    style.setAttribute('data-meok-animations', 'base');
    style.textContent = ALL_KEYFRAMES;
    document.head.appendChild(style);
    _injected = true;
  }

  // Emotional keyframes are mood-specific; update dynamically
  if (mood) {
    const existing = document.querySelector('style[data-meok-animations="emotional"]');
    if (existing) existing.remove();
    const style = document.createElement('style');
    style.setAttribute('data-meok-animations', 'emotional');
    style.textContent = keyframesEmotional(mood);
    document.head.appendChild(style);
  }
}
