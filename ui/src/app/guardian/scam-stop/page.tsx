'use client';

import { useState } from 'react';
import Link from 'next/link';

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────

const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';

// ─── SCAM TYPE CARDS ──────────────────────────────────────────────────────────

const SCAM_TYPES = [
  {
    emoji: '🖥️',
    title: 'Tech Support',
    color: '#f87171',
    description:
      'Fake alerts claiming your device is infected, demanding remote access or payment for "repairs" that were never needed.',
    pattern: '"Your computer has been compromised. Call this number immediately or your data will be deleted."',
  },
  {
    emoji: '💕',
    title: 'Romance',
    color: '#f472b6',
    description:
      'Trust-building over weeks or months followed by fabricated emergencies requiring urgent money transfers.',
    pattern: '"I know we haven\'t met yet but I\'ve never felt this way. I just need £500 for my flight to see you."',
  },
  {
    emoji: '📈',
    title: 'Investment',
    color: '#facc15',
    description:
      'Guaranteed returns, crypto schemes, and high-pressure tactics designed to separate you from your savings.',
    pattern: '"This AI trading platform guarantees 300% returns. The window closes in 24 hours — act now."',
  },
  {
    emoji: '👵',
    title: 'Grandparent',
    color: '#fb923c',
    description:
      'Impersonating a grandchild in distress, exploiting love and urgency to extract immediate wire transfers.',
    pattern: '"Gran, it\'s me. I\'m in trouble and I need you to send money right now. Please don\'t tell mum."',
  },
  {
    emoji: '🎣',
    title: 'Phishing',
    color: '#60a5fa',
    description:
      'Fake emails and texts mimicking banks, HMRC, or delivery services to harvest login credentials and card details.',
    pattern: '"HMRC: You are owed a tax refund of £472.30. Verify your identity to claim: [suspicious link]"',
  },
  {
    emoji: '🤖',
    title: 'Deepfake',
    color: '#a78bfa',
    description:
      'AI-generated voice or video impersonating someone you trust — a boss, family member, or public figure.',
    pattern: '"Hi, this is your CEO. I need you to process an urgent wire transfer before end of day. Keep this confidential."',
  },
];

// ─── HOW IT WORKS STEPS ───────────────────────────────────────────────────────

const STEPS = [
  {
    number: '01',
    emoji: '📋',
    title: 'Paste the message',
    body: 'Copy any suspicious text, email, or message into the scanner. SMS, WhatsApp, email — anything.',
    color: GOLD,
  },
  {
    number: '02',
    emoji: '🧠',
    title: 'AI analyses patterns',
    body: 'DistilBERT threat classification runs alongside pattern matching across 15+ fraud indicator categories in milliseconds.',
    color: '#60a5fa',
  },
  {
    number: '03',
    emoji: '✅',
    title: 'Get instant verdict',
    body: 'Threat level rated LOW to CRITICAL with specific categories detected, so you know exactly what to watch for.',
    color: '#4ade80',
  },
];

// ─── THREAT LEVEL COLOURS ─────────────────────────────────────────────────────

function threatColor(level: string): string {
  const map: Record<string, string> = {
    LOW: '#71717a',
    MEDIUM: '#fbbf24',
    HIGH: '#f97316',
    CRITICAL: '#ef4444',
  };
  return map[level?.toUpperCase()] || '#71717a';
}

// ─── COMPONENT ────────────────────────────────────────────────────────────────

