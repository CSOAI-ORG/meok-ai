/**
 * MEOK AI LABS — Enhanced Multi-LLM Routing Layer v2.0
 * 
 * Improvements:
 * - Cost-aware routing
 * - Quality-based model selection
 * - Streaming optimization
 * - Fallback chains
 * - Usage tracking for billing
 */

import { anthropic } from "@ai-sdk/anthropic";
import { openai } from "@ai-sdk/openai";
import { createOpenAI } from "@ai-sdk/openai";
import type { LanguageModel } from "ai";

// ── Model Definitions ──────────────────────────────────────────────────────

interface ModelConfig {
  id: string;
  provider: "anthropic" | "openai" | "groq" | "ollama" | "cerebras" | "deepseek" | "nvidia";
  tier: "free" | "standard" | "premium" | "ultra";
  costPer1kTokens: { input: number; output: number }; // In dollars
  maxTokens: number;
  contextWindow: number;
  strengths: string[];
  latency: "fast" | "medium" | "slow";
  quality: number; // 1-10 scale
  streaming: boolean;
  region: "us" | "eu" | "global";
}

export const MODELS: Record<string, ModelConfig> = {
  // Free tier models
  "llama-3.2-3b": {
    id: "llama-3.2-3b",
    provider: "ollama",
    tier: "free",
    costPer1kTokens: { input: 0, output: 0 },
    maxTokens: 4096,
    contextWindow: 128000,
    strengths: ["fast", "local", "privacy"],
    latency: "fast",
    quality: 6,
    streaming: true,
    region: "global",
  },
  
  "deepseek-chat": {
    id: "deepseek-chat",
    provider: "deepseek",
    tier: "free",
    costPer1kTokens: { input: 0.00014, output: 0.00028 },
    maxTokens: 8192,
    contextWindow: 64000,
    strengths: ["reasoning", "coding", "chinese"],
    latency: "medium",
    quality: 7,
    streaming: true,
    region: "global",
  },
  
  "groq-llama-3.1-70b": {
    id: "groq-llama-3.1-70b",
    provider: "groq",
    tier: "free",
    costPer1kTokens: { input: 0.00059, output: 0.00079 },
    maxTokens: 8192,
    contextWindow: 128000,
    strengths: ["fast", "general"],
    latency: "fast",
    quality: 7,
    streaming: true,
    region: "us",
  },
  
  // Standard tier models
  "claude-3-5-haiku": {
    id: "claude-3-5-haiku-20241022",
    provider: "anthropic",
    tier: "standard",
    costPer1kTokens: { input: 0.0008, output: 0.004 },
    maxTokens: 8192,
    contextWindow: 200000,
    strengths: ["fast", "nuanced", "safe"],
    latency: "fast",
    quality: 8,
    streaming: true,
    region: "us",
  },
  
  "gpt-4o-mini": {
    id: "gpt-4o-mini",
    provider: "openai",
    tier: "standard",
    costPer1kTokens: { input: 0.00015, output: 0.0006 },
    maxTokens: 16384,
    contextWindow: 128000,
    strengths: ["fast", "cost-effective", "vision"],
    latency: "fast",
    quality: 7,
    streaming: true,
    region: "global",
  },
  
  // Premium tier models
  "claude-3-5-sonnet": {
    id: "claude-3-5-sonnet-20241022",
    provider: "anthropic",
    tier: "premium",
    costPer1kTokens: { input: 0.003, output: 0.015 },
    maxTokens: 8192,
    contextWindow: 200000,
    strengths: ["nuanced", "coding", "analysis", "creative"],
    latency: "medium",
    quality: 9,
    streaming: true,
    region: "us",
  },
  
  "gpt-4o": {
    id: "gpt-4o",
    provider: "openai",
    tier: "premium",
    costPer1kTokens: { input: 0.0025, output: 0.01 },
    maxTokens: 16384,
    contextWindow: 128000,
    strengths: ["vision", "reasoning", "general"],
    latency: "medium",
    quality: 9,
    streaming: true,
    region: "global",
  },
  
  "claude-3-opus": {
    id: "claude-3-opus-20240229",
    provider: "anthropic",
    tier: "ultra",
    costPer1kTokens: { input: 0.015, output: 0.075 },
    maxTokens: 4096,
    contextWindow: 200000,
    strengths: ["complex", "research", "coding", "analysis"],
    latency: "slow",
    quality: 10,
    streaming: true,
    region: "us",
  },
  
  "gpt-4o-2024-08-06": {
    id: "gpt-4o-2024-08-06",
    provider: "openai",
    tier: "ultra",
    costPer1kTokens: { input: 0.0025, output: 0.01 },
    maxTokens: 16384,
    contextWindow: 128000,
    strengths: [ "structured-output", "vision", "reasoning" ],
    latency: "medium",
    quality: 9,
    streaming: true,
    region: "global",
  },
} as const;

// ── Smart Routing Logic ────────────────────────────────────────────────────

interface RoutingContext {
  userTier: "explorer" | "sovereign" | "family";
  messageHistory: number;
  conversationDepth: number;
  taskType: string;
  urgency: "low" | "medium" | "high";
  qualityRequired: "standard" | "high" | "maximum";
  estimatedTokens: number;
  userPreference?: string;
}

