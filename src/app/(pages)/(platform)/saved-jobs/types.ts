import { PaginatedItem } from '@/types/utilities'
import { getSavedJobs } from './actions'

type SavedJob = PaginatedItem<typeof getSavedJobs>

export type { SavedJob }
