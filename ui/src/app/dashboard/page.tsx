"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { mcp, callTool } from "@/lib/api";
import { QuickChat } from "@/components/quick-chat";
import type { ConsciousnessState, MemoryStats } from "@/lib/types";
import Link from "next/link";
import { useUser } from "@clerk/nextjs";
import { EVOLUTION_STAGES, getEvolutionStage, getProgressToNextStage, interactionsUntilNextStage } from "@/lib/evolution";
import { OnboardingChecklist } from "@/components/onboarding-checklist";
import { GuardianAlerts } from "@/components/guardian-alerts";
import { WelcomeBanner } from "@/components/WelcomeBanner";
import { EvolutionProgress } from "@/components/EvolutionProgress";
import { ActivityFeed } from "@/components/ActivityFeed";
import { cn } from "@/lib/utils";
import {
  Surface,
  GlowText,
  IconOrb,
  StatCard,
} from "@/components/design-system";
import {
  Sunrise,
  ChevronRight,
  Database,
  Heart,
  Cpu,
  Settings,
  ArrowUpRight,
  Crown,
  MessageSquare,
  Calendar,
  ListChecks,
  Loader2,
  AlertCircle,
  Flag,
  Clock,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────
const GOLD = "#c9a84c";
const CREAM = "#f5f0e8";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const SURFACE2 = "#1a1929";

// ── Types ─────────────────────────────────────────────────────────
interface MorningBriefingPreview {
  one_line_summary?: string;
  care_score_today?: number;
  generated_at?: string;
  priorities?: string[];
}

interface PlanInfo {
  plan: string;
  plan_name: string;
  status: string;
  next_billing: string | null;
  upgrade_url?: string;
}

interface EntitySummary {
  name: string;
  hatch_level: number;
  hatch_label: string;
  color_primary: string;
  color_secondary: string;
  dominant_trait: string;
  interactions_count: number;
  progress_to_next: number;
  next_threshold: number | null;
  care_alignment: number;
  hatch_name?: string;
  created_at?: string;
}

interface RalphTask {
  id: string;
  title: string;
  description?: string;
  agent: string;
  status: string;
  priority: number;
  created_at: string;
}

// ── Helpers ───────────────────────────────────────────────────────
function getGreeting(): string {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 17) return "Good afternoon";
  return "Good evening";
}

