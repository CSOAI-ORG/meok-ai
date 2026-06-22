"use client";

import { useEffect, useState, useRef } from "react";
import { Loader2, Send, Users } from "lucide-react";
import { Surface } from "@/components/design-system/surface";

interface Agent {
  id: string;
  name: string;
  role: string;
  archetype: string;
  color: string;
  personality: string;
  mandate: string;
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AethelgardPanel() {
  const [agents, setAgents] = useState<Agent[]>([]);
  const [selected, setSelected] = useState<Agent | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/api/town/agents", { cache: "no-store" })
      .then((r) => r.json())
      .then((data) => {
        setAgents(data.agents ?? []);
        if (data.agents?.[0]) setSelected(data.agents[0]);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function sendMessage(e?: React.FormEvent) {
    e?.preventDefault();
    if (!selected || !input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    const nextHistory = [...messages, { role: "user" as const, content: userMsg }];
    setMessages(nextHistory);
    setLoading(true);

    try {
      const res = await fetch("/api/town/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          agentId: selected.id,
          message: userMsg,
          history: messages,
        }),
      });

      if (!res.ok || !res.body) {
        throw new Error(`Chat failed: ${res.status}`);
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantText += chunk;
        setMessages([...nextHistory, { role: "assistant", content: assistantText }]);
      }
    } catch (err) {
      console.error(err);
      setMessages([...nextHistory, { role: "assistant", content: "I’m unable to respond right now. The council chamber may be in recess." }]);
    } finally {
      setLoading(false);
    }
  }

  if (agents.length === 0) {
    return (
      <Surface variant="elevated" className="flex h-96 items-center justify-center">
        <Loader2 className="animate-spin text-[#c9a84c]" size={24} />
      </Surface>
    );
  }

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Agent roster */}
      <Surface variant="elevated" className="p-4 lg:col-span-1">
        <div className="mb-4 flex items-center gap-2 text-[#c9a84c]">
          <Users size={18} />
          <span className="text-xs font-bold uppercase tracking-widest">Finance Hive Ministers</span>
        </div>
        <div className="space-y-2">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => {
                setSelected(agent);
                setMessages([]);
              }}
              className={`w-full rounded-lg border p-3 text-left transition ${
                selected?.id === agent.id
                  ? "border-[#3b82f6] bg-[#3b82f6]/10"
                  : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full" style={{ backgroundColor: agent.color }} />
                <span className="font-semibold">{agent.name}</span>
              </div>
              <div className="mt-1 text-xs text-white/60">{agent.role}</div>
              <div className="mt-1 text-xs text-white/400 italic">{agent.archetype}</div>
            </button>
          ))}
        </div>
      </Surface>

      {/* Chat */}
      <Surface variant="elevated" className="flex flex-col p-4 lg:col-span-2" style={{ minHeight: "24rem" }}>
        {selected && (
          <div className="mb-4 border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full" style={{ backgroundColor: selected.color }} />
              <span className="font-semibold">{selected.name}</span>
              <span className="text-xs text-white/50">— {selected.role}</span>
            </div>
            <p className="mt-1 text-xs text-white/60">{selected.mandate}</p>
          </div>
        )}

        <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto pr-2" style={{ maxHeight: "24rem" }}>
          {messages.length === 0 && selected && (
            <div className="text-sm text-white/40 italic">
              Start a conversation with {selected.name} about Aethelgard fiscal policy.
            </div>
          )}
          {messages.map((m, i) => (
            <div
              key={i}
              className={`rounded-lg px-3 py-2 text-sm ${
                m.role === "user" ? "ml-auto max-w-[80%] bg-[#3b82f6]/20 text-white" : "max-w-[90%] bg-white/[0.05] text-white/90"
              }`}
            >
              {m.content}
            </div>
          ))}
          {loading && (
            <div className="flex items-center gap-2 text-white/40">
              <Loader2 size={14} className="animate-spin" />
              <span className="text-xs">{selected?.name} is thinking…</span>
            </div>
          )}
        </div>

        <form onSubmit={sendMessage} className="mt-4 flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={`Ask ${selected?.name ?? "a minister"}…`}
            className="flex-1 rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c] focus:outline-none"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="flex items-center gap-2 rounded-lg bg-[#c9a84c] px-4 py-2 text-sm font-bold text-[#0d0c18] disabled:opacity-50"
          >
            <Send size={14} /> Send
          </button>
        </form>
      </Surface>
    </div>
  );
}
