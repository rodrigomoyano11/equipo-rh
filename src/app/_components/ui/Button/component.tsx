'use client'

import { Size } from '@/types/props'
import { PropsWithChildren } from 'react'
import { Button as AriaButton, ButtonProps as AriaButtonProps } from 'react-aria-components'
import { Icon, IconName } from '../Icon'
import { Link, LinkProps } from '../Link'
import './styles.css'

type ButtonProps = PropsWithChildren<{
  onPress?: AriaButtonProps['onPress']

  variant?: 'filled' | 'outline' | 'text'
  color?: 'accent' | 'black' | 'white'
  size?: Size

  type?: AriaButtonProps['type']

  icon?: IconName

  href?: LinkProps['href']
  download?: LinkProps['download']

  isDisabled?: boolean

  className?: string
}>

const Button = (props: ButtonProps) => {
  // Props
  const {
    onPress,
    variant = 'filled',
    color = 'accent',
    size = 'medium',
    type = 'button',
    icon,
    href,
    isDisabled,
    className = '',
    children,
    download,
  } = props

  // Base Props
  const styles = `button ${variant} ${color} ${size} ${className}`

  // Render
  if (href) {
    return (
      <Link className={styles} download={download} href={href} isDisabled={isDisabled}>
        {icon && <Icon name={icon} size={size} />}

        {children}
      </Link>
    )
  }

  return (
    <AriaButton className={styles} isDisabled={isDisabled} type={type} onPress={onPress}>
      {icon && <Icon name={icon} size={size} />}

      {children}
    </AriaButton>
  )
}

export { Button }
export type { ButtonProps }
