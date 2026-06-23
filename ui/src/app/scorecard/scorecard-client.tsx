"use client";

import { useState } from "react";
import Link from "next/link";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

type Answer = "yes" | "partial" | "no" | "unknown" | null;

const QUESTIONS: { id: string; q: string; yes_pts: number; partial_pts: number; framework: string }[] = [
  {
    id: "art_6_risk_class",
    q: "Have you formally classified your AI system's risk tier under EU AI Act Article 6 (prohibited / high-risk Annex III / limited / minimal)?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "EU AI Act Article 6",
  },
  {
    id: "art_50_watermark",
    q: "If you generate synthetic content (image / video / audio / text), do you embed C2PA + invisible watermark + perceptual fingerprint per the Code of Practice (effective 2 Aug 2026)?",
    yes_pts: 10,
    partial_pts: 4,
    framework: "EU AI Act Article 50",
  },
  {
    id: "art_26_fria",
    q: "If you're a public-sector deployer or fall under Annex III, have you completed an Article 26(9) Fundamental Rights Impact Assessment (FRIA)?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "EU AI Act Article 26(9)",
  },
  {
    id: "art_14_oversight",
    q: "Is human oversight per Article 14 documented for your high-risk system (who oversees, how they intervene, escalation paths)?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "EU AI Act Article 14",
  },
  {
    id: "art_9_rms",
    q: "Do you maintain a continuous Risk Management System per Article 9 (identification, analysis, evaluation, mitigation — updated across the lifecycle)?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "EU AI Act Article 9",
  },
  {
    id: "gdpr_dpia",
    q: "If your AI processes personal data, have you completed a Data Protection Impact Assessment per the EDPB harmonised template (14 April 2026)?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "GDPR Article 35 + EDPB DPIA",
  },
  {
    id: "tech_docs",
    q: "Are your technical documentation (datasets, model cards, training logs, eval metrics) maintained as living documents the regulator could request?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "EU AI Act Annex IV",
  },
  {
    id: "post_market",
    q: "Do you have a post-market monitoring plan + AI incident reporting flow per Article 72 (incidents reported within 15 days; deadly within 2 days)?",
    yes_pts: 10,
    partial_pts: 4,
    framework: "EU AI Act Article 72",
  },
  {
    id: "conformity",
    q: "If high-risk, have you scoped a conformity assessment (self-assessment vs notified body) and identified your CE-marking path?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "EU AI Act Article 43",
  },
  {
    id: "ai_literacy",
    q: "Have your staff completed AI literacy training per Article 4 (in force since 2 Feb 2025)?",
    yes_pts: 10,
    partial_pts: 5,
    framework: "EU AI Act Article 4",
  },
];

const ATTESTATION_API = "https://meok-attestation-api.vercel.app";

const FAQ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: QUESTIONS.map((q) => ({
    "@type": "Question",
    name: `EU AI Act readiness — ${q.framework}: ${q.q}`,
    acceptedAnswer: {
      "@type": "Answer",
      text: `This is one of the ten readiness checks in the MEOK EU AI Act scorecard. Mapped to ${q.framework}. Take the free 90-second scorecard at https://meok.ai/scorecard for a personalised gap report and a signed compliance attestation. Yes-answer scores ${q.yes_pts} points; partial answers score ${q.partial_pts}.`,
    },
  })),
};

const QUIZ_JSONLD = {
  "@context": "https://schema.org",
  "@type": "Quiz",
  name: "EU AI Act Readiness Scorecard",
  about: { "@type": "Thing", name: "EU AI Act Compliance" },
  educationalLevel: "Professional",
  numberOfQuestions: QUESTIONS.length,
  url: "https://meok.ai/scorecard",
  hasPart: QUESTIONS.map((q, i) => ({
    "@type": "Question",
    position: i + 1,
    name: q.q,
    educationalAlignment: { "@type": "AlignmentObject", alignmentType: "regulatoryFramework", targetName: q.framework },
  })),
};

function scoreFor(answer: Answer, q: typeof QUESTIONS[0]): number {
  if (answer === "yes") return q.yes_pts;
  if (answer === "partial") return q.partial_pts;
  return 0;
}

