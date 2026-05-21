'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { ProductionVideo } from '@/components/ProductionVideo';
import { VideoSchema } from '@/components/video-schema';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Star, Wand2, Music, CheckCircle, Zap, Heart, Smile } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

// Dynamic import for below-the-fold component
const Footer = dynamic(() => import('@/components/Footer').then(mod => mod.Footer), {
  loading: () => <div className="h-96 bg-background" />,
});

export default function Home() {
  const t = useTranslations();
  const locale = useLocale();
  const heroRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<Array<{ id: number; left: number; top: number; delay: number }>>([]);
  const [cards, setCards] = useState<Array<{ id: number; left: number; top: number; rotation: number; delay: number }>>([]);

  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png';

  useEffect(() => {
    // Generate elegant stars for premium cinematic feel - avoiding Kenneth's face area
    const newStars = Array.from({ length: 8 }, (_, i) => {
      let left, top;
      const zone = i % 4;

      // Distribute stars across safe zones, avoiding the left-center area where Kenneth's face is
      if (zone === 0) {
        // Top-right area (safe)
        left = 60 + Math.random() * 40;
        top = Math.random() * 30;
      } else if (zone === 1) {
        // Right side (safe)
        left = 70 + Math.random() * 30;
        top = 30 + Math.random() * 40;
      } else if (zone === 2) {
        // Bottom area (safe)
        left = Math.random() * 100;
        top = 70 + Math.random() * 30;
      } else {
        // Top-left corner, but high up to avoid face (safe)
        left = Math.random() * 30;
        top = Math.random() * 25;
      }

      return {
        id: i,
        left,
        top,
        delay: Math.random() * 3,
      };
    });
    setStars(newStars);

    // Generate fewer floating cards for elegant simplicity (reduced from 6 to 4)
    // Avoid center (where Kenneth is) - use corners only for focus on performer
    const newCards = Array.from({ length: 4 }, (_, i) => {
      let left, top;
      const zone = i % 4; // Distribute across 4 safe zones

      if (zone === 0) {
        // Top-left corner (safe)
        left = Math.random() * 20;
        top = Math.random() * 25;
      } else if (zone === 1) {
        // Top-right corner (safe)
        left = 80 + Math.random() * 20;
        top = Math.random() * 25;
      } else if (zone === 2) {
        // Bottom-left corner (safe)
        left = Math.random() * 20;
        top = 75 + Math.random() * 25;
      } else {
        // Bottom-right corner (safe)
        left = 80 + Math.random() * 20;
        top = 75 + Math.random() * 25;
      }

      return {
        id: i,
        left,
        top,
        rotation: Math.random() * 360,
        delay: Math.random() * 4,
      };
    });
    setCards(newCards);
  }, []);

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="homepage-video-schema" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-start overflow-hidden">
          {/* Full Background Image - Optimized to preserve Kenneth's full figure */}
          <div className="absolute inset-0 z-0 w-full h-full kenneth-premium-glow">
            <img 
              src="/kenneth-hero-novo.png"
              alt="Kenneth performing premium magic entertainment with theatrical presentation"
              className="w-full h-full object-cover object-top kenneth-vignette"
            />
          </div>

          {/* Cinematic Lighting Layers */}
          <div className="hero-spotlight-left"></div>
          <div className="hero-atmospheric-glow"></div>
          <div className="hero-cinematic-overlay"></div>
          <div className="hero-bottom-fade"></div>

          {/* Animated Stars */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-white hero-sparkle pointer-events-none z-20"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${Math.random() * 4 + 3}px`,
                height: `${Math.random() * 4 + 3}px`,
                animation: `hero-sparkle ${Math.random() * 2.5 + 2}s cubic-bezier(0.36, 0, 0.66, 1) ${star.delay}s infinite`,
              }}
            />
          ))}

          {/* Left Side Content - Text and CTAs (No overlap with image) */}
          <div className="relative z-10 max-w-xl px-4 sm:px-6 lg:px-8 py-12 h-full flex flex-col justify-center">
            <div className="flex flex-col justify-center">
              {/* Badge - Premium Glow */}
              <div className="mb-6 inline-block w-fit animate-float-slow">
                <span className="hero-badge-premium inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border border-purple-400/50 text-white font-semibold text-xs sm:text-sm hover:border-pink-400/70 transition-all">
                  <Wand2 size={16} className="text-yellow-300 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent font-bold">
                    ✨ {locale === 'da' ? 'TrylleKenneth' : 'TrylleKenneth'}
                  </span>
                </span>
              </div>

              {/* Main Title - Premium Vibrant Gradient */}
              <div className="mb-6">
                <h1 className="hero-title-premium text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-balance bg-gradient-to-br from-yellow-300 via-pink-300 to-purple-400 bg-clip-text text-transparent">
                  {t('hero.title')}
                </h1>
              </div>

              {/* Subtitle - Vibrant Glow */}
              <p className="hero-subtitle-premium text-base sm:text-lg lg:text-xl text-white/90 mb-8 text-pretty leading-relaxed max-w-xl font-medium">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons - Vibrant Premium Effects */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 w-fit">
                <Link href={`/${locale}/contact`}>
                  <Button
                    size="lg"
                    className="cta-button-premium bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 text-gray-900 hover:from-yellow-300 hover:via-pink-300 hover:to-purple-300 text-base font-bold h-12 sm:h-13 px-8 sm:px-10 rounded-xl shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 transition-all duration-300"
                  >
                    {t('hero.cta1')}
                  </Button>
                </Link>
                <a href="tel:+4540852728" className="inline-block">
                  <Button
                    size="lg"
                    className="secondary-cta-premium text-base font-bold h-12 sm:h-13 px-8 sm:px-10 border-2 border-purple-400/60 bg-purple-500/10 text-white hover:bg-purple-500/20 rounded-xl backdrop-blur-sm transition-all duration-300"
                  >
                    {t('hero.cta2')}
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="trust-indicator-premium pt-6 border-t border-purple-400/30">
                <p className="text-sm sm:text-base text-white/85 font-semibold">
                  {t('trust.message')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Featured Video Section - "Watch the Magic Live" */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Section Header - More minimal */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('video.title')}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t('video.subtitle')}
            </p>
          </div>

          {/* Premium Video Card - Cleaner design */}
          <div className="relative group">
            {/* Video container - simpler styling */}
            <div className="relative overflow-hidden rounded-2xl border border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300 bg-black">
              
              {/* Subtle gradient overlays */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/20 to-transparent z-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/30 to-transparent z-20 pointer-events-none"></div>
              
              {/* Video Element */}
              <ProductionVideo
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrylleKenneth%20show-BcdHB40bje44mvtgNoULMLWdckbAzj.mp4"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_23_07%20AM-gWtRtuxpmElUZTtT93c23mlTcM76sD.png"
                videoId="featured-video"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                preload="metadata"
                lazy={true}
                aspectRatio="16/9"
                className="premium-video"
              />

              {/* Hover glow - subtle */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{
                boxShadow: 'inset 0 0 30px rgba(139, 92, 246, 0.08)'
              }}></div>
            </div>

            {/* Video info - simplified */}
            <div className="mt-4 flex items-center justify-center gap-2 text-muted-foreground">
              <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full animate-pulse"></div>
              <p className="text-xs sm:text-sm font-medium">{t('video.autoplay')}</p>
              <div className="w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </section>

        {/* Premium Performance Showcase - Asymmetrical Masonry Editorial Layout */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {locale === 'da' ? 'Optræder & Underholdning' : 'Performances & Entertainment'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {locale === 'da' 
                ? 'Udforsk vores førsteklasses magiske underholdning til enhver lejlighed' 
                : 'Explore our premium magical entertainment for every occasion'}
            </p>
          </div>

          {/* Desktop: Asymmetrical Masonry Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-6 auto-rows-max">
            {/* 1. Wedding Magic - Large Featured (3x2) */}
            <div className="lg:col-span-6 lg:row-span-2 group relative rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 bg-background/50 border border-border/30">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.%20Wedding%20Magic%20%20Luxury%20Wedding-fR2FfEgsmq8KZQKDU2kZtPew51PolW.png"
                  alt="Kenneth performing close-up magic at luxury wedding reception"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {locale === 'da' ? 'Bryllupstrylleri' : 'Wedding Magic'}
                </h3>
                <p className="text-white/80 text-sm mb-4">
                  {locale === 'da' 
                    ? 'Elegant magisk underholdning for uforglemmelige bryllupper'
                    : 'Elegant close-up magic for unforgettable weddings and luxury celebrations'}
                </p>
                <Link href={`/${locale}/bryllupper`} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 hover:bg-primary text-white rounded-lg text-sm font-semibold transition-all duration-300">
                  {t('services.readMore')} →
                </Link>
              </div>
            </div>

            {/* 2. Close-up Magic - Medium (3x1) */}
            <div className="lg:col-span-3 group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background/50 border border-border/30">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Close-up%20Magic-NOF8ZeYflPoQ3vTvYbjS7Z1PTyYBHm.png"
                  alt="Kenneth performing close-up card magic"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {locale === 'da' ? 'Nærmagi' : 'Close-up Magic'}
                </h3>
                <p className="text-white/70 text-xs mb-3">
                  {locale === 'da' 
                    ? 'Mindblowing magic direkte foran dine gæster'
                    : 'Mind-blowing magic performed directly in front of your guests'}
                </p>
                <Link href={`/${locale}/services/closeup`} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/80 hover:bg-primary text-white rounded text-xs font-semibold transition-all">
                  {t('services.readMore')} →
                </Link>
              </div>
            </div>

            {/* 3. Christmas Shows - Medium (3x1) */}
            <div className="lg:col-span-3 group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background/50 border border-border/30">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christmas%20Shows-T96GGsu8S3PilLsx3MxwQAV4QkeiM3.png"
                  alt="Kenneth performing Christmas magic with festive decorations"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {locale === 'da' ? 'Jule Shows' : 'Christmas Shows'}
                </h3>
                <p className="text-white/70 text-xs mb-3">
                  {locale === 'da' 
                    ? 'Festlig magisk underholdning til julearrangementer'
                    : 'Festive magical performances for Christmas dinners and holiday parties'}
                </p>
                <Link href={`/${locale}/julefrokost`} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/80 hover:bg-primary text-white rounded text-xs font-semibold transition-all">
                  {t('services.readMore')} →
                </Link>
              </div>
            </div>

            {/* 4. Stand-up Magic - Wide (6x1) */}
            <div className="lg:col-span-6 group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background/50 border border-border/30">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stand-up%20Magic%20%282%29-T3funrlf5Wlx2emFiaC8cpbT2Ja60M.png"
                  alt="Kenneth performing stand-up magic on stage with full production"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {locale === 'da' ? 'Stand-up Trylleri' : 'Stage & Stand-up Magic'}
                </h3>
                <p className="text-white/70 text-sm mb-3 max-w-sm">
                  {locale === 'da' 
                    ? 'Storskala komedie og magic optrædener til teatre og livepublikum'
                    : 'Large-scale comedy and magic performances for theaters and live audiences'}
                </p>
                <Link href={`/${locale}/services/standup`} className="inline-flex items-center gap-2 px-4 py-2 bg-primary/90 hover:bg-primary text-white rounded-lg text-sm font-semibold transition-all">
                  {t('services.readMore')} →
                </Link>
              </div>
            </div>

            {/* 5. Corporate Events - Medium (3x1) */}
            <div className="lg:col-span-3 group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background/50 border border-border/30">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate%20Events%20%282%29-pwH6MmovIIqboDlwmKqk0z3TcU9ZG6.png"
                  alt="Kenneth performing interactive magic at corporate dinner event"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {locale === 'da' ? 'Firmaarrangementer' : 'Corporate Events'}
                </h3>
                <p className="text-white/70 text-xs mb-3">
                  {locale === 'da' 
                    ? 'Interaktiv underholdning til konferencer og firmafester'
                    : 'Interactive entertainment for conferences, company parties, and business events'}
                </p>
                <Link href={`/${locale}/firmaarrangementer`} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/80 hover:bg-primary text-white rounded text-xs font-semibold transition-all">
                  {t('services.readMore')} →
                </Link>
              </div>
            </div>

            {/* 6. Family & Outdoor Festivals - Medium (3x1) */}
            <div className="lg:col-span-3 group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background/50 border border-border/30">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20%20Outdoor%20Festivals-JCrmVbqV49OfIvoIIf4Prw9GcXEUNI.png"
                  alt="Kenneth performing magic outdoors for families at festival"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-lg font-bold text-white mb-1">
                  {locale === 'da' ? 'Familie & Festivaler' : 'Family & Outdoor Festivals'}
                </h3>
                <p className="text-white/70 text-xs mb-3">
                  {locale === 'da' 
                    ? 'Sjov og engagerende optrædener for familier og festivaler'
                    : 'Fun and engaging outdoor performances for families, festivals, and public events'}
                </p>
                <Link href={`/${locale}/services/childrens`} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/80 hover:bg-primary text-white rounded text-xs font-semibold transition-all">
                  {t('services.readMore')} →
                </Link>
              </div>
            </div>
          </div>

          {/* Tablet: 2-Column Layout */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
            {[
              {
                title: locale === 'da' ? 'Bryllupstrylleri' : 'Wedding Magic',
                desc: locale === 'da' ? 'Elegant magisk underholdning for uforglemmelige bryllupper' : 'Elegant close-up magic for unforgettable weddings',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.%20Wedding%20Magic%20%20Luxury%20Wedding-fR2FfEgsmq8KZQKDU2kZtPew51PolW.png',
                href: `/${locale}/bryllupper`
              },
              {
                title: locale === 'da' ? 'Nærmagi' : 'Close-up Magic',
                desc: locale === 'da' ? 'Mindblowing magic direkte foran dine gæster' : 'Mind-blowing magic performed directly in front of your guests',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Close-up%20Magic-NOF8ZeYflPoQ3vTvYbjS7Z1PTyYBHm.png',
                href: `/${locale}/services/closeup`
              },
              {
                title: locale === 'da' ? 'Jule Shows' : 'Christmas Shows',
                desc: locale === 'da' ? 'Festlig magisk underholdning til julearrangementer' : 'Festive magical performances for Christmas dinners',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christmas%20Shows-T96GGsu8S3PilLsx3MxwQAV4QkeiM3.png',
                href: `/${locale}/julefrokost`
              },
              {
                title: locale === 'da' ? 'Stand-up Trylleri' : 'Stage & Stand-up Magic',
                desc: locale === 'da' ? 'Storskala komedie og magic optrædener' : 'Large-scale comedy and magic performances',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stand-up%20Magic%20%282%29-T3funrlf5Wlx2emFiaC8cpbT2Ja60M.png',
                href: `/${locale}/services/standup`
              },
              {
                title: locale === 'da' ? 'Firmaarrangementer' : 'Corporate Events',
                desc: locale === 'da' ? 'Interaktiv underholdning til konferencer og firmafester' : 'Interactive entertainment for conferences and company parties',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate%20Events%20%282%29-pwH6MmovIIqboDlwmKqk0z3TcU9ZG6.png',
                href: `/${locale}/firmaarrangementer`
              },
              {
                title: locale === 'da' ? 'Familie & Festivaler' : 'Family & Outdoor Festivals',
                desc: locale === 'da' ? 'Sjov og engagerende optrædener for familier' : 'Fun and engaging outdoor performances for families',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20%20Outdoor%20Festivals-JCrmVbqV49OfIvoIIf4Prw9GcXEUNI.png',
                href: `/${locale}/services/childrens`
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-background/50 border border-border/30">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-xs mb-3">{item.desc}</p>
                  <Link href={item.href} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/90 hover:bg-primary text-white rounded text-xs font-semibold transition-all">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile: Stacked Vertical Layout */}
          <div className="md:hidden space-y-4">
            {[
              {
                title: locale === 'da' ? 'Bryllupstrylleri' : 'Wedding Magic',
                desc: locale === 'da' ? 'Elegant magisk underholdning for uforglemmelige bryllupper' : 'Elegant close-up magic for unforgettable weddings',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.%20Wedding%20Magic%20%20Luxury%20Wedding-fR2FfEgsmq8KZQKDU2kZtPew51PolW.png',
                href: `/${locale}/bryllupper`
              },
              {
                title: locale === 'da' ? 'Nærmagi' : 'Close-up Magic',
                desc: locale === 'da' ? 'Mindblowing magic direkte foran dine gæster' : 'Mind-blowing magic performed directly in front of your guests',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Close-up%20Magic-NOF8ZeYflPoQ3vTvYbjS7Z1PTyYBHm.png',
                href: `/${locale}/services/closeup`
              },
              {
                title: locale === 'da' ? 'Jule Shows' : 'Christmas Shows',
                desc: locale === 'da' ? 'Festlig magisk underholdning til julearrangementer' : 'Festive magical performances for Christmas dinners',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christmas%20Shows-T96GGsu8S3PilLsx3MxwQAV4QkeiM3.png',
                href: `/${locale}/julefrokost`
              },
              {
                title: locale === 'da' ? 'Stand-up Trylleri' : 'Stage & Stand-up Magic',
                desc: locale === 'da' ? 'Storskala komedie og magic optrædener' : 'Large-scale comedy and magic performances',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stand-up%20Magic%20%282%29-T3funrlf5Wlx2emFiaC8cpbT2Ja60M.png',
                href: `/${locale}/services/standup`
              },
              {
                title: locale === 'da' ? 'Firmaarrangementer' : 'Corporate Events',
                desc: locale === 'da' ? 'Interaktiv underholdning til konferencer og firmafester' : 'Interactive entertainment for conferences and company parties',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate%20Events%20%282%29-pwH6MmovIIqboDlwmKqk0z3TcU9ZG6.png',
                href: `/${locale}/firmaarrangementer`
              },
              {
                title: locale === 'da' ? 'Familie & Festivaler' : 'Family & Outdoor Festivals',
                desc: locale === 'da' ? 'Sjov og engagerende optrædener for familier' : 'Fun and engaging outdoor performances for families',
                img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20%20Outdoor%20Festivals-JCrmVbqV49OfIvoIIf4Prw9GcXEUNI.png',
                href: `/${locale}/services/childrens`
              }
            ].map((item, idx) => (
              <div key={idx} className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 bg-background/50 border border-border/30">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-base font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-white/70 text-xs mb-3 line-clamp-2">{item.desc}</p>
                  <Link href={item.href} className="inline-flex items-center gap-2 px-3 py-1.5 bg-primary/90 hover:bg-primary text-white rounded text-xs font-semibold transition-all">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Kenneth Section - Cinematic Documentary Style */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Cinematic Image Only (less decoration) */}
            <div className="relative h-96 sm:h-[450px] flex items-center justify-center order-2 lg:order-1">
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                {/* Subtle top cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent z-10 pointer-events-none"></div>
                
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2009.29.40%20%285%29-bYEX8wJKhjS21S5AWDXpk60sUxgHWC.jpeg"
                  alt="Kenneth the magician - professional performer"
                  loading="lazy"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Side - Minimal Text, Strong Emotional Copy */}
            <div className="flex flex-col justify-center order-1 lg:order-2">
              {/* Label */}
              <div className="inline-flex items-center gap-2 mb-4 w-fit">
                <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                <span className="text-xs font-bold text-primary uppercase tracking-widest">{t('about.label')}</span>
              </div>

              {/* Main Title - Simpler, stronger */}
              <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-foreground text-balance bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
                {t('about.title')}
              </h2>

              {/* Core Statement - One powerful paragraph */}
              <p className="text-lg text-foreground/75 mb-8 leading-relaxed text-pretty">
                {t('about.description')}
              </p>

              {/* Subtle CTA */}
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="w-fit bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-8 h-12 shadow-lg transition-all">
                  {t('navigation.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* International Performances & Live Shows Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('performances.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {t('performances.subtitle')}
            </p>
          </div>

          {/* Asymmetrical Editorial Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Large Feature Image - Left Side */}
            <div className="md:col-span-7 group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 h-80 md:h-96">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2009.29.40-aJSR9rHWCg2Qovmc5Cls5EzdGGQSiM.jpeg"
                alt="Kenneth performing at outdoor event with magicians"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <p className="text-white font-bold text-lg">{t('performances.outdoor')}</p>
                <p className="text-white/80 text-sm mt-1">{t('performances.outdoorDesc')}</p>
              </div>
            </div>

            {/* Smaller Images - Right Side Stack */}
            <div className="md:col-span-5 space-y-6">
              {/* Image 1 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all h-40 md:h-44">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2009.29.40%20%288%29-ysB1ALG8OdnZZGaiQS6HkDKZMmU52h.jpeg"
                  alt="Magic at Coney Island Museum event poster"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              {/* Image 2 */}
              <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all h-40 md:h-44">
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2009.29.40%20%282%29-MdNSn34m591IkHYmXUArCeXg06CE4h.jpeg"
                  alt="Magic show performance with audience"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Showcase Cards - Venues & Experiences */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {/* Card 1 - Church/Sacred Space */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2009.47.48-SaDnSnS8AmBiFhwEWQUkeIuUkJvEAx.jpeg"
                alt="Kenneth performing in church with children"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{t('performances.church')}</h3>
                <p className="text-white/80 text-sm mt-2">{t('performances.churchDesc')}</p>
              </div>
            </div>

            {/* Card 2 - Stage Performances */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2009.29.40%20%286%29-Kyd2JscLeYc4i8HZlrpOwp3G3eltA8.jpeg"
                alt="Kenneth performing on stage at live show"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{t('performances.theater')}</h3>
                <p className="text-white/80 text-sm mt-2">{t('performances.theaterDesc')}</p>
              </div>
            </div>

            {/* Card 3 - Close-up & Intimate */}
            <div className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2009.29.40%20%284%29-3IEacJ6qKt7ClcYTMshMcTtVdSeprO.jpeg"
                alt="Close-up card magic demonstration"
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white font-bold text-lg">{t('performances.closeup')}</h3>
                <p className="text-white/80 text-sm mt-2">{t('performances.closeupDesc')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* More Live Moments Section - Adult Events Video */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
              {t('moments.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('moments.subtitle')}
            </p>
          </div>

          {/* Secondary Video Card - More Compact */}
          <div className="max-w-3xl mx-auto group relative">
            {/* Subtle glow border on hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-75 transition-all duration-500 blur-sm -z-20"></div>
            
            {/* Video card container */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-accent/20 group-hover:border-accent/50 transition-all duration-500 shadow-xl group-hover:shadow-2xl bg-gradient-to-br from-slate-900 to-black">
              
              {/* Cinematic overlay - subtle */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30 z-20 pointer-events-none"></div>
              
              {/* Floating sparkles - fewer for secondary card */}
              <div className="absolute -top-3 right-8 text-2xl animate-twinkle z-30 pointer-events-none">✨</div>
              <div className="absolute -bottom-1 left-4 text-xl animate-twinkle z-30 pointer-events-none" style={{ animationDelay: '1s' }}>✨</div>

              {/* Video Element - Secondary with Production Grade System */}
              <ProductionVideo
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrylleKenneth-24BnI1Ltz7yasQ0N6wNRvJtVkWOQyw.mp4"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13%20%281%29-A5bNILaPPqzkKWoS1Is5CAZBKHfmRZ.jpeg"
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
                preload="metadata"
                lazy={true}
                aspectRatio="16/9"
              />

              {/* Subtle magical glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{
                boxShadow: 'inset 0 0 30px rgba(251, 146, 60, 0.1)'
              }}></div>
            </div>

            {/* Video card info */}
            <div className="mt-4 px-2 text-left">
              <h3 className="text-xl font-bold text-foreground mb-1">Magic for Adult Events</h3>
              <p className="text-sm text-muted-foreground">
                Close-up moments, audience interaction and professional entertainment for private parties and events.
              </p>
            </div>
          </div>
        </section>

        {/* Live Public Performances - Cinematic Showcase */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {locale === 'da' ? 'Live Offentlige Optræder' : 'Live Public Performances'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {locale === 'da' ? 'Interaktiv underholdning til festivaler, offentlige events og store publikummer' : 'Interactive entertainment experiences for festivals, public events and large audiences'}
            </p>
          </div>

          {/* Cinematic Image Showcase */}
          <div className="relative group">
            {/* Outer glow effect - premium border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>

            {/* Main container */}
            <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 bg-gradient-to-br from-slate-900 via-slate-950 to-black">
              
              {/* Cinematic overlays */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/40 via-transparent to-transparent z-20 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 via-transparent to-transparent z-20 pointer-events-none"></div>

              {/* Floating sparkles - sparse and elegant */}
              <div className="absolute top-8 right-12 text-2xl animate-twinkle z-30 pointer-events-none opacity-50">✨</div>
              <div className="absolute bottom-12 left-8 text-lg animate-twinkle z-30 pointer-events-none opacity-40" style={{ animationDelay: '1.2s' }}>✨</div>
              <div className="absolute top-1/2 right-6 text-xl animate-twinkle z-30 pointer-events-none opacity-30" style={{ animationDelay: '0.6s' }}>✨</div>

              {/* Image */}
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2020%2C%202026%2C%2012_16_08%20PM-2Eu7GA9AAjNF4OFNQnO9LiwwkGlkrD.png"
                alt="Kenneth performing at outdoor festival in Austrian mountains with large enthusiastic audience and blue sky"
                className="w-full h-auto display-block object-cover"
                style={{ aspectRatio: '16 / 9' }}
              />

              {/* Magical glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                boxShadow: 'inset 0 0 60px rgba(139, 92, 246, 0.12), inset 0 0 100px rgba(251, 146, 60, 0.06)'
              }}></div>
            </div>

            {/* Performance Badges */}
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                {locale === 'da' ? 'Festivaler' : 'Festivals'}
              </div>
              <div className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-full text-sm font-medium text-accent">
                {locale === 'da' ? 'Offentlige Events' : 'Public Events'}
              </div>
              <div className="px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-sm font-medium text-secondary">
                {locale === 'da' ? 'International Underholdning' : 'International Entertainment'}
              </div>
              <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium text-primary">
                {locale === 'da' ? 'Live Publikumer' : 'Live Audience'}
              </div>
            </div>

            {/* Description */}
            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p className="text-muted-foreground leading-relaxed">
                {locale === 'da' 
                  ? 'Kenneth performer for store publikummer ved festivaler, public events og specielle begivenheder verden over. Med over 30 års erfaring leverer han professionel live underholdning, der fascinerer og underholde mennesker på alle aldersgrupper.'
                  : 'Kenneth performs for large audiences at festivals, public events and special occasions worldwide. With over 30 years of experience, he delivers professional live entertainment that captivates and delights people of all ages.'
                }
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/10 section-magic-entrance">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent stagger-item">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 stagger-item">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button
                  size="lg"
                  className="magic-button bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-base font-semibold h-14 px-8 stagger-item"
                >
                  {t('cta.bookShow')}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button
                  size="lg"
                  variant="outline"
                  className="magic-button text-base font-semibold h-14 px-8 border-2 border-secondary text-secondary-foreground hover:bg-secondary hover:text-secondary-foreground stagger-item"
                >
                  {t('cta.callKenneth')}
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
