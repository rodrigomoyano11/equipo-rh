import { getSupabase } from '@/db/server'
import { EmailOtpType } from '@supabase/supabase-js'
import { NextResponse } from 'next/server'

const GET = async (request: Request) => {
  const { searchParams, origin } = new URL(request.url)

  const tokenHash = searchParams.get('token_hash')
  const type = searchParams.get('type') as EmailOtpType | null
  const next = searchParams.get('next') ?? '/'

  if (!tokenHash || !type) return NextResponse.redirect(origin)

  const supabase = getSupabase()
  // eslint-disable-next-line camelcase
  const { error } = await supabase.auth.verifyOtp({ type, token_hash: tokenHash })

  const redirectTo = error ? '/auth/auth-code-error' : `/${next.slice(1)}`
  return NextResponse.redirect(new URL(redirectTo, request.url))
}

export { GET }
