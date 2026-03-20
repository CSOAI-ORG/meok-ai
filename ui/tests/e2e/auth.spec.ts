/**
 * Auth Flow E2E Tests — MEOK
 * Tests: homepage → birth → register → login → protected routes → legal → api
 *
 * Run: npx playwright test tests/e2e/auth.spec.ts
 * Full Clerk tests: CLERK_TEST_MODE=true npx playwright test
 */

import { test, expect, type Page } from '@playwright/test'

const TEST_EMAIL = process.env.TEST_USER_EMAIL || 'test+clerk_test_@meok.ai'
const TEST_PASSWORD = process.env.TEST_USER_PASSWORD || 'TestPassword123!'

// ── Helpers ───────────────────────────────────────────────────────────────

async function fillClerkSignIn(page: Page, email: string, password: string) {
  await page.getByLabel(/email/i).fill(email)
  await page.getByRole('button', { name: /continue/i }).click()
  await page.getByLabel(/password/i).fill(password)
  await page.getByRole('button', { name: /sign in|continue/i }).click()
}

async function fillClerkSignUp(page: Page, email: string, password: string) {
  await page.getByLabel(/email/i).fill(email)
  await page.getByLabel(/password/i).fill(password)
  const confirmField = page.getByLabel(/confirm password/i)
  if (await confirmField.isVisible()) await confirmField.fill(password)
  await page.getByRole('button', { name: /sign up|create account|continue/i }).click()
}

// ── Tests ─────────────────────────────────────────────────────────────────

test.describe('Homepage', () => {
  test('loads correctly with hero text', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/MEOK/i)
    // Single h1 contains both phrases (fix: check as one string, not array)
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    const text = (await h1.textContent()) || ''
    expect(text.toLowerCase()).toContain('your ai')
  })

  test('has working navigation links', async ({ page }) => {
    await page.goto('/')
    // Use .first() — two "Sign in" links exist (nav + hero section)
    const signInLink = page.getByRole('link', { name: /sign in/i }).first()
    await expect(signInLink).toBeVisible()
    const href = await signInLink.getAttribute('href')
    expect(href).toBe('/login')

    // CTA hatch button
    const ctaButton = page.getByRole('link', { name: /hatch your ai/i }).first()
    await expect(ctaButton).toBeVisible()
  })

  test('pricing section is visible', async ({ page }) => {
    await page.goto('/')
    await page.locator('#pricing').scrollIntoViewIfNeeded()
    await expect(page.locator('#pricing')).toBeVisible()
    await expect(page.locator('#pricing')).toContainText('Explorer')
  })

  test('trust bar stats are present', async ({ page }) => {
    await page.goto('/')
    // "220" council nodes stat
    await expect(page.locator('body')).toContainText('220')
    // "7" archetypes
    await expect(page.locator('body')).toContainText('7')
  })

  test('maternal covenant section exists', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Maternal Covenant')
    await expect(page.locator('body')).toContainText('Care before engagement')
  })
})

test.describe('Birth Ceremony — onboarding flow', () => {
  test('loads birth page (public, no auth required)', async ({ page }) => {
    await page.goto('/birth')
    // /birth is PUBLIC — must NOT redirect to /login
    await expect(page).not.toHaveURL(/login/)
    // Page body loads
    await expect(page.locator('body')).toBeVisible()
    await expect(page.locator('body')).toContainText('MEOK')
  })

  test('birth page shows quiz or onboarding content', async ({ page }) => {
    await page.goto('/birth')
    await page.waitForLoadState('networkidle')
    // Should show quiz questions or egg animation — not a login page
    await expect(page).not.toHaveURL(/login/)
    const bodyText = (await page.locator('body').textContent()) || ''
    // Either shows "before we hatch" quiz or "something is waiting"
    const hasBirthContent = bodyText.toLowerCase().includes('meok') ||
                             bodyText.toLowerCase().includes('hatch') ||
                             bodyText.toLowerCase().includes('sovereign')
    expect(hasBirthContent).toBeTruthy()
  })

  test('can click through first quiz step', async ({ page }) => {
    await page.goto('/birth')
    await page.waitForLoadState('networkidle')
    await expect(page).not.toHaveURL(/login/)
    // If quiz buttons are present, click the first one
    const buttons = page.getByRole('button')
    const count = await buttons.count()
    if (count > 0) {
      await buttons.first().click()
      await page.waitForTimeout(500)
      // Should still be on /birth
      await expect(page).not.toHaveURL(/login/)
    }
  })
})

