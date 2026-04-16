"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import {
  Shield,
  BookOpen,
  Clock,
  Plus,
  Trash2,
  CheckCircle,
  Search,
  BarChart2,
  XCircle,
  ChevronRight,
  GraduationCap,
  Lock,
  Eye,
} from "lucide-react";
import { Surface, IconOrb, FeatureCard } from "@/components/design-system";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── Types ────────────────────────────────────────────────────────────────────

type SchoolSafeMode = "OFF" | "MONITORING" | "STRICT";

interface SchoolSafeConfig {
  mode: SchoolSafeMode;
  schoolStart: string;
  schoolEnd: string;
  schoolDays: boolean[];
  allowedSubjects: string[];
  blockList: string[];
  safeSearch: boolean;
}

const DEFAULT_CONFIG: SchoolSafeConfig = {
  mode: "OFF",
  schoolStart: "08:00",
  schoolEnd: "15:30",
  schoolDays: [false, true, true, true, true, true, false], // Mon–Fri
  allowedSubjects: ["Math", "Science", "English", "History"],
  blockList: [],
  safeSearch: true,
};

const SUBJECTS = ["Math", "Science", "English", "History", "Art", "Music"];

const SCHOOL_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const STRICT_BLOCKS = [
  "Adult content",
  "Violence & gore",
  "Gambling",
  "Drugs & alcohol",
  "Social media (during school hours)",
];

const STORAGE_KEY = "meok_school_safe_config";

// ─── Feature cards ────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Homework Helper",
    description: "MEOK helps children understand concepts — it never writes essays or completes assignments for them.",
  },
  {
    icon: Lock,
    title: "Strict Blocking",
    description: "Hard blocks on adult content, gambling, and social media during configured school hours.",
  },
  {
    icon: Search,
    title: "Safe Search",
    description: "Forces safe-search filtering on all platforms to keep research appropriate and focused.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Set Hours", desc: "Choose the school days and times when restrictions should apply." },
  { step: "02", title: "Pick Subjects", desc: "Select which subjects MEOK can help with during school hours." },
  { step: "03", title: "Stay Focused", desc: "Blocks and monitoring activate automatically when school time starts." },
];

// ─── Mode Toggle ──────────────────────────────────────────────────────────────

interface ModeToggleProps {
  value: SchoolSafeMode;
  onChange: (v: SchoolSafeMode) => void;
}

const MODE_OPTIONS: { value: SchoolSafeMode; label: string; color: string; desc: string }[] = [
  { value: "OFF",        label: "Off",        color: "rgba(255,255,255,0.25)", desc: "No school-safe restrictions active" },
  { value: "MONITORING", label: "Monitoring", color: "#f59e0b",               desc: "Tracks activity; no blocks" },
  { value: "STRICT",     label: "Strict",     color: "#22c55e",               desc: "Full blocks during school hours" },
];

