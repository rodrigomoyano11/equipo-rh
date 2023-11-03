'use server'

import { getSupabase } from '@/utils/supabase/server'
import { Schema, schema } from './schema'

const addJob = async (data: Schema) => {
  const validated = schema.safeParse(data)
  if (!validated.success) throw new Error(validated.error.message)

  const supabase = getSupabase()
  const table = supabase.from('jobs')

  const response = await table.insert([validated.data]).select()

  if (response.error) return null

  const [job] = response.data
  const { createdAt: __, id: ___, ...restOfJob } = job
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
