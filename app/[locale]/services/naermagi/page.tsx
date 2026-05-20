'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductionVideo } from '@/components/ProductionVideo';
import { VideoSchema } from '@/components/video-schema';
import { Coins, Wand2, Hand } from 'lucide-react';
import Link from 'next/link';

export default function CloseupMagic() {
  const locale = useLocale();
  const t = useTranslations();
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13-270qN2OP2gez2uC7jEvcEzAJNz5r0O.jpeg';
  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="naermagi-video-schema" />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Premium Hero Section - Sophisticated Close-up Magic */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Elegant background particles - subtle, mysterious */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-transparent rounded-full blur-3xl animate-float"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-tl from-purple-200/20 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <h1 className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('closeUpMagicPage.title')}
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl">
              {t('closeUpMagicPage.subtitle')}
            </p>
            <Link href={`/${locale}/contact`}>
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white text-base font-semibold h-14 px-8">
                {t('closeUpMagicPage.bookButton')}
              </Button>
            </Link>
          </div>
        </section>

        {/* Premium Featured Video Section - Cinematic Experience */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{t('closeUpMagicPage.about')}</h2>
            <p className="text-slate-600">{t('closeUpMagicPage.aboutText1')}</p>
          </div>

          {/* Premium Video Container */}
          <div className="group relative">
            {/* Outer glow effect - purple/blue theme */}
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-400 via-purple-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-xl group-hover:blur-2xl -z-20"></div>
            
            {/* Video card with elegant styling */}
            <div className="relative overflow-hidden rounded-3xl border border-indigo-200/40 group-hover:border-indigo-300/60 transition-all duration-500 shadow-2xl group-hover:shadow-3xl bg-gradient-to-br from-slate-900 via-slate-950 to-black">
              
              {/* Cinematic top overlay */}
              <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/50 via-black/20 to-transparent z-20 pointer-events-none"></div>
              
              {/* Cinematic bottom overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent z-20 pointer-events-none"></div>
              
              {/* Floating sparkles - reduced for elegance, only 2 */}
              <div className="absolute -top-2 right-20 text-3xl animate-twinkle z-30 pointer-events-none opacity-90">✨</div>
              <div className="absolute -bottom-1 left-16 text-2xl animate-twinkle z-30 pointer-events-none opacity-80" style={{ animationDelay: '1s' }}>✨</div>

              {/* Video Element - Production Grade */}
              <ProductionVideo
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrylleKenneth%20Close-up-G9bBfYukuP3t82YylZW3gZILIbCkJo.mp4"
                poster="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-19%20at%2010.48.13%20%281%29-A5bNILaPPqzkKWoS1Is5CAZBKHfmRZ.jpeg"
                autoPlay={false}
                muted={true}
                loop={true}
                playsInline={true}
                preload="metadata"
                lazy={true}
                aspectRatio="16/9"
                containerClassName="rounded-3xl overflow-hidden"
              />

              {/* Mysterious glow effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                boxShadow: 'inset 0 0 50px rgba(99, 102, 241, 0.15), inset 0 0 100px rgba(129, 140, 248, 0.08)'
              }}></div>
            </div>

            {/* Video Info Badge */}
            <div className="mt-6 flex items-center justify-center gap-3 text-slate-600">
              <div className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse"></div>
              <p className="text-sm font-medium">{t('closeUpMagicPage.about')} • HD Kvalitet • Live Nærmagi</p>
              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </section>

        {/* Service Description - Refined */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">{t('closeUpMagicPage.about')}</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                {t('closeUpMagicPage.aboutText1')}
              </p>
              <p className="text-slate-600 leading-relaxed">
                {t('closeUpMagicPage.aboutText2')}
              </p>
            </div>
            <div className="space-y-4">
              {/* Premium Feature Cards - Elegant floating effect */}
              <Card className="p-6 border border-indigo-200/40 hover:border-indigo-300/60 transition-all duration-500 magic-card-hover bg-gradient-to-br from-indigo-50/50 to-white shadow-lg hover:shadow-xl hover:shadow-indigo-200/50">
                <div className="flex items-start gap-3">
                  <Coins className="text-indigo-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{t('closeUpMagicPage.cardsTitle')}</h3>
                    <p className="text-sm text-slate-600">{t('closeUpMagicPage.cardsText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border border-purple-200/40 hover:border-purple-300/60 transition-all duration-500 magic-card-hover bg-gradient-to-br from-purple-50/50 to-white shadow-lg hover:shadow-xl hover:shadow-purple-200/50">
                <div className="flex items-start gap-3">
                  <Wand2 className="text-purple-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{t('closeUpMagicPage.coinsTitle')}</h3>
                    <p className="text-sm text-slate-600">{t('closeUpMagicPage.coinsText')}</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 border border-blue-200/40 hover:border-blue-300/60 transition-all duration-500 magic-card-hover bg-gradient-to-br from-blue-50/50 to-white shadow-lg hover:shadow-xl hover:shadow-blue-200/50">
                <div className="flex items-start gap-3">
                  <Hand className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{t('closeUpMagicPage.objectsTitle')}</h3>
                    <p className="text-sm text-slate-600">{t('closeUpMagicPage.objectsText')}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Consistent with other pages */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
          <div className="rounded-3xl bg-gradient-to-br from-indigo-50/60 via-white to-purple-50/40 border border-indigo-200/30 p-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              {t('cta.title')}
            </h2>
            <p className="text-base text-foreground/70 mb-6 max-w-2xl mx-auto">
              {t('cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:opacity-90 text-white font-semibold h-12 px-6 shadow-lg transition">
                  {t('closeUpMagicPage.bookButton')}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold h-12 px-6 transition">
                  {t('cta.callKenneth')}
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
