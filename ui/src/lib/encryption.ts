/**
 * MEOK Memory Vault Encryption
 *
 * Security model:
 * - User memories are encrypted at rest using AES-GCM-256 (Web Crypto API)
 * - Keys are never stored directly; they are derived per-request via PBKDF2
 * - Derivation inputs: userId (caller-supplied) + ENCRYPTION_SECRET (server env var)
 * - The server never holds a raw key — only the derivation inputs separately
 * - Each encryption operation uses a fresh random 12-byte IV, prepended to ciphertext
 * - Output format: base64("<iv_12_bytes><ciphertext>")
 *
 * Compatible with: Node.js 18+, Next.js Edge Runtime, modern browsers.
 * No external dependencies — uses globalThis.crypto.subtle (Web Crypto API).
 */

const PBKDF2_ITERATIONS = 100_000;
const PBKDF2_HASH = "SHA-256";
const KEY_LENGTH_BITS = 256;
const IV_LENGTH_BYTES = 12;
const ALGORITHM = "AES-GCM";

/**
 * Returns true if the Web Crypto API is available in the current runtime.
 * Useful for feature-gating encryption in environments that may lack it.
 */
export function isEncryptionAvailable(): boolean {
  return (
    typeof globalThis !== "undefined" &&
    typeof globalThis.crypto !== "undefined" &&
    typeof globalThis.crypto.subtle !== "undefined"
  );
}

/**
 * Derives a 256-bit AES-GCM CryptoKey from a userId and a server-side secret.
 *
 * @param userId  - The user's unique identifier (public input, ties key to user)
 * @param secret  - The server-side ENCRYPTION_SECRET env var (private input)
 * @returns A non-extractable AES-GCM CryptoKey suitable for encrypt/decrypt
 */
export async function deriveKey(
  userId: string,
  secret: string
): Promise<CryptoKey> {
  const encoder = new TextEncoder();

  // Import the combined passphrase as raw key material for PBKDF2
  const rawMaterial = await globalThis.crypto.subtle.importKey(
    "raw",
    encoder.encode(`${userId}:${secret}`),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );

  // Use the userId itself as a deterministic salt (avoids storing a separate salt,
  // while still making each user's key unique)
  const salt = encoder.encode(`meok:${userId}`);

  return globalThis.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: PBKDF2_ITERATIONS,
      hash: PBKDF2_HASH,
    },
    rawMaterial,
    { name: ALGORITHM, length: KEY_LENGTH_BITS },
    false, // non-extractable: key cannot be read back out
    ["encrypt", "decrypt"]
  );
}

/**
 * Encrypts a plaintext string using AES-GCM-256.
 *
 * The `userKey` is the userId; the server-side ENCRYPTION_SECRET is pulled
 * from `process.env.ENCRYPTION_SECRET`. If the env var is absent, a fallback
 * development secret is used (logs a warning).
 *
 * @param plaintext - UTF-8 string to encrypt (e.g. a serialised memory object)
 * @param userKey   - The userId owning this memory
 * @returns Base64-encoded string in the format "<iv><ciphertext>" (iv = 12 bytes)
 */
export async function encryptMemory(
  plaintext: string,
  userKey: string
): Promise<string> {
  const secret = getEncryptionSecret();
  const cryptoKey = await deriveKey(userKey, secret);

  const iv = globalThis.crypto.getRandomValues(new Uint8Array(IV_LENGTH_BYTES));
  const encoder = new TextEncoder();

  const ciphertext = await globalThis.crypto.subtle.encrypt(
    { name: ALGORITHM, iv },
    cryptoKey,
    encoder.encode(plaintext)
  );

  // Concatenate IV + ciphertext into a single buffer, then base64-encode
  const combined = new Uint8Array(iv.byteLength + ciphertext.byteLength);
  combined.set(iv, 0);
  combined.set(new Uint8Array(ciphertext), iv.byteLength);

  return uint8ArrayToBase64(combined);
}

/**
 * Decrypts a previously encrypted memory string.
 *
 * @param encrypted - Base64 string produced by `encryptMemory`
 * @param userKey   - The userId owning this memory (must match encryption time)
 * @returns The original plaintext string
 * @throws If the key is wrong, the ciphertext is tampered, or parsing fails
 */
export async function decryptMemory(
  encrypted: string,
  userKey: string
): Promise<string> {
  const secret = getEncryptionSecret();
  const cryptoKey = await deriveKey(userKey, secret);

  const combined = base64ToUint8Array(encrypted);

  if (combined.byteLength <= IV_LENGTH_BYTES) {
    throw new Error("Encrypted payload is too short to contain a valid IV");
  }

  const iv = combined.slice(0, IV_LENGTH_BYTES);
  const ciphertext = combined.slice(IV_LENGTH_BYTES);

  const plainBuffer = await globalThis.crypto.subtle.decrypt(
    { name: ALGORITHM, iv },
    cryptoKey,
    ciphertext
  );

  return new TextDecoder().decode(plainBuffer);
}

// ── Internal helpers ──────────────────────────────────────────────────────────

function getEncryptionSecret(): string {
  const secret =
    typeof process !== "undefined"
      ? process.env.ENCRYPTION_SECRET
      : undefined;

  if (!secret) {
    if (
      typeof process !== "undefined" &&
      process.env.NODE_ENV !== "production"
    ) {
      console.warn(
        "[MEOK encryption] ENCRYPTION_SECRET env var not set — using insecure dev fallback. " +
          "Set ENCRYPTION_SECRET in production."
      );
    }
    return "meok-dev-secret-do-not-use-in-production";
  }

  return secret;
}

function uint8ArrayToBase64(bytes: Uint8Array): string {
  let binary = "";
  for (let i = 0; i < bytes.byteLength; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToUint8Array(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}
