/**
 * Character system E2E tests
 *
 * Covers the /characters route family: index, category pages, search, and
 * individual character detail. All tests are unauthenticated; the character
 * catalogue is public.
 */

import { test, expect } from '@playwright/test'
import { waitForPageLoad } from './helpers'

// ---------------------------------------------------------------------------
// /characters — index page
// ---------------------------------------------------------------------------

test.describe('/characters index', () => {
  test('loads with correct title', async ({ page }) => {
    await page.goto('/characters')
    await waitForPageLoad(page)
    await expect(page).toHaveTitle(/characters/i)
  })

  test('shows character or archetype cards', async ({ page }) => {
    await page.goto('/characters')
    await waitForPageLoad(page)

    // At least one card-like element must exist — look for named companions
    // or archetype labels that appear in the catalogue grid
    const cardOrHeading = page.locator(
      'h2, h3, [data-testid*="character"], [class*="card"], [class*="archetype"]'
    ).first()
    await expect(cardOrHeading).toBeVisible({ timeout: 15_000 })
  })

  test('shows known archetype or companion names', async ({ page }) => {
    await page.goto('/characters')
    await waitForPageLoad(page)

    // These are fixture companions / archetypes guaranteed to be in the catalogue
    for (const name of ['Aria', 'Marcus', 'Luna']) {
      await expect(page.getByText(name).first()).toBeAttached({ timeout: 10_000 })
    }
  })

  test('has a link to /characters/search or a search affordance', async ({ page }) => {
    await page.goto('/characters')
    await waitForPageLoad(page)

    // Either a direct link to /characters/search OR an input on the page
    const searchLink = page.getByRole('link', { name: /search/i }).first()
    const searchInput = page.locator('input[type="search"], input[placeholder*="search" i]').first()

    const linkAttached = await searchLink.isVisible().catch(() => false)
    const inputAttached = await searchInput.isVisible().catch(() => false)

    expect(linkAttached || inputAttached).toBe(true)
  })
})

// ---------------------------------------------------------------------------
// /characters/mythological
// ---------------------------------------------------------------------------

test.describe('/characters/mythological', () => {
  test('loads successfully', async ({ page }) => {
    const response = await page.goto('/characters/mythological')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
  })

  test('shows page heading or tradition sections', async ({ page }) => {
    await page.goto('/characters/mythological')
    await waitForPageLoad(page)

    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible({ timeout: 15_000 })
  })

  test('page contains mythological-themed content', async ({ page }) => {
    await page.goto('/characters/mythological')
    await waitForPageLoad(page)

    // Should mention mythology, tradition, or specific cultural categories
    const content = page.locator(
      ':text("mytholog"), :text("Mytholog"), :text("tradition"), :text("Tradition"), :text("legend"), :text("Legend")'
    ).first()
    await expect(content).toBeAttached({ timeout: 10_000 })
  })
})

// ---------------------------------------------------------------------------
// /characters/historical
// ---------------------------------------------------------------------------

test.describe('/characters/historical', () => {
  test('loads successfully', async ({ page }) => {
    const response = await page.goto('/characters/historical')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
  })

  test('shows a heading', async ({ page }) => {
    await page.goto('/characters/historical')
    await waitForPageLoad(page)

    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible({ timeout: 15_000 })
  })
})

// ---------------------------------------------------------------------------
// /characters/literary
// ---------------------------------------------------------------------------

test.describe('/characters/literary', () => {
  test('loads successfully', async ({ page }) => {
    const response = await page.goto('/characters/literary')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
  })

  test('shows a heading', async ({ page }) => {
    await page.goto('/characters/literary')
    await waitForPageLoad(page)

    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible({ timeout: 15_000 })
  })
})

// ---------------------------------------------------------------------------
// /characters/search — search page
// ---------------------------------------------------------------------------

test.describe('/characters/search', () => {
  test('loads successfully', async ({ page }) => {
    const response = await page.goto('/characters/search')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
  })

  test('has a search input', async ({ page }) => {
    await page.goto('/characters/search')
    await waitForPageLoad(page)

    const input = page.locator(
      'input[type="search"], input[type="text"][placeholder*="search" i], input[name*="search" i], input[id*="search" i]'
    ).first()
    await expect(input).toBeVisible({ timeout: 15_000 })
  })

  test('search input accepts text', async ({ page }) => {
    await page.goto('/characters/search')
    await waitForPageLoad(page)

    const input = page.locator(
      'input[type="search"], input[type="text"][placeholder*="search" i], input[name*="search" i], input[id*="search" i]'
    ).first()
    await input.fill('aria')
    await expect(input).toHaveValue('aria')
  })
})

// ---------------------------------------------------------------------------
// /characters/[slug] — individual character detail
// ---------------------------------------------------------------------------

test.describe('/characters/[slug] — character detail', () => {
  // Aria is a known companion; if the slug format changes update here
  const KNOWN_SLUG = 'aria'

  test(`/characters/${KNOWN_SLUG} loads`, async ({ page }) => {
    const response = await page.goto(`/characters/${KNOWN_SLUG}`)
    await waitForPageLoad(page)
    // Accept 200; a redirect (3xx) to a canonical URL is also acceptable
    expect(response?.status()).toBeLessThan(400)
  })

  test(`/characters/${KNOWN_SLUG} shows character name or heading`, async ({ page }) => {
    await page.goto(`/characters/${KNOWN_SLUG}`)
    await waitForPageLoad(page)

    const heading = page.locator('h1, h2').first()
    await expect(heading).toBeVisible({ timeout: 15_000 })
  })

  test('clicking a character card on /characters navigates to detail page', async ({ page }) => {
    await page.goto('/characters')
    await waitForPageLoad(page)

    // Find the first internal link that looks like a character detail URL
    const characterLink = page
      .locator('a[href^="/characters/"]')
      .filter({ hasNot: page.locator('[href="/characters/search"], [href="/characters/mythological"], [href="/characters/historical"], [href="/characters/literary"]') })
      .first()

    await expect(characterLink).toBeVisible({ timeout: 15_000 })

    const href = await characterLink.getAttribute('href')
    await characterLink.click()
    await waitForPageLoad(page)

    // Should now be on a /characters/* sub-page
    await expect(page).toHaveURL(/\/characters\//, { timeout: 10_000 })
    // URL should differ from the index
    const currentURL = page.url()
    expect(currentURL).not.toMatch(/\/characters\/?$/)
  })
})
