'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function PastorMessage() {
  return (
    <section className='bg-white px-6 py-24 transition-colors duration-500 dark:bg-gray-950'>
      <div className='mx-auto max-w-7xl'>
        <div className='grid items-center gap-16 lg:grid-cols-2'>
          {/* Pastor Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='relative'
          >
            <div className='absolute -inset-4 rounded-3xl bg-gold/10 blur-xl' />

            <div className='relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10'>
              <Image
                src='/images/pastor-dawit.jpg'
                alt='Pastor Dawit Fassil'
                width={700}
                height={850}
                className='h-full w-full object-cover'
              />
            </div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className='section-label'>A Word From Our Pastor</div>

            <h2 className='mb-6 font-serif text-4xl font-bold text-slate-900 dark:text-white'>
              Welcome to Gospel Truth Church
            </h2>

            <div className='mb-6 font-ethiopic text-lg text-gold'>
              እንኳን ወደ ወንጌል እውነት ቤተ ክርስቲያን በደህና መጡ
            </div>

            <blockquote className='border-l-4 border-gold pl-6 text-lg leading-relaxed text-slate-600 dark:text-white/70'>
              Our prayer is that you would come to know Christ more deeply
              through the faithful teaching of God's Word. Whether you are
              seeking answers, growing in faith, or looking for a church family,
              we invite you to worship with us and experience the transforming
              power of the Gospel.
            </blockquote>

            <div className='mt-8'>
              <h3 className='font-serif text-xl font-semibold text-slate-900 dark:text-white'>
                Pastor Dawit Fassil
              </h3>

              <p className='text-sm uppercase tracking-widest text-gold'>
                Senior Pastor
              </p>
            </div>

            <div className='mt-10'>
              <Link
                href='/about'
                className='group inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/20'
              >
                Learn More About Our Church
                <ArrowRight
                  size={16}
                  className='transition-transform group-hover:translate-x-1'
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
