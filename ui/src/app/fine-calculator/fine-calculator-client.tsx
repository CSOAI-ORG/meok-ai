"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const RED = "#dc2626";

type Tier = "prohibited" | "non_compliance" | "misinformation" | "none";

const TIERS: { id: Tier; label: string; cap_eur: number; cap_pct: number; refs: string; desc: string }[] = [
  {
    id: "prohibited",
    label: "Prohibited practices (Article 5)",
    cap_eur: 35_000_000,
    cap_pct: 0.07,
    refs: "Art. 5 + 99(3)",
    desc: "Subliminal manipulation, exploiting vulnerabilities, social scoring by public authorities, untargeted scraping for facial recognition, real-time biometric ID in public spaces.",
  },
  {
    id: "non_compliance",
    label: "Article 5/16/26/50 / Annex III non-compliance",
    cap_eur: 15_000_000,
    cap_pct: 0.03,
    refs: "Art. 99(4)",
    desc: "Failures of obligations on operators (Articles 16, 26), notified bodies (Article 31), Article 50 transparency, GPAI provider duties (Article 53/55), and high-risk system requirements.",
  },
  {
    id: "misinformation",
    label: "Misleading info to authorities",
    cap_eur: 7_500_000,
    cap_pct: 0.01,
    refs: "Art. 99(5)",
    desc: "Supply of incorrect, incomplete, or misleading information to notified bodies or competent authorities. Lower cap reflects severity tier.",
  },
];

const COMMON_INFRACTIONS: { tier: Tier; example: string; article: string }[] = [
  { tier: "prohibited", example: "Real-time biometric identification of customers in retail or public space", article: "Article 5(1)(h)" },
  { tier: "prohibited", example: "AI-driven 'social scoring' of users / customers / employees by a public authority", article: "Article 5(1)(c)" },
  { tier: "non_compliance", example: "Generating AI content (text/image/video/audio) without machine-readable + visible disclosure", article: "Article 50(2)+(4)" },
  { tier: "non_compliance", example: "Deploying a high-risk Annex III system without a documented Risk Management System", article: "Article 9" },
  { tier: "non_compliance", example: "No Fundamental Rights Impact Assessment for public-sector or Annex III deployer", article: "Article 26(9)" },
  { tier: "non_compliance", example: "Bias / data-quality controls missing on training data for high-risk AI", article: "Article 10" },
  { tier: "non_compliance", example: "No human-oversight design for high-risk system in production", article: "Article 14" },
  { tier: "non_compliance", example: "GPAI provider above 10²⁵ FLOPs without Article 55 systemic-risk obligations", article: "Article 55" },
  { tier: "misinformation", example: "Incomplete or misleading technical documentation submitted in conformity assessment", article: "Annex IV + Article 99(5)" },
];

function fmt(n: number, currency = "€"): string {
  if (n >= 1_000_000_000) return `${currency}${(n / 1_000_000_000).toFixed(2).replace(/\.?0+$/, "")}B`;
  if (n >= 1_000_000) return `${currency}${(n / 1_000_000).toFixed(2).replace(/\.?0+$/, "")}M`;
  if (n >= 1_000) return `${currency}${(n / 1_000).toFixed(0)}K`;
  return `${currency}${n.toLocaleString()}`;
}

const TURNOVER_PRESETS: { label: string; value: number }[] = [
  { label: "< €1M (early-stage startup)", value: 500_000 },
  { label: "€1M – €10M (seed/Series A)", value: 5_000_000 },
  { label: "€10M – €50M (Series B / scale-up)", value: 25_000_000 },
  { label: "€50M – €250M (mid-market)", value: 100_000_000 },
  { label: "€250M – €1B (large enterprise)", value: 500_000_000 },
  { label: "€1B+ (multinational)", value: 2_000_000_000 },
];

