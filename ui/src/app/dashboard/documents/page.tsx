"use client";

import { useState, useCallback, useRef } from "react";
import {
  FileText,
  Sparkles,
  Minimize2,
  Maximize2,
  Save,
  Check,
  Download,
  Bold,
  Italic,
  Heading1,
  List,
} from "lucide-react";

// ── Brand tokens ────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Simple markdown → HTML (MVP) ────────────────────────────────────────────

function renderMarkdown(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3 class='text-lg font-semibold text-white/90 mt-4 mb-1'>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2 class='text-xl font-bold text-white/90 mt-5 mb-2'>$2</h2>")
    .replace(/^# (.+)$/gm, "<h1 class='text-2xl font-bold text-white mt-6 mb-2'>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong class='text-white'>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code class='bg-white/5 px-1 py-0.5 rounded text-sm text-[#c9a84c]'>$1</code>")
    .replace(/^- (.+)$/gm, "<li class='ml-4 list-disc text-white/70'>$1</li>")
    .replace(/\n{2,}/g, "<br/><br/>")
    .replace(/\n/g, "<br/>");
}

// ── Page ────────────────────────────────────────────────────────────────────

export default function DocumentsPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Get selected text or full content
  const getTargetText = useCallback((): string => {
    const ta = textareaRef.current;
    if (ta && ta.selectionStart !== ta.selectionEnd) {
      return ta.value.slice(ta.selectionStart, ta.selectionEnd);
    }
    return content;
  }, [content]);

  // Replace selected text or full content
  const replaceTargetText = useCallback(
    (replacement: string) => {
      const ta = textareaRef.current;
      if (ta && ta.selectionStart !== ta.selectionEnd) {
        const before = content.slice(0, ta.selectionStart);
        const after = content.slice(ta.selectionEnd);
        setContent(before + replacement + after);
      } else {
        setContent(replacement);
      }
    },
    [content],
  );

  const aiAssist = useCallback(
    async (instruction: string) => {
      const text = getTargetText();
      if (!text.trim()) return;
      setLoading(true);
      try {
        const res = await fetch("/api/explain", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            text: `${instruction}: ${text}`,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          replaceTargetText(data.simplified ?? text);
        }
      } catch {
        // silent fail for MVP
      } finally {
        setLoading(false);
      }
    },
    [getTargetText, replaceTargetText],
  );

  // Markdown toolbar: wrap selected text or insert at cursor
  const insertMarkdown = useCallback(
    (prefix: string, suffix: string = "") => {
      const ta = textareaRef.current;
      if (!ta) return;
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const selected = content.slice(start, end);
      const before = content.slice(0, start);
      const after = content.slice(end);
      const insertion = selected
        ? `${prefix}${selected}${suffix}`
        : `${prefix}text${suffix}`;
      setContent(before + insertion + after);
      // Restore focus after state update
      requestAnimationFrame(() => {
        ta.focus();
        const cursorPos = selected
          ? start + insertion.length
          : start + prefix.length;
        ta.setSelectionRange(cursorPos, cursorPos + (selected ? 0 : 4));
      });
    },
    [content],
  );

  const handleExport = useCallback(() => {
    const filename = (title.trim() || "untitled") + ".md";
    const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }, [title, content]);

  const handleSave = useCallback(() => {
    const key = `meok-doc-${Date.now()}`;
    const doc = { title: title || "Untitled", content, savedAt: new Date().toISOString() };
    localStorage.setItem(key, JSON.stringify(doc));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [title, content]);

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${GOLD}18` }}
        >
          <FileText className="w-5 h-5" style={{ color: GOLD }} />
        </div>
        <div>
          <h1 className="text-xl font-bold text-white">Document Editor</h1>
          <p className="text-sm text-white/40">Write with AI assistance</p>
        </div>
      </div>

      {/* Title input */}
      <input
        type="text"
        placeholder="Document title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 px-4 py-3 rounded-lg text-lg font-semibold text-white placeholder:text-white/20 outline-none focus:ring-1"
        style={{
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          // @ts-expect-error -- CSS custom property for focus ring
          "--tw-ring-color": GOLD,
        }}
      />

      {/* AI Toolbar */}
      <div
        className="flex items-center gap-2 mb-4 p-2 rounded-lg"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        <span className="text-xs text-white/40 mr-2 hidden sm:inline">
          AI Assist:
        </span>
        {[
          { label: "Improve", icon: Sparkles, instruction: "Improve the writing quality, clarity, and flow of this text" },
          { label: "Simplify", icon: Minimize2, instruction: "Simplify this text to be clearer and more concise" },
          { label: "Expand", icon: Maximize2, instruction: "Expand this text with more detail and supporting points" },
        ].map(({ label, icon: Icon, instruction }) => (
          <button
            key={label}
            onClick={() => aiAssist(instruction)}
            disabled={loading}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all hover:scale-105 disabled:opacity-40"
            style={{
              color: GOLD,
              background: `${GOLD}10`,
              border: `1px solid ${GOLD}30`,
            }}
          >
            <Icon className="w-3.5 h-3.5" />
            {label}
          </button>
        ))}

        <div className="flex-1" />

        {/* Save button */}
        <button
          onClick={handleSave}
          className="flex items-center gap-1.5 px-4 py-1.5 rounded-md text-sm font-medium transition-all hover:scale-105"
          style={{
            color: saved ? "#22c55e" : GOLD,
            background: saved ? "rgba(34,197,94,0.1)" : `${GOLD}10`,
            border: `1px solid ${saved ? "rgba(34,197,94,0.3)" : `${GOLD}30`}`,
          }}
        >
          {saved ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
          {saved ? "Saved" : "Save"}
        </button>
      </div>

      {/* Markdown Toolbar */}
      <div
        className="flex items-center gap-1 mb-4 p-2 rounded-lg"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        <span className="text-xs text-white/40 mr-2 hidden sm:inline">
          Format:
        </span>
        {[
          { label: "Bold", icon: Bold, action: () => insertMarkdown("**", "**") },
          { label: "Italic", icon: Italic, action: () => insertMarkdown("*", "*") },
          { label: "Heading", icon: Heading1, action: () => insertMarkdown("# ", "") },
          { label: "List", icon: List, action: () => insertMarkdown("- ", "") },
        ].map(({ label, icon: Icon, action }) => (
          <button
            key={label}
            onClick={action}
            title={label}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all hover:scale-105 hover:bg-white/5"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            <Icon className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{label}</span>
          </button>
        ))}

        <div className="flex-1" />

        {/* Export button */}
        <button
          onClick={handleExport}
          disabled={!content.trim()}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all hover:scale-105 disabled:opacity-30"
          style={{
            color: GOLD,
            background: `${GOLD}10`,
            border: `1px solid ${GOLD}30`,
          }}
        >
          <Download className="w-3.5 h-3.5" />
          Export .md
        </button>
      </div>

      {/* Editor + Preview side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ minHeight: "60vh" }}>
        {/* Textarea */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing... (Markdown supported)"
            className="w-full h-full min-h-[60vh] p-4 rounded-lg text-white/80 text-sm leading-relaxed resize-none outline-none focus:ring-1 font-mono"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              // @ts-expect-error -- CSS custom property for focus ring
              "--tw-ring-color": GOLD,
            }}
          />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40">
              <div
                className="w-6 h-6 rounded-full border-2 border-t-transparent animate-spin"
                style={{ borderColor: `${GOLD} transparent transparent ${GOLD}` }}
              />
            </div>
          )}
        </div>

        {/* Markdown preview */}
        <div
          className="p-4 rounded-lg overflow-auto text-white/70 text-sm leading-relaxed prose prose-invert max-w-none"
          style={{
            background: SURFACE,
            border: `1px solid ${BORDER}`,
            minHeight: "60vh",
          }}
          dangerouslySetInnerHTML={{
            __html: content.trim()
              ? renderMarkdown(content)
              : "<span class='text-white/20'>Preview will appear here...</span>",
          }}
        />
      </div>
    </div>
  );
}
