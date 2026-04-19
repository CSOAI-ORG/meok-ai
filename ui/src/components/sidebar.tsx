"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  Database,
  Brain,
  Shield,
  Bot,
  Moon,
  Sparkles,
  Settings,
  LogOut,
  Cpu,
  Swords,
  Heart,
  Sunrise,
  MessageSquare,
  Crown,
  ChevronRight,
  Link2,
  Menu,
  X,
  Gamepad2,
  Users,
  FileText,
  Briefcase,
  CreditCard,
  FlaskConical,
  Zap,
  Star,
  Lock,
} from "lucide-react";
import { useUser, useClerk } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { mcp, callTool } from "@/lib/api";

// ── Brand tokens ──────────────────────────────────────────────────
const GOLD = "#c9a84c";
const CREAM = "#f5f0e8";

// Consciousness mode config
interface ModeConfig {
  color: string;
  label: string;
  dotAnimation: string;
  glowColor: string;
}

const modeConfig: Record<string, ModeConfig> = {
  waking: {
    color: GOLD,
    label: "Awake",
    dotAnimation: "dot-pulse-waking",
    glowColor: `${GOLD}40`,
  },
  dreaming: {
    color: "#a78bfa",
    label: "Dreaming 🌙",
    dotAnimation: "dot-pulse-dreaming",
    glowColor: "#a78bfa40",
  },
  deep_sleep: {
    color: "#60a5fa",
    label: "Resting 💤",
    dotAnimation: "dot-pulse-deep-rest",
    glowColor: "#60a5fa30",
  },
  deep_rest: {
    color: "#60a5fa",
    label: "Resting 💤",
    dotAnimation: "dot-pulse-deep-rest",
    glowColor: "#60a5fa30",
  },
  meta_monitoring: {
    color: "#fbbf24",
    label: "Reflecting ✦",
    dotAnimation: "dot-pulse-reflecting",
    glowColor: "#fbbf2440",
  },
  reflecting: {
    color: "#fbbf24",
    label: "Reflecting ✦",
    dotAnimation: "dot-pulse-reflecting",
    glowColor: "#fbbf2440",
  },
};

function getModeConfig(mode: string): ModeConfig {
  return modeConfig[mode] ?? {
    color: GOLD,
    label: "Awakening...",
    dotAnimation: "dot-pulse-waking",
    glowColor: `${GOLD}30`,
  };
}

// ── Navigation groups ─────────────────────────────────────────────
interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  proOnly?: boolean;
}

interface NavGroup {
  title: string;
  items: NavItem[];
  proOnly?: boolean;
}

