import * as RadixToggle from '@radix-ui/react-toggle'
import * as React from 'react'

import { styled } from '~/stitches'

const StyledToggle = styled(RadixToggle.Root, {
  appearance: 'none',
  backgroundColor: '$tonal300',
  border: 'none',
  padding: '2px',
  boxShadow: 'inset 0 0 0 1px gainsboro',
  overflow: 'hidden',
  borderRadius: '$round',
  cursor: 'pointer',
  display: 'inline-flex',
  width: '50px',
  '&:focus': {
    outline: 'none'
  },
  '&[data-state=on]': {
    backgroundColor: '$success',
    justifyContent: 'flex-end'
  },
  '&[data-state=off]': {
    justifyContent: 'flex-start'
  }
})

export const Switch = styled('span', {
  size: '20px',
  background: 'white',
  display: 'inline-block',
  borderRadius: '$round'
})

export const Toggle: React.FC = (props) => (
  <StyledToggle {...props}>
    <Switch />
  </StyledToggle>
)

Toggle.displayName = 'Toggle'
