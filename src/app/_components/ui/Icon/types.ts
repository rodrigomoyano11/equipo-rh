import { MaterialSymbol } from 'material-symbols'
import { GRADES, OPTICAL_SIZES, SIZES_AS_NUMBER, SIZES_AS_STRING, WEIGHTS } from './constants'

type Variant = 'outlined' | 'rounded' | 'sharp'
type Size = (typeof SIZES_AS_NUMBER)[number] | keyof typeof SIZES_AS_STRING
type OpticalSize = (typeof OPTICAL_SIZES)[number]
type Grade = keyof typeof GRADES
type Weight = (typeof WEIGHTS)[number]

type IconName = MaterialSymbol

export type { Grade, IconName, OpticalSize, Size, Variant, Weight }
