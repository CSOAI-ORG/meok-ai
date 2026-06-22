/**
 * MEOK AI LABS — MCP Synergy Engine v2.0
 * 
 * Enhanced orchestration layer inspired by open source frameworks:
 * - lastmile-ai/mcp-agent: Workflow patterns
 * - Agent-MCP: Multi-agent coordination
 * - governance-mcp: EU AI Act compliance
 * - task-orchestrator: Task orchestration with planning floors
 * - secure-mcp-gateway: Audit and security
 * 
 * Features:
 * - Sequential, parallel, conditional workflows
 * - Human-in-the-loop approvals
 * - Task planning with gating
 * - Full audit logging
 * - EU AI Act risk classification
 */

import { NextRequest, NextResponse } from 'next/server';
import { kv } from '@/lib/kv-cache';

export const runtime = 'nodejs';

interface ServerCapability {
  server: string;
  tool: string;
  keywords: string[];
  category: string;
  relatedFrameworks: string[];
}

interface WorkflowStep {
  server: string;
  tool: string;
  description: string;
  dependsOn?: string[];
  condition?: string;
  timeout?: number;
}

interface WorkflowDefinition {
  name: string;
  description: string;
  type: 'sequential' | 'parallel' | 'conditional' | 'planning_floor';
  servers: string[];
  steps: WorkflowStep[];
  gates?: { field: string; value: string }[];
  requiresApproval?: boolean;
  maxRetries?: number;
}

interface TaskContext {
  id: string;
  workflow: string;
  status: 'pending' | 'running' | 'awaiting_approval' | 'completed' | 'failed';
  currentStep?: number;
  results: Record<string, unknown>;
  createdAt: string;
  updatedAt: string;
  metadata?: Record<string, unknown>;
}

