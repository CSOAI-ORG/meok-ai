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
  explorer:  ['cerebras-llama', 'groq-llama', 'deepseek-chat', 'nemotron-nano', 'llama-3.1-8b'],
  sovereign: ['cerebras-llama', 'groq-llama', 'deepseek-chat', 'nemotron-nano', 'nemotron-super', 'gpt-4o-mini', 'claude-3-5-haiku-latest'],
  family:    ['cerebras-llama', 'groq-llama', 'deepseek-chat', 'nemotron-nano', 'nemotron-super', 'nemotron-ultra', 'gpt-4o', 'claude-3-5-sonnet-latest'],
} as const;

export type Tier = keyof typeof MODEL_ACCESS;

export type TaskType =
  | 'chat'
  | 'analysis'
  | 'coding'
  | 'creative'
  | 'emotional'
  | 'gaming'
  | 'research'
  | 'planning'
  | 'reasoning';

// ── Task classification ────────────────────────────────────────────────────

/**
 * Classifies the primary task type from a user message using lightweight
 * keyword heuristics. Fast enough for the hot path — no LLM call required.
 */
export function classifyTask(message: string): TaskType {
  const lower = message.toLowerCase();

  if (lower.match(/\b(grief|loss|died|funeral|bereavement|passed away|mourning|death of|lost my|miss them|miss her|miss him)\b/))
    return 'emotional';

  if (lower.match(/\b(game|gaming|ranked|match|valorant|league|cs2|fortnite|apex|overwatch|esports|strategy game|build order|team comp|loadout)\b/))
    return 'gaming';

  if (lower.match(/\b(reason|logic|deduce|prove|theorem|why does|solve|calculate|math|equation|step by step|think through|figure out)\b/))
    return 'reasoning';

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
  // Explorer: all free providers
  if (tier === 'explorer') {
    if (taskType === 'reasoning' || taskType === 'analysis') return 'nemotron-nano';
    if (taskType === 'coding') return 'nemotron-nano';
    if (taskType === 'creative') return 'groq-llama';
    if (taskType === 'gaming') return 'groq-llama';
    if (taskType === 'emotional') return 'groq-llama'; // Free tier gets Groq for emotional (better than DeepSeek)
    if (taskType === 'research') return 'groq-llama';
    return 'cerebras-llama'; // Simple chat → fastest free provider
  }

  switch (taskType) {
    case 'reasoning':
      // Nemotron excels at reasoning — use Super for paid, Ultra for family
      return tier === 'family' ? 'nemotron-ultra' : 'nemotron-super';

    case 'emotional':
      // Claude is best for empathy and emotional nuance
      return tier === 'family' ? 'claude-3-5-sonnet-latest' : 'claude-3-5-haiku-latest';

    case 'coding':
      // Nemotron Super is optimised for coding; Claude for family tier
      return tier === 'family' ? 'claude-3-5-sonnet-latest' : 'nemotron-super';

    case 'analysis':
      return tier === 'family' ? 'nemotron-ultra' : 'nemotron-super';

    case 'research':
      return tier === 'family' ? 'gpt-4o' : 'nemotron-super';

    case 'creative':
      // Claude is the best creative writer regardless of tier
      return 'claude-3-5-haiku-latest';

    case 'gaming':
      return tier === 'family' ? 'claude-3-5-sonnet-latest' : 'groq-llama';

    case 'planning':
      return tier === 'family' ? 'nemotron-super' : 'gpt-4o-mini';

    case 'chat':
    default:
      return 'deepseek-chat';
  }
}

// ── Provider resolution ────────────────────────────────────────────────────

