'use server'

import { getSupabase } from '@/db/server'

const getCandidates = async () => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const response = await table.select('id, firstName, lastName, profilePicture, email')

  if (response.error) return []
  return response.data
}

export { getCandidates }
