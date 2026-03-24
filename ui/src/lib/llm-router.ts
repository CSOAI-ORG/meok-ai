/**
 * MEOK AI LABS — Multi-LLM Routing Layer
 *
 * Routes messages to the optimal model based on task type and user tier.
 * Free (Explorer) users are served by open-source models; paid tiers get
 * progressively richer model access.
 */

import { anthropic } from '@ai-sdk/anthropic';
import { openai, createOpenAI } from '@ai-sdk/openai';
import type { LanguageModel } from 'ai';

// ── Tier-based model access ────────────────────────────────────────────────

export const MODEL_ACCESS = {
  explorer:  ['deepseek-chat', 'llama-3.1-8b'],
  sovereign: ['deepseek-chat', 'gpt-4o-mini', 'claude-3-5-haiku-latest'],
  family:    ['deepseek-chat', 'gpt-4o', 'claude-3-5-sonnet-latest'],
} as const;

export type Tier = keyof typeof MODEL_ACCESS;

export type TaskType =
  | 'chat'
  | 'analysis'
  | 'coding'
  | 'creative'
  | 'emotional'
  | 'research'
  | 'planning';

// ── Task classification ────────────────────────────────────────────────────

/**
 * Classifies the primary task type from a user message using lightweight
 * keyword heuristics. Fast enough for the hot path — no LLM call required.
 */
export function classifyTask(message: string): TaskType {
  const lower = message.toLowerCase();

  if (lower.match(/\b(code|function|bug|error|script|programming|python|javascript|typescript|debug|refactor|implement)\b/))
    return 'coding';

  if (lower.match(/\b(sad|anxious|worried|lonely|depressed|feel|emotion|stress|overwhelmed|scared|hurt|grief|trauma)\b/))
    return 'emotional';

  if (lower.match(/\b(research|investigate|what is|who is|explain|how does|overview|history|background)\b/))
    return 'research';

  if (lower.match(/\b(plan|schedule|todo|task|sprint|deadline|priority|roadmap|milestone|project)\b/))
    return 'planning';

  if (lower.match(/\b(write|create|story|poem|design|imagine|creative|invent|brainstorm|narrative)\b/))
    return 'creative';

  if (lower.match(/\b(analys[ei]|data|statistics|compare|breakdown|report|metrics|trend|insight)\b/))
    return 'analysis';

  return 'chat';
}

// ── Model selection ────────────────────────────────────────────────────────

/**
 * Selects the best model ID for a given task type and user tier.
 *
 * Routing philosophy:
 * - Explorer  → always open-source (cost = $0)
 * - Sovereign → balanced quality/cost; no GPT-4o level spend
 * - Family    → best available model per task
 */
export function selectModel(taskType: TaskType, tier: Tier): string {
  if (tier === 'explorer') return 'deepseek-chat';

  switch (taskType) {
    case 'emotional':
      return tier === 'family' ? 'claude-3-5-sonnet-latest' : 'claude-3-5-haiku-latest';

    case 'coding':
      return tier === 'family' ? 'claude-3-5-sonnet-latest' : 'gpt-4o-mini';

    case 'analysis':
      return tier === 'family' ? 'gpt-4o' : 'gpt-4o-mini';

    case 'research':
      return tier === 'family' ? 'gpt-4o' : 'gpt-4o-mini';

    case 'creative':
      // Claude is the best creative writer regardless of tier (within access)
      return 'claude-3-5-haiku-latest';

    case 'planning':
      return 'gpt-4o-mini';

    case 'chat':
    default:
      // Default to cheapest capable model for open-ended conversation
      return 'deepseek-chat';
  }
}

// ── Provider resolution ────────────────────────────────────────────────────

/**
 * Returns a Vercel AI SDK LanguageModel provider instance for the given
 * model ID. Supports Anthropic, OpenAI, DeepSeek, and local Ollama.
 *
 * API keys are read from environment variables at call time so they can be
 * rotated without redeploying.
 */
export function getProvider(modelId: string): LanguageModel {
  if (modelId.startsWith('claude-')) {
    return anthropic(modelId);
  }

  if (modelId.startsWith('gpt-') || modelId.startsWith('o1') || modelId.startsWith('o3')) {
    return openai(modelId);
  }

  if (modelId.startsWith('deepseek-')) {
    const deepseekApiKey = process.env.DEEPSEEK_API_KEY;
    if (!deepseekApiKey) {
      console.warn('[llm-router] DEEPSEEK_API_KEY is not set — falling back to Ollama');
      const ollama = createOpenAI({ baseURL: 'http://localhost:11434/v1', apiKey: 'ollama' });
      return ollama('deepseek-r1:8b');
    }
    const deepseek = createOpenAI({
      baseURL: 'https://api.deepseek.com/v1',
      apiKey: deepseekApiKey,
    });
    return deepseek('deepseek-chat');
  }

  // Unknown model — assume local Ollama
  console.warn(`[llm-router] Unknown model "${modelId}" — routing to local Ollama`);
  const ollama = createOpenAI({ baseURL: 'http://localhost:11434/v1', apiKey: 'ollama' });
  return ollama(modelId);
}

// ── Router result type ─────────────────────────────────────────────────────

export interface RouterResult {
  /** The resolved model identifier string (e.g. 'claude-3-5-sonnet-latest') */
  model: string;
  /** The classified task type used to make the routing decision */
  taskType: TaskType;
  /** A ready-to-use Vercel AI SDK provider instance */
  provider: LanguageModel;
}

// ── Main route function ────────────────────────────────────────────────────

/**
 * Primary entry point. Classifies the message, selects the best model for
 * the task + tier combination, and returns a provider instance.
 *
 * @example
 * const { model, taskType, provider } = route(message, 'sovereign');
 * const result = streamText({ model: provider, messages, system });
 */
export function route(message: string, tier: Tier): RouterResult {
  const taskType = classifyTask(message);
  const model = selectModel(taskType, tier);
  const provider = getProvider(model);
  return { model, taskType, provider };
}
