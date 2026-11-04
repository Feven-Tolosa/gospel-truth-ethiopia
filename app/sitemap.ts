import type { MetadataRoute } from 'next'

const SITE_URL = 'https://gospeltruth.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
     '/about', 
     '/playlists',
     '/ministries',
     '/contact',
  ]

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))
}
