import { PaginatedItem } from '@/types/utilities'
import { getJobs } from './actions'

type Job = PaginatedItem<typeof getJobs>

export type { Job }
