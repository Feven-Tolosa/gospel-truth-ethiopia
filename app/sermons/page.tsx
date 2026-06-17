import Image from 'next/image'
import type { Sermon } from '@/lib/youtube'
import { getLatestSermons } from '@/lib/youtube'

export const metadata = {
  title: 'Sermons | Gospel Truth Church Ethiopia',
}

export default async function SermonsPage() {
  const sermons = await getLatestSermons(12)

  return (
    <main className='pt-[70px]'>
      <section className='bg-navy px-6 py-16 text-center'>
        <div className='section-label justify-center'>Sermons</div>

        <h1 className='font-serif text-3xl font-bold text-white sm:text-4xl'>
          Hear the Word of God
        </h1>

        <p className='mx-auto mt-3 max-w-xl text-white/60'>
          Expository teaching from the Scriptures.
        </p>
      </section>

      <section className='px-6 py-16'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {sermons.map((sermon: Sermon) => (
              <a
                key={sermon.id}
                href={`https://youtube.com/watch?v=${sermon.id}`}
                target='_blank'
                rel='noopener noreferrer'
                className='overflow-hidden rounded-xl border border-black/5 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-white/10 dark:bg-navy-mid'
              >
                <div className='relative h-52'>
                  <Image
                    src={sermon.thumbnail}
                    alt={sermon.title}
                    fill
                    className='object-cover'
                  />

                  <div className='absolute inset-0 flex items-center justify-center bg-black/20'>
                    <div className='flex h-14 w-14 items-center justify-center rounded-full bg-gold'>
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
                  <h3 className='line-clamp-2 font-serif text-lg font-semibold'>
                    {sermon.title}
                  </h3>

                  <p className='mt-2 text-sm text-muted-foreground'>
                    {new Date(sermon.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
