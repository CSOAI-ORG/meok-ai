/**
 * MEOK AI LABS — MCP Dashboard API
 * 
 * Dashboard data aggregation for MCP Control Center
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';

const MCP_SERVERS: Record<string, { port: number; tools: string[]; category: string; description: string }> = {
  'gaming-ai': { port: 3100, tools: ['loot_box_compliance', 'matchmaking_fairness', 'content_moderation'], category: 'security', description: 'CSOAI Gaming & Entertainment' },
  'digital-human-library': { port: 3101, tools: ['mentor_match', 'curriculum_align'], category: 'education', description: 'Digital Human Library' },
  'healthcare-ai': { port: 3102, tools: ['fda_assessment', 'hipaa_assessment', 'clinical_safety'], category: 'healthcare', description: 'CSOAI Healthcare' },
  'financial-ai': { port: 3103, tools: ['sec_compliance', 'aml_kyc', 'algo_trading_compliance'], category: 'finance', description: 'CSOAI Financial' },
  'ai-governance': { port: 3104, tools: ['governance_scan', 'risk_assessment', 'bias_detection'], category: 'governance', description: 'CSOAI AI Governance' },
  'cloud-security': { port: 3105, tools: ['cspm_scan', 'cwpp_scan', 'cloud_compliance'], category: 'security', description: 'CSOAI Cloud Security' },
  'threat-intelligence': { port: 3106, tools: ['ioc_enrichment', 'mitre_attck_map', 'threat_feed_enrichment'], category: 'security', description: 'CSOAI Threat Intel' },
  'vulnerability-scanner': { port: 3107, tools: ['cve_scan', 'cvss_scoring', 'remediation_guidance'], category: 'security', description: 'CSOAI Vuln Scanner' },
  'incident-response': { port: 3108, tools: ['soar_workflow', 'alert_triage', 'forensic_analysis'], category: 'security', description: 'CSOAI Incident Response' },
  'red-team-ops': { port: 3109, tools: ['attack_simulation', 'purple_team_ops', 'penetration_testing'], category: 'security', description: 'CSOAI Red Team' },
  'compliance-audit': { port: 3110, tools: ['iso27001_audit', 'soc2_audit', 'gdpr_audit'], category: 'governance', description: 'CSOAI Compliance Audit' },
  'data-classification': { port: 3111, tools: ['auto_discovery', 'sensitivity_label', 'dlp_policy_enforce'], category: 'security', description: 'CSOAI Data Classification' },
  'secure-comms': { port: 3112, tools: ['e2e_encryption', 'secure_messaging', 'channel_mgmt'], category: 'security', description: 'CSOAI Secure Comms' },
  'biometrics-ai': { port: 3113, tools: ['facial_recognition_audit', 'liveness_check', 'bipa_compliance'], category: 'security', description: 'CSOAI Biometrics' },
  'law-enforcement-ai': { port: 3114, tools: ['policing_bias_check', 'recidivism_audit'], category: 'security', description: 'CSOAI Law Enforcement' },
  'employment-ai': { port: 3115, tools: ['hiring_bias_check', 'eeoc_compliance', 'workplace_surveillance_audit'], category: 'security', description: 'CSOAI Employment/HR' },
  'autonomous-vehicles-ai': { port: 3120, tools: ['eu_ai_act_high_risk', 'unece_wp29_check', 'nhtsa_compliance'], category: 'industry', description: 'Autonomous Vehicles' },
  'maritime-ai': { port: 3121, tools: ['autonomous_vessel_check', 'port_ops_compliance'], category: 'industry', description: 'Maritime AI' },
  'space-ai': { port: 3122, tools: ['spacecraft_ai_check', 'satellite_constellation'], category: 'industry', description: 'Space AI' },
  'smart-cities-ai': { port: 3123, tools: ['traffic_mgmt_compliance', 'surveillance_audit'], category: 'industry', description: 'Smart Cities' },
  'agriculture-ai': { port: 3124, tools: ['precision_farming_check', 'crop_analytics_compliance'], category: 'industry', description: 'Agriculture AI' },
  'construction-ai': { port: 3125, tools: ['bim_compliance', 'safety_monitoring'], category: 'industry', description: 'Construction AI' },
  'energy-ai': { port: 3126, tools: ['grid_optimization_compliance', 'smart_metering'], category: 'industry', description: 'Energy AI' },
  'mining-ai': { port: 3127, tools: ['autonomous_haulage', 'safety_monitoring'], category: 'industry', description: 'Mining AI' },
  'telecom-ai': { port: 3128, tools: ['network_optimization_audit', 'customer_analytics'], category: 'industry', description: 'Telecom AI' },
  'supply-chain-ai': { port: 3129, tools: ['demand_forecasting', 'route_optimization'], category: 'industry', description: 'Supply Chain AI' },
  'travel-hospitality-ai': { port: 3140, tools: ['dynamic_pricing_compliance', 'guest_profiling_audit'], category: 'services', description: 'Travel/Hospitality AI' },
  'sports-analytics-ai': { port: 3141, tools: ['performance_analytics_check', 'betting_integrity'], category: 'services', description: 'Sports AI' },
  'media-advertising-ai': { port: 3142, tools: ['programmatic_ads_check', 'deepfake_detection'], category: 'services', description: 'Media/Advertising AI' },
  'legal-tech-ai': { port: 3143, tools: ['contract_analysis', 'e_discovery'], category: 'services', description: 'Legal Tech AI' },
  'insurance-ai': { port: 3144, tools: ['underwriting_compliance', 'claims_ai_check'], category: 'services', description: 'Insurance AI' },
  'retail-ai': { port: 3145, tools: ['dynamic_pricing_check', 'recommendation_audit'], category: 'services', description: 'Retail AI' },
  'real-estate-ai': { port: 3146, tools: ['avm_compliance', 'tenant_screening'], category: 'services', description: 'Real Estate AI' },
  'csoai-governance': { port: 3150, tools: ['framework_crosswalk', 'casa_certification'], category: 'governance', description: 'CSOAI Governance Suite' },
  'policy-engine': { port: 3151, tools: ['policy_generation', 'policy_enforcement'], category: 'governance', description: 'CSOAI Policy Engine' },
  'dsrb-defence': { port: 3152, tools: ['intel_briefing', 'threat_assessment'], category: 'defense', description: 'DSRB Defence' },
  'thn-global': { port: 3160, tools: ['drug_discovery', 'patent_landscape'], category: 'healthcare', description: 'THN Global' },
  'cobol-bridge': { port: 3170, tools: ['cics_integration', 'copybook_parsing'], category: 'legacy', description: 'COBOL-to-AI Bridge' },
};

const CROSS_SERVER_WORKFLOWS = [
  {
    name: 'healthcare_compliance_full',
    description: 'Full healthcare AI compliance assessment',
    servers: ['healthcare-ai', 'ai-governance', 'compliance-audit'],
    steps: [
      { server: 'healthcare-ai', tool: 'fda_assessment', description: 'FDA device classification' },
      { server: 'healthcare-ai', tool: 'hipaa_assessment', description: 'HIPAA privacy assessment' },
      { server: 'ai-governance', tool: 'eu_ai_act_check', description: 'EU AI Act compliance' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Evidence collection' },
    ],
  },
  {
    name: 'security_posture_assessment',
    description: 'Complete security posture evaluation',
    servers: ['cloud-security', 'threat-intelligence', 'vulnerability-scanner', 'compliance-audit'],
    steps: [
      { server: 'cloud-security', tool: 'cspm_scan', description: 'Cloud security posture scan' },
      { server: 'vulnerability-scanner', tool: 'cve_scan', description: 'Vulnerability assessment' },
      { server: 'threat-intelligence', tool: 'ioc_enrichment', description: 'Threat intelligence enrichment' },
      { server: 'compliance-audit', tool: 'iso27001_audit', description: 'ISO 27001 audit' },
    ],
  },
  {
    name: 'financial_services_compliance',
    description: 'Comprehensive financial services compliance',
    servers: ['financial-ai', 'ai-governance', 'compliance-audit'],
    steps: [
      { server: 'financial-ai', tool: 'sec_compliance', description: 'SEC compliance check' },
      { server: 'financial-ai', tool: 'aml_kyc', description: 'AML/KYC assessment' },
      { server: 'ai-governance', tool: 'bias_detection', description: 'Algorithmic fairness check' },
      { server: 'compliance-audit', tool: 'soc2_audit', description: 'SOC 2 audit' },
    ],
  },
  {
    name: 'incident_to_remediation',
    description: 'Full incident response and remediation',
    servers: ['threat-intelligence', 'incident-response', 'vulnerability-scanner'],
    steps: [
      { server: 'threat-intelligence', tool: 'ioc_enrichment', description: 'IOC enrichment and context' },
      { server: 'incident-response', tool: 'alert_triage', description: 'Alert triage' },
      { server: 'incident-response', tool: 'forensic_analysis', description: 'Forensic analysis' },
      { server: 'vulnerability-scanner', tool: 'remediation_guidance', description: 'Remediation guidance' },
    ],
  },
  {
    name: 'ai_risk_assessment',
    description: 'Complete AI risk and compliance assessment',
    servers: ['ai-governance', 'csoai-governance', 'compliance-audit'],
    steps: [
      { server: 'ai-governance', tool: 'risk_assessment', description: 'AI risk assessment' },
      { server: 'ai-governance', tool: 'bias_detection', description: 'Bias detection audit' },
      { server: 'ai-governance', tool: 'model_card_gen', description: 'Model card generation' },
      { server: 'csoai-governance', tool: 'framework_crosswalk', description: 'Framework crosswalk' },
    ],
  },
];

const SYNERGIES = [
  { category: 'Healthcare', servers: ['healthcare-ai', 'thn-global', 'ai-governance'], synergy: 'Full pharma/medical device compliance pipeline' },
  { category: 'Security', servers: ['threat-intelligence', 'vulnerability-scanner', 'incident-response', 'red-team-ops'], synergy: 'Complete security lifecycle' },
  { category: 'Finance', servers: ['financial-ai', 'insurance-ai', 'ai-governance', 'compliance-audit'], synergy: 'Financial services compliance' },
  { category: 'Enterprise', servers: ['csoai-governance', 'policy-engine', 'data-classification', 'secure-comms'], synergy: 'Enterprise governance' },
  { category: 'Critical Infrastructure', servers: ['energy-ai', 'telecom-ai', 'supply-chain-ai', 'construction-ai'], synergy: 'Critical infrastructure compliance' },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  
  try {
    switch (action) {
      case 'servers': {
        const statusPromises = Object.entries(MCP_SERVERS).map(async ([name, config]) => {
          try {
            const res = await fetch(`http://localhost:${config.port}/health`, { signal: AbortSignal.timeout(1000) });
            return {
              name,
              url: `localhost:${config.port}`,
              tools: config.tools,
              status: res.ok ? 'connected' : 'error',
              category: config.category,
              description: config.description,
            };
          } catch {
            return {
              name,
              url: `localhost:${config.port}`,
              tools: config.tools,
              status: 'disconnected',
              category: config.category,
              description: config.description,
            };
          }
        });
        
        const servers = await Promise.all(statusPromises);
        return NextResponse.json({ servers });
      }
      
      case 'workflows': {
        return NextResponse.json({ workflows: CROSS_SERVER_WORKFLOWS });
      }
      
      case 'synergy': {
        return NextResponse.json({ synergies: SYNERGIES });
      }
      
      case 'stats': {
        const categories = [...new Set(Object.values(MCP_SERVERS).map(s => s.category))];
        return NextResponse.json({
          totalServers: Object.keys(MCP_SERVERS).length,
          totalTools: Object.values(MCP_SERVERS).reduce((sum, s) => sum + s.tools.length, 0),
          categories: categories.length,
          workflows: CROSS_SERVER_WORKFLOWS.length,
          synergies: SYNERGIES.length,
        });
      }
      
      case 'execute': {
        const workflow = searchParams.get('workflow');
        if (!workflow) {
          return NextResponse.json({ error: 'Missing workflow' }, { status: 400 });
        }
        
        const wf = CROSS_SERVER_WORKFLOWS.find(w => w.name === workflow);
        if (!wf) {
          return NextResponse.json({ error: 'Workflow not found' }, { status: 404 });
        }
        
        const results = wf.steps.map((step, i) => ({
          step: i + 1,
          server: step.server,
          tool: step.tool,
          status: 'simulated',
          output: `Simulated output for ${step.tool}`,
        }));
        
        return NextResponse.json({
          workflow: wf.name,
          results,
          timestamp: new Date().toISOString(),
        });
      }
      
      default: {
        return NextResponse.json({
          message: 'MCP Dashboard API',
          actions: ['servers', 'workflows', 'synergy', 'stats', 'execute'],
        });
      }
    }
  } catch (error) {
    console.error('[mcp-dashboard] error:', error);
    return NextResponse.json({ error: 'Dashboard error' }, { status: 500 });
  }
}
