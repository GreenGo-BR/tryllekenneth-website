import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tryllekenneth.dk'
  const locales = ['da', 'en']
  
  // Core pages that exist in both locales
  const corePages = [
    '',
    '/services/naermagi',
    '/services/standup',
    '/services/boernetrylleri',
    '/services/santa',
    '/bryllupper',
    '/firmaarrangementer',
    '/julefrokost',
    '/galleri',
    '/faq',
    '/kontakt',
    '/privacy',
    '/terms',
  ]

  // Generate sitemap entries for all locale + page combinations
  const sitemapEntries: MetadataRoute.Sitemap = []

  // Add root URL (da-DK as default)
  sitemapEntries.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1.0,
  })

  // Add all locale-specific pages
  locales.forEach((locale) => {
    corePages.forEach((page) => {
      const url = page === '' 
        ? `${baseUrl}/${locale}`
        : `${baseUrl}/${locale}${page}`

      // Set priority based on page importance
      let priority = 0.7
      if (page === '') priority = 1.0
      if (page.includes('services')) priority = 0.9
      if (page.includes('bryllup') || page.includes('firma') || page.includes('jule')) priority = 0.85
      if (page === '/faq' || page === '/kontakt') priority = 0.6

      // Set change frequency based on page type
      let changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | 'always' = 'monthly'
      if (page === '') changeFrequency = 'weekly'
      if (page === '/faq' || page === '/kontakt') changeFrequency = 'monthly'
      if (page.includes('services')) changeFrequency = 'yearly'

      sitemapEntries.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
      })
    })
  })

  return sitemapEntries
}
