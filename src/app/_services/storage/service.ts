/* eslint-disable no-console */

import { WithSupabase } from '@/db/types'
import {
  DeleteFileParams,
  GetFileInfoFromUrlParams,
  GetFileNameWithUserIdParams,
  UploadFileParams,
  GetFileNameParams,
} from './types'

const getFileName = ({ file, name }: GetFileNameParams) => {
  const lastIndexOfDot = file.name.lastIndexOf('.')
  const extension = file.name.slice(lastIndexOfDot)

  return {
    name,
    extension,
    fileName: `${name}${extension}`,
  }
}

const getFileNameWithUserId = async (params: WithSupabase<GetFileNameWithUserIdParams>) => {
  const { file, supabase } = params

  const { data, error } = await supabase.auth.getUser()

  if (!data.user || error) throw new Error("'Storage' service")

  return getFileName({ file, name: data.user.id })
}

const getFileInfoFromUrl = ({ url }: GetFileInfoFromUrlParams) => {
  const { pathname } = new URL(url)
  const fragments = pathname.split('/')

  const initialIndex = fragments.findIndex((fragment) => fragment === 'sign')

  const [bucket, ...restOfFragments] = fragments.slice(initialIndex + 1, fragments.length)

  const path = restOfFragments.join('/')

  return { path, bucket }
}

const uploadFile = async (params: WithSupabase<UploadFileParams>) => {
  const { file, selectedBucket, selectedPath = '', supabase, name, fileName } = params

  if (!file) return null

  const bucket = supabase.storage.from(selectedBucket as string)

  const currentFile = await bucket.list(selectedPath, { search: name })

  if (!currentFile.error) {
    currentFile.data.forEach(async (file) => {
      const { error } = await bucket.remove([file.name])
      if (error) console.error("'Storage' service", error)
    })
  }

  const uploadedFile = await bucket.upload(`${selectedPath}${fileName}`, file, {
    cacheControl: '3600',
    upsert: true,
  })

  if (uploadedFile.error) {
    console.error("'Storage' service", uploadedFile.error)
    return null
  }

  const url = await bucket.createSignedUrl(uploadedFile.data.path, 3600)

  if (url.error) {
    console.error("'Storage' service", url.error)
    return null
  }

  return url.data.signedUrl
}

const deleteFile = async ({ url, supabase }: WithSupabase<DeleteFileParams>) => {
  if (!url) return

  const fileInfo = getFileInfoFromUrl({ url })

  const bucket = supabase.storage.from(fileInfo.bucket)

  const { error } = await bucket.remove([fileInfo.path])

  if (error) console.error(error)
}

export { deleteFile, getFileInfoFromUrl, getFileNameWithUserId, uploadFile, getFileName }
