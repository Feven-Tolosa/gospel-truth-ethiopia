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

          <Link
            href='/'
            className='inline-flex rounded-lg bg-gold px-6 py-3 font-medium text-navy transition hover:bg-gold-light'
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  )
}
