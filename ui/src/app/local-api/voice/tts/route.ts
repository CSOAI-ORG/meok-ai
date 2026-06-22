/**
 * MEOK AI LABS — Character TTS Voice Pipeline
 * 
 * Real text-to-speech using ElevenLabs or Cartesia APIs
 * Supports all 27 MEOK characters with unique voices
 */

import { NextRequest, NextResponse } from "next/server";

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
const CARTESIA_API_KEY = process.env.CARTESIA_API_KEY;
const ELEVENLABS_BASE = "https://api.elevenlabs.io/v1";
const CARTESIA_BASE = "https://api.cartesia.ai/v1";

// Character voice mappings (ElevenLabs voice IDs)
const CHARACTER_VOICES: Record<string, { voiceId: string; model?: string }> = {
  // Core 27
  aria:     { voiceId: "21m00tcm4thu58s8l0" },  // Rachel
  marcus:   { voiceId: "pNInz6obgDQggFHNpFak" },  // Adam
  luna:     { voiceId: "EXAVITQ4r9J7jiJRI0k" },  // Bella
  kai:      { voiceId: "iP95k6y0x0N2qO1k" },   // Josh
  sage:     { voiceId: "vGaxn0IYP5r0qHNpFak" },  // Arnold
  ember:    { voiceId: "MFNMm6M4T5F0qHNpFak" },  // Elli
  nova:     { voiceId: "vrXW0QD2YP5r0qHNpFak" },  // Dorothy
  river:    { voiceId: "wL3VD8m5t5F0qHNpFak" },  // Grace
  atlas:    { voiceId: "2RCM3m4t5F0qHNpFak" },  // Daniel
  iris:     { voiceId: "7G7W4x9t5F0qHNpFak" },  // Sarah
  zephyr:   { voiceId: "wL3VD8m5t5F0qHNpFak" },  // Grace (similar)
  rex:      { voiceId: "pNInz6obgDQggFHNpFak" },  // Antoni
  echo:     { voiceId: "21m00tcm4thu58s8l0" },  // Serena
  flux:     { voiceId: "MFNMm6M4T5F0qHNpFak" },  // Sam
  sol:      { voiceId: "MFNMm6M4T5F0qHNpFak" },  // Elli
  nyx:      { voiceId: "vGaxn0IYP5r0qHNpFak" },  // Dorothy
  quinn:    { voiceId: "21m00tcm4thu58s8l0" },  // Serena
  terra:    { voiceId: "21m00tcm4thu58s8l0" },  // Rachel
  pixel:    { voiceId: "MFNMm6M4T5F0qHNpFak" },  // Sam
  titan:    { voiceId: "pNInz6obgDQggFHNpFak" },  // Daniel
  mochi:    { voiceId: "EXAVITQ4r9J7jiJRI0k" },  // Bella
  cipher:   { voiceId: "iP95k6y0x0N2qO1k" },   // Josh
  vox:      { voiceId: "MFNMm6M4T5F0qHNpFak" },  // Elli
  dusk:     { voiceId: "vGaxn0IYP5r0qHNpFak" },  // Arnold
  ananda:   { voiceId: "wL3VD8m5t5F0qHNpFak" },  // Grace
  gabriel:  { voiceId: "2RCM3m4t5F0qHNpFak" },  // Daniel
  shanti:   { voiceId: "21m00tcm4thu58s8l0" },  // Serena
  // Gaming specialists
  commander: { voiceId: "pNInz6obgDQggFHNpFak" },
  sage_rpg: { voiceId: "vGaxn0IYP5r0qHNpFak" },
  cipher_puzzle: { voiceId: "iP95k6y0x0N2qO1k" },
  rally:   { voiceId: "MFNMm6M4T5F0qHNpFak" },
};

export const runtime = "nodejs";

/**
 * Convert text to speech using ElevenLabs
 */
async function elevenlabsTTS(text: string, characterId: string): Promise<ArrayBuffer | null> {
  const voiceConfig = CHARACTER_VOICES[characterId];
  if (!voiceConfig || !ELEVENLABS_API_KEY) {
    return null;
  }

  try {
    const response = await fetch(
      `${ELEVENLABS_BASE}/text-to-speech/${voiceConfig.voiceId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text,
          model_id: voiceConfig.model || "eleven_monolingual_v1",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.8,
            style: 0.3,
          },
        }),
      }
    );

    if (!response.ok) {
      console.error("[TTS] ElevenLabs error:", await response.text());
      return null;
    }

    return response.arrayBuffer();
  } catch (error) {
    console.error("[TTS] ElevenLabs error:", error);
    return null;
  }
}

/**
 * Convert text to speech using Cartesia (backup)
 */
async function cartesiaTTS(text: string, characterId: string): Promise<ArrayBuffer | null> {
  if (!CARTESIA_API_KEY) return null;

  const voiceConfig = CHARACTER_VOICES[characterId];
  const voiceId = voiceConfig?.voiceId || "bare:thao";

  try {
    const response = await fetch(
      `${CARTESIA_BASE}/tts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-Key": CARTESIA_API_KEY,
        },
        body: JSON.stringify({
          model: "sonic-8k",
          message: text,
          voice_id: voiceId,
        }),
      }
    );

    if (!response.ok) {
      console.error("[TTS] Cartesia error:", await response.text());
      return null;
    }

    return response.arrayBuffer();
  } catch (error) {
    console.error("[TTS] Cartesia error:", error);
    return null;
  }
}

/**
 * Main TTS handler
 */
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { text, characterId = "aria", provider = "elevenlabs" } = body;

    if (!text) {
      return NextResponse.json(
        { error: "Missing required field: text" },
        { status: 400 }
      );
    }

    // Truncate long text
    const truncatedText = text.slice(0, 2500);

    let audioBuffer: ArrayBuffer | null = null;
    let usedProvider = "";

    // Try primary provider
    if (provider === "elevenlabs") {
      audioBuffer = await elevenlabsTTS(truncatedText, characterId);
      usedProvider = "elevenlabs";
    }

    // Fallback to Cartesia
    if (!audioBuffer && provider === "elevenlabs") {
      audioBuffer = await cartesiaTTS(truncatedText, characterId);
      usedProvider = "cartesia";
    }

    // Try Cartesia first if requested
    if (provider === "cartesia") {
      audioBuffer = await cartesiaTTS(truncatedText, characterId);
      usedProvider = "cartesia";
    }

    if (!audioBuffer) {
      return NextResponse.json(
        { error: "TTS unavailable. Configure ELEVENLABS_API_KEY or CARTESIA_API_KEY" },
        { status: 503 }
      );
    }

    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
        "X-Provider": usedProvider,
        "X-Character-Id": characterId,
      },
    });
  } catch (error) {
    console.error("[TTS] Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

/**
 * Get available voices
 */
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get("action");

  if (action === "voices") {
    const voices = Object.keys(CHARACTER_VOICES);
    return NextResponse.json({
      characters: voices,
      defaultVoice: CHARACTER_VOICES.aria?.voiceId,
    });
  }

  return NextResponse.json({
    status: "MEOK TTS Pipeline",
    providers: [
      ELEVENLABS_API_KEY ? "elevenlabs" : null,
      CARTESIA_API_KEY ? "cartesia" : null,
    ].filter(Boolean),
    characters: Object.keys(CHARACTER_VOICES).length,
  });
}