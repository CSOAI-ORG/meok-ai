"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  AlertTriangle,
  CheckCircle2,
  Clock,
  XCircle,
  TrendingUp,
  TrendingDown,
  Minus,
  Heart,
  HandHeart,
  Scan,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Loader2,
  Plus,
  Trash2,
} from "lucide-react";

// ─── Brand Tokens ────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";
const TEXT = "#e2e0e8";
const MUTED = "rgba(226,224,232,0.55)";

// ─── Types ───────────────────────────────────────────────────────────────────
type RiskLevel = "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
type PromiseStatus = "pending" | "kept" | "broken";
type ContribType = "emotional" | "practical" | "financial";

interface ScanResult {
  id: string;
  timestamp: number;
  message: string;
  riskLevel: RiskLevel;
  patterns: string[];
  confidence: number;
  source: "api" | "client";
}

interface PromiseEntry {
  id: string;
  text: string;
  date: string;
  deadline: string;
  status: PromiseStatus;
}

interface ContribEntry {
  id: string;
  date: string;
  type: ContribType;
  description: string;
  direction: "you" | "them";
}

// ─── Client-side keyword detection fallback ──────────────────────────────────
const RELATIONSHIP_PATTERNS: Record<string, string[]> = {
  gaslighting: [
    "you're imagining",
    "that never happened",
    "you're too sensitive",
    "you're crazy",
    "you made that up",
    "you always exaggerate",
    "you're overreacting",
    "i never said that",
  ],
  isolation: [
    "your friends are bad",
    "they don't care about you",
    "you don't need them",
    "stop seeing",
    "don't talk to",
    "stay away from",
    "they're jealous",
    "cancel on",
    "don't go",
  ],
  "love-bombing": [
    "you're the only one",
    "i've never felt this way",
    "soulmate",
    "move in",
    "marry me",
    "i love you so much",
    "perfect",
    "you complete me",
    "can't live without you",
  ],
  coercion: [
    "you have to",
    "you owe me",
    "or else",
    "you better",
    "i'll hurt myself",
    "i'll leave",
    "if you loved me",
    "you made me",
    "you don't have a choice",
  ],
  manipulation: [
    "nobody else will",
    "you're lucky to have me",
    "after everything i've done",
    "you always do this",
    "you never",
    "it's your fault",
    "stop being dramatic",
    "i was just joking",
  ],
};

function clientSideScan(text: string): Omit<ScanResult, "id" | "timestamp" | "message"> {
  const lower = text.toLowerCase();
  const found: string[] = [];

  for (const [pattern, keywords] of Object.entries(RELATIONSHIP_PATTERNS)) {
    const hits = keywords.filter((kw) => lower.includes(kw));
    if (hits.length > 0) found.push(pattern);
  }

  const totalPatterns = Object.keys(RELATIONSHIP_PATTERNS).length;
  const confidence = Math.min(found.length / totalPatterns + 0.1, 1.0);

  let riskLevel: RiskLevel = "LOW";
  if (found.length >= 3) riskLevel = "CRITICAL";
  else if (found.length === 2) riskLevel = "HIGH";
  else if (found.length === 1) riskLevel = "MEDIUM";

  return { riskLevel, patterns: found, confidence, source: "client" };
}

// ─── Helpers ─────────────────────────────────────────────────────────────────
const uid = () => Math.random().toString(36).slice(2, 10);
const today = () => new Date().toISOString().slice(0, 10);

const RISK_COLOR: Record<RiskLevel, string> = {
  LOW: "#22c55e",
  MEDIUM: "#eab308",
  HIGH: "#f97316",
  CRITICAL: "#ef4444",
};

const RISK_BG: Record<RiskLevel, string> = {
  LOW: "rgba(34,197,94,0.08)",
  MEDIUM: "rgba(234,179,8,0.08)",
  HIGH: "rgba(249,115,22,0.08)",
  CRITICAL: "rgba(239,68,68,0.08)",
};

const RISK_BORDER: Record<RiskLevel, string> = {
  LOW: "rgba(34,197,94,0.25)",
  MEDIUM: "rgba(234,179,8,0.25)",
  HIGH: "rgba(249,115,22,0.25)",
  CRITICAL: "rgba(239,68,68,0.25)",
};

function riskLabel(level: RiskLevel) {
  const map: Record<RiskLevel, string> = {
    LOW: "Low Risk",
    MEDIUM: "Some Concern",
    HIGH: "High Concern",
    CRITICAL: "Serious Red Flag",
  };
  return map[level];
}

