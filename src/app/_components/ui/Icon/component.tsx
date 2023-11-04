'use client'

import { Color } from '@/types/general'
import { getNearestFromValues } from '@/utils/getNearestFromValues'
import 'material-symbols'
import { CSSProperties, useRef } from 'react'
import { GRADES, OPTICAL_SIZES, SIZES_AS_STRING } from './constants'
import { Grade, IconName, OpticalSize, Size, Variant, Weight } from './types'

type IconProps = {
  name: IconName
  variant?: Variant
  size?: Size
  fill?: Color
  options?: {
    fill?: 'no' | 'yes'
    weight?: Weight
    grade?: Grade
    opticalSize?: OpticalSize
  }
  className?: string
}

const IconComponent = (props: IconProps) => {
  // Props
  const {
    name,
    variant = 'outlined',
    size = 'medium',
    fill = 'currentColor',
    options,
    className = '',
  } = props

  const {
    fill: withFillProp = 'no',
    weight = 400,
    grade: gradeProp = 'medium',
    opticalSize: opticalSizeProp,
  } = options ?? {}

  // Hooks
  const elementRef = useRef<HTMLSpanElement>(null)

  // Data
  const withFill = withFillProp === 'yes' ? 1 : 0
  const grade = GRADES[gradeProp]

  // Methods
  const getWidth = () => {
    if (opticalSizeProp) return opticalSizeProp
    if (!elementRef.current) return 48

    const { width } = elementRef.current.getBoundingClientRect()

    const nearestWidth = getNearestFromValues(OPTICAL_SIZES, width)

    return nearestWidth
  }

  const getSize = () => {
    if (typeof size === 'number') return size

    return SIZES_AS_STRING[size]
  }

  // Styles
  const spanClassNames = `material-symbols-${variant} ${className}`

  const spanStyles: CSSProperties = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    fontVariationSettings: `"FILL" ${withFill}, "wght" ${weight}, "GRAD" ${grade}, "opsz" ${getWidth()}`,
    fontSize: `${getSize()}px`,
    color: fill,
  }

  // Render
  return (
    <span ref={elementRef} className={spanClassNames} style={spanStyles}>
      {name}
    </span>
  )
}

export { IconComponent as Icon }
export type { IconProps }
