"use client";

import { useState } from "react";
import { Shield, Clock, Activity, Zap, AlertCircle, ChevronRight, ToggleRight, ToggleLeft } from "lucide-react";

const GOLD = "#c9a84c";
const NAVY = "#0a0e27";
const SURFACE = "#0f1425";
const CREAM = "#f5f1ed";

interface ContentFilter {
  category: string;
  level: number; // 0-5, where 0 is completely blocked
  description: string;
}

interface ActivityLog {
  time: string;
  activity: string;
  duration: string;
  category: string;
}

interface CompanionPersonality {
  trait: string;
  age: "4-6" | "7-9" | "10-12" | "13-15" | "16-18";
  description: string;
  setting: number; // 0-10
}

const CONTENT_FILTERS: ContentFilter[] = [
  {
    category: "Violence & Scary Content",
    level: 4,
    description: "Filters out intense, graphic, or frightening material",
  },
  {
    category: "Mature Topics",
    level: 3,
    description: "Restricts discussions of adult themes and relationships",
  },
  {
    category: "Profanity & Insults",
    level: 5,
    description: "Blocks inappropriate language and disrespectful communication",
  },
  {
    category: "Commercial & Ads",
    level: 2,
    description: "Limits exposure to marketing and commercial messaging",
  },
  {
    category: "Misinformation",
    level: 5,
    description: "Prevents sharing of false or misleading information",
  },
];

const TODAY_ACTIVITY: ActivityLog[] = [
  {
    time: "2:30 PM",
    activity: "Chat with Companion",
    duration: "18 minutes",
    category: "Conversation",
  },
  {
    time: "1:45 PM",
    activity: "Educational Game",
    duration: "25 minutes",
    category: "Learning",
  },
  { time: "1:15 PM", activity: "Creative Story", duration: "12 minutes", category: "Creative" },
  {
    time: "12:45 PM",
    activity: "Buddy Chat",
    duration: "10 minutes",
    category: "Social",
  },
];

const PERSONALITY_SETTINGS: CompanionPersonality[] = [
  {
    trait: "Humor Level",
    age: "10-12",
    description: "How funny and playful the companion is",
    setting: 7,
  },
  {
    trait: "Patience",
    age: "10-12",
    description: "How patient when explaining concepts",
    setting: 8,
  },
  {
    trait: "Enthusiasm",
    age: "10-12",
    description: "How excited about learning",
    setting: 7,
  },
  {
    trait: "Wisdom",
    age: "10-12",
    description: "How much sage advice given",
    setting: 6,
  },
];

