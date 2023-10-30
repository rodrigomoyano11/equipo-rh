import { Tables } from '@/utils/supabase/types'

type AddApplicationRequest = Omit<Tables<'applications'>, 'created_at' | 'id'>

type AddApplicationResponse = AddApplicationRequest

type AddApplicationAction = (_?: AddApplicationResponse, formData?: FormData) => Promise<AddApplicationResponse | undefined>

export type { AddApplicationAction, AddApplicationRequest, AddApplicationResponse }
