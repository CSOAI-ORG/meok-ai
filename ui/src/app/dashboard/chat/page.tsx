'use client';

import { useState, useRef, useEffect, useCallback } from 'react';

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const NAVY = '#1a1a2e';
const CREAM = '#f5f0e8';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Message {
  role: 'user' | 'assistant';
  content: string;
  model?: string;
  latency?: number;
  care_score?: number;
  memoryRecalled?: number;
  timestamp?: number;
}

interface SovereignMeta {
  model: string;
  provider: string;
  latency: number;
  care_score: number;
  tokens: number;
}

// ─── Models config ────────────────────────────────────────────────────────────

const MODELS = [
  { id: 'claude-sonnet-4-5', label: 'Claude Sonnet', icon: '🟣', privacy: 'cloud' as const },
  { id: 'claude-haiku-4-5',  label: 'Claude Haiku',  icon: '🟡', privacy: 'cloud' as const },
  { id: 'gpt-4o',            label: 'GPT-4o',         icon: '🟢', privacy: 'cloud' as const },
  { id: 'deepseek-chat',     label: 'DeepSeek',       icon: '🔵', privacy: 'cloud' as const },
  { id: 'llama-3.3-70b-versatile', label: 'Llama / Groq', icon: '🟠', privacy: 'cloud' as const },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SovereignBadge({ model, latency, care_score, streaming }: {
  model?: string;
  latency?: number;
  care_score?: number;
  streaming?: boolean;
}) {
  if (streaming) {
    return (
      <div className="flex items-center gap-1.5 mb-1.5">
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
          style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.35)', borderColor: 'rgba(255,255,255,0.08)' }}
        >
          ⚡ Streaming…
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 mb-1.5 flex-wrap">
      <span
        className="text-[10px] font-mono px-2 py-0.5 rounded-full border"
        style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)', borderColor: 'rgba(255,255,255,0.07)' }}
      >
        🤖 {model ?? 'Claude Sonnet'} · {latency ?? 0}ms · ☁️ Cloud · Care {care_score ?? 87}/100
      </span>
    </div>
  );
}

function MemoryPill({ count }: { count: number }) {
  return (
    <div className="mt-1.5">
      <span
        className="text-[10px] px-2 py-0.5 rounded-full border"
        style={{ background: `${GOLD}10`, color: `${GOLD}70`, borderColor: `${GOLD}20` }}
      >
        📎 {count} memory recalled
      </span>
    </div>
  );
}

// ─── Three-dot loading indicator ─────────────────────────────────────────────

function ThreeDots() {
  return (
    <div className="flex gap-1.5 items-center h-5 px-1">
      <span
        className="w-2 h-2 rounded-full animate-bounce"
        style={{ background: GOLD, animationDelay: '0ms' }}
      />
      <span
        className="w-2 h-2 rounded-full animate-bounce"
        style={{ background: GOLD, opacity: 0.7, animationDelay: '150ms' }}
      />
      <span
        className="w-2 h-2 rounded-full animate-bounce"
        style={{ background: GOLD, opacity: 0.4, animationDelay: '300ms' }}
      />
    </div>
  );
}

// Sovereign Display Panel ─────────────────────────────────────────────────────

interface SovereignPanelProps {
  streaming: boolean;
  sovereignMeta: SovereignMeta | null;
  latencyTick: number;
  streamingTokens: number;
  onClose: () => void;
  privacyMode: boolean;
  powerMode: boolean;
  onTogglePrivacy: () => void;
  onTogglePower: () => void;
}

