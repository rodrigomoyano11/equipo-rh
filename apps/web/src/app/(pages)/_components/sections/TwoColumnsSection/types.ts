'use client'

import { MaterialSymbol } from 'material-symbols'

// import { IconName } from '@/app/_components/ui/Icon'
import { CSSProperties } from 'react'

type IconName = MaterialSymbol

type CaptionItem = {
  id: string
  icon?: IconName
  label: string
}
type Caption = {
  id: string
  variant: 'caption'
  overline?: string
  title?: string
  subtitle?: string
  description?: string[]
  list?: CaptionItem[]
}
type Image = {
  id: string
  variant: 'image'
  src: string
  alt: string
  objectFit?: CSSProperties['objectFit']
}

export type Column = Caption | Image
