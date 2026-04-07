/**
 * MEOK AI LABS — Unified Tool Executor
 *
 * Single entry point for ALL tool execution — chat, voice, UI, and agent sources.
 * Enforces care membrane, safety tiers, and council governance.
 *
 * Usage:
 *   import { executeToolUnified } from '@/lib/unified-tool-executor'
 *   const result = await executeToolUnified({ toolName: 'query_memories', args: { query: '...' }, ... })
 */

import { sov3 } from './sov3-client';

// ── Safety Tiers ─────────────────────────────────────────────────────────────

export type SafetyTier = 0 | 1 | 2;

export interface ToolPermission {
  safetyTier: SafetyTier;
  archetypes: string[]; // ['*'] = all archetypes
}

/** Tool → safety tier + allowed archetypes */
export const TOOL_PERMISSIONS: Record<string, ToolPermission> = {
  // Tier 0 — auto-approved, all archetypes
  query_memories:          { safetyTier: 0, archetypes: ['*'] },
  search_memory:           { safetyTier: 0, archetypes: ['*'] },
  search_knowledge:        { safetyTier: 0, archetypes: ['*'] },
  web_search:              { safetyTier: 0, archetypes: ['*'] },
  record_memory:           { safetyTier: 0, archetypes: ['*'] },
  get_consciousness_state: { safetyTier: 0, archetypes: ['*'] },
  get_weather:             { safetyTier: 0, archetypes: ['*'] },
  get_system_status:       { safetyTier: 0, archetypes: ['*'] },
  get_dashboard_metrics:   { safetyTier: 0, archetypes: ['*'] },
  validate_care:           { safetyTier: 0, archetypes: ['*'] },

  // Tier 1 — care check required
  browse_page:             { safetyTier: 1, archetypes: ['sage', 'explorer', 'challenger', 'creator'] },
  read_file:               { safetyTier: 1, archetypes: ['sage', 'explorer', 'challenger', 'creator'] },
  rag_query:               { safetyTier: 1, archetypes: ['sage', 'explorer', 'seeker'] },
  delegate_task:           { safetyTier: 1, archetypes: ['*'] },
  orion_hunt_tasks:        { safetyTier: 1, archetypes: ['explorer', 'challenger'] },
  trigger_research_sweep:  { safetyTier: 1, archetypes: ['sage', 'explorer', 'seeker'] },

  // Tier 2 — council deliberation required
  run_command:             { safetyTier: 2, archetypes: ['challenger'] },
  execute_code:            { safetyTier: 2, archetypes: ['challenger', 'creator'] },
  execute_with_claw_code:  { safetyTier: 2, archetypes: ['challenger'] },
};

// ── Types ────────────────────────────────────────────────────────────────────

export interface ToolRequest {
  toolName: string;
  args: Record<string, unknown>;
  characterId: string;
  archetype: string;
  userTier: string;
  userId: string;
  source: 'chat' | 'voice' | 'ui' | 'agent';
}

export interface ToolResponse {
  success: boolean;
  result: unknown;
  careScore: number;
  safetyTier: SafetyTier;
  blocked: boolean;
  blockReason?: string;
  elapsedMs: number;
}

// ── Executor ─────────────────────────────────────────────────────────────────

export async function executeToolUnified(req: ToolRequest): Promise<ToolResponse> {
  const start = Date.now();
  const permission = TOOL_PERMISSIONS[req.toolName];

  // Unknown tool — pass through at Tier 0 (SOV3 handles unknown tools)
  const tier = permission?.safetyTier ?? 0;
  const allowed = permission?.archetypes ?? ['*'];

  // 1. Check archetype permission
  if (!allowed.includes('*') && !allowed.includes(req.archetype)) {
    return {
      success: false, result: null, careScore: 0, safetyTier: tier,
      blocked: true, blockReason: `${req.archetype} archetype cannot use ${req.toolName}`,
      elapsedMs: Date.now() - start,
    };
  }

  // 2. Care membrane (Tier 1+)
  if (tier >= 1) {
    const careCheck = await sov3.validateCare(
      `Tool call: ${req.toolName} with args: ${JSON.stringify(req.args).slice(0, 200)}`
    );
    const careData = careCheck.data as Record<string, unknown> | null;
    const careScore = (careData?.care_score ?? careData?.overall_care_score ?? 0.5) as number;
    if (careCheck.ok && careScore < 0.3) {
      return {
        success: false, result: null, careScore, safetyTier: tier,
        blocked: true, blockReason: `Care score too low (${careScore.toFixed(2)}) for ${req.toolName}`,
        elapsedMs: Date.now() - start,
      };
    }
  }

  // 3. Council deliberation (Tier 2)
  if (tier >= 2) {
    const council = await sov3.call('deliberate_council', {
      proposal: `Execute ${req.toolName}: ${JSON.stringify(req.args).slice(0, 200)}`,
      proposer: req.characterId,
      tier: 2,
    });
    const approved = (council.data as Record<string, unknown>)?.approved !== false;
    if (!approved) {
      return {
        success: false, result: null, careScore: 0, safetyTier: tier,
        blocked: true, blockReason: `Council rejected ${req.toolName}`,
        elapsedMs: Date.now() - start,
      };
    }
  }

  // 4. Execute via SOV3 MCP
  const result = await sov3.call(req.toolName, req.args);

  // 5. Log execution (fire-and-forget)
  void sov3.recordMemory({
    content: `[Tool Exec] ${req.source}/${req.characterId}: ${req.toolName} → ${result.ok ? 'ok' : 'error'}`,
    importance: tier >= 2 ? 0.8 : 0.3,
    tags: ['tool_execution', req.toolName, req.source],
    source: `meok-${req.source}`,
  }).catch(() => {});

  return {
    success: result.ok,
    result: result.data,
    careScore: 0.5,
    safetyTier: tier,
    blocked: false,
    elapsedMs: Date.now() - start,
  };
}

export default executeToolUnified;
