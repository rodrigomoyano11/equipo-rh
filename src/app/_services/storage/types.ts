import { Bucket } from '@/db/types'

type GetFileNameParams = {
  file: File
  name: string
}

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
  name: string
  fileName: string
}

type DeleteFileParams = {
  url: string
}

export type {
  DeleteFileParams,
  GetFileInfoFromUrlParams,
  GetFileNameWithUserIdParams,
  UploadFileParams,
  GetFileNameParams,
}
