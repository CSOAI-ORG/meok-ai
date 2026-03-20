"""
Tool registry — aggregates all tool modules and provides unified dispatch.
"""

from datetime import datetime
from typing import Dict, Any

from meok.mcp.state import ServiceState

from meok.mcp.tools.neural import NEURAL_TOOLS, handle_neural_tool
from meok.mcp.tools.memory import MEMORY_TOOLS, handle_memory_tool
from meok.mcp.tools.monitoring import MONITORING_TOOLS, handle_monitoring_tool
from meok.mcp.tools.agents import AGENT_TOOLS, handle_agent_tool
from meok.mcp.tools.consciousness import CONSCIOUSNESS_TOOLS, handle_consciousness_tool
from meok.mcp.tools.system import SYSTEM_TOOLS, handle_system_tool
from meok.mcp.tools.orion import ORION_TOOLS, handle_orion_tool
from meok.mcp.tools.coordination import COORDINATION_TOOLS, handle_coordination_tool
from meok.mcp.tools.heartbeat import HEARTBEAT_TOOLS, handle_heartbeat_tool
from meok.mcp.tools.creativity import CREATIVITY_TOOLS, handle_creativity_tool
from meok.mcp.tools.governance import GOVERNANCE_TOOLS, handle_governance_tool
from meok.mcp.tools.activation import ACTIVATION_TOOLS, handle_activation_tool
from meok.mcp.tools.learning import LEARNING_TOOLS, handle_learning_tool
from meok.mcp.tools.care_metrics import CARE_METRICS_TOOLS, handle_care_metrics_tool
from meok.mcp.tools.compliance import COMPLIANCE_TOOLS, handle_compliance_tool
from meok.mcp.tools.sustainability import SUSTAINABILITY_TOOLS, handle_sustainability_tool
from meok.mcp.tools.gaming import GAMING_TOOLS, handle_gaming_tool
from meok.mcp.tools.code_interpreter import CODE_INTERPRETER_TOOLS, handle_code_interpreter_tool
from meok.mcp.tools.command_interpreter import COMMAND_INTERPRETER_TOOLS, handle_command_interpreter_tool
from meok.mcp.tools.family_guardian import FAMILY_GUARDIAN_TOOLS, handle_family_guardian
from meok.mcp.tools.intelligence import INTELLIGENCE_TOOLS, handle_intelligence
from meok.mcp.tools.sovereign import SOVEREIGN_TOOLS, handle_sovereign
from meok.mcp.tools.character_emergence import CHARACTER_EMERGENCE_TOOLS, handle_character_emergence_tool
from meok.mcp.tools.mirror_mode import MIRROR_MODE_TOOLS, handle_mirror_mode
from meok.mcp.tools.soul_vault import SOUL_VAULT_TOOLS, handle_soul_vault
from meok.mcp.tools.voice_guardian import VOICE_GUARDIAN_TOOLS, handle_voice_guardian
from meok.mcp.tools.osint import OSINT_TOOLS, handle_osint_tool
from meok.mcp.tools.care_shield import CARE_SHIELD_TOOLS, handle_care_shield
from meok.mcp.tools.notifications import NOTIFICATION_TOOLS, handle_notifications_tool

# Combined tool list — order matches the original monolithic server
ALL_TOOLS = (
    NEURAL_TOOLS
    + MEMORY_TOOLS
    + MONITORING_TOOLS
    + AGENT_TOOLS
    + CONSCIOUSNESS_TOOLS
    + SYSTEM_TOOLS
    + ORION_TOOLS
    + COORDINATION_TOOLS
    + HEARTBEAT_TOOLS
    + CREATIVITY_TOOLS
    + GOVERNANCE_TOOLS
    + ACTIVATION_TOOLS
    + LEARNING_TOOLS
    + CARE_METRICS_TOOLS
    + COMPLIANCE_TOOLS        # Phase 4.6/4.7: EU AI Act + GDPR + BFT confidence + anti-sycophancy
    + SUSTAINABILITY_TOOLS    # Phase 4.13: care-aligned business model
    + GAMING_TOOLS            # Gaming companion — session tracking + entity growth
    + CODE_INTERPRETER_TOOLS  # Sandboxed Python execution (MEOK.AI Architecture Blueprint)
    + COMMAND_INTERPRETER_TOOLS  # Tiered shell execution (4-level safety hierarchy)
    + FAMILY_GUARDIAN_TOOLS   # Care-based child safety (GDPR-K, COPPA, UK Online Safety Act)
    + INTELLIGENCE_TOOLS      # Knowledge graph, SmartRouter, voice pipeline, product catalog
    + SOVEREIGN_TOOLS         # 7-lifecycle sovereign core: perceive/think/route/act/remember/evolve
    + CHARACTER_EMERGENCE_TOOLS  # 6-stage companion lifecycle: Egg→Cracking→Hatching→Growing→Mature→Full
    + MIRROR_MODE_TOOLS          # Sovereign OSINT self-investigation — viral launch feature
    + SOUL_VAULT_TOOLS           # Encrypted character memory + duress wipe (GrapheneOS-inspired)
    + VOICE_GUARDIAN_TOOLS       # Voice stress pipeline: audio → prosodic features → Family Guardian
    + OSINT_TOOLS                # Phase L: 7-collector OSINT layer (Ignorant, Subfinder, Gitleaks, etc.)
    + CARE_SHIELD_TOOLS          # Phase L: always-on sovereign monitoring
    + NOTIFICATION_TOOLS         # Phase L: alert delivery (WhatsApp, Web Push, Email)
)

