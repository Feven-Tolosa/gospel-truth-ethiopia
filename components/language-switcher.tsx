'use client'

import { Languages } from 'lucide-react'
import { useLanguage } from '@/context/language-context'

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className='relative'>
      <div className='flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white'>
        <Languages size={16} />

        <select
          value={locale}
          onChange={(e) => setLocale(e.target.value as 'en' | 'am' | 'om')}
          className='bg-transparent outline-none'
        >
          <option value='en' className='text-black'>
            En
          </option>

          <option value='am' className='text-black'>
            አማ
          </option>

          <option value='om' className='text-black'>
            AO
          </option>
        </select>
      </div>
    </div>
  )
}
