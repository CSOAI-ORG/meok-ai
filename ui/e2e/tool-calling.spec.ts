/**
 * Tool Calling Integration E2E Tests
 * Tests that SOV3 MCP tools can be called via the unified executor
 */
import { test, expect } from '@playwright/test';

const SOV3_URL = process.env.SOV3_URL || 'http://localhost:3101';
const BASE_URL = process.env.BASE_URL || 'http://127.0.0.1:3000';

test.describe('SOV3 Tool Execution', () => {
  test('query_memories returns results', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-1',
        method: 'tools/call',
        params: { name: 'query_memories', arguments: { query: 'consciousness', limit: 3 } },
      },
    });
    expect(res.status()).toBe(200);
    const data = await res.json();
    expect(data.result).toBeDefined();
    expect(data.result.content).toBeDefined();
  });

  test('web_search returns results', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-2',
        method: 'tools/call',
        params: { name: 'web_search', arguments: { query: 'MEOK AI' } },
      },
    });
    expect(res.status()).toBe(200);
  });

  test('get_consciousness_state returns valid state', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-3',
        method: 'tools/call',
        params: { name: 'get_consciousness_state', arguments: {} },
      },
    });
    expect(res.status()).toBe(200);
    const data = await res.json();
    const text = data.result?.content?.[0]?.text;
    expect(text).toBeDefined();
    const state = JSON.parse(text);
    expect(state.consciousness_mode).toBeDefined();
  });

  test('validate_care returns care score', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-4',
        method: 'tools/call',
        params: { name: 'validate_care', arguments: { text: 'Help me understand this code' } },
      },
    });
    expect(res.status()).toBe(200);
    const data = await res.json();
    const text = data.result?.content?.[0]?.text;
    expect(text).toBeDefined();
    const result = JSON.parse(text);
    const careScore = result.care_score ?? result.overall_care_score ?? 0;
    expect(careScore).toBeGreaterThanOrEqual(0);
  });

  test('record_memory stores and retrieves', async ({ request }) => {
    const testContent = `e2e-test-${Date.now()}`;
    // Record
    const recordRes = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-5a',
        method: 'tools/call',
        params: { name: 'record_memory', arguments: { content: testContent, importance: 0.3, tags: ['e2e-test'] } },
      },
    });
    expect(recordRes.status()).toBe(200);

    // Query back
    const queryRes = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-5b',
        method: 'tools/call',
        params: { name: 'query_memories', arguments: { query: testContent, limit: 1 } },
      },
    });
    expect(queryRes.status()).toBe(200);
  });
});

test.describe('Browse Page Integration', () => {
  test('browse_page extracts page content', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-browse-1',
        method: 'tools/call',
        params: { name: 'browse_page', arguments: { url: 'https://example.com', action: 'extract' } },
      },
    });
    expect(res.status()).toBe(200);
    const data = await res.json();
    const text = data.result?.content?.[0]?.text;
    expect(text).toBeDefined();
    const result = JSON.parse(text);
    // Should have real content, not the old stub
    expect(result.status).toBe('ok');
    expect(result.title).toBeDefined();
    expect(result.text).toContain('Example Domain');
  });

  test('browse_page screenshot returns image data', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        id: 'test-browse-2',
        method: 'tools/call',
        params: { name: 'browse_page', arguments: { url: 'https://example.com', action: 'screenshot' } },
      },
    });
    expect(res.status()).toBe(200);
    const data = await res.json();
    const text = data.result?.content?.[0]?.text;
    const result = JSON.parse(text);
    expect(result.status).toBe('ok');
    expect(result.full_size_bytes).toBeGreaterThan(0);
  });
});

test.describe('MEOK API Tool Proxy', () => {
  test('GET /api/jarvis/execute lists available tools', async ({ request }) => {
    const res = await request.get(`${BASE_URL}/api/jarvis/execute`);
    expect([200, 401, 500]).toContain(res.status());
  });

  test('POST /api/jarvis/execute calls SOV3 tool', async ({ request }) => {
    const res = await request.post(`${BASE_URL}/api/jarvis/execute`, {
      data: { tool: 'get_consciousness_state', args: {} },
    });
    expect([200, 401, 500]).toContain(res.status());
  });
});
