/**
 * MEOK AI LABS — MCP Server Integration Layer
 * 
 * Connects to MCP servers for compliance, governance, and domain-specific tools
 * 50+ MCP servers covering:
 * - Security: cloud-security, threat-intelligence, vulnerability-scanner, incident-response, red-team-ops, compliance-audit, data-classification, secure-comms, biometrics-ai, law-enforcement-ai
 * - Healthcare: healthcare-ai, thn-global
 * - Finance: financial-ai
 * - Gaming: gaming-ai
 * - Education: digital-human-library
 * - Governance: ai-governance, csoai-governance, policy-engine
 * - Industry: autonomous-vehicles-ai, maritime-ai, space-ai, smart-cities-ai, agriculture-ai, construction-ai, energy-ai, mining-ai, telecom-ai, supply-chain-ai
 * - Services: travel-hospitality-ai, sports-analytics-ai, media-advertising-ai, employment-ai, legal-tech-ai, insurance-ai, retail-ai, real-estate-ai
 * - Defense: dsrb-defence
 * - Legacy: cobol-bridge
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface MCPServerConfig {
  name: string;
  url: string;
  tools: string[];
  status: 'connected' | 'disconnected' | 'error';
  category: string;
  description: string;
}

interface MCPToolResult {
  tool: string;
  success: boolean;
  data?: unknown;
  error?: string;
}

const MCP_SERVERS: Record<string, { port: number; tools: string[]; category: string; description: string }> = {
  // Security & Compliance (ports 3100-3119)
  'gaming-ai': { port: 3100, tools: ['loot_box_compliance', 'matchmaking_fairness', 'content_moderation', 'generative_ai_gaming', 'coppa_gaming', 'esrb_classification', 'gambling_check'], category: 'security', description: 'CSOAI Gaming & Entertainment - loot box compliance, matchmaking AI fairness, COPPA, FTC, EU DSA, ESRB' },
  'digital-human-library': { port: 3101, tools: ['mentor_match', 'curriculum_align', 'session_plan', 'learning_path_gen'], category: 'education', description: 'Digital Human Library - K-12 professional mentoring network, curriculum alignment' },
  'healthcare-ai': { port: 3102, tools: ['fda_assessment', 'hipaa_assessment', 'clinical_safety', 'eu_mdr_check', 'medical_device_cert'], category: 'healthcare', description: 'CSOAI Healthcare - HIPAA, FDA AI/ML, EU MDR, clinical trial AI safety, medical device certification' },
  'financial-ai': { port: 3103, tools: ['sec_compliance', 'pci_dss_check', 'basel_iii_iv', 'mifid_ii', 'credit_scoring_ai', 'aml_kyc', 'algo_trading_compliance'], category: 'finance', description: 'CSOAI Financial - SEC, PCI DSS, Basel III/IV, MiFID II, EU AI Act credit scoring, algorithmic trading' },
  'ai-governance': { port: 3104, tools: ['governance_scan', 'risk_assessment', 'model_card_gen', 'bias_detection', 'eu_ai_act_check'], category: 'governance', description: 'CSOAI AI Governance - AI risk assessment, model cards, bias detection, EU AI Act alignment' },
  'cloud-security': { port: 3105, tools: ['cspm_scan', 'cwpp_scan', 'cloud_compliance', 'misconfig_detection', 'sec_posture_check'], category: 'security', description: 'CSOAI Cloud Security - Multi-cloud security posture, CSPM, CWPP, cloud compliance' },
  'threat-intelligence': { port: 3106, tools: ['threat_feed_enrichment', 'ioc_enrichment', 'mitre_attck_map', 'threat_actor_profile', 'campaign_analytics'], category: 'security', description: 'CSOAI Threat Intel - Real-time threat feeds, IOC enrichment, MITRE ATT&CK mapping' },
  'vulnerability-scanner': { port: 3107, tools: ['cve_scan', 'cvss_scoring', 'remediation_guidance', 'patch_management', 'risk_prioritization'], category: 'security', description: 'CSOAI Vuln Scanner - CVE scanning, CVSS scoring, remediation guidance, patch management' },
  'incident-response': { port: 3108, tools: ['soar_workflow', 'playbook_exec', 'alert_triage', 'forensic_analysis', 'containment_automation'], category: 'security', description: 'CSOAI Incident Response - SOAR workflows, playbook execution, alert triage, forensic analysis' },
  'red-team-ops': { port: 3109, tools: ['adversarial_testing', 'attack_simulation', 'purple_team_ops', 'penetration_testing', 'social_engineering'], category: 'security', description: 'CSOAI Red Team - Adversarial testing, attack simulation, purple team operations' },
  'compliance-audit': { port: 3110, tools: ['iso27001_audit', 'soc2_audit', 'nist_compliance', 'gdpr_audit', 'evidence_collection'], category: 'governance', description: 'CSOAI Compliance Audit - ISO 27001, SOC 2, NIST, GDPR auditing and evidence collection' },
  'data-classification': { port: 3111, tools: ['auto_discovery', 'sensitivity_label', 'dlp_policy_enforce', 'data_inventory', 'classification_audit'], category: 'security', description: 'CSOAI Data Classification - Automated data discovery, sensitivity labelling, DLP policy enforcement' },
  'secure-comms': { port: 3112, tools: ['e2e_encryption', 'secure_messaging', 'channel_mgmt', 'audit_logging', 'key_exchange'], category: 'security', description: 'CSOAI Secure Comms - E2E encrypted communications, secure messaging, channel management' },
  'biometrics-ai': { port: 3113, tools: ['facial_recognition_audit', 'emotion_detection_check', 'liveness_check', 'bipa_compliance', 'eu_ai_act_biometrics'], category: 'security', description: 'CSOAI Biometrics - facial recognition, emotion detection, EU AI Act prohibited/high-risk biometric AI, BIPA' },
  'law-enforcement-ai': { port: 3114, tools: ['policing_bias_check', 'recidivism_audit', 'eu_ai_act_law_enforcement', 'constitutional_rights', 'predictive_policing_audit'], category: 'security', description: 'CSOAI Law Enforcement - predictive policing, recidivism, EU AI Act law enforcement, constitutional rights' },
  'employment-ai': { port: 3115, tools: ['hiring_bias_check', 'eu_ai_act_employment', 'nyc_local_law_144', 'eeoc_compliance', 'workplace_surveillance_audit'], category: 'security', description: 'CSOAI Employment/HR - hiring AI bias, EU AI Act employment, NYC Local Law 144, EEOC compliance' },
  
  // Industry (ports 3120-3139)
  'autonomous-vehicles-ai': { port: 3120, tools: ['eu_ai_act_high_risk', 'unece_wp29_check', 'nhtsa_compliance', 'iso26262_safety', 'liability_framework'], category: 'industry', description: 'Autonomous Vehicles - EU AI Act high-risk, UNECE WP.29, NHTSA, ISO 26262, safety validation' },
  'maritime-ai': { port: 3121, tools: ['autonomous_vessel_check', 'port_ops_compliance', 'maritime_safety', 'emissions_monitoring', 'piracy_security'], category: 'industry', description: 'Maritime AI - autonomous vessels, port operations, maritime safety, emissions monitoring' },
  'space-ai': { port: 3122, tools: ['spacecraft_ai_check', 'satellite_constellation', 'debris_mgmt', 'launch_safety', 'dual_use_check'], category: 'industry', description: 'Space AI - autonomous spacecraft, satellite constellations, space debris management, launch safety' },
  'smart-cities-ai': { port: 3123, tools: ['traffic_mgmt_compliance', 'surveillance_audit', 'public_service_ai', 'digital_twin_check', 'citizen_privacy'], category: 'industry', description: 'Smart Cities - traffic management, surveillance, public services, digital twins, citizen privacy' },
  'agriculture-ai': { port: 3124, tools: ['precision_farming_check', 'crop_analytics_compliance', 'autonomous_equipment', 'food_safety_traceability', 'environmental_monitor'], category: 'industry', description: 'Agriculture AI - precision farming, crop analytics, autonomous farm equipment, food safety' },
  'construction-ai': { port: 3125, tools: ['bim_compliance', 'safety_monitoring', 'autonomous_equipment_check', 'structural_analysis', 'project_mgmt_ai'], category: 'industry', description: 'Construction AI - BIM, safety monitoring, autonomous equipment, structural analysis' },
  'energy-ai': { port: 3126, tools: ['grid_optimization_compliance', 'smart_metering', 'demand_response_check', 'renewable_forecasting', 'nerc_ferc_check'], category: 'industry', description: 'Energy AI - grid optimization, smart metering, demand response, NERC/FERC regulations' },
  'mining-ai': { port: 3127, tools: ['autonomous_haulage', 'safety_monitoring', 'environmental_compliance', 'resource_estimation', 'indigenous_rights'], category: 'industry', description: 'Mining AI - autonomous haulage, safety monitoring, environmental compliance, indigenous rights' },
  'telecom-ai': { port: 3128, tools: ['network_optimization_audit', 'customer_analytics', 'content_filtering', 'lawful_intercept', 'spectrum_mgmt'], category: 'industry', description: 'Telecom AI - network optimization, customer analytics, content filtering, lawful intercept' },
  'supply-chain-ai': { port: 3129, tools: ['demand_forecasting', 'autonomous_warehousing', 'route_optimization', 'trade_compliance', 'forced_labor_screening'], category: 'industry', description: 'Supply Chain AI - demand forecasting, autonomous warehousing, route optimization, forced labor screening' },
  
  // Services (ports 3140-3149)
  'travel-hospitality-ai': { port: 3140, tools: ['dynamic_pricing_compliance', 'guest_profiling_audit', 'automated_border_control', 'loyalty_manipulation_check', 'accessibility_audit'], category: 'services', description: 'Travel/Hospitality AI - dynamic pricing, guest profiling, automated border control, accessibility' },
  'sports-analytics-ai': { port: 3141, tools: ['performance_analytics_check', 'betting_integrity', 'athlete_biometrics', 'fan_engagement_audit', 'anti_doping_check'], category: 'services', description: 'Sports AI - performance analytics, betting/integrity, athlete biometrics, anti-doping' },
  'media-advertising-ai': { port: 3142, tools: ['programmatic_ads_check', 'deepfake_detection', 'content_recommendation', 'political_ads_audit', 'dsa_platform_check'], category: 'services', description: 'Media/Advertising AI - programmatic ads, deepfakes, content recommendation, political ads, DSA' },
  'legal-tech-ai': { port: 3143, tools: ['contract_analysis', 'e_discovery', 'legal_research', 'upml_check', 'unauthorized_practice_audit'], category: 'services', description: 'Legal Tech AI - contract analysis, e-discovery, legal research, unauthorized practice of law' },
  'insurance-ai': { port: 3144, tools: ['underwriting_compliance', 'claims_ai_check', 'pricing_fairness', 'anti_discrimination', 'actuarial_standards'], category: 'services', description: 'Insurance AI - underwriting, claims, pricing fairness, anti-discrimination, EU AI Act, actuarial' },
  'retail-ai': { port: 3145, tools: ['dynamic_pricing_check', 'recommendation_audit', 'customer_profiling', 'inventory_ai_check', 'consumer_protection'], category: 'services', description: 'Retail AI - dynamic pricing, recommendation engines, customer profiling, inventory AI' },
  'real-estate-ai': { port: 3146, tools: ['avm_compliance', 'tenant_screening', 'fair_housing_check', 'advertising_audit', 'smart_building_check'], category: 'services', description: 'Real Estate AI - automated valuation, tenant screening, fair housing, smart building management' },
  
  // Governance & Defense (ports 3150-3159)
  'csoai-governance': { port: 3150, tools: ['framework_crosswalk', 'casa_certification', 'partnership_charter', 'sector_compliance', 'risk_assessment_v2'], category: 'governance', description: 'CSOAI Governance Suite - 25 international framework crosswalks, CASA certification, sector compliance' },
  'policy-engine': { port: 3151, tools: ['policy_generation', 'policy_enforcement', 'compliance_monitoring', 'policy_audit', 'rule_engine'], category: 'governance', description: 'CSOAI Policy Engine - Automated policy generation, enforcement, and compliance monitoring' },
  'dsrb-defence': { port: 3152, tools: ['intel_briefing', 'threat_assessment', 'capability_analysis', 'research_analysis'], category: 'defense', description: 'DSRB Defence - Defence Science Research Board analysis, intelligence briefings' },
  
  // Pharma & Research (ports 3160-3169)
  'thn-global': { port: 3160, tools: ['drug_discovery', 'patent_landscape', 'ip_analysis', 'regulatory_intel', 'market_intelligence'], category: 'healthcare', description: 'THN Global - Pharma AI IP engine for drug discovery and patent landscape analysis' },
  
  // Legacy Systems (ports 3170+)
  'cobol-bridge': { port: 3170, tools: ['cics_integration', 'ims_mainframe', 'copybook_parsing', 'jcl_scanning', 'vsam_mapping', 'ai_governance_api'], category: 'legacy', description: 'COBOL-to-AI Bridge - Legacy enterprise integration for CICS/IMS mainframes, COBOL copybook parsing' },

  // Emerging Tech (ports 3180-3199)
  'quantum-computing': { port: 3180, tools: ['quantum_circuit_check', 'postquantum_crypto', 'quantum_key_dist', 'qkd_compliance', 'quantum_ready_audit'], category: 'emerging', description: 'Quantum Computing - Post-quantum cryptography, QKD, quantum-ready security audit' },
  'robotics-ai': { port: 3181, tools: ['ros_compliance', 'iso13482_safety', 'human_robot_interaction', 'collaborative_robot_audit', 'safety_function_check'], category: 'emerging', description: 'Robotics AI - ROS systems, collaborative robots, ISO 13482 safety' },
  'aerospace-ai': { port: 3182, tools: ['do178c_compliance', 'aircraft_system_audit', 'autonomous_flight_check', 'space_system_verification', 'faa_compliance'], category: 'emerging', description: 'Aerospace AI - DO-178C, FAA/EASA compliance, autonomous flight systems' },
  'nuclear-ai': { port: 3183, tools: ['nuclear_regulatory_check', 'ieee603_compliance', 'safety_instrumented_system', 'nuclear_material_accounting', 'iaea_safeguards'], category: 'emerging', description: 'Nuclear AI - NRC compliance, IEEE 603, IAEA safeguards, nuclear safety' },

  // Additional Healthcare & Pharma (ports 3200-3209)
  'clinical-trials-ai': { port: 3200, tools: ['ictp_compliance', 'protocol_generation', 'patient_recruitment_ai', 'adverse_event_check', 'trialtrove_integration'], category: 'healthcare', description: 'Clinical Trials AI - ICH GCP, protocol generation, patient recruitment, adverse events' },
  'medical-imaging-ai': { port: 3201, tools: ['aapm_compliance', ' image_quality_check', 'cad_audit', 'diagnostic_imaging_ai', 'mammography_ai_check'], category: 'healthcare', description: 'Medical Imaging AI - AAPM standards, diagnostic imaging, CAD systems, mammography AI' },
  'telehealth-ai': { port: 3202, tools: ['telehealth_licensing', 'state_medical_board', 'cross_state_compliance', 'hipaa_telehealth', 'telemedicine_audit'], category: 'healthcare', description: 'Telehealth AI - State licensing, cross-state practice, HIPAA telehealth compliance' },

  // Additional Finance (ports 3210-3219)
  'crypto-assets': { port: 3210, tools: ['mifir_compliance', 'crypto_regulatory_check', 'stablecoin_audit', 'defi_compliance', 'travel_rule_check'], category: 'finance', description: 'Crypto Assets - MiFIR, crypto regulation, stablecoin audit, DeFi compliance' },
  'insurtech-ai': { port: 3211, tools: ['rate_regulation', 'actuarial_audit', 'claims_automation_check', 'uberexp_audit', 'state_approval_workflow'], category: 'services', description: 'Insurtech AI - Rate regulation, actuarial standards, claims automation, UBER expo' },

  // Government & Public Sector (ports 3220-3229)
  'gov-cloud': { port: 3220, tools: ['fedramp_compliance', 'fisabba_compliance', 'cjitc_assessment', 'gov_data_sharing', 'national_security_check'], category: 'government', description: 'Government Cloud - FedRAMP, FISMA, CJITC, government data sharing frameworks' },
  'election-ai': { port: 3221, tools: ['election_security_check', 'voting_system_audit', 'campaign_compliance', 'lobbying_disclosure', 'ethics_oversight_check'], category: 'government', description: 'Election AI - Election security, voting systems, campaign finance, lobbying disclosure' },
  'customs-border': { port: 3222, tools: ['customs_automation', 'trade_compliance', 'cbt_pilot_check', 'advance_data_requirements', 'duty_calculation_ai'], category: 'government', description: 'Customs & Border - CBP, trade compliance, automated customs, duty calculation' },
};

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const category = searchParams.get('category');
  
  try {
    switch (action) {
      case 'servers': {
        const servers = await getMCPServerStatus();
        if (category) {
          const filtered = servers.filter(s => s.category === category);
          return NextResponse.json({ servers: filtered });
        }
        return NextResponse.json({ servers });
      }
      
      case 'categories': {
        const categories = [...new Set(Object.values(MCP_SERVERS).map(s => s.category))];
        return NextResponse.json({ categories });
      }
      
      case 'tools': {
        const serverName = searchParams.get('server');
        if (!serverName) {
          return NextResponse.json({ error: 'Missing server name' }, { status: 400 });
        }
        const tools = await getServerTools(serverName);
        return NextResponse.json({ server: serverName, tools });
      }
      
      default: {
        const serversByCategory = Object.entries(MCP_SERVERS).reduce((acc, [name, config]) => {
          if (!acc[config.category]) acc[config.category] = [];
          acc[config.category].push(name);
          return acc;
        }, {} as Record<string, string[]>);
        
        return NextResponse.json({
          availableServers: Object.keys(MCP_SERVERS),
          totalTools: Object.values(MCP_SERVERS).reduce((sum, s) => sum + s.tools.length, 0),
          serversByCategory,
        });
      }
    }
  } catch (error) {
    console.error('[mcp/servers] error:', error);
    return NextResponse.json({ error: 'MCP server error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { server, tool, arguments: args } = body;
    
    if (!server || !tool) {
      return NextResponse.json({ error: 'Missing server or tool' }, { status: 400 });
    }
    
    const result = await executeMCPTool(server, tool, args || {});
    return NextResponse.json(result);
  } catch (error) {
    console.error('[mcp/execute] error:', error);
    return NextResponse.json({ error: 'Tool execution failed' }, { status: 500 });
  }
}

async function getMCPServerStatus(): Promise<MCPServerConfig[]> {
  const servers: MCPServerConfig[] = [];
  
  for (const [name, config] of Object.entries(MCP_SERVERS)) {
    try {
      const res = await fetch(`http://localhost:${config.port}/health`, { signal: AbortSignal.timeout(2000) });
      servers.push({
        name,
        url: `localhost:${config.port}`,
        tools: config.tools,
        status: res.ok ? 'connected' : 'error',
        category: config.category,
        description: config.description,
      });
    } catch {
      servers.push({
        name,
        url: `localhost:${config.port}`,
        tools: config.tools,
        status: 'disconnected',
        category: config.category,
        description: config.description,
      });
    }
  }
  
  return servers;
}

async function getServerTools(serverName: string): Promise<string[]> {
  const config = MCP_SERVERS[serverName];
  if (!config) {
    return [];
  }
  return config.tools;
}

async function executeMCPTool(server: string, tool: string, args: Record<string, unknown>): Promise<MCPToolResult> {
  const config = MCP_SERVERS[server];
  if (!config) {
    return { tool, success: false, error: `Unknown server: ${server}` };
  }
  
  try {
    const res = await fetch(`http://localhost:${config.port}/mcp`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: `req_${Date.now()}`,
        method: 'tools/call',
        params: { name: tool, arguments: args },
      }),
      signal: AbortSignal.timeout(30000),
    });
    
    if (!res.ok) {
      return { tool, success: false, error: `HTTP ${res.status}` };
    }
    
    const data = await res.json();
    return { tool, success: true, data: data.result };
  } catch (error) {
    return { tool, success: false, error: String(error) };
  }
}

async function registerMCPServer(name: string, url: string, tools: string[]): Promise<void> {
  const key = `meok:mcp:server:${name}`;
  await kv.set(key, { name, url, tools, registeredAt: new Date().toISOString() });
}

async function listRegisteredServers(): Promise<Array<{ name: string; url: string; tools: string[] }>> {
  const servers = [];
  for (const name of Object.keys(MCP_SERVERS)) {
    const key = `meok:mcp:server:${name}`;
    const config = await kv.get(key);
    if (config) {
      servers.push(config as { name: string; url: string; tools: string[] });
    }
  }
  return servers;
}