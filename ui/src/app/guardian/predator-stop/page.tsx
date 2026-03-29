"use client";

import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import {
  AlertTriangle,
  Scan,
  Bell,
  Shield,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  Phone,
  ExternalLink,
  Trash2,
  Clock,
} from "lucide-react";

// ─── Brand Tokens ─────────────────────────────────────────────────────────────

const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ThreatSignal {
  label: string;
  score: number; // 0-100
  color: string;
}

interface ScanResult {
  id: string;
  timestamp: string;
  excerpt: string;
  threatLevel: "SAFE" | "LOW" | "MEDIUM" | "HIGH" | "CRITICAL";
  signals: ThreatSignal[];
  flagged: boolean;
}

const STORAGE_KEY = "meok_predator_scans";
const MAX_HISTORY = 20;

// ─── How it works steps ───────────────────────────────────────────────────────

const HOW_IT_WORKS = [
  {
    step: "01",
    icon: Scan,
    title: "Scan",
    desc: "Paste any message or conversation extract. Our AI reads it in full, looking for language patterns, tonal shifts, and structural cues associated with grooming behaviour.",
    color: "#3b82f6",
  },
  {
    step: "02",
    icon: AlertTriangle,
    title: "Detect",
    desc: "The model scores against a grooming pattern library covering trust exploitation, isolation tactics, boundary erosion, and coercive language — returning a threat level and named signals.",
    color: GOLD,
  },
  {
    step: "03",
    icon: Bell,
    title: "Alert",
    desc: "If patterns are detected, you get a clear breakdown of what was found and why it is concerning — with links to professional reporting routes and crisis support.",
    color: "#ef4444",
  },
];

// ─── Pattern library ──────────────────────────────────────────────────────────

const PATTERN_LIBRARY = [
  {
    title: "Trust building through exclusivity",
    description:
      "A predator works to become uniquely important to the child — 'no one else understands you like I do', 'we have a special connection'. This manufactured exclusivity creates emotional dependency and makes the child reluctant to share the relationship with parents.",
    warning_signs: [
      "Statements that position the adult as uniquely understanding",
      "Subtle disparagement of the child's existing relationships",
      "Heavy flattery and mirroring of the child's interests",
    ],
  },
  {
    title: "Isolation from parents and friends",
    description:
      "Groomers systematically work to weaken the child's relationships with trusted adults — making parents seem controlling, friends seem immature, or framing the relationship as something others 'wouldn't understand'. Isolation reduces the chance of disclosure.",
    warning_signs: [
      "Criticism of the child's parents or caregivers",
      "Encouraging the child to keep the relationship secret",
      "Suggesting the child is more mature than their peers",
    ],
  },
  {
    title: "Age-inappropriate topics",
    description:
      "Groomers introduce sexual or adult themes gradually, testing and normalising each step — a process called 'boundary erosion'. Topics move from age-appropriate to inappropriate incrementally, making each step seem like a small shift from the last.",
    warning_signs: [
      "Introduction of sexual humour or innuendo early in the relationship",
      "Asking the child about romantic or sexual experiences",
      "Sharing adult content and framing it as normal",
    ],
  },
  {
    title: "Requests for photos or meetups",
    description:
      "A common escalation pattern. Initially requests may seem innocent — a photo for a game, meeting in a public place. They escalate in nature once the child is emotionally invested and the relationship feels normal.",
    warning_signs: [
      "Requests for photos, including 'innocent' ones early on",
      "Proposals to meet in person, often framed casually",
      "Escalating specificity in meetup planning",
    ],
  },
  {
    title: "Secrets and gift-giving",
    description:
      "Gifts (including in-game currency, subscriptions, money) create obligation and reciprocity dynamics in children. Secret-keeping is used to test the child's loyalty, normalise hiding the relationship, and increase the perceived cost of disclosure.",
    warning_signs: [
      "Offering gifts, money, or in-game items",
      "Instructions not to tell parents about the relationship or gifts",
      "Framing secrets as proof of trust or maturity",
    ],
  },
];

// ─── Emergency contacts ───────────────────────────────────────────────────────

