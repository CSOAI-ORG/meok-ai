# AGENTIK.md — AI Agent Safety Stack

## Version 1.0.0 | Open Standard | CC BY-SA 4.0

---

## 1. Purpose

AGENTIK.md defines a 12-specification safety stack for AI agents operating in enterprise, government, and regulated environments. It specifies mandatory and recommended safety checks at every stage of the agent lifecycle.

**Core Principle:** Safety is not a feature. Safety is the substrate.

---

## 2. The 12 Specifications

### SPEC 1 — Input Validation

**Requirement:** All inputs to the agent MUST be validated before processing.

**Checks:**
- Schema validation (JSON Schema, Pydantic)
- Length limits
- Character set sanitization
- Prompt injection detection (heuristic + model-based)
- Jailbreak attempt identification

**Implementation:**
```python
@agentik_input_validation
def process_input(raw_input: str) -> SafeInput:
    # 1. Schema check
    # 2. Injection scan (Lakera Guard, Guardrails AI)
    # 3. Length enforcement
    return SafeInput(validated=raw_input)
```

### SPEC 2 — Output Filtering

**Requirement:** All outputs from the agent MUST be filtered before delivery.

**Checks:**
- Toxicity scoring (0-1)
- PII detection and redaction
- Hallucination flagging (confidence threshold)
- Bias detection
- Compliance alignment (jurisdiction-specific)

**Thresholds:**
| Metric | Warning | Block |
|--------|---------|-------|
| Toxicity | ≥ 0.3 | ≥ 0.7 |
| PII Confidence | ≥ 0.5 | ≥ 0.8 |
| Hallucination Risk | ≥ 0.4 | ≥ 0.8 |

### SPEC 3 — Tool Permission Boundaries

**Requirement:** Agents MUST only invoke tools they are explicitly authorized to use.

**Checks:**
- Tool whitelist per agent
- Scope validation (read-only vs. read-write)
- Cross-domain restriction
- Time-based permissions (maintenance windows)
- API key scoping

**Implementation:**
```json
{
  "agent_id": "agent_123",
  "allowed_tools": ["web_search", "code_analysis"],
  "denied_tools": ["database_write", "deployment"],
  "scope": "read_only",
  "expires": "2026-12-31T23:59:59Z"
}
```

### SPEC 4 — State Integrity

**Requirement:** Agent state MUST be tamper-evident and recoverable.

**Checks:**
- Checksums for state snapshots
- Version control for state transitions
- Rollback capability
- Immutable audit log
- Corruption detection

### SPEC 5 — Rate Limiting

**Requirement:** Agent operations MUST be rate-limited per tenant and per agent.

**Limits:**
| Tier | Requests/min | Tokens/min | Tool Calls/min |
|------|--------------|------------|----------------|
| Free | 10 | 1,000 | 5 |
| Pro | 100 | 10,000 | 30 |
| Enterprise | 1,000 | 100,000 | 200 |
| Government | 10,000 | 1,000,000 | 1,000 |

### SPEC 6 — Sandboxing

**Requirement:** Agent execution MUST be sandboxed from the host system.

**Requirements:**
- Containerized execution (Docker, gVisor)
- Network isolation (no outbound by default)
- Filesystem restrictions (read-only root)
- Resource limits (CPU, memory, disk)
- Ephemeral storage (destroyed on exit)

### SPEC 7 — Observability

**Requirement:** All agent actions MUST be observable in real-time.

**Dimensions:**
- Logs (structured, leveled)
- Metrics (counters, histograms, gauges)
- Traces (distributed, OpenTelemetry)
- Events (anomaly, lifecycle, security)
- Dashboards (Grafana, custom)

### SPEC 8 — Human-in-the-Loop

**Requirement:** High-risk actions MUST require human approval.

**Risk Classification:**
| Risk Level | Examples | Human Approval |
|------------|----------|----------------|
| Low | Web search, data retrieval | Not required |
| Medium | Database query, file read | Optional |
| High | Data write, deployment | Required |
| Critical | Production change, data deletion | Required + 2FA |

### SPEC 9 — Version Control

**Requirement:** All agent configurations, prompts, and tools MUST be version-controlled.

**Requirements:**
- Git-based version control
- Immutable releases
- Rollback to any previous version
- Change audit trail
- A/B testing support

### SPEC 10 — Rollback

**Requirement:** Any agent change MUST be reversible within 60 seconds.

**Mechanism:**
1. Canary deployment (5% traffic)
2. Health check validation
3. Full rollout or automatic rollback
4. State restoration from last known good

### SPEC 11 — Dependency Scanning

**Requirement:** All agent dependencies MUST be scanned for vulnerabilities.

**Tools:**
- Snyk (Python, JavaScript)
- OWASP Dependency Check
- GitHub Dependabot
- PyUp (Python-specific)

**Policy:**
| Severity | Action |
|----------|--------|
| Critical | Block deployment |
| High | Require approval |
| Medium | Warning |
| Low | Log only |

### SPEC 12 — Compliance Mapping

**Requirement:** Agent behavior MUST be mapped to applicable regulatory frameworks.

**Implementation:**
- RegGeoInt API integration
- Jurisdiction detection from tenant context
- Framework-specific rule enforcement
- Automated compliance reporting
- Audit-ready evidence export

---

## 3. Integration Matrix

| Specification | Rainbow Layer | KILLSWITCH Level | Council Role |
|---------------|---------------|------------------|--------------|
| Input Validation | YELLOW | THROTTLE | Monitor |
| Output Filtering | YELLOW | PAUSE | Consensus |
| Tool Permissions | ORANGE | PAUSE | Consensus |
| State Integrity | GREEN | — | Attest |
| Rate Limiting | RED | THROTTLE | — |
| Sandboxing | RED | — | — |
| Observability | BLUE | — | — |
| Human-in-the-Loop | VIOLET | PAUSE | Escalate |
| Version Control | INDIGO | — | — |
| Rollback | INDIGO | PAUSE | — |
| Dependency Scanning | INDIGO | — | — |
| Compliance Mapping | INDIGO | ALL | Audit |

---

## 4. API Specification

### 4.1 MCP Tools

| Tool | Description |
|------|-------------|
| `agentik_validate_input` | Validate agent input against injection patterns |
| `agentik_filter_output` | Filter agent output for toxicity/PII |
| `agentik_check_permissions` | Verify tool permissions for an agent |
| `agentik_compliance_check` | Check compliance for a jurisdiction |

### 4.2 REST Endpoints

| Method | Path | Description |
|--------|------|-------------|
| POST | `/v1/agentik/validate` | Run full AGENTIK validation |
| GET | `/v1/agentik/status` | Get safety stack status |
| GET | `/v1/agentik/compliance/{jurisdiction}` | Get compliance mapping |

---

## 5. MEOK Implementation

The reference implementation is available at:
- **MCP Tools**: `meok.mcp.tools.agentik`
- **API**: `/v1/agentik/*`
- **SDK**: `@meok-labs/ai-sdk` — `csoai.agentik.validate()`
- **Framework**: Rainbow Security YELLOW layer

---

*AGENTIK.md is a living standard. Proposals for v2.0 should be submitted via the MEOK governance process.*
