"use client";

import React from "react";

// ---------------------------------------------------------------------------
// Brand tokens
// ---------------------------------------------------------------------------
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

// ---------------------------------------------------------------------------
// Shared inline keyframes (injected once via <style>)
// ---------------------------------------------------------------------------
const KEYFRAMES = `
@keyframes meok-pulse {
  0%, 100% { opacity: 0.4; }
  50%      { opacity: 1; }
}
@keyframes meok-shimmer {
  0%   { background-position: -400px 0; }
  100% { background-position: 400px 0; }
}
@keyframes meok-spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`;

let injected = false;
function useKeyframes() {
  React.useEffect(() => {
    if (injected) return;
    injected = true;
    const style = document.createElement("style");
    style.textContent = KEYFRAMES;
    document.head.appendChild(style);
    return () => {
      // intentionally leave injected – singleton
    };
  }, []);
}

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------
const shimmerBg = `linear-gradient(90deg, ${SURFACE} 0%, rgba(255,255,255,0.04) 50%, ${SURFACE} 100%)`;

const baseBox: React.CSSProperties = {
  borderRadius: 12,
  border: `1px solid ${BORDER}`,
  background: SURFACE,
  overflow: "hidden",
};

// ---------------------------------------------------------------------------
// 1. SkeletonCard
// ---------------------------------------------------------------------------
export interface SkeletonCardProps {
  width?: string;
  height?: string;
}

export function SkeletonCard({ width = "100%", height = "160px" }: SkeletonCardProps) {
  useKeyframes();
  return (
    <div
      style={{
        ...baseBox,
        width,
        height,
        backgroundImage: shimmerBg,
        backgroundSize: "800px 100%",
        animation: "meok-shimmer 1.8s ease-in-out infinite, meok-pulse 1.5s ease-in-out infinite",
      }}
      aria-hidden="true"
    />
  );
}

// ---------------------------------------------------------------------------
// 2. SkeletonText
// ---------------------------------------------------------------------------
export interface SkeletonTextProps {
  lines?: number;
  width?: string;
}

const LINE_WIDTHS = ["100%", "92%", "78%", "85%", "65%"];

export function SkeletonText({ lines = 3, width = "100%" }: SkeletonTextProps) {
  useKeyframes();
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, width }} aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          style={{
            height: 12,
            borderRadius: 6,
            background: SURFACE,
            backgroundImage: shimmerBg,
            backgroundSize: "800px 100%",
            width: LINE_WIDTHS[i % LINE_WIDTHS.length],
            animation: "meok-shimmer 1.8s ease-in-out infinite, meok-pulse 1.5s ease-in-out infinite",
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. SkeletonAvatar
// ---------------------------------------------------------------------------
export interface SkeletonAvatarProps {
  size?: number;
}

export function SkeletonAvatar({ size = 48 }: SkeletonAvatarProps) {
  useKeyframes();
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        background: SURFACE,
        border: `1px solid ${BORDER}`,
        animation: "meok-pulse 1.5s ease-in-out infinite",
      }}
      aria-hidden="true"
    />
  );
}

// ---------------------------------------------------------------------------
// 4. ChatSkeleton
// ---------------------------------------------------------------------------
export function ChatSkeleton() {
  useKeyframes();
  const bubbleBase: React.CSSProperties = {
    borderRadius: 16,
    padding: "14px 18px",
    background: SURFACE,
    border: `1px solid ${BORDER}`,
    animation: "meok-pulse 1.5s ease-in-out infinite",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: 24,
        width: "100%",
        maxWidth: 640,
      }}
      aria-hidden="true"
    >
      {/* Left bubble */}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
        <SkeletonAvatar size={32} />
        <div style={{ ...bubbleBase, width: "60%", animationDelay: "0s" }}>
          <SkeletonText lines={2} />
        </div>
      </div>

      {/* Right bubble */}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-end", alignSelf: "flex-end" }}>
        <div
          style={{
            ...bubbleBase,
            width: "55%",
            animationDelay: "0.2s",
            background: `${GOLD}11`,
            borderColor: `${GOLD}22`,
          }}
        >
          <SkeletonText lines={1} />
        </div>
      </div>

      {/* Left bubble */}
      <div style={{ display: "flex", gap: 10, alignItems: "flex-end" }}>
        <SkeletonAvatar size={32} />
        <div style={{ ...bubbleBase, width: "45%", animationDelay: "0.4s" }}>
          <SkeletonText lines={1} />
        </div>
      </div>

      {/* Typing indicator */}
      <div style={{ display: "flex", gap: 6, paddingLeft: 42, paddingTop: 4 }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: GOLD,
              opacity: 0.5,
              animation: "meok-pulse 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 5. DashboardSkeleton
// ---------------------------------------------------------------------------
export function DashboardSkeleton() {
  useKeyframes();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 24,
        padding: 24,
        width: "100%",
        minHeight: "100vh",
        background: DEEP,
      }}
      aria-hidden="true"
    >
      {/* Header bar */}
      <div
        style={{
          ...baseBox,
          height: 56,
          width: "100%",
          backgroundImage: shimmerBg,
          backgroundSize: "800px 100%",
          animation: "meok-shimmer 1.8s ease-in-out infinite",
        }}
      />

      {/* 4 stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            style={{
              ...baseBox,
              padding: 20,
              display: "flex",
              flexDirection: "column",
              gap: 12,
              animation: "meok-pulse 1.5s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
                background: `${GOLD}15`,
                border: `1px solid ${GOLD}22`,
              }}
            />
            <div style={{ height: 10, width: "50%", borderRadius: 5, background: `rgba(255,255,255,0.06)` }} />
            <div style={{ height: 22, width: "70%", borderRadius: 6, background: `rgba(255,255,255,0.08)` }} />
          </div>
        ))}
      </div>

      {/* Content area */}
      <div style={{ ...baseBox, flex: 1, minHeight: 320, padding: 24 }}>
        <SkeletonText lines={5} />
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// 6. CompanionSkeleton
// ---------------------------------------------------------------------------
export function CompanionSkeleton() {
  useKeyframes();
  return (
    <div
      style={{
        ...baseBox,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 16,
        width: 260,
      }}
      aria-hidden="true"
    >
      <SkeletonAvatar size={72} />
      {/* Name bar */}
      <div
        style={{
          height: 14,
          width: "60%",
          borderRadius: 7,
          background: SURFACE,
          backgroundImage: shimmerBg,
          backgroundSize: "800px 100%",
          animation: "meok-shimmer 1.8s ease-in-out infinite, meok-pulse 1.5s ease-in-out infinite",
        }}
      />
      {/* Description bars */}
      <SkeletonText lines={2} width="85%" />
    </div>
  );
}

// ---------------------------------------------------------------------------
// 7. LoadingSpinner
// ---------------------------------------------------------------------------
export interface LoadingSpinnerProps {
  size?: number;
}

export function LoadingSpinner({ size = 24 }: LoadingSpinnerProps) {
  useKeyframes();
  return (
    <div
      role="status"
      aria-label="Loading"
      style={{
        width: size,
        height: size,
        border: `2px solid ${BORDER}`,
        borderTopColor: GOLD,
        borderRadius: "50%",
        animation: "meok-spin 0.8s linear infinite",
        display: "inline-block",
      }}
    />
  );
}
