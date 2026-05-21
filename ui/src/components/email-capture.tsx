"use client";

import { useState } from "react";

// ---------------------------------------------------------------------------
// EmailCapture — inline newsletter signup using the existing /api/waitlist
// endpoint (Loops.so integration). Drop into any landing page.
//
// Usage:
//   <EmailCapture
//     interest="eu-ai-act-fine-calc"
//     headline="Monthly EU compliance brief — free"
//     subheadline="One email a month. Article amendments, enforcement news,
//       and one new MCP per issue. No spam, unsubscribe anytime."
//     theme="dark" | "light"
//   />
// ---------------------------------------------------------------------------

type Props = {
  interest: string;            // tag for the Loops list / analytics segment
  headline?: string;
  subheadline?: string;
  cta?: string;
  theme?: "dark" | "light";
  utm?: string;
};

export default function EmailCapture({
  interest,
  headline = "Monthly EU AI compliance brief",
  subheadline = "One email a month. Article amendments, enforcement news, one new MCP per issue. Unsubscribe anytime.",
  cta = "Subscribe",
  theme = "light",
  utm,
}: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [errMsg, setErrMsg] = useState<string>("");

  const dark = theme === "dark";
  const bgCard = dark ? "#1a1a2e" : "#ffffff";
  const textColor = dark ? "#f5f0e8" : "#1a1a2e";
  const muted = dark ? "rgba(245,240,232,0.7)" : "#1a1a2e99";
  const border = dark ? "rgba(255,255,255,0.15)" : "#1a1a2e22";
  const accent = "#c9a84c";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("err");
      setErrMsg("Please enter a valid email address");
      return;
    }
    setStatus("loading");
    setErrMsg("");
    try {
      const r = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          interest,
          referrer: utm || (typeof window !== "undefined" ? window.location.pathname : "(server)"),
        }),
      });
      if (r.ok) {
        setStatus("ok");
        setEmail("");
      } else {
        const data = await r.json().catch(() => ({}));
        setStatus("err");
        setErrMsg(data.error || "Something went wrong. Try again or email hello@meok.ai");
      }
    } catch {
      setStatus("err");
      setErrMsg("Network error. Try again or email hello@meok.ai");
    }
  }

  if (status === "ok") {
    return (
      <div
        style={{
          padding: "1.4rem 1.6rem",
          background: bgCard,
          color: textColor,
          border: `1px solid ${border}`,
          borderRadius: 14,
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 6 }}>
          ✓ Subscribed
        </div>
        <p style={{ color: muted, fontSize: 14, margin: 0, lineHeight: 1.55 }}>
          Confirmation email landing in your inbox in a few seconds. First issue ships next Monday.
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        padding: "1.6rem 1.8rem",
        background: bgCard,
        color: textColor,
        border: `1px solid ${border}`,
        borderRadius: 14,
      }}
    >
      <div style={{ fontSize: 18, fontWeight: 800, marginBottom: 4 }}>{headline}</div>
      <p style={{ color: muted, fontSize: 13, marginBottom: 14, lineHeight: 1.55, marginTop: 0 }}>
        {subheadline}
      </p>
      <form onSubmit={handleSubmit} style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          aria-label="Email address"
          style={{
            flex: "1 1 220px",
            padding: ".7rem .9rem",
            background: dark ? "rgba(0,0,0,0.3)" : "#f5f0e8",
            color: textColor,
            border: `1px solid ${border}`,
            borderRadius: 10,
            fontSize: 14,
          }}
          disabled={status === "loading"}
        />
        <button
          type="submit"
          disabled={status === "loading"}
          style={{
            padding: ".7rem 1.4rem",
            background: accent,
            color: "#1a1a2e",
            fontWeight: 800,
            border: "none",
            borderRadius: 10,
            cursor: status === "loading" ? "wait" : "pointer",
            fontSize: 14,
            opacity: status === "loading" ? 0.7 : 1,
          }}
        >
          {status === "loading" ? "…" : cta}
        </button>
      </form>
      {status === "err" && (
        <p style={{ marginTop: 10, color: "#dc2626", fontSize: 12, margin: "10px 0 0" }}>{errMsg}</p>
      )}
      <p style={{ color: muted, fontSize: 11, marginTop: 10, marginBottom: 0 }}>
        We never share your email. By subscribing you agree to receive monthly MEOK updates.
        Operated by CSOAI LTD (UK Companies House 16939677).
      </p>
    </div>
  );
}
