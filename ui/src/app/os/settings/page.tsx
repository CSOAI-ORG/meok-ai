"use client";

import { useState } from "react";
import { Settings, Brain, Volume2, User, Sparkles, Save, RefreshCw, Check, AlertCircle, ArrowRight } from "lucide-react";
import { Surface, FeatureCard, IconOrb, GlowText } from "@/components/design-system";
import Link from "next/link";

interface ModelConfig {
  id: string;
  name: string;
  description: string;
  type: "fast" | "deep" | "coder" | "vision" | "orchestrator";
}

interface VoiceConfig {
  id: string;
  name: string;
  gender: "male" | "female";
  accent: string;
  description: string;
}

const AVAILABLE_MODELS: ModelConfig[] = [
  { id: "qwen3.5:9b", name: "Qwen 3.5 9B", description: "Fast responses, casual chat", type: "fast" },
  { id: "qwen3.5:35b", name: "Qwen 3.5 35B", description: "Deep reasoning, analysis", type: "deep" },
  { id: "minimax-m2.5:cloud", name: "MiniMax M2.5", description: "Best for coding", type: "coder" },
  { id: "deepseek-v3.1:671b-cloud", name: "DeepSeek V3", description: "Heavy reasoning, complex problems", type: "deep" },
  { id: "nemotron-3-super:cloud", name: "Nemotron 3 Super", description: "1M context, orchestration", type: "orchestrator" },
  { id: "qwen3-vl:235b-cloud", name: "Qwen3 VL 235B", description: "Visual understanding", type: "vision" },
  { id: "llama3.2:3b", name: "Llama 3.2 3B", description: "Local fallback", type: "fast" },
  { id: "qwen2.5:7b", name: "Qwen 2.5 7B", description: "Local fast model", type: "fast" },
];

const AVAILABLE_VOICES: VoiceConfig[] = [
  { id: "bm_daniel", name: "Daniel", gender: "male", accent: "British", description: "Clear, professional" },
  { id: "bf_emma", name: "Emma", gender: "female", accent: "British", description: "Warm, caring" },
  { id: "am_adam", name: "Adam", gender: "male", accent: "American", description: "Crisp, direct" },
  { id: "bf_isabella", name: "Isabella", gender: "female", accent: "British", description: "Soft, calm" },
  { id: "af_sarah", name: "Sarah", gender: "female", accent: "American", description: "Friendly" },
  { id: "am_michael", name: "Michael", gender: "male", accent: "American", description: "Deep, authoritative" },
];

