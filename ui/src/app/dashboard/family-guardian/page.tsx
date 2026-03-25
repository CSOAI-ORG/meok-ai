"use client";

// Protected route — auth is enforced by the dashboard layout (AuthProvider + useAuth).

import { useEffect, useState, useCallback } from "react";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
  Activity,
  Calendar,
  ChevronRight,
} from "lucide-react";

// ── BRAND TOKENS ────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── TYPES ───────────────────────────────────────────────────────────────────

type Sensitivity = "low" | "medium" | "high";

interface GuardianAlert {
  id: string;
  type: string;
  risk_level: string;
  scam_type: string | null;
  total_score: number;
  signals_count: number;
  recommended_action: string;
  message_excerpt: string;
  created_at: string;
}

interface ProtectedMember {
  id: string;
  name: string;
  status: "active" | "idle";
  lastActive: string;
  alertCount: number;
}

// ── RISK BADGE ──────────────────────────────────────────────────────────────

function RiskBadge({ level }: { level: string }) {
  const map: Record<string, { bg: string; color: string }> = {
    safe: { bg: "rgba(74,222,128,0.15)", color: "#4ade80" },
    low: { bg: "rgba(113,113,122,0.2)", color: "#a1a1aa" },
    medium: { bg: "rgba(251,191,36,0.15)", color: "#fbbf24" },
    high: { bg: "rgba(249,115,22,0.15)", color: "#f97316" },
    critical: { bg: "rgba(239,68,68,0.15)", color: "#ef4444" },
  };
  const s = map[level] ?? map.low;
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black uppercase"
      style={{ background: s.bg, color: s.color }}
    >
      {level}
    </span>
  );
}

// ── SENSITIVITY SLIDER ──────────────────────────────────────────────────────

function SensitivitySlider({
  value,
  onChange,
}: {
  value: Sensitivity;
  onChange: (v: Sensitivity) => void;
}) {
  const levels: Sensitivity[] = ["low", "medium", "high"];
  const idx = levels.indexOf(value);

  const colors: Record<Sensitivity, string> = {
    low: "#4ade80",
    medium: "#fbbf24",
    high: "#f97316",
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-white/50 uppercase tracking-widest">
          Guardian Sensitivity
        </span>
        <span
          className="text-xs font-black uppercase"
          style={{ color: colors[value] }}
        >
          {value}
        </span>
      </div>
      <div className="flex gap-2">
        {levels.map((level, i) => (
          <button
            key={level}
            type="button"
            onClick={() => onChange(level)}
            className="flex-1 h-2 rounded-full transition-all"
            style={{
              background: i <= idx ? colors[value] : "rgba(255,255,255,0.08)",
            }}
          />
        ))}
      </div>
      <p className="text-xs text-white/30">
        {value === "low" && "Only flag critical threats. Fewer alerts, less interruption."}
        {value === "medium" && "Balanced monitoring. Flags medium, high, and critical risks."}
        {value === "high" && "Maximum protection. Flags all potential concerns including low-risk patterns."}
      </p>
    </div>
  );
}

// ── WEEKLY SUMMARY CARD ─────────────────────────────────────────────────────

