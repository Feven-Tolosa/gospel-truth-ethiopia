'use client'

import Link from 'next/link'
import { beliefs } from '@/lib/beliefs-data'
import { BeliefIcon } from '@/components/belief-icon'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

export default function BeliefsPage() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <main className='pt-[70px]'>
      <section className='bg-navy px-6 py-16 text-center'>
        <div className='section-label justify-center'>{t.beliefs.label}</div>

        <h1 className='font-serif text-3xl font-bold text-white sm:text-4xl'>
          {t.beliefs.title}
        </h1>

        <p className='mx-auto mt-3 max-w-xl text-white/60'>
          {t.beliefs.description}
        </p>
      </section>

      <section className='px-6 py-16'>
        <div className='mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {beliefs.map((belief, index) => (
            <div
              key={index}
              className='rounded-lg border border-black/5 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-navy-mid'
            >
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded bg-gold-pale text-gold dark:bg-gold/15'>
                <BeliefIcon name={belief.icon} />
              </div>

              <h3 className='mb-3 font-serif text-base font-semibold'>
                {t.beliefs.items[index].title}
              </h3>

              <p className='text-sm leading-relaxed text-neutral-500 dark:text-neutral-400'>
                {t.beliefs.items[index].body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <a
        href='/books/የእምነትአቋም.pdf'
        target='_blank'
        rel='noopener noreferrer'
        className='mx-auto mb-16 flex w-fit items-center gap-3 rounded-lg border border-gold px-8 py-4 font-serif font-bold text-neutral-800 transition-all duration-300 hover:bg-gold/90 hover:text-white dark:text-white'
      >
        {t.beliefs.doctrinalPosition}
      </a>
    </main>
  )
}
