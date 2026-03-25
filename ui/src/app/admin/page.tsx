'use client';

import { useUser } from '@clerk/nextjs';
import { useState, useEffect } from 'react';
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
  trend: string;        // e.g. "+12%"
  trendUp: boolean;
}

interface ActivityItem {
  id: string;
  message: string;
  timestamp: string;
}

interface HealthCheck {
  name: string;
  status: 'healthy' | 'degraded' | 'down';
}

// ---------------------------------------------------------------------------
// Placeholder data  (swap for real API calls later)
// ---------------------------------------------------------------------------
const STAT_CARDS: StatCard[] = [
  { label: 'Total Users',         value: '1,247',   trend: '+8.3%',  trendUp: true  },
  { label: 'Messages Today',      value: '3,891',   trend: '+23.1%', trendUp: true  },
  { label: 'Active Companions',   value: '412',     trend: '+4.7%',  trendUp: true  },
  { label: 'Revenue MTD',         value: '\u00a312,430', trend: '+11.2%', trendUp: true  },
  { label: 'Error Rate',          value: '0.12%',   trend: '-0.03%', trendUp: false },
];

const ACTIVITY_LOG: ActivityItem[] = [
  { id: '1', message: 'User alice@example.com upgraded to Pro',            timestamp: '2 min ago'  },
  { id: '2', message: 'Guardian alert triggered for user #4821',           timestamp: '14 min ago' },
  { id: '3', message: 'New companion "Luna" created by user #3190',        timestamp: '27 min ago' },
  { id: '4', message: 'SOV3 council vote completed \u2014 motion passed',  timestamp: '43 min ago' },
  { id: '5', message: 'Webhook delivery failure to stripe endpoint',       timestamp: '1 hr ago'   },
  { id: '6', message: 'LLM provider latency spike (avg 2.4s)',             timestamp: '1.5 hr ago' },
  { id: '7', message: 'Batch memory compaction finished (312 users)',      timestamp: '2 hr ago'   },
];

const HEALTH_CHECKS: HealthCheck[] = [
  { name: 'Database (Postgres)',  status: 'healthy'  },
  { name: 'LLM Provider',        status: 'healthy'  },
  { name: 'SOV3 Council Engine',  status: 'healthy'  },
  { name: 'Redis Cache',         status: 'healthy'  },
  { name: 'Stripe Webhooks',     status: 'degraded' },
];

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

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
          {STAT_CARDS.map((card) => (
            <div key={card.label} style={{
              background: SURFACE, borderRadius: 12, padding: '24px 20px',
              border: `1px solid ${BORDER}`,
            }}>
              <p style={{ margin: 0, fontSize: 13, color: TEXT_SECONDARY, marginBottom: 8 }}>{card.label}</p>
              <p style={{ margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: '-0.02em' }}>{card.value}</p>
              <p style={{
                margin: 0, marginTop: 8, fontSize: 13, fontWeight: 500,
                color: card.label === 'Error Rate'
                  ? (card.trendUp ? RED : GREEN)
                  : (card.trendUp ? GREEN : RED),
              }}>
                {card.trend}
                <span style={{ color: TEXT_SECONDARY, fontWeight: 400, marginLeft: 4 }}>vs last period</span>
              </p>
            </div>
          ))}
        </section>

        {/* ---- Two-column layout: Activity + Health ---- */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 24 }}>

          {/* ---- Recent activity ---- */}
          <section style={{
            background: SURFACE, borderRadius: 12, border: `1px solid ${BORDER}`,
            padding: '24px',
          }}>
            <h2 style={{ margin: 0, fontSize: 16, fontWeight: 600, marginBottom: 20 }}>Recent Activity</h2>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {ACTIVITY_LOG.map((item) => (
                <li key={item.id} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  padding: '12px 0', borderBottom: `1px solid ${BORDER}`,
                }}>
                  <span style={{ fontSize: 14, lineHeight: 1.5, maxWidth: '75%' }}>{item.message}</span>
                  <span style={{ fontSize: 12, color: TEXT_SECONDARY, whiteSpace: 'nowrap', marginLeft: 16 }}>{item.timestamp}</span>
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
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {HEALTH_CHECKS.map((check) => (
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
          MEOK AI OS &mdash; Admin v0.1.0 &mdash; Data is placeholder. Wire to real APIs.
        </p>
      </main>
    </div>
  );
}
