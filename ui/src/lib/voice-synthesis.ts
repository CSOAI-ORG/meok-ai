/**
 * MEOK AI LABS — Voice Synthesis Orchestrator
 *
 * Wraps the base TTS module with character-aware voice selection.
 * Each archetype has a distinct voice profile (pitch, rate, volume)
 * that reflects its personality.
 */

import type { Archetype } from './characters';
import { speak, isTTSSupported, stopSpeaking, type TTSOptions } from './tts';

// ── Voice preset type ────────────────────────────────────────────────────────

export interface VoicePreset {
  pitch: number;   // 0–2
  rate: number;    // 0.1–10
  volume: number;  // 0–1
  description: string;
}

// ── Voice presets for all 9 archetypes ───────────────────────────────────────

export const VOICE_PRESETS: Record<Archetype, VoicePreset> = {
  nurturer:   { pitch: 1.2,  rate: 0.85, volume: 0.9,  description: 'Warm and slow — comforting, maternal tone' },
  challenger: { pitch: 0.75, rate: 1.05, volume: 1.0,  description: 'Strong and moderate — confident, assertive' },
  explorer:   { pitch: 1.05, rate: 1.2,  volume: 0.95, description: 'Energetic and fast — enthusiastic, adventurous' },
  sage:       { pitch: 0.7,  rate: 0.8,  volume: 0.85, description: 'Deep and measured — wise, deliberate' },
  seeker:     { pitch: 1.1,  rate: 1.0,  volume: 0.9,  description: 'Curious and varied — inquisitive, searching' },
  creator:    { pitch: 1.15, rate: 1.05, volume: 0.95, description: 'Expressive and varied — artistic, dynamic' },
  trickster:  { pitch: 1.3,  rate: 1.25, volume: 1.0,  description: 'Playful and fast — mischievous, light-hearted' },
  rebel:      { pitch: 0.65, rate: 1.0,  volume: 1.0,  description: 'Bold and moderate — defiant, intense' },
  innocent:   { pitch: 1.35, rate: 0.88, volume: 0.8,  description: 'Gentle and slow — soft, pure, child-like' },
};

// ── Character-to-archetype mapping cache ─────────────────────────────────────

let _archetypeCache: Map<string, Archetype> | null = null;

async function loadArchetypeCache(): Promise<Map<string, Archetype>> {
  if (_archetypeCache) return _archetypeCache;
  // Lazy import to avoid circular deps
  const { CHARACTERS } = await import('./characters');
  _archetypeCache = new Map<string, Archetype>();
  for (const [id, char] of Object.entries(CHARACTERS)) {
    _archetypeCache.set(id, (char as { archetype: Archetype }).archetype);
  }
  return _archetypeCache;
}

// ── Public API ───────────────────────────────────────────────────────────────

/**
 * Resolve the voice preset for a given character ID.
 * Falls back to the sage preset if the character is unknown.
 */
export async function getVoiceForCharacter(characterId: string): Promise<VoicePreset> {
  const cache = await loadArchetypeCache();
  const archetype = cache.get(characterId) ?? 'sage';
  return VOICE_PRESETS[archetype];
}

/**
 * Speak text using the voice profile associated with a character.
 * Returns the utterance (or null if TTS unavailable).
 */
export async function speakAsCharacter(
  text: string,
  characterId: string,
  extraOptions?: Pick<TTSOptions, 'voice'>,
): Promise<SpeechSynthesisUtterance | null> {
  if (!isTTSSupported()) return null;

  const preset = await getVoiceForCharacter(characterId);
  return speak(text, {
    pitch: preset.pitch,
    rate: preset.rate,
    volume: preset.volume,
    voice: extraOptions?.voice ?? null,
  });
}

export { stopSpeaking, isTTSSupported };
