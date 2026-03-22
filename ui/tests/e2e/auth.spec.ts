/**
 * Auth Flow E2E Tests — MEOK
 * Run: npx playwright test tests/e2e/auth.spec.ts
 * Full Clerk tests: CLERK_TEST_MODE=true npx playwright test
 */

import { test, expect, type Page } from '@playwright/test'

const TEST_EMAIL = process.env.TEST_USER_EMAIL || 'test+clerk_test_@meok.ai'
const TEST_PASSWORD = process.env.TEST_USER_PASSWORD || 'TestPassword123!'

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

test.describe('Homepage', () => {
  test('loads with hero text', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/MEOK/i)
    const h1 = page.locator('h1').first()
    await expect(h1).toBeVisible()
    const text = (await h1.textContent()) || ''
    expect(text).toContain('MEOK')
  })

  test('has working nav sign-in link', async ({ page }) => {
    await page.goto('/')
    const signInLink = page.getByRole('link', { name: /sign in/i }).first()
    await expect(signInLink).toBeVisible()
    const href = await signInLink.getAttribute('href')
    expect(href).toBe('/login')
  })

  test('pricing section shows Free/Pro/Elite tiers', async ({ page }) => {
    await page.goto('/')
    await page.locator('#pricing').scrollIntoViewIfNeeded()
    await expect(page.locator('#pricing')).toBeVisible()
    const pricingText = (await page.locator('#pricing').textContent()) || ''
    expect(pricingText).toMatch(/Free/i)
    expect(pricingText).toMatch(/Pro/i)
    expect(pricingText).toMatch(/Elite/i)
  })

  test('220-node council stat present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('220')
  })

  test('maternal covenant section exists', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('body')).toContainText('Maternal Covenant')
  })
})

test.describe('Login + Hatch Pages', () => {
  test('login page renders, dark theme', async ({ page }) => {
    await page.goto('/login')
    await expect(page).not.toHaveURL(/error/)
    await expect(page.locator('body')).toBeVisible()
    const htmlClass = await page.evaluate(() => document.documentElement.className)
    expect(htmlClass).toContain('dark')
  })

  test('register page renders', async ({ page }) => {
    await page.goto('/register')
    await expect(page).not.toHaveURL(/error/)
    await expect(page.locator('body')).toBeVisible()
  })

  test('hatch page renders with companion flow', async ({ page }) => {
    await page.goto('/hatch')
    await expect(page).not.toHaveURL(/error/)
    await expect(page.locator('body')).toContainText('MEOK')
    const bodyText = (await page.locator('body').textContent()) || ''
    const hasFlow = bodyText.includes('companion') || bodyText.includes('Scholar') ||
                    bodyText.includes('Guardian') || bodyText.includes('path') ||
                    bodyText.includes('emerge') || bodyText.includes('hatch')
    expect(hasFlow).toBeTruthy()
  })
})

test.describe('Protected Routes — redirect when unauthenticated', () => {
  test('dashboard redirects to login', async ({ page }) => {
    await page.goto('/dashboard')
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {})
    const url = page.url()
    expect(url.includes('login') || url.includes('sign-in') || url.includes('clerk')).toBeTruthy()
  })

  test('settings page redirects to login', async ({ page }) => {
    await page.goto('/settings')
    await page.waitForURL(/login|sign-in|clerk/, { timeout: 8000 }).catch(() => {})
    const url = page.url()
    expect(url.includes('login') || url.includes('sign-in') || url.includes('clerk')).toBeTruthy()
  })
})

test.describe('Legal Pages', () => {
  test('privacy page loads with training commitment', async ({ page }) => {
    await page.goto('/privacy')
    await expect(page).not.toHaveURL(/login/)
    await expect(page.locator('body')).toContainText(/privacy/i)
    await expect(page.locator('body')).toContainText(/does not use your conversations/i)
  })

  test('terms page loads', async ({ page }) => {
    await page.goto('/terms')
    await expect(page).not.toHaveURL(/login/)
    await expect(page.locator('body')).toContainText(/terms/i)
  })
})

test.describe('API Health', () => {
  test('billing status returns valid plan data', async ({ request }) => {
    const resp = await request.get('/api/billing/status')
    expect(resp.status()).toBe(200)
    const data = await resp.json()
    expect(data).toHaveProperty('plan')
    expect(data).toHaveProperty('status')
    expect(['explorer', 'pro', 'elite', 'team', 'free']).toContain(data.plan)
  })

  test('billing status returns upgrade_url for free tier', async ({ request }) => {
    const resp = await request.get('/api/billing/status')
    const data = await resp.json()
    if (data.plan === 'explorer' || data.plan === 'free') {
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
    await page.waitForURL(/dashboard|birth|hatch/, { timeout: 15000 })
    expect(page.url()).toMatch(/dashboard|birth|hatch/)
  })

  test('logs in and reaches dashboard', async ({ page }) => {
    await page.goto('/login')
    await fillClerkSignIn(page, TEST_EMAIL, TEST_PASSWORD)
    await page.waitForURL(/dashboard/, { timeout: 15000 })
    await expect(page).toHaveURL(/dashboard/)
  })
})