/**
 * Returns a Vercel AI SDK LanguageModel provider instance for the given
 * model ID. Supports Anthropic, OpenAI, DeepSeek, OpenRouter, and local Ollama.
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

  // NVIDIA Nemotron models via NIM (OpenAI-compatible API)
  if (modelId.startsWith('nemotron-')) {
    const nvidiaApiKey = process.env.NVIDIA_API_KEY;
    if (!nvidiaApiKey) {
      console.warn('[llm-router] NVIDIA_API_KEY not set — falling back to DeepSeek');
      return getProvider('deepseek-chat');
    }
    const nvidia = createOpenAI({
      baseURL: 'https://integrate.api.nvidia.com/v1',
      apiKey: nvidiaApiKey,
    });
    // Map friendly names to NVIDIA model IDs
    const nemotronModels: Record<string, string> = {
      'nemotron-nano':  'nvidia/nemotron-3-nano-30b-a3b-bf16',
      'nemotron-super': 'nvidia/nemotron-3-super-120b-a12b-bf16',
      'nemotron-ultra': 'nvidia/llama-nemotron-ultra-253b-v1',
    };
    const resolvedModel = nemotronModels[modelId] ?? nemotronModels['nemotron-nano'];
    return nvidia(resolvedModel);
  }

  // OpenRouter — universal fallback, 100+ models with one key
  if (modelId.startsWith('openrouter/')) {
    const openrouterApiKey = process.env.OPENROUTER_API_KEY;
    if (!openrouterApiKey) {
      console.warn('[llm-router] OPENROUTER_API_KEY not set — falling back to DeepSeek');
      return getProvider('deepseek-chat');
    }
    const openrouter = createOpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: openrouterApiKey,
    });
    // Strip the 'openrouter/' prefix to get the actual model ID
    const actualModelId = modelId.replace('openrouter/', '');
    return openrouter(actualModelId);
  }

  if (modelId.startsWith('cerebras-')) {
    const cerebrasApiKey = process.env.CEREBRAS_API_KEY;
    if (!cerebrasApiKey) {
      console.warn('[llm-router] CEREBRAS_API_KEY not set — falling back to DeepSeek');
      return getProvider('deepseek-chat');
    }
    const cerebras = createOpenAI({
      baseURL: 'https://api.cerebras.ai/v1',
      apiKey: cerebrasApiKey,
    });
    const cerebrasModels: Record<string, string> = {
      'cerebras-llama': 'llama3.1-8b',
      'cerebras-llama-70b': 'llama-3.3-70b',
    };
    return cerebras(cerebrasModels[modelId] ?? 'llama3.1-8b');
  }

  if (modelId.startsWith('groq-')) {
    const groqApiKey = process.env.GROQ_API_KEY;
    if (!groqApiKey) {
      console.warn('[llm-router] GROQ_API_KEY not set — falling back to DeepSeek');
      return getProvider('deepseek-chat');
    }
    const groq = createOpenAI({
      baseURL: 'https://api.groq.com/openai/v1',
      apiKey: groqApiKey,
    });
    const groqModels: Record<string, string> = {
      'groq-llama': 'llama-3.3-70b-versatile',
      'groq-mixtral': 'mixtral-8x7b-32768',
    };
    return groq(groqModels[modelId] ?? 'llama-3.3-70b-versatile');
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

  // Unknown model — try OpenRouter if key is set, otherwise fall back to local Ollama
  if (process.env.OPENROUTER_API_KEY) {
    console.warn(`[llm-router] Unknown model "${modelId}" — routing via OpenRouter`);
    const openrouter = createOpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: process.env.OPENROUTER_API_KEY,
    });
    return openrouter(modelId);
  }
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

// ── Effort levels ───────────────────────────────────────────────────────

export type EffortLevel = 'low' | 'medium' | 'high' | 'max';

export function getEffortLevel(taskType: TaskType): EffortLevel {
  switch (taskType) {
    case 'chat':
    case 'gaming':
      return 'low';
    case 'research':
    case 'analysis':
    case 'planning':
      return 'medium';
    case 'emotional':
    case 'creative':
      return 'high';
    case 'coding':
    case 'reasoning':
      return 'max';
    default:
      return 'medium';
  }
}

export function getThinkingBudget(effort: EffortLevel): number {
  switch (effort) {
    case 'low': return 1024;
    case 'medium': return 4096;
    case 'high': return 16384;
    case 'max': return 32768;
  }
}

// ── Main route function ────────────────────────────────────────────────

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
