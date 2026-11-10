import type { Message } from '../types/chat'

export function countAssistant(messages: Message[]): number {
  return messages.filter(m => m.role === 'assistant').length
}

export function citationCount(m: Message): number {
  return m.refs?.length ?? 0
}