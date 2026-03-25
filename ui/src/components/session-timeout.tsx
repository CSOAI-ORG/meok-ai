'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

const IDLE_WARNING_MS = 30 * 60 * 1000; // 30 minutes
const IDLE_EXPIRED_MS = 60 * 60 * 1000; // 60 minutes
const CHECK_INTERVAL_MS = 60 * 1000;    // check every minute

type SessionState = 'active' | 'idle' | 'expired';

export function SessionTimeout() {
  const [state, setState] = useState<SessionState>('active');
  const lastActivityRef = useRef(Date.now());

  const resetActivity = useCallback(() => {
    lastActivityRef.current = Date.now();
    setState('active');
  }, []);

  // Track user activity
  useEffect(() => {
    const events = ['mousemove', 'keydown', 'mousedown', 'touchstart', 'scroll'] as const;
    const handler = () => { lastActivityRef.current = Date.now(); };
    events.forEach(e => window.addEventListener(e, handler, { passive: true }));
    return () => { events.forEach(e => window.removeEventListener(e, handler)); };
  }, []);

  // Periodic check
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - lastActivityRef.current;
      if (elapsed >= IDLE_EXPIRED_MS) {
        setState('expired');
      } else if (elapsed >= IDLE_WARNING_MS) {
        setState('idle');
      } else {
        setState('active');
      }
    }, CHECK_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  if (state === 'active') return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 max-w-md w-[calc(100%-2rem)]
                 rounded-xl px-5 py-3 text-sm shadow-xl backdrop-blur-sm
                 animate-in slide-in-from-top-2 duration-300"
      style={{
        background: state === 'expired' ? 'rgba(239,68,68,0.12)' : 'rgba(201,168,76,0.10)',
        border: `1px solid ${state === 'expired' ? 'rgba(239,68,68,0.3)' : 'rgba(201,168,76,0.25)'}`,
        color: state === 'expired' ? '#fca5a5' : '#c9a84c',
      }}
    >
      <div className="flex items-center justify-between gap-3">
        <p>
          {state === 'expired'
            ? 'Session may have expired. Click to refresh.'
            : "You've been away. Your session is still active."}
        </p>
        {state === 'expired' ? (
          <button
            onClick={() => window.location.reload()}
            className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            style={{ background: 'rgba(239,68,68,0.2)', color: '#fca5a5', border: '1px solid rgba(239,68,68,0.3)' }}
          >
            Refresh
          </button>
        ) : (
          <button
            onClick={resetActivity}
            className="flex-shrink-0 text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
            style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c', border: '1px solid rgba(201,168,76,0.25)' }}
          >
            Dismiss
          </button>
        )}
      </div>
    </div>
  );
}
