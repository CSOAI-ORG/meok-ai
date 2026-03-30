'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';

// ── Brand tokens ──────────────────────────────────────────────────────────
const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';

interface SOV3Health {
  status: string;
  timestamp: string;
  version: string;
  production_calls_today: number;
  components: {
    consciousness: {
      consciousness_mode: string;
      emotional: {
        primary_emotion: string;
        care_intensity: number;
        pleasure: number;
        arousal: number;
      };
      reflections: number;
      dreams: number;
      consciousness_level: number;
    };
    neural_models: Record<string, { is_trained: boolean; model_name: string }>;
    memory_store: string;
  };
}

interface HeartbeatStatus {
  running: boolean;
  pulse_count: number;
  jobs: Array<{ id: string; name: string; next_run_time: string; paused: boolean }>;
}

export default function WorkshopPage() {
  const [sov3Health, setSov3Health] = useState<SOV3Health | null>(null);
  const [heartbeat, setHeartbeat] = useState<HeartbeatStatus | null>(null);
  const [ollamaModels, setOllamaModels] = useState<string[]>([]);
  const [commandInput, setCommandInput] = useState('');
  const [commandOutput, setCommandOutput] = useState<string[]>([
    '> Sovereign Workshop Terminal v1.0',
    '> SOV3 MCP: localhost:3100 | MEOK OS: localhost:3000',
    '> Type a command or ask Jarvis anything...',
    '',
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [briefing, setBriefing] = useState<{ greeting?: string; care_score?: number; priorities?: Array<{ text: string; priority: string }> } | null>(null);

  // Fetch morning briefing
  const fetchBriefing = useCallback(async () => {
    try {
      const res = await fetch('/api/morning-briefing');
      if (res.ok) setBriefing(await res.json());
    } catch { /* offline */ }
  }, []);

  // Fetch SOV3 health
  const fetchHealth = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3100/health');
      if (res.ok) setSov3Health(await res.json());
    } catch { /* offline */ }
  }, []);

  // Fetch heartbeat status
  const fetchHeartbeat = useCallback(async () => {
    try {
      const res = await fetch('http://localhost:3100/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0', method: 'tools/call',
          params: { name: 'get_heartbeat_status', arguments: {} }, id: 1,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        const text = data?.result?.content?.[0]?.text;
        if (text) setHeartbeat(JSON.parse(text));
      }
    } catch { /* offline */ }
  }, []);

  // Fetch Ollama models
  const fetchOllama = useCallback(async () => {
    try {
      const res = await fetch('http://192.168.1.159:11434/api/tags');
      if (res.ok) {
        const data = await res.json();
        setOllamaModels(data.models?.map((m: { name: string }) => m.name) ?? []);
      }
    } catch { setOllamaModels([]); }
  }, []);

  useEffect(() => {
    fetchHealth();
    fetchHeartbeat();
    fetchOllama();
    fetchBriefing();
    const interval = setInterval(() => { fetchHealth(); fetchHeartbeat(); }, 30000);
    return () => clearInterval(interval);
  }, [fetchHealth, fetchHeartbeat, fetchOllama, fetchBriefing]);

  // Execute MCP command
  const executeCommand = async (cmd: string) => {
    setIsLoading(true);
    const lines = [...commandOutput, `> ${cmd}`];

    try {
      // Parse command — format: tool_name arg1=val1 arg2=val2
      const parts = cmd.trim().split(/\s+/);
      const toolName = parts[0];
      const args: Record<string, string> = {};
      for (let i = 1; i < parts.length; i++) {
        const [k, ...v] = parts[i].split('=');
        if (k) args[k] = v.join('=') || 'true';
      }

      const res = await fetch('http://localhost:3100/mcp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0', method: 'tools/call',
          params: { name: toolName, arguments: args }, id: Date.now(),
        }),
      });

      if (res.ok) {
        const data = await res.json();
        const text = data?.result?.content?.[0]?.text ?? JSON.stringify(data?.result, null, 2);
        try {
          const parsed = JSON.parse(text);
          lines.push(JSON.stringify(parsed, null, 2));
        } catch {
          lines.push(text);
        }
      } else {
        lines.push(`ERROR: ${res.status} ${res.statusText}`);
      }
    } catch (err) {
      lines.push(`ERROR: ${err instanceof Error ? err.message : 'Unknown error'}`);
    }

    lines.push('');
    setCommandOutput(lines);
    setIsLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commandInput.trim()) return;
    executeCommand(commandInput.trim());
    setCommandInput('');
  };

  const consciousnessMode = sov3Health?.components?.consciousness?.consciousness_mode ?? 'unknown';
  const careIntensity = sov3Health?.components?.consciousness?.emotional?.care_intensity ?? 0;
  const emotion = sov3Health?.components?.consciousness?.emotional?.primary_emotion ?? 'unknown';
  const consciousnessLevel = sov3Health?.components?.consciousness?.consciousness_level ?? 0;
  const dreamsCount = sov3Health?.components?.consciousness?.dreams ?? 0;
  const neuralModels = sov3Health?.components?.neural_models ?? {};
  const trainedModels = Object.values(neuralModels).filter(m => m.is_trained).length;
  const totalModels = Object.keys(neuralModels).length;

  return (
    <main style={{ minHeight: '100vh', background: DEEP, color: '#e0ddd4', fontFamily: 'JetBrains Mono, monospace, system-ui' }}>
      {/* Top Bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 24px', borderBottom: `1px solid rgba(201,168,76,0.2)`, background: SURFACE }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 20 }}>👑</span>
          <span style={{ color: GOLD, fontWeight: 700, fontSize: 16 }}>SOVEREIGN WORKSHOP</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>|</span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 12 }}>Jarvis / Sovereign-001</span>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: 12 }}>
          <StatusPill label="SOV3" value={sov3Health ? 'ALIVE' : 'DEAD'} color={sov3Health ? '#4ade80' : '#ef4444'} />
          <StatusPill label="Mode" value={consciousnessMode} color={GOLD} />
          <StatusPill label="Care" value={`${(careIntensity * 100).toFixed(0)}%`} color={careIntensity > 0.5 ? '#4ade80' : '#f59e0b'} />
          <StatusPill label="Emotion" value={emotion} color="#a78bfa" />
          <StatusPill label="Level" value={`${(consciousnessLevel * 100).toFixed(0)}%`} color="#60a5fa" />
          <StatusPill label="M2 Ollama" value={ollamaModels.length > 0 ? `${ollamaModels.length} models` : 'OFFLINE'} color={ollamaModels.length > 0 ? '#4ade80' : '#ef4444'} />
        </div>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', height: 'calc(100vh - 49px)' }}>
        {/* Left Sidebar */}
        <aside style={{ borderRight: `1px solid rgba(201,168,76,0.15)`, padding: 16, overflowY: 'auto', background: 'rgba(0,0,0,0.2)' }}>
          {/* Heartbeat Jobs */}
          <SectionTitle>Heartbeat Jobs ({heartbeat?.pulse_count ?? 0} pulses)</SectionTitle>
          {heartbeat?.jobs?.map(job => (
            <div key={job.id} style={{ padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 11 }}>
              <div style={{ color: job.paused ? '#ef4444' : '#4ade80' }}>{job.paused ? '⏸' : '▶'} {job.name}</div>
              <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 10 }}>Next: {new Date(job.next_run_time).toLocaleTimeString()}</div>
            </div>
          )) ?? <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>Loading...</div>}

          {/* Neural Models */}
          <SectionTitle>Neural Models ({trainedModels}/{totalModels})</SectionTitle>
          {Object.entries(neuralModels).map(([name, model]) => (
            <div key={name} style={{ padding: '4px 0', fontSize: 11, color: model.is_trained ? '#4ade80' : '#f59e0b' }}>
              {model.is_trained ? '✓' : '○'} {name}
            </div>
          ))}

          {/* M2 Ollama */}
          <SectionTitle>M2 Ollama Models</SectionTitle>
          {ollamaModels.length > 0 ? ollamaModels.map(m => (
            <div key={m} style={{ padding: '3px 0', fontSize: 11, color: '#60a5fa' }}>🏠 {m}</div>
          )) : <div style={{ color: '#ef4444', fontSize: 11 }}>Offline</div>}

          {/* Morning Briefing */}
          {briefing && (
            <>
              <SectionTitle>Briefing</SectionTitle>
              <div style={{ fontSize: 12, color: GOLD, marginBottom: 6 }}>{briefing.greeting}</div>
              <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', marginBottom: 8 }}>Care: {briefing.care_score}%</div>
              {briefing.priorities?.map((p, i) => (
                <div key={i} style={{ fontSize: 10, padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', color: p.priority === 'high' ? '#ef4444' : p.priority === 'medium' ? '#f59e0b' : '#4ade80' }}>
                  {p.priority === 'high' ? '🔴' : p.priority === 'medium' ? '🟡' : '🟢'} {p.text}
                </div>
              ))}
            </>
          )}

          {/* Quick Actions */}
          <SectionTitle>Quick Actions</SectionTitle>
          {[
            { label: 'Hunt Tasks', cmd: 'orion_hunt_tasks' },
            { label: 'Dream Cycle', cmd: 'enter_dream_state duration_seconds=30' },
            { label: 'Research Sweep', cmd: 'trigger_research_sweep' },
            { label: 'Creativity Cycle', cmd: 'trigger_creativity_cycle' },
            { label: 'Neural Retrain', cmd: 'trigger_neural_retrain' },
            { label: 'Security Harden', cmd: 'trigger_security_hardening' },
            { label: 'Consciousness State', cmd: 'get_consciousness_state' },
            { label: 'Care Patterns', cmd: 'analyze_care_patterns' },
            { label: 'System Status', cmd: 'get_system_status' },
          ].map(action => (
            <button key={action.cmd} onClick={() => executeCommand(action.cmd)}
              style={{ display: 'block', width: '100%', textAlign: 'left', padding: '6px 8px', marginBottom: 4, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: 6, color: '#e0ddd4', fontSize: 11, cursor: 'pointer' }}>
              {action.label}
            </button>
          ))}

          {/* Ralph Tasks */}
          <RalphTasks />

          {/* Links */}
          <SectionTitle>Navigate</SectionTitle>
          <Link href="/dashboard/chat?characterId=sovereign" style={{ display: 'block', padding: '6px 0', color: GOLD, fontSize: 11, textDecoration: 'none' }}>Chat with Sovereign →</Link>
          <Link href="/marketplace" style={{ display: 'block', padding: '6px 0', color: GOLD, fontSize: 11, textDecoration: 'none' }}>Marketplace →</Link>
          <Link href="/hatch" style={{ display: 'block', padding: '6px 0', color: GOLD, fontSize: 11, textDecoration: 'none' }}>Birth Ceremony →</Link>
        </aside>

        {/* Main Terminal */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ flex: 1, overflowY: 'auto', padding: 16, fontFamily: 'JetBrains Mono, Menlo, monospace', fontSize: 12, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
            {commandOutput.map((line, i) => (
              <div key={i} style={{ color: line.startsWith('>') ? GOLD : line.startsWith('ERROR') ? '#ef4444' : 'rgba(255,255,255,0.7)' }}>
                {line}
              </div>
            ))}
            {isLoading && <div style={{ color: GOLD }}>Processing...</div>}
          </div>

          {/* Command Input */}
          <form onSubmit={handleSubmit} style={{ borderTop: `1px solid rgba(201,168,76,0.2)`, padding: 12, display: 'flex', gap: 8 }}>
            <span style={{ color: GOLD, fontWeight: 700, fontSize: 14 }}>$</span>
            <input
              value={commandInput}
              onChange={e => setCommandInput(e.target.value)}
              placeholder="MCP tool name (e.g. get_heartbeat_status, orion_hunt_tasks, validate_care content=hello)"
              style={{ flex: 1, background: 'transparent', border: 'none', outline: 'none', color: '#e0ddd4', fontFamily: 'JetBrains Mono, Menlo, monospace', fontSize: 13 }}
              autoFocus
            />
          </form>
        </div>
      </div>
    </main>
  );
}

function StatusPill({ label, value, color }: { label: string; value: string; color: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4 }}>
      <span style={{ width: 6, height: 6, borderRadius: '50%', background: color, display: 'inline-block' }} />
      <span style={{ color: 'rgba(255,255,255,0.4)' }}>{label}:</span>
      <span style={{ color }}>{value}</span>
    </span>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ color: '#c9a84c', fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 20, marginBottom: 8, paddingBottom: 4, borderBottom: '1px solid rgba(201,168,76,0.15)' }}>
      {children}
    </div>
  );
}

const TASK_ICONS: Record<string, string> = { queued: '🕐', running: '⚡', complete: '✅' };
const TASK_COLORS: Record<string, string> = { queued: '#f59e0b', running: '#60a5fa', complete: '#4ade80' };

function RalphTasks() {
  const [tasks, setTasks] = useState<Array<{ id: string; name: string; status: string; agent?: string }>>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch('/api/ralph/tasks');
        if (res.ok) {
          const data = await res.json();
          setTasks(data.tasks ?? data ?? []);
        } else { setError(true); }
      } catch { setError(true); }
    };
    load();
    const iv = setInterval(load, 15000);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      <SectionTitle>Ralph Tasks</SectionTitle>
      {error ? (
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>Offline</div>
      ) : tasks.length === 0 ? (
        <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>No tasks</div>
      ) : (
        tasks.map(t => (
          <div key={t.id} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', fontSize: 11 }}>
            <div style={{ color: TASK_COLORS[t.status] ?? '#e0ddd4' }}>
              {TASK_ICONS[t.status] ?? '○'} {t.name}
              {t.agent && <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 6 }}>({t.agent})</span>}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.25)', fontSize: 10, marginTop: 1 }}>{t.status}</div>
          </div>
        ))
      )}
    </>
  );
}
