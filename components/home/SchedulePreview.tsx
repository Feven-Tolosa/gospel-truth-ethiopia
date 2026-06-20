'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { weeklySchedule } from '@/lib/schedule-data'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
}

export default function SchedulePreview() {
  const featured = weeklySchedule.filter((s) =>
    ['Sunday', 'Saturday'].includes(s.day),
  )
  const { locale } = useLanguage()
  const t = translations[locale]
  return (
    <section className='relative overflow-hidden border-t-[3px] border-gold bg-gold-pale px-6 py-20 dark:bg-navy-mid'>
      {/* Background Glow */}
      <div className='absolute -left-24 top-0 h-72 w-72 rounded-full bg-gold/10 blur-3xl' />
      <div className='absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl' />

      <div className='relative mx-auto max-w-7xl'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className='section-label'>{t.serviceSchedule.label}</div>

          <h2 className='section-title'>{t.serviceSchedule.title}</h2>

          <p className='section-subtitle mb-10'>
            {t.serviceSchedule.description}
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          className='grid gap-5 sm:grid-cols-2 lg:grid-cols-4'
        >
          {featured.map((item, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -8,
                scale: 1.03,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
              }}
              className='group relative overflow-hidden rounded-xl border border-gold/20 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl dark:border-white/10 dark:bg-navy'
            >
              {/* Animated Gold Bar */}
              <div className='absolute left-0 right-0 top-0 h-1 bg-gold transition-all duration-500 group-hover:h-2' />

              {/* Shine Effect */}
              <div className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full' />

              <div className='relative z-10'>
                <div className='mb-1.5 text-[11px] font-bold uppercase tracking-[0.25em] text-gold'>
                  {item.day}
                </div>

                <div className='mb-1 font-serif text-lg font-semibold'>
                  {item.name}
                </div>

                <div className='mb-3 font-ethiopic text-sm text-neutral-500 dark:text-neutral-400'>
                  {item.nameAm}
                </div>

                <div className='text-sm font-semibold text-navy dark:text-gold-light'>
                  {item.time}
                </div>

                {item.note && (
                  <div className='mt-2 text-xs text-neutral-500 dark:text-neutral-400'>
                    {item.note}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className='mt-10'
        >
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className='inline-block'
          >
            <Link href='/schedule' className='btn-primary'>
              {t.serviceSchedule.viewFullSchedule}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
