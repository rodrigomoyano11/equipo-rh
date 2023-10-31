'use server'

import { getSupabase } from '@/utils/supabase/server'

const getCompanies = async () => {
  const supabase = getSupabase()
  const table = supabase.from('companies')

  const response = await table.select('id, name, description, logo')

  if (response.error) return []
  return response.data
}

export { getCompanies }
