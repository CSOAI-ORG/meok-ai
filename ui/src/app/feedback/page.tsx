"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

const DEEP = "#0d0c18";
const SURFACE = "#13121f";
const BORDER = "rgba(255,255,255,0.07)";
const GOLD = "#c9a84c";

const CATEGORIES = ["Bug Report", "Feature Request", "Praise", "Other"] as const;
type Category = (typeof CATEGORIES)[number];

type Status = "idle" | "submitting" | "success" | "error";

export default function FeedbackPage() {
  const [category, setCategory] = useState<Category>("Feature Request");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!message.trim()) {
      setStatus("error");
      setErrorMessage("Please enter a message.");
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category,
          message: message.trim(),
          email: email.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("");
      setEmail("");
    } catch (err: unknown) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    backgroundColor: DEEP,
    border: `1px solid ${BORDER}`,
    borderRadius: 8,
    color: "#e2e0ea",
    fontSize: 15,
    outline: "none",
    fontFamily: "inherit",
    boxSizing: "border-box" as const,
  };

  if (status === "success") {
    return (
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: DEEP,
          color: "#e2e0ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: 24,
        }}
      >
        <div style={{ textAlign: "center", maxWidth: 440 }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>&#10003;</div>
          <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 12 }}>
            Thank you for your feedback
          </h1>
          <p
            style={{
              fontSize: 15,
              color: "rgba(255,255,255,0.5)",
              marginBottom: 32,
              lineHeight: 1.6,
            }}
          >
            We read every submission and use it to make MEOK AI better. If you
            provided an email, we may follow up.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <button type="button"
              onClick={() => setStatus("idle")}
              style={{
                padding: "10px 24px",
                backgroundColor: SURFACE,
                border: `1px solid ${BORDER}`,
                borderRadius: 8,
                color: "#e2e0ea",
                fontSize: 14,
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              Send more feedback
            </button>
            <Link
              href="/help"
              style={{
                padding: "10px 24px",
                backgroundColor: GOLD,
                border: "none",
                borderRadius: 8,
                color: DEEP,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
              }}
            >
              Back to Help
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: DEEP,
        color: "#e2e0ea",
      }}
    >
      <section
        style={{
          maxWidth: 560,
          margin: "0 auto",
          padding: "80px 24px",
        }}
      >
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            marginBottom: 8,
            letterSpacing: "-0.02em",
          }}
        >
          Send us feedback
        </h1>
        <p
          style={{
            fontSize: 15,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 40,
          }}
        >
          Bug reports, feature requests, or just kind words -- we want to hear it
          all.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          {/* Category */}
          <div>
            <label
              style={{
                display: "block",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Category
            </label>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  style={{
                    padding: "8px 18px",
                    borderRadius: 20,
                    border:
                      category === cat
                        ? `1px solid ${GOLD}`
                        : `1px solid ${BORDER}`,
                    backgroundColor:
                      category === cat ? `${GOLD}18` : SURFACE,
                    color: category === cat ? GOLD : "rgba(255,255,255,0.6)",
                    fontSize: 14,
                    cursor: "pointer",
                    fontFamily: "inherit",
                    transition: "all 0.15s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="feedback-message"
              style={{
                display: "block",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Message <span style={{ color: GOLD }}>*</span>
            </label>
            <textarea
              id="feedback-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us what's on your mind..."
              rows={6}
              required
              style={{
                ...inputStyle,
                resize: "vertical",
                minHeight: 120,
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="feedback-email"
              style={{
                display: "block",
                fontSize: 13,
                color: "rgba(255,255,255,0.4)",
                marginBottom: 8,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Email <span style={{ color: "rgba(255,255,255,0.25)" }}>(optional)</span>
            </label>
            <input
              id="feedback-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              style={inputStyle}
            />
            <p
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                marginTop: 6,
              }}
            >
              Only if you'd like us to follow up.
            </p>
          </div>

          {/* Error */}
          {status === "error" && errorMessage && (
            <div
              style={{
                padding: "12px 16px",
                backgroundColor: "rgba(220,38,38,0.1)",
                border: "1px solid rgba(220,38,38,0.3)",
                borderRadius: 8,
                color: "#fca5a5",
                fontSize: 14,
              }}
            >
              {errorMessage}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            style={{
              padding: "14px 32px",
              backgroundColor: status === "submitting" ? `${GOLD}88` : GOLD,
              border: "none",
              borderRadius: 8,
              color: DEEP,
              fontSize: 15,
              fontWeight: 600,
              cursor: status === "submitting" ? "not-allowed" : "pointer",
              fontFamily: "inherit",
              transition: "background-color 0.15s",
              alignSelf: "flex-start",
            }}
          >
            {status === "submitting" ? "Sending..." : "Send feedback"}
          </button>
        </form>
      </section>
    </div>
  );
}