function sectionCard(children: React.ReactNode, style?: React.CSSProperties) {
  return (
    <div
      style={{
        backgroundColor: SURFACE,
        border: `1px solid ${BORDER}`,
        borderRadius: 14,
        padding: "28px 24px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontSize: 17,
        fontWeight: 700,
        color: "#fff",
        marginBottom: 20,
        display: "flex",
        alignItems: "center",
        gap: 8,
      }}
    >
      {children}
    </h2>
  );
}

function GoldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        color: GOLD,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
      }}
    >
      {children}
    </span>
  );
}

function Btn({
  children,
  onClick,
  variant = "primary",
  small,
  style,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "danger";
  small?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
}) {
  const base: React.CSSProperties = {
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.5 : 1,
    border: "none",
    borderRadius: 8,
    fontWeight: 600,
    fontSize: small ? 13 : 14,
    padding: small ? "6px 14px" : "10px 20px",
    transition: "opacity 0.15s",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
  };
  const variants: Record<string, React.CSSProperties> = {
    primary: { backgroundColor: GOLD, color: DEEP },
    ghost: {
      backgroundColor: "rgba(255,255,255,0.06)",
      color: TEXT,
      border: `1px solid ${BORDER}`,
    },
    danger: { backgroundColor: "rgba(239,68,68,0.15)", color: "#ef4444", border: "1px solid rgba(239,68,68,0.25)" },
  };
  return (
    <button onClick={onClick} disabled={disabled} style={{ ...base, ...variants[variant], ...style }}>
      {children}
    </button>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  style,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  style?: React.CSSProperties;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${BORDER}`,
        borderRadius: 8,
        padding: "9px 12px",
        color: TEXT,
        fontSize: 14,
        outline: "none",
        boxSizing: "border-box",
        ...style,
      }}
    />
  );
}

function Textarea({
  value,
  onChange,
  placeholder,
  rows = 4,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      style={{
        width: "100%",
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${BORDER}`,
        borderRadius: 8,
        padding: "10px 12px",
        color: TEXT,
        fontSize: 14,
        outline: "none",
        resize: "vertical",
        boxSizing: "border-box",
        fontFamily: "inherit",
      }}
    />
  );
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid ${BORDER}`,
        borderRadius: 8,
        padding: "9px 12px",
        color: TEXT,
        fontSize: 14,
        outline: "none",
        width: "100%",
      }}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} style={{ background: SURFACE }}>
          {o.label}
        </option>
      ))}
    </select>
  );
}

// ─── LS helpers ───────────────────────────────────────────────────────────────
const LS_SCANS = "rs_scans_v1";
const LS_PROMISES = "rs_promises_v1";
const LS_CONTRIBS = "rs_contribs_v1";

function lsGet<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function lsSet(key: string, value: unknown) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

function lsClear(...keys: string[]) {
  if (typeof window === "undefined") return;
  keys.forEach((k) => localStorage.removeItem(k));
}

// ─── Tab Nav ──────────────────────────────────────────────────────────────────
const TABS = [
  { id: "scan", label: "Pattern Detector", icon: Scan },
  { id: "promises", label: "Promise Tracker", icon: CheckCircle2 },
  { id: "balance", label: "Contribution Balance", icon: HandHeart },
  { id: "summary", label: "Red Flags Summary", icon: AlertTriangle },
] as const;
type TabId = (typeof TABS)[number]["id"];

// ─── SECTION 1: Pattern Detector ─────────────────────────────────────────────
function PatternDetector({
  onScanComplete,
}: {
  onScanComplete: (result: ScanResult) => void;
}) {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [lastResult, setLastResult] = useState<ScanResult | null>(null);
  const [expanded, setExpanded] = useState(false);

  async function runScan() {
    if (!message.trim()) return;
    setLoading(true);
    setLastResult(null);

    try {
      const res = await fetch("/api/guardian/scan-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, context: "relationship_analysis" }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      // Map API scores to our pattern names
      const patterns: string[] = [];
      if (data.scores) {
        if (data.scores.manipulation > 0.15) patterns.push("manipulation");
        if (data.scores.toxic > 0.15) patterns.push("coercion");
      }
      // Also run client detection on top
      const clientResult = clientSideScan(message);
      const combined = Array.from(new Set([...patterns, ...clientResult.patterns]));

      const severity = data.severity as RiskLevel;
      const result: ScanResult = {
        id: uid(),
        timestamp: Date.now(),
        message: message.slice(0, 300),
        riskLevel: combined.length > patterns.length ? clientResult.riskLevel : severity,
        patterns: combined,
        confidence: data.confidence ?? clientResult.confidence,
        source: "api",
      };

      setLastResult(result);
      onScanComplete(result);
    } catch {
      // Fallback to client-side
      const clientResult = clientSideScan(message);
      const result: ScanResult = {
        id: uid(),
        timestamp: Date.now(),
        message: message.slice(0, 300),
        ...clientResult,
      };
      setLastResult(result);
      onScanComplete(result);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {sectionCard(
        <>
          <SectionHeading>
            <Scan size={18} color={GOLD} />
            Scan a Message or Interaction
          </SectionHeading>
          <p style={{ fontSize: 14, color: MUTED, marginBottom: 16 }}>
            Paste something they said, or describe an interaction in your own words. This stays on your device unless
            you're signed in.
          </p>
          <Textarea
            value={message}
            onChange={setMessage}
            placeholder="e.g. He told me I was imagining things again, and that my friends are just jealous of us..."
            rows={5}
          />
          <div style={{ marginTop: 12, display: "flex", justifyContent: "flex-end" }}>
            <Btn onClick={runScan} disabled={!message.trim() || loading}>
              {loading ? (
                <>
                  <Loader2 size={14} style={{ animation: "spin 1s linear infinite" }} />
                  Analysing...
                </>
              ) : (
                <>
                  <Scan size={14} />
                  Scan for Patterns
                </>
              )}
            </Btn>
          </div>
        </>
      )}

      {lastResult && (
        <div
          style={{
            backgroundColor: RISK_BG[lastResult.riskLevel],
            border: `1px solid ${RISK_BORDER[lastResult.riskLevel]}`,
            borderRadius: 14,
            padding: "24px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
            <div>
              <GoldLabel>Scan Complete</GoldLabel>
              <div
                style={{ fontSize: 22, fontWeight: 700, color: RISK_COLOR[lastResult.riskLevel], marginTop: 4 }}
              >
                {riskLabel(lastResult.riskLevel)}
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: 13, color: MUTED }}>Confidence</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>
                {Math.round(lastResult.confidence * 100)}%
              </div>
            </div>
          </div>

          {lastResult.patterns.length > 0 ? (
            <div>
              <div style={{ fontSize: 13, color: MUTED, marginBottom: 10 }}>Patterns detected:</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {lastResult.patterns.map((p) => (
                  <span
                    key={p}
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: `1px solid ${BORDER}`,
                      borderRadius: 6,
                      padding: "4px 10px",
                      fontSize: 13,
                      color: TEXT,
                      textTransform: "capitalize",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            <p style={{ fontSize: 14, color: MUTED }}>No specific manipulation patterns detected in this text.</p>
          )}

          <div style={{ marginTop: 12, fontSize: 12, color: MUTED }}>
            {lastResult.source === "client" ? "Analysed locally (offline mode)" : "Analysed via MEOK Guardian API"}
          </div>
        </div>
      )}

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── SECTION 2: Promise Tracker ───────────────────────────────────────────────
function PromiseTracker({ confidential }: { confidential: boolean }) {
  const [promises, setPromises] = useState<PromiseEntry[]>(() =>
    confidential ? [] : lsGet<PromiseEntry[]>(LS_PROMISES, [])
  );
  const [text, setText] = useState("");
  const [date, setDate] = useState(today());
  const [deadline, setDeadline] = useState("");

  useEffect(() => {
    if (!confidential) lsSet(LS_PROMISES, promises);
  }, [promises, confidential]);

  function addPromise() {
    if (!text.trim()) return;
    const entry: PromiseEntry = { id: uid(), text, date, deadline, status: "pending" };
    setPromises((p) => [entry, ...p]);
    setText("");
    setDeadline("");
    setDate(today());
  }

  function setStatus(id: string, status: PromiseStatus) {
    setPromises((p) => p.map((e) => (e.id === id ? { ...e, status } : e)));
  }

  function remove(id: string) {
    setPromises((p) => p.filter((e) => e.id !== id));
  }

  const kept = promises.filter((p) => p.status === "kept").length;
  const broken = promises.filter((p) => p.status === "broken").length;
  const total = promises.length;
  const ratio = total > 0 ? Math.round((kept / total) * 100) : null;

  const statusIcon: Record<PromiseStatus, React.ReactNode> = {
    pending: <Clock size={14} color="#94a3b8" />,
    kept: <CheckCircle2 size={14} color="#22c55e" />,
    broken: <XCircle size={14} color="#ef4444" />,
  };

  const statusColor: Record<PromiseStatus, string> = {
    pending: "#94a3b8",
    kept: "#22c55e",
    broken: "#ef4444",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {sectionCard(
        <>
          <SectionHeading>
            <CheckCircle2 size={18} color={GOLD} />
            Log a Promise
          </SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Input value={text} onChange={setText} placeholder="What was promised..." />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              <div>
                <label style={{ fontSize: 12, color: MUTED, display: "block", marginBottom: 4 }}>Date made</label>
                <Input type="date" value={date} onChange={setDate} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: MUTED, display: "block", marginBottom: 4 }}>
                  Deadline (optional)
                </label>
                <Input type="date" value={deadline} onChange={setDeadline} />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Btn onClick={addPromise} disabled={!text.trim()}>
                <Plus size={14} />
                Add Promise
              </Btn>
            </div>
          </div>
        </>
      )}

      {total > 0 &&
        sectionCard(
          <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
              <SectionHeading>
                <TrendingUp size={18} color={GOLD} />
                Promise Ratio
              </SectionHeading>
              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: 24, fontWeight: 700, color: ratio !== null && ratio >= 70 ? "#22c55e" : ratio !== null && ratio >= 40 ? "#eab308" : "#ef4444" }}>
                  {kept}/{total}
                </span>
                <span style={{ fontSize: 14, color: MUTED }}> kept</span>
                {ratio !== null && (
                  <div style={{ fontSize: 13, color: MUTED }}>{ratio}% follow-through</div>
                )}
              </div>
            </div>

            {/* Bar */}
            <div
              style={{
                height: 8,
                borderRadius: 4,
                background: "rgba(255,255,255,0.06)",
                marginBottom: 24,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: `${ratio ?? 0}%`,
                  background:
                    ratio !== null && ratio >= 70
                      ? "#22c55e"
                      : ratio !== null && ratio >= 40
                      ? "#eab308"
                      : "#ef4444",
                  borderRadius: 4,
                  transition: "width 0.4s ease",
                }}
              />
            </div>

            {/* List */}
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {promises.map((p) => (
                <div
                  key={p.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: `1px solid ${BORDER}`,
                    borderRadius: 10,
                    padding: "12px 14px",
                    display: "flex",
                    gap: 12,
                    alignItems: "flex-start",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, color: TEXT, marginBottom: 4 }}>{p.text}</div>
                    <div style={{ fontSize: 12, color: MUTED }}>
                      Made {p.date}
                      {p.deadline && ` · Due ${p.deadline}`}
                    </div>
                  </div>
                  <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
                    {(["kept", "pending", "broken"] as PromiseStatus[]).map((s) => (
                      <button
                        key={s}
                        onClick={() => setStatus(p.id, s)}
                        title={s}
                        style={{
                          cursor: "pointer",
                          background: p.status === s ? "rgba(255,255,255,0.1)" : "transparent",
                          border: `1px solid ${p.status === s ? statusColor[s] : BORDER}`,
                          borderRadius: 6,
                          padding: "4px 6px",
                          display: "flex",
                          alignItems: "center",
                          transition: "all 0.15s",
                        }}
                      >
                        {statusIcon[s]}
                      </button>
                    ))}
                    <button
                      onClick={() => remove(p.id)}
                      style={{
                        cursor: "pointer",
                        background: "transparent",
                        border: `1px solid ${BORDER}`,
                        borderRadius: 6,
                        padding: "4px 6px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Trash2 size={13} color="#ef4444" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

      {total === 0 && (
        <div style={{ textAlign: "center", padding: "40px 20px", color: MUTED, fontSize: 14 }}>
          No promises logged yet. Add the first one above.
        </div>
      )}
    </div>
  );
}

// ─── SECTION 3: Contribution Balance ─────────────────────────────────────────
function ContributionBalance({ confidential }: { confidential: boolean }) {
  const [entries, setEntries] = useState<ContribEntry[]>(() =>
    confidential ? [] : lsGet<ContribEntry[]>(LS_CONTRIBS, [])
  );
  const [description, setDescription] = useState("");
  const [date, setDate] = useState(today());
  const [type, setType] = useState<ContribType>("emotional");
  const [direction, setDirection] = useState<"you" | "them">("you");

  useEffect(() => {
    if (!confidential) lsSet(LS_CONTRIBS, entries);
  }, [entries, confidential]);

  function addEntry() {
    if (!description.trim()) return;
    const entry: ContribEntry = { id: uid(), date, type, description, direction };
    setEntries((e) => [entry, ...e]);
    setDescription("");
    setDate(today());
  }

  function remove(id: string) {
    setEntries((e) => e.filter((x) => x.id !== id));
  }

  const youCount = entries.filter((e) => e.direction === "you").length;
  const themCount = entries.filter((e) => e.direction === "them").length;
  const total = youCount + themCount;
  const youPct = total > 0 ? Math.round((youCount / total) * 100) : 50;
  const themPct = total > 0 ? 100 - youPct : 50;

  const balanceStatus =
    total === 0
      ? "neutral"
      : Math.abs(youPct - themPct) <= 15
      ? "balanced"
      : youPct > themPct
      ? "you_giving_more"
      : "they_giving_more";

  const statusMsg: Record<string, string> = {
    neutral: "Start logging to see the balance.",
    balanced: "Looks reciprocal — healthy give and take.",
    you_giving_more: "You're giving significantly more. This pattern is worth noticing.",
    they_giving_more: "They're giving more right now — this may be temporary or context-dependent.",
  };

  const typeColors: Record<ContribType, string> = {
    emotional: "#818cf8",
    practical: "#34d399",
    financial: GOLD,
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {sectionCard(
        <>
          <SectionHeading>
            <HandHeart size={18} color={GOLD} />
            Log an Act of Care
          </SectionHeading>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Input value={description} onChange={setDescription} placeholder="Describe what happened..." />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
              <div>
                <label style={{ fontSize: 12, color: MUTED, display: "block", marginBottom: 4 }}>Date</label>
                <Input type="date" value={date} onChange={setDate} />
              </div>
              <div>
                <label style={{ fontSize: 12, color: MUTED, display: "block", marginBottom: 4 }}>Type</label>
                <Select
                  value={type}
                  onChange={(v) => setType(v as ContribType)}
                  options={[
                    { value: "emotional", label: "Emotional" },
                    { value: "practical", label: "Practical" },
                    { value: "financial", label: "Financial" },
                  ]}
                />
              </div>
              <div>
                <label style={{ fontSize: 12, color: MUTED, display: "block", marginBottom: 4 }}>Given by</label>
                <Select
                  value={direction}
                  onChange={(v) => setDirection(v as "you" | "them")}
                  options={[
                    { value: "you", label: "You" },
                    { value: "them", label: "Them" },
                  ]}
                />
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <Btn onClick={addEntry} disabled={!description.trim()}>
                <Plus size={14} />
                Log Entry
              </Btn>
            </div>
          </div>
        </>
      )}

      {sectionCard(
        <>
          <SectionHeading>
            <Minus size={18} color={GOLD} />
            Balance Meter
          </SectionHeading>
          <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, fontSize: 13, color: MUTED }}>
              <span>You ({youPct}%)</span>
              <span>Them ({themPct}%)</span>
            </div>
            <div
              style={{
                height: 16,
                borderRadius: 8,
                background: "rgba(255,255,255,0.06)",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: `${youPct}%`,
                  background: youPct > themPct + 15 ? "#f97316" : "#818cf8",
                  transition: "width 0.4s ease",
                  borderRadius: "8px 0 0 8px",
                }}
              />
              <div
                style={{
                  width: `${themPct}%`,
                  background: themPct > youPct + 15 ? "#22c55e" : "#34d399",
                  transition: "width 0.4s ease",
                  borderRadius: "0 8px 8px 0",
                }}
              />
            </div>
          </div>
          <p
            style={{
              fontSize: 14,
              color:
                balanceStatus === "you_giving_more"
                  ? "#f97316"
                  : balanceStatus === "balanced"
                  ? "#22c55e"
                  : MUTED,
              fontStyle: "italic",
            }}
          >
            {statusMsg[balanceStatus]}
          </p>
        </>
      )}

      {entries.length > 0 && (
        <div
          style={{
            backgroundColor: SURFACE,
            border: `1px solid ${BORDER}`,
            borderRadius: 14,
            padding: "20px 24px",
          }}
        >
          <div style={{ fontSize: 13, color: MUTED, marginBottom: 12, fontWeight: 600 }}>Recent entries</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {entries.slice(0, 12).map((e) => (
              <div
                key={e.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "9px 12px",
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${BORDER}`,
                  borderRadius: 8,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    flexShrink: 0,
                    background: typeColors[e.type],
                  }}
                />
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: e.direction === "you" ? "#818cf8" : "#34d399",
                    minWidth: 36,
                  }}
                >
                  {e.direction === "you" ? "You" : "Them"}
                </span>
                <span style={{ flex: 1, fontSize: 13, color: TEXT }}>{e.description}</span>
                <span style={{ fontSize: 11, color: MUTED, flexShrink: 0 }}>{e.date}</span>
                <button
                  onClick={() => remove(e.id)}
                  style={{ cursor: "pointer", background: "none", border: "none", padding: 2 }}
                >
                  <Trash2 size={12} color="#ef4444" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SECTION 4: Red Flags Summary ────────────────────────────────────────────
