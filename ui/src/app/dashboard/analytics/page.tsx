'use client';

import { useEffect, useState } from 'react';

/* ── MEOK Brand Tokens ── */
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';
const TEXT = '#e2e0d8';
const TEXT_DIM = 'rgba(255,255,255,0.45)';
const GOLD_DIM = 'rgba(201,168,76,0.15)';

/* ── Types ── */
interface ProgressData {
  messagesThisWeek: number;
  currentStreak: number;
  bondLevel: number;
  moodTrend: string;
  estimatedCost: number;
}

interface CareSignal {
  id: string;
  message: string;
  timestamp: string;
}

/* ── Placeholder Data ── */
const COMPANION_INSIGHTS = {
  mostUsed: 'Aria',
  totalSessions: 23,
  favoriteTopics: ['Creative Writing', 'Self-Reflection', 'Goal Setting', 'Philosophy'],
};

const EMOTIONS: { label: string; count: number }[] = [
  { label: 'Joy', count: 34 },
  { label: 'Calm', count: 28 },
  { label: 'Curiosity', count: 41 },
  { label: 'Sadness', count: 9 },
  { label: 'Anxiety', count: 12 },
];

const CARE_SIGNALS: CareSignal[] = [
  { id: '1', message: 'Aria noticed you seemed tired and suggested a break.', timestamp: '2 hours ago' },
  { id: '2', message: 'Your weekly reflection prompt was delivered.', timestamp: '1 day ago' },
  { id: '3', message: 'Bond milestone reached — Level 4 unlocked.', timestamp: '2 days ago' },
  { id: '4', message: 'Mood pattern detected: consistently calmer in mornings.', timestamp: '3 days ago' },
  { id: '5', message: 'Aria flagged a recurring theme in your journals.', timestamp: '5 days ago' },
];

const MEMORY_HIGHLIGHTS = [
  'You mentioned wanting to learn piano last Tuesday.',
  'Your favourite way to unwind is walking by the river.',
  'You set a goal to read 2 books this month — currently at 1.',
];

/* ── Skeleton Pulse ── */
const pulseKeyframes = `
@keyframes skeletonPulse {
  0%, 100% { opacity: 0.35; }
  50% { opacity: 0.15; }
}
`;

function Skeleton({ width = '100%', height = 20 }: { width?: string | number; height?: number }) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius: 6,
        background: 'rgba(255,255,255,0.06)',
        animation: 'skeletonPulse 1.6s ease-in-out infinite',
      }}
    />
  );
}

/* ── Stat Card ── */
function StatCard({
  label,
  value,
  loading,
}: {
  label: string;
  value: string | number;
  loading: boolean;
}) {
  return (
    <div
      className="flex flex-col gap-1.5 p-4 md:p-5"
      style={{
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
      }}
    >
      {loading ? (
        <>
          <Skeleton width={80} height={14} />
          <Skeleton width={60} height={36} />
        </>
      ) : (
        <>
          <span className="text-xs md:text-[13px]" style={{ color: TEXT_DIM, letterSpacing: '0.04em' }}>{label}</span>
          <span className="text-2xl md:text-[32px]" style={{ fontWeight: 700, color: TEXT, lineHeight: 1.1 }}>
            {value}
          </span>
        </>
      )}
    </div>
  );
}

/* ── Date helpers ── */
function getWeekRange(): string {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const monday = new Date(now);
  monday.setDate(now.getDate() - ((dayOfWeek + 6) % 7));
  const sunday = new Date(monday);
  sunday.setDate(monday.getDate() + 6);
  const fmt = (d: Date) =>
    d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
  return `${fmt(monday)} — ${fmt(sunday)}`;
}

