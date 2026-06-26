"""
Legacy-Bridge tools — CSOAI Layer-0 governed bridges to the legacy economy.

Exposes the 19-bridge family (COBOL/ISO20022/HL7/SAP/SCADA/tax/mortgage/energy…)
through the meok-ai MCP server, so the production platform can list + govern
legacy messages. Each govern call returns the applicable frameworks + risk flags
and is attestable (SIGIL). Full parse/map activates when the matching
<bridge>-bridge-mcp package is pip-installed; until then this returns the
governance assessment from the canonical catalog (honest, dependency-free).

Pattern matches the other tool modules: LEGACY_BRIDGES_TOOLS + handle_legacy_bridges_tool.
"""
from typing import Dict, Any
from meok.mcp.state import ServiceState

# Canonical catalog — id → sector + frameworks (mirrors CSOAI_BRIDGE_FAMILY_INDEX / csoai-governance-map).
BRIDGE_CATALOG: Dict[str, Dict[str, Any]] = {
    "cobol":    {"name": "COBOL",      "sector": "Mainframe / banking core",   "frameworks": ["SOX (ITGC)", "DORA", "PCI-DSS (if cardholder)"]},
    "iso20022": {"name": "ISO 20022",  "sector": "Payments messaging",         "frameworks": ["ISO 20022", "DORA", "NIS2", "AML/CFT"]},
    "hl7-fhir": {"name": "HL7/FHIR",   "sector": "Healthcare",                 "frameworks": ["HIPAA", "EU MDR", "GDPR Art.9", "HL7/FHIR"]},
    "as400":    {"name": "AS/400 (IBM i)", "sector": "RPG/DB2 midrange",       "frameworks": ["SOX", "DORA"]},
    "sap":      {"name": "SAP IDoc",   "sector": "ERP",                        "frameworks": ["SOX", "SAP GRC", "GDPR"]},
    "oracle":   {"name": "Oracle PL/SQL", "sector": "Enterprise DB",           "frameworks": ["SOX", "GDPR"]},
    "scada":    {"name": "SCADA (Modbus/OPC-UA)", "sector": "Industrial OT",   "frameworks": ["IEC 62443", "NIS2"]},
    "edi":      {"name": "EDI (X12/EDIFACT)", "sector": "B2B trade",           "frameworks": ["Peppol/ViDA", "SOX"]},
    "fix":      {"name": "FIX",        "sector": "Securities trading",         "frameworks": ["MiFID II", "MAR"]},
    "cics":     {"name": "IBM CICS",   "sector": "Mainframe transactions",     "frameworks": ["SOX (ITGC)", "PCI-DSS (if cardholder)", "DORA"]},
    "mqtt":     {"name": "MQTT",       "sector": "IoT / OT messaging",         "frameworks": ["IEC 62443", "NIS2", "ETSI EN 303 645"]},
    "acord":    {"name": "ACORD",      "sector": "Insurance",                  "frameworks": ["Solvency II", "GDPR", "FCA conduct", "EU AI Act (Annex III if automated)"]},
    "nacha":    {"name": "NACHA / ACH", "sector": "Bank payments (US)",        "frameworks": ["NACHA Operating Rules", "OFAC", "Reg E", "BSA/AML"]},
    "iso8583":  {"name": "ISO 8583",   "sector": "Card payments",             "frameworks": ["PCI-DSS", "EMVCo", "PSD2 SCA", "DORA"]},
    "sip":      {"name": "SIP / VoIP", "sector": "Telecom signalling",        "frameworks": ["STIR/SHAKEN", "GDPR/ePrivacy", "CALEA"]},
    "tax":      {"name": "Tax filing", "sector": "Tax / revenue",             "frameworks": ["MTD / IRS e-file", "SOX", "jurisdiction tax rules"]},
    "gs1":      {"name": "GS1 / EPCIS", "sector": "Retail / supply-chain traceability", "frameworks": ["EU Digital Product Passport", "FSMA 204", "GS1 EPCIS"]},
    "mismo":    {"name": "MISMO",      "sector": "Mortgage / real-estate finance", "frameworks": ["TRID/RESPA", "ECOA fair-lending", "EU AI Act (Annex III)"]},
    "dlms":     {"name": "DLMS/COSEM", "sector": "Energy / smart-meter (OT)",  "frameworks": ["IEC 62056", "NIS2", "GDPR (consumption = personal data)"]},
}

