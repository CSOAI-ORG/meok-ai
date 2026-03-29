import { test, expect } from '@playwright/test'
import { waitForPageLoad } from './helpers'

test.describe('Homepage — critical path', () => {
  test.beforeEach(async ({ page }) => {
    const response = await page.goto('/')
    expect(response?.status()).toBe(200)
    await waitForPageLoad(page)
  })

  test('homepage loads with status 200', async ({ page }) => {
    // The beforeEach already asserts 200; verify we have content.
    await expect(page.locator('body')).not.toBeEmpty()
  })

  test('has MEOK title', async ({ page }) => {
    await expect(page).toHaveTitle(/MEOK/i)
  })

  test('navigation links exist', async ({ page }) => {
    // Nav pillars may be buttons (dropdown triggers) or links — check for text visibility
    // Real pillars: OS, Characters, Work, Guardian, Gaming + flat Pricing link
    for (const label of ['Work', 'Guardian']) {
      // Could be a button trigger or a link depending on screen width
      const el = page.getByText(new RegExp(`^${label}$`, 'i')).first()
      await expect(el).toBeAttached()
    }
    // Pricing is always a flat <a> tag
    await expect(page.getByRole('link', { name: /pricing/i }).first()).toBeAttached()
  })

  test('CTA button exists and links to /birth or /register', async ({ page }) => {
    const cta = page
      .getByRole('link', { name: /hatch|birth/i })
      .first()
    await expect(cta).toBeVisible()
    const href = await cta.getAttribute('href')
    expect(href).toMatch(/\/(birth|register|hatch)/)
  })

  test('footer exists', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })
})
