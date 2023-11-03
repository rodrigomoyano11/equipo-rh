import { z } from 'zod'

const largeString = z.string().min(3).max(500)
const mediumString = z.string().min(3).max(300)
const smallString = z.string().min(3).max(50)

export { largeString, mediumString, smallString }
