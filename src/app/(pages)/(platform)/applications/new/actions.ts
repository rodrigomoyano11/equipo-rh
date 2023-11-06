'use server'

import { getSupabase } from '@/db/server'
import { Schema, schema } from './schema'

const checkIfApplicationExists = async (data: Schema) => {
  const supabase = getSupabase()
  const table = supabase.from('applications')

  const response = await table
    .select('id')
    .eq('jobId', data.jobId)
    .eq('candidateId', data.candidateId)

  if (response.error) return false
  return response.data.length > 0
}

const addApplication = async (data: Schema) => {
  const validated = schema.safeParse(data)
  if (!validated.success) throw new Error(validated.error.message)

  const supabase = getSupabase()
  const table = supabase.from('applications')

  const applicationExists = await checkIfApplicationExists(validated.data)
  if (applicationExists) throw new Error('Application already exists')

  const response = await table.insert([validated.data]).select()

  if (response.error) return null

  const [application] = response.data

  const { createdAt: __, id: ___, ...restOfApplication } = application

  return restOfApplication
}

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

export { addApplication, getCandidates, getJobs }
