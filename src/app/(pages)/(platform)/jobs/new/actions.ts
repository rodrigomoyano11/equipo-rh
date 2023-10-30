/* eslint-disable no-console */

'use server'
import { getSupabase } from '@/utils/supabase/server'
import { AddJobAction, AddJobRequest } from './types'
import { getObjectFromFormData } from '@/utils/getObjectFromFormData/util'

const addJob: AddJobAction = async (_, formData) => {
  if (!formData) return undefined

  const supabase = getSupabase()
  const table = supabase.from('jobs')

  const data = getObjectFromFormData<AddJobRequest>(formData)

  const response = await table.insert([data]).select()

  if (response.error) {
    console.error("Action 'addJob'", response.error)
    return undefined
  }

  const [job] = response.data

  const { created_at: __, id: ___, ...restOfJob } = job

  return restOfJob
}

const getCompanies = async () => {
  const supabase = getSupabase()
  const table = supabase.from('companies')

  const response = await table.select('id, name')

  if (response.error) {
    console.error("Action 'getCompanies'", response.error)
    return []
  }

  return response.data
}

export { addJob, getCompanies }
export type { AddJobRequest }
