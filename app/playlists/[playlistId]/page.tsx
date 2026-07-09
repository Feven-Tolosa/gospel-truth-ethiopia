import Image from 'next/image'
import { getPlaylistVideos } from '@/lib/youtube'

export default async function PlaylistDetailPage({
  params,
}: {
  params: Promise<{ playlistId: string }>
}) {
  const { playlistId } = await params

  const videos = await getPlaylistVideos(playlistId)

  return (
    <main className='pt-[70px]'>
      <section className='bg-navy px-6 py-20 text-center'>
        <div className='section-label justify-center'>Playlist</div>
        <h1 className='font-serif text-4xl font-bold text-white'>
          Sermon Series
        </h1>
        <p className='mt-3 text-muted-foreground text-white'>
          {' '}
          curated sermon collections
        </p>
      </section>

      <section className='px-6 py-10'>
        <div className='mx-auto max-w-7xl'>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {videos.map((video) => (
              <a
                key={video.id}
                href={`https://youtube.com/watch?v=${video.id}`}
                target='_blank'
                rel='noopener noreferrer'
                className='group overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-xl dark:bg-navy-mid'
              >
                <div className='relative h-56 overflow-hidden'>
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className='object-cover transition duration-700 group-hover:scale-110'
                  />
                </div>

                <div className='p-6'>
                  <h3 className='line-clamp-2 font-serif text-lg font-semibold'>
                    {video.title}
                  </h3>

                  <p className='mt-3 text-sm text-muted-foreground'>
                    {new Date(video.publishedAt).toLocaleDateString()}
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
