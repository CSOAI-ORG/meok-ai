"use client";

import { useState, useEffect } from "react";
import {
  Eye,
  Zap,
  Type,
  BookOpen,
  Mic,
  ChevronLeft,
  Check,
} from "lucide-react";
import Link from "next/link";

// ─── Brand tokens ─────────────────────────────────────────────────
const DEEP    = "#0d0c18";
const SURFACE = "#13121f";
const BORDER  = "rgba(255,255,255,0.07)";
const GOLD    = "#c9a84c";

// ─── localStorage helpers ─────────────────────────────────────────
function lsGet(key: string, fallback: string): string {
  if (typeof window === "undefined") return fallback;
  return localStorage.getItem(key) ?? fallback;
}
function lsGetBool(key: string, fallback: boolean): boolean {
  if (typeof window === "undefined") return fallback;
  const v = localStorage.getItem(key);
  return v === null ? fallback : v === "true";
}
function lsSet(key: string, value: string) {
  localStorage.setItem(key, value);
}

// ─── Sub-components ───────────────────────────────────────────────

function SectionCard({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className="rounded-xl p-4 md:p-6 space-y-4"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: `1px solid rgba(255,255,255,0.08)`,
      }}
    >
      <div className="flex items-center gap-2.5 pb-3 border-b border-white/5">
        <span style={{ color: GOLD }}>{icon}</span>
        <h3
          className="text-sm font-semibold uppercase tracking-widest"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
  label,
  sublabel,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  sublabel?: string;
}) {
  return (
    <div className="flex items-center justify-between py-2.5">
      <div className="flex-1 min-w-0 pr-4">
        <p className="text-sm text-white/80 leading-tight">{label}</p>
        {sublabel && <p className="text-xs text-white/35 mt-0.5">{sublabel}</p>}
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className="relative flex-shrink-0 w-10 h-5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        style={{
          background: checked ? GOLD : "rgba(255,255,255,0.12)",
          // @ts-expect-error css custom property
          "--tw-ring-color": GOLD,
          "--tw-ring-offset-color": DEEP,
        }}
      >
        <span
          className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform duration-200"
          style={{ transform: checked ? "translateX(20px)" : "translateX(0)" }}
        />
      </button>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-white/5" />;
}

// ─── Main page ────────────────────────────────────────────────────

