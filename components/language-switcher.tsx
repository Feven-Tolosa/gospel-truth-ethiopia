'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className='relative'>
      <div className='flex items-center gap-2 rounded-md border border-white/15 text-white/80 transition hover:border-gold hover:text-gold px-3 py-2 '>
        <Languages size={16} />

        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as 'en' | 'am' | 'om')}
          className='bg-transparent outline-none border-white/15 text-white/80 transition hover:border-gold hover:text-gold'
        >
          <option value='en' className='bg-navy text-white/80 hover:text-gold'>
            En
          </option>

          <option value='am' className='bg-navy text-white/80 hover:text-gold'>
            አማ
          </option>

          <option value='om' className='bg-navy text-white/80 hover:text-gold'>
            AO
          </option>
        </select>
      </div>
    </div>
  )
}
