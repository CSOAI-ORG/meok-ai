"use client";

// Protected route — auth is enforced by the dashboard layout (AuthProvider + useAuth).
// This page is only reachable when the user is authenticated.

import { useEffect, useState } from "react";
import { callTool } from "@/lib/api";
import Link from "next/link";
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Users,
  Bell,
  Mail,
  Smartphone,
  MessageSquare,
  Brain,
  Baby,
  UserPlus,
} from "lucide-react";

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

interface AlertRow {
  id: string;
  time: string;
  severity: Severity;
  type: string;
  action: string;
}

// ─── SEVERITY BADGE ───────────────────────────────────────────────────────────

function SeverityBadge({ severity }: { severity: Severity }) {
  const map: Record<Severity, { bg: string; color: string }> = {
    LOW: { bg: "rgba(113,113,122,0.2)", color: "#a1a1aa" },
    MEDIUM: { bg: "rgba(251,191,36,0.15)", color: "#fbbf24" },
    HIGH: { bg: "rgba(249,115,22,0.15)", color: "#f97316" },
    CRITICAL: { bg: "rgba(239,68,68,0.15)", color: "#ef4444" },
  };
  const s = map[severity];
  return (
    <span
      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-black"
      style={{ background: s.bg, color: s.color }}
    >
      {severity}
    </span>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────────

const FALLBACK_ALERTS: AlertRow[] = [];

const PROTECTIONS: {
  icon: React.ElementType;
  label: string;
  description: string;
  active: boolean;
  iconColor: string;
}[] = [
  {
    icon: Shield,
    label: "ScamStop",
    description: "Real-time fraud detection across 15 scam pattern categories.",
    active: true,
    iconColor: GOLD,
  },
  {
    icon: AlertTriangle,
    label: "Relationship Shield",
    description: "Coercive control and manipulation pattern detection.",
    active: true,
    iconColor: "#f87171",
  },
  {
    icon: Brain,
    label: "Social Guardian",
    description: "Literal language mode and social support for neurodivergent users.",
    active: true,
    iconColor: "#a78bfa",
  },
  {
    icon: Baby,
    label: "School-Safe Mode",
    description: "Children's Code compliant content controls. No adult content.",
    active: false,
    iconColor: "#60a5fa",
  },
];

// ─── PAGE ──────────────────────────────────────────────────────────────────────

export default function GuardianDashboardPage() {
  const [alerts, setAlerts] = useState<AlertRow[]>(FALLBACK_ALERTS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    callTool<{ alerts?: Array<{ id?: string; time?: string; severity?: string; type?: string; action?: string; message?: string; level?: string }> }>("get_active_alerts")
      .then((res) => {
        const mapped: AlertRow[] = (res.alerts ?? []).map((a, i) => ({
          id: a.id ?? `alert-${i}`,
          time: a.time ?? new Date().toISOString(),
          severity: ((a.severity ?? a.level ?? "LOW").toUpperCase() as Severity),
          type: a.type ?? "system",
          action: a.action ?? a.message ?? "Detected",
        }));
        setAlerts(mapped);
      })
      .catch((e) => {
        console.error("get_active_alerts failed:", e);
        setAlerts(FALLBACK_ALERTS);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: DEEP, fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-5xl mx-auto px-5 py-10 space-y-8">

        {/* ─── HEADER ──────────────────────────────────────────────────────── */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Shield size={22} color={GOLD} />
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Guardian Dashboard
              </h1>
            </div>
            <p className="text-sm text-white/40">
              Guardian Control Panel — your protection at a glance
            </p>
          </div>
        </div>

        {/* ─── 1. ALERT HISTORY ────────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 flex items-center justify-between gap-2"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <div className="flex items-center gap-2">
              <AlertTriangle size={16} color={GOLD} />
              <span className="text-sm font-black text-white">Alert History</span>
            </div>
            <span
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold"
              style={
                alerts.length === 0
                  ? { background: "rgba(74,222,128,0.10)", border: "1px solid rgba(74,222,128,0.25)", color: "#4ade80" }
                  : { background: "rgba(251,191,36,0.10)", border: "1px solid rgba(251,191,36,0.25)", color: "#fbbf24" }
              }
            >
              {alerts.length === 0 ? (
                <>
                  <CheckCircle size={11} />
                  {loading ? "Loading alerts..." : "No alerts in the last 30 days"}
                </>
              ) : (
                <>
                  <AlertTriangle size={11} />
                  {alerts.length} alert{alerts.length !== 1 ? "s" : ""}
                </>
              )}
            </span>
          </div>

          {alerts.length === 0 ? (
            <div className="px-6 py-10 text-center">
              <CheckCircle
                size={32}
                color="#4ade80"
                className="mx-auto mb-3 opacity-60"
              />
              <p className="text-sm font-bold text-white/50">
                No alerts in the last 30 days
              </p>
              <p className="text-xs text-white/25 mt-1">
                Guardian is active and monitoring. Nothing suspicious detected.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr
                    style={{
                      borderBottom: `1px solid ${BORDER}`,
                      background: "rgba(255,255,255,0.02)",
                    }}
                  >
                    {["Time", "Severity", "Type", "Action Taken"].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3 font-bold text-white/30 uppercase tracking-widest"
                        style={{ fontSize: "10px" }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {alerts.map((row, i) => (
                    <tr
                      key={row.id}
                      style={{
                        borderBottom:
                          i < alerts.length - 1
                            ? `1px solid ${BORDER}`
                            : "none",
                      }}
                    >
                      <td className="px-5 py-3 text-white/45 font-mono whitespace-nowrap">
                        {row.time}
                      </td>
                      <td className="px-5 py-3">
                        <SeverityBadge severity={row.severity} />
                      </td>
                      <td className="px-5 py-3 text-white/70">{row.type}</td>
                      <td className="px-5 py-3 text-white/45">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* ─── 2. ACTIVE PROTECTIONS ───────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 flex items-center gap-2"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <Shield size={16} color={GOLD} />
            <span className="text-sm font-black text-white">
              Active Protections
            </span>
          </div>

          <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {PROTECTIONS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.label}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{
                    background: p.active
                      ? `${p.iconColor}0d`
                      : "rgba(255,255,255,0.02)",
                    border: `1px solid ${p.active ? `${p.iconColor}25` : BORDER}`,
                  }}
                >
                  {/* Status dot */}
                  <div className="flex-shrink-0 mt-1">
                    <span
                      className={`block w-2.5 h-2.5 rounded-full ${
                        p.active ? "animate-pulse" : ""
                      }`}
                      style={{
                        background: p.active ? "#4ade80" : "#52525b",
                      }}
                    />
                  </div>

                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: p.active
                        ? `${p.iconColor}18`
                        : "rgba(255,255,255,0.04)",
                      border: `1px solid ${p.active ? `${p.iconColor}30` : BORDER}`,
                    }}
                  >
                    <Icon
                      size={16}
                      style={{ color: p.active ? p.iconColor : "#52525b" }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <p className="text-sm font-black text-white/90">
                        {p.label}
                      </p>
                      <span
                        className="text-[10px] font-black uppercase tracking-wide"
                        style={{ color: p.active ? "#4ade80" : "#52525b" }}
                      >
                        {p.active ? "Active" : "Inactive"}
                      </span>
                    </div>
                    <p className="text-xs text-white/40 leading-snug">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── 3. FAMILY CIRCLE ────────────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 flex items-center gap-2"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <Users size={16} color={GOLD} />
            <span className="text-sm font-black text-white">Family Circle</span>
          </div>

          <div className="px-6 py-6">
            <p className="text-sm text-white/55 leading-relaxed mb-6">
              Add trusted family members who receive HIGH and CRITICAL alerts.
              They will be notified immediately when Guardian detects a serious
              threat — without seeing your private data.
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all"
              style={{
                background: "rgba(201,168,76,0.10)",
                border: "1px solid rgba(201,168,76,0.25)",
                color: GOLD,
              }}
            >
              <UserPlus size={15} />
              Add Member
            </button>

            <p className="text-xs text-white/25 mt-4 font-mono">
              Family members only receive alerts at HIGH or CRITICAL severity ·
              They cannot see LOW or MEDIUM alerts
            </p>
          </div>
        </div>

        {/* ─── 4. NOTIFICATION SETTINGS ────────────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          <div
            className="px-6 py-4 flex items-center gap-2"
            style={{ borderBottom: `1px solid ${BORDER}` }}
          >
            <Bell size={16} color={GOLD} />
            <span className="text-sm font-black text-white">
              Notification Settings
            </span>
          </div>

          <div className="p-6 space-y-4">
            {[
              {
                icon: Mail,
                label: "Email alerts",
                desc: "Receive alert summaries by email",
                checked: true,
              },
              {
                icon: Smartphone,
                label: "SMS alerts",
                desc: "Text message for HIGH and CRITICAL only",
                checked: false,
                locked: true,
              },
              {
                icon: Bell,
                label: "Push notifications",
                desc: "Browser and mobile push for all alerts",
                checked: true,
              },
              {
                icon: MessageSquare,
                label: "In-app only",
                desc: "Alerts visible only inside the MEOK dashboard",
                checked: false,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <label
                  key={item.label}
                  className="flex items-start gap-4 cursor-pointer group"
                >
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    disabled={item.locked}
                    className="mt-0.5 w-4 h-4 rounded accent-[#c9a84c] flex-shrink-0"
                  />
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{
                      background: item.locked
                        ? "rgba(255,255,255,0.03)"
                        : "rgba(201,168,76,0.10)",
                      border: `1px solid ${item.locked ? BORDER : "rgba(201,168,76,0.2)"}`,
                    }}
                  >
                    <Icon
                      size={15}
                      style={{
                        color: item.locked ? "#52525b" : GOLD,
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <p
                        className="text-sm font-bold"
                        style={{
                          color: item.locked
                            ? "rgba(255,255,255,0.25)"
                            : "rgba(255,255,255,0.85)",
                        }}
                      >
                        {item.label}
                      </p>
                      {item.locked && (
                        <span
                          className="text-[10px] font-black uppercase tracking-wide px-1.5 py-0.5 rounded"
                          style={{
                            background: "rgba(201,168,76,0.10)",
                            color: GOLD,
                            border: "1px solid rgba(201,168,76,0.2)",
                          }}
                        >
                          Upgrade
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-white/30 mt-0.5">{item.desc}</p>
                  </div>
                </label>
              );
            })}
          </div>
        </div>

        {/* ─── UPGRADE NUDGE ───────────────────────────────────────────────── */}
        <div
          className="rounded-2xl p-5 flex items-start justify-between gap-4 flex-wrap"
          style={{
            background: "rgba(201,168,76,0.05)",
            border: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <div className="flex items-start gap-3">
            <Shield size={14} color={GOLD} className="flex-shrink-0 mt-0.5" />
            <p className="text-xs text-white/50 leading-relaxed">
              <span className="text-[#c9a84c] font-bold">
                Guardian is part of your Sovereign plan.{" "}
              </span>
              Upgrade to activate SMS alerts and expand your Family Circle to up
              to 10 members.
            </p>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all flex-shrink-0"
            style={{
              background: "rgba(201,168,76,0.12)",
              border: "1px solid rgba(201,168,76,0.25)",
              color: GOLD,
            }}
          >
            View pricing →
          </Link>
        </div>

      </div>
    </div>
  );
}
