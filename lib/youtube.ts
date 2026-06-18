export interface Sermon {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
}

interface Props {
  featured: Sermon
  recent: Sermon[]
}
export interface PlaylistVideo {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
}
export interface Playlist {
  id: string
  title: string
  thumbnail: string
  videoCount: number
  description?: string
}
const API_KEY = process.env.YOUTUBE_API_KEY!
const PLAYLIST_ID = process.env.YOUTUBE_UPLOADS_PLAYLIST_ID!

export async function getLatestSermons(maxResults = 12): Promise<Sermon[]> {
  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${PLAYLIST_ID}&maxResults=${maxResults}&key=${API_KEY}`,
    {
      next: {
        revalidate: 3600, // refresh every hour
      },
    },
  )

  if (!response.ok) {
    throw new Error('Failed to fetch sermons')
  }

  const data = await response.json()

  return data.items
    .filter(
      (item: any) =>
        item.snippet?.resourceId?.videoId &&
        item.snippet.title !== 'Private video',
    )
    .map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail:
        item.snippet.thumbnails.maxres?.url ||
        item.snippet.thumbnails.high?.url ||
        item.snippet.thumbnails.medium?.url,
      publishedAt: item.snippet.publishedAt,
    }))
}

export async function getPlaylists(): Promise<Playlist[]> {
  const apiKey = process.env.YOUTUBE_API_KEY
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  const url =
    `https://www.googleapis.com/youtube/v3/playlists` +
    `?part=snippet,contentDetails` +
    `&channelId=${channelId}` +
    `&maxResults=50` +
    `&key=${apiKey}`

  const res = await fetch(url, {
    next: { revalidate: 3600 },
  })

  if (!res.ok) return []

  const data = await res.json()

  return data.items.map((item: any) => ({
    id: item.id,
    title: item.snippet.title,
    thumbnail:
      item.snippet.thumbnails?.high?.url ||
      item.snippet.thumbnails?.medium?.url ||
      item.snippet.thumbnails?.default?.url,
    videoCount: item.contentDetails.itemCount,
  }))
}

export async function getPlaylistVideos(
  playlistId: string,
): Promise<PlaylistVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${apiKey}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  )

  const data = await res.json()

  return (
    data.items?.map((item: any) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail:
        item.snippet.thumbnails?.high?.url ||
        item.snippet.thumbnails?.medium?.url,
      publishedAt: item.snippet.publishedAt,
    })) || []
  )
}
