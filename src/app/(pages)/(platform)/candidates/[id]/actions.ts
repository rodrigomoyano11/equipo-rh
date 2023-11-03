'use server'

import { getSupabase } from '@/utils/supabase/server'

const getCandidate = async (id: string) => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const response = await table
    .select('firstName, lastName, profilePicture, email')
    .eq('id', id)
    .single()

  if (response.error) return null
  return response.data
}

export { getCandidate }
