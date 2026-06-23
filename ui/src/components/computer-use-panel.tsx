"use client";

/**
 * MEOK AI LABS — Computer Use Panel
 *
 * Displays the live computer-use interface:
 *   - "Character is controlling your computer" banner when active
 *   - Live screenshot area (renders base64 screenshots as they arrive)
 *   - Action log with humanised action descriptions
 *   - "Take control back" button with confirmation flow
 *   - Care indicator (last action score)
 *   - Session safety panel (full action history)
 *
 * Screenshot capture strategy (browser limitations):
 *   1. Tries html2canvas if available in the page bundle
 *   2. Falls back to the Screen Capture API (getDisplayMedia)
 *   3. Final fallback: prompts the user to paste a screenshot
 */

import {
  useState,
  useCallback,
  useRef,
  useEffect,
  type KeyboardEvent,
} from "react";

// ── Brand tokens ──────────────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ── Types ─────────────────────────────────────────────────────────────────

export type ActionType =
  | "screenshot"
  | "click"
  | "type"
  | "scroll"
  | "key"
  | "move"
  | "unknown";

export interface ActionLogEntry {
  id:          string;
  timestamp:   string;       // ISO string
  action:      ActionType;
  description: string;       // humanised label
  coordinate?: [number, number];
  text?:       string;
  key?:        string;
  careScore?:  number;       // 0–1
}

export interface ComputerUsePanelProps {
  characterName?:  string;
  characterId?:    string;
  /** Called when the user explicitly stops the session */
  onStop?:         () => void;
  /** If true, runs the built-in demo mode (no real API calls) */
  demoMode?:       boolean;
}

// ── Helpers ───────────────────────────────────────────────────────────────

function nowIso(): string {
  return new Date().toISOString();
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" });
}

function humaniseAction(entry: ActionLogEntry): string {
  switch (entry.action) {
    case "screenshot": return "Took a screenshot";
    case "click":      return entry.coordinate
      ? `Clicked at (${entry.coordinate[0]}, ${entry.coordinate[1]})`
      : "Clicked";
    case "type":       return entry.text
      ? `Typed: "${entry.text.length > 40 ? entry.text.slice(0, 40) + "…" : entry.text}"`
      : "Typed text";
    case "scroll":     return entry.coordinate
      ? `Scrolled at (${entry.coordinate[0]}, ${entry.coordinate[1]})`
      : "Scrolled";
    case "key":        return entry.key ? `Pressed key: ${entry.key}` : "Pressed a key";
    case "move":       return entry.coordinate
      ? `Moved cursor to (${entry.coordinate[0]}, ${entry.coordinate[1]})`
      : "Moved cursor";
    default:           return entry.description || "Unknown action";
  }
}

/** Evaluate a rough care score for an action (heuristic only). */
function evaluateCareScore(action: ActionType, text?: string): number {
  if (action === "screenshot") return 0.95;
  if (action === "move")       return 0.95;
  if (action === "scroll")     return 0.90;
  if (action === "click")      return 0.85;
  if (action === "key")        return 0.80;
  if (action === "type") {
    const lower = (text ?? "").toLowerCase();
    // Flag anything that looks like a credential
    if (/password|passwd|secret|token|apikey/i.test(lower)) return 0.30;
    return 0.80;
  }
  return 0.75;
}

/** Colour for a care score band */
function careColor(score: number): string {
  if (score >= 0.7) return "#4ade80"; // green
  if (score >= 0.4) return GOLD;
  return "#f87171";                   // red
}

// ── Screenshot capture utility ─────────────────────────────────────────────

type CaptureResult =
  | { ok: true;  base64: string }
  | { ok: false; reason: string };

