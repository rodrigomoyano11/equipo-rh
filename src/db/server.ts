import { CookieMethods, createServerClient } from '@supabase/ssr'
import { ResponseCookie } from 'next/dist/compiled/@edge-runtime/cookies'
import { cookies as getCookies } from 'next/headers'
import { Database } from './types'

const getSupabase = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) throw new Error('Missing Supabase URL or Anon Key')

  const cookies = getCookies()

  const methods: CookieMethods = {
    get: (name) => cookies.get(name)?.value,

    set: (name, value, options: ResponseCookie) => {
      try {
        cookies.set({ ...options, name, value })
      } catch {
        // It's a Server Component
      }
    },

    remove: (name, options: ResponseCookie) => {
      try {
        cookies.delete({ ...options, name })
      } catch {
        // It's a Server Component
      }
    },
  }

  return createServerClient<Database>(url, key, { cookies: methods })
}

export { getSupabase }
