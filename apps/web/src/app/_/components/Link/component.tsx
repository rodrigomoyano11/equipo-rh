'use client'

import { default as NextLink } from 'next/link'
import { useRef } from 'react'
import { useHover, useLink, usePress } from 'react-aria'
import './styles.css'
import { LinkProps } from './types'

const Link = (props: LinkProps) => {
  // Props
  const { onPress, href, isDisabled, download, className = '', children } = props

  // Hooks
  const ref = useRef<HTMLAnchorElement>(null)

  const { linkProps } = useLink(
    {
      onPress,
      isDisabled,
      download,
      href: href as string,
    },
    ref,
  )

  const { hoverProps, isHovered } = useHover({ isDisabled })
  const { pressProps, isPressed } = usePress({
    isDisabled,
    onPress,
    ref,
    preventFocusOnPress: true,
  })

  // Base Props
  const baseProps = {
    'data-disabled': isDisabled || undefined,
    'data-hovered': isHovered || undefined,
    'data-pressed': isPressed || undefined,
    ...linkProps,
    ...hoverProps,
    ...pressProps,
  }

  // Render
  return (
    <NextLink ref={ref} className={`link ${className}`} href={href} {...baseProps}>
      {children}
    </NextLink>
  )
}

export { Link }
export type { LinkProps }
