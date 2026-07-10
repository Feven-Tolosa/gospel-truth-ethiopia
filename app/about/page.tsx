'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

export default function AboutPage() {
  const { locale } = useLanguage()
  const t = translations[locale]
  return (
    <main className='pt-[70px]'>
      <div className='relative w-full overflow-hidden pt-12'>
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 8 }}
        >
          <Image
            src='/image/channels_banner.png'
            alt='Gospel Truth Church'
            width={1920}
            height={1080}
            priority
            className='h-auto w-full object-cover'
          />
        </motion.div>

        <div className='absolute inset-0 bg-navy/20' />
        <div className='absolute inset-x-0 bottom-0 h-1/3 md:h-2/3 bg-gradient-to-t from-navy via-navy/70 to-transparent' />
      </div>
      <p className='text-center md:hidden text-gold font-serif '>
        {t.about.welcome}
      </p>
      <h3 className='pt-2 text-center text-white/80 font-serif text-2xl font-bold text-white md:hidden'>
        {t.about.heroTitle}
      </h3>
      <section className='bg-navy px-4 sm:py-2 md:pt-20  text-center'>
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='absolute bottom-8 text-center w-full max-w-7xl -translate-x-1/2 px-6 md:block pt-12'
        >
          <p className='hidden md:block py-3  text-gold font-serif '>
            {t.about.welcome}
          </p>

          <h3 className='pb-16 text-white/80 font-serif text-3xl font-bold text-white hidden md:block md:text-3xl lg:text-5xl'>
            {t.about.heroTitle}
          </h3>
        </motion.div>
      </section>

      <section className='px-4 py-16'>
        <div className='mx-auto max-w-5xl'>
          <p className='mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300'>
            {t.about.paragraph1}
          </p>
          <p className='mb-6 rounded-lg border-l-4 border-gold bg-gold-pale p-6 font-ethiopic text-base leading-loose text-neutral-700 dark:bg-navy-mid dark:text-neutral-300'>
            {t.about.paragraph2}
          </p>
          <p className='mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300'>
            {t.about.paragraph3}
          </p>
          <p className='leading-relaxed text-neutral-700 dark:text-neutral-300'>
            {t.about.paragraph4}
            <span className='font-medium text-gold'>2 Corinthians 4:1–18</span>
          </p>
        </div>
      </section>
      <Link
        href='/ministries'
        className='mx-auto mb-14 block w-fit rounded-lg border border-gold p-6 font-serif font-bold text-navy-light dark:text-white transition-all duration-300 hover:bg-gold sm:text-lg '
      >
        {t.about.ministriesButton}
      </Link>
    </main>
  )
}
