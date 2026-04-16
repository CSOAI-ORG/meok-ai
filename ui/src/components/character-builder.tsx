"use client";

import { useState } from "react";
import { Plus, X, User, Save, Loader2, Sparkles } from "lucide-react";

interface CustomCharacter {
  id: string;
  name: string;
  emoji: string;
  purpose: "gaming" | "creative" | "productivity" | "learning" | "general";
  personality: string;
  expertise: string;
  createdAt: string;
}

const EMOJI_OPTIONS = ["🎮", "⚔️", "🧙", "📚", "🎨", "💻", "🎤", "🛡️", "🌸", "🔥", "⚡", "🤖", "🦉", "🌈", "🪷", "🕊️"];
const PURPOSE_OPTIONS = [
  { value: "gaming", label: "Gaming", emoji: "🎮" },
  { value: "creative", label: "Creative", emoji: "🎨" },
  { value: "productivity", label: "Productivity", emoji: "💻" },
  { value: "learning", label: "Learning", emoji: "📚" },
  { value: "general", label: "General Support", emoji: "🤖" },
];

export default function CharacterBuilder() {
  const [characters, setCharacters] = useState<CustomCharacter[]>([]);
  const [showBuilder, setShowBuilder] = useState(false);
  const [saving, setSaving] = useState(false);
  
  const [form, setForm] = useState({
    name: "",
    emoji: "🤖",
    purpose: "gaming" as const,
    personality: "",
    expertise: "",
  });

  function handleSave() {
    if (!form.name || !form.personality) return;
    
    setSaving(true);
    
    const newChar: CustomCharacter = {
      id: `char_${Date.now()}`,
      name: form.name,
      emoji: form.emoji,
      purpose: form.purpose,
      personality: form.personality,
      expertise: form.expertise,
      createdAt: new Date().toISOString(),
    };
    
    setCharacters([...characters, newChar]);
    setForm({ name: "", emoji: "🤖", purpose: "gaming", personality: "", expertise: "" });
    setShowBuilder(false);
    setSaving(false);
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">Custom Characters</h2>
          <p className="text-sm" style={{ opacity: 0.6 }}>Create your own AI squad members</p>
        </div>
        <button
          onClick={() => setShowBuilder(!showBuilder)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium"
          style={{ background: "#c9a84c", color: "#0d0c18" }}
        >
          <Plus className="w-4 h-4" /> Create
        </button>
      </div>

      {/* Existing Characters */}
      {characters.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {characters.map((char) => (
            <div key={char.id} className="p-3 rounded-lg" style={{ background: "#1a1a2e" }}>
              <div className="text-2xl mb-1">{char.emoji}</div>
              <div className="font-medium">{char.name}</div>
              <div className="text-xs" style={{ opacity: 0.6 }}>{char.purpose}</div>
            </div>
          ))}
        </div>
      )}

      {/* Builder Modal */}
      {showBuilder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl p-6 max-w-lg w-full" style={{ background: "#13121f" }}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <Sparkles className="w-5 h-5" /> Create Character
              </h3>
              <button onClick={() => setShowBuilder(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="space-y-4">
              {/* Name */}
              <div>
                <label className="text-sm font-medium mb-1 block">Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g., Coach Mike"
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10"
                />
              </div>

              {/* Emoji Picker */}
              <div>
                <label className="text-sm font-medium mb-2 block">Avatar</label>
                <div className="flex flex-wrap gap-2">
                  {EMOJI_OPTIONS.map((emoji) => (
                    <button
                      key={emoji}
                      onClick={() => setForm({ ...form, emoji })}
                      className={`text-2xl p-2 rounded-lg ${form.emoji === emoji ? "bg-white/20" : "bg-white/5"}`}
                    >
                      {emoji}
                    </button>
                  ))}
                </div>
              </div>

              {/* Purpose */}
              <div>
                <label className="text-sm font-medium mb-2 block">Purpose</label>
                <div className="flex flex-wrap gap-2">
                  {PURPOSE_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => setForm({ ...form, purpose: opt.value as any })}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm ${
                        form.purpose === opt.value ? "bg-purple-600" : "bg-white/10"
                      }`}
                    >
                      <span>{opt.emoji}</span> {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Personality */}
              <div>
                <label className="text-sm font-medium mb-1 block">Personality</label>
                <textarea
                  value={form.personality}
                  onChange={(e) => setForm({ ...form, personality: e.target.value })}
                  placeholder="e.g., Aggressive, encouraging, analytical..."
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 h-20"
                />
              </div>

              {/* Expertise */}
              <div>
                <label className="text-sm font-medium mb-1 block">Expertise</label>
                <textarea
                  value={form.expertise}
                  onChange={(e) => setForm({ ...form, expertise: e.target.value })}
                  placeholder="e.g., FPS tactics, build optimization, stress management..."
                  className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 h-20"
                />
              </div>
            </div>

            {/* Save Button */}
            <button
              onClick={handleSave}
              disabled={saving || !form.name || !form.personality}
              className="w-full mt-4 py-3 rounded-lg font-medium flex items-center justify-center gap-2 disabled:opacity-50"
              style={{ background: "#c9a84c", color: "#0d0c18" }}
            >
              {saving ? <Loader2 className="w-5 h-5 animate-spin" /> : <><Save className="w-5 h-5" /> Create Character</>}
            </button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {characters.length === 0 && !showBuilder && (
        <div className="text-center py-12" style={{ opacity: 0.5 }}>
          <User className="w-12 h-12 mx-auto mb-4" />
          <p>No custom characters yet</p>
          <p className="text-sm">Create your first AI squad member!</p>
        </div>
      )}
    </div>
  );
}