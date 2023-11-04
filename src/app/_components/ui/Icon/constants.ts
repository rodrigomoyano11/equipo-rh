const SIZES_AS_NUMBER = [12, 16, 20, 24, 32, 40, 48, 64, 96, 128] as const

const SIZES_AS_STRING = {
  small: 20,
  medium: 24,
  large: 32,
} as const

const OPTICAL_SIZES = [20, 24, 40, 48] as const

const GRADES = { low: -0.25, medium: 0, high: 200 } as const

const WEIGHTS = [100, 200, 300, 400, 500, 600, 700] as const

export { SIZES_AS_NUMBER, SIZES_AS_STRING, GRADES, OPTICAL_SIZES, WEIGHTS }
