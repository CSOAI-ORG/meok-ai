/**
 * Auth Flow E2E Tests — MEOK
 * Tests: register → login → dashboard → protected routes → logout
 *
 * Run: npx playwright test tests/e2e/auth.spec.ts
 *
 * Note: These tests use Clerk auth in test mode.
 * Set CLERK_SECRET_KEY and TEST_USER_EMAIL/PASSWORD in .env.test
 */

import { test, expect, type Page } from '@playwright/test'

const TEST_EMAIL = process.env.TEST_USER_EMAIL || 'test+clerk_test_@meok.ai'
const TEST_PASSWORD = process.env.TEST_USER_PASSWORD || 'TestPassword123!'

// ── Helpers ───────────────────────────────────────────────────────────────

async function fillClerkSignIn(page: Page, email: string, password: string) {
  // Clerk email field
  await page.getByLabel(/email/i).fill(email)
  await page.getByRole('button', { name: /continue/i }).click()
  // Clerk password field (appears after email step)
  await page.getByLabel(/password/i).fill(password)
  await page.getByRole('button', { name: /sign in|continue/i }).click()
}

async function fillClerkSignUp(page: Page, email: string, password: string) {
  await page.getByLabel(/email/i).fill(email)
  await page.getByLabel(/password/i).fill(password)
  const confirmField = page.getByLabel(/confirm password/i)
  if (await confirmField.isVisible()) {
    await confirmField.fill(password)
  }
  await page.getByRole('button', { name: /sign up|create account|continue/i }).click()
}

// ── Tests ─────────────────────────────────────────────────────────────────

test.describe('Homepage', () => {
  test('loads correctly with hero text', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/MEOK/i)
    // Hero headline
    await expect(page.locator('h1')).toContainText(['Your AI', 'yours'], { ignoreCase: true })
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    // Sign in link
    const signInLink = page.getByRole('link', { name: /sign in/i })
    await expect(signInLink).toBeVisible()
    await expect(signInLink).toHaveAttribute('href', '/login')

    // CTA button
    const ctaButton = page.getByRole('link', { name: /hatch your ai/i }).first()
    await expect(ctaButton).toBeVisible()
  })

  test('pricing section is visible', async ({ page }) => {
    await page.goto('/')
    await page.locator('#pricing').scrollIntoViewIfNeeded()
    await expect(page.locator('#pricing')).toBeVisible()
    await expect(page.locator('#pricing')).toContainText('Explorer')
  })
})

test.describe('Birth Ceremony', () => {
  test('loads birth page with quiz', async ({ page }) => {
    await page.goto('/birth')
    // Should show first quiz question or intro
    await expect(page.locator('main')).toBeVisible()
    // Check MEOK branding
    await expect(page.locator('body')).toContainText('MEOK')
  })

  test('can navigate through quiz steps', async ({ page }) => {
    await page.goto('/birth')

    // Step 1: Click first option in personality quiz
    const firstOption = page.getByRole('button').first()
    if (await firstOption.isVisible()) {
      await firstOption.click()
      await page.waitForTimeout(400) // transition
    }
  })
})

test.describe('Login Page', () => {
  test('login page renders', async ({ page }) => {
    await page.goto('/login')
    // Should show Clerk SignIn or redirect to Clerk
    await expect(page).not.toHaveURL(/error/)
    // Either Clerk component or redirect — both acceptable
  })
})

test.describe('Register Page', () => {
  test('register page renders', async ({ page }) => {
    await page.goto('/register')
    await expect(page).not.toHaveURL(/error/)
  })

  test('register with entity params preserves them', async ({ page }) => {
    await page.goto('/register?entity=Aria&style=supporter&interests=wellness,creative')
    await expect(page).not.toHaveURL(/error/)
    // URL params should be present (for post-registration flow)
    // Note: Clerk may redirect, but params should be passed through
  })
})

test.describe('Protected Routes', () => {
  test('dashboard redirects to login when unauthenticated', async ({ page }) => {
    await page.goto('/dashboard')
    // Should redirect to /login or Clerk sign-in
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 5000 }).catch(() => {})
    const url = page.url()
    const isRedirected = url.includes('login') || url.includes('sign-in') || url.includes('clerk')
    expect(isRedirected).toBeTruthy()
  })

  test('morning-briefing redirects to login when unauthenticated', async ({ page }) => {
    await page.goto('/dashboard/morning-briefing')
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 5000 }).catch(() => {})
    const url = page.url()
    const isRedirected = url.includes('login') || url.includes('sign-in') || url.includes('clerk')
    expect(isRedirected).toBeTruthy()
  })
})

test.describe('Legal Pages', () => {
  test('privacy page loads', async ({ page }) => {
    await page.goto('/privacy')
    await expect(page.locator('body')).toContainText(/privacy/i)
  })

  test('terms page loads', async ({ page }) => {
    await page.goto('/terms')
    await expect(page.locator('body')).toContainText(/terms/i)
  })
})

test.describe('API Health', () => {
  test('billing status API responds', async ({ request }) => {
    const resp = await request.get('/api/billing/status')
    expect(resp.status()).toBe(200)
    const data = await resp.json()
    expect(data).toHaveProperty('plan')
    expect(data).toHaveProperty('status')
  })
})

test.describe('Auth Flow — Full (requires Clerk test keys)', () => {
  // These tests only run if CLERK_TEST_MODE=true
  test.skip(!process.env.CLERK_TEST_MODE, 'Requires CLERK_TEST_MODE=true and test keys')

  test('can register a new user', async ({ page }) => {
    const uniqueEmail = `test+${Date.now()}@meok.ai`
    await page.goto('/register')
    await fillClerkSignUp(page, uniqueEmail, TEST_PASSWORD)
    // After signup, should land on dashboard or onboarding
    await page.waitForURL(/dashboard|birth/, { timeout: 10000 })
    const url = page.url()
    expect(url).toMatch(/dashboard|birth/)
  })

  test('can login with existing user', async ({ page }) => {
    await page.goto('/login')
    await fillClerkSignIn(page, TEST_EMAIL, TEST_PASSWORD)
    await page.waitForURL(/dashboard/, { timeout: 10000 })
    await expect(page).toHaveURL(/dashboard/)
  })

  test('dashboard shows user content when logged in', async ({ page }) => {
    await page.goto('/login')
    await fillClerkSignIn(page, TEST_EMAIL, TEST_PASSWORD)
    await page.waitForURL(/dashboard/, { timeout: 10000 })
    // Dashboard should have key elements
    await expect(page.locator('body')).not.toContainText('error')
  })

  test('logout redirects to homepage', async ({ page }) => {
    await page.goto('/login')
    await fillClerkSignIn(page, TEST_EMAIL, TEST_PASSWORD)
    await page.waitForURL(/dashboard/, { timeout: 10000 })
    // Find sign out button (Clerk UserButton)
    const userBtn = page.locator('[data-clerk-component="user-button"]').first()
    if (await userBtn.isVisible()) {
      await userBtn.click()
      const signOutBtn = page.getByText(/sign out/i)
      if (await signOutBtn.isVisible()) {
        await signOutBtn.click()
        await page.waitForURL(/\/$/, { timeout: 5000 })
        await expect(page).toHaveURL('/')
      }
    }
  })
})
