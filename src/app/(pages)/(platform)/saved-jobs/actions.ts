'use server'

import { getSupabase } from '@/db/server'
import { getPaginationRange } from '@/utils/getPaginationRange'

const getSavedJobs = async (searchValue?: string, cursor = 0) => {
  const buildQuery = () => {
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

  const { from, to } = getPaginationRange(cursor)

  const query = await buildQuery().range(from, to)

  if (query.error) return { cursor: null, items: [] }
  return { cursor, items: query.data }
}

export { getSavedJobs }
