'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Header } from '@/components/Header';
import { ProductionVideo } from '@/components/ProductionVideo';
import { VideoSchema } from '@/components/video-schema';
import { ReviewHighlight } from '@/components/ReviewHighlight';
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
          <div className="hero-atmospheric-depth"></div>
          <div className="hero-milky-white-glow"></div>
          <div className="hero-white-bloom-haze"></div>
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
            {/* Minimal background behind text - allows bright left side to dominate */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent rounded-3xl pointer-events-none"></div>
            
            <div className="flex flex-col justify-center relative z-20">
              {/* Badge - Premium Frosted Glass */}
              <div className="mb-6 inline-block w-fit animate-float-slow">
                <span className="hero-badge-premium inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs sm:text-sm transition-all" style={{ backgroundColor: 'rgba(255,255,255,0.72)', border: '1px solid rgba(15,23,42,0.12)', boxShadow: '0 8px 24px rgba(15,23,42,0.12)', color: '#0f172a', backdropFilter: 'blur(12px)' }}>
                  <Wand2 size={16} className="text-yellow-400 animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="font-bold">
                    ✨ {locale === 'da' ? 'TrylleKenneth' : 'TrylleKenneth'}
                  </span>
                </span>
              </div>

              {/* Main Title - Dark navy luxury typography */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-snug text-balance text-slate-950 drop-shadow-lg max-w-md sm:max-w-2xl magical-heading magical-text">
                  {t('hero.title')}
                </h1>
              </div>

              {/* Subtitle - Dark navy with enhanced readability */}
              <p className="hero-subtitle-premium text-base sm:text-lg text-slate-900 mb-8 text-pretty leading-relaxed max-w-2xl font-normal drop-shadow-md">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons - Global CTA System */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 w-fit">
                <Link href={`/${locale}/contact`}>
                  <Button size="lg" className="btn-primary btn-lg">
                    {t('hero.cta1')}
                  </Button>
                </Link>
                <a href="https://wa.me/4540852728" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <Button size="lg" className="btn-secondary-light btn-lg">
                    {t('hero.cta2')}
                  </Button>
                </a>
              </div>

              {/* Trust Indicators - Dark navy for luxury feel */}
              <div className="trust-indicator-premium pt-6 border-t border-amber-500/30">
                <div className="trust-stars">
                  <span className="trust-star">★</span>
                  <span className="trust-star">★</span>
                  <span className="trust-star">★</span>
                  <span className="trust-star">★</span>
                  <span className="trust-star">★</span>
                </div>
                <p className="text-sm sm:text-base text-slate-950 font-semibold">
                  {t('trust.message')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Featured Video Section - "Watch the Magic Live" */}
        <section className="py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Section Header - Refined typography */}
          <div className="text-center mb-8 relative z-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-foreground magical-heading magical-text">
              {t('video.title')}
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto font-normal">
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
        <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="mb-9">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 text-foreground magical-heading magical-text">
                {locale === 'da' ? 'Magisk Underholdning til Arrangementer' : 'Performances & Entertainment'}
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl font-normal">
                {locale === 'da' 
                  ? 'Professionelt trylleri og underholdning til enhver lejlighed – fra fødselsdage til firmaarrangementer' 
                  : 'Professional performances for every occasion – from birthday parties to corporate events'}
              </p>
            </div>

            {/* 3-Column Grid - Desktop, 2-Column Tablet, 1-Column Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Card 1: Wedding Magic */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-800">
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
                      ? 'Elegant magisk underholdning til uforglemmelige bryllupper'
                      : 'Elegant magic for unforgettable weddings'}
                  </p>
                  <Link href={`/${locale}/${locale === 'da' ? 'bryllupper' : 'weddings'}`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 2: Close-up Magic */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Close-up%20Magic-NOF8ZeYflPoQ3vTvYbjS7Z1PTyYBHm.png"
                    alt="Kenneth performing close-up card magic"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Close-up magi' : 'Close-up Magic'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Magiske øjeblikke direkte foran dine gæster'
                      : 'Magic performed directly in front of your guests'}
                  </p>
                  <Link href={`/${locale}/services/${locale === 'da' ? 'naermagi' : 'close-up-magic'}`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 3: Christmas Shows */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Christmas%20Shows-T96GGsu8S3PilLsx3MxwQAV4QkeiM3.png"
                    alt="Kenneth performing Christmas magic with festive decorations"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Juleshows' : 'Christmas Shows'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Festlig magisk underholdning til julearrangementer'
                      : 'Festive performances for holiday celebrations'}
                  </p>
                  <Link href={`/${locale}/${locale === 'da' ? 'julefrokost' : 'christmas-party'}`} className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-accent transition-colors">
                    {t('services.readMore')} →
                  </Link>
                </div>
              </div>

              {/* Card 4: Stage & Stand-up Magic */}
              <div className="group relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 bg-slate-900">
                <div className="relative h-40 sm:h-48 overflow-hidden bg-slate-800">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stand-up%20Magic%20%282%29-T3funrlf5Wlx2emFiaC8cpbT2Ja60M.png"
                    alt="Kenneth performing stand-up magic on stage"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-base font-semibold text-white mb-1">
                    {locale === 'da' ? 'Stand-up trylleri' : 'Stage & Stand-up'}
                  </h3>
                  <p className="text-xs text-white/70 mb-3 line-clamp-2">
                    {locale === 'da' 
                      ? 'Masser af humor og magi, der fungerer perfekt på den store scene'
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
                      ? 'Interaktivt show tilpasset konferencer, firmafester og receptioner'
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
                      ? 'Sjove og engagerende shows for hele familien'
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
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Side - Cinematic Image Only (less decoration) */}
            <div className="relative h-80 sm:h-96 md:h-[450px] flex items-center justify-center order-2 lg:order-1">
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

              {/* Main Title - Refined and elegant */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-foreground">
              {t('about.title')}
            </h2>

              {/* Core Statement - One powerful paragraph */}
              <p className="text-base sm:text-lg text-foreground/85 mb-8 leading-relaxed text-pretty font-normal">
                {t('about.description')}
              </p>

              {/* Subtle CTA */}
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary">
                  {t('navigation.contact')}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Trust & Reviews Section - Subtle and Premium */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-50 via-white to-amber-50/50 border border-amber-100 rounded-2xl p-8 sm:p-12 text-center">
            <div className="mb-6">
              <ReviewHighlight variant="card" />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3">
              {t('reviews.trustHeading') || 'Trusted by Hundreds of Happy Clients'}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mb-4">
              {t('reviews.clientsServed') || 'Over 500+ events performed across Denmark'}
            </p>
            <p className="text-xs text-slate-500 mb-4">
              {t('reviews.localBusiness') || 'Verified local business since 2010'} • {t('reviews.recommendedBy') || 'Recommended by event organizers and families'}
            </p>
            <a 
              href="https://www.google.com/maps/place/Tryllekenneth/@55.6761,12.5683,13z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-amber-700 hover:text-amber-900 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-600 text-amber-600" />
              {t('reviews.seeReviews') || 'See verified reviews on Google'}
            </a>
          </div>
        </section>

        {/* CTA Section with Premium Signature */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 section-magic-entrance premium-signature-accent">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground stagger-item magical-heading magical-text">
              {t('cta.title')}
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground mb-8 stagger-item font-normal">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button
                  size="lg"
                  className="btn-secondary btn-lg"
                >
                  {t('cta.bookShow')}
                </Button>
              </Link>
              <a href="https://wa.me/4540852728" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="btn-secondary btn-lg stagger-item"
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
