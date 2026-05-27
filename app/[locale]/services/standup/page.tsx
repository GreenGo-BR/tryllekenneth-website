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

          <div className="max-w-6xl mx-auto relative z-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left: Text Content */}
              <div className="relative z-20">
                <h1 className="text-5xl sm:text-6xl font-bold magical-heading magical-text mb-6 text-foreground">
                  {locale === 'da' ? 'Stand-up Trylleri' : 'Stand-up Magic'}
                </h1>
                <p className="text-xl text-slate-700 mb-4 leading-relaxed font-semibold">
                  {locale === 'da' 
                    ? 'Sjovt trylleri til din voksenfest'
                    : 'Fun magic for your adult party'
                  }
                </p>
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {locale === 'da'
                    ? 'TrylleKenneth underholder i topklasse til firmafesten, den runde fødselsdag, brylluppet eller til enhver anden festlig lejlighed.'
                    : 'TrylleKenneth entertains at top class at the company party, the milestone birthday, the wedding or any other festive occasion.'
                  }
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href={`/${locale}/contact`}>
                    <Button size="lg" className="btn-primary btn-lg">
                      {locale === 'da' ? 'Book Stand-up Trylleri' : 'Book Stand-up Magic'}
                    </Button>
                  </Link>
                  <a href="tel:+4540852728">
                    <Button size="lg" className="btn-secondary btn-lg">
                      {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
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
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Stand-up%20Magic-iGoHqm2jyrPd5G4urajOpYSHlzcpnd.png"
                    alt="Kenneth performing stand-up magic on stage with fire effect and audience interaction"
                    className="w-full h-auto object-cover object-center lg:object-center-top"
                  />

                  {/* Magical glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" style={{
                    boxShadow: 'inset 0 0 60px rgba(217, 119, 6, 0.15), inset 0 0 100px rgba(239, 68, 68, 0.08)'
                  }}></div>
                </div>

                {/* Premium badge below image */}
                <div className="mt-6 flex items-center justify-center gap-2 text-orange-700 font-semibold">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full animate-pulse"></div>
                  <p className="text-sm">{locale === 'da' ? 'Premium Stand-up • Højenergisk • Scene Trylleri' : 'Premium Stand-up • High-Energy • Stage Magic'}</p>
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
                className="w-full h-auto object-cover object-top"
              />
            </div>
          </div>
        </section>

        {/* Premium About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-foreground magical-heading magical-text">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-gradient-to-r from-orange-600 via-amber-500 to-rose-600 relative overflow-hidden">
          {/* Energetic background shimmer */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-amber-200 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              {locale === 'da' ? 'Stand-up Trylleri Som Imponerer' : 'Stand-up Magic That Impresses'}
            </h2>
            <p className="text-lg text-slate-900 mb-8 leading-relaxed">
              {locale === 'da'
                ? 'Book TrylleKenneth til stand-up trylleri og skab spektakulære øjeblikke for dit publikum'
                : 'Book TrylleKenneth for stand-up magic and create spectacular moments for your audience'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`/${locale}/contact`}>
                <Button size="lg" className="btn-primary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {locale === 'da' ? 'Book Stand-up Trylleri' : 'Book Stand-up Magic'}
                </Button>
              </Link>
              <a href="tel:+4540852728">
                <Button size="lg" className="btn-secondary w-[276px] h-[52px] sm:w-full sm:max-w-[320px] flex items-center justify-center text-base font-semibold rounded-lg">
                  {locale === 'da' ? 'Ring: +45 40 85 27 28' : 'Call: +45 40 85 27 28'}
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Subtle transition gradient before footer */}
        <div className="h-16 bg-gradient-to-b from-orange-50/50 via-slate-50/30 to-slate-50 pointer-events-none"></div>

        <Footer />
      </main>
    </>
  );
}