export default function FineCalculatorClient() {
  const [turnover, setTurnover] = useState<number>(5_000_000);
  const [selectedTier, setSelectedTier] = useState<Tier>("non_compliance");
  const [customTurnover, setCustomTurnover] = useState<string>("");

  const exposure = useMemo(() => {
    return TIERS.map((t) => {
      const pctBased = turnover * t.cap_pct;
      const max = Math.max(pctBased, t.cap_eur);
      return { tier: t, pctBased, eur: t.cap_eur, max };
    });
  }, [turnover]);

  const selectedExposure = exposure.find((e) => e.tier.id === selectedTier);

  const handleCustomTurnover = (val: string) => {
    setCustomTurnover(val);
    const n = parseFloat(val.replace(/[^0-9.]/g, ""));
    if (!isNaN(n) && n > 0) setTurnover(n * 1_000_000);
  };

  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 980, margin: "0 auto", padding: "5rem 1.5rem" }}>
        <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>
          ← meok.ai
        </Link>

        <div
          style={{
            display: "inline-block",
            padding: "6px 12px",
            borderRadius: 999,
            background: "rgba(220,38,38,0.1)",
            border: `1px solid rgba(220,38,38,0.4)`,
            color: RED,
            fontSize: 12,
            fontWeight: 900,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginTop: 24,
            marginBottom: 24,
          }}
        >
          ⚠️ Free · No email · 30 seconds
        </div>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          EU AI Act Fine Calculator
        </h1>
        <p style={{ fontSize: "1.1rem", color: `${NAVY}99`, maxWidth: 720, marginBottom: 40, lineHeight: 1.6 }}>
          The EU AI Act caps administrative fines at the higher of a fixed Euro amount OR a percentage
          of your prior-year global turnover. Pick your turnover band + the type of breach to see the
          maximum exposure. Real numbers, no marketing fog.
        </p>

        {/* Turnover input */}
        <div style={{ background: "white", borderRadius: 16, padding: 28, marginBottom: 24, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 16, color: NAVY }}>
            1. Your global annual turnover (last full FY)
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 8, marginBottom: 16 }}>
            {TURNOVER_PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => {
                  setTurnover(p.value);
                  setCustomTurnover("");
                }}
                style={{
                  padding: "12px 14px",
                  borderRadius: 10,
                  border: `1px solid ${turnover === p.value ? GOLD : `${NAVY}22`}`,
                  background: turnover === p.value ? `${GOLD}1a` : "white",
                  color: NAVY,
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
            <label style={{ fontSize: 13, color: `${NAVY}99`, fontWeight: 700 }}>Or enter exact (€M):</label>
            <input
              type="text"
              value={customTurnover}
              onChange={(e) => handleCustomTurnover(e.target.value)}
              placeholder="e.g. 12.5"
              style={{
                padding: "10px 14px",
                borderRadius: 8,
                border: `1px solid ${NAVY}33`,
                fontSize: 14,
                width: 140,
              }}
            />
            <span style={{ fontSize: 13, fontWeight: 900, color: GOLD }}>
              Selected: {fmt(turnover)}
            </span>
          </div>
        </div>

        {/* Tier selector */}
        <div style={{ background: "white", borderRadius: 16, padding: 28, marginBottom: 24, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 16, color: NAVY }}>
            2. Which type of breach?
          </h2>
          <div style={{ display: "grid", gap: 10 }}>
            {TIERS.map((t) => (
              <button
                key={t.id}
                onClick={() => setSelectedTier(t.id)}
                style={{
                  padding: "16px 18px",
                  borderRadius: 12,
                  border: `2px solid ${selectedTier === t.id ? RED : `${NAVY}1a`}`,
                  background: selectedTier === t.id ? "rgba(220,38,38,0.04)" : "white",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 12, marginBottom: 6 }}>
                  <div style={{ fontWeight: 900, fontSize: 15, color: NAVY }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: `${NAVY}66`, fontFamily: "monospace" }}>{t.refs}</div>
                </div>
                <div style={{ fontSize: 13, color: `${NAVY}99`, lineHeight: 1.5 }}>{t.desc}</div>
                <div style={{ fontSize: 12, color: `${NAVY}66`, marginTop: 6 }}>
                  Cap: <strong>higher of {fmt(t.cap_eur)} or {(t.cap_pct * 100).toFixed(0)}% of global turnover</strong>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Result */}
        {selectedExposure && (
          <div
            style={{
              background: NAVY,
              color: "white",
              borderRadius: 16,
              padding: 32,
              marginBottom: 32,
              border: `2px solid ${GOLD}`,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 900, letterSpacing: "0.1em", textTransform: "uppercase", color: GOLD, marginBottom: 8 }}>
              Your maximum exposure
            </div>
            <div style={{ fontSize: "clamp(2.6rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1, marginBottom: 12 }}>
              {fmt(selectedExposure.max)}
            </div>
            <div style={{ fontSize: 14, color: "rgba(255,255,255,0.7)", lineHeight: 1.6, marginBottom: 24 }}>
              {selectedExposure.pctBased >= selectedExposure.eur ? (
                <>
                  <strong>{(selectedExposure.tier.cap_pct * 100).toFixed(0)}% × {fmt(turnover)}</strong> = {fmt(selectedExposure.pctBased)}{" "}
                  is greater than the {fmt(selectedExposure.eur)} fixed cap, so the percentage applies.
                </>
              ) : (
                <>
                  Fixed cap {fmt(selectedExposure.eur)} applies — your turnover-based amount ({fmt(selectedExposure.pctBased)}) is lower.
                </>
              )}
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: 16, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              {exposure.map((e) => (
                <div key={e.tier.id} style={{ opacity: e.tier.id === selectedTier ? 1 : 0.5 }}>
                  <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                    {e.tier.label.split("(")[0].trim()}
                  </div>
                  <div style={{ fontSize: 18, fontWeight: 900, color: e.tier.id === selectedTier ? GOLD : "white" }}>
                    {fmt(e.max)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Common infractions */}
        <div style={{ background: "white", borderRadius: 16, padding: 28, marginBottom: 32, border: `1px solid ${NAVY}1a` }}>
          <h2 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 16 }}>
            What actually triggers each tier
          </h2>
          <div style={{ display: "grid", gap: 12 }}>
            {COMMON_INFRACTIONS.map((c, i) => {
              const tier = TIERS.find((t) => t.id === c.tier)!;
              return (
                <div key={i} style={{ padding: 14, borderLeft: `4px solid ${c.tier === "prohibited" ? RED : c.tier === "non_compliance" ? GOLD : `${NAVY}55`}`, background: "rgba(0,0,0,0.02)", borderRadius: "0 8px 8px 0" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
                    <div style={{ fontSize: 14, fontWeight: 700 }}>{c.example}</div>
                    <div style={{ fontSize: 11, color: `${NAVY}66`, fontFamily: "monospace" }}>{c.article}</div>
                  </div>
                  <div style={{ fontSize: 12, color: `${NAVY}66`, marginTop: 4 }}>
                    Up to {fmt(tier.cap_eur)} or {(tier.cap_pct * 100).toFixed(0)}% turnover · {tier.refs}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: NAVY, color: "white", padding: 32, borderRadius: 16, textAlign: "center" }}>
          <h3 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 8 }}>
            Avoid the fine, ship signed evidence in 14 days
          </h3>
          <p style={{ color: "rgba(255,255,255,0.6)", marginBottom: 20, maxWidth: 580, margin: "0 auto 20px", lineHeight: 1.6 }}>
            The Audit-Prep Bundle wraps Articles 4 / 6 / 9 / 10 / 14 / 26 / 43 / 50 / 72 in 14 days
            with a cryptographically signed evidence pack any auditor can verify by URL. £4,950
            one-time. Or take the free 90-second readiness scorecard first.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
            <Link href="/scorecard" style={{ display: "inline-block", padding: "14px 24px", background: GOLD, color: NAVY, borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              Free readiness scorecard →
            </Link>
            <Link href="/audit-prep-bundle" style={{ display: "inline-block", padding: "14px 24px", background: "transparent", color: "white", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 12, fontWeight: 900, textDecoration: "none", fontSize: 14 }}>
              £4,950 audit-prep bundle →
            </Link>
          </div>
        </div>

        <p style={{ marginTop: 32, color: `${NAVY}66`, fontSize: 12, textAlign: "center", lineHeight: 1.6 }}>
          Source: EU AI Act Article 99 (administrative fines). Caps as published in OJ L 2024/1689.
          Fines are imposed by national competent authorities and may apply per infringement. This is
          a maximum-exposure calculator, not legal advice.
          <br />
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong>
        </p>
      </div>
    </main>
  );
}
