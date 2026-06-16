export async function getLatestSermon() {
  const channelId = process.env.YOUTUBE_CHANNEL_ID

  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?key=${process.env.YOUTUBE_API_KEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`,
  )

  const data = await res.json()

  return data.items[0]
}
