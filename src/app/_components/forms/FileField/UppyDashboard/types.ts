import { FileFieldProps } from '../types'

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

type UseFileFieldProps = Pick<
  FileFieldProps,
  'allowedFileTypes' | 'bucket' | 'fileName' | 'maxFileSize' | 'path'
>

type UppyDashboardProps = Pick<FileFieldProps, 'isDisabled'> & UseFileFieldProps & { name: string }

export type { SelectedFile, UseFileFieldProps, UppyDashboardProps }
