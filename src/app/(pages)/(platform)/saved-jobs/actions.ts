'use server'

import { getSupabase } from '@/db/server'

const getSavedJobs = async () => {
  const supabase = getSupabase()
  const table = supabase.from('savedJobs')

  const response = await table.select(
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

  if (response.error) return []
  return response.data
}

export { getSavedJobs }
