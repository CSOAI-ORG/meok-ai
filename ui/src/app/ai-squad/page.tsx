"use client";

import { useState, useEffect } from "react";
import { Users, MessageSquare, Plus, Gamepad2, Sparkles, Zap, BookOpen, Heart, X, Send, Loader2, Volume2, VolumeX, Settings } from "lucide-react";

interface SquadMember { characterId: string; role: string; contributionScore: number; }
interface AISquad { id: string; name: string; purpose: string; members: SquadMember[]; }
interface SquadMessage { id: string; characterId: string; content: string; timestamp: string; }

const CHARACTER_EMOJI: Record<string, string> = {
  pixel: "🎮", commander: "⚔️", sage: "📚", luna: "🌙", iris: "🎨", nova: "📊",
  marcus: "⚡", titan: "🖤", atlas: "🗺️", aria: "🌸", river: "🌊", zephyr: "🌬️",
  ember: "🔥", sol: "☀️", nyx: "🌑", mochi: "🍡", rex: "🛡️", echo: "🪞", quinn: "🌈",
};

const PURPOSE_ICONS: Record<string, typeof Gamepad2> = { gaming: Gamepad2, creative: Sparkles, productivity: Zap, learning: BookOpen, general: Heart };
const PURPOSE_COLORS: Record<string, string> = { gaming: "#8B5CF6", creative: "#EC4899", productivity: "#F59E0B", learning: "#3B82F6", general: "#10B981" };

const FAQ = [
  { q: "What is an AI Squad?", a: "An AI Squad is a multi-character team of MEOK AI characters that work together toward a shared purpose. You pick a template, the squad is created with its members, and you chat with the whole squad at once — each character contributing in its own voice." },
  { q: "What purposes can a squad have?", a: "Squads are organised by purpose: gaming, creative, productivity, learning, and general. Each purpose has its own icon and colour, and templates group characters suited to that purpose." },
  { q: "Can the squad talk back with voice?", a: "Yes. Toggle voice output in Settings (or the speaker button in a squad). It uses the browser's built-in text-to-speech (SpeechSynthesis) to read the squad's replies aloud." },
  { q: "How do I create a new squad?", a: "Click New Squad (or the Create Squad tile) to choose from the available templates. Selecting a template creates the squad with its members via the /api/ai-squad endpoint and adds it to your list." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "AI Squad", item: "https://meok.ai/ai-squad" },
] };

const APP_JSONLD = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "MEOK AI Squad", applicationCategory: "MultimediaApplication", operatingSystem: "Web", description: "Build multi-character AI teams (squads) around a shared purpose — gaming, creative, productivity, learning or general — and chat with the whole squad at once, with optional browser voice output.", url: "https://meok.ai/ai-squad" };

