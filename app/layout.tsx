import type { Metadata } from 'next'
import { Inter, Playfair_Display, Noto_Serif_Ethiopic } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
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

// Centralized site configuration
const siteConfig = {
  name: 'Gospel Truth Church Ethiopia',
  shortName: 'Gospel Truth Church',
  url: 'https://gospeltruth.vercel.app',
  description:
    'Gospel Truth Church is an evangelical church in Jimma, Ethiopia, committed to biblical teaching, sound doctrine, worship, discipleship, and proclaiming the Gospel of Jesus Christ.',
  image: '/opengraph-image.png',
  locale: 'en_US',
}

// SEO Metadata
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  applicationName: siteConfig.name,

  title: {
    default: `${siteConfig.name} | የወንጌል እውነት`,
    template: `%s | ${siteConfig.shortName}`,
  },

  description: siteConfig.description,


   verification: {
  google:"TggyYJeClCBvBbliapqmRNmcM4yU11uycysA8KO-C5Y"
   },

   
  keywords: [
    'Gospel Truth Church',
    'Gospel Truth Church Ethiopia',
    'Jimma Church',
    'Christian Church Ethiopia',
    'Evangelical Church Ethiopia',
    'Bible Teaching',
    'Biblical Preaching',
    'Christian Discipleship',
    'Dawit Fassil Ministries',
    'የወንጌል እውነት ቤተ ክርስቲያን',
    'ዳዊት ፋሲል',
  ],

  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'Religion',

  alternates: {
    canonical: '/',
  },

  verification: {
    google: 'TggyYJeClCBvBbliapqmRNmcM4yU11uycysA8KO-C5Y',
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
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} | Biblical Teaching and Worship`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.image,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    images: [siteConfig.image],
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },

  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} ${notoEthiopic.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
            <Navbar />

            <main>{children}</main>

            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
