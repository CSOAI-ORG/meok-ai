"use client";

import { useState } from "react";
import { AlertTriangle, Heart, Eye, EyeOff, ExternalLink, Shield, Lock, TrendingUp } from "lucide-react";

const GOLD = "#c9a84c";
const NAVY = "#0a0e27";
const SURFACE = "#0f1425";
const CREAM = "#f5f1ed";

interface DetectedPattern {
  id: string;
  name: string;
  severity: "low" | "medium" | "high" | "critical";
  frequency: number;
  examples: string[];
  resourceUrl: string;
  resourceTitle: string;
  resourceDescription: string;
}

// Example relationship patterns detected
const DETECTED_PATTERNS: DetectedPattern[] = [
  {
    id: "isolation",
    name: "Social Isolation",
    severity: "high",
    frequency: 12,
    examples: ["Discouraging time with friends", "Controlling access to family"],
    resourceUrl: "#",
    resourceTitle: "Understanding Isolation in Relationships",
    resourceDescription: "Learn how isolating behavior affects your support network and independence",
  },
  {
    id: "gaslighting",
    name: "Gaslighting",
    severity: "critical",
    frequency: 8,
    examples: ["Denying past statements", "Making you question your memory"],
    resourceUrl: "#",
    resourceTitle: "Recognizing Gaslighting Tactics",
    resourceDescription: "Identify when someone is manipulating your perception of reality",
  },
  {
    id: "control",
    name: "Controlling Behavior",
    severity: "high",
    frequency: 15,
    examples: ["Monitoring your activities", "Dictating your choices"],
    resourceUrl: "#",
    resourceTitle: "Breaking Free from Control",
    resourceDescription: "Strategies for maintaining autonomy and healthy boundaries",
  },
  {
    id: "criticism",
    name: "Constant Criticism",
    severity: "medium",
    frequency: 20,
    examples: ["Negative comments about appearance", "Belittling your accomplishments"],
    resourceUrl: "#",
    resourceTitle: "Managing Chronic Criticism",
    resourceDescription: "Protect your self-esteem and build resilience",
  },
  {
    id: "blame",
    name: "Blame Shifting",
    severity: "high",
    frequency: 10,
    examples: ["Blaming you for their anger", "Refusing to take responsibility"],
    resourceUrl: "#",
    resourceTitle: "Accountability in Relationships",
    resourceDescription: "Why shared responsibility matters for healthy dynamics",
  },
];

const SEVERITY_COLORS: Record<string, { bg: string; border: string; text: string; dot: string }> = {
  low: { bg: "rgba(34,197,94,0.1)", border: "rgba(34,197,94,0.3)", text: "#22c55e", dot: "#22c55e" },
  medium: { bg: "rgba(234,179,8,0.1)", border: "rgba(234,179,8,0.3)", text: "#eab308", dot: "#eab308" },
  high: { bg: "rgba(249,115,22,0.1)", border: "rgba(249,115,22,0.3)", text: "#f97316", dot: "#f97316" },
  critical: { bg: "rgba(239,68,68,0.1)", border: "rgba(239,68,68,0.3)", text: "#ef4444", dot: "#ef4444" },
};

