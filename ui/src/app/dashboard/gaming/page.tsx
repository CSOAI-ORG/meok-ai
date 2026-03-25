'use client';

import { useState } from 'react';

// ─── TYPES & DATA ────────────────────────────────────────────────────────────

interface GameSession {
  id: string;
  game: string;
  duration: number;
  notes: string;
  date: string;
}

const PLACEHOLDER_SESSIONS: GameSession[] = [
  { id: '1', game: 'Elden Ring', duration: 120, notes: 'Beat Malenia on 3rd attempt. Bleed build finally clicked.', date: '2026-03-24' },
  { id: '2', game: 'Balatro', duration: 45, notes: 'New high score with Plasma deck. Joker synergy was insane.', date: '2026-03-23' },
  { id: '3', game: 'Helldivers 2', duration: 90, notes: 'Helldive difficulty with randoms. Extracted with 12 samples.', date: '2026-03-22' },
];

const COACHING_TIP = {
  title: 'AI Coaching Tip of the Day',
  tip: 'Take a 5-minute break every 60 minutes of play. Studies show micro-breaks improve reaction time by 15% and reduce tilt significantly. Your sovereign AI tracks this for you.',
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

function formatDuration(mins: number): string {
  const h = Math.floor(mins / 60);
  const m = mins % 60;
  if (h === 0) return `${m}m`;
  if (m === 0) return `${h}h`;
  return `${h}h ${m}m`;
}

// ─── COMPONENT ───────────────────────────────────────────────────────────────

export default function GamingHubPage() {
  const [sessions, setSessions] = useState<GameSession[]>(PLACEHOLDER_SESSIONS);
  const [gameName, setGameName] = useState('');
  const [duration, setDuration] = useState(60);
  const [notes, setNotes] = useState('');

  function handleLogSession() {
    if (!gameName.trim()) return;
    const newSession: GameSession = {
      id: Date.now().toString(),
      game: gameName.trim(),
      duration,
      notes: notes.trim(),
      date: new Date().toISOString().split('T')[0],
    };
    setSessions([newSession, ...sessions]);
    setGameName('');
    setDuration(60);
    setNotes('');
  }

  const totalHours = Math.round(sessions.reduce((acc, s) => acc + s.duration, 0) / 60);
  const uniqueGames = new Set(sessions.map((s) => s.game)).size;

  return (
    <div className="min-h-screen px-4 py-8 md:px-8" style={{ background: '#0d0c18' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-2">
            Gaming Hub
          </h1>
          <p className="text-white/50 text-sm">
            Track sessions, review your play, and get AI coaching insights.
          </p>
        </header>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { label: 'Total Hours', value: totalHours },
            { label: 'Sessions', value: sessions.length },
            { label: 'Games Played', value: uniqueGames },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl p-5 text-center"
              style={{ background: '#13121f', border: '1px solid rgba(201,168,76,0.15)' }}
            >
              <div className="text-2xl font-black" style={{ color: '#c9a84c' }}>
                {stat.value}
              </div>
              <div className="text-xs text-white/40 mt-1 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Session Logger */}
          <div
            className="lg:col-span-2 rounded-2xl p-6"
            style={{ background: '#13121f', border: '1px solid rgba(255,255,255,0.06)' }}
          >
            <h2 className="text-lg font-bold text-white mb-5">Log a Session</h2>

            <div className="space-y-4">
              {/* Game Name */}
              <div>
                <label htmlFor="game-name" className="block text-xs text-white/40 font-medium mb-1.5">
                  Game
                </label>
                <input
                  id="game-name"
                  type="text"
                  value={gameName}
                  onChange={(e) => setGameName(e.target.value)}
                  placeholder="e.g. Elden Ring"
                  className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none focus:ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    outlineColor: '#c9a84c',
                  }}
                />
              </div>

              {/* Duration Slider */}
              <div>
                <label htmlFor="duration" className="block text-xs text-white/40 font-medium mb-1.5">
                  Duration: <span style={{ color: '#c9a84c' }}>{formatDuration(duration)}</span>
                </label>
                <input
                  id="duration"
                  type="range"
                  min={15}
                  max={240}
                  step={15}
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full accent-[#c9a84c]"
                />
                <div className="flex justify-between text-[10px] text-white/20 mt-1">
                  <span>15min</span>
                  <span>4hrs</span>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label htmlFor="session-notes" className="block text-xs text-white/40 font-medium mb-1.5">
                  Notes
                </label>
                <textarea
                  id="session-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="How did it go? What did you learn?"
                  rows={3}
                  className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none resize-none focus:ring-2"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                />
              </div>

              {/* Submit */}
              <button
                onClick={handleLogSession}
                disabled={!gameName.trim()}
                className="w-full py-3 rounded-xl text-sm font-bold transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:scale-[1.02]"
                style={{ background: '#c9a84c', color: '#0d0c18' }}
              >
                Log Session
              </button>
            </div>
          </div>

          {/* AI Coaching Tip */}
          <div
            className="rounded-2xl p-6 self-start"
            style={{ background: '#13121f', border: '1px solid rgba(201,168,76,0.2)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                style={{ background: 'rgba(201,168,76,0.15)', color: '#c9a84c' }}
              >
                AI
              </div>
              <h3 className="text-sm font-bold text-white">{COACHING_TIP.title}</h3>
            </div>
            <p className="text-sm text-white/50 leading-relaxed">{COACHING_TIP.tip}</p>
          </div>
        </div>

        {/* Recent Sessions */}
        <div className="mt-8">
          <h2 className="text-lg font-bold text-white mb-4">Recent Sessions</h2>
          <div className="space-y-3">
            {sessions.map((session) => (
              <div
                key={session.id}
                className="rounded-xl p-4 flex items-start gap-4"
                style={{ background: '#13121f', border: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0"
                  style={{ background: 'rgba(201,168,76,0.1)' }}
                >
                  🎮
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-sm font-bold text-white truncate">{session.game}</span>
                    <span className="text-xs font-medium shrink-0" style={{ color: '#c9a84c' }}>
                      {formatDuration(session.duration)}
                    </span>
                  </div>
                  {session.notes && (
                    <p className="text-xs text-white/40 leading-relaxed">{session.notes}</p>
                  )}
                </div>
                <span className="text-[10px] text-white/20 shrink-0">{session.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
