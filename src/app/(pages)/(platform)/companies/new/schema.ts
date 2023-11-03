/* eslint-disable camelcase */

import { mediumString, smallString } from '@/constants/validations'
import { z } from 'zod'

const schema = z.object({
  id: z.string().optional(),
  created_at: z.string().optional(),

  name: smallString,
  description: mediumString.optional(),
  logo: z.string().url().optional(),
})

type Schema = z.infer<typeof schema>

export { schema }
export type { Schema }
