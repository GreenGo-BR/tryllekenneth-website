'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { Heart, Sparkles, Users } from 'lucide-react';
import Link from 'next/link';

export default function WeddingPage() {
  const locale = useLocale();
  const t = useTranslations();
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/kenneth-wedding-rainbow.png';

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="wedding-video-schema" />
      <main className="min-h-screen">
        {/* Premium Hero Section - Weddings */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
          {/* Romantic rose/gold gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-rose-900/5 via-pink-900/5 to-amber-950/5 z-0"></div>
          
          {/* Floating premium particles - romantic, elegant */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-rose-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-pink-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-amber-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
              {/* Left: Text Content */}
              <div className="lg:pr-8">
                <h1 className="text-5xl sm:text-6xl font-bold magical-heading magical-text mb-6 text-foreground">
                  {locale === 'da' ? 'Bryllupper' : 'Weddings'}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Premium trylleri til dit specielle bryllupssejr'
                    : 'Premium magic for your special wedding day'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Elegant og romantisk underholdning med nærmagi til bryllupsfester, receptioner og festkvelder der gør dagen uforglemmelig'
                    : 'Elegant and romantic entertainment with close-up magic for wedding celebrations, receptions and evening parties that make the day unforgettable'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-sm">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="btn-primary btn-lg px-5">
                      {locale === 'da' ? 'Book Bryllupstrylleri' : 'Book Wedding Magic'}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="btn-primary btn-lg pl-2 pr-5">
                      {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Wedding Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - romantic theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-500 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container - moderate width constraint for premium breathing room */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-rose-200/30 group-hover:border-rose-200/60 lg:max-w-sm">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Wedding Image */}
                  <img 
                    src="/kenneth-wedding-rainbow.png"
                    alt="Kenneth performing magic at wedding reception"
                    className="w-full h-auto object-cover object-top"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(217, 70, 108, 0.15), inset 0 0 100px rgba(236, 72, 153, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-rose-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Romantisk • Elegant • Bryllup' : 'Premium Romantic • Elegant • Wedding'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-amber-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-rose-500 via-pink-400 to-amber-500 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-rose-200/30">
              <img 
                src="/kenneth-wedding-rainbow.png"
                alt="Kenneth performing magic at wedding reception"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground magical-heading magical-text">
                {locale === 'da' ? 'Romantisk Underholdning' : 'Romantic Entertainment'}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'TrylleKenneth tilbyder elegant og romantisk trylleunderholdning specielt designet til bryllupsfester og receptioner.'
                  : 'TrylleKenneth offers elegant and romantic magic entertainment specifically designed for wedding celebrations and receptions.'
                }
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'Nærmagi som mingler med dine gæster skaber magiske øjeblikke og skaber taler og grin der gør dagen helt speciel.'
                  : 'Close-up magic that mingles with your guests creates magical moments and sparks conversations that make the day truly special.'
                }
              </p>
            </div>
            <div className="space-y-4">
              {/* Romantic Card */}
              <Card className="p-6 rounded-2xl border-2 border-rose-200/40 hover:border-rose-300/60 transition-all hover:shadow-lg hover:shadow-rose-200/40 magic-card-hover bg-gradient-to-br from-rose-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Heart className="text-rose-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Romantisk' : 'Romantic'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Elegant og intime tryllernumre der passer til bryllupsfeste stemning' : 'Elegant and intimate magic acts that fit the wedding celebration atmosphere'}</p>
                  </div>
                </div>
              </Card>

              {/* Intimate Card */}
              <Card className="p-6 rounded-2xl border-2 border-pink-200/40 hover:border-pink-300/60 transition-all hover:shadow-lg hover:shadow-pink-200/40 magic-card-hover bg-gradient-to-br from-pink-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Users className="text-pink-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Intime Øjeblikke' : 'Intimate Moments'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Nærmagi der skaber mindeværdige øjeblikke med dine gæster' : 'Close-up magic that creates memorable moments with your guests'}</p>
                  </div>
                </div>
              </Card>

              {/* Memorable Card */}
              <Card className="p-6 rounded-2xl border-2 border-amber-200/40 hover:border-amber-300/60 transition-all hover:shadow-lg hover:shadow-amber-200/40 magic-card-hover bg-gradient-to-br from-amber-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-amber-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Uforglemmelig' : 'Unforgettable'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Trylleri der gør din bryllupsbindelse helt magisk og speciel' : 'Magic that makes your wedding day completely magical and special'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-rose-600 via-pink-500 to-amber-600 relative overflow-hidden">
          {/* Romantic background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-rose-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {locale === 'da' ? 'Magisk Bryllupsbilling' : 'Magical Wedding Day'}
            </h2>
            <p className="text-lg text-slate-900 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til din bryllupsfest og skab magiske øjeblikke der varer hele livet'
                : 'Book TrylleKenneth for your wedding reception and create magical moments that last a lifetime'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {locale === 'da' ? 'Book Bryllupstrylleri' : 'Book Wedding Magic'}
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
        <div className="h-16 bg-gradient-to-b from-rose-50/50 via-slate-50/30 to-slate-50 pointer-events-none"></div>

        <Footer />
      </main>
    </>
  );
}
