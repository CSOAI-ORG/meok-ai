/**
 * MEOK AI LABS — Voice Synthesis API
 *
 * POST /api/voice/speak
 * Accepts text + voice config, returns audio stream.
 */

import { NextRequest, NextResponse } from 'next/server';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const CARTESIA_API_KEY = process.env.CARTESIA_API_KEY;
const ELEVENLABS_BASE = 'https://api.elevenlabs.io/v1';
const CARTESIA_BASE = 'https://api.cartesia.ai/v1';
const DEFAULT_VOICE_ID = process.env.ELEVENLABS_VOICE_ID || '21m00tcm4thu58s8l0';

// Character/archetype voice mappings (ElevenLabs voice IDs)
const CHARACTER_VOICES: Record<string, { voiceId: string; model?: string }> = {
  aria:     { voiceId: '21m00tcm4thu58s8l0' },
  marcus:   { voiceId: 'pNInz6obgDQggFHNpFak' },
  luna:     { voiceId: 'EXAVITQ4r9J7jiJRI0k' },
  kai:      { voiceId: 'iP95k6y0x0N2qO1k' },
  sage:     { voiceId: 'vGaxn0IYP5r0qHNpFak' },
  ember:    { voiceId: 'MFNMm6M4T5F0qHNpFak' },
  nova:     { voiceId: 'vrXW0QD2YP5r0qHNpFak' },
  river:    { voiceId: 'wL3VD8m5t5F0qHNpFak' },
  atlas:    { voiceId: '2RCM3m4t5F0qHNpFak' },
  iris:     { voiceId: '7G7W4x9t5F0qHNpFak' },
  zephyr:   { voiceId: 'wL3VD8m5t5F0qHNpFak' },
  rex:      { voiceId: 'pNInz6obgDQggFHNpFak' },
  echo:     { voiceId: '21m00tcm4thu58s8l0' },
  flux:     { voiceId: 'MFNMm6M4T5F0qHNpFak' },
  sol:      { voiceId: 'MFNMm6M4T5F0qHNpFak' },
  nyx:      { voiceId: 'vGaxn0IYP5r0qHNpFak' },
  quinn:    { voiceId: '21m00tcm4thu58s8l0' },
  terra:    { voiceId: '21m00tcm4thu58s8l0' },
  pixel:    { voiceId: 'MFNMm6M4T5F0qHNpFak' },
  titan:    { voiceId: 'pNInz6obgDQggFHNpFak' },
  mochi:    { voiceId: 'EXAVITQ4r9J7jiJRI0k' },
  cipher:   { voiceId: 'iP95k6y0x0N2qO1k' },
  vox:      { voiceId: 'MFNMm6M4T5F0qHNpFak' },
  dusk:     { voiceId: 'vGaxn0IYP5r0qHNpFak' },
  ananda:   { voiceId: 'wL3VD8m5t5F0qHNpFak' },
  gabriel:  { voiceId: '2RCM3m4t5F0qHNpFak' },
  shanti:   { voiceId: '21m00tcm4thu58s8l0' },
  commander:{ voiceId: 'pNInz6obgDQggFHNpFak' },
  sage_rpg: { voiceId: 'vGaxn0IYP5r0qHNpFak' },
  cipher_puzzle: { voiceId: 'iP95k6y0x0N2qO1k' },
  rally:    { voiceId: 'MFNMm6M4T5F0qHNpFak' },
  // Archetype fallbacks
  nurturer: { voiceId: 'wL3VD8m5t5F0qHNpFak' },
  challenger:{ voiceId: 'pNInz6obgDQggFHNpFak' },
  explorer: { voiceId: 'iP95k6y0x0N2qO1k' },
  seeker:   { voiceId: 'EXAVITQ4r9J7jiJRI0k' },
  creator:  { voiceId: '21m00tcm4thu58s8l0' },
  trickster:{ voiceId: 'MFNMm6M4T5F0qHNpFak' },
  rebel:    { voiceId: 'vGaxn0IYP5r0qHNpFak' },
  innocent: { voiceId: 'EXAVITQ4r9J7jiJRI0k' },
};

function resolveVoiceId(voice?: string, archetype?: string): string {
  if (voice && CHARACTER_VOICES[voice]) {
    return CHARACTER_VOICES[voice].voiceId;
  }
  if (archetype && CHARACTER_VOICES[archetype]) {
    return CHARACTER_VOICES[archetype].voiceId;
  }
  return DEFAULT_VOICE_ID;
}

async function elevenlabsSpeak(text: string, voiceId: string, speed?: number): Promise<ArrayBuffer | null> {
  if (!ELEVENLABS_API_KEY) return null;

  try {
    const response = await fetch(
      `${ELEVENLABS_BASE}/text-to-speech/${voiceId}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'xi-api-key': ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text,
          model_id: 'eleven_monolingual_v1',
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
            style: 0.3,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error('[voice/speak] ElevenLabs error:', await response.text());
      return null;
    }

    return response.arrayBuffer();
  } catch (error) {
    console.error('[voice/speak] ElevenLabs error:', error);
    return null;
  }
}

async function cartesiaSpeak(text: string, voiceId: string): Promise<ArrayBuffer | null> {
  if (!CARTESIA_API_KEY) return null;

  try {
    const response = await fetch(
      `${CARTESIA_BASE}/tts`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-Key': CARTESIA_API_KEY,
        },
        body: JSON.stringify({
          model: 'sonic-8k',
          message: text,
          voice_id: voiceId,
        }),
      }
    );

    if (!response.ok) {
      console.error('[voice/speak] Cartesia error:', await response.text());
      return null;
    }

    return response.arrayBuffer();
  } catch (error) {
    console.error('[voice/speak] Cartesia error:', error);
    return null;
  }
}

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      text?: string;
      voice?: string;
      speed?: number;
      archetype?: string;
    };

    if (!body.text || body.text.length === 0) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    if (body.text.length > 5000) {
      return NextResponse.json({ error: 'Text too long (max 5000 chars)' }, { status: 400 });
    }

    const voiceId = resolveVoiceId(body.voice, body.archetype);
    const truncatedText = body.text.slice(0, 2500);

    let audioBuffer: ArrayBuffer | null = await elevenlabsSpeak(truncatedText, voiceId, body.speed);
    let usedProvider = 'elevenlabs';

    if (!audioBuffer) {
      audioBuffer = await cartesiaSpeak(truncatedText, voiceId);
      usedProvider = 'cartesia';
    }

    if (!audioBuffer) {
      return NextResponse.json({
        error: 'Server-side voice synthesis unavailable. No TTS provider configured or all providers failed.',
        fallback: true,
        hint: 'Set ELEVENLABS_API_KEY or CARTESIA_API_KEY to enable server-side TTS, or use browser TTS (window.speechSynthesis).',
        providers: {
          elevenlabs: ELEVENLABS_API_KEY ? 'configured' : 'missing API key',
          cartesia: CARTESIA_API_KEY ? 'configured' : 'missing API key',
        },
      }, { status: 503 });
    }

    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'X-Provider': usedProvider,
        'X-Voice-Id': voiceId,
      },
    });

  } catch (err) {
    console.error('[voice/speak] Error:', err);
    return NextResponse.json({ error: 'Voice synthesis failed' }, { status: 500 });
  }
}
