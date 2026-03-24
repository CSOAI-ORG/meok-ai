// Unit tests for lib/llm-router.ts
// Tests: classifyTask, selectModel
// getProvider is NOT tested here (requires env vars / real SDK init)

import { describe, it, expect } from '@jest/globals'
import { classifyTask, selectModel } from '../../src/lib/llm-router'

describe('classifyTask', () => {
  it('classifies "fix the bug in auth.ts" as coding', () => {
    expect(classifyTask('fix the bug in auth.ts')).toBe('coding')
  })

  it('classifies "I feel sad and alone today" as emotional', () => {
    expect(classifyTask('I feel sad and alone today')).toBe('emotional')
  })

  it('classifies "research competitors in the UK" as research', () => {
    expect(classifyTask('research competitors in the UK')).toBe('research')
  })

  it('classifies "plan my week" as planning', () => {
    expect(classifyTask('plan my week')).toBe('planning')
  })

  it('classifies "write a poem" as creative', () => {
    expect(classifyTask('write a poem')).toBe('creative')
  })

  it('classifies "hello how are you" as chat (default)', () => {
    expect(classifyTask('hello how are you')).toBe('chat')
  })
})

describe('selectModel', () => {
  it('Explorer tier always gets deepseek-chat', () => {
    const tasks = ['chat', 'coding', 'emotional', 'research', 'planning', 'creative', 'analysis'] as const
    for (const task of tasks) {
      expect(selectModel(task, 'explorer')).toBe('deepseek-chat')
    }
  })

  it('Sovereign tier gets claude for emotional task', () => {
    expect(selectModel('emotional', 'sovereign')).toBe('claude-3-5-haiku-latest')
  })

  it('Family tier gets best model for coding task', () => {
    expect(selectModel('coding', 'family')).toBe('claude-3-5-sonnet-latest')
  })
})
