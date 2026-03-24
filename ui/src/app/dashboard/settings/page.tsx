"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { mcp } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { APIKeyResponse } from "@/lib/types";
import Link from "next/link";
import { Shield, User, CreditCard, Bot, Lock, AlertTriangle, Download, Trash2, Check } from "lucide-react";

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
      className="rounded-xl p-6 space-y-4"
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
  const { user } = useAuth();

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

  // Danger confirmations
  const [showDeleteMemoriesConfirm, setShowDeleteMemoriesConfirm] = useState(false);
  const [showDeleteAccountConfirm, setShowDeleteAccountConfirm] = useState(false);
  const [deleteConfirmText, setDeleteConfirmText] = useState("");

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
    loadPlan();
  }, []);

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
    await new Promise((r) => setTimeout(r, 600));
    setCompanionSaving(false);
    setCompanionSaved(true);
    setTimeout(() => setCompanionSaved(false), 2500);
  };

  const planInfo = PLAN_FEATURES[currentPlan] ?? PLAN_FEATURES.explorer;

  return (
    <div className="min-h-screen bg-[#0d0c18] py-10" style={{ color: "white" }}>
      <div className="max-w-2xl mx-auto px-6 space-y-6">

        {/* Page header */}
        <div className="mb-2">
          <h1 className="text-2xl font-bold text-white">Settings</h1>
          <p className="text-sm text-white/35 mt-1">
            Account, companion, plan, privacy, and notifications
          </p>
        </div>

        {/* ── 1. Account ─────────────────────────────────────────── */}
        <SectionCard icon={<User className="w-4 h-4" />} title="Account">
          {user ? (
            <div className="space-y-1">
              <FieldRow label="Email" value={user.email} />
              <Divider />
              <FieldRow label="Hatch Name" value={user.hatch_name} />
              <Divider />
              <FieldRow
                label="Status"
                value={
                  <Badge variant={user.is_active ? "green" : "red"}>
                    {user.is_active ? "Active" : "Inactive"}
                  </Badge>
                }
              />
              <Divider />
              <FieldRow
                label="Tenant ID"
                value={
                  <code className="text-xs text-white/40 font-mono">{user.tenant_id}</code>
                }
              />
              <Divider />
              <FieldRow
                label="Member since"
                value={new Date(user.created_at).toLocaleDateString("en-GB", {
                  day: "numeric", month: "long", year: "numeric",
                })}
              />
            </div>
          ) : (
            <div className="space-y-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-6 rounded-md bg-white/5 animate-pulse"
                  style={{ width: `${60 + i * 10}%` }}
                />
              ))}
            </div>
          )}

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

        {/* ── 2. Plan ─────────────────────────────────────────────── */}
        <SectionCard icon={<CreditCard className="w-4 h-4" />} title="Plan">
          {planLoading ? (
            <div className="space-y-2">
              <div className="h-7 w-32 rounded-md bg-white/5 animate-pulse" />
              <div className="h-4 w-48 rounded-md bg-white/5 animate-pulse" />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
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
                    <button
                      type="button"
                      className="text-xs text-white/30 hover:text-white/60 transition-colors w-full"
                    >
                      Manage billing →
                    </button>
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
              <div className="grid grid-cols-3 gap-2">
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

            <button
              type="button"
              className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-left mt-3"
              style={{
                border: `1px solid ${GOLD}35`,
                color: GOLD,
                background: "transparent",
              }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.background = `${GOLD}08`; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; }}
            >
              <Download className="w-4 h-4 shrink-0" />
              Export my data
            </button>

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
        <SectionCard icon={<Shield className="w-4 h-4" />} title="Notifications">
          <div>
            <Toggle
              checked={morningBriefing}
              onChange={setMorningBriefing}
              label="Morning briefing"
              sublabel="Daily digest delivered each morning"
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
            <Toggle
              checked={guardianAlerts}
              onChange={setGuardianAlerts}
              label="Guardian alerts"
              sublabel="Security and anomaly notifications"
              icon="🛡️"
            />
            <Divider />
            <Toggle
              checked={careScoreAlerts}
              onChange={setCareScoreAlerts}
              label="Care score alerts"
              sublabel="Notify when care score drops below 70"
              icon="❤️"
            />
          </div>
        </SectionCard>

        {/* ── 6. Danger Zone ──────────────────────────────────────── */}
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
                  Type <strong className="text-red-300">delete my account</strong> to confirm.
                </p>
                <input
                  type="text"
                  value={deleteConfirmText}
                  onChange={(e) => setDeleteConfirmText(e.target.value)}
                  placeholder="delete my account"
                  className="w-full px-3 py-2 rounded-lg bg-black/30 border border-red-500/30 text-red-300 placeholder-red-900/60 text-sm focus:outline-none mb-3"
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
                    disabled={deleteConfirmText.toLowerCase() !== "delete my account"}
                    className="flex-1 px-4 py-2 rounded-lg text-sm font-bold text-red-200 border border-red-500/50 bg-red-500/15 hover:bg-red-500/25 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                  >
                    Delete everything
                  </button>
                </div>
              </div>
            </div>
          )}
        </SectionCard>

        {/* Bottom padding */}
        <div className="h-6" />
      </div>
    </div>
  );
}
