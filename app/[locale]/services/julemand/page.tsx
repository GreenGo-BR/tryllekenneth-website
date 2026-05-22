'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Gift, Snowflake, Sparkles, Star } from 'lucide-react';
import Link from 'next/link';

export default function SantaMagic() {
  const locale = useLocale();
  const t = useTranslations();
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Premium Hero Section - Christmas Magical Atmosphere */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          {/* Warm Christmas background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-amber-900/5 to-red-950/5 z-0"></div>
          
          {/* Floating warm particles */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-amber-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-red-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-orange-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                  {t('santaPage.title')}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {t('santaPage.about')}
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {t('santaPage.aboutText1')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                      {t('santaPage.bookButton')}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="border-2 border-red-500 text-red-600 hover:bg-red-50 text-base font-semibold h-14 px-8 transition-all">
                      {t('cta.callKenneth')}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Santa Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - warm festive colors */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-400 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-amber-200/30 group-hover:border-amber-200/60">
                  
                  {/* Warm cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Festive floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Santa Image */}
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Santa-Kenet-yC7cYbg9z832pK13IivVM2m7C4mFOE.png"
                    alt="Santa Claus - Kenneth's magical Christmas character"
                    className="w-full h-auto object-cover"
                  />

                  {/* Magical warm glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(217, 119, 6, 0.15), inset 0 0 100px rgba(239, 68, 68, 0.08)'
                  }}></div>
                </div>

                {/* Festive badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-amber-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-amber-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">Autentisk Julemand • Magi • Julegløde</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Santa Image - Shown on smaller screens */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-400 to-orange-500 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-amber-200/30">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Santa-Kenet-yC7cYbg9z832pK13IivVM2m7C4mFOE.png"
                alt="Santa Claus - Kenneth's magical Christmas character"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section - Christmas Magic */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {t('santaPage.about')}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {t('santaPage.aboutText1')}
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {t('santaPage.aboutText2')}
              </p>
            </div>
            <div className="space-y-4">
              {/* Christmas Events Card */}
              <Card className="p-6 rounded-2xl border-2 border-red-200/40 hover:border-red-300/60 transition-all hover:shadow-lg hover:shadow-red-200/40 magic-card-hover bg-gradient-to-br from-red-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Gift className="text-red-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{t('santaPage.christmasTitle')}</h3>
                    <p className="text-sm text-slate-700">{t('santaPage.christmasText')}</p>
                  </div>
                </div>
              </Card>

              {/* Family Celebrations Card */}
              <Card className="p-6 rounded-2xl border-2 border-amber-200/40 hover:border-amber-300/60 transition-all hover:shadow-lg hover:shadow-amber-200/40 magic-card-hover bg-gradient-to-br from-amber-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">Familiesamlinger</h3>
                    <p className="text-sm text-slate-700">Skab magiske øjeblikke med kære til uforglemmelige juleminder</p>
                  </div>
                </div>
              </Card>

              {/* Corporate Holiday Card */}
              <Card className="p-6 rounded-2xl border-2 border-orange-200/40 hover:border-orange-300/60 transition-all hover:shadow-lg hover:shadow-orange-200/40 magic-card-hover bg-gradient-to-br from-orange-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Snowflake className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">Virksomhedsjulefester</h3>
                    <p className="text-sm text-slate-700">Professionel underholdning der øger julestemningen på arbejdspladsen</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Premium Christmas Services */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-red-50/30 via-white to-orange-50/20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
              Julemandsoplevelser
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Santa Christmas Card */}
              <Card className="p-8 rounded-2xl border-2 border-red-200/40 hover:border-red-300/60 hover:shadow-xl hover:shadow-red-200/40 transition-all magic-card-hover bg-gradient-to-br from-red-50 to-white hover:translate-y-[-4px]">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Gift className="text-red-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-slate-900">
                  Julemand ved Besøg
                </h3>
                <p className="text-slate-700 text-center leading-relaxed">
                  Autentisk julemand med magi, sange og gaver til børn i alle aldre
                </p>
              </Card>

              {/* Family Celebrations Card */}
              <Card className="p-8 rounded-2xl border-2 border-amber-200/40 hover:border-amber-300/60 hover:shadow-xl hover:shadow-amber-200/40 transition-all magic-card-hover bg-gradient-to-br from-amber-50 to-white hover:translate-y-[-4px]">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-amber-100 rounded-full">
                    <Sparkles className="text-amber-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-slate-900">
                  Familiejulefrokoster
                </h3>
                <p className="text-slate-700 text-center leading-relaxed">
                  Julemagi til familiefester med aktiviteter og underholdning
                </p>
              </Card>

              {/* Corporate Events Card */}
              <Card className="p-8 rounded-2xl border-2 border-orange-200/40 hover:border-orange-300/60 hover:shadow-xl hover:shadow-orange-200/40 transition-all magic-card-hover bg-gradient-to-br from-orange-50 to-white hover:translate-y-[-4px]">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <Snowflake className="text-orange-600" size={24} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-center text-slate-900">
                  Virksomhedsjulefester
                </h3>
                <p className="text-slate-700 text-center leading-relaxed">
                  Professionel julemand til firmafester og virksomhedsarrangementer
                </p>
              </Card>
            </div>

            {/* Experience Badges */}
            <div className="mt-12 flex flex-wrap gap-3 justify-center">
              <div className="px-4 py-2 bg-red-100 border border-red-300 rounded-full text-sm font-semibold text-red-700">
                🎄 Juleaften
              </div>
              <div className="px-4 py-2 bg-amber-100 border border-amber-300 rounded-full text-sm font-semibold text-amber-700">
                🎅 Autentisk Julemand
              </div>
              <div className="px-4 py-2 bg-orange-100 border border-orange-300 rounded-full text-sm font-semibold text-orange-700">
                ✨ Familievenlig Magi
              </div>
              <div className="px-4 py-2 bg-red-100 border border-red-300 rounded-full text-sm font-semibold text-red-700">
                🎁 Gaver & Aktiviteter
              </div>
            </div>
          </div>
        </section>

        {/* Premium CTA Section - Christmas Magic */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-red-600 via-red-500 to-orange-600 relative overflow-hidden">
          {/* Festive background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Gør Din Jul Magisk
            </h2>
            <p className="text-lg text-red-100 mb-8 leading-relaxed">
              Book TrylleKenneth som julemand og skab uforglemmelige juleoplevelser for børn og familie
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-red-600 hover:bg-amber-50 text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {t('santaPage.bookButton')}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="cta-secondary text-base h-14 px-8">
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
