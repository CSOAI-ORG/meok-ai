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
import { logInfo, logWarn, logError } from './logger';

/** Local Ollama endpoint — set OLLAMA_ENDPOINT env var to enable local model routing.
 *  Falls back to M2_OLLAMA_HOST (LAN inference server) if set. */
const M2_HOST = process.env.M2_OLLAMA_HOST;
const M2_PORT = process.env.M2_OLLAMA_PORT || '11434';
const OLLAMA_ENDPOINT = process.env.OLLAMA_ENDPOINT
  || (M2_HOST ? `http://${M2_HOST}:${M2_PORT}/v1` : 'http://localhost:11434/v1');

/** Whether local Ollama is available as fallback */
const OLLAMA_AVAILABLE = !!(process.env.OLLAMA_ENDPOINT || process.env.OLLAMA_ENABLED === 'true' || M2_HOST);

// ── Tier-based model access ────────────────────────────────────────────────

export const MODEL_ACCESS = {
  explorer:  ['cerebras-llama', 'groq-llama', 'deepseek-chat', 'nemotron-nano', 'llama-3.1-8b', 'ollama:nemotron-nano'],
  sovereign: ['cerebras-llama', 'groq-llama', 'deepseek-chat', 'nemotron-nano', 'nemotron-super', 'gpt-4o-mini', 'claude-3-5-haiku-latest', 'mistral-small', 'ollama:nemotron-nano'],
  family:    ['cerebras-llama', 'groq-llama', 'deepseek-chat', 'nemotron-nano', 'nemotron-super', 'nemotron-ultra', 'gpt-4o', 'claude-3-5-sonnet-latest', 'minimax-text-01', 'mistral-large', 'ollama:nemotron-nano'],
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
  | 'reasoning'
  | 'document_editing'
  | 'email_drafting'
  | 'code_review'
  | 'meeting_prep';

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

  if (lower.match(/\b(document|edit|draft|write|report|memo|letter|article)\b/) && !lower.match(/\b(email|reply|forward|inbox)\b/))
    return 'document_editing';

  if (lower.match(/\b(email|reply|forward|inbox|sender|subject line)\b/))
    return 'email_drafting';

  if (lower.match(/\b(review code|pull request|PR|diff|merge|lint)\b/))
    return 'code_review';

  if (lower.match(/\b(meeting|agenda|minutes|attendees|calendar|schedule)\b/))
    return 'meeting_prep';

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
    if (taskType === 'document_editing') return 'claude-3-5-haiku-latest';
    if (taskType === 'email_drafting') return 'deepseek-chat';
    if (taskType === 'code_review') return 'nemotron-nano';
    if (taskType === 'meeting_prep') return 'groq-llama';
    return 'cerebras-llama'; // Simple chat → fastest free provider
  }

  switch (taskType) {
    case 'reasoning':
      // Nemotron excels at reasoning — use Super for paid, Ultra for family
      return tier === 'family' ? 'nemotron-ultra' : 'nemotron-super';

    case 'emotional':
      // MiniMax-Text-01 is purpose-built for character AI and empathy (4M context)
      // Claude haiku is the fallback for sovereign tier
      return tier === 'family' ? 'minimax-text-01' : 'claude-3-5-haiku-latest';

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

    case 'document_editing':
      return 'claude-3-5-haiku-latest';

    case 'email_drafting':
      return tier === 'family' ? 'claude-3-5-haiku-latest' : 'deepseek-chat';

    case 'code_review':
      return 'nemotron-super';

    case 'meeting_prep':
      return 'groq-llama';

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
    // If Anthropic API key is available, use Claude
    if (process.env.ANTHROPIC_API_KEY) {
      return anthropic(modelId);
    }
    // Fallback: route to local Ollama when API key is exhausted/missing
    if (OLLAMA_AVAILABLE) {
      console.warn(`[llm-router] ANTHROPIC_API_KEY not set — routing ${modelId} to local Ollama (llama3.2:3b)`);
      const ollama = createOpenAI({ baseURL: OLLAMA_ENDPOINT, apiKey: 'ollama' });
      return ollama('llama3.2:3b');
    }
    // Last resort: try anyway (will fail with auth error)
    return anthropic(modelId);
  }

  if (modelId.startsWith('gpt-') || modelId.startsWith('o1') || modelId.startsWith('o3')) {
    if (process.env.OPENAI_API_KEY) {
      return openai(modelId);
    }
    if (OLLAMA_AVAILABLE) {
      console.warn(`[llm-router] OPENAI_API_KEY not set — routing ${modelId} to local Ollama`);
      const ollama = createOpenAI({ baseURL: OLLAMA_ENDPOINT, apiKey: 'ollama' });
      return ollama('llama3.2:3b');
    }
    return openai(modelId);
  }

  // NVIDIA Nemotron models via NIM (OpenAI-compatible API)
  if (modelId.startsWith('nemotron-')) {
    const nvidiaApiKey = process.env.NVIDIA_API_KEY;
    if (nvidiaApiKey) {
      // Cloud NVIDIA NIM
      const nvidia = createOpenAI({
        baseURL: 'https://integrate.api.nvidia.com/v1',
        apiKey: nvidiaApiKey,
      });
      const nemotronModels: Record<string, string> = {
        'nemotron-nano':  'nvidia/nemotron-3-nano-30b-a3b-bf16',
        'nemotron-super': 'nvidia/nemotron-3-super-120b-a12b-bf16',
        'nemotron-ultra': 'nvidia/llama-nemotron-ultra-253b-v1',
      };
      return nvidia(nemotronModels[modelId] ?? nemotronModels['nemotron-nano']);
    }
    // Fallback: local Ollama Nemotron if available
    if (process.env.OLLAMA_ENDPOINT || process.env.OLLAMA_ENABLED === 'true') {
      console.info(`[llm-router] NVIDIA_API_KEY not set — routing ${modelId} to local Ollama`);
      const ollama = createOpenAI({ baseURL: OLLAMA_ENDPOINT, apiKey: 'ollama' });
      const localNemotronModels: Record<string, string> = {
        'nemotron-nano': 'nemotron-nano',
        'nemotron-super': 'nemotron-nano', // 30B+ won't fit 16GB — map to nano
        'nemotron-ultra': 'nemotron-nano',
      };
      return ollama(localNemotronModels[modelId] ?? 'nemotron-nano');
    }
    console.warn('[llm-router] NVIDIA_API_KEY not set, no Ollama — falling back to DeepSeek');
    return getProvider('deepseek-chat');
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

  // MiniMax — 4M context window, built for character AI (best for emotional/companion tasks)
  if (modelId.startsWith('minimax-')) {
    const minimaxApiKey = process.env.MINIMAX_API_KEY;
    if (!minimaxApiKey) {
      console.warn('[llm-router] MINIMAX_API_KEY not set — falling back to Claude');
      return getProvider('claude-3-5-haiku-latest');
    }
    const minimax = createOpenAI({
      baseURL: 'https://api.minimax.chat/v1',
      apiKey: minimaxApiKey,
    });
    const minimaxModels: Record<string, string> = {
      'minimax-text-01':  'MiniMax-Text-01',   // 4M context, character AI
      'minimax-abab6.5': 'abab6.5-chat',       // Faster, standard context
    };
    return minimax(minimaxModels[modelId] ?? 'MiniMax-Text-01');
  }

  // Mistral — excellent creative writing + multilingual
  if (modelId.startsWith('mistral-')) {
    const mistralApiKey = process.env.MISTRAL_API_KEY;
    if (!mistralApiKey) {
      console.warn('[llm-router] MISTRAL_API_KEY not set — falling back to DeepSeek');
      return getProvider('deepseek-chat');
    }
    const mistral = createOpenAI({
      baseURL: 'https://api.mistral.ai/v1',
      apiKey: mistralApiKey,
    });
    const mistralModels: Record<string, string> = {
      'mistral-small':  'mistral-small-latest',
      'mistral-medium': 'mistral-medium-latest',
      'mistral-large':  'mistral-large-latest',
    };
    return mistral(mistralModels[modelId] ?? 'mistral-small-latest');
  }

  // Local Ollama models — explicit routing via 'ollama:' prefix
  if (modelId.startsWith('ollama:')) {
    const ollamaModel = modelId.replace('ollama:', '');
    const ollama = createOpenAI({ baseURL: OLLAMA_ENDPOINT, apiKey: 'ollama' });
    return ollama(ollamaModel);
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
    case 'code_review':
      return 'max';
    case 'document_editing':
    case 'email_drafting':
    case 'meeting_prep':
      return 'medium';
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
export function route(message: string, tier: Tier, options?: { sensitivity?: 'low' | 'medium' | 'high' }): RouterResult {
  const taskType = classifyTask(message);
  let model = selectModel(taskType, tier);

  // Sensitivity-based routing override
  if (options?.sensitivity === 'high' && (process.env.OLLAMA_ENDPOINT || process.env.OLLAMA_ENABLED === 'true')) {
    // High sensitivity = always local, never cloud
    model = 'ollama:nemotron-nano';
  } else if (options?.sensitivity === 'medium' && (process.env.OLLAMA_ENDPOINT || process.env.OLLAMA_ENABLED === 'true')) {
    // Medium = prefer local for non-critical tasks
    if (['chat', 'planning', 'research'].includes(taskType)) {
      model = 'ollama:nemotron-nano';
    }
  }

  const provider = getProvider(model);
  return { model, taskType, provider };
}

// ── Fallback chain logic ────────────────────────────────────────────────

/**
 * Fallback chains: requested model → free cloud alternative → local Ollama.
 * Each model maps to an ordered list of fallbacks to try on failure.
 */
const FALLBACK_CHAINS: Record<string, string[]> = {
  'claude-3-5-sonnet-latest':  ['deepseek-chat', 'groq-llama', 'ollama:nemotron-nano'],
  'claude-3-5-haiku-latest':   ['deepseek-chat', 'groq-llama', 'ollama:nemotron-nano'],
  'gpt-4o':                    ['deepseek-chat', 'groq-llama', 'ollama:nemotron-nano'],
  'gpt-4o-mini':               ['deepseek-chat', 'cerebras-llama', 'ollama:nemotron-nano'],
  'nemotron-ultra':            ['nemotron-super', 'groq-llama', 'ollama:nemotron-nano'],
  'nemotron-super':            ['groq-llama', 'cerebras-llama', 'ollama:nemotron-nano'],
  'nemotron-nano':             ['cerebras-llama', 'ollama:nemotron-nano'],
  'deepseek-chat':             ['groq-llama', 'cerebras-llama', 'ollama:nemotron-nano'],
  'groq-llama':                ['cerebras-llama', 'deepseek-chat', 'ollama:nemotron-nano'],
  'cerebras-llama':            ['groq-llama', 'deepseek-chat', 'ollama:nemotron-nano'],
};

export interface FallbackResult {
  provider: LanguageModel;
  model: string;
  wasFallback: boolean;
}

/**
 * Attempts to resolve a provider for the given model, falling back through
 * the chain on errors (timeout, 429 rate limit, provider down, etc.).
 *
 * This does NOT make an actual LLM call — it validates that the provider
 * can be constructed (API key present, endpoint reachable conceptually).
 * For runtime fallback during streaming, wrap your streamText call with
 * try/catch and call this again with the next model in the chain.
 *
 * @param modelId - The primary model to attempt
 * @returns FallbackResult with the resolved provider and whether fallback was used
 */
export function getProviderWithFallback(modelId: string): FallbackResult {
  // Try the primary model
  try {
    const provider = getProvider(modelId);
    return { provider, model: modelId, wasFallback: false };
  } catch (err) {
    logWarn('provider_fallback_triggered', {
      model: modelId,
      metadata: { error: err instanceof Error ? err.message : String(err) },
    });
  }

  // Walk the fallback chain
  const chain = FALLBACK_CHAINS[modelId] ?? ['groq-llama', 'ollama:nemotron-nano'];
  for (const fallbackModel of chain) {
    try {
      const provider = getProvider(fallbackModel);
      logInfo('provider_fallback_resolved', {
        model: fallbackModel,
        metadata: { originalModel: modelId },
      });
      return { provider, model: fallbackModel, wasFallback: true };
    } catch (err) {
      logWarn('provider_fallback_failed', {
        model: fallbackModel,
        metadata: { error: err instanceof Error ? err.message : String(err) },
      });
    }
  }

  // Last resort: local Ollama (should never throw on construction)
  logError('provider_fallback_exhausted', {
    model: modelId,
    metadata: { fallbackChain: chain },
  });
  const ollama = createOpenAI({ baseURL: OLLAMA_ENDPOINT, apiKey: 'ollama' });
  return { provider: ollama('nemotron-nano'), model: 'ollama:nemotron-nano', wasFallback: true };
}
