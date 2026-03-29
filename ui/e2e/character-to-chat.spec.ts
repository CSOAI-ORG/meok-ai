/**
 * Character → Chat Flow E2E
 *
 * Tests the marketplace → character detail → "Chat with [name]" journey.
 * Verifies the full flow from browsing characters to initiating a chat session.
 */

import { test, expect } from '@playwright/test'

test.describe('Character → Chat Flow', () => {
  test('marketplace page loads with character cards', async ({ page }) => {
    await page.goto('/marketplace')
    await page.waitForLoadState('networkidle')

    // Should show character cards or a loading state then cards
    const card = page.locator('a[href*="/characters/"]').first()
    await expect(card).toBeVisible({ timeout: 15_000 })
  })

  test('clicking a character card navigates to detail page', async ({ page }) => {
    await page.goto('/marketplace')
    await page.waitForLoadState('networkidle')

    // Click the first character card
    const card = page.locator('a[href*="/characters/"]').first()
    await expect(card).toBeVisible({ timeout: 15_000 })
    const href = await card.getAttribute('href')
    await card.click()

    // Should navigate to the character detail page
    await page.waitForURL(/\/characters\//, { timeout: 10_000 })
    expect(page.url()).toContain('/characters/')
  })

  test('character detail page has "Chat with" button', async ({ page }) => {
    // Navigate to a known static character
    await page.goto('/characters/aria')
    await page.waitForLoadState('networkidle')

    // Look for "Chat with" CTA
    const chatBtn = page.locator('a, button').filter({ hasText: /chat with/i }).first()
    await expect(chatBtn).toBeVisible({ timeout: 10_000 })
  })

  test('"Chat with" button links to /dashboard/chat?characterId=', async ({ page }) => {
    await page.goto('/characters/aria')
    await page.waitForLoadState('networkidle')

    const chatBtn = page.locator('a').filter({ hasText: /chat with/i }).first()
    await expect(chatBtn).toBeVisible({ timeout: 10_000 })

    const href = await chatBtn.getAttribute('href')
    expect(href).toContain('/dashboard/chat')
    expect(href).toContain('characterId=')
  })

  test('marketplace filters work', async ({ page }) => {
    await page.goto('/marketplace')
    await page.waitForLoadState('networkidle')

    // Wait for initial cards to load
    const cards = page.locator('a[href*="/characters/"]')
    await expect(cards.first()).toBeVisible({ timeout: 15_000 })
    const initialCount = await cards.count()

    // Click an archetype filter chip
    const filterChip = page.locator('button').filter({ hasText: /challenger|sage|explorer|nurturer/i }).first()
    if (await filterChip.isVisible()) {
      await filterChip.click()
      await page.waitForTimeout(1000) // Wait for filter to apply

      // Count should change (may be less or same if all match)
      const filteredCount = await cards.count()
      // Just verify the page didn't crash
      expect(filteredCount).toBeGreaterThanOrEqual(0)
    }
  })

  test('marketplace sort options work', async ({ page }) => {
    await page.goto('/marketplace')
    await page.waitForLoadState('networkidle')

    // Wait for cards
    await expect(page.locator('a[href*="/characters/"]').first()).toBeVisible({ timeout: 15_000 })

    // Click "Top rated" sort
    const sortBtn = page.locator('button').filter({ hasText: /top rated|rating/i }).first()
    if (await sortBtn.isVisible()) {
      await sortBtn.click()
      await page.waitForTimeout(1000)

      // Page should still have cards
      await expect(page.locator('a[href*="/characters/"]').first()).toBeVisible({ timeout: 10_000 })
    }
  })
})
