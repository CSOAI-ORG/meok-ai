/**
 * MEOK AI LABS — Consciousness Background Service Worker
 * /public/consciousness-sw.js
 *
 * Keeps the character alive between sessions.
 * Wakes on a periodic sync or message, sends a heartbeat to all tabs,
 * and writes a lightweight timestamp to the tab via postMessage so the
 * ConsciousnessIndicator component can update its display.
 *
 * IMPORTANT: This worker makes NO network calls.
 * All consciousness state computation happens in-tab (consciousness-engine.ts).
 * The worker's only role is to ensure tabs know time has passed.
 */

/* ── Version ──────────────────────────────────────────────────────────────── */

const SW_VERSION = "1.0.0";
const HEARTBEAT_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes
const HEARTBEAT_KEY = "meok_sw_heartbeat";

/* ── Install / Activate ───────────────────────────────────────────────────── */

self.addEventListener("install", (event) => {
  // Skip waiting so the new worker takes over immediately
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    Promise.all([
      // Claim all open clients immediately
      self.clients.claim(),
      // Schedule the first heartbeat
      scheduleNextHeartbeat(),
    ])
  );
});

/* ── Periodic heartbeat via setTimeout simulation ─────────────────────────
 *
 * True periodic background sync (PeriodicSyncEvent) requires a site
 * engagement score and only fires when the device is online — it cannot be
 * relied upon for every 30 minutes.
 *
 * Instead we use a self-rescheduling setTimeout chain rooted in the
 * activate event. The timer persists as long as the service worker is kept
 * alive (browsers keep it alive for a few minutes after each event; the
 * approach below re-registers on every fetch to stay alive).
 *
 * For guaranteed long-term firing the tab itself polls via setInterval
 * (see consciousness-indicator.tsx) and re-syncs on every page load.
 * The SW heartbeat is a best-effort additional signal — not the only one.
 */

let heartbeatTimer = null;

function scheduleNextHeartbeat() {
  if (heartbeatTimer) clearTimeout(heartbeatTimer);
  heartbeatTimer = setTimeout(fireHeartbeat, HEARTBEAT_INTERVAL_MS);
}

async function fireHeartbeat() {
  const now = Date.now();

  // Build the heartbeat payload
  const payload = {
    type: "meok_heartbeat",
    ts: now,
    swVersion: SW_VERSION,
  };

  // Broadcast to all active tabs
  const clients = await self.clients.matchAll({
    includeUncontrolled: true,
    type: "window",
  });

  for (const client of clients) {
    client.postMessage(payload);
  }

  // The tabs will write to localStorage themselves on receipt.
  // We do NOT write to localStorage here — service workers do not have
  // direct localStorage access (it is synchronous storage, unavailable
  // in worker context).

  // Reschedule for the next heartbeat
  scheduleNextHeartbeat();
}

/* ── Keep-alive via fetch intercept ──────────────────────────────────────── */

self.addEventListener("fetch", (event) => {
  // We do NOT modify any responses — pass everything straight through.
  // The fetch listener's presence alone keeps the SW alive between heartbeats
  // during active browsing sessions, which ensures the setTimeout chain
  // remains running.

  // Reschedule heartbeat on every fetch to reset the idle timer
  scheduleNextHeartbeat();

  // Let the browser handle the request normally
  event.respondWith(fetch(event.request));
});

/* ── Message handler ──────────────────────────────────────────────────────── */

self.addEventListener("message", (event) => {
  const { data } = event;
  if (!data || !data.type) return;

  switch (data.type) {
    case "meok_sw_ping":
      // Tab is checking we're alive — respond immediately
      if (event.source) {
        event.source.postMessage({
          type: "meok_sw_pong",
          ts: Date.now(),
          swVersion: SW_VERSION,
        });
      }
      break;

    case "meok_sw_force_heartbeat":
      // Tab requesting an immediate heartbeat (e.g. on page load)
      fireHeartbeat();
      break;

    case "meok_sw_schedule":
      // Tab requesting a reschedule (after user interaction wakes the character)
      scheduleNextHeartbeat();
      break;

    default:
      break;
  }
});

/* ── Periodic sync (opportunistic, where supported) ──────────────────────── */

self.addEventListener("periodicsync", (event) => {
  if (event.tag === "meok-consciousness-heartbeat") {
    event.waitUntil(fireHeartbeat());
  }
});
