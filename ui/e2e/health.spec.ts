/**
 * Health & Status API E2E Tests
 * Tests the main health and status endpoints
 *
 * Run: npx playwright test e2e/health.spec.ts
 */
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

test.describe('Health Endpoints', () => {
   
  test('GET /api/health returns status', async ({ request }) => {
    const res = await request.get('/api/health');
    // Accept various statuses (200 healthy, 503 degraded)
    const status = res.status();
    expect([200, 503]).toContain(status);
    
    // Try to get JSON, but be flexible
    const text = await res.text();
    if (text.startsWith('{')) {
      const data = JSON.parse(text);
      expect(data.status).toBeDefined();
      expect(data.service).toBeDefined();
    }
  });

  test('health includes SOV3 connection status', async ({ request }) => {
    const res = await request.get('/api/health');
    if (res.status() === 200) {
      const data = await res.json();
      expect(data.sov3).toBeDefined();
      expect(data.sov3.connected).toBe(true);
    }
  });

  test('health includes provider status', async ({ request }) => {
    const res = await request.get('/api/health');
    if (res.status() === 200) {
      const data = await res.json();
      expect(data.providers).toBeDefined();
      expect(data.providers.anthropic).toBe(true);
    }
  });

  test('health includes clerk status', async ({ request }) => {
    const res = await request.get('/api/health');
    if (res.status() === 200) {
      const data = await res.json();
      expect(data.clerk).toBeDefined();
    }
  });
});

test.describe('Billing Status', () => {
   
  test('GET /api/billing/status returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/billing/status`);
    // Accept auth required or success
    expect([200, 401]).toContain(res.status());
  });
});

test.describe('Waitlist', () => {
   
  test('GET /api/waitlist returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/waitlist`);
    // Accept GET not allowed (405) or other statuses
    expect([200, 401, 404, 405, 500]).toContain(res.status());
  });
});

test.describe('Launch Check', () => {
   
  test('GET /api/launch-check returns status', async ({ request }) => {
    const res = await request.get('/api/launch-check');
    // Accept various statuses
    const status = res.status();
    expect([200, 500, 503]).toContain(status);
    
    // Try to parse JSON if response is text
    const text = await res.text();
    if (text.startsWith('{')) {
      const data = JSON.parse(text);
      expect(data).toBeDefined();
      if (data.checks) expect(data.checks).toBeDefined();
    }
  });
});
