'use server'

import { getSupabase } from '@/utils/supabase/server'
import { DbInsert } from '@/utils/supabase/types'

const addApplication = async (data: DbInsert<'applications'>) => {
  const supabase = getSupabase()
  const table = supabase.from('applications')

  const response = await table.insert([data]).select()

  if (response.error) return null

  const [application] = response.data

  const { created_at: __, id: ___, ...restOfApplication } = application

  return restOfApplication
}

const getCandidates = async () => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const response = await table.select('id, first_name, last_name')

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

export { addApplication, getCandidates, getJobs }
