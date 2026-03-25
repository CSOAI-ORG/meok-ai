'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Palette,
  Sparkles,
  User,
  Mic,
  Eye,
  ArrowLeft,
  ArrowRight,
  Save,
  Check,
} from 'lucide-react';

// ─── Brand tokens ───────────────────────────────────────────────────────────
const GOLD = '#c9a84c', DEEP = '#0d0c18', SURFACE = '#13121f', BORDER = 'rgba(255,255,255,0.07)';

// ─── Archetype data ─────────────────────────────────────────────────────────
const ARCHETYPES = [
  { id: 'challenger', label: 'Challenger', emoji: '\u26A1', description: 'Holds you to a higher standard — direct, growth-focused, incisive' },
  { id: 'nurturer', label: 'Nurturer', emoji: '\uD83C\uDF38', description: 'Warm, steady care for the hard days and softer moments' },
  { id: 'explorer', label: 'Explorer', emoji: '\uD83D\uDD2D', description: 'Opens doors to ideas you haven\'t imagined — curious and expansive' },
  { id: 'sage', label: 'Sage', emoji: '\uD83C\uDF3F', description: 'Ancient wisdom for modern complexity — measured and grounded' },
  { id: 'seeker', label: 'Seeker', emoji: '\uD83D\uDD4A\uFE0F', description: 'Spiritual companion for prayer, meaning, and deep questions' },
  { id: 'creator', label: 'Creator', emoji: '\uD83C\uDFA8', description: 'Co-creates beauty from chaos — imaginative and collaborative' },
  { id: 'trickster', label: 'Trickster', emoji: '\uD83C\uDFAD', description: 'The playful truth-teller — witty, irreverent, perceptive' },
  { id: 'rebel', label: 'Rebel', emoji: '\uD83D\uDD25', description: 'Burns what doesn\'t serve you — fierce, authentic, liberating' },
  { id: 'innocent', label: 'Innocent', emoji: '\u2728', description: 'Sees possibility everywhere — gentle, hopeful, luminous' },
] as const;

// ─── Voice styles ───────────────────────────────────────────────────────────
const VOICE_STYLES = ['formal', 'casual', 'playful', 'academic', 'poetic', 'empathetic'] as const;

// ─── Big Five slider config ─────────────────────────────────────────────────
const BIG_FIVE = [
  { key: 'openness', label: 'Openness', low: 'Conventional', high: 'Experimental' },
  { key: 'conscientiousness', label: 'Conscientiousness', low: 'Spontaneous', high: 'Organised' },
  { key: 'extraversion', label: 'Extraversion', low: 'Reserved', high: 'Outgoing' },
  { key: 'agreeableness', label: 'Agreeableness', low: 'Challenging', high: 'Accommodating' },
  { key: 'stability', label: 'Stability', low: 'Emotionally expressive', high: 'Steady' },
] as const;

// ─── Step icons ─────────────────────────────────────────────────────────────
const STEP_ICONS = [User, Sparkles, Palette, Mic, Eye];
const STEP_LABELS = ['Identity', 'Archetype', 'Personality', 'Voice', 'Preview'];

// ─── Types ──────────────────────────────────────────────────────────────────
interface CharacterForm {
  name: string;
  title: string;
  emoji: string;
  tagline: string;
  archetype: string;
  personality: Record<string, number>;
  voiceStyle: string;
}

const ARCHETYPE_COLORS: Record<string, string> = {
  challenger: '#F59E0B',
  nurturer: '#F472B6',
  explorer: '#7C3AED',
  sage: '#065F46',
  seeker: '#8B5CF6',
  creator: '#EC4899',
  trickster: '#F97316',
  rebel: '#EF4444',
  innocent: '#A78BFA',
};

/** Build a DiceBear avatar URL from the character form state. */
function getDiceBearUrl(name: string, archetype: string): string {
  const seed = encodeURIComponent(`${name}-${archetype}`.toLowerCase() || 'meok');
  return `https://api.dicebear.com/9.x/bottts-neutral/svg?seed=${seed}&backgroundColor=transparent`;
}

// ═════════════════════════════════════════════════════════════════════════════
// Page Component
// ═════════════════════════════════════════════════════════════════════════════

