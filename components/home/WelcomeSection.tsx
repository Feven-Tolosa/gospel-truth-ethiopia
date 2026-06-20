'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
}

export default function WelcomeSection() {
  const { locale } = useLanguage()
  const t = translations[locale]
  return (
    <section className='relative overflow-hidden bg-navy'>
      {/* Background Accent */}
      <div className='absolute right-0 bottom-0 h-96 w-96 rounded-full bg-gold/5 blur-3xl' />

      {/* Hero Banner */}
      <div className='relative w-full overflow-hidden'>
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
        <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy via-navy/70 to-transparent' />

        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className='absolute bottom-8 left-1/6 hidden w-full max-w-7xl -translate-x-1/2 px-6 md:block'
        >
          <div className='section-label mb-3 text-white/80'>
            {t.welcome.bannerLabel}h
          </div>

          <h3 className='max-w-3xl font-serif text-3xl font-bold text-white md:text-3xl lg:text-5xl'>
            {t.welcome.bannerTitle}
          </h3>
        </motion.div>
      </div>

      {/* Content */}
      <div className='mx-auto px-6 py-16 lg:py-24 bg-gold-pale dark:bg-navy'>
        <div className='grid gap-12 lg:grid-cols-[1fr_auto_320px] lg:gap-16'>
          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div className='section-label mb-4'> {t.welcome.whoWeAre}</div>

            <h2 className='mb-6 section-title font-serif text-3xl font-semibold leading-tight text-white lg:text-4xl'>
              {t.welcome.title}
            </h2>

            <motion.p
              className='mb-5 max-w-2xl section-subtitle'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              {t.welcome.paragraph1}
            </motion.p>

            <motion.p
              className='mb-5 max-w-2xl section-subtitle'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              {t.welcome.paragraph2}
            </motion.p>

            <motion.p
              className='mb-5 max-w-2xl section-subtitle'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t.welcome.paragraph3}
            </motion.p>
            <motion.p
              className='max-w-2xl section-subtitle'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              {t.welcome.paragraph4}
            </motion.p>
          </motion.div>

          {/* Divider */}
          <div className='hidden w-px bg-gradient-to-b from-transparent via-gold/60 to-transparent lg:block' />

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='grid grid-cols-3 gap-6 border-t border-l-gold-light dark:border-white/10  pt-8 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0 '
          >
            {[
              { number: '3+', label: t.welcome.regionsServed },
              { number: '∞', label: t.welcome.livesChanged },
              { number: '1', label: t.welcome.gospelProclaimed },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                }}
                transition={{ duration: 0.2 }}
                className='group rounded-xl p-4 text-center lg:text-left'
              >
                <div className='font-serif text-4xl font-bold text-gold transition-all duration-300 group-hover:text-gold/80 lg:text-5xl'>
                  {stat.number}
                </div>

                <div className='mt-2 font-medium uppercase  section-subtitle'>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
