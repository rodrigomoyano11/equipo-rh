import { uploadFile } from '@services/storage/'
import { getSupabase } from '@/utils/supabase/server'
import { Bucket } from '@/utils/supabase/types'
import { NextRequest, NextResponse } from 'next/server'

const POST = async (request: NextRequest) => {
  const params = request.nextUrl.searchParams
  const path = params.get('path')
  const bucket = params.get('bucket') as Bucket | null

  if (!path || !bucket) return NextResponse.error()

  const supabase = getSupabase()

  const formData = await request.formData()

  const file = formData.get('file') as File | null

  const url = await uploadFile({ file, selectedBucket: bucket, selectedPath: path, supabase })

  return NextResponse.json({ url })
}

export { POST }
