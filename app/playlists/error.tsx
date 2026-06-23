'use client'

import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return (
    <main className='pt-[70px]'>
      <section className='flex min-h-[70vh] items-center justify-center bg-gold-pale px-6 dark:bg-navy'>
        <div className='max-w-lg text-center'>
          <div className='mb-4 section-label justify-center'>Sermons</div>

          <h1 className='mb-4 font-serif text-3xl font-bold text-navy-light dark:text-white'>
            Unable to Load Sermons
          </h1>

          <p className='mb-8 text-muted-foreground'>
            We could not retrieve sermon playlists at the moment. Please check
            your internet connection and try again later.
          </p>

          <div className='flex flex-wrap justify-center gap-4'>
            <Link
              href='/playlists'
              className='rounded-lg bg-gold px-6 py-3 font-medium text-navy transition hover:bg-gold-light'
            >
              Try Again
            </Link>

            <Link
              href='/'
              className='rounded-lg border border-gold px-6 py-3 font-medium text-navy-light transition hover:bg-gold/10 dark:text-white'
            >
              Return Home
            </Link>
          </div>

          {process.env.NODE_ENV === 'development' && (
            <p className='mt-6 text-sm text-red-500'>{error.message}</p>
          )}
        </div>
      </section>
    </main>
  )
}
