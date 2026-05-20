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
    // Generate minimal, elegant stars for premium cinematic feel (reduced from 12 to 8)
    const newStars = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
    }));
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
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-16 pb-20 sm:pt-24">
          {/* Background Image with Enhanced Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2019%2C%202026%2C%2011_34_15%20AM-uFrLxqdtG9SkMxgcePQK2lG9ViKb3p.png"
              alt="Hero background - Kenneth magic show with family"
              loading="lazy"
              className="w-full h-full object-cover opacity-40"
            />
            {/* Elegant gradient overlay - stronger on bottom for text visibility */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/60 via-background/40 to-primary/25 mix-blend-multiply"></div>
            {/* Additional soft overlay for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/20"></div>
          </div>

          {/* Gradient Orbs Background - Reduced for elegant restraint */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/2 -left-1/4 w-80 h-80 bg-secondary/8 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            
            {/* Centered Radial Glow - Kenneth spotlight effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl pointer-events-none"
              style={{
                background: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.08) 30%, transparent 70%)',
                animation: 'float-slow 6s ease-in-out infinite'
              }}>
            </div>
          </div>

          {/* Animated Stars - Enhanced */}
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute rounded-full bg-primary hero-sparkle pointer-events-none"
              style={{
                left: `${star.left}%`,
                top: `${star.top}%`,
                width: `${Math.random() * 4 + 3}px`,
                height: `${Math.random() * 4 + 3}px`,
                animation: `hero-sparkle ${Math.random() * 2.5 + 2}s cubic-bezier(0.36, 0, 0.66, 1) ${star.delay}s infinite`,
              }}
            />
          ))}

          {/* Floating Playing Cards - Premium Larger Design */}
          {cards.map((card) => {
            const suits = ['♠', '♥', '♦', '♣'];
            const values = ['A', 'K', 'Q', 'J', '10', '9', '8', '7', '6', '5', '4', '3', '2'];
            const suit = suits[card.id % 4];
            const value = values[card.id % values.length];
            const isRed = suit === '♥' || suit === '♦';
            
            return (
              <div
                key={`card-${card.id}`}
                className="absolute rounded-lg pointer-events-none"
                style={{
                  left: `${card.left}%`,
                  top: `${card.top}%`,
                  '--rotation': `${card.rotation}deg`,
                  '--tx': `${(Math.random() - 0.5) * 40}px`,
                  width: '75px',
                  height: '105px',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f5f6f7 100%)',
                  border: '2px solid #1a1a1a',
                  borderRadius: '8px',
                  boxShadow: '0 16px 32px rgba(0, 0, 0, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.95)',
                  animation: `float-card 8s cubic-bezier(0.42, 0, 0.58, 1) ${card.delay}s infinite`,
                  transformStyle: 'preserve-3d',
                } as any}
              >
                {/* Card Corner Value and Suit - Top Left */}
                <div className="absolute top-1.5 left-1.5 text-center leading-none">
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: isRed ? '#e74c3c' : '#000' }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '12px', color: isRed ? '#e74c3c' : '#000' }}>
                    {suit}
                  </div>
                </div>
                
                {/* Central Suit Symbol - Large */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div style={{ fontSize: '36px', color: isRed ? '#e74c3c' : '#000', opacity: 0.95 }}>
                    {suit}
                  </div>
                </div>
                
                {/* Card Corner Value and Suit - Bottom Right (Rotated) */}
                <div className="absolute bottom-1.5 right-1.5 text-center leading-none transform rotate-180">
                  <div style={{ fontSize: '10px', fontWeight: 'bold', color: isRed ? '#e74c3c' : '#000' }}>
                    {value}
                  </div>
                  <div style={{ fontSize: '12px', color: isRed ? '#e74c3c' : '#000' }}>
                    {suit}
                  </div>
                </div>

                {/* Premium shine effect */}
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/50 via-transparent to-transparent opacity-40 pointer-events-none"></div>
              </div>
            );
          })}

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center">
              {/* Badge - More subtle */}
              <div className="mb-4 inline-block animate-float-slow">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 border border-primary/30 text-secondary-foreground font-medium text-xs sm:text-sm">
                  <Wand2 size={14} className="text-primary animate-spin" style={{ animationDuration: '3s' }} />
                  <span>✨ {locale === 'da' ? 'TrylleKenneth' : 'TrylleKenneth'}</span>
                </span>
              </div>

              {/* Main Title - Improved contrast and sizing */}
              <div className="mb-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent leading-tight text-balance">
                  {t('hero.title')}
                </h1>
              </div>

              {/* Subtitle with better legibility */}
              <p className="text-sm sm:text-base lg:text-lg text-foreground/85 mb-6 text-pretty max-w-2xl mx-auto leading-relaxed">
                {t('hero.subtitle')}
              </p>

              {/* CTA Buttons - Optimized spacing */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 justify-center mb-8">
                <Link href={`/${locale}/contact`}>
                  <Button
                    size="lg"
                    className="magic-button w-full sm:w-auto bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white text-sm font-semibold h-11 sm:h-12 px-6 sm:px-7 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                  >
                    {t('hero.cta1')}
                  </Button>
                </Link>
                <a href="tel:+4540852728" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="magic-button w-full sm:w-auto text-sm font-semibold h-11 sm:h-12 px-6 sm:px-7 border-2 border-secondary bg-transparent text-secondary-foreground hover:bg-secondary/10 transition-all"
                  >
                    {t('hero.cta2')}
                  </Button>
                </a>
              </div>

              {/* Trust Indicators - More subtle */}
              <div className="pt-4 border-t border-primary/10">
                <p className="text-xs text-muted-foreground font-medium">
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
                videoId="featured-video"
                autoPlay={false}
                muted={true}
                loop={true}
                playsInline={true}
                preload="none"
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

        {/* Services Section - Cleaner Design */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {t('services.title')}
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Children's Magic - Warm playful elegance */}
            <Card className="premium-service-card group rounded-2xl overflow-hidden border border-primary/30 bg-gradient-to-br from-primary/8 to-primary/3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative p-6 h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/80 via-accent/60 to-transparent"></div>
                <div className="mb-4 inline-flex p-3.5 rounded-xl bg-primary/15 group-hover:bg-primary/25 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Star className="text-primary/90" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t('services.childrensMagic.title')}</h3>
                <p className="text-muted-foreground mb-5 flex-grow text-sm leading-relaxed">{t('services.childrensMagic.description')}</p>
                <Link href={`/${locale}/services/childrens`} className="inline-block px-4 py-2 rounded-lg bg-primary/15 text-primary font-semibold text-sm hover:bg-primary/30 hover:shadow-lg transition-all duration-300">
                  {t('services.readMore')} →
                </Link>
              </div>
            </Card>

            {/* Stand-up Magic - Theatrical elegance */}
            <Card className="premium-service-card group rounded-2xl overflow-hidden border border-orange-400/30 bg-gradient-to-br from-orange-500/8 to-orange-500/3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative p-6 h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400/80 via-amber-400/60 to-transparent"></div>
                <div className="mb-4 inline-flex p-3.5 rounded-xl bg-orange-500/15 group-hover:bg-orange-500/25 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Music className="text-orange-600/90" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t('services.standUpMagic.title')}</h3>
                <p className="text-muted-foreground mb-5 flex-grow text-sm leading-relaxed">{t('services.standUpMagic.description')}</p>
                <Link href={`/${locale}/services/standup`} className="inline-block px-4 py-2 rounded-lg bg-orange-500/15 text-orange-700 font-semibold text-sm hover:bg-orange-500/30 hover:shadow-lg transition-all duration-300">
                  {t('services.readMore')} →
                </Link>
              </div>
            </Card>

            {/* Close-up Magic - Mysterious elegance */}
            <Card className="premium-service-card group rounded-2xl overflow-hidden border border-purple-400/30 bg-gradient-to-br from-purple-600/8 to-purple-600/3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative p-6 h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-400/80 via-indigo-400/60 to-transparent"></div>
                <div className="mb-4 inline-flex p-3.5 rounded-xl bg-purple-600/15 group-hover:bg-purple-600/25 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Sparkles className="text-purple-700/90" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t('services.closeUpMagic.title')}</h3>
                <p className="text-muted-foreground mb-5 flex-grow text-sm leading-relaxed">{t('services.closeUpMagic.description')}</p>
                <Link href={`/${locale}/services/closeup`} className="inline-block px-4 py-2 rounded-lg bg-purple-600/15 text-purple-800 font-semibold text-sm hover:bg-purple-600/30 hover:shadow-lg transition-all duration-300">
                  {t('services.readMore')} →
                </Link>
              </div>
            </Card>

            {/* Santa Claus - Warm emotional elegance */}
            <Card className="premium-service-card group rounded-2xl overflow-hidden border border-red-400/30 bg-gradient-to-br from-red-500/8 to-red-500/3 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative p-6 h-full flex flex-col">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-500/80 via-red-400/60 to-transparent"></div>
                <div className="mb-4 inline-flex p-3.5 rounded-xl bg-red-500/15 group-hover:bg-red-500/25 transition-all duration-300 group-hover:scale-110 shadow-md">
                  <Heart className="text-red-700/90" size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground">{t('services.santa.title')}</h3>
                <p className="text-muted-foreground mb-5 flex-grow text-sm leading-relaxed">{t('services.santa.description')}</p>
                <Link href={`/${locale}/services/santa`} className="inline-block px-4 py-2 rounded-lg bg-red-500/15 text-red-800 font-semibold text-sm hover:bg-red-500/30 hover:shadow-lg transition-all duration-300">
                  {t('services.readMore')} →
                </Link>
              </div>
            </Card>
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
