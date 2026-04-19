"use client";

import { useEffect, useState } from "react";
import { Keyboard, X } from "lucide-react";

interface Shortcut {
  key: string;
  description: string;
}

const SHORTCUTS: Shortcut[] = [
  { key: "?", description: "Show/hide keyboard shortcuts" },
  { key: "/", description: "Focus search" },
  { key: "Esc", description: "Close modals / unfocus" },
  { key: "g + h", description: "Go to Home" },
  { key: "g + d", description: "Go to Dashboard" },
  { key: "g + c", description: "Go to Chat" },
  { key: "g + s", description: "Go to Settings" },
  { key: "Cmd/Ctrl + K", description: "Command palette" },
];

export function KeyboardShortcuts() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Show shortcuts on ? key (but not when typing in inputs)
      if (
        e.key === "?" &&
        !e.metaKey &&
        !e.ctrlKey &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }

      // Close on Escape
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-1.5 left-1.5 z-50 p-2 rounded-lg bg-white/5 text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
        aria-label="Keyboard shortcuts (press ?)"
        title="Keyboard shortcuts (press ?)"
      >
        <Keyboard className="w-4 h-4" />
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-[#13121f] border border-white/10 rounded-2xl max-w-md w-full p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Keyboard className="w-5 h-5 text-[#c9a84c]" />
            Keyboard Shortcuts
          </h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-3">
          {SHORTCUTS.map((shortcut) => (
            <div
              key={shortcut.key}
              className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
            >
              <span className="text-white/70 text-sm">{shortcut.description}</span>
              <kbd className="px-2 py-1 rounded bg-white/10 text-white/90 text-xs font-mono font-medium">
                {shortcut.key}
              </kbd>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-white/40 text-center">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/60 text-xs font-mono">?</kbd> anywhere to toggle this help
        </p>
      </div>
    </div>
  );
}
