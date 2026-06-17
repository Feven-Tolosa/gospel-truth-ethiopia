// components/home/sermons-preview.tsx
import { getLatestSermons } from '@/lib/youtube'
import SermonsPreviewClient from './SermonsPreviewClient'

export default async function SermonsPreview() {
  const sermons = await getLatestSermons(4)

  return <SermonsPreviewClient sermons={sermons} />
}
