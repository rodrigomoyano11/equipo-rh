import { Tables } from '@/utils/supabase/types'

type AddJobRequest = Omit<Tables<'jobs'>, 'created_at' | 'id'>

type AddJobResponse = AddJobRequest

type AddJobAction = (_?: AddJobResponse, formData?: FormData) => Promise<AddJobResponse | undefined>

export type { AddJobAction, AddJobRequest, AddJobResponse }
