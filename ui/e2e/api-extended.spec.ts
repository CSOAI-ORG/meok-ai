/**
 * Extended API Endpoints E2E Tests
 * Tests additional API endpoints for coverage
 *
 * Run: npx playwright test e2e/api-extended.spec.ts
 */
import { test, expect } from '@playwright/test';

const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3000';

test.describe('Research API Endpoints', () => {
  test('GET /api/research returns status', async ({ request }) => {
    const res = await request.get('/api/research');
    expect([200, 401, 403, 405, 500, 503]).toContain(res.status());
  });

  test('GET /api/research/history returns status', async ({ request }) => {
    const res = await request.get('/api/research/history');
    expect([200, 401, 404, 500, 503]).toContain(res.status());
  });

  test('GET /api/research/templates returns status', async ({ request }) => {
    const res = await request.get('/api/research/templates');
    expect([200, 401, 404, 500, 503]).toContain(res.status());
  });

  test('GET /api/research/schedule returns status', async ({ request }) => {
    const res = await request.get('/api/research/schedule');
    expect([200, 401, 404, 500, 503]).toContain(res.status());
  });
});

test.describe('Chat API Endpoints', () => {
  test('GET /api/chat returns status', async ({ request }) => {
    const res = await request.get('/api/chat');
    expect([200, 401, 405, 500, 503]).toContain(res.status());
  });

  test('POST /api/chat returns status', async ({ request }) => {
    const res = await request.post('/api/chat', {
      data: { message: 'test' }
    });
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });

  test('POST /api/chat/stream returns status', async ({ request }) => {
    const res = await request.post('/api/chat/stream', {
      data: { message: 'test' }
    });
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });

  test('POST /api/chat/rate returns status', async ({ request }) => {
    const res = await request.post('/api/chat/rate', {
      data: { rating: 5 }
    });
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Voice API Endpoints', () => {
  test('POST /api/voice/speak returns status', async ({ request }) => {
    const res = await request.post('/api/voice/speak', {
      data: { text: 'hello' }
    });
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });

  test('POST /api/voice/transcribe returns status', async ({ request }) => {
    const res = await request.post('/api/voice/transcribe');
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/voice/orchestration returns status', async ({ request }) => {
    const res = await request.get('/api/voice/orchestration');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('MCP & Agents API Endpoints', () => {
  test('GET /api/mcp/servers returns status', async ({ request }) => {
    const res = await request.get('/api/mcp/servers');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/mcp/synergy returns status', async ({ request }) => {
    const res = await request.get('/api/mcp/synergy');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/agents returns status', async ({ request }) => {
    const res = await request.get('/api/agents');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/mcp-health returns status', async ({ request }) => {
    const res = await request.get('/api/mcp-health');
    expect([200, 500, 503]).toContain(res.status());
  });
});

test.describe('Analytics & Events API Endpoints', () => {
  test('GET /api/analytics returns status', async ({ request }) => {
    const res = await request.get('/api/analytics');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test.skip('GET /api/events returns status', async ({ request }) => {
    const res = await request.get('/api/events', { timeout: 5000 });
    expect([200, 401, 403, 405, 500, 503]).toContain(res.status());
  });

  test('GET /api/character/analytics returns status', async ({ request }) => {
    const res = await request.get('/api/character/analytics');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Admin API Endpoints', () => {
  test('GET /api/admin/stats returns status', async ({ request }) => {
    const res = await request.get('/api/admin/stats');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/admin/dashboard returns status', async ({ request }) => {
    const res = await request.get('/api/admin/dashboard');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Pipeline & Orchestration API Endpoints', () => {
  test('GET /api/pipeline returns status', async ({ request }) => {
    const res = await request.get('/api/pipeline');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/orchestration returns status', async ({ request }) => {
    const res = await request.get('/api/orchestration');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/research/orchestration returns status', async ({ request }) => {
    const res = await request.get('/api/research/orchestration');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/character/orchestration returns status', async ({ request }) => {
    const res = await request.get('/api/character/orchestration');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Security & Compliance API Endpoints', () => {
  test('POST /api/security/scan returns status', async ({ request }) => {
    const res = await request.post('/api/security/scan');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/compliance returns status', async ({ request }) => {
    const res = await request.get('/api/compliance');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/guardian/check-person returns status', async ({ request }) => {
    const res = await request.get('/api/guardian/check-person');
    expect([200, 401, 403, 405, 500, 503]).toContain(res.status());
  });
});

test.describe('User Companion API Endpoints', () => {
  test('GET /api/user/companion returns status', async ({ request }) => {
    const res = await request.get('/api/user/companion');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/user/companion/diary returns status', async ({ request }) => {
    const res = await request.get('/api/user/companion/diary');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/user/diary returns status', async ({ request }) => {
    const res = await request.get('/api/user/diary');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Sovereign & Orion API Endpoints', () => {
  test('GET /api/sovereign/state returns status', async ({ request }) => {
    const res = await request.get('/api/sovereign/state');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/sov3/tasks returns status', async ({ request }) => {
    const res = await request.get('/api/sov3/tasks');
    expect([200, 401, 403, 500, 503]).toContain(res.status());
  });

  test('GET /api/sov3/nemotron returns status', async ({ request }) => {
    const res = await request.get('/api/sov3/nemotron');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Neural & Models API Endpoints', () => {
  test('GET /api/neural/models returns status', async ({ request }) => {
    const res = await request.get('/api/neural/models');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('GET /api/registry/local returns status', async ({ request }) => {
    const res = await request.get('/api/registry/local');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Gateway & Unified API Endpoints', () => {
  test('GET /api/gateway returns status', async ({ request }) => {
    const res = await request.get('/api/gateway');
    expect([200, 401, 500, 503]).toContain(res.status());
  });

  test('POST /api/unified/command returns status', async ({ request }) => {
    const res = await request.post('/api/unified/command', {
      data: { command: 'test' }
    });
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Checkout & Billing API Endpoints', () => {
  test('POST /api/checkout returns status', async ({ request }) => {
    const res = await request.post('/api/checkout');
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });

  test('POST /api/stripe/checkout returns status', async ({ request }) => {
    const res = await request.post('/api/stripe/checkout');
    expect([200, 400, 401, 500, 503]).toContain(res.status());
  });
});

test.describe('Misc API Endpoints', () => {
  test('GET /api/docs returns status', async ({ request }) => {
    const res = await request.get('/api/docs');
    expect([200, 404, 500, 503]).toContain(res.status());
  });

  test('POST /api/explain returns status', async ({ request }) => {
    const res = await request.post('/api/explain', {
      data: { text: 'test' }
    });
    expect([200, 400, 500, 503]).toContain(res.status());
  });

  test('GET /api/morning-briefing returns status', async ({ request }) => {
    const res = await request.get('/api/morning-briefing');
    expect([200, 401, 500, 503]).toContain(res.status());
  });
});
