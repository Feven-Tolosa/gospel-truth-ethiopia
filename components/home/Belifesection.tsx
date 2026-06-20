'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BookOpen, Cross, ShieldCheck, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

const beliefs = [
  {
    en: 'The Holy Trinity',
    am: 'ቅድስት ሥላሴ',
    icon: ShieldCheck,
  },
  {
    en: 'The Divinity of Christ',
    am: 'የኢየሱስ ክርስቶስ አምላክነት',
    icon: Cross,
  },
  {
    en: 'Authority of Scripture',
    am: 'የመጽሓፍ ቅዱስ ስልጣን',
    icon: BookOpen,
  },
]

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const item = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function BeliefSection() {
  const { locale } = useLanguage()
  const t = translations[locale]
  return (
    <section className='relative overflow-hidden bg-slate-50 px-6 py-24 transition-colors duration-500 dark:bg-navy'>
      {/* Decorative Background */}
      <div className='absolute inset-0'>
        <div className='absolute left-0 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl' />
        <div className='absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className='section-label'>{t.whatWeBelieve.label}</div>

          <h2 className='section-title text-slate-900 dark:text-white'>
            {t.whatWeBelieve.title}
          </h2>

          <p className='section-subtitle mb-14 max-w-3xl text-slate-600 dark:text-white/60'>
            {t.whatWeBelieve.description}
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
          className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
        >
          {beliefs.map((belief) => {
            const Icon = belief.icon

            return (
              <motion.div
                key={belief.en}
                variants={item}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className='group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-gold/40 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.06]'
              >
                {/* Top Gold Line */}
                <div className='absolute left-0 top-0 h-1 w-0 bg-gold transition-all duration-500 group-hover:w-full' />

                {/* Glow */}
                <div className='absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100' />

                <div className='relative'>
                  <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/10 text-gold'>
                    <Icon size={28} />
                  </div>

                  <h3 className='mb-2 font-serif text-xl font-semibold text-slate-900 dark:text-white'>
                    {belief.en}
                  </h3>

                  <p className='font-ethiopic text-sm text-gold/80'>
                    {belief.am}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='mt-12 flex justify-center'
        >
          <Link
            href='/beliefs'
            className='group inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3 text-sm font-medium text-slate-900 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy dark:border-white/20 dark:text-white'
          >
            {t.whatWeBelieve.readFullBeliefs}
            <ArrowRight
              size={16}
              className='transition-transform duration-300 group-hover:translate-x-1'
            />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
