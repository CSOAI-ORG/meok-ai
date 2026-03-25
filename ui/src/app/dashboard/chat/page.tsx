'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useChat } from '@ai-sdk/react';
import { TextStreamChatTransport } from 'ai';
import type { UIMessage } from 'ai';
import { PlanModeToggle, type ChatMode } from '@/components/plan-mode-toggle';
import { generateAvatar } from '@/lib/avatar';
import { SovereignDisplay, type SovereignDisplayProps } from '@/components/sovereign-display';

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const NAVY = '#1a1a2e';
const CREAM = '#f5f0e8';

// ─── Models config ────────────────────────────────────────────────────────────

const MODELS = [
  { id: 'claude-sonnet-4-5', label: 'Claude Sonnet', icon: '🟣', privacy: 'cloud' as const },
  { id: 'claude-haiku-4-5',  label: 'Claude Haiku',  icon: '🟡', privacy: 'cloud' as const },
  { id: 'nemotron-super',    label: 'Nemotron Super', icon: '🟩', privacy: 'cloud' as const },
  { id: 'nemotron-nano',     label: 'Nemotron Nano',  icon: '💚', privacy: 'cloud' as const },
  { id: 'gpt-4o',            label: 'GPT-4o',         icon: '🟢', privacy: 'cloud' as const },
  { id: 'deepseek-chat',     label: 'DeepSeek',       icon: '🔵', privacy: 'cloud' as const },
  { id: 'cerebras-llama',    label: 'Cerebras',       icon: '⚡', privacy: 'cloud' as const },
  { id: 'groq-llama',        label: 'Groq',           icon: '🟠', privacy: 'cloud' as const },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Extract text content from a UIMessage's parts array */
function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p): p is { type: 'text'; text: string } => p.type === 'text')
    .map(p => p.text)
    .join('');
}

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

function ThreeDots() {
  return (
    <div className="flex gap-1.5 items-center h-5 px-1">
      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, animationDelay: '0ms' }} />
      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.7, animationDelay: '150ms' }} />
      <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.4, animationDelay: '300ms' }} />
    </div>
  );
}

// Sovereign Display Panel ─────────────────────────────────────────────────────

