'use client';

import { useState, useEffect, useRef } from 'react';

// ---------------------------------------------------------------------------
// Brand tokens
// ---------------------------------------------------------------------------
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';
const TEXT_PRIMARY = '#e8e6f0';
const TEXT_SECONDARY = 'rgba(255,255,255,0.5)';
const RED = '#f87171';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------
export type NotificationType = 'care_signal' | 'guardian_alert' | 'level_up' | 'system';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
}

// ---------------------------------------------------------------------------
// Icon per type (inline SVG paths)
// ---------------------------------------------------------------------------
function typeIcon(type: NotificationType): string {
  switch (type) {
    case 'care_signal':     return 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
    case 'guardian_alert':  return 'M12 2L3.5 6.5v5.2C3.5 16.74 7.22 21.28 12 22.5c4.78-1.22 8.5-5.76 8.5-10.8V6.5L12 2z';
    case 'level_up':        return 'M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.27 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z';
    case 'system':          return 'M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58a.49.49 0 00.12-.61l-1.92-3.32a.49.49 0 00-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 00-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96a.49.49 0 00-.59.22L2.74 9.87a.47.47 0 00.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58a.49.49 0 00-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1115.6 12 3.6 3.6 0 0112 15.6z';
  }
}

function typeColor(type: NotificationType): string {
  switch (type) {
    case 'care_signal':     return '#f472b6';
    case 'guardian_alert':  return RED;
    case 'level_up':        return GOLD;
    case 'system':          return TEXT_SECONDARY;
  }
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------
export default function NotificationCenter() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  // Fetch notifications + poll every 30s (pause when tab is hidden)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    function fetchNotifications() {
      if (document.visibilityState === 'hidden') return;
      fetch('/api/user/notifications')
        .then((r) => r.json())
        .then((data) => {
          if (Array.isArray(data.notifications)) setNotifications(data.notifications);
        })
        .catch(() => { /* silent */ });
    }

    fetchNotifications();
    interval = setInterval(fetchNotifications, 30_000);

    document.addEventListener('visibilitychange', fetchNotifications);
    return () => {
      if (interval) clearInterval(interval);
      document.removeEventListener('visibilitychange', fetchNotifications);
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  async function markAllRead() {
    const unreadIds = notifications.filter((n) => !n.read).map((n) => n.id);
    if (unreadIds.length === 0) return;
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
    try {
      await fetch('/api/user/notifications', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ids: unreadIds }),
      });
    } catch { /* silent */ }
  }

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      {/* ---- Bell button ---- */}
      <button type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Notifications"
        style={{
          background: 'transparent', border: 'none', cursor: 'pointer', padding: 6,
          position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke={TEXT_PRIMARY} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 8A6 6 0 006 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
        {unreadCount > 0 && (
          <span style={{
            position: 'absolute', top: 2, right: 2, minWidth: 16, height: 16,
            borderRadius: 8, background: RED, color: '#fff', fontSize: 10,
            fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '0 4px', lineHeight: 1,
          }}>
            {unreadCount}
          </span>
        )}
      </button>

      {/* ---- Dropdown ---- */}
      {open && (
        <div style={{
          position: 'absolute', top: 40, right: 0, width: 360, maxHeight: 440,
          overflowY: 'auto', background: SURFACE, border: `1px solid ${BORDER}`,
          borderRadius: 12, boxShadow: '0 12px 40px rgba(0,0,0,0.5)', zIndex: 100,
        }}>
          {/* Header */}
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '14px 16px', borderBottom: `1px solid ${BORDER}`,
          }}>
            <span style={{ fontWeight: 600, fontSize: 14, color: TEXT_PRIMARY }}>Notifications</span>
            {unreadCount > 0 && (
              <button type="button"
                onClick={markAllRead}
                style={{
                  background: 'none', border: 'none', color: GOLD, cursor: 'pointer',
                  fontSize: 12, fontWeight: 500, padding: 0,
                }}
              >
                Mark all read
              </button>
            )}
          </div>

          {/* List */}
          {notifications.length === 0 ? (
            <p style={{ padding: 24, textAlign: 'center', color: TEXT_SECONDARY, fontSize: 13 }}>No notifications</p>
          ) : (
            notifications.map((n) => (
              <div key={n.id} style={{
                display: 'flex', gap: 12, padding: '14px 16px',
                borderBottom: `1px solid ${BORDER}`,
                background: n.read ? 'transparent' : 'rgba(201,168,76,0.04)',
              }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill={typeColor(n.type)} style={{ flexShrink: 0, marginTop: 2 }}>
                  <path d={typeIcon(n.type)} />
                </svg>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 8 }}>
                    <span style={{ fontWeight: 600, fontSize: 13, color: TEXT_PRIMARY }}>{n.title}</span>
                    {!n.read && (
                      <span style={{ width: 7, height: 7, borderRadius: '50%', background: GOLD, flexShrink: 0 }} />
                    )}
                  </div>
                  <p style={{ margin: '4px 0 0', fontSize: 12, color: TEXT_SECONDARY, lineHeight: 1.4 }}>{n.message}</p>
                  <p style={{ margin: '6px 0 0', fontSize: 11, color: TEXT_SECONDARY }}>{n.timestamp}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}
