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
    <section className='relative flex h-screen min-h-[600px] items-center justify-center overflow-hidden bg-navy mt-12'>
      <div
        className='absolute inset-0'
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(13,27,42,0.92) 0%, rgba(13,27,42,0.75) 50%, rgba(13,27,42,0.88) 100%), url('https://images.unsplash.com/photo-1438232992991-995b671e49ea?w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className='relative z-10 max-w-3xl px-8 text-center'>
        <div className='section-label justify-center before:hidden'>
          <span className='block h-px w-8 bg-gold/60' />
          Jimma, Ethiopia
          <span className='block h-px w-8 bg-gold/60' />
        </div>
        <h1 className='mb-2 font-ethiopic text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl'>
          የወንጌል እውነት ቤተ ክርስቲያን
        </h1>
        <p className='mb-7 font-serif text-lg italic text-gold-light sm:text-xl md:text-2xl'>
          Gospel Truth Church — Ethiopia
        </p>
        <blockquote className='mx-auto mb-9 max-w-xl border-l-2 border-gold pl-5 text-left font-serif text-base italic leading-relaxed text-white/75 sm:text-lg'>
          &ldquo; ክርስቶስ ኢየሱስን ጌታ እንደ ሆነ እንጂ ራሳችንን አንሰብክምና፥ ስለ ኢየሱስም ራሳችንን ለእናንተ
          ባሪያዎች እናደርጋለን።&rdquo;
          <cite className='mt-2 block font-sans text-sm font-medium not-italic text-gold'>
            2 ቆሮንቶስ 4፡5
          </cite>
        </blockquote>
        <div className='flex flex-wrap justify-center gap-4'>
          <Link
            href='/schedule'
            className='rounded-md border border-white/25 px-7 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5'
          >
            Service Times
          </Link>
          <Link
            href='/playlists'
            className='
            
            btn-primary  hover:text-white border border-white/25 hover:bg-white/5'
          >
            Watch Sermons
          </Link>
        </div>
      </div>
    </section>
  )
}
