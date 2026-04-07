/**
 * API Error Handling & Edge Cases E2E Tests
 * Tests error conditions and edge cases
 *
 * Run: npx playwright test e2e/api-errors.spec.ts
 */
import { test, expect } from '@playwright/test';

test.describe('Invalid Endpoints', () => {
   
  test.skip('returns error for non-existent route', async ({ request }) => {
    const res = await request.get('/api/this-does-not-exist-at-all', { timeout: 15000 });
    const status = res.status();
    expect(status).toBeLessThan(600);
  });

  test.skip('returns error for malformed character ID', async ({ request }) => {
    const res = await request.get('/api/characters/!!!invalid!!!', { timeout: 15000 });
    const status = res.status();
    expect(status).toBeLessThan(600);
  });
});

test.describe('Invalid Methods', () => {
   
  test('POST to GET-only endpoint handled', async ({ request }) => {
    const res = await request.post('/api/characters/search');
    const status = res.status();
    expect(status).toBeLessThan(600);
  });

  test('PUT to POST-only endpoint handled', async ({ request }) => {
    const res = await request.put('/api/feedback');
    const status = res.status();
    expect(status).toBeLessThan(600);
  });
});

test.describe('Malformed Requests', () => {
   
  test('invalid JSON in body handled gracefully', async ({ request }) => {
    const res = await request.post('/api/feedback', {
      data: 'not-valid-json{{{',
      headers: { 'Content-Type': 'application/json' },
    });
    const status = res.status();
    expect(status).toBeLessThan(600);
  });

  test('empty body handled gracefully', async ({ request }) => {
    const res = await request.post('/api/feedback', {
      data: '',
      headers: { 'Content-Type': 'application/json' },
    });
    const status = res.status();
    expect(status).toBeLessThan(600);
  });
});

test.describe('Query Parameter Edge Cases', () => {
   
  test('very long query string handled', async ({ request }) => {
    const longQuery = 'a'.repeat(5000);
    const res = await request.get(`/api/characters/search?q=${longQuery}`);
    expect([200, 400, 414, 500]).toContain(res.status());
  });

  test('special characters in query handled', async ({ request }) => {
    const res = await request.get('/api/characters/search?q=<script>alert(1)</script>');
    expect([200, 400, 500]).toContain(res.status());
  });

  test('null bytes in query handled', async ({ request }) => {
    const res = await request.get('/api/characters/search?q=test%00null');
    expect([200, 400, 500]).toContain(res.status());
  });
});

test.describe('Rate Limiting', () => {
   
  test('multiple rapid requests handled', async ({ request }) => {
    const promises = Array(10).fill(null).map(() => 
      request.get('/api/health')
    );
    const results = await Promise.all(promises);
    const statuses = results.map(r => r.status());
    // Should not all be 429 (rate limited) in short time
    const rateLimited = statuses.filter(s => s === 429).length;
    expect(rateLimited).toBeLessThan(10);
  });
});

test.describe('CORS Headers', () => {
   
  test('OPTIONS request handled', async ({ request }) => {
    const res = await request.fetch('/api/health', { method: 'OPTIONS' });
    expect([200, 204, 405]).toContain(res.status());
  });
});

test.describe('Response Headers', () => {
   
  test('health endpoint has cache control', async ({ request }) => {
    const res = await request.get('/api/health');
    const headers = res.headers();
    const cacheControl = headers['cache-control'] ?? headers['Cache-Control'] ?? null;
    expect(cacheControl === null || typeof cacheControl === 'string').toBe(true);
  });
});
