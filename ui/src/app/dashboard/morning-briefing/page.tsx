"use client";

/**
 * Morning Briefing — Phase 4.11 Progressive Disclosure UX
 *
 * "The moment users realise: it wasn't sleeping, it was working for me."
 *
 * Translates the overnight dream cycle output into human-readable cards.
 * No AI jargon. Written for the person who's never heard of BFT or z_self.
 * Design principle: first win in 60 seconds.
 */

import { useEffect, useState } from "react";
import { mcp } from "@/lib/api";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Moon,
  Sunrise,
  Brain,
  ShieldCheck,
  Heart,
  Lightbulb,
  RefreshCw,
  Clock,
  TrendingUp,
  AlertCircle,
  Gamepad2,
} from "lucide-react";

interface BriefingSection {
  title: string;
  content: string;
  metadata?: Record<string, unknown>;
}

interface MorningBriefing {
  generated_at?: string;
  greeting?: string;
  sections?: BriefingSection[];
  one_line_summary?: string;
  next_suggested_action?: string;
  care_score_today?: number;
  alerts?: Array<{ level: string; message: string }>;
}

const SECTION_ICONS: Record<string, React.ElementType> = {
  dream: Moon,
  consciousness: Brain,
  learning: TrendingUp,
  alerts: AlertCircle,
  care: Heart,
  personal: Lightbulb,
  gaming: Gamepad2,
};

const SECTION_COLORS: Record<string, string> = {
  dream: "text-purple-400",
  consciousness: "text-cyan-400",
  learning: "text-green-400",
  alerts: "text-orange-400",
  care: "text-pink-400",
  personal: "text-yellow-400",
  gaming: "text-blue-400",
};

function humaniseKey(key: string): string {
  // Convert technical keys to plain English
  const map: Record<string, string> = {
    dream: "While you slept",
    consciousness: "System awareness",
    learning: "What was learned",
    alerts: "Things to know",
    care: "Care quality",
    personal: "For you today",
  };
  return map[key] || key;
}

function CareBar({ score }: { score: number }) {
  const pct = Math.round(score * 100);
  const color =
    pct >= 80 ? "bg-green-400" : pct >= 60 ? "bg-yellow-400" : "bg-orange-400";
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-700 ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-sm font-medium text-white/80 w-10 text-right">{pct}%</span>
    </div>
  );
}


// ── Gaming section — dedicated card with stat pills ─────────────────────────

function GamingCard({ section }: { section: BriefingSection }) {
  const meta = section.metadata ?? {};
  const sessionCount = meta.session_count as number | undefined;
  const totalMinutes = meta.total_minutes as number | undefined;
  const favouriteGame = meta.favourite_game as string | undefined;
  const insight = meta.insight as string | undefined;

  const hasStats = sessionCount !== undefined || totalMinutes !== undefined;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          <Gamepad2 className="w-4 h-4 text-blue-400" />
          <CardTitle>Gaming yesterday</CardTitle>
          {favouriteGame && (
            <Badge
              variant="outline"
              className="ml-auto text-xs text-blue-300 border-blue-500/30"
            >
              {favouriteGame}
            </Badge>
          )}
        </div>
      </CardHeader>

      {hasStats && (
        <div className="flex gap-2 flex-wrap mt-2">
          {sessionCount !== undefined && (
            <div className="text-xs bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-blue-300">
              {sessionCount} {sessionCount === 1 ? "session" : "sessions"}
            </div>
          )}
          {totalMinutes !== undefined && (
            <div className="text-xs bg-blue-500/10 border border-blue-500/20 rounded-full px-3 py-1 text-blue-300">
              {totalMinutes} min
            </div>
          )}
        </div>
      )}

      {section.content && (
        <p className="text-sm text-white/70 leading-relaxed mt-3">{section.content}</p>
      )}

      {insight && (
        <p className="text-xs text-white/40 italic mt-2 leading-relaxed">
          &ldquo;{insight}&rdquo;
        </p>
      )}

      {!hasStats && !section.content && (
        <p className="text-sm text-white/40 mt-2">No gaming sessions recorded yesterday.</p>
      )}
    </Card>
  );
}

