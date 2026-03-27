'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────

const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';

// ─── SCAM ANALYSIS (CLIENT-SIDE ONLY) ─────────────────────────────────────────

function analyseScam(text: string): { score: number; flags: string[] } {
  const lower = text.toLowerCase();
  let score = 0;
  const flags: string[] = [];

  if (lower.includes('urgent') || lower.includes('immediately')) {
    score += 20;
    flags.push('Urgency language');
  }
  if (lower.includes('bank') || lower.includes('account') || lower.includes('payment')) {
    score += 15;
    flags.push('Financial pressure');
  }
  if (lower.includes('click') || lower.includes('link') || lower.includes('http')) {
    score += 20;
    flags.push('Suspicious link');
  }
  if (lower.includes('prize') || lower.includes('winner') || lower.includes('won')) {
    score += 25;
    flags.push('Prize/lottery claim');
  }
  if (lower.includes('verify') || lower.includes('suspended') || lower.includes('locked')) {
    score += 20;
    flags.push('Account threat');
  }
  if (lower.includes('dear customer') || lower.includes('dear user')) {
    score += 10;
    flags.push('Generic greeting');
  }
  if (lower.includes('£') || lower.includes('$') || lower.includes('€')) {
    score += 10;
    flags.push('Money mention');
  }
  if (/\d{4,}/.test(text)) {
    score += 5;
    flags.push('Long number string');
  }

  return { score: Math.min(score, 100), flags };
}

// ─── EXAMPLE SCAM CARDS ───────────────────────────────────────────────────────

const EXAMPLES = [
  {
    category: 'Investment',
    emoji: '📈',
    color: '#facc15',
    text: "URGENT: Your £500 investment has grown to £50,000! Click here immediately to claim: bit.ly/claim-now",
  },
  {
    category: 'Bank',
    emoji: '🏦',
    color: '#60a5fa',
    text: "Dear Customer, your account has been suspended. Verify immediately to avoid permanent closure.",
  },
  {
    category: 'Romance',
    emoji: '💕',
    color: '#f472b6',
    text: "My darling, I am a doctor in Syria. I have $2,000,000 I need your help to move. I love you.",
  },
  {
    category: 'Prize',
    emoji: '🎉',
    color: '#4ade80',
    text: "Congratulations! You are our 1,000,000th visitor! You have won a prize. Click to verify your details.",
  },
  {
    category: 'Tech Support',
    emoji: '🖥️',
    color: '#f87171',
    text: "Microsoft Alert: Your computer has a virus! Call our technicians immediately: 0800-123-4567",
  },
  {
    category: 'Crypto',
    emoji: '₿',
    color: '#fb923c',
    text: "LAST CHANCE: Bitcoin is going to $200k. This exclusive signal group expires in 24 hours.",
  },
];

// ─── SVG ARC GAUGE ─────────────────────────────────────────────────────────────

function arcPath(cx: number, cy: number, r: number, startDeg: number, endDeg: number): string {
  const toRad = (d: number) => ((d - 90) * Math.PI) / 180;
  const x1 = cx + r * Math.cos(toRad(startDeg));
  const y1 = cy + r * Math.sin(toRad(startDeg));
  const x2 = cx + r * Math.cos(toRad(endDeg));
  const y2 = cy + r * Math.sin(toRad(endDeg));
  const large = endDeg - startDeg > 180 ? 1 : 0;
  return `M ${x1} ${y1} A ${r} ${r} 0 ${large} 1 ${x2} ${y2}`;
}

function scoreColor(score: number): string {
  if (score < 30) return '#4ade80';
  if (score < 60) return '#fbbf24';
  return '#ef4444';
}

function verdict(score: number): { label: string; icon: string; color: string } {
  if (score < 30) return { label: 'SAFE', icon: '✅', color: '#4ade80' };
  if (score < 60) return { label: 'SUSPICIOUS', icon: '⚠️', color: '#fbbf24' };
  return { label: 'LIKELY SCAM', icon: '🚨', color: '#ef4444' };
}

interface GaugeProps {
  targetScore: number;
  animate: boolean;
}

