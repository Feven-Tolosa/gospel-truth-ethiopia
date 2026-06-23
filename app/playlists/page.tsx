import PlaylistsClient from '@/components/PlaylistsClient'
import { getPlaylists } from '@/lib/youtube'

export const metadata = {
  title: 'Sermon Series | Gospel Truth Church',
}

export default async function PlaylistsPage() {
  const playlists = await getPlaylists()

  return <PlaylistsClient playlists={playlists} />
}
