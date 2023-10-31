'use server'

import { getSupabase } from '@/utils/supabase/server'

const getCompany = async (id: string) => {
  const supabase = getSupabase()
  const table = supabase.from('companies')

  const response = await table.select('name, description, logo').eq('id', id).single()

  if (response.error) return null
  return response.data
}

export { getCompany }
