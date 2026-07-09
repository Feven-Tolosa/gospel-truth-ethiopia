import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Gospel Truth Church Ethiopia'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white',
      }}
    >
      <div style={{ fontSize: 64, fontWeight: 700, textAlign: 'center' }}>
        Gospel Truth Church
      </div>
      <div style={{ fontSize: 36, marginTop: 10, opacity: 0.85 }}>Ethiopia</div>
      <div style={{ fontSize: 28, marginTop: 24, opacity: 0.7 }}>
        የወንጌል እውነት ቤተ ክርስቲያን
      </div>
    </div>,
    { ...size },
  )
}
