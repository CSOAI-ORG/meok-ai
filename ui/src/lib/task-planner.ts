// ── Task Planner ────────────────────────────────────────────────────────────
//
// Classifies any natural-language instruction into a typed task, provides a
// canonical step list for that task type, and estimates execution time.
// Used by TaskExecution and the OS task queue.

// ── Types ───────────────────────────────────────────────────────────────────

export type TaskType =
  | 'research'
  | 'email'
  | 'write'
  | 'plan'
  | 'analyze'
  | 'remind'
  | 'search'
  | 'code'
  | 'chat';

export type StepStatus = 'pending' | 'active' | 'done' | 'failed';

export interface Step {
  label: string;
  status: StepStatus;
}

// ── Classification ───────────────────────────────────────────────────────────

// Keyword maps ordered by specificity — first match wins.
const CLASSIFY_RULES: Array<{ type: TaskType; keywords: RegExp }> = [
  {
    type: 'email',
    keywords:
      /\b(email|e-mail|mail|send|reply|draft.*message|write.*to|message.*to|compose)\b/i,
  },
  {
    type: 'code',
    keywords:
      /\b(code|build|implement|function|script|debug|fix.*bug|refactor|write.*code|programme|program)\b/i,
  },
  {
    type: 'plan',
    keywords:
      /\b(plan|planning|roadmap|timeline|schedule|strategy|break.*down|project.*plan|organise|organize)\b/i,
  },
  {
    type: 'analyze',
    keywords:
      /\b(analys|analyz|review|audit|assess|evaluate|examine|compare|breakdown|diagnose)\b/i,
  },
  {
    type: 'remind',
    keywords: /\b(remind|reminder|alert|notify|don.t forget|remember)\b/i,
  },
  {
    type: 'search',
    keywords: /\b(find|search|look up|locate|where is|look for|browse)\b/i,
  },
  {
    type: 'write',
    keywords:
      /\b(write|draft|create|compose|summarise|summarize|document|report|essay|article|blog)\b/i,
  },
  {
    type: 'research',
    keywords:
      /\b(research|investigate|explore|what is|who is|how does|explain|tell me about|learn about)\b/i,
  },
];

export function classifyTask(instruction: string): TaskType {
  for (const rule of CLASSIFY_RULES) {
    if (rule.keywords.test(instruction)) return rule.type;
  }
  return 'chat';
}

// ── Step Templates ───────────────────────────────────────────────────────────

const STEP_TEMPLATES: Record<TaskType, string[]> = {
  research: [
    'Understanding your question',
    'Decomposing into subtasks',
    'Gathering information',
    'Analysing sources',
    'Synthesising findings',
    'Formatting response',
  ],
  email: [
    'Understanding context',
    'Loading relationship memory',
    'Drafting message',
    'Reviewing tone',
    'Finalising',
  ],
  write: [
    'Understanding brief',
    'Outlining structure',
    'Drafting content',
    'Refining language',
    'Final review',
  ],
  plan: [
    'Understanding goals',
    'Breaking into steps',
    'Prioritising',
    'Identifying dependencies',
    'Building timeline',
  ],
  analyze: [
    'Loading context',
    'Identifying patterns',
    'Cross-referencing',
    'Drawing conclusions',
    'Presenting findings',
  ],
  remind: [
    'Parsing reminder details',
    'Checking calendar context',
    'Setting trigger',
    'Confirming',
  ],
  search: [
    'Parsing search intent',
    'Querying sources',
    'Filtering results',
    'Ranking relevance',
    'Presenting results',
  ],
  code: [
    'Understanding requirements',
    'Designing solution',
    'Writing code',
    'Reviewing logic',
    'Testing & refining',
  ],
  chat: [
    'Reading your message',
    'Considering context',
    'Forming response',
    'Reviewing',
  ],
};

export function getStepsForTask(type: TaskType): Step[] {
  return (STEP_TEMPLATES[type] ?? STEP_TEMPLATES.chat).map((label) => ({
    label,
    status: 'pending' as StepStatus,
  }));
}

// ── Time Estimation ──────────────────────────────────────────────────────────

// Approximate wall-clock seconds for each task type (p50 estimate).
const TIME_ESTIMATES: Record<TaskType, number> = {
  research: 75,
  email:    45,
  write:    90,
  plan:     60,
  analyze:  80,
  remind:   10,
  search:   20,
  code:     120,
  chat:     15,
};

export function estimateTime(type: TaskType): number {
  return TIME_ESTIMATES[type] ?? 30;
}

// ── Human-readable task type labels ─────────────────────────────────────────

export const TASK_TYPE_LABELS: Record<TaskType, string> = {
  research: 'Research',
  email:    'Email',
  write:    'Writing',
  plan:     'Planning',
  analyze:  'Analysis',
  remind:   'Reminder',
  search:   'Search',
  code:     'Code',
  chat:     'Chat',
};

// ── Badge colour (Tailwind-safe inline hex) ──────────────────────────────────

export const TASK_TYPE_COLOURS: Record<TaskType, string> = {
  research: '#7c6dc7',
  email:    '#2d9b8a',
  write:    '#b8963e',
  plan:     '#c9a84c',
  analyze:  '#d4820a',
  remind:   '#EF4444',
  search:   '#3B82F6',
  code:     '#10B981',
  chat:     '#6B7280',
};
