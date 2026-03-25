/**
 * MEOK AI LABS — Individual Character Profile Page
 *
 * Dynamic route: /characters/[slug]
 * Server component with generateMetadata + generateStaticParams.
 * Uses the canonical character database from @/lib/characters.
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  getCharacter,
  getAllCharacterIds,
  ARCHETYPES,
  type Character,
  type PersonalityDimensions,
  type Tier,
} from '@/lib/characters';
import { generateAvatarSVG } from '@/lib/avatar';
import { SAMPLE_DIALOGUES } from '@/lib/character-dialogues';

// ── Brand tokens ──────────────────────────────────────────────────────────

const DEEP = '#0d0c18';
const SURFACE = '#13121f';
const GOLD = '#c9a84c';

// ── Tier display helpers ──────────────────────────────────────────────────

const TIER_META: Record<Tier, { label: string; color: string; icon: string }> = {
  explorer:  { label: 'Free',      color: '#22d3ee', icon: '🌍' },
  sovereign: { label: 'Sovereign', color: GOLD,      icon: '👑' },
  family:    { label: 'Family',    color: '#a78bfa', icon: '🏠' },
};

// ── Static params (ISR) ──────────────────────────────────────────────────

export async function generateStaticParams() {
  return getAllCharacterIds().map((id) => ({ slug: id }));
}

// ── SEO metadata ─────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const char = getCharacter(slug);
  if (!char) return {};

  const archetype = ARCHETYPES[char.archetype];

  return {
    title: `${char.name} — ${char.title} | MEOK AI LABS`,
    description: `${char.tagline}. ${archetype.label} archetype. ${char.voiceStyle}.`,
    alternates: { canonical: `https://meok.ai/characters/${char.id}` },
    openGraph: {
      title: `${char.name} | MEOK AI Companions`,
      description: char.tagline,
      type: 'profile',
    },
  };
}

// ── Big Five personality bar ─────────────────────────────────────────────

const TRAIT_LABELS: { key: keyof PersonalityDimensions; label: string; color: string }[] = [
  { key: 'warmth',     label: 'Warmth',     color: '#F472B6' },
  { key: 'energy',     label: 'Energy',      color: '#FBBF24' },
  { key: 'whimsy',     label: 'Whimsy',      color: '#A78BFA' },
  { key: 'edge',       label: 'Edge',        color: '#EF4444' },
  { key: 'complexity', label: 'Complexity',  color: '#06B6D4' },
];

function PersonalityRadar({ dimensions }: { dimensions: PersonalityDimensions }) {
  return (
    <div className="space-y-3">
      {TRAIT_LABELS.map(({ key, label, color }) => {
        const value = dimensions[key];
        const pct = Math.round(value * 100);
        return (
          <div key={key} className="flex items-center gap-3">
            <span className="w-24 text-xs font-semibold text-white/50 uppercase tracking-wider text-right">
              {label}
            </span>
            <div className="flex-1 h-2.5 rounded-full bg-white/[0.06] overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{ width: `${pct}%`, backgroundColor: color }}
              />
            </div>
            <span className="w-8 text-xs text-white/40 tabular-nums">{pct}</span>
          </div>
        );
      })}
    </div>
  );
}

// ── Dialogue exchange component ──────────────────────────────────────────

function DialogueSection({
  characterName,
  characterEmoji,
  characterColor,
  dialogues,
}: {
  characterName: string;
  characterEmoji: string;
  characterColor: string;
  dialogues: Array<{ user: string; assistant: string }>;
}) {
  return (
    <div className="space-y-6">
      {dialogues.map((exchange, i) => (
        <div key={i} className="space-y-3">
          {/* User message */}
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center shrink-0 text-sm">
              🧑
            </div>
            <div className="bg-white/[0.06] rounded-2xl rounded-tl-md px-4 py-3 text-sm text-white/70 max-w-[85%]">
              {exchange.user}
            </div>
          </div>
          {/* Character response */}
          <div className="flex items-start gap-3">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm"
              style={{ backgroundColor: `${characterColor}25` }}
            >
              {characterEmoji}
            </div>
            <div
              className="rounded-2xl rounded-tl-md px-4 py-3 text-sm text-white/80 max-w-[85%] border"
              style={{
                backgroundColor: `${characterColor}08`,
                borderColor: `${characterColor}20`,
              }}
            >
              <span className="font-semibold text-white/60 text-xs block mb-1">
                {characterName}
              </span>
              {exchange.assistant}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Main page ────────────────────────────────────────────────────────────

