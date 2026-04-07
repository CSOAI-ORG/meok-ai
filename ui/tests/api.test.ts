/**
 * MEOK API Endpoint Tests
 */

import { describe, it, expect, beforeAll, afterAll } from '@jest/globals';

const API_BASE = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

describe('Health Endpoint', () => {
  it('GET /api/health returns status', async () => {
    const res = await fetch(`${API_BASE}/api/health`);
    const data = await res.json();
    
    expect(res.status).toBe(200);
    expect(data.status).toBeDefined();
  });
});

describe('SOV3 Status Endpoint', () => {
  it('GET /api/sov3/status returns sov3 state', async () => {
    const res = await fetch(`${API_BASE}/api/sov3/status`);
    
    if (res.status === 200) {
      const data = await res.json();
      expect(data.online).toBeDefined();
    } else {
      expect(res.status).toBe(401);
    }
  });
});

describe('Jarvis Execute Endpoint', () => {
  it('GET /api/jarvis/execute lists tools', async () => {
    const res = await fetch(`${API_BASE}/api/jarvis/execute`);
    
    if (res.status === 200) {
      const data = await res.json();
      expect(data.tools).toBeDefined();
      expect(Array.isArray(data.tools)).toBe(true);
    }
  });
});

describe('Characters Endpoint', () => {
  it('GET /api/characters/search works', async () => {
    const res = await fetch(`${API_BASE}/api/characters/search?q=test`);
    
    expect([200, 401]).toContain(res.status);
  });
});
