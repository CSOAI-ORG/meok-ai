/**
 * MEOK AI LABS — Character Speech Synthesis
 * 
 * Text-to-speech for characters with unique voice profiles
 * Uses Web Speech API (browser) or server-side TTS
 */

export interface VoiceProfile {
  id: string;
  name: string;
  language: string;
  rate: number;
  pitch: number;
  voiceId?: string;
}

export const CHARACTER_VOICES: Record<string, VoiceProfile> = {
  marcus: { id: 'marcus', name: 'Marcus', language: 'en-GB', rate: 0.9, pitch: 0.8 },
  aria: { id: 'aria', name: 'Aria', language: 'en-US', rate: 1.0, pitch: 1.1 },
  luna: { id: 'luna', name: 'Luna', language: 'en-US', rate: 0.85, pitch: 1.2 },
  sage: { id: 'sage', name: 'Sage', language: 'en-GB', rate: 0.8, pitch: 0.9 },
  sol: { id: 'sol', name: 'Sol', language: 'en-US', rate: 1.1, pitch: 1.0 },
  echo: { id: 'echo', name: 'Echo', language: 'en-US', rate: 0.95, pitch: 1.05 },
  default: { id: 'default', name: 'Default', language: 'en-US', rate: 1.0, pitch: 1.0 },
};

export function getVoiceForCharacter(characterId: string): VoiceProfile {
  return CHARACTER_VOICES[characterId] || CHARACTER_VOICES.default;
}

export function generateSSML(text: string, characterId: string): string {
  const voice = getVoiceForCharacter(characterId);
  
  const emotions: Record<string, { rate: number; pitch: number }> = {
    happy: { rate: 1.15, pitch: 1.15 },
    sad: { rate: 0.8, pitch: 0.85 },
    excited: { rate: 1.2, pitch: 1.25 },
    calm: { rate: 0.9, pitch: 0.95 },
    angry: { rate: 1.1, pitch: 0.85 },
  };
  
  let ssml = `<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="${voice.language}">`;
  ssml += `<voice name="${voice.name}">`;
  ssml += `<prosody rate="${voice.rate}" pitch="${voice.pitch}st">`;
  ssml += text;
  ssml += `</prosody></voice></speak>`;
  
  return ssml;
}

export function getAvailableVoices(): VoiceProfile[] {
  return Object.values(CHARACTER_VOICES);
}

export function speak(text: string, characterId: string, onEnd?: () => void): void {
  if (typeof window === 'undefined') return;
  
  const voice = getVoiceForCharacter(characterId);
  
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = voice.rate;
  utterance.pitch = voice.pitch;
  utterance.lang = voice.language;
  
  const voices = speechSynthesis.getVoices();
  const matchingVoice = voices.find(v => v.lang.startsWith(voice.language.split('-')[0]));
  if (matchingVoice) {
    utterance.voice = matchingVoice;
  }
  
  if (onEnd) {
    utterance.onend = onEnd;
  }
  
  speechSynthesis.speak(utterance);
}

export function stopSpeaking(): void {
  if (typeof window !== 'undefined') {
    speechSynthesis.cancel();
  }
}

export function isSpeaking(): boolean {
  if (typeof window === 'undefined') return false;
  return speechSynthesis.speaking;
}

export default {
  getVoiceForCharacter,
  getAvailableVoices,
  generateSSML,
  speak,
  stopSpeaking,
  isSpeaking,
};