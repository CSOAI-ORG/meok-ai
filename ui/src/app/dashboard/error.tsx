"use client";

import React from "react";

// Brand tokens
const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const GOLD = "#c9a84c";
const BORDER = "rgba(255,255,255,0.07)";

export default function DashboardError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: DEEP,
        padding: 24,
      }}
    >
      <div
        style={{
          background: SURFACE,
          border: `1px solid ${BORDER}`,
          borderRadius: 16,
          padding: "40px 32px",
          maxWidth: 440,
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 20,
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: 48,
            height: 4,
            borderRadius: 2,
            background: GOLD,
          }}
        />

        <h2
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.01em",
          }}
        >
          Something went wrong
        </h2>

        <p
          style={{
            margin: 0,
            fontSize: 14,
            lineHeight: 1.6,
            color: "rgba(255,255,255,0.5)",
            maxWidth: 340,
          }}
        >
          {error.message || "An unexpected error occurred. Please try again."}
        </p>

        {error.digest && (
          <p
            style={{
              margin: 0,
              fontSize: 11,
              fontFamily: "monospace",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            Ref: {error.digest}
          </p>
        )}

        <button type="button"
          onClick={reset}
          style={{
            marginTop: 4,
            padding: "10px 28px",
            fontSize: 14,
            fontWeight: 500,
            color: DEEP,
            background: GOLD,
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            transition: "opacity 0.15s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
          onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
