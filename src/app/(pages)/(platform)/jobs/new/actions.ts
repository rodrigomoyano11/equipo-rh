'use server'

import { getSupabase } from '@/utils/supabase/server'
import { DbInsert } from '@/utils/supabase/types'

const addJob = async (data: DbInsert<'jobs'>) => {
  const supabase = getSupabase()
  const table = supabase.from('jobs')

  const response = await table.insert([data]).select()

  if (response.error) return null

  const [job] = response.data
  const { created_at: __, id: ___, ...restOfJob } = job
  return restOfJob
}

const getCompanies = async () => {
  const supabase = getSupabase()
  const table = supabase.from('companies')

  const response = await table.select('id, name')

  if (response.error) return []
  return response.data
}

export { addJob, getCompanies }