function WeeklySummary() {
  // Mock data for now — will be replaced with real aggregation
  const stats = {
    messagesScanned: 342,
    threatsBlocked: 0,
    warningsShown: 2,
    safeConversations: 340,
  };

  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      <div
        className="px-6 py-4 flex items-center gap-2"
        style={{ borderBottom: `1px solid ${BORDER}` }}
      >
        <Calendar size={16} color={GOLD} />
        <span className="text-sm font-black text-white">Weekly Summary</span>
        <span className="text-xs text-white/25 ml-auto">Last 7 days</span>
      </div>

      <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: "Messages scanned", value: stats.messagesScanned, color: "#a78bfa" },
          { label: "Threats blocked", value: stats.threatsBlocked, color: "#ef4444" },
          { label: "Warnings shown", value: stats.warningsShown, color: "#fbbf24" },
          { label: "Safe conversations", value: stats.safeConversations, color: "#4ade80" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-xl p-4"
            style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
          >
            <p
              className="text-2xl font-black"
              style={{ color: s.color }}
            >
              {s.value}
            </p>
            <p className="text-xs text-white/35 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── PAGE ─────────────────────────────────────────────────────────────────────

export default function FamilyGuardianPage() {
  const [alerts, setAlerts] = useState<GuardianAlert[]>([]);
  const [loading, setLoading] = useState(true);
  const [sensitivity, setSensitivity] = useState<Sensitivity>("medium");

  // Current user as placeholder protected member
  const [members] = useState<ProtectedMember[]>([
    {
      id: "self",
      name: "You",
      status: "active",
      lastActive: new Date().toISOString(),
      alertCount: 0,
    },
  ]);

  // Fetch guardian alerts on mount
  useEffect(() => {
    fetch("/api/user/guardian")
      .then((r) => r.json())
      .then((data) => {
        if (data.alerts && Array.isArray(data.alerts)) {
          setAlerts(data.alerts);
        }
      })
      .catch((e) => console.error("Failed to load guardian alerts:", e))
      .finally(() => setLoading(false));
  }, []);

  const saveSensitivity = useCallback(async (level: Sensitivity) => {
    setSensitivity(level);
    try {
      await fetch("/api/user/guardian", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guardian_enabled: true,
          settings: {
            threat_threshold: level === "high" ? 0.2 : level === "medium" ? 0.5 : 0.85,
          },
        }),
      });
    } catch (e) {
      console.error("Failed to save sensitivity:", e);
    }
  }, []);

  const hasAlerts = alerts.length > 0;

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: DEEP, fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-5 py-10 space-y-8">

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Shield size={22} color={GOLD} />
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Family Guardian
              </h1>
            </div>
            <p className="text-sm text-white/40">
              Protect your family with AI-powered safety monitoring
            </p>
          </div>
        </div>

        {/* ── PROTECTED MEMBERS ───────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 flex items-center gap-2"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <Users size={16} color={GOLD} />
            <span className="text-sm font-black text-white">Protected Members</span>
          </div>

          <div className="p-6 space-y-3">
            {members.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{ background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(201,168,76,0.12)", border: `1px solid rgba(201,168,76,0.25)` }}
                >
                  <span className="text-sm font-black" style={{ color: GOLD }}>
                    {member.name[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white/90">{member.name}</p>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ background: member.status === "active" ? "#4ade80" : "#52525b" }}
                    />
                    <span className="text-xs text-white/30">
                      {member.status === "active" ? "Active" : "Idle"}
                    </span>
                  </div>
                  <p className="text-xs text-white/30 mt-0.5">
                    {member.alertCount === 0
                      ? "No alerts"
                      : `${member.alertCount} alert${member.alertCount !== 1 ? "s" : ""}`}
                  </p>
                </div>
                <ChevronRight size={16} className="text-white/20" />
              </div>
            ))}
          </div>
        </div>

        {/* ── SENSITIVITY SLIDER ──────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-6"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <SensitivitySlider value={sensitivity} onChange={saveSensitivity} />
        </div>

        {/* ── WEEKLY SUMMARY ──────────────────────────────────────────────── */}
        <WeeklySummary />

        {/* ── ALERT HISTORY FEED ──────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 flex items-center justify-between gap-2"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-2">
              <Activity size={16} color={GOLD} />
              <span className="text-sm font-black text-white">Alert History</span>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
              style={
                !hasAlerts
                  ? { background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80" }
                  : { background: "rgba(251,191,36,0.10)", border: "1px solid rgba(251,191,36,0.25)", color: "#fbbf24" }
              }
            >
              {loading ? (
                "Loading..."
              ) : !hasAlerts ? (
                <>
                  <CheckCircle size={11} />
                  All clear
                </>
              ) : (
                <>
                  <AlertTriangle size={11} />
                  {alerts.length} alert{alerts.length !== 1 ? "s" : ""}
                </>
              )}
            </span>
          </div>

          {!hasAlerts ? (
            <div className="px-6 py-12 text-center">
              <Shield
                size={36}
                color={GOLD}
                className="mx-auto mb-4 opacity-40"
              />
              <p className="text-sm font-bold text-white/50 mb-1">
                Set up Guardian to protect your family
              </p>
              <p className="text-xs text-white/25 max-w-sm mx-auto leading-relaxed">
                When Guardian detects scam attempts, cognitive decline indicators,
                or other safety concerns, alerts will appear here.
              </p>
            </div>
          ) : (
            <div className="divide-y" style={{ borderColor: BORDER }}>
              {alerts.map((alert) => (
                <div key={alert.id} className="px-6 py-4 flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <AlertTriangle
                      size={14}
                      style={{
                        color:
                          alert.risk_level === "critical"
                            ? "#ef4444"
                            : alert.risk_level === "high"
                            ? "#f97316"
                            : "#fbbf24",
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <RiskBadge level={alert.risk_level} />
                      {alert.scam_type && (
                        <span className="text-xs text-white/40">
                          {alert.scam_type.replace(/_/g, " ")}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed">
                      {alert.message_excerpt}
                    </p>
                    <p className="text-xs text-white/20 mt-1 font-mono">
                      {new Date(alert.created_at).toLocaleString()}
                    </p>
                  </div>
                  <span className="text-xs text-white/20 flex-shrink-0">
                    {alert.recommended_action.replace(/_/g, " ")}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
