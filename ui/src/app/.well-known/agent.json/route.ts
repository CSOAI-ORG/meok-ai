import { NextResponse } from "next/server";

// A2A agent card — the machine-readable front door for agent discovery.
const CARD = {
  name: "MEOK AI Labs — Sovereign AI OS & Compliance Agent",
  description:
    "MEOK builds the sovereign AI OS (meok.ai) and a 294+-server MCP compliance fleet (EU AI Act, DORA, NIS2, CRA, GDPR, ISO 42001). Audits emit HMAC + Ed25519 signed attestations with public verify URLs.",
  url: "https://meok.ai",
  provider: { organization: "CSOAI LTD (UK Companies House 16939677)", url: "https://meok.ai" },
  version: "1.0.0",
  capabilities: { streaming: false, pushNotifications: false },
  defaultInputModes: ["text"],
  defaultOutputModes: ["text"],
  skills: [
    { id: "eu-ai-act-audit", name: "EU AI Act compliance audit", description: "Risk classification + article-by-article audit with signed attestation. pip install eu-ai-act-compliance-mcp" },
    { id: "attestation-verify", name: "Verify a signed attestation", description: "Offline Ed25519 verification — pubkey at https://www.proofof.ai/pubkey" },
    { id: "compliance-catalogue", name: "Compliance MCP catalogue", description: "294+ servers in the official MCP Registry under io.github.CSOAI-ORG" },
  ],
  endpoints: { catalogue: "https://www.proofof.ai", verify: "https://www.proofof.ai/verify", signup: "https://www.proofof.ai/signup" },
};

export async function GET() {
  return NextResponse.json(CARD, { headers: { "Access-Control-Allow-Origin": "*", "Cache-Control": "public, max-age=3600" } });
}
