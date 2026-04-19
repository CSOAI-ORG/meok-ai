"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, Home, MessageSquare, LayoutDashboard, Settings, User, Shield, Gamepad2, Briefcase, Sparkles, Zap } from "lucide-react";

interface Command {
  id: string;
  title: string;
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
  keywords: string[];
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: "home",
      title: "Go to Home",
      shortcut: "G H",
      icon: <Home className="w-4 h-4" />,
      action: () => router.push("/"),
      keywords: ["home", "landing", "start"],
    },
    {
      id: "chat",
      title: "Open Chat",
      shortcut: "G C",
      icon: <MessageSquare className="w-4 h-4" />,
      action: () => router.push("/chat"),
      keywords: ["chat", "talk", "message"],
    },
    {
      id: "dashboard",
      title: "Open Dashboard",
      shortcut: "G D",
      icon: <LayoutDashboard className="w-4 h-4" />,
      action: () => router.push("/dashboard"),
      keywords: ["dashboard", "overview", "home"],
    },
    {
      id: "settings",
      title: "Open Settings",
      shortcut: "G S",
      icon: <Settings className="w-4 h-4" />,
      action: () => router.push("/dashboard/settings"),
      keywords: ["settings", "preferences", "config"],
    },
    {
      id: "profile",
      title: "View Profile",
      icon: <User className="w-4 h-4" />,
      action: () => router.push("/dashboard/settings"),
      keywords: ["profile", "account", "user"],
    },
    {
      id: "guardian",
      title: "Open Guardian",
      icon: <Shield className="w-4 h-4" />,
      action: () => router.push("/dashboard/guardian"),
      keywords: ["guardian", "protection", "safety"],
    },
    {
      id: "gaming",
      title: "Open Gaming",
      icon: <Gamepad2 className="w-4 h-4" />,
      action: () => router.push("/dashboard/gaming"),
      keywords: ["gaming", "games", "play"],
    },
    {
      id: "work",
      title: "Open Work OS",
      icon: <Briefcase className="w-4 h-4" />,
      action: () => router.push("/work"),
      keywords: ["work", "productivity", "tasks"],
    },
    {
      id: "birth",
      title: "Create Companion",
      icon: <Sparkles className="w-4 h-4" />,
      action: () => router.push("/birth"),
      keywords: ["birth", "create", "new", "companion"],
    },
    {
      id: "labs",
      title: "Open Labs",
      icon: <Zap className="w-4 h-4" />,
      action: () => router.push("/labs"),
      keywords: ["labs", "mcp", "servers"],
    },
  ];

  const filteredCommands = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(search.toLowerCase()) ||
      cmd.keywords.some((k) => k.toLowerCase().includes(search.toLowerCase()))
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd/Ctrl + K to open
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }

      // ESC to close
      if (e.key === "Escape") {
        setIsOpen(false);
      }

      // Navigation shortcuts when closed
      if (!isOpen && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (e.key === "g") {
          // Wait for next key
          const nextKey = (nextE: KeyboardEvent) => {
            switch (nextE.key) {
              case "h":
                nextE.preventDefault();
                router.push("/");
                break;
              case "c":
                nextE.preventDefault();
                router.push("/chat");
                break;
              case "d":
                nextE.preventDefault();
                router.push("/dashboard");
                break;
              case "s":
                nextE.preventDefault();
                router.push("/dashboard/settings");
                break;
            }
            window.removeEventListener("keydown", nextKey);
          };
          window.addEventListener("keydown", nextKey);
          setTimeout(() => window.removeEventListener("keydown", nextKey), 500);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, router]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [search]);

  const handleSelect = useCallback(
    (command: Command) => {
      command.action();
      setIsOpen(false);
      setSearch("");
    },
    []
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredCommands.length);
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % filteredCommands.length);
        break;
      case "Enter":
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          handleSelect(filteredCommands[selectedIndex]);
        }
        break;
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start justify-center pt-[20vh] animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Palette */}
      <div
        className="relative w-full max-w-xl mx-4 bg-[#13121f] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
          <Search className="w-5 h-5 text-white/40" />
          <input
            ref={inputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search commands..."
            className="flex-1 bg-transparent text-white placeholder:text-white/40 outline-none text-base"
          />
          <kbd className="px-2 py-1 rounded bg-white/10 text-white/40 text-xs">ESC</kbd>
        </div>

        {/* Commands list */}
        <div className="max-h-[400px] overflow-y-auto py-2">
          {filteredCommands.length === 0 ? (
            <div className="px-4 py-8 text-center">
              <p className="text-white/40 text-sm">No commands found</p>
              <p className="text-white/20 text-xs mt-1">Try a different search</p>
            </div>
          ) : (
            <div className="px-2">
              {filteredCommands.map((command, index) => (
                <button
                  key={command.id}
                  onClick={() => handleSelect(command)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                    index === selectedIndex
                      ? "bg-white/10"
                      : "hover:bg-white/5"
                  }`}
                >
                  <span className="text-white/60">{command.icon}</span>
                  <span className="flex-1 text-white text-sm">{command.title}</span>
                  {command.shortcut && (
                    <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/40 text-xs">
                      {command.shortcut}
                    </kbd>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-4 py-2 border-t border-white/10 flex items-center justify-between text-xs text-white/30">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1 rounded bg-white/10">↑</kbd>
              <kbd className="px-1 rounded bg-white/10">↓</kbd>
              <span>to navigate</span>
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1 rounded bg-white/10">↵</kbd>
              <span>to select</span>
            </span>
          </div>
          <span>{filteredCommands.length} commands</span>
        </div>
      </div>
    </div>
  );
}
