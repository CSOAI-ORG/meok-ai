'use client';

/**
 * Trust Visualization Dashboard
 *
 * From SOVEREIGN_MISSING_LAYER research:
 * "How does the user KNOW their Sovereign is learning?"
 *
 * Four panels:
 * 1. Memory Garden — topics as nodes, connections as lines
 * 2. Relationship Timeline — key moments in the journey
 * 3. Learning Indicators — confidence bars by topic
 * 4. Care Proof — specific adaptation examples
 */

import { useState } from 'react';
import { Brain, Clock, BarChart3, Heart, Sparkles } from 'lucide-react';

// ── Data ────────────────────────────────────────────────────────────────

const MEMORY_TOPICS = [
  { id: 'work', label: 'Work', size: 0.8, color: '#c9a84c', x: 45, y: 30 },
  { id: 'health', label: 'Health', size: 0.5, color: '#10B981', x: 70, y: 55 },
  { id: 'family', label: 'Family', size: 0.7, color: '#F472B6', x: 25, y: 60 },
  { id: 'goals', label: 'Goals', size: 0.6, color: '#7C3AED', x: 55, y: 70 },
  { id: 'stress', label: 'Stress', size: 0.4, color: '#EF4444', x: 35, y: 40 },
  { id: 'creativity', label: 'Creativity', size: 0.3, color: '#06B6D4', x: 75, y: 35 },
];

const CONNECTIONS = [
  { from: 'work', to: 'stress', strength: 0.8 },
  { from: 'work', to: 'goals', strength: 0.6 },
  { from: 'family', to: 'stress', strength: 0.5 },
  { from: 'health', to: 'goals', strength: 0.4 },
  { from: 'creativity', to: 'work', strength: 0.3 },
];

const TIMELINE_EVENTS = [
  { date: 'Mar 15', event: 'First conversation', type: 'milestone' as const },
  { date: 'Mar 17', event: 'Learned your work schedule', type: 'learning' as const },
  { date: 'Mar 19', event: 'First emotional support moment', type: 'care' as const },
  { date: 'Mar 21', event: 'Remembered your project deadline', type: 'memory' as const },
  { date: 'Mar 23', event: 'Adapted communication style', type: 'adaptation' as const },
  { date: 'Mar 25', event: 'Guardian activated', type: 'milestone' as const },
];

const LEARNING_TOPICS = [
  { topic: 'Your work style', confidence: 0.82, trend: 'up' as const },
  { topic: 'Communication preferences', confidence: 0.75, trend: 'up' as const },
  { topic: 'Stress triggers', confidence: 0.68, trend: 'up' as const },
  { topic: 'Family dynamics', confidence: 0.45, trend: 'stable' as const },
  { topic: 'Creative interests', confidence: 0.30, trend: 'up' as const },
];

const CARE_PROOFS = [
  {
    date: 'Mar 19',
    observation: 'You mentioned feeling overwhelmed at work.',
    adaptation: 'Since then, I lead with shorter, calmer responses when you message in the evening.',
  },
  {
    date: 'Mar 21',
    observation: 'You prefer bullet points over paragraphs.',
    adaptation: "I've switched to structured lists for complex topics.",
  },
  {
    date: 'Mar 23',
    observation: 'You think most clearly in the morning.',
    adaptation: 'I save deeper questions for morning conversations and keep evenings light.',
  },
];

// ── Component ───────────────────────────────────────────────────────────

type Tab = 'garden' | 'timeline' | 'learning' | 'care';

