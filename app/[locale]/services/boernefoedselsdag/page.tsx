'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { Cake, Smile, Heart } from 'lucide-react';
import Link from 'next/link';

export default function BirthdayPartiesPage() {
  const locale = useLocale();
  const t = useTranslations();
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/TrylleKenneth%20show-BcdHB40bje44mvtgNoULMLWdckbAzj.mp4';
  const videoThumbnail = '/kenneth-family-garden.png';

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="birthday-video-schema" />
      <main className="min-h-screen">
        {/* Premium Hero Section - Birthday Parties */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
          {/* Playful pink/purple gradient background */}
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
                  {locale === 'da' ? 'Børnefødselsdage' : "Birthday Parties"}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Magisk underholdning der gør børnefødselsdagen uforglemmelig'
                    : "Magical entertainment that makes birthday parties unforgettable"
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Premium trylleri til børnefødselsdage med interaktion, sjov og magiske øjeblikke som børnene husker hele livet'
                    : "Premium magic for children's birthday parties with interaction, fun and magical moments kids will remember forever"
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="btn-primary btn-lg">
                      {locale === 'da' ? 'Book Fødselsdagstrylleri' : "Book Birthday Magic"}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="btn-primary btn-lg">
                      {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Birthday Party Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - playful pink/purple theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-pink-200/30 group-hover:border-pink-200/60">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles and birthday elements */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">🎉</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>🎂</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Birthday Party Image */}
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Birthday%20Parties-AP2pTUOWbTJj2mJfSMwXqEU3Jf4TDO.png"
                    alt="Kenneth performing magic at children's birthday party with balloons and decorations"
                    className="w-full h-auto object-cover object-center lg:object-center"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(236, 72, 153, 0.15), inset 0 0 100px rgba(168, 85, 247, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-pink-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Børnetrylleri • Sjov • Uforglemmelig' : 'Premium Children\'s Magic • Fun • Unforgettable'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-sky-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image - Shown on smaller screens */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-pink-200/30">
              <img 
                src="/kenneth-family-garden.png"
                alt="Kenneth performing magic at children's birthday party"
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground">
                {locale === 'da' ? 'Uforglemmelig Fødselsdagstrylleri' : 'Unforgettable Birthday Magic'}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'TrylleKenneth specialiserer sig i højtideholder børnefødselsdage med professionel og engagerende tryllekunst der fascinerer alle børn.'
                  : "TrylleKenneth specializes in making children's birthday parties memorable with professional and engaging magic entertainment that fascinates all children."
                }
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'Fra intim familiefest til større børneselskaber - vi tilbyder fleksibel underholdning der passer til ethvert budget og arrangement.'
                  : 'From intimate family celebrations to larger children\'s parties - we offer flexible entertainment that fits any budget and occasion.'
                }
              </p>
            </div>
            <div className="space-y-4">
              {/* Engagement Card */}
              <Card className="p-6 rounded-2xl border-2 border-pink-200/40 hover:border-pink-300/60 transition-all hover:shadow-lg hover:shadow-pink-200/40 magic-card-hover bg-gradient-to-br from-pink-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Smile className="text-pink-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Engagering' : 'Engaging'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Børnene bliver helt opslugt af magien og har det rigtig sjovt' : "Children are completely captivated by the magic and have a blast"}</p>
                  </div>
                </div>
              </Card>

              {/* Customizable Card */}
              <Card className="p-6 rounded-2xl border-2 border-purple-200/40 hover:border-purple-300/60 transition-all hover:shadow-lg hover:shadow-purple-200/40 magic-card-hover bg-gradient-to-br from-purple-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Cake className="text-purple-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Tilpasset' : 'Customizable'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Trylleri der er perfekt tilpasset børnenes alder og ønsker' : 'Magic tailored perfectly to the children\'s age and preferences'}</p>
                  </div>
                </div>
              </Card>

              {/* Memorable Card */}
              <Card className="p-6 rounded-2xl border-2 border-sky-200/40 hover:border-sky-300/60 transition-all hover:shadow-lg hover:shadow-sky-200/40 magic-card-hover bg-gradient-to-br from-sky-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Heart className="text-sky-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Mindeværdigt' : 'Memorable'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Magiske øjeblikke som børnene husker hele livet' : 'Magical moments that kids remember for a lifetime'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 relative overflow-hidden">
          {/* Playful background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-pink-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {locale === 'da' ? 'Gør Fødselsdagen Magisk' : 'Make the Birthday Magical'}
            </h2>
            <p className="text-lg text-gray-800 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til børnefødselsdagen og skab mindeværdige øjeblikke der varer længere end kagen'
                : 'Book TrylleKenneth for your child\'s birthday and create memorable moments that last longer than the cake'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary btn-lg w-56">
                  {locale === 'da' ? 'Book Fødselsdagstrylleri' : "Book Birthday Magic"}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="btn-secondary w-56">
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
