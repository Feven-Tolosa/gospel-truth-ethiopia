'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/context/language-context'
import { translations } from '@/lib/translations'

type Playlist = {
  id: string
  title: string
  thumbnail: string
  videoCount: number
}

export default function PlaylistsClient({
  playlists,
}: {
  playlists: Playlist[]
}) {
  const { locale } = useLanguage()
  const t = translations[locale]

  return (
    <main className='pt-[70px]'>
      <section className='bg-gold-pale px-6 py-16 dark:bg-navy'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 text-center'>
            <div className='section-label justify-center'>
              {t.sermons.playlistsLabel}
            </div>

            <h2 className='font-serif text-3xl font-bold'>
              {t.sermons.playlistsTitle}
            </h2>

            <p className='mt-3 text-muted-foreground'>
              {t.sermons.playlistsDescription}
            </p>
          </div>

          <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
            {playlists.map((playlist) => (
              <Link
                key={playlist.id}
                href={`/playlists/${playlist.id}`}
                className='group overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl dark:border-white/10 dark:bg-navy'
              >
                <div className='relative h-52 overflow-hidden'>
                  <Image
                    src={playlist.thumbnail}
                    alt={playlist.title}
                    fill
                    className='object-cover transition duration-700 group-hover:scale-110'
                  />

                  <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent' />

                  <div className='absolute bottom-4 right-4 rounded-full bg-gold px-3 py-1 text-sm font-semibold text-navy'>
                    {playlist.videoCount} {t.sermons.videos}
                  </div>
                </div>

                <div className='p-5'>
                  <h3 className='line-clamp-2 font-serif text-xl font-semibold'>
                    {playlist.title}
                  </h3>

                  <p className='mt-2 text-sm text-muted-foreground'>
                    {playlist.videoCount} {t.sermons.teachings}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
