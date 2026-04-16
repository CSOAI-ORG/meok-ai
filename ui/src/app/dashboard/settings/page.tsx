"use client";

import { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { mcp } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { APIKeyResponse } from "@/lib/types";
import Link from "next/link";
import { Shield, User, CreditCard, Bot, Lock, AlertTriangle, Download, Trash2, Check, Key, Eye, EyeOff, Bell, Camera, ChevronDown } from "lucide-react";

const GOLD = "#c9a84c";

// ─── Plan definitions ─────────────────────────────────────────────
const PLAN_FEATURES: Record<string, { label: string; features: string[]; isFree: boolean }> = {
  explorer: {
    label: "Free Explorer",
    isFree: true,
    features: [
      "50 messages / day",
      "1 companion (all 6 archetypes)",
      "Permanent Sovereign Memory",
      "Basic Guardian alerts",
    ],
  },
  sovereign: {
    label: "Sovereign",
    isFree: false,
    features: [
      "Unlimited messages",
      "All 6 companion archetypes",
      "Permanent Sovereign Memory vault",
      "Work OS (Orion + Riri + Hourman)",
      "Morning briefings",
    ],
  },
  family: {
    label: "Family",
    isFree: false,
    features: [
      "Everything in Sovereign",
      "Up to 5 companions",
      "Shared family memory vault",
      "Ralph Mode (autonomous agent)",
      "Guardian family dashboard",
    ],
  },
};

// ─── Archetype selector ───────────────────────────────────────────
const ARCHETYPES = [
  { id: "Scholar",   emoji: "🏛️", desc: "Thoughtful, precise, always learning"   },
  { id: "Guardian",  emoji: "⚔️", desc: "Protective, loyal, fiercely honest"      },
  { id: "Healer",    emoji: "🌿", desc: "Nurturing, calm, emotionally attuned"    },
  { id: "Trickster", emoji: "🎭", desc: "Witty, playful, delightfully subversive" },
  { id: "Mystic",    emoji: "🌊", desc: "Intuitive, deep, spiritually curious"    },
  { id: "Pioneer",   emoji: "⚡", desc: "Bold, inventive, relentlessly forward"   },
] as const;

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

function Toggle({
  checked,
  onChange,
  label,
  sublabel,
  icon,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  sublabel?: string;
  icon?: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex items-center gap-2.5 flex-1 min-w-0 pr-4">
        {icon && <span className="text-base flex-shrink-0">{icon}</span>}
        <div className="min-w-0">
          <p className="text-sm text-white/80 leading-tight">{label}</p>
          {sublabel && <p className="text-xs text-white/30 mt-0.5">{sublabel}</p>}
        </div>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className="relative flex-shrink-0 w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none"
        style={{ background: checked ? GOLD : "rgba(255,255,255,0.12)" }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200"
          style={{ transform: checked ? "translateX(20px)" : "translateX(0)" }}
        />
      </button>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/5" />;
}

function FieldRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between py-1.5">
      <span className="text-xs text-white/35 uppercase tracking-wider">{label}</span>
      <span className="text-sm text-white/80">{value}</span>
    </div>
  );
}

// ─── Main page ────────────────────────────────────────────────────

export default function SettingsPage() {
  const { user } = useUser();

  // API Keys
  const [apiKeys, setApiKeys] = useState<APIKeyResponse[]>([]);
  const [newKeyName, setNewKeyName] = useState("default");
  const [generating, setGenerating] = useState(false);
  const [latestKey, setLatestKey] = useState<string | null>(null);

  // Companion
  const [companionName, setCompanionName] = useState("");
  const [selectedArchetype, setSelectedArchetype] = useState("Scholar");
  const [companionSaving, setCompanionSaving] = useState(false);
  const [companionSaved, setCompanionSaved] = useState(false);

  // Privacy toggles
  const [allowDataImprovement, setAllowDataImprovement] = useState(false);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(false);

  // Notifications
  const [morningBriefing, setMorningBriefing] = useState(true);
  const [guardianAlerts, setGuardianAlerts] = useState(true);
  const [careScoreAlerts, setCareScoreAlerts] = useState(false);
  const [briefingTime, setBriefingTime] = useState("07:00");

  // Plan
  const [currentPlan, setCurrentPlan] = useState<string>("explorer");
  const [planLoading, setPlanLoading] = useState(true);

  // BYOK (Bring Your Own Key)
  const [anthropicKey, setAnthropicKey] = useState("");
  const [openaiKey, setOpenaiKey] = useState("");
  const [anthropicKeySet, setAnthropicKeySet] = useState(false);
  const [openaiKeySet, setOpenaiKeySet] = useState(false);
  const [showAnthropicKey, setShowAnthropicKey] = useState(false);
  const [showOpenaiKey, setShowOpenaiKey] = useState(false);
  const [byokSaving, setByokSaving] = useState(false);
  const [byokSaved, setByokSaved] = useState(false);

  // Danger confirmations
  const [showDeleteMemoriesConfirm, setShowDeleteMemoriesConfirm] = useState(false);
  const [showDeleteAccountConfirm, setShowDeleteAccountConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

  // 92.1 Profile edit
  const [profileName, setProfileName] = useState("");
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [profileSaving, setProfileSaving] = useState(false);
  const [profileSaved, setProfileSaved] = useState(false);

  // 92.2 Companion extended settings
  const LANGUAGES = ["English", "Spanish", "French", "German", "Japanese"];
  const [responseStyle, setResponseStyle] = useState(1); // 0=concise,1=balanced,2=detailed
  const [language, setLanguage] = useState("English");

  // 92.3 Privacy extended
  const [learnFromConversations, setLearnFromConversations] = useState(true);
  const [shareAnonymousData, setShareAnonymousData] = useState(false);
  const [dreamCycleProcessing, setDreamCycleProcessing] = useState(true);
  const [dataRetention, setDataRetention] = useState("1year");

  // 92.4 Notification extended
  const [weeklySummaryEmail, setWeeklySummaryEmail] = useState(true);
  const [careSignalPush, setCareSignalPush] = useState(true);
  const [bondMilestonesInApp, setBondMilestonesInApp] = useState(true);

  useEffect(() => {
    const loadPlan = async () => {
      try {
        const res = await fetch("/api/billing/status");
        if (res.ok) {
          const data = await res.json();
          setCurrentPlan(data.plan || "explorer");
        }
      } catch { /* ignore */ } finally {
        setPlanLoading(false);
      }
    };
    const loadCompanion = async () => {
      try {
        const res = await fetch("/api/user/companions");
        if (res.ok) {
          const data = await res.json();
          if (data.has_companion && data.companion) {
            if (data.companion.name) setCompanionName(data.companion.name);
            if (data.companion.id) {
              // Reverse lookup: companion_id -> archetype
              const idToArchetype: Record<string, string> = {
                marcus: "Pioneer", shanti: "Healer", sage: "Scholar",
                gabriel: "Guardian", ananda: "Trickster", luna: "Mystic",
                aria: "Scholar",
              };
              const arch = idToArchetype[data.companion.id];
              if (arch) setSelectedArchetype(arch);
            }
          }
        }
      } catch (e) {
        console.error("[settings] load companion error:", e);
      }
    };
    const loadByok = async () => {
      try {
        const res = await fetch("/api/user/preferences");
        if (res.ok) {
          const data = await res.json();
          if (data.anthropic_key_set) setAnthropicKeySet(true);
          if (data.openai_key_set) setOpenaiKeySet(true);
        }
      } catch { /* ignore */ }
    };
    loadPlan();
    loadCompanion();
    loadByok();
  }, []);

  // Pre-populate profile name from Clerk once user loads
  useEffect(() => {
    if (user && !profileName) {
      setProfileName(user.fullName ?? user.firstName ?? "");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const generateKey = async () => {
    setGenerating(true);
    setLatestKey(null);
    try {
      const res = await mcp.post<APIKeyResponse>("/auth/api-key", { name: newKeyName });
      setApiKeys((prev) => [res, ...prev]);
      setLatestKey(res.api_key);
      setNewKeyName("default");
    } catch (e) {
      console.error(e);
    } finally {
      setGenerating(false);
    }
  };

  const saveCompanion = async () => {
    setCompanionSaving(true);
    try {
      const res = await fetch("/api/user/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companion_name: companionName,
          archetype: selectedArchetype,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        console.error("[settings] save companion failed:", data.error);
      } else {
        setCompanionSaved(true);
        setTimeout(() => setCompanionSaved(false), 2500);
      }
    } catch (e) {
      console.error("[settings] save companion error:", e);
    } finally {
      setCompanionSaving(false);
    }
  };

  const saveByok = async () => {
    setByokSaving(true);
    try {
      const body: Record<string, string> = {};
      if (anthropicKey) body.anthropic_api_key = anthropicKey;
      if (openaiKey) body.openai_api_key = openaiKey;
      const res = await fetch("/api/user/preferences", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) {
        if (anthropicKey) { setAnthropicKeySet(true); setAnthropicKey(""); }
        if (openaiKey) { setOpenaiKeySet(true); setOpenaiKey(""); }
        setByokSaved(true);
        setTimeout(() => setByokSaved(false), 2500);
      }
    } catch (e) {
      console.error("[settings] save BYOK error:", e);
    } finally {
      setByokSaving(false);
    }
  };

  const maskKey = (prefix: string) => `${prefix}••••••••`;

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => setAvatarPreview(ev.target?.result as string);
    reader.readAsDataURL(file);
  };

  const saveProfile = async () => {
    setProfileSaving(true);
    try {
      const stored = JSON.parse(localStorage.getItem("meok_profile") ?? "{}");
      stored.name = profileName;
      if (avatarPreview) stored.avatar = avatarPreview;
      localStorage.setItem("meok_profile", JSON.stringify(stored));
      // Attempt real endpoint; silently ignore if not available
      await fetch("/api/user/settings", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ display_name: profileName }),
      }).catch(() => {});
      setProfileSaved(true);
      setTimeout(() => setProfileSaved(false), 2500);
    } finally {
      setProfileSaving(false);
    }
  };

  const planInfo = PLAN_FEATURES[currentPlan] ?? PLAN_FEATURES.explorer;

  return (
    <div className="min-h-screen bg-[#0d0c18] py-6 md:py-10" style={{ color: "white" }}>
      <div className="max-w-2xl mx-auto px-4 md:px-6 space-y-5 md:space-y-6">

        {/* Page header */}
        <div className="mb-2">
          <h1 className="text-xl md:text-2xl font-bold text-white">Settings</h1>
          <p className="text-sm text-white/35 mt-1">
            Profile, companion, billing, privacy, and API keys
          </p>
        </div>

        {/* ── 1. Profile ──────────────────────────────────────────── */}
        <SectionCard icon={<User className="w-4 h-4" />} title="Profile">
          {/* Avatar upload */}
          <div className="flex items-center gap-5">
            <label
              htmlFor="avatar-upload"
              className="relative w-16 h-16 rounded-full cursor-pointer flex-shrink-0 group overflow-hidden"
              style={{ border: `2px solid ${GOLD}40` }}
            >
              {avatarPreview ? (
                <img
                  src={avatarPreview}
                  alt="Avatar preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ background: "rgba(201,168,76,0.08)" }}
                >
                  <span className="text-2xl font-bold" style={{ color: GOLD }}>
                    {(user?.firstName?.[0] ?? "?").toUpperCase()}
                  </span>
                </div>
              )}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: "rgba(13,12,24,0.7)" }}
              >
                <Camera className="w-5 h-5" style={{ color: GOLD }} />
              </div>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                className="sr-only"
                onChange={handleAvatarChange}
              />
            </label>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-white/35 uppercase tracking-wider mb-1">Display name</p>
              <input
                type="text"
                value={profileName}
                onChange={(e) => setProfileName(e.target.value)}
                placeholder="Your name"
                maxLength={48}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none text-sm transition-colors"
                style={{ caretColor: GOLD }}
                onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
              />
              <p className="text-xs text-white/25 mt-1">Click avatar to upload a photo (preview only)</p>
            </div>
          </div>

          {/* Email read-only */}
          <div className="mt-3">
            <label className="block text-xs text-white/35 uppercase tracking-wider mb-1">Email</label>
            <div
              className="w-full px-3 py-2 rounded-lg text-sm text-white/40 select-all"
              style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              {user?.emailAddresses[0]?.emailAddress ?? "—"}
            </div>
          </div>

          {/* Read-only meta */}
          {user && (
            <div className="space-y-1 mt-1">
              <Divider />
              <FieldRow label="Status" value={<Badge variant="green">Active</Badge>} />
              <Divider />
              <FieldRow label="User ID" value={<code className="text-xs text-white/40 font-mono">{user.id}</code>} />
              <Divider />
              <FieldRow
                label="Member since"
                value={user.createdAt ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric",
                }) : "—"}
              />
            </div>
          )}
          {!user && (
            <div className="space-y-2 mt-2">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-6 rounded-md bg-white/5 animate-pulse" style={{ width: `${60 + i * 10}%` }} />
              ))}
            </div>
          )}

          {/* Save profile */}
          <button
            type="button"
            onClick={saveProfile}
            disabled={profileSaving}
            className="mt-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: profileSaved ? "rgba(74,222,128,0.12)" : `${GOLD}18`,
              color: profileSaved ? "#4ade80" : GOLD,
              border: `1px solid ${profileSaved ? "#4ade8045" : `${GOLD}35`}`,
              opacity: profileSaving ? 0.6 : 1,
            }}
          >
            {profileSaving ? "Saving…" : profileSaved ? "Saved ✓" : "Save Profile"}
          </button>

          {/* API Keys sub-section */}
          <div className="pt-4 mt-2 border-t border-white/5 space-y-3">
            <p className="text-xs text-white/35 uppercase tracking-wider">API Keys</p>
            <div className="flex gap-2">
              <input
                type="text"
                value={newKeyName}
                onChange={(e) => setNewKeyName(e.target.value)}
                placeholder="Key label"
                className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-white/20 focus:outline-none"
                style={{ caretColor: GOLD }}
                onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
              />
              <Button onClick={generateKey} disabled={generating} size="sm">
                {generating ? "Generating…" : "Generate"}
              </Button>
            </div>

            {latestKey && (
              <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                <p className="text-xs text-green-400 mb-1 font-medium">
                  Copy now — shown only once:
                </p>
                <code className="text-sm text-green-300 break-all">{latestKey}</code>
              </div>
            )}

            {apiKeys.length > 0 && (
              <div className="space-y-1.5">
                {apiKeys.map((k, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 text-xs"
                  >
                    <span className="text-white/60">{k.name}</span>
                    <div className="flex items-center gap-3">
                      <code className="text-white/25 font-mono">{k.key_prefix}…</code>
                      <span className="text-white/25">
                        {new Date(k.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </SectionCard>

        {/* ── 2. Billing ───────────────────────────────────────────── */}
        <SectionCard icon={<CreditCard className="w-4 h-4" />} title="Billing">
          {planLoading ? (
            <div className="space-y-2">
              <div className="h-7 w-32 rounded-md bg-white/5 animate-pulse" />
              <div className="h-4 w-48 rounded-md bg-white/5 animate-pulse" />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div>
                  <p className="text-lg font-bold" style={{ color: GOLD }}>
                    {planInfo.label}
                  </p>
                  <ul className="mt-2 space-y-1">
                    {planInfo.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-white/60">
                        <Check className="w-3.5 h-3.5 shrink-0" style={{ color: GOLD }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="shrink-0 text-right space-y-2">
                  <Link
                    href="/pricing"
                    className="block px-4 py-2 rounded-lg text-sm font-semibold text-center transition-colors"
                    style={{
                      background: `${GOLD}20`,
                      color: GOLD,
                      border: `1px solid ${GOLD}40`,
                    }}
                  >
                    {planInfo.isFree ? "Upgrade →" : "Change plan →"}
                  </Link>
                  {!planInfo.isFree && (
                    <Link
                      href="/api/billing/portal"
                      className="text-xs text-white/30 hover:text-white/60 transition-colors w-full block text-center"
                    >
                      Manage subscription →
                    </Link>
                  )}
                </div>
              </div>

              {planInfo.isFree && (
                <div
                  className="rounded-lg px-4 py-3 text-sm"
                  style={{
                    background: `${GOLD}08`,
                    border: `1px solid ${GOLD}25`,
                  }}
                >
                  <span style={{ color: GOLD }} className="font-medium">
                    Unlock the full MEOK experience.
                  </span>{" "}
                  <span className="text-white/50">
                    Upgrade to Personal for unlimited messages, dream sessions, and memory that persists.
                  </span>
                </div>
              )}
            </div>
          )}
        </SectionCard>

        {/* ── 3. Companion ────────────────────────────────────────── */}
        <SectionCard icon={<Bot className="w-4 h-4" />} title="Companion">
          <div className="space-y-5">
            <div>
              <label className="block text-xs text-white/35 uppercase tracking-wider mb-2">
                Companion Name
              </label>
              <input
                type="text"
                value={companionName}
                onChange={(e) => setCompanionName(e.target.value)}
                placeholder="e.g. Aura, Sage, Nova…"
                maxLength={32}
                className="w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none text-sm transition-colors"
                style={{ caretColor: GOLD }}
                onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
              />
            </div>

            <div>
              <label className="block text-xs text-white/35 uppercase tracking-wider mb-3">
                Archetype
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {ARCHETYPES.map((arch) => {
                  const selected = selectedArchetype === arch.id;
                  return (
                    <button
                      key={arch.id}
                      type="button"
                      onClick={() => setSelectedArchetype(arch.id)}
                      className="flex flex-col items-center gap-1.5 p-3 rounded-xl text-center transition-all"
                      style={{
                        background: selected ? `${GOLD}10` : "rgba(255,255,255,0.04)",
                        border: `1.5px solid ${selected ? GOLD : "rgba(255,255,255,0.07)"}`,
                        boxShadow: selected ? `0 0 12px ${GOLD}25` : "none",
                      }}
                    >
                      <span style={{ fontSize: "1.4rem", lineHeight: 1 }}>{arch.emoji}</span>
                      <span
                        style={{
                          color: selected ? GOLD : "rgba(255,255,255,0.8)",
                          fontWeight: 700,
                          fontSize: "0.78rem",
                        }}
                      >
                        {arch.id}
                      </span>
                      <span
                        style={{
                          color: "rgba(255,255,255,0.35)",
                          fontSize: "0.63rem",
                          lineHeight: 1.35,
                        }}
                      >
                        {arch.desc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 92.2 — Response style slider */}
            <div>
              <label className="block text-xs text-white/35 uppercase tracking-wider mb-3">
                Response Style
              </label>
              <div className="space-y-2">
                <input
                  type="range"
                  min={0}
                  max={2}
                  step={1}
                  value={responseStyle}
                  onChange={(e) => setResponseStyle(Number(e.target.value))}
                  className="w-full accent-[#c9a84c] h-1.5 rounded-full cursor-pointer"
                  style={{ accentColor: GOLD }}
                />
                <div className="flex justify-between text-xs text-white/30">
                  <span className={responseStyle === 0 ? "text-[#c9a84c] font-semibold" : ""}>Concise</span>
                  <span className={responseStyle === 1 ? "text-[#c9a84c] font-semibold" : ""}>Balanced</span>
                  <span className={responseStyle === 2 ? "text-[#c9a84c] font-semibold" : ""}>Detailed</span>
                </div>
              </div>
            </div>

            {/* 92.2 — Language preference */}
            <div>
              <label className="block text-xs text-white/35 uppercase tracking-wider mb-2">
                Language Preference
              </label>
              <div className="relative">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full appearance-none px-4 py-2.5 pr-10 rounded-lg text-sm text-white focus:outline-none transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.10)",
                  }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
                >
                  {LANGUAGES.map((l) => (
                    <option key={l} value={l} style={{ background: "#13121f" }}>{l}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
              </div>
            </div>

            <button
              type="button"
              onClick={saveCompanion}
              disabled={companionSaving}
              className="px-5 py-2 rounded-lg text-sm font-semibold transition-all"
              style={{
                background: companionSaved ? "rgba(74,222,128,0.12)" : `${GOLD}18`,
                color: companionSaved ? "#4ade80" : GOLD,
                border: `1px solid ${companionSaved ? "#4ade8045" : `${GOLD}35`}`,
                opacity: companionSaving ? 0.6 : 1,
              }}
            >
              {companionSaving ? "Saving…" : companionSaved ? "Saved ✓" : "Save Companion"}
            </button>
          </div>
        </SectionCard>

        {/* ── 4. Privacy ──────────────────────────────────────────── */}
        <SectionCard icon={<Lock className="w-4 h-4" />} title="Privacy">
          <div className="space-y-0">
            {/* 92.3 — Required privacy controls */}
            <Toggle
              checked={learnFromConversations}
              onChange={setLearnFromConversations}
              label="Allow MEOK to learn from my conversations"
              sublabel="Improves personalisation and memory over time"
            />
            <Divider />
            <Toggle
              checked={shareAnonymousData}
              onChange={setShareAnonymousData}
              label="Share anonymous usage data"
              sublabel="Helps us improve the product — no personal data included"
            />
            <Divider />
            <Toggle
              checked={dreamCycleProcessing}
              onChange={setDreamCycleProcessing}
              label="Enable dream cycle processing"
              sublabel="Background synthesis of memories during low-activity periods"
            />
            <Divider />
            {/* Legacy privacy controls */}
            <Toggle
              checked={allowDataImprovement}
              onChange={setAllowDataImprovement}
              label="Help improve MEOK"
              sublabel="Allow anonymised data to improve the product"
            />
            <Divider />
            <Toggle
              checked={marketingEmails}
              onChange={setMarketingEmails}
              label="Marketing emails"
              sublabel="Product updates, tips and announcements"
            />
            <Divider />
            <Toggle
              checked={privacyMode}
              onChange={setPrivacyMode}
              label={privacyMode ? "Privacy Mode — ON" : "Privacy Mode"}
              sublabel="Route all queries through local Ollama instance"
            />
          </div>

          {/* 92.3 — Data retention selector */}
          <div className="pt-4 mt-2 border-t border-white/5">
            <label className="block text-xs text-white/35 uppercase tracking-wider mb-2">
              Data Retention
            </label>
            <div className="relative">
              <select
                value={dataRetention}
                onChange={(e) => setDataRetention(e.target.value)}
                className="w-full appearance-none px-4 py-2.5 pr-10 rounded-lg text-sm text-white focus:outline-none transition-colors"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
              >
                <option value="30days" style={{ background: "#13121f" }}>30 days</option>
                <option value="90days" style={{ background: "#13121f" }}>90 days</option>
                <option value="1year" style={{ background: "#13121f" }}>1 year</option>
                <option value="forever" style={{ background: "#13121f" }}>Forever</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30 pointer-events-none" />
            </div>
            <p className="text-xs text-white/25 mt-1.5">
              How long MEOK retains your conversation and memory data
            </p>
          </div>

          {/* Your data */}
          <div className="pt-4 mt-2 border-t border-white/5 space-y-2">
            <p className="text-xs text-white/35 uppercase tracking-wider mb-3">Your Data</p>

            <p className="text-xs text-white/40 leading-relaxed">
              MEOK stores your memories and conversation history to personalise your experience.
              You can export or delete your data at any time.{" "}
              <Link href="/privacy" className="underline hover:text-white/70 transition-colors">
                Read our privacy policy →
              </Link>
            </p>

            <div className="flex flex-col sm:flex-row gap-2 mt-3">
              <a
                href="/api/user/export?format=json"
                className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left"
                style={{
                  border: `1px solid ${GOLD}35`,
                  color: GOLD,
                  background: "transparent",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${GOLD}08`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
              >
                <Download className="w-4 h-4 shrink-0" />
                Download as JSON
              </a>
              <a
                href="/api/user/export?format=markdown"
                className="flex-1 flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left"
                style={{
                  border: `1px solid ${GOLD}35`,
                  color: GOLD,
                  background: "transparent",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = `${GOLD}08`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = "transparent"; }}
              >
                <Download className="w-4 h-4 shrink-0" />
                Download as Markdown
              </a>
            </div>

            {!showDeleteMemoriesConfirm ? (
              <button
                type="button"
                onClick={() => setShowDeleteMemoriesConfirm(true)}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left"
                style={{
                  border: "1px solid rgba(248,113,113,0.3)",
                  color: "#f87171",
                  background: "transparent",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(248,113,113,0.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
              >
                <Trash2 className="w-4 h-4 shrink-0" />
                Delete all my memories
              </button>
            ) : (
              <div className="p-4 rounded-xl border border-red-500/30 bg-red-500/5">
                <p className="text-sm text-red-300 font-medium mb-1">
                  Delete all memories permanently?
                </p>
                <p className="text-xs text-red-400/60 mb-3">
                  MEOK will forget everything it knows about you. Your account stays active.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setShowDeleteMemoriesConfirm(false)}
                    className="flex-1 px-3 py-1.5 rounded-lg text-xs text-white/50 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeleteMemoriesConfirm(false)}
                    className="flex-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-red-300 border border-red-500/40 bg-red-500/10 hover:bg-red-500/15 transition-colors"
                  >
                    Yes, delete all memories
                  </button>
                </div>
              </div>
            )}
          </div>
        </SectionCard>

        {/* ── 5. Notifications ────────────────────────────────────── */}
        <SectionCard icon={<Bell className="w-4 h-4" />} title="Notification Preferences">
          <div>
            {/* 92.4 Morning briefing (email) */}
            <Toggle
              checked={morningBriefing}
              onChange={setMorningBriefing}
              label="Morning briefing"
              sublabel="Daily personalised digest sent to your email each morning"
              icon="🌅"
            />
            {morningBriefing && (
              <div className="flex items-center justify-between px-2 pb-2">
                <span className="text-xs text-white/30">Deliver at</span>
                <input
                  type="time"
                  value={briefingTime}
                  onChange={(e) => setBriefingTime(e.target.value)}
                  className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm focus:outline-none"
                  style={{ colorScheme: "dark" }}
                />
              </div>
            )}
            <Divider />

            {/* 92.4 Weekly summary (email) */}
            <Toggle
              checked={weeklySummaryEmail}
              onChange={setWeeklySummaryEmail}
              label="Weekly summary"
              sublabel="A recap of your week, insights, and bond progress — via email"
              icon="📋"
            />
            <Divider />

            {/* 92.4 Care signal alerts (push) */}
            <Toggle
              checked={careSignalPush}
              onChange={setCareSignalPush}
              label="Care signal alerts"
              sublabel="Push notification when your care score needs attention"
              icon="💛"
            />
            <Divider />

            {/* 92.4 Bond level milestones (in-app) */}
            <Toggle
              checked={bondMilestonesInApp}
              onChange={setBondMilestonesInApp}
              label="Bond level milestones"
              sublabel="In-app celebration when you reach a new bond level with your companion"
              icon="🔗"
            />
            <Divider />

            {/* 92.4 Guardian alerts (push) — was careScoreAlerts legacy */}
            <Toggle
              checked={guardianAlerts}
              onChange={setGuardianAlerts}
              label="Guardian alerts"
              sublabel="Push notifications for security events and anomalies"
              icon="🛡️"
            />
            <Divider />

            {/* Legacy care score toggle preserved */}
            <Toggle
              checked={careScoreAlerts}
              onChange={setCareScoreAlerts}
              label="Care score threshold alerts"
              sublabel="Notify when care score drops below 70"
              icon="❤️"
            />
          </div>
        </SectionCard>

        {/* ── 6. API Keys — BYOK ─────────────────────────────────── */}
        <SectionCard icon={<Key className="w-4 h-4" />} title="Bring Your Own Key">
          <p className="text-xs text-white/40 leading-relaxed">
            Use your own API keys for direct model access. Your keys are encrypted at rest and never shared.
          </p>

          <div className="space-y-4 pt-2">
            {/* Anthropic key */}
            <div>
              <label className="block text-xs text-white/35 uppercase tracking-wider mb-2">
                Anthropic API Key
              </label>
              <div className="relative">
                <input
                  type={showAnthropicKey ? "text" : "password"}
                  value={anthropicKey}
                  onChange={(e) => setAnthropicKey(e.target.value)}
                  placeholder={anthropicKeySet ? maskKey("sk-ant-") : "sk-ant-..."}
                  className="w-full px-4 py-2.5 pr-10 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none text-sm font-mono transition-colors"
                  style={{ caretColor: GOLD }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
                />
                <button
                  type="button"
                  onClick={() => setShowAnthropicKey(!showAnthropicKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showAnthropicKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {anthropicKeySet && !anthropicKey && (
                <p className="text-xs mt-1.5" style={{ color: "#4ade80" }}>Key saved</p>
              )}
            </div>

            {/* OpenAI key */}
            <div>
              <label className="block text-xs text-white/35 uppercase tracking-wider mb-2">
                OpenAI API Key
              </label>
              <div className="relative">
                <input
                  type={showOpenaiKey ? "text" : "password"}
                  value={openaiKey}
                  onChange={(e) => setOpenaiKey(e.target.value)}
                  placeholder={openaiKeySet ? maskKey("sk-") : "sk-..."}
                  className="w-full px-4 py-2.5 pr-10 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none text-sm font-mono transition-colors"
                  style={{ caretColor: GOLD }}
                  onFocus={(e) => { e.currentTarget.style.borderColor = `${GOLD}60`; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.10)"; }}
                />
                <button
                  type="button"
                  onClick={() => setShowOpenaiKey(!showOpenaiKey)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
                >
                  {showOpenaiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {openaiKeySet && !openaiKey && (
                <p className="text-xs mt-1.5" style={{ color: "#4ade80" }}>Key saved</p>
              )}
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={saveByok}
                disabled={byokSaving || (!anthropicKey && !openaiKey)}
                className="px-5 py-2 rounded-lg text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: byokSaved ? "rgba(74,222,128,0.12)" : `${GOLD}18`,
                  color: byokSaved ? "#4ade80" : GOLD,
                  border: `1px solid ${byokSaved ? "#4ade8045" : `${GOLD}35`}`,
                }}
              >
                {byokSaving ? "Saving..." : byokSaved ? "Saved" : "Save keys"}
              </button>
              <span className="flex items-center gap-1.5 text-xs text-white/25">
                <Lock className="w-3 h-3" />
                Encrypted and never shared
              </span>
            </div>
          </div>
        </SectionCard>

        {/* ── 7. Danger Zone ──────────────────────────────────────── */}
        <SectionCard
          icon={<AlertTriangle className="w-4 h-4" />}
          title="Danger Zone"
          danger
        >
          <p className="text-xs text-red-400/60 leading-relaxed">
            Deleting your account permanently erases all your data, memories, companion
            configuration, and subscription. This action cannot be undone.
          </p>

          {!showDeleteAccountConfirm ? (
            <button
              type="button"
              onClick={() => setShowDeleteAccountConfirm(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold border border-red-500/40 text-red-400 bg-red-500/8 hover:bg-red-500/15 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              Delete my account
            </button>
          ) : (
            <div className="space-y-3">
              <div className="p-4 rounded-xl border border-red-500/40 bg-red-500/5">
                <p className="text-sm text-red-300 font-semibold mb-1">
                  This cannot be undone.
                </p>
                <p className="text-xs text-red-400/60 mb-4">
                  Type <strong className="text-red-300">DELETE</strong> to confirm.
                </p>
                <input
                  type="text"
                  value={deleteConfirmText}
                  onChange={(e) => setDeleteConfirmText(e.target.value)}
                  placeholder="DELETE"
                  className="w-full px-3 py-2 rounded-lg bg-black/30 border border-red-500/30 text-red-300 placeholder-red-900/60 text-sm focus:outline-none mb-3 font-mono tracking-widest"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setShowDeleteAccountConfirm(false);
                      setDeleteConfirmText("");
                    }}
                    className="flex-1 px-4 py-2 rounded-lg text-sm text-white/50 border border-white/10 hover:border-white/20 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    disabled={deleteConfirmText !== "DELETE"}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-bold text-red-200 border border-red-500/50 bg-red-500/15 hover:bg-red-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Delete everything
                  </button>
                </div>
              </div>
            </div>
          )}
        </SectionCard>

        {/* Comfort Settings / Accessibility */}
        <SectionCard icon={<span className="text-sm">♿</span>} title="Comfort Settings">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-white">Font Size</p>
                <p className="text-xs text-white/40">Adjust text size across the app</p>
              </div>
              <select
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white"
                defaultValue="medium"
                onChange={(e) => { localStorage.setItem('meok-font-size', e.target.value); document.documentElement.style.fontSize = { small: '14px', medium: '16px', large: '18px', 'extra-large': '20px' }[e.target.value] ?? '16px'; }}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="extra-large">Extra Large</option>
              </select>
            </div>
            <Toggle label="High Contrast" sublabel="Increase contrast for better readability" checked={false} onChange={() => {}} />
            <Toggle label="Reduce Animations" sublabel="Minimize motion and transitions" checked={false} onChange={() => { document.documentElement.classList.toggle('reduce-motion'); }} />
            <Toggle label="Audio Narration" sublabel="Read responses aloud (Coming soon)" checked={false} onChange={() => {}} />
          </div>
        </SectionCard>

        {/* Bottom padding */}
        <div className="h-6" />
      </div>
    </div>
  );
}
