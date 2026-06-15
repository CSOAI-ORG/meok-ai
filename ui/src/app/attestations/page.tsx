import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Attestations — HMAC + Ed25519 signed, auditor-verifiable | MEOK.AI",
  description:
    "Every MEOK compliance certificate is HMAC-SHA256 + Ed25519 co-signed and offline-verifiable. Audit the claim yourself with curl — no login, no SDK, no trust required.",
  keywords: [
    "MEOK attestation",
    "HMAC-SHA256",
    "Ed25519",
    "auditor-verifiable",
    "EU AI Act evidence",
    "DORA evidence",
    "NIS2 evidence",
    "ISO 42001 evidence",
    "offline verification",
    "public key cryptography",
  ],
  alternates: { canonical: "https://meok.ai/attestations" },
  openGraph: {
    title: "MEOK Attestations — HMAC + Ed25519 signed, auditor-verifiable",
    description:
      "Audit the claim with curl. No login, no SDK, no trust required. Every MEOK certificate is independently verifiable.",
    type: "website",
    url: "https://meok.ai/attestations",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Attestations&desc=HMAC+%2B+Ed25519+signed%2C+auditor-verifiable",
        width: 1200,
        height: 630,
        alt: "MEOK Attestations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Attestations",
    description: "HMAC + Ed25519 signed, auditor-verifiable. Audit with curl.",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

const ATTESTATIONS = [
  {
    framework: "EU AI Act",
    cert: "MEOK-EUAIAC-MAIN",
    articles: "Art 4, 6, 9, 10, 14, 26(9), 43, 50, 72",
    verify: "https://meok.ai/verify?cert=MEOK-EUAIAC-MAIN",
    note: "9 in-scope Articles, all signed, all auditor-verifiable.",
  },
  {
    framework: "DORA (Reg 2022/2554)",
    cert: "MEOK-DORA-MAIN",
    articles: "ICT risk mgt · 3rd-party register · incident reporting · threat-led pen-testing",
    verify: "https://meok.ai/verify?cert=MEOK-DORA-MAIN",
    note: "Operational resilience for financial entities + ICT third-party risk.",
  },
  {
    framework: "NIS2 (Dir 2022/2555)",
    cert: "MEOK-NIS2-MAIN",
    articles: "10 governance domains · entity classification · supply-chain security",
    verify: "https://meok.ai/verify?cert=MEOK-NIS2-MAIN",
    note: "Aligned to 9 member-state transpositions (DE BSIG §8a, UK NIS Regs, NL Wbni, BE, FR, IE, IT, ES, DK).",
  },
  {
    framework: "GDPR",
    cert: "MEOK-GDPR-MAIN",
    articles: "Art 5 · Art 6 · Art 22 · Art 25 · Art 30 · Art 32 · Art 33 · Art 35 (DPIA)",
    verify: "https://meok.ai/verify?cert=MEOK-GDPR-MAIN",
    note: "DPIA-ready evidence pack with FRIA bridge for high-risk AI.",
  },
  {
    framework: "ISO 42001 (AIMS)",
    cert: "MEOK-ISO42001-MAIN",
    articles: "Cl 6 · 7 · 8 · 9 · 10",
    verify: "https://meok.ai/verify?cert=MEOK-ISO42001-MAIN",
    note: "AI Management System controls mapped to EU AI Act + ISO 42005 impact assessment.",
  },
  {
    framework: "ISO 19650 (BIM)",
    cert: "MEOK-ISO19650-MAIN",
    articles: "CDE · EIR · BEP · information delivery",
    verify: "https://meok.ai/verify?cert=MEOK-ISO19650-MAIN",
    note: "Construction information management with NRSWA + CHAS + CPCS bridges.",
  },
  {
    framework: "CRA (Reg 2024/2847)",
    cert: "MEOK-CRA-MAIN",
    articles: "Annex I · SBOM · Sept 2027 cliff",
    verify: "https://meok.ai/verify?cert=MEOK-CRA-MAIN",
    note: "Cyber Resilience Act for products with digital elements.",
  },
  {
    framework: "SOC 2 (AI evidence)",
    cert: "MEOK-SOC2-MAIN",
    articles: "CC1-CC9 + AI overlay",
    verify: "https://meok.ai/verify?cert=MEOK-SOC2-MAIN",
    note: "Trust service criteria with AI-specific control additions.",
  },
];

const FAQ = [
  { q: "How do I verify a MEOK attestation?", a: "Every attestation carries a verify_url. curl it, e.g. curl -sS 'https://meok.ai/verify?cert=MEOK-EUAIAC-MAIN', and you get JSON with the signature, issued_at, issuer, and the Ed25519 public-key fingerprint. No login, no SDK, no API key required." },
  { q: "Why does MEOK co-sign with both HMAC-SHA256 and Ed25519?", a: "HMAC-SHA256 is fast, online, and recoverable — it uses the shared secret (the customer's API key) so an auditor can recompute it in real time. Ed25519 is asymmetric and offline-verifiable: the signing key never leaves MEOK and the verifying key is published at /publickey. Both signatures are over the same canonical JSON; if either fails, the cert is invalid." },
  { q: "Which frameworks have live signed attestations?", a: "Eight frameworks are signed and live: EU AI Act (9 in-scope Articles), DORA, NIS2 (aligned to 9 member-state transpositions), GDPR (DPIA-ready with FRIA bridge), ISO 42001 (AIMS), ISO 19650 (BIM), CRA, and SOC 2 with an AI overlay." },
  { q: "Can I verify offline without contacting MEOK?", a: "Yes. The response includes a base64 Ed25519 signature over the canonical JSON. Take the signed cert, the public key from /publickey, and any offline Ed25519 lib (libsodium, age, tweetnacl) and verify in two lines of Python — no MEOK infrastructure required. Signing keys rotate quarterly and rotation events are signed by the previous key, so you can verify continuity." },
];

const FAQ_JSONLD = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) };

