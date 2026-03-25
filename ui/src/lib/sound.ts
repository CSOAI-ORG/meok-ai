/**
 * MEOK AI LABS — Sound Design System
 * Procedural Web Audio API sounds, zero external dependencies.
 */

export type SoundType = 'message-sent' | 'response-arriving' | 'error' | 'level-up';

const STORAGE_KEY = 'meok-sound-enabled';

let audioCtx: AudioContext | null = null;

function getCtx(): AudioContext {
  if (!audioCtx) {
    audioCtx = new AudioContext();
  }
  // Resume if suspended (browser autoplay policy)
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/* ------------------------------------------------------------------ */
/*  Preference helpers                                                 */
/* ------------------------------------------------------------------ */

export function isSoundEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEY) !== 'false'; // default on
}

export function setSoundEnabled(enabled: boolean): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, String(enabled));
}

/* ------------------------------------------------------------------ */
/*  Sound generators                                                   */
/* ------------------------------------------------------------------ */

/** Helper: play an oscillator note. */
function note(
  ctx: AudioContext,
  freq: number,
  startTime: number,
  duration: number,
  volume: number,
  type: OscillatorType = 'sine',
): void {
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.setValueAtTime(freq, startTime);
  gain.gain.setValueAtTime(0, startTime);
  gain.gain.linearRampToValueAtTime(volume, startTime + 0.01);
  gain.gain.linearRampToValueAtTime(0, startTime + duration);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(startTime);
  osc.stop(startTime + duration + 0.05);
}

/** Helper: frequency from MIDI note number. */
function midiToFreq(midi: number): number {
  return 440 * Math.pow(2, (midi - 69) / 12);
}

// C5=72, E5=76, G5=79, G4=67, E4=64, C4=60
const C5 = midiToFreq(72);
const E5 = midiToFreq(76);
const G5 = midiToFreq(79);
const G4 = midiToFreq(67);
const E4 = midiToFreq(64);
const C4 = midiToFreq(60);

function playMessageSent(ctx: AudioContext): void {
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(C5, t);
  osc.frequency.linearRampToValueAtTime(E5, t + 0.1);

  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.15, t + 0.01);
  gain.gain.linearRampToValueAtTime(0, t + 0.1);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.15);
}

function playResponseArriving(ctx: AudioContext): void {
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(G4, t);

  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.07, t + 0.1);
  gain.gain.linearRampToValueAtTime(0, t + 0.2);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.25);
}

function playError(ctx: AudioContext): void {
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(E4, t);
  osc.frequency.linearRampToValueAtTime(C4, t + 0.15);

  gain.gain.setValueAtTime(0, t);
  gain.gain.linearRampToValueAtTime(0.12, t + 0.01);
  gain.gain.linearRampToValueAtTime(0, t + 0.15);

  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start(t);
  osc.stop(t + 0.2);
}

function playLevelUp(ctx: AudioContext): void {
  const t = ctx.currentTime;
  // Triumphant arpeggio: C5 -> E5 -> G5
  note(ctx, C5, t, 0.12, 0.15);
  note(ctx, E5, t + 0.1, 0.12, 0.15);
  note(ctx, G5, t + 0.2, 0.18, 0.18);
}

/* ------------------------------------------------------------------ */
/*  Public API                                                         */
/* ------------------------------------------------------------------ */

const PLAYERS: Record<SoundType, (ctx: AudioContext) => void> = {
  'message-sent': playMessageSent,
  'response-arriving': playResponseArriving,
  'error': playError,
  'level-up': playLevelUp,
};

export function playSound(type: SoundType): void {
  if (!isSoundEnabled()) return;
  try {
    const ctx = getCtx();
    PLAYERS[type](ctx);
  } catch {
    // Silently fail — audio is non-critical
  }
}
