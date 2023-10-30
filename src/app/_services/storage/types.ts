import { Bucket } from '@/utils/supabase/types'

type GetFileInfoFromUrlParams = {
  url: string
}

type GetFileNameWithUserIdParams = {
  file: File
}

type UploadFileParams = {
  file: File | null
  selectedBucket: Bucket
  selectedPath?: string
}

type DeleteFileParams = {
  url: string
}

export type {
  DeleteFileParams,
  GetFileInfoFromUrlParams,
  GetFileNameWithUserIdParams,
  UploadFileParams,
}
