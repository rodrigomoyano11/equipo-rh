'use server'

import { getSupabase } from '@/utils/supabase/server'

const getApplication = async (id: string) => {
  const supabase = getSupabase()
  const table = supabase.from('applications')

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

export { getApplication }
