import { z } from 'zod'

const schema = z.object({
  id: z.string().optional(),
  createdAt: z.string().optional(),

  candidateId: z.string(),
  jobId: z.string(),
})

type Schema = z.infer<typeof schema>

export { schema }
export type { Schema }
