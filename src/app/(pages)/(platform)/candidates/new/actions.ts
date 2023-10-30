/* eslint-disable no-console */
/* eslint-disable camelcase */

'use server'
import { getSupabase } from '@/utils/supabase/server'
import { AddCandidateAction, AddCandidateRequest } from './types'
import { getObjectFromFormData } from '../../../../../utils/getObjectFromFormData/util'

const addCandidate: AddCandidateAction = async (_, formData) => {
  if (!formData) return undefined

  const supabase = getSupabase()
  const table = supabase.from('candidates')

  const data = getObjectFromFormData<AddCandidateRequest>(formData)

  const { can_relocate, languages, accepted_terms, ...restOfData } = data

  const response = await table
    .insert([
      {
        ...restOfData,
        can_relocate: can_relocate === 'yes',
        languages: [languages],
        accepted_terms: Boolean(accepted_terms),
      },
    ])
    .select()

  if (response.error) {
    console.error("Action 'addCandidate'", response.error)
    return undefined
  }

  const [candidate] = response.data

  const { created_at: __, id: ___, ...restOfCandidate } = candidate

  return restOfCandidate
}

export { addCandidate }
export type { AddCandidateRequest }
