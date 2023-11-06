'use server'

import { getSupabase } from '@/db/server'
import { getPaginationRange } from '@/utils/getPaginationRange'

const buildQuery = (searchValue?: string) => {
  const supabase = getSupabase()
  const table = supabase.from('companies')

  const selected = table.select(`id, name, description, logo`)

  const filtered = searchValue ? selected.ilike('name', `%${searchValue}%`) : selected

  return filtered
}

const getCompanies = async (searchValue?: string, cursor = 0) => {
  const { from, to } = getPaginationRange(cursor)

  const query = await buildQuery(searchValue).range(from, to)

  if (query.error) return { cursor: null, items: [] }
  return { cursor, items: query.data }
}

export { getCompanies }