export default function AISquadPage() {
  const [squads, setSquads] = useState<AISquad[]>([]);
  const [templates, setTemplates] = useState<any[]>([]);
  const [selectedSquad, setSelectedSquad] = useState<AISquad | null>(null);
  const [messages, setMessages] = useState<SquadMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  function speak(text: string) {
    if (!voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 1.0;
    window.speechSynthesis.speak(u);
  }

  useEffect(() => { loadTemplates(); }, []);

  async function loadTemplates() {
    try {
      const res = await fetch("/api/ai-squad?action=templates");
      const data = await res.json();
      setTemplates(data.templates || []);
    } catch (e) { console.error("Failed:", e); }
  }

  async function createSquad(idx: number) {
    setLoading(true);
    try {
      const res = await fetch("/api/ai-squad", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "create", templateIndex: idx }) });
      const data = await res.json();
      if (data.squad) { setSquads([...squads, data.squad]); setShowCreate(false); }
    } catch (e) { console.error("Failed:", e); }
    setLoading(false);
  }

  async function sendMessage() {
    if (!input.trim() || !selectedSquad) return;
    setLoading(true);
    const userMsg = input;
    setInput("");
    try {
      const res = await fetch("/api/ai-squad", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ action: "chat", squadId: selectedSquad.id, message: userMsg }) });
      const data = await res.json();
      if (data.messages?.length > 0) {
        setMessages(prev => [...prev, ...data.messages]);
        if (voiceEnabled && data.messages[0].content) speak(data.messages[0].content);
      }
    } catch (e) { console.error("Failed:", e); }
    setLoading(false);
  }

  return (
    <div className="min-h-screen" style={{ background: "#0d0c18", color: "#e5e5e5" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(APP_JSONLD) }} />
      <header className="p-6 border-b" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8" style={{ color: "#c9a84c" }} />
            <h1 className="text-2xl font-bold">AI Squad</h1>
          </div>
          <button onClick={() => setShowCreate(true)} className="flex items-center gap-2 px-4 py-2 rounded-lg font-medium" style={{ background: "#c9a84c", color: "#0d0c18" }}>
            <Plus className="w-4 h-4" /> New Squad
          </button>
        </div>
      </header>
      <main className="max-w-6xl mx-auto p-6">
        {!selectedSquad ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((t) => {
              const Icon = PURPOSE_ICONS[t.purpose] || Users;
              const color = PURPOSE_COLORS[t.purpose] || "#c9a84c";
              return (
                <button key={t.index} onClick={() => createSquad(t.index)} disabled={loading} className="p-4 rounded-xl text-left transition-all hover:scale-[1.02] border" style={{ background: "#1a1a2e", borderColor: "rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center gap-3 mb-3"><Icon className="w-5 h-5" style={{ color }} /><span className="font-medium">{t.name}</span></div>
                  <div className="flex flex-wrap gap-1">{t.members.map((m: string) => <span key={m} className="text-2xl">{CHARACTER_EMOJI[m] || "🤖"}</span>)}</div>
                  <div className="mt-2 text-sm" style={{ opacity: 0.6 }}>{t.members.length} members</div>
                </button>
              );
            })}
            <button onClick={() => setShowCreate(true)} className="p-4 rounded-xl text-center border border-dashed" style={{ borderColor: "rgba(255,255,255,0.2)" }}>
              <Plus className="w-8 h-8 mx-auto mb-2" style={{ opacity: 0.5 }} /><span style={{ opacity: 0.6 }}>Create Squad</span>
            </button>
          </div>
        ) : (
          <div className="rounded-xl overflow-hidden" style={{ background: "#13121f" }}>
            <div className="p-4 border-b flex items-center justify-between" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <div className="flex items-center gap-3">
                {selectedSquad.members.map((m) => <span key={m.characterId} className="text-3xl">{CHARACTER_EMOJI[m.characterId] || "🤖"}</span>)}
                <div><h2 className="font-bold">{selectedSquad.name}</h2><p className="text-sm" style={{ opacity: 0.6 }}>{selectedSquad.purpose} • {selectedSquad.members.length} members</p></div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => setVoiceEnabled(!voiceEnabled)} className={`p-2 rounded-lg ${voiceEnabled ? "bg-green-600" : "bg-white/10"}`}>{voiceEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}</button>
                <button onClick={() => setShowSettings(!showSettings)} className="p-2 rounded-lg bg-white/10"><Settings className="w-5 h-5" /></button>
                <button onClick={() => setSelectedSquad(null)} className="p-2 rounded-lg hover:bg-white/10"><X className="w-5 h-5" /></button>
              </div>
            </div>
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && <div className="text-center py-12" style={{ opacity: 0.5 }}><MessageSquare className="w-12 h-12 mx-auto mb-4" /><p>Chat with your AI Squad</p></div>}
              {messages.map((msg) => <div key={msg.id} className={`flex gap-3 ${msg.characterId === "user" ? "flex-row-reverse" : ""}`}>{msg.characterId !== "user" && <span className="text-2xl">{CHARACTER_EMOJI[msg.characterId] || "🤖"}</span>}<div className="max-w-[70%] p-3 rounded-lg" style={{ background: msg.characterId === "user" ? "#c9a84c" : "#1a1a2e", color: msg.characterId === "user" ? "#0d0c18" : undefined }}>{msg.content}</div></div>)}
            </div>
            <div className="p-4 border-t" style={{ borderColor: "rgba(255,255,255,0.07)" }}>
              <div className="flex gap-2">
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") sendMessage(); }} placeholder="Message..." className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10" />
                <button onClick={sendMessage} disabled={loading} className="px-4 py-3 rounded-lg" style={{ background: "#c9a84c", color: "#0d0c18" }}>{loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}</button>
              </div>
            </div>
          </div>
        )}

        <section className="mt-12">
          <h2 className="text-xl font-bold mb-4">Frequently asked</h2>
          <div className="grid gap-3">
            {FAQ.map((f) => (
              <details key={f.q} className="p-4 rounded-xl border" style={{ background: "#1a1a2e", borderColor: "rgba(255,255,255,0.07)" }}>
                <summary className="font-medium cursor-pointer">{f.q}</summary>
                <p className="mt-2 text-sm" style={{ opacity: 0.7 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      {showCreate && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl p-6 max-w-2xl w-full" style={{ background: "#13121f" }}>
            <div className="flex items-center justify-between mb-6"><h2 className="text-xl font-bold">Choose Template</h2><button onClick={() => setShowCreate(false)}><X className="w-5 h-5" /></button></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {templates.map((t) => <button key={t.index} onClick={() => createSquad(t.index)} className="p-4 rounded-lg text-left border" style={{ borderColor: "rgba(255,255,255,0.1)" }}><div className="font-medium">{t.name}</div><div className="text-sm" style={{ opacity: 0.6 }}>{t.purpose}</div></button>)}
            </div>
          </div>
        </div>
      )}
      {showSettings && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="rounded-xl p-6 max-w-md w-full" style={{ background: "#13121f" }}>
            <div className="flex items-center justify-between mb-4"><h2 className="text-xl font-bold">Settings</h2><button onClick={() => setShowSettings(false)}><X className="w-5 h-5" /></button></div>
            <div className="space-y-4">
              <label className="flex items-center gap-2">
                <input type="checkbox" checked={voiceEnabled} onChange={(e) => setVoiceEnabled(e.target.checked)} />
                <span>Voice output (browser TTS)</span>
              </label>
              <div className="border-t pt-4" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
                <a href="/dashboard/gaming/integrations" className="block py-2 text-sm hover:underline">⚙️ Gaming Integrations →</a>
                <a href="/chat" className="block py-2 text-sm hover:underline">💬 Full Chat →</a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}