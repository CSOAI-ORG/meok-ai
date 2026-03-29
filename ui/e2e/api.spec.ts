/**
 * Phase 98 — API Integration Tests
 *
 * Tests the JSON API surface directly using Playwright's request context.
 * Unauthenticated tests use a fresh context; authenticated tests reuse the
 * cookie jar from the `authenticatedPage` fixture.
 */

import { test as base, expect } from '@playwright/test'
import { test as authTest } from './fixtures/auth'
import { apiRequest } from './helpers/api'

// ---------------------------------------------------------------------------
// Public / unauthenticated endpoints
// ---------------------------------------------------------------------------

base.describe('GET /api/health', () => {
  base.test('returns 200', async ({ request }) => {
    const res = await request.get('/api/health')
    expect(res.status()).toBe(200)
  })
})

base.describe('POST /api/research (unauthenticated)', () => {
  base.test('returns 401 without auth', async ({ request }) => {
    // /api/research requires auth; unauthenticated requests get 401
    const res = await request.post('/api/research', {
      data: { query: 'What is MEOK AI?' },
      headers: { 'Content-Type': 'application/json' },
      timeout: 10_000,
    })
    expect(res.status()).toBe(401)
  })
})

// ---------------------------------------------------------------------------
// Protected endpoints — must reject unauthenticated requests
// ---------------------------------------------------------------------------

base.describe('POST /api/chat (unauthenticated)', () => {
  base.test('returns 401 without auth', async ({ request }) => {
    const res = await request.post('/api/chat', {
      data: { message: 'Hello' },
      headers: { 'Content-Type': 'application/json' },
    })
    expect(res.status()).toBe(401)
  })
})

base.describe('POST /api/user/settings (unauthenticated)', () => {
  base.test('returns 401 without auth', async ({ request }) => {
    // Route is POST-only; unauthenticated POST should return 401
    const res = await request.post('/api/user/settings', {
      data: { companionName: 'Test' },
      headers: { 'Content-Type': 'application/json' },
    })
    expect(res.status()).toBe(401)
  })
})

// ---------------------------------------------------------------------------
// Protected endpoints — authenticated variants (smoke check)
// ---------------------------------------------------------------------------

authTest.describe('POST /api/user/settings (authenticated)', () => {
  authTest.skip(
    !process.env.E2E_AUTH_EMAIL,
    'Skipped: requires E2E_AUTH_EMAIL env var for Clerk login'
  )
  authTest('returns non-401 for authenticated user', async ({ authenticatedPage }) => {
    const res = await apiRequest(authenticatedPage, 'POST', '/api/user/settings', {
      body: { companionName: 'TestCompanion', archetype: 'companion' },
    })
    expect(res.status()).not.toBe(401)
  })
})

// ---------------------------------------------------------------------------
// Additional API smoke tests — morning briefing, council, waitlist, gaming
// ---------------------------------------------------------------------------

base.describe('GET /api/morning-briefing (unauthenticated)', () => {
  base.test('returns 401 without auth', async ({ request }) => {
    const res = await request.get('/api/morning-briefing', {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10_000,
    })
    expect(res.status()).toBe(401)
  })
})

base.describe('GET /api/council/status (unauthenticated)', () => {
  base.test('returns 401 without auth', async ({ request }) => {
    const res = await request.get('/api/council/status', {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10_000,
    })
    expect(res.status()).toBe(401)
  })
})

base.describe('POST /api/waitlist', () => {
  base.test('returns 200 with valid email', async ({ request }) => {
    const res = await request.post('/api/waitlist', {
      data: { email: `e2e-smoke-${Date.now()}@meok-test.invalid` },
      headers: { 'Content-Type': 'application/json' },
      timeout: 10_000,
    })
    expect(res.status()).toBe(200)
    const body = await res.json()
    expect(body.success).toBe(true)
  })

  base.test('returns 400 with invalid email', async ({ request }) => {
    const res = await request.post('/api/waitlist', {
      data: { email: 'not-an-email' },
      headers: { 'Content-Type': 'application/json' },
      timeout: 10_000,
    })
    expect(res.status()).toBe(400)
  })

  base.test('returns 400 with missing email', async ({ request }) => {
    const res = await request.post('/api/waitlist', {
      data: {},
      headers: { 'Content-Type': 'application/json' },
      timeout: 10_000,
    })
    expect(res.status()).toBe(400)
  })
})

base.describe('GET /api/gaming/sessions (unauthenticated)', () => {
  base.test('returns 401 without auth', async ({ request }) => {
    const res = await request.get('/api/gaming/sessions', {
      headers: { 'Content-Type': 'application/json' },
      timeout: 10_000,
    })
    expect(res.status()).toBe(401)
  })
})
