// components/home/sermons-preview.tsx

import { getLatestSermons } from '@/lib/youtube'
import SermonsPreviewClient from './SermonsPreviewClient'

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array]

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))

    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  return shuffled
}

export default async function SermonsPreview() {
  const sermons = await getLatestSermons(50)

  if (!sermons.length) {
    return null
  }

  const shuffled = shuffleArray(sermons)

  const featured = shuffled[0]
  const recent = shuffled.slice(1, 7)

  return <SermonsPreviewClient featured={featured} recent={recent} />
}

// export default async function SermonsPreview() {
//   const sermons = await getLatestSermons(50)

//   const shuffled = shuffleArray(sermons)

//   const featured = shuffled[0]
//   const recent = shuffled.slice(1, 7)

//   return <SermonsPreviewClient featured={featured} recent={recent} />
// }
