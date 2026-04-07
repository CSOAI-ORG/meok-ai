/**
 * MEOK AI LABS — Voice Orchestration API
 * 
 * Voice synthesis, transcription, and character voice management
 * with MCP server integration
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface VoiceProfile {
  id: string;
  characterId: string;
  voiceId: string;
  voiceName: string;
  provider: 'elevenlabs' | 'openai' | 'coqui';
  settings: {
    stability: number;
    similarity: number;
    style: number;
    speed: number;
  };
  createdAt: string;
}

interface VoiceSettings {
  pitch: number;
  speed: number;
  volume: number;
  emphasis: string;
}

const VOICE_PROVIDERS = {
  elevenlabs: {
    name: 'ElevenLabs',
    description: 'AI voice synthesis with emotion control',
    models: ['eleven_monolingual_v1', 'eleven_multilingual_v2', 'eleven_core'],
    features: ['emotion', 'voice_clone', 'multi_lingual'],
  },
  openai: {
    name: 'OpenAI TTS',
    description: 'OpenAI text-to-speech API',
    models: ['tts-1', 'tts-1-hd'],
    features: ['fast', 'high_quality'],
  },
  coqui: {
    name: 'Coqui',
    description: 'Open source voice synthesis',
    models: ['xtts_v2', 'fast_speech'],
    features: ['open_source', 'voice_clone'],
  },
};

const CHARACTER_VOICES: Record<string, { voiceId: string; provider: string }> = {
  'companion-1': { voiceId: 'rachel', provider: 'elevenlabs' },
  'companion-2': { voiceId: 'adam', provider: 'elevenlabs' },
  'companion-3': { voiceId: 'sarah', provider: 'elevenlabs' },
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const characterId = searchParams.get('characterId');
  
  try {
    switch (action) {
      case 'providers': {
        return NextResponse.json({ providers: VOICE_PROVIDERS });
      }
      
      case 'voices': {
        const profileKey = characterId ? `voice:${characterId}` : 'voices:all';
        const voices = await getVoiceProfiles(characterId);
        return NextResponse.json({ voices });
      }
      
      case 'test': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const voice = getDefaultVoice(characterId);
        return NextResponse.json({ testVoice: voice });
      }
      
      case 'settings': {
        const globalSettings = await getGlobalVoiceSettings();
        return NextResponse.json({ settings: globalSettings });
      }
      
      default: {
        return NextResponse.json({
          message: 'Voice Orchestration API',
          actions: ['providers', 'voices', 'test', 'settings'],
          providers: Object.keys(VOICE_PROVIDERS),
        });
      }
    }
  } catch (error) {
    console.error('[voice/orchestration] error:', error);
    return NextResponse.json({ error: 'Voice orchestration error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, characterId, text, settings, voiceId, provider } = body;
    
    switch (action) {
      case 'speak': {
        if (!text) {
          return NextResponse.json({ error: 'Missing text' }, { status: 400 });
        }
        const result = await synthesizeSpeech(characterId, text, settings);
        return NextResponse.json(result);
      }
      
      case 'transcribe': {
        if (!body.audioUrl && !body.audioData) {
          return NextResponse.json({ error: 'Missing audio' }, { status: 400 });
        }
        const result = await transcribeAudio(body.audioUrl || body.audioData, body.language);
        return NextResponse.json(result);
      }
      
      case 'create_voice': {
        if (!characterId) {
          return NextResponse.json({ error: 'Missing characterId' }, { status: 400 });
        }
        const result = await createVoiceProfile(characterId, { voiceId, provider, settings });
        return NextResponse.json({ success: true, profile: result });
      }
      
      case 'set_default': {
        if (!characterId || !voiceId) {
          return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }
        await setDefaultVoice(characterId, voiceId);
        return NextResponse.json({ success: true });
      }
      
      case 'clone_voice': {
        if (!body.audioSample) {
          return NextResponse.json({ error: 'Missing audio sample' }, { status: 400 });
        }
        const result = await cloneVoice(body.audioSample, body.name);
        return NextResponse.json(result);
      }
      
      case 'batch_speak': {
        if (!Array.isArray(body.utterances)) {
          return NextResponse.json({ error: 'Missing utterances array' }, { status: 400 });
        }
        const results = await batchSynthesize(characterId, body.utterances, settings);
        return NextResponse.json({ results });
      }
      
      default: {
        return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
      }
    }
  } catch (error) {
    console.error('[voice/orchestration] POST error:', error);
    return NextResponse.json({ error: 'Voice operation failed' }, { status: 500 });
  }
}

async function synthesizeSpeech(characterId: string | undefined, text: string, settings?: VoiceSettings): Promise<Record<string, unknown>> {
  const voice = characterId ? getDefaultVoice(characterId) : { voiceId: 'default', provider: 'elevenlabs' };
  
  return {
    audioUrl: `data:audio/mp3;base64,mock_audio_data_${Date.now()}`,
    voice: voice,
    text,
    settings: settings || { pitch: 1.0, speed: 1.0, volume: 1.0, emphasis: 'none' },
    duration: Math.ceil(text.split(' ').length * 0.3),
    format: 'mp3',
    sampleRate: 24000,
    timestamp: new Date().toISOString(),
  };
}

async function transcribeAudio(audioSource: string, language?: string): Promise<Record<string, unknown>> {
  return {
    text: 'Transcribed audio text placeholder',
    language: language || 'en',
    confidence: 0.95,
    segments: [
      { start: 0, end: 2.5, text: 'Transcribed audio text placeholder' },
    ],
    timestamp: new Date().toISOString(),
  };
}

async function createVoiceProfile(characterId: string, options: { voiceId?: string; provider?: string; settings?: VoiceProfile['settings'] }): Promise<VoiceProfile> {
  const profile: VoiceProfile = {
    id: `voice_${Date.now()}`,
    characterId,
    voiceId: options.voiceId || 'default',
    voiceName: options.voiceId || 'Default Voice',
    provider: (options.provider as VoiceProfile['provider']) || 'elevenlabs',
    settings: options.settings || { stability: 0.5, similarity: 0.75, style: 0.5, speed: 1.0 },
    createdAt: new Date().toISOString(),
  };
  
  const key = `meok:voice:${characterId}`;
  await kv.set(key, profile);
  
  return profile;
}

async function setDefaultVoice(characterId: string, voiceId: string): Promise<void> {
  const key = `meok:voice_default:${characterId}`;
  await kv.set(key, { voiceId, updatedAt: new Date().toISOString() });
}

async function cloneVoice(audioSample: string, name: string): Promise<Record<string, unknown>> {
  return {
    voiceId: `cloned_${Date.now()}`,
    name,
    provider: 'elevenlabs',
    status: 'ready',
    timestamp: new Date().toISOString(),
  };
}

async function batchSynthesize(characterId: string | undefined, utterances: Array<{ text: string; settings?: VoiceSettings }>, globalSettings?: VoiceSettings): Promise<Array<Record<string, unknown>>> {
  const results = [];
  
  for (const utt of utterances) {
    const result = await synthesizeSpeech(characterId, utt.text, utt.settings || globalSettings);
    results.push(result);
  }
  
  return results;
}

async function getVoiceProfiles(characterId?: string): Promise<VoiceProfile[]> {
  if (characterId) {
    const profile = await kv.get<VoiceProfile>(`meok:voice:${characterId}`);
    return profile ? [profile] : [];
  }
  return [];
}

function getDefaultVoice(characterId: string): { voiceId: string; provider: string } {
  return CHARACTER_VOICES[characterId] || { voiceId: 'default', provider: 'elevenlabs' };
}

async function getGlobalVoiceSettings(): Promise<VoiceSettings> {
  const settings = await kv.get<VoiceSettings>('meok:voice_settings');
  return settings || { pitch: 1.0, speed: 1.0, volume: 1.0, emphasis: 'none' };
}
