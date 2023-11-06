'use server'

import { getSupabase } from '@/db/server'
import { getPaginationRange } from '@/utils/getPaginationRange'

const getJobs = async (searchValue?: string, cursor = 0) => {
  const buildQuery = () => {
    const supabase = getSupabase()
    const table = supabase.from('jobs')

    const selected = table.select(
      'id, title, description, salary, visibility, companies (name, description, logo)',
    )

    const filtered = searchValue ? selected.ilike('title', `%${searchValue}%`) : selected

    return filtered
  }

  const { from, to } = getPaginationRange(cursor)

  const query = await buildQuery().range(from, to)

  if (query.error) return { cursor: null, items: [] }
  return { cursor, items: query.data }
}

export { getJobs }