function gradeFromScore(score: number): { grade: string; label: string; color: string } {
  if (score >= 85) return { grade: "A", label: "Audit-ready", color: "#10b981" };
  if (score >= 70) return { grade: "B", label: "Mostly ready — gaps to close", color: "#3b82f6" };
  if (score >= 50) return { grade: "C", label: "Material gaps — action needed", color: "#f59e0b" };
  if (score >= 30) return { grade: "D", label: "Significant exposure", color: "#ef4444" };
  return { grade: "F", label: "Critical — start ASAP", color: "#dc2626" };
}

export default function ScorecardClient() {
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [step, setStep] = useState<"questions" | "email" | "result">("questions");
  const [email, setEmail] = useState("");
  const [entity, setEntity] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [result, setResult] = useState<{ score: number; cert_id?: string; verify_url?: string } | null>(null);

  const totalScore = QUESTIONS.reduce((sum, q) => sum + scoreFor(answers[q.id] ?? null, q), 0);
  const answeredCount = QUESTIONS.filter((q) => answers[q.id] != null).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const gaps = QUESTIONS.filter((q) => {
    const a = answers[q.id];
    return a === "no" || a === "unknown";
  });

  async function submit() {
    if (!email || !email.includes("@")) return;
    setSubmitting(true);

    // Fire-and-forget lead capture to the durable same-origin /api/waitlist route
    // (always-logs + Postgres upsert + Loops/Resend best-effort). Replaces a dead
    // Buttondown list (meok-eu-ai-compliance-brief) that 404'd and silently dropped
    // every scorecard lead — confirmed 2026-06-15.
    fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name: entity || "Self-assessment",
        interest: `scorecard score ${totalScore}`,
        referrer: "scorecard-runner",
      }),
    }).catch(() => {
      // Capture failure does not block the signed-cert flow
    });

    try {
      const res = await fetch(`${ATTESTATION_API}/sign`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          regulation: "EU AI Act Readiness Scorecard",
          entity: entity || "Self-assessment",
          score: totalScore,
          findings: gaps.map((g) => `Gap: ${g.framework} — ${g.q.substring(0, 80)}`),
          articles_audited: QUESTIONS.map((q) => q.framework),
          auditor_notes: `Self-assessment via meok.ai/scorecard. Answers: ${JSON.stringify(answers)}`,
        }),
      });
      const data = await res.json();
      setResult({ score: totalScore, cert_id: data.cert_id, verify_url: data.verify_url });
      setStep("result");
    } catch {
      // Even if attestation API fails, show the score
      setResult({ score: totalScore });
      setStep("result");
    } finally {
      setSubmitting(false);
    }
  }

  if (step === "questions") {
    return (
      <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(QUIZ_JSONLD) }} />
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 1.5rem" }}>
          <Link href="/" style={{ fontSize: 13, color: `${NAVY}66`, textDecoration: "none" }}>
            ← meok.ai
          </Link>
          <div
            style={{
              display: "inline-block",
              padding: "6px 12px",
              borderRadius: 999,
              background: "rgba(201,168,76,0.12)",
              border: `1px solid rgba(201,168,76,0.4)`,
              color: GOLD,
              fontSize: 12,
              fontWeight: 900,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              margin: "20px 0 16px",
            }}
          >
            Free · 90 seconds · No credit card
          </div>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              marginBottom: 12,
            }}
          >
            EU AI Act Readiness Scorecard
          </h1>
          <p style={{ fontSize: "1.05rem", color: `${NAVY}99`, marginBottom: 28 }}>
            10 questions covering EU AI Act Articles 4, 6, 9, 14, 26(9), 43, 50, 72 + GDPR DPIA. Answer
            yes / partial / no / not sure. End: signed compliance attestation + personalized gap
            list.
          </p>

          <div style={{ marginBottom: 24, fontSize: 13, color: `${NAVY}66` }}>
            Progress: <strong style={{ color: NAVY }}>{answeredCount}</strong> / {QUESTIONS.length} answered
          </div>

          <div style={{ display: "grid", gap: 16 }}>
            {QUESTIONS.map((q, i) => (
              <div
                key={q.id}
                style={{
                  padding: 20,
                  background: "white",
                  borderRadius: 14,
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <div style={{ fontSize: 11, fontWeight: 900, color: GOLD, marginBottom: 6, letterSpacing: "0.1em" }}>
                  Q{i + 1} · {q.framework}
                </div>
                <p style={{ fontSize: 15, fontWeight: 600, marginBottom: 14, lineHeight: 1.45 }}>{q.q}</p>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {(["yes", "partial", "no", "unknown"] as Answer[]).map((opt) => (
                    <button type="button"
                      key={opt!}
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: opt }))}
                      style={{
                        padding: "8px 14px",
                        borderRadius: 8,
                        border: `1px solid ${answers[q.id] === opt ? GOLD : `${NAVY}33`}`,
                        background: answers[q.id] === opt ? GOLD : "transparent",
                        color: answers[q.id] === opt ? NAVY : NAVY,
                        fontSize: 13,
                        fontWeight: 800,
                        cursor: "pointer",
                        textTransform: "capitalize",
                      }}
                    >
                      {opt === "unknown" ? "Not sure" : opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <button type="button"
            onClick={() => setStep("email")}
            disabled={!allAnswered}
            style={{
              marginTop: 32,
              width: "100%",
              padding: "18px 24px",
              borderRadius: 12,
              background: allAnswered ? GOLD : `${NAVY}22`,
              color: allAnswered ? NAVY : `${NAVY}66`,
              fontWeight: 900,
              fontSize: 16,
              border: "none",
              cursor: allAnswered ? "pointer" : "not-allowed",
            }}
          >
            {allAnswered ? `See your score (${totalScore}/100) →` : `Answer all ${QUESTIONS.length} questions to continue`}
          </button>
        </div>
      </main>
    );
  }

  if (step === "email") {
    return (
      <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
        <div style={{ maxWidth: 560, margin: "0 auto", padding: "5rem 1.5rem" }}>
          <h1 style={{ fontSize: "2rem", fontWeight: 900, marginBottom: 12 }}>
            Score: <span style={{ color: GOLD }}>{totalScore}/100</span>
          </h1>
          <p style={{ color: `${NAVY}99`, marginBottom: 32 }}>
            Drop your email and entity name. We'll generate a signed compliance attestation cert (HMAC,
            verifiable URL) and email it to you. Free. No newsletter spam — single email per scorecard.
          </p>

          <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
            <input
              type="email"
              placeholder="you@your-company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoFocus
              style={{
                padding: "16px",
                borderRadius: 12,
                border: `1px solid ${NAVY}33`,
                background: "white",
                fontSize: 15,
              }}
            />
            <input
              type="text"
              placeholder="Your company / entity name"
              value={entity}
              onChange={(e) => setEntity(e.target.value)}
              style={{
                padding: "16px",
                borderRadius: 12,
                border: `1px solid ${NAVY}33`,
                background: "white",
                fontSize: 15,
              }}
            />
          </div>

          <button type="button"
            onClick={submit}
            disabled={submitting || !email || !email.includes("@")}
            style={{
              width: "100%",
              padding: "18px 24px",
              borderRadius: 12,
              background: email && email.includes("@") && !submitting ? GOLD : `${NAVY}22`,
              color: email && email.includes("@") ? NAVY : `${NAVY}66`,
              fontWeight: 900,
              fontSize: 16,
              border: "none",
              cursor: email && email.includes("@") && !submitting ? "pointer" : "not-allowed",
            }}
          >
            {submitting ? "Generating signed cert…" : "Get my signed scorecard →"}
          </button>

          <p style={{ marginTop: 20, fontSize: 12, color: `${NAVY}66`, textAlign: "center" }}>
            By submitting, you agree your email is logged for lead-capture. We email once, never sell or share.
          </p>
        </div>
      </main>
    );
  }

  // Result step
  const grade = gradeFromScore(totalScore);
  return (
    <main style={{ minHeight: "100vh", background: BG, color: NAVY }}>
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "4rem 1.5rem" }}>
        <div
          style={{
            padding: 32,
            background: "white",
            borderRadius: 18,
            border: `1px solid ${NAVY}1a`,
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 900, color: `${NAVY}66`, letterSpacing: "0.12em", marginBottom: 12 }}>
            EU AI ACT READINESS · {entity || "Your entity"}
          </div>
          <div style={{ fontSize: "5rem", fontWeight: 900, color: grade.color, lineHeight: 1, marginBottom: 4 }}>
            {totalScore}
          </div>
          <div style={{ fontSize: 14, color: `${NAVY}99`, marginBottom: 8 }}>out of 100</div>
          <div
            style={{
              display: "inline-block",
              padding: "8px 16px",
              borderRadius: 999,
              background: `${grade.color}15`,
              color: grade.color,
              fontSize: 14,
              fontWeight: 900,
            }}
          >
            Grade {grade.grade} · {grade.label}
          </div>
        </div>

        {result?.verify_url && (
          <div
            style={{
              padding: 18,
              background: NAVY,
              color: "white",
              borderRadius: 12,
              marginBottom: 20,
              fontSize: 14,
            }}
          >
            <div style={{ fontWeight: 900, marginBottom: 6 }}>✓ Signed compliance attestation issued</div>
            <div style={{ opacity: 0.7, marginBottom: 8, fontSize: 13 }}>Cert ID: {result.cert_id}</div>
            <a
              href={result.verify_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: GOLD, fontSize: 13, fontWeight: 700, textDecoration: "underline" }}
            >
              Verify cert →
            </a>
          </div>
        )}

        {gaps.length > 0 && (
          <div
            style={{
              padding: 24,
              background: "white",
              borderRadius: 14,
              border: `1px solid ${NAVY}1a`,
              marginBottom: 24,
            }}
          >
            <h3 style={{ fontSize: "1.15rem", fontWeight: 900, marginBottom: 12 }}>
              Your top {gaps.length} gap{gaps.length > 1 ? "s" : ""} to close
            </h3>
            <ul style={{ paddingLeft: 18, color: `${NAVY}99`, lineHeight: 1.7, fontSize: 14 }}>
              {gaps.slice(0, 5).map((g) => (
                <li key={g.id}>
                  <strong style={{ color: NAVY }}>{g.framework}:</strong> {g.q.substring(0, 110)}…
                </li>
              ))}
            </ul>
          </div>
        )}

        <div style={{ padding: 24, background: NAVY, color: "white", borderRadius: 14, marginBottom: 24 }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: 900, marginBottom: 8 }}>Close these gaps</h3>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 14, marginBottom: 16 }}>
            Most teams scoring below 70 close the gaps in 1-2 weeks with the right kit + 30-min triage call.
          </p>
          <div style={{ display: "grid", gap: 8 }}>
            <Link href="/audit-prep-bundle" style={{ display: "block", padding: 14, background: GOLD, color: NAVY, borderRadius: 10, fontWeight: 900, textDecoration: "none", textAlign: "center" }}>
              Audit-Prep Bundle · £4,950 →
            </Link>
            <Link href="/article-50-kit" style={{ display: "block", padding: 14, background: "rgba(255,255,255,0.08)", color: "white", borderRadius: 10, fontWeight: 900, textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.2)" }}>
              Article 50 Watermarking Kit · £999 →
            </Link>
            <a href="https://councilof.ai/payg" target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: 14, background: "rgba(124,58,237,0.18)", color: "white", borderRadius: 10, fontWeight: 900, textDecoration: "none", textAlign: "center", border: "1px solid rgba(124,58,237,0.55)" }}>
              ⚡ Try the MCPs yourself — PAYG £0.05/call, no subscription →
            </a>
            <a href="mailto:nicholas@meok.ai?subject=Compliance%20triage%20call%20request%20&body=Hi%20Nicholas%2C%0A%0AI%27d%20like%20to%20book%20the%20free%2030-min%20compliance%20triage%20call.%20My%20availability%3A%0A%0A-%20%5Byour%20preferred%20day%2Ftime%5D%0A%0ACompany%3A%20%5BCompany%5D%0AContext%3A%20%5BEU%20AI%20Act%20%2F%20DORA%20%2F%20NIS2%20%2F%20CRA%5D%0A%0AThanks" target="_blank" rel="noopener noreferrer" style={{ display: "block", padding: 14, background: "transparent", color: GOLD, borderRadius: 10, fontWeight: 900, textDecoration: "none", textAlign: "center", border: `1px solid ${GOLD}` }}>
              Or book a free 30-min triage call →
            </a>
          </div>
        </div>

        <p style={{ fontSize: 12, color: `${NAVY}66`, textAlign: "center" }}>
          MEOK AI Labs · CSOAI LTD · UK Companies House 16939677
        </p>
      </div>
    </main>
  );
}
