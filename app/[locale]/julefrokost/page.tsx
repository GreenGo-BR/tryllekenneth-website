'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { Gift, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

export default function ChristmasPartyPage() {
  const locale = useLocale();
  const t = useTranslations();
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/kenneth-christmas-fireplace.png';

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="christmas-video-schema" />
      <main className="min-h-screen">
        {/* Premium Hero Section - Christmas Party */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          {/* Festive red/gold gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/5 via-amber-900/5 to-red-950/5 z-0"></div>
          
          {/* Floating premium particles - festive, warm */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-red-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-amber-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-orange-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 via-red-500 to-amber-500 bg-clip-text text-transparent">
                  {locale === 'da' ? 'Julefrokoster' : 'Christmas Party'}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Premium juletrylleri til dine julefester'
                    : 'Premium Christmas magic for your holiday celebrations'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Magisk underholdning til firmajulefester, private julefester og familiesammenkomster der fylder hjertet af julegløde'
                    : 'Magic entertainment for corporate Christmas parties, private celebrations and family gatherings filled with Christmas spirit'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                      {locale === 'da' ? 'Book Juletrylleri' : 'Book Christmas Magic'}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="border-2 border-red-500 text-red-600 hover:bg-red-50 text-base font-semibold h-14 px-8 transition-all">
                      {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Christmas Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - festive theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-400 to-orange-500 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-amber-200/30 group-hover:border-amber-200/60">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Christmas Image */}
                  <img 
                    src="/kenneth-christmas-fireplace.png"
                    alt="Kenneth performing magic at Christmas party"
                    className="w-full h-auto object-cover"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(220, 38, 38, 0.15), inset 0 0 100px rgba(217, 119, 6, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-red-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-red-500 to-amber-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Jule • Festlig • Trylleri' : 'Premium Christmas • Festive • Magic'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-amber-400 to-orange-500 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-amber-200/30">
              <img 
                src="/kenneth-christmas-fireplace.png"
                alt="Kenneth performing magic at Christmas party"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-red-600 to-amber-600 bg-clip-text text-transparent">
                {locale === 'da' ? 'Julens Magiske Underholdning' : 'Christmas Magic Entertainment'}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'TrylleKenneth tilbyder festlig og magisk juleunderholdning specielt designet til julefester og familiesammenkomster.'
                  : 'TrylleKenneth offers festive and magical Christmas entertainment specifically designed for holiday celebrations and family gatherings.'
                }
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'Fra intime familijulefrokoster til store firmaarrangementer - vi skaber julegløde og trylleminder der varer hele året.'
                  : 'From intimate family celebrations to large corporate events - we create Christmas magic and magical memories that last all year.'
                }
              </p>
            </div>
            <div className="space-y-4">
              {/* Festive Card */}
              <Card className="p-6 rounded-2xl border-2 border-red-200/40 hover:border-red-300/60 transition-all hover:shadow-lg hover:shadow-red-200/40 magic-card-hover bg-gradient-to-br from-red-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Gift className="text-red-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Festlig' : 'Festive'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Juletrylleri der skaber julegløde og familiesammenhold' : 'Christmas magic that creates holiday spirit and family togetherness'}</p>
                  </div>
                </div>
              </Card>

              {/* Interactive Card */}
              <Card className="p-6 rounded-2xl border-2 border-amber-200/40 hover:border-amber-300/60 transition-all hover:shadow-lg hover:shadow-amber-200/40 magic-card-hover bg-gradient-to-br from-amber-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Users className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Interaktiv' : 'Interactive'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Trylleri med gæstedeltagelse og sjov for hele familien' : 'Magic with guest participation and fun for the whole family'}</p>
                  </div>
                </div>
              </Card>

              {/* Magical Card */}
              <Card className="p-6 rounded-2xl border-2 border-orange-200/40 hover:border-orange-300/60 transition-all hover:shadow-lg hover:shadow-orange-200/40 magic-card-hover bg-gradient-to-br from-orange-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-orange-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Magisk' : 'Magical'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Trylleri der fylder julen med undrer og magi' : 'Magic that fills Christmas with wonder and amazement'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-red-600/95 via-red-500/95 to-orange-600/95 relative overflow-hidden">
          {/* Festive background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {locale === 'da' ? 'Gør Din Jule Magisk' : 'Make Your Christmas Magical'}
            </h2>
            <p className="text-lg text-red-100 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til din julefest og skab uforglemmelig underholdning for hele familien'
                : 'Book TrylleKenneth for your Christmas celebration and create unforgettable entertainment for the whole family'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-red-600 hover:bg-amber-50 text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {locale === 'da' ? 'Book Juletrylleri' : 'Book Christmas Magic'}
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