export default function TrustDashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>('garden');

  const tabs: { id: Tab; label: string; icon: React.ReactNode }[] = [
    { id: 'garden', label: 'Memory Garden', icon: <Brain className="w-4 h-4" /> },
    { id: 'timeline', label: 'Timeline', icon: <Clock className="w-4 h-4" /> },
    { id: 'learning', label: 'Learning', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'care', label: 'Care Proof', icon: <Heart className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen px-4 md:px-6 py-6 md:py-8" style={{ background: '#0d0c18' }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Sparkles className="w-5 h-5 text-[#c9a84c]" />
            <h1 className="text-white font-black text-xl md:text-2xl">Trust Dashboard</h1>
          </div>
          <p className="text-white/40 text-sm">
            See exactly what your companion knows, how it&apos;s learning, and proof that care is real.
          </p>
        </div>

        {/* Tab bar */}
        <div className="flex gap-1 p-1 rounded-xl mb-6 md:mb-8 overflow-x-auto" style={{ background: 'rgba(255,255,255,0.04)' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-medium transition-all flex-1 justify-center whitespace-nowrap"
              style={{
                background: activeTab === tab.id ? 'rgba(201,168,76,0.15)' : 'transparent',
                color: activeTab === tab.id ? '#c9a84c' : 'rgba(255,255,255,0.35)',
              }}
            >
              {tab.icon}
              <span className="hidden sm:inline">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* ── Memory Garden ──────────────────────────────── */}
        {activeTab === 'garden' && (
          <div className="rounded-2xl p-4 md:p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 className="text-white font-bold text-lg mb-2">Memory Garden</h2>
            <p className="text-white/30 text-xs mb-6">Topics grow as your companion learns more. Lines show connections between ideas.</p>

            {/* SVG node graph */}
            <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden" style={{ background: 'rgba(0,0,0,0.3)' }}>
              <svg width="100%" height="100%" viewBox="0 0 100 100" className="absolute inset-0">
                {/* Connection lines */}
                {CONNECTIONS.map((conn) => {
                  const from = MEMORY_TOPICS.find((t) => t.id === conn.from)!;
                  const to = MEMORY_TOPICS.find((t) => t.id === conn.to)!;
                  return (
                    <line
                      key={`${conn.from}-${conn.to}`}
                      x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                      stroke="rgba(201,168,76,0.15)"
                      strokeWidth={conn.strength * 0.5}
                    />
                  );
                })}

                {/* Topic nodes */}
                {MEMORY_TOPICS.map((topic) => (
                  <g key={topic.id}>
                    <circle
                      cx={topic.x} cy={topic.y}
                      r={topic.size * 5 + 2}
                      fill={`${topic.color}30`}
                      stroke={`${topic.color}60`}
                      strokeWidth="0.5"
                    />
                    <text
                      x={topic.x} y={topic.y + topic.size * 5 + 5}
                      textAnchor="middle"
                      fill="rgba(255,255,255,0.5)"
                      fontSize="3"
                      fontWeight="600"
                    >
                      {topic.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>

            <p className="text-white/20 text-xs mt-4 text-center">
              {MEMORY_TOPICS.length} topics tracked \u00b7 {CONNECTIONS.length} connections found
            </p>
          </div>
        )}

        {/* ── Relationship Timeline ──────────────────────── */}
        {activeTab === 'timeline' && (
          <div className="rounded-2xl p-4 md:p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 className="text-white font-bold text-lg mb-2">Relationship Timeline</h2>
            <p className="text-white/30 text-xs mb-6">Key moments in your journey together.</p>

            <div className="relative pl-6">
              <div className="absolute left-2 top-2 bottom-2 w-px" style={{ background: 'rgba(201,168,76,0.2)' }} />

              <div className="space-y-4">
                {TIMELINE_EVENTS.map((evt, i) => {
                  const colors: Record<string, string> = {
                    milestone: '#c9a84c',
                    learning: '#7C3AED',
                    care: '#F472B6',
                    memory: '#10B981',
                    adaptation: '#06B6D4',
                  };
                  return (
                    <div key={i} className="relative flex items-start gap-4">
                      <div
                        className="absolute left-[-16px] w-3 h-3 rounded-full border-2"
                        style={{ borderColor: colors[evt.type], background: '#0d0c18' }}
                      />
                      <div>
                        <p className="text-white/70 text-sm font-medium">{evt.event}</p>
                        <p className="text-white/25 text-xs">{evt.date}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* ── Learning Indicators ────────────────────────── */}
        {activeTab === 'learning' && (
          <div className="rounded-2xl p-4 md:p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 className="text-white font-bold text-lg mb-2">Learning Progress</h2>
            <p className="text-white/30 text-xs mb-6">Topics your companion understands well vs still learning.</p>

            <div className="space-y-4">
              {LEARNING_TOPICS.map((item) => (
                <div key={item.topic}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-white/70 text-sm">{item.topic}</span>
                    <span className="text-white/30 text-xs">
                      {Math.round(item.confidence * 100)}%
                      {item.trend === 'up' && ' \u2191'}
                      {item.trend === 'stable' && ' \u2192'}
                    </span>
                  </div>
                  <div className="h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
                    <div
                      className="h-2 rounded-full transition-all duration-1000"
                      style={{
                        width: `${item.confidence * 100}%`,
                        background: item.confidence > 0.7 ? '#10B981' : item.confidence > 0.4 ? '#c9a84c' : '#7C3AED',
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ── Care Proof ─────────────────────────────────── */}
        {activeTab === 'care' && (
          <div className="rounded-2xl p-4 md:p-6" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)' }}>
            <h2 className="text-white font-bold text-lg mb-2">Care Proof</h2>
            <p className="text-white/30 text-xs mb-6">
              Specific examples of how your companion adapted to you. This is proof that care is real, not marketing.
            </p>

            <div className="space-y-4">
              {CARE_PROOFS.map((proof, i) => (
                <div
                  key={i}
                  className="rounded-xl p-5"
                  style={{ background: 'rgba(201,168,76,0.04)', border: '1px solid rgba(201,168,76,0.1)' }}
                >
                  <p className="text-white/25 text-xs mb-2">{proof.date}</p>
                  <p className="text-white/50 text-sm mb-3">
                    <span className="text-white/30">Observed:</span> {proof.observation}
                  </p>
                  <p className="text-[#c9a84c]/80 text-sm font-medium">
                    <span className="text-[#c9a84c]/40">Adapted:</span> {proof.adaptation}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
