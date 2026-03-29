"use client";

// Protected route — auth is enforced by the dashboard layout (AuthProvider + useAuth).

import { useState, useEffect, useCallback } from "react";
import {
  BookHeart,
  Plus,
  Lock,
  Globe,
  Sparkles,
  Users,
  Calendar,
  Heart,
  Loader2,
  ChevronDown,
  ChevronUp,
  Smile,
  Cloud,
  Sun,
  CloudRain,
  Star,
} from "lucide-react";

// ── BRAND TOKENS ────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── STORAGE KEY ─────────────────────────────────────────────────────────────

const VAULT_KEY = "meok_family_vault";

// ── TYPES ────────────────────────────────────────────────────────────────────

type MoodKey = "joy" | "love" | "calm" | "sad" | "excited";

interface FamilyMoment {
  id: string;
  title: string;
  description: string;
  who: string[];
  date: string;
  mood: MoodKey;
  shared: boolean;
  createdAt: string;
}

// ── MOOD CONFIG ──────────────────────────────────────────────────────────────

const MOODS: Record<MoodKey, { label: string; color: string; icon: typeof Smile }> = {
  joy: { label: "Joy", color: "#fbbf24", icon: Sun },
  love: { label: "Love", color: "#f472b6", icon: Heart },
  calm: { label: "Calm", color: "#60a5fa", icon: Cloud },
  sad: { label: "Sad", color: "#818cf8", icon: CloudRain },
  excited: { label: "Excited", color: "#34d399", icon: Star },
};

const FAMILY_MEMBERS = ["Me", "Partner", "Child 1", "Child 2", "Grandparent"];

// ── SEED DATA ────────────────────────────────────────────────────────────────

const SEED_MOMENTS: FamilyMoment[] = [
  {
    id: "seed-1",
    title: "First snow day of the year",
    description: "Everyone piled outside before breakfast. Ella made a lopsided snowman. Jake pretended he was too old but built the best snowball fort.",
    who: ["Me", "Partner", "Child 1", "Child 2"],
    date: "2026-01-12",
    mood: "joy",
    shared: true,
    createdAt: "2026-01-12T10:32:00Z",
  },
  {
    id: "seed-2",
    title: "Grandad's 80th birthday dinner",
    description: "Long table, candles, the old stories. He cried when we gave him the photo book. Worth every late night printing it.",
    who: ["Me", "Partner", "Child 1", "Child 2", "Grandparent"],
    date: "2026-02-08",
    mood: "love",
    shared: true,
    createdAt: "2026-02-08T20:10:00Z",
  },
  {
    id: "seed-3",
    title: "Jake's first guitar performance",
    description: "Shaky hands, perfect notes. Two months of secret practice. The whole room went quiet.",
    who: ["Me", "Partner", "Child 2"],
    date: "2026-03-01",
    mood: "excited",
    shared: false,
    createdAt: "2026-03-01T18:45:00Z",
  },
];

// ── MOMENT CARD ─────────────────────────────────────────────────────────────

