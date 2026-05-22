'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { VideoSchema } from '@/components/video-schema';
import { Users, Sparkles, Zap } from 'lucide-react';
import Link from 'next/link';

export default function CorporateEventsPage() {
  const locale = useLocale();
  const t = useTranslations();
  
  const videoUrl = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/videoplayback%20%281%29-Q1D2bD05QCGGjQE987CDIoehLKbY9v.mp4';
  const videoThumbnail = '/kenneth-stage-audience.png';

  return (
    <>
      <Header />
      <VideoSchema videoUrl={videoUrl} thumbnailUrl={videoThumbnail} videoId="corporate-video-schema" />
      <main className="min-h-screen">
        {/* Premium Hero Section - Corporate Events */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
          {/* Professional blue/teal gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 via-teal-900/5 to-cyan-950/5 z-0"></div>
          
          {/* Floating premium particles - professional, sophisticated */}
          <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
            <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-200/8 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute -bottom-1/3 -left-1/4 w-80 h-80 bg-teal-200/6 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-72 h-72 bg-cyan-200/5 rounded-full blur-3xl animate-drift-right" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-bold mb-6 text-foreground">
                  {locale === 'da' ? 'Firmaarrangementer' : 'Corporate Events'}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Professionel underholdning for firmaer og virksomhedsbegivenheder'
                    : 'Professional entertainment for companies and corporate gatherings'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'Premium underholdning til firmajulefester, konferencer, teambuilding og virksomhedsfester der skaber mindeværdige øjeblikke for medarbejdere'
                    : 'Premium entertainment for company Christmas parties, conferences, team building and corporate events that create memorable moments for employees'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                      {locale === 'da' ? 'Book Underholdning' : 'Book Entertainment'}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="border-2 border-blue-500 text-blue-600 hover:bg-blue-50 text-base font-semibold h-14 px-8 transition-all">
                      {locale === 'da' ? 'Ring: 40 85 27 28' : 'Call: 40 85 27 28'}
                    </Button>
                  </a>
                </div>
              </div>

              {/* Right: Cinematic Corporate Event Image */}
              <div className="relative group hidden lg:block">
                {/* Outer glow - professional theme */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 rounded-3xl opacity-0 group-hover:opacity-75 transition-all duration-700 blur-2xl group-hover:blur-3xl -z-20"></div>
                
                {/* Image container */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 border border-blue-200/30 group-hover:border-blue-200/60">
                  
                  {/* Cinematic overlays */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/20 via-transparent to-transparent z-20 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/30 via-transparent to-transparent z-20 pointer-events-none"></div>
                  
                  {/* Floating sparkles */}
                  <div className="absolute -top-1 right-8 text-3xl animate-twinkle z-30 pointer-events-none opacity-70">✨</div>
                  <div className="absolute -bottom-2 left-6 text-2xl animate-twinkle z-30 pointer-events-none opacity-60" style={{ animationDelay: '0.8s' }}>✨</div>
                  <div className="absolute top-1/3 -right-1 text-2xl animate-twinkle z-30 pointer-events-none opacity-50" style={{ animationDelay: '1.4s' }}>✨</div>

                  {/* Corporate Event Image */}
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Corporate%20Events-KnhDCGk5jvxPEFyCejsbutD5bqUwty.png"
                alt="Kenneth performing magic for business guests at corporate event with elegant lighting and professional atmosphere"
                className="w-full h-auto object-cover object-center"
              />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(37, 99, 235, 0.15), inset 0 0 100px rgba(14, 165, 233, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-blue-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Professionelt • Teambuilding • Underholdning' : 'Premium Professional • Team Building • Entertainment'}</p>
                  <div className="w-2 h-2 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Image */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto lg:hidden">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-500 rounded-3xl opacity-75 blur-2xl -z-20"></div>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl border border-blue-200/30">
              <img 
                src="/kenneth-stage-audience.png"
                alt="Kenneth performing magic at corporate event"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                {locale === 'da' ? 'Professionel Underholdning' : 'Professional Entertainment'}
              </h2>
              <p className="text-slate-700 mb-4 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'TrylleKenneth tilbyder professionel trylleunderholdning specielt designet til firmaarrangementer og virksomhedsfester.'
                  : 'TrylleKenneth offers professional magic entertainment specifically designed for corporate events and business gatherings.'
                }
              </p>
              <p className="text-slate-700 leading-relaxed font-medium">
                {locale === 'da'
                  ? 'Fra små møder til store konferencer - vi tilbyder fleksibel underholdning der passer til dit arrangement.'
                  : 'From small meetings to large conferences - we offer flexible entertainment that fits your event perfectly.'
                }
              </p>
            </div>
            <div className="space-y-4">
              {/* Professional Card */}
              <Card className="p-6 rounded-2xl border-2 border-blue-200/40 hover:border-blue-300/60 transition-all hover:shadow-lg hover:shadow-blue-200/40 magic-card-hover bg-gradient-to-br from-blue-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Zap className="text-blue-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Professionelt' : 'Professional'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Erfaren underholder der laver impressionerende optræden til virksomheder' : 'Experienced performer who creates impressive shows for companies'}</p>
                  </div>
                </div>
              </Card>

              {/* Flexible Card */}
              <Card className="p-6 rounded-2xl border-2 border-teal-200/40 hover:border-teal-300/60 transition-all hover:shadow-lg hover:shadow-teal-200/40 magic-card-hover bg-gradient-to-br from-teal-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Users className="text-teal-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Fleksibel' : 'Flexible'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Tilpasbar underholdning til forskellige arrangementtyper og størrelse' : 'Adaptable entertainment for different event types and sizes'}</p>
                  </div>
                </div>
              </Card>

              {/* Engaging Card */}
              <Card className="p-6 rounded-2xl border-2 border-cyan-200/40 hover:border-cyan-300/60 transition-all hover:shadow-lg hover:shadow-cyan-200/40 magic-card-hover bg-gradient-to-br from-cyan-50/50 to-white">
                <div className="flex items-start gap-3">
                  <Sparkles className="text-cyan-600 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold mb-1 text-slate-900">{locale === 'da' ? 'Engagerende' : 'Engaging'}</h3>
                    <p className="text-sm text-slate-700">{locale === 'da' ? 'Underholdning der engagerer og underholder dine medarbejdere og gæster' : 'Entertainment that engages and entertains your employees and guests'}</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section - Premium */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-blue-600/95 via-teal-500/95 to-cyan-600/95 relative overflow-hidden">
          {/* Professional background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">
              {locale === 'da' ? 'Underholdning der Inspirerer' : 'Entertainment That Inspires'}
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til dit firmaarrangement og skab uforglemmelig underholdning for dine medarbejdere'
                : 'Book TrylleKenneth for your corporate event and create unforgettable entertainment for your employees'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 text-base font-semibold h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300">
                  {locale === 'da' ? 'Book Underholdning' : 'Book Entertainment'}
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
