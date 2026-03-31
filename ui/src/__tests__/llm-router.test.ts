/**
 * Tests for llm-router.ts pure functions.
 *
 * getProvider() is NOT tested here because it instantiates live Vercel AI SDK
 * provider objects that require API keys and make network connections.
 *
 * Tested here:
 *   classifyTask, selectModel, MODEL_ACCESS (data integrity), route (model/taskType fields)
 */

import {
  MODEL_ACCESS,
  classifyTask,
  selectModel,
  route,
  type Tier,
  type TaskType,
} from '@/lib/llm-router'

// ── MODEL_ACCESS data integrity ────────────────────────────────────────────

describe('MODEL_ACCESS', () => {
  const tiers: Tier[] = ['explorer', 'sovereign', 'family']

  it('has entries for all three tiers', () => {
    for (const tier of tiers) {
      expect(MODEL_ACCESS[tier]).toBeDefined()
      expect(Array.isArray(MODEL_ACCESS[tier])).toBe(true)
    }
  })

  it('explorer tier only includes open-source/free models', () => {
    for (const model of MODEL_ACCESS.explorer) {
      // No GPT-4 class or Claude paid models
      expect(model).not.toMatch(/gpt-4o(?!-mini)/)
      expect(model).not.toMatch(/claude-3-5-sonnet/)
    }
  })

  it('family tier includes the most capable models', () => {
    expect(MODEL_ACCESS.family).toContain('gpt-4o')
    expect(MODEL_ACCESS.family).toContain('claude-3-5-sonnet-latest')
  })

  it('each tier has at least 5 models', () => {
    for (const tier of tiers) {
      expect(MODEL_ACCESS[tier].length).toBeGreaterThanOrEqual(5)
    }
  })
})

// ── classifyTask ───────────────────────────────────────────────────────────

describe('classifyTask', () => {
  it('classifies coding keywords correctly', () => {
    expect(classifyTask('Can you help me debug this python script?')).toBe('coding')
    expect(classifyTask('There is a bug in my JavaScript code')).toBe('coding')
    expect(classifyTask('Refactor this class to be more readable')).toBe('coding')
    expect(classifyTask('implement a REST API endpoint')).toBe('coding')
  })

  it('classifies emotional keywords correctly', () => {
    expect(classifyTask('I feel really sad today')).toBe('emotional')
    expect(classifyTask("I'm anxious about the job interview")).toBe('emotional')
    expect(classifyTask('I feel so overwhelmed with everything')).toBe('emotional')
    expect(classifyTask('I have been feeling lonely lately')).toBe('emotional')
  })

  it('classifies research keywords correctly', () => {
    expect(classifyTask('What is quantum computing?')).toBe('research')
    expect(classifyTask('Who is Ada Lovelace?')).toBe('research')
    expect(classifyTask('Explain how neural networks work')).toBe('research')
  })

  it('classifies planning keywords correctly', () => {
    expect(classifyTask('Help me make a plan for the sprint')).toBe('planning')
    expect(classifyTask('What should be on my todo list today?')).toBe('planning')
    expect(classifyTask('Set a deadline and milestones for my project')).toBe('planning')
  })

  it('classifies creative keywords correctly', () => {
    expect(classifyTask('Create a poem for my mum')).toBe('creative')
    expect(classifyTask('Brainstorm startup ideas')).toBe('creative')
    expect(classifyTask('Imagine a world without electricity')).toBe('creative')
  })

  it('classifies analysis keywords correctly', () => {
    expect(classifyTask('Analyse the sales data from last month')).toBe('analysis')
    expect(classifyTask('Give me a breakdown of the metrics')).toBe('analysis')
    expect(classifyTask('What insights can you find in these statistics?')).toBe('analysis')
  })

  it('classifies gaming keywords correctly', () => {
    expect(classifyTask('Help me with my Valorant strategy')).toBe('gaming')
    expect(classifyTask('Best team comp for ranked?')).toBe('gaming')
  })

  it('classifies document editing keywords correctly', () => {
    expect(classifyTask('Edit this document for clarity')).toBe('document_editing')
    expect(classifyTask('Draft a report on quarterly earnings')).toBe('document_editing')
  })

  it('classifies email drafting keywords correctly', () => {
    expect(classifyTask('Reply to this email')).toBe('email_drafting')
    expect(classifyTask('Forward this to the team inbox')).toBe('email_drafting')
  })

  it('classifies reasoning keywords correctly', () => {
    expect(classifyTask('Solve this math equation')).toBe('reasoning')
    expect(classifyTask('Think through this problem step by step')).toBe('reasoning')
  })

  it('falls back to chat for generic messages', () => {
    expect(classifyTask('Hello!')).toBe('chat')
    expect(classifyTask('What do you think?')).toBe('chat')
    expect(classifyTask('Tell me something interesting')).toBe('chat')
    expect(classifyTask('')).toBe('chat')
  })

  it('is case-insensitive', () => {
    expect(classifyTask('DEBUG MY CODE')).toBe('coding')
    expect(classifyTask('I FEEL SAD')).toBe('emotional')
  })

  it('grief keywords are classified as emotional (high priority)', () => {
    expect(classifyTask('My grandmother passed away last week')).toBe('emotional')
    expect(classifyTask('I miss them so much')).toBe('emotional')
  })
})