export default function ScamStopPage() {
  const [message, setMessage] = useState('');
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<{
    threatLevel: string;
    score: number;
    categories: string[];
    summary: string;
  } | null>(null);
  const [error, setError] = useState('');

  // Set document title for SEO (client component workaround)
  if (typeof document !== 'undefined') {
    document.title = 'Scam Stop — AI Scam Protection | MEOK Guardian';
  }

  async function handleScan() {
    if (!message.trim()) return;
    setScanning(true);
    setResult(null);
    setError('');

    try {
      const res = await fetch('/api/guardian/scan-message', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: message.trim() }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      setResult({
        threatLevel: data.threatLevel || data.threat_level || 'UNKNOWN',
        score: data.score ?? data.confidence ?? 0,
        categories: data.categories || data.flags || [],
        summary: data.summary || data.message || 'Analysis complete.',
      });
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Something went wrong';
      setError(msg);
    } finally {
      setScanning(false);
    }
  }

  const tColor = result ? threatColor(result.threatLevel) : '#71717a';

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
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          minHeight: '70vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '7rem 1.5rem 4rem',
          textAlign: 'center',
        }}
      >
        {/* Badge */}
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
            maxWidth: 800,
            marginBottom: 20,
          }}
        >
          Scam Stop
        </h1>

        <p
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            color: 'rgba(255,255,255,0.55)',
            maxWidth: 600,
            lineHeight: 1.7,
            marginBottom: 8,
          }}
        >
          AI-powered scam protection that analyses suspicious messages in real time.
          Paste anything — texts, emails, DMs — and know instantly if it is a threat.
        </p>

        <p
          style={{
            fontSize: 12,
            color: 'rgba(255,255,255,0.2)',
            fontFamily: 'monospace',
            marginTop: 16,
          }}
        >
          DistilBERT threat detection · On-device · Nothing stored
        </p>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ─── 2. INTERACTIVE DEMO ──────────────────────────────────────────── */}
      <section style={{ padding: '5rem 1.5rem', background: DEEP }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
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
              Try it now
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900 }}>
              Scan a Suspicious Message
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: 12, fontSize: 14, lineHeight: 1.6 }}>
              Paste any message you have received and our AI will analyse it for scam patterns.
            </p>
          </div>

          {/* Textarea */}
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Paste a suspicious message here..."
            rows={6}
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
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = `${GOLD}60`;
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = BORDER;
            }}
          />

          {/* Scan button */}
          <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end' }}>
            <button
              onClick={handleScan}
              disabled={scanning || !message.trim()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 32px',
                borderRadius: 9999,
                fontWeight: 700,
                fontSize: 14,
                border: 'none',
                cursor: scanning || !message.trim() ? 'not-allowed' : 'pointer',
                background: scanning || !message.trim() ? 'rgba(201,168,76,0.3)' : GOLD,
                color: scanning || !message.trim() ? 'rgba(255,255,255,0.5)' : DEEP,
                transition: 'all 0.2s',
              }}
            >
              {scanning ? '⏳ Scanning...' : '🔍 Scan Message'}
            </button>
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                marginTop: 20,
                padding: 16,
                borderRadius: 12,
                background: 'rgba(239,68,68,0.08)',
                border: '1px solid rgba(239,68,68,0.25)',
                color: '#fca5a5',
                fontSize: 14,
              }}
            >
              {error}
            </div>
          )}

          {/* Result */}
          {result && (
            <div
              style={{
                marginTop: 24,
                padding: 28,
                borderRadius: 16,
                background: SURFACE,
                border: `1px solid ${tColor}40`,
              }}
            >
              {/* Threat level badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '6px 14px',
                    borderRadius: 9999,
                    fontSize: 12,
                    fontWeight: 900,
                    letterSpacing: '0.06em',
                    background: `${tColor}18`,
                    color: tColor,
                    border: `1px solid ${tColor}40`,
                  }}
                >
                  {result.threatLevel.toUpperCase()}
                </span>
                {result.score > 0 && (
                  <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
                    Confidence: {(result.score * 100).toFixed(0)}%
                  </span>
                )}
              </div>

              {/* Summary */}
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: 16 }}>
                {result.summary}
              </p>

              {/* Categories */}
              {result.categories.length > 0 && (
                <div>
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
                    Categories Detected
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {result.categories.map((cat) => (
                      <span
                        key={cat}
                        style={{
                          padding: '5px 12px',
                          borderRadius: 9999,
                          fontSize: 12,
                          fontWeight: 600,
                          background: `${tColor}12`,
                          color: `${tColor}`,
                          border: `1px solid ${tColor}30`,
                        }}
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ─── 3. SCAM TYPE CARDS ───────────────────────────────────────────── */}
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
              Threat library
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900 }}>
              What We Detect
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.45)', marginTop: 12, fontSize: 14, maxWidth: 520, margin: '12px auto 0' }}>
              Six major scam categories, each with dedicated detection patterns trained on real-world fraud data.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))',
              gap: 20,
            }}
          >
            {SCAM_TYPES.map((scam) => (
              <div
                key={scam.title}
                style={{
                  padding: 28,
                  borderRadius: 16,
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                  borderLeft: `3px solid ${scam.color}80`,
                  transition: 'border-color 0.2s',
                }}
              >
                {/* Icon + Title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 20,
                      background: `${scam.color}15`,
                      border: `1px solid ${scam.color}30`,
                    }}
                  >
                    {scam.emoji}
                  </div>
                  <h3 style={{ fontSize: 16, fontWeight: 900, color: scam.color }}>
                    {scam.title}
                  </h3>
                </div>

                {/* Description */}
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: 14 }}>
                  {scam.description}
                </p>

                {/* Example pattern */}
                <div
                  style={{
                    padding: '10px 14px',
                    borderRadius: 10,
                    background: 'rgba(255,255,255,0.03)',
                    border: `1px solid ${BORDER}`,
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.35)',
                    lineHeight: 1.5,
                    fontStyle: 'italic',
                  }}
                >
                  <span style={{ color: `${scam.color}90`, fontStyle: 'normal', fontWeight: 700, fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Example:{' '}
                  </span>
                  {scam.pattern}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ─── 4. HOW IT WORKS ──────────────────────────────────────────────── */}
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
              Three-step protection
            </p>
            <h2 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', fontWeight: 900 }}>
              How It Works
            </h2>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 20,
            }}
          >
            {STEPS.map((step) => (
              <div
                key={step.number}
                style={{
                  padding: 28,
                  borderRadius: 16,
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 900,
                      padding: '3px 10px',
                      borderRadius: 6,
                      background: `${step.color}18`,
                      color: step.color,
                      border: `1px solid ${step.color}30`,
                    }}
                  >
                    {step.number}
                  </span>
                  <span style={{ fontSize: 22 }}>{step.emoji}</span>
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 900, marginBottom: 8 }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ─── 5. PRIVACY ───────────────────────────────────────────────────── */}
      <section style={{ padding: '4rem 1.5rem', background: DEEP }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div
            style={{
              padding: 32,
              borderRadius: 16,
              background: `${GOLD}0A`,
              border: `1px solid ${GOLD}33`,
              display: 'flex',
              gap: 20,
              alignItems: 'flex-start',
            }}
          >
            <div
              style={{
                flexShrink: 0,
                width: 48,
                height: 48,
                borderRadius: 12,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 24,
                background: `${GOLD}26`,
                border: `1px solid ${GOLD}4D`,
              }}
            >
              🔒
            </div>
            <div>
              <h3 style={{ fontSize: 16, fontWeight: 900, marginBottom: 12 }}>
                We Analyse Patterns, Never Store Your Messages
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  'Messages are analysed in real time and immediately discarded. Nothing is stored on MEOK servers.',
                  'Pattern analysis happens on-device wherever possible. Your data never leaves your control.',
                  'No message content is used for training, advertising, or shared with any third party.',
                  'ScamStop is consent-first. You choose when to scan and what to share.',
                ].map((item) => (
                  <li
                    key={item}
                    style={{
                      display: 'flex',
                      gap: 8,
                      fontSize: 14,
                      color: 'rgba(255,255,255,0.55)',
                      lineHeight: 1.6,
                    }}
                  >
                    <span style={{ color: GOLD, flexShrink: 0 }}>·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ──────────────────────────────────────────────────────── */}
      <div style={{ height: 1, background: BORDER, margin: '0 auto', maxWidth: 900 }} />

      {/* ─── 6. CTA ───────────────────────────────────────────────────────── */}
      <section
        style={{
          position: 'relative',
          padding: '6rem 1.5rem',
          background: DEEP,
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <div style={{ fontSize: 40, marginBottom: 20 }}>🛡️</div>

        <h2
          style={{
            fontSize: 'clamp(1.8rem, 5vw, 3rem)',
            fontWeight: 900,
            lineHeight: 1,
            maxWidth: 600,
            margin: '0 auto 16px',
          }}
        >
          Protect Yourself{' '}
          <span
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #e0bb60)`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Free
          </span>
        </h2>

        <p
          style={{
            fontSize: 16,
            color: 'rgba(255,255,255,0.4)',
            maxWidth: 480,
            margin: '0 auto 36px',
            lineHeight: 1.6,
          }}
        >
          Real-time scam detection powered by DistilBERT AI. No sign-up wall for the scanner.
          Full Guardian protection when you hatch your MEOK.
        </p>

        <Link
          href="/hatch"
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
          Protect Yourself Free →
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
    </div>
  );
}
