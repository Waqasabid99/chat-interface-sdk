import { describe, it, expect } from 'vitest'
import { isReadableStream } from '../../src/utils/isReadableStream'

describe('isReadableStream', () => {
  it('should return true for ReadableStream', () => {
    const stream = new ReadableStream()
    expect(isReadableStream(stream)).toBe(true)
  })

  it('should return false for non-stream', () => {
    expect(isReadableStream('string')).toBe(false)
  })
})
