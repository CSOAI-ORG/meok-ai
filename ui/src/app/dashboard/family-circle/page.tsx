"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Heart,
  Plus,
  X,
  ChevronRight,
  Shield,
  Eye,
  Filter,
  Phone,
  BookOpen,
  Users,
  Crown,
  Baby,
  UserRound,
  Loader2,
} from "lucide-react";

// ── Brand tokens ───────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";
const SURFACE2 = "#1a1929";

// ── Types ──────────────────────────────────────────────────────────────────

type MemberRole = "Parent" | "Child" | "Partner" | "Grandparent";
type MemberStatus = "Active" | "Invited" | "Pending";

interface FamilyMember {
  id: string;
  name: string;
  role: MemberRole;
  status: MemberStatus;
  email?: string;
  addedAt: string;
}

interface FamilySettings {
  sharedCompanion: boolean;
  parentOverride: boolean;
  contentFilterLevel: number; // 1-5
}

interface EmergencyContact {
  name: string;
  phone: string;
}

interface FamilyMemoryEntry {
  id: string;
  content: string;
  timestamp: string;
  member?: string;
}

// ── LS keys ────────────────────────────────────────────────────────────────
const LS_CIRCLE = "meok_family_circle";
const LS_SETTINGS = "meok_family_circle_settings";
const LS_MEMORIES = "meok_family_memories";

const DEFAULT_SETTINGS: FamilySettings = {
  sharedCompanion: false,
  parentOverride: false,
  contentFilterLevel: 3,
};

// ── Helpers ────────────────────────────────────────────────────────────────

function loadCircle(): { members: FamilyMember[]; emergency: EmergencyContact | null } {
  try {
    const raw = localStorage.getItem(LS_CIRCLE);
    if (!raw) return { members: [], emergency: null };
    return JSON.parse(raw);
  } catch {
    return { members: [], emergency: null };
  }
}

function saveCircle(data: { members: FamilyMember[]; emergency: EmergencyContact | null }) {
  localStorage.setItem(LS_CIRCLE, JSON.stringify(data));
}

