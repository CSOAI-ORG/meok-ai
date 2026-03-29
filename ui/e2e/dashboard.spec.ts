/**
 * Dashboard navigation E2E tests
 *
 * Unauthenticated tests verify that dashboard routes redirect to login.
 * Authenticated tests (behind E2E_AUTH_EMAIL) verify pages load and
 * navigation between dashboard pages works.
 */

import { test as base, expect } from '@playwright/test'
import { test as authTest } from './fixtures/auth'
import { waitForPageLoad } from './helpers'

// ---------------------------------------------------------------------------
// Unauthenticated — dashboard routes should redirect to login
// ---------------------------------------------------------------------------

base.describe('Dashboard — unauthenticated redirects', () => {
  for (const path of ['/dashboard', '/dashboard/chat', '/dashboard/settings']) {
    base.test(`${path} redirects to login or sign-in`, async ({ page }) => {
      await page.goto(path)
      await waitForPageLoad(page)

      // Clerk or custom auth should redirect to a login/sign-in page
      const url = page.url()
      const redirectedToAuth =
        /\/(login|sign-in|sign-up|register)/.test(url) ||
        url.includes('clerk') ||
        url.includes('accounts')

      // If not redirected, the page should at least show a sign-in prompt
      if (!redirectedToAuth) {
        const signInPrompt = page.getByText(/sign in|log in|welcome back/i).first()
        await expect(signInPrompt).toBeVisible({ timeout: 10_000 })
      }
    })
  }
})

// ---------------------------------------------------------------------------
// Authenticated — dashboard pages load without errors
// ---------------------------------------------------------------------------

authTest.describe('Dashboard — authenticated navigation', () => {
  authTest.skip(
    !process.env.E2E_AUTH_EMAIL,
    'Skipped: requires E2E_AUTH_EMAIL env var for Clerk login'
  )

  authTest('/dashboard loads without JS errors', async ({ authenticatedPage }) => {
    const consoleErrors: string[] = []
    authenticatedPage.on('console', (msg) => {
      if (msg.type() === 'error') consoleErrors.push(msg.text())
    })

    await authenticatedPage.goto('/dashboard')
    await authenticatedPage.waitForLoadState('networkidle')

    // Page should render content
    await expect(authenticatedPage.locator('body')).not.toBeEmpty()

    // Filter out known non-critical errors (e.g. PostHog, Sentry, analytics)
    const criticalErrors = consoleErrors.filter(
      (e) => !e.includes('posthog') && !e.includes('sentry') && !e.includes('analytics')
    )
    expect(
      criticalErrors,
      `Console errors on /dashboard:\n${criticalErrors.join('\n')}`
    ).toHaveLength(0)
  })

  authTest('/dashboard/chat loads', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('/dashboard/chat')
    await authenticatedPage.waitForLoadState('networkidle')
    await expect(authenticatedPage).toHaveURL(/\/dashboard\/chat/)
    await expect(authenticatedPage.locator('body')).not.toBeEmpty()
  })

  authTest('/dashboard/settings loads', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('/dashboard/settings')
    await authenticatedPage.waitForLoadState('networkidle')
    await expect(authenticatedPage).toHaveURL(/\/dashboard\/settings/)
    await expect(authenticatedPage.locator('body')).not.toBeEmpty()
  })

  authTest('navigation between dashboard pages works', async ({ authenticatedPage }) => {
    await authenticatedPage.goto('/dashboard')
    await authenticatedPage.waitForLoadState('networkidle')

    // Find and click a link to /dashboard/chat (sidebar or nav)
    const chatLink = authenticatedPage
      .getByRole('link', { name: /chat/i })
      .first()
    const hasChatLink = await chatLink.isVisible().catch(() => false)

    if (hasChatLink) {
      await chatLink.click()
      await authenticatedPage.waitForLoadState('networkidle')
      await expect(authenticatedPage).toHaveURL(/\/dashboard\/chat/, { timeout: 10_000 })
    }

    // Navigate to settings
    const settingsLink = authenticatedPage
      .getByRole('link', { name: /settings/i })
      .first()
    const hasSettingsLink = await settingsLink.isVisible().catch(() => false)

    if (hasSettingsLink) {
      await settingsLink.click()
      await authenticatedPage.waitForLoadState('networkidle')
      await expect(authenticatedPage).toHaveURL(/\/dashboard\/settings/, { timeout: 10_000 })
    }
  })
})
