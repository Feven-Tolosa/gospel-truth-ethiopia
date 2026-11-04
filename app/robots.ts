import type { MetadataRoute } from 'next'

const SITE_URL = 'https://gospeltruth.vercel.app'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://gospeltruth.vercel.app/sitemap.xml',
  }
}