const navGroups: NavGroup[] = [
  {
    title: "Home",
    items: [
      { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
      { href: "/dashboard/chat", label: "Chat", icon: MessageSquare },
      { href: "/dashboard/morning-briefing", label: "Morning Briefing", icon: Sunrise },
    ],
  },
  {
    title: "Character",
    items: [
      { href: "/dashboard/companion", label: "Select", icon: Heart },
      { href: "/start", label: "Create", icon: Star },
      { href: "/dashboard/evolution", label: "Evolution", icon: Sparkles },
      { href: "/dashboard/bond", label: "Analytics", icon: LayoutDashboard },
    ],
  },
  {
    title: "Memory",
    items: [
      { href: "/dashboard/memories", label: "Memories", icon: Database },
      { href: "/dashboard/memory", label: "Memory Vault", icon: Brain },
      { href: "/dashboard/dream", label: "Dreams", icon: Moon },
      { href: "/dashboard/voice", label: "Voice", icon: Zap },
    ],
  },
  {
    title: "Work",
    items: [
      { href: "/work/ralph", label: "Ralph", icon: Star },
      { href: "/work/riri", label: "Riri", icon: Cpu },
      { href: "/work/hourman", label: "Hourman", icon: Crown },
      { href: "/dashboard/ralph", label: "Ralph Mode", icon: Zap, proOnly: true },
    ],
  },
  {
    title: "Gaming",
    items: [
      { href: "/dashboard/gaming/stats", label: "Stats", icon: LayoutDashboard },
      { href: "/dashboard/gaming/coaching", label: "Coaching", icon: Star },
      { href: "/dashboard/gaming/community", label: "Community", icon: Users },
    ],
  },
  {
    title: "Guardian",
    items: [
      { href: "/dashboard/family-circle", label: "Family", icon: Heart },
      { href: "/dashboard/guardian", label: "Protection", icon: Shield },
      { href: "/guardian/scam-stop", label: "Scam Stop", icon: Lock },
    ],
  },
  {
    title: "Settings",
    items: [
      { href: "/dashboard/api-keys", label: "API Keys", icon: Link2 },
      { href: "/dashboard/billing", label: "Billing", icon: CreditCard },
      { href: "/dashboard/settings", label: "Accessibility", icon: Settings },
    ],
  },
];

// ── Plan badge colours ─────────────────────────────────────────────
function planBadgeStyle(plan: string): { bg: string; text: string; label: string } {
  switch (plan) {
    case "personal":
      return { bg: `${GOLD}22`, text: GOLD, label: "Personal" };
    case "team":
      return { bg: "#a78bfa22", text: "#a78bfa", label: "Team" };
    case "elite":
    case "sovereign":
      return { bg: "#a78bfa33", text: "#c084fc", label: "Pro" };
    default:
      return { bg: "rgba(255,255,255,0.08)", text: "rgba(255,255,255,0.35)", label: "Free" };
  }
}

function isPaidPlan(plan: string): boolean {
  return ["personal", "team", "elite", "sovereign"].includes(plan);
}

// ── Entity orb ────────────────────────────────────────────────────
interface EntitySummary {
  name: string;
  hatch_level: number;
  hatch_name: string;
  hatch_label: string;
  color_primary: string;
  color_secondary: string;
  dominant_trait: string;
  interactions_count: number;
  progress_to_next: number;
  next_threshold: number | null;
  care_alignment: number;
}

function EntityOrb({ entity, mode }: { entity: EntitySummary | null; mode: string }) {
  const cfg = getModeConfig(mode);
  const primary = entity?.color_primary || GOLD;
  const secondary = entity?.color_secondary || "#c9a84c88";
  const level = entity?.hatch_level ?? 0;
  const progress = entity ? (entity.next_threshold !== null ? entity.progress_to_next : 1) : 0;

  // Extract first name from entity name
  const firstName = entity?.name ? entity.name.split(" ")[0] : null;

  const levelEmoji =
    level === 0 ? "🥚" :
    level === 1 ? "✨" :
    level === 2 ? "🌱" :
    level === 3 ? "⚡" : "👑";

  // Skeleton loader while entity hasn't loaded
  if (entity === null) {
    return (
      <div className="flex items-center gap-3">
        <div
          className="relative flex-shrink-0 rounded-full animate-pulse"
          style={{ width: 38, height: 38, background: "rgba(201,168,76,0.12)" }}
        />
        <div className="flex-1 min-w-0 space-y-1.5">
          <div
            className="h-3 w-24 rounded animate-pulse"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
          <div
            className="h-2 w-16 rounded animate-pulse"
            style={{ background: "rgba(255,255,255,0.05)" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* Animated orb */}
      <div className="relative flex-shrink-0" style={{ width: 38, height: 38 }}>
        {/* Outer pulsing glow — matches consciousness mode color */}
        <div
          className="absolute rounded-full orb-glow-pulse"
          style={{
            inset: -4,
            background: `radial-gradient(circle, ${cfg.color}28 0%, transparent 70%)`,
          }}
        />
        {/* Outer pulsing ring */}
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-15"
          style={{ background: cfg.color }}
        />
        {/* Progress arc */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 38 38">
          <circle
            cx="19" cy="19" r="17"
            fill="none"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="2"
          />
          {progress > 0 && (
            <circle
              cx="19" cy="19" r="17"
              fill="none"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${progress * 106.81} 106.81`}
              opacity={0.75}
            />
          )}
        </svg>
        {/* Inner orb body */}
        <div
          className="absolute inset-1.5 rounded-full flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${primary}cc, ${secondary}66)`,
            boxShadow: `0 0 14px ${primary}44, inset 0 1px 0 rgba(255,255,255,0.12)`,
          }}
        >
          <span style={{ fontSize: 10, fontWeight: 700, color: "rgba(255,255,255,0.9)", lineHeight: 1 }}>
            {levelEmoji}
          </span>
        </div>
        {/* Mode dot */}
        <span
          className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full ring-2 ring-[#0d0c18] ${cfg.dotAnimation}`}
          style={{ background: cfg.color }}
        />
      </div>

      {/* Name + stage */}
      <div className="min-w-0 flex-1">
        {/* Show first name prominently if available */}
        <p className="text-sm font-semibold text-white leading-tight truncate">
          {firstName || entity.name || "Your AI"}
        </p>
        {entity.next_threshold !== null ? (
          <p className="text-[11px] leading-tight truncate" style={{ color: `${primary}cc` }}>
            Stage {entity.hatch_level} · {entity.hatch_label}
          </p>
        ) : (
          <p className="text-[11px] leading-tight truncate" style={{ color: `${GOLD}cc` }}>
            Max evolution reached ✨
          </p>
        )}
        {/* Inline progress bar below name */}
        {entity.next_threshold !== null && (
          <div className="mt-1 h-[3px] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.10)" }}>
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${Math.min(Math.round(entity.progress_to_next * 100), 100)}%`,
                background: entity.color_primary || GOLD,
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main sidebar ──────────────────────────────────────────────────
export function Sidebar({ consciousnessMode }: { consciousnessMode?: string }) {
  const pathname = usePathname();
  const { user } = useUser();
  const { signOut } = useClerk();
  const token = !!user; // truthy when signed in
  const mode = consciousnessMode || "waking";
  const [entity, setEntity] = useState<EntitySummary | null>(null);
  const [userPlan, setUserPlan] = useState<string>("explorer");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [liveStats, setLiveStats] = useState<{
    msgs: number | null;
    memories: number | null;
    care: number | null;
  }>({ msgs: null, memories: null, care: null });

  useEffect(() => {
    if (!token) return;
    mcp.get<EntitySummary>("/entity")
      .then(setEntity)
      .catch(() => { /* entity stays null, defaults shown */ });
  }, [token]);

  useEffect(() => {
    const loadPlan = async () => {
      try {
        const res = await fetch("/api/billing/status");
        if (res.ok) {
          const data = await res.json();
          setUserPlan(data.plan || "explorer");
        }
      } catch {
        setUserPlan("explorer");
      }
    };
    loadPlan();
  }, []);

  // Live stats from MCP
  useEffect(() => {
    const load = async () => {
      try {
        const [memStats, metrics] = await Promise.allSettled([
          callTool("get_memory_stats"),
          callTool("get_care_metrics"),
        ]);
        setLiveStats({
          msgs: null, // from /api/messages/today if available
          memories:
            memStats.status === "fulfilled"
              ? (memStats.value as any)?.total_episodes ?? null
              : null,
          care:
            metrics.status === "fulfilled"
              ? Math.round(((metrics.value as any)?.care_score ?? 0) * 100)
              : null,
        });
      } catch {}
    };
    load();
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const badge = planBadgeStyle(userPlan);
  const hasPro = isPaidPlan(userPlan);
  const cfg = getModeConfig(mode);

  const sidebarContent = (
    <>
      {/* ── CSS animations ── */}
      <style>{`
        /* Waking: steady gold pulse */
        @keyframes dotWaking {
          0%, 100% { opacity: 1; box-shadow: 0 0 4px ${GOLD}cc; transform: scale(1); }
          50%       { opacity: 0.7; box-shadow: 0 0 8px ${GOLD}; transform: scale(1.2); }
        }
        .dot-pulse-waking {
          animation: dotWaking 2.5s ease-in-out infinite;
        }

        /* Dreaming: purple wave */
        @keyframes dotDreaming {
          0%   { opacity: 1; transform: scale(1); box-shadow: 0 0 4px #a78bfacc; }
          25%  { opacity: 0.5; transform: scale(0.85); }
          50%  { opacity: 1; transform: scale(1.25); box-shadow: 0 0 10px #a78bfa; }
          75%  { opacity: 0.6; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); box-shadow: 0 0 4px #a78bfacc; }
        }
        .dot-pulse-dreaming {
          animation: dotDreaming 3.5s ease-in-out infinite;
        }

        /* Deep rest: very slow, dim */
        @keyframes dotDeepRest {
          0%, 100% { opacity: 0.5; transform: scale(0.95); box-shadow: 0 0 2px #60a5fa66; }
          50%       { opacity: 0.85; transform: scale(1.05); box-shadow: 0 0 5px #60a5fa99; }
        }
        .dot-pulse-deep-rest {
          animation: dotDeepRest 5s ease-in-out infinite;
        }

        /* Reflecting: amber medium pulse */
        @keyframes dotReflecting {
          0%, 100% { opacity: 1; transform: scale(1); box-shadow: 0 0 4px #fbbf24cc; }
          50%       { opacity: 0.75; transform: scale(1.15); box-shadow: 0 0 8px #fbbf24; }
        }
        .dot-pulse-reflecting {
          animation: dotReflecting 1.8s ease-in-out infinite;
        }

        /* Mode pill glow */
        @keyframes pillGlow {
          0%, 100% { box-shadow: 0 0 0px transparent; }
          50%       { box-shadow: 0 0 8px var(--pill-glow); }
        }
        .mode-pill-animated {
          animation: pillGlow 3s ease-in-out infinite;
        }

        /* Orb ambient glow */
        @keyframes orbGlow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50%       { opacity: 1; transform: scale(1.15); }
        }
        .orb-glow-pulse {
          animation: orbGlow 3s ease-in-out infinite;
        }
      `}</style>

      {/* ── Logo / Brand bar ── */}
      <div
        className="px-5 pt-5 pb-4 flex-shrink-0"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        {/* MEOK OS wordmark with CSOAI robot */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Link href="/csoai" title="Powered by CSOAI" className="flex-shrink-0">
              <img
                src="/brand/csoai-robot.png"
                alt="CSOAI"
                className="w-7 h-7 rounded-lg object-cover opacity-80 hover:opacity-100 transition-opacity"
                style={{ filter: "drop-shadow(0 0 4px rgba(201,168,76,0.3))" }}
              />
            </Link>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black tracking-tight text-white">MEOK</span>
              <span
                className="text-xs font-bold tracking-widest uppercase"
                style={{ color: GOLD }}
              >
                OS
              </span>
            </div>
          </div>
          {/* Consciousness mode pill with animation */}
          <div
            className="mode-pill-animated flex items-center gap-1.5 px-2 py-0.5 rounded-full"
            style={{
              background: `${cfg.color}18`,
              border: `1px solid ${cfg.color}35`,
              "--pill-glow": cfg.glowColor,
            } as React.CSSProperties}
          >
            <span
              className={`w-2 h-2 rounded-full flex-shrink-0 ${cfg.dotAnimation}`}
              style={{ background: cfg.color }}
            />
            <span
              className="text-[10px] font-medium tracking-wide"
              style={{ color: cfg.color }}
            >
              {cfg.label}
            </span>
          </div>
        </div>

        {/* Entity orb with inline progress */}
        <EntityOrb entity={entity} mode={mode} />
      </div>

      {/* ── Navigation ── */}
      <nav className="flex-1 overflow-y-auto py-2 px-2">
        {navGroups.map((group) => {
          const isCollapsed = collapsedSections[group.title] ?? false;
          // A section is "active" if any of its items match the current path
          const sectionHasActive = group.items.some(
            (item) =>
              pathname === item.href ||
              (item.href !== "/dashboard" && item.href !== "/chat" && pathname.startsWith(item.href))
          );

          return (
            <div key={group.title} className="mb-0">
              {/* Section header — clickable to collapse/expand */}
              <button
                onClick={() =>
                  setCollapsedSections((prev) => ({
                    ...prev,
                    [group.title]: !prev[group.title],
                  }))
                }
                className="w-full px-3 pt-2 pb-0.5 flex items-center gap-2 cursor-pointer group/section"
                aria-expanded={!isCollapsed}
              >
                <ChevronRight
                  className={clsx(
                    "w-3 h-3 transition-transform duration-200",
                    !isCollapsed && "rotate-90"
                  )}
                  style={{ color: `${GOLD}66` }}
                />
                <span
                  className="text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: sectionHasActive ? GOLD : `${GOLD}88` }}
                >
                  {group.title}
                </span>
                {group.proOnly && !hasPro && (
                  <span
                    className="text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full"
                    style={{ background: `${GOLD}18`, color: `${GOLD}99`, border: `1px solid ${GOLD}30` }}
                  >
                    Pro
                  </span>
                )}
              </button>

              {/* Items — collapsible */}
              {!isCollapsed && group.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/dashboard" && item.href !== "/chat" && pathname.startsWith(item.href));
                const Icon = item.icon;
                const locked = item.proOnly && !hasPro;

                return (
                  <Link
                    key={item.href}
                    href={locked ? "/dashboard/settings" : item.href}
                    className={clsx(
                      "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all duration-150 group relative",
                      isActive
                        ? "text-white"
                        : locked
                        ? "opacity-40 cursor-default"
                        : "hover:text-white hover:bg-white/5"
                    )}
                    style={
                      isActive
                        ? {
                            color: CREAM,
                            background: `${GOLD}12`,
                            borderLeft: `2px solid ${GOLD}`,
                            paddingLeft: "10px",
                            boxShadow: `inset -2px 0 8px ${GOLD}15`,
                          }
                        : { color: "#6b6b9a" }
                    }
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span className="truncate">{item.label}</span>
                    {locked && (
                      <span
                        className="ml-auto text-[9px] font-bold uppercase tracking-wide px-1.5 py-0.5 rounded-full"
                        style={{ background: `${GOLD}15`, color: `${GOLD}80` }}
                      >
                        Pro
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          );
        })}

        {/* Upgrade CTA — only for free users */}
        {!hasPro && (
          <div className="mx-2 mt-3">
            <Link href="/pricing">
              <div
                className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer group transition-all duration-150"
                style={{
                  background: `${GOLD}12`,
                  border: `1px solid ${GOLD}30`,
                }}
              >
                <div className="flex items-center gap-2">
                  <Crown className="w-3.5 h-3.5" style={{ color: GOLD }} />
                  <span className="text-sm font-semibold" style={{ color: GOLD }}>
                    Upgrade to Pro
                  </span>
                </div>
                <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" style={{ color: `${GOLD}88` }} />
              </div>
            </Link>
          </div>
        )}
      </nav>

      {/* ── Quick stats footer ── */}
      <div
        className="px-4 py-2 flex-shrink-0 flex items-center justify-center gap-3"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
          🧠 {liveStats.memories !== null ? `${liveStats.memories} memories` : "— memories"}
        </span>
        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.10)" }}>·</span>
        <span className="text-[10px]" style={{ color: "rgba(255,255,255,0.25)" }}>
          ❤️ {liveStats.care !== null ? `${liveStats.care} care` : "— care"}
        </span>
      </div>

      {/* ── User footer ── */}
      <div
        className="px-4 py-3 flex-shrink-0"
        style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
      >
        <div className="flex items-center gap-3">
          {/* Avatar initials */}
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold"
            style={{ background: `${GOLD}22`, color: GOLD }}
          >
            {user?.emailAddresses[0]?.emailAddress?.charAt(0).toUpperCase() || "?"}
          </div>

          {/* Email + plan */}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white/80 truncate leading-tight">{user?.emailAddresses[0]?.emailAddress}</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span
                className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
                style={{ background: badge.bg, color: badge.text }}
              >
                {badge.label}
              </span>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={() => signOut()}
            className="p-1.5 rounded-lg transition-colors flex-shrink-0"
            style={{ color: "rgba(255,255,255,0.25)" }}
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* ── Desktop sidebar (md+): always visible, fixed left ── */}
      <aside
        className="hidden md:flex fixed left-0 top-0 h-full w-60 flex-col z-50 overflow-hidden"
        style={{ background: "#0d0c18", borderRight: "1px solid rgba(255,255,255,0.05)" }}
      >
        {sidebarContent}
      </aside>

      {/* ── Mobile: overlay + slide-in drawer ── */}
      {/* Dark overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside
        className="md:hidden fixed left-0 top-0 h-full w-72 flex flex-col z-50 overflow-hidden transition-transform duration-300 ease-in-out"
        style={{
          background: "#0d0c18",
          borderRight: "1px solid rgba(255,255,255,0.05)",
          transform: mobileOpen ? "translateX(0)" : "translateX(-100%)",
        }}
      >
        {/* Close button inside drawer */}
        <button
          onClick={() => setMobileOpen(false)}
          className="absolute top-4 right-4 z-10 p-1.5 rounded-lg"
          style={{ color: "rgba(255,255,255,0.35)" }}
          aria-label="Close menu"
        >
          <X className="w-4 h-4" />
        </button>
        {sidebarContent}
      </aside>

      {/* ── Mobile hamburger button ── */}
      <button
        onClick={() => setMobileOpen(true)}
        className="md:hidden fixed bottom-6 left-4 z-50 w-12 h-12 rounded-full flex items-center justify-center"
        style={{
          background: "#1a1929",
          border: "1px solid rgba(201,168,76,0.30)",
        }}
        aria-label="Open menu"
      >
        <Menu className="w-5 h-5" style={{ color: GOLD }} />
      </button>
    </>
  );
}