export default function MorningBriefingPage() {
  const [briefing, setBriefing] = useState<MorningBriefing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [refreshing, setRefreshing] = useState(false);

  const load = async (showRefresh = false) => {
    if (showRefresh) setRefreshing(true);
    else setLoading(true);
    setError(null);
    try {
      const data = await mcp.get<MorningBriefing>("/api/morning-briefing");
      setBriefing(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not load briefing");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const formattedTime = briefing?.generated_at
    ? new Date(briefing.generated_at).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })
    : null;

  return (
    <div className="space-y-6 max-w-3xl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sunrise className="w-5 h-5 text-yellow-400" />
            <h2 className="text-2xl font-bold text-white">Morning Briefing</h2>
          </div>
          <p className="text-sm text-white/40">
            What MEOK worked on while you were away
            {formattedTime && (
              <span className="ml-2 text-white/25">
                <Clock className="inline w-3 h-3 mr-1" />
                Updated {formattedTime}
              </span>
            )}
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => load(true)}
          disabled={refreshing}
          className="gap-2"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? "animate-spin" : ""}`} />
          Refresh
        </Button>
      </div>

      {loading && (
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="h-28 rounded-xl bg-white/5 animate-pulse" />
          ))}
        </div>
      )}

      {error && (
        <Card>
          <div className="flex items-center gap-3 text-orange-400">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <div>
              <p className="font-medium">Briefing unavailable</p>
              <p className="text-sm text-white/50 mt-0.5">{error}</p>
            </div>
          </div>
        </Card>
      )}

      {briefing && !loading && (
        <>
          {/* One-line summary hero */}
          {briefing.one_line_summary && (
            <Card className="border-cyan-500/20 bg-cyan-500/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Brain className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-xs text-cyan-400/70 uppercase tracking-wider mb-1">
                    Summary
                  </p>
                  <p className="text-white font-medium leading-relaxed">
                    {briefing.one_line_summary}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Alerts strip */}
          {briefing.alerts && briefing.alerts.length > 0 && (
            <div className="space-y-2">
              {briefing.alerts.map((alert, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-2 px-4 py-3 rounded-lg text-sm ${
                    alert.level === "high"
                      ? "bg-red-500/10 border border-red-500/20 text-red-300"
                      : alert.level === "medium"
                      ? "bg-orange-500/10 border border-orange-500/20 text-orange-300"
                      : "bg-white/5 border border-white/10 text-white/60"
                  }`}
                >
                  <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{alert.message}</span>
                </div>
              ))}
            </div>
          )}

          {/* Care score */}
          {briefing.care_score_today !== undefined && (
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-pink-400" />
                  <CardTitle>Care quality today</CardTitle>
                </div>
              </CardHeader>
              <div className="mt-2">
                <CareBar score={briefing.care_score_today} />
                <p className="text-xs text-white/30 mt-2">
                  How well MEOK is aligned with your wellbeing right now
                </p>
              </div>
            </Card>
          )}

          {/* Sections — gaming gets dedicated card layout */}
          {briefing.sections?.map((section) => {
            const key = section.title?.toLowerCase().split(" ")[0] || "personal";

            if (key === "gaming") {
              return <GamingCard key={section.title} section={section} />;
            }

            const Icon = SECTION_ICONS[key] || Lightbulb;
            const color = SECTION_COLORS[key] || "text-white/60";
            return (
              <Card key={section.title}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Icon className={`w-4 h-4 ${color}`} />
                    <CardTitle>{humaniseKey(key)}</CardTitle>
                    {section.title && (
                      <Badge variant="outline" className="ml-auto text-xs">
                        {section.title}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <p className="text-sm text-white/70 leading-relaxed mt-2">
                  {section.content}
                </p>
                {section.metadata && Object.keys(section.metadata).length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {Object.entries(section.metadata)
                      .slice(0, 4)
                      .map(([k, v]) => (
                        <div
                          key={k}
                          className="text-xs bg-white/5 rounded px-2 py-1 text-white/40"
                        >
                          <span className="text-white/25">{k}: </span>
                          {String(v)}
                        </div>
                      ))}
                  </div>
                )}
              </Card>
            );
          })}

          {/* Next suggested action */}
          {briefing.next_suggested_action && (
            <Card className="border-green-500/20 bg-green-500/5">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ShieldCheck className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-xs text-green-400/70 uppercase tracking-wider mb-1">
                    Suggested next step
                  </p>
                  <p className="text-white/80 text-sm leading-relaxed">
                    {briefing.next_suggested_action}
                  </p>
                </div>
              </div>
            </Card>
          )}

          {/* Empty state — briefing is there but minimal content */}
          {!briefing.sections?.length && !briefing.one_line_summary && (
            <Card>
              <div className="text-center py-8">
                <Moon className="w-10 h-10 text-purple-400/40 mx-auto mb-3" />
                <p className="text-white/50 text-sm">
                  No overnight activity yet — briefing will appear after the first dream cycle
                  (runs every 15 minutes).
                </p>
              </div>
            </Card>
          )}
        </>
      )}
    </div>
  );
}
