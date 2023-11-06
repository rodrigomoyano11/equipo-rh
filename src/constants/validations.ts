import { ZodTypeAny, z } from 'zod'

// Validations
const largeString = z.string().min(3).max(500)
const mediumString = z.string().min(3).max(300)
const smallString = z.string().min(3).max(50)

// Preprocessors
type Preprocessor = <Z extends ZodTypeAny>(validator: Z) => z.ZodEffects<Z>

const stringOrArrayToStringArray: Preprocessor = (validator) =>
  z.preprocess((value) => (typeof value === 'string' ? [value] : value), validator)

const stringToBoolean: Preprocessor = (validator) =>
  z.preprocess((value) => String(value) === 'true', validator)

const stringToNumber: Preprocessor = (validator) =>
  z.preprocess((value) => Number(value), validator)

export {
  largeString,
  mediumString,
  smallString,
  stringOrArrayToStringArray,
  stringToBoolean,
  stringToNumber,
}
