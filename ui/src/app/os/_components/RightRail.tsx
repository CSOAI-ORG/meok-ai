"use client";

/**
 * RightRail — MCP picker + CareMeter + CouncilTrace.
 *
 * Day-2 skeleton: static MCP catalogue preview. Real /api/mcp/dispatch wiring
 * lands on Day 5 (Sun 24 May). CareMeter on Day 6. CouncilTrace on Day 7.
 */

import Link from "next/link";

const GOLD = "#c9a84c";
const MUTED = "rgba(255,255,255,0.55)";
const BORDER = "rgba(255,255,255,0.08)";

const PACKS: { name: string; count: number; example: string }[] = [
  { name: "Governance", count: 10, example: "eu-ai-act, dora, nis2, cra, ai-bom" },
  { name: "Cybersec", count: 6, example: "mitre-attack, sbom-cyclonedx, sigstore" },
  { name: "A2A", count: 6, example: "policy-enforcement, audit-logger, rate-limiter" },
  { name: "Industry", count: 8, example: "fda-samd, mdr, mica, basel-iii, mifid-ii" },
  { name: "Trade", count: 8, example: "haulage, skip-hire, crane-hire, concrete-pump" },
];

export default function RightRail() {
  return (
    <div style={{ padding: "1rem", fontSize: 14 }}>
      {/* ── MCP packs ───────────────────────────────────── */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          MCP packs (38)
        </h3>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 6 }}>
          {PACKS.map((p) => (
            <li
              key={p.name}
              style={{
                padding: ".7rem .8rem",
                background: "rgba(255,255,255,0.02)",
                border: `1px solid ${BORDER}`,
                borderRadius: 10,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                <div style={{ fontWeight: 700, fontSize: 13 }}>{p.name}</div>
                <div style={{ fontSize: 11, color: MUTED }}>{p.count} MCPs</div>
              </div>
              <div style={{ fontSize: 11, color: MUTED, lineHeight: 1.4 }}>{p.example}</div>
            </li>
          ))}
        </ul>
        <Link
          href="/catalogue"
          style={{
            display: "block",
            marginTop: 12,
            textAlign: "center",
            padding: ".5rem",
            background: "transparent",
            color: GOLD,
            textDecoration: "none",
            fontSize: 12,
            fontWeight: 700,
            border: `1px solid ${BORDER}`,
            borderRadius: 8,
          }}
        >
          See full catalogue →
        </Link>
      </section>

      {/* ── Care meter placeholder ──────────────────────── */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          Care meter
        </h3>
        <div style={{ padding: ".8rem", background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}`, borderRadius: 10, fontSize: 12, color: MUTED }}>
          6-dim Noddings care + sovereignty + dignity scoring per response.
          Wiring lands Mon 25 May.
        </div>
      </section>

      {/* ── Council trace placeholder ───────────────────── */}
      <section style={{ marginBottom: "1.5rem" }}>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          BFT council
        </h3>
        <div style={{ padding: ".8rem", background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}`, borderRadius: 10, fontSize: 12, color: MUTED }}>
          5 LLMs vote, dissent visible per response. Pro tier (PaywallGate).
          Wiring lands Tue 26 May.
        </div>
      </section>

      {/* ── Attestation receipt placeholder ─────────────── */}
      <section>
        <h3 style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: MUTED, marginBottom: ".5rem" }}>
          Attestation
        </h3>
        <div style={{ padding: ".8rem", background: "rgba(255,255,255,0.02)", border: `1px solid ${BORDER}`, borderRadius: 10, fontSize: 12, color: MUTED }}>
          HMAC-signed audit log of every response. Verifiable at{" "}
          <a href="https://verify.meok.ai" style={{ color: GOLD, textDecoration: "none" }}>
            verify.meok.ai
          </a>
          .
        </div>
      </section>
    </div>
  );
}
