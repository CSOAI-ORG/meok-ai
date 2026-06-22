"use client";

import { useState } from "react";

type Industry =
  | ""
  | "finance"
  | "healthcare"
  | "legal"
  | "marketing"
  | "education"
  | "media"
  | "public"
  | "saas"
  | "other";

type SystemType =
  | ""
  | "gpa"
  | "text"
  | "image"
  | "audio"
  | "video"
  | "chatbot"
  | "emotion"
  | "deepfake"
  | "other";

interface Result {
  inScope: boolean | null;
  label: string;
  detail: string;
}

function assess(industry: Industry, systemType: SystemType): Result {
  if (!industry || !systemType) {
    return { inScope: null, label: "", detail: "" };
  }

  const generative = ["text", "image", "audio", "video", "chatbot", "deepfake"];
  const special = ["emotion", "deepfake"];

  if (special.includes(systemType)) {
    return {
      inScope: true,
      label: "Likely in scope",
      detail:
        "Article 50(3) specifically requires disclosure for emotion recognition, biometric categorisation, and deepfake-style manipulation systems.",
    };
  }

  if (systemType === "gpa" || generative.includes(systemType)) {
    return {
      inScope: true,
      label: "Likely in scope",
      detail:
        "Generative AI systems (and general-purpose AI models that generate content) must carry machine-readable marking from 2 August 2026, and deployers must disclose AI-generated content.",
    };
  }

  return {
    inScope: false,
    label: "Probably not Article 50 specific",
    detail:
      "Narrow, non-generative AI systems may fall outside Article 50’s transparency obligations, but verify against high-risk/Annex III and sector rules.",
  };
}

export function Article50RiskClassifier() {
  const [industry, setIndustry] = useState<Industry>("");
  const [systemType, setSystemType] = useState<SystemType>("");
  const result = assess(industry, systemType);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-lg font-bold text-white">Quick Article 50 scope check</h3>
      <p className="mt-1 text-sm text-white/60">
        Select your industry and AI system type for a fast, non-legal indication of whether Article 50 likely applies.
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="industry" className="text-xs font-bold uppercase tracking-widest text-white/50">
            Industry
          </label>
          <select
            id="industry"
            value={industry}
            onChange={(e) => setIndustry(e.target.value as Industry)}
            className="w-full rounded-lg border border-white/10 bg-[#0d0c18] px-3 py-2.5 text-sm text-white focus:border-[#c9a84c] focus:outline-none"
          >
            <option value="">Choose an industry</option>
            <option value="finance">Finance / Fintech</option>
            <option value="healthcare">Healthcare / MedTech</option>
            <option value="legal">Legal / LegalTech</option>
            <option value="marketing">Marketing / AdTech</option>
            <option value="education">Education / EdTech</option>
            <option value="media">Media / Publishing</option>
            <option value="public">Public sector / Government</option>
            <option value="saas">SaaS / Software</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="system" className="text-xs font-bold uppercase tracking-widest text-white/50">
            AI system type
          </label>
          <select
            id="system"
            value={systemType}
            onChange={(e) => setSystemType(e.target.value as SystemType)}
            className="w-full rounded-lg border border-white/10 bg-[#0d0c18] px-3 py-2.5 text-sm text-white focus:border-[#c9a84c] focus:outline-none"
          >
            <option value="">Choose a system type</option>
            <option value="gpa">General-purpose AI model (GPT-class)</option>
            <option value="text">Generative text / LLM output</option>
            <option value="image">Generative image</option>
            <option value="audio">Generative audio</option>
            <option value="video">Generative video</option>
            <option value="chatbot">Chatbot / virtual assistant</option>
            <option value="emotion">Emotion recognition / biometric categorisation</option>
            <option value="deepfake">Deepfake / manipulated content</option>
            <option value="other">Other / not sure</option>
          </select>
        </div>
      </div>

      {result.inScope !== null && (
        <div
          className={`mt-5 rounded-xl border p-4 ${
            result.inScope
              ? "border-[#2d9b8a]/30 bg-[#2d9b8a]/10"
              : "border-white/10 bg-white/[0.03]"
          }`}
        >
          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                result.inScope ? "bg-[#2d9b8a]" : "bg-white/40"
              }`}
            />
            <span
              className="text-sm font-bold"
              style={{ color: result.inScope ? "#2d9b8a" : "rgba(255,255,255,0.7)" }}
            >
              {result.label}
            </span>
          </div>
          <p className="mt-2 text-sm text-white/70">{result.detail}</p>
        </div>
      )}

      <p className="mt-4 text-xs text-white/40">
        This is a simplified heuristic, not legal advice. For a definitive assessment, use the{" "}
        <a href="/scorecard" className="underline" style={{ color: "#c9a84c" }}>
          scope scorecard
        </a>{" "}
        or book a readiness call.
      </p>
    </div>
  );
}
