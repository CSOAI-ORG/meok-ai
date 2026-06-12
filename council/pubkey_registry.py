"""
Council Pubkey Registry — deterministic Ed25519 keypair generation per node.

Why deterministic: rebuilds from the same master seed produce the same keys,
so the audit trail is reproducible. The master seed itself lives in the
MEOK Council substrate master key vault, NOT in this file. In local dev
we use a deterministic fallback so the engine is testable without the
vault.

Per-node pubkeys are stored in meok/council/keys/<node_id>.hex (the
private key, in hex, Ed25519) and a parallel keys/<node_id>.pub.hex (the
public key, in hex). The .gitignore excludes the keys/ dir.

This is the PR-A-0 sub-task of L0-G (PBFT Council Voting). The spec lives
at /Users/nicholas/clawd/_TABS/L0G_PBFT_COUNCIL_VOTE_SPEC_2026-06-12.md.

CSOAI is the body; the substrate is the surface. No shadow signers.

CRITICAL: PyNaCl is REQUIRED in production. The substrate must hard-fail
at startup if pynacl is missing — not at first-vote time. Silent dev-fallback
signing in production would mark every real ballot as "dev_signature=True"
in the audit log, which an auditor would (correctly) read as a misconfiguration.
The fix: module-top import with try/except, set _NACL_AVAILABLE, raise
hard from sign_ballot if missing.
"""

from __future__ import annotations

import hashlib
import hmac
import os
import secrets
from pathlib import Path
from typing import Optional


# ---------------------------------------------------------------------------
# Module-top pynacl import: hard-fail in production
# ---------------------------------------------------------------------------
# pynacl provides the real Ed25519 sign/verify primitives. The substrate
# MUST NOT silently fall back to HMAC-SHA256 in production — every real
# production ballot would be mislabeled as a dev signature in the audit
# log. So: try to import at module load; if pynacl is missing, set a
# flag and raise hard from sign_ballot / verify_ballot.
try:
    from nacl.signing import SigningKey
    from nacl.exceptions import BadSignatureError
    _NACL_AVAILABLE = True
except ImportError:
    _NACL_AVAILABLE = False
    SigningKey = None  # type: ignore
    BadSignatureError = Exception  # type: ignore


# pynacl-dev: opt-in HMAC fallback for local dev only. Set this env var
# to "1" to permit HMAC signing when pynacl is missing. In production
# this env var MUST be unset (or "0") and pynacl MUST be installed.
_DEV_HMAC_FALLBACK = os.getenv("MEOK_COUNCIL_DEV_HMAC_FALLBACK", "0") == "1"


KEYS_DIR = Path(__file__).resolve().parent / "keys"
KEYS_DIR.mkdir(exist_ok=True)


# Master seed env var. In production this is rotated by the MEOK
# Council substrate master key vault (NOT in this file). In local
# dev we fall back to a deterministic seed so tests are reproducible.
def _master_seed() -> bytes:
    raw = os.getenv("MEOK_COUNCIL_MASTER_SEED")
    if raw:
        # hex string → bytes
        return bytes.fromhex(raw)
    # Local dev fallback: deterministic but NOT the production seed
    return hashlib.sha256(b"meok-council-local-dev-fallback-2026-06-12").digest()


def _derive_node_keypair(node_id: str, domain: str, master: bytes) -> tuple[bytes, bytes]:
    """Deterministically derive a 32-byte Ed25519 seed for a (node_id, domain)
    pair from the master seed. Returns (seed_bytes_32, public_key_bytes_32).
    Requires pynacl — raises RuntimeError if missing in production."""
    if not _NACL_AVAILABLE:
        raise RuntimeError(
            "PyNaCl is required for council signing. "
            "Install with: pip install pynacl. "
            "If you are in local dev, set MEOK_COUNCIL_DEV_HMAC_FALLBACK=1 "
            "to use the HMAC dev fallback (NOT FOR PRODUCTION)."
        )
    # Domain-separated HMAC for clarity
    info = f"meok-council/ed25519/{domain}/{node_id}".encode("utf-8")
    hkdf_like = hmac.new(master, info, hashlib.sha256).digest()
    # Ed25519 seed is 32 bytes; we use the full HKDF output (32 bytes)
    seed = hkdf_like
    sk = SigningKey(seed)
    pk = sk.verify_key.encode()
    return seed, pk


