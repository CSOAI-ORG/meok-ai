# meok-ai

[![MEOK](https://img.shields.io/badge/MEOK-meok.ai-0ea5e9)](https://meok.ai)
[![GSPC](https://img.shields.io/badge/GSPC-live%20GET%20%2Fapi%2Fgspc-0ea5e9)](https://councilof.ai/api/gspc)
[![Measurement](https://img.shields.io/badge/Measurement-not%20certification-64748b)](https://councilof.ai/api/gspc)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Part of the **MEOK × Council of AI (CSOAI-ORG)** open ecosystem.

## Live Surfaces & Canonical GSPC Stack

| Surface / Package | Role | Live Endpoint / Install |
| --- | --- | --- |
| **MEOK Workspace** | Human-in-command workspace & H.I.M. charter surface (served from [`CSOAI-ORG/meok-ai-site`](https://github.com/CSOAI-ORG/meok-ai-site)) | [`https://meok.ai`](https://meok.ai) · [`https://meok.ai/him/`](https://meok.ai/him/) |
| **MEOK Hybrid Lab** | Public Gradio process-state world lab | [`huggingface.co/spaces/csoai/meok-process-world-v0`](https://huggingface.co/spaces/csoai/meok-process-world-v0) |
| **GSPC Live Board** | Independent measurement board & Ed25519 receipt authority | [`GET https://councilof.ai/api/gspc`](https://councilof.ai/api/gspc) · [`/board`](https://councilof.ai/board) · [`/gspc-verify`](https://councilof.ai/gspc-verify) |
| **Single Remote MCP Gateway** | Canonical Streamable HTTP MCP gateway (MEOK hosts no second remote MCP server) | `https://councilof.ai/mcp` |
| **Local Stdio MCP Server** | Offline Ed25519 card verifier + live GSPC board reader | `npx -y csoai-gspc-mcp` |
| **Client Setup CLI** | One-command MCP setup across Cursor, Claude, VS Code, Windsurf & Gemini CLI | `npx meok-setup --pack gspc` |
| **Layer-0 SDKs** | TypeScript & Python GSPC / Layer-0 verifiers | `npm i @csoai/layer0` · `pip install csoai-gspc` |

### Querying the Live GSPC Board from Python

Both Python package layouts include the zero-dependency deterministic GSPC reader (`council/gspc_board.py` and `meok/council/gspc_board.py`), which quotes `totals.public_count` and `totals.lid` verbatim and returns `UNCHECKABLE` on failure:

```bash
python3 -m meok.council.gspc_board
python3 -m meok.council.gspc_board --text
```

## Source entrypoints

See [the source-entrypoint map](docs/SOURCE_ENTRYPOINTS.md) before editing duplicated Python modules. Docker launches select the root Python tree; Python launched from the checkout root selects the nested `meok/` package. The frontend npm commands select `ui/`. These are source/build observations, not proof of a live deployment (`https://meok.ai` production static/edge routes live in [`CSOAI-ORG/meok-ai-site`](https://github.com/CSOAI-ORG/meok-ai-site)).

## Honesty register

**MEOK.ai is a shelf / frontend, not a second Council.**

- **Live board authority:** `GET https://councilof.ai/api/gspc` (cite `totals.public_count` + `totals.lid` verbatim; never type static axis counts into docs).
- **Single remote MCP gateway:** `https://councilof.ai/mcp`.
- **Measurement, not certification.** CSOAI Ltd (UK Companies House `16939677`) measures and publishes signed artifacts; it does not certify, accredit, or act as a notified body.
- Never invent scores. Prefer honest `UNCHECKABLE` over a fake stamp. `meok-council-worker` is **not** claimed live.
