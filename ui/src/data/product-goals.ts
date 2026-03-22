// PRODUCT GOALS — The full feature spec for each MEOK product
// This file drives: site content, dashboard UI, app features, and Ralph Mode task queues
// When we add a feature here, Ralph Mode knows to build it. The site, dashboard, and app follow.

export interface ProductGoal {
  id: string;
  product: string;
  category: string;
  feature: string;
  description: string;
  status: "live" | "building" | "planned" | "research";
  priority: "critical" | "high" | "medium" | "low";
  connectsTo?: string[]; // integrations this feature needs
  reversesTo?: string;   // the dashboard UI component this becomes
}

export const PRODUCT_GOALS: ProductGoal[] = [
  // ──────────────────────────────────────────────────────────────
  // PERSONAL OS
  // ──────────────────────────────────────────────────────────────
  {
    id: "personal-memory-semantic",
    product: "Personal OS",
    category: "Memory",
    feature: "Semantic memory search",
    description:
      'Search your memories using natural language. "What did I decide about the kitchen renovation?" retrieves the relevant memory.',
    status: "live",
    priority: "critical",
    connectsTo: ["pgvector"],
    reversesTo: "MemoryExplorer",
  },
  {
    id: "personal-memory-infinite",
    product: "Personal OS",
    category: "Memory",
    feature: "Infinite memory timeline",
    description:
      "No expiry. All conversations contribute to a permanent, encrypted memory vault.",
    status: "live",
    priority: "critical",
    reversesTo: "MemoryTimeline",
  },
  {
    id: "personal-memory-cross-ai",
    product: "Personal OS",
    category: "Memory",
    feature: "Cross-AI memory sync",
    description:
      "Memory is shared across Claude, GPT-4o, DeepSeek, Groq — one click connect.",
    status: "building",
    priority: "critical",
    connectsTo: ["Claude", "GPT-4o", "DeepSeek", "Groq"],
    reversesTo: "ModelSwitcher",
  },
  {
    id: "personal-care-score",
    product: "Personal OS",
    category: "Wellbeing",
    feature: "Care score dashboard",
    description: "A 0-100 care alignment score updated after every interaction.",
    status: "live",
    priority: "high",
    reversesTo: "CareMetrics",
  },
  {
    id: "personal-morning-brief",
    product: "Personal OS",
    category: "Intelligence",
    feature: "Morning briefing",
    description:
      "Daily AI-generated brief: priorities, calendar, goals, and care check-in.",
    status: "live",
    priority: "high",
    connectsTo: ["Google Calendar", "Gmail", "Todoist"],
    reversesTo: "MorningBriefing",
  },
  {
    id: "personal-voice",
    product: "Personal OS",
    category: "Interface",
    feature: "Voice interaction",
    description: "Full voice input and output. Talk to your companion hands-free.",
    status: "building",
    priority: "high",
    connectsTo: ["ElevenLabs", "Whisper"],
  },
  {
    id: "personal-dream-engine",
    product: "Personal OS",
    category: "Intelligence",
    feature: "Dream Engine",
    description:
      "Overnight creative and strategic processing. Wake up to new insights.",
    status: "live",
    priority: "medium",
    reversesTo: "DreamsDashboard",
  },
  {
    id: "personal-archetypes",
    product: "Personal OS",
    category: "Identity",
    feature: "7 archetypes",
    description:
      "Switch between Companion, Strategist, Guardian, Sage, Creator, Scout, and Sovereign. Memory persists across all modes.",
    status: "live",
    priority: "high",
    reversesTo: "ArchetypeSelector",
  },
  {
    id: "personal-birth-ceremony",
    product: "Personal OS",
    category: "Onboarding",
    feature: "Birth Ceremony",
    description:
      "Guided ritual that names, aligns, and seeds the companion with initial memory. Sets care covenant.",
    status: "live",
    priority: "critical",
    reversesTo: "BirthCeremony",
  },
  {
    id: "personal-calendar-context",
    product: "Personal OS",
    category: "Integrations",
    feature: "Calendar-aware responses",
    description:
      "Companion is aware of upcoming events, conflicts, and free time when answering questions.",
    status: "live",
    priority: "high",
    connectsTo: ["Google Calendar", "Apple Calendar", "Outlook Calendar"],
  },
  {
    id: "personal-health-awareness",
    product: "Personal OS",
    category: "Wellbeing",
    feature: "Health data awareness",
    description:
      "Sleep, HRV, step counts inform companion tone and energy recommendations.",
    status: "building",
    priority: "high",
    connectsTo: ["Apple Health", "Oura Ring", "Garmin Connect"],
  },
  {
    id: "personal-finance-context",
    product: "Personal OS",
    category: "Finance",
    feature: "Finance context",
    description:
      "Spending patterns and account balances inform budget discussions and goal tracking.",
    status: "planned",
    priority: "medium",
    connectsTo: ["Monzo", "Revolut", "Plaid"],
  },

  // ──────────────────────────────────────────────────────────────
  // WORK OS
  // ──────────────────────────────────────────────────────────────
  {
    id: "work-github-context",
    product: "Work OS",
    category: "Development",
    feature: "GitHub repository context",
    description:
      "Companion is aware of open PRs, failing checks, recent commits, and issue backlog.",
    status: "live",
    priority: "critical",
    connectsTo: ["GitHub"],
  },
  {
    id: "work-ralph-mode",
    product: "Work OS",
    category: "Automation",
    feature: "Ralph Mode",
    description:
      "Autonomous build mode. Give Ralph a spec; it plans, writes code, runs tests, and ships.",
    status: "live",
    priority: "critical",
    connectsTo: ["GitHub", "Vercel", "Linear"],
    reversesTo: "RalphModule",
  },
  {
    id: "work-standup-brief",
    product: "Work OS",
    category: "Intelligence",
    feature: "Daily standup brief",
    description:
      "Automated daily context summary: PRs, Slack highlights, Linear tickets, meeting prep.",
    status: "building",
    priority: "high",
    connectsTo: ["GitHub", "Slack", "Linear", "Google Calendar"],
  },
  {
    id: "work-document-qa",
    product: "Work OS",
    category: "Knowledge",
    feature: "Document Q&A",
    description:
      "Ask questions across all connected work docs — Notion, Confluence, Google Docs.",
    status: "building",
    priority: "high",
    connectsTo: ["Notion", "Confluence", "Google Docs"],
  },
  {
    id: "work-slack-digest",
    product: "Work OS",
    category: "Communication",
    feature: "Slack digest & catch-up",
    description:
      "Missed important messages? Companion summarises key threads and action items.",
    status: "planned",
    priority: "high",
    connectsTo: ["Slack"],
  },
  {
    id: "work-deploy-awareness",
    product: "Work OS",
    category: "Development",
    feature: "Deployment awareness",
    description:
      "Companion knows current deploy status, build failures, and recent production issues.",
    status: "live",
    priority: "high",
    connectsTo: ["Vercel", "Netlify", "Sentry"],
  },
  {
    id: "work-analytics-insight",
    product: "Work OS",
    category: "Data",
    feature: "Analytics insight",
    description:
      "Natural language queries against PostHog, Google Analytics, and Mixpanel.",
    status: "planned",
    priority: "medium",
    connectsTo: ["PostHog", "Google Analytics", "Mixpanel"],
  },

  // ──────────────────────────────────────────────────────────────
  // FAMILY OS
  // ──────────────────────────────────────────────────────────────
  {
    id: "family-guardian-elderly",
    product: "Family OS",
    category: "Guardian",
    feature: "Elder care monitoring",
    description:
      "Daily wellbeing check-ins, medication reminders, and anomaly detection for elderly relatives.",
    status: "live",
    priority: "critical",
    reversesTo: "ElderCareGuardian",
  },
  {
    id: "family-guardian-children",
    product: "Family OS",
    category: "Guardian",
    feature: "Child safety monitoring",
    description:
      "Age-appropriate content filters, screen time insights, and anomaly alerts.",
    status: "live",
    priority: "critical",
    connectsTo: ["Bark", "Circle", "Google Family Link"],
    reversesTo: "ChildSafetyGuardian",
  },
  {
    id: "family-smart-home",
    product: "Family OS",
    category: "Smart Home",
    feature: "Smart home awareness",
    description:
      "Companion is aware of home device states — locks, lights, thermostat, cameras.",
    status: "building",
    priority: "high",
    connectsTo: ["Apple HomeKit", "Google Home", "Nest", "Ring"],
  },
  {
    id: "family-shared-calendar",
    product: "Family OS",
    category: "Organisation",
    feature: "Family calendar coordination",
    description:
      "Shared calendar awareness. Companion can surface conflicts and coordinate schedules across family members.",
    status: "planned",
    priority: "high",
    connectsTo: ["Google Calendar", "Apple Calendar"],
  },
  {
    id: "family-health-records",
    product: "Family OS",
    category: "Health",
    feature: "Health record awareness",
    description:
      "NHS App integration for UK users — appointments, prescriptions, medical history summary.",
    status: "building",
    priority: "medium",
    connectsTo: ["NHS App", "Apple Health"],
  },

  // ──────────────────────────────────────────────────────────────
  // GAMING OS
  // ──────────────────────────────────────────────────────────────
  {
    id: "gaming-live-copilot",
    product: "Gaming OS",
    category: "Real-time",
    feature: "Live co-pilot",
    description:
      "Real-time AI assistance during gameplay. 120ms response via Groq.",
    status: "live",
    priority: "critical",
    connectsTo: ["Groq"],
    reversesTo: "LiveCopilot",
  },
  {
    id: "gaming-post-game",
    product: "Gaming OS",
    category: "Analysis",
    feature: "Post-game analyst",
    description:
      "Performance breakdown after every match with improvement coaching.",
    status: "live",
    priority: "critical",
    connectsTo: ["Riot API", "Steam API", "Tracker.gg"],
    reversesTo: "PostGameAnalyst",
  },
  {
    id: "gaming-voice",
    product: "Gaming OS",
    category: "Interface",
    feature: "Voice mode for gaming",
    description: "Hands-free AI during gameplay. No typing needed.",
    status: "building",
    priority: "critical",
    connectsTo: ["ElevenLabs", "Whisper", "Groq"],
  },
  {
    id: "gaming-platforms",
    product: "Gaming OS",
    category: "Integrations",
    feature: "Platform connections",
    description:
      "47+ gaming platform connections including Steam, Riot, Blizzard, Epic.",
    status: "building",
    priority: "high",
    connectsTo: ["Steam", "Riot", "Blizzard", "Epic", "Battle.net", "Bungie"],
  },
  {
    id: "gaming-memory",
    product: "Gaming OS",
    category: "Memory",
    feature: "Gaming memory",
    description:
      "All matches, all games, all stats — remembered forever. Your complete gaming history.",
    status: "live",
    priority: "high",
    reversesTo: "GamingMemoryVault",
  },
  {
    id: "gaming-strategy-builder",
    product: "Gaming OS",
    category: "Strategy",
    feature: "Strategy builder",
    description:
      "Build custom strategies for any game mode. Draft builds, counter-picks, team compositions.",
    status: "live",
    priority: "high",
    reversesTo: "StrategyBuilder",
  },
  {
    id: "gaming-discord-context",
    product: "Gaming OS",
    category: "Social",
    feature: "Discord context",
    description:
      "Aware of Discord server activity, friend availability, and voice channel presence.",
    status: "planned",
    priority: "medium",
    connectsTo: ["Discord"],
  },

  // ──────────────────────────────────────────────────────────────
  // CHARACTERS
  // ──────────────────────────────────────────────────────────────
  {
    id: "characters-voice-personas",
    product: "Characters",
    category: "Voice",
    feature: "Voice persona system",
    description:
      "Each character archetype has a unique voice, powered by ElevenLabs. Custom voices for premium characters.",
    status: "live",
    priority: "critical",
    connectsTo: ["ElevenLabs"],
    reversesTo: "VoicePersona",
  },
  {
    id: "characters-any-llm",
    product: "Characters",
    category: "Model",
    feature: "Any LLM — one character",
    description:
      "Your character works across Claude, GPT-4o, DeepSeek, Groq. Same memory, same personality.",
    status: "live",
    priority: "critical",
    connectsTo: ["Claude", "GPT-4o", "DeepSeek", "Groq", "Mistral", "Ollama"],
    reversesTo: "ModelSwitcher",
  },
  {
    id: "characters-council",
    product: "Characters",
    category: "Multi-agent",
    feature: "Character Council",
    description:
      "Multiple archetypes deliberate together on a topic. Byzantine fault-tolerant consensus.",
    status: "live",
    priority: "high",
    reversesTo: "CouncilDashboard",
  },
  {
    id: "characters-avatars",
    product: "Characters",
    category: "Visual",
    feature: "3D avatar system",
    description:
      "Ready Player Me avatar tied to each character. Visual presence in voice sessions.",
    status: "research",
    priority: "low",
    connectsTo: ["Ready Player Me"],
  },
  {
    id: "characters-custom-memory-provider",
    product: "Characters",
    category: "Memory",
    feature: "Custom memory provider",
    description:
      "Enterprise users can bring their own vector database — Pinecone, Weaviate, or self-hosted.",
    status: "building",
    priority: "medium",
    connectsTo: ["pgvector", "Pinecone", "Weaviate"],
  },

  // ──────────────────────────────────────────────────────────────
  // TEAM OS
  // ──────────────────────────────────────────────────────────────
  {
    id: "team-shared-memory",
    product: "Team OS",
    category: "Memory",
    feature: "Shared team memory",
    description:
      "Team-scoped memory vault. Decisions, docs, and context shared across team members.",
    status: "building",
    priority: "critical",
    connectsTo: ["pgvector"],
    reversesTo: "TeamMemoryVault",
  },
  {
    id: "team-crm-context",
    product: "Team OS",
    category: "Sales",
    feature: "CRM context",
    description:
      "Companion is aware of deal pipeline, contacts, and recent activity in Salesforce or HubSpot.",
    status: "planned",
    priority: "high",
    connectsTo: ["Salesforce", "HubSpot", "Pipedrive"],
  },
  {
    id: "team-hr-awareness",
    product: "Team OS",
    category: "People",
    feature: "HR & people awareness",
    description:
      "Org chart, headcount, leave status — companion answers questions about team structure.",
    status: "planned",
    priority: "medium",
    connectsTo: ["BambooHR", "Rippling", "HiBob"],
  },
  {
    id: "team-finance-reporting",
    product: "Team OS",
    category: "Finance",
    feature: "Finance reporting assistant",
    description:
      "Natural language queries against Xero or QuickBooks. P&L, runway, invoice status.",
    status: "planned",
    priority: "medium",
    connectsTo: ["Xero", "QuickBooks", "FreeAgent"],
  },
  {
    id: "team-support-triage",
    product: "Team OS",
    category: "Support",
    feature: "Support ticket triage",
    description:
      "Companion reads Zendesk/Intercom queue and surfaces critical issues, trends, and suggested responses.",
    status: "planned",
    priority: "medium",
    connectsTo: ["Zendesk", "Intercom", "Freshdesk"],
  },
  {
    id: "team-sso-okta",
    product: "Team OS",
    category: "Security",
    feature: "SSO via Okta / Auth0",
    description:
      "Enterprise sign-in via existing identity provider. No new password for team members.",
    status: "building",
    priority: "high",
    connectsTo: ["Okta", "Auth0"],
  },
  {
    id: "team-role-permissions",
    product: "Team OS",
    category: "Security",
    feature: "Role-based access control",
    description:
      "Define what each team member's AI companion can access. Owner, admin, member, and custom roles.",
    status: "building",
    priority: "critical",
    reversesTo: "TeamSettings",
  },
];

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────────────────

export function getGoalsByProduct(product: string): ProductGoal[] {
  return PRODUCT_GOALS.filter((g) => g.product === product);
}

export function getLiveFeatures(): ProductGoal[] {
  return PRODUCT_GOALS.filter((g) => g.status === "live");
}

export function getBuildingFeatures(): ProductGoal[] {
  return PRODUCT_GOALS.filter((g) => g.status === "building");
}

export function getPlannedFeatures(): ProductGoal[] {
  return PRODUCT_GOALS.filter((g) => g.status === "planned");
}

export function getFeaturesByPriority(priority: ProductGoal["priority"]): ProductGoal[] {
  return PRODUCT_GOALS.filter((g) => g.priority === priority);
}

export function getCriticalBuildingFeatures(): ProductGoal[] {
  return PRODUCT_GOALS.filter(
    (g) => g.priority === "critical" && g.status === "building"
  );
}