export default async function CharacterProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const char = getCharacter(slug);
  if (!char) notFound();

  const archetype = ARCHETYPES[char.archetype];
  const tier = TIER_META[char.tier];
  const dialogues = SAMPLE_DIALOGUES[char.id] ?? [];

  // Build personality dimensions — use character-level if available, else archetype defaults
  const dimensions: PersonalityDimensions = char.dimensions ?? archetype.baseDimensions;

  // Generate DiceBear avatar SVG
  const avatarSvg = generateAvatarSVG(dimensions, char.archetype, char.name);

  // Clean systemPrompt for display: strip the "You are X, ..." preamble
  const aboutText = char.systemPrompt
    .replace(/^You are \w+,?\s*/i, '')
    .replace(/^an?\s+/i, 'A ')
    .replace(/from MEOK AI LABS\.\s*/i, '')
    .trim();

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: DEEP }}>

      {/* ═══════════════════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════════════════ */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-24 pb-16 text-center overflow-hidden"
        style={{
          background: `radial-gradient(ellipse 120% 80% at 50% -20%, ${char.color}22 0%, ${DEEP} 65%)`,
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[160px] opacity-25 pointer-events-none"
          style={{ backgroundColor: char.color }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${char.color} 1px, transparent 1px), linear-gradient(90deg, ${char.color} 1px, transparent 1px)`,
            backgroundSize: '70px 70px',
          }}
        />

        {/* Back link */}
        <div className="absolute top-20 left-6 sm:left-10">
          <Link
            href="/characters"
            className="text-white/35 hover:text-white/70 text-sm transition-colors flex items-center gap-1.5 font-medium"
          >
            &larr; All characters
          </Link>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center gap-2 mb-8 text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: GOLD }}>
            <Link href="/characters" className="hover:text-[#d4b870] transition-colors">
              Characters
            </Link>
            <span style={{ color: `${GOLD}55` }}>&rarr;</span>
            <span>{char.name}</span>
          </nav>

          {/* Large emoji */}
          <div
            role="img"
            aria-label={char.name}
            className="text-[7rem] sm:text-[9rem] mb-4 select-none leading-none"
            style={{ filter: `drop-shadow(0 0 40px ${char.color}50)` }}
          >
            {char.emoji}
          </div>

          {/* DiceBear avatar */}
          <div
            className="mx-auto mb-6 w-24 h-24 rounded-full border-2 overflow-hidden"
            style={{ borderColor: `${char.color}40` }}
            dangerouslySetInnerHTML={{ __html: avatarSvg }}
          />

          {/* Archetype badge */}
          <span
            className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-1.5 rounded-full border mb-4"
            style={{
              color: archetype.color,
              borderColor: `${archetype.color}40`,
              backgroundColor: `${archetype.color}12`,
            }}
          >
            {archetype.emoji} {archetype.label}
          </span>

          {/* Name + title */}
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-3 leading-[0.95]"
            style={{ color: char.color }}
          >
            {char.name}
          </h1>
          <p className="text-xl sm:text-2xl text-white/50 italic mb-3">
            {char.title}
          </p>
          <p className="text-lg text-white/60 max-w-xl mx-auto leading-relaxed">
            {char.tagline}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTENT GRID
      ═══════════════════════════════════════════════════════════════════ */}
      <div className="max-w-5xl mx-auto px-6 pb-24 space-y-16">

        {/* ── About + Personality Radar ─────────────────────────────────── */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* About */}
          <section>
            <h2 className="text-2xl font-bold mb-4" style={{ color: GOLD }}>
              About {char.name}
            </h2>
            <p className="text-white/65 leading-relaxed text-[15px] mb-6">
              {aboutText}
            </p>

            {/* Communication style */}
            {char.communicationStyle && (
              <div className="mb-6">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-2">
                  Communication Style
                </h3>
                <p className="text-white/55 text-sm">{char.communicationStyle}</p>
              </div>
            )}

            {/* Voice style */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-2">
                Voice
              </h3>
              <p className="text-white/55 text-sm italic">&ldquo;{char.voiceStyle}&rdquo;</p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {char.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{
                    color: `${char.color}cc`,
                    borderColor: `${char.color}30`,
                    backgroundColor: `${char.color}0a`,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Personality Radar */}
          <section
            className="rounded-2xl border p-6"
            style={{
              backgroundColor: SURFACE,
              borderColor: 'rgba(255,255,255,0.06)',
            }}
          >
            <h2 className="text-lg font-bold mb-5" style={{ color: GOLD }}>
              Personality Profile
            </h2>
            <PersonalityRadar dimensions={dimensions} />

            {/* Tier badge */}
            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <span
                className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-full border"
                style={{
                  color: tier.color,
                  borderColor: `${tier.color}35`,
                  backgroundColor: `${tier.color}10`,
                }}
              >
                {tier.icon} {tier.label} Tier
              </span>
            </div>

            {/* Personality traits */}
            <div className="mt-5 flex flex-wrap gap-1.5">
              {char.personality.map((trait) => (
                <span
                  key={trait}
                  className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white/[0.05] text-white/45"
                >
                  {trait}
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* ── Sample Dialogue ───────────────────────────────────────────── */}
        {dialogues.length > 0 && (
          <section
            className="rounded-2xl border p-6 sm:p-8"
            style={{
              backgroundColor: SURFACE,
              borderColor: 'rgba(255,255,255,0.06)',
            }}
          >
            <h2 className="text-2xl font-bold mb-2" style={{ color: GOLD }}>
              A Conversation with {char.name}
            </h2>
            <p className="text-white/40 text-sm mb-8">
              Sample exchanges showing how {char.name} responds in their own voice.
            </p>
            <DialogueSection
              characterName={char.name}
              characterEmoji={char.emoji}
              characterColor={char.color}
              dialogues={dialogues}
            />
          </section>
        )}

        {/* ── CTA ────────────────────────────────────────────────────────── */}
        <section className="text-center space-y-6">
          <Link
            href={`/dashboard/chat?companion=${char.id}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold transition-all hover:scale-[1.03] hover:shadow-lg"
            style={{
              backgroundColor: char.color,
              color: DEEP,
              boxShadow: `0 0 40px ${char.color}30`,
            }}
          >
            Chat with {char.name} &rarr;
          </Link>

          <div>
            <Link
              href="/characters"
              className="text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              &larr; Back to all characters
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
