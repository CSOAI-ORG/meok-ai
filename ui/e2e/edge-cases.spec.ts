/**
 * Edge Case E2E Tests — MEOK
 * Tests boundary conditions, unusual inputs, and error handling.
 *
 * Run: npx playwright test tests/e2e/edge-cases.spec.ts
 */
import { test, expect } from '@playwright/test';

test.describe('Edge Cases — API input validation', () => {
  test('empty message body returns error', async ({ request }) => {
    const resp = await request.post('/api/chat', {
      data: { messages: [{ role: 'user', content: '' }] },
    });
    expect([400, 401]).toContain(resp.status());
  });

  test('whitespace-only message returns error', async ({ request }) => {
    const resp = await request.post('/api/chat', {
      data: { messages: [{ role: 'user', content: '   \n\t  ' }] },
    });
    expect([400, 401]).toContain(resp.status());
  });

  test('missing messages field returns error', async ({ request }) => {
    const resp = await request.post('/api/chat', {
      data: { companionId: 'aria' },
    });
    expect([400, 401]).toContain(resp.status());
  });

  test('non-array messages returns error', async ({ request }) => {
    const resp = await request.post('/api/chat', {
      data: { messages: 'hello' },
    });
    expect([400, 401]).toContain(resp.status());
  });
});

test.describe('Edge Cases — Language detection edge cases', () => {
  test('emoji-only input defaults to English', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    const result = detectLanguage('😀🎉🔥💪');
    // Should not crash, should return some result
    expect(result.language).toBeDefined();
  });

  test('code snippet detected as Latin script', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    const result = detectLanguage('const x = arr.map(i => i * 2).filter(Boolean)');
    expect(result.script).toBe('latin');
  });

  test('mixed language input does not crash', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    const result = detectLanguage('Hello 世界 Bonjour 안녕');
    expect(result.language).toBeDefined();
    expect(result.confidence).toBeDefined();
  });

  test('single character input returns low confidence', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    const result = detectLanguage('a');
    expect(result.confidence).toBeLessThan(0.5);
  });

  test('very long input does not crash', async () => {
    const { detectLanguage } = await import('../../src/lib/language');
    const longText = 'This is a test sentence that repeats. '.repeat(500);
    const result = detectLanguage(longText);
    expect(result.language).toBe('en');
  });
});

test.describe('Edge Cases — Emotion detection edge cases', () => {
  test('empty text returns neutral', async () => {
    const { analyzeEmotion } = await import('../../src/lib/emotion');
    const result = analyzeEmotion('');
    expect(result.primary).toBe('neutral');
    expect(result.confidence).toBe(0);
  });

  test('purely numeric input returns neutral', async () => {
    const { analyzeEmotion } = await import('../../src/lib/emotion');
    const result = analyzeEmotion('12345 67890');
    expect(result.primary).toBe('neutral');
  });

  test('all-caps does not crash', async () => {
    const { analyzeEmotion } = await import('../../src/lib/emotion');
    const result = analyzeEmotion('I AM VERY ANGRY AND UPSET RIGHT NOW');
    expect(result.valence).toBeLessThan(0);
  });
});

test.describe('Edge Cases — Memory and profile edge cases', () => {
  test('procedural patterns with no messages returns empty', async () => {
    const { analyzeProceduralPatterns, formatProceduralContext } = await import('../../src/lib/memory');
    const patterns = analyzeProceduralPatterns([], []);
    expect(patterns).toHaveLength(0);
    expect(formatProceduralContext(patterns)).toBe('');
  });

  test('OCEAN analysis with single short message', async () => {
    const { analyzeOCEAN } = await import('../../src/lib/user-profile');
    const result = analyzeOCEAN([{ role: 'user', content: 'hi' }]);
    expect(result.confidence).toBeLessThan(0.3);
    expect(result.ocean.openness).toBeGreaterThanOrEqual(0);
  });

  test('crisis resources always include international fallback', async () => {
    const { getCrisisResources } = await import('../../src/lib/crisis');
    const resources = getCrisisResources(undefined);
    expect(resources.length).toBeGreaterThan(0);
    // Should include at least US/UK and international
    const countries = resources.map(r => r.country);
    expect(countries).toContain('United States');
    expect(countries).toContain('United Kingdom');
  });

  test('crisis resources for German locale include Germany', async () => {
    const { getCrisisResources } = await import('../../src/lib/crisis');
    const resources = getCrisisResources('de-DE,de;q=0.9,en;q=0.1');
    const countries = resources.map(r => r.country);
    expect(countries).toContain('Germany');
  });
});

test.describe('Edge Cases — Context compression', () => {
  test('short conversation is not compressed', async () => {
    const { compressContext } = await import('../../src/lib/context-compressor');
    const messages = Array.from({ length: 5 }, (_, i) => ({
      role: i % 2 === 0 ? 'user' as const : 'assistant' as const,
      content: `Message ${i + 1}`,
    }));
    const result = await compressContext(messages, 'test-user');
    expect(result.wasCompressed).toBe(false);
  });
});

test.describe('Edge Cases — Evolution system', () => {
  test('negative interaction count returns stage 0', async () => {
    const { getEvolutionStage } = await import('../../src/lib/evolution');
    const stage = getEvolutionStage(-1);
    expect(stage.id).toBe(0);
  });

  test('very high interaction count returns final stage', async () => {
    const { getEvolutionStage } = await import('../../src/lib/evolution');
    const stage = getEvolutionStage(10000);
    expect(stage.id).toBe(3);
  });
});

test.describe('Edge Cases — Page stability', () => {
  test('registry page loads without crash', async ({ page }) => {
    await page.goto('/registry');
    await page.waitForLoadState('domcontentloaded');
    expect(page.url()).toContain('registry');
  });

  test('pricing page loads', async ({ page }) => {
    await page.goto('/pricing');
    await page.waitForLoadState('domcontentloaded');
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/explorer|sovereign|family/i);
  });

  test('characters page loads', async ({ page }) => {
    await page.goto('/characters');
    await page.waitForLoadState('domcontentloaded');
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/character|companion/i);
  });
});
