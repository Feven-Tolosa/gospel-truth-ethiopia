import Image from 'next/image'
import Link from 'next/link'
import { getPlaylists } from '@/lib/youtube'

export const metadata = {
  title: 'Sermon Series | Gospel Truth Church',
}

export default async function PlaylistsPage() {
  let playlists

  try {
    playlists = await getPlaylists()
  } catch (error) {
    console.error('Failed to fetch playlists:', error)
    throw new Error('Failed to load sermon playlists')
  }

  return (
    <main className='pt-[70px]'>
      <section className='bg-gold-pale px-6 py-16 dark:bg-navy'>
        <div className='mx-auto max-w-7xl'>
          <div className='mb-10 text-center'>
            <div className='section-label justify-center'>Playlists</div>

            <h2 className='font-serif text-3xl font-bold'>
              Sermon Series & Collections
            </h2>

            <p className='mt-3 text-muted-foreground'>
              Browse teaching series and curated sermon collections.
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
                    {playlist.videoCount} Videos
                  </div>
                </div>

                <div className='p-5'>
                  <h3 className='line-clamp-2 font-serif text-xl font-semibold'>
                    {playlist.title}
                  </h3>

                  <p className='mt-2 text-sm text-muted-foreground'>
                    {playlist.videoCount} teachings
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
