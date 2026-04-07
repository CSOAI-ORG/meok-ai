/**
 * MEOK AI LABS — Research Templates
 *
 * Pre-built research flows for common use cases.
 * Each template has a structured prompt system.
 */

export interface ResearchTemplate {
  id: string;
  name: string;
  description: string;
  icon: string;
  defaultQuery: string;
  systemPrompt: string;
  subQuestions: string[];
  color: string;
}

export const RESEARCH_TEMPLATES: ResearchTemplate[] = [
  {
    id: 'competitor',
    name: 'Competitor Analysis',
    description: 'Analyze competitors, their strengths, weaknesses, and market position',
    icon: '⚔️',
    defaultQuery: 'Who are the main competitors in my industry and what are their strengths and weaknesses?',
    systemPrompt: `You are a competitive analysis expert. Your goal is to provide a comprehensive breakdown of competitors including:
- Company overview and history
- Products/services offered
- Market position and share
- Strengths and competitive advantages
- Weaknesses and vulnerabilities
- Pricing strategies
- Recent news and developments
- Future outlook

Use verified sources and cite specific data points.`,
    subQuestions: [
      'Who are the top 5 competitors?',
      'What are their core products/services?',
      'What is their market share?',
      'What are their competitive advantages?',
      'What are their weaknesses or gaps?',
    ],
    color: '#ef4444',
  },
  {
    id: 'market',
    name: 'Market Research',
    description: 'Understand market trends, size, growth, and opportunities',
    icon: '📊',
    defaultQuery: 'What are the current market trends and growth opportunities in my industry?',
    systemPrompt: `You are a market research analyst. Provide data-driven insights including:
- Market size and growth rate
- Key market trends and drivers
- Target audience demographics
- Market segmentation
- Growth opportunities
- Barriers to entry
- Regulatory considerations
- Emerging sub-sectors

Include specific numbers, percentages, and data sources where possible.`,
    subQuestions: [
      'What is the current market size?',
      'What is the expected growth rate?',
      'What are the key trends driving the market?',
      'Who is the target customer?',
      'What opportunities exist for new entrants?',
    ],
    color: '#3b82f6',
  },
  {
    id: 'technical',
    name: 'Technical Deep-Dive',
    description: 'Explained technical concepts, architectures, and implementations',
    icon: '🔧',
    defaultQuery: 'Explain the technical architecture and implementation details of this technology',
    systemPrompt: `You are a technical expert. Provide in-depth technical analysis including:
- Architecture overview
- Core components and their interactions
- Implementation approaches
- Trade-offs and design decisions
- Performance characteristics
- Scalability considerations
- Integration points
- Common pitfalls and best practices

Explain complex concepts clearly with examples where appropriate.`,
    subQuestions: [
      'What is the overall architecture?',
      'What are the core components?',
      'How do the components interact?',
      'What are the key design decisions?',
      'What are the performance implications?',
    ],
    color: '#8b5cf6',
  },
  {
    id: 'academic',
    name: 'Academic Research',
    description: 'Find scholarly sources, papers, and research findings',
    icon: '🎓',
    defaultQuery: 'What does the academic literature say about this topic?',
    systemPrompt: `You are an academic research assistant. Focus on scholarly sources:
- Key papers and publications
- Academic consensus and debates
- Methodology and research findings
- Theoretical frameworks
- Gaps in existing research
- Notable researchers and institutions
- Recent developments in the field

Prioritize peer-reviewed sources and cite DOIs where available.`,
    subQuestions: [
      'What are the key papers on this topic?',
      'What is the academic consensus?',
      'What are the main debates?',
      'What methodologies have been used?',
      'What gaps exist in the research?',
    ],
    color: '#10b981',
  },
  {
    id: 'news',
    name: 'News & Current Events',
    description: 'Stay updated on recent news, announcements, and developments',
    icon: '📰',
    defaultQuery: 'What are the latest news and developments in this area?',
    systemPrompt: `You are a news analyst. Provide current, timely information:
- Latest news and announcements
- Recent product launches
- Funding and acquisition news
- Regulatory updates
- Industry reactions
- Expert opinions and analysis
- Timeline of recent events

Focus on the most recent information and verify sources.`,
    subQuestions: [
      'What are the latest news stories?',
      'Any recent announcements or launches?',
      'What is the industry reaction?',
      'Any regulatory or policy changes?',
      'What do experts say about this?',
    ],
    color: '#f59e0b',
  },
  {
    id: 'howto',
    name: 'How-To Guide',
    description: 'Step-by-step guides and tutorials for accomplishing tasks',
    icon: '📖',
    defaultQuery: 'How do I accomplish this specific task or goal?',
    systemPrompt: `You are a practical guide writer. Provide actionable instructions:
- Clear prerequisites and requirements
- Step-by-step instructions
- Code examples where applicable
- Common pitfalls to avoid
- Troubleshooting tips
- Alternative approaches
- Best practices
- Expected outcomes

Make instructions clear enough for a beginner to follow.`,
    subQuestions: [
      'What are the prerequisites?',
      'What are the exact steps?',
      'Are there code examples?',
      'What are common mistakes to avoid?',
      'What are the best practices?',
    ],
    color: '#ec4899',
  },
  {
    id: 'summary',
    name: 'Executive Summary',
    description: 'Brief overview and key takeaways for decision makers',
    icon: '📋',
    defaultQuery: 'Give me a brief executive summary of this topic',
    systemPrompt: `You are an executive summary specialist. Provide concise insights:
- Key findings (3-5 bullet points)
- Strategic implications
- Recommended actions
- Risk considerations
- Timeline implications
- Resource requirements
- Success metrics

Keep it brief - executives should be able to read this in 2 minutes.`,
    subQuestions: [
      'What are the key findings?',
      'What are the strategic implications?',
      'What actions are recommended?',
      'What are the risks?',
      'What resources are needed?',
    ],
    color: '#6366f1',
  },
  {
    id: 'comparison',
    name: 'Comparison Guide',
    description: 'Compare options, products, or approaches side-by-side',
    icon: '⚖️',
    defaultQuery: 'Compare these options and help me choose the best one',
    systemPrompt: `You are a comparison analyst. Provide balanced, objective analysis:
- Feature-by-feature comparison
- Pricing comparison
- Pros and cons of each option
- Use case fit analysis
- User reviews and feedback
- Expert recommendations
- Decision criteria matrix

Present information objectively - let the user make their own decision.`,
    subQuestions: [
      'What are the key differences?',
      'How do they compare on features?',
      'What is the pricing comparison?',
      'What are the pros and cons?',
      'Which is best for which use case?',
    ],
    color: '#14b8a6',
  },
];

export function getTemplate(id: string): ResearchTemplate | undefined {
  return RESEARCH_TEMPLATES.find(t => t.id === id);
}

export function getTemplateByCategory(category: string): ResearchTemplate[] {
  return RESEARCH_TEMPLATES.filter(t => t.id.startsWith(category));
}