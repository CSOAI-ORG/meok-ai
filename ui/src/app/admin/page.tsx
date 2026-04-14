'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect, useCallback } from 'react';
import NotificationCenter from '@/components/notification-center';
import { SCHEDULED_TASKS, formatSchedule } from '@/lib/scheduler';

// ---------------------------------------------------------------------------
// Brand tokens
// ---------------------------------------------------------------------------
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';
const TEXT_PRIMARY = '#e8e6f0';
const TEXT_SECONDARY = 'rgba(255,255,255,0.5)';
const GREEN = '#34d399';
const RED = '#f87171';

// ---------------------------------------------------------------------------
// Auth guard
// ---------------------------------------------------------------------------
const ADMIN_EMAILS = ['nick@meok.ai', 'nicholas@meok.ai'];

function isAdmin(email: string | undefined | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email.toLowerCase());
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
interface StatCard {
  label: string;
  value: string;
  loading: boolean;
}

interface HealthCheck {
  name: string;
  status: 'healthy' | 'degraded' | 'down';
}

interface AdminStats {
  totalUsers: number | null;
  activeCompanions: number | null;
  messagesToday: number | null;
  error?: string;
}

interface HealthData {
  status: 'healthy' | 'degraded' | 'unhealthy';
  db: { connected: boolean; latencyMs?: number; error?: string };
  ollama: { reachable: boolean; models?: string[]; error?: string };
  providers: Record<string, boolean>;
  uptime: number;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function statusColor(status: HealthCheck['status']): string {
  if (status === 'healthy') return GREEN;
  if (status === 'degraded') return GOLD;
  return RED;
}

function statusLabel(status: HealthCheck['status']): string {
  if (status === 'healthy') return 'Operational';
  if (status === 'degraded') return 'Degraded';
  return 'Down';
}

function formatUptime(seconds: number): string {
  if (seconds < 60) return `${seconds}s`;
  if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
  if (seconds < 86400) return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
  return `${Math.floor(seconds / 86400)}d ${Math.floor((seconds % 86400) / 3600)}h`;
}

function formatNumber(n: number | null | undefined): string {
  if (n === null || n === undefined) return '\u2014';
  return n.toLocaleString();
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export const dynamic = 'force-dynamic';

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState<AdminStats | null>(null);
  const [statsLoading, setStatsLoading] = useState(true);
  const [healthData, setHealthData] = useState<HealthData | null>(null);
  const [healthLoading, setHealthLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
  }, []);

  const fetchStats = useCallback(async () => {
    try {
      setStatsLoading(true);
      const res = await fetch('/api/admin/stats');
      if (res.ok) {
        const data = await res.json() as AdminStats;
        setStats(data);
      } else {
        setStats({ totalUsers: null, activeCompanions: null, messagesToday: null, error: `HTTP ${res.status}` });
      }
    } catch {
      setStats({ totalUsers: null, activeCompanions: null, messagesToday: null, error: 'Fetch failed' });
    } finally {
      setStatsLoading(false);
    }
  }, []);

  const fetchHealth = useCallback(async () => {
    try {
      setHealthLoading(true);
      const res = await fetch('/api/health');
      if (res.ok || res.status === 503) {
        const data = await res.json() as HealthData;
        setHealthData(data);
      }
    } catch {
      setHealthData(null);
    } finally {
      setHealthLoading(false);
    }
  }, []);

  useEffect(() => {
    if (mounted && isLoaded && isAdmin(user?.primaryEmailAddress?.emailAddress)) {
      fetchStats();
      fetchHealth();
    }
  }, [mounted, isLoaded, user, fetchStats, fetchHealth]);

  // ---- Loading state ----
  if (!isLoaded || !mounted) {
    return (
      <div style={{ minHeight: '100vh', background: DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: TEXT_SECONDARY, fontFamily: 'monospace', fontSize: 14 }}>Loading...</p>
      </div>
    );
  }

  // ---- Auth check ----
  if (!isAdmin(user?.primaryEmailAddress?.emailAddress)) {
    return (
      <div style={{ minHeight: '100vh', background: DEEP, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 12 }}>
        <h1 style={{ color: RED, fontFamily: 'monospace', fontSize: 22, margin: 0 }}>Unauthorized</h1>
        <p style={{ color: TEXT_SECONDARY, fontFamily: 'monospace', fontSize: 14, margin: 0 }}>
          You do not have permission to view this page.
        </p>
      </div>
    );
  }