function RedFlagsSummary({ scans }: { scans: ScanResult[] }) {
  const totalScans = scans.length;

  // Count pattern frequency
  const patternCounts: Record<string, number> = {};
  for (const scan of scans) {
    for (const p of scan.patterns) {
      patternCounts[p] = (patternCounts[p] ?? 0) + 1;
    }
  }
  const repeatedPatterns = Object.entries(patternCounts).filter(([, c]) => c >= 2);

  // Risk trend (last 5 vs previous 5)
  function riskScore(r: RiskLevel) {
    return { LOW: 0, MEDIUM: 1, HIGH: 2, CRITICAL: 3 }[r];
  }
  const recent = scans.slice(0, 5);
  const older = scans.slice(5, 10);
  const recentAvg = recent.length > 0 ? recent.reduce((s, r) => s + riskScore(r.riskLevel), 0) / recent.length : 0;
  const olderAvg = older.length > 0 ? older.reduce((s, r) => s + riskScore(r.riskLevel), 0) / older.length : 0;
  const trend: "improving" | "stable" | "worsening" =
    older.length === 0
      ? "stable"
      : recentAvg < olderAvg - 0.3
      ? "improving"
      : recentAvg > olderAvg + 0.3
      ? "worsening"
      : "stable";

  const trendColor = { improving: "#22c55e", stable: "#94a3b8", worsening: "#ef4444" }[trend];
  const TrendIcon = { improving: TrendingDown, stable: Minus, worsening: TrendingUp }[trend];

  const highRiskScans = scans.filter((s) => s.riskLevel === "HIGH" || s.riskLevel === "CRITICAL");

  function openChat() {
    const summary = `I've been using the Relationship Shield tool. I've done ${totalScans} scans. ${
      repeatedPatterns.length > 0
        ? `Repeated patterns I've noticed: ${repeatedPatterns.map(([p, c]) => `${p} (${c}x)`).join(", ")}.`
        : ""
    } The risk trend is ${trend}. Can you help me understand what this might mean?`;
    const encoded = encodeURIComponent(summary);
    window.location.href = `/dashboard/chat?context=${encoded}`;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      {/* Stats row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
        {[
          { label: "Total Scans", value: totalScans, color: "#fff" },
          {
            label: "Patterns Repeated",
            value: repeatedPatterns.length,
            color: repeatedPatterns.length > 0 ? "#f97316" : "#22c55e",
          },
          {
            label: "High/Critical",
            value: highRiskScans.length,
            color: highRiskScans.length > 0 ? "#ef4444" : "#22c55e",
          },
        ].map(({ label, value, color }) => (
          <div
            key={label}
            style={{
              backgroundColor: SURFACE,
              border: `1px solid ${BORDER}`,
              borderRadius: 12,
              padding: "20px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 30, fontWeight: 700, color }}>{value}</div>
            <div style={{ fontSize: 12, color: MUTED, marginTop: 4 }}>{label}</div>
          </div>
        ))}
      </div>

      {/* Trend */}
      {sectionCard(
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: `${trendColor}18`,
              border: `1px solid ${trendColor}40`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <TrendIcon size={20} color={trendColor} />
          </div>
          <div>
            <div style={{ fontSize: 14, color: MUTED, marginBottom: 2 }}>Risk Trend</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: trendColor, textTransform: "capitalize" }}>
              {trend}
            </div>
            <div style={{ fontSize: 13, color: MUTED }}>
              {trend === "improving"
                ? "Recent scans show lower concern levels. Keep noticing."
                : trend === "worsening"
                ? "Recent scans show increasing concern. Trust your instincts."
                : "Pattern has been consistent. Continue monitoring."}
            </div>
          </div>
        </div>
      )}

      {/* What I've noticed */}
      {sectionCard(
        <>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 16 }}>
            <AlertTriangle size={18} color="#f97316" style={{ flexShrink: 0, marginTop: 1 }} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 4 }}>What I've noticed</div>
              <div style={{ fontSize: 13, color: MUTED }}>
                Auto-generated from your {totalScans} scan{totalScans !== 1 ? "s" : ""}
              </div>
            </div>
          </div>

          {totalScans === 0 ? (
            <p style={{ fontSize: 14, color: MUTED, fontStyle: "italic" }}>
              Run your first scan in the Pattern Detector tab to start building your summary.
            </p>
          ) : repeatedPatterns.length === 0 ? (
            <p style={{ fontSize: 14, color: "#22c55e" }}>
              No patterns have appeared more than once. Things look relatively clear so far.
            </p>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {repeatedPatterns
                .sort((a, b) => b[1] - a[1])
                .map(([pattern, count]) => (
                  <div
                    key={pattern}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      background: "rgba(249,115,22,0.06)",
                      border: "1px solid rgba(249,115,22,0.2)",
                      borderRadius: 8,
                    }}
                  >
                    <span style={{ fontSize: 14, color: TEXT, textTransform: "capitalize" }}>{pattern}</span>
                    <span style={{ fontSize: 13, color: "#f97316", fontWeight: 600 }}>{count}x detected</span>
                  </div>
                ))}
            </div>
          )}
        </>
      )}

      {/* Talk to MEOK */}
      <div
        style={{
          backgroundColor: SURFACE,
          border: `1px solid rgba(201,168,76,0.25)`,
          borderRadius: 14,
          padding: "24px",
          textAlign: "center",
        }}
      >
        <Heart size={22} color={GOLD} style={{ marginBottom: 10 }} />
        <div style={{ fontSize: 15, fontWeight: 600, color: "#fff", marginBottom: 6 }}>
          Talk to MEOK about this
        </div>
        <p style={{ fontSize: 13, color: MUTED, marginBottom: 16 }}>
          Your scan history will be shared as context so your companion already understands what you've noticed.
        </p>
        <Btn onClick={openChat} disabled={totalScans === 0}>
          <MessageSquare size={14} />
          Open Chat with Context
        </Btn>
      </div>
    </div>
  );
}

// ─── Guardian / Progress API types ───────────────────────────────────────────
interface GuardianSettings {
  scan_messages: boolean
  alert_email: string | null
  alert_phone: string | null
  child_safe_mode: boolean
  threat_threshold: number
  relationship_shield: boolean
  social_guardian: boolean
  notifications: { email: boolean; push: boolean; in_app_only: boolean }
}

interface GuardianData {
  guardian_enabled: boolean
  settings: GuardianSettings
}

interface ProgressSummary {
  bond_points: number
  interactions: number
  streak_days: number
}

// ─── Main Page ────────────────────────────────────────────────────────────────
export default function RelationshipShieldDashboard() {
  const [tab, setTab] = useState<TabId>("scan");
  const [confidential, setConfidential] = useState(false);
  const [scans, setScans] = useState<ScanResult[]>(() => lsGet<ScanResult[]>(LS_SCANS, []));
  const unmountRef = useRef(confidential);
  unmountRef.current = confidential;

  // Real data state
  const [guardianData, setGuardianData] = useState<GuardianData | null>(null);
  const [progressData, setProgressData] = useState<ProgressSummary | null>(null);
  const [loadingMeta, setLoadingMeta] = useState(true);
  const [metaError, setMetaError] = useState(false);

  useEffect(() => {
    async function fetchMeta() {
      setLoadingMeta(true);
      setMetaError(false);
      let anyOk = false;

      // Fetch guardian settings
      try {
        const res = await fetch("/api/user/guardian");
        if (res.ok) {
          const data: GuardianData = await res.json();
          setGuardianData(data);
          anyOk = true;
        }
      } catch {
        // non-fatal
      }

      // Fetch progress for care score / bond points
      try {
        const res = await fetch("/api/user/progress");
        if (res.ok) {
          const data: ProgressSummary = await res.json();
          setProgressData(data);
          anyOk = true;
        }
      } catch {
        // non-fatal
      }

      if (!anyOk) setMetaError(true);
      setLoadingMeta(false);
    }
    fetchMeta();
  }, []);

  useEffect(() => {
    if (!confidential) lsSet(LS_SCANS, scans);
  }, [scans, confidential]);

  // Clear on unmount if confidential
  useEffect(() => {
    return () => {
      if (unmountRef.current) {
        lsClear(LS_SCANS, LS_PROMISES, LS_CONTRIBS);
      }
    };
  }, []);

  function handleScanComplete(result: ScanResult) {
    setScans((s) => [result, ...s].slice(0, 50));
  }

  // Health score derived from guardian + scan history
  const healthScore: number | null = (() => {
    if (!progressData) return null;
    const highRisk = scans.filter((s) => s.riskLevel === "HIGH" || s.riskLevel === "CRITICAL").length;
    const scanPenalty = Math.min(highRisk * 8, 40);
    const base = Math.min(100, Math.round((progressData.bond_points / 1000) * 100));
    return Math.max(0, base - scanPenalty);
  })();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: DEEP,
        color: TEXT,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      {/* Confidential Banner */}
      {confidential && (
        <div
          style={{
            backgroundColor: "rgba(201,168,76,0.12)",
            borderBottom: "1px solid rgba(201,168,76,0.3)",
            padding: "10px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
          }}
        >
          <Lock size={14} color={GOLD} />
          <span style={{ fontSize: 13, color: GOLD, fontWeight: 600 }}>
            Confidential Mode — this session is private. Data will be cleared when you leave this page.
          </span>
        </div>
      )}

      <div style={{ maxWidth: 860, margin: "0 auto", padding: "40px 24px 80px" }}>
        {/* API error notice */}
        {metaError && !loadingMeta && (
          <div
            style={{
              marginBottom: 20,
              padding: "10px 16px",
              borderRadius: 10,
              background: "rgba(251,146,60,0.08)",
              border: "1px solid rgba(251,146,60,0.25)",
              fontSize: 13,
              color: "#fb923c",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <AlertTriangle size={14} style={{ flexShrink: 0 }} />
            Live guardian data unavailable — showing local session data only.
          </div>
        )}

        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: 24,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <GoldLabel>Guardian Suite</GoldLabel>
            <h1
              style={{
                fontSize: "clamp(26px, 4vw, 36px)",
                fontWeight: 700,
                color: "#fff",
                marginTop: 6,
                marginBottom: 6,
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <Shield size={28} color={GOLD} />
              Relationship Shield
            </h1>
            <p style={{ fontSize: 14, color: MUTED }}>
              A private tool for tracking what you notice. {scans.length > 0 && `${scans.length} scan${scans.length !== 1 ? "s" : ""} recorded.`}
            </p>
          </div>
          <button
            onClick={() => setConfidential((v) => !v)}
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 8,
              padding: "9px 16px",
              borderRadius: 8,
              fontSize: 13,
              fontWeight: 600,
              background: confidential ? "rgba(201,168,76,0.15)" : "rgba(255,255,255,0.05)",
              border: `1px solid ${confidential ? "rgba(201,168,76,0.35)" : BORDER}`,
              color: confidential ? GOLD : TEXT,
              transition: "all 0.15s",
            }}
          >
            {confidential ? <EyeOff size={14} /> : <Eye size={14} />}
            {confidential ? "Confidential Mode" : "Enable Confidential Mode"}
          </button>
        </div>

        {/* ── Health Metrics Row ─────────────────────────────────────── */}
        {loadingMeta ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 12,
              marginBottom: 24,
            }}
          >
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                style={{
                  height: 72,
                  borderRadius: 12,
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${BORDER}`,
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
            ))}
            <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }`}</style>
          </div>
        ) : (progressData || guardianData) ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 12,
              marginBottom: 24,
            }}
          >
            {healthScore !== null && (
              <div
                style={{
                  backgroundColor: SURFACE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: healthScore >= 70 ? "#22c55e" : healthScore >= 40 ? "#eab308" : "#ef4444",
                  }}
                >
                  {healthScore}
                </div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>Health Score</div>
              </div>
            )}
            {progressData?.bond_points !== undefined && (
              <div
                style={{
                  backgroundColor: SURFACE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 700, color: GOLD }}>
                  {progressData.bond_points}
                </div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>Bond Points</div>
              </div>
            )}
            {guardianData && (
              <div
                style={{
                  backgroundColor: SURFACE,
                  border: `1px solid ${guardianData.guardian_enabled ? "rgba(34,197,94,0.3)" : BORDER}`,
                  borderRadius: 12,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: guardianData.guardian_enabled ? "#22c55e" : MUTED,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                  }}
                >
                  <Shield size={14} />
                  {guardianData.guardian_enabled ? "Guardian On" : "Guardian Off"}
                </div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 4 }}>
                  {guardianData.settings?.relationship_shield ? "Shield active" : "Shield inactive"}
                </div>
              </div>
            )}
            {progressData?.streak_days !== undefined && (
              <div
                style={{
                  backgroundColor: SURFACE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 12,
                  padding: "16px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 28, fontWeight: 700, color: "#a78bfa" }}>
                  {progressData.streak_days}
                </div>
                <div style={{ fontSize: 11, color: MUTED, marginTop: 2 }}>Day Streak</div>
              </div>
            )}
          </div>
        ) : null}

        {/* Tab Nav */}
        <div
          style={{
            display: "flex",
            gap: 4,
            marginBottom: 28,
            overflowX: "auto",
            paddingBottom: 4,
          }}
        >
          {TABS.map(({ id, label, icon: Icon }) => {
            const active = tab === id;
            return (
              <button
                key={id}
                onClick={() => setTab(id)}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  transition: "all 0.15s",
                  background: active ? GOLD : "rgba(255,255,255,0.04)",
                  color: active ? DEEP : MUTED,
                  border: active ? "none" : `1px solid ${BORDER}`,
                }}
              >
                <Icon size={13} />
                {label}
              </button>
            );
          })}
        </div>

        {/* Tab Content */}
        {tab === "scan" && <PatternDetector onScanComplete={handleScanComplete} />}
        {tab === "promises" && <PromiseTracker confidential={confidential} />}
        {tab === "balance" && <ContributionBalance confidential={confidential} />}
        {tab === "summary" && <RedFlagsSummary scans={scans} />}
      </div>
    </div>
  );
}
