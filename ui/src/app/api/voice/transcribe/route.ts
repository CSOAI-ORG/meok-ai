/**
 * MEOK AI LABS — Voice Transcription API
 *
 * POST /api/voice/transcribe
 * Accepts audio blob, returns transcription text.
 *
 * Phase 1 (current): Uses Ollama whisper or returns placeholder
 * Phase 2 (May): VibeVoice-ASR 7B on M4 for 50+ language support
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const audio = formData.get('audio') as Blob | null;

    if (!audio) {
      return NextResponse.json({ error: 'No audio provided' }, { status: 400 });
    }

    // Phase 1: Try Ollama whisper endpoint
    const ollamaUrl = (process.env.OLLAMA_ENDPOINT || 'http://localhost:11434').replace(/\/v1\/?$/, '');

    try {
      const whisperForm = new FormData();
      whisperForm.append('file', audio, 'audio.webm');
      whisperForm.append('model', 'whisper');

      const res = await fetch(`${ollamaUrl}/v1/audio/transcriptions`, {
        method: 'POST',
        body: whisperForm,
        signal: AbortSignal.timeout(30000),
      });

      if (res.ok) {
        const data = await res.json() as { text?: string };
        return NextResponse.json({
          text: data.text ?? '',
          model: 'whisper',
          language: 'en',
        });
      }
    } catch {
      // Whisper not available — fall through
    }

    // Phase 2 placeholder: VibeVoice-ASR will go here
    // const vibeRes = await fetch('http://localhost:PORT/v1/audio/transcriptions', { ... });

    return NextResponse.json({
      error: 'Voice transcription not available. Install whisper model: ollama pull whisper',
      fallback: true,
    }, { status: 503 });

  } catch (err) {
    console.error('[voice/transcribe] Error:', err);
    return NextResponse.json({ error: 'Transcription failed' }, { status: 500 });
  }
}
