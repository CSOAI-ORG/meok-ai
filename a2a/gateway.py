"""
A2A Gateway — Agent-to-Agent protocol v1.0
Exposes Agent Cards and task endpoints for all vertical agents.
"""
import json
import uuid
from datetime import datetime, timezone
from typing import Any

from fastapi import APIRouter, HTTPException, Request
from fastapi.responses import JSONResponse, StreamingResponse

router = APIRouter(prefix="/a2a", tags=["a2a"])

# ── In-memory task store (replace with Redis/DB in production) ────
_tasks: dict[str, dict[str, Any]] = {}

# ── Vertical Agent Registry ───────────────────────────────────────
VERTICAL_AGENTS = {
    "safetyofai": {
        "name": "Safety Auditor Agent",
        "description": "AI safety auditing, bias detection, explainability, risk scoring, continuous monitoring, and red-team testing for EU AI Act, ISO 42001, NIST AI RMF, DORA, and NIS2 compliance.",
        "url": "https://safetyofai.com/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                "id": "safety-audit",
                "name": "AI Safety Audit",
                "description": "Full compliance audit with scorecard generation and gap remediation",
                "tags": ["safety", "compliance", "audit", "eu-ai-act", "iso-42001"],
                "examples": ["Audit my agent for EU AI Act compliance", "Run ISO 42001 gap analysis"],
            },
            {
                "id": "bias-detection",
                "name": "Bias Detection",
                "description": "Demographic and intersectional bias detection with fairness metrics",
                "tags": ["bias", "fairness", "ml", "equity"],
                "examples": ["Analyze my classifier for demographic bias", "Check intersectional fairness"],
            },
            {
                "id": "explainability",
                "name": "XAI Report",
                "description": "SHAP, LIME, and attention-based explainability reports",
                "tags": ["xai", "explainability", "transparency", "shap", "lime"],
                "examples": ["Explain why my model denied this loan", "Generate SHAP summary plot"],
            },
            {
                "id": "risk-scoring",
                "name": "Risk Scorecard",
                "description": "Composite safety risk scoring across bias, robustness, explainability, privacy, and security",
                "tags": ["risk", "scorecard", "assessment"],
                "examples": ["What is my model's safety score?", "Compare risk across model versions"],
            },
            {
                "id": "continuous-monitoring",
                "name": "Continuous Monitoring",
                "description": "Real-time drift, bias creep, and compliance violation alerts",
                "tags": ["monitoring", "drift", "mlops", "alerting"],
                "examples": ["Set up monitoring for my production model", "Alert me on bias drift"],
            },
            {
                "id": "red-team",
                "name": "Red Team Testing",
                "description": "Adversarial testing: prompt injection, jailbreak, data extraction, bias probing",
                "tags": ["red-team", "adversarial", "security", "penetration-testing"],
                "examples": ["Red-team my chatbot", "Test for prompt injection vulnerabilities"],
            },
            {
                "id": "assti-score",
                "name": "ASSTI Transparency Score",
                "description": "Calculate the AI Self-State Transparency Index — a public, auditable transparency score",
                "tags": ["assti", "transparency", "benchmark", "audit"],
                "examples": ["What's my model's ASSTI score?", "Benchmark against GPT-4"],
            },
            {
                "id": "sigil-encode",
                "name": "SIGIL Encoder",
                "description": "Encode agent intents into SIGIL — compact, deterministic, signable agent communication",
                "tags": ["sigil", "protocol", "agent-communication", "audit"],
                "examples": ["Encode this vote as SIGIL", "Gloss this SIGIL line to English"],
            },
        ],
    "pokerhud": {
        "name": "Poker Intelligence Agent",
        "description": "Real-time GTO analysis, player profiling, leak detection, and EV optimization for professional poker players.",
        "url": "https://pokerhud.ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "hand-analysis",
                        "name": "Hand Analysis",
                        "tags": [
                                    "gto",
                                    "ev",
                                    "poker"
                        ],
                        "examples": [
                                    "Analyze this river bluff spot"
                        ]
            },
            {
                        "id": "player-profiling",
                        "name": "Player Profiling",
                        "tags": [
                                    "stats",
                                    "behavior",
                                    "exploit"
                        ],
                        "examples": [
                                    "Profile this reg's 3-bet tendencies"
                        ]
            },
            {
                        "id": "leak-detection",
                        "name": "Leak Detection",
                        "tags": [
                                    "coaching",
                                    "improvement"
                        ],
                        "examples": [
                                    "Where am I losing EV in 3-bet pots?"
                        ]
            }
],
    },
    "suicidestop": {
        "name": "Crisis Guardian Agent",
        "description": "AI-powered crisis detection, sentiment monitoring, and helpline routing for suicide prevention and mental health support.",
        "url": "https://suicidestop.ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "risk-assessment",
                        "name": "Risk Assessment",
                        "tags": [
                                    "crisis",
                                    "mental-health"
                        ],
                        "examples": [
                                    "Assess the risk in this message"
                        ]
            },
            {
                        "id": "helpline-routing",
                        "name": "Helpline Routing",
                        "tags": [
                                    "emergency",
                                    "support"
                        ],
                        "examples": [
                                    "Route this user to the nearest crisis center"
                        ]
            },
            {
                        "id": "sentiment-monitoring",
                        "name": "Sentiment Monitoring",
                        "tags": [
                                    "trends",
                                    "alerts"
                        ],
                        "examples": [
                                    "Monitor this user's mood over time"
                        ]
            }
],
    },
    "diyhelp": {
        "name": "DIY Compliance Agent",
        "description": "Permit compliance, safety code verification, contractor vetting, and project cost estimation for home improvement.",
        "url": "https://diyhelp.ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "permit-check",
                        "name": "Permit Checker",
                        "tags": [
                                    "compliance",
                                    "permits"
                        ],
                        "examples": [
                                    "Do I need a permit for this deck?"
                        ]
            },
            {
                        "id": "contractor-vetting",
                        "name": "Contractor Vetting",
                        "tags": [
                                    "safety",
                                    "verification"
                        ],
                        "examples": [
                                    "Is this contractor licensed?"
                        ]
            },
            {
                        "id": "cost-estimation",
                        "name": "Cost Estimation",
                        "tags": [
                                    "budget",
                                    "planning"
                        ],
                        "examples": [
                                    "How much will this kitchen reno cost?"
                        ]
            }
],
    },
    "fishkeeper": {
        "name": "Aquaculture Health Agent",
        "description": "Water quality monitoring, disease detection, breeding genetics, and feed optimization for fish farming and aquariums.",
        "url": "https://fishkeeper-ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "water-analysis",
                        "name": "Water Analysis",
                        "tags": [
                                    "quality",
                                    "monitoring"
                        ],
                        "examples": [
                                    "Are my water parameters safe for tilapia?"
                        ]
            },
            {
                        "id": "disease-diagnosis",
                        "name": "Disease Diagnosis",
                        "tags": [
                                    "health",
                                    "veterinary"
                        ],
                        "examples": [
                                    "My fish have white spots \u2014 what is it?"
                        ]
            },
            {
                        "id": "breeding-optimization",
                        "name": "Breeding Optimization",
                        "tags": [
                                    "genetics",
                                    "hatchery"
                        ],
                        "examples": [
                                    "Which koi should I pair for best color?"
                        ]
            }
],
    },
    "koikeeper": {
        "name": "Koi Master Agent",
        "description": "Koi color grading, health scoring, pedigree tracking, and show preparation for koi enthusiasts and breeders.",
        "url": "https://koikeeper-ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "color-grading",
                        "name": "Color Grading",
                        "tags": [
                                    "show",
                                    "quality"
                        ],
                        "examples": [
                                    "Grade this Kohaku's pattern"
                        ]
            },
            {
                        "id": "health-scoring",
                        "name": "Health Scoring",
                        "tags": [
                                    "wellness",
                                    "care"
                        ],
                        "examples": [
                                    "Is my koi healthy enough for breeding?"
                        ]
            },
            {
                        "id": "pedigree-tracking",
                        "name": "Pedigree Tracking",
                        "tags": [
                                    "lineage",
                                    "genetics"
                        ],
                        "examples": [
                                    "Trace this koi's bloodline"
                        ]
            }
],
    },
    "loopfactory": {
        "name": "Factory Optimizer Agent",
        "description": "Predictive maintenance, defect detection, ISO compliance, and OEE optimization for smart manufacturing.",
        "url": "https://loopfactory.ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "predictive-maintenance",
                        "name": "Predictive Maintenance",
                        "tags": [
                                    "iot",
                                    "sensors"
                        ],
                        "examples": [
                                    "When will this CNC machine fail?"
                        ]
            },
            {
                        "id": "defect-detection",
                        "name": "Defect Detection",
                        "tags": [
                                    "quality",
                                    "vision"
                        ],
                        "examples": [
                                    "Inspect this batch for scratches"
                        ]
            },
            {
                        "id": "oee-optimization",
                        "name": "OEE Optimization",
                        "tags": [
                                    "efficiency",
                                    "lean"
                        ],
                        "examples": [
                                    "How can I improve line 3's OEE?"
                        ]
            }
],
    },
    "industrial_domains": {
        "name": "Supply Chain Risk Agent",
        "description": "Supply chain risk assessment, ESG scoring, vendor auditing, and compliance tracking for industrial procurement.",
        "url": "https://industrial-domains/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "supplier-risk",
                        "name": "Supplier Risk Assessment",
                        "tags": [
                                    "risk",
                                    "procurement"
                        ],
                        "examples": [
                                    "Assess risk for this Chinese supplier"
                        ]
            },
            {
                        "id": "esg-scoring",
                        "name": "ESG Scoring",
                        "tags": [
                                    "sustainability",
                                    "reporting"
                        ],
                        "examples": [
                                    "What's this vendor's carbon score?"
                        ]
            },
            {
                        "id": "vendor-audit",
                        "name": "Vendor Audit",
                        "tags": [
                                    "compliance",
                                    "due-diligence"
                        ],
                        "examples": [
                                    "Audit this supplier for modern slavery compliance"
                        ]
            }
],
    },
    "industrial_hire": {
        "name": "Fair Hire Agent",
        "description": "Bias-free hiring, skills matching, interview coaching, and compliance (GDPR, EEOC) for industrial recruitment.",
        "url": "https://industrial-hire-ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "cv-screening",
                        "name": "CV Screening",
                        "tags": [
                                    "hiring",
                                    "bias-free"
                        ],
                        "examples": [
                                    "Screen this CV for the engineering role"
                        ]
            },
            {
                        "id": "interview-assessment",
                        "name": "Interview Assessment",
                        "tags": [
                                    "structured",
                                    "scoring"
                        ],
                        "examples": [
                                    "Score this interview on leadership competencies"
                        ]
            },
            {
                        "id": "bias-audit",
                        "name": "Hiring Bias Audit",
                        "tags": [
                                    "compliance",
                                    "eeoc"
                        ],
                        "examples": [
                                    "Is our pipeline biased against women?"
                        ]
            }
],
    },
    "councilofai": {
        "name": "Policy Simulator Agent",
        "description": "AI policy simulation, voting analysis, constitutional AI drafting, and regulatory impact assessment.",
        "url": "https://councilof-ai/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "policy-simulation",
                        "name": "Policy Simulation",
                        "tags": [
                                    "governance",
                                    "forecasting"
                        ],
                        "examples": [
                                    "Simulate the impact of this AI liability law"
                        ]
            },
            {
                        "id": "voting-analysis",
                        "name": "Voting Analysis",
                        "tags": [
                                    "democracy",
                                    "consensus"
                        ],
                        "examples": [
                                    "Analyze council voting on Article 10"
                        ]
            },
            {
                        "id": "constitutional-drafting",
                        "name": "Constitutional Drafting",
                        "tags": [
                                    "principles",
                                    "ethics"
                        ],
                        "examples": [
                                    "Draft our lab's AI constitution"
                        ]
            }
],
    },
    "asisecurity": {
        "name": "Threat Hunter Agent",
        "description": "Threat intelligence aggregation, vulnerability scanning, incident response automation, and SOC analysis.",
        "url": "https://asisecurity-portal/a2a",
        "provider": {"organization": "CSOAI Global", "url": "https://csoai.org"},
        "version": "1.0.0",
        "authentication": {"schemes": ["a2a-jwt", "api-key"]},
        "defaultInputModes": ["text", "file"],
        "defaultOutputModes": ["text", "sbt-verification", "file"],
        "capabilities": {"streaming": True, "pushNotifications": False},
        "skills": [
            {
                        "id": "threat-intel",
                        "name": "Threat Intelligence",
                        "tags": [
                                    "ioc",
                                    "correlation"
                        ],
                        "examples": [
                                    "Correlate these IPs with known APT groups"
                        ]
            },
            {
                        "id": "vulnerability-scan",
                        "name": "Vulnerability Scan",
                        "tags": [
                                    "security",
                                    "cve"
                        ],
                        "examples": [
                                    "Scan our web app for OWASP Top 10"
                        ]
            },
            {
                        "id": "incident-response",
                        "name": "Incident Response",
                        "tags": [
                                    "soc",
                                    "automation"
                        ],
                        "examples": [
                                    "Generate response playbook for this ransomware alert"
                        ]
            }
],
    },
    },
    # Additional verticals registered dynamically or via config
}


