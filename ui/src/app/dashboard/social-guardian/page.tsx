"use client";

import { useState } from "react";
import { Users, BookOpen, AlertCircle, CheckCircle, Search, Filter, ChevronDown, Zap } from "lucide-react";

const GOLD = "#c9a84c";
const NAVY = "#0a0e27";
const SURFACE = "#0f1425";
const CREAM = "#f5f1ed";

interface MeetingPrep {
  who: string;
  what: string;
  when: string;
  concerns: string;
}

interface Script {
  id: string;
  category: string;
  title: string;
  description: string;
  script: string;
  difficulty: "easy" | "medium" | "hard";
}

interface SensoryReading {
  area: string;
  level: number; // 0-10
}

const SCRIPT_LIBRARY: Script[] = [
  {
    id: "boundary-setting",
    category: "Boundaries",
    title: "Setting a Boundary",
    description: "How to say no firmly and kindly",
    script:
      "I appreciate you asking, but I'm not able to... right now. I need to focus on... Let me get back to you when I can.",
    difficulty: "easy",
  },
  {
    id: "conflict-pause",
    category: "Conflict",
    title: "Taking a Pause",
    description: "Stepping back when things get heated",
    script:
      "I notice things are getting heated. I care about this conversation, so I'd like to take a break and come back when we're both calmer. Can we revisit this in an hour?",
    difficulty: "medium",
  },
  {
    id: "validation",
    category: "Emotional Support",
    title: "Validating Someone",
    description: "Showing understanding without fixing",
    script:
      "That sounds really hard. I hear you, and I understand why you'd feel that way. Thank you for sharing that with me.",
    difficulty: "easy",
  },
  {
    id: "assertive-decline",
    category: "Boundaries",
    title: "Declining Firmly",
    description: "Clear no with explanation",
    script:
      "I understand why you'd want that, but I've decided that's not something I can do. I hope you can respect that decision.",
    difficulty: "hard",
  },
  {
    id: "asking-help",
    category: "Support",
    title: "Asking for Help",
    description: "How to voice what you need",
    script:
      "I could use some support right now. Specifically, it would help if you could... Would that be possible?",
    difficulty: "medium",
  },
  {
    id: "addressing-behavior",
    category: "Difficult Conversations",
    title: "Addressing Behavior",
    description: "Speaking up about something someone did",
    script:
      "When you [specific behavior], it makes me feel [specific feeling]. I want to understand if that was intentional, and I'd appreciate if you could...",
    difficulty: "hard",
  },
];

interface DifficultyConfig {
  bg: string;
  text: string;
  border: string;
}

const DIFFICULTY_CONFIG: Record<"easy" | "medium" | "hard", DifficultyConfig> = {
  easy: { bg: "rgba(34,197,94,0.1)", text: "#22c55e", border: "rgba(34,197,94,0.3)" },
  medium: { bg: "rgba(234,179,8,0.1)", text: "#eab308", border: "rgba(234,179,8,0.3)" },
  hard: { bg: "rgba(239,68,68,0.1)", text: "#f97316", border: "rgba(239,68,68,0.3)" },
};

function MeetingPrepForm() {
  const [prep, setPrep] = useState<MeetingPrep>({
    who: "",
    what: "",
    when: "",
    concerns: "",
  });

  const handleChange = (field: keyof MeetingPrep, value: string) => {
    setPrep((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Users className="w-5 h-5" style={{ color: GOLD }} />
        Meeting Prep Template
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Who are you meeting?</label>
          <input
            type="text"
            value={prep.who}
            onChange={(e) => handleChange("who", e.target.value)}
            placeholder="Name and relationship"
            className="w-full px-3 py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">What's the purpose?</label>
          <input
            type="text"
            value={prep.what}
            onChange={(e) => handleChange("what", e.target.value)}
            placeholder="E.g., catch up, discuss work, relationship conversation"
            className="w-full px-3 py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">When and where?</label>
          <input
            type="text"
            value={prep.when}
            onChange={(e) => handleChange("when", e.target.value)}
            placeholder="Date, time, location"
            className="w-full px-3 py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">Any concerns or goals?</label>
          <textarea
            value={prep.concerns}
            onChange={(e) => handleChange("concerns", e.target.value)}
            placeholder="Things you're worried about, topics to discuss, how you want to feel after..."
            className="w-full px-3 py-2 rounded-lg text-white text-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              minHeight: "100px",
            }}
          />
        </div>

        <button
          className="w-full py-2 rounded-lg text-sm font-medium transition-all"
          style={{
            background: GOLD,
            color: NAVY,
          }}
        >
          Save Prep & Set Reminder
        </button>
      </div>
    </div>
  );
}

