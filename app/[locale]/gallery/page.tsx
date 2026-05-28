'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Link from 'next/link';

export default function Gallery() {
  const locale = useLocale();
  const t = useTranslations();
  const [activeCategory, setActiveCategory] = useState('all');
  const categories = [
    { id: 'all', labelKey: 'galleryPage.filterAll' },
    { id: 'children', labelKey: 'galleryPage.filterChildrensMagic' },
    { id: 'closeup', labelKey: 'galleryPage.filterCloseUpMagic' },
    { id: 'standup', labelKey: 'galleryPage.filterStandUpMagic' },
    { id: 'santa', labelKey: 'galleryPage.filterSantaChristmas' },
    { id: 'events', labelKey: 'galleryPage.filterEvents' },
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'children',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_32_06%20AM-GZOkIhDLvNu6qjaryNbYSElYJkRCJx.png',
      title: locale === 'da' ? 'Udendørs børnetrylleri' : 'Children\'s Outdoor Magic',
      description: locale === 'da' ? 'Interaktiv opvisning for familier' : 'Interactive magic performance for families',
    },
    {
      id: 2,
      category: 'closeup',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13%20%281%29-A5bNILaPPqzkKWoS1Is5CAZBKHfmRZ.jpeg',
      title: locale === 'da' ? 'Nærmagi med kort' : 'Close-up Card Magic',
      description: locale === 'da' ? 'Intimt korttrylleri tæt på publikum' : 'Intimate card manipulation artistry',
    },
    {
      id: 3,
      category: 'closeup',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13-270qN2OP2gez2uC7jEvcEzAJNz5r0O.jpeg',
      title: locale === 'da' ? 'Professionel nærmagi' : 'Professional Close-up',
      description: locale === 'da' ? 'Klassisk kortmagi' : 'Classic card magic performance',
    },
    {
      id: 4,
      category: 'standup',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_27_15%20AM-MBK00G4m2ZbI61vtY46vHeI8xZy0ZU.png',
      title: locale === 'da' ? 'Stand-up trylleri' : 'Stand-up Comedy Magic',
      description: locale === 'da' ? 'Scenetrylleri med humor' : 'Stage magic with comedy elements',
    },
    {
      id: 5,
      category: 'standup',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png',
      title: locale === 'da' ? 'Temaopvisning' : 'Pirate Entertainment',
      description: locale === 'da' ? 'Tematiseret underholdning med trylleri og humor' : 'Themed comedy and magic show',
    },
    {
      id: 6,
      category: 'children',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_34_15%20AM-uFrLxqdtG9SkMxgcePQK2lG9ViKb3p.png',
      title: locale === 'da' ? 'Familietrylleri i haven' : 'Family Garden Performance',
      description: locale === 'da' ? 'Udendørs trylleri for hele familien' : 'Outdoor magic for all ages',
    },
    {
      id: 7,
      category: 'santa',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2010_28_44%20AM-hDRkQSFWmdxgv26WKbGzDZ9rfV0UAo.png',
      title: locale === 'da' ? 'Julemand med magi' : 'Santa Christmas Magic',
      description: locale === 'da' ? 'Festlig juleunderholdning' : 'Festive seasonal entertainment',
    },
    {
      id: 8,
      category: 'events',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_16_21%20AM-QeJEuj4jXebk3G1AbI2UWIEw99s4y5.png',
      title: locale === 'da' ? 'Eventoptræden' : 'Event Performance',
      description: locale === 'da' ? 'Interaktiv trylleri med publikum' : 'Interactive audience magic',
    },
    {
      id: 9,
      category: 'standup',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_28_57%20AM-M1g6gMeHaNoj02b2nuP0m621igvvZY.png',
      title: locale === 'da' ? 'Scenetrylleri' : 'Stage Magic Production',
      description: locale === 'da' ? 'Større illusioner og optrædener' : 'Large-scale illusion performance',
    },
    {
      id: 10,
      category: 'events',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_20_01%20AM-Gd6ZPRouLhI71lXjHee6REXZdScV1N.png',
      title: locale === 'da' ? 'Trylleri og humor' : 'Magic & Comedy Showcase',
      description: locale === 'da' ? 'Professionel varieté-opvisning' : 'Professional variety show',
    },
    {
      id: 11,
      category: 'events',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_44_49%20AM-UMJLIfVVDcDujc57Mgy9Cm2yMKYkuU.png',
      title: locale === 'da' ? 'Firmaunderholdning' : 'Corporate Entertainment',
      description: locale === 'da' ? 'Professionel opvisning til events' : 'Professional event performance',
    },
    {
      id: 12,
      category: 'events',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_47_44%20AM-xBXaFCQSkJsXcDZxssAWXrD0CU4SGa.png',
      title: locale === 'da' ? 'Trylleri og humor-variété' : 'Magic & Comedy Variety Show',
      description: locale === 'da' ? 'Liveunderholdning med trylleri og humor' : 'Live comedy and magic event performance',
    },
    {
      id: 13,
      category: 'events',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_22_56%20AM-7q1XQb58QcnRdPCHCbLX637JHoega3.png',
      title: locale === 'da' ? 'Vintage trylleplakat' : 'Vintage Magic Show Poster',
      description: locale === 'da' ? 'Klassisk dansk trylleplakat fra magiens guldalder' : 'Nostalgic classic Danish magic poster from the golden age of magic',
    },
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-0 px-4 sm:px-6 lg:px-8 pb-0">
          <div className="max-w-4xl mx-auto pt-0 pb-0">
            <h1 className="text-4xl sm:text-5xl font-bold mb-0 text-foreground mt-2">
              {locale === 'da' ? 'Galleri' : 'Gallery'}
            </h1>
            <p className="text-lg text-muted-foreground mt-0.5">
              {locale === 'da' 
                ? 'Se TrylleKenneth i aktion på events, fester og til børneunderholdning'
                : 'See TrylleKenneth in action at events, parties and children\'s entertainment'
              }
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="z-40 bg-background/95 backdrop-blur border-b border-primary/10 py-1 px-4 sm:px-6 lg:px-8 -mt-32 sticky top-16">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                      : 'bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 border border-secondary/20'
                  }`}
                >
                  {t(category.labelKey)}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid - Masonry Layout with Flexible Aspect Ratios */}
        <section className="py-0 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 break-inside-avoid bg-background"
                >
                  {/* Image Container with Flexible Aspect Ratio */}
                  <div className="relative w-full bg-background overflow-hidden rounded-2xl min-h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>

                  {/* Content Below Image - No Overlay */}
                  <div className="p-6 bg-gradient-to-b from-background to-background/80">
                    <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">{item.description}</p>
                  </div>

                  {/* Subtle Border Glow on Hover */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-[inset_0_0_15px_rgba(139,92,246,0.2)]"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Highlights Section */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
                {locale === 'da' ? 'Video Highlights' : 'Video Highlights'}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                {locale === 'da'
                  ? 'Se TrylleKenneth i aktion - fra live-optrædener til intim nærmagi'
                  : 'Watch TrylleKenneth in action - from live performances to intimate close-up magic'
                }
              </p>
            </div>

            {/* Video Grid - Premium 2x2 cinematic layout with autoplay */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              <div className="flex flex-col group">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-5 shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', backgroundColor: '#000' }}
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrylleKenneth%20Close-up-ez33buOtJRlVxiQiFHsYjvLENfi1Ew.mp4" type="video/mp4" />
                  </video>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{locale === 'da' ? 'Close-up magi' : 'Close-up Magic'}</h3>
                <p className="text-sm text-muted-foreground">{locale === 'da' ? 'Intim trylleri' : 'Intimate magic'}</p>
              </div>
              <div className="flex flex-col group">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-5 shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', backgroundColor: '#000' }}
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrylleKenneth-vTCkNBPzwSUxpVR1eMyoH2T1mdtrwJ.mp4" type="video/mp4" />
                  </video>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{locale === 'da' ? 'Virksomhedsarrangementer' : 'Corporate Events'}</h3>
                <p className="text-sm text-muted-foreground">{locale === 'da' ? 'Professionel underholdning' : 'Professional entertainment'}</p>
              </div>
              <div className="flex flex-col group">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-5 shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', backgroundColor: '#000' }}
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202026-05-21%20at%2010.53.52%20%283%29-uQkO9DdvisgyQbzaDiMipFeGBXzQ19.mp4" type="video/mp4" />
                  </video>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{locale === 'da' ? 'Live Performance' : 'Live Performance'}</h3>
                <p className="text-sm text-muted-foreground">{locale === 'da' ? 'Scenetrylleri' : 'Stage magic'}</p>
              </div>
              <div className="flex flex-col group">
                <div className="aspect-video bg-black rounded-2xl overflow-hidden mb-5 shadow-lg">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    style={{ width: '100%', height: '100%', display: 'block', objectFit: 'contain', backgroundColor: '#000' }}
                  >
                    <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Wj53DsHCbTIsdsTyKEsOyjV5a68rmZ.mp4" type="video/mp4" />
                  </video>
                </div>
                <h3 className="text-base font-semibold text-foreground mb-2">{locale === 'da' ? 'Stand-up trylleri' : 'Stand-up Magic'}</h3>
                <p className="text-sm text-muted-foreground">{locale === 'da' ? 'Professionel underholdning' : 'Professional entertainment'}</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'da' ? 'Klar til magi?' : 'Ready for Magic?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {locale === 'da'
                ? 'Book TrylleKenneth til dit næste event og oplev magien selv'
                : 'Book TrylleKenneth for your next event and experience the magic yourself'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <button className="px-8 py-3 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/30 transition-all">
                  {locale === 'da' ? 'Book nu' : 'Book Now'}
                </button>
              </Link>
              <a href="tel:+4540852728">
                <button className="px-8 py-3 border-2 border-secondary text-secondary-foreground font-semibold rounded-xl hover:bg-secondary/10 transition-all">
                  {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                </button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
