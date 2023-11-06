'use server'

import { getSupabase } from '@/db/server'
import { getPaginationRange } from '@/utils/getPaginationRange'

const buildQuery = (searchValue?: string) => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const selected = table.select('id, firstName, lastName, profilePicture, email')

  const filtered = searchValue
    ? selected.or(
        `firstName.ilike.%${searchValue}%,lastName.ilike.%${searchValue}%,email.ilike.%${searchValue}%`,
      )
    : selected

  return filtered
}

const getCandidates = async (searchValue?: string, cursor = 0) => {
  const { from, to } = getPaginationRange(cursor)

  const query = await buildQuery(searchValue).range(from, to)


  if (query.error) return { cursor: null, items: [] }
  return { cursor, items: query.data }
}

export { getCandidates }
