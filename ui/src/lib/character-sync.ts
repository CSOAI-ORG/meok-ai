/**
 * MEOK AI LABS — Unified Character Database System
 * 
 * Syncs characters across:
 * - Sov3 MCP Server (Python backend)
 * - Local character database (TypeScript)
 * - All UI surfaces (dashboard, overlay, desktop, mobile)
 * 
 * Provides real-time character activity and sandbox capabilities.
 */

import { getCharacter, getAllCharacters, type Character } from './characters';

const SOV3_URL = process.env.NEXT_PUBLIC_SOV3_ENDPOINT || 'http://localhost:3101';

export interface CharacterWithActivity extends Character {
  activity?: CharacterActivity;
  lastInteraction?: string;
  memoryCount?: number;
  evolutionStage?: number;
}

export interface CharacterActivity {
  status: 'idle' | 'thinking' | 'responding' | 'learning' | 'dreaming';
  currentTask?: string;
  progress?: number;
  thoughts?: string[];
  memoryRecent?: string[];
  careScore?: number;
}

export interface CharacterSyncState {
  lastSync: string;
  characters: CharacterWithActivity[];
  activeCharacter?: string;
}

// Sov3 MCP Character Tools Integration
export async function fetchSov3CharacterCatalog(): Promise<Character[]> {
  try {
    const res = await fetch(`${SOV3_URL}/api/characters`, {
      signal: AbortSignal.timeout(5000),
    });
    if (res.ok) {
      const data = await res.json();
      return data.characters || [];
    }
  } catch (e) {
    console.warn('[Character Sync] Could not fetch from Sov3:', e);
  }
  return [];
}

export async function callSov3CharacterTool(
  toolName: string,
  args: Record<string, unknown> = {}
): Promise<unknown> {
  try {
    const res = await fetch(`${SOV3_URL}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: `char_${Date.now()}`,
        method: 'tools/call',
        params: { name: toolName, arguments: args },
      }),
      signal: AbortSignal.timeout(10000),
    });
    const data = await res.json();
    return data?.result?.content?.[0]?.text ? JSON.parse(data.result.content[0].text) : null;
  } catch (e) {
    console.error(`[Character Sync] Tool ${toolName} failed:`, e);
    return null;
  }
}

// Get character with activity from Sov3
export async function getCharacterWithActivity(characterId: string): Promise<CharacterWithActivity | null> {
  const localChar = getCharacter(characterId);
  if (!localChar) return null;

  const activity = await callSov3CharacterTool('get_character_activity', { character_id: characterId });
  
  return {
    ...localChar,
    activity: activity as CharacterActivity | undefined,
  };
}

// Get all characters with their current activity
export async function getAllCharactersWithActivity(): Promise<CharacterWithActivity[]> {
  const localChars = getAllCharacters();
  
  // Try to get activity for each character from Sov3
  const activities = await Promise.allSettled(
    localChars.map(char => callSov3CharacterTool('get_character_activity', { character_id: char.id }))
  );

  return localChars.map((char, i) => ({
    ...char,
    activity: activities[i].status === 'fulfilled' ? activities[i].value as CharacterActivity : undefined,
  }));
}

// Character Selection — Sync with Sov3
export async function selectCharacter(characterId: string): Promise<boolean> {
  const result = await callSov3CharacterTool('select_character', { character_id: characterId });
  return !!result;
}

// Get recommended character based on user preferences
export async function getRecommendedCharacter(): Promise<Character | null> {
  const result = await callSov3CharacterTool('get_recommended_character', {});
  if (result && typeof result === 'object' && 'character_id' in result) {
    return getCharacter((result as { character_id: string }).character_id) || null;
  }
  return null;
}

// Fly-Eye Learning System — Character observes and learns
export interface FlyEyeObservation {
  timestamp: string;
  source: 'chat' | 'memory' | 'external' | 'dream';
  content: string;
  emotionalTone?: string;
  importance: number;
}

export async function recordCharacterObservation(
  characterId: string,
  observation: FlyEyeObservation
): Promise<boolean> {
  const result = await callSov3CharacterTool('record_observation', {
    character_id: characterId,
    ...observation,
  });
  return !!result;
}

// Character Memory Query
export async function queryCharacterMemory(
  characterId: string,
  query: string,
  limit = 10
): Promise<string[]> {
  const result = await callSov3CharacterTool('query_character_memory', {
    character_id: characterId,
    query,
    limit,
  });
  if (result && typeof result === 'object' && 'memories' in result) {
    return (result as { memories: string[] }).memories;
  }
  return [];
}

// Character Dream/Consolidation State
export async function triggerCharacterDream(characterId: string): Promise<boolean> {
  const result = await callSov3CharacterTool('trigger_dream', { character_id: characterId });
  return !!result;
}

// Character Evolution
export async function evolveCharacter(
  characterId: string,
  evolutionType: 'milestone' | 'interaction' | 'breakthrough'
): Promise<{ stage: number; change: string } | null> {
  const result = await callSov3CharacterTool('evolve_character', {
    character_id: characterId,
    evolution_type: evolutionType,
  });
  return result as { stage: number; change: string } | null;
}

// Sandbox — Get character current state for UI display
export async function getCharacterSandboxState(characterId: string): Promise<{
  visualState: 'idle' | 'active' | 'thinking' | 'dreaming' | 'learning';
  displayText: string;
  recentActions: string[];
  memoryPreview: string[];
  avatarExpression: string;
  environment?: string;
} | null> {
  const result = await callSov3CharacterTool('get_sandbox_state', { character_id: characterId });
  return result as any;
}

// Sync all character data between systems
export async function fullCharacterSync(): Promise<CharacterSyncState> {
  const [localChars, sov3Chars] = await Promise.all([
    Promise.resolve(getAllCharacters()),
    fetchSov3CharacterCatalog().catch(() => []),
  ]);

  // Merge — prefer local but allow Sov3 override for dynamic data
  const merged = localChars.map(local => {
    const sov3 = sov3Chars.find((c: any) => c.id === local.id);
    if (sov3) {
      return {
        ...local,
        ...sov3, // Merge dynamic data from Sov3
      };
    }
    return local;
  });

  return {
    lastSync: new Date().toISOString(),
    characters: merged as CharacterWithActivity[],
  };
}

// Character Activity Stream for Real-time UI
export async function* createCharacterActivityStream(characterId: string): AsyncGenerator<CharacterActivity> {
  while (true) {
    try {
      const activity = await callSov3CharacterTool('get_character_activity', { character_id: characterId });
      if (activity) {
        yield activity as CharacterActivity;
      } else {
        yield { status: 'idle' };
      }
    } catch {
      yield { status: 'idle' };
    }
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
}

export default {
  fetchSov3CharacterCatalog,
  getCharacterWithActivity,
  getAllCharactersWithActivity,
  selectCharacter,
  getRecommendedCharacter,
  recordCharacterObservation,
  queryCharacterMemory,
  triggerCharacterDream,
  evolveCharacter,
  getCharacterSandboxState,
  fullCharacterSync,
};