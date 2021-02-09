import { render, screen } from '@testing-library/react'
import React from 'react'

import { CSSWrapper } from '.'

describe(`CSSWrapper component`, () => {
  it('renders if passed CSS blob', async () => {
    const { container } = render(
      <CSSWrapper css={{ m: 'auto', height: 100, width: 100 }}>
        <p>Example text</p>
      </CSSWrapper>
    )
    await screen.findByTestId('css-wrapper')
    expect(container).toMatchSnapshot()
  })

  it("doesn't render if not passed CSS blob", async () => {
    const { container } = render(
      <CSSWrapper>
        <p>Example text</p>
      </CSSWrapper>
    )
    const wrapper = await screen.queryByTestId('css-wrapper')
    expect(wrapper).toBeNull()
    expect(container).toMatchSnapshot()
  })
})
