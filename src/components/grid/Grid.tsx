import * as React from 'react'

import { Flex } from '~/components/flex'
import { CSS } from '~/stitches'

type GridProps = {
  basis: string
  children: React.ReactNode
  css: CSS
  gap: string
} & React.ComponentsProps<typeof Flex>

export const Grid: React.FC<GridProps> = ({
  basis,
  children,
  gap,
  css,
  ...remainingProps
}) => {
  return (
    <Flex
      css={
        {
          flexWrap: 'wrap',
          margin: `-${gap}`,
          '& > *': {
            flex: `1 0 ${basis}`,
            margin: gap
          },
          ...css
        } as CSS
      }
      {...remainingProps}
    >
      {children}
    </Flex>
  )
}

Grid.displayName = 'Grid'
