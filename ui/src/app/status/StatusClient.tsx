"use client";

import { useEffect, useState } from "react";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const GREEN = "#16a34a";
const RED = "#dc2626";
const ORANGE = "#ea580c";

interface ServiceCheck {
  id: string;
  name: string;
  url: string;
  type: "substrate" | "neural" | "mesh" | "sensory" | "interface";
  icon: string;
}

const SERVICES: ServiceCheck[] = [
  { id: "sov3", name: "SOV3 hub", url: "http://localhost:3101/health", type: "substrate", icon: "🧠" },
  { id: "meok_mcp", name: "MEOK_MCP v3.0.0", url: "http://localhost:3102/health", type: "neural", icon: "⚡" },
  { id: "meokbridge", name: "MEOKBRIDGE mesh", url: "http://localhost:3205/health", type: "mesh", icon: "🔗" },
  { id: "ollama_m4", name: "Sovereign OLM (M4)", url: "http://localhost:11434/api/tags", type: "neural", icon: "🧬" },
  { id: "ollama_m2", name: "Sovereign OLM (M2)", url: "http://192.168.50.176:11434/api/tags", type: "neural", icon: "⚡" },
  { id: "farm_vision", name: "Farm Vision HARVI", url: "http://localhost:8888/", type: "sensory", icon: "🌱" },
];

interface ServiceStatus {
  id: string;
  ok: boolean;
  latency_ms?: number;
  data?: Record<string, unknown>;
  error?: string;
  checked_at: string;
}

