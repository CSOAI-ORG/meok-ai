"use client";

import { useState } from "react";

const GOLD = "#c9a84c";

type VerifyResult =
  | { ok: true; cert_id: string; regulation: string; entity: string; score: number; tier: string; issued_at: string; verify_url: string }
  | { ok: false; error: string };

export default function VerifyForm() {
  const [certId, setCertId] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<VerifyResult | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!certId.trim()) return;
    setLoading(true);
    setResult(null);
    try {
      // Proxy via meok-attestation-api.vercel.app (HMAC-signed verification).
      // Falls back to /api/attest/verify on meok-ui if env is set.
      const base =
        process.env.NEXT_PUBLIC_ATTESTATION_API_URL ||
        "https://meok-attestation-api.vercel.app";
      const res = await fetch(`${base}/verify/${encodeURIComponent(certId.trim())}`);
      if (!res.ok) {
        setResult({ ok: false, error: `No attestation found for cert_id "${certId}"` });
        return;
      }
      const data = await res.json();
      setResult({ ok: true, ...data });
    } catch (err) {
      setResult({
        ok: false,
        error: "Could not reach the verification service. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm text-white/50 mb-1">cert_id</label>
        <input
          type="text"
          value={certId}
          onChange={(e) => setCertId(e.target.value)}
          required
          className="w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-white/30 focus:outline-none focus:border-[#c9a84c]/50 font-mono"
          placeholder="e.g. meok-demo-2026-001"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="w-full px-6 py-3 rounded-xl font-bold text-black transition-colors disabled:opacity-50"
        style={{ backgroundColor: GOLD }}
      >
        {loading ? "Verifying…" : "Verify signature"}
      </button>

      {result && (
        <div
          className={`mt-6 rounded-2xl border p-6 ${
            result.ok
              ? "border-emerald-500/30 bg-emerald-500/[0.05]"
              : "border-rose-500/30 bg-rose-500/[0.05]"
          }`}
        >
          {result.ok ? (
            <div className="space-y-2 text-sm">
              <p className="text-emerald-400 font-bold mb-3">✓ Valid signature</p>
              <Row k="cert_id" v={result.cert_id} />
              <Row k="regulation" v={result.regulation} />
              <Row k="entity" v={result.entity} />
              <Row k="score" v={`${result.score} / 100`} />
              <Row k="tier" v={result.tier} />
              <Row k="issued_at" v={result.issued_at} />
              <Row k="verify_url" v={result.verify_url} />
            </div>
          ) : (
            <p className="text-rose-300 text-sm">{result.error}</p>
          )}
        </div>
      )}
    </form>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/5 py-1.5">
      <span className="text-white/40">{k}</span>
      <span className="text-white/90 font-mono text-right break-all">{v}</span>
    </div>
  );
}
