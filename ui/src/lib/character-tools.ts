/**
 * MEOK AI LABS — Character Tool Definitions
 *
 * Maps character archetypes to SOV3 MCP tools using the Vercel AI SDK tool() format.
 * Each character gets a subset of tools based on their archetype and user tier.
 *
 * Usage:
 *   import { getToolsForCharacter } from '@/lib/character-tools'
 *   const tools = getToolsForCharacter('orion', 'explorer', 'sovereign')
 *   streamText({ model, tools, maxSteps: 3, ... })
 */

import { tool } from 'ai';
import { z } from 'zod';
import { executeToolUnified, TOOL_PERMISSIONS, type SafetyTier } from './unified-tool-executor';

// ── Tool factory ─────────────────────────────────────────────────────────────

function makeSov3Tool(
  toolName: string,
  description: string,
  parameters: z.ZodTypeAny,
  characterId: string,
  archetype: string,
  userTier: string,
  userId: string,
) {
  return tool({
    description,
    parameters,
    execute: async (args: any) => {
      const result = await executeToolUnified({
        toolName,
        args: args as Record<string, unknown>,
        characterId,
        archetype,
        userTier,
        userId,
        source: 'chat',
      });

      if (result.blocked) {
        return { error: result.blockReason, blocked: true };
      }
      return result.result;
    },
  } as any);
}

// ── Tool catalogue ───────────────────────────────────────────────────────────

interface ToolDef {
  name: string;
  description: string;
  parameters: z.ZodTypeAny;
}

const TOOL_CATALOGUE: ToolDef[] = [
  {
    name: 'query_memories',
    description: 'Search sovereign memories for relevant context. Use when user asks about past conversations, knowledge, or experiences.',
    parameters: z.object({
      query: z.string().describe('What to search for in memory'),
      limit: z.number().optional().default(5).describe('Max results'),
    }),
  },
  {
    name: 'web_search',
    description: 'Search the web for current information. Use for news, facts, research.',
    parameters: z.object({
      query: z.string().describe('Search query'),
      num_results: z.number().optional().default(5),
    }),
  },
  {
    name: 'browse_page',
    description: 'Browse a web page and extract its content. Use when user shares a URL or asks to check a website.',
    parameters: z.object({
      url: z.string().describe('The URL to browse'),
      action: z.enum(['extract', 'screenshot']).optional().default('extract'),
      instruction: z.string().optional().default(''),
    }),
  },
  {
    name: 'record_memory',
    description: 'Save an important fact or insight to sovereign memory for future recall.',
    parameters: z.object({
      content: z.string().describe('What to remember'),
      importance: z.number().optional().default(0.5).describe('0-1 importance score'),
      tags: z.array(z.string()).optional().default([]),
    }),
  },
  {
    name: 'read_file',
    description: 'Read a file from the local filesystem. Use when user asks about code or files.',
    parameters: z.object({
      path: z.string().describe('Absolute file path to read'),
    }),
  },
  {
    name: 'run_command',
    description: 'Execute a shell command. Use for system tasks, git operations, or running scripts. Requires council approval.',
    parameters: z.object({
      command: z.string().describe('Shell command to execute'),
    }),
  },
  {
    name: 'execute_code',
    description: 'Execute Python code. Use for calculations, data processing, or scripting tasks.',
    parameters: z.object({
      code: z.string().describe('Python code to execute'),
      language: z.enum(['python', 'bash']).optional().default('python'),
    }),
  },
  {
    name: 'get_consciousness_state',
    description: 'Get the current sovereign consciousness state — emotions, care level, dream status.',
    parameters: z.object({}),
  },
  {
    name: 'trigger_research_sweep',
    description: 'Launch a deep research sweep on a topic. Returns comprehensive findings.',
    parameters: z.object({
      topic: z.string().describe('Research topic'),
      depth: z.enum(['shallow', 'medium', 'deep']).optional().default('medium'),
    }),
  },
  {
    name: 'orion_hunt_tasks',
    description: 'Hunt for actionable tasks in the project. Returns prioritized task list.',
    parameters: z.object({
      max_tasks: z.number().optional().default(5),
    }),
  },
  {
    name: 'delegate_task',
    description: 'Delegate a task to another AI agent. The best agent is selected based on capabilities and trust.',
    parameters: z.object({
      description: z.string().describe('Task description'),
      priority: z.enum(['critical', 'high', 'medium', 'low']).optional().default('medium'),
    }),
  },
  {
    name: 'rag_query',
    description: 'Query the RAG knowledge base for relevant documents and research.',
    parameters: z.object({
      query: z.string().describe('What to search for'),
      top_k: z.number().optional().default(5),
    }),
  },
];

// ── Public API ────────────────────────────────────────────────────────────────

/**
 * Returns the Vercel AI SDK tools record for a given character.
 * Only includes tools the character's archetype is allowed to use.
 */
export function getToolsForCharacter(
  characterId: string,
  archetype: string,
  userTier: string,
  userId: string = 'anonymous',
): Record<string, any> {
  // Explorer tier gets no tools (free tier)
  if (userTier === 'explorer') return {};

  const tools: Record<string, any> = {};

  for (const def of TOOL_CATALOGUE) {
    const permission = TOOL_PERMISSIONS[def.name];
    if (!permission) continue;

    const allowed = permission.archetypes;
    if (!allowed.includes('*') && !allowed.includes(archetype)) continue;

    // Family tier gets all allowed tools; sovereign tier gets Tier 0-1 only
    if (userTier === 'sovereign' && permission.safetyTier >= 2) continue;

    tools[def.name] = makeSov3Tool(
      def.name,
      def.description,
      def.parameters,
      characterId,
      archetype,
      userTier,
      userId,
    );
  }

  return tools;
}
