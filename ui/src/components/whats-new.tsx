'use client';

import { useState, useEffect } from 'react';

const CURRENT_VERSION = 'v0.9.2';

const WHATS_NEW = [
  'Voice anchors — companions speak in character',
  'Chat feedback now persists for care alignment',
  'Companion avatars in every message',
];

export function WhatsNew() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem('meok_last_seen_version');
      if (seen !== CURRENT_VERSION) {
        // Small delay so it doesn't flash on first paint
        const t = setTimeout(() => setVisible(true), 2000);
        return () => clearTimeout(t);
      }
    } catch {}
  }, []);

  function dismiss() {
    setVisible(false);
    try {
      localStorage.setItem('meok_last_seen_version', CURRENT_VERSION);
    } catch {}
  }

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 max-w-xs w-full rounded-2xl p-5 shadow-2xl"
      style={{
        background: '#13121f',
        border: '1px solid rgba(201,168,76,0.25)',
        animation: 'fadeSlideUp 0.4s ease both',
      }}
    >
      <style>{`@keyframes fadeSlideUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-bold uppercase tracking-widest" style={{ color: '#c9a84c' }}>
          What&apos;s new
        </span>
        <button
          onClick={dismiss}
          className="text-white/30 hover:text-white/60 transition-colors text-sm leading-none"
          aria-label="Dismiss"
        >
          x
        </button>
      </div>
      <ul className="space-y-2">
        {WHATS_NEW.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <span className="text-[10px] mt-1" style={{ color: '#c9a84c' }}>+</span>
            <span className="text-xs text-white/65 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
      <button
        onClick={dismiss}
        className="mt-4 w-full py-2 rounded-lg text-xs font-semibold transition-all"
        style={{
          background: 'rgba(201,168,76,0.1)',
          border: '1px solid rgba(201,168,76,0.2)',
          color: '#c9a84c',
        }}
      >
        Got it
      </button>
    </div>
  );
}
