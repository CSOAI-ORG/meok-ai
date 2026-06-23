'use client';

import { useState, useCallback, useRef } from 'react';
import {
  Radio,
  MessageSquare,
  Scissors,
  FileText,
  Copy,
  Check,
  Loader2,
  Smile,
  Zap,
  Heart,
  AlertCircle,
  Clock,
} from 'lucide-react';

// ── Brand tokens ──────────────────────────────────────────────────────────────
const DEEP    = '#0d0c18';
const SURFACE = '#13121f';
const BORDER  = 'rgba(255,255,255,0.07)';
const GOLD    = '#c9a84c';

// ── Types ─────────────────────────────────────────────────────────────────────

interface ClipCard {
  timestamp: string;
  reason: string;
  raw: string;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

/** Stream /api/chat with a _systemOverride and accumulate text via setState */
async function streamChat(
  prompt: string,
  systemOverride: string,
  onChunk: (text: string) => void,
  signal?: AbortSignal,
): Promise<void> {
  const res = await fetch('/api/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    signal,
    body: JSON.stringify({
      messages: [{ role: 'user', content: prompt }],
      companionId: '__streaming_tools__',
      _systemOverride: systemOverride,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as Record<string, string>).error ?? 'Request failed');
  }

  const reader = res.body?.getReader();
  if (!reader) throw new Error('No response stream');

  const decoder = new TextDecoder();
  let accumulated = '';
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    accumulated += decoder.decode(value, { stream: true });
    onChunk(accumulated);
  }
}

/** Parse raw AI text into clip cards — expects lines like "1. [0:42:10] - reason" or similar */
function parseClipCards(raw: string): ClipCard[] {
  const cards: ClipCard[] = [];
  // Match numbered lines that contain a timestamp-like token
  const lineRe = /^(?:\d+[\.\)]?\s*)?(\[?[\d:hms]+\]?)[\s\-–—:]+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = lineRe.exec(raw)) !== null) {
    cards.push({ timestamp: m[1].replace(/[\[\]]/g, ''), reason: m[2].trim(), raw: m[0] });
  }
  // Fallback: if regex found nothing meaningful, split on numbered points
  if (cards.length === 0) {
    const parts = raw.split(/\n(?=\d+[\.\)])/);
    parts.forEach((part) => {
      const clean = part.replace(/^\d+[\.\)]\s*/, '').trim();
      if (clean.length > 10) {
        cards.push({ timestamp: '—', reason: clean, raw: part });
      }
    });
  }
  return cards.slice(0, 3);
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionHeader({
  icon: Icon,
  label,
  badge,
}: {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  label: string;
  badge?: string;
}) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
        style={{ background: `${GOLD}18` }}
      >
        <Icon className="w-4.5 h-4.5" style={{ color: GOLD }} />
      </div>
      <div>
        <h2 className="text-base font-bold text-white leading-tight">{label}</h2>
        {badge && <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: `${GOLD}80` }}>{badge}</span>}
      </div>
    </div>
  );
}

function CopyButton({ text, label = 'Copy' }: { text: string; label?: string }) {
  const [copied, setCopied] = useState(false);
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* silent */ }
  }
  return (
    <button type="button"
      onClick={handleCopy}
      className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:scale-105"
      style={{
        color: copied ? '#22c55e' : 'rgba(255,255,255,0.5)',
        background: copied ? 'rgba(34,197,94,0.08)' : 'rgba(255,255,255,0.04)',
        border: `1px solid ${copied ? 'rgba(34,197,94,0.25)' : BORDER}`,
      }}
    >
      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
      {copied ? 'Copied!' : label}
    </button>
  );
}