const PERSONALITIES = [
  { id: "sovereign", name: "Sovereign", description: "Wise, guiding, maternal", emoji: "👑" },
  { id: "companion", name: "Companion", description: "Friendly, supportive, fun", emoji: "🤖" },
  { id: "mentor", name: "Mentor", description: "Knowledgeable, teaching, patient", emoji: "📚" },
  { id: "assistant", name: "Assistant", description: "Practical, efficient, helpful", emoji: "💼" },
  { id: "explorer", name: "Explorer", description: "Curious, adventurous, discovery-focused", emoji: "🧭" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("brains");
  const [saved, setSaved] = useState(false);
  
  // Brain/Model settings
  const [fastBrain, setFastBrain] = useState("qwen3.5:9b");
  const [deepBrain, setDeepBrain] = useState("qwen3.5:35b");
  const [coderBrain, setCoderBrain] = useState("minimax-m2.5:cloud");
  const [orchestrator, setOrchestrator] = useState("nemotron-3-super:cloud");
  const [vision, setVision] = useState("qwen3-vl:235b-cloud");
  
  // Voice settings
  const [defaultVoice, setDefaultVoice] = useState("bm_daniel");
  const [warmVoice, setWarmVoice] = useState("bf_emma");
  const [calmVoice, setCalmVoice] = useState("bf_isabella");
  const [ttsSpeed, setTtsSpeed] = useState(1.0);
  const [ttsVolume, setTtsVolume] = useState(0.8);
  
  // Character settings
  const [personality, setPersonality] = useState("sovereign");
  const [name, setName] = useState("JARVIS");
  const [greeting, setGreeting] = useState("At your service, Sir.");
  const [formality, setFormality] = useState(0.7);
  
  // Advanced
  const [contextWindow, setContextWindow] = useState(32768);
  const [temperature, setTemperature] = useState(0.7);
  const [streamResponse, setStreamResponse] = useState(true);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const tabs = [
    { id: "brains", label: "Brains", icon: Brain },
    { id: "voice", label: "Voice", icon: Volume2 },
    { id: "character", label: "Character", icon: User },
    { id: "advanced", label: "Advanced", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-[#0d0c18] p-6">
      {/* Hero */}
      <section className="relative pt-20 pb-12 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full bg-[#c9a84c]/[0.05] blur-3xl" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <IconOrb icon={Settings} variant="gold" size="lg" className="mx-auto mb-6" />
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
            <GlowText variant="gold">OS Settings</GlowText>
          </h1>
          <p className="text-lg text-white/50 max-w-xl mx-auto">
            Fine-tune your sovereign AI companion — models, voice, personality, and advanced behaviour.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="px-6 pb-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5">
          <FeatureCard
            title="Model Routing"
            description="Assign different brains for fast chat, deep reasoning, coding, vision, and orchestration."
            icon={Brain}
            iconVariant="gold"
            glow="gold"
          />
          <FeatureCard
            title="Voice Profiles"
            description="Choose from multiple voices with distinct accents, warmth, and tone for every context."
            icon={Volume2}
            iconVariant="teal"
            glow="teal"
          />
          <FeatureCard
            title="Character Identity"
            description="Set your companion's name, greeting, archetype, and formality level."
            icon={User}
            iconVariant="purple"
            glow="purple"
          />
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-10 bg-[#1a1a2e]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6 text-center">Capabilities</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Local and cloud model switching",
              "Adjustable context window up to 128K",
              "Temperature control for creativity",
              "Real-time streaming toggle",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/60">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Settings UI */}
      <div className="max-w-4xl mx-auto py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <Settings className="w-7 h-7 text-[#c9a84c]" />
              MEOK OS Settings
            </h2>
            <p className="text-gray-400 mt-1">Customize your AI companion</p>
          </div>
          <button type="button"
            onClick={handleSave}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              saved 
                ? "bg-green-500/20 text-green-400" 
                : "bg-[#c9a84c]/20 text-[#c9a84c] hover:bg-[#c9a84c]/30"
            }`}
          >
            {saved ? <Check className="w-4 h-4" /> : <Save className="w-4 h-4" />}
            {saved ? "Saved!" : "Save Changes"}
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {tabs.map((tab) => (
            <button type="button"
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                activeTab === tab.id
                  ? "bg-[#c9a84c]/20 text-[#c9a84c] border border-[#c9a84c]/30"
                  : "bg-[#13121f] text-gray-400 border border-white/10 hover:border-white/20"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <Surface variant="elevated" className="p-6">
          
          {/* Brains Tab */}
          {activeTab === "brains" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">AI Brain Configuration</h3>
                <p className="text-gray-400 text-sm mb-6">Choose which models to use for different cognitive tasks</p>
              </div>

              <ModelSelector
                label="Fast Brain (RIGHT)"
                description="Quick responses, casual conversation"
                value={fastBrain}
                onChange={setFastBrain}
                models={AVAILABLE_MODELS.filter(m => m.type === "fast")}
              />

              <ModelSelector
                label="Deep Brain (LEFT)"
                description="Complex reasoning, analysis"
                value={deepBrain}
                onChange={setDeepBrain}
                models={AVAILABLE_MODELS.filter(m => m.type === "deep")}
              />

              <ModelSelector
                label="Coder Brain"
                description="Code generation, technical tasks"
                value={coderBrain}
                onChange={setCoderBrain}
                models={AVAILABLE_MODELS.filter(m => m.type === "coder")}
              />

              <ModelSelector
                label="Orchestrator"
                description="Tool calling, agent coordination"
                value={orchestrator}
                onChange={setOrchestrator}
                models={AVAILABLE_MODELS.filter(m => m.type === "orchestrator")}
              />

              <ModelSelector
                label="Vision Brain"
                description="Image analysis, screen understanding"
                value={vision}
                onChange={setVision}
                models={AVAILABLE_MODELS.filter(m => m.type === "vision")}
              />
            </div>
          )}

          {/* Voice Tab */}
          {activeTab === "voice" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Voice Configuration</h3>
                <p className="text-gray-400 text-sm mb-6">Customize JARVIS's voice and speech settings</p>
              </div>

              <ModelSelector
                label="Default Voice"
                description="Used for most responses"
                value={defaultVoice}
                onChange={setDefaultVoice}
                models={AVAILABLE_VOICES.map(v => ({ id: v.id, name: `${v.name} (${v.accent})`, description: v.description, type: "voice" as any }))}
              />

              <ModelSelector
                label="Warm Voice"
                description="Caring, emotional responses"
                value={warmVoice}
                onChange={setWarmVoice}
                models={AVAILABLE_VOICES.filter(v => v.gender === "female").map(v => ({ id: v.id, name: v.name, description: v.description, type: "voice" as any }))}
              />

              <ModelSelector
                label="Calm Voice"
                description="Late night, stress, soothing"
                value={calmVoice}
                onChange={setCalmVoice}
                models={AVAILABLE_VOICES.map(v => ({ id: v.id, name: v.name, description: v.description, type: "voice" as any }))}
              />

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Speech Speed: {ttsSpeed.toFixed(1)}x</label>
                <input
                  type="range"
                  min="0.5"
                  max="2.0"
                  step="0.1"
                  value={ttsSpeed}
                  onChange={(e) => setTtsSpeed(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#1a1929] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Volume: {Math.round(ttsVolume * 100)}%</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={ttsVolume}
                  onChange={(e) => setTtsVolume(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#1a1929] rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Character Tab */}
          {activeTab === "character" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Character Personality</h3>
                <p className="text-gray-400 text-sm mb-6">Define your AI companion's identity</p>
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">AI Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0d0c18] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a84c]/50"
                  placeholder="Enter name..."
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Greeting Message</label>
                <input
                  type="text"
                  value={greeting}
                  onChange={(e) => setGreeting(e.target.value)}
                  className="w-full px-4 py-3 bg-[#0d0c18] border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#c9a84c]/50"
                  placeholder="Enter greeting..."
                />
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-3 block">Personality Archetype</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {PERSONALITIES.map((p) => (
                    <button type="button"
                      key={p.id}
                      onClick={() => setPersonality(p.id)}
                      className={`p-4 rounded-lg border text-left transition-all ${
                        personality === p.id
                          ? "bg-[#c9a84c]/20 border-[#c9a84c]/50"
                          : "bg-[#0d0c18] border-white/10 hover:border-white/20"
                      }`}
                    >
                      <div className="text-2xl mb-1">{p.emoji}</div>
                      <div className="text-white font-medium">{p.name}</div>
                      <div className="text-gray-400 text-xs">{p.description}</div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Formality Level: {Math.round(formality * 100)}%</label>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Casual</span>
                  <span>Formal</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={formality}
                  onChange={(e) => setFormality(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#1a1929] rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
          )}

          {/* Advanced Tab */}
          {activeTab === "advanced" && (
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Advanced Settings</h3>
                <p className="text-gray-400 text-sm mb-6">Fine-tune behavior and performance</p>
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Context Window Size</label>
                <select
                  value={contextWindow}
                  onChange={(e) => setContextWindow(parseInt(e.target.value))}
                  className="w-full px-4 py-3 bg-[#0d0c18] border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#c9a84c]/50"
                >
                  <option value="4096">4K (Basic)</option>
                  <option value="16384">16K (Standard)</option>
                  <option value="32768">32K (Extended)</option>
                  <option value="65536">64K (Large)</option>
                  <option value="131072">128K (Maximum)</option>
                </select>
              </div>

              <div>
                <label className="text-gray-300 text-sm font-medium mb-2 block">Temperature (Creativity)</label>
                <div className="flex justify-between text-xs text-gray-500 mb-2">
                  <span>Precise (0.0)</span>
                  <span>Balanced (0.7)</span>
                  <span>Creative (1.0)</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={temperature}
                  onChange={(e) => setTemperature(parseFloat(e.target.value))}
                  className="w-full h-2 bg-[#1a1929] rounded-lg appearance-none cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between p-4 bg-[#0d0c18] rounded-lg border border-white/10">
                <div>
                  <div className="text-white font-medium">Stream Response</div>
                  <div className="text-gray-400 text-sm">Show responses as they're generated</div>
                </div>
                <button type="button"
                  onClick={() => setStreamResponse(!streamResponse)}
                  className={`w-12 h-6 rounded-full transition-all ${
                    streamResponse ? "bg-[#c9a84c]" : "bg-gray-600"
                  }`}
                >
                  <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                    streamResponse ? "translate-x-6" : "translate-x-0.5"
                  }`} />
                </button>
              </div>

              <div className="flex items-center gap-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-400" />
                <div>
                  <div className="text-white text-sm font-medium">Cloud Models Require API Keys</div>
                  <div className="text-gray-400 text-xs">Set ANTHROPIC_API_KEY, OPENROUTER_API_KEY, etc. in .env</div>
                </div>
              </div>
            </div>
          )}

        </Surface>

        {/* Reset Button */}
        <div className="mt-6 flex justify-center">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
            <RefreshCw className="w-4 h-4" />
            <span className="text-sm">Reset to Defaults</span>
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="px-6 py-16 bg-[#1a1a2e]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-3">Back to the OS dashboard?</h2>
          <p className="text-white/50 mb-6">Your settings are saved automatically.</p>
          <Link
            href="/os"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-[#c9a84c] text-[#0d0c18] font-bold hover:bg-[#b8963e] transition-all"
          >
            Enter OS Mode <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}

function ModelSelector({ label, description, value, onChange, models }: {
  label: string;
  description: string;
  value: string;
  onChange: (v: string) => void;
  models: any[];
}) {
  return (
    <Surface variant="glass" className="p-4">
      <div className="flex items-center justify-between mb-3">
        <div>
          <div className="text-white font-medium">{label}</div>
          <div className="text-gray-400 text-sm">{description}</div>
        </div>
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="px-3 py-2 bg-[#0d0c18] border border-white/10 rounded-lg text-white text-sm focus:outline-none focus:border-[#c9a84c]/50"
        >
          {models.map((m) => (
            <option key={m.id} value={m.id}>{m.name}</option>
          ))}
        </select>
      </div>
    </Surface>
  );
}
