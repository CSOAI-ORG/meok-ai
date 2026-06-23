"use client";

import { useState } from "react";
import {
  Crosshair,
  Sword,
  Brain,
  Trophy,
  Loader2,
  Send,
  ChevronRight,
  Map,
  Wand2,
  Lightbulb,
  HelpCircle,
  BarChart2,
  AlertTriangle,
} from "lucide-react";

// ── Brand tokens ──────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Types ─────────────────────────────────────────────────────────────────────
type Genre = "fps" | "rpg" | "puzzle" | "sports";

// ── Static curated tips ───────────────────────────────────────────────────────
const FPS_AIM_TIPS = [
  "Train with a lower sensitivity than feels comfortable — precision wins over speed. Build muscle memory at 400–800 DPI.",
  "Use a crosshair placement drill: walk a map keeping your aim at head height at all times without conscious correction.",
  "Flick shots should originate from your elbow, not your wrist. Use wrist for micro-adjustments only.",
  "Pre-aim corners before rounding them. Your crosshair should already be on the enemy's likely head position.",
  "Dry-fire warmup: 10 minutes of aim training before competitive play reduces mechanical error by ~20%.",
];

const FPS_MAP_TIPS = [
  "Learn the three anchor points of every map: high ground, choke point, and flanking route. Control two and you control the game.",
  "Sound matters as much as sight — use headphones and identify footstep directions to pre-position before enemies appear.",
  "Callouts reduce reaction time. Study your game's standard map callouts so comms are instant and unambiguous.",
  "Mid-control is almost always the highest-value objective on symmetrical maps. Winning mid wins rotations.",
  "Watch professional VODs of your main maps — note their default setups, utility usage timing, and rotation triggers.",
];

const GENRES: { id: Genre; label: string; Icon: typeof Crosshair }[] = [
  { id: "fps", label: "FPS", Icon: Crosshair },
  { id: "rpg", label: "RPG", Icon: Sword },
  { id: "puzzle", label: "Puzzle", Icon: Brain },
  { id: "sports", label: "Sports", Icon: Trophy },
];

// ── Streaming helper ──────────────────────────────────────────────────────────
async function streamChat(
  messages: { role: "user" | "assistant"; content: string }[],
  systemOverride: string,
  onChunk: (text: string) => void,
): Promise<void> {
  const res = await fetch("/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      messages,
      companionId: "__gaming_coach__",
      _systemOverride: systemOverride,
    }),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error((err as Record<string, string>).error ?? "Request failed");
  }

  const reader = res.body?.getReader();
  if (!reader) throw new Error("No response stream");

  const decoder = new TextDecoder();
  let accumulated = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    accumulated += decoder.decode(value, { stream: true });
    onChunk(accumulated);
  }
}

// ── Shared sub-components ─────────────────────────────────────────────────────

function SectionCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-2xl p-6 ${className}`}
      style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
    >
      {children}
    </div>
  );
}

function InputField({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}) {
  return (
    <div>
      <label className="block text-xs text-white/40 font-medium mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${BORDER}`,
        }}
      />
    </div>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}) {
  return (
    <div>
      <label className="block text-xs text-white/40 font-medium mb-1.5">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg px-4 py-2.5 text-sm text-white outline-none"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: `1px solid ${BORDER}`,
          color: value ? "white" : "rgba(255,255,255,0.25)",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value} style={{ background: SURFACE }}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function ResponseBox({ text, loading, label }: { text: string; loading: boolean; label?: string }) {
  if (!text && !loading) return null;
  return (
    <div
      className="rounded-xl p-4 mt-4"
      style={{ background: "rgba(201,168,76,0.05)", border: `1px solid rgba(201,168,76,0.15)` }}
    >
      {label && (
        <p className="text-[10px] font-bold tracking-widest uppercase mb-2" style={{ color: `${GOLD}80` }}>
          {label}
        </p>
      )}
      {loading && !text ? (
        <div className="flex items-center gap-2 text-white/40 text-sm">
          <Loader2 className="w-4 h-4 animate-spin" style={{ color: GOLD }} />
          Thinking...
        </div>
      ) : (
        <p className="text-sm leading-relaxed whitespace-pre-wrap" style={{ color: "rgba(245,240,232,0.78)" }}>
          {text}
          {loading && <span className="inline-block w-1.5 h-4 ml-0.5 align-middle animate-pulse" style={{ background: GOLD }} />}
        </p>
      )}
    </div>
  );
}

function ErrorBox({ message }: { message: string }) {
  return (
    <div
      className="flex items-center gap-2 p-3 rounded-lg text-sm mt-4"
      style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)", color: "#ef4444" }}
    >
      <AlertTriangle className="w-4 h-4 flex-shrink-0" />
      {message}
    </div>
  );
}

