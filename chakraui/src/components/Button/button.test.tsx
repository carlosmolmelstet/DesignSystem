import React from 'react'
import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('render with correct children', () => {
    const children = 'Text children'

    const { getByText } = render(<Button label={children} />)

    expect(getByText(children)).toBeInTheDocument()
  })
})
