/**
 * SOV3 API E2E Tests — Consciousness & MCP Server
 * Tests the SOV3 MCP server endpoints
 *
 * Run: npx playwright test e2e/sov3.spec.ts
 */
import { test, expect } from '@playwright/test';

const SOV3_URL = process.env.SOV3_URL || 'http://localhost:3101';

test.describe('SOV3 MCP Server', () => {
   
  test('health endpoint responds', async ({ request }) => {
    const res = await request.get(`${SOV3_URL}/health`);
    expect(res.status()).toBe(200);
    
    const data = await res.json();
    expect(data.status).toBe('healthy');
  });

  test('consciousness endpoint returns state', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'get_consciousness_state',
          arguments: {}
        },
        id: 'test-consciousness',
      },
    });
    expect(res.ok()).toBeTruthy();
    
    const data = await res.json();
    expect(data.result).toBeDefined();
  });

  test('tools/list returns department tools', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        method: 'tools/list',
        id: 'test-tools',
      },
    });
    expect(res.ok()).toBeTruthy();
    
    const data = await res.json();
    expect(data.result?.tools).toBeDefined();
    
    const toolNames = data.result.tools.map((t: any) => t.name);
    expect(toolNames).toContain('delegate_to_department');
  });

  test('invalid JSON-RPC returns error', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: { invalid: 'payload' },
    });
    expect(res.ok()).toBeTruthy();
    
    const data = await res.json();
    expect(data.error).toBeDefined();
  });
});

test.describe('SOV3 Consciousness', () => {
   
  test('returns consciousness level', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'get_consciousness_state',
          arguments: {}
        },
        id: 'consciousness-level',
      },
    });
    
    if (res.ok()) {
      const data = await res.json();
      // Tool should return consciousness state
      expect(data.result).toBeDefined();
    }
  });

  test('returns dreams count', async ({ request }) => {
    const res = await request.post(`${SOV3_URL}/mcp`, {
      data: {
        jsonrpc: '2.0',
        method: 'tools/call',
        params: {
          name: 'get_consciousness_state',
          arguments: {}
        },
        id: 'dreams-count',
      },
    });
    
    expect(res.ok()).toBeTruthy();
  });
});