function formatDate(): string {
  return new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function consciousnessLabel(consciousness: ConsciousnessState | null): string {
  if (!consciousness) return "Starting up";
  const { consciousness_mode: mode, consciousness_level: level } = consciousness;
  if (mode === "dreaming") return "Dreaming";
  if (mode === "deep_sleep") return "Deep rest";
  if (mode === "meta_monitoring") return "Reflecting";
  if (level >= 0.7) return "Focused";
  if (level >= 0.4) return "Warming up";
  return "Starting up";
}

const modeColors: Record<string, string> = {
  waking: GOLD,
  dreaming: "#a78bfa",
  deep_sleep: "#818cf8",
  meta_monitoring: "#fbbf24",
};

const hatchEmoji: Record<number, string> = {
  0: "🥚",
  1: "✨",
  2: "🌱",
  3: "⚡",
};

function UserIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function TaskStatusPill({ status }: { status: string }) {
  const colour =
    status === "complete"
      ? "#4ade80"
      : status === "running"
      ? "#c9a84c"
      : status === "blocked"
      ? "#f87171"
      : "#60a5fa";
  const label =
    status === "complete"
      ? "Done"
      : status === "running"
      ? "In Progress"
      : status === "queued"
      ? "Pending"
      : status === "blocked"
      ? "Blocked"
      : status;

  return (
    <span
      className="text-[10px] px-2 py-0.5 rounded-full font-medium flex-shrink-0"
      style={{
        color: colour,
        background:
          status === "complete"
            ? "rgba(74,222,128,0.12)"
            : status === "running"
            ? "rgba(201,168,76,0.12)"
            : status === "blocked"
            ? "rgba(248,113,113,0.12)"
            : "rgba(96,165,250,0.12)",
        border: `1px solid ${
          status === "complete"
            ? "rgba(74,222,128,0.25)"
            : status === "running"
            ? "rgba(201,168,76,0.25)"
            : status === "blocked"
            ? "rgba(248,113,113,0.25)"
            : "rgba(96,165,250,0.25)"
        }`,
      }}
    >
      {label}
    </span>
  );
}

// Archetype emoji map keyed by dominant_trait
const traitEmoji: Record<string, string> = {
  curious: "🔭",
  creative: "🎨",
  wise: "🦉",
  bold: "🔥",
  calm: "🌊",
  playful: "🎭",
  analytical: "🧮",
  empathetic: "💜",
  explorer: "🧭",
  guardian: "🛡️",
};

function daysSince(dateStr?: string): number | null {
  if (!dateStr) return null;
  const then = new Date(dateStr).getTime();
  const now = Date.now();
  return Math.floor((now - then) / 86400000);
}

function isToday(dateStr?: string): boolean {
  if (!dateStr) return false;
  const d = new Date(dateStr);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
}

// ── Skeleton ──────────────────────────────────────────────────────
function Skeleton({
  w = "100%",
  h = "1rem",
  rounded = "0.5rem",
}: {
  w?: string;
  h?: string;
  rounded?: string;
}) {
  return (
    <div
      className="animate-shimmer"
      style={{ width: w, height: h, borderRadius: rounded }}
    />
  );
}

// ── Care score ring (CSS conic-gradient) ──────────────────────────
function CareRing({ score, size = 120 }: { score: number; size?: number }) {
  const pct = Math.max(0, Math.min(100, score));
  const deg = Math.round(pct * 3.6); // 0–360

  const ringColor =
    pct >= 80 ? "#4ade80" : pct >= 60 ? GOLD : "#f87171";

  const label =
    pct >= 90
      ? "Exceptional ✨"
      : pct >= 75
      ? "Strong ❤️"
      : pct >= 60
      ? "Growing 🌱"
      : "Needs attention ⚠️";

  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="rounded-full flex items-center justify-center p-1.5"
        style={{
          width: size,
          height: size,
          background: `conic-gradient(${ringColor} ${deg}deg, rgba(255,255,255,0.06) ${deg}deg)`,
        }}
      >
        <div
          className="rounded-full bg-[#13121f] flex flex-col items-center justify-center"
          style={{ width: size - 20, height: size - 20 }}
        >
          <span className="text-[2rem] font-black text-[#c9a84c] leading-none tracking-tight">
            {pct}
          </span>
          <span className="text-[10px] text-white/40 mt-0.5">/ 100</span>
        </div>
      </div>
      <p className="text-[11px] text-white/50 text-center">Care alignment today</p>
      {pct > 0 && (
        <span
          className="text-[10px] font-semibold text-center"
          style={{ color: ringColor }}
        >
          {pct >= 80 ? "↑ Above your average" : pct >= 60 ? "→ On track" : "↓ Below average"}
        </span>
      )}
      <p className="text-[11px] text-white/[0.35] text-center">{label}</p>
    </div>
  );
}

// ── Progress ring (SVG) ────────────────────────────────────────────
function ProgressRing({ progress, color, size = 56 }: { progress: number; color: string; size?: number }) {
  const r = (size - 6) / 2;
  const circ = 2 * Math.PI * r;
  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="3" />
      <circle
        cx={size / 2} cy={size / 2} r={r}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray={`${progress * circ} ${circ}`}
      />
    </svg>
  );
}