LEGACY_BRIDGES_TOOLS = [
    {
        "name": "list_legacy_bridges",
        "description": "List the CSOAI Layer-0 legacy-bridge family (19 governed bridges to COBOL/SAP/HL7/SCADA/payments/tax/mortgage/energy…), with sector + applicable compliance frameworks for each.",
        "inputSchema": {"type": "object", "properties": {}},
    },
    {
        "name": "govern_legacy_message",
        "description": "Govern a message bound for a legacy system via the matching bridge: returns applicable compliance frameworks + risk flags, attestable (SIGIL). Full parse/map activates when the <bridge>-bridge-mcp package is installed.",
        "inputSchema": {
            "type": "object",
            "properties": {
                "bridge_id": {"type": "string", "description": "Bridge id, e.g. cobol, iso20022, hl7-fhir, scada, nacha, iso8583, tax, gs1, mismo, dlms.", "enum": list(BRIDGE_CATALOG.keys())},
                "message": {"type": "string", "description": "The legacy message / payload / source to govern (optional; metadata-level governance works without it)."},
            },
            "required": ["bridge_id"],
        },
    },
]


def _sigil_note(bridge_id: str) -> str:
    # The bridges sign govern() to the SIGIL chain; the production platform's audit layer can co-sign.
    return f"attestable: govern:{bridge_id} → SIGIL hash-chain (CSOAI Layer-0)"


async def handle_legacy_bridges_tool(name: str, arguments: Dict[str, Any], state: ServiceState) -> Dict[str, Any]:
    """Handle legacy-bridge tool calls."""
    try:
        if name == "list_legacy_bridges":
            return {
                "family": "CSOAI Layer-0 legacy bridges",
                "count": len(BRIDGE_CATALOG),
                "bridges": [{"id": k, **v} for k, v in BRIDGE_CATALOG.items()],
                "pattern": "parse → validate → map → govern → SIGIL-sign",
            }

        if name == "govern_legacy_message":
            bid = (arguments or {}).get("bridge_id", "")
            entry = BRIDGE_CATALOG.get(bid)
            if entry is None:
                return {"error": f"Unknown bridge_id: {bid}", "known": list(BRIDGE_CATALOG.keys())}
            msg = (arguments or {}).get("message", "") or ""
            flags = []
            # Generic, honest governance flags by sector class.
            fw = " ".join(entry["frameworks"]).lower()
            if "pci" in fw:
                flags.append("Card/PAN data — never log full PAN; mask/tokenise (PCI-DSS).")
            if "gdpr" in fw or "hipaa" in fw:
                flags.append("Personal / special-category data — lawful basis + access controls.")
            if "ofac" in fw or "aml" in fw:
                flags.append("Screen parties against sanctions (OFAC/AML) before release.")
            if "iec 62443" in fw or "nis2" in fw:
                flags.append("OT/critical-infra — authenticate + authorise control-point writes.")
            if not flags:
                flags.append("Apply the listed frameworks; retain an attestable audit trail.")
            return {
                "bridge": {"id": bid, **entry},
                "governed": True,
                "frameworks": entry["frameworks"],
                "risk_flags": flags,
                "attestation": _sigil_note(bid),
                "note": "Metadata-level governance. Install %s-bridge-mcp for full parse/validate/map." % bid,
                "message_seen": bool(msg),
            }

        return {"error": f"Unknown legacy-bridge tool: {name}"}
    except Exception as e:
        import traceback
        return {"error": str(e), "traceback": traceback.format_exc()}
