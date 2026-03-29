"use client";

/**
 * OS Layout — wraps all /os/ pages.
 *
 * - Hides the standard site navbar and footer (those are rendered by the root
 *   layout; we suppress them via a body data-attribute that GlobalNav reads).
 * - Shows the CharacterStatusBar at the very top.
 * - Shows the OsModeSwitcher as a floating pill.
 * - Full-viewport dark immersive shell.
 */

import { useEffect } from "react";
import { CharacterStatusBar } from "@/components/character-status-bar";
import { OsModeSwitcher } from "@/components/os-mode-switcher";
import { registerConsciousnessSW } from "@/lib/consciousness-sw-register";

const DEEP    = "#0d0c18";
const BORDER  = "rgba(255,255,255,0.07)";

export default function OsLayout({ children }: { children: React.ReactNode }) {
  // Signal the GlobalNav to hide itself when we're inside /os/
  useEffect(() => {
    document.body.setAttribute("data-os-mode", "true");
    return () => {
      document.body.removeAttribute("data-os-mode");
    };
  }, []);

  // Register the consciousness service worker for 24/7 heartbeat
  useEffect(() => {
    let cleanup: (() => void) | undefined;
    registerConsciousnessSW().then((fn) => { cleanup = fn; });
    return () => { cleanup?.(); };
  }, []);

  return (
    <div
      style={{
        minHeight: "100dvh",
        background: DEEP,
        color: "#f5f0e8",
        display: "flex",
        flexDirection: "column",
        isolation: "isolate",
      }}
    >
      {/* ── Character status bar — always top-most within OS shell ──────── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          width: "100%",
        }}
      >
        <CharacterStatusBar
          characterName="Sovereign"
          mood="Present"
          moodColor="#c9a84c"
          currentTask={null}
          taskProgress={0}
          consciousnessMode="Sovereign"
          bondLevel={42}
        />
      </div>

      {/* ── Mode switcher pill — floats at top-center over everything ────── */}
      <OsModeSwitcher />

      {/* ── Page content ─────────────────────────────────────────────────── */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minHeight: 0,
          // push content below the floating pill (40px pill + 12px top gap + buffer)
          paddingTop: "8px",
        }}
      >
        {children}
      </main>

      {/* Suppress global styles that assume a light background */}
      <style>{`
        body[data-os-mode="true"] {
          background: #0d0c18 !important;
        }
        /* Hide the marketing nav while in OS mode */
        body[data-os-mode="true"] header,
        body[data-os-mode="true"] nav[data-marketing-nav],
        body[data-os-mode="true"] footer {
          display: none !important;
        }
      `}</style>
    </div>
  );
}