# Build name -> handler lookup from each module's tool list
_TOOL_NAME_TO_HANDLER: Dict[str, Any] = {}

for _tool in NEURAL_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_neural_tool
for _tool in MEMORY_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_memory_tool
for _tool in MONITORING_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_monitoring_tool
for _tool in AGENT_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_agent_tool
for _tool in CONSCIOUSNESS_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_consciousness_tool
for _tool in SYSTEM_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_system_tool
for _tool in ORION_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_orion_tool
for _tool in COORDINATION_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_coordination_tool
for _tool in HEARTBEAT_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_heartbeat_tool
for _tool in CREATIVITY_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_creativity_tool
for _tool in GOVERNANCE_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_governance_tool
for _tool in ACTIVATION_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_activation_tool
for _tool in LEARNING_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_learning_tool
for _tool in CARE_METRICS_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_care_metrics_tool
for _tool in COMPLIANCE_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_compliance_tool
for _tool in SUSTAINABILITY_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_sustainability_tool
for _tool in GAMING_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_gaming_tool
for _tool in CODE_INTERPRETER_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_code_interpreter_tool
for _tool in COMMAND_INTERPRETER_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_command_interpreter_tool
for _tool in FAMILY_GUARDIAN_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_family_guardian
for _tool in INTELLIGENCE_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_intelligence
for _tool in SOVEREIGN_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_sovereign
for _tool in CHARACTER_EMERGENCE_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_character_emergence_tool
for _tool in MIRROR_MODE_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_mirror_mode
for _tool in SOUL_VAULT_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_soul_vault
for _tool in VOICE_GUARDIAN_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_voice_guardian
for _tool in OSINT_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_osint_tool
for _tool in CARE_SHIELD_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_care_shield
for _tool in NOTIFICATION_TOOLS:
    _TOOL_NAME_TO_HANDLER[_tool["name"]] = handle_notifications_tool

# Also expose as a dict for external inspection
TOOL_HANDLERS = {
    "neural": handle_neural_tool,
    "memory": handle_memory_tool,
    "monitoring": handle_monitoring_tool,
    "agents": handle_agent_tool,
    "consciousness": handle_consciousness_tool,
    "system": handle_system_tool,
    "orion": handle_orion_tool,
    "coordination": handle_coordination_tool,
    "heartbeat": handle_heartbeat_tool,
    "creativity": handle_creativity_tool,
    "governance": handle_governance_tool,
    "activation": handle_activation_tool,
    "learning": handle_learning_tool,
    "care_metrics": handle_care_metrics_tool,
    "compliance": handle_compliance_tool,
    "sustainability": handle_sustainability_tool,
    "gaming": handle_gaming_tool,
    "code_interpreter": handle_code_interpreter_tool,
    "command_interpreter": handle_command_interpreter_tool,
    "family_guardian": handle_family_guardian,
    "intelligence": handle_intelligence,
    "character_emergence": handle_character_emergence_tool,
}


async def execute_tool(name: str, arguments: Dict[str, Any], state: ServiceState, tenant_id: str = "default") -> Dict[str, Any]:
    """Execute an MCP tool by name, routing to the appropriate handler."""
    start_time = datetime.now()

    # Inject tenant context for handlers that need it
    arguments["_tenant_id"] = tenant_id

    try:
        handler = _TOOL_NAME_TO_HANDLER.get(name)
        if handler is None:
            return {"error": f"Unknown tool: {name}"}
        return await handler(name, arguments, state)
    except Exception as e:
        import traceback
        return {"error": str(e), "traceback": traceback.format_exc()}
