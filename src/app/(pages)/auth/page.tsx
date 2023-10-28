'use client'

import { getSupabase } from '@/utils/supabase/client'
import { Auth, AuthCard } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { translations } from './translations'

const AuthPage = () => {
  // Hooks
  const router = useRouter()

  // States
  const [authIsLoaded, setAuthIsLoaded] = useState(false)

  // Data
  const supabase = getSupabase()

  // Effects
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      const isLoggedIn = (event === 'INITIAL_SESSION' || event === 'SIGNED_IN') && session

      if (isLoggedIn) router.push('/')
      else setAuthIsLoaded(true)
    })

    return () => data.subscription.unsubscribe()
  }, [router, supabase.auth])

  // Props
  const authProps = { localization: { variables: translations }, appearance: { theme: ThemeSupa } }

  // Render
  if (!authIsLoaded) return null
  return (
    <div>
      <h1>Auth Page</h1>

      <AuthCard>
        <Auth
          providers={['google']}
          supabaseClient={supabase}
          {...authProps}
          queryParams={{ prompt: 'select_account' }}
          redirectTo={`${window.location.origin}/auth/callback`}
        />
      </AuthCard>
    </div>
  )
}

export default AuthPage
