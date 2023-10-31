'use server'

import { getSupabase } from '@/utils/supabase/server'

const getJob = async (id: string) => {
  const supabase = getSupabase()
  const table = supabase.from('jobs')

  const response = await table
    .select('title, description, salary, visibility, companies (name, description, logo)')
    .eq('id', id)
    .single()

  if (response.error) return null
  return response.data
}

export { getJob }
