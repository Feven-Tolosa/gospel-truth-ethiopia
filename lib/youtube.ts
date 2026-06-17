export interface Sermon {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
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
