'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'

type Locale = 'en' | 'am' | 'om'

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
}

const LanguageContext = createContext<LanguageContextType | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>('en')

  useEffect(() => {
    const saved = localStorage.getItem('language')

    if (saved === 'en' || saved === 'am' || saved === 'om') {
      setLocale(saved)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('language', locale)
  }, [locale])

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }

  return context
}
