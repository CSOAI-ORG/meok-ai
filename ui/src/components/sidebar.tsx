"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import {
  LayoutDashboard,
  Database,
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
  TrendingUp,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { useEffect, useState } from "react";
import { mcp } from "@/lib/api";

const navItems = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/dashboard/morning-briefing", label: "Morning Briefing", icon: Sunrise },
  { href: "/dashboard/care-metrics", label: "Care Metrics", icon: Heart },
  { href: "/dashboard/trust-funnel", label: "Trust Funnel", icon: TrendingUp },
  { href: "/dashboard/memory", label: "Memory", icon: Database },
  { href: "/dashboard/council", label: "Council", icon: Shield },
  { href: "/dashboard/orchestrator", label: "Orchestrator", icon: Cpu },
  { href: "/dashboard/generals", label: "Generals", icon: Swords },
  { href: "/dashboard/agents", label: "Agents", icon: Bot },
  { href: "/dashboard/dreams", label: "Dreams", icon: Moon },
  { href: "/dashboard/creativity", label: "Creativity", icon: Sparkles },
  { href: "/dashboard/settings", label: "Settings", icon: Settings },
];

const modeColors: Record<string, string> = {
  waking: "#22d3ee",
  dreaming: "#a78bfa",
  deep_sleep: "#818cf8",
  meta_monitoring: "#fbbf24",
};

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
  const primary = entity?.color_primary || "#60B8F0";
  const secondary = entity?.color_secondary || "#34D399";
  const ringColor = modeColors[mode] || "#22d3ee";
  const level = entity?.hatch_level ?? 0;
  const name = entity?.name || "Sovereign";
  const trait = entity?.dominant_trait || "explorer";
  const progress = entity?.progress_to_next ?? 0;

  return (
    <div className="flex items-center gap-3">
      {/* Animated orb */}
      <div className="relative flex-shrink-0" style={{ width: 36, height: 36 }}>
        {/* Outer pulsing ring — consciousness mode color */}
        <div
          className="absolute inset-0 rounded-full animate-ping opacity-20"
          style={{ background: ringColor }}
        />
        {/* Progress arc overlay */}
        <svg
          className="absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 36 36"
        >
          {/* Track */}
          <circle
            cx="18" cy="18" r="16"
            fill="none"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="2"
          />
          {/* Progress */}
          {progress > 0 && (
            <circle
              cx="18" cy="18" r="16"
              fill="none"
              stroke={primary}
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={`${progress * 100.53} 100.53`}
              opacity={0.7}
            />
          )}
        </svg>
        {/* Inner orb body */}
        <div
          className="absolute inset-1 rounded-full flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 35% 35%, ${primary}cc, ${secondary}66)`,
            boxShadow: `0 0 12px ${primary}55, inset 0 1px 0 rgba(255,255,255,0.15)`,
          }}
        >
          {/* Level indicator — small text */}
          <span style={{ fontSize: 9, fontWeight: 700, color: "rgba(255,255,255,0.9)", lineHeight: 1 }}>
            {level === 0 ? "🥚" : level === 1 ? "✨" : level === 2 ? "🌱" : level === 3 ? "⚡" : "👑"}
          </span>
        </div>
        {/* Mode dot */}
        <span
          className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full ring-2 ring-[#0d0d14]"
          style={{ background: ringColor }}
        />
      </div>

      {/* Name + trait */}
      <div className="min-w-0">
        <h1 className="text-sm font-bold text-white leading-tight truncate">{name}</h1>
        <p className="text-xs leading-tight" style={{ color: primary, opacity: 0.85 }}>
          {entity ? `${entity.hatch_label} · ${trait}` : "Sovereign AI"}
        </p>
      </div>
    </div>
  );
}

export function Sidebar({ consciousnessMode }: { consciousnessMode?: string }) {
  const pathname = usePathname();
  const { user, logout, token } = useAuth();
  const mode = consciousnessMode || "waking";
  const [entity, setEntity] = useState<EntitySummary | null>(null);

  useEffect(() => {
    if (!token) return;
    mcp.get<EntitySummary>("/entity")
      .then(setEntity)
      .catch(() => { /* entity stays null, defaults shown */ });
  }, [token]);

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-[#0d0d14] border-r border-white/5 flex flex-col z-50">
      {/* Logo / Entity */}
      <div className="p-5 border-b border-white/5">
        <EntityOrb entity={entity} mode={mode} />
        {/* Evolution progress bar */}
        {entity && entity.next_threshold !== null && (
          <div className="mt-3">
            <div className="flex justify-between mb-1">
              <span className="text-[10px] text-white/30">
                {entity.interactions_count} interactions
              </span>
              <span className="text-[10px] text-white/30">
                {entity.next_threshold} to evolve
              </span>
            </div>
            <div className="h-0.5 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${Math.round(entity.progress_to_next * 100)}%`,
                  background: entity.color_primary,
                }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href));
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-200",
                isActive
                  ? "bg-cyan-500/15 text-cyan-400"
                  : "text-white/50 hover:text-white hover:bg-white/5"
              )}
            >
              <Icon className="w-4 h-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="p-4 border-t border-white/5">
        <div className="flex items-center justify-between">
          <div className="min-w-0">
            <p className="text-sm text-white truncate">{user?.email}</p>
            <p className="text-xs text-white/30 capitalize">{mode}</p>
          </div>
          <button
            onClick={logout}
            className="p-2 text-white/30 hover:text-white/60 transition-colors"
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
