'use client';

import { useState } from 'react';
import {
  Users,
  Trophy,
  ChevronDown,
  Loader2,
  Sword,
  Zap,
  Shield,
  Star,
  Clock,
} from 'lucide-react';

// ── Brand tokens ──────────────────────────────────────────────────────────────
const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const BORDER = 'rgba(255,255,255,0.07)';
const GOLD = '#c9a84c';

// ── Types ─────────────────────────────────────────────────────────────────────


// ── Section header ────────────────────────────────────────────────────────────

function SectionHeader({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle?: string }) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
        style={{ background: `rgba(201,168,76,0.12)`, color: GOLD }}
      >
        {icon}
      </div>
      <div>
        <h2 className="text-lg font-bold text-white">{title}</h2>
        {subtitle && <p className="text-xs text-white/40 mt-0.5">{subtitle}</p>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 82.1  Build / Loadout Sharing
// ─────────────────────────────────────────────────────────────────────────────

function BuildsSection() {
  return (
    <section
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader
        icon={<Sword size={18} />}
        title="Build & Loadout Sharing"
        subtitle="Share and discover community builds"
      />
      <div
        className="rounded-xl p-6 flex flex-col items-center gap-3 text-center"
        style={{ background: 'rgba(255,255,255,0.025)', border: `1px dashed rgba(255,255,255,0.1)` }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `rgba(201,168,76,0.1)` }}
        >
          <Sword size={22} style={{ color: GOLD }} />
        </div>
        <p className="text-sm font-semibold text-white">Community features coming soon</p>
        <p className="text-xs text-white/40 max-w-sm leading-relaxed">
          Build sharing, loadout imports, and community ratings will be available once the MEOK
          community backend is live. Your personal session data is already being tracked.
        </p>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium mt-1"
          style={{ background: `rgba(201,168,76,0.08)`, color: GOLD, border: `1px solid rgba(201,168,76,0.2)` }}
        >
          <Clock size={12} />
          In development
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 82.2  Community Tips Feed
// ─────────────────────────────────────────────────────────────────────────────

function TipsFeedSection() {
  return (
    <section
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader
        icon={<Star size={18} />}
        title="Community Tips"
        subtitle="Curated knowledge from verified players"
      />
      <div
        className="rounded-xl p-6 flex flex-col items-center gap-3 text-center"
        style={{ background: 'rgba(255,255,255,0.025)', border: `1px dashed rgba(255,255,255,0.1)` }}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ background: `rgba(201,168,76,0.1)` }}
        >
          <Star size={22} style={{ color: GOLD }} />
        </div>
        <p className="text-sm font-semibold text-white">Community features coming soon</p>
        <p className="text-xs text-white/40 max-w-sm leading-relaxed">
          Verified tips, upvoting, and community contributions will be available once the social
          layer is built. Use the AI tools below in the meantime.
        </p>
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-medium mt-1"
          style={{ background: `rgba(201,168,76,0.08)`, color: GOLD, border: `1px solid rgba(201,168,76,0.2)` }}
        >
          <Clock size={12} />
          In development
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 82.3  LFG Companion Matching
// ─────────────────────────────────────────────────────────────────────────────

const LFG_GAMES = ['Any game', 'Elden Ring', 'Valorant', 'Helldivers 2', 'Diablo IV', 'Path of Exile 2', 'Street Fighter 6', 'Minecraft', 'Balatro'];
const PLAYSTYLES = ['Casual', 'Competitive', 'Speedrun'];
const SCHEDULES = ['Weekday', 'Weekend', 'Anytime'];
const LANGUAGES = ['English', 'Spanish', 'French', 'German', 'Portuguese', 'Japanese', 'Korean', 'Chinese'];

function LFGSection() {
  const [game, setGame] = useState('Any game');
  const [playstyle, setPlaystyle] = useState('Casual');
  const [schedule, setSchedule] = useState('Anytime');
  const [language, setLanguage] = useState('English');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleFindGroup() {
    setLoading(true);
    setResult('');

    const systemPrompt =
      'You are a gaming companion matcher for MEOK AI. Suggest the ideal group composition and communication style for this player.';

    const userMessage =
      `Game preference: ${game}\nPlaystyle: ${playstyle}\nAvailable schedule: ${schedule}\nPreferred language: ${language}\n\n` +
      `Based on these preferences, describe the ideal group composition (roles/archetypes to look for), the best communication platform and style, and 2-3 tips for finding the right squad.`;

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: userMessage }],
          companionId: '__lfg_matcher__',
          _systemOverride: systemPrompt,
        }),
      });

      if (!res.ok) {
        setResult('Error: Unable to reach the matcher. Please try again.');
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setResult('Error: No response stream.');
        return;
      }

      const decoder = new TextDecoder();
      let text = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setResult(text);
      }
    } catch {
      setResult('Error: Request failed. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader
        icon={<Users size={18} />}
        title="LFG — Find Your Squad"
        subtitle="Tell us your playstyle and we'll match you to the right group composition"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {/* Game */}
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5">Game</label>
          <div className="relative">
            <select
              value={game}
              onChange={(e) => setGame(e.target.value)}
              className="w-full appearance-none rounded-lg px-4 py-2.5 text-sm text-white outline-none pr-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(255,255,255,0.08)` }}
            >
              {LFG_GAMES.map((g) => <option key={g} value={g} style={{ background: SURFACE }}>{g}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          </div>
        </div>

        {/* Playstyle */}
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5">Playstyle</label>
          <div className="flex gap-2">
            {PLAYSTYLES.map((ps) => (
              <button type="button"
                key={ps}
                onClick={() => setPlaystyle(ps)}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: playstyle === ps ? GOLD : 'rgba(255,255,255,0.04)',
                  color: playstyle === ps ? DEEP : 'rgba(255,255,255,0.5)',
                  border: `1px solid ${playstyle === ps ? GOLD : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                {ps}
              </button>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5">Schedule</label>
          <div className="flex gap-2">
            {SCHEDULES.map((s) => (
              <button type="button"
                key={s}
                onClick={() => setSchedule(s)}
                className="flex-1 py-2.5 rounded-lg text-xs font-semibold transition-all"
                style={{
                  background: schedule === s ? GOLD : 'rgba(255,255,255,0.04)',
                  color: schedule === s ? DEEP : 'rgba(255,255,255,0.5)',
                  border: `1px solid ${schedule === s ? GOLD : 'rgba(255,255,255,0.08)'}`,
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div>
          <label className="block text-xs text-white/40 font-medium mb-1.5">Language</label>
          <div className="relative">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full appearance-none rounded-lg px-4 py-2.5 text-sm text-white outline-none pr-8"
              style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(255,255,255,0.08)` }}
            >
              {LANGUAGES.map((l) => <option key={l} value={l} style={{ background: SURFACE }}>{l}</option>)}
            </select>
            <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 pointer-events-none" />
          </div>
        </div>
      </div>

      <button type="button"
        onClick={handleFindGroup}
        disabled={loading}
        className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        style={{ background: GOLD, color: DEEP }}
      >
        {loading ? <><Loader2 size={16} className="animate-spin" /> Matching…</> : <><Users size={16} /> Find My Group</>}
      </button>

      {result && (
        <div
          className="mt-5 rounded-xl p-4"
          style={{ background: 'rgba(201,168,76,0.06)', border: `1px solid rgba(201,168,76,0.18)` }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Squad Recommendation</p>
          <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{result}</p>
        </div>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// 82.4  Tournament Prep Assistant
// ─────────────────────────────────────────────────────────────────────────────

interface PrepPlan {
  mentalPrep: string;
  strategy: string;
  warmupRoutine: string;
  contingency: string;
}

const SECTION_LABELS: { key: keyof PrepPlan; icon: React.ReactNode; title: string }[] = [
  { key: 'mentalPrep', icon: <Star size={14} />, title: 'Mental Prep' },
  { key: 'strategy', icon: <Sword size={14} />, title: 'Strategy' },
  { key: 'warmupRoutine', icon: <Zap size={14} />, title: 'Warmup Routine' },
  { key: 'contingency', icon: <Shield size={14} />, title: 'Contingency' },
];

const TOURNAMENT_SYSTEM_PROMPT =
  'You are an elite tournament preparation coach for MEOK AI. ' +
  'Given the tournament format and goals provided by the player, produce a structured prep plan. ' +
  'Format your response with these EXACT section headers on their own lines: ' +
  '### Mental Prep\n### Strategy\n### Warmup Routine\n### Contingency\n' +
  'Each section should contain 3-5 actionable, specific bullet points. Be concise and direct.';

function parsePrepPlan(raw: string): PrepPlan | null {
  const sections: Partial<PrepPlan> = {};
  const map: Record<string, keyof PrepPlan> = {
    'mental prep': 'mentalPrep',
    strategy: 'strategy',
    'warmup routine': 'warmupRoutine',
    contingency: 'contingency',
  };

  const parts = raw.split(/###\s*/);
  for (const part of parts) {
    const firstLine = part.split('\n')[0].trim().toLowerCase();
    const key = map[firstLine];
    if (key) {
      sections[key] = part.substring(part.indexOf('\n') + 1).trim();
    }
  }

  if (Object.keys(sections).length < 2) return null;
  return {
    mentalPrep: sections.mentalPrep ?? '',
    strategy: sections.strategy ?? '',
    warmupRoutine: sections.warmupRoutine ?? '',
    contingency: sections.contingency ?? '',
  };
}

function TournamentPrepSection() {
  const [input, setInput] = useState('');
  const [rawResult, setRawResult] = useState('');
  const [prepPlan, setPrepPlan] = useState<PrepPlan | null>(null);
  const [loading, setLoading] = useState(false);

  async function handlePrepPlan() {
    if (!input.trim()) return;
    setLoading(true);
    setRawResult('');
    setPrepPlan(null);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'user', content: input.trim() }],
          companionId: '__tournament_prep__',
          _systemOverride: TOURNAMENT_SYSTEM_PROMPT,
        }),
      });

      if (!res.ok) {
        setRawResult('Error: Unable to generate prep plan. Please try again.');
        return;
      }

      const reader = res.body?.getReader();
      if (!reader) {
        setRawResult('Error: No response stream.');
        return;
      }

      const decoder = new TextDecoder();
      let text = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setRawResult(text);
      }

      const parsed = parsePrepPlan(text);
      if (parsed) setPrepPlan(parsed);
    } catch {
      setRawResult('Error: Request failed. Please check your connection.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className="rounded-2xl p-6"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <SectionHeader
        icon={<Trophy size={18} />}
        title="Tournament Prep Assistant"
        subtitle="Describe your tournament format and goals — get a structured prep plan"
      />

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="e.g. Double-elimination Valorant tournament tomorrow, 8 teams, I main Jett. Goal: top 3. My biggest weakness is clutch situations under pressure."
        rows={4}
        className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none resize-none mb-4"
        style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid rgba(255,255,255,0.08)` }}
      />

      <button type="button"
        onClick={handlePrepPlan}
        disabled={loading || !input.trim()}
        className="w-full py-3 rounded-xl text-sm font-bold transition-all hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mb-5"
        style={{ background: GOLD, color: DEEP }}
      >
        {loading ? <><Loader2 size={16} className="animate-spin" /> Building prep plan…</> : <><Trophy size={16} /> Build My Prep Plan</>}
      </button>

      {/* Structured plan view */}
      {prepPlan && (
        <div className="space-y-4">
          {SECTION_LABELS.map(({ key, icon, title }) => (
            <div
              key={key}
              className="rounded-xl p-4"
              style={{ background: 'rgba(255,255,255,0.025)', border: `1px solid rgba(255,255,255,0.06)` }}
            >
              <div className="flex items-center gap-2 mb-2">
                <span style={{ color: GOLD }}>{icon}</span>
                <span className="text-xs font-bold uppercase tracking-widest" style={{ color: GOLD }}>{title}</span>
              </div>
              <div className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">
                {prepPlan[key] || <span className="text-white/25 italic">Not provided</span>}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fallback raw stream during loading or if parsing failed */}
      {!prepPlan && rawResult && (
        <div
          className="rounded-xl p-4"
          style={{ background: 'rgba(201,168,76,0.06)', border: `1px solid rgba(201,168,76,0.18)` }}
        >
          <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: GOLD }}>Prep Plan</p>
          <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{rawResult}</p>
        </div>
      )}
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// Page
// ─────────────────────────────────────────────────────────────────────────────

export default function GamingCommunityPage() {
  return (
    <div className="min-h-screen px-4 py-8 md:px-8" style={{ background: DEEP }}>
      <div className="max-w-4xl mx-auto">
        {/* Page header */}
        <header className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `rgba(201,168,76,0.15)`, color: GOLD }}
            >
              <Users size={20} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight leading-none">
                Gaming Community
              </h1>
              <p className="text-white/40 text-sm mt-1">
                Builds, tips, squad matching, and tournament prep — powered by MEOK AI.
              </p>
            </div>
          </div>
        </header>

        {/* Four sections stacked */}
        <div className="space-y-8">
          <BuildsSection />
          <TipsFeedSection />
          <LFGSection />
          <TournamentPrepSection />
        </div>
      </div>
    </div>
  );
}
