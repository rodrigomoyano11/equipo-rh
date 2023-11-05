'use server'

import { getSupabase } from '@/db/server'

const getSavedJob = async (id: string) => {
  const supabase = getSupabase()
  const table = supabase.from('savedJobs')

  const response = await table
    .select(
      `
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
    .eq('id', id)
    .single()

  if (response.error) return null
  return response.data
}

export { getSavedJob }