  // ---- Build stat cards from real data ----
  const statCards: StatCard[] = [
    { label: 'Total Users',       value: formatNumber(stats?.totalUsers),       loading: statsLoading },
    { label: 'Messages Today',    value: formatNumber(stats?.messagesToday),     loading: statsLoading },
    { label: 'Active Companions', value: formatNumber(stats?.activeCompanions),  loading: statsLoading },
    { label: 'Revenue MTD',       value: '\u2014',                               loading: false },
    { label: 'Error Rate',        value: '\u2014',                               loading: false },
  ];

  // ---- Build health checks from real /api/health data ----
  const healthChecks: HealthCheck[] = healthData
    ? [
        { name: 'Database (Postgres)', status: healthData.db.connected ? 'healthy' : 'down' },
        { name: 'Ollama (Local LLM)',  status: healthData.ollama.reachable ? 'healthy' : 'down' },
        ...Object.entries(healthData.providers)
          .filter(([, configured]) => configured)
          .map(([name]) => ({
            name: `${name.charAt(0).toUpperCase() + name.slice(1)} API`,
            status: 'healthy' as const,
          })),
      ]
    : [];

  // ---- Dashboard ----
  return (
    <div style={{ minHeight: '100vh', background: DEEP, color: TEXT_PRIMARY, fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* ---- Header ---- */}
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '20px 32px', borderBottom: `1px solid ${BORDER}`,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ color: GOLD, fontWeight: 700, fontSize: 18, letterSpacing: '0.04em' }}>MEOK AI</span>
          <span style={{ color: TEXT_SECONDARY, fontSize: 14 }}>/</span>
          <span style={{ color: TEXT_SECONDARY, fontSize: 14 }}>Admin Dashboard</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <NotificationCenter />
          <div style={{
            width: 32, height: 32, borderRadius: '50%', background: GOLD,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 600, color: DEEP,
          }}>
            {(user?.firstName?.[0] ?? 'A').toUpperCase()}
          </div>
        </div>
      </header>

      {/* ---- Main content ---- */}
      <main style={{ padding: '32px', maxWidth: 1280, margin: '0 auto' }}>

