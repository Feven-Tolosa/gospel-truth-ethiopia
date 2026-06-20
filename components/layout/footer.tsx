'use client'

import Link from 'next/link'
import { Phone, MapPin, Globe, Send } from 'lucide-react'
import { SlSocialFacebook } from 'react-icons/sl'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

export function Footer() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <footer className='relative overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-gray-950'>
      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent' />

      <div className='absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl' />

      <div className='mx-auto max-w-7xl px-6 py-16'>
        <div className='grid gap-12 border-b border-slate-200 pb-12 dark:border-white/10 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand */}
          <div>
            <h3 className='font-serif text-2xl font-bold text-gold'>
              Gospel Truth Ethiopia
            </h3>

            <p className='mt-2 font-ethiopic text-sm text-gold/80'>
              የወንጌል እውነት ቤተ ክርስቲያን
            </p>

            <p className='mt-5 text-sm leading-relaxed text-slate-600 dark:text-white/50'>
              {t.footer.description}
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold'>
              {t.footer.explore}
            </h4>

            <ul className='space-y-3'>
              {[
                [t.footer.aboutUs, '/about'],
                [t.footer.beliefs, '/beliefs'],
                [t.footer.sermons, '/playlists'],
                [t.footer.serviceTimes, '/schedule'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className='text-sm text-slate-600 transition hover:text-gold dark:text-white/50 dark:hover:text-gold'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold'>
              {t.footer.resources}
            </h4>

            <div className='space-y-4 text-sm'>
              <Link
                href='/books'
                className='flex items-center gap-3 text-slate-600 hover:text-gold dark:text-white/50'
              >
                {t.footer.books}
              </Link>

              <a
                href='https://t.me/DawitFassilMinistry'
                target='_blank'
                className='flex items-center gap-3 text-slate-600 hover:text-gold dark:text-white/50'
              >
                {t.footer.audioSermons}
              </a>

              <Link
                href='/prayer'
                className='flex items-center gap-3 text-slate-600 dark:text-white/50 hover:text-gold'
              >
                {t.footer.prayerRequests}
              </Link>

              <Link
                href='#'
                className='flex items-center gap-3 text-slate-600 hover:text-gold dark:text-white/50'
              >
                {t.footer.eventsCalendar}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold'>
              {t.footer.contact}
            </h4>

            <div className='space-y-4 text-sm'>
              <a
                href='tel:+251917804407'
                className='flex items-center gap-3 text-slate-600 hover:text-gold dark:text-white/50'
              >
                <Phone size={16} />
                +251 917 804 407
              </a>

              <a
                href='tel:+251906202626'
                className='flex items-center gap-3 text-slate-600 hover:text-gold dark:text-white/50'
              >
                <Phone size={16} />
                +251 906 202 626
              </a>

              <div className='flex items-center gap-3 text-slate-600 dark:text-white/50 hover:text-gold'>
                <MapPin size={16} />
                Jimma, Ethiopia
              </div>

              <a
                href='https://gospeltruthethiopia.com'
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-3 text-slate-600 hover:text-gold dark:text-white/50'
              >
                <Globe size={16} />
                gospeltruthethiopia.com
              </a>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center justify-between gap-6 pt-8 md:flex-row'>
          <p className='text-xs text-slate-500 dark:text-white/30'>
            © {new Date().getFullYear()} Gospel Truth Church Ethiopia.{' '}
            {t.footer.copyright}
          </p>

          <div className='flex gap-3'>
            <a
              href='https://www.facebook.com/Dawit-Fassil-Ministry-1873139229468315/'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-slate-200 p-2 transition hover:border-gold hover:bg-gold/10 dark:border-white/10'
            >
              <SlSocialFacebook size={18} />
            </a>

            <a
              href='https://t.me/DawitFassilMinistry'
              target='_blank'
              rel='noopener noreferrer'
              className='rounded-full border border-slate-200 p-2 transition hover:border-gold hover:bg-gold/10 dark:border-white/10'
            >
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
