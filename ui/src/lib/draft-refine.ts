/**
 * MEOK AI LABS — Draft-then-Refine Pipeline
 *
 * Local Nemotron generates fast, free drafts; cloud models polish the output.
 * This keeps Explorer-tier costs at zero while delivering refined quality
 * when a paid model is available for the second pass.
 */

import { generateText } from 'ai';
import { createOpenAI } from '@ai-sdk/openai';
import { getProvider } from './llm-router';

// ── Constants ─────────────────────────────────────────────────────────────

const OLLAMA_ENDPOINT = process.env.OLLAMA_ENDPOINT || 'http://localhost:11434/v1';

const DEFAULT_DRAFT_MODEL = 'nemotron-nano';
const FALLBACK_DRAFT_MODEL = 'cerebras-llama';
const DEFAULT_REFINE_MODEL = 'claude-3-5-haiku-latest';

// ── Interfaces ────────────────────────────────────────────────────────────

export interface DraftRefineResult {
  /** The final output text (refined if a second pass ran, otherwise the raw draft) */
  text: string;
  /** Whether the draft was refined by a cloud model */
  wasRefined: boolean;
  /** Model ID used for the initial draft */
  draftModel: string;
  /** Model ID used for refinement (undefined if draft-only) */
  refineModel?: string;
  /** Total wall-clock time in milliseconds */
  totalMs: number;
}

export interface DraftRefineOptions {
  /** System prompt applied to both draft and refine stages */
  systemPrompt?: string;
  /** Skip the refine step entirely — return the raw local draft */
  draftOnly?: boolean;
  /** Override the default refine model (defaults to claude-3-5-haiku-latest) */
  refineModelId?: string;
  /** Custom instructions for the refine pass */
  refineInstructions?: string;
  /** Max tokens for the draft generation */
  draftMaxTokens?: number;
  /** Max tokens for the refine generation */
  refineMaxTokens?: number;
}

// ── Draft with local model ────────────────────────────────────────────────

/**
 * Generates a fast draft using a local Ollama Nemotron model. Falls back to
 * Cerebras Llama if Ollama is unavailable (no endpoint configured).
 */
export async function draftWithLocal(
  prompt: string,
  options?: Pick<DraftRefineOptions, 'systemPrompt' | 'draftMaxTokens'>,
): Promise<{ text: string; model: string; durationMs: number }> {
  const start = Date.now();

  const ollamaAvailable =
    !!process.env.OLLAMA_ENDPOINT || process.env.OLLAMA_ENABLED === 'true';

  let modelId: string;
  let provider;

  if (ollamaAvailable) {
    modelId = DEFAULT_DRAFT_MODEL;
    const ollama = createOpenAI({ baseURL: OLLAMA_ENDPOINT, apiKey: 'ollama' });
    provider = ollama('nemotron-nano');
  } else {
    modelId = FALLBACK_DRAFT_MODEL;
    provider = getProvider(FALLBACK_DRAFT_MODEL);
  }

  const { text } = await generateText({
    model: provider,
    system: options?.systemPrompt,
    prompt,
    maxOutputTokens: options?.draftMaxTokens ?? 2048,
  });

  return { text, model: modelId, durationMs: Date.now() - start };
}

// ── Refine with cloud model ───────────────────────────────────────────────

/**
 * Refines an existing draft using a cloud model (Claude Haiku by default).
 * The refinement prompt wraps the draft with optional custom instructions.
 */
export async function refineWithCloud(
  draft: string,
  instructions?: string,
  options?: Pick<DraftRefineOptions, 'systemPrompt' | 'refineModelId' | 'refineMaxTokens'>,
): Promise<{ text: string; model: string; durationMs: number }> {
  const start = Date.now();
  const modelId = options?.refineModelId ?? DEFAULT_REFINE_MODEL;
  const provider = getProvider(modelId);

  const refinePrompt = [
    'Below is a draft that needs refinement. Improve clarity, accuracy, and tone while preserving the original meaning and intent.',
    instructions ? `\nAdditional instructions: ${instructions}` : '',
    `\n---\n\n${draft}`,
  ].join('');

  const { text } = await generateText({
    model: provider,
    system: options?.systemPrompt,
    prompt: refinePrompt,
    maxOutputTokens: options?.refineMaxTokens ?? 4096,
  });

  return { text, model: modelId, durationMs: Date.now() - start };
}

// ── Full pipeline ─────────────────────────────────────────────────────────

/**
 * Draft-then-refine pipeline: generates a fast local draft, then optionally
 * polishes it with a cloud model.
 *
 * @example
 * const result = await draftAndRefine('Explain quantum entanglement simply.');
 * console.log(result.text);          // Refined output
 * console.log(result.wasRefined);    // true
 * console.log(result.totalMs);       // ~3200
 */
export async function draftAndRefine(
  prompt: string,
  options?: DraftRefineOptions,
): Promise<DraftRefineResult> {
  const start = Date.now();

  // Stage 1: fast local draft
  const draft = await draftWithLocal(prompt, {
    systemPrompt: options?.systemPrompt,
    draftMaxTokens: options?.draftMaxTokens,
  });

  // Early return if draft-only mode
  if (options?.draftOnly) {
    return {
      text: draft.text,
      wasRefined: false,
      draftModel: draft.model,
      totalMs: Date.now() - start,
    };
  }

  // Stage 2: cloud refinement
  const refined = await refineWithCloud(draft.text, options?.refineInstructions, {
    systemPrompt: options?.systemPrompt,
    refineModelId: options?.refineModelId,
    refineMaxTokens: options?.refineMaxTokens,
  });

  return {
    text: refined.text,
    wasRefined: true,
    draftModel: draft.model,
    refineModel: refined.model,
    totalMs: Date.now() - start,
  };
}
