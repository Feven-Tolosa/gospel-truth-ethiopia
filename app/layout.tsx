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
  metadataBase: new URL('https://gospel-truth-ethiopia.vercel.app/'),

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
    'Dawit Fassil ',
    'Gospel Truth Church Ethiopia',
    'የወንጌል እውነት ቤተ ክርስቲያን',
    'የወንጌል እውነት',
    'የወንጌል እውነት ቤተ ክርስቲያን ጅማ',
    'የወንጌል እውነት ቤተ ክርስቲያን ጅማ ኢትዮጵያ',
    'ዳዊት ፋሲል ሚኒስትሪዎች',
    'ዳዊት ፋሲል',
  ],

  openGraph: {
    title: 'Gospel Truth Church Ethiopia',
    description:
      'Join us for biblical teaching, worship, discipleship, and fellowship.',

    url: 'https://gospel-truth-ethiopia.vercel.app/',

    siteName: 'Gospel Truth Church Ethiopia',

    locale: 'en_US',

    type: 'website',

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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
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