const BREADCRUMB_JSONLD = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
  { "@type": "ListItem", position: 1, name: "Home", item: "https://meok.ai/" },
  { "@type": "ListItem", position: 2, name: "Attestations", item: "https://meok.ai/attestations" },
] };

const VERIFY_STEPS = [
  {
    n: 1,
    title: "Get the cert",
    body: "Every attestation has a verify_url printed on it. Example: https://meok.ai/verify?cert=MEOK-EUAIAC-MAIN",
  },
  {
    n: 2,
    title: "curl the endpoint",
    body: "curl -sS 'https://meok.ai/verify?cert=MEOK-EUAIAC-MAIN' — returns JSON with signature, issued_at, issuer, and Ed25519 public key fingerprint.",
  },
  {
    n: 3,
    title: "Verify Ed25519 offline",
    body: "The response includes a base64 signature over the canonical JSON. Decode with any Ed25519 lib + the published public key at https://meok.ai/publickey.",
  },
  {
    n: 4,
    title: "Verify HMAC online",
    body: "For a real-time check, POST the cert_id to https://meok.ai/api/verify and the API returns the HMAC-SHA256 over the canonical message, recomputed against the same key the customer uses to sign their own evidence.",
  },
  {
    n: 5,
    title: "Trust no one (including us)",
    body: "If the signature is valid, the cert is valid. The signing keys are rotated quarterly; rotation events are signed by the previous key, so you can verify continuity. The full rotation history is at https://meok.ai/security#key-rotation.",
  },
];

