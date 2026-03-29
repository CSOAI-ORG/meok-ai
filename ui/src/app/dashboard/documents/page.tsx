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
  Clock,
  ChevronDown,
} from "lucide-react";

// ── Brand tokens ────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ── Version type ────────────────────────────────────────────────────────────
interface DocumentVersion {
  id: string;
  timestamp: number;
  title: string;
  content: string;
  label?: string;
}

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
  const [versions, setVersions] = useState<DocumentVersion[]>([]);
  const [showVersions, setShowVersions] = useState(false);
  const [ghostText, setGhostText] = useState("");
  const [showGhost, setShowGhost] = useState(false);
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
    async (instruction: string, preview: boolean = false) => {
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
          const suggestion = data.simplified ?? text;
          if (preview) {
            setGhostText(suggestion);
            setShowGhost(true);
          } else {
            replaceTargetText(suggestion);
            saveVersion();
          }
        }
      } catch {
        // silent fail for MVP
      } finally {
        setLoading(false);
      }
    },
    [getTargetText, replaceTargetText],
  );

  const saveVersion = useCallback(() => {
    const newVersion: DocumentVersion = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      title,
      content,
    };
    setVersions((prev) => [newVersion, ...prev].slice(0, 20)); // Keep last 20 versions
  }, [title, content]);

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

  const formatTime = useCallback((timestamp: number) => {
    const date = new Date(timestamp);
    const now = Date.now();
    const diff = now - timestamp;
    const mins = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (mins < 1) return "Just now";
    if (mins < 60) return `${mins}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  }, []);

  const docIdRef = useRef<string | null>(null);

  const handleSave = useCallback(async () => {
    saveVersion();
    setSaved(true);
    try {
      const res = await fetch('/api/documents', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: docIdRef.current, title: title || 'Untitled', content }),
      });
      if (res.ok) {
        const data = await res.json() as { ok: boolean; id?: string };
        if (data.id) docIdRef.current = data.id;
      }
    } catch {
      // Fall back gracefully — version history is still saved in local state
    }
    setTimeout(() => setSaved(false), 2000);
  }, [title, content, saveVersion]);

  const restoreVersion = useCallback((version: DocumentVersion) => {
    setTitle(version.title);
    setContent(version.content);
    setShowVersions(false);
  }, []);

  const handleExportAs = useCallback((format: "md" | "txt" | "pdf") => {
    const filename = (title.trim() || "untitled");
    let blob;

    if (format === "pdf") {
      // Simple PDF generation (text-only)
      const pdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /Resources << /Font << /F1 4 0 R >> >> /MediaBox [0 0 612 792] /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
5 0 obj
<< /Length ${content.length + 50} >>
stream
BT /F1 12 Tf 50 700 Td (${filename}) Tj 0 -20 Td (${content.replace(/\n/g, ") Tj T* (")}) Tj ET
endstream
endobj
xref
0 6
0000000000 65535 f
0000000009 00000 n
0000000058 00000 n
0000000115 00000 n
0000000262 00000 n
0000000341 00000 n
trailer
<< /Size 6 /Root 1 0 R >>
startxref
${608 + content.length}
%%EOF`;
      blob = new Blob([pdfContent], { type: "application/pdf;charset=utf-8" });
    } else {
      blob = new Blob([content], {
        type: format === "md" ? "text/markdown;charset=utf-8" : "text/plain;charset=utf-8",
      });
    }

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.${format}`;
    a.click();
    URL.revokeObjectURL(url);
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

      {/* AI Toolbar + History */}
      <div
        className="flex items-center gap-2 mb-4 p-2 rounded-lg"
        style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
      >
        <span className="text-xs text-white/40 mr-2 hidden sm:inline">
          AI Assist:
        </span>
        {[
          { label: "Improve", icon: Sparkles, instruction: "Improve the writing quality, clarity, and flow of this text", preview: true },
          { label: "Simplify", icon: Minimize2, instruction: "Simplify this text to be clearer and more concise", preview: true },
          { label: "Expand", icon: Maximize2, instruction: "Expand this text with more detail and supporting points", preview: true },
        ].map(({ label, icon: Icon, instruction, preview }) => (
          <button
            key={label}
            onClick={() => aiAssist(instruction, preview)}
            disabled={loading}
            title={preview ? "Preview suggestion (ghost text)" : "Replace immediately"}
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

        {/* History button */}
        <div className="relative">
          <button
            onClick={() => setShowVersions(!showVersions)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all hover:scale-105"
            style={{
              color: versions.length > 0 ? GOLD : "rgba(255,255,255,0.3)",
              background: `${GOLD}10`,
              border: `1px solid ${GOLD}30`,
              opacity: versions.length > 0 ? 1 : 0.5,
            }}
          >
            <Clock className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">History</span>
            {versions.length > 0 && <span className="text-xs ml-1">{versions.length}</span>}
          </button>

          {/* Version dropdown */}
          {showVersions && versions.length > 0 && (
            <div
              className="absolute right-0 top-full mt-1 w-56 rounded-lg shadow-lg z-10 max-h-64 overflow-y-auto"
              style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
            >
              {versions.map((v) => (
                <button
                  key={v.id}
                  onClick={() => restoreVersion(v)}
                  className="w-full text-left px-4 py-2 hover:bg-white/5 border-b last:border-b-0 text-sm"
                  style={{ borderColor: BORDER }}
                >
                  <p className="text-white/80 font-medium truncate">{v.title || "Untitled"}</p>
                  <p className="text-white/40 text-xs">{formatTime(v.timestamp)}</p>
                </button>
              ))}
            </div>
          )}
        </div>

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

        {/* Export dropdown */}
        <div className="relative group">
          <button
            disabled={!content.trim()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-md text-sm font-medium transition-all hover:scale-105 disabled:opacity-30"
            style={{
              color: GOLD,
              background: `${GOLD}10`,
              border: `1px solid ${GOLD}30`,
            }}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Export</span>
            <ChevronDown className="w-3 h-3" />
          </button>

          {/* Export menu */}
          <div
            className="absolute right-0 top-full mt-1 w-32 rounded-lg shadow-lg hidden group-hover:block z-10"
            style={{ background: SURFACE, border: `1px solid ${BORDER}` }}
          >
            {[
              { format: "md" as const, label: "Markdown" },
              { format: "txt" as const, label: "Plain Text" },
              { format: "pdf" as const, label: "PDF" },
            ].map(({ format, label }) => (
              <button
                key={format}
                onClick={() => handleExportAs(format)}
                disabled={!content.trim()}
                className="w-full text-left px-4 py-2 hover:bg-white/5 border-b last:border-b-0 text-sm disabled:opacity-30"
                style={{ color: "rgba(255,255,255,0.6)", borderColor: BORDER }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Editor + Preview side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4" style={{ minHeight: "60vh" }}>
        {/* Textarea + Ghost text */}
        <div className="relative">
          <textarea
            ref={textareaRef}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Start writing... (Markdown supported)"
            className="w-full h-full min-h-[60vh] p-4 rounded-lg text-white/80 text-sm leading-relaxed resize-none outline-none focus:ring-1 font-mono relative z-10"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              // @ts-expect-error -- CSS custom property for focus ring
              "--tw-ring-color": GOLD,
            }}
          />

          {/* Ghost text overlay */}
          {showGhost && ghostText && (
            <div className="absolute inset-0 p-4 rounded-lg pointer-events-none text-white/30 text-sm leading-relaxed font-mono overflow-hidden">
              <div style={{ whiteSpace: "pre-wrap" }}>
                {ghostText.substring(content.length)}
              </div>
              <div className="mt-3 p-2 rounded bg-white/5 border border-white/10">
                <p className="text-xs text-white/40 mb-2">Accept suggestion?</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      replaceTargetText(ghostText);
                      setShowGhost(false);
                      saveVersion();
                    }}
                    className="px-2 py-1 rounded text-xs bg-green-900/30 border border-green-700/50 text-green-300 hover:bg-green-900/50 pointer-events-auto"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => setShowGhost(false)}
                    className="px-2 py-1 rounded text-xs bg-gray-900/30 border border-gray-700/50 text-gray-300 hover:bg-gray-900/50 pointer-events-auto"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          )}

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/40 z-20">
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
