"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { X, ArrowRight, Sparkles } from "lucide-react";

const STORAGE_KEY = "meok_os_banner_dismissed";

const DEEP = "#0d0c18";
const GOLD = "#c9a84c";
const BORDER = "rgba(255,255,255,0.07)";

export function OsEntryBanner() {
  const router = useRouter();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show once per session (sessionStorage clears on tab close)
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="banner"
      aria-label="MEOK OS Mode announcement"
      style={{
        background: DEEP,
        borderBottom: `1px solid ${GOLD}30`,
        borderTop: `1px solid ${GOLD}30`,
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "12px",
        position: "relative",
        zIndex: 40,
      }}
    >
      {/* Gold left accent */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: `linear-gradient(180deg, ${GOLD}, ${GOLD}60)`,
          borderRadius: "0 2px 2px 0",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingLeft: "8px" }}>
        <Sparkles
          style={{ color: GOLD, flexShrink: 0 }}
          size={15}
        />
        <span
          style={{
            fontSize: "13px",
            color: "rgba(245,240,232,0.85)",
            lineHeight: 1.4,
          }}
        >
          <span style={{ fontWeight: 700, color: GOLD }}>New: MEOK OS Mode</span>
          {" — Talk to your character and let it do your work."}
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
        <button type="button"
          onClick={() => router.push("/os/sovereign-os")}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
            background: GOLD,
            color: "#1a1a2e",
            border: "none",
            borderRadius: "20px",
            padding: "5px 12px",
            fontSize: "12px",
            fontWeight: 700,
            cursor: "pointer",
            whiteSpace: "nowrap",
            transition: "opacity 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = "0.85")}
          onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
          aria-label="Try MEOK OS Mode"
        >
          Try it <ArrowRight size={12} />
        </button>

        <button type="button"
          onClick={dismiss}
          aria-label="Dismiss banner"
          style={{
            background: "transparent",
            border: `1px solid ${BORDER}`,
            borderRadius: "6px",
            color: "rgba(255,255,255,0.35)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "26px",
            height: "26px",
            padding: 0,
            transition: "color 0.15s, border-color 0.15s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color = "rgba(255,255,255,0.7)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = "rgba(255,255,255,0.35)";
            e.currentTarget.style.borderColor = BORDER;
          }}
        >
          <X size={13} />
        </button>
      </div>
    </div>
  );
}
