'use client'

import { weeklySchedule } from '@/lib/schedule-data'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

export default function SchedulePage() {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <main className='pt-[70px]'>
      <section className='bg-navy px-6 py-16 text-center'>
        <div className='section-label justify-center'>{t.schedule.title}</div>

        <h1 className='font-serif text-3xl font-bold text-white sm:text-4xl'>
          {t.schedule.heading}
        </h1>

        <p className='mx-auto mt-3 max-w-xl text-white/60'>
          {t.schedule.description}
        </p>
      </section>

      <section className='px-6 py-16'>
        <div className='mx-auto max-w-6xl'>
          <div className='flex flex-col gap-5'>
            {weeklySchedule.map((item, i) => (
              <div
                key={i}
                className='
                  group
                  grid
                  grid-cols-1
                  gap-4
                  rounded-xl
                  border
                  border-black/5
                  bg-white
                  p-6
                  shadow-sm
                  transition-all
                  duration-300
                  ease-out
                  hover:-translate-y-1
                  hover:border-gold/50
                  hover:shadow-xl
                  dark:border-white/10
                  dark:bg-navy-mid
                  dark:hover:border-gold/40
                  dark:hover:bg-[#1c2b43]
                  sm:grid-cols-[140px_1fr_auto]
                  sm:items-center
                  cursor-pointer
                '
              >
                {/* Day */}
                <div>
                  <div className='text-[11px] font-bold uppercase tracking-wider text-gold'>
                    {item.day}
                  </div>

                  <div className='font-ethiopic text-sm text-neutral-500 dark:text-neutral-400'>
                    {item.dayAm}
                  </div>
                </div>

                {/* Service */}
                <div>
                  <div className='font-serif text-lg font-semibold transition-colors duration-300 group-hover:text-gold'>
                    {item.name}
                  </div>

                  <div className='font-ethiopic text-sm text-neutral-500 dark:text-neutral-400'>
                    {item.nameAm}
                  </div>

                  {item.note && (
                    <div className='mt-1 text-sm text-neutral-500 transition-colors duration-300 dark:text-neutral-400 group-hover:text-neutral-700 dark:group-hover:text-neutral-300'>
                      {item.note}

                      {item.noteAm && (
                        <span className='font-ethiopic'> · {item.noteAm}</span>
                      )}
                    </div>
                  )}
                </div>

                {/* Time */}
                <div className='flex items-center gap-2 text-base font-semibold text-navy transition-all duration-300 group-hover:translate-x-1 dark:text-gold-light sm:justify-end'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    width='18'
                    height='18'
                    className='opacity-60 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110'
                  >
                    <circle cx='12' cy='12' r='10' />
                    <polyline points='12 6 12 12 16 14' />
                  </svg>

                  {item.time}
                </div>
              </div>
            ))}
          </div>

          {/* Note */}
          <div className='mt-10 rounded-xl border border-gold/30 bg-gold-pale p-6 text-sm leading-relaxed text-neutral-700 transition-all duration-300 hover:shadow-lg dark:border-gold/20 dark:bg-navy-mid dark:text-neutral-300'>
            <strong className='text-navy dark:text-gold-light'>
              {t.schedule.noteTitle}:
            </strong>{' '}
            {t.schedule.note}
          </div>
        </div>
      </section>
    </main>
  )
}
