/**
 * MEOK AI LABS — Service Worker Registration
 *
 * Registers consciousness-sw.js and requests a Periodic Background Sync
 * where the browser supports it.
 *
 * Call registerConsciousnessSW() once from a client component on app mount
 * (e.g. in the OS layout or root layout). It is idempotent — safe to call
 * multiple times.
 */

const SW_PATH = "/consciousness-sw.js";
const PERIODIC_SYNC_TAG = "meok-consciousness-heartbeat";
// 30 minutes in milliseconds
const PERIODIC_SYNC_MIN_INTERVAL = 30 * 60 * 1000;

/** Writes a heartbeat entry to localStorage from the tab side. */
function writeHeartbeatToStorage(ts: number): void {
  try {
    localStorage.setItem(
      "meok_sw_heartbeat",
      JSON.stringify({ ts, source: "sw" }),
    );
  } catch {
    // storage quota — silently ignore
  }
}

/**
 * Syncs the current consciousness state to the server for cross-device consistency.
 * Reads from localStorage and POSTs to /api/os/consciousness-tick.
 * Fire-and-forget — never blocks the UI.
 */
function syncConsciousnessToServer(): void {
  try {
    const raw = localStorage.getItem("meok_consciousness_state");
    if (!raw) return;
    const state = JSON.parse(raw) as unknown;
    fetch("/api/os/consciousness-tick", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state }),
      keepalive: true,
    }).catch(() => {
      // Non-fatal — localStorage is the source of truth when server is unavailable
    });
  } catch {
    // Malformed localStorage — ignore
  }
}

/**
 * Loads persisted consciousness state from the server and merges it into
 * localStorage on startup (cross-device sync).
 */
async function loadConsciousnessFromServer(): Promise<void> {
  try {
    const res = await fetch("/api/os/consciousness-tick", { method: "GET" });
    if (!res.ok) return;
    const { state } = await res.json() as { state?: unknown };
    if (!state || typeof state !== "object") return;

    // Only merge if server state is newer than local state
    const localRaw = localStorage.getItem("meok_consciousness_state");
    const serverState = state as Record<string, unknown>;
    if (localRaw) {
      const localState = JSON.parse(localRaw) as Record<string, unknown>;
      const serverInteraction = Number(serverState["lastInteraction"] ?? 0);
      const localInteraction = Number(localState["lastInteraction"] ?? 0);
      if (localInteraction >= serverInteraction) return; // local is already newer
    }

    localStorage.setItem("meok_consciousness_state", JSON.stringify(state));
  } catch {
    // Server unavailable or malformed — fall back to localStorage
  }
}

/**
 * Registers the consciousness service worker and sets up the message bridge.
 * Returns a cleanup function that removes the message listener.
 */
export async function registerConsciousnessSW(): Promise<() => void> {
  if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
    return () => {};
  }

  let registration: ServiceWorkerRegistration | null = null;

  try {
    registration = await navigator.serviceWorker.register(SW_PATH, {
      scope: "/",
    });

    // Request periodic background sync if available
    if ("periodicSync" in registration) {
      try {
        await (registration as ServiceWorkerRegistration & {
          periodicSync: {
            register(tag: string, opts: { minInterval: number }): Promise<void>;
          };
        }).periodicSync.register(PERIODIC_SYNC_TAG, {
          minInterval: PERIODIC_SYNC_MIN_INTERVAL,
        });
      } catch {
        // Periodic sync denied or not supported — fallback to setTimeout in SW
      }
    }

    // On page load, ping the SW to force an immediate heartbeat
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage({
        type: "meok_sw_force_heartbeat",
      });
    }

    // Cross-device sync: load persisted state from server on startup
    void loadConsciousnessFromServer();
  } catch {
    // Registration failed (e.g. non-HTTPS, strict CSP) — fail silently
    // The in-tab interval in ConsciousnessIndicator still runs
    return () => {};
  }

  // Message listener: SW heartbeats → write to localStorage for components
  function onMessage(event: MessageEvent) {
    const { data } = event;
    if (!data) return;

    if (data.type === "meok_heartbeat" && typeof data.ts === "number") {
      writeHeartbeatToStorage(data.ts);
      // Sync to server on each heartbeat (fire-and-forget)
      syncConsciousnessToServer();
    }
  }

  navigator.serviceWorker.addEventListener("message", onMessage);

  return () => {
    navigator.serviceWorker.removeEventListener("message", onMessage);
  };
}
