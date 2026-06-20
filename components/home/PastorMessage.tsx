'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

export default function PastorMessage() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <section className='bg-slate-50 px-6 py-24 transition-colors duration-500 dark:bg-gray-950'>
      <div className='mx-auto max-w-7xl'>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative overflow-hidden rounded-[2rem] border border-slate-200 shadow-2xl dark:border-white/10'
        >
          {/* Background Image */}
          <div
            className='absolute inset-0 bg-cover bg-center hidden md:block'
            style={{
              backgroundImage: "url('/image/dev.png')",
            }}
          />

          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black/20' />

          <div className='absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-50/35 via-slate-50/55 to-slate-50/80 dark:from-[#0d1b2a]/20 dark:via-[#0d1b2a]/90 dark:to-[#0d1b2a]' />

          {/* Decorative Glow */}
          <div className='absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl' />

          <div className='relative min-h-[650px]  lg:grid lg:grid-cols-2'>
            {/* Left Side */}
            <div className='hidden lg:block' />

            {/* Right Side Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className='flex items-center px-8 py-16 sm:px-12 lg:px-16'
            >
              <div className='max-w-xl'>
                <div className='section-label mb-4'>
                  {t.pastorMessage.label}
                </div>

                <h2 className='mb-4 font-serif text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl'>
                  {t.pastorMessage.title}
                </h2>

                <p className='mb-6 font-ethiopic text-lg text-gold'>
                  {t.pastorMessage.welcome}
                </p>

                <blockquote className='border-l-4 border-gold pl-6 text-lg leading-relaxed text-slate-700 dark:text-white/75'>
                  {t.pastorMessage.message}
                </blockquote>

                <div className='mt-10'>
                  <Link
                    href='/about'
                    className='group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/25'
                  >
                    {t.pastorMessage.button}

                    <ArrowRight
                      size={16}
                      className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pastor Name Overlay */}
          <div className='absolute bottom-10 left-10 hidden lg:block'>
            <div className='rounded-2xl border border-white/10 bg-black/25 px-6 py-4 backdrop-blur-md'>
              <h3 className='font-serif text-2xl font-bold text-white'>
                {t.pastorMessage.pastorName}
              </h3>

              <p className='text-sm uppercase tracking-widest text-gold'>
                {t.pastorMessage.pastorTitle}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
