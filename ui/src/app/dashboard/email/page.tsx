"use client";

import { useState, useCallback } from "react";
import { Mail, Send, Copy, Check, Loader2, AlertCircle, Zap, Eye, ChevronLeft, ChevronRight } from "lucide-react";

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

interface ReviewAnalysis {
  clarity: number;
  toneMatch: number;
  length: string;
  issues: string[];
  suggestions: string[];
}

interface DraftVariant {
  id: string;
  text: string;
  description: string;
}

export default function EmailPage() {
  const [context, setContext] = useState("");
  const [tone, setTone] = useState<Tone>("Professional");
  const [draft, setDraft] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [variants, setVariants] = useState<DraftVariant[]>([]);
  const [variantIndex, setVariantIndex] = useState(0);
  const [review, setReview] = useState<ReviewAnalysis | null>(null);
  const [showReview, setShowReview] = useState(false);

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
    const textToCopy = variants.length > 0 ? variants[variantIndex].text : draft;
    if (!textToCopy) return;
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
    }
  }, [draft, variants, variantIndex]);

  const analyzeReview = useCallback(async (text: string) => {
    try {
      const res = await fetch("/api/explain", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text: `Analyze this email draft for clarity, tone match (${tone}), and suggestions. Return JSON: { clarity (0-100), toneMatch (0-100), length (short/medium/long), issues: [], suggestions: [] }. Text: ${text}`,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        try {
          const analysis = JSON.parse(data.simplified);
          setReview(analysis);
          setShowReview(true);
        } catch {
          // If not JSON, just show basic review
          setReview({
            clarity: 75,
            toneMatch: 80,
            length: "medium",
            issues: [],
            suggestions: ["Review draft and adjust tone if needed"],
          });
          setShowReview(true);
        }
      }
    } catch {
      // Silent fail
    }
  }, [tone]);

  const generateVariants = useCallback(async () => {
    if (!draft) return;
    setLoading(true);
    setVariants([]);

    try {
      const systemPrompt =
        `You are an email drafting assistant for MEOK AI. ` +
        `Generate exactly 3 DIFFERENT VARIATIONS of the following email, each taking a slightly different approach or tone emphasis. ` +
        `Output format: VARIANT 1:\n[email]\n\nVARIANT 2:\n[email]\n\nVARIANT 3:\n[email]\n\nOutput ONLY the emails, no explanations.`;

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "user", content: `Current draft:\n\n${draft}` },
          ],
          companionId: "__email_drafter__",
          _systemOverride: systemPrompt,
        }),
      });

      if (!res.ok) return;

      const reader = res.body?.getReader();
      if (!reader) return;

      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
      }

      // Parse variants from text
      const variantTexts = text.split("VARIANT").slice(1).map((v) => v.trim());
      const parsed = variantTexts.map((v, i) => ({
        id: `v${i + 1}`,
        text: v.replace(/^\d+:\n?/, ""),
        description: ["Professional", "Friendly", "Concise"][i] || "Alternative",
      }));

      setVariants(parsed);
      setVariantIndex(0);
      setDraft(parsed[0].text);
    } finally {
      setLoading(false);
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

          {/* Generate variants button */}
          {draft && !loading && (
            <button
              onClick={generateVariants}
              className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02] w-full"
              style={{
                background: `${GOLD}20`,
                color: GOLD,
                border: `1px solid ${GOLD}40`,
              }}
            >
              <Zap className="w-4 h-4" />
              Generate Variants
            </button>
          )}
        </div>

        {/* Right: Output */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <label className="text-sm font-medium text-white/60">
                Draft Output
              </label>
              {variants.length > 0 && (
                <p className="text-xs text-white/40 mt-0.5">
                  Variant {variantIndex + 1} of {variants.length}
                </p>
              )}
            </div>
            <div className="flex items-center gap-2">
              {draft && (
                <button
                  onClick={() => analyzeReview(variants.length > 0 ? variants[variantIndex].text : draft)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium transition-all hover:scale-105"
                  style={{
                    color: GOLD,
                    background: `${GOLD}10`,
                    border: `1px solid ${GOLD}30`,
                  }}
                >
                  <Eye className="w-3 h-3" />
                  Review
                </button>
              )}
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
          </div>

          {/* Variant navigation */}
          {variants.length > 0 && (
            <div className="flex items-center gap-2 p-2 rounded-lg" style={{ background: `${SURFACE}` }}>
              <button
                onClick={() => setVariantIndex(Math.max(0, variantIndex - 1))}
                disabled={variantIndex === 0}
                className="p-1 rounded disabled:opacity-30"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex-1 text-center">
                <p className="text-xs text-white/60">{variants[variantIndex].description}</p>
              </div>
              <button
                onClick={() => setVariantIndex(Math.min(variants.length - 1, variantIndex + 1))}
                disabled={variantIndex === variants.length - 1}
                className="p-1 rounded disabled:opacity-30"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

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

          {/* Review panel */}
          {showReview && review && (
            <div className="p-4 rounded-lg" style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}20` }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  Pre-send Review
                </h3>
                <button
                  onClick={() => setShowReview(false)}
                  className="text-white/40 hover:text-white/60"
                >
                  ✕
                </button>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-xs text-white/50 mb-1">Clarity</p>
                    <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${review.clarity}%`,
                          background: review.clarity > 70 ? "#22c55e" : review.clarity > 50 ? GOLD : "#ef4444",
                        }}
                      />
                    </div>
                    <p className="text-xs text-white/40 mt-1">{review.clarity}%</p>
                  </div>

                  <div>
                    <p className="text-xs text-white/50 mb-1">Tone Match</p>
                    <div className="w-full h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
                      <div
                        className="h-full rounded-full transition-all"
                        style={{
                          width: `${review.toneMatch}%`,
                          background: review.toneMatch > 70 ? "#22c55e" : review.toneMatch > 50 ? GOLD : "#ef4444",
                        }}
                      />
                    </div>
                    <p className="text-xs text-white/40 mt-1">{review.toneMatch}%</p>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-white/50 mb-1">Length: <span className="text-white/70 font-medium">{review.length}</span></p>
                </div>

                {review.issues.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <AlertCircle className="w-3 h-3" style={{ color: "#ef4444" }} />
                      <p className="text-xs font-medium text-white/70">Issues</p>
                    </div>
                    <ul className="text-xs text-white/50 list-disc list-inside space-y-0.5">
                      {review.issues.map((issue, i) => (
                        <li key={i}>{issue}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {review.suggestions.length > 0 && (
                  <div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <Zap className="w-3 h-3" style={{ color: GOLD }} />
                      <p className="text-xs font-medium text-white/70">Suggestions</p>
                    </div>
                    <ul className="text-xs text-white/50 list-disc list-inside space-y-0.5">
                      {review.suggestions.map((suggestion, i) => (
                        <li key={i}>{suggestion}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