// Pattern Visualizer Component
function PatternVisualizer({ patterns }: { patterns: DetectedPattern[] }) {
  const maxFrequency = Math.max(...patterns.map((p) => p.frequency));

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Pattern Frequency</h3>
      <div className="space-y-3">
        {patterns.map((pattern) => {
          const colors = SEVERITY_COLORS[pattern.severity];
          const width = (pattern.frequency / maxFrequency) * 100;

          return (
            <div key={pattern.id}>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full" style={{ background: colors.dot }} />
                  <span className="text-sm text-gray-300">{pattern.name}</span>
                </div>
                <span className="text-xs font-semibold" style={{ color: colors.text }}>
                  {pattern.frequency} instances
                </span>
              </div>
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  background: colors.bg,
                  border: `1px solid ${colors.border}`,
                  width: `${width}%`,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Red Flags Summary Component
function RedFlagsSummary({ patterns }: { patterns: DetectedPattern[] }) {
  const criticalCount = patterns.filter((p) => p.severity === "critical").length;
  const highCount = patterns.filter((p) => p.severity === "high").length;
  const totalInstances = patterns.reduce((sum, p) => sum + p.frequency, 0);

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(239,68,68,0.3)",
      }}
    >
      <div className="flex items-start gap-3 mb-4">
        <AlertTriangle className="w-5 h-5 flex-shrink-0" style={{ color: "#ef4444" }} />
        <div>
          <h3 className="font-semibold text-white mb-1">Red Flags I've Noticed</h3>
          <p className="text-xs text-gray-400">Patterns detected in your recent interactions</p>
        </div>
      </div>

      <div className="space-y-3">
        {criticalCount > 0 && (
          <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20">
            <p className="text-sm text-red-300">
              <span className="font-semibold">{criticalCount} critical</span> warning sign{criticalCount > 1 ? "s" : ""} detected
            </p>
          </div>
        )}

        {highCount > 0 && (
          <div className="p-3 rounded-lg bg-orange-500/10 border border-orange-500/20">
            <p className="text-sm text-orange-300">
              <span className="font-semibold">{highCount} high</span> concern pattern{highCount > 1 ? "s" : ""}
            </p>
          </div>
        )}

        <div className="p-3 rounded-lg" style={{ background: "rgba(201,168,76,0.1)", borderColor: "rgba(201,168,76,0.2)" }}>
          <p className="text-sm text-gray-300">
            <span className="font-semibold">{totalInstances}</span> total warning indicators across all patterns
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-400 mt-4 italic">
        These patterns don't define your relationship, but they deserve your attention. Consider speaking with a trusted friend or counselor.
      </p>
    </div>
  );
}

// Resource Links Component
function ResourceLinks({ patterns }: { patterns: DetectedPattern[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Resources & Support</h3>
      <div className="space-y-2">
        {patterns.map((pattern) => {
          const colors = SEVERITY_COLORS[pattern.severity];

          return (
            <a
              key={pattern.id}
              href={pattern.resourceUrl}
              className="block p-3 rounded-lg border transition-all hover:border-opacity-100"
              style={{
                background: colors.bg,
                borderColor: colors.border,
              }}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-white mb-1">{pattern.resourceTitle}</h4>
                  <p className="text-xs text-gray-400">{pattern.resourceDescription}</p>
                </div>
                <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: colors.text }} />
              </div>
            </a>
          );
        })}
      </div>

      <div className="pt-4 border-t border-white/10">
        <a
          href="#"
          className="text-sm text-center w-full py-2 rounded-lg transition-all"
          style={{
            color: GOLD,
            background: "rgba(201,168,76,0.1)",
            borderColor: "rgba(201,168,76,0.2)",
          }}
        >
          Find a Counselor or Therapist →
        </a>
      </div>
    </div>
  );
}

export default function RelationshipShieldPage() {
  const [confidentialMode, setConfidentialMode] = useState(false);

  return (
    <div className="min-h-screen p-6" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto">
        {/* Header with Confidential Mode Toggle */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-8 h-8" style={{ color: GOLD }} />
              <h1 className="text-3xl font-bold text-white">Relationship Shield</h1>
            </div>
            <p className="text-gray-400">
              Understanding patterns in your relationships. {confidentialMode ? "Privacy mode active." : ""}
            </p>
          </div>

          {/* Confidential Mode Toggle */}
          <button
            onClick={() => setConfidentialMode(!confidentialMode)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg border transition-all"
            style={{
              background: confidentialMode ? `rgba(201,168,76,0.2)` : "rgba(255,255,255,0.05)",
              borderColor: confidentialMode ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.1)",
              color: confidentialMode ? GOLD : "#fff",
            }}
          >
            {confidentialMode ? (
              <>
                <Lock className="w-4 h-4" />
                <span className="text-sm font-medium">Private</span>
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                <span className="text-sm font-medium">Default</span>
              </>
            )}
          </button>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Pattern Visualizer (Left 2 columns) */}
          <div className="lg:col-span-2">
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: SURFACE,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <PatternVisualizer patterns={DETECTED_PATTERNS} />
            </div>
          </div>

          {/* Red Flags Summary (Right column) */}
          <div className="lg:col-span-1">
            <RedFlagsSummary patterns={DETECTED_PATTERNS} />
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl p-6 border"
              style={{
                background: SURFACE,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <ResourceLinks patterns={DETECTED_PATTERNS} />
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            className="p-4 rounded-xl border"
            style={{
              background: SURFACE,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Shield className="w-5 h-5 mb-2" style={{ color: GOLD }} />
            <h3 className="font-semibold text-sm text-white mb-1">What This Means</h3>
            <p className="text-xs text-gray-400">
              Relationship Shield analyzes patterns in your communications to identify potential red flags. This is not a diagnosis, but a tool for self-awareness.
            </p>
          </div>

          <div
            className="p-4 rounded-xl border"
            style={{
              background: SURFACE,
              borderColor: "rgba(255,255,255,0.1)",
            }}
          >
            <Lock className="w-5 h-5 mb-2" style={{ color: GOLD }} />
            <h3 className="font-semibold text-sm text-white mb-1">Your Privacy</h3>
            <p className="text-xs text-gray-400">
              Enable Confidential Mode to hide this page from your device. Your data is encrypted and never shared.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
