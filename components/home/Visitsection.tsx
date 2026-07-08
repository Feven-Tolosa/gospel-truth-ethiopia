'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

export default function VisitSection() {
  const { locale } = useLanguage()
  const t = translations[locale]
  return (
    <section className='relative overflow-hidden bg-slate-50 px-6 py-24 transition-colors duration-500 dark:bg-navy'>
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute left-20 top-20 h-32 w-32 rounded-full border border-gold/10' />

        <div className='absolute bottom-20 right-20 h-48 w-48 rounded-full border border-gold/10' />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='relative mx-auto max-w-3xl text-center'
      >
        <div className='section-label justify-center'>{t.visit.label}</div>

        <h2 className='mb-3 font-serif text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
          {t.visit.title}
        </h2>

        <p className='mx-auto mb-10 max-w-2xl leading-relaxed text-slate-600 dark:text-white/65'>
          {t.visit.description}
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='https://maps.app.goo.gl/AXft8Dqg5noqpCFZ6'
            target='_blank'
            className='group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/25'
          >
            <MapPin size={18} />
            {t.visit.planVisit}
          </a>

          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3 font-medium text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy dark:border-white/20 dark:text-white'
          >
            {t.visit.contactUs}
            <ArrowRight
              size={16}
              className='transition-transform duration-300 group-hover:translate-x-1'
            />
          </Link>
        </div>

        {/* Bottom Accent */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 120 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='mx-auto mt-12 h-[2px] bg-gold'
        />
      </motion.div>
    </section>
  )
}
