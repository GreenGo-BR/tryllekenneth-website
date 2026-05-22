'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Smile, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function ChildrensMagic() {
  const locale = useLocale();
  const t = useTranslations();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Premium Hero Section - Children's Magic */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          {/* Pastel gradient background - friendly, playful */}
          <div className="absolute inset-0 bg-gradient-to-br from-pink-900/5 via-purple-900/5 to-sky-900/5 z-0"></div>
          
          {/* Floating premium particles - soft, playful */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-pink-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-purple-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-sky-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                  {locale === 'da' ? 'Børnetrylleri' : "Children's Magic"}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Magisk underholdning der får børnene til at smile'
                    : 'Magical entertainment that makes children smile'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Premium børnetrylleri til fødselsdage, private fester og familiebegivenheder med interaktion og sjov'
                    : "Premium children's magic for birthday parties, private events and family gatherings with interaction and fun"
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                      {locale === 'da' ? 'Book Børnetrylleri' : "Book Children's Magic"}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="border-2 border-pink-500 text-pink-600 hover:bg-pink-50 text-base font-semibold h-14 px-8 transition-all">
                      {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Children's Magic Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - pastel theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-pink-200/30 group-hover:border-pink-200/60">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Children's Magic Image */}
                  <img 
                    src="/kenneth-family-garden.png"
                    alt="Kenneth performing magic for children and families"
                    className="w-full h-auto object-cover object-top"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(236, 72, 153, 0.15), inset 0 0 100px rgba(168, 85, 247, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-pink-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Børnevenlig • Sjovt • Magisk' : 'Child-Friendly • Fun • Magical'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-pink-200/30">
              <img 
                src="/kenneth-family-garden.png"
                alt="Kenneth performing magic for children and families"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {locale === 'da' ? 'Om Børnetrylleri' : "About Children's Magic"}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'Børnetrylleri er en fantastisk måde at skabe magiske minder for børn. Med tricks der fascinerer og underholdning der glæder.'
                  : 'Children\'s magic is a wonderful way to create magical memories for kids. With tricks that fascinate and entertainment that delights.'
                }
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'TrylleKenneth har erfaring med børn i alle aldre og laver trylleri der er både sikker og sjov.'
                  : 'TrylleKenneth has experience with children of all ages and performs magic that is both safe and fun.'
                }
              </p>
            </div>
            <div className="space-y-4">
              {/* Fun & Laughter Card */}
              <Card className="p-6 rounded-2xl border-2 border-pink-200/40 hover:border-pink-300/60 transition-all hover:shadow-lg hover:shadow-pink-200/40 magic-card-hover bg-gradient-to-br from-pink-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Smile className="text-pink-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Sjov og Latter' : 'Fun & Laughter'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Børn elsker trylleri, og Kenneth skaber sjovt og grin til alle fester' : 'Kids love magic, and Kenneth creates fun and laughter for all parties'}</p>
                  </div>
                </div>
              </Card>

              {/* Interactive Card */}
              <Card className="p-6 rounded-2xl border-2 border-purple-200/40 hover:border-purple-300/60 transition-all hover:shadow-lg hover:shadow-purple-200/40 magic-card-hover bg-gradient-to-br from-purple-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Heart className="text-purple-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Interaktiv' : 'Interactive'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Børnene bliver del af trylleriet med interaktive tricks og deltagelse' : 'Children become part of the magic with interactive tricks and participation'}</p>
                  </div>
                </div>
              </Card>

              {/* Safe & Professional Card */}
              <Card className="p-6 rounded-2xl border-2 border-sky-200/40 hover:border-sky-300/60 transition-all hover:shadow-lg hover:shadow-sky-200/40 magic-card-hover bg-gradient-to-br from-sky-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-sky-500 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Tryg & Professionel' : 'Safe & Professional'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Alt trylleri er sikkert, alderssvarende og udført af erfaren professionel' : 'All magic is safe, age-appropriate, and performed by an experienced professional'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-600/95 via-purple-500/95 to-sky-600/95 relative overflow-hidden">
          {/* Playful background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {locale === 'da' ? 'Magiske Børneminder' : 'Magical Childhood Memories'}
            </h2>
            <p className="text-lg text-pink-100 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til børnetrylleri og skab uforglemmelige øjeblikke for børnene'
                : 'Book TrylleKenneth for children\'s magic and create unforgettable moments for the kids'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50 text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {locale === 'da' ? 'Book Børnetrylleri' : "Book Children's Magic"}
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
