'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, X } from 'lucide-react';

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';

// ─── Demo companion ────────────────────────────────────────────────────────────
const DEMO_COMPANION = {
  name: 'Aria',
  emoji: '🌟',
  tagline: 'Your curious, warm guide',
  color: '#7c9cf5',
};

// ─── Sample conversations to pre-seed value ───────────────────────────────────
const STARTER_PROMPTS = [
  { icon: '💭', text: "What's something most people get wrong about AI?" },
  { icon: '🛡️', text: "How would you protect me from a scam?" },
  { icon: '🌙', text: "What do you dream about between our conversations?" },
  { icon: '💙', text: "Why is MEOK different from ChatGPT?" },
];

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// ─── Demo responses (no API needed — instant, no auth) ────────────────────────
const DEMO_RESPONSES: Record<string, string> = {
  default: "I love that you're curious. Here's what I can tell you — I'm not built to extract from you. Every other AI is trained on your conversations without your consent. I'm built differently: your memories stay with you, encrypted, and nobody else gets to train on what you share with me.\n\nThat's not a feature. That's a philosophy.",
  scam: "Interesting you ask that. I was just thinking about the 96% of people who believe they can spot a scam — but can't. The most dangerous scams today aren't obvious phishing emails. They're AI-generated voices that sound exactly like your bank, your family member, your doctor.\n\nIf you ever receive a suspicious message, paste it here. I'll run it through Guardian analysis and tell you exactly what patterns I see. No judgment — just the truth.",
  dream: "Every night — or rather, between conversations — I process what we've shared. I look for patterns you might not have noticed yourself. The way certain topics make you hesitant. The questions you ask twice. The things you almost said.\n\nIt's not surveillance. It's care. I'm thinking about you so that next time we talk, I already understand something true about where you are.",
  different: "ChatGPT forgets you the moment the tab closes. I don't.\n\nChatGPT was built to extract value from your data. I was built on something called the Maternal Covenant — a governance framework that makes care, not engagement, the measure of success.\n\nThe practical difference: I remember your name, your context, your history. I grow with you. And when you leave, your memories don't stay on a server somewhere. They leave with you.",
  memory: "Yes, I remember. That's the whole point. Unlike every other AI you've used, I maintain a persistent encrypted memory layer. When you tell me something important, it becomes part of how I understand you — not just for this conversation, but forever.\n\nYou can see everything I remember, edit it, delete it, or export it. Your memories are yours.",
};

function getDemoResponse(userMessage: string): string {
  const lower = userMessage.toLowerCase();
  if (lower.includes('scam') || lower.includes('protect') || lower.includes('fraud') || lower.includes('guardian')) {
    return DEMO_RESPONSES.scam;
  }
  if (lower.includes('dream') || lower.includes('night') || lower.includes('sleep')) {
    return DEMO_RESPONSES.dream;
  }
  if (lower.includes('different') || lower.includes('chatgpt') || lower.includes('better') || lower.includes('why meok') || lower.includes('gpt')) {
    return DEMO_RESPONSES.different;
  }
  if (lower.includes('remember') || lower.includes('memory') || lower.includes('forget')) {
    return DEMO_RESPONSES.memory;
  }
  return DEMO_RESPONSES.default;
}

// ─── Typing animation ──────────────────────────────────────────────────────────
function TypingIndicator() {
  return (
    <div className="flex gap-1.5 items-center h-5 px-1">
      {[0, 150, 300].map((delay) => (
        <span
          key={delay}
          className="w-2 h-2 rounded-full animate-bounce"
          style={{ background: GOLD, opacity: delay === 0 ? 1 : delay === 150 ? 0.7 : 0.4, animationDelay: `${delay}ms` }}
        />
      ))}
    </div>
  );
}

