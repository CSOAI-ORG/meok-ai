/**
 * MEOK AI LABS — Text-to-Speech (Web Speech Synthesis API)
 */

import type { Archetype } from './characters';

export interface TTSOptions {
  pitch?: number;   // 0–2, default 1
  rate?: number;    // 0.1–10, default 1
  volume?: number;  // 0–1, default 1
  voice?: SpeechSynthesisVoice | null;
}

/** Voice presets mapped to MEOK archetypes. */
export const ARCHETYPE_VOICE_PRESETS: Record<Archetype, Pick<TTSOptions, 'pitch' | 'rate'>> = {
  challenger: { pitch: 0.8, rate: 1.1 },
  nurturer:   { pitch: 1.2, rate: 0.9 },
  explorer:   { pitch: 1.0, rate: 1.15 },
  sage:       { pitch: 0.9, rate: 0.85 },
  seeker:     { pitch: 1.1, rate: 1.0 },
  creator:    { pitch: 1.15, rate: 1.0 },
  trickster:  { pitch: 1.05, rate: 1.2 },
  rebel:      { pitch: 0.75, rate: 1.05 },
  innocent:   { pitch: 1.25, rate: 0.95 },
};

export function isTTSSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'speechSynthesis' in window;
}

/**
 * Returns available speech synthesis voices.
 * Voices load asynchronously in some browsers, so this returns a promise
 * that resolves once they are available.
 */
export function getVoices(): Promise<SpeechSynthesisVoice[]> {
  return new Promise((resolve) => {
    if (!isTTSSupported()) { resolve([]); return; }
    const voices = window.speechSynthesis.getVoices();
    if (voices.length > 0) { resolve(voices); return; }
    // Chrome loads voices asynchronously
    window.speechSynthesis.onvoiceschanged = () => {
      resolve(window.speechSynthesis.getVoices());
    };
  });
}

/**
 * Speak text aloud using the Web Speech Synthesis API.
 * Optionally accepts pitch, rate, volume, and voice overrides.
 */
export function speak(text: string, options?: TTSOptions): SpeechSynthesisUtterance | null {
  if (!isTTSSupported()) return null;
  // Cancel any ongoing speech before starting new
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.pitch  = options?.pitch  ?? 1;
  utterance.rate   = options?.rate   ?? 1;
  utterance.volume = options?.volume ?? 1;
  if (options?.voice) utterance.voice = options.voice;

  window.speechSynthesis.speak(utterance);
  return utterance;
}

/**
 * Speak text with an archetype voice preset.
 */
export function speakAs(text: string, archetype: Archetype, options?: Omit<TTSOptions, 'pitch' | 'rate'>): SpeechSynthesisUtterance | null {
  const preset = ARCHETYPE_VOICE_PRESETS[archetype];
  return speak(text, { ...options, ...preset });
}

/**
 * Cancel any current speech output.
 */
export function stopSpeaking(): void {
  if (!isTTSSupported()) return;
  window.speechSynthesis.cancel();
}
