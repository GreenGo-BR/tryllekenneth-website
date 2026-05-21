'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Zap, Users } from 'lucide-react';
import { VideoSchema } from '@/components/video-schema';
import Link from 'next/link';

export default function StandUpMagic() {
  const locale = useLocale();
  const t = useTranslations();
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/kenneth-stage-audience.png';
  
  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="standup-video-schema" />
      <main className="min-h-screen">
        {/* Premium Hero Section - Stand-up Magic */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          {/* Dynamic rainbow gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/5 via-amber-900/5 to-rose-950/5 z-0"></div>
          
          {/* Floating premium particles - warm, energetic */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-orange-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-amber-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-rose-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600 bg-clip-text text-transparent">
                  {locale === 'da' ? 'Standup Trylleri' : 'Stand-up Magic'}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Højenergisk underholdning for store publikummer'
                    : 'High-energy entertainment for large audiences'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Premium standup trylleri med stort apareat, rekvisitter og publikumsinteraktion til store arrangementer og teateropvisninger'
                    : 'Premium stand-up magic with large apparatus, props and audience interaction for major events and theater performances'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                      {locale === 'da' ? 'Book Standup Trylleri' : 'Book Stand-up Magic'}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="border-2 border-orange-500 text-orange-600 hover:bg-orange-50 text-base font-semibold h-14 px-8 transition-all">
                      {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Stage Magic Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - warm/energetic theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-400 to-rose-500 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-amber-200/30 group-hover:border-amber-200/60">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Stand-up Magic Image */}
                  <img 
                    src="/kenneth-stage-audience.png"
                    alt="Kenneth performing stand-up magic on stage"
                    className="w-full h-auto object-cover"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(217, 119, 6, 0.15), inset 0 0 100px rgba(239, 68, 68, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-orange-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Standup • Højenergisk • Scene Trylleri' : 'Premium Stand-up • High-Energy • Stage Magic'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image - Shown on smaller screens */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-amber-400 to-rose-500 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-amber-200/30">
              <img 
                src="/kenneth-stage-audience.png"
                alt="Kenneth performing stand-up magic on stage"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                {t('standUpMagicPage.about')}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {t('standUpMagicPage.aboutText1')}
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {t('standUpMagicPage.aboutText2')}
              </p>
            </div>
            <div className="space-y-4">
              {/* High-Energy Performance */}
              <Card className="p-6 rounded-2xl border-2 border-orange-200/40 hover:border-orange-300/60 transition-all hover:shadow-lg hover:shadow-orange-200/40 magic-card-hover bg-gradient-to-br from-orange-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Zap className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Højenergisk' : 'High-Energy'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Levende optræden med stor energi og publikumsengagement' : 'Vibrant performance with high energy and audience engagement'}</p>
                  </div>
                </div>
              </Card>

              {/* Stage Effects */}
              <Card className="p-6 rounded-2xl border-2 border-amber-200/40 hover:border-amber-300/60 transition-all hover:shadow-lg hover:shadow-amber-200/40 magic-card-hover bg-gradient-to-br from-amber-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Scene Effekter' : 'Stage Effects'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Spektakulær trylleri med stort apareat og lyseffekter' : 'Spectacular magic with large apparatus and lighting effects'}</p>
                  </div>
                </div>
              </Card>

              {/* Audience Interaction */}
              <Card className="p-6 rounded-2xl border-2 border-rose-200/40 hover:border-rose-300/60 transition-all hover:shadow-lg hover:shadow-rose-200/40 magic-card-hover bg-gradient-to-br from-rose-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Users className="text-rose-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Publikumsinteraktion' : 'Audience Interaction'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Engagering underholdning med publikumdeltagelse' : 'Engaging entertainment with audience participation'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-orange-600/95 via-amber-500/95 to-rose-600/95 relative overflow-hidden">
          {/* Energetic background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {locale === 'da' ? 'Standup Trylleri Som Imponerer' : 'Stand-up Magic That Impresses'}
            </h2>
            <p className="text-lg text-orange-100 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til standup trylleri og skab spektakulære øjeblikke for dit publikum'
                : 'Book TrylleKenneth for stand-up magic and create spectacular moments for your audience'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-orange-600 hover:bg-amber-50 text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {locale === 'da' ? 'Book Standup Trylleri' : 'Book Stand-up Magic'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="border-2 border-white text-white hover:bg-white/10 text-base font-semibold h-14 px-8 transition-all duration-300">
                  {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

export default function StandUpMagic() {
  const locale = useLocale();
  const t = useTranslations();
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/kenneth-hero-original.png';
  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="standup-video-schema" />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              {t('standUpMagicPage.title')}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {t('standUpMagicPage.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white text-base font-semibold h-14 px-8">
                {t('standUpMagicPage.bookButton')}
              </Button>
            </Link>
          </div>
        </section>

        {/* Service Description */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">{t('standUpMagicPage.about')}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t('standUpMagicPage.aboutText1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('standUpMagicPage.aboutText2')}
              </p>
            </div>
            <div className="space-y-4">
              <Card className="p-6 border-2 border-accent/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Zap className="text-accent mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('standUpMagicPage.professionalTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('standUpMagicPage.professionalText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-primary/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Users className="text-primary mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('standUpMagicPage.humorTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('standUpMagicPage.humorText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border-2 border-secondary/20 magic-card-hover">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-secondary-foreground mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1">{t('standUpMagicPage.respectTitle')}</h3>
                    <p className="text-sm text-muted-foreground">{t('standUpMagicPage.respectText')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">{t('standUpMagicPage.adaptTitle')}</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 rounded-2xl border-2 border-accent/20 hover:border-accent/50 transition-all magic-card-hover">
                <h3 className="text-xl font-bold mb-3">{t('standUpMagicPage.cardsTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('standUpMagicPage.cardsText')}
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all magic-card-hover">
                <h3 className="text-xl font-bold mb-3">{t('standUpMagicPage.coinsTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('standUpMagicPage.coinsText')}
                </p>
              </Card>
              <Card className="p-6 rounded-2xl border-2 border-secondary/20 hover:border-secondary/50 transition-all magic-card-hover">
                <h3 className="text-xl font-bold mb-3">{t('standUpMagicPage.objectsTitle')}</h3>
                <p className="text-muted-foreground">
                  {t('standUpMagicPage.objectsText')}
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Performance Gallery - Clean Cinematic Layout */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">{locale === 'da' ? 'Stand-up Trylleri på Scenen' : 'Stage Performances'}</h2>
            <p className="text-lg text-muted-foreground max-w-3xl">{locale === 'da' ? 'Spektakulær stand-up trylleri fyldt med dramatik, humor og forundring der fascinerer publikum' : 'Spectacular stand-up magic filled with drama, humor and stunning illusions that captivate audiences'}</p>
          </div>

          {/* Featured Large Image - Full Width */}
          <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 mb-12 bg-background">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <img
                src="/kenneth-hero-original.png"
                alt={locale === 'da' ? 'Kenneth optræder med stand-up trylleri på scenen' : 'Kenneth performing stand-up comedy magic on stage'}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Clean 2-Column Grid - Image and Video */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Image 1 */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-background">
              <div className="relative w-full" style={{ aspectRatio: '4/3' }}>
                <img
                  src="/kenneth-stage-audience.png"
                  alt={locale === 'da' ? 'Kenneth med publikum under stand-up trylleri' : 'Kenneth performing stand-up with audience engagement'}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Premium Live Performance Video */}
            <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
              <ProductionVideo
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4"
                poster="/kenneth-hero-original.png"
                autoPlay={true}
                muted={true}
                loop={true}
                containerClassName="w-full rounded-2xl overflow-hidden"
                aspectRatio="4/3"
                lazy={true}
                videoId="standup-performance-video"
              />
            </div>
          </div>

          {/* Final Wide Image */}
          <div className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 bg-background">
            <div className="relative w-full" style={{ aspectRatio: '16/9' }}>
              <img
                src="/kenneth-stage-rubiks-cube.png"
                alt={locale === 'da' ? 'Kenneth optræder med stor stand-up trylleri performance' : 'Kenneth performing spectacular stage magic'}
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-accent/10 via-primary/10 to-secondary/10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              {locale === 'da' ? 'Klar til uforglemmelig magi?' : 'Ready for Unforgettable Magic?'}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {locale === 'da'
                ? 'Book TrylleKenneth til dit næste voksenarrangement eller fest'
                : 'Book TrylleKenneth for your next adult event or party'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-gradient-to-r from-accent to-primary hover:opacity-90 text-white magic-button">
                  {locale === 'da' ? 'Book nu' : 'Book Now'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" variant="outline" className="border-2 magic-button">
                  {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                </Button>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
