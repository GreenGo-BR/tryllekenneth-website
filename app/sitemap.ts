import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://tryllekenneth.dk'
  const locales = ['da', 'en']
  
  // Core pages that exist in both locales with their path mappings
  const corePages = [
    { da: '', en: '', priority: 1.0, changeFreq: 'weekly' as const, name: 'Homepage' },
    { da: '/services/standup', en: '/services/standup', priority: 0.9, changeFreq: 'yearly' as const, name: 'Stand-up Magic' },
    { da: '/services/naermagi', en: '/services/closeup', priority: 0.9, changeFreq: 'yearly' as const, name: 'Close-up Magic' },
    { da: '/services/boernetrylleri', en: '/services/childrens', priority: 0.9, changeFreq: 'yearly' as const, name: 'Children Magic' },
    { da: '/bryllupper', en: '/weddings', priority: 0.85, changeFreq: 'monthly' as const, name: 'Wedding Magic' },
    { da: '/firmaarrangementer', en: '/corporate-events', priority: 0.85, changeFreq: 'monthly' as const, name: 'Corporate Events' },
    { da: '/julefrokost', en: '/christmas-party', priority: 0.85, changeFreq: 'monthly' as const, name: 'Christmas Events' },
    { da: '/galleri', en: '/gallery', priority: 0.7, changeFreq: 'monthly' as const, name: 'Gallery' },
    { da: '/kontakt', en: '/contact', priority: 0.8, changeFreq: 'monthly' as const, name: 'Contact' },
    { da: '/faq', en: '/faq', priority: 0.75, changeFreq: 'monthly' as const, name: 'FAQ' },
  ]

  // Generate sitemap entries with proper locale alternates
  const sitemapEntries: MetadataRoute.Sitemap = []

  corePages.forEach((page) => {
    // Add entry for Danish version
    sitemapEntries.push({
      url: page.da === '' ? `${baseUrl}/da` : `${baseUrl}/da${page.da}`,
      lastModified: new Date(),
      changeFrequency: page.changeFreq,
      priority: page.priority,
      alternates: {
        languages: {
          'da': page.da === '' ? `${baseUrl}/da` : `${baseUrl}/da${page.da}`,
          'en': page.en === '' ? `${baseUrl}/en` : `${baseUrl}/en${page.en}`,
          'x-default': page.en === '' ? `${baseUrl}/en` : `${baseUrl}/en${page.en}`,
        },
      },
    })

    // Add entry for English version (avoid duplicates if paths are identical)
    if (page.da !== page.en || page.en !== '') {
      sitemapEntries.push({
        url: page.en === '' ? `${baseUrl}/en` : `${baseUrl}/en${page.en}`,
        lastModified: new Date(),
        changeFrequency: page.changeFreq,
        priority: page.priority,
        alternates: {
          languages: {
            'da': page.da === '' ? `${baseUrl}/da` : `${baseUrl}/da${page.da}`,
            'en': page.en === '' ? `${baseUrl}/en` : `${baseUrl}/en${page.en}`,
            'x-default': page.en === '' ? `${baseUrl}/en` : `${baseUrl}/en${page.en}`,
          },
        },
      })
    }
  })

  return sitemapEntries
}

