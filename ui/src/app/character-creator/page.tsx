"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Check, User } from "lucide-react";

interface CreatedCharacter {
  id: string;
  name: string;
  archetype: string;
  role: string;
  personality: string;
  mandate: string;
  color: string;
  createdAt: string;
}

interface FormData {
  name: string;
  archetype: string;
  role: string;
  personality: string;
  mandate: string;
}

const ARCHETYPES = [
  { id: "sage", label: "Sage", emoji: "🦉", desc: "Wisdom, depth, long-view thinking" },
  { id: "nurturer", label: "Nurturer", emoji: "🌿", desc: "Care, warmth, emotional presence" },
  { id: "explorer", label: "Explorer", emoji: "🧭", desc: "Curiosity, discovery, new frontiers" },
  { id: "creator", label: "Creator", emoji: "✨", desc: "Imagination, beauty, making things" },
  { id: "guardian", label: "Guardian", emoji: "🛡️", desc: "Guardianship, loyalty, holding space" },
  { id: "trickster", label: "Trickster", emoji: "🃏", desc: "Wit, truth-telling, disruption" },
  { id: "rebel", label: "Rebel", emoji: "🔥", desc: "Authenticity, liberation, fierce honesty" },
  { id: "protector", label: "Protector", emoji: "🛡️", desc: "Watchful, steady, loyal above all" },
  { id: "challenger", label: "Challenger", emoji: "⚔️", desc: "Growth, accountability, high standards" },
  { id: "diplomat", label: "Diplomat", emoji: "🤝", desc: "Bridge-building, negotiation, poise" },
  { id: "strategist", label: "Strategist", emoji: "♟️", desc: "Planning, systems, foresight" },
  { id: "caretaker", label: "Caretaker", emoji: "🕯️", desc: "Stewardship, patience, preservation" },
];

const GOLD = "#c9a84c";

export default function CharacterCreatorPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    archetype: "",
    role: "",
    personality: "",
    mandate: "",
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState<CreatedCharacter | null>(null);
  const [error, setError] = useState<string | null>(null);

  const archetype = ARCHETYPES.find((a) => a.id === form.archetype);
  const isValid = form.name.trim().length >= 2 && form.archetype && form.role.trim().length >= 2;

  function update<K extends keyof FormData>(key: K, value: FormData[K]) {
    setForm((f) => ({ ...f, [key]: value }));
    setSaved(null);
    setError(null);
  }

  async function handleSave() {
    if (!isValid) return;
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/character", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = (await res.json()) as { character?: CreatedCharacter; error?: string };
      if (!res.ok) {
        throw new Error(data.error || `Save failed (${res.status})`);
      }
      if (data.character) {
        setSaved(data.character);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save character");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0d0c18] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">
        <Link
          href="/civilizations"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#c9a84c] hover:underline"
        >
          <ArrowLeft size={16} /> Back to Civilizations
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-5xl">
          Create your <span className="text-[#c9a84c]">own agent</span>
        </h1>
        <p className="mt-3 max-w-xl text-white/60">
          Design a sovereign character and save them to the council. They will be stored in memory
          (or Upstash Redis when configured) and can join future Aethelgard debates.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Form */}
          <div className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="e.g. Vex, Alder, Solene"
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c]/50 focus:outline-none"
                maxLength={60}
              />
            </div>

            <div>
              <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Archetype
              </label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {ARCHETYPES.map((a) => (
                  <button
                    key={a.id}
                    type="button"
                    onClick={() => update("archetype", a.id)}
                    className={`rounded-xl border px-3 py-2 text-left text-sm transition ${
                      form.archetype === a.id
                        ? "border-[#c9a84c]/50 bg-[#c9a84c]/10 text-[#c9a84c]"
                        : "border-white/10 bg-white/[0.03] text-white/70 hover:bg-white/[0.06]"
                    }`}
                  >
                    <span className="mr-1">{a.emoji}</span>
                    <span className="font-semibold">{a.label}</span>
                    <span className="mt-0.5 block text-[10px] leading-tight text-white/40">{a.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="role" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Role
              </label>
              <input
                id="role"
                type="text"
                value={form.role}
                onChange={(e) => update("role", e.target.value)}
                placeholder="e.g. Trade Negotiator, Risk Oracle"
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c]/50 focus:outline-none"
                maxLength={80}
              />
            </div>

            <div>
              <label htmlFor="personality" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Personality summary
              </label>
              <textarea
                id="personality"
                value={form.personality}
                onChange={(e) => update("personality", e.target.value)}
                placeholder="How do they speak? What drives them?"
                rows={3}
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c]/50 focus:outline-none"
                maxLength={500}
              />
            </div>

            <div>
              <label htmlFor="mandate" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
                Mandate
              </label>
              <textarea
                id="mandate"
                value={form.mandate}
                onChange={(e) => update("mandate", e.target.value)}
                placeholder="What is their official responsibility?"
                rows={3}
                className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c]/50 focus:outline-none"
                maxLength={500}
              />
            </div>

            <button
              type="button"
              onClick={handleSave}
              disabled={!isValid || loading}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#c9a84c] px-6 py-3 font-bold text-[#0d0c18] transition hover:bg-[#b8963e] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <>
                  <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-[#0d0c18]/20 border-t-[#0d0c18]" />
                  Saving…
                </>
              ) : saved ? (
                <>
                  <Check size={18} /> Saved to Council
                </>
              ) : (
                <>
                  <Save size={18} /> Save to Council
                </>
              )}
            </button>

            {error && (
              <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-200">
                {error}
              </div>
            )}
          </div>

          {/* Preview */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">Live preview</div>
            <PreviewCard form={form} archetype={archetype} saved={saved} />
          </div>
        </div>
      </div>
    </main>
  );
}

