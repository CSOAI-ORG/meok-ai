---
title: "Article 50 + C2PA 2.1 + Sigstore: the watermarking moat nobody is building"
date: 2026-05-13
author: Nicholas Templeman
description: "EU AI Act Article 50 enforcement is 2 Nov 2026. The compliance stack that survives audits combines C2PA 2.1 + invisible watermarking + Sigstore-signed provenance. Here's how MEOK ships it."
canonical: https://meok.ai/blog/article-50-c2pa-sigstore-moat
category: governance
tags: [eu-ai-act, article-50, c2pa, sigstore, watermarking, provenance]
---

The EU AI Act has one hard deadline that **didn't** move in the March 2026 Digital Omnibus vote: **Article 50 — 2 November 2026.**

If you ship AI-generated content (text, image, video, audio) into the EU market, by 2 Nov 2026 the content must be:
1. **Machine-readable** marked as AI-generated
2. **Disclosed** to humans interacting with it

That's 173 days from today.

This post explains why the answer most teams are reaching for (single-layer watermarking) is fragile, and what the multi-layer stack actually looks like — C2PA 2.1 + invisible watermarking + Sigstore-signed provenance.

## The single-layer failure mode

Most "AI watermarking" tools today do ONE of:
- Invisible perturbation watermarks (Stable Signature, SynthID-style)
- Metadata tagging (EXIF/XMP)
- C2PA basic claims

Each fails alone:
- **Perturbation watermarks** get destroyed by re-encoding, screenshot, or aggressive editing
- **Metadata** is stripped by every social media platform on upload
- **C2PA basic claims** without proper signing can be forged or replayed

The EU AI Act's actual language (Article 50(2)) requires marking "in a machine-readable format and detectable as artificially generated or manipulated." That's permissive on _which_ technique, but if your single technique is defeated by a screenshot, you don't have compliance.

## What multi-layer compliance looks like

```
Layer 1: C2PA 2.1 manifest
    ↓ embedded into JPEG/PNG/MP4/PDF JUMBF box
Layer 2: Invisible perturbation watermark
    ↓ survives recompression + crop + screenshot
Layer 3: RFC 3161 timestamp via TSA
    ↓ proves "this was generated at time X"
Layer 4: Sigstore-signed attestation of the manifest
    ↓ public verification without trusting the issuer
```

If layer 1 is stripped (social media upload), layer 2 still flags the content. If layer 2 is defeated (aggressive re-encoding), layer 1 metadata is still preserved on the original file. Layer 3 + 4 give the auditor cryptographic proof of when + by whom the content was claimed.

## What MEOK ships today

`watermarking-authenticity-mcp` v1.1.0 emits a full C2PA 2.1 manifest with:

```json
{
  "c2pa_version": "2.1",
  "claim_generator": "MEOK_AI_Labs_Watermarking_MCP/1.1.0",
  "claim": {
    "c2pa.ai_info": {"model": "gpt-5", "type": "generated"},
    "c2pa.actions": [{
      "action": "c2pa.created",
      "digitalSourceType": "http://cv.iptc.org/newscodes/digitalsourcetype/algorithmicMedia"
    }]
  },
  "assertion_store": {
    "c2pa.training_mining": {
      "entries": {
        "c2pa.ai_generative_training": {"use": "notAllowed"},
        "c2pa.ai_inference": {"use": "notAllowed"}
      }
    }
  },
  "rfc3161_timestamp": {"model": "sigTst2", "tsa_url": "..."},
  "signature": {"alg": "sha256", "value": "..."}
}
```

For binary embedding into JPEG/PNG/MP4/PDF, the MCP integrates with `c2pa-python` (the official Adobe-Microsoft-Anthropic C2PA library) so the manifest gets baked into the file's JUMBF box.

```bash
pip install watermarking-authenticity-mcp c2pa
```

Then in any MCP client:

```
Use generate_c2pa_manifest with:
  creator = "MEOK AI Labs"
  content_type = "image/png"
  ai_model = "gpt-5"
  description = "AI-generated marketing illustration"

Then use the c2pa-python library to embed the manifest into the actual file.
```

## The Sigstore bridge

C2PA gives you a manifest. But who signs it?

The C2PA spec assumes a trust anchor — usually a Certificate Authority issued cert. For most teams, that's a procurement nightmare ("we need a code-signing cert, but for media files?").

Sigstore's **keyless signing** sidesteps the procurement layer entirely. The Sigstore Fulcio CA issues short-lived certs based on OIDC identity (your GitHub Actions workflow, your AWS IAM role, your Google account). The cert is logged in the Rekor transparency log. Anyone can verify without your team running a PKI.

MEOK's `sigstore-cosign-mcp` wraps the verification side:

```python
# Verify a signed C2PA manifest
result = verify_image_signature(
    image_path="my_ai_output.png",
    expected_identity="https://github.com/meok-ai-labs/.*",
    expected_issuer="https://token.actions.githubusercontent.com"
)
```

For the auditor: paste the cert ID into the verifier. Get "valid: true." No phone call needed.

## What this means for your Article 50 readiness

If you ship AI content into the EU market and your current plan is:
- "We'll add a watermark soon" — single layer, won't survive audit
- "We'll add metadata" — stripped by social media
- "We'll get C2PA certified" — that's not actually a thing; C2PA is an open spec

The multilayer answer is:
1. C2PA 2.1 manifest baked into file via `c2pa-python`
2. Invisible perturbation watermark via your model's native watermarking (SynthID-style)
3. RFC 3161 timestamp via a public TSA (FreeTSA / DigiCert)
4. Sigstore keyless signing of the manifest with your CI/CD identity

`watermarking-authenticity-mcp` handles 1 + 3 + the manifest structure for 4. `sigstore-cosign-mcp` handles 4 verification. Layer 2 (invisible watermark) you get from your model provider.

That stack survives the audit because:
- The auditor verifies signature → gets a cryptographic proof
- The auditor sees C2PA training_mining `notAllowed` → your IP is protected
- The auditor checks Rekor → the cert chain is publicly logged
- The auditor verifies timestamp → "this was claimed at time X" is provable

## Try it

```bash
npx meok-setup --pack governance
```

Or:

```bash
pip install watermarking-authenticity-mcp sigstore-cosign-mcp
```

Pro tier (£79/mo) gets you unlimited + signed attestations. Free tier (10/day) gets you a working test loop.

## Side note: why we don't ship the perturbation watermark itself

We tested 3 perturbation-watermarking libraries (Stable Signature, SynthID-style baseline, AdvWatermark) and the empirical reality is: each works well for one modality, fails on others, and the SOTA shifts every quarter. Rather than commit MEOK's reputation to a specific watermarking algorithm, we ship the C2PA + Sigstore framing and let teams pick their preferred perturbation tech inside that envelope.

When invisible watermarking standardizes, we'll integrate. Until then: bring your own perturbation layer.

## Cliff is 173 days away

If you ship AI content into the EU, the next 6 months matter. Half-built watermarking that fails the audit is the same as no watermarking — except you paid for it. Multi-layer or bust.

— Nick
MEOK AI Labs · hello@meok.ai

P.S. If you're at an EU regulator or notified body and want the technical brief on how MEOK's signature chain maps to specific Article 50 evidentiary requirements, email me.
