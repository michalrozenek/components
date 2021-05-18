import * as React from 'react'

import { styled } from '~/stitches'
import { Override } from '~/utilities'

import { textVariantSize } from '../text'

const StyledLink = styled('a', {
  bg: 'unset',
  border: 'unset',
  p: 'unset',
  color: '$primary500',
  cursor: 'pointer',
  fontFamily: '$sans',
  textDecoration: 'none',
  '&:focus, &:hover': {
    color: '$primary900',
    textDecoration: 'underline'
  },
  '&:active': {
    color: '$primary500'
  },
  variants: {
    size: textVariantSize({ applyCapsize: false })
  }
})

type LinkActions =
  | { onClick: (...args: unknown[]) => void; href?: never }
  | { onClick?: never; href: string }

type LinkProps = Override<
  React.ComponentProps<typeof StyledLink>,
  {
    as?: React.ComponentType | React.ElementType
  } & LinkActions
>

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ size = 'md', onClick, href, ...remainingProps }, ref) =>
    onClick ? (
      <StyledLink
        as="button"
        size={size}
        {...remainingProps}
        ref={ref}
        onClick={onClick}
      />
    ) : (
      <StyledLink size={size} {...remainingProps} ref={ref} href={href} />
    )
) as React.FC<LinkProps>

Link.displayName = 'Link'
