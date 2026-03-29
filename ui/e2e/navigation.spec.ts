/**
 * Navigation integrity E2E tests
 *
 * Verifies that the main nav, footer links, CTAs, and logo all resolve to the
 * correct destinations and that layout does not break at a 375 px mobile viewport.
 */

import { test, expect } from '@playwright/test'
import { waitForPageLoad } from './helpers'

// ---------------------------------------------------------------------------
// Main nav links
// ---------------------------------------------------------------------------

test.describe('Main navigation links', () => {
  test('/characters nav link navigates correctly', async ({ page }) => {
    await page.goto('/')
    await waitForPageLoad(page)

    const link = page.getByRole('link', { name: /characters/i }).first()
    await expect(link).toBeAttached({ timeout: 10_000 })
    await link.click()
    await waitForPageLoad(page)
    await expect(page).toHaveURL(/\/characters/, { timeout: 10_000 })
  })

  test('/pricing nav link navigates correctly', async ({ page }) => {
    await page.goto('/')
    await waitForPageLoad(page)

    const link = page.getByRole('link', { name: /pricing/i }).first()
    await expect(link).toBeVisible({ timeout: 10_000 })
    await link.click()
    await waitForPageLoad(page)
    await expect(page).toHaveURL(/\/pricing/, { timeout: 10_000 })
  })

  test('/pricing page loads directly', async ({ page }) => {
    const response = await page.goto('/pricing')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('h1, h2').first()).toBeVisible({ timeout: 10_000 })
  })

  test('/gaming page loads directly', async ({ page }) => {
    const response = await page.goto('/gaming')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('h1, h2').first()).toBeVisible({ timeout: 10_000 })
  })

  test('/guardian page loads directly', async ({ page }) => {
    const response = await page.goto('/guardian')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('h1, h2').first()).toBeVisible({ timeout: 10_000 })
  })

  test('/maternal-covenant page loads directly', async ({ page }) => {
    const response = await page.goto('/maternal-covenant')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('h1, h2').first()).toBeVisible({ timeout: 15_000 })
  })
})

// ---------------------------------------------------------------------------
// Footer links
// ---------------------------------------------------------------------------

test.describe('Footer links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
    await waitForPageLoad(page)
  })

  test('Privacy link exists in footer and has correct href', async ({ page }) => {
    const footer = page.locator('footer')
    const privacyLink = footer.getByRole('link', { name: /privacy/i }).first()
    await expect(privacyLink).toBeVisible({ timeout: 10_000 })
    const href = await privacyLink.getAttribute('href')
    expect(href).toMatch(/\/privacy/)
  })

  test('Terms link exists in footer and has correct href', async ({ page }) => {
    const footer = page.locator('footer')
    const termsLink = footer.getByRole('link', { name: /terms/i }).first()
    await expect(termsLink).toBeVisible({ timeout: 10_000 })
    const href = await termsLink.getAttribute('href')
    expect(href).toMatch(/\/terms/)
  })

  test('Maternal Covenant link exists in footer', async ({ page }) => {
    const footer = page.locator('footer')
    const covenantLink = footer.getByRole('link', { name: /maternal covenant/i }).first()
    await expect(covenantLink).toBeVisible({ timeout: 10_000 })
    const href = await covenantLink.getAttribute('href')
    expect(href).toMatch(/\/maternal-covenant/)
  })

  test('footer contains at least 3 navigable links', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible({ timeout: 10_000 })
    const links = footer.getByRole('link')
    const count = await links.count()
    expect(count).toBeGreaterThanOrEqual(3)
  })
})

// ---------------------------------------------------------------------------
// CTAs
// ---------------------------------------------------------------------------

test.describe('CTA links', () => {
  test('Birth Ceremony CTA links to /birth', async ({ page }) => {
    await page.goto('/')
    await waitForPageLoad(page)

    const cta = page.getByRole('link', { name: /begin birth ceremony/i }).first()
    await expect(cta).toBeVisible({ timeout: 10_000 })
    await expect(cta).toHaveAttribute('href', '/birth')
  })

  test('/birth page loads', async ({ page }) => {
    const response = await page.goto('/birth')
    await waitForPageLoad(page)
    expect(response?.status()).toBeLessThan(400)
    await expect(page.locator('body')).not.toBeEmpty()
  })
})

// ---------------------------------------------------------------------------
// Logo / home link
// ---------------------------------------------------------------------------

test.describe('Logo link', () => {
  test('logo links to /', async ({ page }) => {
    await page.goto('/pricing')
    await waitForPageLoad(page)

    // Logo is typically an <a> wrapping an <img> or SVG, linking to "/"
    const logoLink = page
      .locator('a[href="/"], a[href="./"], header a')
      .first()
    await expect(logoLink).toBeAttached({ timeout: 10_000 })

    const href = await logoLink.getAttribute('href')
    expect(href).toMatch(/^\/$|^\/?\s*$|^\.\//)
  })

  test('clicking logo navigates to homepage', async ({ page }) => {
    await page.goto('/pricing')
    await waitForPageLoad(page)

    const logoLink = page.locator('header a[href="/"]').first()
    await expect(logoLink).toBeVisible({ timeout: 10_000 })
    await logoLink.click()
    await waitForPageLoad(page)
    await expect(page).toHaveURL(/^\/$|\/\s*$/, { timeout: 10_000 })
  })
})

// ---------------------------------------------------------------------------
// Mobile viewport — 375 px
// ---------------------------------------------------------------------------

test.describe('Mobile viewport (375 px)', () => {
  test.use({ viewport: { width: 375, height: 812 } })

  test('homepage loads without layout errors at 375 px', async ({ page }) => {
    await page.goto('/')
    await waitForPageLoad(page)

    // Body must render content
    await expect(page.locator('body')).not.toBeEmpty()

    // No obvious horizontal overflow: scrollWidth should not exceed 375 significantly
    const overflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth - document.documentElement.clientWidth
    })
    // Allow up to 10 px of rounding variance
    expect(overflow).toBeLessThanOrEqual(10)
  })

  test('nav does not break at 375 px — header is still present', async ({ page }) => {
    await page.goto('/')
    await waitForPageLoad(page)

    const header = page.locator('header').first()
    await expect(header).toBeVisible({ timeout: 10_000 })
  })

  test('/characters loads at 375 px', async ({ page }) => {
    await page.goto('/characters')
    await waitForPageLoad(page)
    await expect(page.locator('body')).not.toBeEmpty()
  })

  test('/pricing loads at 375 px', async ({ page }) => {
    await page.goto('/pricing')
    await waitForPageLoad(page)
    await expect(page.locator('body')).not.toBeEmpty()
  })
})