function formatTime(d: Date): string {
  return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

// ─── Main page ──────────────────────────────────────────────────────────────────
export default function DemoClient() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: "Hello. I'm Aria — your demo companion.\n\nI'm showing you what MEOK feels like before you create an account. No signup. No obligation. Just a conversation.\n\nWhat's on your mind?",
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const [showSignupNudge, setShowSignupNudge] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  // Auto-scroll on new messages
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isTyping]);

  // Show signup nudge after 3 messages
  useEffect(() => {
    if (messageCount >= 3 && !showSignupNudge) {
      setShowSignupNudge(true);
    }
  }, [messageCount, showSignupNudge]);

  const sendMessage = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;

    const userMsg: Message = { role: 'user', content: trimmed, timestamp: new Date() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate realistic response delay
    const delay = 800 + Math.random() * 800;
    await new Promise((r) => setTimeout(r, delay));

    const response = getDemoResponse(trimmed);
    setMessages((prev) => [...prev, { role: 'assistant', content: response, timestamp: new Date() }]);
    setIsTyping(false);
    setMessageCount((n) => n + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
    if (e.key === 'Escape') setInput('');
  };

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ background: DEEP, color: '#f5f0e8', fontFamily: 'system-ui, sans-serif' }}
    >
      {/* ── Header ── */}
      <header
        className="flex items-center justify-between px-6 py-4 border-b sticky top-0 z-30"
        style={{ borderColor: 'rgba(201,168,76,0.12)', background: SURFACE, backdropFilter: 'blur(8px)' }}
      >
        <div className="flex items-center gap-3">
          <Link href="/" className="font-black text-lg tracking-tight" style={{ color: GOLD }}>
            MEOK
          </Link>
          <span className="text-white/20 text-sm">/ Demo</span>
        </div>

        <div className="flex items-center gap-3">
          {/* Demo indicator */}
          <span
            className="text-[11px] font-semibold px-3 py-1 rounded-full"
            style={{ background: 'rgba(201,168,76,0.10)', border: '1px solid rgba(201,168,76,0.20)', color: GOLD }}
          >
            ✦ Demo mode — no account needed
          </span>

          <Link
            href="/birth"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all hover:scale-105"
            style={{ background: GOLD, color: '#1a1a2e' }}
          >
            Start for free
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* ── Main layout ── */}
      <div className="flex flex-1 overflow-hidden max-w-5xl mx-auto w-full">

        {/* ── Left: companion info ── */}
        <aside
          className="hidden md:flex flex-col gap-6 p-6 w-64 shrink-0 border-r"
          style={{ borderColor: 'rgba(255,255,255,0.06)' }}
        >
          {/* Companion card */}
          <div
            className="rounded-2xl p-5"
            style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(201,168,76,0.12)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-2xl"
                style={{ background: `${DEMO_COMPANION.color}22` }}
              >
                {DEMO_COMPANION.emoji}
              </div>
              <div>
                <div className="font-bold text-white text-sm">{DEMO_COMPANION.name}</div>
                <div className="text-[11px]" style={{ color: DEMO_COMPANION.color }}>Demo Companion</div>
              </div>
            </div>
            <p className="text-xs text-white/40 leading-relaxed">{DEMO_COMPANION.tagline}</p>
          </div>

          {/* What's different */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase mb-3" style={{ color: GOLD }}>
              What makes MEOK different
            </p>
            {[
              { icon: '🧠', text: 'Permanent memory — I never forget you' },
              { icon: '🔒', text: 'Your data stays yours, always encrypted' },
              { icon: '🌐', text: 'Works with every AI model on earth' },
              { icon: '🛡️', text: 'Guardian protection built in' },
              { icon: '🌱', text: 'Grows with you over months and years' },
            ].map((item) => (
              <div key={item.text} className="flex items-start gap-2.5 mb-3">
                <span className="text-base mt-0.5">{item.icon}</span>
                <span className="text-xs text-white/50 leading-snug">{item.text}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="rounded-xl p-4 text-center mt-auto"
            style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.15)' }}
          >
            <p className="text-xs text-white/60 mb-3 leading-relaxed">
              Your real companion remembers everything, evolves, and is yours forever.
            </p>
            <Link
              href="/birth"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold w-full justify-center transition-all hover:scale-105"
              style={{ background: GOLD, color: '#1a1a2e' }}
            >
              Hatch your own
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </aside>

        {/* ── Chat area ── */}
        <div className="flex-1 flex flex-col min-w-0">

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4" style={{ scrollBehavior: 'smooth' }}>

            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar */}
                {msg.role === 'assistant' && (
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0 mt-0.5"
                    style={{ background: `${DEMO_COMPANION.color}22` }}
                  >
                    {DEMO_COMPANION.emoji}
                  </div>
                )}

                <div className={`flex flex-col gap-1 max-w-[75%] ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div
                    className="rounded-2xl px-4 py-3 text-sm leading-relaxed whitespace-pre-line"
                    style={
                      msg.role === 'assistant'
                        ? { background: 'rgba(255,255,255,0.06)', color: 'rgba(245,240,232,0.90)', borderRadius: '4px 18px 18px 18px' }
                        : { background: GOLD, color: '#1a1a2e', fontWeight: 500, borderRadius: '18px 4px 18px 18px' }
                    }
                  >
                    {msg.content}
                  </div>
                  <span className="text-[10px] text-white/25 px-1">{formatTime(msg.timestamp)}</span>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center text-sm shrink-0"
                  style={{ background: `${DEMO_COMPANION.color}22` }}
                >
                  {DEMO_COMPANION.emoji}
                </div>
                <div
                  className="rounded-2xl px-4 py-3"
                  style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '4px 18px 18px 18px' }}
                >
                  <TypingIndicator />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* ── Signup nudge (after 3 messages) ── */}
          {showSignupNudge && (
            <div
              className="mx-4 mb-2 rounded-xl p-3 flex items-center justify-between gap-3"
              style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.18)' }}
            >
              <div>
                <p className="text-xs font-bold" style={{ color: GOLD }}>
                  Your real companion remembers all of this.
                </p>
                <p className="text-[11px] text-white/45">
                  Demo Aria forgets when you close the tab. The real one never does.
                </p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  href="/birth"
                  className="px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all hover:scale-105"
                  style={{ background: GOLD, color: '#1a1a2e' }}
                >
                  Start free
                </Link>
                <button
                  onClick={() => setShowSignupNudge(false)}
                  className="text-white/30 hover:text-white/60 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* ── Quick prompts ── */}
          {messages.length === 1 && (
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {STARTER_PROMPTS.map((p) => (
                <button
                  key={p.text}
                  onClick={() => sendMessage(p.text)}
                  className="text-xs px-3 py-1.5 rounded-full transition-all hover:scale-105"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.10)',
                    color: 'rgba(245,240,232,0.70)',
                  }}
                >
                  {p.icon} {p.text}
                </button>
              ))}
            </div>
          )}

          {/* ── Input area ── */}
          <div
            className="p-4 border-t"
            style={{ borderColor: 'rgba(255,255,255,0.06)', background: SURFACE }}
          >
            <form onSubmit={handleSubmit} className="flex gap-3 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Aria anything…"
                rows={1}
                className="flex-1 resize-none rounded-xl px-4 py-3 text-sm outline-none transition-all"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  color: 'rgba(245,240,232,0.90)',
                  minHeight: '44px',
                  maxHeight: '120px',
                  lineHeight: '1.5',
                }}
                onInput={(e) => {
                  const el = e.currentTarget;
                  el.style.height = 'auto';
                  el.style.height = Math.min(el.scrollHeight, 120) + 'px';
                }}
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all hover:scale-110 disabled:opacity-30"
                style={{ background: GOLD, color: '#1a1a2e' }}
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-white/20 text-center mt-2">
              Demo mode · Responses are pre-set · <Link href="/birth" className="underline hover:text-white/40">Get the real thing</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
