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
        first_name,
        last_name,
        profile_picture,
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
