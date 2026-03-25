import { test, expect } from '@playwright/test'
import { waitForPageLoad } from './helpers'

test.describe('Guardian pages', () => {
  test('/guardian page loads', async ({ page }) => {
    const response = await page.goto('/guardian')
    expect(response?.status()).toBe(200)
    await waitForPageLoad(page)
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('/guardian/scam-stop page loads', async ({ page }) => {
    const response = await page.goto('/guardian/scam-stop')
    expect(response?.status()).toBe(200)
    await waitForPageLoad(page)
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('scam-stop has textarea and scan button', async ({ page }) => {
    await page.goto('/guardian/scam-stop')
    await waitForPageLoad(page)

    // Look for the message input area (textarea or contenteditable)
    const textarea = page.locator('textarea').first()
    await expect(textarea).toBeVisible()

    // Look for the scan / analyse button
    const scanButton = page
      .getByRole('button', { name: /scan|analyse|analyze|check/i })
      .first()
    await expect(scanButton).toBeVisible()
  })
})
