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
      first_name,
      last_name,
      profile_picture,
      email
    )
    `,
  )

  if (response.error) return []
  return response.data
}

export { getApplications }
