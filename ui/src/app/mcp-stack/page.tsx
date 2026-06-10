import type { Metadata } from "next";
import Link from "next/link";
import ShareButtons from "@/components/ShareButtons";
import { withUtm } from "@/lib/stripe-utm";

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const GREEN = "#7bc47f";
const BG = "#f5f0e8";

export const metadata: Metadata = {
  title:
    "MEOK MCP Stack — 6 MCPs wired together for one signed compliance event",
  description:
    "How 6 MEOK MCPs chain to turn ONE incident or generation event into a fully signed evidence pack across EU AI Act + DORA + NIS2 + GDPR + ISO 42001. The real value of the 67-MCP catalogue is the bridge — not the parts.",
  alternates: { canonical: "https://meok.ai/mcp-stack" },
  openGraph: {
    title: "MEOK MCP Stack — 6 MCPs, 1 signed event",
    description:
      "67 MCPs only matter when they're wired. Here's how 6 chain into one auditor-defensible event.",
    type: "website",
    url: "https://meok.ai/mcp-stack",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+MCP+Stack&desc=6+MCPs+wired+to+one+signed+event",
        width: 1200,
        height: 630,
      },
    ],
  },
};

type StackStep = {
  idx: number;
  mcp: string;
  title: string;
  call: string;
  emits: string;
  why: string;
};

const STACK: StackStep[] = [
  {
    idx: 1,
    mcp: "bft-progress-council-mcp",
    title: "BFT Progress Council",
    call: "register_run(goal='generate EU AIGC video for client X')",
    emits: "session_id + initial vote_state",
    why: "Anti-loop guardrail — 5 BFT voters watch progress. If goal drift, identical errors, or rapid-fire spin detected, the chain halts before money is wasted.",
  },
  {
    idx: 2,
    mcp: "agent-token-budget-mcp",
    title: "Token Budget Cap",
    call: "set_cap(session=X, gbp_cap=2.50)",
    emits: "budget_id + signed_cap_attestation",
    why: "Hard cost ceiling — if budget exhausted the generation never starts. Signed attestation goes into the evidence chain.",
  },
  {
    idx: 3,
    mcp: "agent-content-watermark-mcp",
    title: "Article 50 Watermark",
    call: "generate_watermark(content_hash, model_id, provider_did, modality='video')",
    emits: "visible_label + invisible_payload + perceptual_anchor + signature",
    why: "EU AI Act Article 50(2) — every GenAI output must carry machine-readable AI-generated mark. 3 layers, robust to mild edits.",
  },
  {
    idx: 4,
    mcp: "meok-eu-aigc-icon-mcp",
    title: "EU AIGC Icon",
    call: "emit_video_keyframe_signal(video_hash, model_id)",
    emits: "ISO BMFF uuid box + C2PA assertion",
    why: "EU Code of Practice 2nd draft icon — embedded in the video keyframe so any EU detector sees compliance.",
  },
  {
    idx: 5,
    mcp: "agent-audit-logger-mcp",
    title: "Audit Logger",
    call: "append(session, action, watermark_id, icon_id, ...)",
    emits: "hash_chained_log_entry + HMAC",
    why: "EU AI Act Article 12 + DORA Article 17 + ISO 42001 clause 9 — every action goes into a hash-chained audit trail.",
  },
  {
    idx: 6,
    mcp: "a2a-governance-bridge-mcp",
    title: "Governance Bridge",
    call: "fold(session_id) → signed evidence event",
    emits: "ONE signed event mapped to 5 regulatory clauses",
    why: "All upstream signatures fold into one auditor-defensible event with public verify URL. The output an auditor or DG-CNECT inspector reads.",
  },
];