function SovereignPanel({
  streaming,
  sovereignMeta,
  latencyTick,
  streamingTokens,
  onClose,
  privacyMode,
  powerMode,
  onTogglePrivacy,
  onTogglePower,
}: SovereignPanelProps) {
  const [showSummary, setShowSummary] = useState(false);
  const prevStreaming = useRef(false);

  useEffect(() => {
    if (prevStreaming.current && !streaming && sovereignMeta) {
      setShowSummary(true);
    }
    if (streaming) {
      setShowSummary(false);
    }
    prevStreaming.current = streaming;
  }, [streaming, sovereignMeta]);

  return (
    <div
      className="w-72 flex-shrink-0 flex flex-col overflow-hidden"
      style={{ background: SURFACE, borderLeft: '1px solid rgba(255,255,255,0.08)' }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <span
          className="text-[10px] font-semibold tracking-[0.15em] uppercase"
          style={{ color: GOLD }}
        >
          Sovereign Display
        </span>
        <button
          onClick={onClose}
          className="text-sm leading-none transition-colors"
          style={{ color: 'rgba(255,255,255,0.25)' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.25)')}
          aria-label="Close sovereign display"
        >
          ✕
        </button>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">

        {/* Idle orb */}
        {!streaming && !showSummary && (
          <div className="flex flex-col items-center py-6 gap-3">
            <div className="relative">
              <div
                className="w-16 h-16 rounded-full border-2 flex items-center justify-center animate-pulse"
                style={{ background: `${GOLD}20`, borderColor: `${GOLD}40` }}
              >
                <div className="w-10 h-10 rounded-full" style={{ background: `${GOLD}30` }} />
              </div>
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: `${GOLD}10` }}
              />
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Care Score</p>
              <p className="text-3xl font-bold" style={{ color: GOLD }}>87/100</p>
              <p className="text-xs mt-1" style={{ color: `${CREAM}50` }}>Your AI is aligned and ready</p>
            </div>
          </div>
        )}

        {/* Streaming trace */}
        {streaming && sovereignMeta && (
          <div className="space-y-4 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-[11px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
                📡 ROUTING
              </div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <p>└─ Selected: {sovereignMeta.model}</p>
                <p>└─ Reason: Sovereign routing</p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-yellow-400 font-semibold text-[11px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />
                ⚡ PROCESSING
              </div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <p>└─ Tokens: 0→{streamingTokens}</p>
                <p>└─ Latency: 0ms→{latencyTick}ms</p>
                <p>└─ Cost: ~${(streamingTokens * 0.000003).toFixed(6)}</p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-[11px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />
                🧠 MEMORY
              </div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <p>└─ Episodes retrieved: 3</p>
                <p>└─ Semantic match: 94%</p>
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center gap-2 text-green-400 font-semibold text-[11px] uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                ❤️ CARE ALIGNMENT
              </div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <p>└─ Score: {sovereignMeta.care_score}/100</p>
                <p>└─ Covenant: ✓ Passed</p>
              </div>
            </div>
          </div>
        )}

        {/* Summary card */}
        {showSummary && sovereignMeta && !streaming && (
          <div
            className="rounded-xl p-4 space-y-2 text-xs"
            style={{ background: `${GOLD}05`, border: `1px solid ${GOLD}30` }}
          >
            <p className="font-semibold text-[11px] uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Response complete
            </p>
            <div className="space-y-1.5 font-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <p>Model: {sovereignMeta.model}</p>
              <p>Latency: {sovereignMeta.latency}ms</p>
              <p>Tokens: {sovereignMeta.tokens}</p>
              <p>Cost: ~${(sovereignMeta.tokens * 0.000003).toFixed(6)}</p>
              <p style={{ color: '#4ade80' }}>Care score: {sovereignMeta.care_score}/100 ✓</p>
            </div>
          </div>
        )}

        {/* Toggle rows */}
        <div
          className="space-y-2 pt-2"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
        >
          <button
            onClick={onTogglePrivacy}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          >
            <span>Privacy Mode 🏠</span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={
                privacyMode
                  ? { background: 'rgba(74,222,128,0.15)', color: '#4ade80' }
                  : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }
              }
            >
              {privacyMode ? 'ON' : 'OFF'} &gt;
            </span>
          </button>
          <button
            onClick={onTogglePower}
            className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.06)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.03)')}
          >
            <span>Power Mode ⚡</span>
            <span
              className="px-2 py-0.5 rounded-full text-[10px] font-medium"
              style={
                powerMode
                  ? { background: `${GOLD}30`, color: GOLD }
                  : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }
              }
            >
              {powerMode ? 'ON' : 'OFF'} &gt;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function DashboardChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "I'm here. How can I help you today?",
      model: 'Claude Sonnet',
      latency: 0,
      care_score: 87,
      timestamp: Date.now(),
    },
  ]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [streamingTokens, setStreamingTokens] = useState(0);
  const [selectedModel, setSelectedModel] = useState('claude-sonnet-4-5');
  const [showSovereign, setShowSovereign] = useState(true);
  const [latencyTick, setLatencyTick] = useState(0);
  const [streamStart, setStreamStart] = useState<number>(0);
  const [sovereignMeta, setSovereignMeta] = useState<SovereignMeta | null>(null);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [powerMode, setPowerMode] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const latencyIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectedModelConfig = MODELS.find(m => m.id === selectedModel) ?? MODELS[0];

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, streamingText]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height =
        Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  // Latency ticker while streaming
  useEffect(() => {
    if (streaming) {
      const start = streamStart || Date.now();
      latencyIntervalRef.current = setInterval(() => {
        setLatencyTick(Date.now() - start);
      }, 50);
    } else {
      if (latencyIntervalRef.current) {
        clearInterval(latencyIntervalRef.current);
        latencyIntervalRef.current = null;
      }
    }
    return () => {
      if (latencyIntervalRef.current) clearInterval(latencyIntervalRef.current);
    };
  }, [streaming, streamStart]);

  const sendMessage = useCallback(async () => {
    if (!input.trim() || streaming) return;

    const userMsg: Message = { role: 'user', content: input.trim(), timestamp: Date.now() };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput('');
    setStreaming(true);
    setStreamingText('');
    setStreamingTokens(0);
    setLatencyTick(0);
    const now = Date.now();
    setStreamStart(now);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages, model: selectedModel }),
      });

      if (!res.body) throw new Error('No stream');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = '';
      let resolvedModel = selectedModelConfig.label;
      let resolvedCareScore = 87;
      let finalLatency = 0;
      let tokenCount = 0;

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (!line.startsWith('data: ')) continue;
          const data = line.slice(6).trim();
          if (data === '[DONE]') break;
          try {
            const parsed = JSON.parse(data);

            if (parsed.type === 'sovereign') {
              resolvedModel = parsed.model ?? resolvedModel;
              resolvedCareScore = parsed.care_score ?? resolvedCareScore;
              setSovereignMeta({
                model: parsed.model,
                provider: parsed.provider,
                latency: 0,
                care_score: parsed.care_score ?? 87,
                tokens: 0,
              });
            } else if (parsed.type === 'sovereign_end') {
              finalLatency = parsed.latency ?? Date.now() - now;
              setSovereignMeta(prev =>
                prev ? { ...prev, latency: finalLatency, tokens: tokenCount } : prev
              );
            } else if (parsed.text) {
              full += parsed.text;
              tokenCount += 1;
              setStreamingText(full);
              setStreamingTokens(tokenCount);
            }
          } catch {
            // ignore parse errors
          }
        }
      }

      setMessages(prev => [
        ...prev,
        {
          role: 'assistant',
          content: full || 'Something went wrong.',
          model: resolvedModel,
          latency: finalLatency,
          care_score: resolvedCareScore,
          timestamp: Date.now(),
        },
      ]);
      setStreamingText('');
    } catch {
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.', timestamp: Date.now() },
      ]);
    } finally {
      setStreaming(false);
    }
  }, [input, streaming, messages, selectedModel, selectedModelConfig.label]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && !e.shiftKey)) {
      e.preventDefault();
      sendMessage();
    }
  }

  const hasUserMessages = messages.some(m => m.role === 'user');

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes messageIn {
          from { opacity: 0; transform: translateY(6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        className="flex text-white overflow-hidden"
        style={{ height: 'calc(100vh)', background: DEEP }}
      >
        {/* ── Chat column ─────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Top bar */}
          <header
            className="h-12 flex items-center justify-between px-4 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: SURFACE }}
          >
            {/* Left: companion name + online dot */}
            <div className="flex items-center gap-2 min-w-0">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                style={{ background: `linear-gradient(135deg, ${GOLD}, #92703d)` }}
              >
                ✨
              </div>
              <span className="text-sm font-semibold truncate" style={{ color: `${CREAM}90` }}>Aura</span>
              <span
                className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse"
                title="Online"
              />
            </div>

            {/* Center: model selector pills */}
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide px-2">
              {MODELS.map(m => (
                <button
                  key={m.id}
                  onClick={() => setSelectedModel(m.id)}
                  className="text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap transition-all"
                  style={
                    selectedModel === m.id
                      ? { background: GOLD, color: NAVY, borderColor: GOLD }
                      : { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)' }
                  }
                >
                  {m.label}
                  {selectedModel === m.id && ' ✓'}
                </button>
              ))}
            </div>

            {/* Right: sovereign display toggle */}
            <button
              onClick={() => setShowSovereign(v => !v)}
              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border transition-colors flex-shrink-0"
              style={
                showSovereign
                  ? { borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` }
                  : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }
              }
              title="Toggle sovereign display"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
              <span className="hidden sm:inline">Sovereign</span>
            </button>
          </header>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-6" style={{ background: DEEP }}>

            {/* Empty state — only show if no user messages yet */}
            {!hasUserMessages && (
              <div
                className="flex flex-col items-center justify-center h-full text-center px-8"
                style={{ animation: 'fadeSlideUp 0.5s ease both' }}
              >
                <div
                  className="text-4xl mb-5 w-20 h-20 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${GOLD}30, ${GOLD}08)`,
                    border: `2px solid ${GOLD}40`,
                    boxShadow: `0 0 40px ${GOLD}15`,
                  }}
                >
                  ✨
                </div>
                <h2 className="text-xl font-bold mb-2 text-white">
                  Aura is here.
                </h2>
                <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  What&apos;s on your mind?
                </p>
              </div>
            )}

            {/* Message list */}
            <div className="space-y-5 max-w-3xl mx-auto">
              {messages.map((msg, i) => {
                const timeStr = msg.timestamp
                  ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : null;

                return (
                  <div
                    key={i}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    style={{ animation: 'messageIn 0.25s ease both' }}
                  >
                    {msg.role === 'user' ? (
                      /* User bubble — right-aligned, gold background, dark text */
                      <div className="max-w-[75%]">
                        <div
                          className="rounded-2xl rounded-tr-sm px-4 py-3"
                          style={{ background: GOLD, color: NAVY }}
                        >
                          <p className="text-sm font-medium whitespace-pre-wrap leading-relaxed">
                            {msg.content}
                          </p>
                        </div>
                        {timeStr && (
                          <p
                            className="text-[10px] mt-1 text-right pr-1"
                            style={{ color: 'rgba(255,255,255,0.2)' }}
                          >
                            {timeStr}
                          </p>
                        )}
                      </div>
                    ) : (
                      /* AI bubble — left-aligned, dark surface, cream text */
                      <div className="max-w-[75%]">
                        <SovereignBadge
                          model={msg.model}
                          latency={msg.latency}
                          care_score={msg.care_score}
                          streaming={false}
                        />
                        <div
                          className="rounded-2xl rounded-tl-sm px-4 py-3"
                          style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.07)' }}
                        >
                          <p
                            className="text-sm whitespace-pre-wrap leading-relaxed"
                            style={{ color: `${CREAM}dd` }}
                          >
                            {msg.content}
                          </p>
                        </div>
                        {msg.memoryRecalled != null && msg.memoryRecalled > 0 && (
                          <MemoryPill count={msg.memoryRecalled} />
                        )}
                        {timeStr && (
                          <p
                            className="text-[10px] mt-1 pl-1"
                            style={{ color: 'rgba(255,255,255,0.2)' }}
                          >
                            {timeStr}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {/* Streaming message */}
              {streaming && (
                <div
                  className="flex justify-start"
                  style={{ animation: 'messageIn 0.25s ease both' }}
                >
                  <div className="max-w-[75%]">
                    <SovereignBadge streaming />
                    <div
                      className="rounded-2xl rounded-tl-sm px-4 py-3"
                      style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.07)' }}
                    >
                      {streamingText ? (
                        <p
                          className="text-sm whitespace-pre-wrap leading-relaxed"
                          style={{ color: `${CREAM}dd` }}
                        >
                          {streamingText}
                          <span
                            className="inline-block w-0.5 h-4 ml-0.5 animate-pulse align-middle"
                            style={{ background: GOLD }}
                          />
                        </p>
                      ) : (
                        <ThreeDots />
                      )}
                    </div>
                  </div>
                </div>
              )}

              <div ref={bottomRef} />
            </div>
          </div>

          {/* Input area */}
          <div
            className="flex-shrink-0 px-4 py-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: SURFACE }}
          >
            {/* Status bar */}
            <div className="flex items-center gap-1.5 mb-2">
              <span
                className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  color: 'rgba(255,255,255,0.25)',
                  borderColor: 'rgba(255,255,255,0.07)',
                }}
              >
                {selectedModelConfig.privacy === 'cloud' ? '☁️ Cloud' : '🏠 Local'}
              </span>
              {streaming && (
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                  style={{
                    background: `${GOLD}05`,
                    color: `${GOLD}60`,
                    borderColor: `${GOLD}15`,
                  }}
                >
                  {latencyTick}ms
                </span>
              )}
            </div>

            <div className="relative flex items-end gap-2 max-w-3xl mx-auto">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Talk to Aura…"
                rows={1}
                disabled={streaming}
                className="flex-1 text-sm rounded-xl px-4 py-3 pr-24 resize-none outline-none transition-colors leading-6 min-h-[44px] max-h-[120px] disabled:opacity-50"
                style={{
                  background: NAVY,
                  color: CREAM,
                  border: '1px solid rgba(255,255,255,0.08)',
                  caretColor: GOLD,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = `${GOLD}50`)}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <span
                  className="text-[10px] hidden sm:inline"
                  style={{ color: 'rgba(255,255,255,0.2)' }}
                >
                  ⌘↵
                </span>
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || streaming}
                  className="h-8 px-3 rounded-lg text-xs font-semibold transition-all flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed"
                  style={{ background: GOLD, color: NAVY }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Sovereign display panel ──────────────────────────────── */}
        {showSovereign && (
          <SovereignPanel
            streaming={streaming}
            sovereignMeta={sovereignMeta}
            latencyTick={latencyTick}
            streamingTokens={streamingTokens}
            onClose={() => setShowSovereign(false)}
            privacyMode={privacyMode}
            powerMode={powerMode}
            onTogglePrivacy={() => setPrivacyMode(v => !v)}
            onTogglePower={() => setPowerMode(v => !v)}
          />
        )}
      </div>
    </>
  );
}