def get_or_create_node_keypair(node_id: str, domain: str) -> tuple[str, str]:
    """Returns (private_key_hex, public_key_hex) for a node. Creates
    the keypair on first call; returns existing on subsequent calls.
    In production the master seed is rotated; in dev we use a fallback."""
    priv_path = KEYS_DIR / f"{node_id}.hex"
    pub_path = KEYS_DIR / f"{node_id}.pub.hex"

    if priv_path.exists() and pub_path.exists():
        return priv_path.read_text().strip(), pub_path.read_text().strip()

    master = _master_seed()
    seed, pubkey = _derive_node_keypair(node_id, domain, master)

    priv_hex = seed.hex()
    pub_hex = pubkey.hex()

    # Atomic write: write to .tmp then rename
    priv_tmp = priv_path.with_suffix(".tmp")
    pub_tmp = pub_path.with_suffix(".tmp")
    try:
        priv_tmp.write_text(priv_hex)
        priv_tmp.rename(priv_path)
        pub_tmp.write_text(pub_hex)
        pub_tmp.rename(pub_path)
        # Restrictive perms (only owner can read/write)
        os.chmod(priv_path, 0o600)
        os.chmod(pub_path, 0o644)
    except OSError:
        # /tmp may be read-only in some envs; swallow
        if priv_tmp.exists():
            priv_tmp.unlink()
        if pub_tmp.exists():
            pub_tmp.unlink()
        raise

    return priv_hex, pub_hex


def get_public_key(node_id: str) -> Optional[str]:
    """Read just the public key for a node. Returns None if not yet generated."""
    pub_path = KEYS_DIR / f"{node_id}.pub.hex"
    if pub_path.exists():
        return pub_path.read_text().strip()
    return None


def get_private_key(node_id: str) -> Optional[str]:
    """Read the private key for a node. Used by the council when signing
    its own ballots. Returns None if not yet generated."""
    priv_path = KEYS_DIR / f"{node_id}.hex"
    if priv_path.exists():
        return priv_path.read_text().strip()
    return None


def list_known_nodes() -> list[str]:
    """List all node IDs that have a keypair on disk."""
    return sorted(p.stem for p in KEYS_DIR.glob("*.pub.hex"))


def sign_ballot(node_id: str, payload: bytes) -> Optional[str]:
    """Sign a ballot payload with the node's private key. Returns the
    signature as hex, or None if the node has no key (production needs
    every node to have one). Hard-fails in production if pynacl missing."""
    priv_hex = get_private_key(node_id)
    if not priv_hex:
        return None
    if not _NACL_AVAILABLE:
        if not _DEV_HMAC_FALLBACK:
            raise RuntimeError(
                "PyNaCl is required for council signing. "
                "Install with: pip install pynacl. "
                "If you are in local dev, set MEOK_COUNCIL_DEV_HMAC_FALLBACK=1."
            )
        # Dev fallback: HMAC-SHA256(seed, payload) — NOT a real Ed25519
        # signature. The substrate will accept it as a dev ballot but
        # mark it as "dev_signature=True" in the audit log so auditors
        # can tell the difference. ONLY for local dev.
        return hmac.new(bytes.fromhex(priv_hex), payload, hashlib.sha256).hexdigest()
    sk = SigningKey(bytes.fromhex(priv_hex))
    sig = sk.sign(payload).signature
    return sig.hex()


def verify_ballot(node_id: str, payload: bytes, signature_hex: str) -> bool:
    """Verify a ballot signature against the node's public key. Returns
    True if the signature is valid, False otherwise. Hard-fails in
    production if pynacl missing (per L0-G audit 2026-06-12)."""
    pub_hex = get_public_key(node_id)
    if not pub_hex:
        return False
    if not _NACL_AVAILABLE:
        if not _DEV_HMAC_FALLBACK:
            raise RuntimeError(
                "PyNaCl is required for council verify. "
                "Install with: pip install pynacl. "
                "If you are in local dev, set MEOK_COUNCIL_DEV_HMAC_FALLBACK=1."
            )
        # Dev fallback: HMAC verify
        priv_hex = get_private_key(node_id) or ""
        if not priv_hex:
            return False
        expected = hmac.new(bytes.fromhex(priv_hex), payload, hashlib.sha256).hexdigest()
        return hmac.compare_digest(expected, signature_hex)
    try:
        vk = VerifyKey(bytes.fromhex(pub_hex))
        vk.verify(payload, bytes.fromhex(signature_hex))
        return True
    except BadSignatureError:
        return False
    except Exception:
        return False
