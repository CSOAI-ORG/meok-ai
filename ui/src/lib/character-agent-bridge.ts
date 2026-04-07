/**
 * MEOK AI LABS — Character-Agent Bridge
 *
 * Maps MEOK characters to SOV3 agents. When a character first uses tools,
 * it's lazily registered as a sovereign agent with capabilities derived
 * from its archetype.
 *
 * Usage:
 *   import { ensureAgentRegistered, ARCHETYPE_CAPABILITIES } from '@/lib/character-agent-bridge'
 *   await ensureAgentRegistered(character, evolutionStage)
 */

import { sov3 } from './sov3-client';

// ── Archetype → Agent Capabilities ──────────────────────────────────────────

export const ARCHETYPE_CAPABILITIES: Record<string, string[]> = {
  challenger: ['CODE_EXECUTION', 'ANALYSIS', 'SECURITY'],
  nurturer:   ['COMMUNICATION', 'MONITORING', 'CARE_VALIDATION'],
  explorer:   ['WEB_SEARCH', 'ANALYSIS', 'PLANNING'],
  sage:       ['NEURAL_INFERENCE', 'MEMORY_OPERATIONS', 'ANALYSIS'],
  seeker:     ['WEB_SEARCH', 'CREATIVE', 'PLANNING'],
  creator:    ['CREATIVE', 'CODE_EXECUTION', 'ANALYSIS'],
  trickster:  ['CREATIVE', 'COMMUNICATION', 'WEB_SEARCH'],
  rebel:      ['CODE_EXECUTION', 'SECURITY', 'ANALYSIS'],
  innocent:   ['COMMUNICATION', 'MONITORING', 'CARE_VALIDATION'],
};

// ── Evolution → Trust Level ─────────────────────────────────────────────────

const EVOLUTION_TRUST: Record<number, number> = {
  0: 0.2, // Luminous Egg
  1: 0.3, // Cracking
  2: 0.5, // First Light
  3: 0.6, // Growing Form
  4: 0.8, // Mature
  5: 1.0, // Sovereign
};

// ── Registration Cache ──────────────────────────────────────────────────────

const registeredAgents = new Set<string>();

// ── Public API ──────────────────────────────────────────────────────────────

export interface CharacterInfo {
  id: string;
  name: string;
  archetype: string;
  systemPrompt?: string;
  tags?: string[];
}

/**
 * Lazily register a character as a SOV3 agent (idempotent).
 * Called on first tool use, not on every chat message.
 */
export async function ensureAgentRegistered(
  character: CharacterInfo,
  evolutionStage: number = 0,
): Promise<void> {
  if (registeredAgents.has(character.id)) return;

  const capabilities = ARCHETYPE_CAPABILITIES[character.archetype] ?? ['COMMUNICATION'];
  const trustLevel = EVOLUTION_TRUST[Math.min(evolutionStage, 5)] ?? 0.3;

  await sov3.call('register_agent', {
    name: character.name,
    description: `MEOK character: ${character.name} (${character.archetype}). ${character.tags?.join(', ') ?? ''}`,
    capabilities,
    trust_level: trustLevel,
    metadata: {
      character_id: character.id,
      archetype: character.archetype,
      evolution_stage: evolutionStage,
      source: 'meok-character-bridge',
    },
  });

  registeredAgents.add(character.id);
}

/**
 * Get agent capabilities for an archetype.
 */
export function getCapabilities(archetype: string): string[] {
  return ARCHETYPE_CAPABILITIES[archetype] ?? ['COMMUNICATION'];
}

/**
 * Get trust level for an evolution stage.
 */
export function getTrustLevel(evolutionStage: number): number {
  return EVOLUTION_TRUST[Math.min(evolutionStage, 5)] ?? 0.3;
}
