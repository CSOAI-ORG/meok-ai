/**
 * MEOK AI LABS — Cost Tracking
 *
 * Approximate pricing per 1K tokens (USD) for input and output.
 * Prices are estimates — check provider dashboards for exact billing.
 */

interface ModelPricing {
  inputPer1K: number;
  outputPer1K: number;
}

/**
 * Pricing table: approximate $/1K tokens for each supported model.
 * Local/free models are priced at $0.
 */
const MODEL_PRICING: Record<string, ModelPricing> = {
  // Anthropic
  'claude-3-5-haiku-latest':   { inputPer1K: 0.001,  outputPer1K: 0.005  },
  'claude-3-5-sonnet-latest':  { inputPer1K: 0.003,  outputPer1K: 0.015  },

  // OpenAI
  'gpt-4o':                    { inputPer1K: 0.0025, outputPer1K: 0.01   },
  'gpt-4o-mini':               { inputPer1K: 0.00015, outputPer1K: 0.0006 },

  // DeepSeek
  'deepseek-chat':             { inputPer1K: 0.00014, outputPer1K: 0.00028 },

  // Groq (free tier, effectively $0 for now)
  'groq-llama':                { inputPer1K: 0.0,    outputPer1K: 0.0    },

  // Cerebras (free tier)
  'cerebras-llama':            { inputPer1K: 0.0,    outputPer1K: 0.0    },

  // NVIDIA Nemotron (cloud NIM pricing approximate)
  'nemotron-nano':             { inputPer1K: 0.0,    outputPer1K: 0.0    },
  'nemotron-super':            { inputPer1K: 0.0015, outputPer1K: 0.005  },
  'nemotron-ultra':            { inputPer1K: 0.003,  outputPer1K: 0.012  },

  // Local Ollama — always free
  'ollama:nemotron-nano':      { inputPer1K: 0.0,    outputPer1K: 0.0    },
};

/**
 * Estimate the cost of an LLM call in USD.
 *
 * @param model        - Model identifier (e.g. 'claude-3-5-haiku-latest')
 * @param inputTokens  - Number of input tokens consumed
 * @param outputTokens - Number of output tokens generated
 * @returns Estimated cost in USD, or 0 if model is unknown/free
 */
export function estimateCost(model: string, inputTokens: number, outputTokens: number): number {
  const pricing = MODEL_PRICING[model];
  if (!pricing) return 0;

  const inputCost = (inputTokens / 1000) * pricing.inputPer1K;
  const outputCost = (outputTokens / 1000) * pricing.outputPer1K;
  return inputCost + outputCost;
}

/**
 * Format a USD cost as a human-readable string.
 *
 * @param usd - Cost in USD
 * @returns Formatted string like "$0.0042" or "Free"
 */
export function formatCost(usd: number): string {
  if (usd === 0) return 'Free';
  if (usd < 0.01) return `$${usd.toFixed(4)}`;
  if (usd < 1) return `$${usd.toFixed(3)}`;
  return `$${usd.toFixed(2)}`;
}

/**
 * Check if a model is free (no API cost).
 */
export function isFreeTier(model: string): boolean {
  const pricing = MODEL_PRICING[model];
  if (!pricing) return true; // Unknown models assumed free (local)
  return pricing.inputPer1K === 0 && pricing.outputPer1K === 0;
}

/**
 * Get the pricing entry for a model, or null if unknown.
 */
export function getModelPricing(model: string): ModelPricing | null {
  return MODEL_PRICING[model] ?? null;
}
