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
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "#2a2940";

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

  const isOwner = team && user && team.owner_id === user.id;
  const currentRole = members.find((m) => m.user_id === user?.id)?.role;
  const isAdmin = currentRole === "admin";

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

  // ── Select team companion ─────────────────────────────────────
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
      <div
        style={{ background: DEEP, minHeight: "100vh" }}
        className="p-6 md:p-10"
      >
        <div className="mx-auto max-w-xl">
          <div
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              borderRadius: "16px",
            }}
            className="p-8 text-center"
          >
            <Users size={48} style={{ color: GOLD }} className="mx-auto mb-4" />
            <h1
              className="text-2xl font-bold mb-2"
              style={{ color: "#f5f0e8" }}
            >
              Create a team to collaborate with AI
            </h1>
            <p className="text-gray-400 mb-6">
              Bring your team together with shared companions, memory, and
              insights. Start with Team Starter and scale as you grow.
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
                style={{
                  background: DEEP,
                  border: `1px solid ${BORDER}`,
                }}
                onKeyDown={(e) => e.key === "Enter" && handleCreateTeam()}
              />
              <button
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
                Have an invite code? Paste it in Settings to join an existing
                team.
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
    >
      <div className="mx-auto max-w-3xl space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1
              className="text-2xl font-bold"
              style={{ color: "#f5f0e8" }}
            >
              {team.name}
            </h1>
            <p className="text-gray-400 text-sm mt-1">
              {team.plan.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase())} plan
              &middot; {members.length} member{members.length !== 1 ? "s" : ""}
            </p>
          </div>
          {isOwner && (
            <button
              className="p-2 rounded-lg transition-colors hover:bg-white/5"
              title="Team settings"
            >
              <Settings size={20} style={{ color: GOLD }} />
            </button>
          )}
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
            {error}
          </div>
        )}

        {/* Members list */}
        <div
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: "16px",
          }}
          className="p-6"
        >
          <div className="flex items-center justify-between mb-4">
            <h2
              className="text-lg font-semibold"
              style={{ color: "#f5f0e8" }}
            >
              Members
            </h2>
            {isAdmin && (
              <button
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

          {/* Invite code display */}
          {inviteCode && (
            <div
              className="mb-4 p-4 rounded-lg flex items-center justify-between"
              style={{
                background: `${GOLD}10`,
                border: `1px solid ${GOLD}30`,
              }}
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
              <button
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

          {/* Member rows */}
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
                      style={{
                        background: `${roleColor}20`,
                        color: roleColor,
                      }}
                    >
                      <RoleIcon size={16} />
                    </div>
                    <div>
                      <p
                        className="text-sm font-medium"
                        style={{ color: "#f5f0e8" }}
                      >
                        {member.user_id.slice(0, 12)}...
                        {isSelf && (
                          <span className="ml-2 text-xs text-gray-500">
                            (you)
                          </span>
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

        {/* Team companion selector */}
        <div
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: "16px",
          }}
          className="p-6"
        >
          <div className="flex items-center gap-2 mb-4">
            <Bot size={20} style={{ color: GOLD }} />
            <h2
              className="text-lg font-semibold"
              style={{ color: "#f5f0e8" }}
            >
              Team Companion
            </h2>
          </div>
          <p className="text-gray-400 text-sm mb-4">
            Choose an AI companion that your entire team can interact with.
            The companion learns from team conversations and builds shared memory.
          </p>

          <div className="grid grid-cols-2 gap-3">
            {COMPANION_OPTIONS.map((c) => {
              const isSelected = selectedCompanion === c.id;
              return (
                <button
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