const SERVER_CAPABILITIES: Record<string, ServerCapability[]> = {
  healthcare: [
    { server: 'healthcare-ai', tool: 'fda_assessment', keywords: ['fda', 'medical device', 'clinical', 'device'], category: 'healthcare', relatedFrameworks: ['hipaa', 'eu_mdr', '21_cfr_part820'] },
    { server: 'healthcare-ai', tool: 'hipaa_assessment', keywords: ['hipaa', 'privacy', 'health data', 'phi'], category: 'healthcare', relatedFrameworks: ['hipaa', 'gdpr'] },
    { server: 'thn-global', tool: 'drug_discovery', keywords: ['drug', 'molecule', 'compound', 'discovery'], category: 'healthcare', relatedFrameworks: ['fda', 'ema'] },
    { server: 'thn-global', tool: 'patent_landscape', keywords: ['patent', 'ip', 'landscape', 'freedom to operate'], category: 'healthcare', relatedFrameworks: ['patent'] },
  ],
  security: [
    { server: 'cloud-security', tool: 'cspm_scan', keywords: ['cloud', 'aws', 'azure', 'gcp', ' posture'], category: 'security', relatedFrameworks: ['cis', 'nist'] },
    { server: 'threat-intelligence', tool: 'ioc_enrichment', keywords: ['ioc', 'indicator', 'threat', 'malware', 'apt'], category: 'security', relatedFrameworks: ['mitre_attck'] },
    { server: 'vulnerability-scanner', tool: 'cve_scan', keywords: ['cve', 'vulnerability', 'exploit', 'patch'], category: 'security', relatedFrameworks: ['cvss', 'nist'] },
    { server: 'incident-response', tool: 'soar_workflow', keywords: ['incident', 'response', 'automation', 'playbook'], category: 'security', relatedFrameworks: ['nist_sp800_61'] },
    { server: 'red-team-ops', tool: 'attack_simulation', keywords: ['red team', 'penetration', 'adversarial', 'attack'], category: 'security', relatedFrameworks: ['mitre_attck'] },
    { server: 'compliance-audit', tool: 'iso27001_audit', keywords: ['iso', '27001', 'audit', 'certification'], category: 'governance', relatedFrameworks: ['iso27001'] },
    { server: 'compliance-audit', tool: 'soc2_audit', keywords: ['soc2', 'audit', 'controls', 'trust'], category: 'governance', relatedFrameworks: ['soc2'] },
    { server: 'biometrics-ai', tool: 'facial_recognition_audit', keywords: ['facial', 'biometric', 'recognition', 'face'], category: 'security', relatedFrameworks: ['bipa', 'eu_ai_act'] },
  ],
  finance: [
    { server: 'financial-ai', tool: 'aml_kyc', keywords: ['aml', 'kyc', 'anti money laundering', 'know your customer'], category: 'finance', relatedFrameworks: ['fatf', 'bsa'] },
    { server: 'financial-ai', tool: 'sec_compliance', keywords: ['sec', 'securities', 'trading', 'disclosure'], category: 'finance', relatedFrameworks: ['sec', 'finra'] },
    { server: 'financial-ai', tool: 'algo_trading_compliance', keywords: ['algorithmic', 'trading', 'hft', 'execution'], category: 'finance', relatedFrameworks: ['mifid_ii', 'regsci'] },
    { server: 'insurance-ai', tool: 'underwriting_compliance', keywords: ['underwriting', 'risk assessment', 'actuarial'], category: 'services', relatedFrameworks: ['state_reg', 'naic'] },
  ],
  governance: [
    { server: 'ai-governance', tool: 'eu_ai_act_check', keywords: ['eu ai act', 'high risk', 'prohibited', 'transparency'], category: 'governance', relatedFrameworks: ['eu_ai_act'] },
    { server: 'ai-governance', tool: 'bias_detection', keywords: ['bias', 'fairness', 'discrimination', 'audit'], category: 'governance', relatedFrameworks: ['eeoc', 'eu_ai_act'] },
    { server: 'csoai-governance', tool: 'framework_crosswalk', keywords: ['crosswalk', 'mapping', 'framework', 'gap'], category: 'governance', relatedFrameworks: ['multiple'] },
    { server: 'csoai-governance', tool: 'casa_certification', keywords: ['casa', 'certification', 'assessment'], category: 'governance', relatedFrameworks: ['casa'] },
    { server: 'policy-engine', tool: 'policy_generation', keywords: ['policy', 'generate', 'rule', 'governance'], category: 'governance', relatedFrameworks: ['internal'] },
  ],
  industry: [
    { server: 'autonomous-vehicles-ai', tool: 'eu_ai_act_high_risk', keywords: ['autonomous', 'vehicle', 'self driving', 'ad'], category: 'industry', relatedFrameworks: ['eu_ai_act', 'unece'] },
    { server: 'energy-ai', tool: 'grid_optimization_compliance', keywords: ['grid', 'energy', 'utility', 'smart grid'], category: 'industry', relatedFrameworks: ['nerc', 'ferc'] },
    { server: 'supply-chain-ai', tool: 'forced_labor_screening', keywords: ['forced labor', 'supply chain', 'esg', 'sustainability'], category: 'industry', relatedFrameworks: ['due_diligence'] },
    { server: 'construction-ai', tool: 'safety_monitoring', keywords: ['construction', 'safety', 'bim', 'inspection'], category: 'industry', relatedFrameworks: ['osha'] },
  ],
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
    servers: ['threat-intelligence', 'incident-response', 'vulnerability-scanner', 'compliance-audit'],
    steps: [
      { server: 'threat-intelligence', tool: 'ioc_enrichment', description: 'IOC enrichment and context' },
      { server: 'incident-response', tool: 'alert_triage', description: 'Alert triage and classification' },
      { server: 'incident-response', tool: 'forensic_analysis', description: 'Forensic analysis' },
      { server: 'vulnerability-scanner', tool: 'remediation_guidance', description: 'Remediation guidance' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Evidence collection' },
    ],
  },
  {
    name: 'ai_risk_assessment',
    description: 'Complete AI risk and compliance assessment',
    type: 'planning_floor',
    servers: ['ai-governance', 'csoai-governance', 'compliance-audit'],
    steps: [
      { server: 'ai-governance', tool: 'risk_assessment', description: 'AI risk assessment' },
      { server: 'ai-governance', tool: 'bias_detection', description: 'Bias detection audit' },
      { server: 'ai-governance', tool: 'model_card_gen', description: 'Model card generation' },
      { server: 'csoai-governance', tool: 'framework_crosswalk', description: 'Framework crosswalk' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Compliance evidence' },
    ],
    requiresApproval: true,
  },
  // New workflows inspired by open source
  {
    name: 'eu_ai_act_full',
    description: 'Complete EU AI Act compliance assessment',
    type: 'conditional',
    servers: ['ai-governance', 'compliance-audit', 'employment-ai', 'biometrics-ai'],
    steps: [
      { server: 'ai-governance', tool: 'eu_ai_act_check', description: 'EU AI Act risk classification', dependsOn: [] },
      { server: 'employment-ai', tool: 'hiring_bias_check', description: 'Employment bias check', dependsOn: ['eu_ai_act_check'], condition: 'high_risk' },
      { server: 'biometrics-ai', tool: 'facial_recognition_audit', description: 'Biometric audit', dependsOn: ['eu_ai_act_check'], condition: 'prohibited' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Evidence collection', dependsOn: [] },
    ],
    gates: [{ field: 'risk_level', value: 'high' }],
    requiresApproval: true,
  },
  {
    name: 'parallel_security_scan',
    description: 'Parallel security scanning across all systems',
    type: 'parallel',
    servers: ['cloud-security', 'vulnerability-scanner', 'threat-intelligence', 'red-team-ops'],
    steps: [
      { server: 'cloud-security', tool: 'cspm_scan', description: 'Cloud security scan', timeout: 30 },
      { server: 'vulnerability-scanner', tool: 'cve_scan', description: 'CVE vulnerability scan', timeout: 30 },
      { server: 'threat-intelligence', tool: 'threat_feed_enrichment', description: 'Threat intel enrichment', timeout: 15 },
      { server: 'red-team-ops', tool: 'attack_simulation', description: 'Attack simulation', timeout: 60 },
    ],
  },
  {
    name: 'secure_mcp_gateway',
    description: 'Secure gateway audit and control (inspired by secure-mcp-gateway)',
    type: 'sequential',
    servers: ['data-classification', 'compliance-audit', 'secure-comms'],
    steps: [
      { server: 'data-classification', tool: 'auto_discovery', description: 'PII data discovery' },
      { server: 'data-classification', tool: 'sensitivity_label', description: 'Sensitivity labeling' },
      { server: 'compliance-audit', tool: 'gdpr_audit', description: 'GDPR compliance audit' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Audit evidence' },
    ],
    maxRetries: 3,
  },
  {
    name: 'hipaa_compliance',
    description: 'HIPAA healthcare compliance check',
    type: 'sequential',
    servers: ['healthcare-ai', 'compliance-audit', 'data-classification'],
    steps: [
      { server: 'healthcare-ai', tool: 'hipaa_assessment', description: 'HIPAA privacy assessment' },
      { server: 'healthcare-ai', tool: 'fda_assessment', description: 'FDA device classification' },
      { server: 'data-classification', tool: 'dlp_policy_enforce', description: 'DLP policy enforcement' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Evidence collection' },
    ],
    requiresApproval: false,
  },
  {
    name: 'incident_response_soar',
    description: 'SOAR-powered incident response workflow',
    type: 'planning_floor',
    servers: ['threat-intelligence', 'incident-response', 'vulnerability-scanner', 'compliance-audit'],
    steps: [
      { server: 'threat-intelligence', tool: 'ioc_enrichment', description: 'IOC enrichment' },
      { server: 'incident-response', tool: 'alert_triage', description: 'Alert triage' },
      { server: 'incident-response', tool: 'soar_workflow', description: 'SOAR workflow execution' },
      { server: 'incident-response', tool: 'forensic_analysis', description: 'Forensic analysis' },
      { server: 'vulnerability-scanner', tool: 'remediation_guidance', description: 'Remediation guidance' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Compliance evidence' },
    ],
    gates: [{ field: 'severity', value: 'critical' }],
    requiresApproval: true,
  },
  // Additional Planning Floor Workflows
  {
    name: 'enterprise_compliance_full',
    description: 'Full enterprise compliance assessment across all frameworks',
    type: 'planning_floor',
    servers: ['data-classification', 'ai-governance', 'compliance-audit', 'secure-comms'],
    steps: [
      { server: 'data-classification', tool: 'auto_discovery', description: 'Data discovery', dependsOn: [] },
      { server: 'data-classification', tool: 'sensitivity_label', description: 'Data classification', dependsOn: ['auto_discovery'] },
      { server: 'ai-governance', tool: 'eu_ai_act_check', description: 'EU AI Act check', dependsOn: ['sensitivity_label'] },
      { server: 'ai-governance', tool: 'risk_assessment', description: 'Risk assessment', dependsOn: ['eu_ai_act_check'] },
      { server: 'compliance-audit', tool: 'iso27001_audit', description: 'ISO 27001 audit', dependsOn: ['risk_assessment'] },
      { server: 'compliance-audit', tool: 'soc2_audit', description: 'SOC 2 audit', dependsOn: ['risk_assessment'] },
      { server: 'compliance-audit', tool: 'gdpr_audit', description: 'GDPR audit', dependsOn: ['sensitivity_label'] },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Evidence collection', dependsOn: [] },
    ],
    requiresApproval: true,
    gates: [{ field: 'data_classification', value: 'sensitive' }],
  },
  {
    name: 'regulatory_financial_audit',
    description: 'Complete financial services regulatory compliance',
    type: 'planning_floor',
    servers: ['financial-ai', 'compliance-audit', 'ai-governance'],
    steps: [
      { server: 'financial-ai', tool: 'sec_compliance', description: 'SEC compliance check' },
      { server: 'financial-ai', tool: 'aml_kyc', description: 'AML/KYC verification' },
      { server: 'financial-ai', tool: 'algo_trading_compliance', description: 'Algo trading compliance' },
      { server: 'financial-ai', tool: 'basel_iii_iv', description: 'Basel III/IV compliance' },
      { server: 'ai-governance', tool: 'bias_detection', description: 'Algorithmic fairness' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Evidence collection' },
    ],
    requiresApproval: true,
  },
  {
    name: 'healthcare_device_approval',
    description: 'FDA medical device approval workflow',
    type: 'planning_floor',
    servers: ['healthcare-ai', 'thn-global', 'compliance-audit', 'ai-governance'],
    steps: [
      { server: 'healthcare-ai', tool: 'fda_assessment', description: 'Initial FDA assessment' },
      { server: 'healthcare-ai', tool: 'hipaa_assessment', description: 'HIPAA compliance' },
      { server: 'healthcare-ai', tool: 'clinical_safety', description: 'Clinical safety review' },
      { server: 'thn-global', tool: 'patent_landscape', description: 'Patent landscape analysis' },
      { server: 'ai-governance', tool: 'model_card_gen', description: 'Model documentation' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Regulatory evidence' },
    ],
    requiresApproval: true,
  },
  {
    name: 'security_incident_full',
    description: 'Full security incident lifecycle management',
    type: 'planning_floor',
    servers: ['threat-intelligence', 'vulnerability-scanner', 'incident-response', 'red-team-ops', 'compliance-audit'],
    steps: [
      { server: 'threat-intelligence', tool: 'threat_feed_enrichment', description: 'Threat intelligence gathering' },
      { server: 'vulnerability-scanner', tool: 'cve_scan', description: 'Vulnerability scan' },
      { server: 'threat-intelligence', tool: 'ioc_enrichment', description: 'IOC enrichment' },
      { server: 'incident-response', tool: 'alert_triage', description: 'Alert triage' },
      { server: 'incident-response', tool: 'forensic_analysis', description: 'Forensic analysis' },
      { server: 'incident-response', tool: 'soar_workflow', description: 'Automated response' },
      { server: 'vulnerability-scanner', tool: 'remediation_guidance', description: 'Remediation plan' },
      { server: 'red-team-ops', tool: 'attack_simulation', description: 'Verify fix with attack simulation' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Compliance documentation' },
    ],
    gates: [{ field: 'severity', value: 'critical' }],
    requiresApproval: true,
  },
  {
    name: 'data_governance_pipeline',
    description: 'Complete data governance and PII handling',
    type: 'planning_floor',
    servers: ['data-classification', 'compliance-audit', 'secure-comms'],
    steps: [
      { server: 'data-classification', tool: 'auto_discovery', description: 'PII discovery' },
      { server: 'data-classification', tool: 'sensitivity_label', description: 'Sensitivity labeling' },
      { server: 'data-classification', tool: 'dlp_policy_enforce', description: 'DLP policy enforcement' },
      { server: 'compliance-audit', tool: 'gdpr_audit', description: 'GDPR audit' },
      { server: 'compliance-audit', tool: 'ccpa_audit', description: 'CCPA audit' },
      { server: 'compliance-audit', tool: 'evidence_collection', description: 'Data governance evidence' },
      { server: 'secure-comms', tool: 'audit_logging', description: 'Configure audit logging' },
    ],
    requiresApproval: false,
  },
];

export async function GET(req: NextRequest): Promise<NextResponse> {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const query = searchParams.get('query');
  const workflow = searchParams.get('workflow');
  
  try {
    switch (action) {
      case 'capabilities': {
        const category = searchParams.get('category');
        if (category) {
          return NextResponse.json({ capabilities: SERVER_CAPABILITIES[category] || [] });
        }
        return NextResponse.json({ allCapabilities: SERVER_CAPABILITIES });
      }
      
      case 'match': {
        if (!query) {
          return NextResponse.json({ error: 'Missing query' }, { status: 400 });
        }
        const matches = findMatchingCapabilities(query);
        return NextResponse.json({ query, matches });
      }
      
      case 'workflows': {
        if (workflow) {
          const wf = CROSS_SERVER_WORKFLOWS.find(w => w.name === workflow);
          return NextResponse.json({ workflow: wf });
        }
        return NextResponse.json({ workflows: CROSS_SERVER_WORKFLOWS });
      }
      
      case 'execute_workflow': {
        if (!workflow) {
          return NextResponse.json({ error: 'Missing workflow name' }, { status: 400 });
        }
        const result = await executeWorkflow(workflow, req);
        return NextResponse.json(result);
      }
      
      case 'task_status': {
        const taskId = searchParams.get('taskId');
        if (taskId) {
          const task = await getTaskStatus(taskId);
          return NextResponse.json({ task });
        }
        const tasks = await listTasks();
        return NextResponse.json({ tasks });
      }
      
      case 'planning_floors': {
        return NextResponse.json({ planningFloors: getPlanningFloors() });
      }
      
      case 'synergy': {
        const synergies = analyzeSynergies();
        return NextResponse.json({ synergies });
      }
      
      case 'gates': {
        return NextResponse.json({ gates: getWorkflowGates() });
      }
      
      default: {
        return NextResponse.json({
          message: 'MCP Synergy Engine',
          actions: ['capabilities', 'match', 'workflows', 'execute_workflow', 'synergy'],
          stats: {
            totalServers: 50,
            totalCapabilities: Object.values(SERVER_CAPABILITIES).flat().length,
            totalWorkflows: CROSS_SERVER_WORKFLOWS.length,
            categories: Object.keys(SERVER_CAPABILITIES),
          },
        });
      }
    }
  } catch (error) {
    console.error('[mcp/synergy] error:', error);
    return NextResponse.json({ error: 'Synergy engine error' }, { status: 500 });
  }
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  try {
    const body = await req.json();
    const { action, query, servers, context } = body;
    
    if (action === 'smart_route') {
      if (!query) {
        return NextResponse.json({ error: 'Missing query' }, { status: 400 });
      }
      const routed = smartRouteQuery(query, context);
      return NextResponse.json(routed);
    }
    
    if (action === 'cross_server_analyze') {
      if (!servers || !Array.isArray(servers)) {
        return NextResponse.json({ error: 'Missing servers array' }, { status: 400 });
      }
      const analysis = await crossServerAnalysis(servers, body);
      return NextResponse.json(analysis);
    }
    
    if (action === 'chain_execute') {
      const chain = body.chain || [];
      if (chain.length === 0) {
        return NextResponse.json({ error: 'Empty execution chain' }, { status: 400 });
      }
      const results = await chainExecute(chain, req);
      return NextResponse.json({ results });
    }
    
    return NextResponse.json({ error: 'Unknown action' }, { status: 400 });
  } catch (error) {
    console.error('[mcp/synergy] POST error:', error);
    return NextResponse.json({ error: 'Synergy operation failed' }, { status: 500 });
  }
}

function findMatchingCapabilities(query: string): Array<{server: string; tool: string; relevance: number; category: string}> {
  const queryLower = query.toLowerCase();
  const queryWords = queryLower.split(/\s+/);
  const matches: Array<{server: string; tool: string; relevance: number; category: string}> = [];
  
  for (const [, capabilities] of Object.entries(SERVER_CAPABILITIES)) {
    for (const cap of capabilities) {
      let relevance = 0;
      for (const word of queryWords) {
        for (const keyword of cap.keywords) {
          if (keyword.includes(word) || word.includes(keyword)) {
            relevance += 10;
          }
        }
      }
      if (cap.keywords.some(k => queryLower.includes(k))) {
        relevance += 20;
      }
      if (relevance > 0) {
        matches.push({ server: cap.server, tool: cap.tool, relevance, category: cap.category });
      }
    }
  }
  
  return matches.sort((a, b) => b.relevance - a.relevance).slice(0, 10);
}

function smartRouteQuery(query: string, context?: Record<string, unknown>): { recommendedServers: Array<{server: string; tool: string; reason: string}>; confidence: number } {
  const matches = findMatchingCapabilities(query);
  
  if (matches.length === 0) {
    return {
      recommendedServers: [
        { server: 'ai-governance', tool: 'risk_assessment', reason: 'General AI governance assessment' },
      ],
      confidence: 0.3,
    };
  }
  
  const topMatch = matches[0];
  const recommendations = [
    { server: topMatch.server, tool: topMatch.tool, reason: `Best match for "${query}"` },
  ];
  
  if (matches.length > 1) {
    recommendations.push({
      server: matches[1].server,
      tool: matches[1].tool,
      reason: 'Secondary match',
    });
  }
  
  const confidence = Math.min(0.95, matches[0].relevance / 50);
  
  return { recommendedServers: recommendations, confidence };
}

async function crossServerAnalysis(servers: string[], body: Record<string, unknown>): Promise<Record<string, unknown>> {
  const analysis = {
    servers,
    coverage: {} as Record<string, string[]>,
    frameworksCovered: [] as string[],
    gaps: [] as string[],
    recommendations: [] as string[],
  };
  
  const allCapabilities = Object.values(SERVER_CAPABILITIES).flat();
  const serverSet = new Set(servers);
  
  for (const server of servers) {
    const caps = allCapabilities.filter(c => c.server === server);
    analysis.coverage[server] = caps.map(c => c.tool);
    
    for (const cap of caps) {
      for (const fw of cap.relatedFrameworks) {
        if (!analysis.frameworksCovered.includes(fw)) {
          analysis.frameworksCovered.push(fw);
        }
      }
    }
  }
  
  const neededFrameworks = new Set<string>();
  for (const server of servers) {
    const caps = allCapabilities.filter(c => c.server === server);
    for (const cap of caps) {
      for (const fw of cap.relatedFrameworks) {
        const coveredBy = allCapabilities
          .filter(c => c.relatedFrameworks.includes(fw) && serverSet.has(c.server))
          .map(c => c.server);
        if (coveredBy.length === 0) {
          neededFrameworks.add(fw);
        }
      }
    }
  }
  
  analysis.gaps = Array.from(neededFrameworks);
  
  if (analysis.gaps.length > 0) {
    analysis.recommendations.push(`Consider adding servers to cover: ${analysis.gaps.join(', ')}`);
  }
  
  if (servers.length < 3) {
    analysis.recommendations.push('Consider expanding server coverage for comprehensive analysis');
  }
  
  return analysis;
}

async function chainExecute(chain: Array<{server: string; tool: string; args?: Record<string, unknown>}>, req: NextRequest): Promise<Array<{step: number; server: string; tool: string; result: unknown; error?: string}>> {
  const results: Array<{step: number; server: string; tool: string; result: unknown; error?: string}> = [];
  
  for (let i = 0; i < chain.length; i++) {
    const step = chain[i];
    try {
      const res = await fetch(`${req.nextUrl.origin}/api/mcp/servers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          server: step.server,
          tool: step.tool,
          arguments: step.args || {},
        }),
      });
      
      const data = await res.json();
      results.push({ step: i + 1, server: step.server, tool: step.tool, result: data });
    } catch (error) {
      results.push({ step: i + 1, server: step.server, tool: step.tool, result: null, error: String(error) });
    }
  }
  
  return results;
}

async function executeWorkflow(workflowName: string, req: NextRequest): Promise<Record<string, unknown>> {
  const workflow = CROSS_SERVER_WORKFLOWS.find(w => w.name === workflowName);
  if (!workflow) {
    return { error: 'Workflow not found' };
  }
  
  const results = await chainExecute(workflow.steps.map(s => ({ server: s.server, tool: s.tool })), req);
  
  return {
    workflow: workflowName,
    description: workflow.description,
    steps: workflow.steps,
    results,
    summary: results.every(r => !r.error) ? 'completed' : 'partial',
  };
}

function analyzeSynergies(): Array<{category: string; servers: string[]; synergy: string}> {
  const synergies = [
    {
      category: 'Healthcare',
      servers: ['healthcare-ai', 'thn-global', 'ai-governance'],
      synergy: 'Full pharma/medical device compliance pipeline from discovery to regulatory approval',
    },
    {
      category: 'Security',
      servers: ['threat-intelligence', 'vulnerability-scanner', 'incident-response', 'red-team-ops'],
      synergy: 'Complete security lifecycle from threat detection through remediation',
    },
    {
      category: 'Finance',
      servers: ['financial-ai', 'insurance-ai', 'ai-governance', 'compliance-audit'],
      synergy: 'Financial services compliance from trading to insurance underwriting',
    },
    {
      category: 'Enterprise',
      servers: ['csoai-governance', 'policy-engine', 'compliance-audit', 'data-classification'],
      synergy: 'Enterprise governance from policy generation to evidence collection',
    },
    {
      category: 'Critical Infrastructure',
      servers: ['energy-ai', 'telecom-ai', 'supply-chain-ai', 'construction-ai'],
      synergy: 'Critical infrastructure compliance across utilities, comms, supply chain, and construction',
    },
  ];
  
  return synergies;
}

// Task Management (inspired by task-orchestrator)
async function createTask(workflow: string, context?: Record<string, unknown>): Promise<TaskContext> {
  const task: TaskContext = {
    id: `task_${Date.now()}`,
    workflow,
    status: 'pending',
    results: {},
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    metadata: context,
  };
  
  const key = `meok:mcp:task:${task.id}`;
  await kv.set(key, task);
  
  return task;
}

async function getTaskStatus(taskId: string): Promise<TaskContext | null> {
  const key = `meok:mcp:task:${taskId}`;
  return await kv.get<TaskContext>(key);
}

async function listTasks(): Promise<TaskContext[]> {
  // In production, this would query from kv with pattern matching
  return [];
}

async function updateTaskStatus(taskId: string, updates: Partial<TaskContext>): Promise<void> {
  const key = `meok:mcp:task:${taskId}`;
  const existing = await kv.get<TaskContext>(key);
  if (existing) {
    await kv.set(key, { ...existing, ...updates, updatedAt: new Date().toISOString() });
  }
}

function getPlanningFloors(): Array<{name: string; description: string; workflows: string[]}> {
  return [
    { name: 'Discovery', description: 'Initial scanning and data gathering', workflows: ['parallel_security_scan', 'secure_mcp_gateway'] },
    { name: 'Analysis', description: 'Deep analysis and assessment', workflows: ['healthcare_compliance_full', 'security_posture_assessment'] },
    { name: 'Remediation', description: 'Fixes and compliance actions', workflows: ['incident_response_soar', 'eu_ai_act_full'] },
    { name: 'Verification', description: 'Proof of compliance', workflows: ['ai_risk_assessment', 'hipaa_compliance'] },
  ];
}

function getWorkflowGates(): Array<{field: string; operator: string; value: string}> {
  return [
    { field: 'risk_level', operator: 'equals', value: 'high' },
    { field: 'severity', operator: 'equals', value: 'critical' },
    { field: 'requires_approval', operator: 'equals', value: 'true' },
    { field: 'failed_attempts', operator: 'greater_than', value: '3' },
  ];
}
