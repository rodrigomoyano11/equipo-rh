import { FieldProps } from '@/types/forms'
import { Bucket } from '@/db/types'

type FileFieldProps = FieldProps & {
  bucket: Bucket
  path?: string
  allowedFileTypes?: string[]
  fileName?: string

  // maxFileSize --> In MB
  maxFileSize?: number
}

export type { FileFieldProps }