export default function AccessibilityPage() {
  // 93.1 Font size
  const [fontSize, setFontSize] = useState(16);

  // 93.2 High contrast
  const [highContrast, setHighContrast] = useState(false);

  // 93.3 Reduce animations
  const [reduceMotion, setReduceMotion] = useState(false);

  // 93.4 Dyslexia-friendly font
  const [dyslexiaFont, setDyslexiaFont] = useState(false);

  // 93.5 Screen reader optimisation
  const [srMode, setSrMode] = useState(false);

  // Saved flash
  const [saved, setSaved] = useState(false);

  // ── Load from localStorage on mount ──────────────────────────────
  useEffect(() => {
    setFontSize(parseInt(lsGet("meok_font_size", "16"), 10));
    setHighContrast(lsGetBool("meok_high_contrast", false));
    setReduceMotion(lsGetBool("meok_reduce_motion", false));
    setDyslexiaFont(lsGetBool("meok_dyslexia_font", false));
    setSrMode(lsGetBool("meok_sr_mode", false));
  }, []);

  // ── Apply effects whenever state changes ─────────────────────────

  // Font size → CSS custom property
  useEffect(() => {
    document.documentElement.style.setProperty("--meok-font-size", `${fontSize}px`);
    lsSet("meok_font_size", String(fontSize));
  }, [fontSize]);

  // High contrast → body class + localStorage
  useEffect(() => {
    if (highContrast) {
      document.body.classList.add("meok-high-contrast");
    } else {
      document.body.classList.remove("meok-high-contrast");
    }
    lsSet("meok_high_contrast", String(highContrast));
  }, [highContrast]);

  // Reduce motion → body class + localStorage
  useEffect(() => {
    if (reduceMotion) {
      document.body.classList.add("reduce-motion");
    } else {
      document.body.classList.remove("reduce-motion");
    }
    lsSet("meok_reduce_motion", String(reduceMotion));
  }, [reduceMotion]);

  // Dyslexia font → CSS custom property + localStorage
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--meok-body-font",
      dyslexiaFont ? "OpenDyslexic, sans-serif" : ""
    );
    lsSet("meok_dyslexia_font", String(dyslexiaFont));
  }, [dyslexiaFont]);

  // SR mode → localStorage only (consumed by API/component layer)
  useEffect(() => {
    lsSet("meok_sr_mode", String(srMode));
  }, [srMode]);

  const handleSave = () => {
    // All values are already persisted reactively; this is a UX confirmation.
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="min-h-screen py-6 md:py-10" style={{ background: DEEP, color: "white" }}>
      <div className="max-w-2xl mx-auto px-4 md:px-6 space-y-5 md:space-y-6">

        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <Link
            href="/dashboard/settings"
            className="flex items-center justify-center w-8 h-8 rounded-lg transition-colors hover:bg-white/5"
            style={{ border: `1px solid ${BORDER}` }}
            aria-label="Back to settings"
          >
            <ChevronLeft className="w-4 h-4 text-white/50" />
          </Link>
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-white">Accessibility</h1>
            <p className="text-sm text-white/35 mt-0.5">
              Display, motion, and assistive technology preferences
            </p>
          </div>
        </div>

        {/* ── 93.1 Font Size ─────────────────────────────────────────── */}
        <SectionCard icon={<Type className="w-4 h-4" />} title="Font Size">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/60">Size</span>
              <span
                className="text-sm font-mono font-semibold tabular-nums"
                style={{ color: GOLD }}
              >
                {fontSize}px
              </span>
            </div>

            {/* Slider */}
            <input
              type="range"
              min={14}
              max={24}
              step={1}
              value={fontSize}
              onChange={(e) => setFontSize(parseInt(e.target.value, 10))}
              aria-label="Font size"
              aria-valuemin={14}
              aria-valuemax={24}
              aria-valuenow={fontSize}
              className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, ${GOLD} ${((fontSize - 14) / 10) * 100}%, rgba(255,255,255,0.12) ${((fontSize - 14) / 10) * 100}%)`,
                // Webkit thumb colour via inline style trick
                accentColor: GOLD,
              }}
            />

            <div className="flex justify-between text-xs text-white/25 select-none">
              <span>14</span>
              <span>19</span>
              <span>24</span>
            </div>

            {/* Live preview */}
            <div
              className="rounded-lg px-4 py-3 transition-all"
              style={{
                background: SURFACE,
                border: `1px solid ${BORDER}`,
                fontSize: `${fontSize}px`,
                lineHeight: 1.6,
                color: "rgba(255,255,255,0.75)",
              }}
              aria-live="polite"
              aria-label="Font size preview"
            >
              The quick brown fox jumps over the lazy dog.
            </div>
          </div>
        </SectionCard>

        {/* ── 93.2 & 93.3 & 93.4 & 93.5 Toggles ─────────────────────── */}
        <SectionCard icon={<Eye className="w-4 h-4" />} title="Display & Motion">
          <div className="space-y-1">
            {/* 93.2 High contrast */}
            <Toggle
              checked={highContrast}
              onChange={setHighContrast}
              label="High contrast"
              sublabel="Increases text and border contrast across the UI"
            />
            <Divider />

            {/* 93.3 Reduce animations */}
            <Toggle
              checked={reduceMotion}
              onChange={setReduceMotion}
              label="Reduce animations"
              sublabel="Minimises transitions and motion effects"
            />
          </div>
        </SectionCard>

        <SectionCard icon={<BookOpen className="w-4 h-4" />} title="Reading">
          <div className="space-y-1">
            {/* 93.4 Dyslexia-friendly font */}
            <Toggle
              checked={dyslexiaFont}
              onChange={setDyslexiaFont}
              label="Dyslexia-friendly font"
              sublabel="Switches the body font to OpenDyslexic for improved readability"
            />

            {dyslexiaFont && (
              <div
                className="rounded-lg px-4 py-3 mt-2 text-sm"
                style={{
                  background: SURFACE,
                  border: `1px solid ${BORDER}`,
                  fontFamily: "OpenDyslexic, sans-serif",
                  color: "rgba(255,255,255,0.65)",
                }}
              >
                Preview: The quick brown fox jumps over the lazy dog.
              </div>
            )}
          </div>
        </SectionCard>

        <SectionCard icon={<Mic className="w-4 h-4" />} title="Assistive Technology">
          <div className="space-y-1">
            {/* 93.5 Screen reader optimisation */}
            <Toggle
              checked={srMode}
              onChange={setSrMode}
              label="Screen reader optimisation"
              sublabel="Adds enhanced ARIA labels and landmark roles throughout the app"
            />

            {srMode && (
              <div
                className="rounded-lg px-4 py-3 mt-2 flex items-start gap-2.5 text-sm"
                style={{
                  background: "rgba(201,168,76,0.07)",
                  border: `1px solid rgba(201,168,76,0.2)`,
                  color: "rgba(255,255,255,0.65)",
                }}
                role="status"
              >
                <Zap className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: GOLD }} />
                <span>Enhanced ARIA mode is active. Screen readers will receive additional context on all interactive elements.</span>
              </div>
            )}
          </div>
        </SectionCard>

        {/* Save button */}
        <div className="flex justify-end pt-1">
          <button
            onClick={handleSave}
            className="flex items-center gap-2 px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
            style={{
              background: saved ? "rgba(255,255,255,0.08)" : GOLD,
              color: saved ? "rgba(255,255,255,0.5)" : DEEP,
              // @ts-expect-error css var
              "--tw-ring-color": GOLD,
              "--tw-ring-offset-color": DEEP,
            }}
          >
            {saved ? (
              <>
                <Check className="w-4 h-4" />
                Saved
              </>
            ) : (
              "Save preferences"
            )}
          </button>
        </div>

      </div>
    </div>
  );
}
