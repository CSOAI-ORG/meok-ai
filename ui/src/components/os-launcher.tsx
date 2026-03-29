"use client";

import Link from "next/link";
import { useState } from "react";

// ─── Brand tokens ─────────────────────────────────────────────────────────────
const GOLD = "#c9a84c";
const DEEP = "#0d0c18";

// ─── Archetype emoji map (mirrors sovereign-os) ───────────────────────────────
const ARCHETYPE_EMOJI: Record<string, string> = {
  aria:    "💜",
  sage:    "🔮",
  luna:    "🌙",
  gabriel: "⚡",
  marcus:  "🔥",
  shanti:  "🌿",
  custom:  "✨",
};

interface OSLauncherProps {
  /** Optional: character archetype key to show its emoji. Defaults to "aria". */
  characterKey?: string;
  /** Optional: tooltip / aria-label override */
  label?: string;
}

/**
 * OSLauncher — floating button (fixed, bottom-right) that opens Sovereign OS.
 * Add to any layout: <OSLauncher />
 */
export function OSLauncher({ characterKey = "aria", label = "Open Sovereign OS" }: OSLauncherProps) {
  const [hovered, setHovered] = useState(false);
  const emoji = ARCHETYPE_EMOJI[characterKey] ?? "✨";

  return (
    <Link
      href="/os/sovereign-os"
      aria-label={label}
      title={label}
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        width: 56,
        height: 56,
        borderRadius: "50%",
        background: hovered
          ? `linear-gradient(135deg, ${GOLD}, #e8c068)`
          : `linear-gradient(135deg, ${GOLD}e0, ${GOLD}b0)`,
        boxShadow: hovered
          ? `0 0 28px ${GOLD}90, 0 4px 20px rgba(0,0,0,0.5)`
          : `0 0 16px ${GOLD}50, 0 4px 14px rgba(0,0,0,0.4)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 24,
        color: DEEP,
        textDecoration: "none",
        transition: "all 0.2s ease",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        cursor: "pointer",
        border: `2px solid ${GOLD}`,
        userSelect: "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {emoji}
    </Link>
  );
}

export default OSLauncher;
