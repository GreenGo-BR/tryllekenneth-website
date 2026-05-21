import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tryllekenneth.dk'
  const locales = ['da', 'en']
  
  // Core pages that exist in both locales
  const corePages = [
    '',
    '/services/naermagi',
    '/services/boernetrylleri',
    '/services/standup',
    '/services/santa',
    '/services/boernefoedselsdag',
    '/bryllupper',
    '/firmaarrangementer',
    '/julefrokost',
    '/galleri',
    '/faq',
    '/kontakt',
    '/privacy',
    '/terms',
  ]

  // English-specific pages (alternative URLs for English locale)
  const englishPages = [
    '/services/childrens',
    '/services/closeup',
    '/services/birthday-parties',
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
    // Add core pages for both locales
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

    // Add English-specific pages only for English locale
    if (locale === 'en') {
      englishPages.forEach((page) => {
        const url = `${baseUrl}/${locale}${page}`
        const priority = page.includes('services') ? 0.9 : 0.7
        const changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never' | 'always' = 'yearly'

        sitemapEntries.push({
          url,
          lastModified: new Date(),
          changeFrequency,
          priority,
        })
      })
    }
  })

  return sitemapEntries
}
