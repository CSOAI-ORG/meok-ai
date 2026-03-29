import { test as base, expect, type Page } from '@playwright/test'

export interface TestUser {
  email: string
  password: string
}

/**
 * Generate a unique test user credential pair.
 * Credentials are deterministic per-test so they can be created and cleaned up
 * without a live auth backend in unit/mock environments. For real E2E runs,
 * the caller is responsible for ensuring the account exists (e.g. via seed scripts).
 */
export function createTestUser(): TestUser {
  const id = Date.now()
  return {
    email: `test+${id}@meok-e2e.invalid`,
    password: `E2eTestPass_${id}!`,
  }
}

/**
 * Attempt to delete the test user via the internal API.
 * Silently ignores failures — the account may not exist in all environments.
 */
export async function cleanupTestUser(page: Page, user: TestUser): Promise<void> {
  try {
    await page.request.delete('/api/dev/test-user', {
      data: { email: user.email },
      timeout: 5000,
    })
  } catch {
    // Cleanup is best-effort; missing route or network error should not fail tests
  }
}

/**
 * Extended test fixture that provides an already-authenticated page.
 * The fixture logs in via the UI sign-in flow before the test body runs and
 * cleans up the session afterwards.
 */
export const test = base.extend<{
  authenticatedPage: Page
  testUser: TestUser
}>({
  testUser: async ({}, use) => {
    // If env vars are set, use those credentials (real account); otherwise generate ephemeral ones
    const user: TestUser = process.env.E2E_AUTH_EMAIL
      ? { email: process.env.E2E_AUTH_EMAIL, password: process.env.E2E_AUTH_PASSWORD ?? '' }
      : createTestUser()
    await use(user)
  },

  authenticatedPage: async ({ page, testUser }, use) => {
    // Navigate to the login page and complete the sign-in form
    await page.goto('/login')

    // Wait for the page to be interactive
    await page.waitForLoadState('networkidle')

    // Fill in credentials — selectors target common Clerk/custom auth form patterns
    const emailInput = page.locator('input[type="email"], input[name="email"], input[id*="email"]').first()
    const passwordInput = page.locator('input[type="password"], input[name="password"]').first()

    await emailInput.fill(testUser.email)
    await passwordInput.fill(testUser.password)

    // Submit the form
    const submitButton = page.locator(
      'button[type="submit"], button:has-text("Sign in"), button:has-text("Log in"), button:has-text("Continue")'
    ).first()
    await submitButton.click()

    // Wait until redirected away from /login (auth success) or for any auth cookie
    await page.waitForURL((url) => !url.pathname.startsWith('/login'), { timeout: 15000 })

    await use(page)

    // Post-test cleanup
    await cleanupTestUser(page, testUser)
  },
})

export { expect }
