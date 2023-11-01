import { getMiddlewareSupabase } from '@/utils/supabase/midleware'
import { NextRequest } from 'next/server'

const middleware = async (request: NextRequest) => {
  const { supabase, response } = getMiddlewareSupabase(request)

  const data = await supabase.auth.getSession()

  console.log('data', data)

  return response
}

export { middleware }
