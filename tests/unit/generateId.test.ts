import { describe, it, expect } from 'vitest'
import { generateId } from '../../src/utils/generateId'

describe('generateId', () => {
  it('should generate a string id', () => {
    const id = generateId()
    expect(typeof id).toBe('string')
    expect(id.length).toBeGreaterThan(0)
  })
})