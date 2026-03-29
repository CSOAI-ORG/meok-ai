/**
 * Phase 100 — Performance Tests
 *
 * Measures key timing metrics and checks that pages are shipped in a
 * production-ready state (minified JS, no console errors).
 */

import { test, expect } from '@playwright/test'
import { test as authTest } from './fixtures/auth'

// In dev mode the JIT compiler is slower; use a generous ceiling.
const LOAD_BUDGET_MS = process.env.CI ? 5_000 : 15_000

test.describe('Performance — homepage load time', () => {
  test(`homepage navigates and resolves within ${LOAD_BUDGET_MS} ms`, async ({ page }) => {
    const start = Date.now()
    await page.goto('/', { waitUntil: 'load' })
    const elapsed = Date.now() - start

    expect(elapsed, `Homepage took ${elapsed}ms — must be under ${LOAD_BUDGET_MS}ms`).toBeLessThan(LOAD_BUDGET_MS)
  })
})

test.describe('Performance — /pricing load time', () => {
  test(`/pricing loads in < ${LOAD_BUDGET_MS} ms`, async ({ page }) => {
    const start = Date.now()
    await page.goto('/pricing', { waitUntil: 'load' })
    const elapsed = Date.now() - start

    expect(
      elapsed,
      `/pricing took ${elapsed}ms — must be under ${LOAD_BUDGET_MS}ms`
    ).toBeLessThan(LOAD_BUDGET_MS)
  })
})

authTest.describe('Performance — /dashboard/chat console errors', () => {
  authTest.skip(
    !process.env.E2E_AUTH_EMAIL,
    'Skipped: requires E2E_AUTH_EMAIL env var for Clerk login'
  )
  authTest('page has no console errors on load', async ({ authenticatedPage }) => {
    const consoleErrors: string[] = []

    authenticatedPage.on('console', (msg) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text())
      }
    })

    await authenticatedPage.goto('/dashboard/chat', { waitUntil: 'networkidle' })

    expect(
      consoleErrors,
      `Console errors found on /dashboard/chat:\n${consoleErrors.join('\n')}`
    ).toHaveLength(0)
  })
})

test.describe('Performance — bundle minification check', () => {
  test('page JS responses do not contain unminified console.log( strings', async ({ page }) => {
    // This check is only meaningful against a production build; skip in dev
    test.skip(process.env.NODE_ENV !== 'production', 'Minification check skipped in dev mode')

    const jsWithConsoleLogs: string[] = []

    page.on('response', async (response) => {
      const url = response.url()
      const contentType = response.headers()['content-type'] ?? ''

      if (!contentType.includes('javascript')) return
      if (!url.includes('/_next/static/chunks/')) return

      try {
        const body = await response.text()
        if (/console\.log\s*\(/.test(body)) {
          jsWithConsoleLogs.push(url)
        }
      } catch {
        // Response body may no longer be available; skip
      }
    })

    await page.goto('/', { waitUntil: 'networkidle' })

    expect(
      jsWithConsoleLogs,
      `The following JS bundles appear to contain unminified console.log() calls:\n${jsWithConsoleLogs.join('\n')}`
    ).toHaveLength(0)
  })
})
