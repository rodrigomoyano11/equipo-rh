import { Tables } from '@/utils/supabase/types'

type AddCandidateRequest = Omit<
  Tables<'candidates'>,
  'can_relocate' | 'created_at' | 'id' | 'languages'
> & {
  can_relocate: 'no' | 'yes'
  languages: string
}

type AddCandidateResponse = Omit<AddCandidateRequest, 'can_relocate' | 'languages'> & {
  can_relocate: boolean | null
  languages: string[]
}

type AddCandidateAction = (
  _?: AddCandidateResponse,
  formData?: FormData,
) => Promise<AddCandidateResponse | undefined>

export type { AddCandidateAction, AddCandidateRequest, AddCandidateResponse }
