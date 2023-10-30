import { deleteFile } from '@/app/_services/storage/service'
import { getSupabase } from '@/utils/supabase/client'
import Compressor from '@uppy/compressor'
import { Locale, Uppy } from '@uppy/core'
import '@uppy/core/dist/style.min.css'
import '@uppy/dashboard/dist/style.min.css'
import ImageEditor from '@uppy/image-editor'
import '@uppy/image-editor/dist/style.min.css'
import esES from '@uppy/locales/lib/es_ES'
import XHRUpload from '@uppy/xhr-upload'
import { useCallback, useEffect, useState } from 'react'
import { SelectedFile, UseFileFieldProps } from './types'

const getUppy = () => {
  const locale = esES as Locale
  const uppy = new Uppy({ locale })

  uppy.use(ImageEditor)
  uppy.use(Compressor)
  uppy.use(XHRUpload, { endpoint: '' })

  return uppy
}

const useFileField = ({ bucket, path, allowedFileTypes, fileName }: UseFileFieldProps) => {
  // States
  const [uppy] = useState(getUppy)
  const [isOpen, setIsOpen] = useState(false)
  const [url, setUrl] = useState('')

  // Methods
  const setInitialOptions = useCallback(() => {
    const restrictions = {
      maxNumberOfFiles: 1,
      minNumberOfFiles: 1,
      maxFileSize: 50 * 1024 * 1024,
      allowedFileTypes,
    }

    uppy.setOptions({ restrictions })

    const endpoint = new URL('/api/upload', window.location.origin)

    endpoint.searchParams.append('bucket', bucket)
    if (path) endpoint.searchParams.append('path', path)
    if (fileName) endpoint.searchParams.append('name', fileName)

    uppy.getPlugin('XHRUpload')?.setOptions({ endpoint, method: 'POST', fieldName: 'file' })
  }, [allowedFileTypes, bucket, fileName, path, uppy])

  const onFileRemove = useCallback(() => {
    uppy.on('file-removed', (_file, reason) => {
      if (reason !== 'removed-by-user') return

      const file = _file as unknown as SelectedFile | undefined

      const url = file?.uploadURL

      if (!url) return

      const supabase = getSupabase()
      void deleteFile({ url, supabase })
    })
  }, [uppy])

  const onUploadComplete = useCallback(() => {
    uppy.on('complete', (result) => {
      const [_file] = result.successful
      const file = _file as unknown as SelectedFile | undefined

      const url = file?.uploadURL

      if (!url) return
      setUrl(url)
    })
  }, [uppy])

  // Handlers
  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // Effects
  useEffect(() => {
    setInitialOptions()

    onFileRemove()

    onUploadComplete()
  }, [onFileRemove, onUploadComplete, setInitialOptions])

  return { url, openModal, closeModal, uppy, isOpen }
}

export { useFileField }
