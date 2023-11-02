'use client'

import { init } from 'i18next'
import { useEffect } from 'react'
import { z } from 'zod'
import { zodI18nMap } from 'zod-i18n-map'
import translation from 'zod-i18n-map/locales/es/zod.json'
import { ZodI18nProviderProps } from './types'

const ZodI18nProvider = ({ children }: ZodI18nProviderProps) => {
  useEffect(() => {
    const options = { lng: 'es', resources: { es: { zod: translation } } }

    void init(options).then(() => z.setErrorMap(zodI18nMap))
  }, [])

  return children
}

export { ZodI18nProvider }
