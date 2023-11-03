/* eslint-disable camelcase */

import { z } from 'zod'

const schema = z.object({
  id: z.string().optional(),
  created_at: z.string().optional(),

  candidate_id: z.string(),
  job_id: z.string(),
})

type Schema = z.infer<typeof schema>

export { schema }
export type { Schema }