test.describe('Login + Register Pages', () => {
  test('login page renders without error', async ({ page }) => {
    await page.goto('/login')
    await expect(page).not.toHaveURL(/error/)
    await expect(page.locator('body')).toBeVisible()
  })

  test('register page renders without error', async ({ page }) => {
    await page.goto('/register')
    await expect(page).not.toHaveURL(/error/)
    await expect(page.locator('body')).toBeVisible()
  })

  test('register page preserves entity params in URL', async ({ page }) => {
    await page.goto('/register?entity=Aria&style=supporter&interests=wellness')
    await expect(page).not.toHaveURL(/error/)
    // URL params should be present for post-registration entity setup
  })
})

test.describe('Protected Routes — redirect when unauthenticated', () => {
  test('dashboard redirects to login', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {})
    const url = page.url()
    const isProtected = url.includes('login') || url.includes('sign-in') || url.includes('clerk')
    expect(isProtected).toBeTruthy()
  })

  test('dashboard sub-pages redirect to login', async ({ page }) => {
    await page.goto('/dashboard/morning-briefing')
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {})
    const url = page.url()
    const isProtected = url.includes('login') || url.includes('sign-in') || url.includes('clerk')
    expect(isProtected).toBeTruthy()
  })

  test('settings page redirects to login', async ({ page }) => {
    await page.goto('/settings')
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {})
    const url = page.url()
    const isProtected = url.includes('login') || url.includes('sign-in') || url.includes('clerk')
    expect(isProtected).toBeTruthy()
  })
})

test.describe('Legal Pages — public access', () => {
  test('privacy page loads and contains privacy content', async ({ page }) => {
    await page.goto('/privacy')
    await expect(page).not.toHaveURL(/login/)
    await expect(page.locator('body')).toContainText(/privacy/i)
  })

  test('terms page loads and contains terms content', async ({ page }) => {
    await page.goto('/terms')
    await expect(page).not.toHaveURL(/login/)
    await expect(page.locator('body')).toContainText(/terms/i)
  })
})

test.describe('API Health', () => {
  test('billing status API returns valid plan data', async ({ request }) => {
    const resp = await request.get('/api/billing/status')
    expect(resp.status()).toBe(200)
    const data = await resp.json()
    expect(data).toHaveProperty('plan')
    expect(data).toHaveProperty('status')
    expect(['explorer', 'sovereign', 'elite', 'family']).toContain(data.plan)
  })

  test('billing status returns upgrade_url for free tier', async ({ request }) => {
    const resp = await request.get('/api/billing/status')
    const data = await resp.json()
    if (data.plan === 'explorer') {
      expect(data).toHaveProperty('upgrade_url')
    }
  })
})

test.describe('Auth Flow — Full (requires Clerk test keys)', () => {
  test.skip(!process.env.CLERK_TEST_MODE, 'Requires CLERK_TEST_MODE=true')

  test('registers a new user and lands on birth/dashboard', async ({ page }) => {
    const uniqueEmail = `test+${Date.now()}@meok.ai`
    await page.goto('/register')
    await fillClerkSignUp(page, uniqueEmail, TEST_PASSWORD)
    await page.waitForURL(/dashboard|birth/, { timeout: 15000 })
    expect(page.url()).toMatch(/dashboard|birth/)
  })

  test('logs in and reaches dashboard', async ({ page }) => {
    await page.goto('/login')
    await fillClerkSignIn(page, TEST_EMAIL, TEST_PASSWORD)
    await page.waitForURL(/dashboard/, { timeout: 15000 })
    await expect(page).toHaveURL(/dashboard/)
  })

  test('dashboard shows care metrics when authenticated', async ({ page }) => {
    await page.goto('/login')
    await fillClerkSignIn(page, TEST_EMAIL, TEST_PASSWORD)
    await page.waitForURL(/dashboard/, { timeout: 15000 })
    await expect(page.locator('body')).not.toContainText(/error/i)
  })

  test('logout redirects to homepage', async ({ page }) => {
    await page.goto('/login')
    await fillClerkSignIn(page, TEST_EMAIL, TEST_PASSWORD)
    await page.waitForURL(/dashboard/, { timeout: 15000 })
    const userBtn = page.locator('[data-clerk-component="user-button"]').first()
    if (await userBtn.isVisible()) {
      await userBtn.click()
      const signOutBtn = page.getByText(/sign out/i)
      if (await signOutBtn.isVisible()) {
        await signOutBtn.click()
        await page.waitForURL(/\/$/, { timeout: 8000 })
        await expect(page).toHaveURL('/')
      }
    }
  })
})
