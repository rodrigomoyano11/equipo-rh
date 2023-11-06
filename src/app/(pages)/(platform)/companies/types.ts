import { PaginatedItem } from '@/types/utilities'
import { getCompanies } from './actions'

type Company = PaginatedItem<typeof getCompanies>

export type { Company }
