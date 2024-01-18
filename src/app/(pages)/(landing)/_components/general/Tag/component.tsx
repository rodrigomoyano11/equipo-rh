import { Icon, IconName } from '@/app/_components/ui/Icon'
import { PropsWithChildren } from 'react'
import './styles.css'

export type TagProps = PropsWithChildren<{
  icon: IconName
  className?: string
}>

export const Tag = ({ icon, children, className = '' }: TagProps) => (
  <span className={`tag-component ${className}`}>
    <Icon name={icon} size="small" />

    {children}
  </span>
)

export default Tag
