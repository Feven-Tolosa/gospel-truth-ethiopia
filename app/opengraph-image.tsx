import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Gospel Truth Church Ethiopia | የወንጌል እውነት ቤተ ክርስቲያን'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const logo = new URL('../public/logo.png', import.meta.url)

  const building = new URL('../public/church-building.jpg', import.meta.url)

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        position: 'relative',
        background: '#07162e',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <img
        src={building.toString()}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Navy Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(90deg, rgba(7,22,46,.95) 0%, rgba(7,22,46,.82) 45%, rgba(7,22,46,.35) 100%)',
        }}
      />

      {/* Content */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '70px',
          width: '60%',
          position: 'relative',
        }}
      >
        <img src={logo.toString()} width={110} height={110} />

        <div
          style={{
            marginTop: 28,
            fontSize: 70,
            fontWeight: 700,
          }}
        >
          Gospel Truth
        </div>

        <div
          style={{
            fontSize: 58,
            color: '#d6a64d',
            fontWeight: 600,
          }}
        >
          Church Ethiopia
        </div>

        <div
          style={{
            marginTop: 30,
            fontSize: 34,
          }}
        >
          የወንጌል እውነት ቤተ ክርስቲያን
        </div>

        <div
          style={{
            marginTop: 35,
            fontSize: 28,
            color: '#d6a64d',
            border: '2px solid #d6a64d',
            padding: '14px 28px',
            borderRadius: 999,
            width: 'fit-content',
          }}
        >
          Holding Fast the Faithful Word
        </div>

        <div
          style={{
            marginTop: 40,
            fontSize: 24,
            color: '#e4e4e4',
          }}
        >
          Jimma • Ethiopia
        </div>
      </div>
    </div>,
    size,
  )
}
