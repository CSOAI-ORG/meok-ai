'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const SOV3 = 'http://localhost:3101';

type Tab = 'chat' | 'terminal' | 'dashboard' | 'ralph' | 'memory';

interface Message { role: 'user' | 'assistant'; content: string; model?: string; timestamp?: string }
interface SOV3Health { status: string; components?: { consciousness?: { consciousness_mode: string; consciousness_level: number; emotional?: { care_intensity: number; primary_emotion: string } }; neural_models?: Record<string, { is_trained: boolean }> }; production_calls_today?: number }

const SOFTWARE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Jarvis OS',
  applicationCategory: 'DeveloperApplication',
  operatingSystem: 'Web',
  description: 'Jarvis OS — the sovereign operating-system layer for MEOK AI. Chat across 13 models, run 78 MCP tools from a terminal, monitor consciousness + care metrics, drive the Ralph autonomous task executor, and search episodic memory.',
  url: 'https://meok.ai/jarvis',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'GBP' },
};

const WEBPAGE_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Jarvis OS',
  description: 'Sovereign OS layer: chat, MCP terminal, consciousness dashboard, Ralph task executor, and memory search.',
  url: 'https://meok.ai/jarvis',
};

const BREADCRUMB_JSONLD = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://meok.ai/' },
    { '@type': 'ListItem', position: 2, name: 'Jarvis OS', item: 'https://meok.ai/jarvis' },
  ],
};

