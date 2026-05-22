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

        {/* Performances & Entertainment Showcase - Compact Premium Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-3 text-foreground">
                {locale === 'da' ? 'Optræder & Underholdning' : 'Performances & Entertainment'}
              </h2>
              <p className="text-base text-muted-foreground max-w-2xl">
                {locale === 'da' 
                  ? 'Udforsk vores førsteklasses magiske underholdning til enhver lejlighed' 
                  : 'Explore our premium magical entertainment for every occasion'}
              </p>
            </div>

            {/* 3-Column Grid - Desktop, 2-Column Tablet, 1-Column Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Wedding Magic */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.%20Wedding%20Magic%20%20Luxury%20Wedding-fR2FfEgsmq8KZQKDU2kZtPew51PolW.png"
                    alt="Kenneth performing close-up magic at luxury wedding reception"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Bryllupstrylleri' : 'Wedding Magic'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Elegant magisk underholdning for uforglemmelige bryllupper'
                      : 'Elegant magic for unforgettable weddings'}
                  </p>
                  <Link href={`/${locale}/bryllupper`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 2: Close-up Magic */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Close-up%20Magic-NOF8ZeYflPoQ3vTvYbjS7Z1PTyYBHm.png"
                    alt="Kenneth performing close-up card magic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Nærmagi' : 'Close-up Magic'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Mindblowing magic direkte foran dine gæster'
                      : 'Magic performed directly in front of your guests'}
                  </p>
                  <Link href={`/${locale}/services/closeup`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 3: Christmas Shows */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christmas%20Shows-T96GGsu8S3PilLsx3MxwQAV4QkeiM3.png"
                    alt="Kenneth performing Christmas magic with festive decorations"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Jule Shows' : 'Christmas Shows'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Festlig magisk underholdning til julearrangementer'
                      : 'Festive performances for holiday celebrations'}
                  </p>
                  <Link href={`/${locale}/julefrokost`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 4: Stage & Stand-up Magic */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stand-up%20Magic%20%282%29-T3funrlf5Wlx2emFiaC8cpbT2Ja60M.png"
                    alt="Kenneth performing stand-up magic on stage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Stand-up Trylleri' : 'Stage & Stand-up'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Storskala comedy og magic optrædener til teatre'
                      : 'Large-scale performances for theaters and audiences'}
                  </p>
                  <Link href={`/${locale}/services/standup`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 5: Corporate Events */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate%20Events%20%282%29-pwH6MmovIIqboDlwmKqk0z3TcU9ZG6.png"
                    alt="Kenneth performing interactive magic at corporate event"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Firmaarrangementer' : 'Corporate Events'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Interaktiv underholdning til konferencer og fester'
                      : 'Entertainment for conferences and company parties'}
                  </p>
                  <Link href={`/${locale}/firmaarrangementer`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 6: Family & Outdoor Festivals */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Family%20%20Outdoor%20Festivals-JCrmVbqV49OfIvoIIf4Prw9GcXEUNI.png"
                    alt="Kenneth performing magic outdoors for families"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Familie & Festivaler' : 'Family & Festivals'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Sjov og engagerende optrædener for familier'
                      : 'Fun performances for families and outdoor events'}
                  </p>
                  <Link href={`/${locale}/services/childrens`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>
            </div>
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
                
                {/* Watermark masks - hides right vertical watermark and bottom text */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-20 pointer-events-none"></div>
                
                <img 
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-21%20at%2011.23.56-WgxTUDSKbgr9vxKHHxY53yTFrQTSWP.jpeg"
                  alt="Kenneth the magician - professional black and white portrait with artistic composition"
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