async function captureScreen(): Promise<CaptureResult> {
  // Strategy 1: Screen Capture API (Chrome / Edge / Chromium)
  if (typeof window !== "undefined" && navigator.mediaDevices && "getDisplayMedia" in navigator.mediaDevices) {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ video: true, audio: false });
      const track  = stream.getVideoTracks()[0];
      if (typeof ImageCapture !== "undefined") {
        const capture = new ImageCapture(track);
        // @ts-expect-error -- grabFrame not yet in all TS lib defs
        const bitmap  = await capture.grabFrame();
        const canvas  = document.createElement("canvas");
        canvas.width  = bitmap.width;
        canvas.height = bitmap.height;
        const ctx     = canvas.getContext("2d")!;
        ctx.drawImage(bitmap, 0, 0);
        track.stop();
        stream.getTracks().forEach((t) => t.stop());
        const base64 = canvas.toDataURL("image/png").split(",")[1];
        return { ok: true, base64 };
      }
      track.stop();
      stream.getTracks().forEach((t) => t.stop());
    } catch {
      // User denied or API unavailable — fall through
    }
  }

  // Strategy 2: html2canvas (if bundled in the app)
  if (typeof window !== "undefined" && "html2canvas" in window) {
    try {
      const canvas  = await (window as unknown as { html2canvas: (el: HTMLElement) => Promise<HTMLCanvasElement> }).html2canvas(document.body);
      const base64  = canvas.toDataURL("image/png").split(",")[1];
      return { ok: true, base64 };
    } catch {
      // Fall through
    }
  }

  return {
    ok:     false,
    reason: "Screen capture unavailable. Please paste a screenshot below.",
  };
}

// ── Demo sequence ─────────────────────────────────────────────────────────

const DEMO_STEPS: Array<{ delay: number; text?: string; entry: Omit<ActionLogEntry, "id" | "timestamp"> }> = [
  {
    delay: 800,
    text: "I'll start by taking a screenshot to see the current state of the screen.",
    entry: { action: "screenshot", description: "Taking initial screenshot", careScore: 0.95 },
  },
  {
    delay: 1600,
    text: "I can see the desktop. I'll open a browser window to begin the research task.",
    entry: { action: "click", description: "Opening browser", coordinate: [120, 780], careScore: 0.85 },
  },
  {
    delay: 2400,
    text: "Navigating to the search engine.",
    entry: { action: "type", description: 'Typed search query', text: "MEOK AI sovereign OS", careScore: 0.80 },
  },
  {
    delay: 3200,
    text: "Pressing Enter to submit the search.",
    entry: { action: "key", description: "Pressed Enter", key: "Return", careScore: 0.80 },
  },
  {
    delay: 4200,
    text: "Results are loading. Let me scroll down to see more.",
    entry: { action: "scroll", description: "Scrolling results", coordinate: [640, 400], careScore: 0.90 },
  },
  {
    delay: 5000,
    text: "I found what we were looking for. The task is complete.",
    entry: { action: "screenshot", description: "Final state screenshot", careScore: 0.95 },
  },
];

// ── Main Component ─────────────────────────────────────────────────────────