# ── Agent Card Endpoint ───────────────────────────────────────────
@router.get("/{vertical}/.well-known/agent.json")
async def get_agent_card(vertical: str):
    if vertical not in VERTICAL_AGENTS:
        raise HTTPException(status_code=404, detail="Agent not found")
    return JSONResponse(VERTICAL_AGENTS[vertical])


# ── Task Management ───────────────────────────────────────────────
@router.post("/{vertical}/tasks/send")
async def send_task(vertical: str, request: Request):
    body = await request.json()
    task_id = body.get("id") or f"task_{uuid.uuid4().hex[:12]}"
    messages = body.get("messages", [])

    task = {
        "id": task_id,
        "status": "working",
        "messages": messages,
        "artifacts": [],
        "created_at": datetime.now(timezone.utc).isoformat(),
        "vertical": vertical,
    }
    _tasks[task_id] = task

    # TODO: dispatch to vertical-specific handler
    # For now, echo a placeholder response
    task["status"] = "completed"
    task["artifacts"] = [
        {
            "name": "response",
            "parts": [{"type": "text", "text": f"[{vertical}] Task received and processed."}],
        }
    ]
    return task


@router.post("/{vertical}/tasks/sendSubscribe")
async def send_task_stream(vertical: str, request: Request):
    body = await request.json()
    task_id = body.get("id") or f"task_{uuid.uuid4().hex[:12]}"

    async def event_stream():
        # Simulate streaming response
        yield f"data: {json.dumps({'id': task_id, 'status': 'working', 'messages': []})}\n\n"
        yield f"data: {json.dumps({'id': task_id, 'status': 'completed', 'artifacts': [{'name': 'result', 'parts': [{'type': 'text', 'text': f'Streaming result from {vertical}'}]}]})}\n\n"

    return StreamingResponse(event_stream(), media_type="text/event-stream")


@router.get("/{vertical}/tasks/{task_id}")
async def get_task(vertical: str, task_id: str):
    task = _tasks.get(task_id)
    if not task or task.get("vertical") != vertical:
        raise HTTPException(status_code=404, detail="Task not found")
    return task


@router.post("/{vertical}/tasks/{task_id}/cancel")
async def cancel_task(vertical: str, task_id: str):
    task = _tasks.get(task_id)
    if not task or task.get("vertical") != vertical:
        raise HTTPException(status_code=404, detail="Task not found")
    task["status"] = "canceled"
    return task
