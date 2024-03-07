// import { largeString, smallString } from '@/constants/validations'
import { z } from 'zod'

export const contactFormValidations = z.object({
  email: z.string().email(),
  name: z.string(),
  subject: z.string(),
  message: z.string(),
})
