import { Bucket } from '@/utils/supabase/types'

type SelectedFile = {
  source: string
  id: string
  name: string
  extension: string
  meta: {
    relativePath: null
    name: string
    type: string
  }
  type: string
  data: {
    lastModified: number
    lastModifiedDate: Date
    name: string
  }
  progress: {
    percentage: number
    bytesUploaded: number
    bytesTotal: number
    uploadComplete: boolean
    uploadStarted: number | null
    postprocess: null
  }
  size: number
  isRemote: boolean
  remote: string
  preview?: string
  uploadURL?: string
  isPaused: boolean
  response?: {
    status: number
    body: {
      url: string
    }
    uploadURL: string
  }
}

type FileFieldProps = {
  name: string
  bucket: Bucket
  path?: string
  allowedFileTypes?: string[]
}

type UseFileFieldProps = Omit<FileFieldProps, 'name'>

export type { SelectedFile, UseFileFieldProps, FileFieldProps }
