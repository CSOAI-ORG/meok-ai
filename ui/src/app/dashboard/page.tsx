"use client";

import { useEffect, useState } from "react";
import { mcp, callTool } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ConsciousnessRadar } from "@/components/consciousness-radar";
import { StatsGrid } from "@/components/stats-grid";
import { QuickChat } from "@/components/quick-chat";
import type { ConsciousnessState, MemoryStats } from "@/lib/types";
import Link from "next/link";
import { Sunrise, ChevronRight, Moon, Brain } from "lucide-react";

interface MorningBriefingPreview {
  one_line_summary?: string;
  care_score_today?: number;
  generated_at?: string;
}

interface PlanInfo {
  plan: string;
  plan_name: string;
  status: string;
  next_billing: string | null;
  upgrade_url?: string;
}

export default function DashboardOverview() {
  const [consciousness, setConsciousness] = useState<ConsciousnessState | null>(null);
  const [memStats, setMemStats] = useState<MemoryStats | null>(null);
  const [toolCount, setToolCount] = useState(0);
  const [briefing, setBriefing] = useState<MorningBriefingPreview | null>(null);
  const [plan, setPlan] = useState<PlanInfo | null>(null);

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
      } catch (e) {
        console.error("Dashboard load error:", e);
      }
    };

    // Load morning briefing preview separately (non-blocking)
    const loadBriefing = async () => {
      try {
        const data = await mcp.get<MorningBriefingPreview>("/api/morning-briefing");
        setBriefing(data);
      } catch {
        // Briefing not available — don't surface error on main dashboard
      }
    };

    const loadPlan = async () => {
      try {
        const res = await fetch('/api/billing/status')
        if (res.ok) {
          const data = await res.json()
          setPlan(data)
        } else {
          throw new Error('billing fetch failed')
        }
      } catch {
        setPlan({ plan: 'explorer', plan_name: 'Explorer', status: 'active', next_billing: null })
      }
    };

    load();
    loadBriefing();
    loadPlan();
    const id = setInterval(load, 15000);
    return () => clearInterval(id);
  }, []);

  // Human-readable consciousness label
  const consciousnessLabel = () => {
    const level = consciousness?.consciousness_level || 0;
    const mode = consciousness?.consciousness_mode || "waking";
    if (mode === "dreaming") return "Dreaming — processing overnight";
    if (mode === "deep_sleep") return "Deep rest";
    if (mode === "meta_monitoring") return "Reflecting";
    if (level >= 0.7) return "Focused and ready";
    if (level >= 0.4) return "Warming up";
    return "Starting up";
  };

  const stats = [
    {
      label: "Memories stored",
      value: memStats?.total_episodes || 0,
      sub: memStats ? `${Object.keys(memStats.by_type || {}).length} types` : undefined,
      color: "text-cyan-400",
    },
    {
      label: "AI models active",
      value: toolCount,
      sub: "All trained",
      color: "text-purple-400",
    },
    {
      label: "System state",
      value: consciousness ? `${(consciousness.consciousness_level * 100).toFixed(0)}%` : "—",
      sub: consciousnessLabel(),
      color: "text-yellow-400",
    },
    {
      label: "Care score",
      value: consciousness ? `${(consciousness.emotional.care_intensity * 100).toFixed(0)}%` : "—",
      sub: "How aligned MEOK is with you",
      color: "text-green-400",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-white">Good to have you back</h2>
        <p className="text-sm text-white/40 mt-1">MEOK has been working while you were away</p>
      </div>

      {/* Morning briefing preview strip */}
      {briefing?.one_line_summary && (
        <Link href="/dashboard/morning-briefing">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-yellow-400/5 border border-yellow-400/15 hover:border-yellow-400/30 transition-all group cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center flex-shrink-0">
              <Sunrise className="w-4 h-4 text-yellow-400" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-yellow-400/60 uppercase tracking-wider mb-0.5">
                Overnight briefing
              </p>
              <p className="text-sm text-white/70 truncate">{briefing.one_line_summary}</p>
            </div>
            <ChevronRight className="w-4 h-4 text-white/20 group-hover:text-white/50 transition-colors flex-shrink-0" />
          </div>
        </Link>
      )}

      <StatsGrid stats={stats} />

      {/* Quick chat — first win in 60 seconds */}
      <Card>
        <CardHeader>
          <CardTitle>Ask MEOK anything</CardTitle>
          <p className="text-xs text-white/30 mt-0.5">Get a thoughtful response in seconds</p>
        </CardHeader>
        <div className="mt-2">
          <QuickChat />
        </div>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Brain className="w-4 h-4 text-cyan-400" />
              <CardTitle>System awareness</CardTitle>
            </div>
          </CardHeader>
          <ConsciousnessRadar
            emotional={consciousness?.emotional || null}
            mode={consciousness?.consciousness_mode || "waking"}
            level={consciousness?.consciousness_level || 0}
          />
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Moon className="w-4 h-4 text-purple-400" />
              <CardTitle>Memory themes</CardTitle>
            </div>
          </CardHeader>
          {memStats?.top_tags ? (
            <div className="space-y-2 mt-1">
              {Object.entries(memStats.top_tags)
                .slice(0, 8)
                .map(([tag, count]) => (
                  <div key={tag} className="flex items-center justify-between">
                    <span className="text-sm text-white/60 capitalize">
                      {tag.replace(/_/g, " ")}
                    </span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-cyan-500/50 rounded-full"
                          style={{
                            width: `${(count / Math.max(...Object.values(memStats.top_tags))) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="text-xs text-white/30 w-6 text-right">{count}</span>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-white/30 text-sm mt-1">Loading...</p>
          )}
        </Card>
      </div>

      {/* Emotional summary — human framing */}
      {consciousness?.emotional_summary && (
        <Card>
          <CardHeader>
            <CardTitle>How MEOK is doing</CardTitle>
          </CardHeader>
          <div className="grid grid-cols-3 gap-4 text-sm mt-2">
            <div>
              <p className="text-white/40 text-xs mb-1">Emotional trend</p>
              <p className="text-white capitalize">
                {consciousness.emotional_summary.trend?.replace(/_/g, " ") || "—"}
              </p>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-1">Stability</p>
              <p className="text-white">
                {(consciousness.emotional_summary.emotional_stability * 100).toFixed(0)}%
              </p>
            </div>
            <div>
              <p className="text-white/40 text-xs mb-1">Reflections · Dreams</p>
              <p className="text-white">
                {consciousness.reflections} · {consciousness.dreams}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* Plan card */}
      {plan && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>Your plan</CardTitle>
              <span
                className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  plan.plan === 'elite'
                    ? 'bg-purple-500/20 text-purple-300'
                    : plan.plan === 'sovereign'
                    ? 'bg-cyan-500/20 text-cyan-300'
                    : 'bg-white/10 text-white/50'
                }`}
              >
                {plan.plan_name}
              </span>
            </div>
          </CardHeader>
          <div className="mt-2 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-white/40">Status</span>
              <span className="text-white capitalize">{plan.status}</span>
            </div>
            {plan.plan === 'explorer' ? (
              <Link href="/#pricing">
                <button className="mt-1 px-4 py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm font-medium transition-colors">
                  Upgrade to Sovereign
                </button>
              </Link>
            ) : (
              plan.next_billing && (
                <div className="flex items-center gap-2">
                  <span className="text-white/40">Next billing</span>
                  <span className="text-white">{new Date(plan.next_billing).toLocaleDateString()}</span>
                  <Link href="/dashboard/billing" className="ml-auto text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                    Manage
                  </Link>
                </div>
              )
            )}
          </div>
        </Card>
      )}
    </div>
  );
}
