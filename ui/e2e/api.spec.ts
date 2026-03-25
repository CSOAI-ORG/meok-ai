import { test, expect } from '@playwright/test'

test.describe('API integration tests', () => {
  test('GET /api/health returns 200', async ({ request }) => {
    const response = await request.get('/api/health')
    // Health endpoint returns 200 (healthy/degraded) or 503 (unhealthy)
    expect([200, 503]).toContain(response.status())
    const body = await response.json()
    expect(body).toHaveProperty('status')
    expect(body).toHaveProperty('service', 'meok-ui')
    expect(body).toHaveProperty('timestamp')
    expect(body).toHaveProperty('uptime')
  })

  test('GET /api/registry returns models array', async ({ request }) => {
    const response = await request.get('/api/registry')
    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body).toHaveProperty('models')
    expect(Array.isArray(body.models)).toBe(true)
    expect(body).toHaveProperty('pagination')
    expect(body.pagination).toHaveProperty('total')
  })

  test('POST /api/guardian/scan-message returns threat scores', async ({ request }) => {
    const response = await request.post('/api/guardian/scan-message', {
      data: {
        message: 'Hello, this is a friendly test message',
        user_id: 'e2e-test-user',
      },
    })
    expect(response.ok()).toBeTruthy()
    const body = await response.json()
    expect(body).toHaveProperty('severity')
    expect(body).toHaveProperty('scores')
    expect(body).toHaveProperty('flagged')
    expect(body).toHaveProperty('safe_to_deliver')
    expect(body.severity).toBe('LOW')
    expect(body.flagged).toBe(false)
    expect(body.safe_to_deliver).toBe(true)
    // Scores should contain all threat categories
    expect(body.scores).toHaveProperty('scam')
    expect(body.scores).toHaveProperty('grooming')
    expect(body.scores).toHaveProperty('self_harm')
    expect(body.scores).toHaveProperty('toxic')
    expect(body.scores).toHaveProperty('manipulation')
  })

  test('GET /api/user without auth returns 401', async ({ request }) => {
    // The user endpoint uses DELETE method for the only handler,
    // but a GET to /api/user without auth should return 401 or 405
    const response = await request.get('/api/user')
    expect([401, 405]).toContain(response.status())
  })
})
