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
    const navLinks = ['Personal', 'Work', 'Family', 'Guardian', 'Pricing']
    for (const label of navLinks) {
      const link = page.getByRole('link', { name: new RegExp(label, 'i') }).first()
      await expect(link).toBeVisible()
    }
  })

  test('CTA button exists and links to /hatch', async ({ page }) => {
    // The main CTA may say "Hatch your AI" or similar — look for a link to /hatch or /register
    const cta = page
      .getByRole('link', { name: /hatch/i })
      .first()
    await expect(cta).toBeVisible()
    const href = await cta.getAttribute('href')
    expect(href).toMatch(/\/(hatch|register)/)
  })

  test('footer exists', async ({ page }) => {
    const footer = page.locator('footer')
    await expect(footer).toBeVisible()
  })
})