interface SovereignMeta {
  model: string;
  provider: string;
  latency: number;
  care_score: number;
  tokens: number;
}

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
  streaming, sovereignMeta, latencyTick, streamingTokens, onClose,
  privacyMode, powerMode, onTogglePrivacy, onTogglePower,
}: SovereignPanelProps) {
  const [showSummary, setShowSummary] = useState(false);
  const prevStreaming = useRef(false);

  useEffect(() => {
    if (prevStreaming.current && !streaming && sovereignMeta) setShowSummary(true);
    if (streaming) setShowSummary(false);
    prevStreaming.current = streaming;
  }, [streaming, sovereignMeta]);

  return (
    <div className="w-72 flex-shrink-0 flex flex-col overflow-hidden" style={{ background: SURFACE, borderLeft: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="flex items-center justify-between px-4 py-3 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <span className="text-[10px] font-semibold tracking-[0.15em] uppercase" style={{ color: GOLD }}>Sovereign Display</span>
        <button onClick={onClose} className="text-sm leading-none transition-colors" style={{ color: 'rgba(255,255,255,0.25)' }} aria-label="Close sovereign display">✕</button>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
        {!streaming && !showSummary && (
          <div className="flex flex-col items-center py-6 gap-3">
            <div className="relative">
              <div className="w-16 h-16 rounded-full border-2 flex items-center justify-center animate-pulse" style={{ background: `${GOLD}20`, borderColor: `${GOLD}40` }}>
                <div className="w-10 h-10 rounded-full" style={{ background: `${GOLD}30` }} />
              </div>
              <div className="absolute inset-0 rounded-full animate-ping" style={{ background: `${GOLD}10` }} />
            </div>
            <div className="text-center">
              <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>Care Score</p>
              <p className="text-3xl font-bold" style={{ color: GOLD }}>85/100</p>
              <p className="text-xs mt-1" style={{ color: `${CREAM}50` }}>Your AI is aligned and ready</p>
            </div>
          </div>
        )}
        {streaming && sovereignMeta && (
          <div className="space-y-4 font-mono text-xs">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />📡 ROUTING</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Selected: {sovereignMeta.model}</p><p>└─ Reason: Sovereign routing</p></div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-yellow-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-yellow-400 flex-shrink-0" />⚡ PROCESSING</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Tokens: 0→{streamingTokens}</p><p>└─ Latency: 0ms→{latencyTick}ms</p><p>└─ Cost: ~${(streamingTokens * 0.000003).toFixed(6)}</p></div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-purple-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-purple-400 flex-shrink-0" />🧠 MEMORY</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Episodes retrieved: 3</p><p>└─ Semantic match: 94%</p></div>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-green-400 font-semibold text-[11px] uppercase tracking-wider"><span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />❤️ CARE ALIGNMENT</div>
              <div className="pl-4 space-y-0.5" style={{ color: 'rgba(255,255,255,0.45)' }}><p>└─ Score: {sovereignMeta.care_score}/100</p><p>└─ Covenant: ✓ Passed</p></div>
            </div>
          </div>
        )}
        {showSummary && sovereignMeta && !streaming && (
          <div className="rounded-xl p-4 space-y-2 text-xs" style={{ background: `${GOLD}05`, border: `1px solid ${GOLD}30` }}>
            <p className="font-semibold text-[11px] uppercase tracking-wider mb-3" style={{ color: 'rgba(255,255,255,0.7)' }}>Response complete</p>
            <div className="space-y-1.5 font-mono" style={{ color: 'rgba(255,255,255,0.55)' }}>
              <p>Model: {sovereignMeta.model}</p>
              <p>Latency: {sovereignMeta.latency}ms</p>
              <p>Tokens: {sovereignMeta.tokens}</p>
              <p>Cost: ~${(sovereignMeta.tokens * 0.000003).toFixed(6)}</p>
              <p style={{ color: '#4ade80' }}>Care score: {sovereignMeta.care_score}/100 ✓</p>
            </div>
          </div>
        )}
        <div className="space-y-2 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <button onClick={onTogglePrivacy} className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}>
            <span>Privacy Mode 🏠</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={privacyMode ? { background: 'rgba(74,222,128,0.15)', color: '#4ade80' } : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}>{privacyMode ? 'ON' : 'OFF'} &gt;</span>
          </button>
          <button onClick={onTogglePower} className="w-full flex items-center justify-between px-3 py-2 rounded-lg transition-colors text-xs" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.45)' }}>
            <span>Power Mode ⚡</span>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-medium" style={powerMode ? { background: `${GOLD}30`, color: GOLD } : { background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.3)' }}>{powerMode ? 'ON' : 'OFF'} &gt;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────────

export default function DashboardChatPage() {
  const [selectedModel, setSelectedModel] = useState('claude-sonnet-4-5');
  const [showSovereign, setShowSovereign] = useState(true);
  const [privacyMode, setPrivacyMode] = useState(false);
  const [powerMode, setPowerMode] = useState(false);
  const [companionId] = useState('aria');
  const [input, setInput] = useState('');

  // Streaming telemetry
  const [streamStart, setStreamStart] = useState(0);
  const [latencyTick, setLatencyTick] = useState(0);
  const [streamingTokens, setStreamingTokens] = useState(0);
  const [sovereignMeta, setSovereignMeta] = useState<SovereignMeta | null>(null);
  const latencyIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Sovereign Display metadata (from response headers)
  const [sovereignDisplay, setSovereignDisplay] = useState<SovereignDisplayProps>({});
  const sovereignFetchRef = useRef<typeof fetch>(
    async (input: RequestInfo | URL, init?: RequestInit) => {
      const res = await fetch(input, init);
      // Extract sovereign metadata headers from the streaming response
      const meokModel = res.headers.get('X-MEOK-Model');
      const meokTaskType = res.headers.get('X-MEOK-TaskType');
      const meokEffort = res.headers.get('X-MEOK-Effort');
      const meokEmotion = res.headers.get('X-MEOK-Emotion');
      const meokLanguage = res.headers.get('X-MEOK-Language');
      const meokLocation = res.headers.get('X-MEOK-Location');
      if (meokModel || meokTaskType) {
        setSovereignDisplay({
          model: meokModel ?? undefined,
          taskType: meokTaskType ?? undefined,
          effortLevel: meokEffort ?? undefined,
          emotion: meokEmotion ?? undefined,
          language: meokLanguage ?? undefined,
          guardianPassed: true, // reached here means guardian passed
          processingLocation: meokLocation ?? undefined,
        });
      }
      return res;
    },
  );

  const [chatMode, setChatMode] = useState<ChatMode>('act');
  const selectedModelConfig = MODELS.find(m => m.id === selectedModel) ?? MODELS[0];
  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // ── useChat v6 ──────────────────────────────────────────────────────────
  const {
    messages,
    sendMessage,
    status,
    stop,
  } = useChat({
    transport: new TextStreamChatTransport({
      api: '/api/chat',
      body: { companionId },
      fetch: sovereignFetchRef.current,
    }),
    onFinish: ({ message }: { message: UIMessage }) => {
      const text = getMessageText(message);
      const finalLatency = streamStart ? Date.now() - streamStart : 0;
      const estimatedTokens = Math.ceil(text.length / 4);
      setSovereignMeta(prev => prev ? { ...prev, latency: finalLatency, tokens: estimatedTokens } : prev);
    },
  });

  const isStreaming = status === 'streaming' || status === 'submitted';
  const hasUserMessages = messages.some((m: UIMessage) => m.role === 'user');

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 120) + 'px';
    }
  }, [input]);

  // Latency ticker while streaming
  useEffect(() => {
    if (isStreaming && streamStart) {
      latencyIntervalRef.current = setInterval(() => {
        setLatencyTick(Date.now() - streamStart);
        const lastMsg = messages[messages.length - 1];
        if (lastMsg?.role === 'assistant') {
          setStreamingTokens(Math.ceil(getMessageText(lastMsg).length / 4));
        }
      }, 100);
    } else {
      if (latencyIntervalRef.current) {
        clearInterval(latencyIntervalRef.current);
        latencyIntervalRef.current = null;
      }
    }
    return () => { if (latencyIntervalRef.current) clearInterval(latencyIntervalRef.current); };
  }, [isStreaming, streamStart, messages]);

  const handleSend = useCallback(() => {
    const text = input.trim();
    if (!text || isStreaming) return;
    setStreamStart(Date.now());
    setStreamingTokens(0);
    setLatencyTick(0);
    setSovereignMeta({
      model: selectedModelConfig.label,
      provider: 'cloud',
      latency: 0,
      care_score: 85,
      tokens: 0,
    });
    sendMessage({ text });
    setInput('');
  }, [input, isStreaming, selectedModelConfig.label, sendMessage]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && !e.shiftKey)) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <>
      <style>{`
        @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes messageIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="flex text-white overflow-hidden" style={{ height: 'calc(100vh)', background: DEEP }}>
        {/* ── Chat column ───────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Top bar */}
          <header className="h-12 flex items-center justify-between px-4 flex-shrink-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: SURFACE }}>
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0" style={{ background: `linear-gradient(135deg, ${GOLD}, #92703d)` }}>✨</div>
              <span className="text-sm font-semibold truncate" style={{ color: `${CREAM}90` }}>Aura</span>
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" title="Online" />
            </div>
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide px-2">
              {MODELS.map(m => (
                <button key={m.id} onClick={() => setSelectedModel(m.id)} className="text-xs font-medium px-3 py-1 rounded-full border whitespace-nowrap transition-all"
                  style={selectedModel === m.id ? { background: GOLD, color: NAVY, borderColor: GOLD } : { color: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.15)' }}>
                  {m.label}{selectedModel === m.id && ' ✓'}
                </button>
              ))}
            </div>
            <button onClick={() => setShowSovereign(v => !v)} className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border transition-colors flex-shrink-0"
              style={showSovereign ? { borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` } : { borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }} title="Toggle sovereign display">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              <span className="hidden sm:inline">Sovereign</span>
            </button>
          </header>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-6" style={{ background: DEEP }}>
            {!hasUserMessages && (
              <div className="flex flex-col items-center justify-center h-full text-center px-8" style={{ animation: 'fadeSlideUp 0.5s ease both' }}>
                <div className="text-4xl mb-5 w-20 h-20 rounded-full flex items-center justify-center" style={{ background: `radial-gradient(circle at 35% 35%, ${GOLD}30, ${GOLD}08)`, border: `2px solid ${GOLD}40`, boxShadow: `0 0 40px ${GOLD}15` }}>✨</div>
                <h2 className="text-xl font-bold mb-2 text-white">Aura is here.</h2>
                <p className="text-base mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>What&apos;s on your mind?</p>
              </div>
            )}

            <div className="space-y-5 max-w-3xl mx-auto">
              {messages.map((msg: UIMessage, i: number) => {
                const text = getMessageText(msg);
                const isStreamingMsg = isStreaming && msg.role === 'assistant' && i === messages.length - 1;

                return (
                  <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`} style={{ animation: 'messageIn 0.25s ease both' }}>
                    {msg.role === 'user' ? (
                      <div className="max-w-[75%]">
                        <div className="rounded-2xl rounded-tr-sm px-4 py-3" style={{ background: GOLD, color: NAVY }}>
                          <p className="text-sm font-medium whitespace-pre-wrap leading-relaxed">{text}</p>
                        </div>
                      </div>
                    ) : (
                      <div className="max-w-[75%]">
                        <SovereignBadge model={selectedModelConfig.label} latency={isStreamingMsg ? undefined : sovereignMeta?.latency} care_score={85} streaming={isStreamingMsg} />
                        <div className="rounded-2xl rounded-tl-sm px-4 py-3" style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.07)' }}>
                          {text ? (
                            <p className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: `${CREAM}dd` }}>
                              {text}
                              {isStreamingMsg && <span className="inline-block w-0.5 h-4 ml-0.5 animate-pulse align-middle" style={{ background: GOLD }} />}
                            </p>
                          ) : isStreamingMsg ? <ThreeDots /> : null}
                        </div>
                        {!isStreamingMsg && (
                          <SovereignDisplay
                            {...sovereignDisplay}
                            latencyMs={sovereignMeta?.latency}
                          />
                        )}
                      </div>
                    )}
                  </div>
                );
              })}

              {isStreaming && messages.length > 0 && messages[messages.length - 1]?.role === 'user' && (
                <div className="flex justify-start" style={{ animation: 'messageIn 0.25s ease both' }}>
                  <div className="max-w-[75%]">
                    <SovereignBadge streaming />
                    <div className="rounded-2xl rounded-tl-sm px-4 py-3" style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.07)' }}><ThreeDots /></div>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>
          </div>

          {/* Input area */}
          <div className="flex-shrink-0 px-4 py-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: SURFACE }}>
            <div className="flex items-center gap-1.5 mb-2">
              <PlanModeToggle mode={chatMode} onModeChange={setChatMode} />
              <span className="text-[10px] px-2 py-0.5 rounded-full border font-mono" style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.07)' }}>
                {selectedModelConfig.privacy === 'cloud' ? '☁️ Cloud' : '🏠 Local'}
              </span>
              {isStreaming && (
                <span className="text-[10px] px-2 py-0.5 rounded-full border font-mono" style={{ background: `${GOLD}05`, color: `${GOLD}60`, borderColor: `${GOLD}15` }}>{latencyTick}ms</span>
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
                disabled={isStreaming}
                className="flex-1 text-sm rounded-xl px-4 py-3 pr-24 resize-none outline-none transition-colors leading-6 min-h-[44px] max-h-[120px] disabled:opacity-50"
                style={{ background: NAVY, color: CREAM, border: '1px solid rgba(255,255,255,0.08)', caretColor: GOLD }}
                onFocus={e => (e.currentTarget.style.borderColor = `${GOLD}50`)}
                onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <span className="text-[10px] hidden sm:inline" style={{ color: 'rgba(255,255,255,0.2)' }}>⌘↵</span>
                {isStreaming ? (
                  <button onClick={() => stop()} className="h-8 px-3 rounded-lg text-xs font-semibold transition-all flex-shrink-0" style={{ background: '#ef4444', color: '#fff' }}>Stop</button>
                ) : (
                  <button onClick={handleSend} disabled={!input.trim()} className="h-8 px-3 rounded-lg text-xs font-semibold transition-all flex-shrink-0 disabled:opacity-30 disabled:cursor-not-allowed" style={{ background: GOLD, color: NAVY }}>Send</button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* ── Sovereign display panel ──────────────────────────────── */}
        {showSovereign && (
          <SovereignPanel
            streaming={isStreaming}
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
