'use server'

import { getSupabase } from '@/db/server'

const getCompanies = async () => {
  const supabase = getSupabase()
  const table = supabase.from('companies')

  const response = await table.select('id, name')

  if (response.error) return []
  return response.data
}

export { getCompanies }