function RiskGauge({ targetScore, animate }: GaugeProps) {
  const [displayed, setDisplayed] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);
  const duration = 1200; // ms

  useEffect(() => {
    if (!animate) {
      setDisplayed(0);
      return;
    }
    startTimeRef.current = performance.now();

    function step(now: number) {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplayed(Math.round(eased * targetScore));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate, targetScore]);

  const cx = 120;
  const cy = 120;
  const r = 88;
  // Arc spans from -210° to +30° (240° sweep) — bottom-open semicircle
  const startDeg = 150;
  const endDeg = 390; // = 30 next revolution
  const fillEndDeg = startDeg + (displayed / 100) * 240;

  const trackPath = arcPath(cx, cy, r, startDeg, endDeg);
  const fillPath = displayed > 0 ? arcPath(cx, cy, r, startDeg, fillEndDeg) : '';
  const color = scoreColor(displayed);
  const v = verdict(displayed);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
      <svg width={240} height={200} viewBox="0 0 240 200" style={{ overflow: 'visible' }}>
        {/* Track */}
        <path
          d={trackPath}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth={18}
          strokeLinecap="round"
        />
        {/* Fill */}
        {fillPath && (
          <path
            d={fillPath}
            fill="none"
            stroke={color}
            strokeWidth={18}
            strokeLinecap="round"
            style={{ filter: `drop-shadow(0 0 8px ${color}80)` }}
          />
        )}
        {/* Score text */}
        <text
          x={cx}
          y={cy + 10}
          textAnchor="middle"
          fill="#fff"
          fontSize={48}
          fontWeight={900}
          fontFamily="DM Sans, sans-serif"
        >
          {displayed}
        </text>
        <text
          x={cx}
          y={cy + 34}
          textAnchor="middle"
          fill="rgba(255,255,255,0.3)"
          fontSize={13}
          fontFamily="DM Sans, sans-serif"
        >
          Risk Score
        </text>
        {/* Zone labels */}
        <text x={28} y={170} fill="#4ade80" fontSize={10} fontFamily="monospace">LOW</text>
        <text x={104} y={200} fill="#fbbf24" fontSize={10} fontFamily="monospace" textAnchor="middle">MED</text>
        <text x={198} y={170} fill="#ef4444" fontSize={10} fontFamily="monospace" textAnchor="end">HIGH</text>
      </svg>

      {/* Verdict */}
      {animate && displayed > 0 && (
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 20px',
            borderRadius: 9999,
            fontSize: 15,
            fontWeight: 900,
            letterSpacing: '0.06em',
            background: `${v.color}18`,
            border: `1px solid ${v.color}50`,
            color: v.color,
          }}
        >
          {v.icon} {v.label}
        </div>
      )}
    </div>
  );
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ScamStopPage() {
  const [message, setMessage] = useState('');
  const [analysing, setAnalysing] = useState(false);
  const [result, setResult] = useState<{ score: number; flags: string[] } | null>(null);
  const [gaugeActive, setGaugeActive] = useState(false);

  function handleAnalyse() {
    if (!message.trim() || analysing) return;
    setAnalysing(true);
    setResult(null);
    setGaugeActive(false);

    setTimeout(() => {
      const res = analyseScam(message);
      setResult(res);
      setGaugeActive(true);
      setAnalysing(false);
    }, 1500);
  }

  function loadExample(text: string) {
    setMessage(text);
    setResult(null);
    setGaugeActive(false);
  }

  const v = result ? verdict(result.score) : null;

  return (
    <div
      style={{
        minHeight: '100vh',
        background: DEEP,
        color: '#fff',
        fontFamily: "'DM Sans', sans-serif",
        overflowX: 'hidden',
      }}
    >
      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 1 — HERO
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          position: 'relative',
          minHeight: '65vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7rem 1.5rem 4rem',
          textAlign: 'center',
        }}
      >
        {/* Guardian breadcrumb badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 9999,
            background: `${GOLD}18`,
            border: `1px solid ${GOLD}50`,
            color: GOLD,
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: 32,
          }}
        >
          🛡️ Guardian · Scam Stop
        </div>

        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            fontWeight: 900,
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            maxWidth: 820,
            marginBottom: 20,
          }}
        >
          Scam Stop —{' '}
          <span
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #e0bb60)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Real-Time AI Protection
          </span>
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 600,
            lineHeight: 1.7,
            marginBottom: 28,
          }}
        >
          AI-generated scams achieve{' '}
          <strong style={{ color: '#ef4444' }}>54% click-through rates</strong>.
          {' '}Ours stops them.
        </p>

        {/* Demo badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 20px',
            borderRadius: 9999,
            background: 'rgba(74,222,128,0.08)',
            border: '1px solid rgba(74,222,128,0.3)',
            color: '#4ade80',
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          ✦ Try the live detector below — no signup needed
        </div>

        <p
          style={{
            fontSize: 11,
            color: 'rgba(255,255,255,0.18)',
            fontFamily: 'monospace',
            marginTop: 24,
          }}
        >
          Client-side only · Nothing sent to servers · Nothing stored
        </p>
      </section>

      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 2 — INTERACTIVE SCAM DETECTOR
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5rem 1.5rem', background: DEEP }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <p
              style={{
                fontSize: 11,
                fontFamily: 'monospace',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: `${GOLD}99`,
                marginBottom: 10,
              }}
            >
              Live detector
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900 }}>
              Paste Any Suspicious Message
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>
              SMS, email, WhatsApp, DM — the AI analyses it for 8 scam indicators instantly.
            </p>
          </div>

          {/* Two-column layout: textarea left, gauge right */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 32,
              alignItems: 'start',
            }}
          >
            {/* Left: input */}
            <div>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Paste any suspicious message here..."
                rows={7}
                style={{
                  width: '100%',
                  padding: 20,
                  borderRadius: 16,
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                  color: '#fff',
                  fontSize: 15,
                  lineHeight: 1.6,
                  resize: 'vertical',
                  fontFamily: "'DM Sans', sans-serif",
                  outline: 'none',
                  boxSizing: 'border-box',
                  transition: 'border-color 0.2s',
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = BORDER; }}
              />

              <button
                onClick={handleAnalyse}
                disabled={analysing || !message.trim()}
                style={{
                  marginTop: 12,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  padding: '14px 32px',
                  borderRadius: 12,
                  fontWeight: 700,
                  fontSize: 15,
                  border: 'none',
                  cursor: analysing || !message.trim() ? 'not-allowed' : 'pointer',
                  background:
                    analysing || !message.trim()
                      ? 'rgba(201,168,76,0.25)'
                      : GOLD,
                  color:
                    analysing || !message.trim()
                      ? 'rgba(255,255,255,0.4)'
                      : DEEP,
                  transition: 'all 0.2s',
                  fontFamily: "'DM Sans', sans-serif",
                }}
              >
                {analysing ? (
                  <>
                    <span
                      style={{
                        display: 'inline-block',
                        width: 14,
                        height: 14,
                        border: '2px solid rgba(255,255,255,0.3)',
                        borderTopColor: '#fff',
                        borderRadius: '50%',
                        animation: 'spin 0.7s linear infinite',
                      }}
                    />
                    Analysing…
                  </>
                ) : (
                  '🔍 Analyse'
                )}
              </button>
            </div>

            {/* Right: gauge + flags */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
              <RiskGauge targetScore={result?.score ?? 0} animate={gaugeActive} />

              {/* Flags */}
              {result && result.flags.length > 0 && (
                <div
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: 12,
                    background: SURFACE,
                    border: `1px solid ${BORDER}`,
                  }}
                >
                  <p
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.3)',
                      marginBottom: 10,
                    }}
                  >
                    Indicators Detected
                  </p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {result.flags.map((flag) => (
                      <li
                        key={flag}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                          fontSize: 13,
                          color: 'rgba(255,255,255,0.7)',
                        }}
                      >
                        <span style={{ fontSize: 14 }}>⚠️</span>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {result && result.flags.length === 0 && gaugeActive && (
                <div
                  style={{
                    width: '100%',
                    padding: '14px 20px',
                    borderRadius: 12,
                    background: 'rgba(74,222,128,0.06)',
                    border: '1px solid rgba(74,222,128,0.2)',
                    fontSize: 13,
                    color: '#4ade80',
                    textAlign: 'center',
                  }}
                >
                  No scam indicators detected in this message.
                </div>
              )}

              {/* How Guardian protects you */}
              {result && v && (
                <div
                  style={{
                    width: '100%',
                    padding: '14px 18px',
                    borderRadius: 12,
                    background: `${GOLD}0A`,
                    border: `1px solid ${GOLD}25`,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.6,
                  }}
                >
                  <strong style={{ color: GOLD, display: 'block', marginBottom: 4, fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    What MEOK Guardian does
                  </strong>
                  In real-world protection, Guardian runs this analysis on every message
                  that enters your network — in under 50ms, without storing anything. When
                  a risk score exceeds the threshold, your trusted contacts are alerted
                  before you can act on a scam.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 3 — EXAMPLE SCAM CARDS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5rem 1.5rem', background: DEEP }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p
              style={{
                fontSize: 11,
                fontFamily: 'monospace',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: `${GOLD}99`,
                marginBottom: 10,
              }}
            >
              Scam examples
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900 }}>
              Try These Real Scam Patterns
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.45)',
                marginTop: 12,
                fontSize: 14,
                maxWidth: 520,
                margin: '12px auto 0',
                lineHeight: 1.6,
              }}
            >
              Click any card to load it into the detector above, then hit Analyse.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: 16,
            }}
          >
            {EXAMPLES.map((ex) => (
              <div
                key={ex.category}
                style={{
                  padding: 22,
                  borderRadius: 14,
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${ex.color}70`,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {/* Category badge */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 18 }}>{ex.emoji}</span>
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 800,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '3px 10px',
                      borderRadius: 9999,
                      background: `${ex.color}15`,
                      color: ex.color,
                      border: `1px solid ${ex.color}30`,
                    }}
                  >
                    {ex.category}
                  </span>
                </div>

                {/* Message preview */}
                <p
                  style={{
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.5)',
                    lineHeight: 1.55,
                    fontStyle: 'italic',
                    flexGrow: 1,
                  }}
                >
                  &ldquo;{ex.text}&rdquo;
                </p>

                {/* Try button */}
                <button
                  onClick={() => {
                    loadExample(ex.text);
                    // Scroll to detector on mobile
                    if (typeof window !== 'undefined') {
                      const el = document.querySelector('textarea');
                      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 6,
                    padding: '8px 0',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    background: `${ex.color}15`,
                    border: `1px solid ${ex.color}35`,
                    color: ex.color,
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    fontFamily: "'DM Sans', sans-serif",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = `${ex.color}28`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = `${ex.color}15`; }}
                >
                  Try →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ═══════════════════════════════════════════════════════════════════════
          SECTION 4 — STATS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section style={{ padding: '5rem 1.5rem', background: DEEP }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <p
              style={{
                fontSize: 11,
                fontFamily: 'monospace',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: `${GOLD}99`,
                marginBottom: 10,
              }}
            >
              The threat is real
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900 }}>
              Why This Matters
            </h2>
          </div>

          {/* Click-rate comparison */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
              marginBottom: 20,
            }}
          >
            <div
              style={{
                padding: 28,
                borderRadius: 16,
                background: SURFACE,
                border: '1px solid rgba(239,68,68,0.25)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 52, fontWeight: 900, color: '#ef4444', lineHeight: 1, marginBottom: 8 }}>
                54%
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>
                AI-generated phishing click rate
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>
                Hyper-personalised deepfake attacks crafted by AI to exploit each target individually
              </div>
            </div>

            <div
              style={{
                padding: 28,
                borderRadius: 16,
                background: SURFACE,
                border: '1px solid rgba(74,222,128,0.2)',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 52, fontWeight: 900, color: '#4ade80', lineHeight: 1, marginBottom: 8 }}>
                12%
              </div>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.7)', marginBottom: 6 }}>
                Traditional phishing click rate
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)', lineHeight: 1.5 }}>
                Generic mass-sent scams still catch 1 in 8 people — AI scams are 4× more dangerous
              </div>
            </div>
          </div>

          {/* Stat cards row */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: 16,
            }}
          >
            <div
              style={{
                padding: 24,
                borderRadius: 14,
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>😯</span>
              <div>
                <div style={{ fontSize: 22, fontWeight: 900, color: '#fbbf24', lineHeight: 1, marginBottom: 6 }}>
                  96%
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  of people think they can spot scams. Research shows they cannot — especially with AI-personalised attacks.
                </div>
              </div>
            </div>

            <div
              style={{
                padding: 24,
                borderRadius: 14,
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                display: 'flex',
                gap: 16,
                alignItems: 'flex-start',
              }}
            >
              <span style={{ fontSize: 28, flexShrink: 0 }}>⚡</span>
              <div>
                <div style={{ fontSize: 22, fontWeight: 900, color: GOLD, lineHeight: 1, marginBottom: 6 }}>
                  Real time
                </div>
                <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  MEOK Guardian runs on every message in your network — under 50ms per scan — so protection never slows you down.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ═══════════════════════════════════════════════════════════════════════
          CTA
      ═══════════════════════════════════════════════════════════════════════ */}
      <section
        style={{
          padding: '6rem 1.5rem',
          background: DEEP,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 20 }}>🛡️</div>

        <h2
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1.05,
            maxWidth: 600,
            margin: '0 auto 16px',
          }}
        >
          Get Protected{' '}
          <span
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #e0bb60)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            For Free
          </span>
        </h2>

        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.4)',
            maxWidth: 460,
            margin: '0 auto 36px',
            lineHeight: 1.65,
          }}
        >
          Real-time scam detection running silently in the background.
          No sign-up wall for the scanner. Full Guardian protection when you join MEOK.
        </p>

        <Link
          href="/birth"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '16px 36px',
            borderRadius: 9999,
            fontWeight: 700,
            fontSize: 15,
            background: GOLD,
            color: DEEP,
            textDecoration: 'none',
            transition: 'all 0.2s',
          }}
        >
          Get protected for free →
        </Link>

        <p
          style={{
            marginTop: 20,
            fontSize: 12,
            color: 'rgba(255,255,255,0.18)',
            fontFamily: 'monospace',
          }}
        >
          Consent-first · Encrypted · 24/7 · Never sold
        </p>
      </section>

      {/* Spinner keyframe */}
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
