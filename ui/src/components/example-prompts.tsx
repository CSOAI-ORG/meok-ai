"use client";

/**
 * ExamplePrompts — Phase 4.11 Progressive Disclosure
 *
 * Contextual starting prompts for users who don't know where to begin.
 * Designed for the "16-year-old with 0 AI experience" test case.
 * No AI jargon. Real problems. Real language.
 *
 * "First win in 60 seconds."
 */

import { useState } from "react";
import { MessageSquare, ChevronRight } from "lucide-react";

interface Prompt {
  label: string;
  text: string;
  category: string;
}

const PROMPTS_BY_CATEGORY: Record<string, Prompt[]> = {
  "Work & career": [
    {
      label: "Hard decision",
      text: "Help me think through a hard decision I've been avoiding.",
      category: "Work & career",
    },
    {
      label: "Feedback I received",
      text: "I just got feedback that stung. Can you help me process it honestly?",
      category: "Work & career",
    },
    {
      label: "Stuck on a problem",
      text: "I've been going in circles on a problem. Can you help me see it differently?",
      category: "Work & career",
    },
  ],
  "Thinking & planning": [
    {
      label: "Overwhelmed by my to-do list",
      text: "I'm overwhelmed. Can you help me figure out what actually matters right now?",
      category: "Thinking & planning",
    },
    {
      label: "Idea I can't let go of",
      text: "I have an idea I can't stop thinking about. Help me stress-test it honestly.",
      category: "Thinking & planning",
    },
    {
      label: "A goal that feels too big",
      text: "I have a goal that feels impossible. Can you help me break it down?",
      category: "Thinking & planning",
    },
  ],
  "Personal": [
    {
      label: "Conversation I'm dreading",
      text: "I have a difficult conversation coming up. Help me prepare.",
      category: "Personal",
    },
    {
      label: "Pattern I keep repeating",
      text: "I keep repeating the same pattern. Help me understand why.",
      category: "Personal",
    },
    {
      label: "Something I want to change",
      text: "There's something about myself I want to change. Where do I start?",
      category: "Personal",
    },
  ],
  "Learning": [
    {
      label: "Explain something confusing",
      text: "Can you explain [topic] in a way that actually makes sense to me?",
      category: "Learning",
    },
    {
      label: "I want to understand X better",
      text: "I want to understand [subject] better. What should I know first?",
      category: "Learning",
    },
  ],
};

interface ExamplePromptsProps {
  onSelect: (text: string) => void;
  compact?: boolean;
}

export function ExamplePrompts({ onSelect, compact = false }: ExamplePromptsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(
    Object.keys(PROMPTS_BY_CATEGORY)[0]
  );

  const categories = Object.keys(PROMPTS_BY_CATEGORY);
  const prompts = PROMPTS_BY_CATEGORY[activeCategory] || [];

  if (compact) {
    // Just show a flat list of 4 prompts across all categories
    const flat = Object.values(PROMPTS_BY_CATEGORY)
      .flat()
      .slice(0, 4);
    return (
      <div className="grid grid-cols-2 gap-2">
        {flat.map((p) => (
          <button
            key={p.text}
            onClick={() => onSelect(p.text)}
            className="text-left px-3 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/8 transition-all group text-sm"
          >
            <span className="text-white/60 group-hover:text-white/90 transition-colors leading-snug block">
              {p.label}
            </span>
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {/* Category tabs */}
      <div className="flex gap-1 overflow-x-auto pb-1 scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
              activeCategory === cat
                ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30"
                : "text-white/40 hover:text-white/70 border border-transparent"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Prompt list */}
      <div className="space-y-2">
        {prompts.map((p) => (
          <button
            key={p.text}
            onClick={() => onSelect(p.text)}
            className="w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/8 transition-all group"
          >
            <MessageSquare className="w-4 h-4 text-white/25 group-hover:text-cyan-400/60 flex-shrink-0 transition-colors" />
            <span className="text-sm text-white/60 group-hover:text-white/90 transition-colors leading-snug flex-1">
              {p.text}
            </span>
            <ChevronRight className="w-4 h-4 text-white/15 group-hover:text-white/40 flex-shrink-0 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
