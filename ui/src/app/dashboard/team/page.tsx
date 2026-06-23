"use client";

import { useState, useEffect, useCallback } from "react";
import { useUser } from "@clerk/nextjs";
import {
  Users,
  UserPlus,
  Crown,
  Shield,
  Eye,
  Copy,
  Check,
  Bot,
  Trash2,
  Settings,
  Activity,
  FileText,
  ChevronDown,
  MessageSquare,
  Heart,
  Clock,
  User,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";

// ── Types ─────────────────────────────────────────────────────────
interface Team {
  id: string;
  name: string;
  owner_id: string;
  plan: string;
  created_at: string;
  settings: Record<string, unknown>;
}

interface TeamMember {
  user_id: string;
  team_id: string;
  role: "admin" | "member" | "guest";
  joined_at: string;
}

type RoleType = "owner" | "admin" | "member";

interface MemberRoleOverride {
  userId: string;
  role: RoleType;
}

interface ActivityEntry {
  id: string;
  actor: string;
  actorInitial: string;
  actorColor: string;
  action: string;
  target?: string;
  timestamp: string;
  relativeTime: string;
}

interface SharedDocument {
  id: string;
  title: string;
  type: string;
  author: string;
  authorInitial: string;
  authorColor: string;
  date: string;
  size: string;
}

interface CompanionStat {
  userId: string;
  displayName: string;
  initial: string;
  color: string;
  companionName: string;
  bondLevel: number;
  messageCount: number;
}

// ── Demo data ─────────────────────────────────────────────────────
const DEMO_ACTIVITY: ActivityEntry[] = [
  {
    id: "a1",
    actor: "Alex Chen",
    actorInitial: "A",
    actorColor: GOLD,
    action: "sent 14 messages to",
    target: "Aria",
    timestamp: "2026-03-27T09:48:00Z",
    relativeTime: "2 min ago",
  },
  {
    id: "a2",
    actor: "Jordan Kim",
    actorInitial: "J",
    actorColor: "#7c6ddb",
    action: "shared",
    target: "Q2 Strategy Brief.pdf",
    timestamp: "2026-03-27T09:35:00Z",
    relativeTime: "15 min ago",
  },
  {
    id: "a3",
    actor: "Sam Rivera",
    actorInitial: "S",
    actorColor: "#3db885",
    action: "updated role for",
    target: "Morgan Lee",
    timestamp: "2026-03-27T08:52:00Z",
    relativeTime: "58 min ago",
  },
  {
    id: "a4",
    actor: "Alex Chen",
    actorInitial: "A",
    actorColor: GOLD,
    action: "uploaded",
    target: "Roadmap v3.docx",
    timestamp: "2026-03-27T08:20:00Z",
    relativeTime: "1 hr ago",
  },
  {
    id: "a5",
    actor: "Morgan Lee",
    actorInitial: "M",
    actorColor: "#e05c7a",
    action: "started a conversation with",
    target: "Nova",
    timestamp: "2026-03-27T07:44:00Z",
    relativeTime: "2 hr ago",
  },
  {
    id: "a6",
    actor: "Jordan Kim",
    actorInitial: "J",
    actorColor: "#7c6ddb",
    action: "shared",
    target: "Competitor Analysis.xlsx",
    timestamp: "2026-03-27T06:10:00Z",
    relativeTime: "3 hr ago",
  },
  {
    id: "a7",
    actor: "Priya Nair",
    actorInitial: "P",
    actorColor: "#f0a25c",
    action: "joined the team",
    timestamp: "2026-03-27T05:00:00Z",
    relativeTime: "5 hr ago",
  },
  {
    id: "a8",
    actor: "Sam Rivera",
    actorInitial: "S",
    actorColor: "#3db885",
    action: "sent 31 messages to",
    target: "Sage",
    timestamp: "2026-03-26T22:15:00Z",
    relativeTime: "Yesterday",
  },
  {
    id: "a9",
    actor: "Alex Chen",
    actorInitial: "A",
    actorColor: GOLD,
    action: "created team document",
    target: "Brand Guidelines",
    timestamp: "2026-03-26T18:30:00Z",
    relativeTime: "Yesterday",
  },
  {
    id: "a10",
    actor: "Morgan Lee",
    actorInitial: "M",
    actorColor: "#e05c7a",
    action: "shared",
    target: "User Research Notes.md",
    timestamp: "2026-03-26T14:00:00Z",
    relativeTime: "Yesterday",
  },
];

const DEMO_DOCUMENTS: SharedDocument[] = [
  {
    id: "d1",
    title: "Q2 Strategy Brief",
    type: "PDF",
    author: "Jordan Kim",
    authorInitial: "J",
    authorColor: "#7c6ddb",
    date: "Mar 27, 2026",
    size: "1.2 MB",
  },
  {
    id: "d2",
    title: "Roadmap v3",
    type: "DOCX",
    author: "Alex Chen",
    authorInitial: "A",
    authorColor: GOLD,
    date: "Mar 27, 2026",
    size: "340 KB",
  },
  {
    id: "d3",
    title: "Competitor Analysis",
    type: "XLSX",
    author: "Jordan Kim",
    authorInitial: "J",
    authorColor: "#7c6ddb",
    date: "Mar 27, 2026",
    size: "890 KB",
  },
  {
    id: "d4",
    title: "Brand Guidelines",
    type: "DOC",
    author: "Alex Chen",
    authorInitial: "A",
    authorColor: GOLD,
    date: "Mar 26, 2026",
    size: "5.4 MB",
  },
  {
    id: "d5",
    title: "User Research Notes",
    type: "MD",
    author: "Morgan Lee",
    authorInitial: "M",
    authorColor: "#e05c7a",
    date: "Mar 26, 2026",
    size: "78 KB",
  },
];

const DEMO_COMPANION_STATS: CompanionStat[] = [
  {
    userId: "u_alex",
    displayName: "Alex Chen",
    initial: "A",
    color: GOLD,
    companionName: "Aria",
    bondLevel: 87,
    messageCount: 1243,
  },
  {
    userId: "u_jordan",
    displayName: "Jordan Kim",
    initial: "J",
    color: "#7c6ddb",
    companionName: "Kael",
    bondLevel: 62,
    messageCount: 548,
  },
  {
    userId: "u_sam",
    displayName: "Sam Rivera",
    initial: "S",
    color: "#3db885",
    companionName: "Sage",
    bondLevel: 95,
    messageCount: 3102,
  },
  {
    userId: "u_morgan",
    displayName: "Morgan Lee",
    initial: "M",
    color: "#e05c7a",
    companionName: "Nova",
    bondLevel: 41,
    messageCount: 217,
  },
  {
    userId: "u_priya",
    displayName: "Priya Nair",
    initial: "P",
    color: "#f0a25c",
    companionName: "Aria",
    bondLevel: 15,
    messageCount: 34,
  },
];

const DEMO_ROLE_MEMBERS = [
  { userId: "u_alex", displayName: "Alex Chen", initial: "A", color: GOLD, role: "owner" as RoleType },
  { userId: "u_jordan", displayName: "Jordan Kim", initial: "J", color: "#7c6ddb", role: "admin" as RoleType },
  { userId: "u_sam", displayName: "Sam Rivera", initial: "S", color: "#3db885", role: "admin" as RoleType },
  { userId: "u_morgan", displayName: "Morgan Lee", initial: "M", color: "#e05c7a", role: "member" as RoleType },
  { userId: "u_priya", displayName: "Priya Nair", initial: "P", color: "#f0a25c", role: "member" as RoleType },
];

// ── Helpers ───────────────────────────────────────────────────────
const ROLE_ICONS: Record<string, typeof Crown> = {
  admin: Crown,
  member: Shield,
  guest: Eye,
};

const ROLE_COLORS: Record<string, string> = {
  admin: GOLD,
  member: "#8b8fa3",
  guest: "#5a5e73",
};

const COMPANION_OPTIONS = [
  { id: "aria", name: "Aria", desc: "Analytical strategist" },
  { id: "kael", name: "Kael", desc: "Creative problem-solver" },
  { id: "sage", name: "Sage", desc: "Empathetic advisor" },
  { id: "nova", name: "Nova", desc: "Bold innovator" },
];

const ROLE_BADGE_STYLES: Record<RoleType, { bg: string; text: string; border: string; label: string }> = {
  owner: { bg: `${GOLD}18`, text: GOLD, border: `${GOLD}40`, label: "Owner" },
  admin: { bg: "rgba(124,109,219,0.12)", text: "#7c6ddb", border: "rgba(124,109,219,0.35)", label: "Admin" },
  member: { bg: "rgba(139,143,163,0.1)", text: "#8b8fa3", border: "rgba(139,143,163,0.25)", label: "Member" },
};

const DOC_TYPE_COLORS: Record<string, string> = {
  PDF: "#e05c7a",
  DOCX: "#3db885",
  DOC: "#3db885",
  XLSX: "#3db885",
  MD: "#8b8fa3",
};

function BondBar({ level, color }: { level: number; color: string }) {
  return (
    <div className="flex items-center gap-2">
      <div
        className="flex-1 h-1.5 rounded-full overflow-hidden"
        style={{ background: "rgba(255,255,255,0.07)" }}
      >
        <div
          className="h-full rounded-full transition-all"
          style={{ width: `${level}%`, background: color }}
        />
      </div>
      <span className="text-xs tabular-nums" style={{ color: "rgba(255,255,255,0.35)", minWidth: "2.5rem", textAlign: "right" }}>
        {level}%
      </span>
    </div>
  );
}

// ── Component ─────────────────────────────────────────────────────
export default function TeamDashboard() {
  const { user, isLoaded } = useUser();
  const [team, setTeam] = useState<Team | null>(null);
  const [members, setMembers] = useState<TeamMember[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Create team state
  const [teamName, setTeamName] = useState("");
  const [creating, setCreating] = useState(false);

  // Invite state
  const [inviteCode, setInviteCode] = useState<string | null>(null);
  const [inviteCopied, setInviteCopied] = useState(false);
  const [generatingInvite, setGeneratingInvite] = useState(false);

  // Companion selector
  const [selectedCompanion, setSelectedCompanion] = useState<string | null>(null);

  // Phase 76: Role overrides (localStorage-backed)
  const [roleOverrides, setRoleOverrides] = useState<MemberRoleOverride[]>([]);
  const [openRoleDropdown, setOpenRoleDropdown] = useState<string | null>(null);

  const isOwner = team && user && team.owner_id === user.id;
  const currentRole = members.find((m) => m.user_id === user?.id)?.role;
  const isAdmin = currentRole === "admin";

  // ── localStorage init ─────────────────────────────────────────
  useEffect(() => {
    try {
      const stored = localStorage.getItem("meok_team_role_overrides");
      if (stored) setRoleOverrides(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const persistRoleOverrides = (overrides: MemberRoleOverride[]) => {
    setRoleOverrides(overrides);
    try {
      localStorage.setItem("meok_team_role_overrides", JSON.stringify(overrides));
    } catch {
      // ignore
    }
  };

  // ── Fetch team ────────────────────────────────────────────────
  const fetchTeam = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/team");
      if (!res.ok) throw new Error("Failed to fetch team");
      const data = await res.json();
      setTeam(data.team ?? null);
      setMembers(data.members ?? []);
      if (data.team?.settings?.companion_id) {
        setSelectedCompanion(data.team.settings.companion_id as string);
      }
    } catch (err) {
      console.error("Failed to fetch team:", err);
      setError("Failed to load team data.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isLoaded && user) fetchTeam();
  }, [isLoaded, user, fetchTeam]);

  // ── Create team ───────────────────────────────────────────────
  const handleCreateTeam = async () => {
    if (!teamName.trim() || creating) return;
    setCreating(true);
    setError(null);
    try {
      const res = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: teamName.trim() }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to create team");
      await fetchTeam();
      setTeamName("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create team");
    } finally {
      setCreating(false);
    }
  };

  // ── Generate invite ───────────────────────────────────────────
  const handleGenerateInvite = async () => {
    if (generatingInvite) return;
    setGeneratingInvite(true);
    try {
      const res = await fetch("/api/team/members", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "invite" }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Failed to generate invite");
      setInviteCode(data.code);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate invite");
    } finally {
      setGeneratingInvite(false);
    }
  };

  const copyInviteCode = () => {
    if (!inviteCode) return;
    navigator.clipboard.writeText(inviteCode);
    setInviteCopied(true);
    setTimeout(() => setInviteCopied(false), 2000);
  };

  // ── Team companion ────────────────────────────────────────────
  const handleSelectCompanion = async (companionId: string) => {
    setSelectedCompanion(companionId);
    try {
      await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "update_settings",
          settings: { companion_id: companionId },
        }),
      });
    } catch {
      // best-effort
    }
  };

  // ── Role management ───────────────────────────────────────────
  const getEffectiveRole = (userId: string, defaultRole: RoleType): RoleType => {
    const override = roleOverrides.find((r) => r.userId === userId);
    return override ? override.role : defaultRole;
  };

  const handleRoleChange = (userId: string, newRole: RoleType) => {
    const updated = roleOverrides.filter((r) => r.userId !== userId);
    updated.push({ userId, role: newRole });
    persistRoleOverrides(updated);
    setOpenRoleDropdown(null);
  };

  // ── Loading state ─────────────────────────────────────────────
  if (!isLoaded || loading) {
    return (
      <div
        style={{ background: DEEP, minHeight: "100vh" }}
        className="flex items-center justify-center"
      >
        <div className="animate-pulse text-gray-400">Loading team...</div>
      </div>
    );
  }

  // ── Empty state: no team ──────────────────────────────────────
  if (!team) {
    return (
      <div style={{ background: DEEP, minHeight: "100vh" }} className="p-6 md:p-10">
        <div className="mx-auto max-w-xl">
          <div
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px" }}
            className="p-8 text-center"
          >
            <Users size={48} style={{ color: GOLD }} className="mx-auto mb-4" />
            <h1 className="text-2xl font-bold mb-2" style={{ color: "#f5f0e8" }}>
              Create a team to collaborate with AI
            </h1>
            <p className="text-gray-400 mb-6">
              Bring your team together with shared companions, memory, and insights. Start with
              Team Starter and scale as you grow.
            </p>

            {error && (
              <div className="mb-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
                {error}
              </div>
            )}

            <div className="flex gap-3">
              <input
                type="text"
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
                placeholder="Team name..."
                maxLength={64}
                className="flex-1 px-4 py-3 rounded-lg text-white placeholder-gray-500 outline-none focus:ring-2"
                style={{ background: DEEP, border: `1px solid ${BORDER}` }}
                onKeyDown={(e) => e.key === "Enter" && handleCreateTeam()}
              />
              <button type="button"
                onClick={handleCreateTeam}
                disabled={creating || !teamName.trim()}
                className="px-6 py-3 rounded-lg font-semibold text-black transition-opacity disabled:opacity-50"
                style={{ background: GOLD }}
              >
                {creating ? "Creating..." : "Create"}
              </button>
            </div>

            <div className="mt-6 pt-6" style={{ borderTop: `1px solid ${BORDER}` }}>
              <p className="text-gray-500 text-sm">
                Have an invite code? Paste it in Settings to join an existing team.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Team dashboard ────────────────────────────────────────────
  return (
    <div
      style={{ background: DEEP, minHeight: "100vh" }}
      className="p-6 md:p-10"
      onClick={() => openRoleDropdown && setOpenRoleDropdown(null)}
    >
      <div className="mx-auto max-w-4xl space-y-6">

        {/* ── Header ── */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold" style={{ color: "#f5f0e8" }}>
              {team.name}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {team.plan.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())} plan
              &middot; {members.length} member{members.length !== 1 ? "s" : ""}
            </p>
          </div>
          {isOwner && (
            <button className="p-2 rounded-lg transition-colors hover:bg-white/5" title="Team settings">
              <Settings size={20} style={{ color: GOLD }} />
            </button>
          )}
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* ── Two-column grid for top panels ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* ── 76.1 Activity Feed ── */}
          <div
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px" }}
            className="p-6 flex flex-col"
          >
            <div className="flex items-center gap-2 mb-4">
              <Activity size={18} style={{ color: GOLD }} />
              <h2 className="text-lg font-semibold" style={{ color: "#f5f0e8" }}>
                Activity Feed
              </h2>
            </div>

            <div
              className="space-y-1 overflow-y-auto pr-1"
              style={{ maxHeight: "320px", scrollbarWidth: "thin", scrollbarColor: `${GOLD}30 transparent` }}
            >
              {DEMO_ACTIVITY.map((entry) => (
                <div
                  key={entry.id}
                  className="flex items-start gap-3 p-2.5 rounded-lg transition-colors hover:bg-white/[0.03]"
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: `${entry.actorColor}20`, color: entry.actorColor }}
                  >
                    {entry.actorInitial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm leading-snug" style={{ color: "rgba(255,255,255,0.75)" }}>
                      <span className="font-medium" style={{ color: "#f5f0e8" }}>{entry.actor}</span>
                      {" "}
                      <span style={{ color: "rgba(255,255,255,0.45)" }}>{entry.action}</span>
                      {entry.target && (
                        <>
                          {" "}
                          <span style={{ color: GOLD }}>{entry.target}</span>
                        </>
                      )}
                    </p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Clock size={10} style={{ color: "rgba(255,255,255,0.2)" }} />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
                        {entry.relativeTime}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── 76.2 Shared Documents ── */}
          <div
            style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px" }}
            className="p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <FileText size={18} style={{ color: GOLD }} />
                <h2 className="text-lg font-semibold" style={{ color: "#f5f0e8" }}>
                  Shared Documents
                </h2>
              </div>
              <span
                className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: `${GOLD}15`, color: GOLD, border: `1px solid ${GOLD}30` }}
              >
                {DEMO_DOCUMENTS.length} files
              </span>
            </div>

            <div
              className="space-y-1 overflow-y-auto pr-1"
              style={{ maxHeight: "320px", scrollbarWidth: "thin", scrollbarColor: `${GOLD}30 transparent` }}
            >
              {DEMO_DOCUMENTS.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center gap-3 p-3 rounded-lg transition-colors hover:bg-white/[0.03] cursor-pointer group"
                  style={{ border: "1px solid transparent" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = BORDER)
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLDivElement).style.borderColor = "transparent")
                  }
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0"
                    style={{
                      background: `${DOC_TYPE_COLORS[doc.type] ?? "#8b8fa3"}18`,
                      color: DOC_TYPE_COLORS[doc.type] ?? "#8b8fa3",
                      border: `1px solid ${DOC_TYPE_COLORS[doc.type] ?? "#8b8fa3"}30`,
                    }}
                  >
                    {doc.type}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="text-sm font-medium truncate"
                      style={{ color: "#f5f0e8" }}
                    >
                      {doc.title}
                    </p>
                    <div className="flex items-center gap-2 mt-0.5">
                      <div
                        className="w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold flex-shrink-0"
                        style={{ background: `${doc.authorColor}20`, color: doc.authorColor }}
                      >
                        {doc.authorInitial}
                      </div>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
                        {doc.author}
                      </span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.2)" }}>
                        &middot;
                      </span>
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        {doc.date}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs flex-shrink-0" style={{ color: "rgba(255,255,255,0.25)" }}>
                    {doc.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 76.3 Companion Stats ── */}
        <div
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px" }}
          className="p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <Bot size={18} style={{ color: GOLD }} />
            <h2 className="text-lg font-semibold" style={{ color: "#f5f0e8" }}>
              Companion Stats
            </h2>
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              — bond levels &amp; message counts per member
            </span>
          </div>

          <div className="space-y-3">
            {DEMO_COMPANION_STATS.map((stat) => (
              <div
                key={stat.userId}
                className="grid gap-4 items-center p-3 rounded-lg transition-colors hover:bg-white/[0.02]"
                style={{
                  gridTemplateColumns: "2fr 1fr 2fr 1fr",
                }}
              >
                {/* Member */}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{ background: `${stat.color}20`, color: stat.color }}
                  >
                    {stat.initial}
                  </div>
                  <span className="text-sm font-medium truncate" style={{ color: "#f5f0e8" }}>
                    {stat.displayName}
                  </span>
                </div>

                {/* Companion name */}
                <div className="flex items-center gap-1.5">
                  <Bot size={12} style={{ color: GOLD }} />
                  <span className="text-sm" style={{ color: GOLD }}>
                    {stat.companionName}
                  </span>
                </div>

                {/* Bond bar */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1">
                      <Heart size={10} style={{ color: stat.color }} />
                      <span className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                        Bond
                      </span>
                    </div>
                  </div>
                  <BondBar level={stat.bondLevel} color={stat.color} />
                </div>

                {/* Message count */}
                <div className="flex items-center gap-1.5 justify-end">
                  <MessageSquare size={12} style={{ color: "rgba(255,255,255,0.3)" }} />
                  <span
                    className="text-sm tabular-nums font-semibold"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {stat.messageCount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 76.4 Role Management ── */}
        <div
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px" }}
          className="p-6"
        >
          <div className="flex items-center gap-2 mb-5">
            <User size={18} style={{ color: GOLD }} />
            <h2 className="text-lg font-semibold" style={{ color: "#f5f0e8" }}>
              Role Management
            </h2>
          </div>

          <div className="space-y-2">
            {DEMO_ROLE_MEMBERS.map((member) => {
              const effectiveRole = getEffectiveRole(member.userId, member.role);
              const badge = ROLE_BADGE_STYLES[effectiveRole];
              const isDropdownOpen = openRoleDropdown === member.userId;
              const isOwnerRole = member.role === "owner";

              return (
                <div
                  key={member.userId}
                  className="flex items-center justify-between p-3 rounded-lg transition-colors"
                  style={{
                    background: isDropdownOpen ? "rgba(255,255,255,0.03)" : "transparent",
                    border: `1px solid ${isDropdownOpen ? BORDER : "transparent"}`,
                  }}
                >
                  {/* Member info */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: `${member.color}20`, color: member.color }}
                    >
                      {member.initial}
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#f5f0e8" }}>
                        {member.displayName}
                      </p>
                      <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                        Joined Mar 2026
                      </p>
                    </div>
                  </div>

                  {/* Role badge + change control */}
                  <div className="flex items-center gap-3">
                    {/* Role badge */}
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: badge.bg,
                        color: badge.text,
                        border: `1px solid ${badge.border}`,
                      }}
                    >
                      {badge.label}
                    </span>

                    {/* Change role dropdown (disabled for owner) */}
                    {!isOwnerRole ? (
                      <div className="relative" onClick={(e) => e.stopPropagation()}>
                        <button type="button"
                          onClick={() =>
                            setOpenRoleDropdown(isDropdownOpen ? null : member.userId)
                          }
                          className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors"
                          style={{
                            background: isDropdownOpen ? `${GOLD}15` : "rgba(255,255,255,0.05)",
                            color: isDropdownOpen ? GOLD : "rgba(255,255,255,0.4)",
                            border: `1px solid ${isDropdownOpen ? `${GOLD}30` : "transparent"}`,
                          }}
                        >
                          Change role
                          <ChevronDown
                            size={12}
                            style={{
                              transform: isDropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                              transition: "transform 0.15s",
                            }}
                          />
                        </button>

                        {isDropdownOpen && (
                          <div
                            className="absolute right-0 top-full mt-1 z-20 rounded-xl overflow-hidden shadow-2xl"
                            style={{
                              background: "#1a1929",
                              border: `1px solid ${BORDER}`,
                              minWidth: "140px",
                            }}
                          >
                            {(["admin", "member"] as RoleType[]).map((roleOption) => {
                              const optStyle = ROLE_BADGE_STYLES[roleOption];
                              const isActive = effectiveRole === roleOption;
                              return (
                                <button type="button"
                                  key={roleOption}
                                  onClick={() => handleRoleChange(member.userId, roleOption)}
                                  className="w-full flex items-center justify-between px-4 py-2.5 text-sm transition-colors"
                                  style={{
                                    background: isActive ? `${optStyle.text}10` : "transparent",
                                    color: isActive ? optStyle.text : "rgba(255,255,255,0.65)",
                                  }}
                                  onMouseEnter={(e) =>
                                    ((e.currentTarget as HTMLButtonElement).style.background = `${optStyle.text}10`)
                                  }
                                  onMouseLeave={(e) => {
                                    (e.currentTarget as HTMLButtonElement).style.background = isActive
                                      ? `${optStyle.text}10`
                                      : "transparent";
                                  }}
                                >
                                  <span className="capitalize font-medium">{optStyle.label}</span>
                                  {isActive && (
                                    <Check size={12} style={{ color: optStyle.text }} />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ) : (
                      <span
                        className="text-xs px-3 py-1.5"
                        style={{ color: "rgba(255,255,255,0.2)" }}
                      >
                        —
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="text-xs mt-4" style={{ color: "rgba(255,255,255,0.25)" }}>
            Role changes are reflected immediately. Owners cannot have their role changed.
          </p>
        </div>

        {/* ── Members list (existing) ── */}
        <div
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px" }}
          className="p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold" style={{ color: "#f5f0e8" }}>
              Members
            </h2>
            {isAdmin && (
              <button type="button"
                onClick={handleGenerateInvite}
                disabled={generatingInvite}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-opacity disabled:opacity-50"
                style={{
                  background: `${GOLD}20`,
                  color: GOLD,
                  border: `1px solid ${GOLD}40`,
                }}
              >
                <UserPlus size={16} />
                {generatingInvite ? "Generating..." : "Invite Member"}
              </button>
            )}
          </div>

          {inviteCode && (
            <div
              className="mb-4 p-4 rounded-lg flex items-center justify-between"
              style={{ background: `${GOLD}10`, border: `1px solid ${GOLD}30` }}
            >
              <div>
                <p className="text-sm text-gray-400 mb-1">
                  Share this invite code (expires in 7 days):
                </p>
                <code
                  className="text-lg font-mono font-bold tracking-widest"
                  style={{ color: GOLD }}
                >
                  {inviteCode}
                </code>
              </div>
              <button type="button"
                onClick={copyInviteCode}
                className="p-2 rounded-lg hover:bg-white/5 transition-colors"
                title="Copy code"
              >
                {inviteCopied ? (
                  <Check size={20} className="text-green-400" />
                ) : (
                  <Copy size={20} style={{ color: GOLD }} />
                )}
              </button>
            </div>
          )}

          <div className="space-y-2">
            {members.map((member) => {
              const RoleIcon = ROLE_ICONS[member.role] ?? Shield;
              const roleColor = ROLE_COLORS[member.role] ?? "#8b8fa3";
              const isSelf = member.user_id === user?.id;
              const isTeamOwner = member.user_id === team.owner_id;

              return (
                <div
                  key={member.user_id}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{
                    background: isSelf ? `${GOLD}08` : "transparent",
                    border: `1px solid ${isSelf ? `${GOLD}20` : "transparent"}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold"
                      style={{ background: `${roleColor}20`, color: roleColor }}
                    >
                      <RoleIcon size={16} />
                    </div>
                    <div>
                      <p className="text-sm font-medium" style={{ color: "#f5f0e8" }}>
                        {member.user_id.slice(0, 12)}...
                        {isSelf && (
                          <span className="ml-2 text-xs text-gray-500">(you)</span>
                        )}
                      </p>
                      <p className="text-xs capitalize" style={{ color: roleColor }}>
                        {member.role}
                        {isTeamOwner && " · Owner"}
                      </p>
                    </div>
                  </div>

                  {isAdmin && !isSelf && !isTeamOwner && (
                    <button
                      className="p-2 rounded-lg hover:bg-red-500/10 transition-colors"
                      title="Remove member"
                    >
                      <Trash2 size={16} className="text-gray-500 hover:text-red-400" />
                    </button>
                  )}
                </div>
              );
            })}
          </div>

          {members.length === 0 && (
            <p className="text-gray-500 text-sm text-center py-4">
              No members yet. Generate an invite code to get started.
            </p>
          )}
        </div>

        {/* ── Team companion selector (existing) ── */}
        <div
          style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: "16px" }}
          className="p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Bot size={20} style={{ color: GOLD }} />
            <h2 className="text-lg font-semibold" style={{ color: "#f5f0e8" }}>
              Team Companion
            </h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Choose an AI companion that your entire team can interact with. The companion learns
            from team conversations and builds shared memory.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {COMPANION_OPTIONS.map((c) => {
              const isSelected = selectedCompanion === c.id;
              return (
                <button type="button"
                  key={c.id}
                  onClick={() => handleSelectCompanion(c.id)}
                  className="p-4 rounded-lg text-left transition-all"
                  style={{
                    background: isSelected ? `${GOLD}15` : DEEP,
                    border: `1px solid ${isSelected ? GOLD : BORDER}`,
                  }}
                >
                  <p
                    className="font-semibold text-sm"
                    style={{ color: isSelected ? GOLD : "#f5f0e8" }}
                  >
                    {c.name}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{c.desc}</p>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
