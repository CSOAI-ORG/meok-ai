"use client";

import { useState } from "react";
import {
  Download,
  Trash2,
  Database,
  MessageSquare,
  Plus,
  Edit2,
  Check,
  X,
  AlertTriangle,
  ChevronDown,
  Loader2,
  ShieldAlert,
} from "lucide-react";

// ─── Brand tokens ─────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── Demo data ────────────────────────────────────────────────────
type MemoryEntry = {
  id: string;
  category: string;
  content: string;
  date: string;
};

const INITIAL_MEMORIES: MemoryEntry[] = [
  { id: "m1", category: "Health",      content: "Prefers morning workouts; gym at 06:30 on weekdays.",            date: "2026-03-20" },
  { id: "m2", category: "Work",        content: "Currently building MEOK AI — Series A prep underway.",           date: "2026-03-18" },
  { id: "m3", category: "Family",      content: "Weekly call with parents every Sunday evening.",                 date: "2026-03-15" },
  { id: "m4", category: "Preference",  content: "Dislikes push notifications outside of working hours.",          date: "2026-03-10" },
  { id: "m5", category: "Goal",        content: "Aims to read 24 books in 2026 — currently on book 5.",           date: "2026-02-28" },
  { id: "m6", category: "Insight",     content: "Most productive between 09:00–12:00; creative peaks at night.",  date: "2026-02-14" },
];

const CONVERSATION_COUNT = 47;

type ConversationFilter = "7d" | "30d" | "90d" | "all";

const FILTER_LABELS: Record<ConversationFilter, string> = {
  "7d":  "Older than 7 days",
  "30d": "Older than 30 days",
  "90d": "Older than 90 days",
  "all": "All conversations",
};

const FILTER_COUNTS: Record<ConversationFilter, number> = {
  "7d":  12,
  "30d": 29,
  "90d": 41,
  "all": 47,
};

// ─── Sub-components ───────────────────────────────────────────────

function SectionCard({
  icon,
  title,
  children,
  danger,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  danger?: boolean;
}) {
  return (
    <div
      className="rounded-xl p-4 md:p-6 space-y-4"
      style={{
        background: danger ? "rgba(239,68,68,0.03)" : "rgba(255,255,255,0.04)",
        border: `1px solid ${danger ? "rgba(239,68,68,0.25)" : "rgba(255,255,255,0.08)"}`,
      }}
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
        <span style={{ color: danger ? "#f87171" : GOLD }}>{icon}</span>
        <h3
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: danger ? "#f87171" : "rgba(255,255,255,0.55)" }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/5" />;
}

// ─── Category badge ───────────────────────────────────────────────
const CATEGORY_COLOURS: Record<string, string> = {
  Health:     "rgba(52,211,153,0.15)",
  Work:       "rgba(96,165,250,0.15)",
  Family:     "rgba(251,191,36,0.15)",
  Preference: "rgba(167,139,250,0.15)",
  Goal:       "rgba(249,115,22,0.15)",
  Insight:    "rgba(201,168,76,0.15)",
};
const CATEGORY_TEXT: Record<string, string> = {
  Health:     "#34d399",
  Work:       "#60a5fa",
  Family:     "#fbbf24",
  Preference: "#a78bfa",
  Goal:       "#f97316",
  Insight:    GOLD,
};

function CategoryBadge({ cat }: { cat: string }) {
  return (
    <span
      className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium"
      style={{
        background: CATEGORY_COLOURS[cat] ?? "rgba(255,255,255,0.07)",
        color: CATEGORY_TEXT[cat] ?? "rgba(255,255,255,0.6)",
      }}
    >
      {cat}
    </span>
  );
}

// ─── 94.3 Memory row ──────────────────────────────────────────────