const EMERGENCY_CONTACTS = [
  {
    name: "CEOP (UK)",
    fullName: "Child Exploitation and Online Protection Command",
    phone: "101 (police non-emergency)",
    url: "https://www.ceop.police.uk",
    urlLabel: "Report to CEOP",
    description: "The UK's national policing command for child exploitation. If you believe a child is in immediate danger, call 999. For online concerns, report directly to CEOP.",
    color: "#3b82f6",
  },
  {
    name: "NCMEC (US)",
    fullName: "National Center for Missing & Exploited Children",
    phone: "1-800-843-5678",
    url: "https://www.missingkids.org/gethelpnow/cybertipline",
    urlLabel: "Submit a CyberTipline Report",
    description: "The US clearinghouse for reports of missing and exploited children. The CyberTipline accepts reports of online enticement, child sexual exploitation material, and grooming.",
    color: "#ef4444",
  },
];

// ─── Client-side fallback analysis ────────────────────────────────────────────

function analyseGroomingFallback(text: string): Omit<ScanResult, "id" | "timestamp" | "excerpt"> {
  const lower = text.toLowerCase();
  const signals: ThreatSignal[] = [];
  let totalScore = 0;

  const checks: { pattern: RegExp | string[]; label: string; weight: number; color: string }[] = [
    {
      pattern: ["just between us", "our secret", "don't tell", "keep it secret", "no one needs to know"],
      label: "Secrecy language",
      weight: 30,
      color: "#ef4444",
    },
    {
      pattern: ["special connection", "only one who understands", "no one else", "meant to be", "mature for your age"],
      label: "Exclusivity / flattery",
      weight: 25,
      color: GOLD,
    },
    {
      pattern: ["send me a photo", "send a pic", "what are you wearing", "show me"],
      label: "Photo solicitation",
      weight: 40,
      color: "#ef4444",
    },
    {
      pattern: ["meet up", "meet in person", "come and see me", "visit me", "i'll pick you up"],
      label: "Meetup request",
      weight: 35,
      color: "#ef4444",
    },
    {
      pattern: ["your parents don't understand", "they don't get you", "parents are controlling", "they'd be jealous"],
      label: "Parental isolation",
      weight: 28,
      color: "#f59e0b",
    },
    {
      pattern: ["i'll buy you", "i'll send you", "gift card", "robux", "v-bucks", "paypal you"],
      label: "Gift or money offer",
      weight: 22,
      color: "#f59e0b",
    },
    {
      pattern: ["you're so mature", "not like other kids", "you're different", "so grown up"],
      label: "Age-inappropriate flattery",
      weight: 18,
      color: "#f59e0b",
    },
  ];

  for (const check of checks) {
    const patterns = check.pattern as string[];
    const found = patterns.some((p) => lower.includes(p));
    if (found) {
      signals.push({ label: check.label, score: check.weight, color: check.color });
      totalScore += check.weight;
    }
  }

  const capped = Math.min(totalScore, 100);
  let threatLevel: ScanResult["threatLevel"];
  if (capped === 0)       threatLevel = "SAFE";
  else if (capped < 20)   threatLevel = "LOW";
  else if (capped < 40)   threatLevel = "MEDIUM";
  else if (capped < 65)   threatLevel = "HIGH";
  else                    threatLevel = "CRITICAL";

  return {
    threatLevel,
    signals,
    flagged: capped >= 20,
  };
}

// ─── Threat level config ──────────────────────────────────────────────────────

const THREAT_CONFIG: Record<ScanResult["threatLevel"], { color: string; bg: string; label: string; desc: string }> = {
  SAFE:     { color: "#22c55e", bg: "#22c55e18", label: "No threats detected",    desc: "No grooming patterns were identified in this message." },
  LOW:      { color: "#84cc16", bg: "#84cc1618", label: "Low risk",                desc: "Minor signals present. Monitor for patterns over time." },
  MEDIUM:   { color: "#f59e0b", bg: "#f59e0b18", label: "Moderate concern",        desc: "Multiple signals detected. Review context carefully." },
  HIGH:     { color: "#f97316", bg: "#f9731618", label: "High risk",               desc: "Significant grooming patterns found. Consider contacting CEOP." },
  CRITICAL: { color: "#ef4444", bg: "#ef444418", label: "Critical — act now",      desc: "Severe grooming indicators. Report to CEOP or call 999 if immediate danger." },
};