        {/* ---- Stat cards ---- */}
        <section style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          gap: 16,
          marginBottom: 40,
        }}>
          {statCards.map((card) => (
            <div key={card.label} style={{
              background: SURFACE, borderRadius: 12, padding: '24px 20px',
              border: `1px solid ${BORDER}`,
            }}>
              <p style={{ margin: 0, fontSize: 13, color: TEXT_SECONDARY, marginBottom: 8 }}>{card.label}</p>
              {card.loading ? (
                <p style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em', color: TEXT_SECONDARY }}>
                  ...
                </p>
              ) : (
                <p style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>{card.value}</p>
              )}
              {!card.loading && card.value === '\u2014' && stats?.error && (card.label === 'Total Users' || card.label === 'Messages Today' || card.label === 'Active Companions') ? (
                <p style={{ margin: 0, marginTop: 8, fontSize: 12, color: RED }}>
                  {stats.error}
                </p>
              ) : !card.loading && card.value === '\u2014' ? (
                <p style={{ margin: 0, marginTop: 8, fontSize: 12, color: TEXT_SECONDARY }}>
                  No endpoint
                </p>
              ) : null}
            </div>
          ))}
        </section>

        {/* ---- Two-column layout: Data Sources + Health ---- */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>

          {/* ---- Data Source Info ---- */}
          <section style={{
            background: SURFACE, borderRadius: 12, border: `1px solid ${BORDER}`,
            padding: '24px',
          }}>
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 20 }}>Data Sources</h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { label: 'Total Users', source: 'GET /api/admin/stats', live: stats?.totalUsers !== null && stats?.totalUsers !== undefined },
                { label: 'Messages Today', source: 'GET /api/admin/stats', live: stats?.messagesToday !== null && stats?.messagesToday !== undefined },
                { label: 'Active Companions', source: 'GET /api/admin/stats', live: stats?.activeCompanions !== null && stats?.activeCompanions !== undefined },
                { label: 'Revenue MTD', source: 'No endpoint (needs Stripe integration)', live: false },
                { label: 'Error Rate', source: 'No endpoint (needs error tracking)', live: false },
                { label: 'System Health', source: 'GET /api/health', live: healthData !== null },
              ].map((item) => (
                <li key={item.label} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  padding: '12px 0', borderBottom: `1px solid ${BORDER}`,
                }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontSize: 14, lineHeight: 1.5 }}>{item.label}</span>
                    <span style={{ fontSize: 12, color: TEXT_SECONDARY, fontFamily: 'monospace' }}>{item.source}</span>
                  </div>
                  <span style={{
                    fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 9999,
                    background: item.live ? 'rgba(52,211,153,0.15)' : 'rgba(255,255,255,0.05)',
                    color: item.live ? GREEN : TEXT_SECONDARY,
                    whiteSpace: 'nowrap', marginLeft: 16,
                  }}>
                    {item.live ? 'Live' : 'Not wired'}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* ---- System health ---- */}
          <section style={{
            background: SURFACE, borderRadius: 12, border: `1px solid ${BORDER}`,
            padding: '24px',
          }}>
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 20 }}>System Health</h2>
            {healthLoading ? (
              <p style={{ color: TEXT_SECONDARY, fontSize: 14 }}>Loading health data...</p>
            ) : healthData === null ? (
              <p style={{ color: RED, fontSize: 14 }}>Failed to fetch health data</p>
            ) : (
              <>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16,
                  padding: '8px 12px', borderRadius: 8,
                  background: healthData.status === 'healthy' ? 'rgba(52,211,153,0.1)' : healthData.status === 'degraded' ? 'rgba(201,168,76,0.1)' : 'rgba(248,113,113,0.1)',
                }}>
                  <span style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: healthData.status === 'healthy' ? GREEN : healthData.status === 'degraded' ? GOLD : RED,
                    display: 'inline-block',
                  }} />
                  <span style={{ fontSize: 14, fontWeight: 500 }}>
                    Overall: {healthData.status === 'healthy' ? 'Healthy' : healthData.status === 'degraded' ? 'Degraded' : 'Unhealthy'}
                  </span>
                  <span style={{ fontSize: 12, color: TEXT_SECONDARY, marginLeft: 'auto' }}>
                    Uptime: {formatUptime(healthData.uptime)}
                  </span>
                </div>
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {healthChecks.map((check) => (
                    <li key={check.name} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      padding: '14px 0', borderBottom: `1px solid ${BORDER}`,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{
                          width: 10, height: 10, borderRadius: '50%',
                          background: statusColor(check.status),
                          display: 'inline-block',
                          boxShadow: `0 0 6px ${statusColor(check.status)}60`,
                        }} />
                        <span style={{ fontSize: 14 }}>{check.name}</span>
                      </div>
                      <span style={{ fontSize: 12, color: statusColor(check.status), fontWeight: 500 }}>
                        {statusLabel(check.status)}
                      </span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </section>
        </div>

        {/* ---- Scheduled Tasks ---- */}
        <section style={{
          background: SURFACE, borderRadius: 12, border: `1px solid ${BORDER}`,
          padding: '24px', marginTop: 24,
        }}>
          <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 20 }}>Scheduled Tasks</h2>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {SCHEDULED_TASKS.map((task) => (
              <li key={task.name} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 0', borderBottom: `1px solid ${BORDER}`,
              }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{task.name}</span>
                  <span style={{ fontSize: 12, color: TEXT_SECONDARY }}>{task.description}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0, marginLeft: 16 }}>
                  <span style={{ fontSize: 12, color: TEXT_SECONDARY, fontFamily: 'monospace' }}>
                    {formatSchedule(task.schedule)}
                  </span>
                  <span style={{
                    fontSize: 11, fontWeight: 500, padding: '2px 8px', borderRadius: 9999,
                    background: task.enabled ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
                    color: task.enabled ? GREEN : RED,
                  }}>
                    {task.enabled ? 'Active' : 'Disabled'}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* ---- Footer note ---- */}
        <p style={{ marginTop: 48, textAlign: 'center', fontSize: 12, color: TEXT_SECONDARY }}>
          MEOK AI OS &mdash; Admin v0.2.0 &mdash; Live data from /api/admin/stats and /api/health
        </p>
      </main>
    </div>
  );
}