function PreviewCard({
  form,
  archetype,
  saved,
}: {
  form: FormData;
  archetype?: (typeof ARCHETYPES)[number];
  saved: CreatedCharacter | null;
}) {
  const color = saved?.color ?? pickColor(form.archetype);
  const name = form.name.trim() || "Unnamed Agent";
  const role = form.role.trim() || "Council Member";
  const personality = form.personality.trim() || "Personality not yet defined.";
  const mandate = form.mandate.trim() || "Mandate not yet defined.";

  return (
    <div
      className="relative overflow-hidden rounded-2xl border p-6"
      style={{ borderColor: `${color}40`, backgroundColor: "rgba(255,255,255,0.03)" }}
    >
      <div
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl"
        style={{ backgroundColor: `${color}20` }}
      />

      <div className="relative flex items-start gap-4">
        <div
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-2xl"
          style={{ backgroundColor: `${color}20`, border: `1px solid ${color}40` }}
        >
          {archetype ? archetype.emoji : <User size={24} style={{ color }} />}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-2xl font-bold text-white">{name}</h2>
          <div className="mt-0.5 text-sm font-semibold" style={{ color }}>
            {role}
          </div>
          {archetype && (
            <div className="mt-1 inline-block rounded-full bg-white/[0.05] px-2 py-0.5 text-[10px] text-white/60">
              {archetype.label}
            </div>
          )}
        </div>
      </div>

      <div className="relative mt-6 space-y-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white/40">Personality</div>
          <p className="mt-1 text-sm leading-relaxed text-white/70">{personality}</p>
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-white/40">Mandate</div>
          <p className="mt-1 text-sm leading-relaxed text-white/70">{mandate}</p>
        </div>
      </div>

      {saved && (
        <div className="relative mt-6 rounded-xl border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-200">
          <div className="flex items-center gap-2 font-semibold">
            <Check size={14} /> Saved to council
          </div>
          <div className="mt-1 text-xs text-green-200/70">ID: {saved.id}</div>
        </div>
      )}

      <div className="relative mt-6 flex items-center gap-2 text-[10px] text-white/30">
        <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />
        MEOK Sovereign Character
      </div>
    </div>
  );
}

function pickColor(archetype: string): string {
  const palette = [
    "#3b82f6",
    "#8b5cf6",
    "#10b981",
    "#f59e0b",
    "#ef4444",
    "#06b6d4",
    "#eab308",
    "#ec4899",
    "#14b8a6",
    "#6366f1",
    "#f97316",
    "#64748b",
  ];
  let hash = 0;
  for (let i = 0; i < archetype.length; i++) {
    hash = archetype.charCodeAt(i) + ((hash << 5) - hash);
  }
  return palette[Math.abs(hash) % palette.length] ?? GOLD;
}
