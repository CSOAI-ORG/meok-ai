"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { LayoutGrid, Monitor, Grid2x2, Maximize2 } from "lucide-react";

// ─── Constants ───────────────────────────────────────────────────────────────

const STORAGE_KEY = "meok_ui_mode";

const GOLD = "#c9a84c";
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";

type UIMode = "app" | "os" | "fly-eye" | "focus";

interface ModeDefinition {
  id: UIMode;
  label: string;
  href: string;
  icon: React.ReactNode;
  title: string;
}

const MODES: ModeDefinition[] = [
  {
    id: "app",
    label: "App",
    href: "/dashboard",
    icon: <LayoutGrid className="w-3 h-3" />,
    title: "App Mode — traditional dashboard UI",
  },
  {
    id: "os",
    label: "OS",
    href: "/os/sovereign-os",
    icon: <Monitor className="w-3 h-3" />,
    title: "OS Mode — character-first interface",
  },
  {
    id: "fly-eye",
    label: "Fly Eye",
    href: "/os/fly-eye",
    icon: <Grid2x2 className="w-3 h-3" />,
    title: "Fly Eye Mode — 4-panel view",
  },
  {
    id: "focus",
    label: "Focus",
    href: "/os/focus",
    icon: <Maximize2 className="w-3 h-3" />,
    title: "Focus Mode — fullscreen, single task",
  },
];

// ─── Helpers ─────────────────────────────────────────────────────────────────

function detectModeFromPath(pathname: string): UIMode {
  if (pathname.startsWith("/os/fly-eye")) return "fly-eye";
  if (pathname.startsWith("/os/focus")) return "focus";
  if (pathname.startsWith("/os/")) return "os";
  if (pathname.startsWith("/dashboard")) return "app";
  return "os";
}

// ─── Component ───────────────────────────────────────────────────────────────

export function OsModeSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMode, setActiveMode] = useState<UIMode>("os");
  const [mounted, setMounted] = useState(false);

  // Hydrate from localStorage + URL
  useEffect(() => {
    setMounted(true);
    const detected = detectModeFromPath(pathname);
    setActiveMode(detected);
  }, [pathname]);

  function handleSwitch(mode: ModeDefinition) {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, mode.id);
    }
    setActiveMode(mode.id);
    router.push(mode.href);
  }

  // Avoid hydration flash
  if (!mounted) return null;

  return (
    <div
      role="navigation"
      aria-label="UI mode switcher"
      style={{
        position: "fixed",
        top: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        gap: "2px",
        padding: "3px",
        borderRadius: "999px",
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.04) inset",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {MODES.map((mode) => {
        const isActive = activeMode === mode.id;
        return (
          <button type="button"
            key={mode.id}
            onClick={() => handleSwitch(mode)}
            title={mode.title}
            aria-current={isActive ? "page" : undefined}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              padding: "5px 12px",
              borderRadius: "999px",
              border: "none",
              cursor: "pointer",
              fontSize: "11px",
              fontWeight: isActive ? 700 : 500,
              letterSpacing: "0.03em",
              transition: "all 0.18s ease",
              background: isActive
                ? `linear-gradient(135deg, ${GOLD}22, ${GOLD}11)`
                : "transparent",
              color: isActive ? GOLD : "rgba(255,255,255,0.45)",
              outline: isActive ? `1px solid ${GOLD}33` : "none",
              outlineOffset: "-1px",
            }}
            onMouseEnter={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.75)";
              }
            }}
            onMouseLeave={(e) => {
              if (!isActive) {
                (e.currentTarget as HTMLButtonElement).style.color =
                  "rgba(255,255,255,0.45)";
              }
            }}
          >
            {mode.icon}
            <span>{mode.label}</span>
          </button>
        );
      })}
    </div>
  );
}
