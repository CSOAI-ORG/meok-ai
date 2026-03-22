'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useAuth } from '@/lib/auth';
import { CHARACTERS, getCharacterBySlug } from '@/data/characters';
import { callTool } from '@/lib/api';
import type { MemoryEpisode } from '@/lib/types';

// ─── Brand tokens ───────────────────────────────────────────────────────────
const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const NAVY = '#1a1a2e';
const CREAM = '#f5f0e8';

// ─── Types ─────────────────────────────────────────────────────────────────

interface Message {
  role: 'user' | 'assistant';
  content: string;
  model?: string;
  latency?: number;
  care_score?: number;
  timestamp?: number;
}

interface SovereignMeta {
  model: string;
  provider: string;
  latency: number;
  care_score: number;
  tokens: number;
}

// ─── Models ────────────────────────────────────────────────────────────────

const MODELS = [
  { id: 'claude-sonnet-4-5', label: 'Claude Sonnet', icon: '🟣' },
  { id: 'claude-haiku-4-5',  label: 'Claude Haiku',  icon: '🟡' },
  { id: 'gpt-4o',            label: 'GPT-4o',         icon: '🟢' },
  { id: 'deepseek-chat',     label: 'DeepSeek',       icon: '🔵' },
  { id: 'llama-3.3-70b-versatile', label: 'Llama',   icon: '🟠' },
];

// ─── Helpers ───────────────────────────────────────────────────────────────

function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return 'morning';
  if (h < 18) return 'afternoon';
  return 'evening';
}

function getMood(messages: Message[], careScore: number): { label: string; color: string } {
  const hour = new Date().getHours();
  const recentCount = messages.filter(
    (m) => m.role === 'user' && Date.now() - 0 < 600000
  ).length;

  if (careScore > 85) return { label: 'Aligned', color: GOLD };
  if (recentCount > 5) return { label: 'Engaged', color: '#7BC47F' };
  if (hour >= 22 || hour < 6) return { label: 'Reflective', color: '#A78BFA' };
  if (hour >= 9 && hour < 17) return { label: 'Focused', color: '#60a5fa' };
  return { label: 'Calm', color: '#94a3b8' };
}

function getEvolutionStage(conversations: number, stages: { stage: number; name: string; description: string; unlockedAt: number; traits: string[] }[]) {
  let current = stages[0];
  for (const s of stages) {
    if (conversations >= s.unlockedAt) current = s;
  }
  const next = stages.find((s) => s.unlockedAt > conversations) ?? null;
  const progressToNext = next
    ? (conversations - current.unlockedAt) / (next.unlockedAt - current.unlockedAt)
    : 1;
  return { current, next, progressToNext };
}

// ─── Care alignment radial gauge ───────────────────────────────────────────

function CareAlignmentGauge({ score, color }: { score: number; color: string }) {
  const pct = Math.min(100, Math.max(0, score));
  const radius = 28;
  const circumference = 2 * Math.PI * radius;
  // Only use 75% of circle (270°) for gauge feel
  const arc = circumference * 0.75;
  const dashOffset = arc - (pct / 100) * arc;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative w-20 h-20 flex items-center justify-center">
        <svg className="absolute inset-0" width="80" height="80" viewBox="0 0 80 80"
          style={{ transform: 'rotate(135deg)' }}>
          <circle
            cx="40" cy="40" r={radius}
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="5"
            strokeDasharray={`${arc} ${circumference}`}
            strokeLinecap="round"
          />
          <circle
            cx="40" cy="40" r={radius}
            fill="none"
            stroke={color}
            strokeWidth="5"
            strokeDasharray={`${arc} ${circumference}`}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
            style={{ transition: 'stroke-dashoffset 1s ease' }}
          />
        </svg>
        <div className="flex flex-col items-center z-10">
          <span className="text-lg font-black leading-none" style={{ color }}>{pct}</span>
          <span className="text-[8px] uppercase tracking-widest mt-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>care</span>
        </div>
      </div>
    </div>
  );
}

// ─── Sub-components ────────────────────────────────────────────────────────