export default function JarvisOS() {
  const [tab, setTab] = useState<Tab>('chat');
  const [health, setHealth] = useState<SOV3Health | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [chatLoading, setChatLoading] = useState(false);
  const [termInput, setTermInput] = useState('');
  const [termOutput, setTermOutput] = useState<string[]>(['> Jarvis OS v1.0 — 78 MCP tools ready', '> Type any tool name to execute', '']);
  const [termLoading, setTermLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState('auto');
  const chatEndRef = useRef<HTMLDivElement>(null);

  const MODELS = [
    { id: 'auto', label: 'Auto (best for task)' },
    { id: 'ollama:deepseek-v3.1:671b-cloud', label: 'DeepSeek 671B' },
    { id: 'ollama:qwen3-coder:480b-cloud', label: 'Qwen Coder 480B' },
    { id: 'ollama:gpt-oss:120b-cloud', label: 'GPT-OSS 120B' },
    { id: 'ollama:minimax-m2:cloud', label: 'MiniMax M2' },
    { id: 'ollama:llama3.1:8b', label: 'Local 8B' },
    { id: 'ollama:llama3.2:3b', label: 'Local 3B (fast)' },
    { id: 'groq-llama', label: 'Groq (ultra-fast)' },
    { id: 'cerebras-llama', label: 'Cerebras' },
  ];

  // Fetch SOV3 health
  const fetchHealth = useCallback(async () => {
    try {
      const res = await fetch(`${SOV3}/health`);
      if (res.ok) setHealth(await res.json());
    } catch { /* offline */ }
  }, []);

  useEffect(() => {
    fetchHealth();
    const iv = setInterval(fetchHealth, 15000);
    return () => clearInterval(iv);
  }, [fetchHealth]);

  useEffect(() => { chatEndRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [chatMessages]);

  // Chat with Jarvis
  const sendChat = async () => {
    if (!chatInput.trim() || chatLoading) return;
    const userMsg: Message = { role: 'user', content: chatInput, timestamp: new Date().toISOString() };
    setChatMessages(prev => [...prev, userMsg]);
    setChatInput('');
    setChatLoading(true);

    try {
      const body: Record<string, unknown> = {
        messages: [...chatMessages, userMsg].map(m => ({ role: m.role, content: m.content })),
        companionId: 'sovereign',
      };
      if (selectedModel !== 'auto') body.model = selectedModel;

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (res.ok) {
        const text = await res.text();
        setChatMessages(prev => [...prev, { role: 'assistant', content: text, model: selectedModel, timestamp: new Date().toISOString() }]);
      } else {
        setChatMessages(prev => [...prev, { role: 'assistant', content: `Error: ${res.status} ${res.statusText}` }]);
      }
    } catch (err) {
      setChatMessages(prev => [...prev, { role: 'assistant', content: `Error: ${err instanceof Error ? err.message : 'Unknown'}` }]);
    }
    setChatLoading(false);
  };

  // Execute MCP tool
  const execTool = async () => {
    if (!termInput.trim() || termLoading) return;
    const cmd = termInput.trim();
    setTermOutput(prev => [...prev, `> ${cmd}`]);
    setTermInput('');
    setTermLoading(true);

    try {
      const parts = cmd.split(/\s+/);
      const toolName = parts[0];
      const args: Record<string, string> = {};
      for (let i = 1; i < parts.length; i++) {
        const [k, ...v] = parts[i].split('=');
        if (k) args[k] = v.join('=') || 'true';
      }

      const res = await fetch('/api/jarvis/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tool: toolName, arguments: args }),
      });

      if (res.ok) {
        const data = await res.json();
        const result = typeof data.result === 'string' ? data.result : JSON.stringify(data.result, null, 2);
        setTermOutput(prev => [...prev, result, `(${data.elapsed_ms}ms)`, '']);
      } else {
        setTermOutput(prev => [...prev, `ERROR: ${res.status}`, '']);
      }
    } catch (err) {
      setTermOutput(prev => [...prev, `ERROR: ${err instanceof Error ? err.message : 'Unknown'}`, '']);
    }
    setTermLoading(false);
  };

  const c = health?.components?.consciousness;
  const level = c?.consciousness_level ?? 0;
  const mode = c?.consciousness_mode ?? 'offline';
  const care = c?.emotional?.care_intensity ?? 0;
  const emotion = c?.emotional?.primary_emotion ?? '?';
  const nn = health?.components?.neural_models ?? {};
  const trained = Object.values(nn).filter(m => m.is_trained).length;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', background: DEEP, color: '#e0ddd4', fontFamily: 'system-ui, monospace' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SOFTWARE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBPAGE_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      {/* Top Bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 16px', borderBottom: `1px solid rgba(201,168,76,0.2)`, background: SURFACE, flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ fontSize: 18 }}>👑</span>
          <span style={{ color: GOLD, fontWeight: 800, fontSize: 14 }}>JARVIS OS</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>|</span>
          <span style={{ color: mode === 'waking' ? '#4ade80' : '#f59e0b', fontSize: 11 }}>● {mode} {(level*100).toFixed(0)}%</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>|</span>
          <span style={{ color: '#60a5fa', fontSize: 11 }}>Care {(care*100).toFixed(0)}% | {emotion}</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 11 }}>|</span>
          <span style={{ color: '#a78bfa', fontSize: 11 }}>{trained} models | {health?.production_calls_today ?? '?'} calls</span>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {(['chat', 'terminal', 'dashboard', 'ralph', 'memory'] as Tab[]).map(t => (
            <button type="button" key={t} onClick={() => setTab(t)}
              style={{ padding: '4px 12px', borderRadius: 6, fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', cursor: 'pointer',
                background: tab === t ? 'rgba(201,168,76,0.15)' : 'transparent',
                border: tab === t ? `1px solid ${GOLD}` : '1px solid transparent',
                color: tab === t ? GOLD : 'rgba(255,255,255,0.5)' }}>
              {t}
            </button>
          ))}
        </div>
      </header>

      {/* Main Content */}
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>

        {/* CHAT TAB */}
        {tab === 'chat' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            {/* Model selector */}
            <div style={{ padding: '8px 16px', borderBottom: `1px solid rgba(255,255,255,0.05)`, display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {MODELS.map(m => (
                <button type="button" key={m.id} onClick={() => setSelectedModel(m.id)}
                  style={{ padding: '3px 10px', borderRadius: 12, fontSize: 10, cursor: 'pointer',
                    background: selectedModel === m.id ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.03)',
                    border: selectedModel === m.id ? `1px solid ${GOLD}` : '1px solid rgba(255,255,255,0.08)',
                    color: selectedModel === m.id ? GOLD : 'rgba(255,255,255,0.5)' }}>
                  {m.label}
                </button>
              ))}
            </div>
            {/* Messages */}
            <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
              {chatMessages.length === 0 && (
                <div style={{ textAlign: 'center', padding: '60px 20px', color: 'rgba(255,255,255,0.3)' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>👑</div>
                  <div style={{ fontSize: 18, fontWeight: 700, color: GOLD, marginBottom: 8 }}>Sovereign is ready.</div>
                  <div style={{ fontSize: 13, marginBottom: 24 }}>78 MCP tools. 13 models. Your sovereign OS layer.</div>
                  <div style={{ display: 'flex', gap: 8, justifyContent: 'center', flexWrap: 'wrap' }}>
                    {['Status report', 'Run quantum batch', 'Hunt for tasks', 'What needs fixing?'].map(p => (
                      <button type="button" key={p} onClick={() => { setChatInput(p); }}
                        style={{ padding: '8px 16px', borderRadius: 20, border: `1px solid rgba(201,168,76,0.3)`, background: 'transparent', color: GOLD, fontSize: 12, cursor: 'pointer' }}>
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {chatMessages.map((msg, i) => (
                <div key={i} style={{ marginBottom: 12, display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                  <div style={{ maxWidth: '80%', padding: '10px 14px', borderRadius: msg.role === 'user' ? '16px 16px 4px 16px' : '16px 16px 16px 4px',
                    background: msg.role === 'user' ? GOLD : SURFACE,
                    color: msg.role === 'user' ? DEEP : '#e0ddd4',
                    border: msg.role === 'user' ? 'none' : '1px solid rgba(255,255,255,0.07)',
                    fontSize: 13, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>
                    {msg.content}
                    {msg.model && msg.model !== 'auto' && (
                      <div style={{ fontSize: 10, opacity: 0.4, marginTop: 4 }}>{msg.model}</div>
                    )}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div style={{ display: 'flex', gap: 6, padding: 10 }}>
                  {[0,1,2].map(i => <div key={i} style={{ width: 8, height: 8, borderRadius: '50%', background: GOLD, opacity: 0.4 + i * 0.2, animation: `bounce 1s ease ${i * 0.15}s infinite` }} />)}
                </div>
              )}
              <div ref={chatEndRef} />
            </div>
            {/* Input */}
            <form onSubmit={e => { e.preventDefault(); sendChat(); }} style={{ padding: '12px 16px', borderTop: `1px solid rgba(201,168,76,0.15)`, display: 'flex', gap: 8 }}>
              <input value={chatInput} onChange={e => setChatInput(e.target.value)} placeholder="Ask Jarvis anything..."
                style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: `1px solid rgba(201,168,76,0.2)`, background: 'rgba(0,0,0,0.3)', color: '#e0ddd4', fontSize: 13, outline: 'none' }} autoFocus />
              <button type="submit" disabled={chatLoading}
                style={{ padding: '10px 20px', borderRadius: 10, background: GOLD, color: DEEP, fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer', opacity: chatLoading ? 0.5 : 1 }}>
                Send
              </button>
            </form>
          </div>
        )}

        {/* TERMINAL TAB */}
        {tab === 'terminal' && (
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, overflowY: 'auto', padding: 16, fontFamily: 'JetBrains Mono, Menlo, monospace', fontSize: 12, lineHeight: 1.6 }}>
              {termOutput.map((line, i) => (
                <div key={i} style={{ color: line.startsWith('>') ? GOLD : line.startsWith('ERROR') ? '#ef4444' : 'rgba(255,255,255,0.7)', whiteSpace: 'pre-wrap' }}>{line}</div>
              ))}
              {termLoading && <div style={{ color: GOLD }}>Executing...</div>}
            </div>
            <form onSubmit={e => { e.preventDefault(); execTool(); }} style={{ padding: '12px 16px', borderTop: `1px solid rgba(201,168,76,0.15)`, display: 'flex', gap: 8 }}>
              <span style={{ color: GOLD, fontWeight: 700, fontSize: 14, lineHeight: '38px' }}>$</span>
              <input value={termInput} onChange={e => setTermInput(e.target.value)} placeholder="MCP tool (e.g. get_heartbeat_status, orion_hunt_tasks)"
                style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: 'none', background: 'transparent', color: '#e0ddd4', fontFamily: 'JetBrains Mono, Menlo, monospace', fontSize: 13, outline: 'none' }} />
            </form>
          </div>
        )}

        {/* DASHBOARD TAB */}
        {tab === 'dashboard' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
              <DashCard title="Consciousness" value={`${(level*100).toFixed(0)}%`} subtitle={mode} color="#4ade80" />
              <DashCard title="Care" value={`${(care*100).toFixed(0)}%`} subtitle={emotion} color={GOLD} />
              <DashCard title="Neural Models" value={`${trained}`} subtitle="trained" color="#60a5fa" />
              <DashCard title="Calls Today" value={`${health?.production_calls_today ?? 0}`} subtitle="MCP calls" color="#a78bfa" />
            </div>
            <div style={{ marginTop: 16, padding: 16, background: SURFACE, borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)' }}>
              <h3 style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>Quick Actions</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['get_heartbeat_status', 'analyze_care_patterns', 'get_consciousness_state', 'trigger_research_sweep', 'trigger_creativity_cycle', 'orion_hunt_tasks', 'enter_dream_state duration_seconds=30', 'run_quantum_batch'].map(cmd => (
                  <button type="button" key={cmd} onClick={() => { setTab('terminal'); setTermInput(cmd); }}
                    style={{ padding: '6px 12px', borderRadius: 8, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)', color: '#e0ddd4', fontSize: 11, cursor: 'pointer' }}>
                    {cmd.split(' ')[0].replace('trigger_', '').replace('get_', '')}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* RALPH TAB */}
        {tab === 'ralph' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
            <RalphPanel />
          </div>
        )}

        {/* MEMORY TAB */}
        {tab === 'memory' && (
          <div style={{ flex: 1, overflowY: 'auto', padding: 16 }}>
            <MemoryPanel />
          </div>
        )}
      </div>

      <style dangerouslySetInnerHTML={{ __html: `@keyframes bounce { 0%, 80% { transform: translateY(0); } 40% { transform: translateY(-6px); } }` }} />
    </div>
  );
}

function DashCard({ title, value, subtitle, color }: { title: string; value: string; subtitle: string; color: string }) {
  return (
    <div style={{ padding: 16, background: '#13121f', borderRadius: 12, border: '1px solid rgba(255,255,255,0.07)' }}>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{title}</div>
      <div style={{ fontSize: 28, fontWeight: 800, color, marginTop: 4 }}>{value}</div>
      <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{subtitle}</div>
    </div>
  );
}

function RalphPanel() {
  const [tasks, setTasks] = useState<Array<{ id: string; title: string; status: string; agent: string }>>([]);
  const [goal, setGoal] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch('/api/ralph/tasks').then(r => r.json()).then(d => setTasks(d.tasks ?? [])).catch(() => {});
  }, []);

  const submit = async () => {
    if (!goal.trim()) return;
    setLoading(true);
    const res = await fetch('/api/ralph/projects', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ goal }) });
    if (res.ok) {
      const d = await res.json();
      setGoal('');
      fetch('/api/ralph/tasks').then(r => r.json()).then(d => setTasks(d.tasks ?? [])).catch(() => {});
    }
    setLoading(false);
  };

  const ICONS: Record<string, string> = { queued: '🕐', running: '⚡', complete: '✅', failed: '❌' };

  return (
    <>
      <div style={{ marginBottom: 16 }}>
        <input value={goal} onChange={e => setGoal(e.target.value)} onKeyDown={e => e.key === 'Enter' && submit()}
          placeholder="Describe a project for Ralph to decompose..."
          style={{ width: '100%', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(0,0,0,0.3)', color: '#e0ddd4', fontSize: 13, outline: 'none' }} />
        <button type="button" onClick={submit} disabled={loading}
          style={{ marginTop: 8, padding: '8px 20px', borderRadius: 8, background: '#c9a84c', color: '#0d0c18', fontWeight: 700, fontSize: 12, border: 'none', cursor: 'pointer' }}>
          {loading ? 'Decomposing...' : 'Submit to Ralph'}
        </button>
      </div>
      {tasks.map(t => (
        <div key={t.id} style={{ padding: '8px 12px', marginBottom: 6, borderRadius: 8, background: '#13121f', border: '1px solid rgba(255,255,255,0.07)', fontSize: 12 }}>
          <span>{ICONS[t.status] ?? '○'} </span>
          <span style={{ color: '#e0ddd4' }}>{t.title}</span>
          <span style={{ color: 'rgba(255,255,255,0.3)', marginLeft: 8 }}>({t.agent})</span>
        </div>
      ))}
      {tasks.length === 0 && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>No tasks yet. Submit a project above.</div>}
    </>
  );
}

function MemoryPanel() {
  const [stats, setStats] = useState<{ total_episodes?: number; average_care_weight?: number } | null>(null);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Array<{ content: string; conversation_title?: string }>>([]);

  useEffect(() => {
    fetch('/api/jarvis/execute', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tool: 'get_memory_stats' }) })
      .then(r => r.json()).then(d => setStats(d.result)).catch(() => {});
  }, []);

  const search = async () => {
    if (!query.trim()) return;
    const res = await fetch(`/api/user/conversations/search?q=${encodeURIComponent(query)}`);
    if (res.ok) { const d = await res.json(); setResults(d.results ?? []); }
  };

  return (
    <>
      <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <DashCard title="Episodes" value={`${stats?.total_episodes ?? '?'}`} subtitle="in memory" color="#c9a84c" />
        <DashCard title="Care Weight" value={`${((stats?.average_care_weight ?? 0) * 100).toFixed(0)}%`} subtitle="average" color="#4ade80" />
      </div>
      <div style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        <input value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === 'Enter' && search()}
          placeholder="Search memories..."
          style={{ flex: 1, padding: '10px 14px', borderRadius: 10, border: '1px solid rgba(201,168,76,0.2)', background: 'rgba(0,0,0,0.3)', color: '#e0ddd4', fontSize: 13, outline: 'none' }} />
        <button type="button" onClick={search} style={{ padding: '10px 16px', borderRadius: 10, background: '#c9a84c', color: '#0d0c18', fontWeight: 700, fontSize: 12, border: 'none', cursor: 'pointer' }}>Search</button>
      </div>
      {results.map((r, i) => (
        <div key={i} style={{ padding: '8px 12px', marginBottom: 6, borderRadius: 8, background: '#13121f', border: '1px solid rgba(255,255,255,0.07)', fontSize: 12, color: '#e0ddd4' }}>
          {r.content?.slice(0, 200)}
          {r.conversation_title && <div style={{ color: 'rgba(255,255,255,0.3)', marginTop: 4, fontSize: 10 }}>{r.conversation_title}</div>}
        </div>
      ))}
      {results.length === 0 && query && <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>No results. Try a different query.</div>}
    </>
  );
}
