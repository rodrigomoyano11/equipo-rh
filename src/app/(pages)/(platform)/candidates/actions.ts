'use server'

import { getSupabase } from '@/utils/supabase/server'

const getCandidates = async () => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const response = await table.select('id, first_name, last_name, profile_picture, email')

  if (response.error) return []
  return response.data
}

export { getCandidates }
