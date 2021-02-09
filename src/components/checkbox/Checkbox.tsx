import * as React from 'react'
import { Check } from 'react-feather'

import { Box } from '~/components'
import { StitchesProps, styled } from '~/stitches'

const StyledCheckbox = styled('input', {
  position: 'absolute',
  visibility: 'hidden'
})

type CheckboxProps = Omit<StitchesProps<typeof StyledCheckbox>, 'as' | 'type'>

export const Checkbox: React.FC<CheckboxProps> = ({ name, css, ...props }) => {
  return (
    <Box as="label" css={css}>
      <StyledCheckbox type="checkbox" name={name} id={name} {...props} />
      <Box
        css={{
          borderRadius: '$0',
          border: '2px solid $secondary300',
          display: 'flex',
          alignItems: 'center',
          height: '$0',
          width: '$0',
          transition: 'all 100ms ease-out',
          ':not(:checked) + &:hover': {
            backgroundColor: '$tonal300'
          },
          ':checked + &': {
            backgroundColor: '$secondary300',
            color: 'white'
          },
          ':checked + &:hover': {
            backgroundColor: '$secondary500',
            borderColor: '$secondary500'
          }
        }}
      >
        <Box
          as={Check}
          css={{
            transition: 'all 100ms ease-out',
            opacity: 0,
            ':checked + div > &': { opacity: 1 }
          }}
        />
      </Box>
    </Box>
  )
}

// This shows how we can achieve trigger :hover styling on the checkbox
// based on a label in a more complex component (we'll need this for a CheckboxField).
// Leaving it here until we need it, because it took me ages to figure out!

// export const CheckboxField = () => {
//   return (
//     <>
//       <Box
//         as="label"
//         htmlFor="test"
//         css={{
//           ':hover + label > div': {
//             backgroundColor: '$tonal300'
//           },
//           ':hover + label > :checked + div': {
//             backgroundColor: '$secondary500',
//             borderColor: '$secondary500'
//           }
//         }}
//       >
//         test test
//       </Box>
//       <Checkbox name="test" />
//     </>
//   )
// }