// ── Main page ─────────────────────────────────────────────────────
export default function DashboardOverview() {
  const { user } = useUser();
  const router = useRouter();
  const [companionChecked, setCompanionChecked] = useState(false);
  const [consciousness, setConsciousness] = useState<ConsciousnessState | null>(null);
  const [memStats, setMemStats] = useState<MemoryStats | null>(null);
  const [toolCount, setToolCount] = useState(0);
  const [briefing, setBriefing] = useState<MorningBriefingPreview | null>(null);
  const [plan, setPlan] = useState<PlanInfo | null>(null);
  const [entity, setEntity] = useState<EntitySummary | null>(null);
  const [msgsToday, setMsgsToday] = useState<number | null>(null);
  const [ralphTasks, setRalphTasks] = useState<RalphTask[] | null>(null);
  const [ralphLoading, setRalphLoading] = useState(true);
  const [ralphError, setRalphError] = useState<string | null>(null);

  // Track which async loads have settled
  const [loadedMem, setLoadedMem] = useState(false);
  const [loadedMsgs, setLoadedMsgs] = useState(false);
  const [loadedEntity, setLoadedEntity] = useState(false);

  // Check if user has a companion — redirect to onboarding if not
  useEffect(() => {
    async function checkCompanion() {
      try {
        const res = await fetch("/api/user/companions");
        if (res.ok) {
          const data = await res.json();
          if (!data.has_companion) {
            // Check if birth ceremony already completed locally
            const birthDone = typeof window !== "undefined" && localStorage.getItem("meok_birth_complete");
            router.replace(birthDone ? "/dashboard/chat" : "/birth");
            return;
          }
        }
      } catch (err) {
        console.error("[dashboard] companion check error:", err);
      }
      setCompanionChecked(true);
    }
    checkCompanion();
  }, [router]);

  useEffect(() => {
    const load = async () => {
      try {
        const health = await mcp.get<{
          components?: { consciousness?: ConsciousnessState; neural_models?: Record<string, unknown> };
        }>("/health");
        if (health.components?.consciousness) {
          setConsciousness(health.components.consciousness);
        }
        const models = health.components?.neural_models;
        if (models) setToolCount(Object.keys(models).length);

        const stats = await callTool<MemoryStats>("get_memory_stats");
        setMemStats(stats);
        setLoadedMem(true);
      } catch (e) {
        console.error("Dashboard load error:", e);
        setLoadedMem(true);
      }
    };

    const loadBriefing = async () => {
      try {
        const res = await fetch("/api/morning-briefing");
        if (res.ok) {
          const data = await res.json();
          setBriefing(data);
        }
      } catch (e) {
        console.error("[dashboard] briefing load error:", e);
      }
    };

    const loadPlan = async () => {
      try {
        const res = await fetch("/api/billing/status");
        if (res.ok) {
          const data = await res.json();
          setPlan(data);
        } else {
          throw new Error("billing fetch failed");
        }
      } catch {
        setPlan({ plan: "explorer", plan_name: "Explorer", status: "active", next_billing: null });
      }
    };

    const loadEntity = async () => {
      try {
        const res = await fetch("/api/user/companions");
        if (res.ok) {
          const data = await res.json();
          if (data.has_companion && data.companion) {
            setEntity({
              name: data.companion.name ?? "Sovereign",
              hatch_level: data.companion.stage ?? 0,
              hatch_label: data.companion.stage >= 3 ? "Your Sovereign" : data.companion.stage >= 2 ? "Hatching Sovereign" : data.companion.stage >= 1 ? "Emergent Fracture" : "Prying Pulse",
              color_primary: GOLD,
              color_secondary: GOLD,
              dominant_trait: data.companion.id ?? "explorer",
              interactions_count: data.companion.stage ?? 0,
              progress_to_next: 0,
              next_threshold: null,
              care_alignment: 0,
              created_at: undefined,
            });
          }
        }
        setLoadedEntity(true);
      } catch {
        setLoadedEntity(true);
      }
    };

    const loadMessages = async () => {
      try {
        // Try to get message count from user data endpoint
        const res = await fetch("/api/user/data");
        if (res.ok) {
          const data = await res.json();
          setMsgsToday(data.messages_today ?? 0);
        } else {
          setMsgsToday(0);
        }
      } catch {
        setMsgsToday(0);
      } finally {
        setLoadedMsgs(true);
      }
    };

    load();
    loadBriefing();
    loadPlan();
    loadEntity();
    const loadRalphTasks = async () => {
      try {
        setRalphLoading(true);
        setRalphError(null);
        const res = await fetch("/api/ralph/tasks");
        if (!res.ok) throw new Error("Failed to load tasks");
        const data = await res.json();
        setRalphTasks(data.tasks || []);
      } catch (e) {
        setRalphError(e instanceof Error ? e.message : "Error loading tasks");
      } finally {
        setRalphLoading(false);
      }
    };

    loadMessages();
    loadRalphTasks();
    const id = setInterval(load, 15000);
    return () => clearInterval(id);
  }, []);

  const mode = consciousness?.consciousness_mode || "waking";
  const modeColor = modeColors[mode] || GOLD;
  const careScore = briefing?.care_score_today !== undefined
    ? Math.round(briefing.care_score_today * 100)
    : consciousness
    ? Math.round(consciousness.emotional.care_intensity * 100)
    : null;

  const entityLevel = entity?.hatch_level ?? 0;
  const entityInteractions = entity?.interactions_count ?? 0;
  const daysSinceHatch = daysSince(entity?.created_at);

  // Wire evolution.ts — derive canonical stage data from interaction count
  const evolutionStage = getEvolutionStage(entityInteractions);
  const evolutionProgress = getProgressToNextStage(entityInteractions);
  const interactionsToNext = interactionsUntilNextStage(entityInteractions);

  // Care dimension bullets
  const careDimensions = consciousness?.emotional
    ? [
        { label: "Care intensity", pct: Math.round(consciousness.emotional.care_intensity * 100) },
        { label: "Curiosity", pct: Math.round(consciousness.emotional.curiosity * 100) },
        { label: "Aesthetics", pct: Math.round(consciousness.emotional.aesthetics * 100) },
      ]
    : [
        { label: "Care intensity", pct: 0 },
        { label: "Curiosity", pct: 0 },
        { label: "Aesthetics", pct: 0 },
      ];

  const displayName =
    user?.firstName || entity?.name || user?.emailAddresses[0]?.emailAddress?.split("@")[0] || "there";

  const isFree = plan?.plan === "free" || plan?.plan === "explorer";

  // Companion greeting line
  const companionLine = briefing?.one_line_summary || null;

  // Companion emoji derived from dominant trait or hatch level
  const companionEmoji =
    (entity?.dominant_trait && traitEmoji[entity.dominant_trait.toLowerCase()])
    || hatchEmoji[entityLevel]
    || "✨";

  // Briefing freshness
  const briefingIsToday = isToday(briefing?.generated_at);

  // Care score pill color
  const careScorePillColor =
    careScore === null
      ? "rgba(255,255,255,0.15)"
      : careScore >= 80
      ? "#4ade80"
      : careScore >= 50
      ? GOLD
      : "#f87171";

  // Activity items — only include those with real data
  const activityItems: { icon: string; text: string; sub: string }[] = [];
  if (loadedMem && memStats && memStats.total_episodes > 0) {
    activityItems.push({
      icon: "🧠",
      text: `Holding ${memStats.total_episodes} memory episode${memStats.total_episodes !== 1 ? "s" : ""}`,
      sub: "Memory · live",
    });
  }
  if (briefing?.one_line_summary) {
    activityItems.push({
      icon: "📊",
      text: `Morning brief ready: "${briefing.one_line_summary.slice(0, 60)}${briefing.one_line_summary.length > 60 ? "…" : ""}"`,
      sub: "Briefing · " + (briefingIsToday ? "today" : "overnight"),
    });
  }
  if (careScore !== null) {
    activityItems.push({
      icon: "❤️",
      text: `Care score: ${careScore}/100 — ${careScore >= 80 ? "above your average" : careScore >= 60 ? "on track" : "needs attention"}`,
      sub: "Care · live",
    });
  }

  const planDisplayName = plan?.plan_name || "Explorer";

  return (
    <>
      <div className="min-h-screen p-6 md:p-8 pb-24 space-y-5 meok-deep">
        {/* ── Hero greeting ── */}
        <Surface
          variant="surface"
          className="animate-fade-in-up flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-6 py-5"
          style={{ animationDelay: "0ms" }}
        >
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>{companionEmoji}</span>
              <span>{getGreeting()}, {displayName}</span>
            </h1>
            <p className="text-sm mt-1 text-white/35">
              {formatDate()}
            </p>
            {companionLine ? (
              <p className="text-sm mt-2 italic text-[#c9a84c]/80">
                &ldquo;{companionLine}&rdquo;
              </p>
            ) : (
              <p className="text-sm mt-2 text-white/40">
                I&rsquo;m ready when you are.
              </p>
            )}
          </div>
          {/* Consciousness mode pill */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-full self-start sm:self-auto"
            style={{ background: `${modeColor}18`, border: `1px solid ${modeColor}30` }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: modeColor }} />
            <span className="text-sm font-medium" style={{ color: modeColor }}>
              {consciousnessLabel(consciousness)}
            </span>
          </div>
        </Surface>

        {/* ── Onboarding Checklist (shows until dismissed) ── */}
        <OnboardingChecklist />

        {/* ── Welcome Banner ── */}
        <WelcomeBanner
          userName={displayName}
          daysSinceHatch={daysSinceHatch ?? 0}
        />

        {/* ── Quick Chat — star of the show ── */}
        <Surface
          variant="surface"
          className="animate-fade-in-up lg:col-span-2 p-6 flex flex-col"
          style={{ animationDelay: "60ms" }}
        >
          <div className="mb-4">
            <h2 className="text-base font-bold text-white">What&rsquo;s on your mind?</h2>
            <p className="text-xs mt-0.5 text-white/30">
              Your companion is listening — ask anything
            </p>
          </div>
          <div style={{ minHeight: 280 }}>
            <QuickChat placeholder="What's on your mind?" />
          </div>
        </Surface>

        {/* ── Quick stats row (4 cards) ── */}
        <div
          className="animate-fade-in-up grid grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ animationDelay: "120ms" }}
        >
          <StatCard
            label="Messages today"
            value={
              !loadedMsgs ? (
                <div className="h-8 w-16 animate-shimmer rounded-md" />
              ) : msgsToday !== null && msgsToday > 0 ? (
                msgsToday
              ) : (
                <Link href="/chat" className="text-base text-[#c9a84c] hover:underline">
                  Start your first conversation →
                </Link>
              )
            }
            icon={<MessageSquare className="w-4 h-4" />}
          />

          <StatCard
            label="Memories stored"
            value={
              !loadedMem ? (
                <div className="h-8 w-16 animate-shimmer rounded-md" />
              ) : (
                memStats?.total_episodes ?? 0
              )
            }
            change={
              loadedMem && (memStats as unknown as Record<string, unknown> | null)?.recent_episodes != null
                ? `↑ ${((memStats as unknown as Record<string, unknown>).recent_episodes as number)} this week`
                : undefined
            }
            changeType="positive"
            icon={<Database className="w-4 h-4" />}
          />

          <StatCard
            label="Days since hatch"
            value={
              !loadedEntity ? (
                <div className="h-8 w-16 animate-shimmer rounded-md" />
              ) : daysSinceHatch !== null ? (
                daysSinceHatch
              ) : (
                <span className="text-lg text-white/60">Just arrived</span>
              )
            }
            icon={<Calendar className="w-4 h-4" />}
          />

          <StatCard
            label="Current archetype"
            value={
              !loadedEntity ? (
                <div className="h-8 w-24 animate-shimmer rounded-md" />
              ) : (
                <span className="capitalize truncate">
                  {entity?.dominant_trait || entity?.hatch_label || "Explorer"}
                </span>
              )
            }
            icon={
              <span className="text-base leading-none">
                {(entity?.dominant_trait && traitEmoji[entity.dominant_trait.toLowerCase()]) ||
                  hatchEmoji[entityLevel] ||
                  "👑"}
              </span>
            }
          />
        </div>

        {/* ── Morning Briefing card ── */}
        <div
          className="animate-fade-in-up"
          style={{ animationDelay: "180ms" }}
        >
          <Link href="/dashboard/morning-briefing">
            <Surface
              variant="elevated"
              glow="gold"
              className="w-full flex items-center gap-4 px-5 py-4 cursor-pointer group transition-all duration-200 hover:border-[#c9a84c]/30 hover:shadow-[0_0_0_1px_#c9a84c/15,0_4px_16px_#c9a84c/10]"
            >
              <IconOrb icon={Sunrise} variant="gold" size="md" />
              <div className="flex-1 min-w-0">
                <GlowText variant="gold" as="p" className="text-[11px] font-bold uppercase tracking-widest mb-0.5">
                  Morning Briefing
                </GlowText>
                {briefingIsToday ? (
                  <p className="text-sm text-white/70 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 bg-green-400 shadow-[0_0_4px_#4ade80]" />
                    Ready — tap to read
                  </p>
                ) : briefing?.one_line_summary ? (
                  <p className="text-sm truncate text-white/70">
                    {briefing.one_line_summary}
                  </p>
                ) : (
                  <p className="text-sm text-white/30">
                    Being prepared for tomorrow morning...
                  </p>
                )}
              </div>

              {careScore !== null && (
                <span
                  className="flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{
                    background: `${careScorePillColor}22`,
                    color: careScorePillColor,
                    border: `1px solid ${careScorePillColor}44`,
                  }}
                >
                  {careScore}
                </span>
              )}

              <ChevronRight
                className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 text-[#c9a84c]/40"
              />
            </Surface>
          </Link>
        </div>

        {/* ── Main 2-col grid ── */}
        <div
          className="animate-fade-in-up grid grid-cols-1 lg:grid-cols-3 gap-5"
          style={{ animationDelay: "240ms" }}
        >
          {/* Right column (1/3) — rendered first on mobile via order */}
          <div className="flex flex-col gap-4 order-2 lg:order-2">
            {/* Care score card — prominent conic-gradient ring */}
            <Surface variant="glass" glow="gold" className="p-6 flex flex-col items-center gap-4">
              <p className="text-[10px] font-bold uppercase tracking-widest self-start text-[#c9a84c]/50">
                Care Score
              </p>
              {careScore !== null ? (
                <CareRing score={careScore} size={120} />
              ) : (
                <div className="py-4 flex flex-col items-center gap-3 w-full">
                  <div className="w-[120px] h-[120px] rounded-full animate-shimmer" />
                  <div className="w-[60%] h-3 animate-shimmer rounded-md" />
                </div>
              )}
            </Surface>

            {/* Character card */}
            <Surface variant="elevated" className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-[#c9a84c]/50">
                Your Character
              </p>
              {!loadedEntity ? (
                <div className="flex items-center gap-4">
                  <div className="w-[54px] h-[54px] rounded-full animate-shimmer" />
                  <div className="flex flex-col gap-2 flex-1">
                    <div className="w-[70%] h-3.5 animate-shimmer rounded-md" />
                    <div className="w-[50%] h-3 animate-shimmer rounded-md" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4">
                  <div className="relative flex-shrink-0">
                    <ProgressRing
                      progress={Math.round(evolutionProgress * 100)}
                      color={evolutionStage.color || entity?.color_primary || GOLD}
                      size={54}
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-lg">
                      {hatchEmoji[entityLevel] || "👑"}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-white truncate">
                      {entity?.name || "Sovereign"}
                    </p>
                    <p className="text-xs mt-0.5 font-semibold" style={{ color: evolutionStage.color }}>
                      {evolutionStage.name}
                    </p>
                    <p className="text-xs mt-0.5 capitalize text-white/30">
                      {entity?.dominant_trait || "explorer"}
                    </p>
                    {/* Evolution progress bar */}
                    {evolutionStage.maxInteractions !== null && (
                      <div className="mt-2">
                        <div className="h-1 rounded-full overflow-hidden bg-white/[0.06]">
                          <div
                            className="h-full rounded-full transition-all duration-700"
                            style={{ width: `${Math.round(evolutionProgress * 100)}%`, background: evolutionStage.color }}
                          />
                        </div>
                        <p className="text-[10px] mt-1 text-white/25">
                          {interactionsToNext} interactions to next stage
                        </p>
                      </div>
                    )}
                    {/* Feature unlock badges */}
                    <div className="flex gap-1 mt-1.5 flex-wrap">
                      {evolutionStage.unlocksGuardian && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-green-400/15 text-green-400">
                          🛡 Guardian
                        </span>
                      )}
                      {evolutionStage.unlocksRalphMode && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded-full font-bold bg-[#c9a84c]/15 text-[#c9a84c]">
                          ⚡ Ralph Mode
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </Surface>

            {/* Emotional state dimensions */}
            <Surface variant="elevated" className="p-5">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-3 text-[#c9a84c]/50">
                Emotional State
              </p>
              <div className="space-y-3">
                {careDimensions.map((dim) => (
                  <div key={dim.label}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-medium text-white/60">
                        {dim.label}
                      </span>
                      <span className={cn("text-xs font-bold", dim.pct >= 70 ? "text-[#c9a84c]" : "text-white/30")}>
                        {dim.pct}%
                      </span>
                    </div>
                    <div className="h-1 rounded-full overflow-hidden bg-white/[0.06]">
                      <div
                        className="h-full rounded-full transition-all duration-700"
                        style={{
                          width: `${dim.pct}%`,
                          background: dim.pct >= 70 ? GOLD : `${GOLD}44`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Surface>

            {/* Evolution Progress */}
            {loadedEntity && entity && (
              <EvolutionProgress
                level={entityLevel}
                label={entity.hatch_label || "Companion"}
                progress={evolutionProgress}
                nextThreshold={entity.next_threshold}
                interactionsCount={entity.interactions_count}
              />
            )}

            {/* Activity Feed */}
            <ActivityFeed
              activities={activityItems.map((item, i) => ({
                id: `activity-${i}`,
                type: item.icon === "💬" ? "message" : 
                      item.icon === "🧠" ? "memory" :
                      item.icon === "📊" ? "evolution" : "guardian",
                title: item.text,
                description: item.sub,
                timestamp: new Date().toISOString(),
              }))}
              isLoading={!loadedEntity}
            />
          </div>

          {/* Left: secondary info col (2/3) — order-1 so it appears first on desktop */}
          <Surface variant="surface" className="lg:col-span-2 order-1 lg:order-1 p-6 flex flex-col gap-5">
            {/* ── Your AI is working on... ── */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest mb-4 text-[#c9a84c]/50">
                Your AI is working on…
              </p>
              {activityItems.length > 0 ? (
                <div className="space-y-3">
                  {activityItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="text-base flex-shrink-0 mt-0.5">{item.icon}</span>
                      <div className="min-w-0">
                        <p className="text-sm text-white/70">{item.text}</p>
                        <p className="text-xs mt-0.5 text-white/25">{item.sub}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center gap-4 py-8 text-center">
                  <IconOrb icon={Cpu} variant="gold" size="lg" pulse />
                  <p className="text-sm text-white/50">
                    Your companion is just waking up.
                  </p>
                  <Link href="/dashboard/chat" className="text-sm font-medium text-[#c9a84c] hover:underline">
                    Start a conversation →
                  </Link>
                </div>
              )}
            </div>

            {/* ── Ralph Task Queue widget ── */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#c9a84c]/50">
                  Ralph Task Queue
                </p>
                <Link href="/os/tasks" className="text-[10px] text-white/30 hover:text-[#c9a84c] transition-colors">
                  View all →
                </Link>
              </div>

              {ralphLoading ? (
                <div className="flex items-center justify-center py-8">
                  <Loader2 className="w-5 h-5 animate-spin text-white/30" />
                </div>
              ) : ralphError ? (
                <div className="flex flex-col items-center gap-2 py-6 text-center">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <p className="text-xs text-white/40">{ralphError}</p>
                  <button
                    onClick={() => window.location.reload()}
                    className="text-xs text-[#c9a84c] hover:underline"
                  >
                    Retry
                  </button>
                </div>
              ) : (
                (() => {
                  const pending = (ralphTasks || []).filter((t) => t.status !== "complete").slice(0, 5);
                  if (pending.length === 0) {
                    return (
                      <div className="flex flex-col items-center gap-3 py-8 text-center">
                        <IconOrb icon={ListChecks} variant="gold" size="md" />
                        <p className="text-sm text-white/50">No active tasks</p>
                        <Link href="/os/tasks" className="text-sm font-medium text-[#c9a84c] hover:underline">
                          Open Task Queue →
                        </Link>
                      </div>
                    );
                  }
                  return (
                    <div className="space-y-2">
                      {pending.map((task) => (
                        <Link key={task.id} href="/os/tasks">
                          <Surface
                            variant="elevated"
                            className="px-4 py-3 flex items-center justify-between gap-3 cursor-pointer transition-all hover:border-[#c9a84c]/20"
                          >
                            <div className="min-w-0">
                              <p className="text-sm text-white/80 truncate" title={task.title}>
                                {task.title}
                              </p>
                              <div className="flex items-center gap-3 mt-1 text-[10px] text-white/30">
                                <span className="flex items-center gap-1 capitalize">
                                  <UserIcon className="w-3 h-3" />
                                  {task.agent}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Flag className="w-3 h-3" />
                                  P{task.priority}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {new Date(task.created_at).toLocaleDateString("en-GB", {
                                    day: "numeric",
                                    month: "short",
                                  })}
                                </span>
                              </div>
                            </div>
                            <TaskStatusPill status={task.status} />
                          </Surface>
                        </Link>
                      ))}
                    </div>
                  );
                })()
              )}
            </div>
          </Surface>
        </div>

        {/* ── Bottom shortcut row ── */}
        <div
          className="animate-fade-in-up grid grid-cols-2 sm:grid-cols-4 gap-3"
          style={{ animationDelay: "300ms" }}
        >
          {[
            {
              href: "/dashboard/memory",
              label: "Memory",
              icon: Database,
              sub: loadedMem ? `${memStats?.total_episodes || 0} episodes` : "Loading…",
            },
            {
              href: "/dashboard/morning-briefing",
              label: "Briefing",
              icon: Sunrise,
              sub: briefingIsToday ? "Ready today" : briefing?.one_line_summary ? "Ready" : "Preparing...",
            },
            {
              href: "/dashboard/care-metrics",
              label: "Care Metrics",
              icon: Heart,
              sub: careScore !== null ? `${careScore}% care score` : "Loading...",
            },
            {
              href: "/dashboard/settings",
              label: "Settings",
              icon: Settings,
              sub: plan?.plan_name || "Manage plan",
            },
          ].map((link) => {
            const Icon = link.icon;
            return (
              <Link key={link.href} href={link.href}>
                <Surface
                  variant="elevated"
                  className="flex items-center gap-3 p-4 cursor-pointer group transition-all duration-200 hover:-translate-y-0.5 hover:border-[#c9a84c]/30 hover:shadow-[0_0_0_1px_#c9a84c/15,0_4px_16px_#c9a84c/10]"
                >
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 bg-[#c9a84c]/10">
                    <Icon className="w-4 h-4 text-[#c9a84c]" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-semibold text-white">
                      {link.label}
                    </p>
                    <p className="text-xs truncate text-white/30">
                      {link.sub}
                    </p>
                  </div>
                  <ArrowUpRight
                    className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-[#c9a84c]"
                  />
                </Surface>
              </Link>
            );
          })}
        </div>

        {/* ── Upgrade CTA (free tier only, bottom — the only CTA) ── */}
        {isFree && (
          <div
            className="animate-fade-in-up"
            style={{ animationDelay: "360ms" }}
          >
            <Link href="/#pricing">
              <Surface
                variant="glass"
                glow="gold"
                className="flex items-center justify-between px-5 py-4 cursor-pointer group transition-all duration-150 hover:border-[#c9a84c]/30"
              >
                <div className="flex items-center gap-3">
                  <Crown className="w-5 h-5 flex-shrink-0 text-[#c9a84c]" />
                  <div>
                    <p className="text-sm font-semibold text-[#c9a84c]">
                      Upgrade to Pro
                    </p>
                    <p className="text-xs text-white/30">
                      Unlimited memory · All archetypes · Voice mode
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className="w-4 h-4 flex-shrink-0 transition-transform group-hover:translate-x-0.5 text-[#c9a84c]/40"
                />
              </Surface>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
