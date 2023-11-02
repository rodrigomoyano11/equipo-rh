'use server'

import { getSupabase } from '@/utils/supabase/server'
import { DbInsert } from '@/utils/supabase/types'

const addCompany = async (data: DbInsert<'companies'>) => {
  const supabase = getSupabase()
  const table = supabase.from('companies')

  const response = await table.insert([data]).select()

  if (response.error) return null

  const [company] = response.data
  const { created_at: __, id: ___, ...restOfCompany } = company
  return restOfCompany
}

export { addCompany }
