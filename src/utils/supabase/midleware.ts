import { CookieMethods, createServerClient } from '@supabase/ssr'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { NextResponse, NextRequest } from 'next/server'

const getMiddlewareSupabase = (request: NextRequest) => {
  let response = NextResponse.next({ request: { headers: request.headers } })

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) throw new Error('Missing Supabase URL or Anon Key')

  const methods: CookieMethods = {
    get: (name) => request.cookies.get(name)?.value,

    set: (name, value, options) => {
      request.cookies.set({ ...(options as ResponseCookie), name, value })
      response = NextResponse.next({ request: { headers: request.headers } })
      response.cookies.set({ ...(options as ResponseCookie), name, value })
    },

    remove: (name, options) => {
      request.cookies.set({ ...(options as ResponseCookie), name, value: '' })
      response = NextResponse.next({ request: { headers: request.headers } })
      response.cookies.set({ ...(options as ResponseCookie), name, value: '' })
    },
  }

  const supabase = createServerClient(url, key, { cookies: methods })

  return { supabase, response }
}

export { getMiddlewareSupabase }
