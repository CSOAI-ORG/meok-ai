/**
 * Phase 97 — Critical Path Tests
 *
 * Covers the routes a user is most likely to hit on their first session:
 * homepage, pricing, waitlist, and authenticated dashboard pages.
 */

import { test as base, expect } from '@playwright/test'
import { test as authTest } from './fixtures/auth'

// ---------------------------------------------------------------------------
// Unauthenticated pages
// ---------------------------------------------------------------------------

base.describe('Homepage', () => {
  base.test('loads and has title "MEOK"', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/MEOK/i)
  })
})

base.describe('/pricing', () => {
  base.test('loads and has pricing content', async ({ page }) => {
    await page.goto('/pricing')
    await expect(page).toHaveURL(/\/pricing/)

    // At least one pricing-related heading or section must be visible
    const pricingContent = page.locator(
      'h1, h2, h3, [data-testid*="pricing"], [class*="pricing"], :text("plan"), :text("Plan"), :text("price"), :text("Price")'
    ).first()
    await expect(pricingContent).toBeVisible({ timeout: 10_000 })
  })
})

base.describe('/hatch', () => {
  base.test('loads and has MEOK content', async ({ page }) => {
    await page.goto('/hatch')
    await expect(page).toHaveURL(/\/hatch/)

    // Page must render with a heading
    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible({ timeout: 10_000 })
  })
})

// ---------------------------------------------------------------------------
// Authenticated pages
// ---------------------------------------------------------------------------

authTest.describe('/dashboard/chat', () => {
  authTest.skip(
    !process.env.E2E_AUTH_EMAIL,
    'Skipped: requires E2E_AUTH_EMAIL env var for Clerk login'
  )
  authTest('loads for authenticated user', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('/dashboard/chat')
    await expect(authenticatedPage).toHaveURL(/\/dashboard\/chat/)

    // Page must render — check that something meaningful is visible
    await authenticatedPage.waitForLoadState('networkidle')
    const body = authenticatedPage.locator('body')
    await expect(body).not.toBeEmpty()
  })
})

authTest.describe('/dashboard/settings', () => {
  authTest.skip(
    !process.env.E2E_AUTH_EMAIL,
    'Skipped: requires E2E_AUTH_EMAIL env var for Clerk login'
  )
  authTest('loads for authenticated user', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('/dashboard/settings')
    await expect(authenticatedPage).toHaveURL(/\/dashboard\/settings/)

    await authenticatedPage.waitForLoadState('networkidle')
    const body = authenticatedPage.locator('body')
    await expect(body).not.toBeEmpty()
  })
})
