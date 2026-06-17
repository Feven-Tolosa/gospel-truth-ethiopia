'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

export default function VisitSection() {
  return (
    <section className='relative overflow-hidden bg-slate-50 px-6 py-24 transition-colors duration-500 dark:bg-navy'>
      {/* Background Effects */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gold/10 blur-3xl' />

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
        <div className='section-label justify-center'>Come & See</div>

        <h2 className='mb-3 font-serif text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
          You Are Welcome Here
        </h2>
        {/* 
        <p className='mb-5 font-ethiopic text-xl text-gold'>
          ወደ እኛ እንኳን በደህና መጣችሁ
        </p> */}

        <p className='mx-auto mb-10 max-w-2xl leading-relaxed text-slate-600 dark:text-white/65'>
          Whether you are exploring Christianity, seeking a church home, or
          desiring deeper fellowship in Christ, we invite you to worship with us
          and hear the life-changing truth of God's Word.
        </p>

        {/* CTA Buttons */}
        <div className='flex flex-wrap justify-center gap-4'>
          <Link
            href='/schedule'
            className='group inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 font-medium text-navy transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-gold/25'
          >
            <MapPin size={18} />
            Plan Your Visit
          </Link>

          <Link
            href='/contact'
            className='group inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-3 font-medium text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:bg-gold hover:text-navy dark:border-white/20 dark:text-white'
          >
            Contact Us
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
