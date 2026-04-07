/**
 * MEOK.ai — k6 Load Test
 * Tests the key production API routes under realistic concurrent load.
 *
 * Usage:
 *   k6 run tests/load_test.js
 *   k6 run --vus 50 --duration 60s tests/load_test.js
 *   BASE_URL=https://try.meok.ai k6 run tests/load_test.js
 *
 * Install k6: brew install k6
 */

import http from 'k6/http';
import { check, sleep, group } from 'k6';
import { Rate, Trend } from 'k6/metrics';

// ── Config ────────────────────────────────────────────────────────────────────

const BASE_URL = __ENV.BASE_URL || 'http://localhost:3000';

// Custom metrics
const errorRate = new Rate('errors');
const apiLatency = new Trend('api_latency_ms');

// ── Test scenarios ─────────────────────────────────────────────────────────────

export const options = {
  scenarios: {
    // Ramp up to 20 concurrent users, sustain, ramp down
    normal_load: {
      executor: 'ramping-vus',
      startVUs: 0,
      stages: [
        { duration: '30s', target: 10 },   // warm up
        { duration: '60s', target: 20 },   // sustain
        { duration: '30s', target: 40 },   // stress spike
        { duration: '30s', target: 0 },    // cool down
      ],
    },
  },
  thresholds: {
    // 95% of requests must complete under 2s
    http_req_duration: ['p(95)<2000'],
    // Error rate must stay below 5%
    errors: ['rate<0.05'],
    // API latency p95 < 1.5s
    api_latency_ms: ['p(95)<1500'],
  },
};

// ── Public routes (no auth) ───────────────────────────────────────────────────

function testPublicRoutes() {
  group('Public pages', () => {
    // Homepage
    let res = http.get(`${BASE_URL}/`);
    check(res, { 'homepage 200': r => r.status === 200 });
    errorRate.add(res.status !== 200);
    apiLatency.add(res.timings.duration);
    sleep(0.1);

    // Marketing pages
    res = http.get(`${BASE_URL}/about`);
    check(res, { 'about 200 or 404': r => r.status === 200 || r.status === 404 });

    res = http.get(`${BASE_URL}/pricing`);
    check(res, { 'pricing 200 or 404': r => r.status === 200 || r.status === 404 });
  });
}

// ── API routes (no auth required) ─────────────────────────────────────────────

function testPublicAPIs() {
  group('Public APIs', () => {
    // SOV3 status
    let res = http.get(`${BASE_URL}/api/sov3/status`);
    check(res, {
      'sov3/status 2xx': r => r.status >= 200 && r.status < 300,
      'sov3/status has json': r => {
        try { JSON.parse(r.body); return true; } catch { return false; }
      },
    });
    errorRate.add(res.status >= 500);
    apiLatency.add(res.timings.duration);
    sleep(0.1);

    // Characters marketplace (public endpoint)
    res = http.get(`${BASE_URL}/api/characters/marketplace?page=1&limit=12`);
    check(res, {
      'marketplace 2xx': r => r.status >= 200 && r.status < 300,
      'marketplace response time': r => r.timings.duration < 1000,
    });
    errorRate.add(res.status >= 500);
    apiLatency.add(res.timings.duration);
    sleep(0.1);

    // Events SSE endpoint (just check connection, don't hold it)
    res = http.get(`${BASE_URL}/api/events`, {
      timeout: '2s',
      headers: { 'Accept': 'text/event-stream' },
    });
    check(res, { 'events endpoint reachable': r => r.status === 200 || r.status === 204 || r.status === 401 });
    sleep(0.2);
  });
}

// ── Health and infrastructure ──────────────────────────────────────────────────

function testInfrastructure() {
  group('Infrastructure', () => {
    // Health check (if it exists)
    let res = http.get(`${BASE_URL}/api/health`);
    check(res, { 'health 200 or 404': r => r.status === 200 || r.status === 404 });
    apiLatency.add(res.timings.duration);
    sleep(0.1);
  });
}

// ── Simulated authenticated flow (with test token or MEOK_LOCAL_MODE) ─────────

function testAuthenticatedAPIs() {
  const localModeHeader = { 'x-meok-local-mode': '1' };

  group('Authenticated APIs (local mode)', () => {
    // User progress
    let res = http.get(`${BASE_URL}/api/user/progress`, { headers: localModeHeader });
    check(res, {
      'user/progress not 500': r => r.status !== 500,
      'user/progress fast': r => r.timings.duration < 800,
    });
    errorRate.add(res.status >= 500);
    apiLatency.add(res.timings.duration);
    sleep(0.1);

    // User notifications
    res = http.get(`${BASE_URL}/api/user/notifications`, { headers: localModeHeader });
    check(res, { 'notifications not 500': r => r.status !== 500 });
    errorRate.add(res.status >= 500);
    apiLatency.add(res.timings.duration);
    sleep(0.1);
  });
}

// ── Main VU loop ───────────────────────────────────────────────────────────────

export default function () {
  // Mix of request types to simulate realistic traffic
  testPublicRoutes();
  testPublicAPIs();
  testInfrastructure();

  // Only run auth tests in local mode (won't work against prod without real tokens)
  if (BASE_URL.includes('localhost')) {
    testAuthenticatedAPIs();
  }

  sleep(1);
}

// ── Summary hook ──────────────────────────────────────────────────────────────

export function handleSummary(data) {
  const p95 = data.metrics.http_req_duration?.values?.['p(95)'];
  const errRate = (data.metrics.errors?.values?.rate || 0) * 100;
  const totalReqs = data.metrics.http_reqs?.values?.count || 0;

  console.log('\n════════════════════════════════════════');
  console.log('MEOK Load Test Summary');
  console.log('════════════════════════════════════════');
  console.log(`Total requests  : ${totalReqs}`);
  console.log(`Error rate      : ${errRate.toFixed(2)}%`);
  console.log(`p95 latency     : ${p95?.toFixed(0) ?? '?'}ms`);
  console.log(`Target          : ${BASE_URL}`);
  console.log('════════════════════════════════════════\n');

  return {
    stdout: JSON.stringify(data.metrics, null, 2),
  };
}
