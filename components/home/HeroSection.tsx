'use client'

import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  title?: string
  subtitle?: string
  scripture?: string
  scriptureReference?: string
  backgroundImage?: string
}

export default function HeroSection({
  title = 'የወንጌል እውነት ቤተ ክርስቲያን',
  subtitle = 'Gospel Truth Church • Jimma, Ethiopia',
  scripture = 'ክርስቶስ ኢየሱስ ጌታ ሲሆን እኛ ራሳችንን ሎሌዎቻችሁ አድርገን ስለ ኢየሱስ እናስተምራለን።',
  scriptureReference = '2 ቆሮንቶስ 4፡5',
  backgroundImage = 'https://images.unsplash.com/photo-1438232992991-995b671e49ea?w=2000&q=80',
}: HeroSectionProps) {
  return (
    <section className='relative min-h-screen overflow-hidden bg-navy'>
      {/* Background */}
      <div
        className='absolute inset-0'
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(13,27,42,.92),
              rgba(13,27,42,.82),
              rgba(13,27,42,.88)
            ),
            url(${backgroundImage})
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Decorative Gradient */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,168,76,0.12),transparent_55%)]' />

      {/* Content */}
      <div className='relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6'>
        <div className='max-w-4xl'>
          {/* Label */}
          <div className='mb-6 flex items-center gap-3'>
            <div className='h-px w-12 bg-gold' />
            <span className='text-xs font-semibold uppercase tracking-[0.3em] text-gold'>
              Soli Deo Gloria
            </span>
          </div>

          {/* Title */}
          <h1 className='font-ethiopic text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl'>
            {title}
          </h1>

          {/* Subtitle */}
          <p className='mt-5 text-lg text-gold-light md:text-xl'>{subtitle}</p>

          {/* Divider */}
          <div className='my-10 h-px w-24 bg-gold/50' />

          {/* Scripture */}
          <blockquote className='max-w-2xl border-l-2 border-gold pl-6'>
            <p className='font-serif text-lg italic leading-relaxed text-white/85 md:text-xl'>
              "{scripture}"
            </p>

            <cite className='mt-4 block text-sm font-semibold not-italic tracking-wide text-gold'>
              {scriptureReference}
            </cite>
          </blockquote>

          {/* CTA Buttons */}
          <div className='mt-10 flex flex-wrap gap-4'>
            <Link
              href='/schedule'
              className='rounded-md bg-gold px-7 py-3 text-sm font-semibold text-navy transition hover:opacity-90'
            >
              Join Us This Sunday
            </Link>

            <Link
              href='/sermons'
              className='rounded-md border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5'
            >
              Watch Sermons
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 z-10 -translate-x-1/2'>
        <div className='flex flex-col items-center gap-2 text-white/50'>
          <span className='text-[10px] uppercase tracking-[0.25em]'>
            Scroll
          </span>
          <ChevronDown className='h-5 w-5 animate-bounce' />
        </div>
      </div>
    </section>
  )
}
