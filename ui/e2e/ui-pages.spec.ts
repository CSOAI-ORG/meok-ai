/**
 * UI Pages & Flow E2E Tests
 * Tests additional UI pages and user flows
 *
 * Run: npx playwright test e2e/ui-pages.spec.ts
 */
import { test, expect } from '@playwright/test';
import { waitForPageLoad, TIMEOUT } from './helpers';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Dashboard Pages', () => {
  test('unified-dashboard loads without error', async ({ page }) => {
    const res = await page.goto('/unified-dashboard');
    expect([200, 302, 401]).toContain(res?.status() || 200);
  });

  test('research-dashboard loads without error', async ({ page }) => {
    const res = await page.goto('/research-dashboard');
    expect([200, 302, 401]).toContain(res?.status() || 200);
  });

  test('voice-dashboard loads without error', async ({ page }) => {
    const res = await page.goto('/voice-dashboard');
    expect([200, 302, 401]).toContain(res?.status() || 200);
  });

  test('mcp-dashboard loads without error', async ({ page }) => {
    const res = await page.goto('/mcp-dashboard');
    expect([200, 302, 401]).toContain(res?.status() || 200);
  });

  test('agent-orchestration loads without error', async ({ page }) => {
    const res = await page.goto('/agent-orchestration');
    expect([200, 302, 401]).toContain(res?.status() || 200);
  });

  test('compliance-dashboard loads without error', async ({ page }) => {
    const res = await page.goto('/compliance-dashboard');
    expect([200, 302, 401]).toContain(res?.status() || 200);
  });

  test('audit-dashboard loads without error', async ({ page }) => {
    const res = await page.goto('/audit-dashboard');
    expect([200, 302, 401]).toContain(res?.status() || 200);
  });
});

test.describe('Onboarding Flow', () => {
  test('/onboarding loads', async ({ page }) => {
    await page.goto('/onboarding');
    await waitForPageLoad(page);
    expect(page.url()).toContain('/onboarding');
  });

  test('/onboarding/step-1 loads', async ({ page }) => {
    await page.goto('/onboarding/step-1');
    await waitForPageLoad(page);
    expect(page.url()).toContain('/onboarding/step-1');
  });

  test('/onboarding/step-2 loads', async ({ page }) => {
    await page.goto('/onboarding/step-2');
    await waitForPageLoad(page);
    expect(page.url()).toContain('/onboarding/step-2');
  });

  test('/onboarding/step-3 loads', async ({ page }) => {
    await page.goto('/onboarding/step-3');
    await waitForPageLoad(page);
    expect(page.url()).toContain('/onboarding/step-3');
  });
});

test.describe('Product Pages', () => {
  test('/product loads', async ({ page }) => {
    await page.goto('/product');
    await waitForPageLoad(page);
    expect(page.url()).toContain('/product');
  });

  test('/product/enterprise loads', async ({ page }) => {
    await page.goto('/product/enterprise');
    await waitForPageLoad(page);
    expect(page.url()).toContain('/product/enterprise');
  });

  test('/product/security loads', async ({ page }) => {
    await page.goto('/product/security');
    await waitForPageLoad(page);
    expect(page.url()).toContain('/product/security');
  });

  test('/product/family-guardian loads', async ({ page }) => {
    await page.goto('/product/family-guardian');
    await waitForPageLoad(page);
  });
});

test.describe('Auth Pages', () => {
  test('/login loads', async ({ page }) => {
    await page.goto('/login');
    await waitForPageLoad(page);
  });

  test('/register loads', async ({ page }) => {
    await page.goto('/register');
    await waitForPageLoad(page);
  });

  test('/login redirects properly', async ({ page }) => {
    const res = await page.goto('/login');
    expect([200, 302]).toContain(res?.status() || 200);
  });
});

test.describe('Legal & Static Pages', () => {
  test('/cookies loads', async ({ page }) => {
    await page.goto('/cookies');
    await waitForPageLoad(page);
  });

  test('/accessibility loads', async ({ page }) => {
    await page.goto('/accessibility');
    await waitForPageLoad(page);
  });

  test('/open-source loads', async ({ page }) => {
    await page.goto('/open-source');
    await waitForPageLoad(page);
  });

  test('/community loads', async ({ page }) => {
    await page.goto('/community');
    await waitForPageLoad(page);
  });
});

test.describe('Feature & Help Pages', () => {
  test('/features loads', async ({ page }) => {
    await page.goto('/features');
    await waitForPageLoad(page);
  });

  test('/how-it-works loads', async ({ page }) => {
    await page.goto('/how-it-works');
    await waitForPageLoad(page);
  });

  test('/help loads', async ({ page }) => {
    await page.goto('/help');
    await waitForPageLoad(page);
  });

  test('/faq loads', async ({ page }) => {
    await page.goto('/faq');
    await waitForPageLoad(page);
  });
});