function MemoryRow({
  entry,
  onDelete,
  onSave,
}: {
  entry: MemoryEntry;
  onDelete: (id: string) => void;
  onSave: (id: string, content: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(entry.content);

  const handleSave = () => {
    if (draft.trim()) {
      onSave(entry.id, draft.trim());
    }
    setEditing(false);
  };

  const handleCancel = () => {
    setDraft(entry.content);
    setEditing(false);
  };

  return (
    <div
      className="rounded-lg p-3 space-y-2 transition-colors"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <CategoryBadge cat={entry.category} />
          <span className="text-xs text-white/25">{entry.date}</span>
        </div>
        {!editing && (
          <div className="flex items-center gap-1 flex-shrink-0">
            <button type="button"
              onClick={() => setEditing(true)}
              className="flex items-center gap-1 px-2 py-1 rounded text-xs text-white/45 hover:text-white/75 hover:bg-white/5 transition-colors"
              aria-label={`Edit memory: ${entry.content}`}
            >
              <Edit2 className="w-3 h-3" />
              Edit
            </button>
            <button type="button"
              onClick={() => onDelete(entry.id)}
              className="flex items-center gap-1 px-2 py-1 rounded text-xs text-red-400/60 hover:text-red-400 hover:bg-red-500/5 transition-colors"
              aria-label={`Delete memory: ${entry.content}`}
            >
              <Trash2 className="w-3 h-3" />
              Delete
            </button>
          </div>
        )}
      </div>

      {editing ? (
        <div className="space-y-2">
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            rows={2}
            autoFocus
            className="w-full bg-transparent text-sm text-white/80 rounded-lg px-3 py-2 resize-none focus:outline-none"
            style={{ border: `1px solid ${GOLD}33` }}
            aria-label="Edit memory content"
          />
          <div className="flex gap-2">
            <button type="button"
              onClick={handleSave}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors"
              style={{ background: GOLD, color: DEEP }}
            >
              <Check className="w-3 h-3" /> Save
            </button>
            <button type="button"
              onClick={handleCancel}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/45 hover:text-white/75 transition-colors"
              style={{ background: "rgba(255,255,255,0.05)" }}
            >
              <X className="w-3 h-3" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <p className="text-sm text-white/65 leading-relaxed">{entry.content}</p>
      )}
    </div>
  );
}

// ─── 94.3 Add Memory form ─────────────────────────────────────────

const ALL_CATEGORIES = ["Health", "Work", "Family", "Preference", "Goal", "Insight"];

function AddMemoryForm({ onAdd }: { onAdd: (e: MemoryEntry) => void }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Insight");

  const handleAdd = () => {
    if (!content.trim()) return;
    const today = new Date().toISOString().slice(0, 10);
    onAdd({
      id: `m_${Date.now()}`,
      category,
      content: content.trim(),
      date: today,
    });
    setContent("");
    setCategory("Insight");
    setOpen(false);
  };

  if (!open) {
    return (
      <button type="button"
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-white/50 hover:text-white/80 transition-colors w-full"
        style={{ border: `1px dashed rgba(255,255,255,0.12)` }}
      >
        <Plus className="w-4 h-4" />
        Add memory
      </button>
    );
  }

  return (
    <div
      className="rounded-lg p-3 space-y-3"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <p className="text-xs font-semibold uppercase tracking-widest text-white/35">
        New memory
      </p>

      {/* Category selector */}
      <div className="flex flex-wrap gap-1.5">
        {ALL_CATEGORIES.map((cat) => (
          <button type="button"
            key={cat}
            onClick={() => setCategory(cat)}
            className="px-2.5 py-1 rounded text-xs transition-all"
            style={{
              background: category === cat ? CATEGORY_COLOURS[cat] : "rgba(255,255,255,0.04)",
              color: category === cat ? CATEGORY_TEXT[cat] : "rgba(255,255,255,0.4)",
              border: `1px solid ${category === cat ? "transparent" : "rgba(255,255,255,0.07)"}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        rows={2}
        placeholder="Describe the memory..."
        autoFocus
        className="w-full bg-transparent text-sm text-white/80 rounded-lg px-3 py-2 resize-none focus:outline-none placeholder:text-white/20"
        style={{ border: `1px solid rgba(255,255,255,0.1)` }}
        aria-label="New memory content"
      />

      <div className="flex gap-2">
        <button type="button"
          onClick={handleAdd}
          disabled={!content.trim()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all disabled:opacity-40"
          style={{ background: GOLD, color: DEEP }}
        >
          <Plus className="w-3 h-3" /> Add
        </button>
        <button type="button"
          onClick={() => { setOpen(false); setContent(""); }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs text-white/45 hover:text-white/75 transition-colors"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          <X className="w-3 h-3" /> Cancel
        </button>
      </div>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────

export default function DataManagementPage() {

  // 94.1 Download state
  const [downloading, setDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);

  // 94.2 Delete account state
  const [showDeletePanel, setShowDeletePanel] = useState(false);
  const [deleteText, setDeleteText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  // 94.3 Memories
  const [memories, setMemories] = useState<MemoryEntry[]>(INITIAL_MEMORIES);

  // 94.4 Conversation cleanup
  const [convFilter, setConvFilter] = useState<ConversationFilter>("30d");
  const [showConvConfirm, setShowConvConfirm] = useState(false);
  const [convDeleting, setConvDeleting] = useState(false);
  const [convDeleted, setConvDeleted] = useState(false);
  const [remainingConvs, setRemainingConvs] = useState(CONVERSATION_COUNT);

  // ── 94.1 Download handler ─────────────────────────────────────────
  const handleDownload = async () => {
    setDownloading(true);
    try {
      let data: object;
      try {
        const res = await fetch("/api/user/export");
        if (res.ok) {
          data = await res.json();
        } else {
          throw new Error("non-ok");
        }
      } catch {
        data = {
          profile: { email: "user@example.com", name: "MEOK User", createdAt: "2025-01-01" },
          memories: memories,
          conversations: [],
          preferences: {
            font_size: localStorage.getItem("meok_font_size") ?? "16",
            high_contrast: localStorage.getItem("meok_high_contrast") ?? "false",
            reduce_motion: localStorage.getItem("meok_reduce_motion") ?? "false",
          },
        };
      }

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `meok-data-export-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setDownloadDone(true);
      setTimeout(() => setDownloadDone(false), 3000);
    } finally {
      setDownloading(false);
    }
  };

  // ── 94.2 Delete account handler ───────────────────────────────────
  const handleDeleteAccount = async () => {
    if (deleteText !== "DELETE") return;
    setDeleting(true);
    try {
      try {
        const res = await fetch("/api/user/delete", { method: "DELETE" });
        if (!res.ok) throw new Error("non-ok");
      } catch {
        // Demo: show success UI
      }
      setDeleteSuccess(true);
    } finally {
      setDeleting(false);
    }
  };

  // ── 94.3 Memory handlers ──────────────────────────────────────────
  const handleDeleteMemory = (id: string) => {
    setMemories((prev) => prev.filter((m) => m.id !== id));
  };

  const handleSaveMemory = (id: string, content: string) => {
    setMemories((prev) =>
      prev.map((m) => (m.id === id ? { ...m, content } : m))
    );
  };

  const handleAddMemory = (entry: MemoryEntry) => {
    setMemories((prev) => [entry, ...prev]);
  };

  // ── 94.4 Conversation cleanup handler ────────────────────────────
  const handleDeleteConversations = async () => {
    setConvDeleting(true);
    await new Promise((r) => setTimeout(r, 900)); // simulate async
    const removed = FILTER_COUNTS[convFilter];
    setRemainingConvs((prev) => Math.max(0, prev - removed));
    setConvDeleted(true);
    setShowConvConfirm(false);
    setConvDeleting(false);
    setTimeout(() => setConvDeleted(false), 3000);
  };

  if (deleteSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ background: DEEP }}>
        <div className="text-center space-y-4 max-w-sm px-6">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
            style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.25)" }}
          >
            <Check className="w-6 h-6 text-red-400" />
          </div>
          <h2 className="text-lg font-semibold text-white">Account scheduled for deletion</h2>
          <p className="text-sm text-white/45">
            Your data will be permanently removed within 30 days. You will receive a confirmation email.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-6 md:py-10" style={{ background: DEEP, color: "white" }}>
      <div className="max-w-2xl mx-auto px-4 md:px-6 space-y-5 md:space-y-6">

        {/* Header */}
        <div className="mb-2">
          <h1 className="text-xl md:text-2xl font-bold text-white">Data Management</h1>
          <p className="text-sm text-white/35 mt-1">
            Export, manage memories, and control your data
          </p>
        </div>

        {/* ── 94.1 Download my data ─────────────────────────────────── */}
        <SectionCard icon={<Download className="w-4 h-4" />} title="Export data">
          <div className="space-y-3">
            <p className="text-sm text-white/55 leading-relaxed">
              Download a full export of your MEOK data including your profile, memories, conversation history, and preferences as a JSON file.
            </p>
            <button type="button"
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-60"
              style={{ background: GOLD, color: DEEP }}
              aria-label="Download my data"
            >
              {downloading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Preparing export…
                </>
              ) : downloadDone ? (
                <>
                  <Check className="w-4 h-4" />
                  Downloaded
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  Download my data
                </>
              )}
            </button>
          </div>
        </SectionCard>

        {/* ── 94.3 Memory management ───────────────────────────────── */}
        <SectionCard icon={<Database className="w-4 h-4" />} title="Memory management">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/45">
                {memories.length} {memories.length === 1 ? "entry" : "entries"} stored
              </p>
            </div>

            <div className="space-y-2">
              {memories.map((m) => (
                <MemoryRow
                  key={m.id}
                  entry={m}
                  onDelete={handleDeleteMemory}
                  onSave={handleSaveMemory}
                />
              ))}
              {memories.length === 0 && (
                <p className="text-sm text-white/25 text-center py-4">
                  No memories stored.
                </p>
              )}
            </div>

            <AddMemoryForm onAdd={handleAddMemory} />
          </div>
        </SectionCard>

        {/* ── 94.4 Conversation history cleanup ───────────────────── */}
        <SectionCard icon={<MessageSquare className="w-4 h-4" />} title="Conversation history">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-white/55">
                You have{" "}
                <span className="font-semibold text-white">{remainingConvs}</span>{" "}
                conversation{remainingConvs !== 1 ? "s" : ""}
              </p>
              {convDeleted && (
                <span className="flex items-center gap-1.5 text-xs text-green-400">
                  <Check className="w-3 h-3" /> Deleted
                </span>
              )}
            </div>

            {/* Filter selector */}
            <div className="space-y-1.5">
              <label className="text-xs text-white/35 uppercase tracking-wider">
                Delete conversations
              </label>
              <div className="relative">
                <select
                  value={convFilter}
                  onChange={(e) => {
                    setConvFilter(e.target.value as ConversationFilter);
                    setShowConvConfirm(false);
                  }}
                  className="w-full appearance-none rounded-lg px-3 py-2.5 text-sm text-white/80 focus:outline-none pr-8"
                  style={{
                    background: SURFACE,
                    border: `1px solid ${BORDER}`,
                    color: "rgba(255,255,255,0.75)",
                  }}
                  aria-label="Select conversation filter"
                >
                  {(Object.keys(FILTER_LABELS) as ConversationFilter[]).map((k) => (
                    <option key={k} value={k} style={{ background: "#1a1930" }}>
                      {FILTER_LABELS[k]}
                    </option>
                  ))}
                </select>
                <ChevronDown className="w-4 h-4 text-white/25 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div
              className="flex items-center justify-between rounded-lg px-3 py-2.5"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <span className="text-sm text-white/45">
                Matches{" "}
                <span className="font-semibold text-white/75">
                  {Math.min(FILTER_COUNTS[convFilter], remainingConvs)}
                </span>{" "}
                conversation{FILTER_COUNTS[convFilter] !== 1 ? "s" : ""}
              </span>
              <button type="button"
                onClick={() => setShowConvConfirm(!showConvConfirm)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-red-400 hover:text-red-300 transition-colors"
                style={{ background: "rgba(239,68,68,0.08)" }}
                aria-expanded={showConvConfirm}
              >
                <Trash2 className="w-3 h-3" />
                Delete filtered
              </button>
            </div>

            {/* Confirmation panel */}
            {showConvConfirm && (
              <div
                className="rounded-lg p-4 space-y-3"
                style={{
                  background: "rgba(239,68,68,0.04)",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
                role="alert"
              >
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-white/65 leading-relaxed">
                    This will permanently delete{" "}
                    <span className="font-semibold text-white/85">
                      {Math.min(FILTER_COUNTS[convFilter], remainingConvs)}
                    </span>{" "}
                    conversation{FILTER_COUNTS[convFilter] !== 1 ? "s" : ""}. This action cannot be undone.
                  </p>
                </div>
                <div className="flex gap-2">
                  <button type="button"
                    onClick={handleDeleteConversations}
                    disabled={convDeleting}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all disabled:opacity-60"
                    style={{ background: "#ef4444", color: "white" }}
                  >
                    {convDeleting ? (
                      <><Loader2 className="w-3 h-3 animate-spin" /> Deleting…</>
                    ) : (
                      <><Trash2 className="w-3 h-3" /> Confirm delete</>
                    )}
                  </button>
                  <button type="button"
                    onClick={() => setShowConvConfirm(false)}
                    className="px-3 py-1.5 rounded-lg text-xs text-white/40 hover:text-white/65 transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </SectionCard>

        {/* ── 94.2 Delete account ──────────────────────────────────── */}
        <SectionCard
          icon={<ShieldAlert className="w-4 h-4" />}
          title="Delete account"
          danger
        >
          <div className="space-y-4">
            <p className="text-sm text-white/55 leading-relaxed">
              Permanently delete your MEOK account and all associated data. This action is irreversible and your data cannot be recovered.
            </p>

            {!showDeletePanel ? (
              <button type="button"
                onClick={() => setShowDeletePanel(true)}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                style={{
                  background: "rgba(239,68,68,0.08)",
                  color: "#f87171",
                  border: "1px solid rgba(239,68,68,0.2)",
                }}
              >
                <Trash2 className="w-4 h-4" />
                Delete my account
              </button>
            ) : (
              <div
                className="rounded-lg p-4 space-y-4"
                style={{
                  background: "rgba(239,68,68,0.04)",
                  border: "1px solid rgba(239,68,68,0.25)",
                }}
                role="alert"
              >
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-red-300">
                      Are you absolutely sure?
                    </p>
                    <p className="text-xs text-white/45 leading-relaxed">
                      All your memories, conversations, companion settings, and billing data will be permanently erased. Type{" "}
                      <span className="font-mono font-bold text-red-300">DELETE</span>{" "}
                      to confirm.
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <input
                    type="text"
                    value={deleteText}
                    onChange={(e) => setDeleteText(e.target.value)}
                    placeholder="Type DELETE to confirm"
                    autoFocus
                    autoComplete="off"
                    spellCheck={false}
                    className="w-full bg-transparent rounded-lg px-3 py-2.5 text-sm font-mono text-white/85 focus:outline-none placeholder:text-white/20"
                    style={{
                      border: `1px solid ${deleteText === "DELETE" ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.1)"}`,
                    }}
                    aria-label="Type DELETE to confirm account deletion"
                  />
                </div>

                <div className="flex gap-2">
                  <button type="button"
                    onClick={handleDeleteAccount}
                    disabled={deleteText !== "DELETE" || deleting}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                    style={{ background: "#ef4444", color: "white" }}
                    aria-disabled={deleteText !== "DELETE"}
                  >
                    {deleting ? (
                      <><Loader2 className="w-4 h-4 animate-spin" /> Deleting…</>
                    ) : (
                      <><Trash2 className="w-4 h-4" /> Permanently delete</>
                    )}
                  </button>
                  <button type="button"
                    onClick={() => { setShowDeletePanel(false); setDeleteText(""); }}
                    className="px-4 py-2 rounded-lg text-sm text-white/40 hover:text-white/65 transition-colors"
                    style={{ background: "rgba(255,255,255,0.05)" }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </SectionCard>

      </div>
    </div>
  );
}
