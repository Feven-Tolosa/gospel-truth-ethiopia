'use client'

import Link from 'next/link'
import {
  Phone,
  MapPin,
  Globe,
  Send,
  BookOpen,
  Headphones,
  Calendar,
  MessageSquare,
} from 'lucide-react'
import { SlSocialFacebook } from 'react-icons/sl'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

export function Footer() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <footer className='relative overflow-hidden border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-gray-950'>
      {/* Decorative Top Border Gradient */}
      <div className='h-[2px] w-full bg-gradient-to-r from-transparent via-gold to-transparent' />

      {/* Background Glow Effect */}
      <div className='absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl pointer-events-none' />

      <div className='mx-auto max-w-7xl px-6 py-16 relative z-10'>
        <div className='grid gap-12 border-b border-slate-200 pb-12 dark:border-white/10 md:grid-cols-2 lg:grid-cols-4'>
          {/* Brand Column */}
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

          {/* Explore Column */}
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
                    className='text-sm text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column (Fixed) */}
          <div>
            <h4 className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold'>
              {t.footer.resources}
            </h4>
            <ul className='space-y-3'>
              <li>
                <Link
                  href='/books'
                  className='flex items-center gap-3 text-sm text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                >
                  <BookOpen size={16} />
                  {t.footer.books}
                </Link>
              </li>
              <li>
                <a
                  href='https://t.me/DawitFassilMinistry'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-sm text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                >
                  <Headphones size={16} />
                  {t.footer.audioSermons}
                </a>
              </li>
              <li>
                <Link
                  href='#'
                  className='flex items-center gap-3 text-sm text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                >
                  <MessageSquare size={16} />
                  {t.footer.prayerRequests}
                </Link>
              </li>
              <li>
                <Link
                  href='#'
                  className='flex items-center gap-3 text-sm text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                >
                  <Calendar size={16} />
                  {t.footer.eventsCalendar}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className='mb-5 text-xs font-bold uppercase tracking-[0.2em] text-gold'>
              {t.footer.contact}
            </h4>
            <ul className='space-y-4 text-sm'>
              <li>
                <a
                  href='tel:+251917804407'
                  className='flex items-center gap-3 text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                >
                  <Phone size={16} />
                  +251 917 804 407
                </a>
              </li>
              <li>
                <a
                  href='tel:+251906202626'
                  className='flex items-center gap-3 text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                >
                  <Phone size={16} />
                  +251 906 202 626
                </a>
              </li>
              <li className='flex items-center gap-3 text-slate-600 dark:text-white/50'>
                <MapPin size={16} />
                Jimma, Ethiopia
              </li>
              <li>
                <a
                  href='https://gospeltruthethiopia.com'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex items-center gap-3 text-slate-600 transition-colors duration-200 hover:text-gold dark:text-white/50 dark:hover:text-gold'
                >
                  <Globe size={16} />
                  gospeltruthethiopia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
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
              aria-label='Facebook'
              className='rounded-full border border-slate-200 p-2 text-slate-600 transition-all duration-200 hover:border-gold hover:bg-gold/10 hover:text-gold dark:border-white/10 dark:text-white/50'
            >
              <SlSocialFacebook size={18} />
            </a>

            <a
              href='https://t.me/DawitFassilMinistry'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Telegram'
              className='rounded-full border border-slate-200 p-2 text-slate-600 transition-all duration-200 hover:border-gold hover:bg-gold/10 hover:text-gold dark:border-white/10 dark:text-white/50'
            >
              <Send size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