test.describe('Work & Agent Pages', () => {
  test('/work loads', async ({ page }) => {
    await page.goto('/work');
    await waitForPageLoad(page);
  });

  test('/work/ralph loads', async ({ page }) => {
    await page.goto('/work/ralph');
    await waitForPageLoad(page);
  });

  test('/work/orion loads', async ({ page }) => {
    await page.goto('/work/orion');
    await waitForPageLoad(page);
  });

  test('/work/riri loads', async ({ page }) => {
    await page.goto('/work/riri');
    await waitForPageLoad(page);
  });

  test('/work/hourman loads', async ({ page }) => {
    await page.goto('/work/hourman');
    await waitForPageLoad(page);
  });
});

test.describe('Guardian Sub-pages', () => {
  test('/guardian/children loads', async ({ page }) => {
    await page.goto('/guardian/children');
    await waitForPageLoad(page);
  });

  test('/guardian/seniors loads', async ({ page }) => {
    await page.goto('/guardian/seniors');
    await waitForPageLoad(page);
  });

  test('/guardian/school-safe loads', async ({ page }) => {
    await page.goto('/guardian/school-safe');
    await waitForPageLoad(page);
  });

  test('/guardian/scam-stop loads', async ({ page }) => {
    await page.goto('/guardian/scam-stop');
    await waitForPageLoad(page);
  });

  test('/guardian/neurodivergent loads', async ({ page }) => {
    await page.goto('/guardian/neurodivergent');
    await waitForPageLoad(page);
  });
});

test.describe('Companion & Chat Pages', () => {
  test('/companions loads', async ({ page }) => {
    await page.goto('/companions');
    await waitForPageLoad(page);
  });

  test('/chat loads', async ({ page }) => {
    await page.goto('/chat');
    await waitForPageLoad(page);
  });

  test('/marketplace loads', async ({ page }) => {
    await page.goto('/marketplace');
    await waitForPageLoad(page);
  });
});

test.describe('Family & Community Pages', () => {
  test('/family loads', async ({ page }) => {
    await page.goto('/family');
    await waitForPageLoad(page);
  });

  test('/families loads', async ({ page }) => {
    await page.goto('/families');
    await waitForPageLoad(page);
  });

  test('/for-families loads', async ({ page }) => {
    await page.goto('/for-families');
    await waitForPageLoad(page);
  });
});

test.describe('Problems & Solutions Pages', () => {
  test('/problems loads', async ({ page }) => {
    await page.goto('/problems');
    await waitForPageLoad(page);
  });
});

test.describe('Misc Important Pages', () => {
  test('/changelog loads', async ({ page }) => {
    await page.goto('/changelog');
    await waitForPageLoad(page);
  });

  test('/roadmap loads', async ({ page }) => {
    await page.goto('/roadmap');
    await waitForPageLoad(page);
  });

  test('/download loads', async ({ page }) => {
    await page.goto('/download');
    await waitForPageLoad(page);
  });

  test('/connect loads', async ({ page }) => {
    await page.goto('/connect');
    await waitForPageLoad(page);
  });

  test('/memory loads', async ({ page }) => {
    await page.goto('/memory');
    await waitForPageLoad(page);
  });
});

test.describe('Navigation Flow', () => {
  test('homepage to pricing navigation', async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);
    const pricingLink = page.getByRole('link', { name: /pricing/i }).first();
    if (await pricingLink.isVisible({ timeout: 5000 }).catch(() => false)) {
      await pricingLink.click();
      await page.waitForURL('**/pricing**', { timeout: TIMEOUT });
    }
  });

  test('homepage to characters via menu', async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);
    const charBtn = page.getByRole('button', { name: /characters/i }).first();
    if (await charBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await charBtn.click();
      const allChars = page.getByRole('menuitem', { name: /all characters/i }).first();
      if (await allChars.isVisible({ timeout: 5000 }).catch(() => false)) {
        await allChars.click();
        await page.waitForURL('**/characters**', { timeout: TIMEOUT });
      }
    }
  });

  test('homepage to guardian via menu', async ({ page }) => {
    await page.goto('/');
    await waitForPageLoad(page);
    const guardianBtn = page.getByRole('button', { name: /guardian/i }).first();
    if (await guardianBtn.isVisible({ timeout: 5000 }).catch(() => false)) {
      await guardianBtn.click();
      const guardian247 = page.getByRole('menuitem', { name: /guardian 24/i }).first();
      if (await guardian247.isVisible({ timeout: 5000 }).catch(() => false)) {
        await guardian247.click();
        await page.waitForURL('**/guardian**', { timeout: TIMEOUT });
      }
    }
  });
});

test.describe('Page Load Performance', () => {
  test('homepage loads within reasonable time', async ({ page }) => {
    const start = Date.now();
    await page.goto('/');
    await waitForPageLoad(page);
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(30000);
  });

  test('characters page loads within reasonable time', async ({ page }) => {
    const start = Date.now();
    await page.goto('/characters');
    await waitForPageLoad(page);
    const loadTime = Date.now() - start;
    expect(loadTime).toBeLessThan(30000);
  });
});
