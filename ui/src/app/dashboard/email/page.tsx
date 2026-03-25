"use client";

import { useState, useCallback } from "react";
import { Mail, Send, Copy, Check, Loader2 } from "lucide-react";

// ── Brand tokens ────────────────────────────────────────────────────────────
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

const TONES = ["Casual", "Friendly", "Professional", "Business", "Formal"] as const;
type Tone = (typeof TONES)[number];

const TONE_INSTRUCTIONS: Record<Tone, string> = {
  Casual:
    "Write in a casual, relaxed tone. Keep it conversational but still coherent.",
  Friendly:
    "Write in a warm, friendly tone. Be approachable, positive, and personable.",
  Professional:
    "Write in a professional, business-appropriate tone. Be clear, concise, and courteous.",
  Business:
    "Write in a polished business tone. Confident and direct, suitable for stakeholders.",
  Formal:
    "Write in a formal, respectful tone. Use proper grammar, avoid contractions, and maintain decorum.",
};

const EMAIL_TEMPLATES: Record<string, { label: string; body: string }> = {
  followup: {
    label: "Follow-up",
    body: `Hi [Name],\n\nI wanted to follow up on our previous conversation regarding [topic]. Have you had a chance to review the details?\n\nPlease let me know if you have any questions or if there's anything else I can help with.\n\nBest regards,\n[Your Name]`,
  },
  introduction: {
    label: "Introduction",
    body: `Hi [Name],\n\nI hope this message finds you well. My name is [Your Name] and I'm reaching out because [reason for reaching out].\n\nI'd love to connect and discuss how we might [value proposition]. Would you be open to a brief call this week?\n\nLooking forward to hearing from you.\n\nBest,\n[Your Name]`,
  },
  thankyou: {
    label: "Thank You",
    body: `Hi [Name],\n\nThank you so much for [what you're thanking them for]. I really appreciate your time and effort.\n\n[Any next steps or additional thoughts]\n\nThanks again, and please don't hesitate to reach out if there's anything I can do in return.\n\nWarm regards,\n[Your Name]`,
  },
};

export default function EmailPage() {
  const [context, setContext] = useState("");
  const [tone, setTone] = useState<Tone>("Professional");
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  const generateDraft = useCallback(async () => {
    if (!context.trim()) return;
    setLoading(true);
    setDraft("");

    try {
      const systemPrompt =
        `You are an email drafting assistant for MEOK AI. ` +
        `${TONE_INSTRUCTIONS[tone]} ` +
        `The user will provide context (e.g., an email they are replying to, or a description of what they want to write). ` +
        `Generate a complete, ready-to-send email reply or draft. ` +
        `Do NOT include explanations or meta-commentary — output ONLY the email body text.`;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "user", content: context.trim() },
          ],
          companionId: "__email_drafter__",
          _systemOverride: systemPrompt,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        setDraft(`Error: ${(err as Record<string, string>).error ?? "Failed to generate draft"}`);
        return;
      }

      // Read streaming response
      const reader = res.body?.getReader();
      if (!reader) {
        setDraft("Error: No response stream");
        return;
      }

      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        setDraft(text);
      }
    } catch {
      setDraft("Error: Failed to generate draft. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [context, tone]);

  const copyToClipboard = useCallback(async () => {
    if (!draft) return;
    try {
      await navigator.clipboard.writeText(draft);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [draft]);

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ background: DEEP }}>
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ background: `${GOLD}18` }}
        >
          <Mail className="w-5 h-5" style={{ color: GOLD }} />
        </div>
        <div>
          <h1 className="text-lg md:text-xl font-bold text-white">Email Drafter</h1>
          <p className="text-sm text-white/40">AI-powered email composition</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left: Input */}
        <div className="space-y-4">
          {/* Context textarea */}
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Paste the email you&apos;re replying to, or describe what you want to write
            </label>
            <textarea
              value={context}
              onChange={(e) => setContext(e.target.value)}
              placeholder="e.g., paste the email thread here, or describe: 'Follow up on the Q3 budget proposal...'"
              rows={12}
              className="w-full p-4 rounded-lg text-white/80 text-sm leading-relaxed resize-none outline-none focus:ring-1 font-mono"
              style={{
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                // @ts-expect-error -- CSS custom property for focus ring
                "--tw-ring-color": GOLD,
              }}
            />
          </div>

          {/* Tone slider */}
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Tone
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min={0}
                max={4}
                value={TONES.indexOf(tone)}
                onChange={(e) => setTone(TONES[Number(e.target.value)])}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, rgba(255,255,255,0.15), ${GOLD})`,
                  accentColor: GOLD,
                }}
              />
              <div className="flex justify-between text-xs text-white/40">
                {TONES.map((t) => (
                  <span
                    key={t}
                    className="transition-colors"
                    style={{ color: tone === t ? GOLD : undefined, fontWeight: tone === t ? 600 : 400 }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Template buttons */}
          <div>
            <label className="block text-sm font-medium text-white/60 mb-2">
              Templates
            </label>
            <div className="flex flex-wrap gap-2">
              {Object.entries(EMAIL_TEMPLATES).map(([key, { label }]) => (
                <button
                  key={key}
                  onClick={() => setContext(EMAIL_TEMPLATES[key].body)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
                  style={{
                    background: `${GOLD}10`,
                    color: GOLD,
                    border: `1px solid ${GOLD}30`,
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button
            onClick={generateDraft}
            disabled={loading || !context.trim()}
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] disabled:opacity-40 disabled:hover:scale-100"
            style={{
              background: `linear-gradient(135deg, ${GOLD}, ${GOLD}cc)`,
              color: DEEP,
            }}
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <Send className="w-4 h-4" />
            )}
            {loading ? "Drafting..." : "Generate Draft"}
          </button>
        </div>

        {/* Right: Output */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-white/60">
              Draft Output
            </label>
            {draft && (
              <button
                onClick={copyToClipboard}
                className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all hover:scale-105"
                style={{
                  color: copied ? "#22c55e" : GOLD,
                  background: copied ? "rgba(34,197,94,0.1)" : `${GOLD}10`,
                  border: `1px solid ${copied ? "rgba(34,197,94,0.3)" : `${GOLD}30`}`,
                }}
              >
                {copied ? (
                  <Check className="w-3 h-3" />
                ) : (
                  <Copy className="w-3 h-3" />
                )}
                {copied ? "Copied" : "Copy"}
              </button>
            )}
          </div>

          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Your AI-drafted email will appear here..."
            rows={20}
            className="w-full p-4 rounded-lg text-white/80 text-sm leading-relaxed resize-none outline-none focus:ring-1"
            style={{
              background: SURFACE,
              border: `1px solid ${BORDER}`,
              minHeight: "400px",
              // @ts-expect-error -- CSS custom property for focus ring
              "--tw-ring-color": GOLD,
            }}
          />
        </div>
      </div>
    </div>
  );
}
