"use client";

/**
 * OsShell — 3-pane CSS grid root for /os.
 *
 * Day-2 (2026-05-21) skeleton: empty rails + center placeholder + RHS catalogue
 * preview. Real wiring (provider select, MCP dispatch, streaming chat, BFT
 * council, care meter) lands in the next 10 days per
 * MEOK_CLAW_ARCHITECTURE_2026-05-20.md.
 */

import { useState } from "react";
import LeftRail from "./LeftRail";
import CenterPane from "./CenterPane";
import RightRail from "./RightRail";

const DEEP = "#0d0c18";
const BORDER = "rgba(255,255,255,0.08)";

export default function OsShell() {
  // Mobile drawer state (LeftRail + RightRail collapse on narrow viewports).
  const [leftOpen, setLeftOpen] = useState(false);
  const [rightOpen, setRightOpen] = useState(false);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "minmax(0, 260px) minmax(0, 1fr) minmax(0, 320px)",
        gap: 0,
        flex: 1,
        minHeight: 0,
        background: DEEP,
        color: "#f5f0e8",
      }}
    >
      {/* ── Left rail — model + character + session list ──────────────── */}
      <aside
        style={{
          borderRight: `1px solid ${BORDER}`,
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        <LeftRail />
      </aside>

      {/* ── Center pane — conversation + tool-call streaming ─────────── */}
      <main
        style={{
          minHeight: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CenterPane onOpenLeft={() => setLeftOpen(true)} onOpenRight={() => setRightOpen(true)} />
      </main>

      {/* ── Right rail — MCP picker + CareMeter + CouncilTrace ───────── */}
      <aside
        style={{
          borderLeft: `1px solid ${BORDER}`,
          minHeight: 0,
          overflowY: "auto",
        }}
      >
        <RightRail />
      </aside>

      {/* Mobile responsive: stack at <960px */}
      <style>{`
        @media (max-width: 960px) {
          .os-shell-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
