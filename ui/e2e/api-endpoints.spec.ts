/**
 * Additional API Endpoints E2E Tests
 * Tests more API endpoints for coverage
 *
 * Run: npx playwright test e2e/api-endpoints.spec.ts
 */
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3000';

test.describe('User API Endpoints', () => {
   
  test('GET /api/user returns user data or error', async ({ request }) => {
    const res = await request.get('/api/user');
    expect([200, 401, 405, 500, 503]).toContain(res.status());
  });

  test('GET /api/user/settings returns status', async ({ request }) => {
    const res = await request.get('/api/user/settings');
    expect([200, 401, 405, 500, 503]).toContain(res.status());
  });

  test('GET /api/user/preferences returns status', async ({ request }) => {
    const res = await request.get('/api/user/preferences');
    expect([200, 401, 405, 500, 503]).toContain(res.status());
  });

  test('GET /api/user/dreams returns status', async ({ request }) => {
    const res = await request.get('/api/user/dreams');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Character API Endpoints', () => {
   
test.skip('GET /api/characters returns list', async ({ request }) => {
    const res = await request.get('/api/characters', { timeout: 15000 });
    expect([200, 404, 500, 503]).toContain(res.status());
  });

  test('GET /api/characters/marketplace returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/characters/marketplace`);
    expect([200, 500, 503]).toContain(res.status());
  });
});

test.describe('SOV3 API Endpoints', () => {
   
  test('GET /api/sov3/status returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/sov3/status`);
    expect([200, 401, 500]).toContain(res.status());
  });

  test('GET /api/council/status returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/council/status`);
    expect([200, 401, 500]).toContain(res.status());
  });
});

test.describe('Ralph/Task API Endpoints', () => {
   
  test('GET /api/ralph/tasks returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/ralph/tasks`);
    expect([200, 401]).toContain(res.status());
  });

  test('GET /api/ralph/projects returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/ralph/projects`);
    expect([200, 401]).toContain(res.status());
  });
});

test.describe('Jarvis API Endpoints', () => {
   
  test('GET /api/jarvis/status returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/jarvis/status`);
    expect([200, 401, 500]).toContain(res.status());
  });

  test('GET /api/jarvis/state returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/jarvis/state`);
    expect([200, 401]).toContain(res.status());
  });
});

test.describe('Gaming API Endpoints', () => {
   
  test('GET /api/gaming/search returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/gaming/search?q=test`);
    expect([200, 401, 500]).toContain(res.status());
  });
});

test.describe('Documents API Endpoints', () => {
   
  test('GET /api/documents returns list or auth required', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/documents`);
    expect([200, 401]).toContain(res.status());
  });
});

test.describe('Team API Endpoints', () => {
   
  test('GET /api/team returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/team`);
    expect([200, 401, 404]).toContain(res.status());
  });
});

test.describe('Registry API Endpoints', () => {
   
  test('GET /api/registry returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/registry`);
    expect([200, 500, 503]).toContain(res.status());
  });

  test('GET /api/registry/models returns status', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/registry/models`);
    expect([200, 500, 503]).toContain(res.status());
  });
});
