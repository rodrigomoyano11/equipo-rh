/* eslint-disable camelcase */

'use server'

import { getSupabase } from '@/utils/supabase/server'
import { DbInsert } from '@/utils/supabase/types'

const addCandidate = async (data: DbInsert<'candidates'>) => {
  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const response = await table.insert([data]).select()

  if (response.error) {
    console.error("Action 'addCandidate'", response.error)
    return undefined
  }

  const [candidate] = response.data
  const { created_at: __, id: ___, ...restOfCandidate } = candidate
  return restOfCandidate
}

export { addCandidate }
