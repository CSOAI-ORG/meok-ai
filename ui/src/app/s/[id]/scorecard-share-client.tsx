"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowLeft,
  Copy,
  Check,
  Clock,
  AlertCircle,
  Loader2,
  ShieldCheck,
  Link2,
} from "lucide-react";

/**
 * Shape of a shared scorecard. Kept permissive so it can render whatever the
 * (future) /api/scorecard/share endpoint returns. Mirrors the public
 * compliance/care scorecard fields used elsewhere in the app.
 */
type ScorecardCriterion = {
  label: string;
  passed?: boolean;
  score?: number; // 0-100
  detail?: string;
};

type ScorecardData = {
  systemName?: string;
  framework?: string;
  overallScore?: number | null; // 0-100
  status?: string; // e.g. "certified" | "evaluation_in_progress" | "pending"
  criteria?: ScorecardCriterion[];
  certificateId?: string | null;
  verifyUrl?: string;
  createdAt?: string;
  expiresAt?: string;
};

type FetchState = "loading" | "ready" | "notfound" | "soon";

export default function ScorecardShareClient({ shareId }: { shareId: string }) {
  const [state, setState] = useState<FetchState>("loading");
  const [data, setData] = useState<ScorecardData | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!shareId) {
      setState("notfound");
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const res = await fetch(
          `/api/scorecard/share?id=${encodeURIComponent(shareId)}`,
          { headers: { Accept: "application/json" } }
        );

        // Endpoint not built yet (or routed to a non-API handler) → clean
        // "coming soon" state rather than a hard error.
        const contentType = res.headers.get("content-type") || "";
        if (res.status === 404 || !contentType.includes("application/json")) {
          if (!cancelled) setState("soon");
          return;
        }

        const json = await res.json();

        if (json?.error || !json) {
          if (!cancelled) setState("notfound");
          return;
        }

        if (!cancelled) {
          setData(json as ScorecardData);
          setState("ready");
        }
      } catch {
        // Network/parse failure with no endpoint present → treat as coming soon.
        if (!cancelled) setState("soon");
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [shareId]);

  const copyLink = () => {
    if (typeof window === "undefined") return;
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // ---- Loading ----
  if (state === "loading") {
    return (
      <div className="min-h-screen bg-[#0d0c18] flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-[#c9a84c] animate-spin" />
      </div>
    );
  }

  // ---- Coming soon / endpoint not yet live ----
  if (state === "soon") {
    return (
      <div className="min-h-screen bg-[#0d0c18] flex flex-col items-center justify-center p-8 text-center">
        <ShieldCheck className="w-12 h-12 text-[#c9a84c] mb-4" />
        <h1 className="text-xl font-bold text-white mb-2">Scorecard Sharing — Coming Soon</h1>
        <p className="text-gray-400 mb-6 max-w-md">
          Public scorecard links are not available yet. If you were sent this
          link, check back shortly or ask the sender for an updated link.
        </p>
        <Link
          href="/scorecard"
          className="flex items-center gap-2 text-[#c9a84c] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          View the MEOK Scorecard
        </Link>
      </div>
    );
  }

  // ---- Not found / invalid / expired ----
  if (state === "notfound" || !data) {
    return (
      <div className="min-h-screen bg-[#0d0c18] flex flex-col items-center justify-center p-8 text-center">
        <AlertCircle className="w-12 h-12 text-red-400 mb-4" />
        <h1 className="text-xl font-bold text-white mb-2">Link Not Found</h1>
        <p className="text-gray-400 mb-6 max-w-md">
          This scorecard link is invalid or has expired.
        </p>
        <Link
          href="/scorecard"
          className="flex items-center gap-2 text-[#c9a84c] hover:underline"
        >
          <ArrowLeft className="w-4 h-4" />
          View the MEOK Scorecard
        </Link>
      </div>
    );
  }

  // ---- Ready ----
  const score = data.overallScore;
  const scoreColor =
    typeof score === "number"
      ? score >= 80
        ? "text-emerald-400"
        : score >= 50
        ? "text-[#c9a84c]"
        : "text-red-400"
      : "text-gray-400";

  return (
    <div className="min-h-screen bg-[#0d0c18] p-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/scorecard"
            className="flex items-center gap-2 text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Link>
          <button
            onClick={copyLink}
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm bg-[#c9a84c]/20 text-[#c9a84c] hover:bg-[#c9a84c]/30"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copied ? "Copied!" : "Share Link"}
          </button>
        </div>

        {/* Title */}
        <div className="mb-6">
          <p className="text-xs text-[#c9a84c] uppercase tracking-widest mb-2">
            Compliance &amp; Care Scorecard
          </p>
          <h1 className="text-2xl font-bold text-white">
            {data.systemName || "Shared Scorecard"}
          </h1>
          {data.framework && (
            <p className="text-gray-500 text-sm mt-2">{data.framework}</p>
          )}
        </div>

        {/* Overall score */}
        <div className="bg-[#13121f] rounded-xl p-6 border border-white/10 mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-[#c9a84c] uppercase tracking-widest mb-1">
              Overall Score
            </p>
            {data.status && (
              <p className="text-gray-400 text-sm capitalize">
                {data.status.replace(/_/g, " ")}
              </p>
            )}
          </div>
          <div className={`text-5xl font-bold ${scoreColor}`}>
            {typeof score === "number" ? `${score}` : "—"}
            <span className="text-lg text-gray-600">/100</span>
          </div>
        </div>

        {/* Criteria */}
        {data.criteria && data.criteria.length > 0 && (
          <div className="bg-[#13121f] rounded-xl p-6 border border-white/10 mb-6">
            <p className="text-xs text-[#c9a84c] uppercase tracking-widest mb-4">
              Criteria
            </p>
            <div className="space-y-3">
              {data.criteria.map((c, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-white/5 rounded-lg"
                >
                  <span
                    className={`mt-0.5 flex-shrink-0 ${
                      c.passed === false ? "text-red-400" : "text-emerald-400"
                    }`}
                  >
                    {c.passed === false ? (
                      <AlertCircle className="w-4 h-4" />
                    ) : (
                      <Check className="w-4 h-4" />
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="text-white text-sm">{c.label}</div>
                    {c.detail && (
                      <div className="text-gray-500 text-xs mt-0.5">{c.detail}</div>
                    )}
                  </div>
                  {typeof c.score === "number" && (
                    <span className="text-xs font-bold text-[#c9a84c] flex-shrink-0">
                      {c.score}/100
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Verify */}
        {(data.verifyUrl || data.certificateId) && (
          <div className="bg-[#13121f] rounded-xl p-6 border border-white/10">
            <p className="text-xs text-[#c9a84c] uppercase tracking-widest mb-3">
              Verification
            </p>
            {data.certificateId && (
              <p className="text-gray-400 text-sm mb-2">
                Certificate ID:{" "}
                <span className="text-white font-mono">{data.certificateId}</span>
              </p>
            )}
            {data.verifyUrl && (
              <a
                href={data.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#c9a84c] hover:underline text-sm"
              >
                <Link2 className="w-4 h-4" />
                Verify this scorecard
              </a>
            )}
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 flex items-center gap-4 text-xs text-gray-500">
          {data.createdAt && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Created {new Date(data.createdAt).toLocaleDateString()}
            </div>
          )}
          {data.expiresAt && (
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              Expires {new Date(data.expiresAt).toLocaleDateString()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
