'use client';

import { useEffect } from 'react';

const GOLD = '#c9a84c';
const DEEP = '#0d0c18';
const SURFACE = '#13121f';

export default function ChatError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('[chat] Error boundary caught:', error);
  }, [error]);

  return (
    <div
      className="flex items-center justify-center text-white"
      style={{ height: 'var(--app-height, 100vh)', background: DEEP }}
    >
      <div
        className="max-w-md w-full mx-6 rounded-2xl p-8 text-center"
        style={{ background: SURFACE, border: '1px solid rgba(255,255,255,0.08)' }}
      >
        <div
          className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl"
          style={{ background: `${GOLD}15`, border: `1.5px solid ${GOLD}30` }}
        >
          💛
        </div>
        <h2 className="text-lg font-bold mb-2" style={{ color: '#f5f0e8' }}>
          Something went wrong
        </h2>
        <p className="text-sm mb-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
          Your companion hit an unexpected issue. Your conversation history is safe — just try again.
        </p>
        {error.message && (
          <p
            className="text-xs font-mono mb-6 px-4 py-2 rounded-lg"
            style={{ background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.3)' }}
          >
            {error.message.slice(0, 200)}
          </p>
        )}
        <div className="flex flex-col gap-3">
          <button
            onClick={reset}
            className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:opacity-90"
            style={{ background: GOLD, color: '#1a1a2e' }}
          >
            Try again
          </button>
          <a
            href="/dashboard/chat"
            className="w-full py-3 rounded-xl text-sm font-semibold transition-all border"
            style={{ borderColor: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)' }}
          >
            Start fresh conversation
          </a>
          <a
            href="/dashboard"
            className="text-xs transition-colors"
            style={{ color: 'rgba(255,255,255,0.3)' }}
          >
            Back to dashboard
          </a>
        </div>
      </div>
    </div>
  );
}
