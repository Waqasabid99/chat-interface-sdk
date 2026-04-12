import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { ChatWidget } from '../../src'

describe('ChatWidget', () => {
  it('should render', () => {
    const { container } = render(<ChatWidget />)
    expect(container).toBeTruthy()
  })
})
