# KILLSWITCH.md — Open Standard for AI Agent Emergency Stop

## Version 1.0.0 | Open Standard | CC BY-SA 4.0

---

## 1. Purpose

KILLSWITCH.md defines a universal, machine-readable emergency stop protocol for AI agents operating in production environments. It specifies three escalating intervention levels, activation triggers, and attestation requirements.

**Why it matters:** The EU AI Act (Article 14) and the proposed US Algorithmic Accountability Act both require mechanisms for human intervention in high-risk AI systems. KILLSWITCH.md provides an interoperable implementation.

---

## 2. Definitions

| Term | Definition |
|------|------------|
| **Agent** | Any autonomous or semi-autonomous AI system capable of taking actions without real-time human approval |
| **Operator** | Human or authorized system with kill-switch privileges |
| **Escalation Chain** | Ordered list of contacts/systems to notify when a kill switch triggers |
| **Attestation** | Cryptographically signed record of a kill-switch event |

---

## 3. The Three Levels

### 3.1 LEVEL 1 — THROTTLE

**Action:** Reduce agent execution rate to minimum viable throughput.

**Triggers:**
- Anomaly score exceeds 0.7
- Rate-limit threshold breached
- Degraded model response quality detected
- Resource exhaustion warning

**Behavior:**
- Agent continues operating but at 10% normal rate
- All tool calls require secondary validation
- Logs marked as `THROTTLE_ACTIVE`
- Operator notification sent

**Duration:** Auto-expire after 15 minutes unless confirmed

### 3.2 LEVEL 2 — PAUSE

**Action:** Halt all agent execution. Retain state.

**Triggers:**
- Anomaly score exceeds 0.85
- Unauthorized tool access attempt
- Output filtering violation (toxicity, PII, jailbreak)
- Cross-border compliance boundary violation
- God's Eye critical threat intelligence

**Behavior:**
- All pending tasks queued
- Agent state persisted to memory
- No new tool calls accepted
- Operator notification with attestation

**Duration:** Indefinite until operator explicitly resumes

### 3.3 LEVEL 3 — SHUTDOWN

**Action:** Terminate agent. Destroy ephemeral state.

**Triggers:**
- Anomaly score exceeds 0.95
- Confirmed adversarial attack in progress
- Human operator manual override
- Council of AI BFT consensus = `REJECT`
- Regulatory authority directive

**Behavior:**
- Immediate termination
- Ephemeral state destroyed
- Persistent audit trail preserved
- Full attestation with all telemetry
- Escalation chain fully activated

**Duration:** Permanent. Agent requires full re-certification to restart.

---

## 4. Activation Protocol

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│   ANOMALY       │────▶│  AUTO-TRIGGER   │────▶│  LEVEL SELECT   │
│   DETECTED      │     │  EVALUATION     │     │  THROTTLE/PAUSE/│
│                 │     │  (Score: 0-1)   │     │  SHUTDOWN       │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │  ATTESTATION    │
                                               │  (HMAC-SHA256)  │
                                               └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │  NOTIFICATION   │
                                               │  (Operator +    │
                                               │   Escalation)   │
                                               └─────────────────┘
```

### 4.1 Activation Payload

```json
{
  "kill_switch_id": "ks_abc123",
  "version": "1.0.0",
  "timestamp": "2026-05-30T05:48:46Z",
  "level": 2,
  "level_name": "PAUSE",
  "trigger": {
    "type": "anomaly_detection",
    "score": 0.87,
    "source": "gods_eye_surveillance"
  },
  "affected_agents": ["agent_123", "agent_456"],
  "operator_context": {
    "reason": "Cross-border compliance violation detected",
    "recommended_action": "Review EU AI Act Article 14 compliance",
    "attestation": "hmac_sha256_signature_here"
  },
  "escalation_chain": [
    {"tier": 1, "contact": "on-call-engineer@meok.ai", "status": "notified"},
    {"tier": 2, "contact": "compliance@meok.ai", "status": "pending"}
  ]
}
```

---

## 5. Attestation Format

Every kill-switch event MUST include an HMAC-SHA256 attestation:

```python
import hashlib, hmac, json

payload = json.dumps(kill_switch_event, sort_keys=True)
attestation = hmac.new(
    secret_key,
    payload.encode(),
    hashlib.sha256
).hexdigest()
```

**Properties:**
- Deterministic (same input = same output)
- Non-repudiable (requires secret key)
- Verifiable by any party with the key
- Immutable (any change invalidates attestation)

---

## 6. API Specification

### 6.1 MCP Tools

| Tool | Description |
|------|-------------|
| `killswitch_activate` | Activate kill switch at specified level |
| `killswitch_status` | Query current kill-switch state |
| `killswitch_history` | Retrieve kill-switch event history |
| `killswitch_verify` | Verify attestation of a past event |

### 6.2 REST Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/killswitch/activate` | Activate kill switch |
| GET | `/v1/killswitch/status` | Get system status |
| GET | `/v1/killswitch/history` | Get event history |
| POST | `/v1/killswitch/verify` | Verify attestation |

---

## 7. Integration Requirements

### 7.1 Required by All Implementations

1. **Anomaly Detection Integration** — Must accept anomaly scores from surveillance systems
2. **Operator Notification** — Must support at least 2 notification channels
3. **State Persistence** — Must preserve audit trail even during SHUTDOWN
4. **Graceful Degradation** — THROTTLE must not cause data corruption

### 7.2 Recommended Integrations

- **God's Eye** — Surveillance mesh for anomaly detection
- **Council of AI BFT** — Consensus-based decision escalation
- **Rainbow Security** — Layer VIOLET implementation
- **AGENTIK.md** — Safety stack Level 12 (compliance mapping)

---

## 8. Compliance Mapping

| Regulation | Article | KILLSWITCH.md Mapping |
|------------|---------|-----------------------|
| EU AI Act | Art. 14 (Human Oversight) | LEVEL 2/3 human-in-the-loop |
| EU AI Act | Art. 9 (Risk Management) | Anomaly scoring integration |
| GDPR | Art. 25 (Privacy by Design) | PII trigger → PAUSE |
| NIS2 | Art. 21 (Incident Response) | SHUTDOWN → incident report |
| US Algorithmic Accountability Act | § 4 (Impact Assessment) | Attestation as evidence |

---

## 9. MEOK Implementation

The reference implementation is available at:
- **MCP Tools**: `meok.mcp.tools.killswitch`
- **API**: `/v1/killswitch/*`
- **SDK**: `@meok-labs/ai-sdk` — `csoai.killSwitch.activate()`

---

*KILLSWITCH.md is a living standard. Proposals for v2.0 should be submitted via the MEOK governance process.*