function ModeToggle({ value, onChange }: ModeToggleProps) {
  return (
    <div className="flex gap-2 flex-wrap">
      {MODE_OPTIONS.map((opt) => {
        const active = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className="flex-1 min-w-[100px] rounded-xl border px-4 py-3 text-sm font-semibold transition-all"
            style={{
              borderColor: active ? opt.color : BORDER,
              backgroundColor: active ? `${opt.color}15` : SURFACE,
              color: active ? opt.color : "rgba(255,255,255,0.4)",
            }}
          >
            <div className="flex items-center justify-center gap-2">
              <span
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: active ? opt.color : "rgba(255,255,255,0.15)" }}
              />
              {opt.label}
            </div>
            <p className="mt-1 text-xs font-normal" style={{ color: active ? `${opt.color}cc` : "rgba(255,255,255,0.25)" }}>
              {opt.desc}
            </p>
          </button>
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function SchoolSafePage() {
  const [config, setConfig] = useState<SchoolSafeConfig>(DEFAULT_CONFIG);
  const [newDomain, setNewDomain] = useState("");
  const [saved, setSaved] = useState(false);

  // Load from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<SchoolSafeConfig>;
        setConfig((prev) => ({ ...prev, ...parsed }));
      }
    } catch {
      // ignore
    }
  }, []);

  // Persist to localStorage
  const persist = useCallback((next: SchoolSafeConfig) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // ignore
    }
    setConfig(next);
  }, []);

  const update = useCallback(
    (patch: Partial<SchoolSafeConfig>) => {
      const next = { ...config, ...patch };
      persist(next);
      setSaved(true);
      setTimeout(() => setSaved(false), 1800);
    },
    [config, persist]
  );

  const toggleSubject = (subject: string) => {
    const current = config.allowedSubjects;
    const next = current.includes(subject)
      ? current.filter((s) => s !== subject)
      : [...current, subject];
    update({ allowedSubjects: next });
  };

  const toggleDay = (idx: number) => {
    const next = [...config.schoolDays];
    next[idx] = !next[idx];
    update({ schoolDays: next });
  };

  const addDomain = () => {
    const domain = newDomain.trim().toLowerCase().replace(/^https?:\/\//i, "");
    if (!domain || config.blockList.includes(domain)) return;
    update({ blockList: [...config.blockList, domain] });
    setNewDomain("");
  };

  const removeDomain = (domain: string) => {
    update({ blockList: config.blockList.filter((d) => d !== domain) });
  };

  // Simulated stats (would be real in production)
  const stats = [
    { label: "Sessions today", value: "3" },
    { label: "Blocked attempts today", value: config.mode === "OFF" ? "—" : "7" },
    { label: "Homework assists", value: "12" },
  ];

  const activeMode = MODE_OPTIONS.find((m) => m.value === config.mode)!;

  return (
    <div className="min-h-screen overflow-x-hidden text-white" style={{ background: DEEP }}>
      {/* Background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-10"
          style={{ background: `radial-gradient(ellipse, ${GOLD} 0%, transparent 65%)` }}
        />
        <div className="blob-teal absolute bottom-0 left-1/3 h-[400px] w-[400px] opacity-10" />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-32 pt-20">

        {/* ── Back nav ──────────────────────────────────────────────────────── */}
        <div className="mb-8 flex items-center gap-2 text-sm text-white/40">
          <Link href="/guardian" className="hover:text-white/70 transition-colors">Guardian</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/guardian/children" className="hover:text-white/70 transition-colors">Children</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white/60">School-Safe Mode</span>
        </div>

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div className="mb-10">
          <div className="mb-5 flex items-center gap-4">
            <IconOrb icon={Shield} variant="teal" size="lg" pulse />
            <div>
              <h1 className="text-3xl font-black tracking-tight md:text-4xl">School-Safe Mode</h1>
              <p className="mt-1 text-white/50">Education-focused protection that lets kids learn safely</p>
            </div>
          </div>

          {/* Active mode pill */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold"
            style={{
              backgroundColor: `${activeMode.color}18`,
              border: `1px solid ${activeMode.color}40`,
              color: activeMode.color,
            }}
          >
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: activeMode.color }} />
            Currently: {activeMode.label}
            {saved && <span className="ml-2 text-xs text-white/40">Saved</span>}
          </div>
        </div>

        {/* ── Feature Cards ─────────────────────────────────────────────────── */}
        <section className="animate-fade-in-up mb-12">
          <div className="grid gap-5 sm:grid-cols-3">
            {FEATURES.map((f) => (
              <FeatureCard
                key={f.title}
                title={f.title}
                description={f.description}
                icon={f.icon}
                iconVariant="teal"
                glow="teal"
              />
            ))}
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────────────── */}
        <section className="animate-fade-in-up mb-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {HOW_IT_WORKS.map((s) => (
              <Surface key={s.step} variant="glass" className="p-6 text-center">
                <div className="mb-2 text-2xl font-bold tabular-nums" style={{ color: GOLD }}>
                  {s.step}
                </div>
                <h3 className="mb-1 text-base font-semibold">{s.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{s.desc}</p>
              </Surface>
            ))}
          </div>
        </section>

        <div className="space-y-6">

          {/* ── Mode toggle ───────────────────────────────────────────────────── */}
          <Surface
            variant="elevated"
            className="p-6"
          >
            <h2 className="mb-1 font-semibold text-white/90">Protection Mode</h2>
            <p className="mb-5 text-sm text-white/40">Choose how actively School-Safe Mode protects your child</p>
            <ModeToggle value={config.mode} onChange={(v) => update({ mode: v })} />
          </Surface>

          {/* ── What it blocks (STRICT) ─────────────────────────────────────── */}
          {config.mode === "STRICT" && (
            <Surface
              variant="elevated"
              className="p-6"
              style={{ borderColor: `${GOLD}30` }}
            >
              <h2 className="mb-1 font-semibold" style={{ color: GOLD }}>Blocked in Strict Mode</h2>
              <p className="mb-5 text-sm text-white/40">These categories are hard-blocked during school hours</p>
              <ul className="space-y-3">
                {STRICT_BLOCKS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/70">
                    <XCircle className="h-4 w-4 shrink-0 text-red-400" />
                    {item}
                  </li>
                ))}
              </ul>
            </Surface>
          )}

          {/* ── School hours ──────────────────────────────────────────────────── */}
          <Surface
            variant="elevated"
            className="p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <Clock className="h-5 w-5" style={{ color: GOLD }} />
              <div>
                <h2 className="font-semibold text-white/90">School Hours</h2>
                <p className="text-sm text-white/40">Restrictions apply during these times</p>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-white/60 w-12">Start</label>
                <input
                  type="time"
                  value={config.schoolStart}
                  onChange={(e) => update({ schoolStart: e.target.value })}
                  className="rounded-xl border px-4 py-2 text-sm font-mono text-white"
                  style={{ background: DEEP, borderColor: BORDER, colorScheme: "dark" }}
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-white/60 w-12">End</label>
                <input
                  type="time"
                  value={config.schoolEnd}
                  onChange={(e) => update({ schoolEnd: e.target.value })}
                  className="rounded-xl border px-4 py-2 text-sm font-mono text-white"
                  style={{ background: DEEP, borderColor: BORDER, colorScheme: "dark" }}
                />
              </div>
            </div>

            {/* Day checkboxes */}
            <div className="flex gap-2 flex-wrap">
              {SCHOOL_DAYS.map((day, idx) => (
                <button
                  key={day}
                  type="button"
                  onClick={() => toggleDay(idx)}
                  className="h-10 w-12 rounded-xl border text-xs font-semibold transition-all"
                  style={{
                    borderColor: config.schoolDays[idx] ? GOLD : BORDER,
                    backgroundColor: config.schoolDays[idx] ? `${GOLD}15` : SURFACE,
                    color: config.schoolDays[idx] ? GOLD : "rgba(255,255,255,0.35)",
                  }}
                >
                  {day}
                </button>
              ))}
            </div>
          </Surface>

          {/* ── Homework Helper ───────────────────────────────────────────────── */}
          <Surface
            variant="elevated"
            className="p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <BookOpen className="h-5 w-5" style={{ color: GOLD }} />
              <div>
                <h2 className="font-semibold text-white/90">Homework Helper</h2>
                <p className="text-sm text-white/40">Allow MEOK to assist with these subjects during school hours</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {SUBJECTS.map((subject) => {
                const active = config.allowedSubjects.includes(subject);
                return (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleSubject(subject)}
                    className="rounded-full border px-4 py-2 text-sm font-medium transition-all"
                    style={{
                      borderColor: active ? GOLD : BORDER,
                      backgroundColor: active ? `${GOLD}15` : "transparent",
                      color: active ? GOLD : "rgba(255,255,255,0.40)",
                    }}
                  >
                    {active && <CheckCircle className="mr-1.5 inline h-3.5 w-3.5" />}
                    {subject}
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-xs text-white/30">
              MEOK will help your child understand concepts — it will never write essays or complete assignments for them.
            </p>
          </Surface>

          {/* ── Safe Search ───────────────────────────────────────────────────── */}
          <Surface
            variant="elevated"
            className="p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Search className="h-5 w-5" style={{ color: GOLD }} />
                <div>
                  <h2 className="font-semibold text-white/90">Safe Search</h2>
                  <p className="text-sm text-white/40">Forces safe search filtering on all platforms</p>
                </div>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={config.safeSearch}
                onClick={() => update({ safeSearch: !config.safeSearch })}
                className="relative h-7 w-12 rounded-full border transition-colors"
                style={{
                  backgroundColor: config.safeSearch ? `${GOLD}30` : "rgba(255,255,255,0.08)",
                  borderColor: config.safeSearch ? GOLD : BORDER,
                }}
              >
                <span
                  className="absolute top-1 h-5 w-5 rounded-full transition-all"
                  style={{
                    backgroundColor: config.safeSearch ? GOLD : "rgba(255,255,255,0.3)",
                    left: config.safeSearch ? "calc(100% - 22px)" : "2px",
                  }}
                />
              </button>
            </div>
          </Surface>

          {/* ── Block List ────────────────────────────────────────────────────── */}
          <Surface
            variant="elevated"
            className="p-6"
          >
            <h2 className="mb-1 font-semibold text-white/90">Domain Block List</h2>
            <p className="mb-5 text-sm text-white/40">Manually block specific websites during school hours</p>

            <div className="mb-4 flex gap-2">
              <input
                type="text"
                value={newDomain}
                onChange={(e) => setNewDomain(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") addDomain(); }}
                placeholder="e.g. tiktok.com"
                className="flex-1 rounded-xl border px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:ring-1"
                style={{ background: DEEP, borderColor: BORDER }}
              />
              <button
                type="button"
                onClick={addDomain}
                className="flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-opacity hover:opacity-80"
                style={{ backgroundColor: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40` }}
              >
                <Plus className="h-4 w-4" />
                Add
              </button>
            </div>

            {config.blockList.length === 0 ? (
              <p className="text-sm text-white/25 italic">No domains blocked yet</p>
            ) : (
              <ul className="space-y-2">
                {config.blockList.map((domain) => (
                  <li
                    key={domain}
                    className="flex items-center justify-between rounded-xl border px-4 py-2.5"
                    style={{ background: DEEP, borderColor: BORDER }}
                  >
                    <span className="font-mono text-sm text-white/70">{domain}</span>
                    <button
                      type="button"
                      onClick={() => removeDomain(domain)}
                      className="text-white/25 transition-colors hover:text-red-400"
                      aria-label={`Remove ${domain}`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Surface>

          {/* ── Activity Summary ──────────────────────────────────────────────── */}
          <Surface
            variant="elevated"
            className="p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <BarChart2 className="h-5 w-5" style={{ color: GOLD }} />
              <div>
                <h2 className="font-semibold text-white/90">Activity Summary</h2>
                <p className="text-sm text-white/40">Today&apos;s stats at a glance</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border p-4 text-center"
                  style={{ background: DEEP, borderColor: BORDER }}
                >
                  <p className="text-2xl font-black tabular-nums" style={{ color: GOLD }}>
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </Surface>

        </div>

        {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-white/10 pt-10 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white/80">Protect your child</p>
            <p className="text-xs text-white/40">Explore more Guardian tools below.</p>
          </div>
          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/guardian/children"
              className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
            >
              ← Back to Children Safety
            </Link>
            <Link
              href="/guardian/predator-stop"
              className="rounded-xl px-6 py-3 text-sm font-bold transition-opacity hover:opacity-90"
              style={{ backgroundColor: `${GOLD}20`, color: GOLD, border: `1px solid ${GOLD}40` }}
            >
              Predator Stop →
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
