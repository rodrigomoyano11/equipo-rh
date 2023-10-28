import { CookieMethods, CookieOptions, createServerClient } from '@supabase/ssr'
import { cookies as getCookies } from 'next/headers'
import { Database } from './types'

const getSupabase = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) throw new Error('Missing Supabase URL or Anon Key')

  const cookies = getCookies()

  const methods: CookieMethods = {
    get: (name: string) => cookies.get(name)?.value,

    set: (name: string, value: string, options: CookieOptions) => {
      cookies.set({ name, value, ...options })
    },

    remove: (name: string, options: CookieOptions) => {
      cookies.delete({ name, ...options })
    },
  }

  return createServerClient<Database>(url, key, {
    cookies: methods,
  })
}

export { getSupabase }