function SendButton({
  onClick,
  loading,
  disabled,
  label = "Send",
  loadingLabel = "Thinking...",
}: {
  onClick: () => void;
  loading: boolean;
  disabled?: boolean;
  label?: string;
  loadingLabel?: string;
}) {
  return (
    <button type="button"
      onClick={onClick}
      disabled={loading || disabled}
      className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100 whitespace-nowrap"
      style={{ background: GOLD, color: DEEP }}
    >
      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
      {loading ? loadingLabel : label}
    </button>
  );
}

// ── Tab: FPS ──────────────────────────────────────────────────────────────────

function FPSTab() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeSection, setActiveSection] = useState<"aim" | "map">("aim");

  async function handleAsk() {
    const q = query.trim();
    if (!q) return;
    setLoading(true);
    setError("");
    setResponse("");
    try {
      const sys =
        "You are an elite FPS gaming coach with expertise in aim training, map control, and competitive strategy. " +
        "Give precise, actionable advice. Be concise but thorough. Use bullet points where helpful.";
      await streamChat([{ role: "user", content: q }], sys, (chunk) => setResponse(chunk));
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Tip sections toggle */}
      <div className="flex gap-2">
        {(["aim", "map"] as const).map((s) => (
          <button type="button"
            key={s}
            onClick={() => setActiveSection(s)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{
              background: activeSection === s ? `${GOLD}18` : "rgba(255,255,255,0.03)",
              border: `1px solid ${activeSection === s ? `${GOLD}40` : BORDER}`,
              color: activeSection === s ? GOLD : "rgba(255,255,255,0.5)",
            }}
          >
            {s === "aim" ? <Crosshair className="w-3.5 h-3.5" /> : <Map className="w-3.5 h-3.5" />}
            {s === "aim" ? "Aim Training" : "Map Awareness"}
          </button>
        ))}
      </div>

      {/* Curated tips */}
      <SectionCard>
        <h3 className="text-sm font-bold text-white mb-4">
          {activeSection === "aim" ? "Aim Training Tips" : "Map Awareness Tips"}
        </h3>
        <ul className="space-y-3">
          {(activeSection === "aim" ? FPS_AIM_TIPS : FPS_MAP_TIPS).map((tip, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="w-5 h-5 rounded flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5"
                style={{ background: `${GOLD}18`, color: GOLD }}
              >
                {i + 1}
              </span>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(245,240,232,0.65)" }}>
                {tip}
              </p>
            </li>
          ))}
        </ul>
      </SectionCard>

      {/* Ask section */}
      <SectionCard>
        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <ChevronRight className="w-4 h-4" style={{ color: GOLD }} />
          Ask about a specific map or weapon
        </h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loading && handleAsk()}
            placeholder="e.g. Best angles on Dust2 B site / How to use AWP on Mirage"
            className="flex-1 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
          />
          <SendButton onClick={handleAsk} loading={loading} disabled={!query.trim()} />
        </div>
        {error && <ErrorBox message={error} />}
        <ResponseBox text={response} loading={loading} label="Coach says" />
      </SectionCard>
    </div>
  );
}

