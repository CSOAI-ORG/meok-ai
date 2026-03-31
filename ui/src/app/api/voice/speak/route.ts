/**
 * MEOK AI LABS — Voice Synthesis API
 *
 * POST /api/voice/speak
 * Accepts text + voice config, returns audio stream.
 *
 * Phase 1 (current): Returns 503 (browser TTS used instead)
 * Phase 2 (May): VibeVoice-Realtime-0.5B on M2 for 11 style voices
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json() as {
      text?: string;
      voice?: string;    // VibeVoice style voice ID
      speed?: number;    // 0.5-2.0
      archetype?: string; // MEOK archetype for voice selection
    };

    if (!body.text || body.text.length === 0) {
      return NextResponse.json({ error: 'No text provided' }, { status: 400 });
    }

    if (body.text.length > 5000) {
      return NextResponse.json({ error: 'Text too long (max 5000 chars)' }, { status: 400 });
    }

    // Phase 2: VibeVoice-Realtime-0.5B endpoint
    // const m2Host = process.env.M2_VOICE_HOST || 'http://192.168.1.159:8765';
    // const audioStream = await fetch(`${m2Host}/v1/audio/speech`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     model: 'vibevoice-realtime-0.5b',
    //     input: body.text,
    //     voice: body.voice ?? mapArchetypeToVoice(body.archetype),
    //     speed: body.speed ?? 1.0,
    //     response_format: 'opus',
    //   }),
    // });
    // return new Response(audioStream.body, {
    //   headers: { 'Content-Type': 'audio/opus', 'Transfer-Encoding': 'chunked' },
    // });

    // Phase 1: Not available — client falls back to browser TTS
    return NextResponse.json({
      error: 'Server-side voice synthesis not yet available. Using browser TTS.',
      fallback: true,
      phase: 1,
      roadmap: 'VibeVoice-Realtime-0.5B coming May 2026',
    }, { status: 503 });

  } catch (err) {
    console.error('[voice/speak] Error:', err);
    return NextResponse.json({ error: 'Voice synthesis failed' }, { status: 500 });
  }
}
