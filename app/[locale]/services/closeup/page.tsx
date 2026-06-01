'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { Coins, Wand2, Hand } from 'lucide-react';
import Link from 'next/link';

export default function CloseupMagic() {
  const locale = useLocale();
  const t = useTranslations();
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/kenneth-closeup-cards.jpg';
  
  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="closeup-video-schema" />
      <main className="min-h-screen">
        {/* Premium Hero Section - Close-up Magic */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          {/* Elegant indigo/purple gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/5 via-purple-900/5 to-indigo-950/5 z-0"></div>
          
          {/* Floating premium particles */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-indigo-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-purple-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-indigo-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="relative z-20">
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground magical-heading magical-text">
                  {locale === 'da' ? 'Close-up magi' : 'Close-up Magic'}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Interaktiv magi der finder sted lige foran dine øjne.'
                    : 'Interactive magic that happens right before your eyes'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Close-up magi med hverdagssting, spillekort, pengesedler og mønter mm.\nVelegnet til voksenfester, firmafester og runde fødselsdage mm.'
                    : 'Premium close-up magic with cards, coins and everyday objects for private parties, corporate events and special occasions'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="btn-primary btn-lg">
                      {locale === 'da' ? 'Book Close-up magi' : 'Book Close-up Magic'}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="btn-primary btn-lg">
                      {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Close-up Magic Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - indigo/purple theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-500 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-indigo-200/30 group-hover:border-indigo-200/60">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Close-up Magic Image */}
                  <img 
                    src="/kenneth-closeup-cards.jpg"
                    alt="Kenneth performing close-up card magic"
                    className="w-full h-auto object-cover"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(99, 102, 241, 0.15), inset 0 0 100px rgba(129, 140, 248, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-indigo-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Close-up magi • Interaktiv • Intimate' : 'Premium Close-up • Interactive • Intimate'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image - Shown on smaller screens */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-500 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-indigo-200/30">
              <img 
                src="/kenneth-closeup-cards.jpg"
                alt="Kenneth performing close-up card magic"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground magical-heading magical-text">
                {t('closeUpMagicPage.about')}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'Close-up magi med tryllekunstner TrylleKenneth. Her foregår magien helt under næsen på dig. Her bliver du virkelig inddraget i magiens verden. Her bliver der tryllet med bolde, spillekort, pengesedler og mønter. Ved denne form for trylleri sker magien hurtige end øjet da fingerfærdigheden er i højsædet.'
                  : t('closeUpMagicPage.aboutText1')
                }
              </p>
            </div>
            <div className="space-y-4">
              {/* Card Tricks */}
              <Card className="p-6 rounded-2xl border-2 border-indigo-200/40 hover:border-indigo-300/60 transition-all hover:shadow-lg hover:shadow-indigo-200/40 magic-card-hover bg-gradient-to-br from-indigo-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Coins className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{t('closeUpMagicPage.cardsTitle')}</h3>
                    <p className="text-sm text-slate-700">{t('closeUpMagicPage.cardsText')}</p>
                  </div>
                </div>
              </Card>

              {/* Coin Magic */}
              <Card className="p-6 rounded-2xl border-2 border-purple-200/40 hover:border-purple-300/60 transition-all hover:shadow-lg hover:shadow-purple-200/40 magic-card-hover bg-gradient-to-br from-purple-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Wand2 className="text-purple-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{t('closeUpMagicPage.coinsTitle')}</h3>
                    <p className="text-sm text-slate-700">{t('closeUpMagicPage.coinsText')}</p>
                  </div>
                </div>
              </Card>

              {/* Object Magic */}
              <Card className="p-6 rounded-2xl border-2 border-blue-200/40 hover:border-blue-300/60 transition-all hover:shadow-lg hover:shadow-blue-200/40 magic-card-hover bg-gradient-to-br from-blue-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Hand className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{t('closeUpMagicPage.objectsTitle')}</h3>
                    <p className="text-sm text-slate-700">{t('closeUpMagicPage.objectsText')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-indigo-600 via-purple-500 to-blue-600 relative overflow-hidden">
          {/* Festive background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-indigo-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {locale === 'da' ? 'Close-up magi der Imponerer' : 'Close-up Magic That Impresses'}
            </h2>
            <p className="text-lg text-slate-900 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til close-up magi og skab intime magiske øjeblikke for dine gæster'
                : 'Book TrylleKenneth for close-up magic and create intimate magical moments for your guests'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {locale === 'da' ? 'Book Close-up magi' : 'Book Close-up Magic'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="btn-secondary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                </Button>
              </a>
            </div>
            
            {/* Removed trust badges - kept only in footer */}
          </div>
        </section>

        {/* Subtle transition gradient before footer */}
        <div className="h-16 bg-gradient-to-b from-indigo-50/50 via-slate-50/30 to-slate-50 pointer-events-none"></div>

        <Footer />
      </main>
    </>
  );
}