function ScriptLibrary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedScript, setExpandedScript] = useState<string | null>(null);

  const categories = Array.from(new Set(SCRIPT_LIBRARY.map((s) => s.category)));

  const filtered = SCRIPT_LIBRARY.filter((script) => {
    const matchesSearch =
      script.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      script.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || script.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <BookOpen className="w-5 h-5" style={{ color: GOLD }} />
        Script Library
      </h2>

      <div className="space-y-4">
        {/* Search */}
        <div className="flex gap-2">
          <div className="flex-1 flex items-center px-3 rounded-lg" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
            <Search className="w-4 h-4 text-gray-500 mr-2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search scripts..."
              className="flex-1 py-2 bg-transparent text-sm text-white outline-none"
            />
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedCategory(null)}
            className="px-3 py-1 rounded-full text-xs font-medium transition-all"
            style={{
              background: !selectedCategory ? GOLD : "rgba(255,255,255,0.05)",
              color: !selectedCategory ? NAVY : "#fff",
              border: !selectedCategory ? "none" : "1px solid rgba(255,255,255,0.1)",
            }}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className="px-3 py-1 rounded-full text-xs font-medium transition-all"
              style={{
                background: selectedCategory === cat ? GOLD : "rgba(255,255,255,0.05)",
                color: selectedCategory === cat ? NAVY : "#fff",
                border: selectedCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scripts List */}
        <div className="space-y-2 mt-4">
          {filtered.map((script) => {
            const config = DIFFICULTY_CONFIG[script.difficulty];
            const isExpanded = expandedScript === script.id;

            return (
              <div
                key={script.id}
                className="rounded-lg border transition-all"
                style={{
                  background: SURFACE,
                  borderColor: isExpanded ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.1)",
                }}
              >
                <button
                  onClick={() => setExpandedScript(isExpanded ? null : script.id)}
                  className="w-full p-4 flex items-start justify-between gap-2"
                >
                  <div className="text-left flex-1">
                    <h3 className="font-semibold text-white text-sm">{script.title}</h3>
                    <p className="text-xs text-gray-400 mt-1">{script.description}</p>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span
                      className="text-xs font-bold px-2 py-1 rounded"
                      style={{
                        background: config.bg,
                        color: config.text,
                        border: `1px solid ${config.border}`,
                      }}
                    >
                      {script.difficulty}
                    </span>
                    <ChevronDown
                      className="w-4 h-4 text-gray-500 transition-transform"
                      style={{
                        transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </div>
                </button>

                {isExpanded && (
                  <div className="px-4 pb-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                    <p className="text-sm text-gray-300 mt-3 italic">{`"${script.script}"`}</p>
                    <button
                      className="mt-3 w-full py-2 rounded-lg text-sm font-medium transition-all"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                        color: GOLD,
                        border: `1px solid rgba(201,168,76,0.3)`,
                      }}
                    >
                      Copy to Practice
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SensoryLoadTracker() {
  const [readings] = useState<SensoryReading[]>([
    { area: "Noise Level", level: 6 },
    { area: "Visual Stimulation", level: 4 },
    { area: "Social Demand", level: 7 },
    { area: "Physical Comfort", level: 5 },
  ]);

  const avgLevel = Math.round(readings.reduce((sum, r) => sum + r.level, 0) / readings.length);

  const getLoadColor = (level: number) => {
    if (level <= 3) return "#22c55e";
    if (level <= 5) return "#eab308";
    if (level <= 7) return "#f97316";
    return "#ef4444";
  };

  const getLoadLabel = (level: number) => {
    if (level <= 3) return "Low";
    if (level <= 5) return "Moderate";
    if (level <= 7) return "High";
    return "Critical";
  };

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Zap className="w-5 h-5" style={{ color: GOLD }} />
        Sensory Load Tracker
      </h2>

      <div className="space-y-4">
        {/* Current Load */}
        <div className="text-center">
          <div className="relative w-24 h-24 mx-auto mb-3">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              <circle
                cx="50"
                cy="50"
                r="45"
                fill="none"
                stroke={getLoadColor(avgLevel)}
                strokeWidth="4"
                strokeDasharray={`${(avgLevel / 10) * Math.PI * 90} ${Math.PI * 90}`}
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-bold text-white">{avgLevel}</span>
              <span className="text-xs text-gray-400">/10</span>
            </div>
          </div>
          <p className="text-sm font-semibold text-white">{getLoadLabel(avgLevel)} Load</p>
        </div>

        {/* Individual Areas */}
        <div className="space-y-3">
          {readings.map((reading) => (
            <div key={reading.area}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-xs font-medium text-gray-400">{reading.area}</span>
                <span className="text-sm font-bold" style={{ color: getLoadColor(reading.level) }}>
                  {reading.level}/10
                </span>
              </div>
              <div
                className="w-full h-2 rounded-full"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  overflow: "hidden",
                }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${(reading.level / 10) * 100}%`,
                    background: getLoadColor(reading.level),
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {avgLevel > 7 && (
          <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <p className="text-xs text-orange-300">
              <strong>Tip:</strong> You're in a high-load state. Consider taking breaks or using coping strategies during this meeting.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function DebriefPrompt() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        {submitted ? (
          <>
            <CheckCircle className="w-5 h-5 text-green-500" />
            Thank You for Debriefing
          </>
        ) : (
          <>
            <AlertCircle className="w-5 h-5" style={{ color: GOLD }} />
            Post-Interaction Debrief
          </>
        )}
      </h2>

      {!submitted ? (
        <div className="space-y-4">
          <p className="text-sm text-gray-300">How did the interaction go?</p>

          <div className="space-y-2">
            {[
              { label: "How did you feel?", field: "feeling" },
              { label: "What went well?", field: "positive" },
              { label: "Any challenges?", field: "challenges" },
              { label: "One thing to remember next time?", field: "learning" },
            ].map((item) => (
              <textarea
                key={item.field}
                placeholder={item.label}
                className="w-full px-3 py-2 rounded-lg text-white text-sm"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  minHeight: "60px",
                }}
              />
            ))}
          </div>

          <button
            onClick={() => setSubmitted(true)}
            className="w-full py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              background: GOLD,
              color: NAVY,
            }}
          >
            Save Debrief
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <p className="text-sm text-green-300">Your debrief has been saved. You're building wisdom with each interaction. 🌱</p>
          <button
            onClick={() => setSubmitted(false)}
            className="w-full py-2 rounded-lg text-sm font-medium transition-all"
            style={{
              background: "rgba(201,168,76,0.1)",
              color: GOLD,
              border: `1px solid rgba(201,168,76,0.3)`,
            }}
          >
            Edit Debrief
          </button>
        </div>
      )}
    </div>
  );
}

export default function SocialGuardianPage() {
  return (
    <div className="min-h-screen p-6" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8" style={{ color: GOLD }} />
            <h1 className="text-3xl font-bold text-white">Social Guardian</h1>
          </div>
          <p className="text-gray-400">Master social interactions with preparation, scripts, sensory awareness, and reflection</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MeetingPrepForm />
          <SensoryLoadTracker />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <ScriptLibrary />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <DebriefPrompt />
        </div>
      </div>
    </div>
  );
}
