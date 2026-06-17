import Image from 'next/image'
import Link from 'next/link'
import { getLatestSermons } from '@/lib/youtube'

export default async function SermonsPreview() {
  const sermons = await getLatestSermons(4)

  if (!sermons.length) return null

  const featured = sermons[0]
  const recent = sermons.slice(1)

  return (
    <section className='bg-gold-pale px-6 py-20 dark:bg-navy-mid'>
      <div className='mx-auto max-w-7xl'>
        {/* Header */}
        <div className='mb-10 flex flex-wrap items-start justify-between gap-4'>
          <div>
            <div className='section-label'>Latest Sermons</div>

            <h2 className='section-title'>Hear the Word of God</h2>

            <p className='section-subtitle max-w-2xl'>
              Faithful biblical preaching and teaching from Dawit Fassil
              Ministries, proclaiming the truth of Scripture and the gospel of
              Jesus Christ.
            </p>
          </div>

          {/* <Link href='/sermons' className='btn-primary mt-2 whitespace-nowrap'>
            View All Sermons
          </Link> */}
        </div>

        {/* Featured Sermon */}
        <div className='mb-12 overflow-hidden rounded-2xl border border-black/5 bg-white shadow-lg dark:border-white/10 dark:bg-navy'>
          <div className='grid lg:grid-cols-2'>
            <div className='aspect-video lg:aspect-auto '>
              <iframe
                className='h-full w-full'
                src={`https://www.youtube.com/embed/${featured.id}`}
                title={featured.title}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
              />
            </div>

            <div className='flex flex-col justify-center p-8 lg:p-10 '>
              <div className='mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-gold'>
                Featured Sermon
              </div>

              <h3 className='font-serif text-2xl font-bold leading-tight'>
                {featured.title}
              </h3>

              <p className='mt-4 text-sm text-black/60 dark:text-white/60'>
                Published{' '}
                {new Date(featured.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>

              <div className='mt-6'>
                <a
                  href={`https://www.youtube.com/watch?v=${featured.id}`}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='btn-primary'
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Sermons */}
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {recent.map((sermon) => (
            <a
              key={sermon.id}
              href={`https://www.youtube.com/watch?v=${sermon.id}`}
              target='_blank'
              rel='noopener noreferrer'
              className='group overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-navy'
            >
              <div className='relative aspect-video overflow-hidden'>
                <Image
                  src={sermon.thumbnail}
                  alt={sermon.title}
                  fill
                  className='object-cover transition duration-500 group-hover:scale-105'
                />

                <div className='absolute inset-0 bg-black/20 transition group-hover:bg-black/10' />

                <div className='absolute inset-0 flex items-center justify-center'>
                  <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gold shadow-lg'>
                    <svg
                      viewBox='0 0 24 24'
                      fill='#0D1B2A'
                      width='22'
                      height='22'
                    >
                      <polygon points='5 3 19 12 5 21 5 3' />
                    </svg>
                  </div>
                </div>
              </div>

              <div className='p-5'>
                <h3 className='line-clamp-2 font-serif text-lg font-semibold leading-snug'>
                  {sermon.title}
                </h3>

                <p className='mt-3 text-sm text-black/60 dark:text-white/60'>
                  {new Date(sermon.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
