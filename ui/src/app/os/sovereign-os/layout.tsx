import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Sovereign OS",
  description: "Your sovereign AI operating system — full screen, character-first mode.",
};

export default function SovereignOsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100dvh",
        background: "#0d0c18",
        overflow: "hidden",
        zIndex: 9000,
        // Isolate from any parent nav/header/sidebar
        contain: "strict",
      }}
    >
      {/* Hard reset: hide any inherited global nav that might leak in */}
      <style>{`
        /* Sovereign OS resets */
        body:has([data-sovereign-os]) header,
        body:has([data-sovereign-os]) nav,
        body:has([data-sovereign-os]) footer,
        body:has([data-sovereign-os]) aside {
          display: none !important;
        }
      `}</style>
      <div
        data-sovereign-os
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          background: "#0d0c18",
          color: "#f5f0e8",
        }}
      >
        {children}
      </div>
    </div>
  );
}
