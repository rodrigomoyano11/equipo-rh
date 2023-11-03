import { Visibility } from '@/constants/enums'
import { largeString, smallString } from '@/constants/validations'
import { z } from 'zod'

const schema = z.object({
  id: z.string().optional(),
  createdAt: z.string().optional(),

  title: smallString,
  description: largeString.optional(),
  salary: z.number().positive().optional(),
  visibility: z.enum(Visibility),

  companyId: z.string(),
})

type Schema = z.infer<typeof schema>

export { schema }
export type { Schema }
