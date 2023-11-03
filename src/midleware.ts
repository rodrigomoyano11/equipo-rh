import { getMiddlewareSupabase } from '@/utils/supabase/midleware'
import { NextRequest } from 'next/server'

const middleware = async (request: NextRequest) => {
  const { supabase, response } = getMiddlewareSupabase(request)

  await supabase.auth.getSession()

  return response
}

export { middleware }