function ContentFilteringControls() {
  const [filters, setFilters] = useState<ContentFilter[]>(CONTENT_FILTERS);
  const [expandedFilter, setExpandedFilter] = useState<string | null>(null);

  const handleLevelChange = (category: string, newLevel: number) => {
    setFilters(filters.map((f) => (f.category === category ? { ...f, level: newLevel } : f)));
  };

  const getLevelLabel = (level: number) => {
    if (level === 0) return "Blocked";
    if (level <= 2) return "Strict";
    if (level <= 3) return "Moderate";
    if (level <= 4) return "Relaxed";
    return "Allow All";
  };

  const getLevelColor = (level: number) => {
    if (level === 0) return "#ef4444";
    if (level <= 2) return "#f97316";
    if (level <= 3) return "#eab308";
    if (level <= 4) return "#22c55e";
    return "#10b981";
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
        <Shield className="w-5 h-5" style={{ color: GOLD }} />
        Content Filtering
      </h2>

      <p className="text-xs text-gray-400 mb-4">
        Adjust sensitivity levels for different content categories. Higher levels allow more content.
      </p>

      <div className="space-y-3">
        {filters.map((filter) => {
          const isExpanded = expandedFilter === filter.category;

          return (
            <div
              key={filter.category}
              className="rounded-lg border transition-all"
              style={{
                background: SURFACE,
                borderColor: isExpanded ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.1)",
              }}
            >
              <button
                onClick={() => setExpandedFilter(isExpanded ? null : filter.category)}
                className="w-full p-4 flex items-center justify-between gap-2"
              >
                <div className="text-left flex-1">
                  <p className="font-semibold text-white text-sm">{filter.category}</p>
                  <p className="text-xs text-gray-400 mt-1">{getLevelLabel(filter.level)}</p>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-6 rounded-sm transition-all"
                        style={{
                          background: i < filter.level ? getLevelColor(filter.level) : "rgba(255,255,255,0.1)",
                        }}
                      />
                    ))}
                  </div>
                  <ChevronRight
                    className="w-4 h-4 text-gray-500 transition-transform"
                    style={{
                      transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)",
                    }}
                  />
                </div>
              </button>

              {isExpanded && (
                <div className="px-4 pb-4 border-t" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                  <p className="text-xs text-gray-400 mt-3 mb-3">{filter.description}</p>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-gray-400">Sensitivity:</p>
                    <div className="flex gap-2">
                      {[0, 1, 2, 3, 4, 5].map((level) => (
                        <button
                          key={level}
                          onClick={() => handleLevelChange(filter.category, level)}
                          className="flex-1 px-2 py-1 rounded text-xs font-medium transition-all"
                          style={{
                            background:
                              filter.level === level
                                ? getLevelColor(level)
                                : "rgba(255,255,255,0.05)",
                            color: filter.level === level ? (level === 0 ? "#fff" : NAVY) : "#fff",
                          }}
                        >
                          {level}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TimeLimitControls() {
  const [timeLimits, setTimeLimits] = useState({
    daily: 120,
    session: 45,
    bedtime: "20:30",
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
        <Clock className="w-5 h-5" style={{ color: GOLD }} />
        Time Limits
      </h2>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">
            Daily Limit
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="30"
              max="240"
              step="15"
              value={timeLimits.daily}
              onChange={(e) => setTimeLimits({ ...timeLimits, daily: parseInt(e.target.value) })}
              className="flex-1"
              style={{
                accentColor: GOLD,
              }}
            />
            <span className="text-sm font-bold text-white w-16 text-right">{timeLimits.daily} min</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Maximum time allowed per day</p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">
            Per-Session Limit
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              min="15"
              max="120"
              step="5"
              value={timeLimits.session}
              onChange={(e) => setTimeLimits({ ...timeLimits, session: parseInt(e.target.value) })}
              className="flex-1"
              style={{
                accentColor: GOLD,
              }}
            />
            <span className="text-sm font-bold text-white w-16 text-right">{timeLimits.session} min</span>
          </div>
          <p className="text-xs text-gray-400 mt-2">Max time per session before break required</p>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase">
            Bedtime Cutoff
          </label>
          <input
            type="time"
            value={timeLimits.bedtime}
            onChange={(e) => setTimeLimits({ ...timeLimits, bedtime: e.target.value })}
            className="w-full px-3 py-2 rounded-lg text-white"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <p className="text-xs text-gray-400 mt-2">App becomes unavailable after this time</p>
        </div>

        <button
          className="w-full py-2 rounded-lg font-medium text-sm transition-all"
          style={{
            background: GOLD,
            color: NAVY,
          }}
        >
          Save Time Limits
        </button>
      </div>
    </div>
  );
}

function ActivitySummary() {
  const totalTime = TODAY_ACTIVITY.reduce((sum, log) => {
    const minutes = parseInt(log.duration.split(" ")[0]);
    return sum + minutes;
  }, 0);

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <Activity className="w-5 h-5" style={{ color: GOLD }} />
        Today's Activity
      </h2>

      <div className="mb-4 p-4 rounded-lg" style={{ background: "rgba(201,168,76,0.1)" }}>
        <p className="text-xs text-gray-400 mb-1">Total Time Today</p>
        <p className="text-2xl font-bold text-white">{totalTime} min</p>
        <p className="text-xs text-gray-400 mt-1">Within daily limit of 120 minutes</p>
      </div>

      <div className="space-y-2">
        {TODAY_ACTIVITY.map((log, idx) => (
          <div
            key={idx}
            className="p-3 rounded-lg border flex items-start justify-between"
            style={{
              background: "rgba(255,255,255,0.03)",
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <div>
              <p className="text-sm font-medium text-white">{log.activity}</p>
              <div className="flex gap-3 mt-1">
                <span className="text-xs text-gray-400">{log.time}</span>
                <span className="text-xs text-gray-400">{log.duration}</span>
                <span className="text-xs px-2 py-0.5 rounded" style={{ background: "rgba(201,168,76,0.2)", color: GOLD }}>
                  {log.category}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="w-full mt-4 py-2 rounded-lg font-medium text-sm transition-all"
        style={{
          background: "rgba(201,168,76,0.1)",
          color: GOLD,
          border: `1px solid rgba(201,168,76,0.3)`,
        }}
      >
        View Weekly Report →
      </button>
    </div>
  );
}

function PersonalityAdjustments() {
  const [personality, setPersonality] = useState<CompanionPersonality[]>(PERSONALITY_SETTINGS);

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
        Companion Personality (Age 10-12)
      </h2>

      <p className="text-xs text-gray-400 mb-4">
        Adjust how the companion interacts with your child. Lower values are more serious, higher values are more playful.
      </p>

      <div className="space-y-4">
        {personality.map((setting) => (
          <div key={setting.trait}>
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-sm font-semibold text-white">{setting.trait}</p>
                <p className="text-xs text-gray-400 mt-0.5">{setting.description}</p>
              </div>
              <span className="text-sm font-bold text-white">{setting.setting}/10</span>
            </div>

            <input
              type="range"
              min="0"
              max="10"
              step="1"
              value={setting.setting}
              onChange={(e) => {
                const newValue = parseInt(e.target.value);
                setPersonality(
                  personality.map((p) => (p.trait === setting.trait ? { ...p, setting: newValue } : p))
                );
              }}
              className="w-full"
              style={{
                accentColor: GOLD,
              }}
            />
          </div>
        ))}
      </div>

      <button
        className="w-full mt-6 py-2 rounded-lg font-medium text-sm transition-all"
        style={{
          background: GOLD,
          color: NAVY,
        }}
      >
        Save Personality Settings
      </button>
    </div>
  );
}

export default function ChildSafetyPage() {
  return (
    <div className="min-h-screen p-6" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8" style={{ color: GOLD }} />
            <h1 className="text-3xl font-bold text-white">Child Safety Controls</h1>
          </div>
          <p className="text-gray-400">
            Safe, age-appropriate learning with parental oversight and control
          </p>
        </div>

        {/* Info Banner */}
        <div
          className="mb-6 p-4 rounded-lg border flex gap-3"
          style={{
            background: "rgba(34,197,94,0.1)",
            borderColor: "rgba(34,197,94,0.3)",
          }}
        >
          <AlertCircle className="w-5 h-5 flex-shrink-0 text-green-400 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-green-300 mb-1">Child Account Protected</p>
            <p className="text-xs text-green-200">
              Your child has a supervised account with content filtering, time limits, and activity monitoring enabled.
            </p>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ContentFilteringControls />
          <TimeLimitControls />
          <ActivitySummary />
          <PersonalityAdjustments />
        </div>
      </div>
    </div>
  );
}
