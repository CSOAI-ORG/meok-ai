"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

// ---------------------------------------------------------------------------
// /thanks client island — reads ?mcp=<slug>&session_id=<id> from query.
// Renders post-purchase install snippet, HMAC retrieval CTA, cross-sell.
// ---------------------------------------------------------------------------

const MCP_TITLES: Record<string, { title: string; pkg: string; pack: string }> = {
  "eu-ai-act-compliance": { title: "EU AI Act Compliance MCP", pkg: "eu-ai-act-compliance-mcp", pack: "governance" },
  "dora-compliance": { title: "DORA Compliance MCP", pkg: "dora-compliance-mcp", pack: "governance" },
  "nis2-compliance": { title: "NIS2 Compliance MCP", pkg: "nis2-compliance-mcp", pack: "governance" },
  "cra-compliance": { title: "Cyber Resilience Act MCP", pkg: "cra-compliance-mcp", pack: "governance" },
  "ai-bom": { title: "AI Bill of Materials MCP", pkg: "ai-bom-mcp", pack: "governance" },
  "ai-incident-reporting": { title: "AI Incident Reporting MCP", pkg: "ai-incident-reporting-mcp", pack: "governance" },
  "dora-nis2-crosswalk": { title: "DORA × NIS2 Crosswalk MCP", pkg: "dora-nis2-crosswalk-mcp", pack: "governance" },
  "bias-detection": { title: "Bias Detection MCP", pkg: "bias-detection-mcp", pack: "governance" },
  "watermarking-authenticity": { title: "Watermarking + Authenticity MCP", pkg: "watermarking-authenticity-mcp", pack: "governance" },
  "uk-ai-bill-compliance": { title: "UK AI Bill Compliance MCP", pkg: "uk-ai-bill-compliance-mcp", pack: "governance" },
  "agent-prompt-injection-firewall": { title: "Prompt Injection Firewall MCP", pkg: "agent-prompt-injection-firewall-mcp", pack: "a2a" },
  "agent-data-residency": { title: "Agent Data Residency MCP", pkg: "agent-data-residency-mcp", pack: "a2a" },
  "agent-handoff-certified": { title: "Certified Agent Handoff MCP", pkg: "agent-handoff-certified-mcp", pack: "a2a" },
  "agent-policy-enforcement": { title: "Agent Policy Enforcement MCP", pkg: "agent-policy-enforcement-mcp", pack: "a2a" },
  "agent-audit-logger": { title: "Agent Audit Logger MCP", pkg: "agent-audit-logger-mcp", pack: "a2a" },
  "agent-rate-limiter": { title: "Agent Rate Limiter MCP", pkg: "agent-rate-limiter-mcp", pack: "a2a" },
  "haulage-uk-compliance": { title: "UK Haulage Compliance MCP", pkg: "haulage-uk-compliance-mcp", pack: "trade" },
  "skip-hire-ai": { title: "Skip Hire AI MCP", pkg: "skip-hire-ai-mcp", pack: "trade" },
  "construction-iso-19650": { title: "ISO 19650 BIM MCP", pkg: "construction-iso-19650-mcp", pack: "trade" },
  "nrswa-ai": { title: "NRSWA Compliance MCP", pkg: "nrswa-ai-mcp", pack: "trade" },
  "chas-elite-prep": { title: "CHAS Elite Prep MCP", pkg: "chas-elite-prep-mcp", pack: "trade" },
  "crane-hire-cpcs": { title: "Crane Hire CPCS MCP", pkg: "crane-hire-cpcs-mcp", pack: "trade" },
  "concrete-pump-cpa": { title: "Concrete Pump CPA MCP", pkg: "concrete-pump-cpa-mcp", pack: "trade" },
  "mica-crypto": { title: "MiCA Crypto Compliance MCP", pkg: "mica-crypto-mcp", pack: "industry" },
  "fsa-food-safety": { title: "FSA Food Safety MCP", pkg: "fsa-food-safety-mcp", pack: "industry" },
  "mdr-medical-device": { title: "EU MDR Medical Device MCP", pkg: "mdr-medical-device-mcp", pack: "industry" },
  "fda-samd": { title: "FDA SaMD MCP", pkg: "fda-samd-mcp", pack: "industry" },
  "coppa-ferpa": { title: "COPPA + FERPA MCP", pkg: "coppa-ferpa-mcp", pack: "industry" },
  "basel-ai-overlay": { title: "Basel III AI Overlay MCP", pkg: "basel-ai-overlay-mcp", pack: "industry" },
  "mifid-ii-ai": { title: "MiFID II AI MCP", pkg: "mifid-ii-ai-mcp", pack: "industry" },
  "aml-ai": { title: "AML / KYC AI MCP", pkg: "aml-ai-mcp", pack: "industry" },
  "cobol-bridge": { title: "COBOL Bridge MCP", pkg: "cobol-bridge-mcp", pack: "industry" },
  "cisa-kev": { title: "CISA KEV MCP", pkg: "cisa-kev-mcp", pack: "cybersec" },
  "sbom-cyclonedx": { title: "SBOM CycloneDX MCP", pkg: "sbom-cyclonedx-mcp", pack: "cybersec" },
  "mitre-attack": { title: "MITRE ATT&CK MCP", pkg: "mitre-attack-mcp", pack: "cybersec" },
  "mitre-atlas": { title: "MITRE ATLAS MCP", pkg: "mitre-atlas-mcp", pack: "cybersec" },
  "slsa-supply-chain": { title: "SLSA Supply Chain MCP", pkg: "slsa-supply-chain-mcp", pack: "cybersec" },
  "sigstore-cosign": { title: "Sigstore Cosign MCP", pkg: "sigstore-cosign-mcp", pack: "cybersec" },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";
const PRIMARY = "#3B82F6";
const SUCCESS = "#7BC47F";

export default function ThanksClient() {
  const sp = useSearchParams();
  const mcpSlug = (sp?.get("mcp") || "").trim();
  const sessionId = (sp?.get("session_id") || "").trim();
  const mcp = MCP_TITLES[mcpSlug];

  return (
    <div style={{ maxWidth: 720, margin: "0 auto" }}>
      {/* Success banner */}
      <div
        style={{
          padding: "2rem",
          background: SUCCESS,
          color: NAVY,
          borderRadius: 16,
          marginBottom: "2rem",
          textAlign: "center",
          boxShadow: "0 6px 24px rgba(123,196,127,.25)",
        }}
      >
        <div style={{ fontSize: "3rem", marginBottom: ".5rem" }}>✓</div>
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: 800,
            letterSpacing: "-.02em",
            marginBottom: ".5rem",
          }}
        >
          Welcome to MEOK AI Labs
        </h1>
        <p style={{ fontSize: "1.05rem", opacity: 0.85, marginBottom: 0 }}>
          Your subscription is active. {mcp ? `Your ${mcp.title} is ready to install.` : "Your MCP access is ready."}
        </p>
      </div>

      {/* What you bought (if mcp slug is known) */}
      {mcp && (
        <section
          style={{
            marginBottom: "2rem",
            padding: "1.5rem",
            background: "#fff",
            borderRadius: 14,
            border: `1px solid ${NAVY}22`,
          }}
        >
          <div
            style={{
              fontSize: ".82rem",
              textTransform: "uppercase",
              letterSpacing: ".08em",
              opacity: 0.65,
              marginBottom: ".25rem",
            }}
          >
            Your subscription · £29/month · {mcp.pack}
          </div>
          <h2 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: ".75rem" }}>{mcp.title}</h2>
          <pre
            style={{
              background: NAVY,
              color: BG,
              padding: "1rem 1.25rem",
              borderRadius: 10,
              fontFamily: "ui-monospace,Menlo,monospace",
              fontSize: ".88rem",
              overflowX: "auto",
              margin: 0,
            }}
          >
            {`# Install
uvx ${mcp.pkg}

# Or pip
pip install ${mcp.pkg}`}
          </pre>
        </section>
      )}

      {/* Get your HMAC signing key */}
      <section
        style={{ marginBottom: "2rem", padding: "1.5rem", background: PRIMARY, color: "#fff", borderRadius: 14 }}
      >
        <h2 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: ".75rem" }}>Get your HMAC signing key</h2>
        <p style={{ fontSize: ".95rem", opacity: 0.92, marginBottom: "1rem", lineHeight: 1.55 }}>
          Your signing key is provisioned from your Stripe session ID. Use the email you paid with — it&apos;s used to
          derive your unique key.
        </p>

        <details style={{ background: "rgba(0,0,0,.18)", padding: "1rem 1.25rem", borderRadius: 10, marginBottom: ".75rem" }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>Option A · Retrieve via curl (recommended)</summary>
          <pre
            style={{
              background: "rgba(0,0,0,.3)",
              padding: "1rem",
              borderRadius: 8,
              fontFamily: "ui-monospace,Menlo,monospace",
              fontSize: ".82rem",
              overflowX: "auto",
              marginTop: ".75rem",
              marginBottom: 0,
            }}
          >
            {`curl -X POST https://meok-attestation-api.vercel.app/provision \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "YOUR-STRIPE-EMAIL@example.com",
    "tier": "pro",
    "session_id": "${sessionId || "cs_live_<paste-from-stripe-receipt>"}"
  }'`}
          </pre>
        </details>

        <details style={{ background: "rgba(0,0,0,.18)", padding: "1rem 1.25rem", borderRadius: 10 }}>
          <summary style={{ cursor: "pointer", fontWeight: 600 }}>Option B · Email me — I&apos;ll send the key</summary>
          <p style={{ marginTop: ".75rem", marginBottom: 0, fontSize: ".88rem" }}>
            Email{" "}
            <a
              href="mailto:hello@meok.ai?subject=API key request"
              style={{ color: "#fff", textDecoration: "underline" }}
            >
              hello@meok.ai
            </a>{" "}
            from the address you used at checkout. I&apos;ll send your key within 24 hours. Include your Stripe session
            ID if you have it:{" "}
            <code style={{ background: "rgba(0,0,0,.3)", padding: ".15rem .4rem", borderRadius: 4 }}>
              {sessionId || "(none provided)"}
            </code>
          </p>
        </details>
      </section>

      {/* Next steps */}
      <section style={{ marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "1rem" }}>What to do next</h2>
        <ul style={{ display: "grid", gap: ".75rem", listStyle: "none", padding: 0 }}>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>1.</span>
            Install the MCP using the snippet above (or <code>npx meok-setup --pack {mcp?.pack || "all"}</code> to get
            all)
          </li>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>2.</span>
            Retrieve your signing key (above) and store it as <code>MEOK_PRO_KEY</code> in your environment
          </li>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>3.</span>
            Call any <code>sign_*</code> tool with your key — signed compliance attestations land in your audit log
          </li>
          <li
            style={{
              padding: "1rem 1.25rem",
              background: "#fff",
              borderRadius: 10,
              border: `1px solid ${NAVY}22`,
              fontSize: ".95rem",
            }}
          >
            <span style={{ color: GOLD, fontWeight: 800, marginRight: ".5rem" }}>4.</span>
            Need help? Reply to your Stripe receipt — or email{" "}
            <a href="mailto:hello@meok.ai" style={{ color: NAVY, fontWeight: 600 }}>
              hello@meok.ai
            </a>
          </li>
        </ul>
      </section>

      {/* Manage subscription */}
      <section
        style={{
          padding: "1rem 1.25rem",
          background: "#fff",
          borderRadius: 10,
          border: `1px solid ${NAVY}22`,
          fontSize: ".88rem",
          opacity: 0.85,
          marginBottom: "2rem",
        }}
      >
        <strong>Manage your subscription:</strong> use the link in your Stripe receipt email. Cancel anytime — no
        questions. Refund within 14 days if it&apos;s not for you.
      </section>

      {/* Cross-sell */}
      {mcp && (
        <section style={{ paddingTop: "1.5rem", borderTop: `1px solid ${NAVY}22`, fontSize: ".95rem" }}>
          <p style={{ marginBottom: ".5rem", opacity: 0.75 }}>Other MCPs you might want:</p>
          <p>
            <Link href={`/labs/mcp`} style={{ color: NAVY, fontWeight: 600 }}>
              See all 38 MEOK MCPs →
            </Link>
            {" · "}
            <Link href={`/pricing`} style={{ color: NAVY, fontWeight: 600 }}>
              Upgrade to MEOK Pro (all 38, £79/mo) →
            </Link>
          </p>
        </section>
      )}

      {/* Footer */}
      <div style={{ paddingTop: "2rem", textAlign: "center", fontSize: ".82rem", opacity: 0.6 }}>
        MIT licensed code · HMAC-signed commercial attestations · By{" "}
        <a href="https://meok.ai" style={{ color: NAVY }}>
          MEOK AI Labs
        </a>
        {sessionId && (
          <div style={{ marginTop: ".5rem", fontFamily: "ui-monospace,Menlo,monospace", fontSize: ".72rem" }}>
            Session: {sessionId.slice(0, 12)}…{sessionId.slice(-8)}
          </div>
        )}
      </div>
    </div>
  );
}
