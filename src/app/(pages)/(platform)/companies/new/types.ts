import { Tables } from '@/utils/supabase/types'

type AddCompanyRequest = Omit<Tables<'companies'>, 'created_at' | 'id'>

type AddCompanyResponse = AddCompanyRequest

type AddCompanyAction = (
  _?: AddCompanyResponse,
  formData?: FormData,
) => Promise<AddCompanyResponse | undefined>

export type { AddCompanyAction, AddCompanyRequest, AddCompanyResponse }