function ErrorBanner({ message }: { message: string }) {
  return (
    <div
      className="flex items-center gap-2 p-3 rounded-lg text-sm mt-3"
      style={{ background: 'rgba(239,68,68,0.08)', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444' }}
    >
      <AlertCircle className="w-4 h-4 flex-shrink-0" />
      {message}
    </div>
  );
}

// ── 80.1 OBS Overlay Mockup ───────────────────────────────────────────────────

const MOOD_OPTIONS = [
  { key: 'focused',   label: 'Focused',  color: '#3b82f6', icon: Zap   },
  { key: 'hyped',     label: 'Hyped',    color: '#f59e0b', icon: Smile },
  { key: 'vibing',    label: 'Vibing',   color: '#8b5cf6', icon: Heart },
  { key: 'grinding',  label: 'Grinding', color: '#10b981', icon: Clock },
] as const;

type MoodKey = (typeof MOOD_OPTIONS)[number]['key'];

function OBSOverlaySection() {
  const [companionName, setCompanionName] = useState('Aria');
  const [messageCount, setMessageCount] = useState(142);
  const [mood, setMood] = useState<MoodKey>('focused');

  const currentMood = MOOD_OPTIONS.find((m) => m.key === mood)!;
  const MoodIcon = currentMood.icon;

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader icon={Radio} label="OBS Overlay Mockup" badge="Visual concept" />

      {/* Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5">Companion Name</label>
          <input
            type="text"
            value={companionName}
            onChange={(e) => setCompanionName(e.target.value)}
            className="w-full rounded-lg px-3 py-2 text-sm text-white placeholder-white/25 outline-none"
            style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}` }}
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5">
            Messages: <span style={{ color: GOLD }}>{messageCount}</span>
          </label>
          <input
            type="range"
            min={0}
            max={999}
            value={messageCount}
            onChange={(e) => setMessageCount(Number(e.target.value))}
            className="w-full accent-[#c9a84c] mt-1"
          />
        </div>
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5">Current Mood</label>
          <div className="flex gap-1.5 flex-wrap">
            {MOOD_OPTIONS.map((m) => (
              <button type="button"
                key={m.key}
                onClick={() => setMood(m.key)}
                className="px-2 py-1 rounded text-[11px] font-semibold transition-all"
                style={{
                  color: mood === m.key ? m.color : 'rgba(255,255,255,0.35)',
                  background: mood === m.key ? `${m.color}20` : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${mood === m.key ? `${m.color}50` : BORDER}`,
                }}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Overlay preview */}
      <div className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '16/9', background: '#0a1628' }}>
        {/* Fake game background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 30% 60%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(139,92,246,0.10) 0%, transparent 50%), linear-gradient(180deg, #050a14 0%, #0a1628 100%)',
          }}
        />
        {/* Fake HUD elements */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-[10px] font-bold text-red-400 tracking-widest uppercase">Live</span>
        </div>
        <div className="absolute top-3 right-3 text-[10px] text-white/30 font-mono">03:42:17</div>

        {/* MEOK companion overlay — bottom-left dark transparent box */}
        <div
          className="absolute bottom-4 left-4 rounded-xl px-4 py-3 flex items-center gap-3"
          style={{
            background: 'rgba(13,12,24,0.82)',
            backdropFilter: 'blur(12px)',
            border: `1px solid ${GOLD}30`,
            minWidth: 220,
            maxWidth: 280,
          }}
        >
          {/* Companion avatar */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-base font-black"
            style={{ background: `${GOLD}22`, color: GOLD }}
          >
            {companionName.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="text-xs font-bold text-white truncate">{companionName || 'Aria'}</span>
              <span
                className="text-[9px] font-bold px-1 py-0.5 rounded"
                style={{ background: `${GOLD}22`, color: GOLD }}
              >
                MEOK
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <MessageSquare className="w-2.5 h-2.5" style={{ color: 'rgba(255,255,255,0.4)' }} />
                <span className="text-[10px] text-white/40 font-medium">{messageCount.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <MoodIcon className="w-2.5 h-2.5" style={{ color: currentMood.color }} />
                <span className="text-[10px] font-semibold" style={{ color: currentMood.color }}>
                  {currentMood.label}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Label */}
        <div
          className="absolute bottom-4 right-4 text-[10px] text-white/20 font-medium"
        >
          Overlay preview · not a real OBS connection
        </div>
      </div>

      <p className="text-xs text-white/30 mt-3 leading-relaxed">
        This is a visual mockup only. A real OBS integration would use the Browser Source plugin
        pointed at a hosted overlay URL with live companion data injected via WebSocket.
      </p>
    </div>
  );
}

// ── 80.2 Chat Interaction Concepts ────────────────────────────────────────────

const SAMPLE_CHAT: Array<{ user: string; color: string; text: string; isMeok?: boolean }> = [
  { user: 'xXDragonSlayer99Xx', color: '#f59e0b', text: '!ask what should I build next in this run?' },
  { user: 'MEOK_AI', color: '#c9a84c', text: 'Based on your resources and the enemy composition ahead — prioritise a flame turret upgrade. Your crowd control is strong but you\'re vulnerable to fast rushes. 🔥', isMeok: true },
  { user: 'streamerLucy', color: '#8b5cf6', text: '!vibe' },
  { user: 'MEOK_AI', color: '#c9a84c', text: 'Current vibe: FOCUSED. Nick\'s been in the zone for 47 mins, 0 deaths, chat is hyped. Let him cook. 🧠', isMeok: true },
  { user: 'ChatMod_Dev', color: '#3b82f6', text: '!companion' },
  { user: 'MEOK_AI', color: '#c9a84c', text: 'I\'m Aria — Nick\'s MEOK AI companion. I watch his gameplay patterns, track his mood, and help him make better decisions. Type !ask [question] to get in on the action!', isMeok: true },
  { user: 'RandomViewer42', color: '#10b981', text: '!ask is he tilting?' },
  { user: 'MEOK_AI', color: '#c9a84c', text: 'Nope! Heart rate pattern looks steady. He\'s calm and in decision-making mode. You\'d know if he was tilting — the typo rate goes up dramatically 😄', isMeok: true },
];

const COMMANDS = [
  { cmd: '!ask [question]', desc: 'Ask the companion a gameplay or strategy question', example: '!ask should I push now or wait?' },
  { cmd: '!companion',      desc: 'Show who the companion is and what they do',          example: '!companion'                        },
  { cmd: '!vibe',           desc: 'Get a read on the current stream energy and mood',    example: '!vibe'                             },
];

function ChatConceptsSection() {
  const [activeCmd, setActiveCmd] = useState<string | null>(null);

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader icon={MessageSquare} label="Chat Interaction Concepts" badge="Twitch command concepts" />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        {/* Command reference */}
        <div className="lg:col-span-2 space-y-2">
          <p className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-3">Commands</p>
          {COMMANDS.map((c) => (
            <button type="button"
              key={c.cmd}
              onClick={() => setActiveCmd(activeCmd === c.cmd ? null : c.cmd)}
              className="w-full text-left rounded-xl p-3 transition-all"
              style={{
                background: activeCmd === c.cmd ? `${GOLD}10` : 'rgba(255,255,255,0.03)',
                border: `1px solid ${activeCmd === c.cmd ? `${GOLD}35` : BORDER}`,
              }}
            >
              <code
                className="text-xs font-mono font-bold block mb-1"
                style={{ color: activeCmd === c.cmd ? GOLD : 'rgba(201,168,76,0.7)' }}
              >
                {c.cmd}
              </code>
              <span className="text-[11px] text-white/40 leading-snug">{c.desc}</span>
              {activeCmd === c.cmd && (
                <div
                  className="mt-2 pt-2 text-[11px] font-mono"
                  style={{ borderTop: `1px solid ${BORDER}`, color: 'rgba(255,255,255,0.3)' }}
                >
                  e.g. <span className="text-white/50">{c.example}</span>
                </div>
              )}
            </button>
          ))}
          <p className="text-[10px] text-white/20 leading-relaxed mt-2 px-1">
            Commands would be handled by a bot reading Twitch EventSub, passing chat messages
            to /api/chat, and posting responses via the Twitch Helix API.
          </p>
        </div>

        {/* Fake Twitch chat */}
        <div className="lg:col-span-3">
          <p className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-3">Sample Chat Window</p>
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: '#0e0d1a', border: `1px solid ${BORDER}` }}
          >
            {/* Chat header */}
            <div
              className="px-3 py-2 flex items-center gap-2"
              style={{ background: 'rgba(255,255,255,0.03)', borderBottom: `1px solid ${BORDER}` }}
            >
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[11px] font-bold text-white/50">Stream Chat</span>
              <span className="text-[10px] text-white/20 ml-auto">347 viewers</span>
            </div>

            {/* Messages */}
            <div className="p-3 space-y-2.5 max-h-64 overflow-y-auto">
              {SAMPLE_CHAT.map((msg, i) => (
                <div key={i} className="text-sm leading-snug">
                  <span className="font-bold text-xs mr-1.5" style={{ color: msg.color }}>
                    {msg.user}
                  </span>
                  {msg.isMeok && (
                    <span
                      className="text-[9px] font-bold px-1 py-0.5 rounded mr-1.5 align-middle"
                      style={{ background: `${GOLD}22`, color: GOLD }}
                    >
                      BOT
                    </span>
                  )}
                  <span
                    className="text-xs"
                    style={{
                      color: msg.isMeok ? 'rgba(255,255,255,0.75)' : 'rgba(255,255,255,0.50)',
                      fontStyle: msg.text.startsWith('!') ? 'italic' : 'normal',
                    }}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Fake input */}
            <div
              className="px-3 py-2"
              style={{ borderTop: `1px solid ${BORDER}` }}
            >
              <div
                className="rounded-lg px-3 py-2 text-xs text-white/20"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${BORDER}` }}
              >
                Send a message (concept only)
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 80.3 Clip Highlight Suggestions ──────────────────────────────────────────

const CLIP_SYSTEM =
  'You are a stream highlight assistant for MEOK AI. ' +
  'The user will paste stream notes or timestamps. ' +
  'Suggest the top 3 clip moments. ' +
  'For each one, output EXACTLY this format on its own line: [TIMESTAMP] - REASON. ' +
  'Example: [1:23:45] - Epic clutch kill that turned the game around. ' +
  'Be concise. No preamble, no bullet points, just the 3 lines.';

function ClipHighlightsSection() {
  const [notes, setNotes]       = useState('');
  const [raw, setRaw]           = useState('');
  const [cards, setCards]       = useState<ClipCard[]>([]);
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState('');
  const abortRef                = useRef<AbortController | null>(null);

  const suggest = useCallback(async () => {
    const input = notes.trim();
    if (!input) return;
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setLoading(true);
    setError('');
    setRaw('');
    setCards([]);

    try {
      await streamChat(
        `Suggest the top 3 clip moments from these stream notes: ${input}`,
        CLIP_SYSTEM,
        (text) => {
          setRaw(text);
          setCards(parseClipCards(text));
        },
        ctrl.signal,
      );
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError((e as Error).message || 'Failed to generate suggestions');
      }
    } finally {
      setLoading(false);
    }
  }, [notes]);

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader icon={Scissors} label="Clip Highlight Suggestions" badge="AI-powered" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Input */}
        <div className="space-y-3">
          <label className="block text-xs text-white/40 font-medium">Stream Notes / Timestamps</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={`Paste your stream notes here. e.g.\n\n0:12:30 – Clutch 1v3 against top squad\n0:45:00 – Chat exploded when I found the legendary drop\n1:10:15 – Boss fight, took 3 tries, final kill was insane\n1:58:00 – Funny moment where I got stuck in geometry`}
            rows={10}
            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${BORDER}`,
              lineHeight: '1.6',
            }}
          />
          <button type="button"
            onClick={suggest}
            disabled={loading || !notes.trim()}
            className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] disabled:opacity-30 disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ background: GOLD, color: DEEP }}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Scissors className="w-4 h-4" />}
            {loading ? 'Analysing…' : 'Suggest Clips'}
          </button>
          {error && <ErrorBanner message={error} />}
        </div>

        {/* Results */}
        <div className="space-y-3">
          <label className="block text-xs text-white/40 font-medium">Top Clip Moments</label>

          {!raw && !loading && (
            <div
              className="rounded-xl p-6 text-center flex flex-col items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, minHeight: 180 }}
            >
              <Scissors className="w-8 h-8 mb-3" style={{ color: 'rgba(255,255,255,0.1)' }} />
              <p className="text-xs text-white/25">Paste your stream notes and hit Suggest Clips</p>
            </div>
          )}

          {loading && cards.length === 0 && (
            <div
              className="rounded-xl p-6 text-center"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, minHeight: 180 }}
            >
              <Loader2 className="w-6 h-6 mx-auto animate-spin mb-2" style={{ color: GOLD }} />
              <p className="text-xs text-white/30">Scanning your stream for gold…</p>
            </div>
          )}

          {cards.length > 0 && (
            <div className="space-y-3">
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="rounded-xl p-4 flex items-start gap-3"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORDER}` }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5"
                    style={{ background: `${GOLD}20`, color: GOLD }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="text-xs font-bold font-mono mb-1"
                      style={{ color: GOLD }}
                    >
                      {card.timestamp}
                    </div>
                    <p className="text-sm text-white/70 leading-snug">{card.reason}</p>
                  </div>
                  <CopyButton text={`${card.timestamp} — ${card.reason}`} label="Copy" />
                </div>
              ))}
            </div>
          )}

          {/* Raw stream for loading state once cards appear */}
          {loading && cards.length > 0 && (
            <p className="text-[10px] text-white/20 italic text-center">Still streaming…</p>
          )}
        </div>
      </div>
    </div>
  );
}

// ── 80.4 Stream Summary Generator ────────────────────────────────────────────

const SUMMARY_SYSTEM =
  'You are a stream recap writer for MEOK AI. ' +
  'Given stream notes, write a structured stream summary with these exact sections: ' +
  '**Title** — a punchy stream title (max 10 words). ' +
  '**Highlights** — 3-4 bullet points of the biggest moments. ' +
  '**Chat Moments** — 2-3 bullet points of notable chat interactions. ' +
  '**Next Stream Hook** — one sentence teasing what comes next. ' +
  'Keep it concise, energetic, and ready to paste into a social post or VOD description.';

function StreamSummarySection() {
  const [notes, setNotes]     = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState('');
  const abortRef              = useRef<AbortController | null>(null);

  const generate = useCallback(async () => {
    const input = notes.trim();
    if (!input) return;
    abortRef.current?.abort();
    const ctrl = new AbortController();
    abortRef.current = ctrl;

    setLoading(true);
    setError('');
    setSummary('');

    try {
      await streamChat(
        `Generate a structured stream summary from these notes: ${input}`,
        SUMMARY_SYSTEM,
        (text) => setSummary(text),
        ctrl.signal,
      );
    } catch (e) {
      if ((e as Error).name !== 'AbortError') {
        setError((e as Error).message || 'Failed to generate summary');
      }
    } finally {
      setLoading(false);
    }
  }, [notes]);

  /** Render bold markdown headings inline */
  function renderSummary(text: string) {
    return text.split('\n').map((line, i) => {
      const boldHeading = line.match(/^\*\*(.+?)\*\*/);
      if (boldHeading) {
        const rest = line.replace(/^\*\*(.+?)\*\*\s*/, '');
        return (
          <div key={i} className={i > 0 ? 'mt-3' : ''}>
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>
              {boldHeading[1]}
            </span>
            {rest && <span className="text-sm text-white/70"> {rest}</span>}
          </div>
        );
      }
      if (line.startsWith('- ') || line.startsWith('• ')) {
        return (
          <div key={i} className="flex items-start gap-2 ml-2 mt-1">
            <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: GOLD }} />
            <span className="text-sm text-white/65 leading-snug">{line.slice(2)}</span>
          </div>
        );
      }
      return line.trim() ? (
        <p key={i} className="text-sm text-white/65 leading-snug mt-1">{line}</p>
      ) : (
        <div key={i} className="h-1" />
      );
    });
  }

  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader icon={FileText} label="Stream Summary Generator" badge="Structured recap" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Input */}
        <div className="space-y-3">
          <label className="block text-xs text-white/40 font-medium">Stream Notes</label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder={`Describe what happened this stream. e.g.\n\nPlayed Elden Ring for 4 hours. Beat the Elden Beast on attempt 5. Chat went wild. Found an OP build mid-stream by accident. Died 47 times total. Funny moment where I fell off the same ledge 3 times. Ended with 850 viewers, personal best. Next stream planning to start the DLC.`}
            rows={10}
            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: `1px solid ${BORDER}`,
              lineHeight: '1.6',
            }}
          />
          <button type="button"
            onClick={generate}
            disabled={loading || !notes.trim()}
            className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] disabled:opacity-30 disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ background: GOLD, color: DEEP }}
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
            {loading ? 'Writing recap…' : 'Generate Summary'}
          </button>
          {error && <ErrorBanner message={error} />}
        </div>

        {/* Output */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-xs text-white/40 font-medium">Stream Recap</label>
            {summary && !loading && <CopyButton text={summary} label="Copy All" />}
          </div>

          {!summary && !loading && (
            <div
              className="rounded-xl p-6 text-center flex flex-col items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${BORDER}`, minHeight: 200 }}
            >
              <FileText className="w-8 h-8 mb-3" style={{ color: 'rgba(255,255,255,0.1)' }} />
              <p className="text-xs text-white/25">Your structured summary will appear here</p>
              <p className="text-[11px] text-white/15 mt-1">Ready to paste to YouTube / TikTok / Discord</p>
            </div>
          )}

          {(summary || loading) && (
            <div
              className="rounded-xl p-4 min-h-[200px] relative"
              style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${BORDER}` }}
            >
              {renderSummary(summary)}
              {loading && (
                <span
                  className="inline-block w-2 h-4 rounded-sm animate-pulse ml-1"
                  style={{ background: GOLD, verticalAlign: 'middle' }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function StreamingIntegrationPage() {
  return (
    <div className="min-h-screen px-4 py-8 md:px-8" style={{ background: DEEP }}>
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <header className="mb-2">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center"
              style={{ background: `${GOLD}18`, border: `1px solid ${GOLD}30` }}
            >
              <Radio className="w-5 h-5" style={{ color: GOLD }} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Streaming Integration
              </h1>
              <p className="text-sm text-white/40">
                Phase 80 — OBS overlays, chat commands, clip highlights, stream summaries
              </p>
            </div>
          </div>
          <div
            className="flex flex-wrap gap-2 mt-4"
            role="list"
            aria-label="Phase sections"
          >
            {[
              { label: '80.1 OBS Overlay',      icon: Radio          },
              { label: '80.2 Chat Commands',    icon: MessageSquare  },
              { label: '80.3 Clip Highlights',  icon: Scissors       },
              { label: '80.4 Stream Summary',   icon: FileText       },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold"
                style={{
                  background: `${GOLD}10`,
                  border: `1px solid ${GOLD}25`,
                  color: `${GOLD}cc`,
                }}
              >
                <Icon className="w-3 h-3" />
                {label}
              </div>
            ))}
          </div>
        </header>

        {/* Sections */}
        <OBSOverlaySection />
        <ChatConceptsSection />
        <ClipHighlightsSection />
        <StreamSummarySection />

      </div>
    </div>
  );
}
