"use client";

import { useState } from "react";
import { Heart, Pill, AlertCircle, Phone, Activity, Calendar, Clock, Users } from "lucide-react";

const GOLD = "#c9a84c";
const NAVY = "#0a0e27";
const SURFACE = "#0f1425";
const CREAM = "#f5f1ed";

interface EmergencyContact {
  name: string;
  relation: string;
  phone: string;
  priority: number;
}

interface MedicationReminder {
  name: string;
  dosage: string;
  time: string;
  taken: boolean;
}

interface CognitivePattern {
  label: string;
  value: number;
  trend: "up" | "stable" | "down";
}

const EMERGENCY_CONTACTS: EmergencyContact[] = [
  { name: "Sarah Johnson", relation: "Daughter", phone: "(555) 123-4567", priority: 1 },
  { name: "John Johnson", relation: "Son", phone: "(555) 234-5678", priority: 2 },
  { name: "Dr. Patricia Lee", relation: "Primary Care", phone: "(555) 345-6789", priority: 3 },
];

const TODAY_MEDICATIONS: MedicationReminder[] = [
  { name: "Blood Pressure Medication", dosage: "1 tablet", time: "8:00 AM", taken: true },
  { name: "Thyroid Medication", dosage: "1 tablet", time: "8:00 AM", taken: true },
  { name: "Calcium Supplement", dosage: "1 tablet", time: "12:00 PM", taken: false },
  { name: "Sleep Aid", dosage: "1 tablet", time: "9:00 PM", taken: false },
];

const COGNITIVE_PATTERNS: CognitivePattern[] = [
  { label: "Memory Clarity", value: 72, trend: "stable" },
  { label: "Focus Duration", value: 65, trend: "down" },
  { label: "Mood Stability", value: 78, trend: "up" },
  { label: "Daily Energy", value: 68, trend: "stable" },
];

