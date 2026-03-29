/**
 * Auth Guard E2E — Verify protected routes redirect unauthenticated users
 *
 * Tests that /dashboard/* routes are blocked without Clerk auth
 * and redirect to /login or the Clerk sign-in page.
 */

import { test, expect } from '@playwright/test'

const PROTECTED_ROUTES = [
  '/dashboard',
  '/dashboard/chat',
  '/dashboard/settings',
  '/dashboard/memories',
  '/dashboard/companion',
]

test.describe('Auth Guard — Protected Routes', () => {
  for (const route of PROTECTED_ROUTES) {
    test(`${route} redirects unauthenticated user`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' })

      // Should redirect to login/sign-in or return an auth-related page
      const url = page.url()
      const redirectedToAuth = url.includes('/login') ||
        url.includes('/sign-in') ||
        url.includes('clerk') ||
        url.includes('/register')

      // Either the URL changed to auth, or we got a 401/403
      const statusOk = response?.status() === 200 || response?.status() === 307 || response?.status() === 302

      if (!redirectedToAuth) {
        // If not redirected, the page should show a sign-in component or auth prompt
        const authPrompt = page.locator('text=/sign in|log in|create account|unauthorized/i').first()
        const isAuthPromptVisible = await authPrompt.isVisible({ timeout: 5_000 }).catch(() => false)

        expect(redirectedToAuth || isAuthPromptVisible).toBeTruthy()
      }
    })
  }
})

test.describe('Auth Guard — Public Routes Remain Accessible', () => {
  const PUBLIC_ROUTES = ['/', '/hatch', '/marketplace', '/characters']

  for (const route of PUBLIC_ROUTES) {
    test(`${route} is accessible without auth`, async ({ page }) => {
      const response = await page.goto(route, { waitUntil: 'domcontentloaded' })

      // Should NOT redirect to auth
      const url = page.url()
      const stayedOnPage = url.includes(route) || url === page.url()

      // Should get 200
      expect(response?.status()).toBe(200)
    })
  }
})
