import { describe, it, expect } from 'vitest'
import { countAssistant, citationCount } from './chatStats'
import type { Message } from '../types/chat'

describe('chatStats', () => {
  it('countAssistant 只数 AI 消息', () => {
    const msgs: Message[] = [
      { role: 'user', content: 'q' },
      { role: 'assistant', content: 'a' },
    ]
    expect(countAssistant(msgs)).toBe(1)
  })

  it('citationCount 对无引用消息返回 0', () => {
    expect(citationCount({ role: 'assistant', content: 'a' })).toBe(0)
  })
})