const EMERGENCY_STACK = [
  {
    name: "Incident → 5 regulators in one call",
    mcps: [
      "agent-incident-relay-mcp",
      "agent-audit-logger-mcp",
      "agent-policy-enforcement-mcp",
    ],
    bullet:
      "One incident_id drives EU AI Act Art 73 + DORA Art 19 + NIS2 Art 23 + GDPR Art 33 + ISO 42001 cl 10.1 simultaneously — every regime's clock starts at the same timestamp.",
  },
  {
    name: "AI-bias audit → signed Article 10 certificate",
    mcps: ["bias-detection-mcp", "ai-bom-mcp", "iso-42005-impact-mcp"],
    bullet:
      "Demographic parity + equal opportunity metrics → ML-BOM + ISO 42005 impact assessment → signed Article 10 + Annex IV bundle.",
  },
  {
    name: "Wbni-2 NL registration → signed packet → Article 21 attestation",
    mcps: ["meok-nis2-nl-register-mcp", "nis2-compliance-mcp", "dora-nis2-crosswalk-mcp"],
    bullet:
      "Classify Annex I/II → produce NCSC-NL portal payload → DORA cross-walk → board sign-off attestation in one chain.",
  },
];

export default function McpStackPage() {
  return (
    <main style={{ background: BG, color: NAVY, minHeight: "100vh", padding: "3rem 1.5rem" }}>
      <div style={{ maxWidth: 980, margin: "0 auto" }}>
        {/* Hero */}
        <div
          style={{
            padding: "2.4rem 2rem",
            background: NAVY,
            color: "#fff",
            borderRadius: 18,
            marginBottom: "2rem",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "4px 12px",
              background: "rgba(123,196,127,0.18)",
              color: GREEN,
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 12,
            }}
          >
            New — 2026-05-21
          </div>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 14,
            }}
          >
            <span style={{ color: GOLD }}>67 MCPs</span> only matter
            <br />
            when they're <span style={{ color: GREEN }}>wired</span>.
          </h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.55,
              marginBottom: 22,
              maxWidth: 700,
            }}
          >
            One MCP is a tool. Six MCPs wired together is an <strong style={{ color: GOLD }}>auditor-defensible compliance event</strong>.
            Here are 4 chained stacks that turn the MEOK catalogue into real outcomes for EU AI Act,
            DORA, NIS2, GDPR, and ISO 42001 simultaneously.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href={withUtm("https://buy.stripe.com/aFa7sNcgAdQS0ZT1Uc8k91t", "/mcp-stack", "a2a_substrate_999")}
              style={{ padding: "14px 28px", background: GOLD, color: NAVY, textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              Get the full stack £999/mo →
            </a>
            <Link
              href="/docs"
              style={{ padding: "14px 28px", background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,0.25)", textDecoration: "none", fontWeight: 800, borderRadius: 12, fontSize: 14 }}
            >
              All 67 MCPs →
            </Link>
            <Link
              href="/anthropic-registry"
              style={{ padding: "14px 28px", background: "transparent", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none", fontWeight: 700, borderRadius: 12, fontSize: 14 }}
            >
              Free self-host (MIT) →
            </Link>
          </div>
          <ShareButtons
            text="67 MCPs only matter when they're wired. Here's how 6 chain into 1 signed EU AI Act + DORA + NIS2 + GDPR event."
            url="https://meok.ai/mcp-stack"
            hashtags={["mcp", "agents", "compliance", "EUAIAct"]}
            hnTitle="MEOK MCP Stack: 6 MCPs wired into 1 signed compliance event"
            variant="dark"
          />
        </div>

        {/* The featured stack */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
            Stack 1 — One AI-generated video → fully signed Article 50 event
          </h2>
          <p style={{ fontSize: 14, color: `${NAVY}99`, lineHeight: 1.6, marginBottom: 20 }}>
            This is the chain you wire when an agent generates a single AI-marked video output for an EU customer. The
            output of step 6 is the artefact an auditor reads.
          </p>
          <div style={{ display: "grid", gap: 12 }}>
            {STACK.map((s) => (
              <div
                key={s.idx}
                style={{
                  display: "grid",
                  gridTemplateColumns: "44px 1fr",
                  gap: 14,
                  padding: "1rem 1.2rem",
                  background: "white",
                  borderRadius: 12,
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    background: GOLD,
                    color: NAVY,
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 900,
                    fontSize: 14,
                  }}
                >
                  {s.idx}
                </div>
                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "baseline",
                      flexWrap: "wrap",
                      marginBottom: 4,
                    }}
                  >
                    <strong style={{ fontSize: 15, color: GOLD }}>{s.title}</strong>
                    <Link
                      href={`/docs/${s.mcp}`}
                      style={{
                        fontSize: 11,
                        color: `${NAVY}77`,
                        textDecoration: "none",
                        fontFamily: "monospace",
                      }}
                    >
                      {s.mcp} ↗
                    </Link>
                  </div>
                  <code
                    style={{
                      display: "block",
                      background: NAVY,
                      color: BG,
                      padding: "0.5rem 0.8rem",
                      borderRadius: 6,
                      fontFamily: "ui-monospace,Menlo,monospace",
                      fontSize: 12,
                      marginBottom: 6,
                    }}
                  >
                    {s.call}
                  </code>
                  <div style={{ fontSize: 12, color: GREEN, marginBottom: 6 }}>
                    → emits: <code style={{ fontFamily: "monospace" }}>{s.emits}</code>
                  </div>
                  <p style={{ fontSize: 13, color: `${NAVY}cc`, margin: 0, lineHeight: 1.5 }}>
                    {s.why}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 18,
              padding: "1rem 1.2rem",
              background: GREEN,
              color: NAVY,
              borderRadius: 12,
              fontSize: 14,
              fontWeight: 800,
              textAlign: "center",
            }}
          >
            Output: ONE HMAC-signed evidence event mapped to EU AI Act Articles 12 + 50, DORA
            Article 17, ISO 42001 clause 9 — plus a public verify URL.
          </div>
        </section>

        {/* Other stacks */}
        <section style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "1.6rem", fontWeight: 900, marginBottom: 16 }}>
            3 more wired stacks
          </h2>
          <div style={{ display: "grid", gap: 14 }}>
            {EMERGENCY_STACK.map((s) => (
              <div
                key={s.name}
                style={{
                  padding: "1.1rem 1.4rem",
                  background: "white",
                  borderRadius: 12,
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <h3 style={{ fontSize: "1rem", fontWeight: 900, color: GOLD, margin: "0 0 6px" }}>
                  {s.name}
                </h3>
                <p style={{ fontSize: 13, color: `${NAVY}cc`, lineHeight: 1.55, margin: "0 0 10px" }}>
                  {s.bullet}
                </p>
                <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                  {s.mcps.map((m) => (
                    <Link
                      key={m}
                      href={`/docs/${m}`}
                      style={{
                        display: "inline-block",
                        padding: "3px 10px",
                        background: `${NAVY}10`,
                        color: NAVY,
                        borderRadius: 999,
                        fontSize: 11,
                        fontFamily: "monospace",
                        textDecoration: "none",
                      }}
                    >
                      {m}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Substrate CTA */}
        <section
          style={{
            padding: "1.8rem 2rem",
            background: NAVY,
            color: "#fff",
            borderRadius: 16,
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ fontSize: "1.4rem", fontWeight: 900, marginBottom: 10 }}>
            Don't want to wire it yourself?
          </h2>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.75)", lineHeight: 1.55, marginBottom: 18 }}>
            The MEOK <strong style={{ color: GOLD }}>A2A Substrate</strong> (£999/mo) and{" "}
            <strong style={{ color: GOLD }}>Governance Substrate</strong> (£499/mo) run these
            stacks behind the <code style={{ background: "rgba(0,0,0,0.4)", padding: "2px 6px", borderRadius: 4 }}>api.meok.ai/v1/&lt;primitive&gt;</code> endpoint.
            One signing key, one invoice, one HMAC-chained evidence trail.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <Link
              href="/a2a"
              style={{
                padding: "12px 22px",
                background: GOLD,
                color: NAVY,
                textDecoration: "none",
                fontWeight: 800,
                borderRadius: 10,
                fontSize: 13,
              }}
            >
              A2A Substrate £999/mo →
            </Link>
            <Link
              href="/governance"
              style={{
                padding: "12px 22px",
                background: "transparent",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.25)",
                textDecoration: "none",
                fontWeight: 800,
                borderRadius: 10,
                fontSize: 13,
              }}
            >
              Governance Substrate £499/mo →
            </Link>
          </div>
        </section>

        <p
          style={{
            color: `${NAVY}66`,
            fontSize: 12,
            textAlign: "center",
            lineHeight: 1.6,
            marginTop: 24,
          }}
        >
          MEOK AI Labs · CSOAI LTD · UK Companies House <strong>16939677</strong> · MIT-licensed
          MCPs · Hosted substrates from £499/mo
        </p>
      </div>
    </main>
  );
}
