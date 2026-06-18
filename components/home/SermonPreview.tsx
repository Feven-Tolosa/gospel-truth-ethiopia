// components/home/sermons-preview.tsx
import { getLatestSermons, Sermon } from '@/lib/youtube'
import SermonsPreviewClient from './SermonsPreviewClient'

export default async function SermonsPreview() {
  const sermons = await getLatestSermons(50)

  const featured = sermons[Math.floor(Math.random() * sermons.length)]

  const recent = sermons.filter((s) => s.id !== featured.id).slice(0, 6)

  return <SermonsPreviewClient featured={featured} recent={recent} />
}