function loadSettings(): FamilySettings {
  try {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(localStorage.getItem(LS_SETTINGS) ?? "{}") };
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function saveSettings(s: FamilySettings) {
  localStorage.setItem(LS_SETTINGS, JSON.stringify(s));
}

function loadMemories(): FamilyMemoryEntry[] {
  try {
    return JSON.parse(localStorage.getItem(LS_MEMORIES) ?? "[]");
  } catch {
    return [];
  }
}

function roleIcon(role: MemberRole) {
  switch (role) {
    case "Parent": return <Crown size={12} />;
    case "Child": return <Baby size={12} />;
    case "Partner": return <Heart size={12} />;
    case "Grandparent": return <UserRound size={12} />;
  }
}

function roleColor(role: MemberRole): string {
  switch (role) {
    case "Parent": return GOLD;
    case "Child": return "#60a5fa";
    case "Partner": return "#f472b6";
    case "Grandparent": return "#a78bfa";
  }
}

function statusBadge(status: MemberStatus) {
  const map: Record<MemberStatus, { bg: string; text: string; dot: string }> = {
    Active: { bg: "rgba(34,197,94,0.10)", text: "#22c55e", dot: "#22c55e" },
    Invited: { bg: `${GOLD}14`, text: GOLD, dot: GOLD },
    Pending: { bg: "rgba(148,163,184,0.10)", text: "rgba(255,255,255,0.4)", dot: "rgba(255,255,255,0.3)" },
  };
  const s = map[status];
  return (
    <span
      className="inline-flex items-center gap-1 text-[10px] font-semibold px-2 py-0.5 rounded-full"
      style={{ background: s.bg, color: s.text }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full inline-block"
        style={{ background: s.dot }}
      />
      {status}
    </span>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-xs font-semibold uppercase tracking-[0.12em] mb-4"
      style={{ color: `${GOLD}99` }}
    >
      {children}
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-xl border p-5 ${className}`}
      style={{ background: SURFACE, borderColor: BORDER }}
    >
      {children}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="relative inline-flex h-5 w-9 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 focus:outline-none"
      style={{ background: checked ? GOLD : "rgba(255,255,255,0.12)" }}
      role="switch"
      aria-checked={checked}
    >
      <span
        className="pointer-events-none inline-block h-4 w-4 rounded-full shadow-sm transition-transform duration-200"
        style={{
          background: checked ? DEEP : "rgba(255,255,255,0.5)",
          transform: checked ? "translateX(16px)" : "translateX(0)",
        }}
      />
    </button>
  );
}

// ── Add Member Form ────────────────────────────────────────────────────────

function AddMemberForm({
  onAdd,
  onCancel,
}: {
  onAdd: (m: FamilyMember) => void;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [role, setRole] = useState<MemberRole>("Child");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const roles: MemberRole[] = ["Parent", "Child", "Partner", "Grandparent"];

  const handleSubmit = () => {
    if (!name.trim()) { setError("Name is required."); return; }
    setError("");

    const member: FamilyMember = {
      id: `member_${Date.now()}`,
      name: name.trim(),
      role,
      status: email.trim() ? "Invited" : "Pending",
      email: email.trim() || undefined,
      addedAt: new Date().toISOString(),
    };
    onAdd(member);
  };

  return (
    <div
      className="rounded-xl border p-5 mt-3"
      style={{ background: SURFACE2, borderColor: `${GOLD}33` }}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-semibold text-white/80">Add Family Member</span>
        <button type="button" onClick={onCancel} className="p-1 rounded-md hover:bg-white/5 transition-colors">
          <X size={14} style={{ color: "rgba(255,255,255,0.4)" }} />
        </button>
      </div>

      <div className="space-y-3">
        {/* Name */}
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Family member's name"
            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{
              background: SURFACE,
              border: `1px solid ${error ? "#ef4444" : BORDER}`,
              color: "rgba(255,255,255,0.85)",
            }}
          />
          {error && <p className="text-[11px] mt-1" style={{ color: "#ef4444" }}>{error}</p>}
        </div>

        {/* Role */}
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            Role
          </label>
          <div className="grid grid-cols-2 gap-2">
            {roles.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setRole(r)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium border transition-all"
                style={{
                  background: role === r ? `${roleColor(r)}18` : SURFACE,
                  borderColor: role === r ? `${roleColor(r)}55` : BORDER,
                  color: role === r ? roleColor(r) : "rgba(255,255,255,0.5)",
                }}
              >
                {roleIcon(r)}
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            Email (optional — sends invite)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="member@example.com"
            className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              color: "rgba(255,255,255,0.85)",
            }}
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 pt-1">
          <button type="button"
            onClick={onCancel}
            className="flex-1 py-2.5 rounded-lg text-sm font-medium border transition-all hover:opacity-70"
            style={{ borderColor: BORDER, color: "rgba(255,255,255,0.45)" }}
          >
            Cancel
          </button>
          <button type="button"
            onClick={handleSubmit}
            className="flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all hover:opacity-85"
            style={{ background: GOLD, color: DEEP }}
          >
            Add Member
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Member Card ────────────────────────────────────────────────────────────

function MemberCard({
  member,
  onRemove,
}: {
  member: FamilyMember;
  onRemove: (id: string) => void;
}) {
  const initial = member.name.charAt(0).toUpperCase();
  const color = roleColor(member.role);

  return (
    <div
      className="rounded-xl border p-4 flex flex-col gap-3 relative group"
      style={{ background: SURFACE, borderColor: BORDER }}
    >
      {/* Remove button */}
      <button type="button"
        onClick={() => onRemove(member.id)}
        className="absolute top-3 right-3 p-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500/10"
        style={{ color: "rgba(255,255,255,0.2)" }}
        title="Remove member"
      >
        <X size={12} />
      </button>

      {/* Avatar */}
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center text-lg font-bold"
        style={{ background: `${color}20`, color }}
      >
        {initial}
      </div>

      {/* Info */}
      <div className="space-y-1.5">
        <div className="text-sm font-semibold text-white/85 truncate pr-4">{member.name}</div>
        <div className="flex items-center gap-1.5">
          <span style={{ color }}>
            {roleIcon(member.role)}
          </span>
          <span className="text-[11px] font-medium" style={{ color: "rgba(255,255,255,0.45)" }}>
            {member.role}
          </span>
        </div>
        {statusBadge(member.status)}
      </div>
    </div>
  );
}

// ── Add Slot Card ──────────────────────────────────────────────────────────

function AddSlotCard({ onClick }: { onClick: () => void }) {
  return (
    <button type="button"
      onClick={onClick}
      className="rounded-xl border p-4 flex flex-col items-center justify-center gap-2 min-h-[140px] transition-all hover:border-opacity-40 hover:bg-white/[0.02] group"
      style={{ background: SURFACE, borderColor: BORDER, borderStyle: "dashed" }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
        style={{ background: `${GOLD}14`, color: `${GOLD}80` }}
      >
        <Plus size={18} />
      </div>
      <span className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.3)" }}>
        Add member
      </span>
    </button>
  );
}

// ── Emergency Contact ──────────────────────────────────────────────────────

function EmergencyContactCard({
  contact,
  onUpdate,
}: {
  contact: EmergencyContact | null;
  onUpdate: (c: EmergencyContact) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(contact?.name ?? "");
  const [phone, setPhone] = useState(contact?.phone ?? "");

  const handleSave = () => {
    if (!name.trim() || !phone.trim()) return;
    onUpdate({ name: name.trim(), phone: phone.trim() });
    setEditing(false);
  };

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: "rgba(239,68,68,0.12)", color: "#ef4444" }}
          >
            <Phone size={14} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white/85">Emergency Contact</div>
            <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Quick-access family contact
            </div>
          </div>
        </div>
        {!editing && (
          <button type="button"
            onClick={() => { setName(contact?.name ?? ""); setPhone(contact?.phone ?? ""); setEditing(true); }}
            className="text-xs font-medium px-3 py-1.5 rounded-lg border transition-all hover:opacity-70"
            style={{ borderColor: BORDER, color: "rgba(255,255,255,0.45)" }}
          >
            {contact ? "Edit" : "Set up"}
          </button>
        )}
      </div>

      {editing ? (
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contact name"
              className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
              style={{ background: SURFACE2, border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.85)" }}
            />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1" style={{ color: "rgba(255,255,255,0.5)" }}>
              Phone
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+44 7700 000000"
              className="w-full rounded-lg px-3 py-2.5 text-sm outline-none"
              style={{ background: SURFACE2, border: `1px solid ${BORDER}`, color: "rgba(255,255,255,0.85)" }}
            />
          </div>
          <div className="flex gap-3">
            <button type="button"
              onClick={() => setEditing(false)}
              className="flex-1 py-2 rounded-lg text-xs font-medium border"
              style={{ borderColor: BORDER, color: "rgba(255,255,255,0.4)" }}
            >
              Cancel
            </button>
            <button type="button"
              onClick={handleSave}
              disabled={!name.trim() || !phone.trim()}
              className="flex-1 py-2 rounded-lg text-xs font-semibold disabled:opacity-40"
              style={{ background: GOLD, color: DEEP }}
            >
              Save
            </button>
          </div>
        </div>
      ) : contact ? (
        <div
          className="flex items-center gap-4 rounded-lg px-4 py-3"
          style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}
        >
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold flex-shrink-0"
            style={{ background: "rgba(239,68,68,0.12)", color: "#ef4444" }}
          >
            {contact.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <div className="text-sm font-semibold text-white/80">{contact.name}</div>
            <div className="text-xs font-mono mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>
              {contact.phone}
            </div>
          </div>
          <a
            href={`tel:${contact.phone.replace(/\s/g, "")}`}
            className="ml-auto px-3 py-1.5 rounded-lg text-xs font-semibold transition-all hover:opacity-80"
            style={{ background: "rgba(239,68,68,0.15)", color: "#ef4444" }}
          >
            Call
          </a>
        </div>
      ) : (
        <p className="text-sm py-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          No emergency contact set. Tap &quot;Set up&quot; to add one.
        </p>
      )}
    </Card>
  );
}

// ── Memory Vault Preview ───────────────────────────────────────────────────

function MemoryVaultPreview({ entries }: { entries: FamilyMemoryEntry[] }) {
  const last5 = entries.slice(-5).reverse();

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{ background: `${GOLD}18`, color: GOLD }}
          >
            <BookOpen size={14} />
          </div>
          <div>
            <div className="text-sm font-semibold text-white/85">Family Memory Vault</div>
            <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
              Shared memories &amp; milestones
            </div>
          </div>
        </div>
        <Link
          href="/dashboard/family-vault"
          className="text-xs font-medium flex items-center gap-1 hover:opacity-70 transition-opacity"
          style={{ color: `${GOLD}cc` }}
        >
          View all
          <ChevronRight size={12} />
        </Link>
      </div>

      {last5.length === 0 ? (
        <p className="text-sm py-2" style={{ color: "rgba(255,255,255,0.3)" }}>
          No family memories yet. They&apos;ll appear here as your family uses MEOK.
        </p>
      ) : (
        <div className="space-y-2">
          {last5.map((entry) => (
            <div
              key={entry.id}
              className="rounded-lg px-3 py-2.5"
              style={{ background: SURFACE2, border: `1px solid ${BORDER}` }}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {entry.content}
                </p>
                <span
                  className="text-[10px] flex-shrink-0 mt-0.5"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {new Date(entry.timestamp).toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </span>
              </div>
              {entry.member && (
                <div className="mt-1 text-[10px] font-medium" style={{ color: `${GOLD}80` }}>
                  {entry.member}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </Card>
  );
}

// ── AI Settings ────────────────────────────────────────────────────────────

function FamilyAISettings({
  settings,
  onChange,
}: {
  settings: FamilySettings;
  onChange: (s: FamilySettings) => void;
}) {
  const filterLabels: Record<number, string> = {
    1: "None",
    2: "Low",
    3: "Moderate",
    4: "High",
    5: "Strict",
  };

  const filterColors: Record<number, string> = {
    1: "rgba(255,255,255,0.4)",
    2: "#22c55e",
    3: GOLD,
    4: "#f97316",
    5: "#ef4444",
  };

  return (
    <Card>
      <div className="flex items-center gap-2 mb-5">
        <div
          className="w-8 h-8 rounded-lg flex items-center justify-center"
          style={{ background: `${GOLD}18`, color: GOLD }}
        >
          <Shield size={14} />
        </div>
        <div>
          <div className="text-sm font-semibold text-white/85">Family AI Settings</div>
          <div className="text-[11px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            Control how AI works across your family
          </div>
        </div>
      </div>

      <div className="space-y-5">
        {/* Shared companion */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Users size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
              Shared companion
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              One AI for the whole family instead of individual AIs
            </div>
          </div>
          <Toggle
            checked={settings.sharedCompanion}
            onChange={(v) => onChange({ ...settings, sharedCompanion: v })}
          />
        </div>

        <div className="h-px" style={{ background: BORDER }} />

        {/* Parent override */}
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Eye size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
              Parent override
            </div>
            <div className="text-[11px] mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Parents can view summaries of children&apos;s AI conversations
            </div>
          </div>
          <Toggle
            checked={settings.parentOverride}
            onChange={(v) => onChange({ ...settings, parentOverride: v })}
          />
        </div>

        <div className="h-px" style={{ background: BORDER }} />

        {/* Content filter */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-white/80 flex items-center gap-2">
              <Filter size={13} style={{ color: "rgba(255,255,255,0.4)" }} />
              Content filter level
            </div>
            <span
              className="text-xs font-semibold px-2.5 py-0.5 rounded-full"
              style={{
                background: `${filterColors[settings.contentFilterLevel]}18`,
                color: filterColors[settings.contentFilterLevel],
              }}
            >
              {settings.contentFilterLevel} — {filterLabels[settings.contentFilterLevel]}
            </span>
          </div>
          <input
            type="range"
            min={1}
            max={5}
            step={1}
            value={settings.contentFilterLevel}
            onChange={(e) =>
              onChange({ ...settings, contentFilterLevel: Number(e.target.value) })
            }
            className="w-full h-1.5 rounded-full outline-none appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, ${filterColors[settings.contentFilterLevel]} ${
                ((settings.contentFilterLevel - 1) / 4) * 100
              }%, rgba(255,255,255,0.08) ${((settings.contentFilterLevel - 1) / 4) * 100}%)`,
            }}
          />
          <div className="flex justify-between mt-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <span key={n} className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
                {filterLabels[n]}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

// ── Page ───────────────────────────────────────────────────────────────────

export default function FamilyCirclePage() {
  const [mounted, setMounted] = useState(false);
  const [members, setMembers] = useState<FamilyMember[]>([]);
  const [emergency, setEmergency] = useState<EmergencyContact | null>(null);
  const [settings, setSettings] = useState<FamilySettings>(DEFAULT_SETTINGS);
  const [memories, setMemories] = useState<FamilyMemoryEntry[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);

  // Hydrate from localStorage after mount
  useEffect(() => {
    const circle = loadCircle();
    setMembers(circle.members);
    setEmergency(circle.emergency);
    setSettings(loadSettings());
    setMemories(loadMemories());
    setMounted(true);
  }, []);

  // Persist members + emergency contact
  const persistCircle = (m: FamilyMember[], e: EmergencyContact | null) => {
    saveCircle({ members: m, emergency: e });
  };

  const handleAddMember = (member: FamilyMember) => {
    const updated = [...members, member];
    setMembers(updated);
    persistCircle(updated, emergency);
    setShowAddForm(false);
  };

  const handleRemoveMember = (id: string) => {
    const updated = members.filter((m) => m.id !== id);
    setMembers(updated);
    persistCircle(updated, emergency);
  };

  const handleSettingsChange = (s: FamilySettings) => {
    setSettings(s);
    saveSettings(s);
  };

  const handleEmergencyUpdate = (c: EmergencyContact) => {
    setEmergency(c);
    persistCircle(members, c);
  };

  // Slots: show existing members + up to 6 total
  const slotsUsed = members.length;
  const slotsRemaining = Math.max(0, 6 - slotsUsed);
  const canAddMore = slotsUsed < 6;

  if (!mounted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]" style={{ background: DEEP }}>
        <Loader2 size={22} className="animate-spin" style={{ color: GOLD }} />
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-8 max-w-5xl mx-auto" style={{ background: DEEP }}>
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-xs mb-6" style={{ color: "rgba(255,255,255,0.3)" }}>
        <span>Dashboard</span>
        <ChevronRight size={12} />
        <span style={{ color: "rgba(255,255,255,0.55)" }}>Family Circle</span>
      </div>

      {/* Page header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{ background: "rgba(236,72,153,0.15)", color: "#f472b6" }}
          >
            <Heart size={18} />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white/90 tracking-tight">Family Circle</h1>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
              Your AI family hub
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="flex items-center gap-4 mt-4">
          <div
            className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border"
            style={{ background: SURFACE, borderColor: BORDER, color: "rgba(255,255,255,0.45)" }}
          >
            <Users size={12} />
            {slotsUsed} of 6 members
          </div>
          <div
            className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-lg border"
            style={{ background: SURFACE, borderColor: BORDER, color: "rgba(255,255,255,0.45)" }}
          >
            <Shield size={12} />
            Filter: level {settings.contentFilterLevel}
          </div>
          {settings.sharedCompanion && (
            <div
              className="flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-lg border"
              style={{ background: `${GOLD}10`, borderColor: `${GOLD}33`, color: GOLD }}
            >
              <Heart size={12} />
              Shared AI
            </div>
          )}
        </div>
      </div>

      {/* Members grid */}
      <SectionHeading>Family Members</SectionHeading>
      <div className="mb-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} onRemove={handleRemoveMember} />
          ))}
          {canAddMore && !showAddForm && (
            Array.from({ length: Math.min(slotsRemaining, members.length === 0 ? 3 : 1) }).map((_, i) => (
              <AddSlotCard key={`slot_${i}`} onClick={() => setShowAddForm(true)} />
            ))
          )}
          {members.length === 0 && slotsRemaining > 3 && !showAddForm && (
            // Show remaining ghost slots to hint at capacity
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={`ghost_${i}`}
                className="rounded-xl border min-h-[140px]"
                style={{
                  background: `${SURFACE}80`,
                  borderColor: BORDER,
                  borderStyle: "dashed",
                  opacity: 0.3,
                }}
              />
            ))
          )}
        </div>

        {/* Inline add form */}
        {showAddForm && (
          <AddMemberForm
            onAdd={handleAddMember}
            onCancel={() => setShowAddForm(false)}
          />
        )}

        {/* Add button when form hidden and there's room */}
        {!showAddForm && canAddMore && members.length > 0 && (
          <button type="button"
            onClick={() => setShowAddForm(true)}
            className="mt-3 flex items-center gap-2 text-sm font-medium px-4 py-2.5 rounded-lg border transition-all hover:opacity-70"
            style={{ borderColor: BORDER, color: "rgba(255,255,255,0.45)" }}
          >
            <Plus size={14} />
            Add another member
          </button>
        )}

        {!canAddMore && (
          <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            Family circle is full (6/6 members). Remove a member to add a new one.
          </p>
        )}
      </div>

      {/* Two-column layout for settings + memory */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Family AI Settings */}
        <div>
          <SectionHeading>AI Settings</SectionHeading>
          <FamilyAISettings settings={settings} onChange={handleSettingsChange} />
        </div>

        {/* Memory vault preview */}
        <div>
          <SectionHeading>Memory Vault</SectionHeading>
          <MemoryVaultPreview entries={memories} />
        </div>
      </div>

      {/* Emergency contact */}
      <SectionHeading>Emergency Contact</SectionHeading>
      <EmergencyContactCard contact={emergency} onUpdate={handleEmergencyUpdate} />

      {/* Footer note */}
      <p className="text-center text-xs mt-8" style={{ color: "rgba(255,255,255,0.2)" }}>
        Family data is stored locally on this device and never sent to MEOK servers.
      </p>
    </div>
  );
}