export function selectOptimalModel(context: RoutingContext): string {
  const { userTier, taskType, qualityRequired, urgency, conversationDepth } = context;
  
  // Get available models for tier
  const availableModels = Object.values(MODELS).filter((m) => {
    if (userTier === "explorer") return m.tier === "free";
    if (userTier === "sovereign") return m.tier === "free" || m.tier === "standard";
    return true; // Family gets all
  });
  
  // Score each model
  const scored = availableModels.map((model) => {
    let score = 0;
    
    // Quality match
    if (qualityRequired === "maximum" && model.quality >= 9) score += 30;
    else if (qualityRequired === "high" && model.quality >= 8) score += 20;
    else if (qualityRequired === "standard") score += 10;
    
    // Latency preference
    if (urgency === "high" && model.latency === "fast") score += 25;
    if (urgency === "medium" && model.latency !== "slow") score += 15;
    
    // Task type matching
    if (model.strengths.some((s) => taskType.toLowerCase().includes(s))) {
      score += 20;
    }
    
    // Cost efficiency for long conversations
    if (conversationDepth > 20) {
      const cost = model.costPer1kTokens.input + model.costPer1kTokens.output;
      score += Math.max(0, 10 - cost * 1000); // Prefer cheaper models for long chats
    }
    
    return { model, score };
  });
  
  // Return highest scoring model
  scored.sort((a, b) => b.score - a.score);
  return scored[0]?.model.id || "deepseek-chat";
}

// ── Fallback Chain ─────────────────────────────────────────────────────────

export const FALLBACK_CHAINS: Record<string, string[]> = {
  "claude-3-opus": ["claude-3-5-sonnet", "gpt-4o", "claude-3-5-haiku"],
  "claude-3-5-sonnet": ["gpt-4o", "claude-3-5-haiku", "deepseek-chat"],
  "gpt-4o": ["claude-3-5-haiku", "gpt-4o-mini", "deepseek-chat"],
  "claude-3-5-haiku": ["gpt-4o-mini", "deepseek-chat", "groq-llama-3.1-70b"],
  "deepseek-chat": ["groq-llama-3.1-70b", "llama-3.2-3b"],
};

// ── Usage Tracking for Billing ─────────────────────────────────────────────

interface UsageRecord {
  userId: string;
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  cost: number;
  timestamp: string;
  conversationId: string;
}

export class UsageTracker {
  private buffer: UsageRecord[] = [];
  private flushInterval: NodeJS.Timeout | null = null;
  
  constructor(private flushSize: number = 100) {
    this.startFlushInterval();
  }
  
  record(record: Omit<UsageRecord, "timestamp">) {
    this.buffer.push({
      ...record,
      timestamp: new Date().toISOString(),
    });
    
    if (this.buffer.length >= this.flushSize) {
      this.flush();
    }
  }
  
  private startFlushInterval() {
    this.flushInterval = setInterval(() => {
      if (this.buffer.length > 0) {
        this.flush();
      }
    }, 60000); // Flush every minute
  }
  
  private async flush() {
    const batch = [...this.buffer];
    this.buffer = [];
    
    // Send to analytics/billing
    try {
      await fetch("/api/analytics/usage", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ records: batch }),
      });
    } catch (err) {
      console.error("[UsageTracker] Failed to flush:", err);
      // Re-add to buffer for retry
      this.buffer.unshift(...batch);
    }
  }
  
  calculateCost(modelId: string, inputTokens: number, outputTokens: number): number {
    const model = MODELS[modelId];
    if (!model) return 0;
    
    const inputCost = (inputTokens / 1000) * model.costPer1kTokens.input;
    const outputCost = (outputTokens / 1000) * model.costPer1kTokens.output;
    return inputCost + outputCost;
  }
  
  destroy() {
    if (this.flushInterval) {
      clearInterval(this.flushInterval);
    }
    this.flush();
  }
}

// ── Cost Optimization ──────────────────────────────────────────────────────

export const COST_OPTIMIZATION = {
  // Cache similar prompts
  CACHE_SIMILARITY_THRESHOLD: 0.85,
  CACHE_TTL_HOURS: 24,
  
  // Batch processing for non-urgent tasks
  BATCH_SIZE: 10,
  BATCH_DELAY_MS: 5000,
  
  // Smart truncation
  MAX_CONTEXT_TOKENS: {
    explorer: 4000,
    sovereign: 8000,
    family: 16000,
  },
  
  // Compression for old messages
  COMPRESS_AFTER_MESSAGES: 10,
  COMPRESSION_RATIO: 0.5,
} as const;

// ── Quality Metrics ────────────────────────────────────────────────────────

export function estimateQualityScore(
  modelId: string,
  taskType: string
): number {
  const model = MODELS[modelId];
  if (!model) return 5;
  
  let score = model.quality;
  
  // Boost if model specializes in this task
  if (model.strengths.some((s) => taskType.toLowerCase().includes(s))) {
    score += 1;
  }
  
  return Math.min(10, score);
}

// ── Revenue-Optimized Routing ─────────────────────────────────────────────-

interface RevenueContext {
  userTier: "explorer" | "sovereign" | "family";
  daysSinceSignup: number;
  totalMessages: number;
  conversionProbability: number;
}

export function shouldOfferPremiumPreview(context: RevenueContext): boolean {
  // Offer premium model preview to high-conversion-probability users
  if (context.userTier !== "explorer") return false;
  
  // Power users who might convert
  if (context.totalMessages > 100 && context.daysSinceSignup > 7) {
    return context.conversionProbability > 0.3;
  }
  
  return false;
}

export function getPremiumPreviewModel(userTier: string): string | null {
  if (userTier !== "explorer") return null;
  return "claude-3-5-haiku"; // Preview quality model
}