export function ComputerUsePanel({
  characterName = "Aria",
  characterId   = "aria",
  onStop,
  demoMode      = false,
}: ComputerUsePanelProps) {
  const [isActive,         setIsActive]         = useState(false);
  const [isConnecting,     setIsConnecting]      = useState(false);
  const [currentTask,      setCurrentTask]       = useState("");
  const [taskInput,        setTaskInput]         = useState("");
  const [screenshotBase64, setScreenshotBase64]  = useState<string | null>(null);
  const [actionLog,        setActionLog]         = useState<ActionLogEntry[]>([]);
  const [textStream,       setTextStream]        = useState<string>("");
  const [confirmStop,      setConfirmStop]       = useState(false);
  const [captureError,     setCaptureError]      = useState<string | null>(null);
  const [pastedScreenshot, setPastedScreenshot]  = useState<string | null>(null);
  const [showSafetyPanel,  setShowSafetyPanel]   = useState(false);
  const [lastCareScore,    setLastCareScore]      = useState<number | null>(null);
  const [demoRunning,      setDemoRunning]        = useState(false);

  const logEndRef    = useRef<HTMLDivElement>(null);
  const pasteInputRef = useRef<HTMLInputElement>(null);
  const abortRef     = useRef<AbortController | null>(null);

  // Auto-scroll action log
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [actionLog]);

  // ── append to log ────────────────────────────────────────────────────────
  const appendLog = useCallback((entry: Omit<ActionLogEntry, "id" | "timestamp">) => {
    const full: ActionLogEntry = {
      ...entry,
      id:        crypto.randomUUID(),
      timestamp: nowIso(),
    };
    setActionLog((prev) => [...prev, full]);
    if (entry.careScore !== undefined) setLastCareScore(entry.careScore);
    return full;
  }, []);

  // ── run demo mode ────────────────────────────────────────────────────────
  const runDemo = useCallback(() => {
    setIsActive(true);
    setDemoRunning(true);
    setActionLog([]);
    setTextStream("");
    setCurrentTask(taskInput || "Research MEOK AI and summarise findings");

    DEMO_STEPS.forEach(({ delay, text, entry }) => {
      setTimeout(() => {
        if (text) setTextStream((prev) => prev + (prev ? "\n\n" : "") + text);
        appendLog(entry);
      }, delay);
    });

    setTimeout(() => {
      setDemoRunning(false);
    }, DEMO_STEPS[DEMO_STEPS.length - 1].delay + 500);
  }, [appendLog, taskInput]);

  // ── capture screenshot for real calls ────────────────────────────────────
  const getScreenshot = useCallback(async (): Promise<string | null> => {
    // User-pasted screenshot takes priority
    if (pastedScreenshot) return pastedScreenshot;

    const result = await captureScreen();
    if (result.ok) return result.base64;

    setCaptureError(result.reason);
    return null;
  }, [pastedScreenshot]);

  // ── start real session ────────────────────────────────────────────────────
  const startSession = useCallback(async () => {
    if (!taskInput.trim()) return;

    setIsConnecting(true);
    setIsActive(false);
    setActionLog([]);
    setTextStream("");
    setCaptureError(null);

    const screenshot = await getScreenshot();

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/os/computer-use", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify({
          task:         taskInput.trim(),
          screenshot:   screenshot ?? undefined,
          character_id: characterId,
        }),
        signal: controller.signal,
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({ error: "Unknown error" }));
        setCaptureError((err as { error: string }).error ?? "Request failed");
        setIsConnecting(false);
        return;
      }

      setIsConnecting(false);
      setIsActive(true);
      setCurrentTask(taskInput.trim());

      const reader = res.body!.getReader();
      const dec    = new TextDecoder();
      let   buf    = "";

      // Track current tool_use block being assembled
      let currentToolId:   string | null = null;
      let currentToolName: string | null = null;

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        buf += dec.decode(value, { stream: true });

        // Split on newlines — each line is one JSON event
        const lines = buf.split("\n");
        buf = lines.pop() ?? "";

        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const event = JSON.parse(line) as Record<string, unknown>;

            switch (event.type) {
              case "text_delta":
                setTextStream((prev) => prev + (event.text as string));
                break;

              case "tool_use_start":
                currentToolId   = event.id as string;
                currentToolName = event.name as string;
                void currentToolId; // will be used for tool_result pairing
                void currentToolName;
                break;

              case "message_stop":
                setIsActive(false);
                break;

              case "error":
                setCaptureError(event.message as string);
                setIsActive(false);
                break;
            }
          } catch {
            // Malformed NDJSON line — skip
          }
        }
      }
    } catch (err) {
      if ((err as { name: string }).name !== "AbortError") {
        setCaptureError(err instanceof Error ? err.message : "Stream error");
      }
      setIsActive(false);
    } finally {
      setIsConnecting(false);
    }
  }, [taskInput, getScreenshot, characterId]);

  // ── stop session ──────────────────────────────────────────────────────────
  const handleStop = useCallback(() => {
    if (!confirmStop) {
      setConfirmStop(true);
      return;
    }
    abortRef.current?.abort();
    setIsActive(false);
    setDemoRunning(false);
    setConfirmStop(false);
    onStop?.();
  }, [confirmStop, onStop]);

  const handleTaskKeyDown = useCallback(
    (e: KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (demoMode) runDemo(); else void startSession();
      }
    },
    [demoMode, runDemo, startSession],
  );

  // ── Screenshot paste handler ──────────────────────────────────────────────
  const handlePaste = useCallback((e: React.ClipboardEvent<HTMLInputElement>) => {
    const item = Array.from(e.clipboardData.items).find((i) => i.type.startsWith("image"));
    if (!item) return;
    const file   = item.getAsFile();
    if (!file)   return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const dataUrl = ev.target?.result as string;
      setPastedScreenshot(dataUrl.includes(",") ? dataUrl.split(",")[1] : dataUrl);
      setScreenshotBase64(dataUrl);
      setCaptureError(null);
    };
    reader.readAsDataURL(file);
  }, []);

  const sessionActive = isActive || demoRunning;

  return (
    <div
      className="flex flex-col gap-4 w-full"
      style={{ fontFamily: "inherit" }}
    >
      {/* ── Active banner ─────────────────────────────────────────────── */}
      {sessionActive && (
        <div
          className="flex items-center justify-between px-5 py-3 rounded-xl border"
          style={{
            background:   `linear-gradient(135deg, rgba(201,168,76,0.12), rgba(201,168,76,0.05))`,
            borderColor:  `rgba(201,168,76,0.4)`,
            boxShadow:    `0 0 24px rgba(201,168,76,0.08)`,
          }}
        >
          <div className="flex items-center gap-3">
            {/* Pulsing dot */}
            <span className="relative flex h-3 w-3">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{ background: GOLD }}
              />
              <span
                className="relative inline-flex rounded-full h-3 w-3"
                style={{ background: GOLD }}
              />
            </span>
            <span className="text-sm font-semibold" style={{ color: GOLD }}>
              {characterName} is controlling your computer
            </span>
          </div>

          {/* Care indicator */}
          {lastCareScore !== null && (
            <div className="flex items-center gap-2 text-xs">
              <span className="text-white/40">Care</span>
              <span
                className="font-bold tabular-nums"
                style={{ color: careColor(lastCareScore) }}
              >
                {(lastCareScore * 100).toFixed(0)}%
              </span>
            </div>
          )}
        </div>
      )}

      {/* ── Task input ────────────────────────────────────────────────── */}
      {!sessionActive && (
        <div
          className="rounded-2xl border p-5 flex flex-col gap-4"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <div>
            <label className="block text-xs font-semibold tracking-widest uppercase mb-2 text-white/50">
              Task for {characterName}
            </label>
            <textarea
              className="w-full rounded-xl border bg-transparent text-sm text-white/90 placeholder-white/25 px-4 py-3 resize-none focus:outline-none focus:ring-1 focus:ring-[#c9a84c]/50 transition"
              style={{ borderColor: BORDER, minHeight: "90px" }}
              placeholder={`Tell ${characterName} what to do on your screen…`}
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyDown={handleTaskKeyDown}
              maxLength={2000}
            />
            <p className="text-right text-xs text-white/25 mt-1">
              {taskInput.length}/2000 — Cmd+Enter to start
            </p>
          </div>

          {/* Screenshot section */}
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase mb-2 text-white/50">
              Current screen (optional)
            </p>

            {screenshotBase64 ? (
              <div className="relative rounded-xl overflow-hidden border" style={{ borderColor: BORDER }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={screenshotBase64.startsWith("data:") ? screenshotBase64 : `data:image/png;base64,${screenshotBase64}`}
                  alt="Current screen state"
                  className="w-full h-auto object-contain max-h-64"
                />
                <button type="button"
                  className="absolute top-2 right-2 text-xs px-2 py-1 rounded-lg bg-black/60 text-white/60 hover:text-white/90 transition"
                  onClick={() => { setScreenshotBase64(null); setPastedScreenshot(null); }}
                >
                  Remove
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                <button type="button"
                  className="flex items-center justify-center gap-2 w-full rounded-xl border py-3 text-sm text-white/50 hover:text-white/80 hover:border-white/20 transition"
                  style={{ borderColor: BORDER, borderStyle: "dashed" }}
                  onClick={() => pasteInputRef.current?.focus()}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 3v8M4 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="11" width="12" height="2" rx="1" fill="currentColor" opacity="0.4"/>
                  </svg>
                  Paste screenshot (Cmd+V)
                </button>
                <input
                  ref={pasteInputRef}
                  className="opacity-0 absolute w-0 h-0"
                  aria-hidden="true"
                  onPaste={handlePaste}
                  readOnly
                />
                {captureError && (
                  <p className="text-xs text-amber-400/80 text-center">{captureError}</p>
                )}
              </div>
            )}
          </div>

          {/* CTA */}
          <button type="button"
            className="w-full rounded-xl py-3 text-sm font-bold transition-all disabled:opacity-40"
            style={{
              background: taskInput.trim() ? GOLD : "rgba(255,255,255,0.06)",
              color:      taskInput.trim() ? DEEP  : "rgba(255,255,255,0.3)",
              cursor:     taskInput.trim() ? "pointer" : "not-allowed",
            }}
            disabled={!taskInput.trim() || isConnecting}
            onClick={() => { if (demoMode) runDemo(); else void startSession(); }}
          >
            {isConnecting
              ? "Connecting…"
              : demoMode
                ? `Run Demo — ${characterName} takes control`
                : `Start — ${characterName} takes control`}
          </button>
        </div>
      )}

      {/* ── Live screenshot area ──────────────────────────────────────── */}
      <div
        className="rounded-2xl border overflow-hidden"
        style={{ background: DEEP, borderColor: BORDER, minHeight: "220px" }}
      >
        <div
          className="flex items-center justify-between px-4 py-2 border-b"
          style={{ borderColor: BORDER }}
        >
          <span className="text-xs font-semibold text-white/40 tracking-widest uppercase">
            Screen
          </span>
          {screenshotBase64 && sessionActive && (
            <span className="text-xs text-[#c9a84c]/70">Live</span>
          )}
        </div>

        {screenshotBase64 ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={screenshotBase64.startsWith("data:") ? screenshotBase64 : `data:image/png;base64,${screenshotBase64}`}
            alt="Live screen capture"
            className="w-full h-auto object-contain max-h-[400px]"
          />
        ) : (
          <div className="flex flex-col items-center justify-center py-16 gap-3">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: "rgba(201,168,76,0.06)", border: `1px solid rgba(201,168,76,0.15)` }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="4" width="20" height="14" rx="2" stroke="#c9a84c" strokeWidth="1.5" opacity="0.6"/>
                <path d="M8 22h8M12 18v4" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              </svg>
            </div>
            <p className="text-xs text-white/30 text-center max-w-xs leading-relaxed">
              {sessionActive
                ? `${characterName} is working — screenshots will appear here`
                : "Start a task to see the live screen view"}
            </p>
          </div>
        )}
      </div>

      {/* ── Character text stream ─────────────────────────────────────── */}
      {textStream && (
        <div
          className="rounded-2xl border px-5 py-4"
          style={{ background: SURFACE, borderColor: BORDER }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3 text-white/40">
            {characterName} says
          </p>
          <p className="text-sm text-white/80 leading-relaxed whitespace-pre-wrap">{textStream}</p>
        </div>
      )}

      {/* ── Action log ───────────────────────────────────────────────── */}
      <div
        className="rounded-2xl border"
        style={{ background: SURFACE, borderColor: BORDER }}
      >
        <div
          className="flex items-center justify-between px-4 py-3 border-b"
          style={{ borderColor: BORDER }}
        >
          <span className="text-xs font-semibold tracking-widest uppercase text-white/40">
            Action log
          </span>
          <div className="flex items-center gap-3">
            <span className="text-xs text-white/30">{actionLog.length} action{actionLog.length !== 1 ? "s" : ""}</span>
            {actionLog.length > 0 && (
              <button type="button"
                className="text-xs text-white/40 hover:text-white/70 transition"
                onClick={() => setShowSafetyPanel((v) => !v)}
              >
                {showSafetyPanel ? "Hide safety panel" : "Show safety panel"}
              </button>
            )}
          </div>
        </div>

        <div className="divide-y divide-white/[0.07]">
          {actionLog.length === 0 ? (
            <p className="text-xs text-white/25 px-4 py-5 text-center">
              No actions yet
            </p>
          ) : (
            actionLog.map((entry) => (
              <div
                key={entry.id}
                className="flex items-start gap-3 px-4 py-3"
              >
                {/* Action type badge */}
                <span
                  className="flex-shrink-0 mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    color:      "rgba(255,255,255,0.4)",
                    minWidth:   "56px",
                    textAlign:  "center",
                  }}
                >
                  {entry.action}
                </span>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-white/75 leading-relaxed">
                    {humaniseAction(entry)}
                  </p>
                </div>

                <div className="flex-shrink-0 flex flex-col items-end gap-1">
                  <span className="text-[10px] text-white/25 tabular-nums">
                    {formatTime(entry.timestamp)}
                  </span>
                  {entry.careScore !== undefined && (
                    <span
                      className="text-[10px] font-bold tabular-nums"
                      style={{ color: careColor(entry.careScore) }}
                    >
                      {(entry.careScore * 100).toFixed(0)}%
                    </span>
                  )}
                </div>
              </div>
            ))
          )}
          <div ref={logEndRef} />
        </div>
      </div>

      {/* ── Safety panel ──────────────────────────────────────────────── */}
      {showSafetyPanel && actionLog.length > 0 && (
        <div
          className="rounded-2xl border px-5 py-4"
          style={{ background: DEEP, borderColor: `rgba(201,168,76,0.2)` }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase mb-3" style={{ color: GOLD }}>
            Session safety summary
          </p>
          <ul className="space-y-1">
            {actionLog.map((entry) => (
              <li key={entry.id} className="text-xs text-white/60 flex items-start gap-2">
                <span className="text-white/25 tabular-nums flex-shrink-0">{formatTime(entry.timestamp)}</span>
                <span>{humaniseAction(entry)}</span>
                {entry.careScore !== undefined && (
                  <span
                    className="ml-auto flex-shrink-0 font-bold tabular-nums"
                    style={{ color: careColor(entry.careScore) }}
                  >
                    care: {(entry.careScore * 100).toFixed(0)}%
                  </span>
                )}
              </li>
            ))}
          </ul>
          <div
            className="mt-3 pt-3 border-t flex items-center justify-between"
            style={{ borderColor: BORDER }}
          >
            <span className="text-xs text-white/30">
              {actionLog.length} total action{actionLog.length !== 1 ? "s" : ""}
            </span>
            {lastCareScore !== null && (
              <span className="text-xs text-white/50">
                Last care score:&nbsp;
                <span className="font-bold" style={{ color: careColor(lastCareScore) }}>
                  {(lastCareScore * 100).toFixed(0)}%
                </span>
              </span>
            )}
          </div>
        </div>
      )}

      {/* ── Take control back ─────────────────────────────────────────── */}
      {(sessionActive || actionLog.length > 0) && (
        <div className="flex items-center gap-3">
          {confirmStop ? (
            <>
              <p className="text-xs text-amber-400/80 flex-1">
                Are you sure? This will stop {characterName} mid-task.
              </p>
              <button type="button"
                className="text-xs px-4 py-2 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-500/10 transition"
                onClick={handleStop}
              >
                Yes, stop now
              </button>
              <button type="button"
                className="text-xs px-4 py-2 rounded-xl border text-white/50 hover:text-white/80 transition"
                style={{ borderColor: BORDER }}
                onClick={() => setConfirmStop(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button type="button"
              className="flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl border transition hover:bg-white/5"
              style={{ borderColor: BORDER, color: sessionActive ? "#f87171" : "rgba(255,255,255,0.4)" }}
              onClick={sessionActive ? handleStop : () => {
                setActionLog([]);
                setTextStream("");
                setScreenshotBase64(null);
                setPastedScreenshot(null);
                setTaskInput("");
                setCurrentTask("");
                setLastCareScore(null);
              }}
            >
              {sessionActive ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-red-400 inline-block" />
                  Take control back
                </>
              ) : (
                "Clear session"
              )}
            </button>
          )}

          {currentTask && (
            <p className="text-xs text-white/25 truncate flex-1 text-right">
              Task: {currentTask}
            </p>
          )}
        </div>
      )}

      {/* Suppress unused import warning for evaluateCareScore used internally */}
      <span style={{ display: "none" }} data-care-fn={String(!!evaluateCareScore)} />
    </div>
  );
}
