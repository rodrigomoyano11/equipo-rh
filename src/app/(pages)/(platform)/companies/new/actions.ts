/* eslint-disable no-console */

'use server'
import { getSupabase } from '@/utils/supabase/server'
import { AddCompanyAction, AddCompanyRequest } from './types'
import { getObjectFromFormData } from '@/utils/getObjectFromFormData/util'

const addCompany: AddCompanyAction = async (_, formData) => {
  if (!formData) return undefined

  const supabase = getSupabase()
  const table = supabase.from('companies')

  const data = getObjectFromFormData<AddCompanyRequest>(formData)

  const response = await table.insert([data]).select()

  if (response.error) {
    console.error("Action 'addCompany'", response.error)
    return undefined
  }

  const [company] = response.data

  const { created_at: __, id: ___, ...restOfCompany } = company

  return restOfCompany
}

export { addCompany }
export type { AddCompanyRequest }
