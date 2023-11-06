'use server'

import { getSupabase } from '@/db/server'
import { getPaginationRange } from '@/utils/getPaginationRange'

const buildQuery = (searchValue?: string) => {
  const supabase = getSupabase()
  const table = supabase.from('savedJobs')

  const selected = table.select(
    `
    id,

    jobs (
      title,
      companies (
        name,
        logo
      )
    ),

    candidates (
      firstName,
      lastName,
      profilePicture,
      email
    )
    `,
  )

  const filtered = searchValue
    ? selected.ilike('jobs.title', `%${searchValue}%`).not('jobs', 'is', null)
    : selected

  return filtered
}

const getSavedJobs = async (searchValue?: string, cursor = 0) => {
  const { from, to } = getPaginationRange(cursor)

  const query = await buildQuery(searchValue).range(from, to)

  if (query.error) return { cursor: null, items: [] }
  return { cursor, items: query.data }
}

export { getSavedJobs }
