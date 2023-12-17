'use server'

import { getSupabase } from '@/db/server'

const getCandidates = async () => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const response = await table.select('id, firstName, lastName')

  if (response.error) return []
  return response.data
}

const getJobs = async () => {
  const supabase = getSupabase()
  const table = supabase.from('jobs')

  const response = await table.select('id, title, companies ( name )')

  if (response.error) return []
  return response.data
}

export { getCandidates, getJobs }
