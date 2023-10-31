import { useEffect, useState } from 'react'
import './styles.css'
import { Theme, ThemeProviderProps } from './types'

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  useEffect(() => {
    const selectedTheme = localStorage.getItem('theme') as Theme | null
    if (selectedTheme) setTheme(selectedTheme)
    else localStorage.setItem('theme', theme)

    document.body.classList.add(selectedTheme ?? theme)
  }, [theme])

  return children
}

export { ThemeProvider }
export type { ThemeProviderProps }
