"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Shield,
  Mail,
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  Info,
  Send,
} from "lucide-react";

// ─── BRAND TOKENS ─────────────────────────────────────────────────────────────

const DEEP = "#0a0a0f";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ─── TYPES ────────────────────────────────────────────────────────────────────

type Severity = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";

interface ScanResult {
  severity: Severity;
  scores: Record<string, number>;
  flagged: boolean;
  recommended_action: string;
  safe_to_deliver: boolean;
  confidence: number;
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

// ─── ACTION LABEL ─────────────────────────────────────────────────────────────

function actionLabel(action: string) {
  const labels: Record<string, string> = {
    none: "No action needed",
    monitor: "Monitor — low risk detected",
    warn_user: "Warn user — review recommended",
    block_and_alert: "Block and alert — immediate attention required",
  };
  return labels[action] || action;
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function EmailScannerPage() {
  const router = useRouter();
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setResult(null);
    setError(null);

    try {
      const res = await fetch("/api/guardian/scan-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, body }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Scan failed. Please try again.");
      } else {
        setResult(data as ScanResult);
      }
    } catch (err) {
      setError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const scoreEntries = result
    ? Object.entries(result.scores).filter(([, v]) => v > 0)
    : [];

  return (
    <div
      className="min-h-screen text-white overflow-x-hidden"
      style={{ background: DEEP, fontFamily: "'DM Sans', sans-serif" }}
    >
      <div className="max-w-3xl mx-auto px-5 py-10 space-y-8">
        {/* ─── HEADER ──────────────────────────────────────────────────────── */}
        <div className="flex items-center gap-3">
          <button type="button"
            onClick={() => router.push("/dashboard/guardian")}
            className="p-2 rounded-xl transition-all"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            aria-label="Back"
          >
            <ArrowLeft size={18} color={GOLD} />
          </button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Mail size={22} color={GOLD} />
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Email Scanner
              </h1>
            </div>
            <p className="text-sm text-white/40">
              Forward suspicious emails to Guardian for instant threat analysis
            </p>
          </div>
        </div>

        {/* ─── SCAN FORM ───────────────────────────────────────────────────── */}
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
              Forward to Guardian
            </span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="block text-xs font-bold text-white/50 mb-1.5">
                Subject
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Email subject line"
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] text-white placeholder:text-white/20 outline-none transition-all"
                style={{ border: `1px solid ${BORDER}` }}
                required
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-white/50 mb-1.5">
                Email Body
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Paste the full email body here..."
                rows={8}
                className="w-full px-4 py-3 rounded-xl bg-[#0a0a0f] text-white placeholder:text-white/20 outline-none transition-all resize-y"
                style={{ border: `1px solid ${BORDER}` }}
                required
              />
            </div>

            <div className="flex items-center justify-between gap-4 flex-wrap">
              <p className="text-xs text-white/30">
                Guardian scans for scams, grooming, self-harm signals, toxicity,
                and manipulation.
              </p>
              <button
                type="submit"
                disabled={loading || !subject.trim() || !body.trim()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                style={{
                  background: "rgba(201,168,76,0.15)",
                  border: "1px solid rgba(201,168,76,0.35)",
                  color: GOLD,
                }}
              >
                {loading ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/20 border-t-[#c9a84c] rounded-full animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    Forward to Guardian
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* ─── ERROR STATE ─────────────────────────────────────────────────── */}
        {error && (
          <div
            className="rounded-2xl p-5 flex items-start gap-3"
            style={{
              background: "rgba(239,68,68,0.08)",
              border: "1px solid rgba(239,68,68,0.25)",
            }}
          >
            <AlertTriangle size={18} color="#ef4444" className="flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-white/80">Scan failed</p>
              <p className="text-xs text-white/50 mt-0.5">{error}</p>
            </div>
          </div>
        )}

        {/* ─── RESULTS ─────────────────────────────────────────────────────── */}
        {result && (
          <div className="space-y-4">
            {/* Severity card */}
            <div
              className="rounded-2xl overflow-hidden"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              <div
                className="px-6 py-4 flex items-center gap-2"
                style={{ borderBottom: `1px solid ${BORDER}` }}
              >
                <Info size={16} color={GOLD} />
                <span className="text-sm font-black text-white">Scan Result</span>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <div>
                    <p className="text-xs text-white/40 mb-1">Severity</p>
                    <SeverityBadge severity={result.severity} />
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-white/40 mb-1">Confidence</p>
                    <p className="text-sm font-black text-white">
                      {Math.round(result.confidence * 100)}%
                    </p>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4"
                  style={{
                    background:
                      result.severity === "CRITICAL"
                        ? "rgba(239,68,68,0.08)"
                        : result.severity === "HIGH"
                        ? "rgba(249,115,22,0.08)"
                        : result.severity === "MEDIUM"
                        ? "rgba(251,191,36,0.08)"
                        : "rgba(74,222,128,0.08)",
                    border:
                      result.severity === "CRITICAL"
                        ? "1px solid rgba(239,68,68,0.2)"
                        : result.severity === "HIGH"
                        ? "1px solid rgba(249,115,22,0.2)"
                        : result.severity === "MEDIUM"
                        ? "1px solid rgba(251,191,36,0.2)"
                        : "1px solid rgba(74,222,128,0.2)",
                  }}
                >
                  <div className="flex items-start gap-3">
                    {result.safe_to_deliver ? (
                      <CheckCircle size={18} color="#4ade80" className="flex-shrink-0 mt-0.5" />
                    ) : (
                      <AlertTriangle size={18} color="#ef4444" className="flex-shrink-0 mt-0.5" />
                    )}
                    <div>
                      <p className="text-sm font-bold text-white/90">
                        {actionLabel(result.recommended_action)}
                      </p>
                      <p className="text-xs text-white/40 mt-0.5">
                        {result.safe_to_deliver
                          ? "Email considered safe to deliver."
                          : "Email flagged as unsafe — do not deliver."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scores breakdown */}
            {scoreEntries.length > 0 && (
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
                    Threat Breakdown
                  </span>
                </div>
                <div className="p-6 space-y-3">
                  {scoreEntries.map(([category, score]) => (
                    <div key={category} className="flex items-center gap-4">
                      <span className="text-xs text-white/60 w-28 capitalize">
                        {category.replace("_", " ")}
                      </span>
                      <div className="flex-1 h-2 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${Math.round(score * 100)}%`,
                            background:
                              score > 0.6
                                ? "#ef4444"
                                : score > 0.3
                                ? "#f97316"
                                : "#fbbf24",
                          }}
                        />
                      </div>
                      <span className="text-xs font-bold text-white/80 w-10 text-right">
                        {Math.round(score * 100)}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* ─── FOOTER LINK ─────────────────────────────────────────────────── */}
        <div className="flex justify-center">
          <Link
            href="/dashboard/guardian"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-white/40 hover:text-white/70 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Guardian Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