function MomentCard({
  moment,
  onToggleShare,
}: {
  moment: FamilyMoment;
  onToggleShare: (id: string) => void;
}) {
  const mood = MOODS[moment.mood];
  const MoodIcon = mood.icon;

  return (
    <div
      className="rounded-2xl overflow-hidden transition-all"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div className="p-5">
        <div className="flex items-start gap-3">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: mood.color + "15", border: `1px solid ${mood.color}30` }}
          >
            <MoodIcon size={16} style={{ color: mood.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className="text-sm font-black text-white leading-snug">{moment.title}</p>
              <button
                type="button"
                onClick={() => onToggleShare(moment.id)}
                className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold transition-all"
                style={{
                  background: moment.shared ? "rgba(74,222,128,0.10)" : "rgba(255,255,255,0.04)",
                  border: `1px solid ${moment.shared ? "rgba(74,222,128,0.25)" : BORDER}`,
                  color: moment.shared ? "#4ade80" : "rgba(255,255,255,0.25)",
                }}
              >
                {moment.shared ? <Globe size={9} /> : <Lock size={9} />}
                {moment.shared ? "Shared" : "Private"}
              </button>
            </div>
            <p className="text-xs text-white/45 leading-relaxed mb-3">{moment.description}</p>
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Calendar size={10} style={{ color: "rgba(255,255,255,0.2)" }} />
                <span className="text-[10px] text-white/30 font-mono">
                  {new Date(moment.date).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Users size={10} style={{ color: "rgba(255,255,255,0.2)" }} />
                <span className="text-[10px] text-white/30">{moment.who.join(", ")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── ADD MOMENT FORM ──────────────────────────────────────────────────────────

function AddMomentForm({ onAdd }: { onAdd: (m: FamilyMoment) => void }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [who, setWho] = useState<string[]>(["Me"]);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [mood, setMood] = useState<MoodKey>("joy");
  const [shared, setShared] = useState(true);

  const toggleMember = (member: string) => {
    setWho((prev) =>
      prev.includes(member) ? prev.filter((m) => m !== member) : [...prev, member]
    );
  };

  const handleSubmit = () => {
    if (!title.trim() || !description.trim() || who.length === 0) return;
    const moment: FamilyMoment = {
      id: `moment-${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      who,
      date,
      mood,
      shared,
      createdAt: new Date().toISOString(),
    };
    onAdd(moment);
    setTitle("");
    setDescription("");
    setWho(["Me"]);
    setDate(new Date().toISOString().split("T")[0]);
    setMood("joy");
    setShared(true);
    setOpen(false);
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: SURFACE, border: `1px solid ${open ? GOLD + "40" : BORDER}` }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full px-6 py-4 flex items-center gap-3 text-left transition-all"
        style={{ borderBottom: open ? `1px solid ${BORDER}` : "none" }}
      >
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center"
          style={{ background: GOLD + "15" }}
        >
          <Plus size={14} color={GOLD} />
        </div>
        <span className="text-sm font-black text-white">Log a family memory</span>
        <span className="ml-auto text-white/30">
          {open ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
        </span>
      </button>

      {open && (
        <div className="p-6 space-y-5">
          {/* Title */}
          <div>
            <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
              Memory title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. First snow day of the year"
              className="w-full rounded-xl px-4 py-2.5 text-sm text-white/80 outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, fontFamily: "'DM Sans', sans-serif" }}
              onFocus={(e) => (e.target.style.borderColor = GOLD + "50")}
              onBlur={(e) => (e.target.style.borderColor = BORDER)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
              What happened?
            </label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the moment in a few sentences..."
              rows={3}
              className="w-full rounded-xl px-4 py-2.5 text-sm text-white/80 resize-none outline-none transition-all"
              style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, fontFamily: "'DM Sans', sans-serif" }}
              onFocus={(e) => (e.target.style.borderColor = GOLD + "50")}
              onBlur={(e) => (e.target.style.borderColor = BORDER)}
            />
          </div>

          {/* Date + Mood */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
                Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full rounded-xl px-3 py-2.5 text-sm text-white/80 outline-none transition-all"
                style={{ background: "rgba(255,255,255,0.03)", border: `1px solid ${BORDER}`, fontFamily: "'DM Sans', sans-serif", colorScheme: "dark" }}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
                Mood
              </label>
              <div className="flex gap-1.5 flex-wrap">
                {(Object.entries(MOODS) as [MoodKey, typeof MOODS[MoodKey]][]).map(([key, m]) => {
                  const MIcon = m.icon;
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setMood(key)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center transition-all"
                      style={{
                        background: mood === key ? m.color + "25" : "rgba(255,255,255,0.03)",
                        border: `1px solid ${mood === key ? m.color + "60" : BORDER}`,
                      }}
                      title={m.label}
                    >
                      <MIcon size={14} style={{ color: mood === key ? m.color : "rgba(255,255,255,0.3)" }} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Who was there */}
          <div>
            <label className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">
              Who was there?
            </label>
            <div className="flex gap-2 flex-wrap">
              {FAMILY_MEMBERS.map((member) => (
                <button
                  key={member}
                  type="button"
                  onClick={() => toggleMember(member)}
                  className="px-3 py-1.5 rounded-lg text-xs font-medium transition-all"
                  style={{
                    background: who.includes(member) ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.03)",
                    border: `1px solid ${who.includes(member) ? GOLD + "50" : BORDER}`,
                    color: who.includes(member) ? GOLD : "rgba(255,255,255,0.35)",
                  }}
                >
                  {member}
                </button>
              ))}
            </div>
          </div>

          {/* Shared toggle */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-white/70">Share with family</p>
              <p className="text-xs text-white/30">All companions can access shared memories</p>
            </div>
            <button
              type="button"
              onClick={() => setShared((v) => !v)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              style={{
                background: shared ? "rgba(74,222,128,0.12)" : "rgba(255,255,255,0.04)",
                border: `1px solid ${shared ? "rgba(74,222,128,0.3)" : BORDER}`,
                color: shared ? "#4ade80" : "rgba(255,255,255,0.3)",
              }}
            >
              {shared ? <Globe size={11} /> : <Lock size={11} />}
              {shared ? "Shared" : "Private"}
            </button>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={!title.trim() || !description.trim() || who.length === 0}
            className="w-full py-2.5 rounded-xl text-sm font-black transition-all disabled:opacity-40"
            style={{ background: GOLD, color: DEEP }}
          >
            Save memory
          </button>
        </div>
      )}
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function FamilyVaultPage() {
  const [moments, setMoments] = useState<FamilyMoment[]>([]);
  const [filter, setFilter] = useState<"all" | "shared" | "private">("all");
  const [storyLoading, setStoryLoading] = useState(false);
  const [story, setStory] = useState<string | null>(null);
  const [showStory, setShowStory] = useState(false);

  // Load from localStorage on mount, seed if empty
  useEffect(() => {
    try {
      const stored = localStorage.getItem(VAULT_KEY);
      if (stored) {
        setMoments(JSON.parse(stored));
      } else {
        setMoments(SEED_MOMENTS);
        localStorage.setItem(VAULT_KEY, JSON.stringify(SEED_MOMENTS));
      }
    } catch {
      setMoments(SEED_MOMENTS);
    }
  }, []);

  const saveMoments = useCallback((updated: FamilyMoment[]) => {
    setMoments(updated);
    try {
      localStorage.setItem(VAULT_KEY, JSON.stringify(updated));
    } catch {
      // Storage full or unavailable
    }
  }, []);

  const handleAddMoment = (m: FamilyMoment) => {
    saveMoments([m, ...moments]);
  };

  const handleToggleShare = (id: string) => {
    saveMoments(moments.map((m) => (m.id === id ? { ...m, shared: !m.shared } : m)));
  };

  const handleGenerateStory = async () => {
    const sharedMoments = moments.filter((m) => m.shared);
    if (sharedMoments.length === 0) return;

    setStoryLoading(true);
    setStory(null);
    setShowStory(true);

    const memorySummary = sharedMoments
      .map((m) => `- ${m.date}: "${m.title}" — ${m.description} (with ${m.who.join(", ")}, mood: ${MOODS[m.mood].label})`)
      .join("\n");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            {
              role: "user",
              content: `Based on these family memories, write a warm, narrative summary — like a short chapter from a family story. Weave the moments together with care. 2-3 paragraphs.\n\nMemories:\n${memorySummary}`,
            },
          ],
        }),
      });

      if (!res.ok) throw new Error("Failed to generate story");

      const data = await res.json();
      setStory(data.content ?? data.message ?? data.text ?? "Your family story is still being written.");
    } catch {
      setStory("We couldn't generate your family story right now. Try again soon.");
    } finally {
      setStoryLoading(false);
    }
  };

  const filtered = moments.filter((m) => {
    if (filter === "shared") return m.shared;
    if (filter === "private") return !m.shared;
    return true;
  });

  const sharedCount = moments.filter((m) => m.shared).length;
  const privateCount = moments.filter((m) => !m.shared).length;

  // Sort by date descending
  const sorted = [...filtered].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: DEEP, fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-4xl mx-auto px-5 py-10 space-y-8">

        {/* ── HEADER ─────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center"
                style={{ background: GOLD + "15", border: `1px solid ${GOLD}30` }}
              >
                <BookHeart size={18} color={GOLD} />
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white">Family Vault</h1>
            </div>
            <p className="text-sm text-white/40">
              Moments your family shares, remembered forever.
            </p>
          </div>
          <button
            onClick={handleGenerateStory}
            disabled={storyLoading || sharedCount === 0}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-sm font-black transition-all disabled:opacity-40"
            style={{ background: "rgba(201,168,76,0.15)", color: GOLD, border: `1px solid ${GOLD}30` }}
          >
            {storyLoading ? (
              <>
                <Loader2 size={13} className="animate-spin" />
                Writing story...
              </>
            ) : (
              <>
                <Sparkles size={13} />
                Family story
              </>
            )}
          </button>
        </div>

        {/* ── STATS ──────────────────────────────────────────────────────── */}
        <div className="grid grid-cols-3 gap-3">
          {[
            { label: "Moments", value: moments.length, color: GOLD },
            { label: "Shared", value: sharedCount, color: "#4ade80" },
            { label: "Private", value: privateCount, color: "#a78bfa" },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-xl p-4 text-center"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <p className="text-2xl font-black" style={{ color: s.color }}>
                {s.value}
              </p>
              <p className="text-xs text-white/30 mt-0.5">{s.label}</p>
            </div>
          ))}
        </div>

        {/* ── FAMILY STORY ───────────────────────────────────────────────── */}
        {showStory && (
          <div
            className="rounded-2xl overflow-hidden"
            style={{ background: SURFACE, border: `1px solid ${GOLD}40` }}
          >
            <div
              className="px-6 py-4 flex items-center gap-2"
              style={{ borderBottom: `1px solid ${BORDER}`, background: "rgba(201,168,76,0.05)" }}
            >
              <Sparkles size={15} color={GOLD} />
              <span className="text-sm font-black text-white">Your Family Story</span>
              <button
                onClick={() => setShowStory(false)}
                className="ml-auto text-xs text-white/25 hover:text-white/50 transition-colors"
              >
                Close
              </button>
            </div>
            <div className="p-6">
              {storyLoading ? (
                <div className="flex items-center gap-3 text-sm text-white/40">
                  <Loader2 size={16} className="animate-spin" style={{ color: GOLD }} />
                  Weaving your memories into a story...
                </div>
              ) : (
                <div className="space-y-3">
                  {story?.split("\n\n").map((para, i) => (
                    <p key={i} className="text-sm text-white/65 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── ACCESS NOTE ────────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-5 flex items-start gap-4"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.25)" }}
          >
            <Users size={15} style={{ color: "#60a5fa" }} />
          </div>
          <div>
            <p className="text-sm font-bold text-white/80 mb-1">Shared memories are visible to all companions</p>
            <p className="text-xs text-white/35 leading-relaxed">
              When a family member chats with their companion, shared vault memories provide context — birthdays, inside jokes, special moments. Private memories stay with you alone.
            </p>
          </div>
        </div>

        {/* ── ADD MOMENT ─────────────────────────────────────────────────── */}
        <AddMomentForm onAdd={handleAddMoment} />

        {/* ── FILTER ─────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-2">
          {(["all", "shared", "private"] as const).map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className="px-4 py-1.5 rounded-lg text-xs font-bold capitalize transition-all"
              style={{
                background: filter === f ? GOLD + "20" : "rgba(255,255,255,0.03)",
                border: `1px solid ${filter === f ? GOLD + "50" : BORDER}`,
                color: filter === f ? GOLD : "rgba(255,255,255,0.35)",
              }}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto text-xs text-white/25 font-mono">
            {sorted.length} moment{sorted.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* ── TIMELINE ───────────────────────────────────────────────────── */}
        {sorted.length === 0 ? (
          <div
            className="rounded-2xl p-10 text-center"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            <BookHeart size={32} color={GOLD} className="mx-auto mb-4 opacity-30" />
            <p className="text-sm font-bold text-white/40 mb-1">No memories yet</p>
            <p className="text-xs text-white/20">Log your first family moment above.</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sorted.map((moment) => (
              <MomentCard key={moment.id} moment={moment} onToggleShare={handleToggleShare} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