// ── selectModel ────────────────────────────────────────────────────────────

describe('selectModel', () => {
  describe('explorer tier', () => {
    it('returns a free-tier model for every task type', () => {
      const taskTypes: TaskType[] = ['chat', 'coding', 'emotional', 'research', 'analysis', 'creative', 'planning', 'gaming', 'reasoning']
      for (const task of taskTypes) {
        const model = selectModel(task, 'explorer')
        expect(typeof model).toBe('string')
        expect(model.length).toBeGreaterThan(0)
        // Explorer should never get paid models
        expect(model).not.toBe('gpt-4o')
        expect(model).not.toBe('claude-3-5-sonnet-latest')
      }
    })
  })

  describe('sovereign tier', () => {
    it('routes emotional to claude-3-5-haiku-latest', () => {
      expect(selectModel('emotional', 'sovereign')).toBe('claude-3-5-haiku-latest')
    })

    it('routes creative to claude-3-5-haiku-latest', () => {
      expect(selectModel('creative', 'sovereign')).toBe('claude-3-5-haiku-latest')
    })

    it('routes chat to deepseek-chat', () => {
      expect(selectModel('chat', 'sovereign')).toBe('deepseek-chat')
    })

    it('routes reasoning to nemotron-super', () => {
      expect(selectModel('reasoning', 'sovereign')).toBe('nemotron-super')
    })
  })

  describe('family tier', () => {
    it('routes emotional to minimax-text-01 (character AI specialist)', () => {
      expect(selectModel('emotional', 'family')).toBe('minimax-text-01')
    })

    it('routes coding to claude-3-5-sonnet-latest', () => {
      expect(selectModel('coding', 'family')).toBe('claude-3-5-sonnet-latest')
    })

    it('routes research to gpt-4o', () => {
      expect(selectModel('research', 'family')).toBe('gpt-4o')
    })

    it('routes creative to claude-3-5-haiku-latest', () => {
      expect(selectModel('creative', 'family')).toBe('claude-3-5-haiku-latest')
    })

    it('routes reasoning to nemotron-ultra', () => {
      expect(selectModel('reasoning', 'family')).toBe('nemotron-ultra')
    })
  })

  describe('tier × task model access compliance', () => {
    it('selected model is always a non-empty string', () => {
      const tasks: TaskType[] = ['chat', 'coding', 'emotional', 'research', 'analysis', 'creative', 'planning', 'gaming', 'reasoning']
      const tiers: Tier[] = ['explorer', 'sovereign', 'family']
      for (const tier of tiers) {
        for (const task of tasks) {
          const model = selectModel(task, tier)
          expect(typeof model).toBe('string')
          expect(model.length).toBeGreaterThan(0)
        }
      }
    })
  })
})

// ── route (integration of classifyTask + selectModel) ─────────────────────

describe('route', () => {
  beforeAll(() => {
    jest.mock('@ai-sdk/anthropic', () => ({
      anthropic: jest.fn(() => ({ _brand: 'anthropic-mock' })),
    }))
    jest.mock('@ai-sdk/openai', () => ({
      openai: jest.fn(() => ({ _brand: 'openai-mock' })),
      createOpenAI: jest.fn(() => jest.fn(() => ({ _brand: 'openai-custom-mock' }))),
    }))
  })

  it('returns model and taskType fields', () => {
    const result = route('help me debug this function', 'sovereign')
    expect(result.taskType).toBe('coding')
    expect(typeof result.model).toBe('string')
    expect(result.model.length).toBeGreaterThan(0)
  })

  it('taskType matches classifyTask output', () => {
    const messages: [string, TaskType][] = [
      ['I feel sad', 'emotional'],
      ['plan my sprint', 'planning'],
      ['hello there', 'chat'],
    ]
    for (const [msg, expected] of messages) {
      const result = route(msg, 'family')
      expect(result.taskType).toBe(expected)
    }
  })

  it('model matches selectModel output', () => {
    const message = 'I feel really overwhelmed'
    const tier: Tier = 'family'
    const result = route(message, tier)
    const expectedTask = classifyTask(message)
    const expectedModel = selectModel(expectedTask, tier)
    expect(result.model).toBe(expectedModel)
  })

  it('provider field is defined and not null', () => {
    const result = route('hello', 'sovereign')
    expect(result.provider).toBeDefined()
    expect(result.provider).not.toBeNull()
  })
})
