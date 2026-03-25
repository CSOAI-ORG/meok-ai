/**
 * Ralph Mode Functional E2E Tests — MEOK
 * Tests the Ralph Mode terminal module, task queue, system commands,
 * evolution gating, and agent coordination features.
 *
 * Run: npx playwright test tests/e2e/ralph-functional.spec.ts
 */
import { test, expect } from '@playwright/test';

test.describe('Ralph Mode — Terminal Functionality', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/ralph');
    await page.waitForLoadState('domcontentloaded');
  });

  test('Ralph page has terminal-like section', async ({ page }) => {
    const body = await page.locator('body').textContent();
    // The page should reference the terminal/command/task queue concept
    expect(body).toMatch(/terminal|command|task|queue|agent/i);
  });

  test('mentions Orion, Riri, and Hourman agents', async ({ page }) => {
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/orion/i);
    expect(body).toMatch(/riri/i);
    expect(body).toMatch(/hourman/i);
  });

  test('mentions Maternal Covenant compliance', async ({ page }) => {
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/maternal covenant|care/i);
  });

  test('shows tier gating information', async ({ page }) => {
    const body = await page.locator('body').textContent();
    // Ralph Mode is tier-gated — page should mention this
    expect(body).toMatch(/sovereign|family|tier|plan|upgrade/i);
  });

  test('morning briefing feature is mentioned', async ({ page }) => {
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/morning brief/i);
  });
});

test.describe('Ralph Mode — Evolution Gating', () => {
  test('Ralph Mode requires 50+ interactions', async () => {
    const { isFeatureUnlocked } = await import('../../src/lib/evolution');
    // Ralph Mode should NOT be unlocked at fewer than 50 interactions
    expect(isFeatureUnlocked('ralph_mode', 0)).toBe(false);
    expect(isFeatureUnlocked('ralph_mode', 25)).toBe(false);
    expect(isFeatureUnlocked('ralph_mode', 49)).toBe(false);
    // Should be unlocked at 50+
    expect(isFeatureUnlocked('ralph_mode', 50)).toBe(true);
    expect(isFeatureUnlocked('ralph_mode', 100)).toBe(true);
  });

  test('Guardian unlocks before Ralph Mode', async () => {
    const { isFeatureUnlocked } = await import('../../src/lib/evolution');
    // Guardian unlocks at 25
    expect(isFeatureUnlocked('guardian', 25)).toBe(true);
    // But Ralph not yet
    expect(isFeatureUnlocked('ralph_mode', 25)).toBe(false);
  });
});

test.describe('Ralph Mode — Agent Architecture', () => {
  test('work page describes three agent roles', async ({ page }) => {
    await page.goto('/work');
    await page.waitForLoadState('domcontentloaded');
    const body = await page.locator('body').textContent();

    // Orion = Hunter/Research
    expect(body).toMatch(/orion/i);
    // Riri = Builder
    expect(body).toMatch(/riri/i);
    // Hourman = Planner
    expect(body).toMatch(/hourman/i);
  });

  test('work page mentions overnight/autonomous operation', async ({ page }) => {
    await page.goto('/work');
    await page.waitForLoadState('domcontentloaded');
    const body = await page.locator('body').textContent();
    expect(body).toMatch(/overnight|autonomous|while you sleep/i);
  });
});

test.describe('Ralph Mode — Blog Content', () => {
  test('ralph-mode-explained blog post exists', async ({ request }) => {
    const resp = await request.get('/blog/ralph-mode-explained');
    expect(resp.status()).toBeLessThan(400);
  });

  test('what-is-ralph-mode blog post exists', async ({ request }) => {
    const resp = await request.get('/blog/what-is-ralph-mode');
    expect(resp.status()).toBeLessThan(400);
  });
});
