import { getFileName, getFileNameWithUserId, uploadFile } from '@services/storage/'
import { getSupabase } from '@/utils/supabase/server'
import { Bucket } from '@/utils/supabase/types'
import { NextRequest, NextResponse } from 'next/server'

const dynamic = 'force-dynamic'

const POST = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams

  const path = params.get('path')
  const bucket = params.get('bucket') as Bucket | null
  const name = params.get('name')

  const formData = await request.formData()
  const file = formData.get('file') as File | null

  if (!bucket || !file) return NextResponse.error()

  const supabase = getSupabase()
  const convertedName = name
    ? getFileName({ file, name })
    : await getFileNameWithUserId({ file, supabase })

  if (!convertedName.name || !convertedName.fileName) return NextResponse.error()

  const url = await uploadFile({
    file,
    selectedBucket: bucket,
    selectedPath: path ?? undefined,
    supabase,
    name: convertedName.name,
    fileName: convertedName.fileName,
  })

  return NextResponse.json({ url })
}

export { POST, dynamic }
