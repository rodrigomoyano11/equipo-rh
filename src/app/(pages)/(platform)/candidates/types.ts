import { PaginatedItem } from '@/types/utilities'
import { getCandidates } from './actions'

type Candidate = PaginatedItem<typeof getCandidates>

export type { Candidate }