function SimplifiedUIMode({ enabled }: { enabled: boolean }) {
  const baseButtonSize = enabled ? "py-4 px-6 text-lg" : "py-2 px-4 text-sm";
  const baseTextSize = enabled ? "text-lg" : "text-sm";

  return (
    <div>
      <h3 className={`font-semibold text-white mb-3 flex items-center gap-2 ${enabled ? "text-xl" : "text-base"}`}>
        <Heart className="w-5 h-5" style={{ color: GOLD }} />
        Quick Actions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          { label: "Chat with Companion", action: "chat" },
          { label: "View My Health", action: "health" },
          { label: "My Medications", action: "meds" },
          { label: "Emergency Contacts", action: "emergency" },
        ].map((item) => (
          <button
            key={item.action}
            className={`rounded-xl font-semibold transition-all ${baseButtonSize}`}
            style={{
              background: GOLD,
              color: NAVY,
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function MedicationTracker() {
  const takenCount = TODAY_MEDICATIONS.filter((m) => m.taken).length;
  const totalCount = TODAY_MEDICATIONS.length;

  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
          <Pill className="w-5 h-5" style={{ color: GOLD }} />
          Medication Reminder
        </h2>
        <div className="text-sm font-bold" style={{ color: GOLD }}>
          {takenCount}/{totalCount} taken
        </div>
      </div>

      <div className="space-y-3">
        {TODAY_MEDICATIONS.map((med, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg border flex items-center justify-between"
            style={{
              background: med.taken ? "rgba(34,197,94,0.1)" : "rgba(255,255,255,0.05)",
              borderColor: med.taken ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.1)",
            }}
          >
            <div className="flex-1">
              <p className="font-semibold text-white">{med.name}</p>
              <div className="flex items-center gap-4 mt-1">
                <span className="text-xs text-gray-400">{med.dosage}</span>
                <span className="text-xs text-gray-400 flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {med.time}
                </span>
              </div>
            </div>

            <button
              className="px-4 py-2 rounded-lg font-medium text-sm transition-all"
              style={{
                background: med.taken ? "rgba(34,197,94,0.2)" : GOLD,
                color: med.taken ? "#22c55e" : NAVY,
              }}
            >
              {med.taken ? "✓ Taken" : "Mark Taken"}
            </button>
          </div>
        ))}
      </div>

      <button
        className="w-full mt-4 py-3 rounded-lg font-semibold text-sm transition-all"
        style={{
          background: "rgba(201,168,76,0.1)",
          color: GOLD,
          border: `1px solid rgba(201,168,76,0.3)`,
        }}
      >
        View Full Medication Schedule →
      </button>
    </div>
  );
}

function CognitivePatternTracking() {
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
        Cognitive Wellness Pattern
      </h2>

      <div className="space-y-4">
        {COGNITIVE_PATTERNS.map((pattern) => {
          const getTrendColor = (trend: string) => {
            if (trend === "up") return "#22c55e";
            if (trend === "down") return "#ef4444";
            return "#eab308";
          };

          const getTrendIcon = (trend: string) => {
            if (trend === "up") return "↑";
            if (trend === "down") return "↓";
            return "→";
          };

          return (
            <div key={pattern.label}>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-white">{pattern.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold" style={{ color: getTrendColor(pattern.trend) }}>
                    {pattern.value}%
                  </span>
                  <span style={{ color: getTrendColor(pattern.trend) }}>{getTrendIcon(pattern.trend)}</span>
                </div>
              </div>

              <div
                className="w-full h-3 rounded-full overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${pattern.value}%`,
                    background: getTrendColor(pattern.trend),
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <p className="text-xs text-gray-400 mt-4 italic">
        These patterns are tracked from your daily interactions. Share this with your caregiver to discuss overall wellness.
      </p>

      <button
        className="w-full mt-4 py-2 rounded-lg font-medium text-sm transition-all"
        style={{
          background: "rgba(201,168,76,0.1)",
          color: GOLD,
          border: `1px solid rgba(201,168,76,0.3)`,
        }}
      >
        Share with Caregiver →
      </button>
    </div>
  );
}

function EmergencyContactQuickDial() {
  return (
    <div
      className="rounded-2xl p-6 border"
      style={{
        background: SURFACE,
        borderColor: "rgba(255,255,255,0.1)",
      }}
    >
      <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
        <AlertCircle className="w-5 h-5" style={{ color: "#ef4444" }} />
        Emergency Contacts
      </h2>

      <div className="space-y-3">
        {EMERGENCY_CONTACTS.map((contact, idx) => (
          <div
            key={idx}
            className="p-4 rounded-lg border flex items-center justify-between"
            style={{
              background: "rgba(255,255,255,0.05)",
              borderColor: idx === 0 ? "rgba(239,68,68,0.3)" : "rgba(255,255,255,0.1)",
            }}
          >
            <div>
              <p className="font-semibold text-white">{contact.name}</p>
              <p className="text-xs text-gray-400 mt-1">{contact.relation}</p>
            </div>

            <button
              className="px-4 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2"
              style={{
                background: idx === 0 ? "#ef4444" : GOLD,
                color: idx === 0 ? "#fff" : NAVY,
              }}
            >
              <Phone className="w-4 h-4" />
              Call
            </button>
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-400 mt-4">
        Your top contact is highlighted. Tap to call immediately with one touch.
      </p>
    </div>
  );
}

export default function ElderCarePage() {
  const [simplifiedMode, setSimplifiedMode] = useState(false);

  return (
    <div className="min-h-screen p-6" style={{ background: NAVY }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <Heart className="w-8 h-8" style={{ color: GOLD }} />
              <h1 className="text-3xl font-bold text-white">Elder Care Companion</h1>
            </div>
            <p className="text-gray-400">Health support and family connection for your wellbeing</p>
          </div>

          <button type="button"
            onClick={() => setSimplifiedMode(!simplifiedMode)}
            className="px-4 py-2 rounded-lg font-medium text-sm transition-all"
            style={{
              background: simplifiedMode ? "rgba(34,197,94,0.2)" : "rgba(255,255,255,0.05)",
              color: simplifiedMode ? "#22c55e" : "#fff",
              border: `1px solid ${simplifiedMode ? "rgba(34,197,94,0.3)" : "rgba(255,255,255,0.1)"}`,
            }}
          >
            {simplifiedMode ? "✓ Simplified UI" : "Default UI"}
          </button>
        </div>

        {/* Main Content */}
        {simplifiedMode ? (
          <div className="space-y-6">
            <div
              className="rounded-2xl p-8 border"
              style={{
                background: SURFACE,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <SimplifiedUIMode enabled={true} />
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <MedicationTracker />
            <CognitivePatternTracking />
            <EmergencyContactQuickDial />
          </div>
        )}

        {/* Info Cards */}
        {!simplifiedMode && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              className="p-4 rounded-xl border"
              style={{
                background: SURFACE,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <Users className="w-5 h-5 mb-2" style={{ color: GOLD }} />
              <h3 className="font-semibold text-sm text-white mb-1">Family Connection</h3>
              <p className="text-xs text-gray-400">Your family gets automatic updates on your wellbeing, with your consent.</p>
            </div>

            <div
              className="p-4 rounded-xl border"
              style={{
                background: SURFACE,
                borderColor: "rgba(255,255,255,0.1)",
              }}
            >
              <Pill className="w-5 h-5 mb-2" style={{ color: GOLD }} />
              <h3 className="font-semibold text-sm text-white mb-1">Medication Support</h3>
              <p className="text-xs text-gray-400">Never miss a dose with gentle reminders and a complete medication history.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
