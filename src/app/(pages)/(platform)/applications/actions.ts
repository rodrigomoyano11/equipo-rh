'use server'

import { getSupabase } from '@/utils/supabase/server'

const getApplications = async () => {
  const supabase = getSupabase()
  const table = supabase.from('applications')

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

export { getApplications }
