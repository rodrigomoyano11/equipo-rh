/* eslint-disable no-console */

'use server'
import { getSupabase } from '@/utils/supabase/server'
import { AddApplicationAction, AddApplicationRequest } from './types'
import { getObjectFromFormData } from '@/utils/getObjectFromFormData/util'

const addApplication: AddApplicationAction = async (_, formData) => {
  if (!formData) return undefined

  const supabase = getSupabase()
  const table = supabase.from('applications')

  const data = getObjectFromFormData<AddApplicationRequest>(formData)

  const response = await table.insert([data]).select()

  if (response.error) {
    console.error("Action 'addApplication'", response.error)
    return undefined
  }

  const [application] = response.data

  const { created_at: __, id: ___, ...restOfApplication } = application

  return restOfApplication
}

const getCandidates = async () => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const response = await table.select('id, first_name, last_name')

  if (response.error) {
    console.error("Action 'getCandidates'", response.error)
    return []
  }

  return response.data
}

const getJobs = async () => {
  const supabase = getSupabase()
  const table = supabase.from('jobs')

  const response = await table.select('id, title, companies ( name )')

  if (response.error) {
    console.error("Action 'getJobs'", response.error)
    return []
  }

  return response.data
}

export { addApplication, getCandidates, getJobs }
export type { AddApplicationRequest }