export default function StatusClient() {
  const [statuses, setStatuses] = useState<Record<string, ServiceStatus>>({});
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [polling, setPolling] = useState(true);

  const checkService = async (svc: ServiceCheck): Promise<ServiceStatus> => {
    const t0 = Date.now();
    try {
      const res = await fetch(svc.url, { cache: "no-store", signal: AbortSignal.timeout(5000) });
      const ms = Date.now() - t0;
      let data: Record<string, unknown> = {};
      try {
        const text = await res.text();
        try { data = JSON.parse(text); } catch { data = { raw: text.slice(0, 200) }; }
      } catch {}
      return { id: svc.id, ok: res.ok, latency_ms: ms, data, checked_at: new Date().toISOString() };
    } catch (e) {
      return { id: svc.id, ok: false, error: e instanceof Error ? e.message : String(e), checked_at: new Date().toISOString() };
    }
  };

  const poll = async () => {
    const results = await Promise.all(SERVICES.map(checkService));
    const map: Record<string, ServiceStatus> = {};
    for (const r of results) map[r.id] = r;
    setStatuses(map);
    setLastUpdate(new Date());
  };

  useEffect(() => {
    poll();
    if (!polling) return;
    const id = setInterval(poll, 30000);
    return () => clearInterval(id);
  }, [polling]);

  const allOk = Object.values(statuses).every((s) => s.ok);
  const someDown = Object.values(statuses).some((s) => !s.ok);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 12, height: 12, borderRadius: 6, background: allOk ? GREEN : someDown ? RED : ORANGE, boxShadow: `0 0 12px ${allOk ? GREEN : someDown ? RED : ORANGE}` }} />
          <p style={{ fontSize: 14, fontWeight: 900, margin: 0, color: allOk ? GREEN : someDown ? RED : ORANGE }}>
            {Object.keys(statuses).length === 0 ? "Checking…" : allOk ? "All systems operational" : someDown ? "Degraded — some services down" : "Partial"}
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <p style={{ fontSize: 12, color: `${NAVY}88`, margin: 0 }}>Last update: {lastUpdate.toLocaleTimeString()}</p>
          <button onClick={() => setPolling(!polling)} style={{ padding: "6px 12px", fontSize: 12, background: polling ? GREEN : ORANGE, color: "white", border: "none", borderRadius: 6, fontWeight: 700, cursor: "pointer" }}>
            {polling ? "Auto-refresh ON" : "Paused"}
          </button>
          <button onClick={poll} style={{ padding: "6px 12px", fontSize: 12, background: NAVY, color: GOLD, border: "none", borderRadius: 6, fontWeight: 700, cursor: "pointer" }}>
            Refresh now
          </button>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 16, marginBottom: 32 }}>
        {SERVICES.map((svc) => {
          const s = statuses[svc.id];
          const ok = s?.ok;
          return (
            <article key={svc.id} style={{ background: "white", borderRadius: 14, padding: 20, border: `2px solid ${ok === true ? GREEN : ok === false ? RED : `${NAVY}1a`}` }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 12 }}>
                <span style={{ fontSize: 28 }}>{svc.icon}</span>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 17, fontWeight: 900, margin: 0 }}>{svc.name}</h3>
                  <p style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: `${NAVY}88`, margin: 0 }}>{svc.type}</p>
                </div>
                <div style={{ width: 10, height: 10, borderRadius: 5, background: ok === true ? GREEN : ok === false ? RED : `${NAVY}33` }} />
              </div>
              {s ? (
                <div>
                  {s.latency_ms !== undefined && <p style={{ fontSize: 12, color: `${NAVY}88`, margin: "0 0 4px" }}>Latency: <strong style={{ color: s.latency_ms < 100 ? GREEN : s.latency_ms < 500 ? ORANGE : RED }}>{s.latency_ms}ms</strong></p>}
                  {s.error && <p style={{ fontSize: 12, color: RED, margin: "0 0 4px" }}>Error: {s.error}</p>}
                  {s.data && (
                    <details style={{ marginTop: 8 }}>
                      <summary style={{ fontSize: 11, color: `${NAVY}88`, cursor: "pointer", fontWeight: 700 }}>Response payload</summary>
                      <pre style={{ fontSize: 10, fontFamily: "monospace", background: `${NAVY}0a`, padding: 8, borderRadius: 6, marginTop: 8, overflow: "auto", maxHeight: 200, color: NAVY }}>
                        {JSON.stringify(s.data, null, 2).slice(0, 1000)}
                      </pre>
                    </details>
                  )}
                </div>
              ) : (
                <p style={{ fontSize: 12, color: `${NAVY}88` }}>Polling…</p>
              )}
            </article>
          );
        })}
      </div>

      <section style={{ background: NAVY, color: "white", borderRadius: 14, padding: 32, marginBottom: 32 }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>What these services are</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, marginBottom: 8 }}>🧠 SOV3 substrate</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>The sovereign nervous system. 193 agents, 14,393 memories, agent registry, BFT Council, audit chain, care-validated neural models. The whole empire runs through this.</p>
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, marginBottom: 8 }}>⚡ MEOK_MCP v3.0.0</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>11 trained neural models exposed via 126 REST endpoints. care_validation_nn, threat_detection_nn, creativity_assessment_nn, care_pattern_analyzer. Care-aligned by design.</p>
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, marginBottom: 8 }}>🔗 MEOKBRIDGE mesh</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>Routes inference across m4-local + m2-sidekick + vast-cloud + 5 OpenRouter fallbacks. The "sandwich" — 12M tokens / 57 min was this mesh. 7/8 online now.</p>
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, marginBottom: 8 }}>🧬 Sovereign OLM</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>7 models on M4 (qwen3:0.6b for drafts, meok-sov3 for finals), 7 models on M2 (specialist coders + reasoners). OpenAI-compatible /v1/models.</p>
          </div>
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 900, color: GOLD, marginBottom: 8 }}>🌱 Farm Vision HARVI</h3>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", margin: 0 }}>PWA on :8888 with 5 tabs (General / Livestock / Crops / Infrastructure / Wildlife). Live SOV3 connection. MEOK Smart Agriculture front-end.</p>
          </div>
        </div>
      </section>

      <section style={{ background: "white", borderRadius: 14, padding: 32, border: `1px solid ${NAVY}1a`, textAlign: "center" }}>
        <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 8 }}>Subscribe to status changes</h2>
        <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 16 }}>
          Get a ping when a service goes down. Care-aligned, no spam, no marketing.
        </p>
        <form action="https://buttondown.email/api/emails/embed-subscribe/meok" method="post" target="_blank" style={{ maxWidth: 480, margin: "0 auto", display: "flex", gap: 8 }}>
          <input type="email" name="email" placeholder="you@care-home.uk" required style={{ flex: 1, padding: "12px 16px", fontSize: 14, border: `1px solid ${NAVY}33`, borderRadius: 8, background: "white", color: NAVY }} />
          <button type="submit" style={{ padding: "12px 20px", fontSize: 14, background: GOLD, color: NAVY, border: "none", borderRadius: 8, fontWeight: 900, cursor: "pointer" }}>
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
