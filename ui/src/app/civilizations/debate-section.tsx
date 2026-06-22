"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Surface } from "@/components/design-system/surface";
import { AgentDialogue } from "@/components/sov-town/AgentDialogue";
import type { DialogueResult } from "@/app/local-api/town/dialogue/route";

const DEFAULT_TOPIC = "Should Aethelgard raise the sovereign debt ceiling?";

export default function DebateSection() {
  const [topic, setTopic] = useState(DEFAULT_TOPIC);
  const [dialogue, setDialogue] = useState<DialogueResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleGenerate() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/town/dialogue", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic: topic.trim() }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      const data = (await res.json()) as DialogueResult;
      setDialogue(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to generate dialogue");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <div className="mb-6 flex items-center gap-3">
        <span className="text-2xl">🗣️</span>
        <div>
          <h2 className="text-3xl font-bold md:text-4xl">Watch Agents Debate</h2>
          <p className="text-white/60">
            Pick a topic and watch 2-4 Aethelgard ministers argue it out in 4-6 turns.
          </p>
        </div>
      </div>

      <Surface variant="glass" className="p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-start">
          <div className="flex-1">
            <label htmlFor="debate-topic" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-white/50">
              Debate topic
            </label>
            <input
              id="debate-topic"
              type="text"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder={DEFAULT_TOPIC}
              className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-[#c9a84c]/50 focus:outline-none"
            />
          </div>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading || topic.trim().length === 0}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#c9a84c] px-6 py-3 font-bold text-[#0d0c18] transition hover:bg-[#b8963e] disabled:cursor-not-allowed disabled:opacity-50 md:mt-6"
          >
            <MessageSquare size={16} />
            {loading ? "Convening…" : "Generate Debate"}
          </button>
        </div>

        <div className="mt-6">
          <AgentDialogue dialogue={dialogue} loading={loading} error={error} />
        </div>
      </Surface>
    </section>
  );
}