// ─── Accordion item ───────────────────────────────────────────────────────────

function PatternAccordion() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {PATTERN_LIBRARY.map((pattern, i) => {
        const isOpen = open === i;
        const bodyId = `pattern-body-${i}`;
        const headId = `pattern-head-${i}`;
        return (
          <div
            key={i}
            className="rounded-2xl border overflow-hidden"
            style={{ background: "rgba(255,255,255,0.02)", borderColor: BORDER }}
          >
            <button
              type="button"
              id={headId}
              aria-expanded={isOpen}
              aria-controls={bodyId}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-white/[0.03]"
            >
              <span className="font-semibold text-white/85 text-sm">{pattern.title}</span>
              {isOpen
                ? <ChevronUp className="h-4 w-4 shrink-0 text-white/30" />
                : <ChevronDown className="h-4 w-4 shrink-0 text-white/30" />}
            </button>
            {isOpen && (
              <div
                id={bodyId}
                role="region"
                aria-labelledby={headId}
                className="px-6 pb-5 pt-0"
              >
                <div className="h-px mb-4" style={{ background: BORDER }} />
                <p className="mb-4 text-sm leading-relaxed text-white/55">{pattern.description}</p>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-white/30">Warning signs</p>
                <ul className="space-y-1.5">
                  {pattern.warning_signs.map((sign) => (
                    <li key={sign} className="flex items-start gap-2 text-sm text-white/50">
                      <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-500/60" />
                      {sign}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function PredatorStopPage() {
  const [message, setMessage] = useState("");
  const [scanning, setScanning] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [history, setHistory] = useState<ScanResult[]>([]);

  // Load history
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setHistory(JSON.parse(raw) as ScanResult[]);
    } catch {
      // ignore
    }
  }, []);

  const saveHistory = useCallback((scans: ScanResult[]) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(scans.slice(0, MAX_HISTORY)));
    } catch {
      // ignore
    }
  }, []);

  const runScan = useCallback(async () => {
    if (!message.trim() || scanning) return;
    setScanning(true);
    setResult(null);

    const excerpt = message.trim().slice(0, 80) + (message.length > 80 ? "…" : "");
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;
    const timestamp = new Date().toISOString();

    try {
      const res = await fetch("/api/guardian/scan-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: message.trim(), context: "child_safety" }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json() as Partial<ScanResult>;

      const scan: ScanResult = {
        id,
        timestamp,
        excerpt,
        threatLevel: data.threatLevel ?? "SAFE",
        signals:     data.signals ?? [],
        flagged:     data.flagged ?? false,
      };

      setResult(scan);
      const next = [scan, ...history];
      setHistory(next);
      saveHistory(next);
    } catch {
      // API unavailable — use client-side fallback
      const analysis = analyseGroomingFallback(message.trim());
      const scan: ScanResult = { id, timestamp, excerpt, ...analysis };
      setResult(scan);
      const next = [scan, ...history];
      setHistory(next);
      saveHistory(next);
    } finally {
      setScanning(false);
    }
  }, [message, scanning, history, saveHistory]);

  const clearHistory = () => {
    setHistory([]);
    try { localStorage.removeItem(STORAGE_KEY); } catch { /* ignore */ }
  };

  const threatCfg = result ? THREAT_CONFIG[result.threatLevel] : null;

  return (
    <div className="min-h-screen overflow-x-hidden text-white" style={{ background: DEEP }}>
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full blur-3xl opacity-08"
          style={{ background: "radial-gradient(ellipse, #ef444430 0%, transparent 65%)" }}
        />
      </div>

      <main className="relative z-10 mx-auto max-w-4xl px-6 pb-32 pt-20">

        {/* ── Back nav ──────────────────────────────────────────────────────── */}
        <div className="mb-8 flex items-center gap-2 text-sm text-white/40">
          <Link href="/guardian" className="hover:text-white/70 transition-colors">Guardian</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link href="/guardian/children" className="hover:text-white/70 transition-colors">Children</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white/60">Predator Stop</span>
        </div>

        {/* ── Header ────────────────────────────────────────────────────────── */}
        <div className="mb-12">
          <div className="mb-5 flex items-center gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl"
              style={{ backgroundColor: "#ef444420" }}
            >
              <AlertTriangle className="h-7 w-7 text-red-400" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tight md:text-4xl">Predator Stop</h1>
              <p className="mt-1 text-white/50">AI detection of grooming patterns in conversations</p>
            </div>
          </div>

          <div
            className="rounded-2xl border p-4"
            style={{ background: "#ef444410", borderColor: "#ef444430" }}
          >
            <p className="text-sm leading-relaxed text-white/65">
              <strong className="text-red-400">Important: </strong>
              This tool helps identify potential grooming language patterns for awareness and reporting purposes.
              It does not replace professional assessment. If a child is in immediate danger, call <strong className="text-white">999</strong> (UK) or <strong className="text-white">911</strong> (US).
            </p>
          </div>
        </div>

        <div className="space-y-8">

          {/* ── How it works ──────────────────────────────────────────────────── */}
          <section>
            <h2 className="mb-6 text-xl font-bold text-white/90">How it works</h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {HOW_IT_WORKS.map((step) => {
                const Icon = step.icon;
                return (
                  <div
                    key={step.step}
                    className="rounded-2xl border p-6"
                    style={{ background: SURFACE, borderColor: BORDER }}
                  >
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-xs font-bold tracking-widest" style={{ color: step.color }}>
                        {step.step}
                      </span>
                      <div
                        className="flex h-9 w-9 items-center justify-center rounded-xl"
                        style={{ backgroundColor: `${step.color}20` }}
                      >
                        <Icon className="h-4 w-4" style={{ color: step.color }} />
                      </div>
                    </div>
                    <h3 className="mb-2 font-semibold">{step.title}</h3>
                    <p className="text-sm leading-relaxed text-white/50">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ── Message Scanner ───────────────────────────────────────────────── */}
          <section
            className="rounded-2xl border p-6"
            style={{ background: SURFACE, borderColor: BORDER }}
          >
            <h2 className="mb-1 font-semibold text-white/90">Message Scanner</h2>
            <p className="mb-5 text-sm text-white/40">
              Paste a message or conversation extract to scan for grooming patterns
            </p>

            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Paste the message or conversation here…"
              rows={6}
              className="w-full rounded-xl border px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none focus:ring-1 focus:ring-white/10"
              style={{ background: DEEP, borderColor: BORDER }}
            />

            <div className="mt-4 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs text-white/25">{message.length} characters</span>
              <button
                type="button"
                onClick={runScan}
                disabled={!message.trim() || scanning}
                className="flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all disabled:opacity-40"
                style={{
                  backgroundColor: scanning ? "#ef444430" : "#ef444420",
                  color: "#ef4444",
                  border: "1px solid #ef444440",
                }}
              >
                {scanning ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-red-400/40 border-t-red-400" />
                    Scanning…
                  </>
                ) : (
                  <>
                    <Scan className="h-4 w-4" />
                    Scan for patterns
                  </>
                )}
              </button>
            </div>
          </section>

          {/* ── Scan result ───────────────────────────────────────────────────── */}
          {result && threatCfg && (
            <section
              className="rounded-2xl border p-6"
              style={{ background: SURFACE, borderColor: threatCfg.color + "40" }}
            >
              <div className="mb-5 flex items-center justify-between gap-4 flex-wrap">
                <h2 className="font-semibold text-white/90">Scan Result</h2>
                <span
                  className="rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider"
                  style={{ backgroundColor: threatCfg.bg, color: threatCfg.color, border: `1px solid ${threatCfg.color}40` }}
                >
                  {threatCfg.label}
                </span>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-white/60">{threatCfg.desc}</p>

              {result.signals.length > 0 ? (
                <div>
                  <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/30">
                    Threat signals detected ({result.signals.length})
                  </p>
                  <div className="space-y-3">
                    {result.signals.map((sig) => (
                      <div key={sig.label}>
                        <div className="mb-1.5 flex items-center justify-between gap-2">
                          <span className="text-sm font-medium text-white/70">{sig.label}</span>
                          <span className="text-xs font-bold tabular-nums" style={{ color: sig.color }}>
                            {sig.score}
                          </span>
                        </div>
                        <div className="h-1.5 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${sig.score}%`, backgroundColor: sig.color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-3 rounded-xl border px-4 py-3" style={{ borderColor: "#22c55e30", background: "#22c55e0a" }}>
                  <Shield className="h-4 w-4 text-green-400 shrink-0" />
                  <p className="text-sm text-white/60">No grooming pattern signals found in this text.</p>
                </div>
              )}

              {result.flagged && (
                <div className="mt-5 rounded-xl border p-4" style={{ borderColor: "#ef444430", background: "#ef444410" }}>
                  <p className="text-sm font-semibold text-red-400 mb-1">Recommended action</p>
                  <p className="text-sm text-white/55">
                    Patterns consistent with grooming behaviour were detected. Screenshot and preserve this conversation, then consider reporting to CEOP (UK) or NCMEC (US) using the contacts below.
                  </p>
                </div>
              )}
            </section>
          )}

          {/* ── Pattern library ───────────────────────────────────────────────── */}
          <section>
            <h2 className="mb-2 text-xl font-bold text-white/90">Grooming Pattern Library</h2>
            <p className="mb-6 text-sm text-white/40">
              Educational descriptions of known grooming tactics — awareness is the first layer of protection
            </p>
            <PatternAccordion />
          </section>

          {/* ── Emergency contacts ────────────────────────────────────────────── */}
          <section>
            <h2 className="mb-6 text-xl font-bold text-white/90">Emergency Contacts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {EMERGENCY_CONTACTS.map((contact) => (
                <div
                  key={contact.name}
                  className="rounded-2xl border p-6"
                  style={{ background: SURFACE, borderColor: `${contact.color}30` }}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${contact.color}20` }}
                    >
                      <Shield className="h-5 w-5" style={{ color: contact.color }} />
                    </div>
                    <div>
                      <p className="font-bold text-white/90">{contact.name}</p>
                      <p className="text-xs text-white/35">{contact.fullName}</p>
                    </div>
                  </div>

                  <p className="mb-4 text-sm leading-relaxed text-white/55">{contact.description}</p>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <Phone className="h-3.5 w-3.5 shrink-0 text-white/30" />
                      <span className="font-mono">{contact.phone}</span>
                    </div>
                    <a
                      href={contact.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold transition-opacity hover:opacity-80"
                      style={{
                        backgroundColor: `${contact.color}20`,
                        color: contact.color,
                        border: `1px solid ${contact.color}40`,
                      }}
                    >
                      <ExternalLink className="h-4 w-4" />
                      {contact.urlLabel}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── Scan history ──────────────────────────────────────────────────── */}
          {history.length > 0 && (
            <section
              className="rounded-2xl border p-6"
              style={{ background: SURFACE, borderColor: BORDER }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="font-semibold text-white/90">Scan History</h2>
                  <p className="text-sm text-white/35">Last {Math.min(history.length, MAX_HISTORY)} scans stored locally</p>
                </div>
                <button
                  type="button"
                  onClick={clearHistory}
                  className="flex items-center gap-1.5 text-xs text-white/25 transition-colors hover:text-red-400"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                  Clear
                </button>
              </div>

              <ul className="space-y-2">
                {history.slice(0, MAX_HISTORY).map((scan) => {
                  const cfg = THREAT_CONFIG[scan.threatLevel];
                  return (
                    <li
                      key={scan.id}
                      className="flex items-center gap-4 rounded-xl border px-4 py-3"
                      style={{ background: DEEP, borderColor: BORDER }}
                    >
                      <span
                        className="h-2 w-2 shrink-0 rounded-full"
                        style={{ backgroundColor: cfg.color }}
                      />
                      <span className="flex-1 truncate text-sm text-white/55 font-mono">{scan.excerpt}</span>
                      <span className="text-xs font-semibold" style={{ color: cfg.color }}>
                        {scan.threatLevel}
                      </span>
                      <div className="flex items-center gap-1 text-xs text-white/25">
                        <Clock className="h-3 w-3" />
                        {new Date(scan.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          )}

        </div>

        {/* ── Bottom nav ────────────────────────────────────────────────────── */}
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href="/guardian/school-safe"
            className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            ← School-Safe Mode
          </Link>
          <Link
            href="/guardian/children"
            className="rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white/60 transition-colors hover:border-white/30 hover:text-white"
          >
            Back to Children Safety
          </Link>
        </div>

      </main>
    </div>
  );
}
