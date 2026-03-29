/**
 * API smoke tests — unauthenticated surface
 *
 * Verifies that protected endpoints correctly reject unauthenticated requests
 * with 401, and that public endpoints return an appropriate 2xx response with
 * the expected shape.
 *
 * These tests do not require a browser page — they use Playwright's
 * `request` context directly for speed and isolation.
 *
 * Auth-dependent variants are marked test.skip so they are safely ignored
 * in environments without credentials.
 */

import { test, expect } from '@playwright/test'

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const JSON_HEADERS = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
}

const DEFAULT_TIMEOUT = 10_000

// ---------------------------------------------------------------------------
// Protected GET endpoints — expect 401 when unauthenticated
// ---------------------------------------------------------------------------

test.describe('GET /api/user/progress (unauthenticated)', () => {
  test('returns 401', async ({ request }) => {
    const res = await request.get('/api/user/progress', {
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })
    expect(res.status()).toBe(401)
  })
})

test.describe('GET /api/user/notifications (unauthenticated)', () => {
  test('returns 401', async ({ request }) => {
    const res = await request.get('/api/user/notifications', {
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })
    expect(res.status()).toBe(401)
  })
})

test.describe('GET /api/user/conversations (unauthenticated)', () => {
  test('returns 401', async ({ request }) => {
    const res = await request.get('/api/user/conversations', {
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })
    expect(res.status()).toBe(401)
  })
})

test.describe('GET /api/gaming/sessions (unauthenticated)', () => {
  test('returns 401', async ({ request }) => {
    const res = await request.get('/api/gaming/sessions', {
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })
    expect(res.status()).toBe(401)
  })
})

// ---------------------------------------------------------------------------
// POST /api/feedback — may or may not require auth
// ---------------------------------------------------------------------------

test.describe('POST /api/feedback', () => {
  test('returns 401 or 200 with valid body', async ({ request }) => {
    const res = await request.post('/api/feedback', {
      data: {
        type: 'general',
        message: 'E2E smoke test feedback — please ignore',
        rating: 5,
      },
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })

    // Feedback may be public (200/201) or protected (401).
    // Either is acceptable; anything else (5xx, 404) is a signal of breakage.
    const status = res.status()
    expect([200, 201, 401, 403]).toContain(status)
  })
})

// ---------------------------------------------------------------------------
// GET /api/characters/search — public, should return 200
// ---------------------------------------------------------------------------

test.describe('GET /api/characters/search', () => {
  test('returns 200 with a query', async ({ request }) => {
    const res = await request.get('/api/characters/search?q=aria', {
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })
    expect(res.status()).toBe(200)
  })

  test('response body contains a characters array or results array', async ({ request }) => {
    const res = await request.get('/api/characters/search?q=aria', {
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })
    expect(res.status()).toBe(200)

    const body = await res.json()

    // Accept either { characters: [...] } or { results: [...] } or a plain array
    const isArray = Array.isArray(body)
    const hasCharactersKey = body !== null && typeof body === 'object' && 'characters' in body
    const hasResultsKey = body !== null && typeof body === 'object' && 'results' in body
    const hasDataKey = body !== null && typeof body === 'object' && 'data' in body

    expect(isArray || hasCharactersKey || hasResultsKey || hasDataKey).toBe(true)
  })

  test('empty query returns 200', async ({ request }) => {
    const res = await request.get('/api/characters/search?q=', {
      headers: JSON_HEADERS,
      timeout: DEFAULT_TIMEOUT,
    })
    // Empty query should still return 200 (empty results), not a 4xx/5xx
    expect(res.status()).toBe(200)
  })
})

// ---------------------------------------------------------------------------
// Authenticated variants — skipped unless E2E_AUTH_EMAIL is set
// ---------------------------------------------------------------------------

test.describe('Authenticated API smoke (requires E2E_AUTH_EMAIL)', () => {
  test.skip(!process.env.E2E_AUTH_EMAIL, 'Skipped: requires E2E_AUTH_EMAIL env var')

  // These tests are intentionally left as stubs. When auth credentials are
  // available, fill in the authenticated request pattern from helpers/api.ts.
  test('GET /api/user/progress returns 200 when authenticated', async ({ page }) => {
    // Placeholder — authenticated variant requires the auth fixture.
    // See e2e/api.spec.ts for the full authenticated pattern using apiRequest().
    test.skip(true, 'Stub: implement with authenticatedPage fixture when needed')
  })
})
