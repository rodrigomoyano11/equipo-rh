import { PaginatedItem } from '@/types/utilities'
import { getApplications } from './actions'

type Application = PaginatedItem<typeof getApplications>

export type { Application }
