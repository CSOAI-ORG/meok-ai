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
  interactions: number;
  streak_days: number;
  evolution: {
    stage_name: string;
    stage_index: number;
    progress_to_next: number;
    interactions_until_next: number;
    badge: string;
    color: string;
  };
  mastery: {
    level: number;
    label: string;
    badge: string;
    color: string;
    xp_to_next: number;
    percent_to_next: number;
  };
}

interface Conversation {
  id: string;
  companion_id: string;
  title: string;
  message_count: number;
  created_at: string;
  updated_at: string;
}

interface Memory {
  id: string;
  content: string;
  date: string;
  topics: string[];
  emotional_tone: string;
  importance: number;
}

interface CompanionInfo {
  companion_id: string;
  companion_name: string | null;
}

interface AnalyticsState {
  progress: ProgressData | null;
  conversations: Conversation[];
  memories: Memory[];
  companion: CompanionInfo | null;
  loading: boolean;
}

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
  sub,
  loading,
}: {
  label: string;
  value: string | number;
  sub?: string;
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
          {sub && (
            <span style={{ fontSize: 12, color: TEXT_DIM }}>{sub}</span>
          )}
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

/* ── Derive most active character from conversations ── */
function getMostActiveCharacter(conversations: Conversation[]): string {
  if (conversations.length === 0) return 'Aria';
  const counts: Record<string, number> = {};
  for (const c of conversations) {
    counts[c.companion_id] = (counts[c.companion_id] ?? 0) + (c.message_count || 1);
  }
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
  return top ? top[0].charAt(0).toUpperCase() + top[0].slice(1) : 'Aria';
}

/* ── Derive unique days active from conversations ── */
function getDaysActive(conversations: Conversation[]): number {
  if (conversations.length === 0) return 0;
  const days = new Set(
    conversations.map((c) => new Date(c.updated_at).toISOString().slice(0, 10)),
  );
  return days.size;
}

/* ── Derive top topics from memories ── */
function getTopTopics(memories: Memory[]): string[] {
  const counts: Record<string, number> = {};
  for (const m of memories) {
    for (const t of m.topics) {
      if (t && t !== 'general') counts[t] = (counts[t] ?? 0) + 1;
    }
  }
  return Object.entries(counts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 4)
    .map(([t]) => t.charAt(0).toUpperCase() + t.slice(1));
}

/* ── Fallback topics when no memory data ── */
const FALLBACK_TOPICS = ['Creative Writing', 'Self-Reflection', 'Goal Setting', 'Philosophy'];

/* ── Care Signals (static for now, could be wired to API) ── */
const CARE_SIGNALS = [
  { id: '1', message: 'Your companion noticed you seemed tired and suggested a break.', timestamp: '2 hours ago' },
  { id: '2', message: 'Your weekly reflection prompt was delivered.', timestamp: '1 day ago' },
  { id: '3', message: 'Bond milestone reached — evolution stage unlocked.', timestamp: '2 days ago' },
  { id: '4', message: 'Mood pattern detected: consistently calmer in mornings.', timestamp: '3 days ago' },
  { id: '5', message: 'Companion flagged a recurring theme in your journals.', timestamp: '5 days ago' },
];

/* ── Main Page ── */
export default function AnalyticsPage() {
  const [state, setState] = useState<AnalyticsState>({
    progress: null,
    conversations: [],
    memories: [],
    companion: null,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    async function fetchAll() {
      try {
        const [progressRes, convsRes, memsRes, companionRes] = await Promise.allSettled([
          fetch('/api/user/progress').then((r) => r.ok ? r.json() : Promise.reject()),
          fetch('/api/user/conversations').then((r) => r.ok ? r.json() : Promise.reject()),
          fetch('/api/user/memories').then((r) => r.ok ? r.json() : Promise.reject()),
          fetch('/api/user/companions').then((r) => r.ok ? r.json() : Promise.reject()),
        ]);

        if (cancelled) return;

        const progress = progressRes.status === 'fulfilled' ? progressRes.value as ProgressData : null;
        const conversations: Conversation[] =
          convsRes.status === 'fulfilled'
            ? (convsRes.value as { conversations: Conversation[] }).conversations ?? []
            : [];
        const memories: Memory[] =
          memsRes.status === 'fulfilled'
            ? (memsRes.value as { memories?: Memory[] }).memories ?? (Array.isArray(memsRes.value) ? memsRes.value as Memory[] : [])
            : [];
        const companion: CompanionInfo | null =
          companionRes.status === 'fulfilled' ? companionRes.value as CompanionInfo : null;

        setState({ progress, conversations, memories, companion, loading: false });
      } catch {
        if (!cancelled) {
          setState((s) => ({ ...s, loading: false }));
        }
      }
    }

    fetchAll();
    return () => { cancelled = true; };
  }, []);

  const { progress, conversations, memories, companion, loading } = state;

  const totalConversations = conversations.length;
  const daysActive = progress?.streak_days ?? getDaysActive(conversations);
  const mostActiveCharacter =
    companion?.companion_name ??
    getMostActiveCharacter(conversations);
  const memoryCount = memories.length;
  const totalMessages = progress?.interactions ?? 0;
  const evolutionStage = progress?.evolution?.stage_name ?? '—';
  const masteryLabel = progress?.mastery?.label ?? '—';
  const masteryPercent = progress?.mastery?.percent_to_next ?? 0;
  const topTopics = getTopTopics(memories).length > 0 ? getTopTopics(memories) : FALLBACK_TOPICS;

  return (
    <>
      <style>{pulseKeyframes}</style>

      <div
        className="min-h-screen px-4 md:px-6 lg:px-8 pt-6 md:pt-10 pb-20 max-w-[960px] mx-auto"
        style={{
          background: DEEP,
          color: TEXT,
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* ── 1. Header ── */}
        <header style={{ marginBottom: 36 }}>
          <h1 className="text-xl md:text-2xl lg:text-[28px]" style={{ fontWeight: 700, margin: 0, color: TEXT }}>
            Your Journey
          </h1>
          <p style={{ fontSize: 14, color: TEXT_DIM, marginTop: 6 }}>{getWeekRange()}</p>
        </header>

        {/* ── 2. Core Stats Row ── */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3.5 mb-9">
          <StatCard
            label="Total Conversations"
            value={loading ? '—' : totalConversations}
            sub={loading ? undefined : 'all time'}
            loading={loading}
          />
          <StatCard
            label="Days Active"
            value={loading ? '—' : `${daysActive}d`}
            sub={loading ? undefined : 'streak'}
            loading={loading}
          />
          <StatCard
            label="Most Active Character"
            value={loading ? '—' : mostActiveCharacter}
            loading={loading}
          />
          <StatCard
            label="Memory Items Stored"
            value={loading ? '—' : memoryCount}
            sub={loading ? undefined : 'in vault'}
            loading={loading}
          />
        </section>

        {/* ── 3. Progress Stats Row ── */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-3.5 mb-9">
          <StatCard
            label="Total Messages"
            value={loading ? '—' : totalMessages.toLocaleString()}
            loading={loading}
          />
          <StatCard
            label="Evolution Stage"
            value={loading ? '—' : evolutionStage}
            loading={loading}
          />
          <StatCard
            label="Mastery Level"
            value={loading ? '—' : masteryLabel}
            sub={loading ? undefined : `${masteryPercent}% to next`}
            loading={loading}
          />
        </section>

        {/* ── 4. Companion Insights ── */}
        <section
          className="p-4 md:p-6 mb-6"
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14 }}
        >
          <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 16px', color: TEXT }}>
            Companion Insights
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            <div>
              <span style={{ fontSize: 12, color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Most Active
              </span>
              {loading ? (
                <Skeleton width={100} height={20} />
              ) : (
                <p style={{ fontSize: 20, fontWeight: 600, margin: '4px 0 0', color: GOLD }}>
                  {mostActiveCharacter}
                </p>
              )}
            </div>
            <div>
              <span style={{ fontSize: 12, color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Total Conversations
              </span>
              {loading ? (
                <Skeleton width={60} height={20} />
              ) : (
                <p style={{ fontSize: 20, fontWeight: 600, margin: '4px 0 0' }}>
                  {totalConversations}
                </p>
              )}
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <span style={{ fontSize: 12, color: TEXT_DIM, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                Frequent Topics
              </span>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 }}>
                {topTopics.map((topic) => (
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

        {/* ── 5. Mastery Progress Bar ── */}
        {!loading && progress && (
          <section
            className="p-4 md:p-6 mb-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14 }}
          >
            <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 16px', color: TEXT }}>
              Evolution &amp; Mastery
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: TEXT_DIM }}>
                    Stage: <span style={{ color: TEXT, fontWeight: 600 }}>{evolutionStage}</span>
                  </span>
                  <span style={{ fontSize: 13, color: TEXT_DIM }}>
                    {progress.evolution.interactions_until_next} interactions to next
                  </span>
                </div>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${Math.round(progress.evolution.progress_to_next * 100)}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, ${GOLD}, rgba(201,168,76,0.6))`,
                      borderRadius: 4,
                      transition: 'width 0.6s ease',
                    }}
                  />
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: TEXT_DIM }}>
                    Mastery: <span style={{ color: TEXT, fontWeight: 600 }}>{masteryLabel}</span>
                  </span>
                  <span style={{ fontSize: 13, color: TEXT_DIM }}>{masteryPercent}%</span>
                </div>
                <div style={{ height: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 4, overflow: 'hidden' }}>
                  <div
                    style={{
                      width: `${masteryPercent}%`,
                      height: '100%',
                      background: `linear-gradient(90deg, #8b68e8, rgba(139,104,232,0.6))`,
                      borderRadius: 4,
                      transition: 'width 0.6s ease',
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 6. Memory Vault Summary ── */}
        {!loading && memories.length > 0 && (
          <section
            className="p-4 md:p-6 mb-6"
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14 }}
          >
            <h2 className="text-base md:text-[17px]" style={{ fontWeight: 600, margin: '0 0 16px', color: TEXT }}>
              Your Companion Remembers...
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {memories.slice(0, 3).map((memory, i) => (
                <div
                  key={memory.id ?? i}
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
                  <span style={{ color: GOLD, fontSize: 16, flexShrink: 0, marginTop: 1 }}>&#x2726;</span>
                  <p style={{ fontSize: 14, color: TEXT, margin: 0, lineHeight: 1.5 }}>
                    {memory.content}
                  </p>
                </div>
              ))}
              {memories.length > 3 && (
                <p style={{ fontSize: 13, color: TEXT_DIM, margin: 0, textAlign: 'center' }}>
                  +{memories.length - 3} more memories stored in your vault.
                </p>
              )}
            </div>
          </section>
        )}

        {/* ── 7. Care Timeline ── */}
        <section
          className="p-4 md:p-6"
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: 14 }}
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
      </div>
    </>
  );
}