function SovereignBadge({ model, latency, care_score, streaming }: {
  model?: string; latency?: number; care_score?: number; streaming?: boolean;
}) {
  if (streaming) {
    return (
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-[10px] text-white/40 font-mono bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
          ⚡ Streaming…
        </span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-1.5 mb-1 flex-wrap">
      <span className="text-[10px] text-white/40 font-mono bg-white/5 px-2 py-0.5 rounded-full border border-white/10">
        🤖 {model ?? 'Claude Sonnet'} · {latency ?? 0}ms · Care {care_score ?? 87}/100
      </span>
    </div>
  );
}

// ─── Companion Profile Panel ───────────────────────────────────────────────

interface CompanionPanelProps {
  characterSlug: string;
  messages: Message[];
  memories: MemoryEpisode[];
  memoriesLoading: boolean;
  careScore: number;
  conversationCount: number;
}

function CompanionPanel({
  characterSlug,
  messages,
  memories,
  memoriesLoading,
  careScore,
  conversationCount,
}: CompanionPanelProps) {
  const character = getCharacterBySlug(characterSlug) ?? CHARACTERS[0];
  const mood = getMood(messages, careScore);
  const { current: currentStage, next: nextStage, progressToNext } = getEvolutionStage(
    conversationCount,
    character.evolutionStages
  );

  const daysSince = Math.max(1, Math.ceil(conversationCount / 3));

  // Dominant care dimensions in plain language
  const careInsights = [
    'listens without judgment',
    'remembers what matters to you',
    'checks in on your wellbeing',
    'adapts to your mood',
  ];

  // Traits that have emerged from current stage
  const emergedTraits = currentStage.traits ?? [];

  return (
    <aside
      className="w-80 flex-shrink-0 flex flex-col overflow-hidden"
      style={{
        background: SURFACE,
        borderLeft: '1px solid rgba(255,255,255,0.08)',
        animation: 'fadeSlideUp 0.4s ease both',
      }}
    >
      {/* ── Companion hero ── */}
      <div
        className="px-5 pt-6 pb-5 flex-shrink-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        {/* Big emoji + identity */}
        <div className="flex flex-col items-center text-center mb-4">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-3 relative"
            style={{
              background: `radial-gradient(circle at 35% 35%, ${character.color}40, ${character.color}10)`,
              border: `2px solid ${character.color}50`,
              boxShadow: `0 0 30px ${character.color}20`,
            }}
          >
            {character.emoji}
            {/* Online pulse */}
            <span
              className="absolute bottom-1 right-1 w-3 h-3 rounded-full border-2"
              style={{
                background: mood.color,
                borderColor: SURFACE,
                boxShadow: `0 0 6px ${mood.color}`,
                animation: 'pulse 2s infinite',
              }}
            />
          </div>
          <h3 className="text-lg font-bold text-white">{character.name}</h3>
          <span
            className="text-xs px-2.5 py-1 rounded-full font-semibold mt-1"
            style={{ background: `${character.color}20`, color: character.color, border: `1px solid ${character.color}35` }}
          >
            {character.archetype}
          </span>
          <div className="flex items-center gap-1.5 mt-2">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: mood.color, boxShadow: `0 0 5px ${mood.color}` }}
            />
            <span className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>{mood.label} right now</span>
          </div>
        </div>

        {/* Care alignment radial gauge */}
        <div
          className="rounded-xl p-3 flex items-center gap-4"
          style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <CareAlignmentGauge score={careScore} color={character.color} />
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-1" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Care alignment
            </p>
            <p className="text-sm font-bold text-white">{careScore}/100</p>
            <p className="text-[10px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>
              {careScore >= 85 ? 'Deeply aligned' : careScore >= 70 ? 'Well aligned' : careScore >= 55 ? 'Building trust' : 'Getting to know you'}
            </p>
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">

        {/* Evolution progress */}
        <div
          className="rounded-xl p-4"
          style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center justify-between mb-1">
            <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.3)' }}>Evolution</p>
            <span
              className="text-[10px] font-bold px-2 py-0.5 rounded-full"
              style={{ background: `${character.color}20`, color: character.color }}
            >
              Stage {currentStage.stage}
            </span>
          </div>
          <p className="text-sm font-semibold text-white">{currentStage.name}</p>
          <p className="text-xs mt-0.5 mb-3" style={{ color: 'rgba(255,255,255,0.4)' }}>{currentStage.description}</p>

          {nextStage ? (
            <>
              <div className="relative h-2 rounded-full overflow-hidden mb-1.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.round(progressToNext * 100)}%`, background: character.color }}
                />
              </div>
              <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
                {nextStage.unlockedAt - conversationCount} conversations to{' '}
                <span style={{ color: character.color }}>{nextStage.name}</span>
              </p>
            </>
          ) : (
            <p className="text-[10px] font-semibold" style={{ color: character.color }}>Max evolution reached ✦</p>
          )}
        </div>

        {/* Journey stats */}
        <div
          className="rounded-xl grid grid-cols-2 divide-x overflow-hidden"
          style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="px-4 py-3 text-center">
            <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Day</p>
            <p className="text-xl font-black" style={{ color: CREAM }}>{daysSince}</p>
          </div>
          <div className="px-4 py-3 text-center">
            <p className="text-[10px] uppercase tracking-widest mb-0.5" style={{ color: 'rgba(255,255,255,0.3)' }}>Talks</p>
            <p className="text-xl font-black" style={{ color: CREAM }}>{conversationCount}</p>
          </div>
        </div>

        {/* Traits that have emerged */}
        {emergedTraits.length > 0 && (
          <div>
            <p className="text-[10px] uppercase tracking-widest mb-2.5" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {character.name} has developed…
            </p>
            <div className="flex flex-wrap gap-1.5">
              {emergedTraits.map((trait) => (
                <span
                  key={trait}
                  className="text-[11px] px-2.5 py-1 rounded-full"
                  style={{
                    background: `${character.color}12`,
                    color: `${character.color}cc`,
                    border: `1px solid ${character.color}25`,
                  }}
                >
                  {trait}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* How [Name] sees you */}
        <div
          className="rounded-xl p-4"
          style={{ background: NAVY, border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p className="text-[10px] uppercase tracking-widest mb-3" style={{ color: 'rgba(255,255,255,0.3)' }}>
            How {character.name} sees you
          </p>
          <div className="space-y-2">
            {careInsights.map((insight) => (
              <div key={insight} className="flex items-center gap-2">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: character.color }}
                />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>{insight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Memory snapshot */}
        <div>
          <p className="text-[10px] uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Memory Snapshot
          </p>
          {memoriesLoading ? (
            <div className="space-y-2">
              {[1, 2].map((i) => (
                <div key={i} className="h-8 rounded-lg animate-pulse" style={{ background: 'rgba(255,255,255,0.05)' }} />
              ))}
            </div>
          ) : memories.length === 0 ? (
            <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>No memories yet — start talking.</p>
          ) : (
            <>
              <p className="text-xs mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>
                Remembers{' '}
                <span className="text-white font-semibold">{memories.length}</span> things about you
              </p>
              <div className="space-y-1.5">
                {memories.slice(0, 3).map((m) => (
                  <div
                    key={m.id}
                    className="text-[11px] rounded-lg px-3 py-2 truncate"
                    style={{
                      background: 'rgba(255,255,255,0.04)',
                      color: 'rgba(255,255,255,0.45)',
                      border: '1px solid rgba(255,255,255,0.06)',
                    }}
                    title={m.content}
                  >
                    {m.content}
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Tagline */}
        <div
          className="rounded-xl px-4 py-3"
          style={{ background: `${character.color}08`, border: `1px solid ${character.color}22` }}
        >
          <p className="text-xs italic" style={{ color: `${character.color}99` }}>
            &ldquo;{character.tagline}&rdquo;
          </p>
        </div>

        {/* CTA */}
        <a
          href="/chat"
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
          style={{
            background: `${character.color}18`,
            color: character.color,
            border: `1px solid ${character.color}35`,
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = `${character.color}28`)}
          onMouseLeave={(e) => (e.currentTarget.style.background = `${character.color}18`)}
        >
          Talk to {character.name}
          <span style={{ opacity: 0.7 }}>→</span>
        </a>
      </div>
    </aside>
  );
}

// ─── Main page ─────────────────────────────────────────────────────────────

export default function CompanionPage() {
  const searchParams = useSearchParams();
  const { user } = useAuth();
  const characterSlug = searchParams.get('character') ?? 'scholar';
  const character = getCharacterBySlug(characterSlug) ?? CHARACTERS[0];

  const greeting = getGreeting();
  const userName = user?.hatch_name ?? user?.email?.split('@')[0] ?? 'friend';

  // Chat state
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [streaming, setStreaming] = useState(false);
  const [streamingText, setStreamingText] = useState('');
  const [streamingTokens, setStreamingTokens] = useState(0);
  const [selectedModel, setSelectedModel] = useState('claude-sonnet-4-5');
  const [latencyTick, setLatencyTick] = useState(0);
  const [streamStart, setStreamStart] = useState(0);
  const [sovereignMeta, setSovereignMeta] = useState<SovereignMeta | null>(null);
  const [careScore, setCareScore] = useState(87);
  const [conversationCount, setConversationCount] = useState(0);

  // Memory state
  const [memories, setMemories] = useState<MemoryEpisode[]>([]);
  const [memoriesLoading, setMemoriesLoading] = useState(true);

  const bottomRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const latencyIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const selectedModelConfig = useMemo(
    () => MODELS.find((m) => m.id === selectedModel) ?? MODELS[0],
    [selectedModel]
  );

  // Load memories
  useEffect(() => {
    setMemoriesLoading(true);
    callTool<{ memories: MemoryEpisode[] }>('list_memories', { limit: 10 })
      .then((res) => setMemories(res.memories ?? []))
      .catch(() => setMemories([]))
      .finally(() => setMemoriesLoading(false));
  }, []);

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

  // Latency ticker
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
        body: JSON.stringify({
          messages: newMessages,
          model: selectedModel,
          system: `You are ${character.name}, a ${character.archetype} companion. ${character.longDescription} Tone: ${character.tone}. Speaking style: ${character.speakingStyle}`,
        }),
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
              setSovereignMeta((prev) =>
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

      setMessages((prev) => [
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
      setCareScore(resolvedCareScore);
      setConversationCount((c) => c + 1);
      setStreamingText('');
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'Something went wrong. Please try again.', timestamp: Date.now() },
      ]);
    } finally {
      setStreaming(false);
    }
  }, [input, streaming, messages, selectedModel, selectedModelConfig.label, character]);

  function handleKeyDown(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if ((e.key === 'Enter' && e.metaKey) || (e.key === 'Enter' && !e.shiftKey)) {
      e.preventDefault();
      sendMessage();
    }
  }

  const hasMessages = messages.length > 0 || streaming;

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
        style={{ height: '100vh', background: DEEP }}
      >
        {/* ── Chat column ─────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Top bar */}
          <header
            className="h-12 flex items-center justify-between px-4 flex-shrink-0"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', background: SURFACE }}
          >
            {/* Companion identity */}
            <div className="flex items-center gap-2 min-w-0">
              <div
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                style={{
                  background: `radial-gradient(circle at 35% 35%, ${character.color}50, ${character.color}20)`,
                  border: `1px solid ${character.color}50`,
                }}
              >
                {character.emoji}
              </div>
              <span className="text-sm font-semibold truncate" style={{ color: 'rgba(255,255,255,0.9)' }}>{character.name}</span>
              <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0 animate-pulse" title="Online" />
            </div>

            {/* Model selector pills */}
            <div className="flex items-center gap-1 overflow-x-auto px-2">
              {MODELS.map((m) => (
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
                  {m.label}{selectedModel === m.id && ' ✓'}
                </button>
              ))}
            </div>

            {/* Care score chip */}
            <div
              className="flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-lg border flex-shrink-0"
              style={{ borderColor: `${GOLD}50`, color: GOLD, background: `${GOLD}10` }}
            >
              <span>Care</span>
              <span className="font-bold">{careScore}</span>
            </div>
          </header>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto px-4 py-6" style={{ background: DEEP }}>
            {/* First-load empty state */}
            {!hasMessages && (
              <div
                className="flex flex-col items-center justify-center h-full text-center px-8"
                style={{ animation: 'fadeSlideUp 0.5s ease both' }}
              >
                <div
                  className="text-6xl mb-5 w-24 h-24 rounded-full flex items-center justify-center"
                  style={{
                    background: `radial-gradient(circle at 35% 35%, ${character.color}30, ${character.color}08)`,
                    border: `2px solid ${character.color}40`,
                    boxShadow: `0 0 40px ${character.color}15`,
                  }}
                >
                  {character.emoji}
                </div>
                <h2 className="text-2xl font-bold mb-2" style={{ color: 'white' }}>
                  Good {greeting}, {userName}.
                </h2>
                <p className="text-base mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  I&apos;m {character.name}, your {character.archetype.toLowerCase()} companion.
                </p>
                <p className="text-sm italic mb-8" style={{ color: 'rgba(255,255,255,0.3)' }}>
                  &ldquo;{character.tagline}&rdquo;
                </p>
                <p className="text-sm mb-4" style={{ color: 'rgba(255,255,255,0.35)' }}>
                  What&apos;s on your mind?
                </p>
                {/* Example prompt suggestions */}
                <div className="flex flex-wrap gap-2 justify-center max-w-lg">
                  {character.exampleConversations.slice(0, 2).map((ex, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(ex.user)}
                      className="text-xs border rounded-full px-4 py-2 transition-all text-left"
                      style={{
                        color: 'rgba(255,255,255,0.4)',
                        background: 'rgba(255,255,255,0.04)',
                        borderColor: 'rgba(255,255,255,0.08)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                        e.currentTarget.style.color = 'rgba(255,255,255,0.4)';
                      }}
                    >
                      {ex.user.length > 60 ? ex.user.slice(0, 60) + '…' : ex.user}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Message list */}
            {hasMessages && (
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
                        <div className="max-w-[75%]">
                          <div
                            className="rounded-2xl rounded-tr-sm px-4 py-3"
                            style={{ background: GOLD, color: NAVY }}
                          >
                            <p className="text-sm font-medium whitespace-pre-wrap leading-relaxed">{msg.content}</p>
                          </div>
                          {timeStr && (
                            <p className="text-[10px] mt-1 text-right pr-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
                              {timeStr}
                            </p>
                          )}
                        </div>
                      ) : (
                        <div className="max-w-[75%]">
                          <SovereignBadge
                            model={msg.model}
                            latency={msg.latency}
                            care_score={msg.care_score}
                          />
                          <div
                            className="rounded-2xl rounded-tl-sm px-4 py-3"
                            style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.07)' }}
                          >
                            <p className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: 'rgba(245,240,232,0.85)' }}>
                              {msg.content}
                            </p>
                          </div>
                          {timeStr && (
                            <p className="text-[10px] mt-1 pl-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
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
                  <div className="flex justify-start" style={{ animation: 'messageIn 0.25s ease both' }}>
                    <div className="max-w-[75%]">
                      <SovereignBadge streaming />
                      <div
                        className="rounded-2xl rounded-tl-sm px-4 py-3"
                        style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.07)' }}
                      >
                        {streamingText ? (
                          <p className="text-sm whitespace-pre-wrap leading-relaxed" style={{ color: 'rgba(245,240,232,0.85)' }}>
                            {streamingText}
                            <span className="inline-block w-0.5 h-4 bg-[#c9a84c] ml-0.5 animate-pulse align-middle" />
                          </p>
                        ) : (
                          <div className="flex gap-1.5 items-center h-5 px-1">
                            <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, animationDelay: '0ms' }} />
                            <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.7, animationDelay: '150ms' }} />
                            <span className="w-2 h-2 rounded-full animate-bounce" style={{ background: GOLD, opacity: 0.4, animationDelay: '300ms' }} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div ref={bottomRef} />
              </div>
            )}
          </div>

          {/* Input area */}
          <div
            className="flex-shrink-0 px-4 py-3"
            style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: SURFACE }}
          >
            <div className="flex items-center gap-1.5 mb-2">
              <span
                className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.25)', borderColor: 'rgba(255,255,255,0.07)' }}
              >
                ☁️ Cloud
              </span>
              {sovereignMeta && !streaming && (
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                  style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.07)' }}
                >
                  {sovereignMeta.latency}ms · {sovereignMeta.tokens} tok
                </span>
              )}
              {streaming && (
                <span
                  className="text-[10px] px-2 py-0.5 rounded-full border font-mono"
                  style={{ background: `${GOLD}05`, color: `${GOLD}60`, borderColor: `${GOLD}15` }}
                >
                  {latencyTick}ms · {streamingTokens} tok
                </span>
              )}
            </div>

            <div className="relative flex items-end gap-2 max-w-3xl mx-auto">
              <textarea
                ref={textareaRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={`Talk to ${character.name}…`}
                rows={1}
                disabled={streaming}
                className="flex-1 text-sm rounded-xl px-4 py-3 pr-24 resize-none outline-none transition-colors leading-6 min-h-[44px] max-h-[120px] disabled:opacity-50"
                style={{
                  background: NAVY,
                  color: 'rgba(245,240,232,0.9)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  caretColor: GOLD,
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = `${GOLD}50`)}
                onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)')}
              />
              <div className="absolute right-2 bottom-2 flex items-center gap-1">
                <span className="text-[10px] hidden sm:inline" style={{ color: 'rgba(255,255,255,0.2)' }}>⌘↵</span>
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || streaming}
                  className="h-8 px-3 rounded-lg text-xs font-semibold transition-all flex-shrink-0"
                  style={{ background: GOLD, color: NAVY }}
                  onMouseEnter={(e) => !(!input.trim() || streaming) && (e.currentTarget.style.opacity = '0.9')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Companion profile panel ─────────────────────────────── */}
        <CompanionPanel
          characterSlug={characterSlug}
          messages={messages}
          memories={memories}
          memoriesLoading={memoriesLoading}
          careScore={careScore}
          conversationCount={conversationCount}
        />
      </div>
    </>
  );
}