export default function AttestationsPage() {
  return (
    <main
      style={{
        background: BG,
        color: NAVY,
        minHeight: "100vh",
        padding: "48px 24px 96px",
        fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSONLD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSONLD) }} />
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <header style={{ marginBottom: 40 }}>
          <p
            style={{
              color: GOLD,
              fontWeight: 900,
              fontSize: 13,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            MEOK Attestations
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            HMAC + Ed25519 signed. Auditor-verifiable. No trust required.
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            MEOK signs its own compliance certificates with the same HMAC API customers buy.
            Every certificate has a <code>verify_url</code> any auditor can curl independently.
            We give you the public key. We give you the canonical message. We give you the
            signature. <strong>You decide whether to trust it.</strong>
          </p>
        </header>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Live signed attestations</h2>
          <p style={{ color: `${NAVY}99`, fontSize: 15, marginBottom: 24, maxWidth: 720 }}>
            All 8 frameworks below are signed and live. Click <em>verify</em> to audit the claim
            with curl. No login, no SDK, no API key.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {ATTESTATIONS.map((a) => (
              <article
                key={a.cert}
                style={{
                  background: "white",
                  borderRadius: 14,
                  padding: 20,
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    color: GOLD,
                    fontWeight: 900,
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    marginBottom: 4,
                  }}
                >
                  {a.framework}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: `${NAVY}77`,
                    fontFamily: "monospace",
                    marginBottom: 8,
                  }}
                >
                  {a.cert}
                </div>
                <div style={{ fontSize: 13, color: `${NAVY}aa`, marginBottom: 12, lineHeight: 1.5 }}>
                  {a.articles}
                </div>
                <p style={{ fontSize: 12, color: `${NAVY}99`, lineHeight: 1.5, margin: 0 }}>
                  {a.note}
                </p>
                <a
                  href={a.verify}
                  style={{
                    display: "inline-block",
                    marginTop: 12,
                    fontSize: 12,
                    color: NAVY,
                    fontFamily: "monospace",
                  }}
                >
                  verify →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>
            How to verify (5 steps, 2 minutes)
          </h2>
          <ol style={{ listStyle: "none", padding: 0 }}>
            {VERIFY_STEPS.map((s) => (
              <li
                key={s.n}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: 20,
                  marginBottom: 12,
                  border: `1px solid ${NAVY}0d`,
                  display: "flex",
                  gap: 20,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    fontSize: 28,
                    fontWeight: 900,
                    color: GOLD,
                    minWidth: 36,
                  }}
                >
                  {s.n}
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, marginBottom: 6 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: `${NAVY}cc`, lineHeight: 1.6 }}>{s.body}</div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section
          style={{
            background: "white",
            borderRadius: 14,
            padding: 32,
            border: `1px solid ${NAVY}1a`,
            marginBottom: 40,
          }}
        >
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Why both HMAC AND Ed25519?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: `${NAVY}cc`, margin: 0 }}>
            <strong>HMAC-SHA256</strong> is fast, online, and recoverable. It uses a shared secret
            (the customer's API key), so an auditor can recompute the signature in real time.
            <br />
            <br />
            <strong>Ed25519</strong> is asymmetric and offline-verifiable. The signing key never
            leaves MEOK; the verifying key is published at{" "}
            <a href="/publickey" style={{ color: NAVY }}>
              /publickey
            </a>
            . An auditor can take the signed cert, the public key, and any offline Ed25519 lib
            (libsodium, age, tweetnacl) and verify the cert in 2 lines of Python — no MEOK
            infrastructure required.
            <br />
            <br />
            <strong>Both signatures are over the same canonical JSON.</strong> If either fails,
            the cert is invalid. We do not ship signatures that depend on a single algorithm.
          </p>
        </section>

        <section style={{ marginBottom: 56 }}>
          <h2 style={{ fontSize: 28, fontWeight: 900, marginBottom: 16 }}>Frequently asked</h2>
          <div style={{ display: "grid", gap: 12 }}>
            {FAQ.map((f) => (
              <details
                key={f.q}
                style={{
                  background: "white",
                  borderRadius: 12,
                  padding: "16px 20px",
                  border: `1px solid ${NAVY}1a`,
                }}
              >
                <summary style={{ fontWeight: 700, cursor: "pointer", fontSize: 16, color: NAVY }}>{f.q}</summary>
                <p style={{ marginTop: 10, color: `${NAVY}cc`, fontSize: 14, lineHeight: 1.6 }}>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{ fontSize: 22, fontWeight: 900, marginBottom: 12 }}>Open questions?</h2>
          <p style={{ fontSize: 15, color: `${NAVY}cc`, lineHeight: 1.6 }}>
            Read the full{" "}
            <a href="/methodology" style={{ color: NAVY, textDecoration: "underline" }}>
              MEOK methodology
            </a>{" "}
            (what we count, what we don't, our fail rules) or jump to the{" "}
            <a href="/publickey" style={{ color: NAVY, textDecoration: "underline" }}>
              public key
            </a>{" "}
            to start verifying offline.
          </p>
        </section>
      </div>
    </main>
  );
}
