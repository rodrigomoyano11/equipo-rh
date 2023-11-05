import { default as NextLink } from 'next/link'
import { PropsWithChildren } from 'react'
import { LinkProps as AriaLinkProps } from 'react-aria-components'

type Href = Parameters<typeof NextLink>[number]['href']

type LinkProps = PropsWithChildren<{
  href: Href
  onPress?: AriaLinkProps['onPress']
  download?: AriaLinkProps['download']
  isDisabled?: boolean
  className?: string
}>

export type { LinkProps }
