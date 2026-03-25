/**
 * MEOK AI LABS — Voice Input (Web Speech API)
 */

export interface VoiceInputResult {
  transcript: string;
  confidence: number;
  isFinal: boolean;
  language?: string;
}

export type VoiceInputCallback = (result: VoiceInputResult) => void;

let recognition: SpeechRecognition | null = null;

export function isVoiceSupported(): boolean {
  if (typeof window === 'undefined') return false;
  return 'SpeechRecognition' in window || 'webkitSpeechRecognition' in window;
}

export function startListening(onResult: VoiceInputCallback, options?: { language?: string; continuous?: boolean }): void {
  if (!isVoiceSupported()) return;
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  recognition = new SpeechRecognition();
  recognition.continuous = options?.continuous ?? false;
  recognition.interimResults = true;
  recognition.lang = options?.language ?? 'en-GB';
  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const result = event.results[event.results.length - 1];
    onResult({
      transcript: result[0].transcript,
      confidence: result[0].confidence,
      isFinal: result.isFinal,
    });
  };
  recognition.start();
}

export function stopListening(): void {
  recognition?.stop();
  recognition = null;
}
