/**
 * Tests for cost-tracker.ts — LLM cost estimation and formatting.
 */
import { estimateCost, formatCost, isFreeTier, getModelPricing } from '@/lib/cost-tracker';

describe('estimateCost', () => {
  it('returns zero for free models', () => {
    expect(estimateCost('groq-llama', 1000, 500)).toBe(0);
    expect(estimateCost('cerebras-llama', 1000, 500)).toBe(0);
  });

  it('returns positive for paid models', () => {
    const cost = estimateCost('claude-3-5-sonnet-latest', 1000, 500);
    expect(cost).toBeGreaterThan(0);
  });

  it('cost scales with token count', () => {
    const small = estimateCost('gpt-4o', 100, 50);
    const large = estimateCost('gpt-4o', 10000, 5000);
    expect(large).toBeGreaterThan(small);
  });

  it('returns zero for zero tokens', () => {
    expect(estimateCost('gpt-4o', 0, 0)).toBe(0);
  });

  it('handles unknown models gracefully', () => {
    const cost = estimateCost('unknown-model-xyz', 1000, 500);
    expect(typeof cost).toBe('number');
    expect(cost).toBeGreaterThanOrEqual(0);
  });

  it('ollama models are free', () => {
    expect(estimateCost('ollama:phi4-mini', 5000, 2000)).toBe(0);
    expect(estimateCost('ollama:llama3.2:3b', 5000, 2000)).toBe(0);
  });
});

describe('formatCost', () => {
  it('formats zero as Free', () => {
    expect(formatCost(0).toLowerCase()).toContain('free');
  });

  it('formats small costs with precision', () => {
    const formatted = formatCost(0.000123);
    expect(formatted).toContain('$');
  });

  it('returns a string', () => {
    expect(typeof formatCost(0.5)).toBe('string');
  });
});

describe('isFreeTier', () => {
  it('returns true for groq', () => {
    expect(isFreeTier('groq-llama')).toBe(true);
  });

  it('returns true for cerebras', () => {
    expect(isFreeTier('cerebras-llama')).toBe(true);
  });

  it('returns false for claude', () => {
    expect(isFreeTier('claude-3-5-sonnet-latest')).toBe(false);
  });

  it('returns true for ollama models', () => {
    expect(isFreeTier('ollama:phi4-mini')).toBe(true);
  });
});

describe('getModelPricing', () => {
  it('returns pricing for known models', () => {
    const pricing = getModelPricing('gpt-4o');
    expect(pricing).not.toBeNull();
    expect(pricing?.inputPer1K).toBeGreaterThan(0);
    expect(pricing?.outputPer1K).toBeGreaterThan(0);
  });

  it('returns null for unknown models', () => {
    expect(getModelPricing('nonexistent-model')).toBeNull();
  });
});
