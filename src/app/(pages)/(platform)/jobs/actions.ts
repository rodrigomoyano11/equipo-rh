'use server'

import { getSupabase } from '@/utils/supabase/server'

const getJobs = async () => {
  const supabase = getSupabase()
  const table = supabase.from('jobs')

  const response = await table.select(
    'id, title, description, salary, visibility, companies (name, description, logo)',
  )

  if (response.error) return []
  return response.data
}

export { getJobs }
