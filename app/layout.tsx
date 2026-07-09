import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Serif_Ethiopic } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { WhatsAppFloat } from '@/components/whatsapp-float'
import { LanguageProvider } from '@/context/language-context'
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600'],
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700'],
})

const notoEthiopic = Noto_Serif_Ethiopic({
  subsets: ['ethiopic'],
  variable: '--font-noto-ethiopic',
  weight: ['400', '600', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://gospeltruth.vercel.app/'),

  applicationName: 'Gospel Truth Church Ethiopia',

  title: {
    default: 'Gospel Truth Church Ethiopia | የወንጌል እውነት ቤተ ክርስቲያን',
    template: '%s | Gospel Truth Church Ethiopia',
  },

  description:
    'An evangelical church in Jimma, Ethiopia committed to expository teaching, sound doctrine, and the bold proclamation of the Gospel.',

  keywords: [
    'Gospel Truth Church',
    'Gospel Truth Church Ethiopia',
    'Church Ethiopia',
    'Jimma Church',
    'Bible Teaching',
    'Christian Church Ethiopia',
    'Dawit Fassil Ministries',
    'የወንጌል እውነት ቤተ ክርስቲያን',
    'የወንጌል እውነት',
    'ዳዊት ፋሲል',
  ],

  authors: [
    {
      name: 'Gospel Truth Church Ethiopia',
    },
  ],

  creator: 'Gospel Truth Church Ethiopia',

  publisher: 'Gospel Truth Church Ethiopia',

  category: 'Religion',

  alternates: {
    canonical: '/',
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  openGraph: {
    type: 'website',

    locale: 'en_US',

    url: 'https://gospeltruth.vercel.app',

    title: 'Gospel Truth Church Ethiopia',

    description:
      'Join us for biblical teaching, worship, discipleship, and fellowship.',

    siteName: 'Gospel Truth Church Ethiopia',

    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gospel Truth Church Ethiopia',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',

    title: 'Gospel Truth Church Ethiopia',

    description:
      'Biblical teaching, worship, and discipleship in Jimma, Ethiopia.',

    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
    ],

    shortcut: ['/favicon.ico'],

    apple: [
      {
        url: '/apple-touch-icon.png',
      },
    ],
  },

  verification: {
    google: '', // Add your Google Search Console verification code later
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${notoEthiopic.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
            <Navbar />
            {children}
            <Footer />
            {/* <WhatsAppFloat /> */}
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
