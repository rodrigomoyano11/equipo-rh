'use server'

import { getSupabase } from '@/utils/supabase/server'
import { Schema, schema } from './schema'

const addCompany = async (data: Schema) => {
  const validated = schema.safeParse(data)
  if (!validated.success) throw new Error(validated.error.message)

  const supabase = getSupabase()
  const table = supabase.from('companies')

  const response = await table.insert([validated.data]).select()

  if (response.error) return null

  const [company] = response.data
  const { createdAt: __, id: ___, ...restOfCompany } = company
  return restOfCompany
}

export { addCompany }