// ── Tab: RPG ──────────────────────────────────────────────────────────────────

const RPG_CLASSES = [
  { value: "", label: "Select class..." },
  { value: "warrior", label: "Warrior / Fighter" },
  { value: "mage", label: "Mage / Sorcerer" },
  { value: "rogue", label: "Rogue / Assassin" },
  { value: "ranger", label: "Ranger / Hunter" },
  { value: "paladin", label: "Paladin / Cleric" },
  { value: "necromancer", label: "Necromancer" },
  { value: "druid", label: "Druid / Shaman" },
  { value: "other", label: "Other / Custom" },
];

const RPG_PLAYSTYLES = [
  { value: "", label: "Select playstyle..." },
  { value: "solo", label: "Solo / Self-sufficient" },
  { value: "support", label: "Support / Team buffer" },
  { value: "dps", label: "Maximum damage" },
  { value: "tank", label: "Tank / Survivability" },
  { value: "hybrid", label: "Hybrid / Versatile" },
  { value: "speedrun", label: "Speedrun / Efficiency" },
];

function RPGTab() {
  const [charClass, setCharClass] = useState("");
  const [level, setLevel] = useState("");
  const [playstyle, setPlaystyle] = useState("");
  const [gameTitle, setGameTitle] = useState("");
  const [buildResponse, setBuildResponse] = useState("");
  const [buildLoading, setBuildLoading] = useState(false);
  const [buildError, setBuildError] = useState("");

  const [loreQuery, setLoreQuery] = useState("");
  const [loreResponse, setLoreResponse] = useState("");
  const [loreLoading, setLoreLoading] = useState(false);
  const [loreError, setLoreError] = useState("");

  async function handleBuild() {
    if (!charClass || !playstyle) return;
    setBuildLoading(true);
    setBuildError("");
    setBuildResponse("");
    try {
      const userMsg =
        `Game: ${gameTitle || "generic RPG"}\n` +
        `Class: ${charClass}\n` +
        `Level: ${level || "unspecified"}\n` +
        `Playstyle: ${playstyle}\n\n` +
        `Generate an optimised build for this character. Include key stats to prioritise, recommended skill/talent choices, gear priorities, and playstyle tips.`;
      const sys =
        "You are an expert RPG build optimizer with deep knowledge across popular RPGs including Elden Ring, Baldur's Gate 3, Path of Exile, Diablo, Final Fantasy, and many others. " +
        "Provide structured, practical build recommendations. Format clearly with headers for Stats, Skills, Gear, and Tips.";
      await streamChat([{ role: "user", content: userMsg }], sys, (chunk) => setBuildResponse(chunk));
    } catch (e) {
      setBuildError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setBuildLoading(false);
    }
  }

  async function handleLore() {
    const q = loreQuery.trim();
    if (!q) return;
    setLoreLoading(true);
    setLoreError("");
    setLoreResponse("");
    try {
      const sys =
        "You are a deep lore expert across all major RPG universes. Answer lore questions accurately, draw connections between events and characters, and cite in-game sources where possible. " +
        "If the game is not specified, ask for clarification or give a general answer.";
      await streamChat([{ role: "user", content: q }], sys, (chunk) => setLoreResponse(chunk));
    } catch (e) {
      setLoreError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoreLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      {/* Build optimizer */}
      <SectionCard>
        <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
          <Wand2 className="w-4 h-4" style={{ color: GOLD }} />
          Build Optimizer
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <InputField
            label="Game Title (optional)"
            value={gameTitle}
            onChange={setGameTitle}
            placeholder="e.g. Elden Ring, BG3, PoE2..."
          />
          <InputField
            label="Level / Tier"
            value={level}
            onChange={setLevel}
            placeholder="e.g. 45, endgame, act 2..."
          />
          <SelectField
            label="Class *"
            value={charClass}
            onChange={setCharClass}
            options={RPG_CLASSES}
          />
          <SelectField
            label="Playstyle *"
            value={playstyle}
            onChange={setPlaystyle}
            options={RPG_PLAYSTYLES}
          />
        </div>
        <div className="flex justify-end">
          <SendButton
            onClick={handleBuild}
            loading={buildLoading}
            disabled={!charClass || !playstyle}
            label="Generate Build"
            loadingLabel="Optimising..."
          />
        </div>
        {buildError && <ErrorBox message={buildError} />}
        <ResponseBox text={buildResponse} loading={buildLoading} label="Optimised Build" />
      </SectionCard>

      {/* Lore Q&A */}
      <SectionCard>
        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <ChevronRight className="w-4 h-4" style={{ color: GOLD }} />
          Lore Q&A
        </h3>
        <div className="flex gap-3">
          <input
            type="text"
            value={loreQuery}
            onChange={(e) => setLoreQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !loreLoading && handleLore()}
            placeholder="e.g. Who is the Elden Beast? / What is the True Ending of BG3?"
            className="flex-1 rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
          />
          <SendButton onClick={handleLore} loading={loreLoading} disabled={!loreQuery.trim()} label="Ask" loadingLabel="Researching..." />
        </div>
        {loreError && <ErrorBox message={loreError} />}
        <ResponseBox text={loreResponse} loading={loreLoading} label="Lore Answer" />
      </SectionCard>
    </div>
  );
}

// ── Tab: Puzzle ───────────────────────────────────────────────────────────────

const HINT_LEVELS = [
  {
    id: "nudge" as const,
    label: "Nudge",
    Icon: ChevronRight,
    description: "Gentle direction",
    systemSuffix:
      "Give only a very gentle nudge — a single sentence that points the solver in the right direction WITHOUT revealing the mechanism or solution. Do not explain why.",
  },
  {
    id: "hint" as const,
    label: "Hint",
    Icon: Lightbulb,
    description: "Key insight",
    systemSuffix:
      "Give a meaningful hint that reveals the core mechanism or key insight needed, but stop short of showing the actual solution. The solver should still need to figure out the final step.",
  },
  {
    id: "solution" as const,
    label: "Full Solution",
    Icon: HelpCircle,
    description: "Complete answer",
    systemSuffix:
      "Provide a complete step-by-step solution. Be thorough and clear. Explain why each step works.",
  },
];

function PuzzleTab() {
  const [puzzleDesc, setPuzzleDesc] = useState("");
  const [responses, setResponses] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState<Record<string, boolean>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeLevel, setActiveLevel] = useState<"nudge" | "hint" | "solution" | null>(null);

  async function handleHint(level: typeof HINT_LEVELS[number]) {
    const desc = puzzleDesc.trim();
    if (!desc) return;
    setLoading((prev) => ({ ...prev, [level.id]: true }));
    setErrors((prev) => ({ ...prev, [level.id]: "" }));
    setResponses((prev) => ({ ...prev, [level.id]: "" }));
    setActiveLevel(level.id);
    try {
      const sys =
        "You are a patient and brilliant puzzle coach, expert in logic puzzles, riddles, escape rooms, video game puzzles, and brainteasers. " +
        level.systemSuffix;
      await streamChat(
        [{ role: "user", content: `Here is my puzzle:\n\n${desc}` }],
        sys,
        (chunk) => setResponses((prev) => ({ ...prev, [level.id]: chunk })),
      );
    } catch (e) {
      setErrors((prev) => ({ ...prev, [level.id]: e instanceof Error ? e.message : "Something went wrong" }));
    } finally {
      setLoading((prev) => ({ ...prev, [level.id]: false }));
    }
  }

  const isAnyLoading = Object.values(loading).some(Boolean);

  return (
    <div className="space-y-6">
      <SectionCard>
        <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
          <Brain className="w-4 h-4" style={{ color: GOLD }} />
          Describe Your Puzzle
        </h3>
        <textarea
          value={puzzleDesc}
          onChange={(e) => setPuzzleDesc(e.target.value)}
          placeholder="Describe the puzzle you're stuck on in as much detail as possible — the setup, what you've tried, and what rules apply..."
          rows={5}
          className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none resize-none"
          style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
        />
      </SectionCard>

      {/* Hint level buttons */}
      <div className="grid grid-cols-3 gap-4">
        {HINT_LEVELS.map((level) => {
          const Icon = level.Icon;
          const isActive = activeLevel === level.id;
          return (
            <div key={level.id} className="flex flex-col gap-2">
              <button type="button"
                onClick={() => handleHint(level)}
                disabled={isAnyLoading || !puzzleDesc.trim()}
                className="flex flex-col items-center gap-2 p-4 rounded-xl text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
                style={{
                  background: isActive ? `${GOLD}18` : "rgba(255,255,255,0.03)",
                  border: `1px solid ${isActive ? `${GOLD}40` : BORDER}`,
                  color: isActive ? GOLD : "rgba(255,255,255,0.65)",
                }}
              >
                {loading[level.id] ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Icon className="w-5 h-5" />
                )}
                <span>{level.label}</span>
                <span className="text-[10px] font-normal opacity-60">{level.description}</span>
              </button>
              {errors[level.id] && <ErrorBox message={errors[level.id]} />}
              {(responses[level.id] || loading[level.id]) && activeLevel === level.id && (
                <ResponseBox
                  text={responses[level.id] ?? ""}
                  loading={loading[level.id] ?? false}
                  label={level.label}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Show response below if it exists for the active level */}
      {activeLevel && responses[activeLevel] && (
        <ResponseBox
          text={responses[activeLevel] ?? ""}
          loading={loading[activeLevel] ?? false}
          label={`${HINT_LEVELS.find((l) => l.id === activeLevel)?.label} Response`}
        />
      )}
    </div>
  );
}

// ── Tab: Sports ───────────────────────────────────────────────────────────────

function SportsTab() {
  const [sport, setSport] = useState("");
  const [wins, setWins] = useState("");
  const [losses, setLosses] = useState("");
  const [scoreAvg, setScoreAvg] = useState("");
  const [kda, setKda] = useState("");
  const [winRate, setWinRate] = useState("");
  const [topStat, setTopStat] = useState("");
  const [extraContext, setExtraContext] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleAnalyse() {
    setLoading(true);
    setError("");
    setResponse("");
    try {
      const stats = [
        sport && `Sport/Game: ${sport}`,
        wins && `Wins: ${wins}`,
        losses && `Losses: ${losses}`,
        scoreAvg && `Score average: ${scoreAvg}`,
        kda && `K/D or KDA: ${kda}`,
        winRate && `Win rate: ${winRate}%`,
        topStat && `Top personal stat: ${topStat}`,
        extraContext && `Additional context: ${extraContext}`,
      ]
        .filter(Boolean)
        .join("\n");

      const sys =
        "You are a professional sports analytics coach with expertise across competitive gaming, esports, and traditional sports statistics. " +
        "Analyse the provided stats comprehensively: identify strengths, weaknesses, trends, and give 3-5 concrete improvement recommendations. " +
        "Be specific, data-driven, and encouraging. Format with clear sections.";
      await streamChat(
        [{ role: "user", content: `Please analyse these stats:\n\n${stats}` }],
        sys,
        (chunk) => setResponse(chunk),
      );
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  const hasAnyData = [wins, losses, scoreAvg, kda, winRate, topStat].some((v) => v.trim() !== "");

  return (
    <div className="space-y-6">
      <SectionCard>
        <h3 className="text-sm font-bold text-white mb-5 flex items-center gap-2">
          <BarChart2 className="w-4 h-4" style={{ color: GOLD }} />
          Stat Analysis
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <InputField
            label="Sport / Game"
            value={sport}
            onChange={setSport}
            placeholder="e.g. Valorant, Football, CS2..."
          />
          <InputField
            label="Win Rate (%)"
            value={winRate}
            onChange={setWinRate}
            placeholder="e.g. 58"
            type="number"
          />
          <InputField
            label="Wins"
            value={wins}
            onChange={setWins}
            placeholder="e.g. 142"
            type="number"
          />
          <InputField
            label="Losses"
            value={losses}
            onChange={setLosses}
            placeholder="e.g. 103"
            type="number"
          />
          <InputField
            label="Score Average"
            value={scoreAvg}
            onChange={setScoreAvg}
            placeholder="e.g. 24.3 per game"
          />
          <InputField
            label="K/D or KDA"
            value={kda}
            onChange={setKda}
            placeholder="e.g. 1.45 / 8.2/3.1/6.4"
          />
        </div>
        <div className="mb-4">
          <label className="block text-xs text-white/40 font-medium mb-1.5">
            Top personal stat / achievement
          </label>
          <input
            type="text"
            value={topStat}
            onChange={(e) => setTopStat(e.target.value)}
            placeholder="e.g. 94% headshot rate, ranked #12 on leaderboard, MVP 8 times this season..."
            className="w-full rounded-lg px-4 py-2.5 text-sm text-white placeholder-white/25 outline-none"
            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
          />
        </div>
        <div className="mb-5">
          <label className="block text-xs text-white/40 font-medium mb-1.5">
            Additional context (optional)
          </label>
          <textarea
            value={extraContext}
            onChange={(e) => setExtraContext(e.target.value)}
            placeholder="e.g. I'm plat 2 aiming for diamond, mostly play solo queue, struggle with late-game clutches..."
            rows={3}
            className="w-full rounded-xl px-4 py-3 text-sm text-white placeholder-white/25 outline-none resize-none"
            style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${BORDER}` }}
          />
        </div>
        <div className="flex justify-end">
          <SendButton
            onClick={handleAnalyse}
            loading={loading}
            disabled={!hasAnyData}
            label="Analyse My Stats"
            loadingLabel="Analysing..."
          />
        </div>
        {error && <ErrorBox message={error} />}
        <ResponseBox text={response} loading={loading} label="Analysis" />
      </SectionCard>
    </div>
  );
}

// ── Main page ─────────────────────────────────────────────────────────────────

export default function GenreCoachingPage() {
  const [activeGenre, setActiveGenre] = useState<Genre>("fps");

  return (
    <div className="min-h-screen px-4 py-8 md:px-8" style={{ background: DEEP }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: `${GOLD}18` }}
            >
              <Trophy className="w-5 h-5" style={{ color: GOLD }} />
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                Genre-Specific Coaching
              </h1>
              <p className="text-sm text-white/40">
                AI coaching tailored to your genre — tips, builds, hints, and stat analysis.
              </p>
            </div>
          </div>
        </header>

        {/* Genre tabs */}
        <nav
          className="flex gap-2 mb-8 p-1.5 rounded-2xl"
          style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
        >
          {GENRES.map(({ id, label, Icon }) => {
            const active = activeGenre === id;
            return (
              <button type="button"
                key={id}
                onClick={() => setActiveGenre(id)}
                className="flex-1 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-sm font-semibold transition-all"
                style={{
                  background: active ? GOLD : "transparent",
                  color: active ? DEEP : "rgba(255,255,255,0.45)",
                }}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{label}</span>
              </button>
            );
          })}
        </nav>

        {/* Tab content */}
        {activeGenre === "fps" && <FPSTab />}
        {activeGenre === "rpg" && <RPGTab />}
        {activeGenre === "puzzle" && <PuzzleTab />}
        {activeGenre === "sports" && <SportsTab />}
      </div>
    </div>
  );
}
