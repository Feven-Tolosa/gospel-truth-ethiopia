'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
  return (
    <section className='relative overflow-hidden bg-navy'>
      {/* Background Accent */}
      <div className='absolute left-0 top-1/3 h-72 w-72 rounded-full bg-gold/10 blur-3xl' />
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
            Welcome to Gospel Truth Church
          </div>

          <h3 className='max-w-3xl font-serif text-3xl font-bold text-white md:text-3xl lg:text-5xl'>
            Proclaiming the Truth of God&apos;s Word
          </h3>
        </motion.div>
      </div>

      {/* Content */}
      <div className='mx-auto max-w-7xl px-6 py-16 lg:py-24'>
        <div className='grid gap-12 lg:grid-cols-[1fr_auto_320px] lg:gap-16'>
          {/* Left Content */}
          <motion.div
            variants={fadeUp}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <div className='section-label mb-4'>Who We Are</div>

            <h2 className='mb-6 font-serif text-3xl font-semibold leading-tight text-white lg:text-4xl'>
              A Church Built on the Word of God
            </h2>

            <motion.p
              className='mb-5 text-base leading-relaxed text-white/75 lg:text-lg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              The Gospel Truth Church is an evangelical church that believes in
              the main pillars of faith, the Holy Trinity, the deity and person
              of Jesus Christ, the authority of the Bible, the gospel of grace,
              the forgiveness of sins, the second coming, and the coming
              judgment.
            </motion.p>

            <motion.p
              className='mb-5 text-base leading-relaxed text-white/75 lg:text-lg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              It has local congregations in the South, Southwest, and West
              Ethiopia.
            </motion.p>

            <motion.p
              className='mb-5 text-base leading-relaxed text-white/75 lg:text-lg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              The church is governed by the administration of elders; all
              ministers of the word and spiritual members are led under the
              leadership of the elders.
            </motion.p>

            <motion.p
              className='mb-5 text-base leading-relaxed text-white/75 lg:text-lg'
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              The main purpose of the church is to preach the gospel without
              fear and openly; to make Christ the center and reveal and honor
              Him alone; to deliver the teachings of our fathers to mankind by
              suffering and paying the price. 2 Corinthians 4:1–18.
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
            className='grid grid-cols-3 gap-6 border-t border-white/10 pt-8 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0'
          >
            {[
              {
                number: '3+',
                label: 'Regions Served',
              },
              {
                number: '∞',
                label: 'Lives Changed',
              },
              {
                number: '1',
                label: 'Gospel Proclaimed',
              },
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

                <div className='mt-2 text-xs font-medium uppercase tracking-[0.2em] text-white/50'>
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
