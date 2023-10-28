import { getSupabase } from '@/utils/supabase/server'
import { NextResponse } from 'next/server'

const GET = async (request: Request) => {
  const { searchParams, origin } = new URL(request.url)

  const code = searchParams.get('code')
  const next = searchParams.get('next') ?? '/'

  if (!code) return NextResponse.redirect(origin)

  const supabase = getSupabase()
  const { error } = await supabase.auth.exchangeCodeForSession(code)

  const redirectTo = error ? '/auth/auth-code-error' : `/${next.slice(1)}`
  return NextResponse.redirect(new URL(redirectTo, request.url))
}

export { GET }
