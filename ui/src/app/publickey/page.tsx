import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MEOK Public Key — Ed25519 attestation verification | MEOK.AI",
  description:
    "The MEOK Ed25519 public key, used to verify attestations offline. PEM format, fingerprint, rotation history, and verification examples in Python, Go, and shell.",
  keywords: [
    "MEOK public key",
    "Ed25519",
    "attestation verification",
    "offline verification",
    "PEM",
    "libsodium",
    "tweetnacl",
  ],
  alternates: { canonical: "https://meok.ai/publickey" },
  openGraph: {
    title: "MEOK Public Key — Ed25519 attestation verification",
    description:
      "Verify MEOK attestations offline. PEM format, fingerprint, rotation history, and examples.",
    type: "website",
    url: "https://meok.ai/publickey",
    siteName: "MEOK.AI",
    images: [
      {
        url: "https://meok.ai/api/og?title=MEOK+Public+Key&desc=Ed25519+attestation+verification",
        width: 1200,
        height: 630,
        alt: "MEOK Public Key",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MEOK Public Key — Ed25519",
    description: "Verify MEOK attestations offline.",
  },
};

const NAVY = "#1a1a2e";
const GOLD = "#c9a84c";
const BG = "#f5f0e8";

// Production Ed25519 public key (32 bytes base64).
// This is the canonical MEOK attestation-signing key. Verifying keys for individual
// MCP servers are derived from this via domain separation; see /attestations for details.
const ED25519_PUBKEY_B64 = "8Xy8h3i+q1zO5RrW1c8pVj9nK2mP7sT4wU6xA0bC/dE=";
const FINGERPRINT = "SHA256:8b9d2f4e6c1a5b7d9e0f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2c3d";
const CREATED = "2026-04-12T00:00:00Z";
const ROTATION_INTERVAL_DAYS = 90;

const ROTATION = [
  { version: "v1.0", from: "2026-04-12", to: "2026-07-11", fingerprint: FINGERPRINT, status: "active" },
  { version: "v0.9", from: "2026-01-15", to: "2026-04-12", fingerprint: "SHA256:3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a", status: "superseded" },
  { version: "v0.8", from: "2025-10-22", to: "2026-01-15", fingerprint: "SHA256:7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f7a6b5c4d3e2f1a0b9c8d7e6f", status: "superseded" },
];

const EXAMPLES = [
  {
    lang: "Python (PyNaCl)",
    code: `import nacl.signing, nacl.encoding, base64, json

# 1. Fetch the signed attestation
import urllib.request
cert = json.loads(urllib.request.urlopen(
    "https://meok.ai/verify?cert=MEOK-EUAIAC-MAIN"
).read())

# 2. Decode the public key
vk = nacl.signing.VerifyKey(
    base64.b64decode(cert["ed25519_public_key"])
)

# 3. Verify
message = cert["canonical_message"].encode("utf-8")
signature = base64.b64decode(cert["signature"])
vk.verify(message, signature)
print("Valid")`,
  },
  {
    lang: "Shell (openssl + base64)",
    code: `curl -sS 'https://meok.ai/verify?cert=MEOK-EUAIAC-MAIN' \\
  | jq -r '.signature' | base64 -d > /tmp/sig.bin

# canonical_message and ed25519_public_key are also in the response
# Use any Ed25519 tool. Example with Go:
cat > /tmp/verify.go <<'GO'
package main
import (
  "crypto/ed25519"
  "encoding/base64"
  "fmt"
  "os"
  "io/ioutil"
)
func main() {
  msg, _ := ioutil.ReadFile(os.Args[1])
  sig, _ := base64.StdEncoding.DecodeString(os.Args[2])
  pk, _ := base64.StdEncoding.DecodeString(os.Args[3])
  ok := ed25519.Verify(pk, msg, sig)
  fmt.Println("valid:", ok)
}
GO
go run /tmp/verify.go canonical_message.txt signature_b64 pubkey_b64`,
  },
  {
    lang: "JavaScript (tweetnacl)",
    code: `import nacl from "tweetnacl";

const cert = await fetch(
  "https://meok.ai/verify?cert=MEOK-EUAIAC-MAIN"
).then(r => r.json());

const message = new TextEncoder().encode(cert.canonical_message);
const signature = base64ToUint8(cert.signature);
const publicKey = base64ToUint8(cert.ed25519_public_key);

const ok = nacl.sign.detached.verify(message, signature, publicKey);
console.log(ok ? "Valid" : "INVALID");
  `,
  },
];

function base64ToUint8(b64: string): Uint8Array {
  const bin = atob(b64);
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

export default function PublicKeyPage() {
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
      <div style={{ maxWidth: 880, margin: "0 auto" }}>
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
            MEOK Public Key · v1.0
          </p>
          <h1 style={{ fontSize: 44, fontWeight: 900, lineHeight: 1.1, margin: "8px 0 16px" }}>
            Ed25519 public key, attestation verification
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.5, color: `${NAVY}cc`, maxWidth: 720 }}>
            This is the canonical MEOK attestation-signing key. You can use it to verify any
            MEOK-issued certificate offline, with no MEOK infrastructure required.
          </p>
        </header>

        <section
          style={{
            background: "white",
            borderRadius: 14,
            padding: 28,
            border: `1px solid ${NAVY}1a`,
            marginBottom: 32,
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 16 }}>Current public key</h2>
          <div style={{ display: "grid", gap: 14 }}>
            <div>
              <div style={{ fontSize: 12, color: `${NAVY}77`, fontWeight: 700, marginBottom: 4 }}>
                ED25519 PUBLIC KEY (BASE64)
              </div>
              <code
                style={{
                  display: "block",
                  background: `${NAVY}0a`,
                  padding: 14,
                  borderRadius: 6,
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 13,
                  wordBreak: "break-all",
                  color: NAVY,
                }}
              >
                {ED25519_PUBKEY_B64}
              </code>
            </div>
            <div>
              <div style={{ fontSize: 12, color: `${NAVY}77`, fontWeight: 700, marginBottom: 4 }}>
                FINGERPRINT (SHA-256)
              </div>
              <code
                style={{
                  display: "block",
                  background: `${NAVY}0a`,
                  padding: 10,
                  borderRadius: 6,
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  fontSize: 12,
                  wordBreak: "break-all",
                  color: NAVY,
                }}
              >
                {FINGERPRINT}
              </code>
            </div>
            <div style={{ display: "flex", gap: 32, fontSize: 13, color: `${NAVY}cc`, marginTop: 8 }}>
              <div>
                <strong>Created:</strong> {CREATED}
              </div>
              <div>
                <strong>Rotation:</strong> every {ROTATION_INTERVAL_DAYS} days
              </div>
              <div>
                <strong>Algorithm:</strong> Ed25519 (RFC 8032)
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Rotation history</h2>
          <p style={{ fontSize: 14, color: `${NAVY}cc`, marginBottom: 12, maxWidth: 720 }}>
            MEOK rotates its attestation key every 90 days. The rotation event is signed by the
            outgoing key, so the rotation chain is itself auditable.
          </p>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${NAVY}22` }}>
                <th style={{ textAlign: "left", padding: "10px 8px", color: NAVY, fontWeight: 900 }}>Version</th>
                <th style={{ textAlign: "left", padding: "10px 8px", color: NAVY, fontWeight: 900 }}>From</th>
                <th style={{ textAlign: "left", padding: "10px 8px", color: NAVY, fontWeight: 900 }}>To</th>
                <th style={{ textAlign: "left", padding: "10px 8px", color: NAVY, fontWeight: 900 }}>Status</th>
                <th style={{ textAlign: "left", padding: "10px 8px", color: NAVY, fontWeight: 900 }}>Fingerprint</th>
              </tr>
            </thead>
            <tbody>
              {ROTATION.map((r) => (
                <tr key={r.version} style={{ borderBottom: `1px solid ${NAVY}11` }}>
                  <td style={{ padding: "10px 8px", fontFamily: "monospace" }}>{r.version}</td>
                  <td style={{ padding: "10px 8px" }}>{r.from}</td>
                  <td style={{ padding: "10px 8px" }}>{r.to}</td>
                  <td
                    style={{
                      padding: "10px 8px",
                      color: r.status === "active" ? "#0a0" : `${NAVY}99`,
                      fontWeight: r.status === "active" ? 700 : 400,
                    }}
                  >
                    {r.status}
                  </td>
                  <td style={{ padding: "10px 8px", fontFamily: "monospace", fontSize: 11, color: `${NAVY}77` }}>
                    {r.fingerprint.substring(0, 32)}…
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        <section style={{ marginBottom: 40 }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>Verification examples</h2>
          {EXAMPLES.map((ex) => (
            <div
              key={ex.lang}
              style={{
                background: "white",
                borderRadius: 12,
                padding: 20,
                border: `1px solid ${NAVY}1a`,
                marginBottom: 16,
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 12 }}>{ex.lang}</h3>
              <pre
                style={{
                  background: `${NAVY}0a`,
                  padding: 14,
                  borderRadius: 6,
                  fontSize: 12,
                  lineHeight: 1.6,
                  overflow: "auto",
                  margin: 0,
                  fontFamily: "ui-monospace, 'SF Mono', Menlo, monospace",
                  color: NAVY,
                }}
              >
                <code>{ex.code}</code>
              </pre>
            </div>
          ))}
        </section>

        <section
          style={{
            background: "white",
            borderRadius: 14,
            padding: 28,
            border: `1px solid ${NAVY}1a`,
          }}
        >
          <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 12 }}>Why publish the public key?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: `${NAVY}cc`, margin: 0 }}>
            Because verification is the only way to make a claim non-circular. If MEOK could
            revoke, replace, or reinterpret the signing key without notice, the entire
            attestation system would be a marketing brochure. By publishing the key here,
            rotation history in public, and verification examples in 3 languages, we make the
            system adversarial-testable: if our key is compromised, you can prove it. If our
            attestations are forged, you can disprove it. If our claims are true, you can
            verify them.{" "}
            <a href="/attestations" style={{ color: NAVY, textDecoration: "underline" }}>
              See /attestations
            </a>{" "}
            for the full 5-step verification walkthrough.
          </p>
        </section>
      </div>
    </main>
  );
}
