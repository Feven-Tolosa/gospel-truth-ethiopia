'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function PastorMessage() {
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
            className='absolute inset-0 bg-cover bg-center'
            style={{
              backgroundImage: "url('/image/dev.png')",
            }}
          />

          {/* Dark Overlay */}
          <div className='absolute inset-0 bg-black/20' />

          {/* Fade Into Content */}
          <div className='absolute inset-0 bg-gradient-to-r from-black/20 via-slate-50/90 to-slate-50 dark:via-[#0d1b2a]/90 dark:to-[#0d1b2a]' />

          {/* Decorative Glow */}
          <div className='absolute right-0 top-0 h-96 w-96 rounded-full bg-gold/10 blur-3xl' />

          <div className='relative grid min-h-[650px] lg:grid-cols-2'>
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
                <div className='section-label mb-4'>A Word From Our Pastor</div>

                <h2 className='mb-4 font-serif text-4xl font-bold text-slate-900 dark:text-white lg:text-5xl'>
                  Welcome to Gospel Truth Church
                </h2>

                <p className='mb-6 font-ethiopic text-lg text-gold'>
                  እንኳን ወደ ወንጌል እውነት ቤተ ክርስቲያን በደህና መጡ
                </p>

                <blockquote className='border-l-4 border-gold pl-6 text-lg leading-relaxed text-slate-700 dark:text-white/75'>
                  Grace and peace to you in the name of our Lord Jesus Christ.
                  Whether you are visiting for the first time, seeking answers,
                  or looking for a church family, our prayer is that you would
                  encounter the truth of God's Word and experience the
                  transforming power of the Gospel.
                </blockquote>

                <div className='mt-10'>
                  <Link
                    href='/about'
                    className='group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/25'
                  >
                    Learn More About Our Church
                    <ArrowRight
                      size={16}
                      className='transition-transform duration-300 group-hover:translate-x-1'
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Pastor Name Overlay on Image */}
          <div className='absolute bottom-10 left-10 hidden lg:block'>
            <div className='rounded-2xl border border-white/10 bg-black/25 px-6 py-4 backdrop-blur-md'>
              <h3 className='font-serif text-2xl font-bold text-white'>
                Brother Dawit Fassil
              </h3>

              <p className='text-sm uppercase tracking-widest text-gold'>
                Pastor
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
