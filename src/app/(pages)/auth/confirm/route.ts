/* eslint-disable camelcase */

import { getSupabase } from '@/utils/supabase/server'
import { EmailOtpType } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const GET = async (request: Request) => {
  const { searchParams, origin } = new URL(request.url)

  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  if (!token_hash || !type) return NextResponse.redirect(origin)

  const supabase = getSupabase()
  const { error } = await supabase.auth.verifyOtp({ type, token_hash })

  const redirectTo = error ? '/auth/auth-code-error' : `/${next.slice(1)}`
  return NextResponse.redirect(new URL(redirectTo, request.url))
}

export { GET }