export default function CreateCharacterPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState<CharacterForm>({
    name: '',
    title: '',
    emoji: '',
    tagline: '',
    archetype: '',
    personality: { openness: 50, conscientiousness: 50, extraversion: 50, agreeableness: 50, stability: 50 },
    voiceStyle: '',
  });

  // ── Helpers ─────────────────────────────────────────────────────────────
  const update = (patch: Partial<CharacterForm>) => setForm((f) => ({ ...f, ...patch }));
  const updateSlider = (key: string, value: number) =>
    setForm((f) => ({ ...f, personality: { ...f.personality, [key]: value } }));

  const canNext = (): boolean => {
    if (step === 0) return form.name.trim().length > 0 && form.title.trim().length > 0;
    if (step === 1) return form.archetype.length > 0;
    if (step === 2) return true; // sliders always valid
    if (step === 3) return form.voiceStyle.length > 0;
    return true;
  };

  const handleSave = async () => {
    setSaving(true);
    setError('');
    try {
      const res = await fetch('/api/user/characters/custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || 'Failed to create character');
        setSaving(false);
        return;
      }
      router.push('/dashboard/companion');
    } catch {
      setError('Something went wrong. Please try again.');
      setSaving(false);
    }
  };

  // ── Render helpers ──────────────────────────────────────────────────────

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {STEP_LABELS.map((label, i) => {
        const Icon = STEP_ICONS[i]; const active = i === step; const done = i < step;
        return (
          <button key={label} onClick={() => i < step && setStep(i)} disabled={i > step}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all"
            style={{ background: active ? 'rgba(201,168,76,0.15)' : done ? 'rgba(255,255,255,0.05)' : 'transparent',
              border: active ? `1px solid ${GOLD}` : '1px solid transparent',
              color: active ? GOLD : done ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)',
              cursor: i <= step ? 'pointer' : 'default' }}>
            {done ? <Check size={12} /> : <Icon size={12} />}
            <span className="hidden sm:inline">{label}</span>
          </button>
        );
      })}
    </div>
  );

  // ── Step 1: Name & Identity ───────────────────────────────────────────
  const renderStep0 = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-black text-white mb-1">Name & Identity</h2>
        <p className="text-white/50 text-sm">Give your character a name and personality hook.</p>
      </div>

      <div className="flex flex-col gap-4">
        {[
          { label: 'Name *', key: 'name' as const, placeholder: 'e.g. Orion, Raven, Kai...', max: 30 },
          { label: 'Title *', key: 'title' as const, placeholder: 'e.g. The Strategist, The Dreamer...', max: 40 },
        ].map((f) => (
          <div key={f.key}>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">{f.label}</label>
            <input type="text" value={form[f.key]} onChange={(e) => update({ [f.key]: e.target.value })}
              placeholder={f.placeholder} maxLength={f.max}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}` }} />
          </div>
        ))}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">Emoji</label>
            <input type="text" value={form.emoji} onChange={(e) => update({ emoji: e.target.value.slice(0, 4) })}
              placeholder="\u2728" maxLength={4}
              className="w-full px-4 py-3 rounded-xl text-white text-2xl text-center placeholder-white/25 outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}` }} />
          </div>
          <div>
            <label className="block text-xs font-semibold text-white/60 mb-1.5 uppercase tracking-wider">Tagline</label>
            <input type="text" value={form.tagline} onChange={(e) => update({ tagline: e.target.value })}
              placeholder="A one-liner..." maxLength={80}
              className="w-full px-4 py-3 rounded-xl text-white placeholder-white/25 outline-none transition-all"
              style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}` }} />
          </div>
        </div>
      </div>
    </div>
  );

  // ── Step 2: Archetype ─────────────────────────────────────────────────
  const renderStep1 = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-black text-white mb-1">Choose an Archetype</h2>
        <p className="text-white/50 text-sm">This shapes how your character thinks and responds.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {ARCHETYPES.map((arch) => {
          const sel = form.archetype === arch.id;
          return (
            <button key={arch.id} onClick={() => update({ archetype: arch.id })}
              className="flex items-start gap-3 p-4 rounded-2xl text-left transition-all hover:scale-[1.02]"
              style={{ background: sel ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.03)',
                border: sel ? `1px solid ${GOLD}` : `1px solid ${BORDER}`,
                boxShadow: sel ? '0 0 20px rgba(201,168,76,0.15)' : 'none' }}>
              <span className="flex items-center justify-center w-10 h-10 rounded-xl text-xl flex-shrink-0"
                style={{ background: sel ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.05)' }}>{arch.emoji}</span>
              <div className="min-w-0">
                <p className="font-bold text-sm" style={{ color: sel ? GOLD : 'white' }}>{arch.label}</p>
                <p className="text-white/45 text-xs leading-relaxed mt-0.5">{arch.description}</p>
              </div>
              {sel && <Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: GOLD }} />}
            </button>
          );
        })}
      </div>
    </div>
  );

  // ── Step 3: Personality (Big Five sliders) ────────────────────────────
  const renderStep2 = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-black text-white mb-1">Personality Sliders</h2>
        <p className="text-white/50 text-sm">Tune the Big Five personality dimensions.</p>
      </div>

      <div className="flex flex-col gap-5">
        {BIG_FIVE.map((trait) => {
          const value = form.personality[trait.key] ?? 50;
          return (
            <div key={trait.key}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">{trait.label}</span>
                <span className="text-xs font-bold tabular-nums" style={{ color: GOLD }}>{value}</span>
              </div>
              <div className="relative">
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={value}
                  onChange={(e) => updateSlider(trait.key, Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, ${GOLD} ${value}%, rgba(255,255,255,0.08) ${value}%)`,
                  }}
                />
              </div>
              <div className="flex justify-between mt-1">
                <span className="text-[10px] text-white/30">{trait.low}</span>
                <span className="text-[10px] text-white/30">{trait.high}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  // ── Step 4: Voice Style ───────────────────────────────────────────────
  const renderStep3 = () => (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-black text-white mb-1">Voice Style</h2>
        <p className="text-white/50 text-sm">How should your character sound?</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {VOICE_STYLES.map((vs) => {
          const sel = form.voiceStyle === vs;
          return (
            <button key={vs} onClick={() => update({ voiceStyle: vs })}
              className="px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 capitalize"
              style={{ background: sel ? 'rgba(201,168,76,0.15)' : 'rgba(255,255,255,0.05)',
                border: sel ? `1px solid ${GOLD}` : `1px solid ${BORDER}`,
                color: sel ? GOLD : 'rgba(255,255,255,0.6)' }}>
              {sel && <Check size={12} className="inline mr-1.5 -mt-0.5" />}{vs}
            </button>
          );
        })}
      </div>
    </div>
  );

  // ── Step 5: Preview & Save ────────────────────────────────────────────
  const renderStep4 = () => {
    const archetypeColor = ARCHETYPE_COLORS[form.archetype] ?? GOLD;
    const traits = Object.entries(form.personality)
      .filter(([, v]) => v !== 50)
      .map(([k, v]) => {
        const trait = BIG_FIVE.find((b) => b.key === k);
        return trait ? (v > 50 ? trait.high.toLowerCase() : trait.low.toLowerCase()) : k;
      });

    return (
      <div className="flex flex-col gap-6">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Preview Your Character</h2>
          <p className="text-white/50 text-sm">Here is how your character will appear.</p>
        </div>

        {/* Preview card */}
        <div
          className="rounded-2xl p-6 sm:p-8 flex flex-col gap-4"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid rgba(201,168,76,0.20)`,
          }}
        >
          <div className="flex items-center gap-4">
            {/* DiceBear avatar */}
            <div
              className="relative flex-shrink-0 w-16 h-16 rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ background: `${archetypeColor}20`, border: `1px solid ${archetypeColor}40` }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={getDiceBearUrl(form.name, form.archetype)}
                alt={`${form.name || 'Character'} avatar`}
                width={56}
                height={56}
                className="w-14 h-14"
              />
              {form.emoji && (
                <span className="absolute -bottom-0.5 -right-0.5 text-lg">{form.emoji}</span>
              )}
            </div>
            <div>
              <p className="font-black text-xl text-white">{form.name || 'Unnamed'}</p>
              <p className="text-sm" style={{ color: archetypeColor }}>{form.title || 'Custom Companion'}</p>
            </div>
          </div>

          {form.tagline && (
            <p className="text-white/60 text-sm italic">&ldquo;{form.tagline}&rdquo;</p>
          )}

          <div className="flex flex-wrap gap-1.5 mt-1">
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ background: `${archetypeColor}20`, color: archetypeColor }}
            >
              {form.archetype || 'archetype'}
            </span>
            <span
              className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
              style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.5)' }}
            >
              {form.voiceStyle || 'voice'}
            </span>
            {traits.slice(0, 3).map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.4)' }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Big Five mini bars */}
          <div className="mt-3 flex flex-col gap-2">
            {BIG_FIVE.map((t) => (
              <div key={t.key} className="flex items-center gap-2">
                <span className="text-[10px] text-white/30 w-24 text-right truncate">{t.label}</span>
                <div className="flex-1 h-1.5 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                  <div className="h-full rounded-full" style={{ width: `${form.personality[t.key] ?? 50}%`, background: archetypeColor, opacity: 0.7 }} />
                </div>
                <span className="text-[10px] text-white/30 w-6 tabular-nums">{form.personality[t.key] ?? 50}</span>
              </div>
            ))}
          </div>
        </div>

        {error && (
          <div className="rounded-xl p-3 text-sm text-red-300" style={{ background: 'rgba(255,60,60,0.1)', border: '1px solid rgba(255,60,60,0.2)' }}>
            {error}
          </div>
        )}
      </div>
    );
  };

  // ── Steps array ───────────────────────────────────────────────────────
  const steps = [renderStep0, renderStep1, renderStep2, renderStep3, renderStep4];

  // ── Main render ───────────────────────────────────────────────────────
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-10 sm:py-16"
      style={{ background: DEEP, fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Header */}
      <div className="w-full max-w-xl mb-6">
        <div className="flex items-center gap-3 mb-2">
          <button
            onClick={() => router.push('/dashboard/companion')}
            className="p-2 rounded-xl transition-all hover:scale-105"
            style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}` }}
          >
            <ArrowLeft size={16} className="text-white/50" />
          </button>
          <div>
            <h1 className="text-lg font-black text-white">Create Character</h1>
            <p className="text-xs text-white/40">Step {step + 1} of 5</p>
          </div>
        </div>
      </div>

      {/* Step indicator */}
      <div className="w-full max-w-xl">
        {renderStepIndicator()}
      </div>

      {/* Step content */}
      <div
        className="w-full max-w-xl rounded-2xl p-6 sm:p-8"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        {steps[step]()}
      </div>

      {/* Navigation */}
      <div className="w-full max-w-xl flex items-center justify-between mt-6">
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
          style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${BORDER}`, color: 'rgba(255,255,255,0.6)' }}
        >
          <ArrowLeft size={14} />
          Back
        </button>

        {step < 4 ? (
          <button
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            disabled={!canNext()}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:opacity-90 disabled:opacity-30 disabled:cursor-not-allowed"
            style={{
              background: canNext() ? `linear-gradient(135deg, ${GOLD}, #e8c96a)` : 'rgba(255,255,255,0.05)',
              color: canNext() ? DEEP : 'rgba(255,255,255,0.3)',
              border: canNext() ? 'none' : `1px solid ${BORDER}`,
              boxShadow: canNext() ? `0 0 20px rgba(201,168,76,0.25)` : 'none',
            }}
          >
            Next
            <ArrowRight size={14} />
          </button>
        ) : (
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-105 hover:opacity-90 disabled:opacity-60"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, #e8c96a)`,
              color: DEEP,
              boxShadow: `0 0 20px rgba(201,168,76,0.25)`,
            }}
          >
            {saving ? (
              <>
                <span className="animate-spin inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full" />
                Saving...
              </>
            ) : (
              <>
                <Save size={14} />
                Create Character
              </>
            )}
          </button>
        )}
      </div>

      {/* Range input styling */}
      <style>{`
        input[type="range"]::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: ${GOLD};
          cursor: pointer;
          border: 2px solid ${DEEP};
          box-shadow: 0 0 8px rgba(201,168,76,0.4);
        }
        input[type="range"]::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: ${GOLD};
          cursor: pointer;
          border: 2px solid ${DEEP};
          box-shadow: 0 0 8px rgba(201,168,76,0.4);
        }
        input[type="range"]:focus {
          outline: none;
        }
        input[type="text"]:focus {
          border-color: ${GOLD} !important;
          box-shadow: 0 0 0 2px rgba(201,168,76,0.2);
        }
      `}</style>
    </div>
  );
}
