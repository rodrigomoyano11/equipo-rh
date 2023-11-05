import { Color } from '@/types/general'
import { MaterialSymbol } from 'material-symbols'
import { GRADES, OPTICAL_SIZES, SIZES_AS_NUMBER, SIZES_AS_STRING, WEIGHTS } from './constants'

type Variant = 'outlined' | 'rounded' | 'sharp'
type Size = (typeof SIZES_AS_NUMBER)[number] | keyof typeof SIZES_AS_STRING
type OpticalSize = (typeof OPTICAL_SIZES)[number]
type Grade = keyof typeof GRADES
type Weight = (typeof WEIGHTS)[number]

type IconName = MaterialSymbol

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

export type { IconName, IconProps }
