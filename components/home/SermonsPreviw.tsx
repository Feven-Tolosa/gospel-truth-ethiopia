import Link from 'next/link'

export default function SermonsPreview() {
  return (
    <section className='px-6 py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-wrap items-start justify-between gap-4'>
          <div>
            <div className='section-label'>Sermons</div>
            <h2 className='section-title'>Hear the Word of God</h2>
            <p className='section-subtitle'>
              Expository teaching from the Scriptures — available on YouTube and
              Telegram.
            </p>
          </div>
          <Link href='/sermons' className='btn-primary mt-2 whitespace-nowrap'>
            All Sermons
          </Link>
        </div>

        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {[
            {
              ref: '2 Corinthians 4:1–18',
              title: 'Therefore We Do Not Lose Heart',
              tag: 'Series',
            },
            {
              ref: 'John 1:1–14',
              title: 'In the Word Was Life',
              tag: 'Doctrine',
            },
            {
              ref: 'Romans 3:21–26',
              title: 'The Gospel of Grace',
              tag: 'Gospel',
            },
          ].map((s, i) => (
            <article
              key={i}
              className='overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-navy-mid dark:border-white/10'
            >
              <div className='relative flex h-40 items-center justify-center bg-gradient-to-br from-navy to-navy-light'>
                <span className='absolute left-3 top-3 rounded-sm border border-gold/40 bg-gold/20 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gold-light'>
                  {s.tag}
                </span>
                <div className='flex h-12 w-12 items-center justify-center rounded-full bg-gold'>
                  <svg
                    viewBox='0 0 24 24'
                    fill='#0D1B2A'
                    width='20'
                    height='20'
                  >
                    <polygon points='5 3 19 12 5 21 5 3' />
                  </svg>
                </div>
              </div>
              <div className='p-5'>
                <div className='mb-1.5 text-xs font-semibold text-gold'>
                  {s.ref}
                </div>
                <h3 className='font-serif text-base font-semibold leading-snug'>
                  {s.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