/* ── Main Page ── */
export default function AnalyticsPage() {
  const [progress, setProgress] = useState<ProgressData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function fetchProgress() {
      try {
        const res = await fetch('/api/user/progress');
        if (!res.ok) throw new Error('fetch failed');
        const data = await res.json();
        if (!cancelled) setProgress(data);
      } catch {
        // Fall back to placeholder data
        if (!cancelled) {
          setProgress({
            messagesThisWeek: 47,
            currentStreak: 5,
            bondLevel: 4,
            moodTrend: 'Upward',
            estimatedCost: 1.23,
          });
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    fetchProgress();
    return () => {
      cancelled = true;
    };
  }, []);

  const maxEmotion = Math.max(...EMOTIONS.map((e) => e.count));

  return (
    <>
      <style>{pulseKeyframes}</style>

      <div
        className="min-h-screen px-4 md:px-6 lg:px-8 pt-6 md:pt-10 pb-20 max-w-[960px] mx-auto"
        style={{
          background: DEEP,
          color: TEXT,
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* ── 1. Header ── */}
        <header style={{ marginBottom: 36 }}>
          <h1 className="text-xl md:text-2xl lg:text-[28px]" style={{ fontWeight: 700, margin: 0, color: TEXT }}>
            Your Journey
          </h1>
          <p style={{ fontSize: 14, color: TEXT_DIM, marginTop: 6 }}>{getWeekRange()}</p>
        </header>

        {/* ── 2. Quick Stats Row ── */}
        <section
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3.5 mb-9"
        >
          <StatCard
            label="Messages This Week"
            value={progress?.messagesThisWeek ?? 0}
            loading={loading}
          />
          <StatCard
            label="Current Streak"
            value={progress ? `${progress.currentStreak}d` : '0d'}
            loading={loading}
          />
          <StatCard
            label="Bond Level"
            value={progress?.bondLevel ?? 0}
            loading={loading}
          />
          <StatCard
            label="Mood Trend"
            value={progress?.moodTrend ?? '—'}
            loading={loading}
          />
        </section>

        {/* ── 3. Companion Insights ── */}
        <section
          className="p-4 md:p-6 mb-6"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
          }}
        >
          <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 16px', color: TEXT }}>
            Companion Insights
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: 16,
            }}
          >
            <div>
              <span style={{ fontSize: 12, color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Most Used
              </span>
              <p style={{ fontSize: 20, fontWeight: 600, margin: '4px 0 0', color: GOLD }}>
                {COMPANION_INSIGHTS.mostUsed}
              </p>
            </div>
            <div>
              <span style={{ fontSize: 12, color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Sessions This Month
              </span>
              <p style={{ fontSize: 20, fontWeight: 600, margin: '4px 0 0' }}>
                {COMPANION_INSIGHTS.totalSessions}
              </p>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <span style={{ fontSize: 12, color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Favourite Topics
              </span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                {COMPANION_INSIGHTS.favoriteTopics.map((topic) => (
                  <span
                    key={topic}
                    style={{
                      fontSize: 13,
                      padding: '5px 12px',
                      borderRadius: 20,
                      background: GOLD_DIM,
                      color: GOLD,
                      border: `1px solid rgba(201,168,76,0.2)`,
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Emotion Distribution ── */}
        <section
          className="p-4 md:p-6 mb-6"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
          }}
        >
          <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 20px', color: TEXT }}>
            Emotion Distribution
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {EMOTIONS.map((emotion) => {
              const pct = Math.round((emotion.count / maxEmotion) * 100);
              return (
                <div key={emotion.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span
                    style={{
                      width: 72,
                      fontSize: 13,
                      color: TEXT_DIM,
                      flexShrink: 0,
                      textAlign: 'right',
                    }}
                  >
                    {emotion.label}
                  </span>
                  <div
                    style={{
                      flex: 1,
                      height: 24,
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 6,
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        width: `${pct}%`,
                        height: '100%',
                        background: `linear-gradient(90deg, ${GOLD}, rgba(201,168,76,0.6))`,
                        borderRadius: 6,
                        transition: 'width 0.6s ease',
                      }}
                    />
                  </div>
                  <span style={{ width: 32, fontSize: 13, color: TEXT_DIM, flexShrink: 0 }}>
                    {emotion.count}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── 5. Cost Transparency ── */}
        <section
          className="p-4 md:p-6 mb-6"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
          }}
        >
          <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 12px', color: TEXT }}>
            Your AI Usage This Month
          </h2>
          {loading ? (
            <Skeleton width="70%" height={18} />
          ) : (
            <p style={{ fontSize: 15, color: TEXT_DIM, margin: 0, lineHeight: 1.6 }}>
              Your conversations cost approximately{' '}
              <span style={{ color: GOLD, fontWeight: 600 }}>
                ${(progress?.estimatedCost ?? 0).toFixed(2)}
              </span>{' '}
              this month. On the{' '}
              <span style={{ color: TEXT, fontWeight: 500 }}>Explorer</span> plan, this is covered.
            </p>
          )}
        </section>

        {/* ── 6. Care Timeline ── */}
        <section
          className="p-4 md:p-6 mb-6"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
          }}
        >
          <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 16px', color: TEXT }}>
            Care Timeline
          </h2>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 0 }}>
            {CARE_SIGNALS.map((signal, i) => (
              <li
                key={signal.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 14,
                  padding: '14px 0',
                  borderTop: i === 0 ? 'none' : `1px solid ${BORDER}`,
                }}
              >
                <div
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: GOLD,
                    flexShrink: 0,
                    marginTop: 6,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 14, color: TEXT, margin: 0, lineHeight: 1.45 }}>
                    {signal.message}
                  </p>
                  <span style={{ fontSize: 12, color: TEXT_DIM, marginTop: 4, display: 'inline-block' }}>
                    {signal.timestamp}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ── 7. Memory Highlights ── */}
        <section
          className="p-4 md:p-6"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
          }}
        >
          <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 16px', color: TEXT }}>
            Your Companion Remembers...
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {MEMORY_HIGHLIGHTS.map((memory, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 12,
                  padding: '14px 16px',
                  background: GOLD_DIM,
                  borderRadius: 10,
                  border: `1px solid rgba(201,168,76,0.12)`,
                }}
              >
                <span style={{ color: GOLD, fontSize: 16, flexShrink: 0, marginTop: 1 }}>
                  &#x2726;
                </span>
                <p style={{ fontSize: 14, color: TEXT, margin: 0, lineHeight: 1.5 }}>{memory}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
